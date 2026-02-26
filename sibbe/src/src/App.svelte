<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import proj4 from 'proj4';
  import { register } from 'ol/proj/proj4.js';
  import { AmbientLight, DirectionalLight } from 'three';
  import { MapControls } from 'three/examples/jsm/controls/MapControls.js';

  import CoordinateSystem from '@giro3d/giro3d/core/geographic/CoordinateSystem.js';
  import Extent from '@giro3d/giro3d/core/geographic/Extent.js';
  import Instance from '@giro3d/giro3d/core/Instance.js';
  import ColorLayer from '@giro3d/giro3d/core/layer/ColorLayer.js';
  import ElevationLayer from '@giro3d/giro3d/core/layer/ElevationLayer.js';
  import Map from '@giro3d/giro3d/entities/Map.js';
  import Inspector from '@giro3d/giro3d/gui/Inspector.js';
  import GeoTIFFSource from '@giro3d/giro3d/sources/GeoTIFFSource.js';
  import WmtsSource from '@giro3d/giro3d/sources/WmtsSource.js';

  // EPSG:28992 (Amersfoort / RD New) – horizontale component van EPSG:7415
  const EPSG_28992_DEF =
    '+proj=sterea +lat_0=52.15616055555555 +lon_0=5.38763888888889 +k=0.9999079 +x_0=155000 +y_0=463000 +ellps=bessel +towgs84=565.2369,50.0087,465.658,-0.406857330322,-0.350732676542,1.870347383606,-4.0812 +units=m +no_defs +type=crs';

  const PDOK_WMTS =
    'https://service.pdok.nl/brt/achtergrondkaart/wmts/v2_0?SERVICE=WMTS&REQUEST=GetCapabilities';

  const TERRAIN_COG =
    'https://fsn1.your-objectstorage.com/hwh-ahn/AHN5_KM/02a_DTM_50cm/AHN5_M_185000_317000.TIF';

  // Sibbe centerpunt in RD New
  const SIBBE_X = 185528.9;
  const SIBBE_Y = 317414.0;

  let instance: Instance | null = null;

  onMount(() => {
    proj4.defs('EPSG:28992', EPSG_28992_DEF);
    register(proj4);

    const CRS = CoordinateSystem.register('EPSG:28992', EPSG_28992_DEF);

    // Extent rondom Sibbe (~3km breed)
    const extent = new Extent(CRS, 184000, 187000, 316000, 319000);

    instance = new Instance({
      target: 'view',
      crs: CRS,
      backgroundColor: 0x87ceeb,
    });

    // Map
    const map = new Map({ extent });
    instance.add(map).catch(console.error);

    // Basemap: PDOK BRT Achtergrondkaart (WMTS)
    WmtsSource.fromCapabilities(PDOK_WMTS, {
      layer: 'standaard',
      matrixSet: 'EPSG:28992',
      imageFormat: 'image/png',
    })
      .then((wmtsSource) => {
        const colorLayer = new ColorLayer({
          name: 'pdok-brt',
          extent,
          source: wmtsSource,
        });
        return map.addLayer(colorLayer);
      })
      .catch((e) => console.error('WMTS fout:', e));

    // Terrain: AHN5 COG (hoogte in NAP / EPSG:5709)
    const terrainSource = new GeoTIFFSource({
      url: TERRAIN_COG,
      crs: 'EPSG:28992',
    });

    const elevationLayer = new ElevationLayer({
      name: 'ahn5-terrain',
      extent,
      source: terrainSource,
    });

    map.addLayer(elevationLayer).catch((e) => console.error('Terrain fout:', e));

    // Belichting
    const sun = new DirectionalLight(0xffffff, 1.4);
    sun.position.set(1, 0, 1).normalize();
    instance.scene.add(sun);

    const sun2 = new DirectionalLight(0xffffff, 0.5);
    sun2.position.set(0, -1, 1).normalize();
    instance.scene.add(sun2);

    instance.scene.add(new AmbientLight(0xffffff, 1));
    instance.view.minNearPlane = 0.5;

    // Camera controls
    const controls = new MapControls(instance.view.camera, instance.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.maxPolarAngle = Math.PI / 2.2;
    instance.view.setControls(controls);

    // Camera inzoomen op Sibbe
    instance.view.camera.position.set(SIBBE_X - 500, SIBBE_Y - 1500, 800);
    controls.target.set(SIBBE_X, SIBBE_Y, 0);
    controls.update();

    Inspector.attach('inspector', instance);
  });

  onDestroy(() => {
    instance?.dispose();
  });
</script>

<div id="view"></div>
<div id="inspector"></div>
