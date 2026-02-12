import "./style.css";

import proj4 from "proj4";
import { register } from "ol/proj/proj4.js";
import { AmbientLight, DirectionalLight } from "three";
import { MapControls } from "three/examples/jsm/controls/MapControls.js";

import CoordinateSystem from "@giro3d/giro3d/core/geographic/CoordinateSystem.js";
import Extent from "@giro3d/giro3d/core/geographic/Extent.js";
import Instance from "@giro3d/giro3d/core/Instance.js";
import ColorLayer from "@giro3d/giro3d/core/layer/ColorLayer.js";
import Map from "@giro3d/giro3d/entities/Map.js";
import Tiles3D from "@giro3d/giro3d/entities/Tiles3D.js";
import Inspector from "@giro3d/giro3d/gui/Inspector.js";
import WmtsSource from "@giro3d/giro3d/sources/WmtsSource.js";

const TILESET_URL = "./data/tileset.json";

// EPSG:28992 (Amersfoort / RD New)
const EPSG_28992_DEF =
  "+proj=sterea +lat_0=52.15616055555555 +lon_0=5.38763888888889 +k=0.9999079 +x_0=155000 +y_0=463000 +ellps=bessel +towgs84=565.2369,50.0087,465.658,-0.406857330322,-0.350732676542,1.870347383606,-4.0812 +units=m +no_defs +type=crs";

proj4.defs("EPSG:28992", EPSG_28992_DEF);
register(proj4);

const CRS = CoordinateSystem.register("EPSG:28992", EPSG_28992_DEF);

// Extent around Amsterdam in EPSG:28992 (fallback until we have a tileset bbox)
const extent = new Extent(CRS, 110000, 140000, 475000, 505000);

const instance = new Instance({
  target: "view",
  crs: CRS,
  backgroundColor: 0x0a3b59,
});

// Map + PDOK BRT Achtergrondkaart (WMTS raster tiles in EPSG:28992)
const map = new Map({ extent });
instance.add(map).catch(console.error);

const PDOK_WMTS_CAPABILITIES =
  "https://service.pdok.nl/brt/achtergrondkaart/wmts/v2_0?SERVICE=WMTS&REQUEST=GetCapabilities";

WmtsSource.fromCapabilities(PDOK_WMTS_CAPABILITIES, {
  layer: "standaard",
  matrixSet: "EPSG:28992",
  imageFormat: "image/png",
})
  .then((wmtsSource) => {
    const pdokLayer = new ColorLayer({
      name: "pdok-brt",
      extent,
      source: wmtsSource,
    });

    return map.addLayer(pdokLayer);
  })
  .catch((e) => console.error("Failed to init PDOK WMTS", e));

// Lighting (helps a lot for 3D tiles)
const sun = new DirectionalLight(0xffffff, 1.4);
sun.position.set(1, 0, 1).normalize();
instance.scene.add(sun);

const sun2 = new DirectionalLight(0xffffff, 0.5);
sun2.position.set(0, -1, 1).normalize();
instance.scene.add(sun2);

instance.scene.add(new AmbientLight(0xffffff, 1));
instance.view.minNearPlane = 0.5;

// Controls
const controls = new MapControls(instance.view.camera, instance.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.maxPolarAngle = Math.PI / 2.2;
instance.view.setControls(controls);

// A reasonable initial camera (will be replaced once the tileset bbox is available)
const center = extent.centerAsVector3();
instance.view.camera.position.set(center.x - 10000, center.y - 10000, 10000);
controls.target.copy(center);

// 3D Tiles
const tileset = new Tiles3D({ url: TILESET_URL });

function initializeCameraFromTileset() {
  const bbox = tileset.getBoundingBox();

  // Tiles3D may briefly report an empty/invalid bbox; don't apply a broken camera.
  if (!bbox || bbox.isEmpty()) {
    instance.notifyChange(instance.view.camera);
    return;
  }

  const coords = [
    bbox.min.x,
    bbox.min.y,
    bbox.min.z,
    bbox.max.x,
    bbox.max.y,
    bbox.max.z,
  ];
  if (!coords.every(Number.isFinite)) {
    instance.notifyChange(instance.view.camera);
    return;
  }

  const pov = instance.view.goTo(tileset);
  if (pov) {
    controls.target.copy(pov.target);
    controls.update();
  }

  instance.notifyChange(instance.view.camera);
}

tileset.addEventListener("initialized", initializeCameraFromTileset);

instance
  .add(tileset)
  .then(initializeCameraFromTileset)
  .catch((e) => console.error("Failed to load tileset", e));

Inspector.attach("inspector", instance);
