(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const nn={UNKNOWN:0,INTERSECTING:1,ABOVE:2,RIGHT:4,BELOW:8,LEFT:16};function ml(n){const t=za();for(let e=0,i=n.length;e<i;++e)$o(t,n[e]);return t}function g_(n,t,e){const i=Math.min.apply(null,n),s=Math.min.apply(null,t),r=Math.max.apply(null,n),a=Math.max.apply(null,t);return Hl(i,s,r,a,e)}function Ym(n,t){return v_(n,t[0],t[1])}function __(n,t){return n[0]<=t[0]&&t[2]<=n[2]&&n[1]<=t[1]&&t[3]<=n[3]}function v_(n,t,e){return n[0]<=t&&t<=n[2]&&n[1]<=e&&e<=n[3]}function td(n,t){const e=n[0],i=n[1],s=n[2],r=n[3],a=t[0],o=t[1];let l=nn.UNKNOWN;return a<e?l=l|nn.LEFT:a>s&&(l=l|nn.RIGHT),o<i?l=l|nn.BELOW:o>r&&(l=l|nn.ABOVE),l===nn.UNKNOWN&&(l=nn.INTERSECTING),l}function za(){return[1/0,1/0,-1/0,-1/0]}function Hl(n,t,e,i,s){return s?(s[0]=n,s[1]=t,s[2]=e,s[3]=i,s):[n,t,e,i]}function qm(n){return Hl(1/0,1/0,-1/0,-1/0,n)}function x_(n,t){return t[0]<n[0]&&(n[0]=t[0]),t[2]>n[2]&&(n[2]=t[2]),t[1]<n[1]&&(n[1]=t[1]),t[3]>n[3]&&(n[3]=t[3]),n}function $o(n,t){t[0]<n[0]&&(n[0]=t[0]),t[0]>n[2]&&(n[2]=t[0]),t[1]<n[1]&&(n[1]=t[1]),t[1]>n[3]&&(n[3]=t[1])}function y_(n,t,e,i,s){for(;e<i;e+=s)M_(n,t[e],t[e+1]);return n}function M_(n,t,e){n[0]=Math.min(n[0],t),n[1]=Math.min(n[1],e),n[2]=Math.max(n[2],t),n[3]=Math.max(n[3],e)}function E_(n,t){let e;return e=t(Hu(n)),e||(e=t(Wu(n)),e)||(e=t(Xu(n)),e)||(e=t(ka(n)),e)?e:!1}function Ec(n){let t=0;return Zm(n)||(t=We(n)*gr(n)),t}function Hu(n){return[n[0],n[1]]}function Wu(n){return[n[2],n[1]]}function jm(n){return[(n[0]+n[2])/2,(n[1]+n[3])/2]}function S_(n,t){let e;if(t==="bottom-left")e=Hu(n);else if(t==="bottom-right")e=Wu(n);else if(t==="top-left")e=ka(n);else if(t==="top-right")e=Xu(n);else throw new Error("Invalid corner");return e}function gr(n){return n[3]-n[1]}function dh(n,t,e){const i=za();return Yu(n,t)?(n[0]>t[0]?i[0]=n[0]:i[0]=t[0],n[1]>t[1]?i[1]=n[1]:i[1]=t[1],n[2]<t[2]?i[2]=n[2]:i[2]=t[2],n[3]<t[3]?i[3]=n[3]:i[3]=t[3]):qm(i),i}function ka(n){return[n[0],n[3]]}function Xu(n){return[n[2],n[3]]}function We(n){return n[2]-n[0]}function Yu(n,t){return n[0]<=t[2]&&n[2]>=t[0]&&n[1]<=t[3]&&n[3]>=t[1]}function Zm(n){return n[2]<n[0]||n[3]<n[1]}function w_(n,t,e){let i=!1;const s=td(n,t),r=td(n,e);if(s===nn.INTERSECTING||r===nn.INTERSECTING)i=!0;else{const a=n[0],o=n[1],l=n[2],h=n[3],u=t[0],f=t[1],c=e[0],d=e[1],m=(d-f)/(c-u);let _,g;r&nn.ABOVE&&!(s&nn.ABOVE)&&(_=c-(d-h)/m,i=_>=a&&_<=l),!i&&r&nn.RIGHT&&!(s&nn.RIGHT)&&(g=d-(c-l)*m,i=g>=o&&g<=h),!i&&r&nn.BELOW&&!(s&nn.BELOW)&&(_=c-(d-o)/m,i=_>=a&&_<=l),!i&&r&nn.LEFT&&!(s&nn.LEFT)&&(g=d-(c-a)*m,i=g>=o&&g<=h)}return i}function T_(n,t,e,i){if(Zm(n))return qm(e);let s=[];s=[n[0],n[1],n[2],n[1],n[2],n[3],n[0],n[3]],t(s,s,2);const r=[],a=[];for(let o=0,l=s.length;o<l;o+=2)r.push(s[o]),a.push(s[o+1]);return g_(r,a,e)}function b_(n,t){const e=t.getExtent(),i=jm(n);if(t.canWrapX()&&(i[0]<e[0]||i[0]>=e[2])){const s=We(e),a=Math.floor((i[0]-e[0])/s)*s;n[0]-=a,n[2]-=a}return n}function A_(n,t,e){if(t.canWrapX()){const i=t.getExtent();if(!isFinite(n[0])||!isFinite(n[2]))return[[i[0],n[1],i[2],n[3]]];b_(n,t);const s=We(i);if(We(n)>s,n[0]<i[0])return[[n[0]+s,n[1],i[2],n[3]],[i[0],n[1],n[2],n[3]]];if(n[2]>i[2])return[[n[0],n[1],i[2],n[3]],[i[0],n[1],n[2]-s,n[3]]]}return[n]}function ba(n,t,e){return Math.min(Math.max(n,t),e)}function R_(n){const t=n.length;for(let i=0;i<t;i++){let s=i,r=Math.abs(n[i][i]);for(let o=i+1;o<t;o++){const l=Math.abs(n[o][i]);l>r&&(r=l,s=o)}if(r===0)return null;const a=n[s];n[s]=n[i],n[i]=a;for(let o=i+1;o<t;o++){const l=-n[o][i]/n[i][i];for(let h=i;h<t+1;h++)i==h?n[o][h]=0:n[o][h]+=l*n[i][h]}}const e=new Array(t);for(let i=t-1;i>=0;i--){e[i]=n[i][t]/n[i][i];for(let s=i-1;s>=0;s--)n[s][t]-=n[s][i]*e[i]}return e}function ed(n){return n*180/Math.PI}function Is(n){return n*Math.PI/180}function Ko(n,t){const e=n%t;return e*t<0?e+t:e}function $m(n,t){const e=Math.pow(10,t);return Math.round(n*e)/e}function ro(n,t){return Math.floor($m(n,t))}function ao(n,t){return Math.ceil($m(n,t))}function Sc(n,t,e){if(n>=t&&n<e)return n;const i=e-t;return((n-t)%i+i)%i+t}function C_(n,t,e){const i=t.getExtent();let s=0;return t.canWrapX()&&(n[0]<i[0]||n[0]>i[2])&&(e=e||We(i),s=Math.floor((n[0]-i[0])/e)),s}const Km={radians:6370997/(2*Math.PI),degrees:2*Math.PI*6370997/360,ft:.3048,m:1,"us-ft":1200/3937};let Wl=class{constructor(t){this.code_=t.code,this.units_=t.units,this.extent_=t.extent!==void 0?t.extent:null,this.worldExtent_=t.worldExtent!==void 0?t.worldExtent:null,this.axisOrientation_=t.axisOrientation!==void 0?t.axisOrientation:"enu",this.global_=t.global!==void 0?t.global:!1,this.canWrapX_=!!(this.global_&&this.extent_),this.getPointResolutionFunc_=t.getPointResolution,this.defaultTileGrid_=null,this.metersPerUnit_=t.metersPerUnit}canWrapX(){return this.canWrapX_}getCode(){return this.code_}getExtent(){return this.extent_}getUnits(){return this.units_}getMetersPerUnit(){return this.metersPerUnit_||Km[this.units_]}getWorldExtent(){return this.worldExtent_}getAxisOrientation(){return this.axisOrientation_}isGlobal(){return this.global_}setGlobal(t){this.global_=t,this.canWrapX_=!!(t&&this.extent_)}getDefaultTileGrid(){return this.defaultTileGrid_}setDefaultTileGrid(t){this.defaultTileGrid_=t}setExtent(t){this.extent_=t,this.canWrapX_=!!(this.global_&&t)}setWorldExtent(t){this.worldExtent_=t}setGetPointResolution(t){this.getPointResolutionFunc_=t}getPointResolutionFunc(){return this.getPointResolutionFunc_}};const Va=6378137,_r=Math.PI*Va,P_=[-_r,-_r,_r,_r],L_=[-180,-85,180,85],oo=Va*Math.log(Math.tan(Math.PI/2));class Ys extends Wl{constructor(t){super({code:t,units:"m",extent:P_,global:!0,worldExtent:L_,getPointResolution:function(e,i){return e/Math.cosh(i[1]/Va)}})}}const nd=[new Ys("EPSG:3857"),new Ys("EPSG:102100"),new Ys("EPSG:102113"),new Ys("EPSG:900913"),new Ys("http://www.opengis.net/def/crs/EPSG/0/3857"),new Ys("http://www.opengis.net/gml/srs/epsg.xml#3857")];function I_(n,t,e,i){const s=n.length;e=e>1?e:2,i=i??e,t===void 0&&(e>2?t=n.slice():t=new Array(s));for(let r=0;r<s;r+=i){t[r]=_r*n[r]/180;let a=Va*Math.log(Math.tan(Math.PI*(+n[r+1]+90)/360));a>oo?a=oo:a<-oo&&(a=-oo),t[r+1]=a}return t}function D_(n,t,e,i){const s=n.length;e=e>1?e:2,i=i??e,t===void 0&&(e>2?t=n.slice():t=new Array(s));for(let r=0;r<s;r+=i)t[r]=180*n[r]/_r,t[r+1]=360*Math.atan(Math.exp(n[r+1]/Va))/Math.PI-90;return t}const N_=6378137,id=[-180,-90,180,90],O_=Math.PI*N_/180;class fs extends Wl{constructor(t,e){super({code:t,units:"degrees",extent:id,axisOrientation:e,global:!0,metersPerUnit:O_,worldExtent:id})}}const sd=[new fs("CRS:84"),new fs("EPSG:4326","neu"),new fs("urn:ogc:def:crs:OGC:1.3:CRS84"),new fs("urn:ogc:def:crs:OGC:2:84"),new fs("http://www.opengis.net/def/crs/OGC/1.3/CRS84"),new fs("http://www.opengis.net/gml/srs/epsg.xml#4326","neu"),new fs("http://www.opengis.net/def/crs/EPSG/0/4326","neu")];let wc={};function Jo(n){return wc[n]||wc[n.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/,"EPSG:$3")]||null}function U_(n,t){wc[n]=t}function qu(n){for(const t in n)delete n[t]}function F_(n){let t;for(t in n)return!1;return!t}let Ar={};function Ns(n,t,e){const i=n.getCode(),s=t.getCode();i in Ar||(Ar[i]={}),Ar[i][s]=e}function Qo(n,t){return n in Ar&&t in Ar[n]?Ar[n][t]:null}const gl=.9996,Vn=.00669438,Xl=Vn*Vn,Yl=Xl*Vn,Rs=Vn/(1-Vn),rd=Math.sqrt(1-Vn),Dr=(1-rd)/(1+rd),Jm=Dr*Dr,ju=Jm*Dr,Zu=ju*Dr,Qm=Zu*Dr,tg=1-Vn/4-3*Xl/64-5*Yl/256,G_=3*Vn/8+3*Xl/32+45*Yl/1024,B_=15*Xl/256+45*Yl/1024,z_=35*Yl/3072,k_=3/2*Dr-27/32*ju+269/512*Qm,V_=21/16*Jm-55/32*Zu,H_=151/96*ju-417/128*Qm,W_=1097/512*Zu,_l=6378137;function X_(n,t,e){const i=n-5e5,a=(e.north?t:t-1e7)/gl/(_l*tg),o=a+k_*Math.sin(2*a)+V_*Math.sin(4*a)+H_*Math.sin(6*a)+W_*Math.sin(8*a),l=Math.sin(o),h=l*l,u=Math.cos(o),f=l/u,c=f*f,d=c*c,m=1-Vn*h,_=Math.sqrt(1-Vn*h),g=_l/_,p=(1-Vn)/m,y=Rs*u**2,x=y*y,v=i/(g*gl),T=v*v,b=T*v,R=b*v,L=R*v,S=L*v,E=o-f/p*(T/2-R/24*(5+3*c+10*y-4*x-9*Rs))+S/720*(61+90*c+298*y+45*d-252*Rs-3*x);let P=(v-b/6*(1+2*c+y)+L/120*(5-2*y+28*c-3*x+8*Rs+24*d))/u;return P=Sc(P+Is(eg(e.number)),-Math.PI,Math.PI),[ed(P),ed(E)]}const ad=-80,od=84,Y_=-180,q_=180;function j_(n,t,e){n=Sc(n,Y_,q_),t<ad?t=ad:t>od&&(t=od);const i=Is(t),s=Math.sin(i),r=Math.cos(i),a=s/r,o=a*a,l=o*o,h=Is(n),u=eg(e.number),f=Is(u),c=_l/Math.sqrt(1-Vn*s**2),d=Rs*r**2,m=r*Sc(h-f,-Math.PI,Math.PI),_=m*m,g=_*m,p=g*m,y=p*m,x=y*m,v=_l*(tg*i-G_*Math.sin(2*i)+B_*Math.sin(4*i)-z_*Math.sin(6*i)),T=gl*c*(m+g/6*(1-o+d)+y/120*(5-18*o+l+72*d-58*Rs))+5e5;let b=gl*(v+c*a*(_/2+p/24*(5-o+9*d+4*d**2)+x/720*(61-58*o+l+600*d-330*Rs)));return e.north||(b+=1e7),[T,b]}function eg(n){return(n-1)*6-180+3}const Z_=[/^EPSG:(\d+)$/,/^urn:ogc:def:crs:EPSG::(\d+)$/,/^http:\/\/www\.opengis\.net\/def\/crs\/EPSG\/0\/(\d+)$/];function ng(n){let t=0;for(const s of Z_){const r=n.match(s);if(r){t=parseInt(r[1]);break}}if(!t)return null;let e=0,i=!1;return t>32700&&t<32761?e=t-32700:t>32600&&t<32661&&(i=!0,e=t-32600),e?{number:e,north:i}:null}function ld(n,t){return function(e,i,s,r){const a=e.length;s=s>1?s:2,r=r??s,i||(s>2?i=e.slice():i=new Array(a));for(let o=0;o<a;o+=r){const l=e[o],h=e[o+1],u=n(l,h,t);i[o]=u[0],i[o+1]=u[1]}return i}}function $_(n){return ng(n)?new Wl({code:n,units:"m"}):null}function K_(n){const t=ng(n.getCode());return t?{forward:ld(j_,t),inverse:ld(X_,t)}:null}const J_=63710088e-1;function hd(n,t,e){e=e||J_;const i=Is(n[1]),s=Is(t[1]),r=(s-i)/2,a=Is(t[0]-n[0])/2,o=Math.sin(r)*Math.sin(r)+Math.sin(a)*Math.sin(a)*Math.cos(i)*Math.cos(s);return 2*e*Math.atan2(Math.sqrt(o),Math.sqrt(1-o))}const Q_=[K_],tv=[$_];function $u(n,t){if(t!==void 0){for(let e=0,i=n.length;e<i;++e)t[e]=n[e];t=t}else t=n.slice();return t}function vl(n){U_(n.getCode(),n),Ns(n,n,$u)}function ev(n){n.forEach(vl)}function He(n){if(typeof n!="string")return n;const t=Jo(n);if(t)return t;for(const e of tv){const i=e(n);if(i)return i}return null}function cd(n,t,e,i){n=He(n);let s;const r=n.getPointResolutionFunc();if(r)s=r(t,e);else{const a=n.getUnits();if(a=="degrees"&&!i||i=="degrees")s=t;else{const o=Ku(n,He("EPSG:4326"));if(!o&&a!=="degrees")s=t*n.getMetersPerUnit();else{let h=[e[0]-t/2,e[1],e[0]+t/2,e[1],e[0],e[1]-t/2,e[0],e[1]+t/2];h=o(h,h,2);const u=hd(h.slice(0,2),h.slice(2,4)),f=hd(h.slice(4,6),h.slice(6,8));s=(u+f)/2}const l=n.getMetersPerUnit();l!==void 0&&(s/=l)}}return s}function Tc(n){ev(n),n.forEach(function(t){n.forEach(function(e){t!==e&&Ns(t,e,$u)})})}function nv(n,t,e,i){n.forEach(function(s){t.forEach(function(r){Ns(s,r,e),Ns(r,s,i)})})}function bc(n){return(function(t,e,i,s){const r=t.length;i=i!==void 0?i:2,s=s??i,e=e!==void 0?e:new Array(r);for(let a=0;a<r;a+=s){const o=n(t.slice(a,a+i)),l=o.length;for(let h=0,u=s;h<u;++h)e[a+h]=h>=l?t[a+h]:o[h]}return e})}function iv(n,t,e,i){const s=He(n),r=He(t);Ns(s,r,bc(e)),Ns(r,s,bc(i))}function Rr(n,t){if(n===t)return!0;const e=n.getUnits()===t.getUnits();return(n.getCode()===t.getCode()||Ku(n,t)===$u)&&e}function Ku(n,t){const e=n.getCode(),i=t.getCode();let s=Qo(e,i);if(s)return s;let r=null,a=null;for(const l of Q_)r||(r=l(n)),a||(a=l(t));if(!r&&!a)return null;const o="EPSG:4326";if(a)if(r)s=ph(r.inverse,a.forward);else{const l=Qo(e,o);l&&(s=ph(l,a.forward))}else{const l=Qo(o,i);l&&(s=ph(r.inverse,l))}return s&&(vl(n),vl(t),Ns(n,t,s)),s}function ph(n,t){return function(e,i,s,r){return i=n(e,i,s,r),t(i,i,s,r)}}function Ju(n,t){const e=He(n),i=He(t);return Ku(e,i)}function ig(n,t,e){const i=Ju(t,e);if(!i){const s=He(t).getCode(),r=He(e).getCode();throw new Error(`No transform available between ${s} and ${r}`)}return i(n,void 0,n.length)}function sv(n,t,e,i){const s=Ju(t,e);return T_(n,s,void 0)}function ud(n,t,e){return function(i){let s,r;if(n.canWrapX()){const a=n.getExtent(),o=We(a);i=i.slice(0),r=C_(i,n,o),r&&(i[0]=i[0]-r*o),i[0]=ba(i[0],a[0],a[2]),i[1]=ba(i[1],a[1],a[3]),s=e(i)}else s=e(i);return r&&t.canWrapX()&&(s[0]+=r*We(t.getExtent())),s}}function rv(){Tc(nd),Tc(sd),nv(sd,nd,I_,D_)}rv();function sg(n){const t=Object.keys(n.defs),e=t.length;let i,s;for(i=0;i<e;++i){const r=t[i];if(!Jo(r)){const a=n.defs(r);let o=a.units;!o&&a.projName==="longlat"&&(o="degrees"),vl(new Wl({code:r,axisOrientation:a.axis,metersPerUnit:a.to_meter,units:o}))}}for(i=0;i<e;++i){const r=t[i],a=Jo(r);for(s=0;s<e;++s){const o=t[s],l=Jo(o);if(!Qo(r,o))if(n.defs[r]===n.defs[o])Tc([a,l]);else{const h=n(r,o);iv(a,l,ud(a,l,h.forward),ud(l,a,h.inverse))}}}}function av(n){n("EPSG:4326","+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees"),n("EPSG:4269","+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees"),n("EPSG:3857","+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs");for(var t=1;t<=60;++t)n("EPSG:"+(32600+t),"+proj=utm +zone="+t+" +datum=WGS84 +units=m"),n("EPSG:"+(32700+t),"+proj=utm +zone="+t+" +south +datum=WGS84 +units=m");n("EPSG:5041","+title=WGS 84 / UPS North (E,N) +proj=stere +lat_0=90 +lon_0=0 +k=0.994 +x_0=2000000 +y_0=2000000 +datum=WGS84 +units=m"),n("EPSG:5042","+title=WGS 84 / UPS South (E,N) +proj=stere +lat_0=-90 +lon_0=0 +k=0.994 +x_0=2000000 +y_0=2000000 +datum=WGS84 +units=m"),n.WGS84=n["EPSG:4326"],n["EPSG:3785"]=n["EPSG:3857"],n.GOOGLE=n["EPSG:3857"],n["EPSG:900913"]=n["EPSG:3857"],n["EPSG:102113"]=n["EPSG:3857"]}var Os=1,Us=2,Cr=3,ov=4,Ac=5,fd=6378137,lv=6356752314e-3,dd=.0066943799901413165,ma=484813681109536e-20,J=Math.PI/2,hv=.16666666666666666,cv=.04722222222222222,uv=.022156084656084655,st=1e-10,Le=.017453292519943295,wn=57.29577951308232,he=Math.PI/4,Aa=Math.PI*2,Ue=3.14159265359,An={};An.greenwich=0;An.lisbon=-9.131906111111;An.paris=2.337229166667;An.bogota=-74.080916666667;An.madrid=-3.687938888889;An.rome=12.452333333333;An.bern=7.439583333333;An.jakarta=106.807719444444;An.ferro=-17.666666666667;An.brussels=4.367975;An.stockholm=18.058277777778;An.athens=23.7163375;An.oslo=10.722916666667;const fv={mm:{to_meter:.001},cm:{to_meter:.01},ft:{to_meter:.3048},"us-ft":{to_meter:1200/3937},fath:{to_meter:1.8288},kmi:{to_meter:1852},"us-ch":{to_meter:20.1168402336805},"us-mi":{to_meter:1609.34721869444},km:{to_meter:1e3},"ind-ft":{to_meter:.30479841},"ind-yd":{to_meter:.91439523},mi:{to_meter:1609.344},yd:{to_meter:.9144},ch:{to_meter:20.1168},link:{to_meter:.201168},dm:{to_meter:.1},in:{to_meter:.0254},"ind-ch":{to_meter:20.11669506},"us-in":{to_meter:.025400050800101},"us-yd":{to_meter:.914401828803658}};var pd=/[\s_\-\/\(\)]/g;function rs(n,t){if(n[t])return n[t];for(var e=Object.keys(n),i=t.toLowerCase().replace(pd,""),s=-1,r,a;++s<e.length;)if(r=e[s],a=r.toLowerCase().replace(pd,""),a===i)return n[r]}function Rc(n){var t={},e=n.split("+").map(function(o){return o.trim()}).filter(function(o){return o}).reduce(function(o,l){var h=l.split("=");return h.push(!0),o[h[0].toLowerCase()]=h[1],o},{}),i,s,r,a={proj:"projName",datum:"datumCode",rf:function(o){t.rf=parseFloat(o)},lat_0:function(o){t.lat0=o*Le},lat_1:function(o){t.lat1=o*Le},lat_2:function(o){t.lat2=o*Le},lat_ts:function(o){t.lat_ts=o*Le},lon_0:function(o){t.long0=o*Le},lon_1:function(o){t.long1=o*Le},lon_2:function(o){t.long2=o*Le},alpha:function(o){t.alpha=parseFloat(o)*Le},gamma:function(o){t.rectified_grid_angle=parseFloat(o)*Le},lonc:function(o){t.longc=o*Le},x_0:function(o){t.x0=parseFloat(o)},y_0:function(o){t.y0=parseFloat(o)},k_0:function(o){t.k0=parseFloat(o)},k:function(o){t.k0=parseFloat(o)},a:function(o){t.a=parseFloat(o)},b:function(o){t.b=parseFloat(o)},r:function(o){t.a=t.b=parseFloat(o)},r_a:function(){t.R_A=!0},zone:function(o){t.zone=parseInt(o,10)},south:function(){t.utmSouth=!0},towgs84:function(o){t.datum_params=o.split(",").map(function(l){return parseFloat(l)})},to_meter:function(o){t.to_meter=parseFloat(o)},units:function(o){t.units=o;var l=rs(fv,o);l&&(t.to_meter=l.to_meter)},from_greenwich:function(o){t.from_greenwich=o*Le},pm:function(o){var l=rs(An,o);t.from_greenwich=(l||parseFloat(o))*Le},nadgrids:function(o){o==="@null"?t.datumCode="none":t.nadgrids=o},axis:function(o){var l="ewnsud";o.length===3&&l.indexOf(o.substr(0,1))!==-1&&l.indexOf(o.substr(1,1))!==-1&&l.indexOf(o.substr(2,1))!==-1&&(t.axis=o)},approx:function(){t.approx=!0},over:function(){t.over=!0}};for(i in e)s=e[i],i in a?(r=a[i],typeof r=="function"?r(s):t[r]=s):t[i]=s;return typeof t.datumCode=="string"&&t.datumCode!=="WGS84"&&(t.datumCode=t.datumCode.toLowerCase()),t.projStr=n,t}class rg{static getId(t){const e=t.find(i=>Array.isArray(i)&&i[0]==="ID");return e&&e.length>=3?{authority:e[1],code:parseInt(e[2],10)}:null}static convertUnit(t,e="unit"){if(!t||t.length<3)return{type:e,name:"unknown",conversion_factor:null};const i=t[1],s=parseFloat(t[2])||null,r=t.find(o=>Array.isArray(o)&&o[0]==="ID"),a=r?{authority:r[1],code:parseInt(r[2],10)}:null;return{type:e,name:i,conversion_factor:s,id:a}}static convertAxis(t){const e=t[1]||"Unknown";let i;const s=e.match(/^\((.)\)$/);if(s){const h=s[1].toUpperCase();if(h==="E")i="east";else if(h==="N")i="north";else if(h==="U")i="up";else throw new Error(`Unknown axis abbreviation: ${h}`)}else i=t[2]?t[2].toLowerCase():"unknown";const r=t.find(h=>Array.isArray(h)&&h[0]==="ORDER"),a=r?parseInt(r[1],10):null,o=t.find(h=>Array.isArray(h)&&(h[0]==="LENGTHUNIT"||h[0]==="ANGLEUNIT"||h[0]==="SCALEUNIT")),l=this.convertUnit(o);return{name:e,direction:i,unit:l,order:a}}static extractAxes(t){return t.filter(e=>Array.isArray(e)&&e[0]==="AXIS").map(e=>this.convertAxis(e)).sort((e,i)=>(e.order||0)-(i.order||0))}static convert(t,e={}){switch(t[0]){case"PROJCRS":e.type="ProjectedCRS",e.name=t[1],e.base_crs=t.find(c=>Array.isArray(c)&&c[0]==="BASEGEOGCRS")?this.convert(t.find(c=>Array.isArray(c)&&c[0]==="BASEGEOGCRS")):null,e.conversion=t.find(c=>Array.isArray(c)&&c[0]==="CONVERSION")?this.convert(t.find(c=>Array.isArray(c)&&c[0]==="CONVERSION")):null;const i=t.find(c=>Array.isArray(c)&&c[0]==="CS");i&&(e.coordinate_system={type:i[1],axis:this.extractAxes(t)});const s=t.find(c=>Array.isArray(c)&&c[0]==="LENGTHUNIT");if(s){const c=this.convertUnit(s);e.coordinate_system.unit=c}e.id=this.getId(t);break;case"BASEGEOGCRS":case"GEOGCRS":e.type="GeographicCRS",e.name=t[1];const r=t.find(c=>Array.isArray(c)&&(c[0]==="DATUM"||c[0]==="ENSEMBLE"));if(r){const c=this.convert(r);r[0]==="ENSEMBLE"?e.datum_ensemble=c:e.datum=c;const d=t.find(m=>Array.isArray(m)&&m[0]==="PRIMEM");d&&d[1]!=="Greenwich"&&(c.prime_meridian={name:d[1],longitude:parseFloat(d[2])})}e.coordinate_system={type:"ellipsoidal",axis:this.extractAxes(t)},e.id=this.getId(t);break;case"DATUM":e.type="GeodeticReferenceFrame",e.name=t[1],e.ellipsoid=t.find(c=>Array.isArray(c)&&c[0]==="ELLIPSOID")?this.convert(t.find(c=>Array.isArray(c)&&c[0]==="ELLIPSOID")):null;break;case"ENSEMBLE":e.type="DatumEnsemble",e.name=t[1],e.members=t.filter(c=>Array.isArray(c)&&c[0]==="MEMBER").map(c=>({type:"DatumEnsembleMember",name:c[1],id:this.getId(c)}));const a=t.find(c=>Array.isArray(c)&&c[0]==="ENSEMBLEACCURACY");a&&(e.accuracy=parseFloat(a[1]));const o=t.find(c=>Array.isArray(c)&&c[0]==="ELLIPSOID");o&&(e.ellipsoid=this.convert(o)),e.id=this.getId(t);break;case"ELLIPSOID":e.type="Ellipsoid",e.name=t[1],e.semi_major_axis=parseFloat(t[2]),e.inverse_flattening=parseFloat(t[3]),t.find(c=>Array.isArray(c)&&c[0]==="LENGTHUNIT")&&this.convert(t.find(c=>Array.isArray(c)&&c[0]==="LENGTHUNIT"),e);break;case"CONVERSION":e.type="Conversion",e.name=t[1],e.method=t.find(c=>Array.isArray(c)&&c[0]==="METHOD")?this.convert(t.find(c=>Array.isArray(c)&&c[0]==="METHOD")):null,e.parameters=t.filter(c=>Array.isArray(c)&&c[0]==="PARAMETER").map(c=>this.convert(c));break;case"METHOD":e.type="Method",e.name=t[1],e.id=this.getId(t);break;case"PARAMETER":e.type="Parameter",e.name=t[1],e.value=parseFloat(t[2]),e.unit=this.convertUnit(t.find(c=>Array.isArray(c)&&(c[0]==="LENGTHUNIT"||c[0]==="ANGLEUNIT"||c[0]==="SCALEUNIT"))),e.id=this.getId(t);break;case"BOUNDCRS":e.type="BoundCRS";const l=t.find(c=>Array.isArray(c)&&c[0]==="SOURCECRS");if(l){const c=l.find(d=>Array.isArray(d));e.source_crs=c?this.convert(c):null}const h=t.find(c=>Array.isArray(c)&&c[0]==="TARGETCRS");if(h){const c=h.find(d=>Array.isArray(d));e.target_crs=c?this.convert(c):null}const u=t.find(c=>Array.isArray(c)&&c[0]==="ABRIDGEDTRANSFORMATION");u?e.transformation=this.convert(u):e.transformation=null;break;case"ABRIDGEDTRANSFORMATION":if(e.type="Transformation",e.name=t[1],e.method=t.find(c=>Array.isArray(c)&&c[0]==="METHOD")?this.convert(t.find(c=>Array.isArray(c)&&c[0]==="METHOD")):null,e.parameters=t.filter(c=>Array.isArray(c)&&(c[0]==="PARAMETER"||c[0]==="PARAMETERFILE")).map(c=>{if(c[0]==="PARAMETER")return this.convert(c);if(c[0]==="PARAMETERFILE")return{name:c[1],value:c[2],id:{authority:"EPSG",code:8656}}}),e.parameters.length===7){const c=e.parameters[6];c.name==="Scale difference"&&(c.value=Math.round((c.value-1)*1e12)/1e6)}e.id=this.getId(t);break;case"AXIS":e.coordinate_system||(e.coordinate_system={type:"unspecified",axis:[]}),e.coordinate_system.axis.push(this.convertAxis(t));break;case"LENGTHUNIT":const f=this.convertUnit(t,"LinearUnit");e.coordinate_system&&e.coordinate_system.axis&&e.coordinate_system.axis.forEach(c=>{c.unit||(c.unit=f)}),f.conversion_factor&&f.conversion_factor!==1&&e.semi_major_axis&&(e.semi_major_axis={value:e.semi_major_axis,unit:f});break;default:e.keyword=t[0];break}return e}}class dv extends rg{static convert(t,e={}){return super.convert(t,e),e.coordinate_system&&e.coordinate_system.subtype==="Cartesian"&&delete e.coordinate_system,e.usage&&delete e.usage,e}}class pv extends rg{static convert(t,e={}){super.convert(t,e);const i=t.find(r=>Array.isArray(r)&&r[0]==="CS");i&&(e.coordinate_system={subtype:i[1],axis:this.extractAxes(t)});const s=t.find(r=>Array.isArray(r)&&r[0]==="USAGE");if(s){const r=s.find(l=>Array.isArray(l)&&l[0]==="SCOPE"),a=s.find(l=>Array.isArray(l)&&l[0]==="AREA"),o=s.find(l=>Array.isArray(l)&&l[0]==="BBOX");e.usage={},r&&(e.usage.scope=r[1]),a&&(e.usage.area=a[1]),o&&(e.usage.bbox=o.slice(1))}return e}}function mv(n){return n.find(t=>Array.isArray(t)&&t[0]==="USAGE")?"2019":(n.find(t=>Array.isArray(t)&&t[0]==="CS")||n[0]==="BOUNDCRS"||n[0]==="PROJCRS"||n[0]==="GEOGCRS","2015")}function gv(n){return(mv(n)==="2019"?pv:dv).convert(n)}function _v(n){const t=n.toUpperCase();return t.includes("PROJCRS")||t.includes("GEOGCRS")||t.includes("BOUNDCRS")||t.includes("VERTCRS")||t.includes("LENGTHUNIT")||t.includes("ANGLEUNIT")||t.includes("SCALEUNIT")?"WKT2":(t.includes("PROJCS")||t.includes("GEOGCS")||t.includes("LOCAL_CS")||t.includes("VERT_CS")||t.includes("UNIT"),"WKT1")}var Ra=1,ag=2,og=3,xl=4,lg=5,Qu=-1,vv=/\s/,xv=/[A-Za-z]/,yv=/[A-Za-z84_]/,ql=/[,\]]/,hg=/[\d\.E\-\+]/;function Di(n){if(typeof n!="string")throw new Error("not a string");this.text=n.trim(),this.level=0,this.place=0,this.root=null,this.stack=[],this.currentObject=null,this.state=Ra}Di.prototype.readCharicter=function(){var n=this.text[this.place++];if(this.state!==xl)for(;vv.test(n);){if(this.place>=this.text.length)return;n=this.text[this.place++]}switch(this.state){case Ra:return this.neutral(n);case ag:return this.keyword(n);case xl:return this.quoted(n);case lg:return this.afterquote(n);case og:return this.number(n);case Qu:return}};Di.prototype.afterquote=function(n){if(n==='"'){this.word+='"',this.state=xl;return}if(ql.test(n)){this.word=this.word.trim(),this.afterItem(n);return}throw new Error(`havn't handled "`+n+'" in afterquote yet, index '+this.place)};Di.prototype.afterItem=function(n){if(n===","){this.word!==null&&this.currentObject.push(this.word),this.word=null,this.state=Ra;return}if(n==="]"){this.level--,this.word!==null&&(this.currentObject.push(this.word),this.word=null),this.state=Ra,this.currentObject=this.stack.pop(),this.currentObject||(this.state=Qu);return}};Di.prototype.number=function(n){if(hg.test(n)){this.word+=n;return}if(ql.test(n)){this.word=parseFloat(this.word),this.afterItem(n);return}throw new Error(`havn't handled "`+n+'" in number yet, index '+this.place)};Di.prototype.quoted=function(n){if(n==='"'){this.state=lg;return}this.word+=n};Di.prototype.keyword=function(n){if(yv.test(n)){this.word+=n;return}if(n==="["){var t=[];t.push(this.word),this.level++,this.root===null?this.root=t:this.currentObject.push(t),this.stack.push(this.currentObject),this.currentObject=t,this.state=Ra;return}if(ql.test(n)){this.afterItem(n);return}throw new Error(`havn't handled "`+n+'" in keyword yet, index '+this.place)};Di.prototype.neutral=function(n){if(xv.test(n)){this.word=n,this.state=ag;return}if(n==='"'){this.word="",this.state=xl;return}if(hg.test(n)){this.word=n,this.state=og;return}if(ql.test(n)){this.afterItem(n);return}throw new Error(`havn't handled "`+n+'" in neutral yet, index '+this.place)};Di.prototype.output=function(){for(;this.place<this.text.length;)this.readCharicter();if(this.state===Qu)return this.root;throw new Error('unable to parse string "'+this.text+'". State is '+this.state)};function Mv(n){var t=new Di(n);return t.output()}function mh(n,t,e){Array.isArray(t)&&(e.unshift(t),t=null);var i=t?{}:n,s=e.reduce(function(r,a){return vr(a,r),r},i);t&&(n[t]=s)}function vr(n,t){if(!Array.isArray(n)){t[n]=!0;return}var e=n.shift();if(e==="PARAMETER"&&(e=n.shift()),n.length===1){if(Array.isArray(n[0])){t[e]={},vr(n[0],t[e]);return}t[e]=n[0];return}if(!n.length){t[e]=!0;return}if(e==="TOWGS84"){t[e]=n;return}if(e==="AXIS"){e in t||(t[e]=[]),t[e].push(n);return}Array.isArray(e)||(t[e]={});var i;switch(e){case"UNIT":case"PRIMEM":case"VERT_DATUM":t[e]={name:n[0].toLowerCase(),convert:n[1]},n.length===3&&vr(n[2],t[e]);return;case"SPHEROID":case"ELLIPSOID":t[e]={name:n[0],a:n[1],rf:n[2]},n.length===4&&vr(n[3],t[e]);return;case"EDATUM":case"ENGINEERINGDATUM":case"LOCAL_DATUM":case"DATUM":case"VERT_CS":case"VERTCRS":case"VERTICALCRS":n[0]=["name",n[0]],mh(t,e,n);return;case"COMPD_CS":case"COMPOUNDCRS":case"FITTED_CS":case"PROJECTEDCRS":case"PROJCRS":case"GEOGCS":case"GEOCCS":case"PROJCS":case"LOCAL_CS":case"GEODCRS":case"GEODETICCRS":case"GEODETICDATUM":case"ENGCRS":case"ENGINEERINGCRS":n[0]=["name",n[0]],mh(t,e,n),t[e].type=e;return;default:for(i=-1;++i<n.length;)if(!Array.isArray(n[i]))return vr(n,t[e]);return mh(t,e,n)}}var Ev=.017453292519943295;function Qn(n){return n*Ev}function cg(n){const t=(n.projName||"").toLowerCase().replace(/_/g," ");!n.long0&&n.longc&&(t==="albers conic equal area"||t==="lambert azimuthal equal area")&&(n.long0=n.longc),!n.lat_ts&&n.lat1&&(t==="stereographic south pole"||t==="polar stereographic (variant b)")?(n.lat0=Qn(n.lat1>0?90:-90),n.lat_ts=n.lat1,delete n.lat1):!n.lat_ts&&n.lat0&&(t==="polar stereographic"||t==="polar stereographic (variant a)")&&(n.lat_ts=n.lat0,n.lat0=Qn(n.lat0>0?90:-90),delete n.lat1)}function md(n){let t={units:null,to_meter:void 0};return typeof n=="string"?(t.units=n.toLowerCase(),t.units==="metre"&&(t.units="meter"),t.units==="meter"&&(t.to_meter=1)):n&&n.name&&(t.units=n.name.toLowerCase(),t.units==="metre"&&(t.units="meter"),t.to_meter=n.conversion_factor),t}function gd(n){return typeof n=="object"?n.value*n.unit.conversion_factor:n}function _d(n,t){n.ellipsoid.radius?(t.a=n.ellipsoid.radius,t.rf=0):(t.a=gd(n.ellipsoid.semi_major_axis),n.ellipsoid.inverse_flattening!==void 0?t.rf=n.ellipsoid.inverse_flattening:n.ellipsoid.semi_major_axis!==void 0&&n.ellipsoid.semi_minor_axis!==void 0&&(t.rf=t.a/(t.a-gd(n.ellipsoid.semi_minor_axis))))}function yl(n,t={}){return!n||typeof n!="object"?n:n.type==="BoundCRS"?(yl(n.source_crs,t),n.transformation&&(n.transformation.method&&n.transformation.method.name==="NTv2"?t.nadgrids=n.transformation.parameters[0].value:t.datum_params=n.transformation.parameters.map(e=>e.value)),t):(Object.keys(n).forEach(e=>{const i=n[e];if(i!==null)switch(e){case"name":if(t.srsCode)break;t.name=i,t.srsCode=i;break;case"type":i==="GeographicCRS"?t.projName="longlat":i==="ProjectedCRS"&&n.conversion&&n.conversion.method&&(t.projName=n.conversion.method.name);break;case"datum":case"datum_ensemble":i.ellipsoid&&(t.ellps=i.ellipsoid.name,_d(i,t)),i.prime_meridian&&(t.from_greenwich=i.prime_meridian.longitude*Math.PI/180);break;case"ellipsoid":t.ellps=i.name,_d(i,t);break;case"prime_meridian":t.long0=(i.longitude||0)*Math.PI/180;break;case"coordinate_system":if(i.axis){if(t.axis=i.axis.map(s=>{const r=s.direction;if(r==="east")return"e";if(r==="north")return"n";if(r==="west")return"w";if(r==="south")return"s";throw new Error(`Unknown axis direction: ${r}`)}).join("")+"u",i.unit){const{units:s,to_meter:r}=md(i.unit);t.units=s,t.to_meter=r}else if(i.axis[0]&&i.axis[0].unit){const{units:s,to_meter:r}=md(i.axis[0].unit);t.units=s,t.to_meter=r}}break;case"id":i.authority&&i.code&&(t.title=i.authority+":"+i.code);break;case"conversion":i.method&&i.method.name&&(t.projName=i.method.name),i.parameters&&i.parameters.forEach(s=>{const r=s.name.toLowerCase().replace(/\s+/g,"_"),a=s.value;s.unit&&s.unit.conversion_factor?t[r]=a*s.unit.conversion_factor:s.unit==="degree"?t[r]=a*Math.PI/180:t[r]=a});break;case"unit":i.name&&(t.units=i.name.toLowerCase(),t.units==="metre"&&(t.units="meter")),i.conversion_factor&&(t.to_meter=i.conversion_factor);break;case"base_crs":yl(i,t),t.datumCode=i.id?i.id.authority+"_"+i.id.code:i.name;break}}),t.latitude_of_false_origin!==void 0&&(t.lat0=t.latitude_of_false_origin),t.longitude_of_false_origin!==void 0&&(t.long0=t.longitude_of_false_origin),t.latitude_of_standard_parallel!==void 0&&(t.lat0=t.latitude_of_standard_parallel,t.lat1=t.latitude_of_standard_parallel),t.latitude_of_1st_standard_parallel!==void 0&&(t.lat1=t.latitude_of_1st_standard_parallel),t.latitude_of_2nd_standard_parallel!==void 0&&(t.lat2=t.latitude_of_2nd_standard_parallel),t.latitude_of_projection_centre!==void 0&&(t.lat0=t.latitude_of_projection_centre),t.longitude_of_projection_centre!==void 0&&(t.longc=t.longitude_of_projection_centre),t.easting_at_false_origin!==void 0&&(t.x0=t.easting_at_false_origin),t.northing_at_false_origin!==void 0&&(t.y0=t.northing_at_false_origin),t.latitude_of_natural_origin!==void 0&&(t.lat0=t.latitude_of_natural_origin),t.longitude_of_natural_origin!==void 0&&(t.long0=t.longitude_of_natural_origin),t.longitude_of_origin!==void 0&&(t.long0=t.longitude_of_origin),t.false_easting!==void 0&&(t.x0=t.false_easting),t.easting_at_projection_centre&&(t.x0=t.easting_at_projection_centre),t.false_northing!==void 0&&(t.y0=t.false_northing),t.northing_at_projection_centre&&(t.y0=t.northing_at_projection_centre),t.standard_parallel_1!==void 0&&(t.lat1=t.standard_parallel_1),t.standard_parallel_2!==void 0&&(t.lat2=t.standard_parallel_2),t.scale_factor_at_natural_origin!==void 0&&(t.k0=t.scale_factor_at_natural_origin),t.scale_factor_at_projection_centre!==void 0&&(t.k0=t.scale_factor_at_projection_centre),t.scale_factor_on_pseudo_standard_parallel!==void 0&&(t.k0=t.scale_factor_on_pseudo_standard_parallel),t.azimuth!==void 0&&(t.alpha=t.azimuth),t.azimuth_at_projection_centre!==void 0&&(t.alpha=t.azimuth_at_projection_centre),t.angle_from_rectified_to_skew_grid&&(t.rectified_grid_angle=t.angle_from_rectified_to_skew_grid),cg(t),t)}var Sv=["PROJECTEDCRS","PROJCRS","GEOGCS","GEOCCS","PROJCS","LOCAL_CS","GEODCRS","GEODETICCRS","GEODETICDATUM","ENGCRS","ENGINEERINGCRS"];function wv(n,t){var e=t[0],i=t[1];!(e in n)&&i in n&&(n[e]=n[i],t.length===3&&(n[e]=t[2](n[e])))}function ug(n){for(var t=Object.keys(n),e=0,i=t.length;e<i;++e){var s=t[e];Sv.indexOf(s)!==-1&&Tv(n[s]),typeof n[s]=="object"&&ug(n[s])}}function Tv(n){if(n.AUTHORITY){var t=Object.keys(n.AUTHORITY)[0];t&&t in n.AUTHORITY&&(n.title=t+":"+n.AUTHORITY[t])}if(n.type==="GEOGCS"?n.projName="longlat":n.type==="LOCAL_CS"?(n.projName="identity",n.local=!0):typeof n.PROJECTION=="object"?n.projName=Object.keys(n.PROJECTION)[0]:n.projName=n.PROJECTION,n.AXIS){for(var e="",i=0,s=n.AXIS.length;i<s;++i){var r=[n.AXIS[i][0].toLowerCase(),n.AXIS[i][1].toLowerCase()];r[0].indexOf("north")!==-1||(r[0]==="y"||r[0]==="lat")&&r[1]==="north"?e+="n":r[0].indexOf("south")!==-1||(r[0]==="y"||r[0]==="lat")&&r[1]==="south"?e+="s":r[0].indexOf("east")!==-1||(r[0]==="x"||r[0]==="lon")&&r[1]==="east"?e+="e":(r[0].indexOf("west")!==-1||(r[0]==="x"||r[0]==="lon")&&r[1]==="west")&&(e+="w")}e.length===2&&(e+="u"),e.length===3&&(n.axis=e)}n.UNIT&&(n.units=n.UNIT.name.toLowerCase(),n.units==="metre"&&(n.units="meter"),n.UNIT.convert&&(n.type==="GEOGCS"?n.DATUM&&n.DATUM.SPHEROID&&(n.to_meter=n.UNIT.convert*n.DATUM.SPHEROID.a):n.to_meter=n.UNIT.convert));var a=n.GEOGCS;n.type==="GEOGCS"&&(a=n),a&&(a.DATUM?n.datumCode=a.DATUM.name.toLowerCase():n.datumCode=a.name.toLowerCase(),n.datumCode.slice(0,2)==="d_"&&(n.datumCode=n.datumCode.slice(2)),n.datumCode==="new_zealand_1949"&&(n.datumCode="nzgd49"),(n.datumCode==="wgs_1984"||n.datumCode==="world_geodetic_system_1984")&&(n.PROJECTION==="Mercator_Auxiliary_Sphere"&&(n.sphere=!0),n.datumCode="wgs84"),n.datumCode==="belge_1972"&&(n.datumCode="rnb72"),a.DATUM&&a.DATUM.SPHEROID&&(n.ellps=a.DATUM.SPHEROID.name.replace("_19","").replace(/[Cc]larke\_18/,"clrk"),n.ellps.toLowerCase().slice(0,13)==="international"&&(n.ellps="intl"),n.a=a.DATUM.SPHEROID.a,n.rf=parseFloat(a.DATUM.SPHEROID.rf,10)),a.DATUM&&a.DATUM.TOWGS84&&(n.datum_params=a.DATUM.TOWGS84),~n.datumCode.indexOf("osgb_1936")&&(n.datumCode="osgb36"),~n.datumCode.indexOf("osni_1952")&&(n.datumCode="osni52"),(~n.datumCode.indexOf("tm65")||~n.datumCode.indexOf("geodetic_datum_of_1965"))&&(n.datumCode="ire65"),n.datumCode==="ch1903+"&&(n.datumCode="ch1903"),~n.datumCode.indexOf("israel")&&(n.datumCode="isr93")),n.b&&!isFinite(n.b)&&(n.b=n.a),n.rectified_grid_angle&&(n.rectified_grid_angle=Qn(n.rectified_grid_angle));function o(u){var f=n.to_meter||1;return u*f}var l=function(u){return wv(n,u)},h=[["standard_parallel_1","Standard_Parallel_1"],["standard_parallel_1","Latitude of 1st standard parallel"],["standard_parallel_2","Standard_Parallel_2"],["standard_parallel_2","Latitude of 2nd standard parallel"],["false_easting","False_Easting"],["false_easting","False easting"],["false-easting","Easting at false origin"],["false_northing","False_Northing"],["false_northing","False northing"],["false_northing","Northing at false origin"],["central_meridian","Central_Meridian"],["central_meridian","Longitude of natural origin"],["central_meridian","Longitude of false origin"],["latitude_of_origin","Latitude_Of_Origin"],["latitude_of_origin","Central_Parallel"],["latitude_of_origin","Latitude of natural origin"],["latitude_of_origin","Latitude of false origin"],["scale_factor","Scale_Factor"],["k0","scale_factor"],["latitude_of_center","Latitude_Of_Center"],["latitude_of_center","Latitude_of_center"],["lat0","latitude_of_center",Qn],["longitude_of_center","Longitude_Of_Center"],["longitude_of_center","Longitude_of_center"],["longc","longitude_of_center",Qn],["x0","false_easting",o],["y0","false_northing",o],["long0","central_meridian",Qn],["lat0","latitude_of_origin",Qn],["lat0","standard_parallel_1",Qn],["lat1","standard_parallel_1",Qn],["lat2","standard_parallel_2",Qn],["azimuth","Azimuth"],["alpha","azimuth",Qn],["srsCode","name"]];h.forEach(l),cg(n)}function Ca(n){if(typeof n=="object")return yl(n);const t=_v(n);var e=Mv(n);if(t==="WKT2"){const r=gv(e);return yl(r)}var i=e[0],s={};return vr(e,s),ug(s),s[i]}function en(n){var t=this;if(arguments.length===2){var e=arguments[1];typeof e=="string"?e.charAt(0)==="+"?en[n]=Rc(arguments[1]):en[n]=Ca(arguments[1]):e&&typeof e=="object"&&!("projName"in e)?en[n]=Ca(arguments[1]):(en[n]=e,e||delete en[n])}else if(arguments.length===1){if(Array.isArray(n))return n.map(function(i){return Array.isArray(i)?en.apply(t,i):en(i)});if(typeof n=="string"){if(n in en)return en[n]}else"EPSG"in n?en["EPSG:"+n.EPSG]=n:"ESRI"in n?en["ESRI:"+n.ESRI]=n:"IAU2000"in n?en["IAU2000:"+n.IAU2000]=n:console.log(n);return}}av(en);function bv(n){return typeof n=="string"}function Av(n){return n in en}function Rv(n){return n.indexOf("+")!==0&&n.indexOf("[")!==-1||typeof n=="object"&&!("srsCode"in n)}var Cv=["3857","900913","3785","102113"];function Pv(n){var t=rs(n,"authority");if(t){var e=rs(t,"epsg");return e&&Cv.indexOf(e)>-1}}function Lv(n){var t=rs(n,"extension");if(t)return rs(t,"proj4")}function Iv(n){return n[0]==="+"}function fg(n){if(bv(n)){if(Av(n))return en[n];if(Rv(n)){var t=Ca(n);if(Pv(t))return en["EPSG:3857"];var e=Lv(t);return e?Rc(e):t}if(Iv(n))return Rc(n)}else return"projName"in n?n:Ca(n)}function vd(n,t){n=n||{};var e,i;if(!t)return n;for(i in t)e=t[i],e!==void 0&&(n[i]=e);return n}function di(n,t,e){var i=n*t;return e/Math.sqrt(1-i*i)}function Ha(n){return n<0?-1:1}function ot(n,t){return t||Math.abs(n)<=Ue?n:n-Ha(n)*Aa}function si(n,t,e){var i=n*e,s=.5*n;return i=Math.pow((1-i)/(1+i),s),Math.tan(.5*(J-t))/i}function Pa(n,t){for(var e=.5*n,i,s,r=J-2*Math.atan(t),a=0;a<=15;a++)if(i=n*Math.sin(r),s=J-2*Math.atan(t*Math.pow((1-i)/(1+i),e))-r,r+=s,Math.abs(s)<=1e-10)return r;return-9999}function Dv(){var n=this.b/this.a;this.es=1-n*n,"x0"in this||(this.x0=0),"y0"in this||(this.y0=0),this.e=Math.sqrt(this.es),this.lat_ts?this.sphere?this.k0=Math.cos(this.lat_ts):this.k0=di(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)):this.k0||(this.k?this.k0=this.k:this.k0=1)}function Nv(n){var t=n.x,e=n.y;if(e*wn>90&&e*wn<-90&&t*wn>180&&t*wn<-180)return null;var i,s;if(Math.abs(Math.abs(e)-J)<=st)return null;if(this.sphere)i=this.x0+this.a*this.k0*ot(t-this.long0,this.over),s=this.y0+this.a*this.k0*Math.log(Math.tan(he+.5*e));else{var r=Math.sin(e),a=si(this.e,e,r);i=this.x0+this.a*this.k0*ot(t-this.long0,this.over),s=this.y0-this.a*this.k0*Math.log(a)}return n.x=i,n.y=s,n}function Ov(n){var t=n.x-this.x0,e=n.y-this.y0,i,s;if(this.sphere)s=J-2*Math.atan(Math.exp(-e/(this.a*this.k0)));else{var r=Math.exp(-e/(this.a*this.k0));if(s=Pa(this.e,r),s===-9999)return null}return i=ot(this.long0+t/(this.a*this.k0),this.over),n.x=i,n.y=s,n}var Uv=["Mercator","Popular Visualisation Pseudo Mercator","Mercator_1SP","Mercator_Auxiliary_Sphere","Mercator_Variant_A","merc"];const Fv={init:Dv,forward:Nv,inverse:Ov,names:Uv};function Gv(){}function xd(n){return n}var dg=["longlat","identity"];const Bv={init:Gv,forward:xd,inverse:xd,names:dg};var zv=[Fv,Bv],ws={},xr=[];function pg(n,t){var e=xr.length;return n.names?(xr[e]=n,n.names.forEach(function(i){ws[i.toLowerCase()]=e}),this):(console.log(t),!0)}function mg(n){return n.replace(/[-\(\)\s]+/g," ").trim().replace(/ /g,"_")}function kv(n){if(!n)return!1;var t=n.toLowerCase();if(typeof ws[t]<"u"&&xr[ws[t]]||(t=mg(t),t in ws&&xr[ws[t]]))return xr[ws[t]]}function Vv(){zv.forEach(pg)}const Hv={start:Vv,add:pg,get:kv};var gg={MERIT:{a:6378137,rf:298.257,ellipseName:"MERIT 1983"},SGS85:{a:6378136,rf:298.257,ellipseName:"Soviet Geodetic System 85"},GRS80:{a:6378137,rf:298.257222101,ellipseName:"GRS 1980(IUGG, 1980)"},IAU76:{a:6378140,rf:298.257,ellipseName:"IAU 1976"},airy:{a:6377563396e-3,b:635625691e-2,ellipseName:"Airy 1830"},APL4:{a:6378137,rf:298.25,ellipseName:"Appl. Physics. 1965"},NWL9D:{a:6378145,rf:298.25,ellipseName:"Naval Weapons Lab., 1965"},mod_airy:{a:6377340189e-3,b:6356034446e-3,ellipseName:"Modified Airy"},andrae:{a:637710443e-2,rf:300,ellipseName:"Andrae 1876 (Den., Iclnd.)"},aust_SA:{a:6378160,rf:298.25,ellipseName:"Australian Natl & S. Amer. 1969"},GRS67:{a:6378160,rf:298.247167427,ellipseName:"GRS 67(IUGG 1967)"},bessel:{a:6377397155e-3,rf:299.1528128,ellipseName:"Bessel 1841"},bess_nam:{a:6377483865e-3,rf:299.1528128,ellipseName:"Bessel 1841 (Namibia)"},clrk66:{a:63782064e-1,b:63565838e-1,ellipseName:"Clarke 1866"},clrk80:{a:6378249145e-3,rf:293.4663,ellipseName:"Clarke 1880 mod."},clrk80ign:{a:63782492e-1,b:6356515,rf:293.4660213,ellipseName:"Clarke 1880 (IGN)"},clrk58:{a:6378293645208759e-9,rf:294.2606763692654,ellipseName:"Clarke 1858"},CPM:{a:63757387e-1,rf:334.29,ellipseName:"Comm. des Poids et Mesures 1799"},delmbr:{a:6376428,rf:311.5,ellipseName:"Delambre 1810 (Belgium)"},engelis:{a:637813605e-2,rf:298.2566,ellipseName:"Engelis 1985"},evrst30:{a:6377276345e-3,rf:300.8017,ellipseName:"Everest 1830"},evrst48:{a:6377304063e-3,rf:300.8017,ellipseName:"Everest 1948"},evrst56:{a:6377301243e-3,rf:300.8017,ellipseName:"Everest 1956"},evrst69:{a:6377295664e-3,rf:300.8017,ellipseName:"Everest 1969"},evrstSS:{a:6377298556e-3,rf:300.8017,ellipseName:"Everest (Sabah & Sarawak)"},fschr60:{a:6378166,rf:298.3,ellipseName:"Fischer (Mercury Datum) 1960"},fschr60m:{a:6378155,rf:298.3,ellipseName:"Fischer 1960"},fschr68:{a:6378150,rf:298.3,ellipseName:"Fischer 1968"},helmert:{a:6378200,rf:298.3,ellipseName:"Helmert 1906"},hough:{a:6378270,rf:297,ellipseName:"Hough"},intl:{a:6378388,rf:297,ellipseName:"International 1909 (Hayford)"},kaula:{a:6378163,rf:298.24,ellipseName:"Kaula 1961"},lerch:{a:6378139,rf:298.257,ellipseName:"Lerch 1979"},mprts:{a:6397300,rf:191,ellipseName:"Maupertius 1738"},new_intl:{a:63781575e-1,b:63567722e-1,ellipseName:"New International 1967"},plessis:{a:6376523,rf:6355863,ellipseName:"Plessis 1817 (France)"},krass:{a:6378245,rf:298.3,ellipseName:"Krassovsky, 1942"},SEasia:{a:6378155,b:63567733205e-4,ellipseName:"Southeast Asia"},walbeck:{a:6376896,b:63558348467e-4,ellipseName:"Walbeck"},WGS60:{a:6378165,rf:298.3,ellipseName:"WGS 60"},WGS66:{a:6378145,rf:298.25,ellipseName:"WGS 66"},WGS7:{a:6378135,rf:298.26,ellipseName:"WGS 72"},WGS84:{a:6378137,rf:298.257223563,ellipseName:"WGS 84"},sphere:{a:6370997,b:6370997,ellipseName:"Normal Sphere (r=6370997)"}};const Wv=gg.WGS84;function Xv(n,t,e,i){var s=n*n,r=t*t,a=(s-r)/s,o=0;i?(n*=1-a*(hv+a*(cv+a*uv)),s=n*n,a=0):o=Math.sqrt(a);var l=(s-r)/r;return{es:a,e:o,ep2:l}}function Yv(n,t,e,i,s){if(!n){var r=rs(gg,i);r||(r=Wv),n=r.a,t=r.b,e=r.rf}return e&&!t&&(t=(1-1/e)*n),(e===0||Math.abs(n-t)<st)&&(s=!0,t=n),{a:n,b:t,rf:e,sphere:s}}var tl={wgs84:{towgs84:"0,0,0",ellipse:"WGS84",datumName:"WGS84"},ch1903:{towgs84:"674.374,15.056,405.346",ellipse:"bessel",datumName:"swiss"},ggrs87:{towgs84:"-199.87,74.79,246.62",ellipse:"GRS80",datumName:"Greek_Geodetic_Reference_System_1987"},nad83:{towgs84:"0,0,0",ellipse:"GRS80",datumName:"North_American_Datum_1983"},nad27:{nadgrids:"@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat",ellipse:"clrk66",datumName:"North_American_Datum_1927"},potsdam:{towgs84:"598.1,73.7,418.2,0.202,0.045,-2.455,6.7",ellipse:"bessel",datumName:"Potsdam Rauenberg 1950 DHDN"},carthage:{towgs84:"-263.0,6.0,431.0",ellipse:"clark80",datumName:"Carthage 1934 Tunisia"},hermannskogel:{towgs84:"577.326,90.129,463.919,5.137,1.474,5.297,2.4232",ellipse:"bessel",datumName:"Hermannskogel"},mgi:{towgs84:"577.326,90.129,463.919,5.137,1.474,5.297,2.4232",ellipse:"bessel",datumName:"Militar-Geographische Institut"},osni52:{towgs84:"482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",ellipse:"airy",datumName:"Irish National"},ire65:{towgs84:"482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",ellipse:"mod_airy",datumName:"Ireland 1965"},rassadiran:{towgs84:"-133.63,-157.5,-158.62",ellipse:"intl",datumName:"Rassadiran"},nzgd49:{towgs84:"59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993",ellipse:"intl",datumName:"New Zealand Geodetic Datum 1949"},osgb36:{towgs84:"446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894",ellipse:"airy",datumName:"Ordnance Survey of Great Britain 1936"},s_jtsk:{towgs84:"589,76,480",ellipse:"bessel",datumName:"S-JTSK (Ferro)"},beduaram:{towgs84:"-106,-87,188",ellipse:"clrk80",datumName:"Beduaram"},gunung_segara:{towgs84:"-403,684,41",ellipse:"bessel",datumName:"Gunung Segara Jakarta"},rnb72:{towgs84:"106.869,-52.2978,103.724,-0.33657,0.456955,-1.84218,1",ellipse:"intl",datumName:"Reseau National Belge 1972"},EPSG_5451:{towgs84:"6.41,-49.05,-11.28,1.5657,0.5242,6.9718,-5.7649"},IGNF_LURESG:{towgs84:"-192.986,13.673,-39.309,-0.4099,-2.9332,2.6881,0.43"},EPSG_4614:{towgs84:"-119.4248,-303.65872,-11.00061,1.164298,0.174458,1.096259,3.657065"},EPSG_4615:{towgs84:"-494.088,-312.129,279.877,-1.423,-1.013,1.59,-0.748"},ESRI_37241:{towgs84:"-76.822,257.457,-12.817,2.136,-0.033,-2.392,-0.031"},ESRI_37249:{towgs84:"-440.296,58.548,296.265,1.128,10.202,4.559,-0.438"},ESRI_37245:{towgs84:"-511.151,-181.269,139.609,1.05,2.703,1.798,3.071"},EPSG_4178:{towgs84:"24.9,-126.4,-93.2,-0.063,-0.247,-0.041,1.01"},EPSG_4622:{towgs84:"-472.29,-5.63,-304.12,0.4362,-0.8374,0.2563,1.8984"},EPSG_4625:{towgs84:"126.93,547.94,130.41,-2.7867,5.1612,-0.8584,13.8227"},EPSG_5252:{towgs84:"0.023,0.036,-0.068,0.00176,0.00912,-0.01136,0.00439"},EPSG_4314:{towgs84:"597.1,71.4,412.1,0.894,0.068,-1.563,7.58"},EPSG_4282:{towgs84:"-178.3,-316.7,-131.5,5.278,6.077,10.979,19.166"},EPSG_4231:{towgs84:"-83.11,-97.38,-117.22,0.0276,-0.2167,0.2147,0.1218"},EPSG_4274:{towgs84:"-230.994,102.591,25.199,0.633,-0.239,0.9,1.95"},EPSG_4134:{towgs84:"-180.624,-225.516,173.919,-0.81,-1.898,8.336,16.71006"},EPSG_4254:{towgs84:"18.38,192.45,96.82,0.056,-0.142,-0.2,-0.0013"},EPSG_4159:{towgs84:"-194.513,-63.978,-25.759,-3.4027,3.756,-3.352,-0.9175"},EPSG_4687:{towgs84:"0.072,-0.507,-0.245,0.0183,-0.0003,0.007,-0.0093"},EPSG_4227:{towgs84:"-83.58,-397.54,458.78,-17.595,-2.847,4.256,3.225"},EPSG_4746:{towgs84:"599.4,72.4,419.2,-0.062,-0.022,-2.723,6.46"},EPSG_4745:{towgs84:"612.4,77,440.2,-0.054,0.057,-2.797,2.55"},EPSG_6311:{towgs84:"8.846,-4.394,-1.122,-0.00237,-0.146528,0.130428,0.783926"},EPSG_4289:{towgs84:"565.7381,50.4018,465.2904,-1.91514,1.60363,-9.09546,4.07244"},EPSG_4230:{towgs84:"-68.863,-134.888,-111.49,-0.53,-0.14,0.57,-3.4"},EPSG_4154:{towgs84:"-123.02,-158.95,-168.47"},EPSG_4156:{towgs84:"570.8,85.7,462.8,4.998,1.587,5.261,3.56"},EPSG_4299:{towgs84:"482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15"},EPSG_4179:{towgs84:"33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84"},EPSG_4313:{towgs84:"-106.8686,52.2978,-103.7239,0.3366,-0.457,1.8422,-1.2747"},EPSG_4194:{towgs84:"163.511,127.533,-159.789"},EPSG_4195:{towgs84:"105,326,-102.5"},EPSG_4196:{towgs84:"-45,417,-3.5"},EPSG_4611:{towgs84:"-162.619,-276.959,-161.764,0.067753,-2.243649,-1.158827,-1.094246"},EPSG_4633:{towgs84:"137.092,131.66,91.475,-1.9436,-11.5993,-4.3321,-7.4824"},EPSG_4641:{towgs84:"-408.809,366.856,-412.987,1.8842,-0.5308,2.1655,-121.0993"},EPSG_4643:{towgs84:"-480.26,-438.32,-643.429,16.3119,20.1721,-4.0349,-111.7002"},EPSG_4300:{towgs84:"482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15"},EPSG_4188:{towgs84:"482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15"},EPSG_4660:{towgs84:"982.6087,552.753,-540.873,32.39344,-153.25684,-96.2266,16.805"},EPSG_4662:{towgs84:"97.295,-263.247,310.882,-1.5999,0.8386,3.1409,13.3259"},EPSG_3906:{towgs84:"577.88891,165.22205,391.18289,4.9145,-0.94729,-13.05098,7.78664"},EPSG_4307:{towgs84:"-209.3622,-87.8162,404.6198,0.0046,3.4784,0.5805,-1.4547"},EPSG_6892:{towgs84:"-76.269,-16.683,68.562,-6.275,10.536,-4.286,-13.686"},EPSG_4690:{towgs84:"221.597,152.441,176.523,2.403,1.3893,0.884,11.4648"},EPSG_4691:{towgs84:"218.769,150.75,176.75,3.5231,2.0037,1.288,10.9817"},EPSG_4629:{towgs84:"72.51,345.411,79.241,-1.5862,-0.8826,-0.5495,1.3653"},EPSG_4630:{towgs84:"165.804,216.213,180.26,-0.6251,-0.4515,-0.0721,7.4111"},EPSG_4692:{towgs84:"217.109,86.452,23.711,0.0183,-0.0003,0.007,-0.0093"},EPSG_9333:{towgs84:"0,0,0,-8.393,0.749,-10.276,0"},EPSG_9059:{towgs84:"0,0,0"},EPSG_4312:{towgs84:"601.705,84.263,485.227,4.7354,1.3145,5.393,-2.3887"},EPSG_4123:{towgs84:"-96.062,-82.428,-121.753,4.801,0.345,-1.376,1.496"},EPSG_4309:{towgs84:"-124.45,183.74,44.64,-0.4384,0.5446,-0.9706,-2.1365"},ESRI_104106:{towgs84:"-283.088,-70.693,117.445,-1.157,0.059,-0.652,-4.058"},EPSG_4281:{towgs84:"-219.247,-73.802,269.529"},EPSG_4322:{towgs84:"0,0,4.5"},EPSG_4324:{towgs84:"0,0,1.9"},EPSG_4284:{towgs84:"43.822,-108.842,-119.585,1.455,-0.761,0.737,0.549"},EPSG_4277:{towgs84:"446.448,-125.157,542.06,0.15,0.247,0.842,-20.489"},EPSG_4207:{towgs84:"-282.1,-72.2,120,-1.529,0.145,-0.89,-4.46"},EPSG_4688:{towgs84:"347.175,1077.618,2623.677,33.9058,-70.6776,9.4013,186.0647"},EPSG_4689:{towgs84:"410.793,54.542,80.501,-2.5596,-2.3517,-0.6594,17.3218"},EPSG_4720:{towgs84:"0,0,4.5"},EPSG_4273:{towgs84:"278.3,93,474.5,7.889,0.05,-6.61,6.21"},EPSG_4240:{towgs84:"204.64,834.74,293.8"},EPSG_4817:{towgs84:"278.3,93,474.5,7.889,0.05,-6.61,6.21"},ESRI_104131:{towgs84:"426.62,142.62,460.09,4.98,4.49,-12.42,-17.1"},EPSG_4265:{towgs84:"-104.1,-49.1,-9.9,0.971,-2.917,0.714,-11.68"},EPSG_4263:{towgs84:"-111.92,-87.85,114.5,1.875,0.202,0.219,0.032"},EPSG_4298:{towgs84:"-689.5937,623.84046,-65.93566,-0.02331,1.17094,-0.80054,5.88536"},EPSG_4270:{towgs84:"-253.4392,-148.452,386.5267,0.15605,0.43,-0.1013,-0.0424"},EPSG_4229:{towgs84:"-121.8,98.1,-10.7"},EPSG_4220:{towgs84:"-55.5,-348,-229.2"},EPSG_4214:{towgs84:"12.646,-155.176,-80.863"},EPSG_4232:{towgs84:"-345,3,223"},EPSG_4238:{towgs84:"-1.977,-13.06,-9.993,0.364,0.254,0.689,-1.037"},EPSG_4168:{towgs84:"-170,33,326"},EPSG_4131:{towgs84:"199,931,318.9"},EPSG_4152:{towgs84:"-0.9102,2.0141,0.5602,0.029039,0.010065,0.010101,0"},EPSG_5228:{towgs84:"572.213,85.334,461.94,4.9732,1.529,5.2484,3.5378"},EPSG_8351:{towgs84:"485.021,169.465,483.839,7.786342,4.397554,4.102655,0"},EPSG_4683:{towgs84:"-127.62,-67.24,-47.04,-3.068,4.903,1.578,-1.06"},EPSG_4133:{towgs84:"0,0,0"},EPSG_7373:{towgs84:"0.819,-0.5762,-1.6446,-0.00378,-0.03317,0.00318,0.0693"},EPSG_9075:{towgs84:"-0.9102,2.0141,0.5602,0.029039,0.010065,0.010101,0"},EPSG_9072:{towgs84:"-0.9102,2.0141,0.5602,0.029039,0.010065,0.010101,0"},EPSG_9294:{towgs84:"1.16835,-1.42001,-2.24431,-0.00822,-0.05508,0.01818,0.23388"},EPSG_4212:{towgs84:"-267.434,173.496,181.814,-13.4704,8.7154,7.3926,14.7492"},EPSG_4191:{towgs84:"-44.183,-0.58,-38.489,2.3867,2.7072,-3.5196,-8.2703"},EPSG_4237:{towgs84:"52.684,-71.194,-13.975,-0.312,-0.1063,-0.3729,1.0191"},EPSG_4740:{towgs84:"-1.08,-0.27,-0.9"},EPSG_4124:{towgs84:"419.3836,99.3335,591.3451,0.850389,1.817277,-7.862238,-0.99496"},EPSG_5681:{towgs84:"584.9636,107.7175,413.8067,1.1155,0.2824,-3.1384,7.9922"},EPSG_4141:{towgs84:"23.772,17.49,17.859,-0.3132,-1.85274,1.67299,-5.4262"},EPSG_4204:{towgs84:"-85.645,-273.077,-79.708,2.289,-1.421,2.532,3.194"},EPSG_4319:{towgs84:"226.702,-193.337,-35.371,-2.229,-4.391,9.238,0.9798"},EPSG_4200:{towgs84:"24.82,-131.21,-82.66"},EPSG_4130:{towgs84:"0,0,0"},EPSG_4127:{towgs84:"-82.875,-57.097,-156.768,-2.158,1.524,-0.982,-0.359"},EPSG_4149:{towgs84:"674.374,15.056,405.346"},EPSG_4617:{towgs84:"-0.991,1.9072,0.5129,1.25033e-7,4.6785e-8,5.6529e-8,0"},EPSG_4663:{towgs84:"-210.502,-66.902,-48.476,2.094,-15.067,-5.817,0.485"},EPSG_4664:{towgs84:"-211.939,137.626,58.3,-0.089,0.251,0.079,0.384"},EPSG_4665:{towgs84:"-105.854,165.589,-38.312,-0.003,-0.026,0.024,-0.048"},EPSG_4666:{towgs84:"631.392,-66.551,481.442,1.09,-4.445,-4.487,-4.43"},EPSG_4756:{towgs84:"-192.873,-39.382,-111.202,-0.00205,-0.0005,0.00335,0.0188"},EPSG_4723:{towgs84:"-179.483,-69.379,-27.584,-7.862,8.163,6.042,-13.925"},EPSG_4726:{towgs84:"8.853,-52.644,180.304,-0.393,-2.323,2.96,-24.081"},EPSG_4267:{towgs84:"-8.0,160.0,176.0"},EPSG_5365:{towgs84:"-0.16959,0.35312,0.51846,0.03385,-0.16325,0.03446,0.03693"},EPSG_4218:{towgs84:"304.5,306.5,-318.1"},EPSG_4242:{towgs84:"-33.722,153.789,94.959,-8.581,-4.478,4.54,8.95"},EPSG_4216:{towgs84:"-292.295,248.758,429.447,4.9971,2.99,6.6906,1.0289"},ESRI_104105:{towgs84:"631.392,-66.551,481.442,1.09,-4.445,-4.487,-4.43"},ESRI_104129:{towgs84:"0,0,0"},EPSG_4673:{towgs84:"174.05,-25.49,112.57"},EPSG_4202:{towgs84:"-124,-60,154"},EPSG_4203:{towgs84:"-117.763,-51.51,139.061,0.292,0.443,0.277,-0.191"},EPSG_3819:{towgs84:"595.48,121.69,515.35,4.115,-2.9383,0.853,-3.408"},EPSG_8694:{towgs84:"-93.799,-132.737,-219.073,-1.844,0.648,-6.37,-0.169"},EPSG_4145:{towgs84:"275.57,676.78,229.6"},EPSG_4283:{towgs84:"61.55,-10.87,-40.19,39.4924,32.7221,32.8979,-9.994"},EPSG_4317:{towgs84:"2.3287,-147.0425,-92.0802,-0.3092483,0.32482185,0.49729934,5.68906266"},EPSG_4272:{towgs84:"59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993"},EPSG_4248:{towgs84:"-307.7,265.3,-363.5"},EPSG_5561:{towgs84:"24,-121,-76"},EPSG_5233:{towgs84:"-0.293,766.95,87.713,0.195704,1.695068,3.473016,-0.039338"},ESRI_104130:{towgs84:"-86,-98,-119"},ESRI_104102:{towgs84:"682,-203,480"},ESRI_37207:{towgs84:"7,-10,-26"},EPSG_4675:{towgs84:"59.935,118.4,-10.871"},ESRI_104109:{towgs84:"-89.121,-348.182,260.871"},ESRI_104112:{towgs84:"-185.583,-230.096,281.361"},ESRI_104113:{towgs84:"25.1,-275.6,222.6"},IGNF_WGS72G:{towgs84:"0,12,6"},IGNF_NTFG:{towgs84:"-168,-60,320"},IGNF_EFATE57G:{towgs84:"-127,-769,472"},IGNF_PGP50G:{towgs84:"324.8,153.6,172.1"},IGNF_REUN47G:{towgs84:"94,-948,-1262"},IGNF_CSG67G:{towgs84:"-186,230,110"},IGNF_GUAD48G:{towgs84:"-467,-16,-300"},IGNF_TAHI51G:{towgs84:"162,117,154"},IGNF_TAHAAG:{towgs84:"65,342,77"},IGNF_NUKU72G:{towgs84:"84,274,65"},IGNF_PETRELS72G:{towgs84:"365,194,166"},IGNF_WALL78G:{towgs84:"253,-133,-127"},IGNF_MAYO50G:{towgs84:"-382,-59,-262"},IGNF_TANNAG:{towgs84:"-139,-967,436"},IGNF_IGN72G:{towgs84:"-13,-348,292"},IGNF_ATIGG:{towgs84:"1118,23,66"},IGNF_FANGA84G:{towgs84:"150.57,158.33,118.32"},IGNF_RUSAT84G:{towgs84:"202.13,174.6,-15.74"},IGNF_KAUE70G:{towgs84:"126.74,300.1,-75.49"},IGNF_MOP90G:{towgs84:"-10.8,-1.8,12.77"},IGNF_MHPF67G:{towgs84:"338.08,212.58,-296.17"},IGNF_TAHI79G:{towgs84:"160.61,116.05,153.69"},IGNF_ANAA92G:{towgs84:"1.5,3.84,4.81"},IGNF_MARQUI72G:{towgs84:"330.91,-13.92,58.56"},IGNF_APAT86G:{towgs84:"143.6,197.82,74.05"},IGNF_TUBU69G:{towgs84:"237.17,171.61,-77.84"},IGNF_STPM50G:{towgs84:"11.363,424.148,373.13"},EPSG_4150:{towgs84:"674.374,15.056,405.346"},EPSG_4754:{towgs84:"-208.4058,-109.8777,-2.5764"},ESRI_104101:{towgs84:"374,150,588"},EPSG_4693:{towgs84:"0,-0.15,0.68"},EPSG_6207:{towgs84:"293.17,726.18,245.36"},EPSG_4153:{towgs84:"-133.63,-157.5,-158.62"},EPSG_4132:{towgs84:"-241.54,-163.64,396.06"},EPSG_4221:{towgs84:"-154.5,150.7,100.4"},EPSG_4266:{towgs84:"-80.7,-132.5,41.1"},EPSG_4193:{towgs84:"-70.9,-151.8,-41.4"},EPSG_5340:{towgs84:"-0.41,0.46,-0.35"},EPSG_4246:{towgs84:"-294.7,-200.1,525.5"},EPSG_4318:{towgs84:"-3.2,-5.7,2.8"},EPSG_4121:{towgs84:"-199.87,74.79,246.62"},EPSG_4223:{towgs84:"-260.1,5.5,432.2"},EPSG_4158:{towgs84:"-0.465,372.095,171.736"},EPSG_4285:{towgs84:"-128.16,-282.42,21.93"},EPSG_4613:{towgs84:"-404.78,685.68,45.47"},EPSG_4607:{towgs84:"195.671,332.517,274.607"},EPSG_4475:{towgs84:"-381.788,-57.501,-256.673"},EPSG_4208:{towgs84:"-157.84,308.54,-146.6"},EPSG_4743:{towgs84:"70.995,-335.916,262.898"},EPSG_4710:{towgs84:"-323.65,551.39,-491.22"},EPSG_7881:{towgs84:"-0.077,0.079,0.086"},EPSG_4682:{towgs84:"283.729,735.942,261.143"},EPSG_4739:{towgs84:"-156,-271,-189"},EPSG_4679:{towgs84:"-80.01,253.26,291.19"},EPSG_4750:{towgs84:"-56.263,16.136,-22.856"},EPSG_4644:{towgs84:"-10.18,-350.43,291.37"},EPSG_4695:{towgs84:"-103.746,-9.614,-255.95"},EPSG_4292:{towgs84:"-355,21,72"},EPSG_4302:{towgs84:"-61.702,284.488,472.052"},EPSG_4143:{towgs84:"-124.76,53,466.79"},EPSG_4606:{towgs84:"-153,153,307"},EPSG_4699:{towgs84:"-770.1,158.4,-498.2"},EPSG_4247:{towgs84:"-273.5,110.6,-357.9"},EPSG_4160:{towgs84:"8.88,184.86,106.69"},EPSG_4161:{towgs84:"-233.43,6.65,173.64"},EPSG_9251:{towgs84:"-9.5,122.9,138.2"},EPSG_9253:{towgs84:"-78.1,101.6,133.3"},EPSG_4297:{towgs84:"-198.383,-240.517,-107.909"},EPSG_4269:{towgs84:"0,0,0"},EPSG_4301:{towgs84:"-147,506,687"},EPSG_4618:{towgs84:"-59,-11,-52"},EPSG_4612:{towgs84:"0,0,0"},EPSG_4678:{towgs84:"44.585,-131.212,-39.544"},EPSG_4250:{towgs84:"-130,29,364"},EPSG_4144:{towgs84:"214,804,268"},EPSG_4147:{towgs84:"-17.51,-108.32,-62.39"},EPSG_4259:{towgs84:"-254.1,-5.36,-100.29"},EPSG_4164:{towgs84:"-76,-138,67"},EPSG_4211:{towgs84:"-378.873,676.002,-46.255"},EPSG_4182:{towgs84:"-422.651,-172.995,84.02"},EPSG_4224:{towgs84:"-143.87,243.37,-33.52"},EPSG_4225:{towgs84:"-205.57,168.77,-4.12"},EPSG_5527:{towgs84:"-67.35,3.88,-38.22"},EPSG_4752:{towgs84:"98,390,-22"},EPSG_4310:{towgs84:"-30,190,89"},EPSG_9248:{towgs84:"-192.26,65.72,132.08"},EPSG_4680:{towgs84:"124.5,-63.5,-281"},EPSG_4701:{towgs84:"-79.9,-158,-168.9"},EPSG_4706:{towgs84:"-146.21,112.63,4.05"},EPSG_4805:{towgs84:"682,-203,480"},EPSG_4201:{towgs84:"-165,-11,206"},EPSG_4210:{towgs84:"-157,-2,-299"},EPSG_4183:{towgs84:"-104,167,-38"},EPSG_4139:{towgs84:"11,72,-101"},EPSG_4668:{towgs84:"-86,-98,-119"},EPSG_4717:{towgs84:"-2,151,181"},EPSG_4732:{towgs84:"102,52,-38"},EPSG_4280:{towgs84:"-377,681,-50"},EPSG_4209:{towgs84:"-138,-105,-289"},EPSG_4261:{towgs84:"31,146,47"},EPSG_4658:{towgs84:"-73,46,-86"},EPSG_4721:{towgs84:"265.025,384.929,-194.046"},EPSG_4222:{towgs84:"-136,-108,-292"},EPSG_4601:{towgs84:"-255,-15,71"},EPSG_4602:{towgs84:"725,685,536"},EPSG_4603:{towgs84:"72,213.7,93"},EPSG_4605:{towgs84:"9,183,236"},EPSG_4621:{towgs84:"137,248,-430"},EPSG_4657:{towgs84:"-28,199,5"},EPSG_4316:{towgs84:"103.25,-100.4,-307.19"},EPSG_4642:{towgs84:"-13,-348,292"},EPSG_4698:{towgs84:"145,-187,103"},EPSG_4192:{towgs84:"-206.1,-174.7,-87.7"},EPSG_4311:{towgs84:"-265,120,-358"},EPSG_4135:{towgs84:"58,-283,-182"},ESRI_104138:{towgs84:"198,-226,-347"},EPSG_4245:{towgs84:"-11,851,5"},EPSG_4142:{towgs84:"-125,53,467"},EPSG_4213:{towgs84:"-106,-87,188"},EPSG_4253:{towgs84:"-133,-77,-51"},EPSG_4129:{towgs84:"-132,-110,-335"},EPSG_4713:{towgs84:"-77,-128,142"},EPSG_4239:{towgs84:"217,823,299"},EPSG_4146:{towgs84:"295,736,257"},EPSG_4155:{towgs84:"-83,37,124"},EPSG_4165:{towgs84:"-173,253,27"},EPSG_4672:{towgs84:"175,-38,113"},EPSG_4236:{towgs84:"-637,-549,-203"},EPSG_4251:{towgs84:"-90,40,88"},EPSG_4271:{towgs84:"-2,374,172"},EPSG_4175:{towgs84:"-88,4,101"},EPSG_4716:{towgs84:"298,-304,-375"},EPSG_4315:{towgs84:"-23,259,-9"},EPSG_4744:{towgs84:"-242.2,-144.9,370.3"},EPSG_4244:{towgs84:"-97,787,86"},EPSG_4293:{towgs84:"616,97,-251"},EPSG_4714:{towgs84:"-127,-769,472"},EPSG_4736:{towgs84:"260,12,-147"},EPSG_6883:{towgs84:"-235,-110,393"},EPSG_6894:{towgs84:"-63,176,185"},EPSG_4205:{towgs84:"-43,-163,45"},EPSG_4256:{towgs84:"41,-220,-134"},EPSG_4262:{towgs84:"639,405,60"},EPSG_4604:{towgs84:"174,359,365"},EPSG_4169:{towgs84:"-115,118,426"},EPSG_4620:{towgs84:"-106,-129,165"},EPSG_4184:{towgs84:"-203,141,53"},EPSG_4616:{towgs84:"-289,-124,60"},EPSG_9403:{towgs84:"-307,-92,127"},EPSG_4684:{towgs84:"-133,-321,50"},EPSG_4708:{towgs84:"-491,-22,435"},EPSG_4707:{towgs84:"114,-116,-333"},EPSG_4709:{towgs84:"145,75,-272"},EPSG_4712:{towgs84:"-205,107,53"},EPSG_4711:{towgs84:"124,-234,-25"},EPSG_4718:{towgs84:"230,-199,-752"},EPSG_4719:{towgs84:"211,147,111"},EPSG_4724:{towgs84:"208,-435,-229"},EPSG_4725:{towgs84:"189,-79,-202"},EPSG_4735:{towgs84:"647,1777,-1124"},EPSG_4722:{towgs84:"-794,119,-298"},EPSG_4728:{towgs84:"-307,-92,127"},EPSG_4734:{towgs84:"-632,438,-609"},EPSG_4727:{towgs84:"912,-58,1227"},EPSG_4729:{towgs84:"185,165,42"},EPSG_4730:{towgs84:"170,42,84"},EPSG_4733:{towgs84:"276,-57,149"},ESRI_37218:{towgs84:"230,-199,-752"},ESRI_37240:{towgs84:"-7,215,225"},ESRI_37221:{towgs84:"252,-209,-751"},ESRI_4305:{towgs84:"-123,-206,219"},ESRI_104139:{towgs84:"-73,-247,227"},EPSG_4748:{towgs84:"51,391,-36"},EPSG_4219:{towgs84:"-384,664,-48"},EPSG_4255:{towgs84:"-333,-222,114"},EPSG_4257:{towgs84:"-587.8,519.75,145.76"},EPSG_4646:{towgs84:"-963,510,-359"},EPSG_6881:{towgs84:"-24,-203,268"},EPSG_6882:{towgs84:"-183,-15,273"},EPSG_4715:{towgs84:"-104,-129,239"},IGNF_RGF93GDD:{towgs84:"0,0,0"},IGNF_RGM04GDD:{towgs84:"0,0,0"},IGNF_RGSPM06GDD:{towgs84:"0,0,0"},IGNF_RGTAAF07GDD:{towgs84:"0,0,0"},IGNF_RGFG95GDD:{towgs84:"0,0,0"},IGNF_RGNCG:{towgs84:"0,0,0"},IGNF_RGPFGDD:{towgs84:"0,0,0"},IGNF_ETRS89G:{towgs84:"0,0,0"},IGNF_RGR92GDD:{towgs84:"0,0,0"},EPSG_4173:{towgs84:"0,0,0"},EPSG_4180:{towgs84:"0,0,0"},EPSG_4619:{towgs84:"0,0,0"},EPSG_4667:{towgs84:"0,0,0"},EPSG_4075:{towgs84:"0,0,0"},EPSG_6706:{towgs84:"0,0,0"},EPSG_7798:{towgs84:"0,0,0"},EPSG_4661:{towgs84:"0,0,0"},EPSG_4669:{towgs84:"0,0,0"},EPSG_8685:{towgs84:"0,0,0"},EPSG_4151:{towgs84:"0,0,0"},EPSG_9702:{towgs84:"0,0,0"},EPSG_4758:{towgs84:"0,0,0"},EPSG_4761:{towgs84:"0,0,0"},EPSG_4765:{towgs84:"0,0,0"},EPSG_8997:{towgs84:"0,0,0"},EPSG_4023:{towgs84:"0,0,0"},EPSG_4670:{towgs84:"0,0,0"},EPSG_4694:{towgs84:"0,0,0"},EPSG_4148:{towgs84:"0,0,0"},EPSG_4163:{towgs84:"0,0,0"},EPSG_4167:{towgs84:"0,0,0"},EPSG_4189:{towgs84:"0,0,0"},EPSG_4190:{towgs84:"0,0,0"},EPSG_4176:{towgs84:"0,0,0"},EPSG_4659:{towgs84:"0,0,0"},EPSG_3824:{towgs84:"0,0,0"},EPSG_3889:{towgs84:"0,0,0"},EPSG_4046:{towgs84:"0,0,0"},EPSG_4081:{towgs84:"0,0,0"},EPSG_4558:{towgs84:"0,0,0"},EPSG_4483:{towgs84:"0,0,0"},EPSG_5013:{towgs84:"0,0,0"},EPSG_5264:{towgs84:"0,0,0"},EPSG_5324:{towgs84:"0,0,0"},EPSG_5354:{towgs84:"0,0,0"},EPSG_5371:{towgs84:"0,0,0"},EPSG_5373:{towgs84:"0,0,0"},EPSG_5381:{towgs84:"0,0,0"},EPSG_5393:{towgs84:"0,0,0"},EPSG_5489:{towgs84:"0,0,0"},EPSG_5593:{towgs84:"0,0,0"},EPSG_6135:{towgs84:"0,0,0"},EPSG_6365:{towgs84:"0,0,0"},EPSG_5246:{towgs84:"0,0,0"},EPSG_7886:{towgs84:"0,0,0"},EPSG_8431:{towgs84:"0,0,0"},EPSG_8427:{towgs84:"0,0,0"},EPSG_8699:{towgs84:"0,0,0"},EPSG_8818:{towgs84:"0,0,0"},EPSG_4757:{towgs84:"0,0,0"},EPSG_9140:{towgs84:"0,0,0"},EPSG_8086:{towgs84:"0,0,0"},EPSG_4686:{towgs84:"0,0,0"},EPSG_4737:{towgs84:"0,0,0"},EPSG_4702:{towgs84:"0,0,0"},EPSG_4747:{towgs84:"0,0,0"},EPSG_4749:{towgs84:"0,0,0"},EPSG_4674:{towgs84:"0,0,0"},EPSG_4755:{towgs84:"0,0,0"},EPSG_4759:{towgs84:"0,0,0"},EPSG_4762:{towgs84:"0,0,0"},EPSG_4763:{towgs84:"0,0,0"},EPSG_4764:{towgs84:"0,0,0"},EPSG_4166:{towgs84:"0,0,0"},EPSG_4170:{towgs84:"0,0,0"},EPSG_5546:{towgs84:"0,0,0"},EPSG_7844:{towgs84:"0,0,0"},EPSG_4818:{towgs84:"589,76,480"}};for(var qv in tl){var gh=tl[qv];gh.datumName&&(tl[gh.datumName]=gh)}function jv(n,t,e,i,s,r,a){var o={};return n===void 0||n==="none"?o.datum_type=Ac:o.datum_type=ov,t&&(o.datum_params=t.map(parseFloat),(o.datum_params[0]!==0||o.datum_params[1]!==0||o.datum_params[2]!==0)&&(o.datum_type=Os),o.datum_params.length>3&&(o.datum_params[3]!==0||o.datum_params[4]!==0||o.datum_params[5]!==0||o.datum_params[6]!==0)&&(o.datum_type=Us,o.datum_params[3]*=ma,o.datum_params[4]*=ma,o.datum_params[5]*=ma,o.datum_params[6]=o.datum_params[6]/1e6+1)),a&&(o.datum_type=Cr,o.grids=a),o.a=e,o.b=i,o.es=s,o.ep2=r,o}var tf={};function Zv(n,t,e){return t instanceof ArrayBuffer?$v(n,t,e):{ready:Kv(n,t)}}function $v(n,t,e){var i=!0;e!==void 0&&e.includeErrorFields===!1&&(i=!1);var s=new DataView(t),r=tx(s),a=ex(s,r),o=nx(s,a,r,i),l={header:a,subgrids:o};return tf[n]=l,l}async function Kv(n,t){for(var e=[],i=await t.getImageCount(),s=i-1;s>=0;s--){var r=await t.getImage(s),a=await r.readRasters(),o=a,l=[r.getWidth(),r.getHeight()],h=r.getBoundingBox().map(yd),u=[r.fileDirectory.ModelPixelScale[0],r.fileDirectory.ModelPixelScale[1]].map(yd),f=h[0]+(l[0]-1)*u[0],c=h[3]-(l[1]-1)*u[1],d=o[0],m=o[1],_=[];for(let y=l[1]-1;y>=0;y--)for(let x=l[0]-1;x>=0;x--){var g=y*l[0]+x;_.push([-Qi(m[g]),Qi(d[g])])}e.push({del:u,lim:l,ll:[-f,c],cvs:_})}var p={header:{nSubgrids:i},subgrids:e};return tf[n]=p,p}function Jv(n){if(n===void 0)return null;var t=n.split(",");return t.map(Qv)}function Qv(n){if(n.length===0)return null;var t=n[0]==="@";return t&&(n=n.slice(1)),n==="null"?{name:"null",mandatory:!t,grid:null,isNull:!0}:{name:n,mandatory:!t,grid:tf[n]||null,isNull:!1}}function yd(n){return n*Math.PI/180}function Qi(n){return n/3600*Math.PI/180}function tx(n){var t=n.getInt32(8,!1);return t===11?!1:(t=n.getInt32(8,!0),t!==11&&console.warn("Failed to detect nadgrid endian-ness, defaulting to little-endian"),!0)}function ex(n,t){return{nFields:n.getInt32(8,t),nSubgridFields:n.getInt32(24,t),nSubgrids:n.getInt32(40,t),shiftType:Cc(n,56,64).trim(),fromSemiMajorAxis:n.getFloat64(120,t),fromSemiMinorAxis:n.getFloat64(136,t),toSemiMajorAxis:n.getFloat64(152,t),toSemiMinorAxis:n.getFloat64(168,t)}}function Cc(n,t,e){return String.fromCharCode.apply(null,new Uint8Array(n.buffer.slice(t,e)))}function nx(n,t,e,i){for(var s=176,r=[],a=0;a<t.nSubgrids;a++){var o=sx(n,s,e),l=rx(n,s,o,e,i),h=Math.round(1+(o.upperLongitude-o.lowerLongitude)/o.longitudeInterval),u=Math.round(1+(o.upperLatitude-o.lowerLatitude)/o.latitudeInterval);r.push({ll:[Qi(o.lowerLongitude),Qi(o.lowerLatitude)],del:[Qi(o.longitudeInterval),Qi(o.latitudeInterval)],lim:[h,u],count:o.gridNodeCount,cvs:ix(l)});var f=16;i===!1&&(f=8),s+=176+o.gridNodeCount*f}return r}function ix(n){return n.map(function(t){return[Qi(t.longitudeShift),Qi(t.latitudeShift)]})}function sx(n,t,e){return{name:Cc(n,t+8,t+16).trim(),parent:Cc(n,t+24,t+24+8).trim(),lowerLatitude:n.getFloat64(t+72,e),upperLatitude:n.getFloat64(t+88,e),lowerLongitude:n.getFloat64(t+104,e),upperLongitude:n.getFloat64(t+120,e),latitudeInterval:n.getFloat64(t+136,e),longitudeInterval:n.getFloat64(t+152,e),gridNodeCount:n.getInt32(t+168,e)}}function rx(n,t,e,i,s){var r=t+176,a=16;s===!1&&(a=8);for(var o=[],l=0;l<e.gridNodeCount;l++){var h={latitudeShift:n.getFloat32(r+l*a,i),longitudeShift:n.getFloat32(r+l*a+4,i)};s!==!1&&(h.latitudeAccuracy=n.getFloat32(r+l*a+8,i),h.longitudeAccuracy=n.getFloat32(r+l*a+12,i)),o.push(h)}return o}function Hn(n,t){if(!(this instanceof Hn))return new Hn(n);this.forward=null,this.inverse=null,this.init=null,this.name,this.names=null,this.title,t=t||function(h){if(h)throw h};var e=fg(n);if(typeof e!="object"){t("Could not parse to valid json: "+n);return}var i=Hn.projections.get(e.projName);if(!i){t("Could not get projection name from: "+n);return}if(e.datumCode&&e.datumCode!=="none"){var s=rs(tl,e.datumCode);s&&(e.datum_params=e.datum_params||(s.towgs84?s.towgs84.split(","):null),e.ellps=s.ellipse,e.datumName=s.datumName?s.datumName:e.datumCode)}e.k0=e.k0||1,e.axis=e.axis||"enu",e.ellps=e.ellps||"wgs84",e.lat1=e.lat1||e.lat0;var r=Yv(e.a,e.b,e.rf,e.ellps,e.sphere),a=Xv(r.a,r.b,r.rf,e.R_A),o=Jv(e.nadgrids),l=e.datum||jv(e.datumCode,e.datum_params,r.a,r.b,a.es,a.ep2,o);vd(this,e),vd(this,i),this.a=r.a,this.b=r.b,this.rf=r.rf,this.sphere=r.sphere,this.es=a.es,this.e=a.e,this.ep2=a.ep2,this.datum=l,"init"in this&&typeof this.init=="function"&&this.init(),t(null,this)}Hn.projections=Hv;Hn.projections.start();function ax(n,t){return n.datum_type!==t.datum_type||n.a!==t.a||Math.abs(n.es-t.es)>5e-11?!1:n.datum_type===Os?n.datum_params[0]===t.datum_params[0]&&n.datum_params[1]===t.datum_params[1]&&n.datum_params[2]===t.datum_params[2]:n.datum_type===Us?n.datum_params[0]===t.datum_params[0]&&n.datum_params[1]===t.datum_params[1]&&n.datum_params[2]===t.datum_params[2]&&n.datum_params[3]===t.datum_params[3]&&n.datum_params[4]===t.datum_params[4]&&n.datum_params[5]===t.datum_params[5]&&n.datum_params[6]===t.datum_params[6]:!0}function _g(n,t,e){var i=n.x,s=n.y,r=n.z?n.z:0,a,o,l,h;if(s<-J&&s>-1.001*J)s=-J;else if(s>J&&s<1.001*J)s=J;else{if(s<-J)return{x:-1/0,y:-1/0,z:n.z};if(s>J)return{x:1/0,y:1/0,z:n.z}}return i>Math.PI&&(i-=2*Math.PI),o=Math.sin(s),h=Math.cos(s),l=o*o,a=e/Math.sqrt(1-t*l),{x:(a+r)*h*Math.cos(i),y:(a+r)*h*Math.sin(i),z:(a*(1-t)+r)*o}}function vg(n,t,e,i){var s=1e-12,r=s*s,a=30,o,l,h,u,f,c,d,m,_,g,p,y,x,v=n.x,T=n.y,b=n.z?n.z:0,R,L,S;if(o=Math.sqrt(v*v+T*T),l=Math.sqrt(v*v+T*T+b*b),o/e<s){if(R=0,l/e<s)return L=J,S=-i,{x:n.x,y:n.y,z:n.z}}else R=Math.atan2(T,v);h=b/l,u=o/l,f=1/Math.sqrt(1-t*(2-t)*u*u),m=u*(1-t)*f,_=h*f,x=0;do x++,d=e/Math.sqrt(1-t*_*_),S=o*m+b*_-d*(1-t*_*_),c=t*d/(d+S),f=1/Math.sqrt(1-c*(2-c)*u*u),g=u*(1-c)*f,p=h*f,y=p*m-g*_,m=g,_=p;while(y*y>r&&x<a);return L=Math.atan(p/Math.abs(g)),{x:R,y:L,z:S}}function ox(n,t,e){if(t===Os)return{x:n.x+e[0],y:n.y+e[1],z:n.z+e[2]};if(t===Us){var i=e[0],s=e[1],r=e[2],a=e[3],o=e[4],l=e[5],h=e[6];return{x:h*(n.x-l*n.y+o*n.z)+i,y:h*(l*n.x+n.y-a*n.z)+s,z:h*(-o*n.x+a*n.y+n.z)+r}}}function lx(n,t,e){if(t===Os)return{x:n.x-e[0],y:n.y-e[1],z:n.z-e[2]};if(t===Us){var i=e[0],s=e[1],r=e[2],a=e[3],o=e[4],l=e[5],h=e[6],u=(n.x-i)/h,f=(n.y-s)/h,c=(n.z-r)/h;return{x:u+l*f-o*c,y:-l*u+f+a*c,z:o*u-a*f+c}}}function lo(n){return n===Os||n===Us}function hx(n,t,e){if(ax(n,t)||n.datum_type===Ac||t.datum_type===Ac)return e;var i=n.a,s=n.es;if(n.datum_type===Cr){var r=Md(n,!1,e);if(r!==0)return;i=fd,s=dd}var a=t.a,o=t.b,l=t.es;if(t.datum_type===Cr&&(a=fd,o=lv,l=dd),s===l&&i===a&&!lo(n.datum_type)&&!lo(t.datum_type))return e;if(e=_g(e,s,i),lo(n.datum_type)&&(e=ox(e,n.datum_type,n.datum_params)),lo(t.datum_type)&&(e=lx(e,t.datum_type,t.datum_params)),e=vg(e,l,a,o),t.datum_type===Cr){var h=Md(t,!0,e);if(h!==0)return}return e}function Md(n,t,e){if(n.grids===null||n.grids.length===0)return console.log("Grid shift grids not found"),-1;var i={x:-e.x,y:e.y},s={x:Number.NaN,y:Number.NaN},r=[];t:for(var a=0;a<n.grids.length;a++){var o=n.grids[a];if(r.push(o.name),o.isNull){s=i;break}if(o.grid===null){if(o.mandatory)return console.log("Unable to find mandatory grid '"+o.name+"'"),-1;continue}for(var l=o.grid.subgrids,h=0,u=l.length;h<u;h++){var f=l[h],c=(Math.abs(f.del[1])+Math.abs(f.del[0]))/1e4,d=f.ll[0]-c,m=f.ll[1]-c,_=f.ll[0]+(f.lim[0]-1)*f.del[0]+c,g=f.ll[1]+(f.lim[1]-1)*f.del[1]+c;if(!(m>i.y||d>i.x||g<i.y||_<i.x)&&(s=cx(i,t,f),!isNaN(s.x)))break t}}return isNaN(s.x)?(console.log("Failed to find a grid shift table for location '"+-i.x*wn+" "+i.y*wn+" tried: '"+r+"'"),-1):(e.x=-s.x,e.y=s.y,0)}function cx(n,t,e){var i={x:Number.NaN,y:Number.NaN};if(isNaN(n.x))return i;var s={x:n.x,y:n.y};s.x-=e.ll[0],s.y-=e.ll[1],s.x=ot(s.x-Math.PI)+Math.PI;var r=Ed(s,e);if(t){if(isNaN(r.x))return i;r.x=s.x-r.x,r.y=s.y-r.y;var a=9,o=1e-12,l,h;do{if(h=Ed(r,e),isNaN(h.x)){console.log("Inverse grid shift iteration failed, presumably at grid edge.  Using first approximation.");break}l={x:s.x-(h.x+r.x),y:s.y-(h.y+r.y)},r.x+=l.x,r.y+=l.y}while(a--&&Math.abs(l.x)>o&&Math.abs(l.y)>o);if(a<0)return console.log("Inverse grid shift iterator failed to converge."),i;i.x=ot(r.x+e.ll[0]),i.y=r.y+e.ll[1]}else isNaN(r.x)||(i.x=n.x+r.x,i.y=n.y+r.y);return i}function Ed(n,t){var e={x:n.x/t.del[0],y:n.y/t.del[1]},i={x:Math.floor(e.x),y:Math.floor(e.y)},s={x:e.x-1*i.x,y:e.y-1*i.y},r={x:Number.NaN,y:Number.NaN},a;if(i.x<0||i.x>=t.lim[0]||i.y<0||i.y>=t.lim[1])return r;a=i.y*t.lim[0]+i.x;var o={x:t.cvs[a][0],y:t.cvs[a][1]};a++;var l={x:t.cvs[a][0],y:t.cvs[a][1]};a+=t.lim[0];var h={x:t.cvs[a][0],y:t.cvs[a][1]};a--;var u={x:t.cvs[a][0],y:t.cvs[a][1]},f=s.x*s.y,c=s.x*(1-s.y),d=(1-s.x)*(1-s.y),m=(1-s.x)*s.y;return r.x=d*o.x+c*l.x+m*u.x+f*h.x,r.y=d*o.y+c*l.y+m*u.y+f*h.y,r}function Sd(n,t,e){var i=e.x,s=e.y,r=e.z||0,a,o,l,h={};for(l=0;l<3;l++)if(!(t&&l===2&&e.z===void 0))switch(l===0?(a=i,"ew".indexOf(n.axis[l])!==-1?o="x":o="y"):l===1?(a=s,"ns".indexOf(n.axis[l])!==-1?o="y":o="x"):(a=r,o="z"),n.axis[l]){case"e":h[o]=a;break;case"w":h[o]=-a;break;case"n":h[o]=a;break;case"s":h[o]=-a;break;case"u":e[o]!==void 0&&(h.z=a);break;case"d":e[o]!==void 0&&(h.z=-a);break;default:return null}return h}function xg(n){var t={x:n[0],y:n[1]};return n.length>2&&(t.z=n[2]),n.length>3&&(t.m=n[3]),t}function ux(n){wd(n.x),wd(n.y)}function wd(n){if(typeof Number.isFinite=="function"){if(Number.isFinite(n))return;throw new TypeError("coordinates must be finite numbers")}if(typeof n!="number"||n!==n||!isFinite(n))throw new TypeError("coordinates must be finite numbers")}function fx(n,t){return(n.datum.datum_type===Os||n.datum.datum_type===Us||n.datum.datum_type===Cr)&&t.datumCode!=="WGS84"||(t.datum.datum_type===Os||t.datum.datum_type===Us||t.datum.datum_type===Cr)&&n.datumCode!=="WGS84"}function Ml(n,t,e,i){var s;Array.isArray(e)?e=xg(e):e={x:e.x,y:e.y,z:e.z,m:e.m};var r=e.z!==void 0;if(ux(e),n.datum&&t.datum&&fx(n,t)&&(s=new Hn("WGS84"),e=Ml(n,s,e,i),n=s),i&&n.axis!=="enu"&&(e=Sd(n,!1,e)),n.projName==="longlat")e={x:e.x*Le,y:e.y*Le,z:e.z||0};else if(n.to_meter&&(e={x:e.x*n.to_meter,y:e.y*n.to_meter,z:e.z||0}),e=n.inverse(e),!e)return;if(n.from_greenwich&&(e.x+=n.from_greenwich),e=hx(n.datum,t.datum,e),!!e)return e=e,t.from_greenwich&&(e={x:e.x-t.from_greenwich,y:e.y,z:e.z||0}),t.projName==="longlat"?e={x:e.x*wn,y:e.y*wn,z:e.z||0}:(e=t.forward(e),t.to_meter&&(e={x:e.x/t.to_meter,y:e.y/t.to_meter,z:e.z||0})),i&&t.axis!=="enu"?Sd(t,!0,e):(e&&!r&&delete e.z,e)}var Td=Hn("WGS84");function _h(n,t,e,i){var s,r,a;return Array.isArray(e)?(s=Ml(n,t,e,i)||{x:NaN,y:NaN},e.length>2?typeof n.name<"u"&&n.name==="geocent"||typeof t.name<"u"&&t.name==="geocent"?typeof s.z=="number"?[s.x,s.y,s.z].concat(e.slice(3)):[s.x,s.y,e[2]].concat(e.slice(3)):[s.x,s.y].concat(e.slice(2)):[s.x,s.y]):(r=Ml(n,t,e,i),a=Object.keys(e),a.length===2||a.forEach(function(o){if(typeof n.name<"u"&&n.name==="geocent"||typeof t.name<"u"&&t.name==="geocent"){if(o==="x"||o==="y"||o==="z")return}else if(o==="x"||o==="y")return;r[o]=e[o]}),r)}function ho(n){return n instanceof Hn?n:typeof n=="object"&&"oProj"in n?n.oProj:Hn(n)}function dx(n,t,e){var i,s,r=!1,a;return typeof t>"u"?(s=ho(n),i=Td,r=!0):(typeof t.x<"u"||Array.isArray(t))&&(e=t,s=ho(n),i=Td,r=!0),i||(i=ho(n)),s||(s=ho(t)),e?_h(i,s,e):(a={forward:function(o,l){return _h(i,s,o,l)},inverse:function(o,l){return _h(s,i,o,l)}},r&&(a.oProj=s),a)}var bd=6,yg="AJSAJS",Mg="AFAFAF",yr=65,Mn=73,Bn=79,ha=86,ca=90;const px={forward:Eg,inverse:mx,toPoint:Sg};function Eg(n,t){return t=t||5,vx(gx({lat:n[1],lon:n[0]}),t)}function mx(n){var t=ef(Tg(n.toUpperCase()));return t.lat&&t.lon?[t.lon,t.lat,t.lon,t.lat]:[t.left,t.bottom,t.right,t.top]}function Sg(n){var t=ef(Tg(n.toUpperCase()));return t.lat&&t.lon?[t.lon,t.lat]:[(t.left+t.right)/2,(t.top+t.bottom)/2]}function vh(n){return n*(Math.PI/180)}function Ad(n){return 180*(n/Math.PI)}function gx(n){var t=n.lat,e=n.lon,i=6378137,s=.00669438,r=.9996,a,o,l,h,u,f,c,d=vh(t),m=vh(e),_,g;g=Math.floor((e+180)/6)+1,e===180&&(g=60),t>=56&&t<64&&e>=3&&e<12&&(g=32),t>=72&&t<84&&(e>=0&&e<9?g=31:e>=9&&e<21?g=33:e>=21&&e<33?g=35:e>=33&&e<42&&(g=37)),a=(g-1)*6-180+3,_=vh(a),o=s/(1-s),l=i/Math.sqrt(1-s*Math.sin(d)*Math.sin(d)),h=Math.tan(d)*Math.tan(d),u=o*Math.cos(d)*Math.cos(d),f=Math.cos(d)*(m-_),c=i*((1-s/4-3*s*s/64-5*s*s*s/256)*d-(3*s/8+3*s*s/32+45*s*s*s/1024)*Math.sin(2*d)+(15*s*s/256+45*s*s*s/1024)*Math.sin(4*d)-35*s*s*s/3072*Math.sin(6*d));var p=r*l*(f+(1-h+u)*f*f*f/6+(5-18*h+h*h+72*u-58*o)*f*f*f*f*f/120)+5e5,y=r*(c+l*Math.tan(d)*(f*f/2+(5-h+9*u+4*u*u)*f*f*f*f/24+(61-58*h+h*h+600*u-330*o)*f*f*f*f*f*f/720));return t<0&&(y+=1e7),{northing:Math.round(y),easting:Math.round(p),zoneNumber:g,zoneLetter:_x(t)}}function ef(n){var t=n.northing,e=n.easting,i=n.zoneLetter,s=n.zoneNumber;if(s<0||s>60)return null;var r=.9996,a=6378137,o=.00669438,l,h=(1-Math.sqrt(1-o))/(1+Math.sqrt(1-o)),u,f,c,d,m,_,g,p,y,x=e-5e5,v=t;i<"N"&&(v-=1e7),g=(s-1)*6-180+3,l=o/(1-o),_=v/r,p=_/(a*(1-o/4-3*o*o/64-5*o*o*o/256)),y=p+(3*h/2-27*h*h*h/32)*Math.sin(2*p)+(21*h*h/16-55*h*h*h*h/32)*Math.sin(4*p)+151*h*h*h/96*Math.sin(6*p),u=a/Math.sqrt(1-o*Math.sin(y)*Math.sin(y)),f=Math.tan(y)*Math.tan(y),c=l*Math.cos(y)*Math.cos(y),d=a*(1-o)/Math.pow(1-o*Math.sin(y)*Math.sin(y),1.5),m=x/(u*r);var T=y-u*Math.tan(y)/d*(m*m/2-(5+3*f+10*c-4*c*c-9*l)*m*m*m*m/24+(61+90*f+298*c+45*f*f-252*l-3*c*c)*m*m*m*m*m*m/720);T=Ad(T);var b=(m-(1+2*f+c)*m*m*m/6+(5-2*c+28*f-3*c*c+8*l+24*f*f)*m*m*m*m*m/120)/Math.cos(y);b=g+Ad(b);var R;if(n.accuracy){var L=ef({northing:n.northing+n.accuracy,easting:n.easting+n.accuracy,zoneLetter:n.zoneLetter,zoneNumber:n.zoneNumber});R={top:L.lat,right:L.lon,bottom:T,left:b}}else R={lat:T,lon:b};return R}function _x(n){var t="Z";return 84>=n&&n>=72?t="X":72>n&&n>=64?t="W":64>n&&n>=56?t="V":56>n&&n>=48?t="U":48>n&&n>=40?t="T":40>n&&n>=32?t="S":32>n&&n>=24?t="R":24>n&&n>=16?t="Q":16>n&&n>=8?t="P":8>n&&n>=0?t="N":0>n&&n>=-8?t="M":-8>n&&n>=-16?t="L":-16>n&&n>=-24?t="K":-24>n&&n>=-32?t="J":-32>n&&n>=-40?t="H":-40>n&&n>=-48?t="G":-48>n&&n>=-56?t="F":-56>n&&n>=-64?t="E":-64>n&&n>=-72?t="D":-72>n&&n>=-80&&(t="C"),t}function vx(n,t){var e="00000"+n.easting,i="00000"+n.northing;return n.zoneNumber+n.zoneLetter+xx(n.easting,n.northing,n.zoneNumber)+e.substr(e.length-5,t)+i.substr(i.length-5,t)}function xx(n,t,e){var i=wg(e),s=Math.floor(n/1e5),r=Math.floor(t/1e5)%20;return yx(s,r,i)}function wg(n){var t=n%bd;return t===0&&(t=bd),t}function yx(n,t,e){var i=e-1,s=yg.charCodeAt(i),r=Mg.charCodeAt(i),a=s+n-1,o=r+t,l=!1;a>ca&&(a=a-ca+yr-1,l=!0),(a===Mn||s<Mn&&a>Mn||(a>Mn||s<Mn)&&l)&&a++,(a===Bn||s<Bn&&a>Bn||(a>Bn||s<Bn)&&l)&&(a++,a===Mn&&a++),a>ca&&(a=a-ca+yr-1),o>ha?(o=o-ha+yr-1,l=!0):l=!1,(o===Mn||r<Mn&&o>Mn||(o>Mn||r<Mn)&&l)&&o++,(o===Bn||r<Bn&&o>Bn||(o>Bn||r<Bn)&&l)&&(o++,o===Mn&&o++),o>ha&&(o=o-ha+yr-1);var h=String.fromCharCode(a)+String.fromCharCode(o);return h}function Tg(n){if(n&&n.length===0)throw"MGRSPoint coverting from nothing";for(var t=n.length,e=null,i="",s,r=0;!/[A-Z]/.test(s=n.charAt(r));){if(r>=2)throw"MGRSPoint bad conversion from: "+n;i+=s,r++}var a=parseInt(i,10);if(r===0||r+3>t)throw"MGRSPoint bad conversion from: "+n;var o=n.charAt(r++);if(o<="A"||o==="B"||o==="Y"||o>="Z"||o==="I"||o==="O")throw"MGRSPoint zone letter "+o+" not handled: "+n;e=n.substring(r,r+=2);for(var l=wg(a),h=Mx(e.charAt(0),l),u=Ex(e.charAt(1),l);u<Sx(o);)u+=2e6;var f=t-r;if(f%2!==0)throw`MGRSPoint has to have an even number 
of digits after the zone letter and two 100km letters - front 
half for easting meters, second half for 
northing meters`+n;var c=f/2,d=0,m=0,_,g,p,y,x;return c>0&&(_=1e5/Math.pow(10,c),g=n.substring(r,r+c),d=parseFloat(g)*_,p=n.substring(r+c),m=parseFloat(p)*_),y=d+h,x=m+u,{easting:y,northing:x,zoneLetter:o,zoneNumber:a,accuracy:_}}function Mx(n,t){for(var e=yg.charCodeAt(t-1),i=1e5,s=!1;e!==n.charCodeAt(0);){if(e++,e===Mn&&e++,e===Bn&&e++,e>ca){if(s)throw"Bad character: "+n;e=yr,s=!0}i+=1e5}return i}function Ex(n,t){if(n>"V")throw"MGRSPoint given invalid Northing "+n;for(var e=Mg.charCodeAt(t-1),i=0,s=!1;e!==n.charCodeAt(0);){if(e++,e===Mn&&e++,e===Bn&&e++,e>ha){if(s)throw"Bad character: "+n;e=yr,s=!0}i+=1e5}return i}function Sx(n){var t;switch(n){case"C":t=11e5;break;case"D":t=2e6;break;case"E":t=28e5;break;case"F":t=37e5;break;case"G":t=46e5;break;case"H":t=55e5;break;case"J":t=64e5;break;case"K":t=73e5;break;case"L":t=82e5;break;case"M":t=91e5;break;case"N":t=0;break;case"P":t=8e5;break;case"Q":t=17e5;break;case"R":t=26e5;break;case"S":t=35e5;break;case"T":t=44e5;break;case"U":t=53e5;break;case"V":t=62e5;break;case"W":t=7e6;break;case"X":t=79e5;break;default:t=-1}if(t>=0)return t;throw"Invalid zone letter: "+n}function Nr(n,t,e){if(!(this instanceof Nr))return new Nr(n,t,e);if(Array.isArray(n))this.x=n[0],this.y=n[1],this.z=n[2]||0;else if(typeof n=="object")this.x=n.x,this.y=n.y,this.z=n.z||0;else if(typeof n=="string"&&typeof t>"u"){var i=n.split(",");this.x=parseFloat(i[0]),this.y=parseFloat(i[1]),this.z=parseFloat(i[2])||0}else this.x=n,this.y=t,this.z=e||0;console.warn("proj4.Point will be removed in version 3, use proj4.toPoint")}Nr.fromMGRS=function(n){return new Nr(Sg(n))};Nr.prototype.toMGRS=function(n){return Eg([this.x,this.y],n)};var wx=1,Tx=.25,Rd=.046875,Cd=.01953125,Pd=.01068115234375,bx=.75,Ax=.46875,Rx=.013020833333333334,Cx=.007120768229166667,Px=.3645833333333333,Lx=.005696614583333333,Ix=.3076171875;function nf(n){var t=[];t[0]=wx-n*(Tx+n*(Rd+n*(Cd+n*Pd))),t[1]=n*(bx-n*(Rd+n*(Cd+n*Pd)));var e=n*n;return t[2]=e*(Ax-n*(Rx+n*Cx)),e*=n,t[3]=e*(Px-n*Lx),t[4]=e*n*Ix,t}function Hr(n,t,e,i){return e*=t,t*=t,i[0]*n-e*(i[1]+t*(i[2]+t*(i[3]+t*i[4])))}var Dx=20;function sf(n,t,e){for(var i=1/(1-t),s=n,r=Dx;r;--r){var a=Math.sin(s),o=1-t*a*a;if(o=(Hr(s,a,Math.cos(s),e)-n)*(o*Math.sqrt(o))*i,s-=o,Math.abs(o)<st)return s}return s}function Nx(){this.x0=this.x0!==void 0?this.x0:0,this.y0=this.y0!==void 0?this.y0:0,this.long0=this.long0!==void 0?this.long0:0,this.lat0=this.lat0!==void 0?this.lat0:0,this.es&&(this.en=nf(this.es),this.ml0=Hr(this.lat0,Math.sin(this.lat0),Math.cos(this.lat0),this.en))}function Ox(n){var t=n.x,e=n.y,i=ot(t-this.long0,this.over),s,r,a,o=Math.sin(e),l=Math.cos(e);if(this.es){var u=l*i,f=Math.pow(u,2),c=this.ep2*Math.pow(l,2),d=Math.pow(c,2),m=Math.abs(l)>st?Math.tan(e):0,_=Math.pow(m,2),g=Math.pow(_,2);s=1-this.es*Math.pow(o,2),u=u/Math.sqrt(s);var p=Hr(e,o,l,this.en);r=this.a*(this.k0*u*(1+f/6*(1-_+c+f/20*(5-18*_+g+14*c-58*_*c+f/42*(61+179*g-g*_-479*_)))))+this.x0,a=this.a*(this.k0*(p-this.ml0+o*i*u/2*(1+f/12*(5-_+9*c+4*d+f/30*(61+g-58*_+270*c-330*_*c+f/56*(1385+543*g-g*_-3111*_))))))+this.y0}else{var h=l*Math.sin(i);if(Math.abs(Math.abs(h)-1)<st)return 93;if(r=.5*this.a*this.k0*Math.log((1+h)/(1-h))+this.x0,a=l*Math.cos(i)/Math.sqrt(1-Math.pow(h,2)),h=Math.abs(a),h>=1){if(h-1>st)return 93;a=0}else a=Math.acos(a);e<0&&(a=-a),a=this.a*this.k0*(a-this.lat0)+this.y0}return n.x=r,n.y=a,n}function Ux(n){var t,e,i,s,r=(n.x-this.x0)*(1/this.a),a=(n.y-this.y0)*(1/this.a);if(this.es)if(t=this.ml0+a/this.k0,e=sf(t,this.es,this.en),Math.abs(e)<J){var f=Math.sin(e),c=Math.cos(e),d=Math.abs(c)>st?Math.tan(e):0,m=this.ep2*Math.pow(c,2),_=Math.pow(m,2),g=Math.pow(d,2),p=Math.pow(g,2);t=1-this.es*Math.pow(f,2);var y=r*Math.sqrt(t)/this.k0,x=Math.pow(y,2);t=t*d,i=e-t*x/(1-this.es)*.5*(1-x/12*(5+3*g-9*m*g+m-4*_-x/30*(61+90*g-252*m*g+45*p+46*m-x/56*(1385+3633*g+4095*p+1574*p*g)))),s=ot(this.long0+y*(1-x/6*(1+2*g+m-x/20*(5+28*g+24*p+8*m*g+6*m-x/42*(61+662*g+1320*p+720*p*g))))/c,this.over)}else i=J*Ha(a),s=0;else{var o=Math.exp(r/this.k0),l=.5*(o-1/o),h=this.lat0+a/this.k0,u=Math.cos(h);t=Math.sqrt((1-Math.pow(u,2))/(1+Math.pow(l,2))),i=Math.asin(t),a<0&&(i=-i),l===0&&u===0?s=0:s=ot(Math.atan2(l,u)+this.long0,this.over)}return n.x=s,n.y=i,n}var Fx=["Fast_Transverse_Mercator","Fast Transverse Mercator"];const el={init:Nx,forward:Ox,inverse:Ux,names:Fx};function bg(n){var t=Math.exp(n);return t=(t-1/t)/2,t}function Sn(n,t){n=Math.abs(n),t=Math.abs(t);var e=Math.max(n,t),i=Math.min(n,t)/(e||1);return e*Math.sqrt(1+Math.pow(i,2))}function Gx(n){var t=1+n,e=t-1;return e===0?n:n*Math.log(t)/e}function Bx(n){var t=Math.abs(n);return t=Gx(t*(1+t/(Sn(1,t)+1))),n<0?-t:t}function rf(n,t){for(var e=2*Math.cos(2*t),i=n.length-1,s=n[i],r=0,a;--i>=0;)a=-r+e*s+n[i],r=s,s=a;return t+a*Math.sin(2*t)}function zx(n,t){for(var e=2*Math.cos(t),i=n.length-1,s=n[i],r=0,a;--i>=0;)a=-r+e*s+n[i],r=s,s=a;return Math.sin(t)*a}function kx(n){var t=Math.exp(n);return t=(t+1/t)/2,t}function Ag(n,t,e){for(var i=Math.sin(t),s=Math.cos(t),r=bg(e),a=kx(e),o=2*s*a,l=-2*i*r,h=n.length-1,u=n[h],f=0,c=0,d=0,m,_;--h>=0;)m=c,_=f,c=u,f=d,u=-m+o*c-l*f+n[h],d=-_+l*c+o*f;return o=i*a,l=s*r,[o*u-l*d,o*d+l*u]}function Vx(){if(!this.approx&&(isNaN(this.es)||this.es<=0))throw new Error('Incorrect elliptical usage. Try using the +approx option in the proj string, or PROJECTION["Fast_Transverse_Mercator"] in the WKT.');this.approx&&(el.init.apply(this),this.forward=el.forward,this.inverse=el.inverse),this.x0=this.x0!==void 0?this.x0:0,this.y0=this.y0!==void 0?this.y0:0,this.long0=this.long0!==void 0?this.long0:0,this.lat0=this.lat0!==void 0?this.lat0:0,this.cgb=[],this.cbg=[],this.utg=[],this.gtu=[];var n=this.es/(1+Math.sqrt(1-this.es)),t=n/(2-n),e=t;this.cgb[0]=t*(2+t*(-2/3+t*(-2+t*(116/45+t*(26/45+t*(-2854/675)))))),this.cbg[0]=t*(-2+t*(2/3+t*(4/3+t*(-82/45+t*(32/45+t*(4642/4725)))))),e=e*t,this.cgb[1]=e*(7/3+t*(-8/5+t*(-227/45+t*(2704/315+t*(2323/945))))),this.cbg[1]=e*(5/3+t*(-16/15+t*(-13/9+t*(904/315+t*(-1522/945))))),e=e*t,this.cgb[2]=e*(56/15+t*(-136/35+t*(-1262/105+t*(73814/2835)))),this.cbg[2]=e*(-26/15+t*(34/21+t*(8/5+t*(-12686/2835)))),e=e*t,this.cgb[3]=e*(4279/630+t*(-332/35+t*(-399572/14175))),this.cbg[3]=e*(1237/630+t*(-12/5+t*(-24832/14175))),e=e*t,this.cgb[4]=e*(4174/315+t*(-144838/6237)),this.cbg[4]=e*(-734/315+t*(109598/31185)),e=e*t,this.cgb[5]=e*(601676/22275),this.cbg[5]=e*(444337/155925),e=Math.pow(t,2),this.Qn=this.k0/(1+t)*(1+e*(1/4+e*(1/64+e/256))),this.utg[0]=t*(-.5+t*(2/3+t*(-37/96+t*(1/360+t*(81/512+t*(-96199/604800)))))),this.gtu[0]=t*(.5+t*(-2/3+t*(5/16+t*(41/180+t*(-127/288+t*(7891/37800)))))),this.utg[1]=e*(-1/48+t*(-1/15+t*(437/1440+t*(-46/105+t*(1118711/3870720))))),this.gtu[1]=e*(13/48+t*(-3/5+t*(557/1440+t*(281/630+t*(-1983433/1935360))))),e=e*t,this.utg[2]=e*(-17/480+t*(37/840+t*(209/4480+t*(-5569/90720)))),this.gtu[2]=e*(61/240+t*(-103/140+t*(15061/26880+t*(167603/181440)))),e=e*t,this.utg[3]=e*(-4397/161280+t*(11/504+t*(830251/7257600))),this.gtu[3]=e*(49561/161280+t*(-179/168+t*(6601661/7257600))),e=e*t,this.utg[4]=e*(-4583/161280+t*(108847/3991680)),this.gtu[4]=e*(34729/80640+t*(-3418889/1995840)),e=e*t,this.utg[5]=e*(-20648693/638668800),this.gtu[5]=e*(212378941/319334400);var i=rf(this.cbg,this.lat0);this.Zb=-this.Qn*(i+zx(this.gtu,2*i))}function Hx(n){var t=ot(n.x-this.long0,this.over),e=n.y;e=rf(this.cbg,e);var i=Math.sin(e),s=Math.cos(e),r=Math.sin(t),a=Math.cos(t);e=Math.atan2(i,a*s),t=Math.atan2(r*s,Sn(i,s*a)),t=Bx(Math.tan(t));var o=Ag(this.gtu,2*e,2*t);e=e+o[0],t=t+o[1];var l,h;return Math.abs(t)<=2.623395162778?(l=this.a*(this.Qn*t)+this.x0,h=this.a*(this.Qn*e+this.Zb)+this.y0):(l=1/0,h=1/0),n.x=l,n.y=h,n}function Wx(n){var t=(n.x-this.x0)*(1/this.a),e=(n.y-this.y0)*(1/this.a);e=(e-this.Zb)/this.Qn,t=t/this.Qn;var i,s;if(Math.abs(t)<=2.623395162778){var r=Ag(this.utg,2*e,2*t);e=e+r[0],t=t+r[1],t=Math.atan(bg(t));var a=Math.sin(e),o=Math.cos(e),l=Math.sin(t),h=Math.cos(t);e=Math.atan2(a*h,Sn(l,h*o)),t=Math.atan2(l,h*o),i=ot(t+this.long0,this.over),s=rf(this.cgb,e)}else i=1/0,s=1/0;return n.x=i,n.y=s,n}var Xx=["Extended_Transverse_Mercator","Extended Transverse Mercator","etmerc","Transverse_Mercator","Transverse Mercator","Gauss Kruger","Gauss_Kruger","tmerc"];const nl={init:Vx,forward:Hx,inverse:Wx,names:Xx};function Yx(n,t){if(n===void 0){if(n=Math.floor((ot(t)+Math.PI)*30/Math.PI)+1,n<0)return 0;if(n>60)return 60}return n}var qx="etmerc";function jx(){var n=Yx(this.zone,this.long0);if(n===void 0)throw new Error("unknown utm zone");this.lat0=0,this.long0=(6*Math.abs(n)-183)*Le,this.x0=5e5,this.y0=this.utmSouth?1e7:0,this.k0=.9996,nl.init.apply(this),this.forward=nl.forward,this.inverse=nl.inverse}var Zx=["Universal Transverse Mercator System","utm"];const $x={init:jx,names:Zx,dependsOn:qx};function af(n,t){return Math.pow((1-n)/(1+n),t)}var Kx=20;function Jx(){var n=Math.sin(this.lat0),t=Math.cos(this.lat0);t*=t,this.rc=Math.sqrt(1-this.es)/(1-this.es*n*n),this.C=Math.sqrt(1+this.es*t*t/(1-this.es)),this.phic0=Math.asin(n/this.C),this.ratexp=.5*this.C*this.e,this.K=Math.tan(.5*this.phic0+he)/(Math.pow(Math.tan(.5*this.lat0+he),this.C)*af(this.e*n,this.ratexp))}function Qx(n){var t=n.x,e=n.y;return n.y=2*Math.atan(this.K*Math.pow(Math.tan(.5*e+he),this.C)*af(this.e*Math.sin(e),this.ratexp))-J,n.x=this.C*t,n}function ty(n){for(var t=1e-14,e=n.x/this.C,i=n.y,s=Math.pow(Math.tan(.5*i+he)/this.K,1/this.C),r=Kx;r>0&&(i=2*Math.atan(s*af(this.e*Math.sin(n.y),-.5*this.e))-J,!(Math.abs(i-n.y)<t));--r)n.y=i;return r?(n.x=e,n.y=i,n):null}const of={init:Jx,forward:Qx,inverse:ty};function ey(){of.init.apply(this),this.rc&&(this.sinc0=Math.sin(this.phic0),this.cosc0=Math.cos(this.phic0),this.R2=2*this.rc,this.title||(this.title="Oblique Stereographic Alternative"))}function ny(n){var t,e,i,s;return n.x=ot(n.x-this.long0,this.over),of.forward.apply(this,[n]),t=Math.sin(n.y),e=Math.cos(n.y),i=Math.cos(n.x),s=this.k0*this.R2/(1+this.sinc0*t+this.cosc0*e*i),n.x=s*e*Math.sin(n.x),n.y=s*(this.cosc0*t-this.sinc0*e*i),n.x=this.a*n.x+this.x0,n.y=this.a*n.y+this.y0,n}function iy(n){var t,e,i,s,r;if(n.x=(n.x-this.x0)/this.a,n.y=(n.y-this.y0)/this.a,n.x/=this.k0,n.y/=this.k0,r=Sn(n.x,n.y)){var a=2*Math.atan2(r,this.R2);t=Math.sin(a),e=Math.cos(a),s=Math.asin(e*this.sinc0+n.y*t*this.cosc0/r),i=Math.atan2(n.x*t,r*this.cosc0*e-n.y*this.sinc0*t)}else s=this.phic0,i=0;return n.x=i,n.y=s,of.inverse.apply(this,[n]),n.x=ot(n.x+this.long0,this.over),n}var sy=["Stereographic_North_Pole","Oblique_Stereographic","sterea","Oblique Stereographic Alternative","Double_Stereographic"];const ry={init:ey,forward:ny,inverse:iy,names:sy};function lf(n,t,e){return t*=e,Math.tan(.5*(J+n))*Math.pow((1-t)/(1+t),.5*e)}function ay(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.coslat0=Math.cos(this.lat0),this.sinlat0=Math.sin(this.lat0),this.sphere?this.k0===1&&!isNaN(this.lat_ts)&&Math.abs(this.coslat0)<=st&&(this.k0=.5*(1+Ha(this.lat0)*Math.sin(this.lat_ts))):(Math.abs(this.coslat0)<=st&&(this.lat0>0?this.con=1:this.con=-1),this.cons=Math.sqrt(Math.pow(1+this.e,1+this.e)*Math.pow(1-this.e,1-this.e)),this.k0===1&&!isNaN(this.lat_ts)&&Math.abs(this.coslat0)<=st&&Math.abs(Math.cos(this.lat_ts))>st&&(this.k0=.5*this.cons*di(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts))/si(this.e,this.con*this.lat_ts,this.con*Math.sin(this.lat_ts))),this.ms1=di(this.e,this.sinlat0,this.coslat0),this.X0=2*Math.atan(lf(this.lat0,this.sinlat0,this.e))-J,this.cosX0=Math.cos(this.X0),this.sinX0=Math.sin(this.X0))}function oy(n){var t=n.x,e=n.y,i=Math.sin(e),s=Math.cos(e),r,a,o,l,h,u,f=ot(t-this.long0,this.over);return Math.abs(Math.abs(t-this.long0)-Math.PI)<=st&&Math.abs(e+this.lat0)<=st?(n.x=NaN,n.y=NaN,n):this.sphere?(r=2*this.k0/(1+this.sinlat0*i+this.coslat0*s*Math.cos(f)),n.x=this.a*r*s*Math.sin(f)+this.x0,n.y=this.a*r*(this.coslat0*i-this.sinlat0*s*Math.cos(f))+this.y0,n):(a=2*Math.atan(lf(e,i,this.e))-J,l=Math.cos(a),o=Math.sin(a),Math.abs(this.coslat0)<=st?(h=si(this.e,e*this.con,this.con*i),u=2*this.a*this.k0*h/this.cons,n.x=this.x0+u*Math.sin(t-this.long0),n.y=this.y0-this.con*u*Math.cos(t-this.long0),n):(Math.abs(this.sinlat0)<st?(r=2*this.a*this.k0/(1+l*Math.cos(f)),n.y=r*o):(r=2*this.a*this.k0*this.ms1/(this.cosX0*(1+this.sinX0*o+this.cosX0*l*Math.cos(f))),n.y=r*(this.cosX0*o-this.sinX0*l*Math.cos(f))+this.y0),n.x=r*l*Math.sin(f)+this.x0,n))}function ly(n){n.x-=this.x0,n.y-=this.y0;var t,e,i,s,r,a=Math.sqrt(n.x*n.x+n.y*n.y);if(this.sphere){var o=2*Math.atan(a/(2*this.a*this.k0));return t=this.long0,e=this.lat0,a<=st?(n.x=t,n.y=e,n):(e=Math.asin(Math.cos(o)*this.sinlat0+n.y*Math.sin(o)*this.coslat0/a),Math.abs(this.coslat0)<st?this.lat0>0?t=ot(this.long0+Math.atan2(n.x,-1*n.y),this.over):t=ot(this.long0+Math.atan2(n.x,n.y),this.over):t=ot(this.long0+Math.atan2(n.x*Math.sin(o),a*this.coslat0*Math.cos(o)-n.y*this.sinlat0*Math.sin(o)),this.over),n.x=t,n.y=e,n)}else if(Math.abs(this.coslat0)<=st){if(a<=st)return e=this.lat0,t=this.long0,n.x=t,n.y=e,n;n.x*=this.con,n.y*=this.con,i=a*this.cons/(2*this.a*this.k0),e=this.con*Pa(this.e,i),t=this.con*ot(this.con*this.long0+Math.atan2(n.x,-1*n.y),this.over)}else s=2*Math.atan(a*this.cosX0/(2*this.a*this.k0*this.ms1)),t=this.long0,a<=st?r=this.X0:(r=Math.asin(Math.cos(s)*this.sinX0+n.y*Math.sin(s)*this.cosX0/a),t=ot(this.long0+Math.atan2(n.x*Math.sin(s),a*this.cosX0*Math.cos(s)-n.y*this.sinX0*Math.sin(s)),this.over)),e=-1*Pa(this.e,Math.tan(.5*(J+r)));return n.x=t,n.y=e,n}var hy=["stere","Stereographic_South_Pole","Polar_Stereographic_variant_A","Polar_Stereographic_variant_B","Polar_Stereographic"];const cy={init:ay,forward:oy,inverse:ly,names:hy,ssfn_:lf};function uy(){var n=this.lat0;this.lambda0=this.long0;var t=Math.sin(n),e=this.a,i=this.rf,s=1/i,r=2*s-Math.pow(s,2),a=this.e=Math.sqrt(r);this.R=this.k0*e*Math.sqrt(1-r)/(1-r*Math.pow(t,2)),this.alpha=Math.sqrt(1+r/(1-r)*Math.pow(Math.cos(n),4)),this.b0=Math.asin(t/this.alpha);var o=Math.log(Math.tan(Math.PI/4+this.b0/2)),l=Math.log(Math.tan(Math.PI/4+n/2)),h=Math.log((1+a*t)/(1-a*t));this.K=o-this.alpha*l+this.alpha*a/2*h}function fy(n){var t=Math.log(Math.tan(Math.PI/4-n.y/2)),e=this.e/2*Math.log((1+this.e*Math.sin(n.y))/(1-this.e*Math.sin(n.y))),i=-this.alpha*(t+e)+this.K,s=2*(Math.atan(Math.exp(i))-Math.PI/4),r=this.alpha*(n.x-this.lambda0),a=Math.atan(Math.sin(r)/(Math.sin(this.b0)*Math.tan(s)+Math.cos(this.b0)*Math.cos(r))),o=Math.asin(Math.cos(this.b0)*Math.sin(s)-Math.sin(this.b0)*Math.cos(s)*Math.cos(r));return n.y=this.R/2*Math.log((1+Math.sin(o))/(1-Math.sin(o)))+this.y0,n.x=this.R*a+this.x0,n}function dy(n){for(var t=n.x-this.x0,e=n.y-this.y0,i=t/this.R,s=2*(Math.atan(Math.exp(e/this.R))-Math.PI/4),r=Math.asin(Math.cos(this.b0)*Math.sin(s)+Math.sin(this.b0)*Math.cos(s)*Math.cos(i)),a=Math.atan(Math.sin(i)/(Math.cos(this.b0)*Math.cos(i)-Math.sin(this.b0)*Math.tan(s))),o=this.lambda0+a/this.alpha,l=0,h=r,u=-1e3,f=0;Math.abs(h-u)>1e-7;){if(++f>20)return;l=1/this.alpha*(Math.log(Math.tan(Math.PI/4+r/2))-this.K)+this.e*Math.log(Math.tan(Math.PI/4+Math.asin(this.e*Math.sin(h))/2)),u=h,h=2*Math.atan(Math.exp(l))-Math.PI/2}return n.x=o,n.y=h,n}var py=["somerc"];const my={init:uy,forward:fy,inverse:dy,names:py};var dr=1e-7;function gy(n){var t=["Hotine_Oblique_Mercator","Hotine_Oblique_Mercator_variant_A","Hotine_Oblique_Mercator_Azimuth_Natural_Origin"],e=typeof n.projName=="object"?Object.keys(n.projName)[0]:n.projName;return"no_uoff"in n||"no_off"in n||t.indexOf(e)!==-1||t.indexOf(mg(e))!==-1}function _y(){var n,t,e,i,s,r,a,o,l,h,u=0,f,c=0,d=0,m=0,_=0,g=0,p=0;this.no_off=gy(this),this.no_rot="no_rot"in this;var y=!1;"alpha"in this&&(y=!0);var x=!1;if("rectified_grid_angle"in this&&(x=!0),y&&(p=this.alpha),x&&(u=this.rectified_grid_angle),y||x)c=this.longc;else if(d=this.long1,_=this.lat1,m=this.long2,g=this.lat2,Math.abs(_-g)<=dr||(n=Math.abs(_))<=dr||Math.abs(n-J)<=dr||Math.abs(Math.abs(this.lat0)-J)<=dr||Math.abs(Math.abs(g)-J)<=dr)throw new Error;var v=1-this.es;t=Math.sqrt(v),Math.abs(this.lat0)>st?(o=Math.sin(this.lat0),e=Math.cos(this.lat0),n=1-this.es*o*o,this.B=e*e,this.B=Math.sqrt(1+this.es*this.B*this.B/v),this.A=this.B*this.k0*t/n,i=this.B*t/(e*Math.sqrt(n)),s=i*i-1,s<=0?s=0:(s=Math.sqrt(s),this.lat0<0&&(s=-s)),this.E=s+=i,this.E*=Math.pow(si(this.e,this.lat0,o),this.B)):(this.B=1/t,this.A=this.k0,this.E=i=s=1),y||x?(y?(f=Math.asin(Math.sin(p)/i),x||(u=p)):(f=u,p=Math.asin(i*Math.sin(f))),this.lam0=c-Math.asin(.5*(s-1/s)*Math.tan(f))/this.B):(r=Math.pow(si(this.e,_,Math.sin(_)),this.B),a=Math.pow(si(this.e,g,Math.sin(g)),this.B),s=this.E/r,l=(a-r)/(a+r),h=this.E*this.E,h=(h-a*r)/(h+a*r),n=d-m,n<-Math.PI?m-=Aa:n>Math.PI&&(m+=Aa),this.lam0=ot(.5*(d+m)-Math.atan(h*Math.tan(.5*this.B*(d-m))/l)/this.B,this.over),f=Math.atan(2*Math.sin(this.B*ot(d-this.lam0,this.over))/(s-1/s)),u=p=Math.asin(i*Math.sin(f))),this.singam=Math.sin(f),this.cosgam=Math.cos(f),this.sinrot=Math.sin(u),this.cosrot=Math.cos(u),this.rB=1/this.B,this.ArB=this.A*this.rB,this.BrA=1/this.ArB,this.no_off?this.u_0=0:(this.u_0=Math.abs(this.ArB*Math.atan(Math.sqrt(i*i-1)/Math.cos(p))),this.lat0<0&&(this.u_0=-this.u_0)),s=.5*f,this.v_pole_n=this.ArB*Math.log(Math.tan(he-s)),this.v_pole_s=this.ArB*Math.log(Math.tan(he+s))}function vy(n){var t={},e,i,s,r,a,o,l,h;if(n.x=n.x-this.lam0,Math.abs(Math.abs(n.y)-J)>st){if(a=this.E/Math.pow(si(this.e,n.y,Math.sin(n.y)),this.B),o=1/a,e=.5*(a-o),i=.5*(a+o),r=Math.sin(this.B*n.x),s=(e*this.singam-r*this.cosgam)/i,Math.abs(Math.abs(s)-1)<st)throw new Error;h=.5*this.ArB*Math.log((1-s)/(1+s)),o=Math.cos(this.B*n.x),Math.abs(o)<dr?l=this.A*n.x:l=this.ArB*Math.atan2(e*this.cosgam+r*this.singam,o)}else h=n.y>0?this.v_pole_n:this.v_pole_s,l=this.ArB*n.y;return this.no_rot?(t.x=l,t.y=h):(l-=this.u_0,t.x=h*this.cosrot+l*this.sinrot,t.y=l*this.cosrot-h*this.sinrot),t.x=this.a*t.x+this.x0,t.y=this.a*t.y+this.y0,t}function xy(n){var t,e,i,s,r,a,o,l={};if(n.x=(n.x-this.x0)*(1/this.a),n.y=(n.y-this.y0)*(1/this.a),this.no_rot?(e=n.y,t=n.x):(e=n.x*this.cosrot-n.y*this.sinrot,t=n.y*this.cosrot+n.x*this.sinrot+this.u_0),i=Math.exp(-this.BrA*e),s=.5*(i-1/i),r=.5*(i+1/i),a=Math.sin(this.BrA*t),o=(a*this.cosgam+s*this.singam)/r,Math.abs(Math.abs(o)-1)<st)l.x=0,l.y=o<0?-J:J;else{if(l.y=this.E/Math.sqrt((1+o)/(1-o)),l.y=Pa(this.e,Math.pow(l.y,1/this.B)),l.y===1/0)throw new Error;l.x=-this.rB*Math.atan2(s*this.cosgam-a*this.singam,Math.cos(this.BrA*t))}return l.x+=this.lam0,l}var yy=["Hotine_Oblique_Mercator","Hotine Oblique Mercator","Hotine_Oblique_Mercator_variant_A","Hotine_Oblique_Mercator_Variant_B","Hotine_Oblique_Mercator_Azimuth_Natural_Origin","Hotine_Oblique_Mercator_Two_Point_Natural_Origin","Hotine_Oblique_Mercator_Azimuth_Center","Oblique_Mercator","omerc"];const My={init:_y,forward:vy,inverse:xy,names:yy};function Ey(){if(this.lat2||(this.lat2=this.lat1),this.k0||(this.k0=1),this.x0=this.x0||0,this.y0=this.y0||0,!(Math.abs(this.lat1+this.lat2)<st)){var n=this.b/this.a;this.e=Math.sqrt(1-n*n);var t=Math.sin(this.lat1),e=Math.cos(this.lat1),i=di(this.e,t,e),s=si(this.e,this.lat1,t),r=Math.sin(this.lat2),a=Math.cos(this.lat2),o=di(this.e,r,a),l=si(this.e,this.lat2,r),h=Math.abs(Math.abs(this.lat0)-J)<st?0:si(this.e,this.lat0,Math.sin(this.lat0));Math.abs(this.lat1-this.lat2)>st?this.ns=Math.log(i/o)/Math.log(s/l):this.ns=t,isNaN(this.ns)&&(this.ns=t),this.f0=i/(this.ns*Math.pow(s,this.ns)),this.rh=this.a*this.f0*Math.pow(h,this.ns),this.title||(this.title="Lambert Conformal Conic")}}function Sy(n){var t=n.x,e=n.y;Math.abs(2*Math.abs(e)-Math.PI)<=st&&(e=Ha(e)*(J-2*st));var i=Math.abs(Math.abs(e)-J),s,r;if(i>st)s=si(this.e,e,Math.sin(e)),r=this.a*this.f0*Math.pow(s,this.ns);else{if(i=e*this.ns,i<=0)return null;r=0}var a=this.ns*ot(t-this.long0,this.over);return n.x=this.k0*(r*Math.sin(a))+this.x0,n.y=this.k0*(this.rh-r*Math.cos(a))+this.y0,n}function wy(n){var t,e,i,s,r,a=(n.x-this.x0)/this.k0,o=this.rh-(n.y-this.y0)/this.k0;this.ns>0?(t=Math.sqrt(a*a+o*o),e=1):(t=-Math.sqrt(a*a+o*o),e=-1);var l=0;if(t!==0&&(l=Math.atan2(e*a,e*o)),t!==0||this.ns>0){if(e=1/this.ns,i=Math.pow(t/(this.a*this.f0),e),s=Pa(this.e,i),s===-9999)return null}else s=-J;return r=ot(l/this.ns+this.long0,this.over),n.x=r,n.y=s,n}var Ty=["Lambert Tangential Conformal Conic Projection","Lambert_Conformal_Conic","Lambert_Conformal_Conic_1SP","Lambert_Conformal_Conic_2SP","lcc","Lambert Conic Conformal (1SP)","Lambert Conic Conformal (2SP)"];const by={init:Ey,forward:Sy,inverse:wy,names:Ty};function Ay(){this.a=6377397155e-3,this.es=.006674372230614,this.e=Math.sqrt(this.es),this.lat0||(this.lat0=.863937979737193),this.long0||(this.long0=.7417649320975901-.308341501185665),this.k0||(this.k0=.9999),this.s45=.785398163397448,this.s90=2*this.s45,this.fi0=this.lat0,this.e2=this.es,this.e=Math.sqrt(this.e2),this.alfa=Math.sqrt(1+this.e2*Math.pow(Math.cos(this.fi0),4)/(1-this.e2)),this.uq=1.04216856380474,this.u0=Math.asin(Math.sin(this.fi0)/this.alfa),this.g=Math.pow((1+this.e*Math.sin(this.fi0))/(1-this.e*Math.sin(this.fi0)),this.alfa*this.e/2),this.k=Math.tan(this.u0/2+this.s45)/Math.pow(Math.tan(this.fi0/2+this.s45),this.alfa)*this.g,this.k1=this.k0,this.n0=this.a*Math.sqrt(1-this.e2)/(1-this.e2*Math.pow(Math.sin(this.fi0),2)),this.s0=1.37008346281555,this.n=Math.sin(this.s0),this.ro0=this.k1*this.n0/Math.tan(this.s0),this.ad=this.s90-this.uq}function Ry(n){var t,e,i,s,r,a,o,l=n.x,h=n.y,u=ot(l-this.long0,this.over);return t=Math.pow((1+this.e*Math.sin(h))/(1-this.e*Math.sin(h)),this.alfa*this.e/2),e=2*(Math.atan(this.k*Math.pow(Math.tan(h/2+this.s45),this.alfa)/t)-this.s45),i=-u*this.alfa,s=Math.asin(Math.cos(this.ad)*Math.sin(e)+Math.sin(this.ad)*Math.cos(e)*Math.cos(i)),r=Math.asin(Math.cos(e)*Math.sin(i)/Math.cos(s)),a=this.n*r,o=this.ro0*Math.pow(Math.tan(this.s0/2+this.s45),this.n)/Math.pow(Math.tan(s/2+this.s45),this.n),n.y=o*Math.cos(a)/1,n.x=o*Math.sin(a)/1,this.czech||(n.y*=-1,n.x*=-1),n}function Cy(n){var t,e,i,s,r,a,o,l,h=n.x;n.x=n.y,n.y=h,this.czech||(n.y*=-1,n.x*=-1),a=Math.sqrt(n.x*n.x+n.y*n.y),r=Math.atan2(n.y,n.x),s=r/Math.sin(this.s0),i=2*(Math.atan(Math.pow(this.ro0/a,1/this.n)*Math.tan(this.s0/2+this.s45))-this.s45),t=Math.asin(Math.cos(this.ad)*Math.sin(i)-Math.sin(this.ad)*Math.cos(i)*Math.cos(s)),e=Math.asin(Math.cos(i)*Math.sin(s)/Math.cos(t)),n.x=this.long0-e/this.alfa,o=t,l=0;var u=0;do n.y=2*(Math.atan(Math.pow(this.k,-1/this.alfa)*Math.pow(Math.tan(t/2+this.s45),1/this.alfa)*Math.pow((1+this.e*Math.sin(o))/(1-this.e*Math.sin(o)),this.e/2))-this.s45),Math.abs(o-n.y)<1e-10&&(l=1),o=n.y,u+=1;while(l===0&&u<15);return u>=15?null:n}var Py=["Krovak","krovak"];const Ly={init:Ay,forward:Ry,inverse:Cy,names:Py};function gn(n,t,e,i,s){return n*s-t*Math.sin(2*s)+e*Math.sin(4*s)-i*Math.sin(6*s)}function Wa(n){return 1-.25*n*(1+n/16*(3+1.25*n))}function Xa(n){return .375*n*(1+.25*n*(1+.46875*n))}function Ya(n){return .05859375*n*n*(1+.75*n)}function qa(n){return n*n*n*(35/3072)}function hf(n,t,e){var i=t*e;return n/Math.sqrt(1-i*i)}function hs(n){return Math.abs(n)<J?n:n-Ha(n)*Math.PI}function El(n,t,e,i,s){var r,a;r=n/t;for(var o=0;o<15;o++)if(a=(n-(t*r-e*Math.sin(2*r)+i*Math.sin(4*r)-s*Math.sin(6*r)))/(t-2*e*Math.cos(2*r)+4*i*Math.cos(4*r)-6*s*Math.cos(6*r)),r+=a,Math.abs(a)<=1e-10)return r;return NaN}function Iy(){this.sphere||(this.e0=Wa(this.es),this.e1=Xa(this.es),this.e2=Ya(this.es),this.e3=qa(this.es),this.ml0=this.a*gn(this.e0,this.e1,this.e2,this.e3,this.lat0))}function Dy(n){var t,e,i=n.x,s=n.y;if(i=ot(i-this.long0,this.over),this.sphere)t=this.a*Math.asin(Math.cos(s)*Math.sin(i)),e=this.a*(Math.atan2(Math.tan(s),Math.cos(i))-this.lat0);else{var r=Math.sin(s),a=Math.cos(s),o=hf(this.a,this.e,r),l=Math.tan(s)*Math.tan(s),h=i*Math.cos(s),u=h*h,f=this.es*a*a/(1-this.es),c=this.a*gn(this.e0,this.e1,this.e2,this.e3,s);t=o*h*(1-u*l*(1/6-(8-l+8*f)*u/120)),e=c-this.ml0+o*r/a*u*(.5+(5-l+6*f)*u/24)}return n.x=t+this.x0,n.y=e+this.y0,n}function Ny(n){n.x-=this.x0,n.y-=this.y0;var t=n.x/this.a,e=n.y/this.a,i,s;if(this.sphere){var r=e+this.lat0;i=Math.asin(Math.sin(r)*Math.cos(t)),s=Math.atan2(Math.tan(t),Math.cos(r))}else{var a=this.ml0/this.a+e,o=El(a,this.e0,this.e1,this.e2,this.e3);if(Math.abs(Math.abs(o)-J)<=st)return n.x=this.long0,n.y=J,e<0&&(n.y*=-1),n;var l=hf(this.a,this.e,Math.sin(o)),h=l*l*l/this.a/this.a*(1-this.es),u=Math.pow(Math.tan(o),2),f=t*this.a/l,c=f*f;i=o-l*Math.tan(o)/h*f*f*(.5-(1+3*u)*f*f/24),s=f*(1-c*(u/3+(1+3*u)*u*c/15))/Math.cos(o)}return n.x=ot(s+this.long0,this.over),n.y=hs(i),n}var Oy=["Cassini","Cassini_Soldner","cass"];const Uy={init:Iy,forward:Dy,inverse:Ny,names:Oy};function is(n,t){var e;return n>1e-7?(e=n*t,(1-n*n)*(t/(1-e*e)-.5/n*Math.log((1-e)/(1+e)))):2*t}var Pc=1,Lc=2,Ic=3,il=4;function Fy(){var n=Math.abs(this.lat0);if(Math.abs(n-J)<st?this.mode=this.lat0<0?Pc:Lc:Math.abs(n)<st?this.mode=Ic:this.mode=il,this.es>0){var t;switch(this.qp=is(this.e,1),this.mmf=.5/(1-this.es),this.apa=Yy(this.es),this.mode){case Lc:this.dd=1;break;case Pc:this.dd=1;break;case Ic:this.rq=Math.sqrt(.5*this.qp),this.dd=1/this.rq,this.xmf=1,this.ymf=.5*this.qp;break;case il:this.rq=Math.sqrt(.5*this.qp),t=Math.sin(this.lat0),this.sinb1=is(this.e,t)/this.qp,this.cosb1=Math.sqrt(1-this.sinb1*this.sinb1),this.dd=Math.cos(this.lat0)/(Math.sqrt(1-this.es*t*t)*this.rq*this.cosb1),this.ymf=(this.xmf=this.rq)/this.dd,this.xmf*=this.dd;break}}else this.mode===il&&(this.sinph0=Math.sin(this.lat0),this.cosph0=Math.cos(this.lat0))}function Gy(n){var t,e,i,s,r,a,o,l,h,u,f=n.x,c=n.y;if(f=ot(f-this.long0,this.over),this.sphere){if(r=Math.sin(c),u=Math.cos(c),i=Math.cos(f),this.mode===this.OBLIQ||this.mode===this.EQUIT){if(e=this.mode===this.EQUIT?1+u*i:1+this.sinph0*r+this.cosph0*u*i,e<=st)return null;e=Math.sqrt(2/e),t=e*u*Math.sin(f),e*=this.mode===this.EQUIT?r:this.cosph0*r-this.sinph0*u*i}else if(this.mode===this.N_POLE||this.mode===this.S_POLE){if(this.mode===this.N_POLE&&(i=-i),Math.abs(c+this.lat0)<st)return null;e=he-c*.5,e=2*(this.mode===this.S_POLE?Math.cos(e):Math.sin(e)),t=e*Math.sin(f),e*=i}}else{switch(o=0,l=0,h=0,i=Math.cos(f),s=Math.sin(f),r=Math.sin(c),a=is(this.e,r),(this.mode===this.OBLIQ||this.mode===this.EQUIT)&&(o=a/this.qp,l=Math.sqrt(1-o*o)),this.mode){case this.OBLIQ:h=1+this.sinb1*o+this.cosb1*l*i;break;case this.EQUIT:h=1+l*i;break;case this.N_POLE:h=J+c,a=this.qp-a;break;case this.S_POLE:h=c-J,a=this.qp+a;break}if(Math.abs(h)<st)return null;switch(this.mode){case this.OBLIQ:case this.EQUIT:h=Math.sqrt(2/h),this.mode===this.OBLIQ?e=this.ymf*h*(this.cosb1*o-this.sinb1*l*i):e=(h=Math.sqrt(2/(1+l*i)))*o*this.ymf,t=this.xmf*h*l*s;break;case this.N_POLE:case this.S_POLE:a>=0?(t=(h=Math.sqrt(a))*s,e=i*(this.mode===this.S_POLE?h:-h)):t=e=0;break}}return n.x=this.a*t+this.x0,n.y=this.a*e+this.y0,n}function By(n){n.x-=this.x0,n.y-=this.y0;var t=n.x/this.a,e=n.y/this.a,i,s,r,a,o,l,h;if(this.sphere){var u=0,f,c=0;if(f=Math.sqrt(t*t+e*e),s=f*.5,s>1)return null;switch(s=2*Math.asin(s),(this.mode===this.OBLIQ||this.mode===this.EQUIT)&&(c=Math.sin(s),u=Math.cos(s)),this.mode){case this.EQUIT:s=Math.abs(f)<=st?0:Math.asin(e*c/f),t*=c,e=u*f;break;case this.OBLIQ:s=Math.abs(f)<=st?this.lat0:Math.asin(u*this.sinph0+e*c*this.cosph0/f),t*=c*this.cosph0,e=(u-Math.sin(s)*this.sinph0)*f;break;case this.N_POLE:e=-e,s=J-s;break;case this.S_POLE:s-=J;break}i=e===0&&(this.mode===this.EQUIT||this.mode===this.OBLIQ)?0:Math.atan2(t,e)}else{if(h=0,this.mode===this.OBLIQ||this.mode===this.EQUIT){if(t/=this.dd,e*=this.dd,l=Math.sqrt(t*t+e*e),l<st)return n.x=this.long0,n.y=this.lat0,n;a=2*Math.asin(.5*l/this.rq),r=Math.cos(a),t*=a=Math.sin(a),this.mode===this.OBLIQ?(h=r*this.sinb1+e*a*this.cosb1/l,o=this.qp*h,e=l*this.cosb1*r-e*this.sinb1*a):(h=e*a/l,o=this.qp*h,e=l*r)}else if(this.mode===this.N_POLE||this.mode===this.S_POLE){if(this.mode===this.N_POLE&&(e=-e),o=t*t+e*e,!o)return n.x=this.long0,n.y=this.lat0,n;h=1-o/this.qp,this.mode===this.S_POLE&&(h=-h)}i=Math.atan2(t,e),s=qy(Math.asin(h),this.apa)}return n.x=ot(this.long0+i,this.over),n.y=s,n}var zy=.3333333333333333,ky=.17222222222222222,Vy=.10257936507936508,Hy=.06388888888888888,Wy=.0664021164021164,Xy=.016415012942191543;function Yy(n){var t,e=[];return e[0]=n*zy,t=n*n,e[0]+=t*ky,e[1]=t*Hy,t*=n,e[0]+=t*Vy,e[1]+=t*Wy,e[2]=t*Xy,e}function qy(n,t){var e=n+n;return n+t[0]*Math.sin(e)+t[1]*Math.sin(e+e)+t[2]*Math.sin(e+e+e)}var jy=["Lambert Azimuthal Equal Area","Lambert_Azimuthal_Equal_Area","laea"];const Zy={init:Fy,forward:Gy,inverse:By,names:jy,S_POLE:Pc,N_POLE:Lc,EQUIT:Ic,OBLIQ:il};function as(n){return Math.abs(n)>1&&(n=n>1?1:-1),Math.asin(n)}function $y(){Math.abs(this.lat1+this.lat2)<st||(this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e3=Math.sqrt(this.es),this.sin_po=Math.sin(this.lat1),this.cos_po=Math.cos(this.lat1),this.t1=this.sin_po,this.con=this.sin_po,this.ms1=di(this.e3,this.sin_po,this.cos_po),this.qs1=is(this.e3,this.sin_po),this.sin_po=Math.sin(this.lat2),this.cos_po=Math.cos(this.lat2),this.t2=this.sin_po,this.ms2=di(this.e3,this.sin_po,this.cos_po),this.qs2=is(this.e3,this.sin_po),this.sin_po=Math.sin(this.lat0),this.cos_po=Math.cos(this.lat0),this.t3=this.sin_po,this.qs0=is(this.e3,this.sin_po),Math.abs(this.lat1-this.lat2)>st?this.ns0=(this.ms1*this.ms1-this.ms2*this.ms2)/(this.qs2-this.qs1):this.ns0=this.con,this.c=this.ms1*this.ms1+this.ns0*this.qs1,this.rh=this.a*Math.sqrt(this.c-this.ns0*this.qs0)/this.ns0)}function Ky(n){var t=n.x,e=n.y;this.sin_phi=Math.sin(e),this.cos_phi=Math.cos(e);var i=is(this.e3,this.sin_phi),s=this.a*Math.sqrt(this.c-this.ns0*i)/this.ns0,r=this.ns0*ot(t-this.long0,this.over),a=s*Math.sin(r)+this.x0,o=this.rh-s*Math.cos(r)+this.y0;return n.x=a,n.y=o,n}function Jy(n){var t,e,i,s,r,a;return n.x-=this.x0,n.y=this.rh-n.y+this.y0,this.ns0>=0?(t=Math.sqrt(n.x*n.x+n.y*n.y),i=1):(t=-Math.sqrt(n.x*n.x+n.y*n.y),i=-1),s=0,t!==0&&(s=Math.atan2(i*n.x,i*n.y)),i=t*this.ns0/this.a,this.sphere?a=Math.asin((this.c-i*i)/(2*this.ns0)):(e=(this.c-i*i)/this.ns0,a=this.phi1z(this.e3,e)),r=ot(s/this.ns0+this.long0,this.over),n.x=r,n.y=a,n}function Qy(n,t){var e,i,s,r,a,o=as(.5*t);if(n<st)return o;for(var l=n*n,h=1;h<=25;h++)if(e=Math.sin(o),i=Math.cos(o),s=n*e,r=1-s*s,a=.5*r*r/i*(t/(1-l)-e/r+.5/n*Math.log((1-s)/(1+s))),o=o+a,Math.abs(a)<=1e-7)return o;return null}var tM=["Albers_Conic_Equal_Area","Albers_Equal_Area","Albers","aea"];const eM={init:$y,forward:Ky,inverse:Jy,names:tM,phi1z:Qy};function nM(){this.sin_p14=Math.sin(this.lat0),this.cos_p14=Math.cos(this.lat0),this.infinity_dist=1e3*this.a,this.rc=1}function iM(n){var t,e,i,s,r,a,o,l,h=n.x,u=n.y;return i=ot(h-this.long0,this.over),t=Math.sin(u),e=Math.cos(u),s=Math.cos(i),a=this.sin_p14*t+this.cos_p14*e*s,r=1,a>0||Math.abs(a)<=st?(o=this.x0+this.a*r*e*Math.sin(i)/a,l=this.y0+this.a*r*(this.cos_p14*t-this.sin_p14*e*s)/a):(o=this.x0+this.infinity_dist*e*Math.sin(i),l=this.y0+this.infinity_dist*(this.cos_p14*t-this.sin_p14*e*s)),n.x=o,n.y=l,n}function sM(n){var t,e,i,s,r,a;return n.x=(n.x-this.x0)/this.a,n.y=(n.y-this.y0)/this.a,n.x/=this.k0,n.y/=this.k0,(t=Math.sqrt(n.x*n.x+n.y*n.y))?(s=Math.atan2(t,this.rc),e=Math.sin(s),i=Math.cos(s),a=as(i*this.sin_p14+n.y*e*this.cos_p14/t),r=Math.atan2(n.x*e,t*this.cos_p14*i-n.y*this.sin_p14*e),r=ot(this.long0+r,this.over)):(a=this.phic0,r=0),n.x=r,n.y=a,n}var rM=["gnom"];const aM={init:nM,forward:iM,inverse:sM,names:rM};function oM(n,t){var e=1-(1-n*n)/(2*n)*Math.log((1-n)/(1+n));if(Math.abs(Math.abs(t)-e)<1e-6)return t<0?-1*J:J;for(var i=Math.asin(.5*t),s,r,a,o,l=0;l<30;l++)if(r=Math.sin(i),a=Math.cos(i),o=n*r,s=Math.pow(1-o*o,2)/(2*a)*(t/(1-n*n)-r/(1-o*o)+.5/n*Math.log((1-o)/(1+o))),i+=s,Math.abs(s)<=1e-10)return i;return NaN}function lM(){this.sphere||(this.k0=di(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)))}function hM(n){var t=n.x,e=n.y,i,s,r=ot(t-this.long0,this.over);if(this.sphere)i=this.x0+this.a*r*Math.cos(this.lat_ts),s=this.y0+this.a*Math.sin(e)/Math.cos(this.lat_ts);else{var a=is(this.e,Math.sin(e));i=this.x0+this.a*this.k0*r,s=this.y0+this.a*a*.5/this.k0}return n.x=i,n.y=s,n}function cM(n){n.x-=this.x0,n.y-=this.y0;var t,e;return this.sphere?(t=ot(this.long0+n.x/this.a/Math.cos(this.lat_ts),this.over),e=Math.asin(n.y/this.a*Math.cos(this.lat_ts))):(e=oM(this.e,2*n.y*this.k0/this.a),t=ot(this.long0+n.x/(this.a*this.k0),this.over)),n.x=t,n.y=e,n}var uM=["cea"];const fM={init:lM,forward:hM,inverse:cM,names:uM};function dM(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.lat_ts=this.lat_ts||0,this.title=this.title||"Equidistant Cylindrical (Plate Carre)",this.rc=Math.cos(this.lat_ts)}function pM(n){var t=n.x,e=n.y,i=ot(t-this.long0,this.over),s=hs(e-this.lat0);return n.x=this.x0+this.a*i*this.rc,n.y=this.y0+this.a*s,n}function mM(n){var t=n.x,e=n.y;return n.x=ot(this.long0+(t-this.x0)/(this.a*this.rc),this.over),n.y=hs(this.lat0+(e-this.y0)/this.a),n}var gM=["Equirectangular","Equidistant_Cylindrical","Equidistant_Cylindrical_Spherical","eqc"];const _M={init:dM,forward:pM,inverse:mM,names:gM};var Ld=20;function vM(){this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=Wa(this.es),this.e1=Xa(this.es),this.e2=Ya(this.es),this.e3=qa(this.es),this.ml0=this.a*gn(this.e0,this.e1,this.e2,this.e3,this.lat0)}function xM(n){var t=n.x,e=n.y,i,s,r,a=ot(t-this.long0,this.over);if(r=a*Math.sin(e),this.sphere)Math.abs(e)<=st?(i=this.a*a,s=-1*this.a*this.lat0):(i=this.a*Math.sin(r)/Math.tan(e),s=this.a*(hs(e-this.lat0)+(1-Math.cos(r))/Math.tan(e)));else if(Math.abs(e)<=st)i=this.a*a,s=-1*this.ml0;else{var o=hf(this.a,this.e,Math.sin(e))/Math.tan(e);i=o*Math.sin(r),s=this.a*gn(this.e0,this.e1,this.e2,this.e3,e)-this.ml0+o*(1-Math.cos(r))}return n.x=i+this.x0,n.y=s+this.y0,n}function yM(n){var t,e,i,s,r,a,o,l,h;if(i=n.x-this.x0,s=n.y-this.y0,this.sphere)if(Math.abs(s+this.a*this.lat0)<=st)t=ot(i/this.a+this.long0,this.over),e=0;else{a=this.lat0+s/this.a,o=i*i/this.a/this.a+a*a,l=a;var u;for(r=Ld;r;--r)if(u=Math.tan(l),h=-1*(a*(l*u+1)-l-.5*(l*l+o)*u)/((l-a)/u-1),l+=h,Math.abs(h)<=st){e=l;break}t=ot(this.long0+Math.asin(i*Math.tan(l)/this.a)/Math.sin(e),this.over)}else if(Math.abs(s+this.ml0)<=st)e=0,t=ot(this.long0+i/this.a,this.over);else{a=(this.ml0+s)/this.a,o=i*i/this.a/this.a+a*a,l=a;var f,c,d,m,_;for(r=Ld;r;--r)if(_=this.e*Math.sin(l),f=Math.sqrt(1-_*_)*Math.tan(l),c=this.a*gn(this.e0,this.e1,this.e2,this.e3,l),d=this.e0-2*this.e1*Math.cos(2*l)+4*this.e2*Math.cos(4*l)-6*this.e3*Math.cos(6*l),m=c/this.a,h=(a*(f*m+1)-m-.5*f*(m*m+o))/(this.es*Math.sin(2*l)*(m*m+o-2*a*m)/(4*f)+(a-m)*(f*d-2/Math.sin(2*l))-d),l-=h,Math.abs(h)<=st){e=l;break}f=Math.sqrt(1-this.es*Math.pow(Math.sin(e),2))*Math.tan(e),t=ot(this.long0+Math.asin(i*f/this.a)/Math.sin(e),this.over)}return n.x=t,n.y=e,n}var MM=["Polyconic","American_Polyconic","poly"];const EM={init:vM,forward:xM,inverse:yM,names:MM};function SM(){this.A=[],this.A[1]=.6399175073,this.A[2]=-.1358797613,this.A[3]=.063294409,this.A[4]=-.02526853,this.A[5]=.0117879,this.A[6]=-.0055161,this.A[7]=.0026906,this.A[8]=-.001333,this.A[9]=67e-5,this.A[10]=-34e-5,this.B_re=[],this.B_im=[],this.B_re[1]=.7557853228,this.B_im[1]=0,this.B_re[2]=.249204646,this.B_im[2]=.003371507,this.B_re[3]=-.001541739,this.B_im[3]=.04105856,this.B_re[4]=-.10162907,this.B_im[4]=.01727609,this.B_re[5]=-.26623489,this.B_im[5]=-.36249218,this.B_re[6]=-.6870983,this.B_im[6]=-1.1651967,this.C_re=[],this.C_im=[],this.C_re[1]=1.3231270439,this.C_im[1]=0,this.C_re[2]=-.577245789,this.C_im[2]=-.007809598,this.C_re[3]=.508307513,this.C_im[3]=-.112208952,this.C_re[4]=-.15094762,this.C_im[4]=.18200602,this.C_re[5]=1.01418179,this.C_im[5]=1.64497696,this.C_re[6]=1.9660549,this.C_im[6]=2.5127645,this.D=[],this.D[1]=1.5627014243,this.D[2]=.5185406398,this.D[3]=-.03333098,this.D[4]=-.1052906,this.D[5]=-.0368594,this.D[6]=.007317,this.D[7]=.0122,this.D[8]=.00394,this.D[9]=-.0013}function wM(n){var t,e=n.x,i=n.y,s=i-this.lat0,r=e-this.long0,a=s/ma*1e-5,o=r,l=1,h=0;for(t=1;t<=10;t++)l=l*a,h=h+this.A[t]*l;var u=h,f=o,c=1,d=0,m,_,g=0,p=0;for(t=1;t<=6;t++)m=c*u-d*f,_=d*u+c*f,c=m,d=_,g=g+this.B_re[t]*c-this.B_im[t]*d,p=p+this.B_im[t]*c+this.B_re[t]*d;return n.x=p*this.a+this.x0,n.y=g*this.a+this.y0,n}function TM(n){var t,e=n.x,i=n.y,s=e-this.x0,r=i-this.y0,a=r/this.a,o=s/this.a,l=1,h=0,u,f,c=0,d=0;for(t=1;t<=6;t++)u=l*a-h*o,f=h*a+l*o,l=u,h=f,c=c+this.C_re[t]*l-this.C_im[t]*h,d=d+this.C_im[t]*l+this.C_re[t]*h;for(var m=0;m<this.iterations;m++){var _=c,g=d,p,y,x=a,v=o;for(t=2;t<=6;t++)p=_*c-g*d,y=g*c+_*d,_=p,g=y,x=x+(t-1)*(this.B_re[t]*_-this.B_im[t]*g),v=v+(t-1)*(this.B_im[t]*_+this.B_re[t]*g);_=1,g=0;var T=this.B_re[1],b=this.B_im[1];for(t=2;t<=6;t++)p=_*c-g*d,y=g*c+_*d,_=p,g=y,T=T+t*(this.B_re[t]*_-this.B_im[t]*g),b=b+t*(this.B_im[t]*_+this.B_re[t]*g);var R=T*T+b*b;c=(x*T+v*b)/R,d=(v*T-x*b)/R}var L=c,S=d,E=1,P=0;for(t=1;t<=9;t++)E=E*L,P=P+this.D[t]*E;var F=this.lat0+P*ma*1e5,I=this.long0+S;return n.x=I,n.y=F,n}var bM=["New_Zealand_Map_Grid","nzmg"];const AM={init:SM,forward:wM,inverse:TM,names:bM};function RM(){}function CM(n){var t=n.x,e=n.y,i=ot(t-this.long0,this.over),s=this.x0+this.a*i,r=this.y0+this.a*Math.log(Math.tan(Math.PI/4+e/2.5))*1.25;return n.x=s,n.y=r,n}function PM(n){n.x-=this.x0,n.y-=this.y0;var t=ot(this.long0+n.x/this.a,this.over),e=2.5*(Math.atan(Math.exp(.8*n.y/this.a))-Math.PI/4);return n.x=t,n.y=e,n}var LM=["Miller_Cylindrical","mill"];const IM={init:RM,forward:CM,inverse:PM,names:LM};var DM=20;function NM(){this.sphere?(this.n=1,this.m=0,this.es=0,this.C_y=Math.sqrt((this.m+1)/this.n),this.C_x=this.C_y/(this.m+1)):this.en=nf(this.es)}function OM(n){var t,e,i=n.x,s=n.y;if(i=ot(i-this.long0,this.over),this.sphere){if(!this.m)s=this.n!==1?Math.asin(this.n*Math.sin(s)):s;else for(var r=this.n*Math.sin(s),a=DM;a;--a){var o=(this.m*s+Math.sin(s)-r)/(this.m+Math.cos(s));if(s-=o,Math.abs(o)<st)break}t=this.a*this.C_x*i*(this.m+Math.cos(s)),e=this.a*this.C_y*s}else{var l=Math.sin(s),h=Math.cos(s);e=this.a*Hr(s,l,h,this.en),t=this.a*i*h/Math.sqrt(1-this.es*l*l)}return n.x=t,n.y=e,n}function UM(n){var t,e,i,s;return n.x-=this.x0,i=n.x/this.a,n.y-=this.y0,t=n.y/this.a,this.sphere?(t/=this.C_y,i=i/(this.C_x*(this.m+Math.cos(t))),this.m?t=as((this.m*t+Math.sin(t))/this.n):this.n!==1&&(t=as(Math.sin(t)/this.n)),i=ot(i+this.long0,this.over),t=hs(t)):(t=sf(n.y/this.a,this.es,this.en),s=Math.abs(t),s<J?(s=Math.sin(t),e=this.long0+n.x*Math.sqrt(1-this.es*s*s)/(this.a*Math.cos(t)),i=ot(e,this.over)):s-st<J&&(i=this.long0)),n.x=i,n.y=t,n}var FM=["Sinusoidal","sinu"];const GM={init:NM,forward:OM,inverse:UM,names:FM};function BM(){this.x0=this.x0!==void 0?this.x0:0,this.y0=this.y0!==void 0?this.y0:0,this.long0=this.long0!==void 0?this.long0:0}function zM(n){for(var t=n.x,e=n.y,i=ot(t-this.long0,this.over),s=e,r=Math.PI*Math.sin(e);;){var a=-(s+Math.sin(s)-r)/(1+Math.cos(s));if(s+=a,Math.abs(a)<st)break}s/=2,Math.PI/2-Math.abs(e)<st&&(i=0);var o=.900316316158*this.a*i*Math.cos(s)+this.x0,l=1.4142135623731*this.a*Math.sin(s)+this.y0;return n.x=o,n.y=l,n}function kM(n){var t,e;n.x-=this.x0,n.y-=this.y0,e=n.y/(1.4142135623731*this.a),Math.abs(e)>.999999999999&&(e=.999999999999),t=Math.asin(e);var i=ot(this.long0+n.x/(.900316316158*this.a*Math.cos(t)),this.over);i<-Math.PI&&(i=-Math.PI),i>Math.PI&&(i=Math.PI),e=(2*t+Math.sin(2*t))/Math.PI,Math.abs(e)>1&&(e=1);var s=Math.asin(e);return n.x=i,n.y=s,n}var VM=["Mollweide","moll"];const HM={init:BM,forward:zM,inverse:kM,names:VM};function WM(){Math.abs(this.lat1+this.lat2)<st||(this.lat2=this.lat2||this.lat1,this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=Wa(this.es),this.e1=Xa(this.es),this.e2=Ya(this.es),this.e3=qa(this.es),this.sin_phi=Math.sin(this.lat1),this.cos_phi=Math.cos(this.lat1),this.ms1=di(this.e,this.sin_phi,this.cos_phi),this.ml1=gn(this.e0,this.e1,this.e2,this.e3,this.lat1),Math.abs(this.lat1-this.lat2)<st?this.ns=this.sin_phi:(this.sin_phi=Math.sin(this.lat2),this.cos_phi=Math.cos(this.lat2),this.ms2=di(this.e,this.sin_phi,this.cos_phi),this.ml2=gn(this.e0,this.e1,this.e2,this.e3,this.lat2),this.ns=(this.ms1-this.ms2)/(this.ml2-this.ml1)),this.g=this.ml1+this.ms1/this.ns,this.ml0=gn(this.e0,this.e1,this.e2,this.e3,this.lat0),this.rh=this.a*(this.g-this.ml0))}function XM(n){var t=n.x,e=n.y,i;if(this.sphere)i=this.a*(this.g-e);else{var s=gn(this.e0,this.e1,this.e2,this.e3,e);i=this.a*(this.g-s)}var r=this.ns*ot(t-this.long0,this.over),a=this.x0+i*Math.sin(r),o=this.y0+this.rh-i*Math.cos(r);return n.x=a,n.y=o,n}function YM(n){n.x-=this.x0,n.y=this.rh-n.y+this.y0;var t,e,i,s;this.ns>=0?(e=Math.sqrt(n.x*n.x+n.y*n.y),t=1):(e=-Math.sqrt(n.x*n.x+n.y*n.y),t=-1);var r=0;if(e!==0&&(r=Math.atan2(t*n.x,t*n.y)),this.sphere)return s=ot(this.long0+r/this.ns,this.over),i=hs(this.g-e/this.a),n.x=s,n.y=i,n;var a=this.g-e/this.a;return i=El(a,this.e0,this.e1,this.e2,this.e3),s=ot(this.long0+r/this.ns,this.over),n.x=s,n.y=i,n}var qM=["Equidistant_Conic","eqdc"];const jM={init:WM,forward:XM,inverse:YM,names:qM};function ZM(){this.R=this.a}function $M(n){var t=n.x,e=n.y,i=ot(t-this.long0,this.over),s,r;Math.abs(e)<=st&&(s=this.x0+this.R*i,r=this.y0);var a=as(2*Math.abs(e/Math.PI));(Math.abs(i)<=st||Math.abs(Math.abs(e)-J)<=st)&&(s=this.x0,e>=0?r=this.y0+Math.PI*this.R*Math.tan(.5*a):r=this.y0+Math.PI*this.R*-Math.tan(.5*a));var o=.5*Math.abs(Math.PI/i-i/Math.PI),l=o*o,h=Math.sin(a),u=Math.cos(a),f=u/(h+u-1),c=f*f,d=f*(2/h-1),m=d*d,_=Math.PI*this.R*(o*(f-m)+Math.sqrt(l*(f-m)*(f-m)-(m+l)*(c-m)))/(m+l);i<0&&(_=-_),s=this.x0+_;var g=l+f;return _=Math.PI*this.R*(d*g-o*Math.sqrt((m+l)*(l+1)-g*g))/(m+l),e>=0?r=this.y0+_:r=this.y0-_,n.x=s,n.y=r,n}function KM(n){var t,e,i,s,r,a,o,l,h,u,f,c,d;return n.x-=this.x0,n.y-=this.y0,f=Math.PI*this.R,i=n.x/f,s=n.y/f,r=i*i+s*s,a=-Math.abs(s)*(1+r),o=a-2*s*s+i*i,l=-2*a+1+2*s*s+r*r,d=s*s/l+(2*o*o*o/l/l/l-9*a*o/l/l)/27,h=(a-o*o/3/l)/l,u=2*Math.sqrt(-h/3),f=3*d/h/u,Math.abs(f)>1&&(f>=0?f=1:f=-1),c=Math.acos(f)/3,n.y>=0?e=(-u*Math.cos(c+Math.PI/3)-o/3/l)*Math.PI:e=-(-u*Math.cos(c+Math.PI/3)-o/3/l)*Math.PI,Math.abs(i)<st?t=this.long0:t=ot(this.long0+Math.PI*(r-1+Math.sqrt(1+2*(i*i-s*s)+r*r))/2/i,this.over),n.x=t,n.y=e,n}var JM=["Van_der_Grinten_I","VanDerGrinten","Van_der_Grinten","vandg"];const QM={init:ZM,forward:$M,inverse:KM,names:JM};function tE(n,t,e,i,s,r){const a=i-t,o=Math.atan((1-r)*Math.tan(n)),l=Math.atan((1-r)*Math.tan(e)),h=Math.sin(o),u=Math.cos(o),f=Math.sin(l),c=Math.cos(l);let d=a,m,_=100,g,p,y,x,v,T,b,R,L,S,E,P,F,I;do{if(g=Math.sin(d),p=Math.cos(d),y=Math.sqrt(c*g*(c*g)+(u*f-h*c*p)*(u*f-h*c*p)),y===0)return{azi1:0,s12:0};x=h*f+u*c*p,v=Math.atan2(y,x),T=u*c*g/y,b=1-T*T,R=b!==0?x-2*h*f/b:0,L=r/16*b*(4+r*(4-3*b)),m=d,d=a+(1-L)*r*T*(v+L*y*(R+L*x*(-1+2*R*R)))}while(Math.abs(d-m)>1e-12&&--_>0);return _===0?{azi1:NaN,s12:NaN}:(S=b*(s*s-s*(1-r)*(s*(1-r)))/(s*(1-r)*(s*(1-r))),E=1+S/16384*(4096+S*(-768+S*(320-175*S))),P=S/1024*(256+S*(-128+S*(74-47*S))),F=P*y*(R+P/4*(x*(-1+2*R*R)-P/6*R*(-3+4*y*y)*(-3+4*R*R))),I=s*(1-r)*E*(v-F),{azi1:Math.atan2(c*g,u*f-h*c*p),s12:I})}function eE(n,t,e,i,s,r){const a=Math.atan((1-r)*Math.tan(n)),o=Math.sin(a),l=Math.cos(a),h=Math.sin(e),u=Math.cos(e),f=Math.atan2(o,l*u),c=l*h,d=1-c*c,m=d*(s*s-s*(1-r)*(s*(1-r)))/(s*(1-r)*(s*(1-r))),_=1+m/16384*(4096+m*(-768+m*(320-175*m))),g=m/1024*(256+m*(-128+m*(74-47*m)));let p=i/(s*(1-r)*_),y,x=100,v,T,b,R;do v=Math.cos(2*f+p),T=Math.sin(p),b=Math.cos(p),R=g*T*(v+g/4*(b*(-1+2*v*v)-g/6*v*(-3+4*T*T)*(-3+4*v*v))),y=p,p=i/(s*(1-r)*_)+R;while(Math.abs(p-y)>1e-12&&--x>0);if(x===0)return{lat2:NaN,lon2:NaN};const L=o*T-l*b*u,S=Math.atan2(o*b+l*T*u,(1-r)*Math.sqrt(c*c+L*L)),E=Math.atan2(T*h,l*b-o*T*u),P=r/16*d*(4+r*(4-3*d)),F=E-(1-P)*r*c*(p+P*T*(v+P*b*(-1+2*v*v))),I=t+F;return{lat2:S,lon2:I}}function nE(){this.sin_p12=Math.sin(this.lat0),this.cos_p12=Math.cos(this.lat0),this.f=this.es/(1+Math.sqrt(1-this.es))}function iE(n){var t=n.x,e=n.y,i=Math.sin(n.y),s=Math.cos(n.y),r=ot(t-this.long0,this.over),a,o,l,h,u,f,c,d,m,_,g;return this.sphere?Math.abs(this.sin_p12-1)<=st?(n.x=this.x0+this.a*(J-e)*Math.sin(r),n.y=this.y0-this.a*(J-e)*Math.cos(r),n):Math.abs(this.sin_p12+1)<=st?(n.x=this.x0+this.a*(J+e)*Math.sin(r),n.y=this.y0+this.a*(J+e)*Math.cos(r),n):(m=this.sin_p12*i+this.cos_p12*s*Math.cos(r),c=Math.acos(m),d=c?c/Math.sin(c):1,n.x=this.x0+this.a*d*s*Math.sin(r),n.y=this.y0+this.a*d*(this.cos_p12*i-this.sin_p12*s*Math.cos(r)),n):(a=Wa(this.es),o=Xa(this.es),l=Ya(this.es),h=qa(this.es),Math.abs(this.sin_p12-1)<=st?(u=this.a*gn(a,o,l,h,J),f=this.a*gn(a,o,l,h,e),n.x=this.x0+(u-f)*Math.sin(r),n.y=this.y0-(u-f)*Math.cos(r),n):Math.abs(this.sin_p12+1)<=st?(u=this.a*gn(a,o,l,h,J),f=this.a*gn(a,o,l,h,e),n.x=this.x0+(u+f)*Math.sin(r),n.y=this.y0+(u+f)*Math.cos(r),n):Math.abs(t)<st&&Math.abs(e-this.lat0)<st?(n.x=n.y=0,n):(_=tE(this.lat0,this.long0,e,t,this.a,this.f),g=_.azi1,n.x=_.s12*Math.sin(g),n.y=_.s12*Math.cos(g),n))}function sE(n){n.x-=this.x0,n.y-=this.y0;var t,e,i,s,r,a,o,l,h,u,f,c,d,m,_,g;return this.sphere?(t=Math.sqrt(n.x*n.x+n.y*n.y),t>2*J*this.a?void 0:(e=t/this.a,i=Math.sin(e),s=Math.cos(e),r=this.long0,Math.abs(t)<=st?a=this.lat0:(a=as(s*this.sin_p12+n.y*i*this.cos_p12/t),o=Math.abs(this.lat0)-J,Math.abs(o)<=st?this.lat0>=0?r=ot(this.long0+Math.atan2(n.x,-n.y),this.over):r=ot(this.long0-Math.atan2(-n.x,n.y),this.over):r=ot(this.long0+Math.atan2(n.x*i,t*this.cos_p12*s-n.y*this.sin_p12*i),this.over)),n.x=r,n.y=a,n)):(l=Wa(this.es),h=Xa(this.es),u=Ya(this.es),f=qa(this.es),Math.abs(this.sin_p12-1)<=st?(c=this.a*gn(l,h,u,f,J),t=Math.sqrt(n.x*n.x+n.y*n.y),d=c-t,a=El(d/this.a,l,h,u,f),r=ot(this.long0+Math.atan2(n.x,-1*n.y),this.over),n.x=r,n.y=a,n):Math.abs(this.sin_p12+1)<=st?(c=this.a*gn(l,h,u,f,J),t=Math.sqrt(n.x*n.x+n.y*n.y),d=t-c,a=El(d/this.a,l,h,u,f),r=ot(this.long0+Math.atan2(n.x,n.y),this.over),n.x=r,n.y=a,n):(m=Math.atan2(n.x,n.y),_=Math.sqrt(n.x*n.x+n.y*n.y),g=eE(this.lat0,this.long0,m,_,this.a,this.f),n.x=g.lon2,n.y=g.lat2,n))}var rE=["Azimuthal_Equidistant","aeqd"];const aE={init:nE,forward:iE,inverse:sE,names:rE};function oE(){this.sin_p14=Math.sin(this.lat0),this.cos_p14=Math.cos(this.lat0)}function lE(n){var t,e,i,s,r,a,o,l,h=n.x,u=n.y;return i=ot(h-this.long0,this.over),t=Math.sin(u),e=Math.cos(u),s=Math.cos(i),a=this.sin_p14*t+this.cos_p14*e*s,r=1,(a>0||Math.abs(a)<=st)&&(o=this.a*r*e*Math.sin(i),l=this.y0+this.a*r*(this.cos_p14*t-this.sin_p14*e*s)),n.x=o,n.y=l,n}function hE(n){var t,e,i,s,r,a,o;return n.x-=this.x0,n.y-=this.y0,t=Math.sqrt(n.x*n.x+n.y*n.y),e=as(t/this.a),i=Math.sin(e),s=Math.cos(e),a=this.long0,Math.abs(t)<=st?(o=this.lat0,n.x=a,n.y=o,n):(o=as(s*this.sin_p14+n.y*i*this.cos_p14/t),r=Math.abs(this.lat0)-J,Math.abs(r)<=st?(this.lat0>=0?a=ot(this.long0+Math.atan2(n.x,-n.y),this.over):a=ot(this.long0-Math.atan2(-n.x,n.y),this.over),n.x=a,n.y=o,n):(a=ot(this.long0+Math.atan2(n.x*i,t*this.cos_p14*s-n.y*this.sin_p14*i),this.over),n.x=a,n.y=o,n))}var cE=["ortho"];const uE={init:oE,forward:lE,inverse:hE,names:cE};var Re={FRONT:1,RIGHT:2,BACK:3,LEFT:4,TOP:5,BOTTOM:6},ce={AREA_0:1,AREA_1:2,AREA_2:3,AREA_3:4};function fE(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.lat_ts=this.lat_ts||0,this.title=this.title||"Quadrilateralized Spherical Cube",this.lat0>=J-he/2?this.face=Re.TOP:this.lat0<=-(J-he/2)?this.face=Re.BOTTOM:Math.abs(this.long0)<=he?this.face=Re.FRONT:Math.abs(this.long0)<=J+he?this.face=this.long0>0?Re.RIGHT:Re.LEFT:this.face=Re.BACK,this.es!==0&&(this.one_minus_f=1-(this.a-this.b)/this.a,this.one_minus_f_squared=this.one_minus_f*this.one_minus_f)}function dE(n){var t={x:0,y:0},e,i,s,r,a,o,l={value:0};if(n.x-=this.long0,this.es!==0?e=Math.atan(this.one_minus_f_squared*Math.tan(n.y)):e=n.y,i=n.x,this.face===Re.TOP)r=J-e,i>=he&&i<=J+he?(l.value=ce.AREA_0,s=i-J):i>J+he||i<=-(J+he)?(l.value=ce.AREA_1,s=i>0?i-Ue:i+Ue):i>-(J+he)&&i<=-he?(l.value=ce.AREA_2,s=i+J):(l.value=ce.AREA_3,s=i);else if(this.face===Re.BOTTOM)r=J+e,i>=he&&i<=J+he?(l.value=ce.AREA_0,s=-i+J):i<he&&i>=-he?(l.value=ce.AREA_1,s=-i):i<-he&&i>=-(J+he)?(l.value=ce.AREA_2,s=-i-J):(l.value=ce.AREA_3,s=i>0?-i+Ue:-i-Ue);else{var h,u,f,c,d,m,_;this.face===Re.RIGHT?i=Pr(i,+J):this.face===Re.BACK?i=Pr(i,+Ue):this.face===Re.LEFT&&(i=Pr(i,-J)),c=Math.sin(e),d=Math.cos(e),m=Math.sin(i),_=Math.cos(i),h=d*_,u=d*m,f=c,this.face===Re.FRONT?(r=Math.acos(h),s=co(r,f,u,l)):this.face===Re.RIGHT?(r=Math.acos(u),s=co(r,f,-h,l)):this.face===Re.BACK?(r=Math.acos(-h),s=co(r,f,-u,l)):this.face===Re.LEFT?(r=Math.acos(-u),s=co(r,f,h,l)):(r=s=0,l.value=ce.AREA_0)}return o=Math.atan(12/Ue*(s+Math.acos(Math.sin(s)*Math.cos(he))-J)),a=Math.sqrt((1-Math.cos(r))/(Math.cos(o)*Math.cos(o))/(1-Math.cos(Math.atan(1/Math.cos(s))))),l.value===ce.AREA_1?o+=J:l.value===ce.AREA_2?o+=Ue:l.value===ce.AREA_3&&(o+=1.5*Ue),t.x=a*Math.cos(o),t.y=a*Math.sin(o),t.x=t.x*this.a+this.x0,t.y=t.y*this.a+this.y0,n.x=t.x,n.y=t.y,n}function pE(n){var t={lam:0,phi:0},e,i,s,r,a,o,l,h,u,f={value:0};if(n.x=(n.x-this.x0)/this.a,n.y=(n.y-this.y0)/this.a,i=Math.atan(Math.sqrt(n.x*n.x+n.y*n.y)),e=Math.atan2(n.y,n.x),n.x>=0&&n.x>=Math.abs(n.y)?f.value=ce.AREA_0:n.y>=0&&n.y>=Math.abs(n.x)?(f.value=ce.AREA_1,e-=J):n.x<0&&-n.x>=Math.abs(n.y)?(f.value=ce.AREA_2,e=e<0?e+Ue:e-Ue):(f.value=ce.AREA_3,e+=J),u=Ue/12*Math.tan(e),a=Math.sin(u)/(Math.cos(u)-1/Math.sqrt(2)),o=Math.atan(a),s=Math.cos(e),r=Math.tan(i),l=1-s*s*r*r*(1-Math.cos(Math.atan(1/Math.cos(o)))),l<-1?l=-1:l>1&&(l=1),this.face===Re.TOP)h=Math.acos(l),t.phi=J-h,f.value===ce.AREA_0?t.lam=o+J:f.value===ce.AREA_1?t.lam=o<0?o+Ue:o-Ue:f.value===ce.AREA_2?t.lam=o-J:t.lam=o;else if(this.face===Re.BOTTOM)h=Math.acos(l),t.phi=h-J,f.value===ce.AREA_0?t.lam=-o+J:f.value===ce.AREA_1?t.lam=-o:f.value===ce.AREA_2?t.lam=-o-J:t.lam=o<0?-o-Ue:-o+Ue;else{var c,d,m;c=l,u=c*c,u>=1?m=0:m=Math.sqrt(1-u)*Math.sin(o),u+=m*m,u>=1?d=0:d=Math.sqrt(1-u),f.value===ce.AREA_1?(u=d,d=-m,m=u):f.value===ce.AREA_2?(d=-d,m=-m):f.value===ce.AREA_3&&(u=d,d=m,m=-u),this.face===Re.RIGHT?(u=c,c=-d,d=u):this.face===Re.BACK?(c=-c,d=-d):this.face===Re.LEFT&&(u=c,c=d,d=-u),t.phi=Math.acos(-m)-J,t.lam=Math.atan2(d,c),this.face===Re.RIGHT?t.lam=Pr(t.lam,-J):this.face===Re.BACK?t.lam=Pr(t.lam,-Ue):this.face===Re.LEFT&&(t.lam=Pr(t.lam,+J))}if(this.es!==0){var _,g,p;_=t.phi<0?1:0,g=Math.tan(t.phi),p=this.b/Math.sqrt(g*g+this.one_minus_f_squared),t.phi=Math.atan(Math.sqrt(this.a*this.a-p*p)/(this.one_minus_f*p)),_&&(t.phi=-t.phi)}return t.lam+=this.long0,n.x=t.lam,n.y=t.phi,n}function co(n,t,e,i){var s;return n<st?(i.value=ce.AREA_0,s=0):(s=Math.atan2(t,e),Math.abs(s)<=he?i.value=ce.AREA_0:s>he&&s<=J+he?(i.value=ce.AREA_1,s-=J):s>J+he||s<=-(J+he)?(i.value=ce.AREA_2,s=s>=0?s-Ue:s+Ue):(i.value=ce.AREA_3,s+=J)),s}function Pr(n,t){var e=n+t;return e<-Ue?e+=Aa:e>+Ue&&(e-=Aa),e}var mE=["Quadrilateralized Spherical Cube","Quadrilateralized_Spherical_Cube","qsc"];const gE={init:fE,forward:dE,inverse:pE,names:mE};var Dc=[[1,22199e-21,-715515e-10,31103e-10],[.9986,-482243e-9,-24897e-9,-13309e-10],[.9954,-83103e-8,-448605e-10,-986701e-12],[.99,-.00135364,-59661e-9,36777e-10],[.9822,-.00167442,-449547e-11,-572411e-11],[.973,-.00214868,-903571e-10,18736e-12],[.96,-.00305085,-900761e-10,164917e-11],[.9427,-.00382792,-653386e-10,-26154e-10],[.9216,-.00467746,-10457e-8,481243e-11],[.8962,-.00536223,-323831e-10,-543432e-11],[.8679,-.00609363,-113898e-9,332484e-11],[.835,-.00698325,-640253e-10,934959e-12],[.7986,-.00755338,-500009e-10,935324e-12],[.7597,-.00798324,-35971e-9,-227626e-11],[.7186,-.00851367,-701149e-10,-86303e-10],[.6732,-.00986209,-199569e-9,191974e-10],[.6213,-.010418,883923e-10,624051e-11],[.5722,-.00906601,182e-6,624051e-11],[.5322,-.00677797,275608e-9,624051e-11]],ua=[[-520417e-23,.0124,121431e-23,-845284e-16],[.062,.0124,-126793e-14,422642e-15],[.124,.0124,507171e-14,-160604e-14],[.186,.0123999,-190189e-13,600152e-14],[.248,.0124002,710039e-13,-224e-10],[.31,.0123992,-264997e-12,835986e-13],[.372,.0124029,988983e-12,-311994e-12],[.434,.0123893,-369093e-11,-435621e-12],[.4958,.0123198,-102252e-10,-345523e-12],[.5571,.0121916,-154081e-10,-582288e-12],[.6176,.0119938,-241424e-10,-525327e-12],[.6769,.011713,-320223e-10,-516405e-12],[.7346,.0113541,-397684e-10,-609052e-12],[.7903,.0109107,-489042e-10,-104739e-11],[.8435,.0103431,-64615e-9,-140374e-14],[.8936,.00969686,-64636e-9,-8547e-9],[.9394,.00840947,-192841e-9,-42106e-10],[.9761,.00616527,-256e-6,-42106e-10],[1,.00328947,-319159e-9,-42106e-10]],Rg=.8487,Cg=1.3523,Pg=wn/5,_E=1/Pg,Mr=18,Sl=function(n,t){return n[0]+t*(n[1]+t*(n[2]+t*n[3]))},vE=function(n,t){return n[1]+t*(2*n[2]+t*3*n[3])};function xE(n,t,e,i){for(var s=t;i;--i){var r=n(s);if(s-=r,Math.abs(r)<e)break}return s}function yE(){this.x0=this.x0||0,this.y0=this.y0||0,this.long0=this.long0||0,this.es=0,this.title=this.title||"Robinson"}function ME(n){var t=ot(n.x-this.long0,this.over),e=Math.abs(n.y),i=Math.floor(e*Pg);i<0?i=0:i>=Mr&&(i=Mr-1),e=wn*(e-_E*i);var s={x:Sl(Dc[i],e)*t,y:Sl(ua[i],e)};return n.y<0&&(s.y=-s.y),s.x=s.x*this.a*Rg+this.x0,s.y=s.y*this.a*Cg+this.y0,s}function EE(n){var t={x:(n.x-this.x0)/(this.a*Rg),y:Math.abs(n.y-this.y0)/(this.a*Cg)};if(t.y>=1)t.x/=Dc[Mr][0],t.y=n.y<0?-J:J;else{var e=Math.floor(t.y*Mr);for(e<0?e=0:e>=Mr&&(e=Mr-1);;)if(ua[e][0]>t.y)--e;else if(ua[e+1][0]<=t.y)++e;else break;var i=ua[e],s=5*(t.y-i[0])/(ua[e+1][0]-i[0]);s=xE(function(r){return(Sl(i,r)-t.y)/vE(i,r)},s,st,100),t.x/=Sl(Dc[e],s),t.y=(5*e+s)*Le,n.y<0&&(t.y=-t.y)}return t.x=ot(t.x+this.long0,this.over),t}var SE=["Robinson","robin"];const wE={init:yE,forward:ME,inverse:EE,names:SE};function TE(){this.name="geocent"}function bE(n){var t=_g(n,this.es,this.a);return t}function AE(n){var t=vg(n,this.es,this.a,this.b);return t}var RE=["Geocentric","geocentric","geocent","Geocent"];const CE={init:TE,forward:bE,inverse:AE,names:RE};var un={N_POLE:0,S_POLE:1,EQUIT:2,OBLIQ:3},$r={h:{def:1e5,num:!0},azi:{def:0,num:!0,degrees:!0},tilt:{def:0,num:!0,degrees:!0},long0:{def:0,num:!0},lat0:{def:0,num:!0}};function PE(){if(Object.keys($r).forEach((function(e){if(typeof this[e]>"u")this[e]=$r[e].def;else{if($r[e].num&&isNaN(this[e]))throw new Error("Invalid parameter value, must be numeric "+e+" = "+this[e]);$r[e].num&&(this[e]=parseFloat(this[e]))}$r[e].degrees&&(this[e]=this[e]*Le)}).bind(this)),Math.abs(Math.abs(this.lat0)-J)<st?this.mode=this.lat0<0?un.S_POLE:un.N_POLE:Math.abs(this.lat0)<st?this.mode=un.EQUIT:(this.mode=un.OBLIQ,this.sinph0=Math.sin(this.lat0),this.cosph0=Math.cos(this.lat0)),this.pn1=this.h/this.a,this.pn1<=0||this.pn1>1e10)throw new Error("Invalid height");this.p=1+this.pn1,this.rp=1/this.p,this.h1=1/this.pn1,this.pfact=(this.p+1)*this.h1,this.es=0;var n=this.tilt,t=this.azi;this.cg=Math.cos(t),this.sg=Math.sin(t),this.cw=Math.cos(n),this.sw=Math.sin(n)}function LE(n){n.x-=this.long0;var t=Math.sin(n.y),e=Math.cos(n.y),i=Math.cos(n.x),s,r;switch(this.mode){case un.OBLIQ:r=this.sinph0*t+this.cosph0*e*i;break;case un.EQUIT:r=e*i;break;case un.S_POLE:r=-t;break;case un.N_POLE:r=t;break}switch(r=this.pn1/(this.p-r),s=r*e*Math.sin(n.x),this.mode){case un.OBLIQ:r*=this.cosph0*t-this.sinph0*e*i;break;case un.EQUIT:r*=t;break;case un.N_POLE:r*=-(e*i);break;case un.S_POLE:r*=e*i;break}var a,o;return a=r*this.cg+s*this.sg,o=1/(a*this.sw*this.h1+this.cw),s=(s*this.cg-r*this.sg)*this.cw*o,r=a*o,n.x=s*this.a,n.y=r*this.a,n}function IE(n){n.x/=this.a,n.y/=this.a;var t={x:n.x,y:n.y},e,i,s;s=1/(this.pn1-n.y*this.sw),e=this.pn1*n.x*s,i=this.pn1*n.y*this.cw*s,n.x=e*this.cg+i*this.sg,n.y=i*this.cg-e*this.sg;var r=Sn(n.x,n.y);if(Math.abs(r)<st)t.x=0,t.y=n.y;else{var a,o;switch(o=1-r*r*this.pfact,o=(this.p-Math.sqrt(o))/(this.pn1/r+r/this.pn1),a=Math.sqrt(1-o*o),this.mode){case un.OBLIQ:t.y=Math.asin(a*this.sinph0+n.y*o*this.cosph0/r),n.y=(a-this.sinph0*Math.sin(t.y))*r,n.x*=o*this.cosph0;break;case un.EQUIT:t.y=Math.asin(n.y*o/r),n.y=a*r,n.x*=o;break;case un.N_POLE:t.y=Math.asin(a),n.y=-n.y;break;case un.S_POLE:t.y=-Math.asin(a);break}t.x=Math.atan2(n.x,n.y)}return n.x=t.x+this.long0,n.y=t.y,n}var DE=["Tilted_Perspective","tpers"];const NE={init:PE,forward:LE,inverse:IE,names:DE};function OE(){if(this.flip_axis=this.sweep==="x"?1:0,this.h=Number(this.h),this.radius_g_1=this.h/this.a,this.radius_g_1<=0||this.radius_g_1>1e10)throw new Error;if(this.radius_g=1+this.radius_g_1,this.C=this.radius_g*this.radius_g-1,this.es!==0){var n=1-this.es,t=1/n;this.radius_p=Math.sqrt(n),this.radius_p2=n,this.radius_p_inv2=t,this.shape="ellipse"}else this.radius_p=1,this.radius_p2=1,this.radius_p_inv2=1,this.shape="sphere";this.title||(this.title="Geostationary Satellite View")}function UE(n){var t=n.x,e=n.y,i,s,r,a;if(t=t-this.long0,this.shape==="ellipse"){e=Math.atan(this.radius_p2*Math.tan(e));var o=this.radius_p/Sn(this.radius_p*Math.cos(e),Math.sin(e));if(s=o*Math.cos(t)*Math.cos(e),r=o*Math.sin(t)*Math.cos(e),a=o*Math.sin(e),(this.radius_g-s)*s-r*r-a*a*this.radius_p_inv2<0)return n.x=Number.NaN,n.y=Number.NaN,n;i=this.radius_g-s,this.flip_axis?(n.x=this.radius_g_1*Math.atan(r/Sn(a,i)),n.y=this.radius_g_1*Math.atan(a/i)):(n.x=this.radius_g_1*Math.atan(r/i),n.y=this.radius_g_1*Math.atan(a/Sn(r,i)))}else this.shape==="sphere"&&(i=Math.cos(e),s=Math.cos(t)*i,r=Math.sin(t)*i,a=Math.sin(e),i=this.radius_g-s,this.flip_axis?(n.x=this.radius_g_1*Math.atan(r/Sn(a,i)),n.y=this.radius_g_1*Math.atan(a/i)):(n.x=this.radius_g_1*Math.atan(r/i),n.y=this.radius_g_1*Math.atan(a/Sn(r,i))));return n.x=n.x*this.a,n.y=n.y*this.a,n}function FE(n){var t=-1,e=0,i=0,s,r,a,o;if(n.x=n.x/this.a,n.y=n.y/this.a,this.shape==="ellipse"){this.flip_axis?(i=Math.tan(n.y/this.radius_g_1),e=Math.tan(n.x/this.radius_g_1)*Sn(1,i)):(e=Math.tan(n.x/this.radius_g_1),i=Math.tan(n.y/this.radius_g_1)*Sn(1,e));var l=i/this.radius_p;if(s=e*e+l*l+t*t,r=2*this.radius_g*t,a=r*r-4*s*this.C,a<0)return n.x=Number.NaN,n.y=Number.NaN,n;o=(-r-Math.sqrt(a))/(2*s),t=this.radius_g+o*t,e*=o,i*=o,n.x=Math.atan2(e,t),n.y=Math.atan(i*Math.cos(n.x)/t),n.y=Math.atan(this.radius_p_inv2*Math.tan(n.y))}else if(this.shape==="sphere"){if(this.flip_axis?(i=Math.tan(n.y/this.radius_g_1),e=Math.tan(n.x/this.radius_g_1)*Math.sqrt(1+i*i)):(e=Math.tan(n.x/this.radius_g_1),i=Math.tan(n.y/this.radius_g_1)*Math.sqrt(1+e*e)),s=e*e+i*i+t*t,r=2*this.radius_g*t,a=r*r-4*s*this.C,a<0)return n.x=Number.NaN,n.y=Number.NaN,n;o=(-r-Math.sqrt(a))/(2*s),t=this.radius_g+o*t,e*=o,i*=o,n.x=Math.atan2(e,t),n.y=Math.atan(i*Math.cos(n.x)/t)}return n.x=n.x+this.long0,n}var GE=["Geostationary Satellite View","Geostationary_Satellite","geos"];const BE={init:OE,forward:UE,inverse:FE,names:GE};var ga=1.340264,_a=-.081106,va=893e-6,xa=.003796,wl=Math.sqrt(3)/2;function zE(){this.es=0,this.long0=this.long0!==void 0?this.long0:0,this.x0=this.x0!==void 0?this.x0:0,this.y0=this.y0!==void 0?this.y0:0}function kE(n){var t=ot(n.x-this.long0,this.over),e=n.y,i=Math.asin(wl*Math.sin(e)),s=i*i,r=s*s*s;return n.x=t*Math.cos(i)/(wl*(ga+3*_a*s+r*(7*va+9*xa*s))),n.y=i*(ga+_a*s+r*(va+xa*s)),n.x=this.a*n.x+this.x0,n.y=this.a*n.y+this.y0,n}function VE(n){n.x=(n.x-this.x0)/this.a,n.y=(n.y-this.y0)/this.a;var t=1e-9,e=12,i=n.y,s,r,a,o,l,h;for(h=0;h<e&&(s=i*i,r=s*s*s,a=i*(ga+_a*s+r*(va+xa*s))-n.y,o=ga+3*_a*s+r*(7*va+9*xa*s),i-=l=a/o,!(Math.abs(l)<t));++h);return s=i*i,r=s*s*s,n.x=wl*n.x*(ga+3*_a*s+r*(7*va+9*xa*s))/Math.cos(i),n.y=Math.asin(Math.sin(i)/wl),n.x=ot(n.x+this.long0,this.over),n}var HE=["eqearth","Equal Earth","Equal_Earth"];const WE={init:zE,forward:kE,inverse:VE,names:HE};var La=1e-10;function XE(){var n;if(this.phi1=this.lat1,Math.abs(this.phi1)<La)throw new Error;this.es?(this.en=nf(this.es),this.m1=Hr(this.phi1,this.am1=Math.sin(this.phi1),n=Math.cos(this.phi1),this.en),this.am1=n/(Math.sqrt(1-this.es*this.am1*this.am1)*this.am1),this.inverse=qE,this.forward=YE):(Math.abs(this.phi1)+La>=J?this.cphi1=0:this.cphi1=1/Math.tan(this.phi1),this.inverse=ZE,this.forward=jE)}function YE(n){var t=ot(n.x-(this.long0||0),this.over),e=n.y,i,s,r;return i=this.am1+this.m1-Hr(e,s=Math.sin(e),r=Math.cos(e),this.en),s=r*t/(i*Math.sqrt(1-this.es*s*s)),n.x=i*Math.sin(s),n.y=this.am1-i*Math.cos(s),n.x=this.a*n.x+(this.x0||0),n.y=this.a*n.y+(this.y0||0),n}function qE(n){n.x=(n.x-(this.x0||0))/this.a,n.y=(n.y-(this.y0||0))/this.a;var t,e,i,s;if(e=Sn(n.x,n.y=this.am1-n.y),s=sf(this.am1+this.m1-e,this.es,this.en),(t=Math.abs(s))<J)t=Math.sin(s),i=e*Math.atan2(n.x,n.y)*Math.sqrt(1-this.es*t*t)/Math.cos(s);else if(Math.abs(t-J)<=La)i=0;else throw new Error;return n.x=ot(i+(this.long0||0),this.over),n.y=hs(s),n}function jE(n){var t=ot(n.x-(this.long0||0),this.over),e=n.y,i,s;return s=this.cphi1+this.phi1-e,Math.abs(s)>La?(n.x=s*Math.sin(i=t*Math.cos(e)/s),n.y=this.cphi1-s*Math.cos(i)):n.x=n.y=0,n.x=this.a*n.x+(this.x0||0),n.y=this.a*n.y+(this.y0||0),n}function ZE(n){n.x=(n.x-(this.x0||0))/this.a,n.y=(n.y-(this.y0||0))/this.a;var t,e,i=Sn(n.x,n.y=this.cphi1-n.y);if(e=this.cphi1+this.phi1-i,Math.abs(e)>J)throw new Error;return Math.abs(Math.abs(e)-J)<=La?t=0:t=i*Math.atan2(n.x,n.y)/Math.cos(e),n.x=ot(t+(this.long0||0),this.over),n.y=hs(e),n}var $E=["bonne","Bonne (Werner lat_1=90)"];const KE={init:XE,names:$E},Id={OBLIQUE:{forward:n1,inverse:s1},TRANSVERSE:{forward:i1,inverse:r1}},Tl={ROTATE:{o_alpha:"oAlpha",o_lon_c:"oLongC",o_lat_c:"oLatC"},NEW_POLE:{o_lat_p:"oLatP",o_lon_p:"oLongP"},NEW_EQUATOR:{o_lon_1:"oLong1",o_lat_1:"oLat1",o_lon_2:"oLong2",o_lat_2:"oLat2"}};function JE(){if(this.x0=this.x0||0,this.y0=this.y0||0,this.long0=this.long0||0,this.title=this.title||"General Oblique Transformation",this.isIdentity=dg.includes(this.o_proj),!this.o_proj)throw new Error("Missing parameter: o_proj");if(this.o_proj==="ob_tran")throw new Error("Invalid value for o_proj: "+this.o_proj);const n=this.projStr.replace("+proj=ob_tran","").replace("+o_proj=","+proj=").trim(),t=Hn(n);if(!t)throw new Error("Invalid parameter: o_proj. Unknown projection "+this.o_proj);t.long0=0,this.obliqueProjection=t;let e;const i=Object.keys(Tl),s=o=>{if(typeof this[o]>"u")return;const l=parseFloat(this[o])*Le;if(isNaN(l))throw new Error("Invalid value for "+o+": "+this[o]);return l};for(let o=0;o<i.length;o++){const l=i[o],h=Tl[l],u=Object.entries(h);if(u.some(([c])=>typeof this[c]<"u")){e=h;for(let c=0;c<u.length;c++){const[d,m]=u[c],_=s(d);if(typeof _>"u")throw new Error("Missing parameter: "+d+".");this[m]=_}break}}if(!e)throw new Error("No valid parameters provided for ob_tran projection.");const{lamp:r,phip:a}=e1(this,e);this.lamp=r,Math.abs(a)>st?(this.cphip=Math.cos(a),this.sphip=Math.sin(a),this.projectionType=Id.OBLIQUE):this.projectionType=Id.TRANSVERSE}function QE(n){return this.projectionType.forward(this,n)}function t1(n){return this.projectionType.inverse(this,n)}function e1(n,t){let e,i;if(t===Tl.ROTATE){let s=n.oLongC,r=n.oLatC,a=n.oAlpha;if(Math.abs(Math.abs(r)-J)<=st)throw new Error("Invalid value for o_lat_c: "+n.o_lat_c+" should be < 90°");i=s+Math.atan2(-1*Math.cos(a),-1*Math.sin(a)*Math.sin(r)),e=Math.asin(Math.cos(r)*Math.sin(a))}else if(t===Tl.NEW_POLE)i=n.oLongP,e=n.oLatP;else{let s=n.oLong1,r=n.oLat1,a=n.oLong2,o=n.oLat2,l=Math.abs(r);if(Math.abs(r)>J-st)throw new Error("Invalid value for o_lat_1: "+n.o_lat_1+" should be < 90°");if(Math.abs(o)>J-st)throw new Error("Invalid value for o_lat_2: "+n.o_lat_2+" should be < 90°");if(Math.abs(r-o)<st)throw new Error("Invalid value for o_lat_1 and o_lat_2: o_lat_1 should be different from o_lat_2");if(l<st)throw new Error("Invalid value for o_lat_1: o_lat_1 should be different from zero");i=Math.atan2(Math.cos(r)*Math.sin(o)*Math.cos(s)-Math.sin(r)*Math.cos(o)*Math.cos(a),Math.sin(r)*Math.cos(o)*Math.sin(a)-Math.cos(r)*Math.sin(o)*Math.sin(s)),e=Math.atan(-1*Math.cos(i-s)/Math.tan(r))}return{lamp:i,phip:e}}function n1(n,t){let{x:e,y:i}=t;e+=n.long0;const s=Math.cos(e),r=Math.sin(i),a=Math.cos(i);t.x=ot(Math.atan2(a*Math.sin(e),n.sphip*a*s+n.cphip*r)+n.lamp),t.y=Math.asin(n.sphip*r-n.cphip*a*s);const o=n.obliqueProjection.forward(t);return n.isIdentity&&(o.x*=wn,o.y*=wn),o}function i1(n,t){let{x:e,y:i}=t;e+=n.long0;const s=Math.cos(i),r=Math.cos(e);t.x=ot(Math.atan2(s*Math.sin(e),Math.sin(i))+n.lamp),t.y=Math.asin(-1*s*r);const a=n.obliqueProjection.forward(t);return n.isIdentity&&(a.x*=wn,a.y*=wn),a}function s1(n,t){n.isIdentity&&(t.x*=Le,t.y*=Le);const e=n.obliqueProjection.inverse(t);let{x:i,y:s}=e;if(i<Number.MAX_VALUE){i-=n.lamp;const r=Math.cos(i),a=Math.sin(s),o=Math.cos(s);t.x=Math.atan2(o*Math.sin(i),n.sphip*o*r-n.cphip*a),t.y=Math.asin(n.sphip*a+n.cphip*o*r)}return t.x=ot(t.x+n.long0),t}function r1(n,t){n.isIdentity&&(t.x*=Le,t.y*=Le);const e=n.obliqueProjection.inverse(t);let{x:i,y:s}=e;if(i<Number.MAX_VALUE){const r=Math.cos(s);i-=n.lamp,t.x=Math.atan2(r*Math.sin(i),-1*Math.sin(s)),t.y=Math.asin(r*Math.cos(i))}return t.x=ot(t.x+n.long0),t}var a1=["General Oblique Transformation","General_Oblique_Transformation","ob_tran"];const o1={init:JE,forward:QE,inverse:t1,names:a1};function l1(n){n.Proj.projections.add(el),n.Proj.projections.add(nl),n.Proj.projections.add($x),n.Proj.projections.add(ry),n.Proj.projections.add(cy),n.Proj.projections.add(my),n.Proj.projections.add(My),n.Proj.projections.add(by),n.Proj.projections.add(Ly),n.Proj.projections.add(Uy),n.Proj.projections.add(Zy),n.Proj.projections.add(eM),n.Proj.projections.add(aM),n.Proj.projections.add(fM),n.Proj.projections.add(_M),n.Proj.projections.add(EM),n.Proj.projections.add(AM),n.Proj.projections.add(IM),n.Proj.projections.add(GM),n.Proj.projections.add(HM),n.Proj.projections.add(jM),n.Proj.projections.add(QM),n.Proj.projections.add(aE),n.Proj.projections.add(uE),n.Proj.projections.add(gE),n.Proj.projections.add(wE),n.Proj.projections.add(CE),n.Proj.projections.add(NE),n.Proj.projections.add(BE),n.Proj.projections.add(WE),n.Proj.projections.add(KE),n.Proj.projections.add(o1)}const On=Object.assign(dx,{defaultDatum:"WGS84",Proj:Hn,WGS84:new Hn("WGS84"),Point:Nr,toPoint:xg,defs:en,nadgrid:Zv,transform:Ml,mgrs:px,version:"__VERSION__"});l1(On);class Ji{constructor(t,e){this._authority=t,this._code=e}static parse(t){const e=t.trim().split(":");if(e.length===2){const i=Number.parseInt(e[1]);return new Ji(e[0],i)}throw new Error("could not parse SRID")}get authority(){return this._authority}get code(){return this._code}toString(){return`${this._authority}:${this._code}`}isEpsg(t){return this._authority==="EPSG"&&this._code===t}tryGetEpsgCode(){return this._authority!=="EPSG"?null:this._code}}function Lg(n){switch(n.name.toLowerCase()){case"deg":case"degree":case"degrees":return"°";case"rad":case"radian":case"radians":return"rad";case"m":case"meter":case"metre":case"meters":case"metres":return"m";case"ft":case"foot":case"feet":case"us-ft":case"us survey feet":case"us survey foot":return"ft";default:return""}}class fn{type="linear";constructor(t,e){this.name=t,this.metersPerUnit=e}getSymbol(){return Lg(this)}static meters=new fn("meters",1);static feet=new fn("feet",.3048);static usSurveyFeet=new fn("US Survey feet",.304800609601219);equals(t){return t.metersPerUnit===this.metersPerUnit}static isLinearUnit(t){return t?t.type==="linear":!1}}class bi{type="angular";constructor(t,e){this.name=t,this.degreesPerUnit=e}getSymbol(){return Lg(this)}static degrees=new bi("degrees",1);static radians=new bi("radians",57.29578);equals(t){return t.degreesPerUnit===this.degreesPerUnit}static isAngularUnit(t){return t?t.type==="angular":!1}}function h1(n){switch(n.trim().toLowerCase()){case"deg":case"degree":case"degrees":return bi.degrees;case"rad":case"radian":case"radians":return bi.radians;case"m":case"meter":case"meters":case"metre":case"metres":return fn.meters;case"ft":case"feet":case"foot":return fn.feet;case"us-ft":case"us survey feet":case"us survey foot":case"foot (us survey)":return fn.usSurveyFeet;default:return}}function Ig(n){return new fn(n.name,n.convert)}function Nc(n){const[t,e]=Object.entries(n)[0];return new Ji(t,Number.parseInt(e))}function Oc(n){return"name"in n&&typeof n.name=="string"?n.name:"<unknown>"}function Dd(n){const t=Oc(n),e=Ig(n.UNIT);if(n.AUTHORITY){const i=Nc(n.AUTHORITY);return{name:t,srid:i,unit:e}}return{name:t,unit:e}}class Yt{static epsg3857=new Yt({name:"WGS 84 / Pseudo-Mercator",srid:new Ji("EPSG",3857),horizontal:{unit:fn.meters},vertical:{unit:fn.meters}});static epsg4326=new Yt({name:"WGS 84",srid:new Ji("EPSG",4326),horizontal:{unit:bi.degrees},vertical:{unit:fn.meters}});static epsg4978=new Yt({name:"WGS 84",srid:new Ji("EPSG",4978),horizontal:{unit:fn.meters},vertical:{unit:fn.meters}});static epsg4979=new Yt({name:"WGS 84",srid:new Ji("EPSG",4979),horizontal:{unit:bi.degrees},vertical:{unit:fn.meters}});static equirectangular=new Yt({name:"equirectangular",horizontal:{unit:bi.degrees}});static unknown=new Yt({name:"unknown"});static _registry=new Map([["EPSG:3857",Yt.epsg3857],["EPSG:4326",Yt.epsg4326],["EPSG:4978",Yt.epsg4978],["EPSG:4979",Yt.epsg4979],["equirectangular",Yt.equirectangular],["unknown",Yt.unknown]]);static register(t,e,i){if(this._registry.has(t))return this._registry.get(t);try{this.registerCRSWithProjAndOpenLayers(t,e)}catch(r){if(i?.throwIfFailedToRegisterWithProj===!0)throw r;console.warn(r)}const s=Yt.fromWkt(e,{id:t});return this._registry.set(t,s),s}static clearRegistry(){this._registry.clear(),this._registry.set("EPSG:3857",Yt.epsg3857),this._registry.set("EPSG:4326",Yt.epsg4326),this._registry.set("EPSG:4978",Yt.epsg4978),this._registry.set("EPSG:4979",Yt.epsg4979),this._registry.set("equirectangular",Yt.equirectangular),this._registry.set("unknown",Yt.unknown)}static registerCRSWithProjAndOpenLayers(t,e){if(!t||t==="")throw new Error("missing CRS name");if(!e||e==="")throw new Error("missing CRS PROJ string");try{On.defs(t,e)}catch(i){let s="";throw i instanceof Error&&(s=": "+i.message),new Error(`failed to register PROJ definition for ${t}${s}`)}try{sg(On)}catch(i){let s="";throw i instanceof Error&&(s=": "+i.message),new Error(`failed to register PROJ definitions in OpenLayers${s}`)}}static get(t){const e=this._registry.get(t);if(e)return e;throw new Error(`coordinate system not found: ${t}`)}static fromWkt(t,e){try{let i;try{i=Ca(t)}catch{i=fg(t)}if("ID"in i)return new Yt({id:e?.id,name:Oc(i),srid:Nc(i.ID),definition:t});if("PROJCS"in i){const s=Dd(i.PROJCS),r={id:e?.id,name:s.name,srid:s.srid,definition:t,horizontal:{unit:s.unit}};return"VERT_CS"in i&&(r.vertical={unit:Ig(i.VERT_CS.UNIT)}),new Yt(r)}else if("type"in i&&i.type==="PROJCS"){const s=Dd(i);return new Yt({id:e?.id,name:s.name,srid:s.srid,definition:t,horizontal:{unit:s.unit}})}else{let s,r;return"AUTHORITY"in i&&typeof i.AUTHORITY=="object"&&i.AUTHORITY&&(s=Nc(i.AUTHORITY)),"title"in i&&typeof i.title=="string"&&(s=Ji.parse(i.title)),"units"in i&&typeof i.units=="string"&&(r=h1(i.units)),new Yt({id:e?.id,name:Oc(i),srid:s,horizontal:r!=null?{unit:r}:void 0})}}catch(i){throw console.error(`Failed to parse wkt "${t}".`),i}}get id(){return typeof this._customId<"u"?this._customId:typeof this.srid<"u"?this.srid.toString():this.name}constructor(t){this.name=t.name,this.srid=t.srid,this._customId=t.id,typeof t.horizontal<"u"&&(this.horizontal=t.horizontal),typeof t.vertical<"u"&&(this.vertical=t.vertical),typeof t.definition<"u"&&(this.definition=t.definition)}isGeographic(){const t=this.horizontal?.unit;return!!bi.isAngularUnit(t)}get metersPerHorizontalUnit(){const t=this.horizontal?.unit;return fn.isLinearUnit(t)?t.metersPerUnit:1}get metersPerVerticalUnit(){const t=this.vertical?.unit;return fn.isLinearUnit(t)?t.metersPerUnit:this.metersPerHorizontalUnit}isEpsg(t){return typeof this.srid<"u"?this.srid.isEpsg(t):!1}isEquirectangular(){return this.name==="equirectangular"}isUnknown(){return this.name==="unknown"&&typeof this.definition>"u"}equals(t){return this.id===t.id}}const cf="170",Ri={ROTATE:0,DOLLY:1,PAN:2},ts={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},c1=0,Nd=1,u1=2,Dg=1,f1=2,Ei=3,Pi=0,Tn=1,wi=2,ui=0,kn=1,Od=2,Ud=3,Fd=4,d1=5,bs=100,p1=101,m1=102,g1=103,_1=104,v1=200,x1=201,y1=202,M1=203,Uc=204,Fc=205,E1=206,S1=207,w1=208,T1=209,b1=210,A1=211,R1=212,C1=213,P1=214,Gc=0,Bc=1,zc=2,Or=3,kc=4,Vc=5,Hc=6,Wc=7,Ng=0,L1=1,I1=2,ss=0,Og=1,Ug=2,Fg=3,Gg=4,D1=5,Bg=6,zg=7,kg=300,Ur=301,Fr=302,Xc=303,Yc=304,jl=306,qc=1e3,ii=1001,jc=1002,Ge=1003,N1=1004,uo=1005,Fe=1006,xh=1007,Cs=1008,ue=1009,Zl=1010,$l=1011,os=1012,ja=1013,Li=1014,Ie=1015,Ni=1016,Za=1017,$a=1018,ls=1020,Vg=35902,uf=1021,Hg=1022,Te=1023,ff=1024,df=1025,Ds=1026,Fs=1027,pf=1028,Kl=1029,Wr=1030,Jl=1031,Ql=1033,sl=33776,rl=33777,al=33778,ol=33779,Zc=35840,$c=35841,Kc=35842,Jc=35843,Qc=36196,tu=37492,eu=37496,nu=37808,iu=37809,su=37810,ru=37811,au=37812,ou=37813,lu=37814,hu=37815,cu=37816,uu=37817,fu=37818,du=37819,pu=37820,mu=37821,ll=36492,gu=36494,_u=36495,Wg=36283,vu=36284,xu=36285,yu=36286,O1=3200,U1=3201,F1=0,G1=1,hi="",Dn="srgb",Vs="srgb-linear",th="linear",me="srgb",qs=7680,Gd=519,B1=512,z1=513,k1=514,Xg=515,V1=516,H1=517,W1=518,X1=519,Bd=35044,bl="300 es",Ai=2e3,Al=2001;class pn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zd=1234567;const ya=Math.PI/180,Ia=180/Math.PI;function Xr(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]+"-"+ln[t&255]+ln[t>>8&255]+"-"+ln[t>>16&15|64]+ln[t>>24&255]+"-"+ln[e&63|128]+ln[e>>8&255]+"-"+ln[e>>16&255]+ln[e>>24&255]+ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]).toLowerCase()}function sn(n,t,e){return Math.max(t,Math.min(e,n))}function mf(n,t){return(n%t+t)%t}function Y1(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function q1(n,t,e){return n!==t?(e-n)/(t-n):0}function Ma(n,t,e){return(1-e)*n+e*t}function j1(n,t,e,i){return Ma(n,t,1-Math.exp(-e*i))}function Z1(n,t=1){return t-Math.abs(mf(n,t*2)-t)}function $1(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function K1(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function J1(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Q1(n,t){return n+Math.random()*(t-n)}function tS(n){return n*(.5-Math.random())}function eS(n){n!==void 0&&(zd=n);let t=zd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function nS(n){return n*ya}function iS(n){return n*Ia}function sS(n){return(n&n-1)===0&&n!==0}function rS(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function aS(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function oS(n,t,e,i,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),h=r((t+i)/2),u=a((t+i)/2),f=r((t-i)/2),c=a((t-i)/2),d=r((i-t)/2),m=a((i-t)/2);switch(s){case"XYX":n.set(o*u,l*f,l*c,o*h);break;case"YZY":n.set(l*c,o*u,l*f,o*h);break;case"ZXZ":n.set(l*f,l*c,o*u,o*h);break;case"XZX":n.set(o*u,l*m,l*d,o*h);break;case"YXY":n.set(l*d,o*u,l*m,o*h);break;case"ZYZ":n.set(l*m,l*d,o*u,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ci(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ge(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const qt={DEG2RAD:ya,RAD2DEG:Ia,generateUUID:Xr,clamp:sn,euclideanModulo:mf,mapLinear:Y1,inverseLerp:q1,lerp:Ma,damp:j1,pingpong:Z1,smoothstep:$1,smootherstep:K1,randInt:J1,randFloat:Q1,randFloatSpread:tS,seededRandom:eS,degToRad:nS,radToDeg:iS,isPowerOfTwo:sS,ceilPowerOfTwo:rS,floorPowerOfTwo:aS,setQuaternionFromProperEuler:oS,normalize:ge,denormalize:ci};class Z{constructor(t=0,e=0){Z.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(sn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gt{constructor(t,e,i,s,r,a,o,l,h){Gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,h)}set(t,e,i,s,r,a,o,l,h){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],h=i[1],u=i[4],f=i[7],c=i[2],d=i[5],m=i[8],_=s[0],g=s[3],p=s[6],y=s[1],x=s[4],v=s[7],T=s[2],b=s[5],R=s[8];return r[0]=a*_+o*y+l*T,r[3]=a*g+o*x+l*b,r[6]=a*p+o*v+l*R,r[1]=h*_+u*y+f*T,r[4]=h*g+u*x+f*b,r[7]=h*p+u*v+f*R,r[2]=c*_+d*y+m*T,r[5]=c*g+d*x+m*b,r[8]=c*p+d*v+m*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],u=t[8];return e*a*u-e*o*h-i*r*u+i*o*l+s*r*h-s*a*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],u=t[8],f=u*a-o*h,c=o*l-u*r,d=h*r-a*l,m=e*f+i*c+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=f*_,t[1]=(s*h-u*i)*_,t[2]=(o*i-s*a)*_,t[3]=c*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=d*_,t[7]=(i*l-h*e)*_,t[8]=(a*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const l=Math.cos(r),h=Math.sin(r);return this.set(i*l,i*h,-i*(l*a+h*o)+a+t,-s*h,s*l,-s*(-h*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(yh.makeScale(t,e)),this}rotate(t){return this.premultiply(yh.makeRotation(-t)),this}translate(t,e){return this.premultiply(yh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const yh=new Gt;function Yg(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Rl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function lS(){const n=Rl("canvas");return n.style.display="block",n}const kd={};function fa(n){n in kd||(kd[n]=!0,console.warn(n))}function hS(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function cS(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function uS(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Qt={enabled:!0,workingColorSpace:Vs,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===me&&(n.r=Ci(n.r),n.g=Ci(n.g),n.b=Ci(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===me&&(n.r=Lr(n.r),n.g=Lr(n.g),n.b=Lr(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===hi?th:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Ci(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Lr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Vd=[.64,.33,.3,.6,.15,.06],Hd=[.2126,.7152,.0722],Wd=[.3127,.329],Xd=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yd=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qt.define({[Vs]:{primaries:Vd,whitePoint:Wd,transfer:th,toXYZ:Xd,fromXYZ:Yd,luminanceCoefficients:Hd,workingColorSpaceConfig:{unpackColorSpace:Dn},outputColorSpaceConfig:{drawingBufferColorSpace:Dn}},[Dn]:{primaries:Vd,whitePoint:Wd,transfer:me,toXYZ:Xd,fromXYZ:Yd,luminanceCoefficients:Hd,outputColorSpaceConfig:{drawingBufferColorSpace:Dn}}});let js;class fS{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{js===void 0&&(js=Rl("canvas")),js.width=t.width,js.height=t.height;const i=js.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=js}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Rl("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ci(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ci(e[i]/255)*255):e[i]=Ci(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let dS=0,qg=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dS++}),this.uuid=Xr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Mh(s[a].image)):r.push(Mh(s[a]))}else r=Mh(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Mh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?fS.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pS=0;class Ze extends pn{constructor(t=Ze.DEFAULT_IMAGE,e=Ze.DEFAULT_MAPPING,i=ii,s=ii,r=Fe,a=Cs,o=Te,l=ue,h=Ze.DEFAULT_ANISOTROPY,u=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pS++}),this.uuid=Xr(),this.name="",this.source=new qg(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Z(0,0),this.repeat=new Z(1,1),this.center=new Z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qc:t.x=t.x-Math.floor(t.x);break;case ii:t.x=t.x<0?0:1;break;case jc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qc:t.y=t.y-Math.floor(t.y);break;case ii:t.y=t.y<0?0:1;break;case jc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=kg;Ze.DEFAULT_ANISOTROPY=1;class te{constructor(t=0,e=0,i=0,s=1){te.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,h=l[0],u=l[4],f=l[8],c=l[1],d=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(u-c)<.01&&Math.abs(f-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+c)<.1&&Math.abs(f+_)<.1&&Math.abs(m+g)<.1&&Math.abs(h+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(h+1)/2,v=(d+1)/2,T=(p+1)/2,b=(u+c)/4,R=(f+_)/4,L=(m+g)/4;return x>v&&x>T?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=b/i,r=R/i):v>T?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=b/s,r=L/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=R/r,s=L/r),this.set(i,s,r,e),this}let y=Math.sqrt((g-m)*(g-m)+(f-_)*(f-_)+(c-u)*(c-u));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(f-_)/y,this.z=(c-u)/y,this.w=Math.acos((h+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mS extends pn{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new te(0,0,t,e),this.scissorTest=!1,this.viewport=new te(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Ze(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new qg(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bn extends mS{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class jg extends Ze{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class gS extends Ze{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gs{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],h=i[s+1],u=i[s+2],f=i[s+3];const c=r[a+0],d=r[a+1],m=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=h,t[e+2]=u,t[e+3]=f;return}if(o===1){t[e+0]=c,t[e+1]=d,t[e+2]=m,t[e+3]=_;return}if(f!==_||l!==c||h!==d||u!==m){let g=1-o;const p=l*c+h*d+u*m+f*_,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const T=Math.sqrt(x),b=Math.atan2(T,p*y);g=Math.sin(g*b)/T,o=Math.sin(o*b)/T}const v=o*y;if(l=l*g+c*v,h=h*g+d*v,u=u*g+m*v,f=f*g+_*v,g===1-o){const T=1/Math.sqrt(l*l+h*h+u*u+f*f);l*=T,h*=T,u*=T,f*=T}}t[e]=l,t[e+1]=h,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],l=i[s+1],h=i[s+2],u=i[s+3],f=r[a],c=r[a+1],d=r[a+2],m=r[a+3];return t[e]=o*m+u*f+l*d-h*c,t[e+1]=l*m+u*c+h*f-o*d,t[e+2]=h*m+u*d+o*c-l*f,t[e+3]=u*m-o*f-l*c-h*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,h=o(i/2),u=o(s/2),f=o(r/2),c=l(i/2),d=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=c*u*f+h*d*m,this._y=h*d*f-c*u*m,this._z=h*u*m+c*d*f,this._w=h*u*f-c*d*m;break;case"YXZ":this._x=c*u*f+h*d*m,this._y=h*d*f-c*u*m,this._z=h*u*m-c*d*f,this._w=h*u*f+c*d*m;break;case"ZXY":this._x=c*u*f-h*d*m,this._y=h*d*f+c*u*m,this._z=h*u*m+c*d*f,this._w=h*u*f-c*d*m;break;case"ZYX":this._x=c*u*f-h*d*m,this._y=h*d*f+c*u*m,this._z=h*u*m-c*d*f,this._w=h*u*f+c*d*m;break;case"YZX":this._x=c*u*f+h*d*m,this._y=h*d*f+c*u*m,this._z=h*u*m-c*d*f,this._w=h*u*f-c*d*m;break;case"XZY":this._x=c*u*f-h*d*m,this._y=h*d*f-c*u*m,this._z=h*u*m+c*d*f,this._w=h*u*f+c*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],h=e[2],u=e[6],f=e[10],c=i+o+f;if(c>0){const d=.5/Math.sqrt(c+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-h)*d,this._z=(a-s)*d}else if(i>o&&i>f){const d=2*Math.sqrt(1+i-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+h)/d}else if(o>f){const d=2*Math.sqrt(1+o-i-f);this._w=(r-h)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-o);this._w=(a-s)/d,this._x=(r+h)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(sn(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,h=e._z,u=e._w;return this._x=i*u+a*o+s*h-r*l,this._y=s*u+a*l+r*o-i*h,this._z=r*u+a*h+i*l-s*o,this._w=a*u-i*o-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const h=Math.sqrt(l),u=Math.atan2(h,o),f=Math.sin((1-e)*u)/h,c=Math.sin(e*u)/h;return this._w=a*f+this._w*c,this._x=i*f+this._x*c,this._y=s*f+this._y*c,this._z=r*f+this._z*c,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,i=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qd.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,h=2*(a*s-o*i),u=2*(o*e-r*s),f=2*(r*i-a*e);return this.x=e+l*h+a*f-o*u,this.y=i+l*u+o*h-r*f,this.z=s+l*f+r*u-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Eh.copy(this).projectOnVector(t),this.sub(Eh)}reflect(t){return this.sub(Eh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(sn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Eh=new C,qd=new Gs;class Be{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(qn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(qn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=qn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,qn):qn.fromBufferAttribute(r,a),qn.applyMatrix4(t.matrixWorld),this.expandByPoint(qn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fo.copy(i.boundingBox)),fo.applyMatrix4(t.matrixWorld),this.union(fo)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,qn),qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Kr),po.subVectors(this.max,Kr),Zs.subVectors(t.a,Kr),$s.subVectors(t.b,Kr),Ks.subVectors(t.c,Kr),Gi.subVectors($s,Zs),Bi.subVectors(Ks,$s),ds.subVectors(Zs,Ks);let e=[0,-Gi.z,Gi.y,0,-Bi.z,Bi.y,0,-ds.z,ds.y,Gi.z,0,-Gi.x,Bi.z,0,-Bi.x,ds.z,0,-ds.x,-Gi.y,Gi.x,0,-Bi.y,Bi.x,0,-ds.y,ds.x,0];return!Sh(e,Zs,$s,Ks,po)||(e=[1,0,0,0,1,0,0,0,1],!Sh(e,Zs,$s,Ks,po))?!1:(mo.crossVectors(Gi,Bi),e=[mo.x,mo.y,mo.z],Sh(e,Zs,$s,Ks,po))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const _i=[new C,new C,new C,new C,new C,new C,new C,new C],qn=new C,fo=new Be,Zs=new C,$s=new C,Ks=new C,Gi=new C,Bi=new C,ds=new C,Kr=new C,po=new C,mo=new C,ps=new C;function Sh(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ps.fromArray(n,r);const o=s.x*Math.abs(ps.x)+s.y*Math.abs(ps.y)+s.z*Math.abs(ps.z),l=t.dot(ps),h=e.dot(ps),u=i.dot(ps);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>o)return!1}return!0}const _S=new Be,Jr=new C,wh=new C;class Oi{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):_S.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Jr.subVectors(t,this.center);const e=Jr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Jr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Jr.copy(t.center).add(wh)),this.expandByPoint(Jr.copy(t.center).sub(wh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vi=new C,Th=new C,go=new C,zi=new C,bh=new C,_o=new C,Ah=new C;class Hs{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=vi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vi.copy(this.origin).addScaledVector(this.direction,e),vi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Th.copy(t).add(e).multiplyScalar(.5),go.copy(e).sub(t).normalize(),zi.copy(this.origin).sub(Th);const r=t.distanceTo(e)*.5,a=-this.direction.dot(go),o=zi.dot(this.direction),l=-zi.dot(go),h=zi.lengthSq(),u=Math.abs(1-a*a);let f,c,d,m;if(u>0)if(f=a*l-o,c=a*o-l,m=r*u,f>=0)if(c>=-m)if(c<=m){const _=1/u;f*=_,c*=_,d=f*(f+a*c+2*o)+c*(a*f+c+2*l)+h}else c=r,f=Math.max(0,-(a*c+o)),d=-f*f+c*(c+2*l)+h;else c=-r,f=Math.max(0,-(a*c+o)),d=-f*f+c*(c+2*l)+h;else c<=-m?(f=Math.max(0,-(-a*r+o)),c=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+c*(c+2*l)+h):c<=m?(f=0,c=Math.min(Math.max(-r,-l),r),d=c*(c+2*l)+h):(f=Math.max(0,-(a*r+o)),c=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+c*(c+2*l)+h);else c=a>0?-r:r,f=Math.max(0,-(a*c+o)),d=-f*f+c*(c+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Th).addScaledVector(go,c),d}intersectSphere(t,e){vi.subVectors(t.center,this.origin);const i=vi.dot(this.direction),s=vi.dot(vi)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l;const h=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,c=this.origin;return h>=0?(i=(t.min.x-c.x)*h,s=(t.max.x-c.x)*h):(i=(t.max.x-c.x)*h,s=(t.min.x-c.x)*h),u>=0?(r=(t.min.y-c.y)*u,a=(t.max.y-c.y)*u):(r=(t.max.y-c.y)*u,a=(t.min.y-c.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-c.z)*f,l=(t.max.z-c.z)*f):(o=(t.max.z-c.z)*f,l=(t.min.z-c.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,vi)!==null}intersectTriangle(t,e,i,s,r){bh.subVectors(e,t),_o.subVectors(i,t),Ah.crossVectors(bh,_o);let a=this.direction.dot(Ah),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;zi.subVectors(this.origin,t);const l=o*this.direction.dot(_o.crossVectors(zi,_o));if(l<0)return null;const h=o*this.direction.dot(bh.cross(zi));if(h<0||l+h>a)return null;const u=-o*zi.dot(Ah);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xt{constructor(t,e,i,s,r,a,o,l,h,u,f,c,d,m,_,g){Xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,h,u,f,c,d,m,_,g)}set(t,e,i,s,r,a,o,l,h,u,f,c,d,m,_,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=h,p[6]=u,p[10]=f,p[14]=c,p[3]=d,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Js.setFromMatrixColumn(t,0).length(),r=1/Js.setFromMatrixColumn(t,1).length(),a=1/Js.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),h=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const c=a*u,d=a*f,m=o*u,_=o*f;e[0]=l*u,e[4]=-l*f,e[8]=h,e[1]=d+m*h,e[5]=c-_*h,e[9]=-o*l,e[2]=_-c*h,e[6]=m+d*h,e[10]=a*l}else if(t.order==="YXZ"){const c=l*u,d=l*f,m=h*u,_=h*f;e[0]=c+_*o,e[4]=m*o-d,e[8]=a*h,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=d*o-m,e[6]=_+c*o,e[10]=a*l}else if(t.order==="ZXY"){const c=l*u,d=l*f,m=h*u,_=h*f;e[0]=c-_*o,e[4]=-a*f,e[8]=m+d*o,e[1]=d+m*o,e[5]=a*u,e[9]=_-c*o,e[2]=-a*h,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const c=a*u,d=a*f,m=o*u,_=o*f;e[0]=l*u,e[4]=m*h-d,e[8]=c*h+_,e[1]=l*f,e[5]=_*h+c,e[9]=d*h-m,e[2]=-h,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const c=a*l,d=a*h,m=o*l,_=o*h;e[0]=l*u,e[4]=_-c*f,e[8]=m*f+d,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-h*u,e[6]=d*f+m,e[10]=c-_*f}else if(t.order==="XZY"){const c=a*l,d=a*h,m=o*l,_=o*h;e[0]=l*u,e[4]=-f,e[8]=h*u,e[1]=c*f+_,e[5]=a*u,e[9]=d*f-m,e[2]=m*f-d,e[6]=o*u,e[10]=_*f+c}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vS,t,xS)}lookAt(t,e,i){const s=this.elements;return Pn.subVectors(t,e),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),ki.crossVectors(i,Pn),ki.lengthSq()===0&&(Math.abs(i.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),ki.crossVectors(i,Pn)),ki.normalize(),vo.crossVectors(Pn,ki),s[0]=ki.x,s[4]=vo.x,s[8]=Pn.x,s[1]=ki.y,s[5]=vo.y,s[9]=Pn.y,s[2]=ki.z,s[6]=vo.z,s[10]=Pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],h=i[12],u=i[1],f=i[5],c=i[9],d=i[13],m=i[2],_=i[6],g=i[10],p=i[14],y=i[3],x=i[7],v=i[11],T=i[15],b=s[0],R=s[4],L=s[8],S=s[12],E=s[1],P=s[5],F=s[9],I=s[13],z=s[2],X=s[6],H=s[10],Y=s[14],k=s[3],et=s[7],ht=s[11],vt=s[15];return r[0]=a*b+o*E+l*z+h*k,r[4]=a*R+o*P+l*X+h*et,r[8]=a*L+o*F+l*H+h*ht,r[12]=a*S+o*I+l*Y+h*vt,r[1]=u*b+f*E+c*z+d*k,r[5]=u*R+f*P+c*X+d*et,r[9]=u*L+f*F+c*H+d*ht,r[13]=u*S+f*I+c*Y+d*vt,r[2]=m*b+_*E+g*z+p*k,r[6]=m*R+_*P+g*X+p*et,r[10]=m*L+_*F+g*H+p*ht,r[14]=m*S+_*I+g*Y+p*vt,r[3]=y*b+x*E+v*z+T*k,r[7]=y*R+x*P+v*X+T*et,r[11]=y*L+x*F+v*H+T*ht,r[15]=y*S+x*I+v*Y+T*vt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],h=t[13],u=t[2],f=t[6],c=t[10],d=t[14],m=t[3],_=t[7],g=t[11],p=t[15];return m*(+r*l*f-s*h*f-r*o*c+i*h*c+s*o*d-i*l*d)+_*(+e*l*d-e*h*c+r*a*c-s*a*d+s*h*u-r*l*u)+g*(+e*h*f-e*o*d-r*a*f+i*a*d+r*o*u-i*h*u)+p*(-s*o*u-e*l*f+e*o*c+s*a*f-i*a*c+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],u=t[8],f=t[9],c=t[10],d=t[11],m=t[12],_=t[13],g=t[14],p=t[15],y=f*g*h-_*c*h+_*l*d-o*g*d-f*l*p+o*c*p,x=m*c*h-u*g*h-m*l*d+a*g*d+u*l*p-a*c*p,v=u*_*h-m*f*h+m*o*d-a*_*d-u*o*p+a*f*p,T=m*f*l-u*_*l-m*o*c+a*_*c+u*o*g-a*f*g,b=e*y+i*x+s*v+r*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/b;return t[0]=y*R,t[1]=(_*c*r-f*g*r-_*s*d+i*g*d+f*s*p-i*c*p)*R,t[2]=(o*g*r-_*l*r+_*s*h-i*g*h-o*s*p+i*l*p)*R,t[3]=(f*l*r-o*c*r-f*s*h+i*c*h+o*s*d-i*l*d)*R,t[4]=x*R,t[5]=(u*g*r-m*c*r+m*s*d-e*g*d-u*s*p+e*c*p)*R,t[6]=(m*l*r-a*g*r-m*s*h+e*g*h+a*s*p-e*l*p)*R,t[7]=(a*c*r-u*l*r+u*s*h-e*c*h-a*s*d+e*l*d)*R,t[8]=v*R,t[9]=(m*f*r-u*_*r-m*i*d+e*_*d+u*i*p-e*f*p)*R,t[10]=(a*_*r-m*o*r+m*i*h-e*_*h-a*i*p+e*o*p)*R,t[11]=(u*o*r-a*f*r-u*i*h+e*f*h+a*i*d-e*o*d)*R,t[12]=T*R,t[13]=(u*_*s-m*f*s+m*i*c-e*_*c-u*i*g+e*f*g)*R,t[14]=(m*o*s-a*_*s-m*i*l+e*_*l+a*i*g-e*o*g)*R,t[15]=(a*f*s-u*o*s+u*i*l-e*f*l-a*i*c+e*o*c)*R,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,h=r*a,u=r*o;return this.set(h*a+i,h*o-s*l,h*l+s*o,0,h*o+s*l,u*o+i,u*l-s*a,0,h*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,h=r+r,u=a+a,f=o+o,c=r*h,d=r*u,m=r*f,_=a*u,g=a*f,p=o*f,y=l*h,x=l*u,v=l*f,T=i.x,b=i.y,R=i.z;return s[0]=(1-(_+p))*T,s[1]=(d+v)*T,s[2]=(m-x)*T,s[3]=0,s[4]=(d-v)*b,s[5]=(1-(c+p))*b,s[6]=(g+y)*b,s[7]=0,s[8]=(m+x)*R,s[9]=(g-y)*R,s[10]=(1-(c+_))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Js.set(s[0],s[1],s[2]).length();const a=Js.set(s[4],s[5],s[6]).length(),o=Js.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],jn.copy(this);const h=1/r,u=1/a,f=1/o;return jn.elements[0]*=h,jn.elements[1]*=h,jn.elements[2]*=h,jn.elements[4]*=u,jn.elements[5]*=u,jn.elements[6]*=u,jn.elements[8]*=f,jn.elements[9]*=f,jn.elements[10]*=f,e.setFromRotationMatrix(jn),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=Ai){const l=this.elements,h=2*r/(e-t),u=2*r/(i-s),f=(e+t)/(e-t),c=(i+s)/(i-s);let d,m;if(o===Ai)d=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Al)d=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=c,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Ai){const l=this.elements,h=1/(e-t),u=1/(i-s),f=1/(a-r),c=(e+t)*h,d=(i+s)*u;let m,_;if(o===Ai)m=(a+r)*f,_=-2*f;else if(o===Al)m=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-c,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Js=new C,jn=new Xt,vS=new C(0,0,0),xS=new C(1,1,1),ki=new C,vo=new C,Pn=new C,jd=new Xt,Zd=new Gs;class Ii{constructor(t=0,e=0,i=0,s=Ii.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],h=s[5],u=s[9],f=s[2],c=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(c,h),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(sn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-sn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(c,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(c,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return jd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(jd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Zd.setFromEuler(this),this.setFromQuaternion(Zd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ii.DEFAULT_ORDER="XYZ";class gf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let yS=0;const $d=new C,Qs=new Gs,xi=new Xt,xo=new C,Qr=new C,MS=new C,ES=new Gs,Kd=new C(1,0,0),Jd=new C(0,1,0),Qd=new C(0,0,1),tp={type:"added"},SS={type:"removed"},tr={type:"childadded",child:null},Rh={type:"childremoved",child:null};class an extends pn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yS++}),this.uuid=Xr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const t=new C,e=new Ii,i=new Gs,s=new C(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Xt},normalMatrix:{value:new Gt}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qs.setFromAxisAngle(t,e),this.quaternion.multiply(Qs),this}rotateOnWorldAxis(t,e){return Qs.setFromAxisAngle(t,e),this.quaternion.premultiply(Qs),this}rotateX(t){return this.rotateOnAxis(Kd,t)}rotateY(t){return this.rotateOnAxis(Jd,t)}rotateZ(t){return this.rotateOnAxis(Qd,t)}translateOnAxis(t,e){return $d.copy(t).applyQuaternion(this.quaternion),this.position.add($d.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Kd,t)}translateY(t){return this.translateOnAxis(Jd,t)}translateZ(t){return this.translateOnAxis(Qd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?xo.copy(t):xo.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(Qr,xo,this.up):xi.lookAt(xo,Qr,this.up),this.quaternion.setFromRotationMatrix(xi),s&&(xi.extractRotation(s.matrixWorld),Qs.setFromRotationMatrix(xi),this.quaternion.premultiply(Qs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(tp),tr.child=t,this.dispatchEvent(tr),tr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(SS),Rh.child=t,this.dispatchEvent(Rh),Rh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xi.multiply(t.parent.matrixWorld)),t.applyMatrix4(xi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(tp),tr.child=t,this.dispatchEvent(tr),tr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,t,MS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,ES,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){const f=l[h];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),h=a(t.textures),u=a(t.images),f=a(t.shapes),c=a(t.skeletons),d=a(t.animations),m=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),c.length>0&&(i.skeletons=c),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=s,i;function a(o){const l=[];for(const h in o){const u=o[h];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}an.DEFAULT_UP=new C(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zn=new C,yi=new C,Ch=new C,Mi=new C,er=new C,nr=new C,ep=new C,Ph=new C,Lh=new C,Ih=new C,Dh=new te,Nh=new te,Oh=new te;class ni{constructor(t=new C,e=new C,i=new C){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Zn.subVectors(t,e),s.cross(Zn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Zn.subVectors(s,e),yi.subVectors(i,e),Ch.subVectors(t,e);const a=Zn.dot(Zn),o=Zn.dot(yi),l=Zn.dot(Ch),h=yi.dot(yi),u=yi.dot(Ch),f=a*h-o*o;if(f===0)return r.set(0,0,0),null;const c=1/f,d=(h*l-o*u)*c,m=(a*u-o*l)*c;return r.set(1-d-m,m,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Mi.x),l.addScaledVector(a,Mi.y),l.addScaledVector(o,Mi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return Dh.setScalar(0),Nh.setScalar(0),Oh.setScalar(0),Dh.fromBufferAttribute(t,e),Nh.fromBufferAttribute(t,i),Oh.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Dh,r.x),a.addScaledVector(Nh,r.y),a.addScaledVector(Oh,r.z),a}static isFrontFacing(t,e,i,s){return Zn.subVectors(i,e),yi.subVectors(t,e),Zn.cross(yi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Zn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),Zn.cross(yi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ni.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ni.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return ni.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return ni.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ni.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;er.subVectors(s,i),nr.subVectors(r,i),Ph.subVectors(t,i);const l=er.dot(Ph),h=nr.dot(Ph);if(l<=0&&h<=0)return e.copy(i);Lh.subVectors(t,s);const u=er.dot(Lh),f=nr.dot(Lh);if(u>=0&&f<=u)return e.copy(s);const c=l*f-u*h;if(c<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(i).addScaledVector(er,a);Ih.subVectors(t,r);const d=er.dot(Ih),m=nr.dot(Ih);if(m>=0&&d<=m)return e.copy(r);const _=d*h-l*m;if(_<=0&&h>=0&&m<=0)return o=h/(h-m),e.copy(i).addScaledVector(nr,o);const g=u*m-d*f;if(g<=0&&f-u>=0&&d-m>=0)return ep.subVectors(r,s),o=(f-u)/(f-u+(d-m)),e.copy(s).addScaledVector(ep,o);const p=1/(g+_+c);return a=_*p,o=c*p,e.copy(i).addScaledVector(er,a).addScaledVector(nr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Zg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},yo={h:0,s:0,l:0};function Uh(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class bt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Dn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Qt.workingColorSpace){if(t=mf(t,1),e=sn(e,0,1),i=sn(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Uh(a,r,t+1/3),this.g=Uh(a,r,t),this.b=Uh(a,r,t-1/3)}return Qt.toWorkingColorSpace(this,s),this}setStyle(t,e=Dn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Dn){const i=Zg[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ci(t.r),this.g=Ci(t.g),this.b=Ci(t.b),this}copyLinearToSRGB(t){return this.r=Lr(t.r),this.g=Lr(t.g),this.b=Lr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Dn){return Qt.fromWorkingColorSpace(hn.copy(this),t),Math.round(sn(hn.r*255,0,255))*65536+Math.round(sn(hn.g*255,0,255))*256+Math.round(sn(hn.b*255,0,255))}getHexString(t=Dn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(hn.copy(this),e);const i=hn.r,s=hn.g,r=hn.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,h;const u=(o+a)/2;if(o===a)l=0,h=0;else{const f=a-o;switch(h=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return t.h=l,t.s=h,t.l=u,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(hn.copy(this),e),t.r=hn.r,t.g=hn.g,t.b=hn.b,t}getStyle(t=Dn){Qt.fromWorkingColorSpace(hn.copy(this),t);const e=hn.r,i=hn.g,s=hn.b;return t!==Dn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Vi),this.setHSL(Vi.h+t,Vi.s+e,Vi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Vi),t.getHSL(yo);const i=Ma(Vi.h,yo.h,e),s=Ma(Vi.s,yo.s,e),r=Ma(Vi.l,yo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new bt;bt.NAMES=Zg;let wS=0;class Ka extends pn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wS++}),this.uuid=Xr(),this.name="",this.blending=kn,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uc,this.blendDst=Fc,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=Or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==kn&&(i.blending=this.blending),this.side!==Pi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Uc&&(i.blendSrc=this.blendSrc),this.blendDst!==Fc&&(i.blendDst=this.blendDst),this.blendEquation!==bs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Or&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class eh extends Ka{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=Ng,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ti=TS();function TS(){const n=new ArrayBuffer(4),t=new Float32Array(n),e=new Uint32Array(n),i=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const h=l-127;h<-27?(i[l]=0,i[l|256]=32768,s[l]=24,s[l|256]=24):h<-14?(i[l]=1024>>-h-14,i[l|256]=1024>>-h-14|32768,s[l]=-h-1,s[l|256]=-h-1):h<=15?(i[l]=h+15<<10,i[l|256]=h+15<<10|32768,s[l]=13,s[l|256]=13):h<128?(i[l]=31744,i[l|256]=64512,s[l]=24,s[l|256]=24):(i[l]=31744,i[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let h=l<<13,u=0;for(;(h&8388608)===0;)h<<=1,u-=8388608;h&=-8388609,u+=947912704,r[l]=h|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:e,baseTable:i,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function Ln(n){Math.abs(n)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),n=sn(n,-65504,65504),Ti.floatView[0]=n;const t=Ti.uint32View[0],e=t>>23&511;return Ti.baseTable[e]+((t&8388607)>>Ti.shiftTable[e])}function Mo(n){const t=n>>10;return Ti.uint32View[0]=Ti.mantissaTable[Ti.offsetTable[t]+(n&1023)]+Ti.exponentTable[t],Ti.floatView[0]}const ke=new C,Eo=new Z;class De{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Bd,this.updateRanges=[],this.gpuType=Ie,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Eo.fromBufferAttribute(this,e),Eo.applyMatrix3(t),this.setXY(e,Eo.x,Eo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix3(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ci(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ge(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ci(e,this.array)),e}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ci(e,this.array)),e}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ci(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ci(e,this.array)),e}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),i=ge(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),i=ge(i,this.array),s=ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),i=ge(i,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Bd&&(t.usage=this.usage),t}}class bS extends De{constructor(t,e,i){super(new Int8Array(t),e,i)}}class AS extends De{constructor(t,e,i){super(new Uint8Array(t),e,i)}}class RS extends De{constructor(t,e,i){super(new Uint8ClampedArray(t),e,i)}}class CS extends De{constructor(t,e,i){super(new Int16Array(t),e,i)}}class _f extends De{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class PS extends De{constructor(t,e,i){super(new Int32Array(t),e,i)}}class vf extends De{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class LS extends De{constructor(t,e,i){super(new Uint16Array(t),e,i),this.isFloat16BufferAttribute=!0}getX(t){let e=Mo(this.array[t*this.itemSize]);return this.normalized&&(e=ci(e,this.array)),e}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize]=Ln(e),this}getY(t){let e=Mo(this.array[t*this.itemSize+1]);return this.normalized&&(e=ci(e,this.array)),e}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+1]=Ln(e),this}getZ(t){let e=Mo(this.array[t*this.itemSize+2]);return this.normalized&&(e=ci(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+2]=Ln(e),this}getW(t){let e=Mo(this.array[t*this.itemSize+3]);return this.normalized&&(e=ci(e,this.array)),e}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+3]=Ln(e),this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),i=ge(i,this.array)),this.array[t+0]=Ln(e),this.array[t+1]=Ln(i),this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),i=ge(i,this.array),s=ge(s,this.array)),this.array[t+0]=Ln(e),this.array[t+1]=Ln(i),this.array[t+2]=Ln(s),this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),i=ge(i,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.array[t+0]=Ln(e),this.array[t+1]=Ln(i),this.array[t+2]=Ln(s),this.array[t+3]=Ln(r),this}}class ze extends De{constructor(t,e,i){super(new Float32Array(t),e,i)}}let IS=0;const Gn=new Xt,Fh=new an,ir=new C,In=new Be,ta=new Be,Je=new C;class _n extends pn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:IS++}),this.uuid=Xr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yg(t)?vf:_f)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Gt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Gn.makeRotationFromQuaternion(t),this.applyMatrix4(Gn),this}rotateX(t){return Gn.makeRotationX(t),this.applyMatrix4(Gn),this}rotateY(t){return Gn.makeRotationY(t),this.applyMatrix4(Gn),this}rotateZ(t){return Gn.makeRotationZ(t),this.applyMatrix4(Gn),this}translate(t,e,i){return Gn.makeTranslation(t,e,i),this.applyMatrix4(Gn),this}scale(t,e,i){return Gn.makeScale(t,e,i),this.applyMatrix4(Gn),this}lookAt(t){return Fh.lookAt(t),Fh.updateMatrix(),this.applyMatrix4(Fh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ze(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Be);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];In.setFromBufferAttribute(r),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const i=this.boundingSphere.center;if(In.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];ta.setFromBufferAttribute(o),this.morphTargetsRelative?(Je.addVectors(In.min,ta.min),In.expandByPoint(Je),Je.addVectors(In.max,ta.max),In.expandByPoint(Je)):(In.expandByPoint(ta.min),In.expandByPoint(ta.max))}In.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Je.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Je));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)Je.fromBufferAttribute(o,h),l&&(ir.fromBufferAttribute(t,h),Je.add(ir)),s=Math.max(s,i.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new De(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<i.count;L++)o[L]=new C,l[L]=new C;const h=new C,u=new C,f=new C,c=new Z,d=new Z,m=new Z,_=new C,g=new C;function p(L,S,E){h.fromBufferAttribute(i,L),u.fromBufferAttribute(i,S),f.fromBufferAttribute(i,E),c.fromBufferAttribute(r,L),d.fromBufferAttribute(r,S),m.fromBufferAttribute(r,E),u.sub(h),f.sub(h),d.sub(c),m.sub(c);const P=1/(d.x*m.y-m.x*d.y);isFinite(P)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(P),g.copy(f).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(P),o[L].add(_),o[S].add(_),o[E].add(_),l[L].add(g),l[S].add(g),l[E].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let L=0,S=y.length;L<S;++L){const E=y[L],P=E.start,F=E.count;for(let I=P,z=P+F;I<z;I+=3)p(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const x=new C,v=new C,T=new C,b=new C;function R(L){T.fromBufferAttribute(s,L),b.copy(T);const S=o[L];x.copy(S),x.sub(T.multiplyScalar(T.dot(S))).normalize(),v.crossVectors(b,S);const P=v.dot(l[L])<0?-1:1;a.setXYZW(L,x.x,x.y,x.z,P)}for(let L=0,S=y.length;L<S;++L){const E=y[L],P=E.start,F=E.count;for(let I=P,z=P+F;I<z;I+=3)R(t.getX(I+0)),R(t.getX(I+1)),R(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new De(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let c=0,d=i.count;c<d;c++)i.setXYZ(c,0,0,0);const s=new C,r=new C,a=new C,o=new C,l=new C,h=new C,u=new C,f=new C;if(t)for(let c=0,d=t.count;c<d;c+=3){const m=t.getX(c+0),_=t.getX(c+1),g=t.getX(c+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,g),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,_),h.fromBufferAttribute(i,g),o.add(u),l.add(u),h.add(u),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,h.x,h.y,h.z)}else for(let c=0,d=e.count;c<d;c+=3)s.fromBufferAttribute(e,c+0),r.fromBufferAttribute(e,c+1),a.fromBufferAttribute(e,c+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),i.setXYZ(c+0,u.x,u.y,u.z),i.setXYZ(c+1,u.x,u.y,u.z),i.setXYZ(c+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Je.fromBufferAttribute(t,e),Je.normalize(),t.setXYZ(e,Je.x,Je.y,Je.z)}toNonIndexed(){function t(o,l){const h=o.array,u=o.itemSize,f=o.normalized,c=new h.constructor(l.length*u);let d=0,m=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let p=0;p<u;p++)c[m++]=h[d++]}return new De(c,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new _n,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],h=t(l,i);e.setAttribute(o,h)}const r=this.morphAttributes;for(const o in r){const l=[],h=r[o];for(let u=0,f=h.length;u<f;u++){const c=h[u],d=t(c,i);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const h=i[l];t.data.attributes[l]=h.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],u=[];for(let f=0,c=h.length;f<c;f++){const d=h[f];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const h in s){const u=s[h];this.setAttribute(h,u.clone(e))}const r=t.morphAttributes;for(const h in r){const u=[],f=r[h];for(let c=0,d=f.length;c<d;c++)u.push(f[c].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let h=0,u=a.length;h<u;h++){const f=a[h];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const np=new Xt,ms=new Hs,So=new Oi,ip=new C,wo=new C,To=new C,bo=new C,Gh=new C,Ao=new C,sp=new C,Ro=new C;class dn extends an{constructor(t=new _n,e=new eh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Ao.set(0,0,0);for(let l=0,h=r.length;l<h;l++){const u=o[l],f=r[l];u!==0&&(Gh.fromBufferAttribute(f,t),a?Ao.addScaledVector(Gh,u):Ao.addScaledVector(Gh.sub(e),u))}e.add(Ao)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),So.copy(i.boundingSphere),So.applyMatrix4(r),ms.copy(t.ray).recast(t.near),!(So.containsPoint(ms.origin)===!1&&(ms.intersectSphere(So,ip)===null||ms.origin.distanceToSquared(ip)>(t.far-t.near)**2))&&(np.copy(r).invert(),ms.copy(t.ray).applyMatrix4(np),!(i.boundingBox!==null&&ms.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ms)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,c=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=c.length;m<_;m++){const g=c[m],p=a[g.materialIndex],y=Math.max(g.start,d.start),x=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let v=y,T=x;v<T;v+=3){const b=o.getX(v),R=o.getX(v+1),L=o.getX(v+2);s=Co(this,p,t,i,h,u,f,b,R,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const y=o.getX(g),x=o.getX(g+1),v=o.getX(g+2);s=Co(this,a,t,i,h,u,f,y,x,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,_=c.length;m<_;m++){const g=c[m],p=a[g.materialIndex],y=Math.max(g.start,d.start),x=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=y,T=x;v<T;v+=3){const b=v,R=v+1,L=v+2;s=Co(this,p,t,i,h,u,f,b,R,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const y=g,x=g+1,v=g+2;s=Co(this,a,t,i,h,u,f,y,x,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function DS(n,t,e,i,s,r,a,o){let l;if(t.side===Tn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Pi,o),l===null)return null;Ro.copy(o),Ro.applyMatrix4(n.matrixWorld);const h=e.ray.origin.distanceTo(Ro);return h<e.near||h>e.far?null:{distance:h,point:Ro.clone(),object:n}}function Co(n,t,e,i,s,r,a,o,l,h){n.getVertexPosition(o,wo),n.getVertexPosition(l,To),n.getVertexPosition(h,bo);const u=DS(n,t,e,i,wo,To,bo,sp);if(u){const f=new C;ni.getBarycoord(sp,wo,To,bo,f),s&&(u.uv=ni.getInterpolatedAttribute(s,o,l,h,f,new Z)),r&&(u.uv1=ni.getInterpolatedAttribute(r,o,l,h,f,new Z)),a&&(u.normal=ni.getInterpolatedAttribute(a,o,l,h,f,new C),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const c={a:o,b:l,c:h,normal:new C,materialIndex:0};ni.getNormal(wo,To,bo,c.normal),u.face=c,u.barycoord=f}return u}class Ja extends _n{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],h=[],u=[],f=[];let c=0,d=0;m("z","y","x",-1,-1,i,e,t,a,r,0),m("z","y","x",1,-1,i,e,-t,a,r,1),m("x","z","y",1,1,t,i,e,s,a,2),m("x","z","y",1,-1,t,i,-e,s,a,3),m("x","y","z",1,-1,t,e,i,s,r,4),m("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ze(h,3)),this.setAttribute("normal",new ze(u,3)),this.setAttribute("uv",new ze(f,2));function m(_,g,p,y,x,v,T,b,R,L,S){const E=v/R,P=T/L,F=v/2,I=T/2,z=b/2,X=R+1,H=L+1;let Y=0,k=0;const et=new C;for(let ht=0;ht<H;ht++){const vt=ht*P-I;for(let zt=0;zt<X;zt++){const re=zt*E-F;et[_]=re*y,et[g]=vt*x,et[p]=z,h.push(et.x,et.y,et.z),et[_]=0,et[g]=0,et[p]=b>0?1:-1,u.push(et.x,et.y,et.z),f.push(zt/R),f.push(1-ht/L),Y+=1}}for(let ht=0;ht<L;ht++)for(let vt=0;vt<R;vt++){const zt=c+vt+X*ht,re=c+vt+X*(ht+1),q=c+(vt+1)+X*(ht+1),tt=c+(vt+1)+X*ht;l.push(zt,re,tt),l.push(re,q,tt),k+=6}o.addGroup(d,k,S),d+=k,c+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ja(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Gr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function mn(n){const t={};for(let e=0;e<n.length;e++){const i=Gr(n[e]);for(const s in i)t[s]=i[s]}return t}function NS(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function $g(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const nh={clone:Gr,merge:mn};var OS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,US=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class je extends Ka{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=OS,this.fragmentShader=US,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gr(t.uniforms),this.uniformsGroups=NS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Kg extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=Ai}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hi=new C,rp=new Z,ap=new Z;class zn extends Kg{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ia*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ya*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ia*2*Math.atan(Math.tan(ya*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Hi.x,Hi.y).multiplyScalar(-t/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hi.x,Hi.y).multiplyScalar(-t/Hi.z)}getViewSize(t,e){return this.getViewBounds(t,rp,ap),e.subVectors(ap,rp)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ya*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/h,s*=a.width/l,i*=a.height/h}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const sr=-90,rr=1;class FS extends an{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new zn(sr,rr,t,e);s.layers=this.layers,this.add(s);const r=new zn(sr,rr,t,e);r.layers=this.layers,this.add(r);const a=new zn(sr,rr,t,e);a.layers=this.layers,this.add(a);const o=new zn(sr,rr,t,e);o.layers=this.layers,this.add(o);const l=new zn(sr,rr,t,e);l.layers=this.layers,this.add(l);const h=new zn(sr,rr,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(const h of e)this.remove(h);if(t===Ai)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Al)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,h,u]=this.children,f=t.getRenderTarget(),c=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,h),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(f,c,d),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Jg extends Ze{constructor(t,e,i,s,r,a,o,l,h,u){t=t!==void 0?t:[],e=e!==void 0?e:Ur,super(t,e,i,s,r,a,o,l,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class GS extends bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Jg(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Fe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ja(5,5,5),r=new je({name:"CubemapFromEquirect",uniforms:Gr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tn,blending:ui});r.uniforms.tEquirect.value=e;const a=new dn(s,r),o=e.minFilter;return e.minFilter===Cs&&(e.minFilter=Fe),new FS(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}const Bh=new C,BS=new C,zS=new Gt;class Si{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Bh.subVectors(i,e).cross(BS.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Bh),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||zS.getNormalMatrix(t),s=this.coplanarPoint(Bh).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gs=new Oi,Po=new C;class ih{constructor(t=new Si,e=new Si,i=new Si,s=new Si,r=new Si,a=new Si){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ai){const i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],h=s[4],u=s[5],f=s[6],c=s[7],d=s[8],m=s[9],_=s[10],g=s[11],p=s[12],y=s[13],x=s[14],v=s[15];if(i[0].setComponents(l-r,c-h,g-d,v-p).normalize(),i[1].setComponents(l+r,c+h,g+d,v+p).normalize(),i[2].setComponents(l+a,c+u,g+m,v+y).normalize(),i[3].setComponents(l-a,c-u,g-m,v-y).normalize(),i[4].setComponents(l-o,c-f,g-_,v-x).normalize(),e===Ai)i[5].setComponents(l+o,c+f,g+_,v+x).normalize();else if(e===Al)i[5].setComponents(o,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(t){return gs.center.set(0,0,0),gs.radius=.7071067811865476,gs.applyMatrix4(t.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Po.x=s.normal.x>0?t.max.x:t.min.x,Po.y=s.normal.y>0?t.max.y:t.min.y,Po.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Po)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Qg(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function kS(n){const t=new WeakMap;function e(o,l){const h=o.array,u=o.usage,f=h.byteLength,c=n.createBuffer();n.bindBuffer(l,c),n.bufferData(l,h,u),o.onUploadCallback();let d;if(h instanceof Float32Array)d=n.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)d=n.SHORT;else if(h instanceof Uint32Array)d=n.UNSIGNED_INT;else if(h instanceof Int32Array)d=n.INT;else if(h instanceof Int8Array)d=n.BYTE;else if(h instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:c,type:d,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,h){const u=l.array,f=l.updateRanges;if(n.bindBuffer(h,o),f.length===0)n.bufferSubData(h,0,u);else{f.sort((d,m)=>d.start-m.start);let c=0;for(let d=1;d<f.length;d++){const m=f[c],_=f[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++c,f[c]=_)}f.length=c+1;for(let d=0,m=f.length;d<m;d++){const _=f[d];n.bufferSubData(h,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const h=t.get(o);if(h===void 0)t.set(o,e(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,o,l),h.version=o.version}}return{get:s,remove:r,update:a}}class cs extends _n{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),h=o+1,u=l+1,f=t/o,c=e/l,d=[],m=[],_=[],g=[];for(let p=0;p<u;p++){const y=p*c-a;for(let x=0;x<h;x++){const v=x*f-r;m.push(v,-y,0),_.push(0,0,1),g.push(x/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const x=y+h*p,v=y+h*(p+1),T=y+1+h*(p+1),b=y+1+h*p;d.push(x,v,b),d.push(v,T,b)}this.setIndex(d),this.setAttribute("position",new ze(m,3)),this.setAttribute("normal",new ze(_,3)),this.setAttribute("uv",new ze(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cs(t.width,t.height,t.widthSegments,t.heightSegments)}}var VS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,HS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,WS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,XS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ZS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$S=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,KS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,JS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,QS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ew=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,iw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,sw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ow=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,uw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,pw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_w=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vw="gl_FragColor = linearToOutputTexel( gl_FragColor );",xw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Mw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ew=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Sw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ww=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Tw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Aw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Pw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Iw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Nw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ow=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Uw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ww=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$w=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Kw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,aT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,oT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,uT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_T=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,MT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ET=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ST=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,wT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,TT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,AT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,RT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,CT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,LT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,IT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,DT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,OT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,UT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,FT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,BT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ZT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$T=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,KT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,JT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ib=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ab=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ob=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ub=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,db=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_b=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ht={alphahash_fragment:VS,alphahash_pars_fragment:HS,alphamap_fragment:WS,alphamap_pars_fragment:XS,alphatest_fragment:YS,alphatest_pars_fragment:qS,aomap_fragment:jS,aomap_pars_fragment:ZS,batching_pars_vertex:$S,batching_vertex:KS,begin_vertex:JS,beginnormal_vertex:QS,bsdfs:tw,iridescence_fragment:ew,bumpmap_pars_fragment:nw,clipping_planes_fragment:iw,clipping_planes_pars_fragment:sw,clipping_planes_pars_vertex:rw,clipping_planes_vertex:aw,color_fragment:ow,color_pars_fragment:lw,color_pars_vertex:hw,color_vertex:cw,common:uw,cube_uv_reflection_fragment:fw,defaultnormal_vertex:dw,displacementmap_pars_vertex:pw,displacementmap_vertex:mw,emissivemap_fragment:gw,emissivemap_pars_fragment:_w,colorspace_fragment:vw,colorspace_pars_fragment:xw,envmap_fragment:yw,envmap_common_pars_fragment:Mw,envmap_pars_fragment:Ew,envmap_pars_vertex:Sw,envmap_physical_pars_fragment:Nw,envmap_vertex:ww,fog_vertex:Tw,fog_pars_vertex:bw,fog_fragment:Aw,fog_pars_fragment:Rw,gradientmap_pars_fragment:Cw,lightmap_pars_fragment:Pw,lights_lambert_fragment:Lw,lights_lambert_pars_fragment:Iw,lights_pars_begin:Dw,lights_toon_fragment:Ow,lights_toon_pars_fragment:Uw,lights_phong_fragment:Fw,lights_phong_pars_fragment:Gw,lights_physical_fragment:Bw,lights_physical_pars_fragment:zw,lights_fragment_begin:kw,lights_fragment_maps:Vw,lights_fragment_end:Hw,logdepthbuf_fragment:Ww,logdepthbuf_pars_fragment:Xw,logdepthbuf_pars_vertex:Yw,logdepthbuf_vertex:qw,map_fragment:jw,map_pars_fragment:Zw,map_particle_fragment:$w,map_particle_pars_fragment:Kw,metalnessmap_fragment:Jw,metalnessmap_pars_fragment:Qw,morphinstance_vertex:tT,morphcolor_vertex:eT,morphnormal_vertex:nT,morphtarget_pars_vertex:iT,morphtarget_vertex:sT,normal_fragment_begin:rT,normal_fragment_maps:aT,normal_pars_fragment:oT,normal_pars_vertex:lT,normal_vertex:hT,normalmap_pars_fragment:cT,clearcoat_normal_fragment_begin:uT,clearcoat_normal_fragment_maps:fT,clearcoat_pars_fragment:dT,iridescence_pars_fragment:pT,opaque_fragment:mT,packing:gT,premultiplied_alpha_fragment:_T,project_vertex:vT,dithering_fragment:xT,dithering_pars_fragment:yT,roughnessmap_fragment:MT,roughnessmap_pars_fragment:ET,shadowmap_pars_fragment:ST,shadowmap_pars_vertex:wT,shadowmap_vertex:TT,shadowmask_pars_fragment:bT,skinbase_vertex:AT,skinning_pars_vertex:RT,skinning_vertex:CT,skinnormal_vertex:PT,specularmap_fragment:LT,specularmap_pars_fragment:IT,tonemapping_fragment:DT,tonemapping_pars_fragment:NT,transmission_fragment:OT,transmission_pars_fragment:UT,uv_pars_fragment:FT,uv_pars_vertex:GT,uv_vertex:BT,worldpos_vertex:zT,background_vert:kT,background_frag:VT,backgroundCube_vert:HT,backgroundCube_frag:WT,cube_vert:XT,cube_frag:YT,depth_vert:qT,depth_frag:jT,distanceRGBA_vert:ZT,distanceRGBA_frag:$T,equirect_vert:KT,equirect_frag:JT,linedashed_vert:QT,linedashed_frag:tb,meshbasic_vert:eb,meshbasic_frag:nb,meshlambert_vert:ib,meshlambert_frag:sb,meshmatcap_vert:rb,meshmatcap_frag:ab,meshnormal_vert:ob,meshnormal_frag:lb,meshphong_vert:hb,meshphong_frag:cb,meshphysical_vert:ub,meshphysical_frag:fb,meshtoon_vert:db,meshtoon_frag:pb,points_vert:mb,points_frag:gb,shadow_vert:_b,shadow_frag:vb,sprite_vert:xb,sprite_frag:yb},at={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Z(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new Z(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},li={basic:{uniforms:mn([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:mn([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new bt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:mn([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:mn([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:mn([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new bt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:mn([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:mn([at.points,at.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:mn([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:mn([at.common,at.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:mn([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:mn([at.sprite,at.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:mn([at.common,at.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:mn([at.lights,at.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};li.physical={uniforms:mn([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Z(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Z},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const Lo={r:0,b:0,g:0},_s=new Ii,Mb=new Xt;function Eb(n,t,e,i,s,r,a){const o=new bt(0);let l=r===!0?0:1,h,u,f=null,c=0,d=null;function m(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function _(y){let x=!1;const v=m(y);v===null?p(o,l):v&&v.isColor&&(p(v,1),x=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(y,x){const v=m(x);v&&(v.isCubeTexture||v.mapping===jl)?(u===void 0&&(u=new dn(new Ja(1,1,1),new je({name:"BackgroundCubeMaterial",uniforms:Gr(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),_s.copy(x.backgroundRotation),_s.x*=-1,_s.y*=-1,_s.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Mb.makeRotationFromEuler(_s)),u.material.toneMapped=Qt.getTransfer(v.colorSpace)!==me,(f!==v||c!==v.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=v,c=v.version,d=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(h===void 0&&(h=new dn(new cs(2,2),new je({name:"BackgroundMaterial",uniforms:Gr(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=v,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.toneMapped=Qt.getTransfer(v.colorSpace)!==me,v.matrixAutoUpdate===!0&&v.updateMatrix(),h.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||c!==v.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,f=v,c=v.version,d=n.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null))}function p(y,x){y.getRGB(Lo,$g(n)),i.buffers.color.setClear(Lo.r,Lo.g,Lo.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(y,x=1){o.set(y),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:_,addToRenderList:g}}function Sb(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=c(null);let r=s,a=!1;function o(E,P,F,I,z){let X=!1;const H=f(I,F,P);r!==H&&(r=H,h(r.object)),X=d(E,I,F,z),X&&m(E,I,F,z),z!==null&&t.update(z,n.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,v(E,P,F,I),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return n.createVertexArray()}function h(E){return n.bindVertexArray(E)}function u(E){return n.deleteVertexArray(E)}function f(E,P,F){const I=F.wireframe===!0;let z=i[E.id];z===void 0&&(z={},i[E.id]=z);let X=z[P.id];X===void 0&&(X={},z[P.id]=X);let H=X[I];return H===void 0&&(H=c(l()),X[I]=H),H}function c(E){const P=[],F=[],I=[];for(let z=0;z<e;z++)P[z]=0,F[z]=0,I[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:I,object:E,attributes:{},index:null}}function d(E,P,F,I){const z=r.attributes,X=P.attributes;let H=0;const Y=F.getAttributes();for(const k in Y)if(Y[k].location>=0){const ht=z[k];let vt=X[k];if(vt===void 0&&(k==="instanceMatrix"&&E.instanceMatrix&&(vt=E.instanceMatrix),k==="instanceColor"&&E.instanceColor&&(vt=E.instanceColor)),ht===void 0||ht.attribute!==vt||vt&&ht.data!==vt.data)return!0;H++}return r.attributesNum!==H||r.index!==I}function m(E,P,F,I){const z={},X=P.attributes;let H=0;const Y=F.getAttributes();for(const k in Y)if(Y[k].location>=0){let ht=X[k];ht===void 0&&(k==="instanceMatrix"&&E.instanceMatrix&&(ht=E.instanceMatrix),k==="instanceColor"&&E.instanceColor&&(ht=E.instanceColor));const vt={};vt.attribute=ht,ht&&ht.data&&(vt.data=ht.data),z[k]=vt,H++}r.attributes=z,r.attributesNum=H,r.index=I}function _(){const E=r.newAttributes;for(let P=0,F=E.length;P<F;P++)E[P]=0}function g(E){p(E,0)}function p(E,P){const F=r.newAttributes,I=r.enabledAttributes,z=r.attributeDivisors;F[E]=1,I[E]===0&&(n.enableVertexAttribArray(E),I[E]=1),z[E]!==P&&(n.vertexAttribDivisor(E,P),z[E]=P)}function y(){const E=r.newAttributes,P=r.enabledAttributes;for(let F=0,I=P.length;F<I;F++)P[F]!==E[F]&&(n.disableVertexAttribArray(F),P[F]=0)}function x(E,P,F,I,z,X,H){H===!0?n.vertexAttribIPointer(E,P,F,z,X):n.vertexAttribPointer(E,P,F,I,z,X)}function v(E,P,F,I){_();const z=I.attributes,X=F.getAttributes(),H=P.defaultAttributeValues;for(const Y in X){const k=X[Y];if(k.location>=0){let et=z[Y];if(et===void 0&&(Y==="instanceMatrix"&&E.instanceMatrix&&(et=E.instanceMatrix),Y==="instanceColor"&&E.instanceColor&&(et=E.instanceColor)),et!==void 0){const ht=et.normalized,vt=et.itemSize,zt=t.get(et);if(zt===void 0)continue;const re=zt.buffer,q=zt.type,tt=zt.bytesPerElement,mt=q===n.INT||q===n.UNSIGNED_INT||et.gpuType===ja;if(et.isInterleavedBufferAttribute){const rt=et.data,Tt=rt.stride,Lt=et.offset;if(rt.isInstancedInterleavedBuffer){for(let It=0;It<k.locationSize;It++)p(k.location+It,rt.meshPerAttribute);E.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let It=0;It<k.locationSize;It++)g(k.location+It);n.bindBuffer(n.ARRAY_BUFFER,re);for(let It=0;It<k.locationSize;It++)x(k.location+It,vt/k.locationSize,q,ht,Tt*tt,(Lt+vt/k.locationSize*It)*tt,mt)}else{if(et.isInstancedBufferAttribute){for(let rt=0;rt<k.locationSize;rt++)p(k.location+rt,et.meshPerAttribute);E.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let rt=0;rt<k.locationSize;rt++)g(k.location+rt);n.bindBuffer(n.ARRAY_BUFFER,re);for(let rt=0;rt<k.locationSize;rt++)x(k.location+rt,vt/k.locationSize,q,ht,vt*tt,vt/k.locationSize*rt*tt,mt)}}else if(H!==void 0){const ht=H[Y];if(ht!==void 0)switch(ht.length){case 2:n.vertexAttrib2fv(k.location,ht);break;case 3:n.vertexAttrib3fv(k.location,ht);break;case 4:n.vertexAttrib4fv(k.location,ht);break;default:n.vertexAttrib1fv(k.location,ht)}}}}y()}function T(){L();for(const E in i){const P=i[E];for(const F in P){const I=P[F];for(const z in I)u(I[z].object),delete I[z];delete P[F]}delete i[E]}}function b(E){if(i[E.id]===void 0)return;const P=i[E.id];for(const F in P){const I=P[F];for(const z in I)u(I[z].object),delete I[z];delete P[F]}delete i[E.id]}function R(E){for(const P in i){const F=i[P];if(F[E.id]===void 0)continue;const I=F[E.id];for(const z in I)u(I[z].object),delete I[z];delete F[E.id]}}function L(){S(),a=!0,r!==s&&(r=s,h(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:g,disableUnusedAttributes:y}}function wb(n,t,e){let i;function s(h){i=h}function r(h,u){n.drawArrays(i,h,u),e.update(u,i,1)}function a(h,u,f){f!==0&&(n.drawArraysInstanced(i,h,u,f),e.update(u,i,f))}function o(h,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,u,0,f);let d=0;for(let m=0;m<f;m++)d+=u[m];e.update(d,i,1)}function l(h,u,f,c){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<h.length;m++)a(h[m],u[m],c[m]);else{d.multiDrawArraysInstancedWEBGL(i,h,0,u,0,c,0,f);let m=0;for(let _=0;_<f;_++)m+=u[_]*c[_];e.update(m,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Tb(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Te&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const L=R===Ni&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==ue&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Ie&&!L)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const u=l(h);u!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);const f=e.logarithmicDepthBuffer===!0,c=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=m>0,b=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:f,reverseDepthBuffer:c,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:T,maxSamples:b}}function bb(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new Si,o=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,c){const d=f.length!==0||c||i!==0||s;return s=c,i=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,c){e=u(f,c,0)},this.setState=function(f,c,d){const m=f.clippingPlanes,_=f.clipIntersection,g=f.clipShadows,p=n.get(f);if(!s||m===null||m.length===0||r&&!g)r?u(null):h();else{const y=r?0:i,x=y*4;let v=p.clippingState||null;l.value=v,v=u(m,c,x,d);for(let T=0;T!==x;++T)v[T]=e[T];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,c,d,m){const _=f!==null?f.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=d+_*4,y=c.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let x=0,v=d;x!==_;++x,v+=4)a.copy(f[x]).applyMatrix4(y,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function Ab(n){let t=new WeakMap;function e(a,o){return o===Xc?a.mapping=Ur:o===Yc&&(a.mapping=Fr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Xc||o===Yc)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const h=new GS(l.height);return h.fromEquirectangularTexture(n,a),t.set(a,h),a.addEventListener("dispose",s),e(h.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class sh extends Kg{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Er=4,op=[.125,.215,.35,.446,.526,.582],As=20,zh=new sh,lp=new bt;let kh=null,Vh=0,Hh=0,Wh=!1;const Ts=(1+Math.sqrt(5))/2,ar=1/Ts,hp=[new C(-Ts,ar,0),new C(Ts,ar,0),new C(-ar,0,Ts),new C(ar,0,Ts),new C(0,Ts,-ar),new C(0,Ts,ar),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class cp{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){kh=this._renderer.getRenderTarget(),Vh=this._renderer.getActiveCubeFace(),Hh=this._renderer.getActiveMipmapLevel(),Wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(kh,Vh,Hh),this._renderer.xr.enabled=Wh,t.scissorTest=!1,Io(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ur||t.mapping===Fr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),kh=this._renderer.getRenderTarget(),Vh=this._renderer.getActiveCubeFace(),Hh=this._renderer.getActiveMipmapLevel(),Wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Fe,minFilter:Fe,generateMipmaps:!1,type:Ni,format:Te,colorSpace:Vs,depthBuffer:!1},s=up(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=up(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rb(r)),this._blurMaterial=Cb(r,t,e)}return s}_compileMaterial(t){const e=new dn(this._lodPlanes[0],t);this._renderer.compile(e,zh)}_sceneToCubeUV(t,e,i,s){const o=new zn(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,c=u.toneMapping;u.getClearColor(lp),u.toneMapping=ss,u.autoClear=!1;const d=new eh({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),m=new dn(new Ja,d);let _=!1;const g=t.background;g?g.isColor&&(d.color.copy(g),t.background=null,_=!0):(d.color.copy(lp),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(h[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,h[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,h[p]));const x=this._cubeSize;Io(s,y*x,p>2?x:0,x,x),u.setRenderTarget(s),_&&u.render(m,o),u.render(t,o)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=c,u.autoClear=f,t.background=g}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Ur||t.mapping===Fr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=dp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fp());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new dn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Io(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,zh)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=hp[(s-r-1)%hp.length];this._blur(t,r-1,r,a,o)}e.autoClear=i}_blur(t,e,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){const l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new dn(this._lodPlanes[s],h),c=h.uniforms,d=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*As-1),_=r/m,g=isFinite(r)?1+Math.floor(u*_):As;g>As&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${As}`);const p=[];let y=0;for(let R=0;R<As;++R){const L=R/_,S=Math.exp(-L*L/2);p.push(S),R===0?y+=S:R<g&&(y+=2*S)}for(let R=0;R<p.length;R++)p[R]=p[R]/y;c.envMap.value=t.texture,c.samples.value=g,c.weights.value=p,c.latitudinal.value=a==="latitudinal",o&&(c.poleAxis.value=o);const{_lodMax:x}=this;c.dTheta.value=m,c.mipInt.value=x-i;const v=this._sizeLods[s],T=3*v*(s>x-Er?s-x+Er:0),b=4*(this._cubeSize-v);Io(e,T,b,3*v,2*v),l.setRenderTarget(e),l.render(f,zh)}}function Rb(n){const t=[],e=[],i=[];let s=n;const r=n-Er+1+op.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>n-Er?l=op[a-n+Er-1]:a===0&&(l=0),i.push(l);const h=1/(o-2),u=-h,f=1+h,c=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,m=6,_=3,g=2,p=1,y=new Float32Array(_*m*d),x=new Float32Array(g*m*d),v=new Float32Array(p*m*d);for(let b=0;b<d;b++){const R=b%3*2/3-1,L=b>2?0:-1,S=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];y.set(S,_*m*b),x.set(c,g*m*b);const E=[b,b,b,b,b,b];v.set(E,p*m*b)}const T=new _n;T.setAttribute("position",new De(y,_)),T.setAttribute("uv",new De(x,g)),T.setAttribute("faceIndex",new De(v,p)),t.push(T),s>Er&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function up(n,t,e){const i=new bn(n,t,e);return i.texture.mapping=jl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Io(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Cb(n,t,e){const i=new Float32Array(As),s=new C(0,1,0);return new je({name:"SphericalGaussianBlur",defines:{n:As,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function fp(){return new je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function dp(){return new je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function xf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Pb(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,h=l===Xc||l===Yc,u=l===Ur||l===Fr;if(h||u){let f=t.get(o);const c=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==c)return e===null&&(e=new cp(n)),f=h?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const d=o.image;return h&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new cp(n)),f=h?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0;const h=6;for(let u=0;u<h;u++)o[u]!==void 0&&l++;return l===h}function r(o){const l=o.target;l.removeEventListener("dispose",r);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function Lb(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&fa("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Ib(n,t,e,i){const s={},r=new WeakMap;function a(f){const c=f.target;c.index!==null&&t.remove(c.index);for(const m in c.attributes)t.remove(c.attributes[m]);for(const m in c.morphAttributes){const _=c.morphAttributes[m];for(let g=0,p=_.length;g<p;g++)t.remove(_[g])}c.removeEventListener("dispose",a),delete s[c.id];const d=r.get(c);d&&(t.remove(d),r.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,e.memory.geometries--}function o(f,c){return s[c.id]===!0||(c.addEventListener("dispose",a),s[c.id]=!0,e.memory.geometries++),c}function l(f){const c=f.attributes;for(const m in c)t.update(c[m],n.ARRAY_BUFFER);const d=f.morphAttributes;for(const m in d){const _=d[m];for(let g=0,p=_.length;g<p;g++)t.update(_[g],n.ARRAY_BUFFER)}}function h(f){const c=[],d=f.index,m=f.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let x=0,v=y.length;x<v;x+=3){const T=y[x+0],b=y[x+1],R=y[x+2];c.push(T,b,b,R,R,T)}}else if(m!==void 0){const y=m.array;_=m.version;for(let x=0,v=y.length/3-1;x<v;x+=3){const T=x+0,b=x+1,R=x+2;c.push(T,b,b,R,R,T)}}else return;const g=new(Yg(c)?vf:_f)(c,1);g.version=_;const p=r.get(f);p&&t.remove(p),r.set(f,g)}function u(f){const c=r.get(f);if(c){const d=f.index;d!==null&&c.version<d.version&&h(f)}else h(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Db(n,t,e){let i;function s(c){i=c}let r,a;function o(c){r=c.type,a=c.bytesPerElement}function l(c,d){n.drawElements(i,d,r,c*a),e.update(d,i,1)}function h(c,d,m){m!==0&&(n.drawElementsInstanced(i,d,r,c*a,m),e.update(d,i,m))}function u(c,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,c,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];e.update(g,i,1)}function f(c,d,m,_){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<c.length;p++)h(c[p]/a,d[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(i,d,0,r,c,0,_,0,m);let p=0;for(let y=0;y<m;y++)p+=d[y]*_[y];e.update(p,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Nb(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Ob(n,t,e){const i=new WeakMap,s=new te;function r(a,o,l){const h=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let c=i.get(o);if(c===void 0||c.count!==f){let E=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",E)};var d=E;c!==void 0&&c.texture.dispose();const m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let v=0;m===!0&&(v=1),_===!0&&(v=2),g===!0&&(v=3);let T=o.attributes.position.count*v,b=1;T>t.maxTextureSize&&(b=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const R=new Float32Array(T*b*4*f),L=new jg(R,T,b,f);L.type=Ie,L.needsUpdate=!0;const S=v*4;for(let P=0;P<f;P++){const F=p[P],I=y[P],z=x[P],X=T*b*4*P;for(let H=0;H<F.count;H++){const Y=H*S;m===!0&&(s.fromBufferAttribute(F,H),R[X+Y+0]=s.x,R[X+Y+1]=s.y,R[X+Y+2]=s.z,R[X+Y+3]=0),_===!0&&(s.fromBufferAttribute(I,H),R[X+Y+4]=s.x,R[X+Y+5]=s.y,R[X+Y+6]=s.z,R[X+Y+7]=0),g===!0&&(s.fromBufferAttribute(z,H),R[X+Y+8]=s.x,R[X+Y+9]=s.y,R[X+Y+10]=s.z,R[X+Y+11]=z.itemSize===4?s.w:1)}}c={count:f,texture:L,size:new Z(T,b)},i.set(o,c),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let m=0;for(let g=0;g<h.length;g++)m+=h[g];const _=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",h)}l.getUniforms().setValue(n,"morphTargetsTexture",c.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",c.size)}return{update:r}}function Ub(n,t,e,i){let s=new WeakMap;function r(l){const h=i.render.frame,u=l.geometry,f=t.get(l,u);if(s.get(f)!==h&&(t.update(f),s.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==h&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const c=l.skeleton;s.get(c)!==h&&(c.update(),s.set(c,h))}return f}function a(){s=new WeakMap}function o(l){const h=l.target;h.removeEventListener("dispose",o),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:a}}class Qa extends Ze{constructor(t,e,i,s,r,a,o,l,h,u=Ds){if(u!==Ds&&u!==Fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ds&&(i=Li),i===void 0&&u===Fs&&(i=ls),super(null,s,r,a,o,l,u,i,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ge,this.minFilter=l!==void 0?l:Ge,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const t0=new Ze,pp=new Qa(1,1),e0=new jg,n0=new gS,i0=new Jg,mp=[],gp=[],_p=new Float32Array(16),vp=new Float32Array(9),xp=new Float32Array(4);function Yr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=mp[s];if(r===void 0&&(r=new Float32Array(s),mp[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function $e(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ke(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function rh(n,t){let e=gp[t];e===void 0&&(e=new Int32Array(t),gp[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Fb(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Gb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;n.uniform2fv(this.addr,t),Ke(e,t)}}function Bb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if($e(e,t))return;n.uniform3fv(this.addr,t),Ke(e,t)}}function zb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;n.uniform4fv(this.addr,t),Ke(e,t)}}function kb(n,t){const e=this.cache,i=t.elements;if(i===void 0){if($e(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ke(e,t)}else{if($e(e,i))return;xp.set(i),n.uniformMatrix2fv(this.addr,!1,xp),Ke(e,i)}}function Vb(n,t){const e=this.cache,i=t.elements;if(i===void 0){if($e(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ke(e,t)}else{if($e(e,i))return;vp.set(i),n.uniformMatrix3fv(this.addr,!1,vp),Ke(e,i)}}function Hb(n,t){const e=this.cache,i=t.elements;if(i===void 0){if($e(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ke(e,t)}else{if($e(e,i))return;_p.set(i),n.uniformMatrix4fv(this.addr,!1,_p),Ke(e,i)}}function Wb(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Xb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;n.uniform2iv(this.addr,t),Ke(e,t)}}function Yb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;n.uniform3iv(this.addr,t),Ke(e,t)}}function qb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;n.uniform4iv(this.addr,t),Ke(e,t)}}function jb(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Zb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;n.uniform2uiv(this.addr,t),Ke(e,t)}}function $b(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;n.uniform3uiv(this.addr,t),Ke(e,t)}}function Kb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;n.uniform4uiv(this.addr,t),Ke(e,t)}}function Jb(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(pp.compareFunction=Xg,r=pp):r=t0,e.setTexture2D(t||r,s)}function Qb(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||n0,s)}function t2(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||i0,s)}function e2(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||e0,s)}function n2(n){switch(n){case 5126:return Fb;case 35664:return Gb;case 35665:return Bb;case 35666:return zb;case 35674:return kb;case 35675:return Vb;case 35676:return Hb;case 5124:case 35670:return Wb;case 35667:case 35671:return Xb;case 35668:case 35672:return Yb;case 35669:case 35673:return qb;case 5125:return jb;case 36294:return Zb;case 36295:return $b;case 36296:return Kb;case 35678:case 36198:case 36298:case 36306:case 35682:return Jb;case 35679:case 36299:case 36307:return Qb;case 35680:case 36300:case 36308:case 36293:return t2;case 36289:case 36303:case 36311:case 36292:return e2}}function i2(n,t){n.uniform1fv(this.addr,t)}function s2(n,t){const e=Yr(t,this.size,2);n.uniform2fv(this.addr,e)}function r2(n,t){const e=Yr(t,this.size,3);n.uniform3fv(this.addr,e)}function a2(n,t){const e=Yr(t,this.size,4);n.uniform4fv(this.addr,e)}function o2(n,t){const e=Yr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function l2(n,t){const e=Yr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function h2(n,t){const e=Yr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function c2(n,t){n.uniform1iv(this.addr,t)}function u2(n,t){n.uniform2iv(this.addr,t)}function f2(n,t){n.uniform3iv(this.addr,t)}function d2(n,t){n.uniform4iv(this.addr,t)}function p2(n,t){n.uniform1uiv(this.addr,t)}function m2(n,t){n.uniform2uiv(this.addr,t)}function g2(n,t){n.uniform3uiv(this.addr,t)}function _2(n,t){n.uniform4uiv(this.addr,t)}function v2(n,t,e){const i=this.cache,s=t.length,r=rh(e,s);$e(i,r)||(n.uniform1iv(this.addr,r),Ke(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||t0,r[a])}function x2(n,t,e){const i=this.cache,s=t.length,r=rh(e,s);$e(i,r)||(n.uniform1iv(this.addr,r),Ke(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||n0,r[a])}function y2(n,t,e){const i=this.cache,s=t.length,r=rh(e,s);$e(i,r)||(n.uniform1iv(this.addr,r),Ke(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||i0,r[a])}function M2(n,t,e){const i=this.cache,s=t.length,r=rh(e,s);$e(i,r)||(n.uniform1iv(this.addr,r),Ke(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||e0,r[a])}function E2(n){switch(n){case 5126:return i2;case 35664:return s2;case 35665:return r2;case 35666:return a2;case 35674:return o2;case 35675:return l2;case 35676:return h2;case 5124:case 35670:return c2;case 35667:case 35671:return u2;case 35668:case 35672:return f2;case 35669:case 35673:return d2;case 5125:return p2;case 36294:return m2;case 36295:return g2;case 36296:return _2;case 35678:case 36198:case 36298:case 36306:case 35682:return v2;case 35679:case 36299:case 36307:return x2;case 35680:case 36300:case 36308:case 36293:return y2;case 36289:case 36303:case 36311:case 36292:return M2}}class S2{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=n2(e.type)}}class w2{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=E2(e.type)}}class T2{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const Xh=/(\w+)(\])?(\[|\.)?/g;function yp(n,t){n.seq.push(t),n.map[t.id]=t}function b2(n,t,e){const i=n.name,s=i.length;for(Xh.lastIndex=0;;){const r=Xh.exec(i),a=Xh.lastIndex;let o=r[1];const l=r[2]==="]",h=r[3];if(l&&(o=o|0),h===void 0||h==="["&&a+2===s){yp(e,h===void 0?new S2(o,n,t):new w2(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new T2(o),yp(e,f)),e=f}}}class hl{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);b2(r,a,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function Mp(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const A2=37297;let R2=0;function C2(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Ep=new Gt;function P2(n){Qt._getMatrix(Ep,Qt.workingColorSpace,n);const t=`mat3( ${Ep.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(n)){case th:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Sp(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+C2(n.getShaderSource(t),a)}else return s}function L2(n,t){const e=P2(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function I2(n,t){let e;switch(t){case Og:e="Linear";break;case Ug:e="Reinhard";break;case Fg:e="Cineon";break;case Gg:e="ACESFilmic";break;case Bg:e="AgX";break;case zg:e="Neutral";break;case D1:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Do=new C;function D2(){Qt.getLuminanceCoefficients(Do);const n=Do.x.toFixed(4),t=Do.y.toFixed(4),e=Do.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function N2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(da).join(`
`)}function O2(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function U2(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function da(n){return n!==""}function wp(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Tp(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const F2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mu(n){return n.replace(F2,B2)}const G2=new Map;function B2(n,t){let e=Ht[t];if(e===void 0){const i=G2.get(t);if(i!==void 0)e=Ht[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Mu(e)}const z2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bp(n){return n.replace(z2,k2)}function k2(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ap(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function V2(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Dg?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===f1?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ei&&(t="SHADOWMAP_TYPE_VSM"),t}function H2(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ur:case Fr:t="ENVMAP_TYPE_CUBE";break;case jl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function W2(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Fr&&(t="ENVMAP_MODE_REFRACTION"),t}function X2(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ng:t="ENVMAP_BLENDING_MULTIPLY";break;case L1:t="ENVMAP_BLENDING_MIX";break;case I1:t="ENVMAP_BLENDING_ADD";break}return t}function Y2(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function q2(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=V2(e),h=H2(e),u=W2(e),f=X2(e),c=Y2(e),d=N2(e),m=O2(r),_=s.createProgram();let g,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(da).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(da).join(`
`),p.length>0&&(p+=`
`)):(g=[Ap(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(da).join(`
`),p=[Ap(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ss?"#define TONE_MAPPING":"",e.toneMapping!==ss?Ht.tonemapping_pars_fragment:"",e.toneMapping!==ss?I2("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,L2("linearToOutputTexel",e.outputColorSpace),D2(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(da).join(`
`)),a=Mu(a),a=wp(a,e),a=Tp(a,e),o=Mu(o),o=wp(o,e),o=Tp(o,e),a=bp(a),o=bp(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=y+g+a,v=y+p+o,T=Mp(s,s.VERTEX_SHADER,x),b=Mp(s,s.FRAGMENT_SHADER,v);s.attachShader(_,T),s.attachShader(_,b),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(P){if(n.debug.checkShaderErrors){const F=s.getProgramInfoLog(_).trim(),I=s.getShaderInfoLog(T).trim(),z=s.getShaderInfoLog(b).trim();let X=!0,H=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,T,b);else{const Y=Sp(s,T,"vertex"),k=Sp(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+F+`
`+Y+`
`+k)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(I===""||z==="")&&(H=!1);H&&(P.diagnostics={runnable:X,programLog:F,vertexShader:{log:I,prefix:g},fragmentShader:{log:z,prefix:p}})}s.deleteShader(T),s.deleteShader(b),L=new hl(s,_),S=U2(s,_)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(_,A2)),E},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=R2++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=b,this}let j2=0;class Z2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new $2(t),e.set(t,i)),i}}class $2{constructor(t){this.id=j2++,this.code=t,this.usedTimes=0}}function K2(n,t,e,i,s,r,a){const o=new gf,l=new Z2,h=new Set,u=[],f=s.logarithmicDepthBuffer,c=s.vertexTextures;let d=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return h.add(S),S===0?"uv":`uv${S}`}function g(S,E,P,F,I){const z=F.fog,X=I.geometry,H=S.isMeshStandardMaterial?F.environment:null,Y=(S.isMeshStandardMaterial?e:t).get(S.envMap||H),k=Y&&Y.mapping===jl?Y.image.height:null,et=m[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const ht=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,vt=ht!==void 0?ht.length:0;let zt=0;X.morphAttributes.position!==void 0&&(zt=1),X.morphAttributes.normal!==void 0&&(zt=2),X.morphAttributes.color!==void 0&&(zt=3);let re,q,tt,mt;if(et){const de=li[et];re=de.vertexShader,q=de.fragmentShader}else re=S.vertexShader,q=S.fragmentShader,l.update(S),tt=l.getVertexShaderID(S),mt=l.getFragmentShaderID(S);const rt=n.getRenderTarget(),Tt=n.state.buffers.depth.getReversed(),Lt=I.isInstancedMesh===!0,It=I.isBatchedMesh===!0,be=!!S.map,ne=!!S.matcap,Oe=!!Y,U=!!S.aoMap,Un=!!S.lightMap,jt=!!S.bumpMap,Zt=!!S.normalMap,Rt=!!S.displacementMap,Me=!!S.emissiveMap,At=!!S.metalnessMap,A=!!S.roughnessMap,M=S.anisotropy>0,G=S.clearcoat>0,$=S.dispersion>0,Q=S.iridescence>0,j=S.sheen>0,Et=S.transmission>0,ct=M&&!!S.anisotropyMap,pt=G&&!!S.clearcoatMap,ie=G&&!!S.clearcoatNormalMap,nt=G&&!!S.clearcoatRoughnessMap,gt=Q&&!!S.iridescenceMap,Ct=Q&&!!S.iridescenceThicknessMap,Dt=j&&!!S.sheenColorMap,_t=j&&!!S.sheenRoughnessMap,$t=!!S.specularMap,Wt=!!S.specularColorMap,ve=!!S.specularIntensityMap,D=Et&&!!S.transmissionMap,lt=Et&&!!S.thicknessMap,W=!!S.gradientMap,K=!!S.alphaMap,dt=S.alphaTest>0,ut=!!S.alphaHash,kt=!!S.extensions;let Pe=ss;S.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Pe=n.toneMapping);const on={shaderID:et,shaderType:S.type,shaderName:S.name,vertexShader:re,fragmentShader:q,defines:S.defines,customVertexShaderID:tt,customFragmentShaderID:mt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:It,batchingColor:It&&I._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&I.instanceColor!==null,instancingMorph:Lt&&I.morphTexture!==null,supportsVertexTextures:c,outputColorSpace:rt===null?n.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Vs,alphaToCoverage:!!S.alphaToCoverage,map:be,matcap:ne,envMap:Oe,envMapMode:Oe&&Y.mapping,envMapCubeUVHeight:k,aoMap:U,lightMap:Un,bumpMap:jt,normalMap:Zt,displacementMap:c&&Rt,emissiveMap:Me,normalMapObjectSpace:Zt&&S.normalMapType===G1,normalMapTangentSpace:Zt&&S.normalMapType===F1,metalnessMap:At,roughnessMap:A,anisotropy:M,anisotropyMap:ct,clearcoat:G,clearcoatMap:pt,clearcoatNormalMap:ie,clearcoatRoughnessMap:nt,dispersion:$,iridescence:Q,iridescenceMap:gt,iridescenceThicknessMap:Ct,sheen:j,sheenColorMap:Dt,sheenRoughnessMap:_t,specularMap:$t,specularColorMap:Wt,specularIntensityMap:ve,transmission:Et,transmissionMap:D,thicknessMap:lt,gradientMap:W,opaque:S.transparent===!1&&S.blending===kn&&S.alphaToCoverage===!1,alphaMap:K,alphaTest:dt,alphaHash:ut,combine:S.combine,mapUv:be&&_(S.map.channel),aoMapUv:U&&_(S.aoMap.channel),lightMapUv:Un&&_(S.lightMap.channel),bumpMapUv:jt&&_(S.bumpMap.channel),normalMapUv:Zt&&_(S.normalMap.channel),displacementMapUv:Rt&&_(S.displacementMap.channel),emissiveMapUv:Me&&_(S.emissiveMap.channel),metalnessMapUv:At&&_(S.metalnessMap.channel),roughnessMapUv:A&&_(S.roughnessMap.channel),anisotropyMapUv:ct&&_(S.anisotropyMap.channel),clearcoatMapUv:pt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ie&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:_t&&_(S.sheenRoughnessMap.channel),specularMapUv:$t&&_(S.specularMap.channel),specularColorMapUv:Wt&&_(S.specularColorMap.channel),specularIntensityMapUv:ve&&_(S.specularIntensityMap.channel),transmissionMapUv:D&&_(S.transmissionMap.channel),thicknessMapUv:lt&&_(S.thicknessMap.channel),alphaMapUv:K&&_(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Zt||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!X.attributes.uv&&(be||K),fog:!!z,useFog:S.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Tt,skinning:I.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:zt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Pe,decodeVideoTexture:be&&S.map.isVideoTexture===!0&&Qt.getTransfer(S.map.colorSpace)===me,decodeVideoTextureEmissive:Me&&S.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(S.emissiveMap.colorSpace)===me,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===wi,flipSided:S.side===Tn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:kt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&S.extensions.multiDraw===!0||It)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return on.vertexUv1s=h.has(1),on.vertexUv2s=h.has(2),on.vertexUv3s=h.has(3),h.clear(),on}function p(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)E.push(P),E.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(y(E,S),x(E,S),E.push(n.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function y(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function x(S,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reverseDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),S.push(o.mask)}function v(S){const E=m[S.type];let P;if(E){const F=li[E];P=nh.clone(F.uniforms)}else P=S.uniforms;return P}function T(S,E){let P;for(let F=0,I=u.length;F<I;F++){const z=u[F];if(z.cacheKey===E){P=z,++P.usedTimes;break}}return P===void 0&&(P=new q2(n,E,S,r),u.push(P)),P}function b(S){if(--S.usedTimes===0){const E=u.indexOf(S);u[E]=u[u.length-1],u.pop(),S.destroy()}}function R(S){l.remove(S)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:T,releaseProgram:b,releaseShaderCache:R,programs:u,dispose:L}}function J2(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Q2(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Rp(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Cp(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(f,c,d,m,_,g){let p=n[t];return p===void 0?(p={id:f.id,object:f,geometry:c,material:d,groupOrder:m,renderOrder:f.renderOrder,z:_,group:g},n[t]=p):(p.id=f.id,p.object=f,p.geometry=c,p.material=d,p.groupOrder=m,p.renderOrder=f.renderOrder,p.z=_,p.group=g),t++,p}function o(f,c,d,m,_,g){const p=a(f,c,d,m,_,g);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(f,c,d,m,_,g){const p=a(f,c,d,m,_,g);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function h(f,c){e.length>1&&e.sort(f||Q2),i.length>1&&i.sort(c||Rp),s.length>1&&s.sort(c||Rp)}function u(){for(let f=t,c=n.length;f<c;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:u,sort:h}}function tA(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new Cp,n.set(i,[a])):s>=r.length?(a=new Cp,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function eA(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new bt};break;case"SpotLight":e={position:new C,direction:new C,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":e={color:new bt,position:new C,halfWidth:new C,halfHeight:new C};break}return n[t.id]=e,e}}}function nA(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let iA=0;function sA(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function rA(n){const t=new eA,e=nA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new C);const s=new C,r=new Xt,a=new Xt;function o(h){let u=0,f=0,c=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let d=0,m=0,_=0,g=0,p=0,y=0,x=0,v=0,T=0,b=0,R=0;h.sort(sA);for(let S=0,E=h.length;S<E;S++){const P=h[S],F=P.color,I=P.intensity,z=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=F.r*I,f+=F.g*I,c+=F.b*I;else if(P.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(P.sh.coefficients[H],I);R++}else if(P.isDirectionalLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Y=P.shadow,k=e.get(P);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,i.directionalShadow[d]=k,i.directionalShadowMap[d]=X,i.directionalShadowMatrix[d]=P.shadow.matrix,y++}i.directional[d]=H,d++}else if(P.isSpotLight){const H=t.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(F).multiplyScalar(I),H.distance=z,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,i.spot[_]=H;const Y=P.shadow;if(P.map&&(i.spotLightMap[T]=P.map,T++,Y.updateMatrices(P),P.castShadow&&b++),i.spotLightMatrix[_]=Y.matrix,P.castShadow){const k=e.get(P);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,i.spotShadow[_]=k,i.spotShadowMap[_]=X,v++}_++}else if(P.isRectAreaLight){const H=t.get(P);H.color.copy(F).multiplyScalar(I),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=H,g++}else if(P.isPointLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){const Y=P.shadow,k=e.get(P);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,k.shadowCameraNear=Y.camera.near,k.shadowCameraFar=Y.camera.far,i.pointShadow[m]=k,i.pointShadowMap[m]=X,i.pointShadowMatrix[m]=P.shadow.matrix,x++}i.point[m]=H,m++}else if(P.isHemisphereLight){const H=t.get(P);H.skyColor.copy(P.color).multiplyScalar(I),H.groundColor.copy(P.groundColor).multiplyScalar(I),i.hemi[p]=H,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=at.LTC_FLOAT_1,i.rectAreaLTC2=at.LTC_FLOAT_2):(i.rectAreaLTC1=at.LTC_HALF_1,i.rectAreaLTC2=at.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=c;const L=i.hash;(L.directionalLength!==d||L.pointLength!==m||L.spotLength!==_||L.rectAreaLength!==g||L.hemiLength!==p||L.numDirectionalShadows!==y||L.numPointShadows!==x||L.numSpotShadows!==v||L.numSpotMaps!==T||L.numLightProbes!==R)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=v+T-b,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=R,L.directionalLength=d,L.pointLength=m,L.spotLength=_,L.rectAreaLength=g,L.hemiLength=p,L.numDirectionalShadows=y,L.numPointShadows=x,L.numSpotShadows=v,L.numSpotMaps=T,L.numLightProbes=R,i.version=iA++)}function l(h,u){let f=0,c=0,d=0,m=0,_=0;const g=u.matrixWorldInverse;for(let p=0,y=h.length;p<y;p++){const x=h[p];if(x.isDirectionalLight){const v=i.directional[f];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),f++}else if(x.isSpotLight){const v=i.spot[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),d++}else if(x.isRectAreaLight){const v=i.rectArea[m];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),a.identity(),r.copy(x.matrixWorld),r.premultiply(g),a.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),m++}else if(x.isPointLight){const v=i.point[c];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),c++}else if(x.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:i}}function Pp(n){const t=new rA(n),e=[],i=[];function s(u){h.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function a(u){i.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const h={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function aA(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Pp(n),t.set(s,[o])):r>=a.length?(o=new Pp(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}class oA extends Ka{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=O1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class lA extends Ka{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const hA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function uA(n,t,e){let i=new ih;const s=new Z,r=new Z,a=new te,o=new oA({depthPacking:U1}),l=new lA,h={},u=e.maxTextureSize,f={[Pi]:Tn,[Tn]:Pi,[wi]:wi},c=new je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Z},radius:{value:4}},vertexShader:hA,fragmentShader:cA}),d=c.clone();d.defines.HORIZONTAL_PASS=1;const m=new _n;m.setAttribute("position",new De(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new dn(m,c),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dg;let p=this.type;this.render=function(b,R,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;const S=n.getRenderTarget(),E=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),F=n.state;F.setBlending(ui),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const I=p!==Ei&&this.type===Ei,z=p===Ei&&this.type!==Ei;for(let X=0,H=b.length;X<H;X++){const Y=b[X],k=Y.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const et=k.getFrameExtents();if(s.multiply(et),r.copy(k.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/et.x),s.x=r.x*et.x,k.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/et.y),s.y=r.y*et.y,k.mapSize.y=r.y)),k.map===null||I===!0||z===!0){const vt=this.type!==Ei?{minFilter:Ge,magFilter:Ge}:{};k.map!==null&&k.map.dispose(),k.map=new bn(s.x,s.y,vt),k.map.texture.name=Y.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const ht=k.getViewportCount();for(let vt=0;vt<ht;vt++){const zt=k.getViewport(vt);a.set(r.x*zt.x,r.y*zt.y,r.x*zt.z,r.y*zt.w),F.viewport(a),k.updateMatrices(Y,vt),i=k.getFrustum(),v(R,L,k.camera,Y,this.type)}k.isPointLightShadow!==!0&&this.type===Ei&&y(k,L),k.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(S,E,P)};function y(b,R){const L=t.update(_);c.defines.VSM_SAMPLES!==b.blurSamples&&(c.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,c.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new bn(s.x,s.y)),c.uniforms.shadow_pass.value=b.map.texture,c.uniforms.resolution.value=b.mapSize,c.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(R,null,L,c,_,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(R,null,L,d,_,null)}function x(b,R,L,S){let E=null;const P=L.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)E=P;else if(E=L.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const F=E.uuid,I=R.uuid;let z=h[F];z===void 0&&(z={},h[F]=z);let X=z[I];X===void 0&&(X=E.clone(),z[I]=X,R.addEventListener("dispose",T)),E=X}if(E.visible=R.visible,E.wireframe=R.wireframe,S===Ei?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:f[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,L.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const F=n.properties.get(E);F.light=L}return E}function v(b,R,L,S,E){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&E===Ei)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,b.matrixWorld);const I=t.update(b),z=b.material;if(Array.isArray(z)){const X=I.groups;for(let H=0,Y=X.length;H<Y;H++){const k=X[H],et=z[k.materialIndex];if(et&&et.visible){const ht=x(b,et,S,E);b.onBeforeShadow(n,b,R,L,I,ht,k),n.renderBufferDirect(L,null,I,ht,b,k),b.onAfterShadow(n,b,R,L,I,ht,k)}}}else if(z.visible){const X=x(b,z,S,E);b.onBeforeShadow(n,b,R,L,I,X,null),n.renderBufferDirect(L,null,I,X,b,null),b.onAfterShadow(n,b,R,L,I,X,null)}}const F=b.children;for(let I=0,z=F.length;I<z;I++)v(F[I],R,L,S,E)}function T(b){b.target.removeEventListener("dispose",T);for(const L in h){const S=h[L],E=b.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}const fA={[Gc]:Bc,[zc]:Hc,[kc]:Wc,[Or]:Vc,[Bc]:Gc,[Hc]:zc,[Wc]:kc,[Vc]:Or};function dA(n,t){function e(){let D=!1;const lt=new te;let W=null;const K=new te(0,0,0,0);return{setMask:function(dt){W!==dt&&!D&&(n.colorMask(dt,dt,dt,dt),W=dt)},setLocked:function(dt){D=dt},setClear:function(dt,ut,kt,Pe,on){on===!0&&(dt*=Pe,ut*=Pe,kt*=Pe),lt.set(dt,ut,kt,Pe),K.equals(lt)===!1&&(n.clearColor(dt,ut,kt,Pe),K.copy(lt))},reset:function(){D=!1,W=null,K.set(-1,0,0,0)}}}function i(){let D=!1,lt=!1,W=null,K=null,dt=null;return{setReversed:function(ut){if(lt!==ut){const kt=t.get("EXT_clip_control");lt?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT);const Pe=dt;dt=null,this.setClear(Pe)}lt=ut},getReversed:function(){return lt},setTest:function(ut){ut?rt(n.DEPTH_TEST):Tt(n.DEPTH_TEST)},setMask:function(ut){W!==ut&&!D&&(n.depthMask(ut),W=ut)},setFunc:function(ut){if(lt&&(ut=fA[ut]),K!==ut){switch(ut){case Gc:n.depthFunc(n.NEVER);break;case Bc:n.depthFunc(n.ALWAYS);break;case zc:n.depthFunc(n.LESS);break;case Or:n.depthFunc(n.LEQUAL);break;case kc:n.depthFunc(n.EQUAL);break;case Vc:n.depthFunc(n.GEQUAL);break;case Hc:n.depthFunc(n.GREATER);break;case Wc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}K=ut}},setLocked:function(ut){D=ut},setClear:function(ut){dt!==ut&&(lt&&(ut=1-ut),n.clearDepth(ut),dt=ut)},reset:function(){D=!1,W=null,K=null,dt=null,lt=!1}}}function s(){let D=!1,lt=null,W=null,K=null,dt=null,ut=null,kt=null,Pe=null,on=null;return{setTest:function(de){D||(de?rt(n.STENCIL_TEST):Tt(n.STENCIL_TEST))},setMask:function(de){lt!==de&&!D&&(n.stencilMask(de),lt=de)},setFunc:function(de,Xn,mi){(W!==de||K!==Xn||dt!==mi)&&(n.stencilFunc(de,Xn,mi),W=de,K=Xn,dt=mi)},setOp:function(de,Xn,mi){(ut!==de||kt!==Xn||Pe!==mi)&&(n.stencilOp(de,Xn,mi),ut=de,kt=Xn,Pe=mi)},setLocked:function(de){D=de},setClear:function(de){on!==de&&(n.clearStencil(de),on=de)},reset:function(){D=!1,lt=null,W=null,K=null,dt=null,ut=null,kt=null,Pe=null,on=null}}}const r=new e,a=new i,o=new s,l=new WeakMap,h=new WeakMap;let u={},f={},c=new WeakMap,d=[],m=null,_=!1,g=null,p=null,y=null,x=null,v=null,T=null,b=null,R=new bt(0,0,0),L=0,S=!1,E=null,P=null,F=null,I=null,z=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Y=0;const k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(k)[1]),H=Y>=1):k.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),H=Y>=2);let et=null,ht={};const vt=n.getParameter(n.SCISSOR_BOX),zt=n.getParameter(n.VIEWPORT),re=new te().fromArray(vt),q=new te().fromArray(zt);function tt(D,lt,W,K){const dt=new Uint8Array(4),ut=n.createTexture();n.bindTexture(D,ut),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let kt=0;kt<W;kt++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(lt,0,n.RGBA,1,1,K,0,n.RGBA,n.UNSIGNED_BYTE,dt):n.texImage2D(lt+kt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,dt);return ut}const mt={};mt[n.TEXTURE_2D]=tt(n.TEXTURE_2D,n.TEXTURE_2D,1),mt[n.TEXTURE_CUBE_MAP]=tt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[n.TEXTURE_2D_ARRAY]=tt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),mt[n.TEXTURE_3D]=tt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(n.DEPTH_TEST),a.setFunc(Or),jt(!1),Zt(Nd),rt(n.CULL_FACE),U(ui);function rt(D){u[D]!==!0&&(n.enable(D),u[D]=!0)}function Tt(D){u[D]!==!1&&(n.disable(D),u[D]=!1)}function Lt(D,lt){return f[D]!==lt?(n.bindFramebuffer(D,lt),f[D]=lt,D===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=lt),D===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=lt),!0):!1}function It(D,lt){let W=d,K=!1;if(D){W=c.get(lt),W===void 0&&(W=[],c.set(lt,W));const dt=D.textures;if(W.length!==dt.length||W[0]!==n.COLOR_ATTACHMENT0){for(let ut=0,kt=dt.length;ut<kt;ut++)W[ut]=n.COLOR_ATTACHMENT0+ut;W.length=dt.length,K=!0}}else W[0]!==n.BACK&&(W[0]=n.BACK,K=!0);K&&n.drawBuffers(W)}function be(D){return m!==D?(n.useProgram(D),m=D,!0):!1}const ne={[bs]:n.FUNC_ADD,[p1]:n.FUNC_SUBTRACT,[m1]:n.FUNC_REVERSE_SUBTRACT};ne[g1]=n.MIN,ne[_1]=n.MAX;const Oe={[v1]:n.ZERO,[x1]:n.ONE,[y1]:n.SRC_COLOR,[Uc]:n.SRC_ALPHA,[b1]:n.SRC_ALPHA_SATURATE,[w1]:n.DST_COLOR,[E1]:n.DST_ALPHA,[M1]:n.ONE_MINUS_SRC_COLOR,[Fc]:n.ONE_MINUS_SRC_ALPHA,[T1]:n.ONE_MINUS_DST_COLOR,[S1]:n.ONE_MINUS_DST_ALPHA,[A1]:n.CONSTANT_COLOR,[R1]:n.ONE_MINUS_CONSTANT_COLOR,[C1]:n.CONSTANT_ALPHA,[P1]:n.ONE_MINUS_CONSTANT_ALPHA};function U(D,lt,W,K,dt,ut,kt,Pe,on,de){if(D===ui){_===!0&&(Tt(n.BLEND),_=!1);return}if(_===!1&&(rt(n.BLEND),_=!0),D!==d1){if(D!==g||de!==S){if((p!==bs||v!==bs)&&(n.blendEquation(n.FUNC_ADD),p=bs,v=bs),de)switch(D){case kn:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Od:n.blendFunc(n.ONE,n.ONE);break;case Ud:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Fd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case kn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Od:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ud:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Fd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,x=null,T=null,b=null,R.set(0,0,0),L=0,g=D,S=de}return}dt=dt||lt,ut=ut||W,kt=kt||K,(lt!==p||dt!==v)&&(n.blendEquationSeparate(ne[lt],ne[dt]),p=lt,v=dt),(W!==y||K!==x||ut!==T||kt!==b)&&(n.blendFuncSeparate(Oe[W],Oe[K],Oe[ut],Oe[kt]),y=W,x=K,T=ut,b=kt),(Pe.equals(R)===!1||on!==L)&&(n.blendColor(Pe.r,Pe.g,Pe.b,on),R.copy(Pe),L=on),g=D,S=!1}function Un(D,lt){D.side===wi?Tt(n.CULL_FACE):rt(n.CULL_FACE);let W=D.side===Tn;lt&&(W=!W),jt(W),D.blending===kn&&D.transparent===!1?U(ui):U(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const K=D.stencilWrite;o.setTest(K),K&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Me(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?rt(n.SAMPLE_ALPHA_TO_COVERAGE):Tt(n.SAMPLE_ALPHA_TO_COVERAGE)}function jt(D){E!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),E=D)}function Zt(D){D!==c1?(rt(n.CULL_FACE),D!==P&&(D===Nd?n.cullFace(n.BACK):D===u1?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Tt(n.CULL_FACE),P=D}function Rt(D){D!==F&&(H&&n.lineWidth(D),F=D)}function Me(D,lt,W){D?(rt(n.POLYGON_OFFSET_FILL),(I!==lt||z!==W)&&(n.polygonOffset(lt,W),I=lt,z=W)):Tt(n.POLYGON_OFFSET_FILL)}function At(D){D?rt(n.SCISSOR_TEST):Tt(n.SCISSOR_TEST)}function A(D){D===void 0&&(D=n.TEXTURE0+X-1),et!==D&&(n.activeTexture(D),et=D)}function M(D,lt,W){W===void 0&&(et===null?W=n.TEXTURE0+X-1:W=et);let K=ht[W];K===void 0&&(K={type:void 0,texture:void 0},ht[W]=K),(K.type!==D||K.texture!==lt)&&(et!==W&&(n.activeTexture(W),et=W),n.bindTexture(D,lt||mt[D]),K.type=D,K.texture=lt)}function G(){const D=ht[et];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function $(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Et(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ct(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function gt(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ct(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Dt(D){re.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),re.copy(D))}function _t(D){q.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),q.copy(D))}function $t(D,lt){let W=h.get(lt);W===void 0&&(W=new WeakMap,h.set(lt,W));let K=W.get(D);K===void 0&&(K=n.getUniformBlockIndex(lt,D.name),W.set(D,K))}function Wt(D,lt){const K=h.get(lt).get(D);l.get(lt)!==K&&(n.uniformBlockBinding(lt,K,D.__bindingPointIndex),l.set(lt,K))}function ve(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},et=null,ht={},f={},c=new WeakMap,d=[],m=null,_=!1,g=null,p=null,y=null,x=null,v=null,T=null,b=null,R=new bt(0,0,0),L=0,S=!1,E=null,P=null,F=null,I=null,z=null,re.set(0,0,n.canvas.width,n.canvas.height),q.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:Tt,bindFramebuffer:Lt,drawBuffers:It,useProgram:be,setBlending:U,setMaterial:Un,setFlipSided:jt,setCullFace:Zt,setLineWidth:Rt,setPolygonOffset:Me,setScissorTest:At,activeTexture:A,bindTexture:M,unbindTexture:G,compressedTexImage2D:$,compressedTexImage3D:Q,texImage2D:gt,texImage3D:Ct,updateUBOMapping:$t,uniformBlockBinding:Wt,texStorage2D:ie,texStorage3D:nt,texSubImage2D:j,texSubImage3D:Et,compressedTexSubImage2D:ct,compressedTexSubImage3D:pt,scissor:Dt,viewport:_t,reset:ve}}function Lp(n,t,e,i){const s=pA(i);switch(e){case uf:return n*t;case ff:return n*t;case df:return n*t*2;case pf:return n*t/s.components*s.byteLength;case Kl:return n*t/s.components*s.byteLength;case Wr:return n*t*2/s.components*s.byteLength;case Jl:return n*t*2/s.components*s.byteLength;case Hg:return n*t*3/s.components*s.byteLength;case Te:return n*t*4/s.components*s.byteLength;case Ql:return n*t*4/s.components*s.byteLength;case sl:case rl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case al:case ol:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case $c:case Jc:return Math.max(n,16)*Math.max(t,8)/4;case Zc:case Kc:return Math.max(n,8)*Math.max(t,8)/2;case Qc:case tu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case eu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case nu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case iu:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case su:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ru:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case au:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case ou:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case lu:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case hu:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case cu:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case uu:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case fu:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case du:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case pu:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case mu:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ll:case gu:case _u:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Wg:case vu:return Math.ceil(n/4)*Math.ceil(t/4)*8;case xu:case yu:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function pA(n){switch(n){case ue:case Zl:return{byteLength:1,components:1};case os:case $l:case Ni:return{byteLength:2,components:1};case Za:case $a:return{byteLength:2,components:4};case Li:case ja:case Ie:return{byteLength:4,components:1};case Vg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function mA(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Z,u=new WeakMap;let f;const c=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,M){return d?new OffscreenCanvas(A,M):Rl("canvas")}function _(A,M,G){let $=1;const Q=At(A);if((Q.width>G||Q.height>G)&&($=G/Math.max(Q.width,Q.height)),$<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const j=Math.floor($*Q.width),Et=Math.floor($*Q.height);f===void 0&&(f=m(j,Et));const ct=M?m(j,Et):f;return ct.width=j,ct.height=Et,ct.getContext("2d").drawImage(A,0,0,j,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+j+"x"+Et+")."),ct}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function g(A){return A.generateMipmaps}function p(A){n.generateMipmap(A)}function y(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(A,M,G,$,Q=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let j=M;if(M===n.RED&&(G===n.FLOAT&&(j=n.R32F),G===n.HALF_FLOAT&&(j=n.R16F),G===n.UNSIGNED_BYTE&&(j=n.R8)),M===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(j=n.R8UI),G===n.UNSIGNED_SHORT&&(j=n.R16UI),G===n.UNSIGNED_INT&&(j=n.R32UI),G===n.BYTE&&(j=n.R8I),G===n.SHORT&&(j=n.R16I),G===n.INT&&(j=n.R32I)),M===n.RG&&(G===n.FLOAT&&(j=n.RG32F),G===n.HALF_FLOAT&&(j=n.RG16F),G===n.UNSIGNED_BYTE&&(j=n.RG8)),M===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(j=n.RG8UI),G===n.UNSIGNED_SHORT&&(j=n.RG16UI),G===n.UNSIGNED_INT&&(j=n.RG32UI),G===n.BYTE&&(j=n.RG8I),G===n.SHORT&&(j=n.RG16I),G===n.INT&&(j=n.RG32I)),M===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(j=n.RGB8UI),G===n.UNSIGNED_SHORT&&(j=n.RGB16UI),G===n.UNSIGNED_INT&&(j=n.RGB32UI),G===n.BYTE&&(j=n.RGB8I),G===n.SHORT&&(j=n.RGB16I),G===n.INT&&(j=n.RGB32I)),M===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),G===n.UNSIGNED_INT&&(j=n.RGBA32UI),G===n.BYTE&&(j=n.RGBA8I),G===n.SHORT&&(j=n.RGBA16I),G===n.INT&&(j=n.RGBA32I)),M===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),M===n.RGBA){const Et=Q?th:Qt.getTransfer($);G===n.FLOAT&&(j=n.RGBA32F),G===n.HALF_FLOAT&&(j=n.RGBA16F),G===n.UNSIGNED_BYTE&&(j=Et===me?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function v(A,M){let G;return A?M===null||M===Li||M===ls?G=n.DEPTH24_STENCIL8:M===Ie?G=n.DEPTH32F_STENCIL8:M===os&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Li||M===ls?G=n.DEPTH_COMPONENT24:M===Ie?G=n.DEPTH_COMPONENT32F:M===os&&(G=n.DEPTH_COMPONENT16),G}function T(A,M){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ge&&A.minFilter!==Fe?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function b(A){const M=A.target;M.removeEventListener("dispose",b),L(M),M.isVideoTexture&&u.delete(M)}function R(A){const M=A.target;M.removeEventListener("dispose",R),E(M)}function L(A){const M=i.get(A);if(M.__webglInit===void 0)return;const G=A.source,$=c.get(G);if($){const Q=$[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(A),Object.keys($).length===0&&c.delete(G)}i.remove(A)}function S(A){const M=i.get(A);n.deleteTexture(M.__webglTexture);const G=A.source,$=c.get(G);delete $[M.__cacheKey],a.memory.textures--}function E(A){const M=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let Q=0;Q<M.__webglFramebuffer[$].length;Q++)n.deleteFramebuffer(M.__webglFramebuffer[$][Q]);else n.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)n.deleteFramebuffer(M.__webglFramebuffer[$]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const G=A.textures;for(let $=0,Q=G.length;$<Q;$++){const j=i.get(G[$]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),a.memory.textures--),i.remove(G[$])}i.remove(A)}let P=0;function F(){P=0}function I(){const A=P;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),P+=1,A}function z(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function X(A,M){const G=i.get(A);if(A.isVideoTexture&&Rt(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){const $=A.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(G,A,M);return}}e.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+M)}function H(A,M){const G=i.get(A);if(A.version>0&&G.__version!==A.version){q(G,A,M);return}e.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+M)}function Y(A,M){const G=i.get(A);if(A.version>0&&G.__version!==A.version){q(G,A,M);return}e.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+M)}function k(A,M){const G=i.get(A);if(A.version>0&&G.__version!==A.version){tt(G,A,M);return}e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+M)}const et={[qc]:n.REPEAT,[ii]:n.CLAMP_TO_EDGE,[jc]:n.MIRRORED_REPEAT},ht={[Ge]:n.NEAREST,[N1]:n.NEAREST_MIPMAP_NEAREST,[uo]:n.NEAREST_MIPMAP_LINEAR,[Fe]:n.LINEAR,[xh]:n.LINEAR_MIPMAP_NEAREST,[Cs]:n.LINEAR_MIPMAP_LINEAR},vt={[B1]:n.NEVER,[X1]:n.ALWAYS,[z1]:n.LESS,[Xg]:n.LEQUAL,[k1]:n.EQUAL,[W1]:n.GEQUAL,[V1]:n.GREATER,[H1]:n.NOTEQUAL};function zt(A,M){if(M.type===Ie&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Fe||M.magFilter===xh||M.magFilter===uo||M.magFilter===Cs||M.minFilter===Fe||M.minFilter===xh||M.minFilter===uo||M.minFilter===Cs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,et[M.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,et[M.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,et[M.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,ht[M.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,ht[M.minFilter]),M.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,vt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ge||M.minFilter!==uo&&M.minFilter!==Cs||M.type===Ie&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function re(A,M){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",b));const $=M.source;let Q=c.get($);Q===void 0&&(Q={},c.set($,Q));const j=z(M);if(j!==A.__cacheKey){Q[j]===void 0&&(Q[j]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,G=!0),Q[j].usedTimes++;const Et=Q[A.__cacheKey];Et!==void 0&&(Q[A.__cacheKey].usedTimes--,Et.usedTimes===0&&S(M)),A.__cacheKey=j,A.__webglTexture=Q[j].texture}return G}function q(A,M,G){let $=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=n.TEXTURE_3D);const Q=re(A,M),j=M.source;e.bindTexture($,A.__webglTexture,n.TEXTURE0+G);const Et=i.get(j);if(j.version!==Et.__version||Q===!0){e.activeTexture(n.TEXTURE0+G);const ct=Qt.getPrimaries(Qt.workingColorSpace),pt=M.colorSpace===hi?null:Qt.getPrimaries(M.colorSpace),ie=M.colorSpace===hi||ct===pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let nt=_(M.image,!1,s.maxTextureSize);nt=Me(M,nt);const gt=r.convert(M.format,M.colorSpace),Ct=r.convert(M.type);let Dt=x(M.internalFormat,gt,Ct,M.colorSpace,M.isVideoTexture);zt($,M);let _t;const $t=M.mipmaps,Wt=M.isVideoTexture!==!0,ve=Et.__version===void 0||Q===!0,D=j.dataReady,lt=T(M,nt);if(M.isDepthTexture)Dt=v(M.format===Fs,M.type),ve&&(Wt?e.texStorage2D(n.TEXTURE_2D,1,Dt,nt.width,nt.height):e.texImage2D(n.TEXTURE_2D,0,Dt,nt.width,nt.height,0,gt,Ct,null));else if(M.isDataTexture)if($t.length>0){Wt&&ve&&e.texStorage2D(n.TEXTURE_2D,lt,Dt,$t[0].width,$t[0].height);for(let W=0,K=$t.length;W<K;W++)_t=$t[W],Wt?D&&e.texSubImage2D(n.TEXTURE_2D,W,0,0,_t.width,_t.height,gt,Ct,_t.data):e.texImage2D(n.TEXTURE_2D,W,Dt,_t.width,_t.height,0,gt,Ct,_t.data);M.generateMipmaps=!1}else Wt?(ve&&e.texStorage2D(n.TEXTURE_2D,lt,Dt,nt.width,nt.height),D&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,nt.width,nt.height,gt,Ct,nt.data)):e.texImage2D(n.TEXTURE_2D,0,Dt,nt.width,nt.height,0,gt,Ct,nt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Wt&&ve&&e.texStorage3D(n.TEXTURE_2D_ARRAY,lt,Dt,$t[0].width,$t[0].height,nt.depth);for(let W=0,K=$t.length;W<K;W++)if(_t=$t[W],M.format!==Te)if(gt!==null)if(Wt){if(D)if(M.layerUpdates.size>0){const dt=Lp(_t.width,_t.height,M.format,M.type);for(const ut of M.layerUpdates){const kt=_t.data.subarray(ut*dt/_t.data.BYTES_PER_ELEMENT,(ut+1)*dt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,ut,_t.width,_t.height,1,gt,kt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,_t.width,_t.height,nt.depth,gt,_t.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,W,Dt,_t.width,_t.height,nt.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?D&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,_t.width,_t.height,nt.depth,gt,Ct,_t.data):e.texImage3D(n.TEXTURE_2D_ARRAY,W,Dt,_t.width,_t.height,nt.depth,0,gt,Ct,_t.data)}else{Wt&&ve&&e.texStorage2D(n.TEXTURE_2D,lt,Dt,$t[0].width,$t[0].height);for(let W=0,K=$t.length;W<K;W++)_t=$t[W],M.format!==Te?gt!==null?Wt?D&&e.compressedTexSubImage2D(n.TEXTURE_2D,W,0,0,_t.width,_t.height,gt,_t.data):e.compressedTexImage2D(n.TEXTURE_2D,W,Dt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?D&&e.texSubImage2D(n.TEXTURE_2D,W,0,0,_t.width,_t.height,gt,Ct,_t.data):e.texImage2D(n.TEXTURE_2D,W,Dt,_t.width,_t.height,0,gt,Ct,_t.data)}else if(M.isDataArrayTexture)if(Wt){if(ve&&e.texStorage3D(n.TEXTURE_2D_ARRAY,lt,Dt,nt.width,nt.height,nt.depth),D)if(M.layerUpdates.size>0){const W=Lp(nt.width,nt.height,M.format,M.type);for(const K of M.layerUpdates){const dt=nt.data.subarray(K*W/nt.data.BYTES_PER_ELEMENT,(K+1)*W/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,nt.width,nt.height,1,gt,Ct,dt)}M.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,gt,Ct,nt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Dt,nt.width,nt.height,nt.depth,0,gt,Ct,nt.data);else if(M.isData3DTexture)Wt?(ve&&e.texStorage3D(n.TEXTURE_3D,lt,Dt,nt.width,nt.height,nt.depth),D&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,gt,Ct,nt.data)):e.texImage3D(n.TEXTURE_3D,0,Dt,nt.width,nt.height,nt.depth,0,gt,Ct,nt.data);else if(M.isFramebufferTexture){if(ve)if(Wt)e.texStorage2D(n.TEXTURE_2D,lt,Dt,nt.width,nt.height);else{let W=nt.width,K=nt.height;for(let dt=0;dt<lt;dt++)e.texImage2D(n.TEXTURE_2D,dt,Dt,W,K,0,gt,Ct,null),W>>=1,K>>=1}}else if($t.length>0){if(Wt&&ve){const W=At($t[0]);e.texStorage2D(n.TEXTURE_2D,lt,Dt,W.width,W.height)}for(let W=0,K=$t.length;W<K;W++)_t=$t[W],Wt?D&&e.texSubImage2D(n.TEXTURE_2D,W,0,0,gt,Ct,_t):e.texImage2D(n.TEXTURE_2D,W,Dt,gt,Ct,_t);M.generateMipmaps=!1}else if(Wt){if(ve){const W=At(nt);e.texStorage2D(n.TEXTURE_2D,lt,Dt,W.width,W.height)}D&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,gt,Ct,nt)}else e.texImage2D(n.TEXTURE_2D,0,Dt,gt,Ct,nt);g(M)&&p($),Et.__version=j.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function tt(A,M,G){if(M.image.length!==6)return;const $=re(A,M),Q=M.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+G);const j=i.get(Q);if(Q.version!==j.__version||$===!0){e.activeTexture(n.TEXTURE0+G);const Et=Qt.getPrimaries(Qt.workingColorSpace),ct=M.colorSpace===hi?null:Qt.getPrimaries(M.colorSpace),pt=M.colorSpace===hi||Et===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const ie=M.isCompressedTexture||M.image[0].isCompressedTexture,nt=M.image[0]&&M.image[0].isDataTexture,gt=[];for(let K=0;K<6;K++)!ie&&!nt?gt[K]=_(M.image[K],!0,s.maxCubemapSize):gt[K]=nt?M.image[K].image:M.image[K],gt[K]=Me(M,gt[K]);const Ct=gt[0],Dt=r.convert(M.format,M.colorSpace),_t=r.convert(M.type),$t=x(M.internalFormat,Dt,_t,M.colorSpace),Wt=M.isVideoTexture!==!0,ve=j.__version===void 0||$===!0,D=Q.dataReady;let lt=T(M,Ct);zt(n.TEXTURE_CUBE_MAP,M);let W;if(ie){Wt&&ve&&e.texStorage2D(n.TEXTURE_CUBE_MAP,lt,$t,Ct.width,Ct.height);for(let K=0;K<6;K++){W=gt[K].mipmaps;for(let dt=0;dt<W.length;dt++){const ut=W[dt];M.format!==Te?Dt!==null?Wt?D&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt,0,0,ut.width,ut.height,Dt,ut.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt,$t,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt,0,0,ut.width,ut.height,Dt,_t,ut.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt,$t,ut.width,ut.height,0,Dt,_t,ut.data)}}}else{if(W=M.mipmaps,Wt&&ve){W.length>0&&lt++;const K=At(gt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,lt,$t,K.width,K.height)}for(let K=0;K<6;K++)if(nt){Wt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,gt[K].width,gt[K].height,Dt,_t,gt[K].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,$t,gt[K].width,gt[K].height,0,Dt,_t,gt[K].data);for(let dt=0;dt<W.length;dt++){const kt=W[dt].image[K].image;Wt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt+1,0,0,kt.width,kt.height,Dt,_t,kt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt+1,$t,kt.width,kt.height,0,Dt,_t,kt.data)}}else{Wt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Dt,_t,gt[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,$t,Dt,_t,gt[K]);for(let dt=0;dt<W.length;dt++){const ut=W[dt];Wt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt+1,0,0,Dt,_t,ut.image[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt+1,$t,Dt,_t,ut.image[K])}}}g(M)&&p(n.TEXTURE_CUBE_MAP),j.__version=Q.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function mt(A,M,G,$,Q,j){const Et=r.convert(G.format,G.colorSpace),ct=r.convert(G.type),pt=x(G.internalFormat,Et,ct,G.colorSpace),ie=i.get(M),nt=i.get(G);if(nt.__renderTarget=M,!ie.__hasExternalTextures){const gt=Math.max(1,M.width>>j),Ct=Math.max(1,M.height>>j);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?e.texImage3D(Q,j,pt,gt,Ct,M.depth,0,Et,ct,null):e.texImage2D(Q,j,pt,gt,Ct,0,Et,ct,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),Zt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,Q,nt.__webglTexture,0,jt(M)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,Q,nt.__webglTexture,j),e.bindFramebuffer(n.FRAMEBUFFER,null)}function rt(A,M,G){if(n.bindRenderbuffer(n.RENDERBUFFER,A),M.depthBuffer){const $=M.depthTexture,Q=$&&$.isDepthTexture?$.type:null,j=v(M.stencilBuffer,Q),Et=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=jt(M);Zt(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ct,j,M.width,M.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,j,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,j,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Et,n.RENDERBUFFER,A)}else{const $=M.textures;for(let Q=0;Q<$.length;Q++){const j=$[Q],Et=r.convert(j.format,j.colorSpace),ct=r.convert(j.type),pt=x(j.internalFormat,Et,ct,j.colorSpace),ie=jt(M);G&&Zt(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,pt,M.width,M.height):Zt(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,pt,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,pt,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Tt(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(M.depthTexture);$.__renderTarget=M,(!$.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X(M.depthTexture,0);const Q=$.__webglTexture,j=jt(M);if(M.depthTexture.format===Ds)Zt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(M.depthTexture.format===Fs)Zt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Lt(A){const M=i.get(A),G=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const $=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){const Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",Q)};$.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=$}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Tt(M.__webglFramebuffer,A)}else if(G){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=n.createRenderbuffer(),rt(M.__webglDepthbuffer[$],A,!1);else{const Q=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=M.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,j)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),rt(M.__webglDepthbuffer,A,!1);else{const $=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,Q)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function It(A,M,G){const $=i.get(A);M!==void 0&&mt($.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Lt(A)}function be(A){const M=A.texture,G=i.get(A),$=i.get(M);A.addEventListener("dispose",R);const Q=A.textures,j=A.isWebGLCubeRenderTarget===!0,Et=Q.length>1;if(Et||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=M.version,a.memory.textures++),j){G.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[ct]=[];for(let pt=0;pt<M.mipmaps.length;pt++)G.__webglFramebuffer[ct][pt]=n.createFramebuffer()}else G.__webglFramebuffer[ct]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let ct=0;ct<M.mipmaps.length;ct++)G.__webglFramebuffer[ct]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(Et)for(let ct=0,pt=Q.length;ct<pt;ct++){const ie=i.get(Q[ct]);ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&Zt(A)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ct=0;ct<Q.length;ct++){const pt=Q[ct];G.__webglColorRenderbuffer[ct]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[ct]);const ie=r.convert(pt.format,pt.colorSpace),nt=r.convert(pt.type),gt=x(pt.internalFormat,ie,nt,pt.colorSpace,A.isXRRenderTarget===!0),Ct=jt(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ct,gt,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,G.__webglColorRenderbuffer[ct])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),rt(G.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){e.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),zt(n.TEXTURE_CUBE_MAP,M);for(let ct=0;ct<6;ct++)if(M.mipmaps&&M.mipmaps.length>0)for(let pt=0;pt<M.mipmaps.length;pt++)mt(G.__webglFramebuffer[ct][pt],A,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,pt);else mt(G.__webglFramebuffer[ct],A,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);g(M)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let ct=0,pt=Q.length;ct<pt;ct++){const ie=Q[ct],nt=i.get(ie);e.bindTexture(n.TEXTURE_2D,nt.__webglTexture),zt(n.TEXTURE_2D,ie),mt(G.__webglFramebuffer,A,ie,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,0),g(ie)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let ct=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ct=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ct,$.__webglTexture),zt(ct,M),M.mipmaps&&M.mipmaps.length>0)for(let pt=0;pt<M.mipmaps.length;pt++)mt(G.__webglFramebuffer[pt],A,M,n.COLOR_ATTACHMENT0,ct,pt);else mt(G.__webglFramebuffer,A,M,n.COLOR_ATTACHMENT0,ct,0);g(M)&&p(ct),e.unbindTexture()}A.depthBuffer&&Lt(A)}function ne(A){const M=A.textures;for(let G=0,$=M.length;G<$;G++){const Q=M[G];if(g(Q)){const j=y(A),Et=i.get(Q).__webglTexture;e.bindTexture(j,Et),p(j),e.unbindTexture()}}}const Oe=[],U=[];function Un(A){if(A.samples>0){if(Zt(A)===!1){const M=A.textures,G=A.width,$=A.height;let Q=n.COLOR_BUFFER_BIT;const j=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Et=i.get(A),ct=M.length>1;if(ct)for(let pt=0;pt<M.length;pt++)e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let pt=0;pt<M.length;pt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),ct){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Et.__webglColorRenderbuffer[pt]);const ie=i.get(M[pt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ie,0)}n.blitFramebuffer(0,0,G,$,0,0,G,$,Q,n.NEAREST),l===!0&&(Oe.length=0,U.length=0,Oe.push(n.COLOR_ATTACHMENT0+pt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Oe.push(j),U.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,U)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Oe))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ct)for(let pt=0;pt<M.length;pt++){e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,Et.__webglColorRenderbuffer[pt]);const ie=i.get(M[pt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,ie,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const M=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function jt(A){return Math.min(s.maxSamples,A.samples)}function Zt(A){const M=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Rt(A){const M=a.render.frame;u.get(A)!==M&&(u.set(A,M),A.update())}function Me(A,M){const G=A.colorSpace,$=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==Vs&&G!==hi&&(Qt.getTransfer(G)===me?($!==Te||Q!==ue)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),M}function At(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(h.width=A.naturalWidth||A.width,h.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(h.width=A.displayWidth,h.height=A.displayHeight):(h.width=A.width,h.height=A.height),h}this.allocateTextureUnit=I,this.resetTextureUnits=F,this.setTexture2D=X,this.setTexture2DArray=H,this.setTexture3D=Y,this.setTextureCube=k,this.rebindTextures=It,this.setupRenderTarget=be,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=Un,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=Zt}function gA(n,t){function e(i,s=hi){let r;const a=Qt.getTransfer(s);if(i===ue)return n.UNSIGNED_BYTE;if(i===Za)return n.UNSIGNED_SHORT_4_4_4_4;if(i===$a)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Vg)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Zl)return n.BYTE;if(i===$l)return n.SHORT;if(i===os)return n.UNSIGNED_SHORT;if(i===ja)return n.INT;if(i===Li)return n.UNSIGNED_INT;if(i===Ie)return n.FLOAT;if(i===Ni)return n.HALF_FLOAT;if(i===uf)return n.ALPHA;if(i===Hg)return n.RGB;if(i===Te)return n.RGBA;if(i===ff)return n.LUMINANCE;if(i===df)return n.LUMINANCE_ALPHA;if(i===Ds)return n.DEPTH_COMPONENT;if(i===Fs)return n.DEPTH_STENCIL;if(i===pf)return n.RED;if(i===Kl)return n.RED_INTEGER;if(i===Wr)return n.RG;if(i===Jl)return n.RG_INTEGER;if(i===Ql)return n.RGBA_INTEGER;if(i===sl||i===rl||i===al||i===ol)if(a===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===sl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===rl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===al)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ol)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===sl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===rl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===al)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ol)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zc||i===$c||i===Kc||i===Jc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Zc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===$c)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Kc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Jc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Qc||i===tu||i===eu)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Qc||i===tu)return a===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===eu)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===nu||i===iu||i===su||i===ru||i===au||i===ou||i===lu||i===hu||i===cu||i===uu||i===fu||i===du||i===pu||i===mu)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===nu)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===iu)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===su)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ru)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===au)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ou)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===lu)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hu)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===cu)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===uu)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===fu)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===du)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===pu)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===mu)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ll||i===gu||i===_u)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ll)return a===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===gu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_u)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Wg||i===vu||i===xu||i===yu)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ll)return r.COMPRESSED_RED_RGTC1_EXT;if(i===vu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===yu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ls?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class _A extends zn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ps extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vA={type:"move"};class Yh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ps,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ps,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ps,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,i),p=this._getHandJoint(h,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],c=u.position.distanceTo(f.position),d=.02,m=.005;h.inputState.pinching&&c>d+m?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&c<=d-m&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vA)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ps;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const xA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class MA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Ze,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new je({vertexShader:xA,fragmentShader:yA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new dn(new cs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class EA extends pn{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,h=null,u=null,f=null,c=null,d=null,m=null;const _=new MA,g=e.getContextAttributes();let p=null,y=null;const x=[],v=[],T=new Z;let b=null;const R=new zn;R.viewport=new te;const L=new zn;L.viewport=new te;const S=[R,L],E=new _A;let P=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let tt=x[q];return tt===void 0&&(tt=new Yh,x[q]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(q){let tt=x[q];return tt===void 0&&(tt=new Yh,x[q]=tt),tt.getGripSpace()},this.getHand=function(q){let tt=x[q];return tt===void 0&&(tt=new Yh,x[q]=tt),tt.getHandSpace()};function I(q){const tt=v.indexOf(q.inputSource);if(tt===-1)return;const mt=x[tt];mt!==void 0&&(mt.update(q.inputSource,q.frame,h||a),mt.dispatchEvent({type:q.type,data:q.inputSource}))}function z(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",X);for(let q=0;q<x.length;q++){const tt=v[q];tt!==null&&(v[q]=null,x[q].disconnect(tt))}P=null,F=null,_.reset(),t.setRenderTarget(p),d=null,c=null,f=null,s=null,y=null,re.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(q){h=q},this.getBaseLayer=function(){return c!==null?c:d},this.getBinding=function(){return f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",z),s.addEventListener("inputsourceschange",X),g.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0){const tt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new bn(d.framebufferWidth,d.framebufferHeight,{format:Te,type:ue,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let tt=null,mt=null,rt=null;g.depth&&(rt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=g.stencil?Fs:Ds,mt=g.stencil?ls:Li);const Tt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};f=new XRWebGLBinding(s,e),c=f.createProjectionLayer(Tt),s.updateRenderState({layers:[c]}),t.setPixelRatio(1),t.setSize(c.textureWidth,c.textureHeight,!1),y=new bn(c.textureWidth,c.textureHeight,{format:Te,type:ue,depthTexture:new Qa(c.textureWidth,c.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await s.requestReferenceSpace(o),re.setContext(s),re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(q){for(let tt=0;tt<q.removed.length;tt++){const mt=q.removed[tt],rt=v.indexOf(mt);rt>=0&&(v[rt]=null,x[rt].disconnect(mt))}for(let tt=0;tt<q.added.length;tt++){const mt=q.added[tt];let rt=v.indexOf(mt);if(rt===-1){for(let Lt=0;Lt<x.length;Lt++)if(Lt>=v.length){v.push(mt),rt=Lt;break}else if(v[Lt]===null){v[Lt]=mt,rt=Lt;break}if(rt===-1)break}const Tt=x[rt];Tt&&Tt.connect(mt)}}const H=new C,Y=new C;function k(q,tt,mt){H.setFromMatrixPosition(tt.matrixWorld),Y.setFromMatrixPosition(mt.matrixWorld);const rt=H.distanceTo(Y),Tt=tt.projectionMatrix.elements,Lt=mt.projectionMatrix.elements,It=Tt[14]/(Tt[10]-1),be=Tt[14]/(Tt[10]+1),ne=(Tt[9]+1)/Tt[5],Oe=(Tt[9]-1)/Tt[5],U=(Tt[8]-1)/Tt[0],Un=(Lt[8]+1)/Lt[0],jt=It*U,Zt=It*Un,Rt=rt/(-U+Un),Me=Rt*-U;if(tt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Me),q.translateZ(Rt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Tt[10]===-1)q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const At=It+Rt,A=be+Rt,M=jt-Me,G=Zt+(rt-Me),$=ne*be/A*At,Q=Oe*be/A*At;q.projectionMatrix.makePerspective(M,G,$,Q,At,A),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function et(q,tt){tt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(tt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let tt=q.near,mt=q.far;_.texture!==null&&(_.depthNear>0&&(tt=_.depthNear),_.depthFar>0&&(mt=_.depthFar)),E.near=L.near=R.near=tt,E.far=L.far=R.far=mt,(P!==E.near||F!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),P=E.near,F=E.far),R.layers.mask=q.layers.mask|2,L.layers.mask=q.layers.mask|4,E.layers.mask=R.layers.mask|L.layers.mask;const rt=q.parent,Tt=E.cameras;et(E,rt);for(let Lt=0;Lt<Tt.length;Lt++)et(Tt[Lt],rt);Tt.length===2?k(E,R,L):E.projectionMatrix.copy(R.projectionMatrix),ht(q,E,rt)};function ht(q,tt,mt){mt===null?q.matrix.copy(tt.matrixWorld):(q.matrix.copy(mt.matrixWorld),q.matrix.invert(),q.matrix.multiply(tt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ia*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(c===null&&d===null))return l},this.setFoveation=function(q){l=q,c!==null&&(c.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(E)};let vt=null;function zt(q,tt){if(u=tt.getViewerPose(h||a),m=tt,u!==null){const mt=u.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let rt=!1;mt.length!==E.cameras.length&&(E.cameras.length=0,rt=!0);for(let Lt=0;Lt<mt.length;Lt++){const It=mt[Lt];let be=null;if(d!==null)be=d.getViewport(It);else{const Oe=f.getViewSubImage(c,It);be=Oe.viewport,Lt===0&&(t.setRenderTargetTextures(y,Oe.colorTexture,c.ignoreDepthValues?void 0:Oe.depthStencilTexture),t.setRenderTarget(y))}let ne=S[Lt];ne===void 0&&(ne=new zn,ne.layers.enable(Lt),ne.viewport=new te,S[Lt]=ne),ne.matrix.fromArray(It.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(It.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(be.x,be.y,be.width,be.height),Lt===0&&(E.matrix.copy(ne.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),rt===!0&&E.cameras.push(ne)}const Tt=s.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){const Lt=f.getDepthInformation(mt[0]);Lt&&Lt.isValid&&Lt.texture&&_.init(t,Lt,s.renderState)}}for(let mt=0;mt<x.length;mt++){const rt=v[mt],Tt=x[mt];rt!==null&&Tt!==void 0&&Tt.update(rt,tt,h||a)}vt&&vt(q,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),m=null}const re=new Qg;re.setAnimationLoop(zt),this.setAnimationLoop=function(q){vt=q},this.dispose=function(){}}}const vs=new Ii,SA=new Xt;function wA(n,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,$g(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,y,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),f(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p)):p.isMeshStandardMaterial?(r(g,p),c(g,p),p.isMeshPhysicalMaterial&&d(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,y,x):p.isSpriteMaterial?h(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Tn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Tn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const y=t.get(p),x=y.envMap,v=y.envMapRotation;x&&(g.envMap.value=x,vs.copy(v),vs.x*=-1,vs.y*=-1,vs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),g.envMapRotation.value.setFromMatrix4(SA.makeRotationFromEuler(vs)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,y,x){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=x*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function c(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Tn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const y=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function TA(n,t,e,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const v=x.program;i.uniformBlockBinding(y,v)}function h(y,x){let v=s[y.id];v===void 0&&(m(y),v=u(y),s[y.id]=v,y.addEventListener("dispose",g));const T=x.program;i.updateUBOMapping(y,T);const b=t.render.frame;r[y.id]!==b&&(c(y),r[y.id]=b)}function u(y){const x=f();y.__bindingPointIndex=x;const v=n.createBuffer(),T=y.__size,b=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,T,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,v),v}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(y){const x=s[y.id],v=y.uniforms,T=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let b=0,R=v.length;b<R;b++){const L=Array.isArray(v[b])?v[b]:[v[b]];for(let S=0,E=L.length;S<E;S++){const P=L[S];if(d(P,b,S,T)===!0){const F=P.__offset,I=Array.isArray(P.value)?P.value:[P.value];let z=0;for(let X=0;X<I.length;X++){const H=I[X],Y=_(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,F+z,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,z),z+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(y,x,v,T){const b=y.value,R=x+"_"+v;if(T[R]===void 0)return typeof b=="number"||typeof b=="boolean"?T[R]=b:T[R]=b.clone(),!0;{const L=T[R];if(typeof b=="number"||typeof b=="boolean"){if(L!==b)return T[R]=b,!0}else if(L.equals(b)===!1)return L.copy(b),!0}return!1}function m(y){const x=y.uniforms;let v=0;const T=16;for(let R=0,L=x.length;R<L;R++){const S=Array.isArray(x[R])?x[R]:[x[R]];for(let E=0,P=S.length;E<P;E++){const F=S[E],I=Array.isArray(F.value)?F.value:[F.value];for(let z=0,X=I.length;z<X;z++){const H=I[z],Y=_(H),k=v%T,et=k%Y.boundary,ht=k+et;v+=et,ht!==0&&T-ht<Y.storage&&(v+=T-ht),F.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=Y.storage}}}const b=v%T;return b>0&&(v+=T-b),y.__size=v,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function g(y){const x=y.target;x.removeEventListener("dispose",g);const v=a.indexOf(x.__bindingPointIndex);a.splice(v,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const y in s)n.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:h,dispose:p}}class s0{constructor(t={}){const{canvas:e=lS(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:c=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const y=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Dn,this.toneMapping=ss,this.toneMappingExposure=1;const v=this;let T=!1,b=0,R=0,L=null,S=-1,E=null;const P=new te,F=new te;let I=null;const z=new bt(0);let X=0,H=e.width,Y=e.height,k=1,et=null,ht=null;const vt=new te(0,0,H,Y),zt=new te(0,0,H,Y);let re=!1;const q=new ih;let tt=!1,mt=!1;const rt=new Xt,Tt=new Xt,Lt=new C,It=new te,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ne=!1;function Oe(){return L===null?k:1}let U=i;function Un(w,N){return e.getContext(w,N)}try{const w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${cf}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",ut,!1),U===null){const N="webgl2";if(U=Un(N,w),U===null)throw Un(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let jt,Zt,Rt,Me,At,A,M,G,$,Q,j,Et,ct,pt,ie,nt,gt,Ct,Dt,_t,$t,Wt,ve,D;function lt(){jt=new Lb(U),jt.init(),Wt=new gA(U,jt),Zt=new Tb(U,jt,t,Wt),Rt=new dA(U,jt),Zt.reverseDepthBuffer&&c&&Rt.buffers.depth.setReversed(!0),Me=new Nb(U),At=new J2,A=new mA(U,jt,Rt,At,Zt,Wt,Me),M=new Ab(v),G=new Pb(v),$=new kS(U),ve=new Sb(U,$),Q=new Ib(U,$,Me,ve),j=new Ub(U,Q,$,Me),Dt=new Ob(U,Zt,A),nt=new bb(At),Et=new K2(v,M,G,jt,Zt,ve,nt),ct=new wA(v,At),pt=new tA,ie=new aA(jt),Ct=new Eb(v,M,G,Rt,j,d,l),gt=new uA(v,j,Zt),D=new TA(U,Me,Zt,Rt),_t=new wb(U,jt,Me),$t=new Db(U,jt,Me),Me.programs=Et.programs,v.capabilities=Zt,v.extensions=jt,v.properties=At,v.renderLists=pt,v.shadowMap=gt,v.state=Rt,v.info=Me}lt();const W=new EA(v,U);this.xr=W,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const w=jt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=jt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(w){w!==void 0&&(k=w,this.setSize(H,Y,!1))},this.getSize=function(w){return w.set(H,Y)},this.setSize=function(w,N,B=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=w,Y=N,e.width=Math.floor(w*k),e.height=Math.floor(N*k),B===!0&&(e.style.width=w+"px",e.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(H*k,Y*k).floor()},this.setDrawingBufferSize=function(w,N,B){H=w,Y=N,k=B,e.width=Math.floor(w*B),e.height=Math.floor(N*B),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(vt)},this.setViewport=function(w,N,B,V){w.isVector4?vt.set(w.x,w.y,w.z,w.w):vt.set(w,N,B,V),Rt.viewport(P.copy(vt).multiplyScalar(k).round())},this.getScissor=function(w){return w.copy(zt)},this.setScissor=function(w,N,B,V){w.isVector4?zt.set(w.x,w.y,w.z,w.w):zt.set(w,N,B,V),Rt.scissor(F.copy(zt).multiplyScalar(k).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(w){Rt.setScissorTest(re=w)},this.setOpaqueSort=function(w){et=w},this.setTransparentSort=function(w){ht=w},this.getClearColor=function(w){return w.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(w=!0,N=!0,B=!0){let V=0;if(w){let O=!1;if(L!==null){const it=L.texture.format;O=it===Ql||it===Jl||it===Kl}if(O){const it=L.texture.type,ft=it===ue||it===Li||it===os||it===ls||it===Za||it===$a,xt=Ct.getClearColor(),yt=Ct.getClearAlpha(),Ot=xt.r,Vt=xt.g,Mt=xt.b;ft?(m[0]=Ot,m[1]=Vt,m[2]=Mt,m[3]=yt,U.clearBufferuiv(U.COLOR,0,m)):(_[0]=Ot,_[1]=Vt,_[2]=Mt,_[3]=yt,U.clearBufferiv(U.COLOR,0,_))}else V|=U.COLOR_BUFFER_BIT}N&&(V|=U.DEPTH_BUFFER_BIT),B&&(V|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),pt.dispose(),ie.dispose(),At.dispose(),M.dispose(),G.dispose(),j.dispose(),ve.dispose(),D.dispose(),Et.dispose(),W.dispose(),W.removeEventListener("sessionstart",Yf),W.removeEventListener("sessionend",qf),us.stop()};function K(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const w=Me.autoReset,N=gt.enabled,B=gt.autoUpdate,V=gt.needsUpdate,O=gt.type;lt(),Me.autoReset=w,gt.enabled=N,gt.autoUpdate=B,gt.needsUpdate=V,gt.type=O}function ut(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function kt(w){const N=w.target;N.removeEventListener("dispose",kt),Pe(N)}function Pe(w){on(w),At.remove(w)}function on(w){const N=At.get(w).programs;N!==void 0&&(N.forEach(function(B){Et.releaseProgram(B)}),w.isShaderMaterial&&Et.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,B,V,O,it){N===null&&(N=be);const ft=O.isMesh&&O.matrixWorld.determinant()<0,xt=d_(w,N,B,V,O);Rt.setMaterial(V,ft);let yt=B.index,Ot=1;if(V.wireframe===!0){if(yt=Q.getWireframeAttribute(B),yt===void 0)return;Ot=2}const Vt=B.drawRange,Mt=B.attributes.position;let se=Vt.start*Ot,xe=(Vt.start+Vt.count)*Ot;it!==null&&(se=Math.max(se,it.start*Ot),xe=Math.min(xe,(it.start+it.count)*Ot)),yt!==null?(se=Math.max(se,0),xe=Math.min(xe,yt.count)):Mt!=null&&(se=Math.max(se,0),xe=Math.min(xe,Mt.count));const Ee=xe-se;if(Ee<0||Ee===1/0)return;ve.setup(O,V,xt,B,yt);let vn,oe=_t;if(yt!==null&&(vn=$.get(yt),oe=$t,oe.setIndex(vn)),O.isMesh)V.wireframe===!0?(Rt.setLineWidth(V.wireframeLinewidth*Oe()),oe.setMode(U.LINES)):oe.setMode(U.TRIANGLES);else if(O.isLine){let St=V.linewidth;St===void 0&&(St=1),Rt.setLineWidth(St*Oe()),O.isLineSegments?oe.setMode(U.LINES):O.isLineLoop?oe.setMode(U.LINE_LOOP):oe.setMode(U.LINE_STRIP)}else O.isPoints?oe.setMode(U.POINTS):O.isSprite&&oe.setMode(U.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)oe.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(jt.get("WEBGL_multi_draw"))oe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const St=O._multiDrawStarts,gi=O._multiDrawCounts,le=O._multiDrawCount,Yn=yt?$.get(yt).bytesPerElement:1,Xs=At.get(V).currentProgram.getUniforms();for(let Cn=0;Cn<le;Cn++)Xs.setValue(U,"_gl_DrawID",Cn),oe.render(St[Cn]/Yn,gi[Cn])}else if(O.isInstancedMesh)oe.renderInstances(se,Ee,O.count);else if(B.isInstancedBufferGeometry){const St=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,gi=Math.min(B.instanceCount,St);oe.renderInstances(se,Ee,gi)}else oe.render(se,Ee)};function de(w,N,B){w.transparent===!0&&w.side===wi&&w.forceSinglePass===!1?(w.side=Tn,w.needsUpdate=!0,so(w,N,B),w.side=Pi,w.needsUpdate=!0,so(w,N,B),w.side=wi):so(w,N,B)}this.compile=function(w,N,B=null){B===null&&(B=w),p=ie.get(B),p.init(N),x.push(p),B.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),w!==B&&w.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const V=new Set;return w.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const it=O.material;if(it)if(Array.isArray(it))for(let ft=0;ft<it.length;ft++){const xt=it[ft];de(xt,B,O),V.add(xt)}else de(it,B,O),V.add(it)}),x.pop(),p=null,V},this.compileAsync=function(w,N,B=null){const V=this.compile(w,N,B);return new Promise(O=>{function it(){if(V.forEach(function(ft){At.get(ft).currentProgram.isReady()&&V.delete(ft)}),V.size===0){O(w);return}setTimeout(it,10)}jt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let Xn=null;function mi(w){Xn&&Xn(w)}function Yf(){us.stop()}function qf(){us.start()}const us=new Qg;us.setAnimationLoop(mi),typeof self<"u"&&us.setContext(self),this.setAnimationLoop=function(w){Xn=w,W.setAnimationLoop(w),w===null?us.stop():us.start()},W.addEventListener("sessionstart",Yf),W.addEventListener("sessionend",qf),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(N),N=W.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,N,L),p=ie.get(w,x.length),p.init(N),x.push(p),Tt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),q.setFromProjectionMatrix(Tt),mt=this.localClippingEnabled,tt=nt.init(this.clippingPlanes,mt),g=pt.get(w,y.length),g.init(),y.push(g),W.enabled===!0&&W.isPresenting===!0){const it=v.xr.getDepthSensingMesh();it!==null&&fh(it,N,-1/0,v.sortObjects)}fh(w,N,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(et,ht),ne=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,ne&&Ct.addToRenderList(g,w),this.info.render.frame++,tt===!0&&nt.beginShadows();const B=p.state.shadowsArray;gt.render(B,w,N),tt===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=g.opaque,O=g.transmissive;if(p.setupLights(),N.isArrayCamera){const it=N.cameras;if(O.length>0)for(let ft=0,xt=it.length;ft<xt;ft++){const yt=it[ft];Zf(V,O,w,yt)}ne&&Ct.render(w);for(let ft=0,xt=it.length;ft<xt;ft++){const yt=it[ft];jf(g,w,yt,yt.viewport)}}else O.length>0&&Zf(V,O,w,N),ne&&Ct.render(w),jf(g,w,N);L!==null&&(A.updateMultisampleRenderTarget(L),A.updateRenderTargetMipmap(L)),w.isScene===!0&&w.onAfterRender(v,w,N),ve.resetDefaultState(),S=-1,E=null,x.pop(),x.length>0?(p=x[x.length-1],tt===!0&&nt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function fh(w,N,B,V){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)B=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||q.intersectsSprite(w)){V&&It.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Tt);const ft=j.update(w),xt=w.material;xt.visible&&g.push(w,ft,xt,B,It.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||q.intersectsObject(w))){const ft=j.update(w),xt=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),It.copy(w.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),It.copy(ft.boundingSphere.center)),It.applyMatrix4(w.matrixWorld).applyMatrix4(Tt)),Array.isArray(xt)){const yt=ft.groups;for(let Ot=0,Vt=yt.length;Ot<Vt;Ot++){const Mt=yt[Ot],se=xt[Mt.materialIndex];se&&se.visible&&g.push(w,ft,se,B,It.z,Mt)}}else xt.visible&&g.push(w,ft,xt,B,It.z,null)}}const it=w.children;for(let ft=0,xt=it.length;ft<xt;ft++)fh(it[ft],N,B,V)}function jf(w,N,B,V){const O=w.opaque,it=w.transmissive,ft=w.transparent;p.setupLightsView(B),tt===!0&&nt.setGlobalState(v.clippingPlanes,B),V&&Rt.viewport(P.copy(V)),O.length>0&&io(O,N,B),it.length>0&&io(it,N,B),ft.length>0&&io(ft,N,B),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function Zf(w,N,B,V){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new bn(1,1,{generateMipmaps:!0,type:jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float")?Ni:ue,minFilter:Cs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const it=p.state.transmissionRenderTarget[V.id],ft=V.viewport||P;it.setSize(ft.z,ft.w);const xt=v.getRenderTarget();v.setRenderTarget(it),v.getClearColor(z),X=v.getClearAlpha(),X<1&&v.setClearColor(16777215,.5),v.clear(),ne&&Ct.render(B);const yt=v.toneMapping;v.toneMapping=ss;const Ot=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),tt===!0&&nt.setGlobalState(v.clippingPlanes,V),io(w,B,V),A.updateMultisampleRenderTarget(it),A.updateRenderTargetMipmap(it),jt.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let Mt=0,se=N.length;Mt<se;Mt++){const xe=N[Mt],Ee=xe.object,vn=xe.geometry,oe=xe.material,St=xe.group;if(oe.side===wi&&Ee.layers.test(V.layers)){const gi=oe.side;oe.side=Tn,oe.needsUpdate=!0,$f(Ee,B,V,vn,oe,St),oe.side=gi,oe.needsUpdate=!0,Vt=!0}}Vt===!0&&(A.updateMultisampleRenderTarget(it),A.updateRenderTargetMipmap(it))}v.setRenderTarget(xt),v.setClearColor(z,X),Ot!==void 0&&(V.viewport=Ot),v.toneMapping=yt}function io(w,N,B){const V=N.isScene===!0?N.overrideMaterial:null;for(let O=0,it=w.length;O<it;O++){const ft=w[O],xt=ft.object,yt=ft.geometry,Ot=V===null?ft.material:V,Vt=ft.group;xt.layers.test(B.layers)&&$f(xt,N,B,yt,Ot,Vt)}}function $f(w,N,B,V,O,it){w.onBeforeRender(v,N,B,V,O,it),w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.onBeforeRender(v,N,B,V,w,it),O.transparent===!0&&O.side===wi&&O.forceSinglePass===!1?(O.side=Tn,O.needsUpdate=!0,v.renderBufferDirect(B,N,V,O,w,it),O.side=Pi,O.needsUpdate=!0,v.renderBufferDirect(B,N,V,O,w,it),O.side=wi):v.renderBufferDirect(B,N,V,O,w,it),w.onAfterRender(v,N,B,V,O,it)}function so(w,N,B){N.isScene!==!0&&(N=be);const V=At.get(w),O=p.state.lights,it=p.state.shadowsArray,ft=O.state.version,xt=Et.getParameters(w,O.state,it,N,B),yt=Et.getProgramCacheKey(xt);let Ot=V.programs;V.environment=w.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(w.isMeshStandardMaterial?G:M).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,Ot===void 0&&(w.addEventListener("dispose",kt),Ot=new Map,V.programs=Ot);let Vt=Ot.get(yt);if(Vt!==void 0){if(V.currentProgram===Vt&&V.lightsStateVersion===ft)return Jf(w,xt),Vt}else xt.uniforms=Et.getUniforms(w),w.onBeforeCompile(xt,v),Vt=Et.acquireProgram(xt,yt),Ot.set(yt,Vt),V.uniforms=xt.uniforms;const Mt=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Mt.clippingPlanes=nt.uniform),Jf(w,xt),V.needsLights=m_(w),V.lightsStateVersion=ft,V.needsLights&&(Mt.ambientLightColor.value=O.state.ambient,Mt.lightProbe.value=O.state.probe,Mt.directionalLights.value=O.state.directional,Mt.directionalLightShadows.value=O.state.directionalShadow,Mt.spotLights.value=O.state.spot,Mt.spotLightShadows.value=O.state.spotShadow,Mt.rectAreaLights.value=O.state.rectArea,Mt.ltc_1.value=O.state.rectAreaLTC1,Mt.ltc_2.value=O.state.rectAreaLTC2,Mt.pointLights.value=O.state.point,Mt.pointLightShadows.value=O.state.pointShadow,Mt.hemisphereLights.value=O.state.hemi,Mt.directionalShadowMap.value=O.state.directionalShadowMap,Mt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Mt.spotShadowMap.value=O.state.spotShadowMap,Mt.spotLightMatrix.value=O.state.spotLightMatrix,Mt.spotLightMap.value=O.state.spotLightMap,Mt.pointShadowMap.value=O.state.pointShadowMap,Mt.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=Vt,V.uniformsList=null,Vt}function Kf(w){if(w.uniformsList===null){const N=w.currentProgram.getUniforms();w.uniformsList=hl.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function Jf(w,N){const B=At.get(w);B.outputColorSpace=N.outputColorSpace,B.batching=N.batching,B.batchingColor=N.batchingColor,B.instancing=N.instancing,B.instancingColor=N.instancingColor,B.instancingMorph=N.instancingMorph,B.skinning=N.skinning,B.morphTargets=N.morphTargets,B.morphNormals=N.morphNormals,B.morphColors=N.morphColors,B.morphTargetsCount=N.morphTargetsCount,B.numClippingPlanes=N.numClippingPlanes,B.numIntersection=N.numClipIntersection,B.vertexAlphas=N.vertexAlphas,B.vertexTangents=N.vertexTangents,B.toneMapping=N.toneMapping}function d_(w,N,B,V,O){N.isScene!==!0&&(N=be),A.resetTextureUnits();const it=N.fog,ft=V.isMeshStandardMaterial?N.environment:null,xt=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Vs,yt=(V.isMeshStandardMaterial?G:M).get(V.envMap||ft),Ot=V.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Vt=!!B.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Mt=!!B.morphAttributes.position,se=!!B.morphAttributes.normal,xe=!!B.morphAttributes.color;let Ee=ss;V.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Ee=v.toneMapping);const vn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,oe=vn!==void 0?vn.length:0,St=At.get(V),gi=p.state.lights;if(tt===!0&&(mt===!0||w!==E)){const Fn=w===E&&V.id===S;nt.setState(V,w,Fn)}let le=!1;V.version===St.__version?(St.needsLights&&St.lightsStateVersion!==gi.state.version||St.outputColorSpace!==xt||O.isBatchedMesh&&St.batching===!1||!O.isBatchedMesh&&St.batching===!0||O.isBatchedMesh&&St.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&St.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&St.instancing===!1||!O.isInstancedMesh&&St.instancing===!0||O.isSkinnedMesh&&St.skinning===!1||!O.isSkinnedMesh&&St.skinning===!0||O.isInstancedMesh&&St.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&St.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&St.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&St.instancingMorph===!1&&O.morphTexture!==null||St.envMap!==yt||V.fog===!0&&St.fog!==it||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==nt.numPlanes||St.numIntersection!==nt.numIntersection)||St.vertexAlphas!==Ot||St.vertexTangents!==Vt||St.morphTargets!==Mt||St.morphNormals!==se||St.morphColors!==xe||St.toneMapping!==Ee||St.morphTargetsCount!==oe)&&(le=!0):(le=!0,St.__version=V.version);let Yn=St.currentProgram;le===!0&&(Yn=so(V,N,O));let Xs=!1,Cn=!1,jr=!1;const Se=Yn.getUniforms(),ai=St.uniforms;if(Rt.useProgram(Yn.program)&&(Xs=!0,Cn=!0,jr=!0),V.id!==S&&(S=V.id,Cn=!0),Xs||E!==w){Rt.buffers.depth.getReversed()?(rt.copy(w.projectionMatrix),cS(rt),uS(rt),Se.setValue(U,"projectionMatrix",rt)):Se.setValue(U,"projectionMatrix",w.projectionMatrix),Se.setValue(U,"viewMatrix",w.matrixWorldInverse);const Ui=Se.map.cameraPosition;Ui!==void 0&&Ui.setValue(U,Lt.setFromMatrixPosition(w.matrixWorld)),Zt.logarithmicDepthBuffer&&Se.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Se.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),E!==w&&(E=w,Cn=!0,jr=!0)}if(O.isSkinnedMesh){Se.setOptional(U,O,"bindMatrix"),Se.setOptional(U,O,"bindMatrixInverse");const Fn=O.skeleton;Fn&&(Fn.boneTexture===null&&Fn.computeBoneTexture(),Se.setValue(U,"boneTexture",Fn.boneTexture,A))}O.isBatchedMesh&&(Se.setOptional(U,O,"batchingTexture"),Se.setValue(U,"batchingTexture",O._matricesTexture,A),Se.setOptional(U,O,"batchingIdTexture"),Se.setValue(U,"batchingIdTexture",O._indirectTexture,A),Se.setOptional(U,O,"batchingColorTexture"),O._colorsTexture!==null&&Se.setValue(U,"batchingColorTexture",O._colorsTexture,A));const Zr=B.morphAttributes;if((Zr.position!==void 0||Zr.normal!==void 0||Zr.color!==void 0)&&Dt.update(O,B,Yn),(Cn||St.receiveShadow!==O.receiveShadow)&&(St.receiveShadow=O.receiveShadow,Se.setValue(U,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(ai.envMap.value=yt,ai.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(ai.envMapIntensity.value=N.environmentIntensity),Cn&&(Se.setValue(U,"toneMappingExposure",v.toneMappingExposure),St.needsLights&&p_(ai,jr),it&&V.fog===!0&&ct.refreshFogUniforms(ai,it),ct.refreshMaterialUniforms(ai,V,k,Y,p.state.transmissionRenderTarget[w.id]),hl.upload(U,Kf(St),ai,A)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(hl.upload(U,Kf(St),ai,A),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Se.setValue(U,"center",O.center),Se.setValue(U,"modelViewMatrix",O.modelViewMatrix),Se.setValue(U,"normalMatrix",O.normalMatrix),Se.setValue(U,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Fn=V.uniformsGroups;for(let Ui=0,Fi=Fn.length;Ui<Fi;Ui++){const Qf=Fn[Ui];D.update(Qf,Yn),D.bind(Qf,Yn)}}return Yn}function p_(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function m_(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(w,N,B){At.get(w.texture).__webglTexture=N,At.get(w.depthTexture).__webglTexture=B;const V=At.get(w);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=B===void 0,V.__autoAllocateDepthBuffer||jt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,N){const B=At.get(w);B.__webglFramebuffer=N,B.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,B=0){L=w,b=N,R=B;let V=!0,O=null,it=!1,ft=!1;if(w){const yt=At.get(w);if(yt.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(U.FRAMEBUFFER,null),V=!1;else if(yt.__webglFramebuffer===void 0)A.setupRenderTarget(w);else if(yt.__hasExternalTextures)A.rebindTextures(w,At.get(w.texture).__webglTexture,At.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Mt=w.depthTexture;if(yt.__boundDepthTexture!==Mt){if(Mt!==null&&At.has(Mt)&&(w.width!==Mt.image.width||w.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(w)}}const Ot=w.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(ft=!0);const Vt=At.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Vt[N])?O=Vt[N][B]:O=Vt[N],it=!0):w.samples>0&&A.useMultisampledRTT(w)===!1?O=At.get(w).__webglMultisampledFramebuffer:Array.isArray(Vt)?O=Vt[B]:O=Vt,P.copy(w.viewport),F.copy(w.scissor),I=w.scissorTest}else P.copy(vt).multiplyScalar(k).floor(),F.copy(zt).multiplyScalar(k).floor(),I=re;if(Rt.bindFramebuffer(U.FRAMEBUFFER,O)&&V&&Rt.drawBuffers(w,O),Rt.viewport(P),Rt.scissor(F),Rt.setScissorTest(I),it){const yt=At.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+N,yt.__webglTexture,B)}else if(ft){const yt=At.get(w.texture),Ot=N||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,yt.__webglTexture,B||0,Ot)}S=-1},this.readRenderTargetPixels=function(w,N,B,V,O,it,ft){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=At.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ft!==void 0&&(xt=xt[ft]),xt){Rt.bindFramebuffer(U.FRAMEBUFFER,xt);try{const yt=w.texture,Ot=yt.format,Vt=yt.type;if(!Zt.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Zt.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-V&&B>=0&&B<=w.height-O&&U.readPixels(N,B,V,O,Wt.convert(Ot),Wt.convert(Vt),it)}finally{const yt=L!==null?At.get(L).__webglFramebuffer:null;Rt.bindFramebuffer(U.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(w,N,B,V,O,it,ft){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=At.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ft!==void 0&&(xt=xt[ft]),xt){const yt=w.texture,Ot=yt.format,Vt=yt.type;if(!Zt.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Zt.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=w.width-V&&B>=0&&B<=w.height-O){Rt.bindFramebuffer(U.FRAMEBUFFER,xt);const Mt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Mt),U.bufferData(U.PIXEL_PACK_BUFFER,it.byteLength,U.STREAM_READ),U.readPixels(N,B,V,O,Wt.convert(Ot),Wt.convert(Vt),0);const se=L!==null?At.get(L).__webglFramebuffer:null;Rt.bindFramebuffer(U.FRAMEBUFFER,se);const xe=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await hS(U,xe,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Mt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,it),U.deleteBuffer(Mt),U.deleteSync(xe),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,N=null,B=0){w.isTexture!==!0&&(fa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,w=arguments[1]);const V=Math.pow(2,-B),O=Math.floor(w.image.width*V),it=Math.floor(w.image.height*V),ft=N!==null?N.x:0,xt=N!==null?N.y:0;A.setTexture2D(w,0),U.copyTexSubImage2D(U.TEXTURE_2D,B,0,0,ft,xt,O,it),Rt.unbindTexture()},this.copyTextureToTexture=function(w,N,B=null,V=null,O=0){w.isTexture!==!0&&(fa("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1],N=arguments[2],O=arguments[3]||0,B=null);let it,ft,xt,yt,Ot,Vt,Mt,se,xe;const Ee=w.isCompressedTexture?w.mipmaps[O]:w.image;B!==null?(it=B.max.x-B.min.x,ft=B.max.y-B.min.y,xt=B.isBox3?B.max.z-B.min.z:1,yt=B.min.x,Ot=B.min.y,Vt=B.isBox3?B.min.z:0):(it=Ee.width,ft=Ee.height,xt=Ee.depth||1,yt=0,Ot=0,Vt=0),V!==null?(Mt=V.x,se=V.y,xe=V.z):(Mt=0,se=0,xe=0);const vn=Wt.convert(N.format),oe=Wt.convert(N.type);let St;N.isData3DTexture?(A.setTexture3D(N,0),St=U.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(A.setTexture2DArray(N,0),St=U.TEXTURE_2D_ARRAY):(A.setTexture2D(N,0),St=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,N.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,N.unpackAlignment);const gi=U.getParameter(U.UNPACK_ROW_LENGTH),le=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Yn=U.getParameter(U.UNPACK_SKIP_PIXELS),Xs=U.getParameter(U.UNPACK_SKIP_ROWS),Cn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Ee.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ee.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,yt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ot),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Vt);const jr=w.isDataArrayTexture||w.isData3DTexture,Se=N.isDataArrayTexture||N.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const ai=At.get(w),Zr=At.get(N),Fn=At.get(ai.__renderTarget),Ui=At.get(Zr.__renderTarget);Rt.bindFramebuffer(U.READ_FRAMEBUFFER,Fn.__webglFramebuffer),Rt.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ui.__webglFramebuffer);for(let Fi=0;Fi<xt;Fi++)jr&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,At.get(w).__webglTexture,O,Vt+Fi),w.isDepthTexture?(Se&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,At.get(N).__webglTexture,O,xe+Fi),U.blitFramebuffer(yt,Ot,it,ft,Mt,se,it,ft,U.DEPTH_BUFFER_BIT,U.NEAREST)):Se?U.copyTexSubImage3D(St,O,Mt,se,xe+Fi,yt,Ot,it,ft):U.copyTexSubImage2D(St,O,Mt,se,xe+Fi,yt,Ot,it,ft);Rt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Se?w.isDataTexture||w.isData3DTexture?U.texSubImage3D(St,O,Mt,se,xe,it,ft,xt,vn,oe,Ee.data):N.isCompressedArrayTexture?U.compressedTexSubImage3D(St,O,Mt,se,xe,it,ft,xt,vn,Ee.data):U.texSubImage3D(St,O,Mt,se,xe,it,ft,xt,vn,oe,Ee):w.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,O,Mt,se,it,ft,vn,oe,Ee.data):w.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,O,Mt,se,Ee.width,Ee.height,vn,Ee.data):U.texSubImage2D(U.TEXTURE_2D,O,Mt,se,it,ft,vn,oe,Ee);U.pixelStorei(U.UNPACK_ROW_LENGTH,gi),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,le),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Yn),U.pixelStorei(U.UNPACK_SKIP_ROWS,Xs),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Cn),O===0&&N.generateMipmaps&&U.generateMipmap(St),Rt.unbindTexture()},this.copyTextureToTexture3D=function(w,N,B=null,V=null,O=0){return w.isTexture!==!0&&(fa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,V=arguments[1]||null,w=arguments[2],N=arguments[3],O=arguments[4]||0),fa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,N,B,V,O)},this.initRenderTarget=function(w){At.get(w).__webglFramebuffer===void 0&&A.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),Rt.unbindTexture()},this.resetState=function(){b=0,R=0,L=null,Rt.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}class yf extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ah extends Ze{constructor(t=null,e=1,i=1,s,r,a,o,l,h=Ge,u=Ge,f,c){super(null,a,o,l,h,u,s,r,f,c),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class r0 extends Ka{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Cl=new C,Pl=new C,Ip=new Xt,ea=new Hs,No=new Oi,qh=new C,Dp=new C;class bA extends an{constructor(t=new _n,e=new r0){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Cl.fromBufferAttribute(e,s-1),Pl.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Cl.distanceTo(Pl);t.setAttribute("lineDistance",new ze(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),No.copy(i.boundingSphere),No.applyMatrix4(s),No.radius+=r,t.ray.intersectsSphere(No)===!1)return;Ip.copy(s).invert(),ea.copy(t.ray).applyMatrix4(Ip);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=this.isLineSegments?2:1,u=i.index,c=i.attributes.position;if(u!==null){const d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let _=d,g=m-1;_<g;_+=h){const p=u.getX(_),y=u.getX(_+1),x=Oo(this,t,ea,l,p,y);x&&e.push(x)}if(this.isLineLoop){const _=u.getX(m-1),g=u.getX(d),p=Oo(this,t,ea,l,_,g);p&&e.push(p)}}else{const d=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let _=d,g=m-1;_<g;_+=h){const p=Oo(this,t,ea,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=Oo(this,t,ea,l,m-1,d);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Oo(n,t,e,i,s,r){const a=n.geometry.attributes.position;if(Cl.fromBufferAttribute(a,s),Pl.fromBufferAttribute(a,r),e.distanceSqToSegment(Cl,Pl,qh,Dp)>i)return;qh.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(qh);if(!(l<t.near||l>t.far))return{distance:l,point:Dp.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Np=new C,Op=new C;class AA extends bA{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Np.fromBufferAttribute(e,s),Op.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Np.distanceTo(Op);t.setAttribute("lineDistance",new ze(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class RA extends Ze{constructor(t,e,i,s,r,a,o,l,h){super(t,e,i,s,r,a,o,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}const CA={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=a0(n,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,h,u,f,c,d;if(i&&(r=NA(n,t,r,e)),n.length>80*e){o=h=n[0],l=u=n[1];for(let m=e;m<s;m+=e)f=n[m],c=n[m+1],f<o&&(o=f),c<l&&(l=c),f>h&&(h=f),c>u&&(u=c);d=Math.max(h-o,u-l),d=d!==0?32767/d:0}return Da(r,a,e,o,l,d,0),a}};function a0(n,t,e,i,s){let r,a;if(s===XA(n,t,e,i)>0)for(r=t;r<e;r+=i)a=Up(r,n[r],n[r+1],a);else for(r=e-i;r>=t;r-=i)a=Up(r,n[r],n[r+1],a);return a&&oh(a,a.next)&&(Oa(a),a=a.next),a}function Bs(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(oh(e,e.next)||Ce(e.prev,e,e.next)===0)){if(Oa(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Da(n,t,e,i,s,r,a){if(!n)return;!a&&r&&BA(n,i,s,r);let o=n,l,h;for(;n.prev!==n.next;){if(l=n.prev,h=n.next,r?LA(n,i,s,r):PA(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(h.i/e|0),Oa(n),n=h.next,o=h.next;continue}if(n=h,n===o){a?a===1?(n=IA(Bs(n),t,e),Da(n,t,e,i,s,r,2)):a===2&&DA(n,t,e,i,s,r):Da(Bs(n),t,e,i,s,r,1);break}}}function PA(n){const t=n.prev,e=n,i=n.next;if(Ce(t,e,i)>=0)return!1;const s=t.x,r=e.x,a=i.x,o=t.y,l=e.y,h=i.y,u=s<r?s<a?s:a:r<a?r:a,f=o<l?o<h?o:h:l<h?l:h,c=s>r?s>a?s:a:r>a?r:a,d=o>l?o>h?o:h:l>h?l:h;let m=i.next;for(;m!==t;){if(m.x>=u&&m.x<=c&&m.y>=f&&m.y<=d&&Sr(s,o,r,l,a,h,m.x,m.y)&&Ce(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function LA(n,t,e,i){const s=n.prev,r=n,a=n.next;if(Ce(s,r,a)>=0)return!1;const o=s.x,l=r.x,h=a.x,u=s.y,f=r.y,c=a.y,d=o<l?o<h?o:h:l<h?l:h,m=u<f?u<c?u:c:f<c?f:c,_=o>l?o>h?o:h:l>h?l:h,g=u>f?u>c?u:c:f>c?f:c,p=Eu(d,m,t,e,i),y=Eu(_,g,t,e,i);let x=n.prevZ,v=n.nextZ;for(;x&&x.z>=p&&v&&v.z<=y;){if(x.x>=d&&x.x<=_&&x.y>=m&&x.y<=g&&x!==s&&x!==a&&Sr(o,u,l,f,h,c,x.x,x.y)&&Ce(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=d&&v.x<=_&&v.y>=m&&v.y<=g&&v!==s&&v!==a&&Sr(o,u,l,f,h,c,v.x,v.y)&&Ce(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=_&&x.y>=m&&x.y<=g&&x!==s&&x!==a&&Sr(o,u,l,f,h,c,x.x,x.y)&&Ce(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=y;){if(v.x>=d&&v.x<=_&&v.y>=m&&v.y<=g&&v!==s&&v!==a&&Sr(o,u,l,f,h,c,v.x,v.y)&&Ce(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function IA(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!oh(s,r)&&o0(s,i,i.next,r)&&Na(s,r)&&Na(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),Oa(i),Oa(i.next),i=n=r),i=i.next}while(i!==n);return Bs(i)}function DA(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&VA(a,o)){let l=l0(a,o);a=Bs(a,a.next),l=Bs(l,l.next),Da(a,t,e,i,s,r,0),Da(l,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function NA(n,t,e,i){const s=[];let r,a,o,l,h;for(r=0,a=t.length;r<a;r++)o=t[r]*i,l=r<a-1?t[r+1]*i:n.length,h=a0(n,o,l,i,!1),h===h.next&&(h.steiner=!0),s.push(kA(h));for(s.sort(OA),r=0;r<s.length;r++)e=UA(s[r],e);return e}function OA(n,t){return n.x-t.x}function UA(n,t){const e=FA(n,t);if(!e)return t;const i=l0(e,n);return Bs(i,i.next),Bs(e,e.next)}function FA(n,t){let e=t,i=-1/0,s;const r=n.x,a=n.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const c=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(c<=r&&c>i&&(i=c,s=e.x<e.next.x?e:e.next,c===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,l=s.x,h=s.y;let u=1/0,f;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Sr(a<h?r:i,a,l,h,a<h?i:r,a,e.x,e.y)&&(f=Math.abs(a-e.y)/(r-e.x),Na(e,n)&&(f<u||f===u&&(e.x>s.x||e.x===s.x&&GA(s,e)))&&(s=e,u=f)),e=e.next;while(e!==o);return s}function GA(n,t){return Ce(n.prev,n,t.prev)<0&&Ce(t.next,n,n.next)<0}function BA(n,t,e,i){let s=n;do s.z===0&&(s.z=Eu(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,zA(s)}function zA(n){let t,e,i,s,r,a,o,l,h=1;do{for(e=n,n=null,r=null,a=0;e;){for(a++,i=e,o=0,t=0;t<h&&(o++,i=i.nextZ,!!i);t++);for(l=h;o>0||l>0&&i;)o!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,o--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,h*=2}while(a>1);return n}function Eu(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function kA(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Sr(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function VA(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!HA(n,t)&&(Na(n,t)&&Na(t,n)&&WA(n,t)&&(Ce(n.prev,n,t.prev)||Ce(n,t.prev,t))||oh(n,t)&&Ce(n.prev,n,n.next)>0&&Ce(t.prev,t,t.next)>0)}function Ce(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function oh(n,t){return n.x===t.x&&n.y===t.y}function o0(n,t,e,i){const s=Fo(Ce(n,t,e)),r=Fo(Ce(n,t,i)),a=Fo(Ce(e,i,n)),o=Fo(Ce(e,i,t));return!!(s!==r&&a!==o||s===0&&Uo(n,e,t)||r===0&&Uo(n,i,t)||a===0&&Uo(e,n,i)||o===0&&Uo(e,t,i))}function Uo(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Fo(n){return n>0?1:n<0?-1:0}function HA(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&o0(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Na(n,t){return Ce(n.prev,n,n.next)<0?Ce(n,t,n.next)>=0&&Ce(n,n.prev,t)>=0:Ce(n,t,n.prev)<0||Ce(n,n.next,t)<0}function WA(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function l0(n,t){const e=new Su(n.i,n.x,n.y),i=new Su(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Up(n,t,e,i){const s=new Su(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Oa(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Su(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function XA(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}class Mf{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return Mf.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];Fp(t),Gp(i,t);let a=t.length;e.forEach(Fp);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Gp(i,e[l]);const o=CA.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Fp(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Gp(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Ef extends _n{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let h=0;const u=[],f=new C,c=new C,d=[],m=[],_=[],g=[];for(let p=0;p<=i;p++){const y=[],x=p/i;let v=0;p===0&&a===0?v=.5/e:p===i&&l===Math.PI&&(v=-.5/e);for(let T=0;T<=e;T++){const b=T/e;f.x=-t*Math.cos(s+b*r)*Math.sin(a+x*o),f.y=t*Math.cos(a+x*o),f.z=t*Math.sin(s+b*r)*Math.sin(a+x*o),m.push(f.x,f.y,f.z),c.copy(f).normalize(),_.push(c.x,c.y,c.z),g.push(b+v,1-x),y.push(h++)}u.push(y)}for(let p=0;p<i;p++)for(let y=0;y<e;y++){const x=u[p][y+1],v=u[p][y],T=u[p+1][y],b=u[p+1][y+1];(p!==0||a>0)&&d.push(x,v,b),(p!==i-1||l<Math.PI)&&d.push(v,T,b)}this.setIndex(d),this.setAttribute("position",new ze(m,3)),this.setAttribute("normal",new ze(_,3)),this.setAttribute("uv",new ze(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ef(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class YA extends je{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class Sf{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Bp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Bp();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Bp(){return performance.now()}class Pt{constructor(t){this.value=t}clone(){return new Pt(this.value.clone===void 0?this.value:this.value.clone())}}const zp=new Xt;class h0{constructor(t,e,i=0,s=1/0){this.ray=new Hs(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new gf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return zp.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zp),this}intersectObject(t,e=!0,i=[]){return wu(t,this,i,e),i.sort(kp),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)wu(t[s],this,i,e);return i.sort(kp),i}}function kp(n,t){return n.distance-t.distance}function wu(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)wu(r[a],t,e,!0)}}class Vp{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(sn(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class qA extends AA{constructor(t,e=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new _n;r.setIndex(new De(i,1)),r.setAttribute("position",new ze(s,3)),super(r,new r0({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){const e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){this.geometry.dispose(),this.material.dispose()}}class jA extends pn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cf);class c0{_rootMap=new Map;get size(){if(this._rootMap.size===0)return 0;let t=0;return this._rootMap.forEach(e=>t+=e.size),t}forEach(t){this._rootMap.size!==0&&this._rootMap.forEach((e,i)=>{e.forEach((s,r)=>t(s,i,r,this))})}has(t,e){return this._rootMap.get(t)?.has(e)??!1}clear(){this._rootMap.clear()}getOrCreate(t,e,i){let s=this._rootMap.get(t);s==null&&(s=new Map,this._rootMap.set(t,s));let r=s.get(e);return r==null&&(r=i(t,e),s.set(e,r)),r}}const ZA=(n,t)=>On(n.id,t.id),$A=new c0;function Tu(n,t){return $A.getOrCreate(n,t,ZA)}const KA=new Z(0,0);function JA(n,t){const e=t.srcCrs.id,i=t.dstCrs.id;if(e===i)return;if(t.stride===void 0||t.stride<2)throw new Error("invalid stride: must be at least 2");const s=On.Proj(e),r=On.Proj(i),a={x:0,y:0},o=n.length,l=t.stride,h=t.offset??KA;for(let u=0;u<o;u+=l){a.x=n[u+0],a.y=n[u+1];const f=On.transform(s,r,a,!0);if(f==null)throw new Error(`could not reproject from ${s.name} to ${r.name}`);n[u+0]=f.x+h.x,n[u+1]=f.y+h.y}}function QA(n,t,e){const i=Tu(n,t),s=n.isEpsg(4326)&&t.isEpsg(3857);for(let r=0;r<e.length;r++){const a=e[r];s&&a.setY(qt.clamp(a.y,-89.999999,89.999999));const o=i.forward(a);e[r].copy(o)}}const u0={transformBufferInPlace:JA,transformVectors:QA};function Nt(n,t){if(n==null)throw new Error(t??"non-null assertion failed");return n}class fi extends te{isOffsetScale=!0;get offsetX(){return this.x}get offsetY(){return this.y}get scaleX(){return this.z}get scaleY(){return this.w}constructor(t,e,i,s){super(t,e,i,s)}static identity(){return new fi(0,0,1,1)}transform(t,e=new Z){return e.x=t.x*this.scaleX+this.offsetX,e.y=t.y*this.scaleY+this.offsetY,e}combine(t,e=new fi){return e.copy(this),e.x+=t.x*e.z,e.y+=t.y*e.w,e.z*=t.z,e.w*=t.w,e}}const Wn=n=>n!=null&&typeof n=="object";function tR(n){return Wn(n)&&n.isObject3D===!0}function eR(n){return Wn(n)&&n.isMesh===!0}function f0(n){return Wn(n)&&n.isBufferGeometry===!0}function d0(n){return Wn(n)&&n.isTexture===!0}function Br(n){return Wn(n)&&n.isPerspectiveCamera===!0}function Ea(n){return Wn(n)&&n.isOrthographicCamera===!0}function Ll(n){return Wn(n)&&n.isMaterial===!0}function nR(n){return Wn(n)&&n.isColor===!0}function bu(n){return Wn(n)&&n.isVector3===!0}function iR(n){return Wn(n)&&n.isBox3===!0}function es(n){return!!(typeof n=="number"&&Number.isFinite(n))}function jh(n){return nR(n)?n:new bt(n)}function sR(n){return Wn(n)&&n.isShaderMaterial===!0}function rR(n){return Wn(n)&&n.isMeshBasicMaterial===!0}On.defs("EPSG:4978","+proj=geocent +datum=WGS84 +units=m +no_defs +type=crs");On.defs("EPSG:4979","+proj=longlat +datum=WGS84 +no_defs +type=crs");On.defs("equirectangular","+proj=longlat +datum=WGS84 +no_defs +type=crs");sg(On);function Hp(n){const{degrees:t,minutes:e,seconds:i}=n;return t+(e??0)/60+(i??0)/3600}function xs(n){if(!n.isGeographic())throw new Error("This operation is only permitted on geographic coordinates.")}function Zh(n){if(n.isGeographic())throw new Error("This operation is only permitted on non-geographic coordinates.")}class rn{isCoordinates=!0;constructor(t,...e){this._values=new Float64Array(3),this.crs=t,this.set(t,...e)}get values(){return this._values}set(t,...e){if(this.crs=t,e.length===1&&bu(e[0]))this._values[0]=e[0].x,this._values[1]=e[0].y,this._values[2]=e[0].z;else{for(let i=0;i<e.length&&i<3;i++)this._values[i]=e[i];for(let i=e.length;i<3;i++)this._values[i]=0}return this}clone(t){let e;return t?(rn.call(t,this.crs,this._values[0],this._values[1],this._values[2]),e=t):e=new rn(this.crs,this._values[0],this._values[1],this._values[2]),e}copy(t){const e=t._values;return this.set(t.crs,e[0],e[1],e[2]),this}get longitude(){return xs(this.crs),this._values[0]}get latitude(){return xs(this.crs),this._values[1]}get altitude(){return xs(this.crs),this._values[2]}setAltitude(t){xs(this.crs),this._values[2]=t}withLongitude(t){return xs(this.crs),typeof t=="number"?this._values[0]=t:this._values[0]=Hp(t),this}withLatitude(t){return xs(this.crs),typeof t=="number"?this._values[1]=t:this._values[1]=Hp(t),this}withCRS(t){return this.crs=t,this}withAltitude(t){return xs(this.crs),this._values[2]=t,this}get x(){return Zh(this.crs),this._values[0]}get y(){return Zh(this.crs),this._values[1]}get z(){return Zh(this.crs),this._values[2]}toVector3(t){const e=t||new C;return e.fromArray(this._values),e}toVector2(t){const e=t||new Z;return e.fromArray(this._values),e}as(t,e){return this.convert(t,e)}convert(t,e){if(e=e||new rn(t,0,0,0),t.id===this.crs.id)return e.copy(this);if(this.crs.id in On.defs&&t.id in On.defs){const i=this._values[0];let s=this._values[1];const r=this.crs;if(r.isEpsg(4326)&&t.isEpsg(3857)){s=qt.clamp(s,-89.999999,89.999999);const o=Tu(r,t).forward([i,s]);return e.set(t,o[0],o[1],this._values[2])}const a=Tu(r,t).forward([i,s]);return e.set(t,a[0],a[1],this._values[2])}throw new Error(`Cannot convert from crs ${this.crs.id} to ${t.id}`)}isGeographic(){return this.crs.isGeographic()}static WGS84(t,e,i){return new rn(Yt.epsg4326,0,0).withLatitude(t).withLongitude(e).withAltitude(i??0)}}const Wi=new Z,Ut={WEST:0,EAST:1,SOUTH:2,NORTH:3};function aR(n,t,e){return n.isEpsg(4326)?.01:.01*Math.min(t,e)}const xn=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z];class Qe{constructor(t,...e){this._values=new Float64Array(4),this._crs=t,this.set(t,...e)}static fromCenterAndSize(t,e,i,s){const r=e.x-i/2,a=e.x+i/2,o=e.y-s/2,l=e.y+s/2;return new Qe(t,r,a,o,l)}get values(){return this._values}sampleUV(t,e,i){const{width:s,height:r}=this.dimensions(Wi),a=this.south,l=this.west+s*t,h=a+r*e;return i!=null?i.set(this._crs,l,h):new rn(this._crs,l,h)}equals(t,e=1e-5){return t._crs.equals(this._crs)&&Math.abs(t._values[0]-this._values[0])<=e&&Math.abs(t._values[1]-this._values[1])<=e&&Math.abs(t._values[2]-this._values[2])<=e&&Math.abs(t._values[3]-this._values[3])<=e}isValid(){return!(!(Number.isFinite(this.west)&&Number.isFinite(this.east)&&Number.isFinite(this.south)&&Number.isFinite(this.north))||!this.crs.isGeographic()&&this.west>this.east||this.south>this.north)}clone(){const t=this._values[Ut.WEST],e=this._values[Ut.EAST],i=this._values[Ut.SOUTH],s=this._values[Ut.NORTH];return new Qe(this._crs,t,e,i,s)}withRelativeMargin(t){const e=Math.abs(this.west-this.east),i=Math.abs(this.north-this.south);return this.withMargin(t*e,t*i)}withMargin(t,e){const i=this.west-t,s=this.east+t,r=this.north+e,a=this.south-e;return new Qe(this.crs,i,s,a,r)}as(t){if(!this._crs.equals(t)&&!(this._crs.isEpsg(4326)&&t.isEpsg(4326))){const e=this.centerAsVector2(Wi),i=e.x,s=e.y,r=this.east,a=this.west,o=this.north,l=this.south;xn[0].set(a,o),xn[1].set(i,o),xn[2].set(r,o),xn[3].set(r,s),xn[4].set(r,l),xn[5].set(i,l),xn[6].set(a,l),xn[7].set(a,s);let h=-1/0,u=1/0,f=-1/0,c=1/0;u0.transformVectors(this._crs,t,xn);for(let d=0;d<xn.length;d++)h=Math.max(h,xn[d].y),u=Math.min(u,xn[d].y),f=Math.max(f,xn[d].x),c=Math.min(c,xn[d].x);return new Qe(t,{north:h,south:u,east:f,west:c})}return this}offsetToParent(t,e=new fi){if(!this.crs.equals(t.crs))throw new Error("unsupported mix");const i=t.dimensions(),s=this.dimensions(),r=Math.round(1e3*(this.west-t.west)/i.x)*.001,a=Math.round(1e3*(this.south-t.south)/i.y)*.001,o=Math.round(1e3*s.x/i.x)*.001,l=Math.round(1e3*s.y/i.y)*.001;return e.set(r,a,o,l)}get west(){return this._values[Ut.WEST]}get east(){return this._values[Ut.EAST]}get north(){return this._values[Ut.NORTH]}get south(){return this._values[Ut.SOUTH]}topLeft(){return new rn(this.crs,this.west,this.north,0)}topRight(){return new rn(this.crs,this.east,this.north,0)}bottomRight(){return new rn(this.crs,this.east,this.south,0)}bottomLeft(){return new rn(this.crs,this.west,this.south,0)}get crs(){return this._crs}center(t){const e=this.centerAsVector2(Wi);let i;return t?(i=t,i.set(this._crs,e.x,e.y,0)):i=new rn(this._crs,e.x,e.y,0),i}centerAsVector2(t){const e=this.dimensions(Wi),i=this._values[0]+e.x*.5,s=this._values[2]+e.y*.5;let r;return t?(r=t,r.set(i,s)):r=new Z(i,s),r}centerAsVector3(t){const e=this.centerAsVector2(Wi);let i;return t?(i=t,i.set(e.x,e.y,0)):i=new C(e.x,e.y,0),i}dimensions(t=new Z){return t.x=Math.abs(this.east-this.west),t.y=Math.abs(this.north-this.south),t}isPointInside(t,e=0){const i=this.crs.equals(t.crs)?t:t.as(this.crs);return this.crs.isGeographic()?i.longitude<=this.east+e&&i.longitude>=this.west-e&&i.latitude<=this.north+e&&i.latitude>=this.south-e:i.x<=this.east+e&&i.x>=this.west-e&&i.y<=this.north+e&&i.y>=this.south-e}isInside(t,e=null){const i=t.as(this._crs),s=this.dimensions(Wi);return e=e??aR(this._crs,s.x,s.y),this.east-i.east<=e&&i.west-this.west<=e&&this.north-i.north<=e&&i.south-this.south<=e}contains(t,e=null){return t.isInside(this,e)}intersectsExtent(t){const e=t.as(this.crs);return!(this.west>=e.east||this.east<=e.west||this.south>=e.north||this.north<=e.south)}intersect(t){return this.intersectsExtent(t)?(t.crs.equals(this.crs)||(t=t.as(this.crs)),this.set(this.crs,Math.max(this.west,t.west),Math.min(this.east,t.east),Math.max(this.south,t.south),Math.min(this.north,t.north)),this):(this.set(this.crs,0,0,0,0),this)}fitToGrid(t,e,i,s,r){const a=t.dimensions(Wi),o=a.x/e,l=a.y/i;let h=Math.floor((this.west-t.west)/o),u=Math.ceil((this.east-t.west)/o),f=Math.floor((this.south-t.south)/l),c=Math.ceil((this.north-t.south)/l);if(s!==void 0&&r!==void 0){const p=u-h,y=c-f;if(p<s){const x=(s-p)/2;h-=x,u+=x}if(y<r){const x=(r-y)/2;f-=x,c+=x}}h=Math.max(0,Math.floor(h)),u=Math.min(e,Math.ceil(u)),f=Math.max(0,Math.floor(f)),c=Math.min(i,Math.ceil(c));const d=t.west+h*o,m=t.west+u*o,_=t.south+f*l,g=t.south+c*l;return{extent:new Qe(this.crs,d,m,_,g),width:u-h,height:c-f}}set(t,...e){if(this._crs=t,e.length===2&&Wp(e[0])&&Wp(e[1]))[this._values[Ut.WEST],this._values[Ut.SOUTH]]=e[0].values,[this._values[Ut.EAST],this._values[Ut.NORTH]]=e[1].values;else if(e.length===1&&e[0].west!==void 0)this._values[Ut.WEST]=e[0].west,this._values[Ut.EAST]=e[0].east,this._values[Ut.SOUTH]=e[0].south,this._values[Ut.NORTH]=e[0].north;else if(e.length===4)this._values[Ut.WEST]=e[Ut.WEST],this._values[Ut.EAST]=e[Ut.EAST],this._values[Ut.SOUTH]=e[Ut.SOUTH],this._values[Ut.NORTH]=e[Ut.NORTH];else throw new Error(`Unsupported constructor args '${e}'`);return this}copy(t){return this._crs=t.crs,this._values[Ut.WEST]=t._values[Ut.WEST],this._values[Ut.EAST]=t._values[Ut.EAST],this._values[Ut.SOUTH]=t._values[Ut.SOUTH],this._values[Ut.NORTH]=t._values[Ut.NORTH],this}static unionMany(...t){if(t==null||t.length===0)return null;if(t.length===1)return t[0].clone();let e=1/0,i=-1/0,s=-1/0,r=1/0,a=!1,o=null;for(let l=0;l<t.length;l++){const h=Nt(t[l]);if(a=!0,o!=null){if(!o.equals(h.crs))throw new Error(`Unsupported union between different CRSes (${h.crs.id} and ${o.id} differ)`)}else o=h.crs;e=Math.min(h.south,e),i=Math.max(h.north,i),s=Math.max(h.east,s),r=Math.min(h.west,r)}return a?new Qe(t[0].crs,r,s,e,i):null}union(t){if(t==null)return;if(!t.crs.equals(this.crs))throw new Error(`unsupported union between different CRSes (${t.crs.id} and ${this.crs.id} differ)`);const e=t.west;e<this.west&&(this._values[Ut.WEST]=e);const i=t.east;i>this.east&&(this._values[Ut.EAST]=i);const s=t.south;s<this.south&&(this._values[Ut.SOUTH]=s);const r=t.north;r>this.north&&(this._values[Ut.NORTH]=r)}expandByPoint(t){const e=t.as(this.crs),i=e.values[0];i<this.west&&(this._values[Ut.WEST]=i),i>this.east&&(this._values[Ut.EAST]=i);const s=e.values[1];s<this.south&&(this._values[Ut.SOUTH]=s),s>this.north&&(this._values[Ut.NORTH]=s)}shift(t,e){return this._values[Ut.WEST]+=t,this._values[Ut.EAST]+=t,this._values[Ut.SOUTH]+=e,this._values[Ut.NORTH]+=e,this}static fromBox3(t,e){return new this(t,{west:e.min.x,east:e.max.x,south:e.min.y,north:e.max.y})}toBox3(t,e){const i=new C(this.west,this.south,t),s=new C(this.east,this.north,e);return new Be(i,s)}offsetInExtent(t,e=new Z){if(!t.crs.equals(this.crs))throw new Error("unsupported mix");const i=Math.abs(this.east-this.west),s=Math.abs(this.north-this.south),r=t.crs.isGeographic(),a=r?t.longitude:t.x,o=r?t.latitude:t.y,l=(a-this.west)/i,h=(o-this.south)/s;return e.set(l,h),e}toGrid(t,e,i,s){const r=this.dimensions(Wi),a=this.west,o=this.north,l=r.x/t,h=r.y/e,u=t+1;for(let f=0;f<e+1;f++)for(let c=0;c<u;c++){const d=a+l*c,m=o-h*f,_=s*(u*f+c);i[_+0]=d,i[_+1]=m}return i}split(t,e){if(t<1||e<1)throw new Error("Invalid subdivisions. Must be strictly positive.");if(t===1&&e===1)return[this.clone()];const i=this.dimensions(),s=this.west,r=this.south,a=i.x/t,o=i.y/e,l=this.crs,h=[];for(let u=0;u<t;u++)for(let f=0;f<e;f++){const c=s+u*a,d=r+f*o,m=new Qe(l,c,c+a,d,d+o);h.push(m)}return h}static get webMercator(){return new Qe(Yt.epsg3857,-2003750834e-2,2003750834e-2,-200489661e-1,200489661e-1)}static get WGS84(){return new Qe(Yt.epsg4326,-180,180,-90,90)}static get fullEquirectangularProjection(){return new Qe(Yt.equirectangular,-180,180,-90,90)}static fromPhotosphere(t){if(t==null)return Qe.fullEquirectangularProjection;const e=360*(t.croppedAreaLeftPixels/t.fullPanoImageWidthPixels)-180,i=90-180*(t.croppedAreaTopPixels/t.fullPanoImageHeightPixels),s=i-180*(t.croppedAreaImageHeightPixels/t.fullPanoImageHeightPixels),r=e+360*(t.croppedAreaImageWidthPixels/t.fullPanoImageWidthPixels);return new Qe(Yt.equirectangular,{west:e,east:r,south:s,north:i})}}function Wp(n){return n.isCoordinates===!0}class oR extends pn{_ready=!1;get ready(){return this._ready}get instance(){if(!this._instance)throw new Error(`This entity has not been added to an instance or its initialization is not finished.
To check if the entity is ready, use the .ready property`);return this._instance}isEntity=!0;constructor(){super(),this.id=qt.generateUUID(),this.type="Entity",this._frozen=!1,this.userData={}}get frozen(){return this._frozen}set frozen(t){this._frozen!==t&&(this._frozen=t,this.dispatchEvent({type:"frozen-property-changed",frozen:t}))}get loading(){return!1}get progress(){return 1}preprocess(){return Promise.resolve()}async initialize(t){this._instance=t.instance,await this.preprocess(t),this._ready=!0,this.dispatchEvent({type:"initialized"})}shouldCheckForUpdate(){return this._ready}shouldFullUpdate(t){return t===this||t.isCamera}shouldUpdate(){return!1}filterChangeSources(t){let e=!1;const i=new Set;return t.forEach(s=>{e=e||this.shouldFullUpdate(s),this.shouldUpdate(s)&&i.add(s)}),e?new Set([this]):i}preUpdate(){return null}update(){}postUpdate(){}dispose(){}notifyChange(t){this._instance?.notifyChange(t)}}function Xp(n){return n?.isEntity}function wf(n,t){let e;for(let i=0;i<=n;i++){const s=i*i;for(let r=-i;r<=i;r++){const a=r*r;for(let o=-i;o<=i;o++){const l=a+o*o;if(l>s||e!=null&&l<=e)continue;const h=n+r,u=n+o;if(t(h,u,u*(2*n)+h)===!1)return}}e=s}}const lR=new bt(0,0,0),hR=new h0;function p0(n){return n.userData?.parentEntity!=null?n.userData.parentEntity:n.parent?p0(n.parent):null}function m0(n,t,e,i={}){const s=Math.max(i.radius??0,0),r=i.limit??1/0,a=i.filter,o=[];let l;const h=lR,u=Math.round(255*h.r),f=Math.round(255*h.g),c=Math.round(255*h.b);if(i.gpuPicking===!0){const g={x:t.x-s,y:t.y-s,width:1+s*2,height:1+s*2};l=n.engine.renderToBuffer({scene:e,camera:n.view.camera,zone:g,clearColor:h})}const d=new Z,m=n.canvasToNormalizedCoords(t,d),_=m.clone();return wf(s,(g,p)=>{const y=((p+s)*(s*2+1)+(g+s))*4;if(i.gpuPicking===!0){const T=l[y],b=l[y+1],R=l[y+2];if(Math.abs(u-T)<=1&&Math.abs(f-b)<=1&&Math.abs(c-R)<=1)return null}_.setX(m.x+g/n.view.width).setY(m.y+p/n.view.height);const x=i.raycaster??hR;x.setFromCamera(_,n.view.camera);const v=x.intersectObject(e,!0);for(const T of v)if(T.entity=p0(T.object),(!a||a(T))&&(o.push(T),o.length>=r))return!1;return o.length===0}),o}class cR extends oR{isMemoryUsage=!0;hasDefaultPointOfView=!0;type="Entity3D";isPickable=!0;isEntity3D=!0;get distance(){return this._distance}constructor(t){if(super(),t?.object3d!=null&&!tR(t.object3d))throw new Error("Incorrect root object type (must be a three.js Object3D instance)");const e=t?.object3d??new Ps;e.type==="Group"&&e.name===""&&(e.name=this.id),this._visible=!0,this._opacity=1,this._object3d=e,this.name=t?.name??void 0,this._distance={min:1/0,max:0},this._clippingPlanes=null,this._renderOrder=0,this.onObjectCreated(this._object3d)}getMemoryUsage(){}onRenderingContextLost(){}onRenderingContextRestored(){}get object3d(){return this._object3d}get visible(){return this._visible}set visible(t){this._visible!==t&&(this._visible=t,this.updateVisibility(),this.dispatchEvent({type:"visible-property-changed",visible:t}))}get renderOrder(){return this._renderOrder}set renderOrder(t){t!==this._renderOrder&&(this._renderOrder=t,this.updateRenderOrder(),this.dispatchEvent({type:"renderOrder-property-changed",renderOrder:t}))}get opacity(){return this._opacity}set opacity(t){this._opacity!==t&&(this._opacity=t,this.updateOpacity(),this.dispatchEvent({type:"opacity-property-changed",opacity:t}))}get clippingPlanes(){return this._clippingPlanes}set clippingPlanes(t){this._clippingPlanes=t,this.updateClippingPlanes(),this.dispatchEvent({type:"clippingPlanes-property-changed",clippingPlanes:t})}updateVisibility(){this.object3d.visible=this.visible}updateOpacity(){this.traverseMaterials(t=>{if(t.opacity!=null){const e=t.transparent;t.transparent=this.opacity<1,e!==t.transparent&&(t.needsUpdate=!0),t.opacity=this.opacity}})}updateRenderOrder(){this.traverse(t=>{t.renderOrder=this.renderOrder})}updateClippingPlanes(){this.traverseMaterials(t=>{t.clippingPlanes=this._clippingPlanes,t.clipShadows=!0})}shouldCheckForUpdate(){return super.shouldCheckForUpdate()&&this._visible}shouldFullUpdate(t){return super.shouldFullUpdate(t)||this.contains(t)}shouldUpdate(t){return super.shouldUpdate(t)||this.isOwned(t)}isOwned(t){return!!(t.isObject3D&&t.userData?.parentEntity===this)}preUpdate(t,e){return e.size>0&&(this._distance.min=1/0,this._distance.max=0),null}getBoundingBox(){return new Be().setFromObject(this.object3d)}setupMaterial(t){t.clippingPlanes=this._clippingPlanes,t.clipShadows=!0,t.opacity=this._opacity,t.opacity<1&&(t.transparent=!0)}onObjectCreated(t){this.traverse(e=>{e.userData.parentEntity=this,this.assignRenderOrder(t)},t),this.traverseMaterials(e=>this.setupMaterial(e),t),this.dispatchEvent({type:"object-created",obj:t})}assignRenderOrder(t){t.renderOrder=this.renderOrder}contains(){return!1}traverseMaterials(t,e=void 0){this.traverse(i=>{"material"in i&&(Array.isArray(i.material)?i.material.forEach(s=>{Ll(s)&&t(s)}):Ll(i.material)&&t(i.material))},e)}traverseMeshes(t,e=void 0){(e??this.object3d).traverse(s=>{s.isMesh&&t(s)})}traverse(t,e=void 0){(e??this.object3d).traverse(t)}pick(t,e){return m0(this.instance,t,this.object3d,e)}getDefaultPointOfView(t){const e=this.getBoundingBox();return e==null?null:this.instance.view.getDefaultPointOfView(e,t)}}function pr(n){return n.isEntity3D}const or=new C,Yp=new Xt,qp=new Xt,jp=new C,Zp=new C;class uR{constructor(t={}){const e=this;let i,s,r,a;const o={objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:i,height:s}},this.render=function(m,_){m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),Yp.copy(_.matrixWorldInverse),qp.multiplyMatrices(_.projectionMatrix,Yp),u(m,m,_),d(m)},this.setSize=function(m,_){i=m,s=_,r=i/2,a=s/2,l.style.width=m+"px",l.style.height=_+"px"};function h(m){m.isCSS2DObject&&(m.element.style.display="none");for(let _=0,g=m.children.length;_<g;_++)h(m.children[_])}function u(m,_,g){if(m.visible===!1){h(m);return}if(m.isCSS2DObject){or.setFromMatrixPosition(m.matrixWorld),or.applyMatrix4(qp);const p=or.z>=-1&&or.z<=1&&m.layers.test(g.layers)===!0,y=m.element;y.style.display=p===!0?"":"none",p===!0&&(m.onBeforeRender(e,_,g),y.style.transform="translate("+-100*m.center.x+"%,"+-100*m.center.y+"%)translate("+(or.x*r+r)+"px,"+(-or.y*a+a)+"px)",y.parentNode!==l&&l.appendChild(y),m.onAfterRender(e,_,g));const x={distanceToCameraSquared:f(g,m)};o.objects.set(m,x)}for(let p=0,y=m.children.length;p<y;p++)u(m.children[p],_,g)}function f(m,_){return jp.setFromMatrixPosition(m.matrixWorld),Zp.setFromMatrixPosition(_.matrixWorld),jp.distanceToSquared(Zp)}function c(m){const _=[];return m.traverseVisible(function(g){g.isCSS2DObject&&_.push(g)}),_}function d(m){const _=c(m).sort(function(p,y){if(p.renderOrder!==y.renderOrder)return y.renderOrder-p.renderOrder;const x=o.objects.get(p).distanceToCameraSquared,v=o.objects.get(y).distanceToCameraSquared;return x-v}),g=_.length;for(let p=0,y=_.length;p<y;p++)_[p].element.style.zIndex=g-p}}}let $p=!1,Kp=8,Jp=2048,Qp=0;const to={isLogDepthBufferSupported(){return $p},getMaxTextureUnitsCount(){return Kp},getMaxTextureSize(){return Jp},getMaxAnisotropy(){return Qp},updateCapabilities(n){const t=n.getContext();Kp=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),Jp=t.getParameter(t.MAX_TEXTURE_SIZE),Qp=n.capabilities.getMaxAnisotropy(),$p=n.capabilities.logarithmicDepthBuffer}};var cn=(function(n){return n[n.Raw=0]="Raw",n[n.ScaleToMinMax=2]="ScaleToMinMax",n[n.CompressTo8Bit=3]="CompressTo8Bit",n})(cn||{});class ri{get options(){return this._opts}constructor(t,e={}){this._mode=t,this._opts=e}get mode(){return this._mode}get min(){return this._opts.min}get max(){return this._opts.max}get negateValues(){return this._opts.negateValues}set negateValues(t){this._opts.negateValues=t}isDefault(){return this.mode===cn.Raw&&this.negateValues!==!0}withNegatedValues(){return this.negateValues=!0,this}static get Raw(){return new ri(cn.Raw)}get colorSpace(){if(this._mode===cn.ScaleToMinMax)return hi}static ScaleToMinMax(t,e){if(typeof t=="number"&&typeof e=="number")return new ri(cn.ScaleToMinMax,{min:t,max:e});throw new Error("min and max should be numbers")}static CompressTo8Bit(t,e){if(typeof t=="number"&&typeof e=="number")return new ri(cn.CompressTo8Bit,{min:t,max:e});throw new Error("min and max should be numbers")}toString(){switch(this.mode){case cn.Raw:return"Raw";case cn.ScaleToMinMax:return`Scaled (min: ${this._opts.min}, max: ${this._opts.max})`;case cn.CompressTo8Bit:return`Compressed to 8-bit (min: ${this._opts.min}, max: ${this._opts.max})`;default:return"unknown"}}setUniform(t){const e=this.mode;switch(t.mode=e,t.negateValues=this.negateValues??!1,t.min=0,t.max=1,e){case cn.ScaleToMinMax:case cn.CompressTo8Bit:t.min=this._opts.min??0,t.max=this._opts.max??1;break;case cn.Raw:break;default:throw new Error(`unknown interpretation mode: ${this.mode}`)}return t}}class Tf extends Ze{isEmptyTexture=!0;constructor(){super()}}function $h(n){return n?.isEmptyTexture}class bf extends pn{constructor(){super(),this._operations=0,this._completed=0,this._total=0}get operations(){return this._operations}get completed(){return this._completed}get loading(){return this._operations>0}get progress(){return this._operations===0?1:this._completed/this._total}decrement(){this._operations!==0&&(this._operations--,this._completed++,this.dispatchEvent({type:"changed"}),this._operations===0&&(this._total=0,this._completed=0,this.dispatchEvent({type:"complete"})))}wrap(t){return this.increment(),t.finally(()=>this.decrement())}increment(t=1){this._operations+=t,this._total+=t,this.dispatchEvent({type:"changed"})}}function g0(n,t){return{requestId:n,error:t instanceof Error?t.message:"unknown error"}}class lh{_workers=new Set;_disposed=!1;_messageId=0;get loading(){let t=!1;return this._workers.forEach(e=>{e.counter.loading&&(t=!0)}),t}get progress(){let t=0;return this._workers.forEach(e=>{t+=e.counter.progress}),t/this._workers.size}constructor(t){this._createWorker=t.createWorker,this._terminationDelay=t.terminationDelay??1e4,t.concurrency!=null?this._concurrency=t.concurrency:this._concurrency=lh.defaultConcurrency}static get defaultConcurrency(){return typeof window<"u"&&window.navigator!=null?window.navigator.hardwareConcurrency:1}queue(t,e,i){if(this._disposed)throw new Error("this object is disposed");const s=this.getWorker();s.counter.increment(),s.idleTimeout&&(clearTimeout(s.idleTimeout),s.idleTimeout=null);const r=s.worker,a={id:this._messageId++,payload:e,type:t};return new Promise((o,l)=>{let h;const u=f=>{const c=f.data;c.requestId===a.id&&(h(),"error"in c?l(new Error(c.error)):o(c.payload))};h=()=>{s.counter.decrement(),s.counter.loading||this.startWorkerTerminationTimeout(s),r.removeEventListener("message",u)},r.addEventListener("message",u),r.postMessage(a,i??[])})}dispose(){this._disposed||(this._disposed=!0,this._workers.forEach(t=>t.worker.terminate()))}startWorkerTerminationTimeout(t){const e=t.worker;t.idleTimeout=setTimeout(()=>{e.terminate(),this._workers.delete(t)},this._terminationDelay)}createWorker(){const t=this._createWorker(),e={counter:new bf,worker:t,idleTimeout:null};return this._workers.add(e),e}getWorker(){if(this._workers.size===0)return this.createWorker();const t=[...this._workers],e=t.find(s=>!s.counter.loading);return e||(this._workers.size<this._concurrency?this.createWorker():(t.sort((s,r)=>s.counter.operations-r.counter.operations),t[0]))}}const _0=1009,v0=1015,Kh=0,Xi=0;function fR(n){if(n instanceof Float32Array)return"Float32Array";if(n instanceof Float64Array)return"Float64Array";if(n instanceof Uint32Array)return"Uint32Array";if(n instanceof Uint16Array)return"Uint16Array";if(n instanceof Int32Array)return"Int32Array";if(n instanceof Int16Array)return"Int16Array";if(n instanceof Uint8Array)return"Uint8Array";if(n instanceof Int8Array)return"Int8Array";if(n instanceof Uint8ClampedArray)return"Uint8ClampedArray";throw new Error("unsupported type")}function x0(n,t){if(typeof t=="number")switch(t){case _0:return new Uint8ClampedArray(n);case v0:return new Float32Array(n)}else switch(t){case"Float32Array":return new Float32Array(n);case"Float64Array":return new Float64Array(n);case"Uint8ClampedArray":return new Uint8ClampedArray(n);case"Uint8Array":return new Uint8Array(n);case"Uint16Array":return new Uint16Array(n);case"Uint32Array":return new Uint32Array(n);case"Int8Array":return new Int8Array(n);case"Int16Array":return new Int16Array(n);case"Int32Array":return new Int32Array(n)}throw new Error("invalid state")}function Af(n){const t=n.input.map(o=>x0(o,n.inputType)),e=n.opaqueValue;let i;if(n.bufferSize&&n.dataType)switch(n.dataType){case v0:i=new Float32Array(n.bufferSize);break;case _0:i=new Uint8ClampedArray(n.bufferSize);break;default:throw new Error("unrecognized buffer type: "+n.dataType)}else throw console.error("missing values"),new Error("missing values");let s=1/0,r=-1/0,a=!0;if(t.length===1){const o=t[0],l=o.length;for(let h=0;h<l;h++){const u=h*2;let f,c;const d=o[h];d!==d||d===n.nodata?(f=Xi,c=Kh):(f=d,c=e,a=!1),s=Math.min(s,f),r=Math.max(r,f),i[u+0]=f,i[u+1]=c}}if(t.length===2){const o=t[0],l=t[1],h=o.length;for(let u=0;u<h;u++){const f=u*2;let c;const d=o[u],m=l[u];d!==d||d===n.nodata?c=Xi:c=d,m>0&&(a=!1),s=Math.min(s,c),r=Math.max(r,c),i[f+0]=c,i[f+1]=l[u]}}if(t.length===3){const o=t[0],l=t[1],h=t[2],u=o.length;let f;for(let c=0;c<u;c++){const d=c*4;let m=o[c],_=l[c],g=h[c];(m!==m||m===n.nodata)&&(_!==_||_===n.nodata)&&(g!==g||g===n.nodata)?(m=Xi,_=Xi,g=Xi,f=Kh):(f=e,a=!1),i[d+0]=m,i[d+1]=_,i[d+2]=g,i[d+3]=f}}if(t.length===4){const o=t[0],l=t[1],h=t[2],u=t[3],f=o.length;for(let c=0;c<f;c++){const d=c*4;let m=o[c],_=l[c],g=h[c],p=u[c];(m!==m||m===n.nodata)&&(_!==_||_===n.nodata)&&(g!==g||g===n.nodata)?(m=Xi,_=Xi,g=Xi,p=Kh):p>0&&(a=!1),i[d+0]=m,i[d+1]=_,i[d+2]=g,i[d+3]=p}}return{buffer:i.buffer,min:s,max:r,isTransparent:a}}onmessage=async function(n){const t=n.data;try{switch(t.type){case"CreatePixelBuffer":{const e=Af(t.payload),i={requestId:t.id,payload:e};this.postMessage(i,{transfer:[i.payload.buffer]})}break;case"CreateImageBitmap":{const e=new Blob([t.payload.buffer]),i=await createImageBitmap(e,t.payload.options),s={requestId:t.id,payload:i};this.postMessage(s,{transfer:[i]})}break}}catch(e){this.postMessage(g0(t.id,e))}};const dR=255,pR=1;function mR(n){return n?.isTexture}function gR(n){return n?.isRenderTarget}function Rf(n){return n.isDataTexture}function hh(n){return n.isCanvasTexture}function Ua(n){switch(n){case ue:case Zl:return 1;case $l:case os:case Za:case $a:return 2;case ja:case Li:case ls:case Ie:return 4;case Ni:return 2;default:throw new Error(`unknown data type: ${n}`)}}function _R(n){switch(n){case ue:return"UnsignedByteType";case Zl:return"ByteType";case $l:return"ShortType";case os:return"UnsignedShortType";case Za:return"UnsignedShort4444Type";case $a:return"UnsignedShort5551Type";case ja:return"IntType";case Li:return"UnsignedIntType";case ls:return"UnsignedInt248Type";case Ie:return"FloatType";case Ni:return"HalfFloatType";default:throw new Error(`unknown data type: ${n}`)}}function eo(n){switch(n){case uf:return 1;case Te:return 4;case ff:return 1;case df:return 2;case Ds:return 1;case Fs:return 1;case pf:return 1;case Kl:return 1;case Wr:return 2;case Jl:return 2;case Ql:return 4;default:throw new Error(`invalid pixel format: ${n}`)}}function vR(n){const t=eo(n.format),e=Ua(n.type);return n.image.width*n.image.height*t*e}function xR(n,t){const e=n.width*n.height*eo(n.texture.format),i=n.texture.type===ue?new Uint8Array(e):new Float32Array(e);t.readRenderTargetPixels(n,0,0,n.width,n.height,i),n.texture.data=i}function Cf(n){const t=document.createElement("canvas");t.width=n.width,t.height=n.height;const e=t.getContext("2d",{willReadFrequently:!0});if(!e)throw new Error("could not acquire 2D context on canvas");return e.drawImage(n,0,0),e.getImageData(0,0,n.width,n.height).data}let Jh=null;function y0(){return Jh==null&&(Jh=new lh({createWorker:()=>new Worker(URL.createObjectURL(new Blob([atob("InVzZSBzdHJpY3QiOygoKT0+e2Z1bmN0aW9uIF8oZSx0KXtyZXR1cm57cmVxdWVzdElkOmUsZXJyb3I6dCBpbnN0YW5jZW9mIEVycm9yP3QubWVzc2FnZToidW5rbm93biBlcnJvciJ9fXZhciBrPTEwMDksVD0xMDE1LGI9MjU1LEI9MSxBPTAscD0wO2Z1bmN0aW9uIE0oZSl7aWYoZSBpbnN0YW5jZW9mIEZsb2F0MzJBcnJheSlyZXR1cm4iRmxvYXQzMkFycmF5IjtpZihlIGluc3RhbmNlb2YgRmxvYXQ2NEFycmF5KXJldHVybiJGbG9hdDY0QXJyYXkiO2lmKGUgaW5zdGFuY2VvZiBVaW50MzJBcnJheSlyZXR1cm4iVWludDMyQXJyYXkiO2lmKGUgaW5zdGFuY2VvZiBVaW50MTZBcnJheSlyZXR1cm4iVWludDE2QXJyYXkiO2lmKGUgaW5zdGFuY2VvZiBJbnQzMkFycmF5KXJldHVybiJJbnQzMkFycmF5IjtpZihlIGluc3RhbmNlb2YgSW50MTZBcnJheSlyZXR1cm4iSW50MTZBcnJheSI7aWYoZSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpcmV0dXJuIlVpbnQ4QXJyYXkiO2lmKGUgaW5zdGFuY2VvZiBJbnQ4QXJyYXkpcmV0dXJuIkludDhBcnJheSI7aWYoZSBpbnN0YW5jZW9mIFVpbnQ4Q2xhbXBlZEFycmF5KXJldHVybiJVaW50OENsYW1wZWRBcnJheSI7dGhyb3cgbmV3IEVycm9yKCJ1bnN1cHBvcnRlZCB0eXBlIil9ZnVuY3Rpb24geChlLHQpe2lmKHR5cGVvZiB0PT0ibnVtYmVyIilzd2l0Y2godCl7Y2FzZSBrOnJldHVybiBuZXcgVWludDhDbGFtcGVkQXJyYXkoZSk7Y2FzZSBUOnJldHVybiBuZXcgRmxvYXQzMkFycmF5KGUpfWVsc2Ugc3dpdGNoKHQpe2Nhc2UiRmxvYXQzMkFycmF5IjpyZXR1cm4gbmV3IEZsb2F0MzJBcnJheShlKTtjYXNlIkZsb2F0NjRBcnJheSI6cmV0dXJuIG5ldyBGbG9hdDY0QXJyYXkoZSk7Y2FzZSJVaW50OENsYW1wZWRBcnJheSI6cmV0dXJuIG5ldyBVaW50OENsYW1wZWRBcnJheShlKTtjYXNlIlVpbnQ4QXJyYXkiOnJldHVybiBuZXcgVWludDhBcnJheShlKTtjYXNlIlVpbnQxNkFycmF5IjpyZXR1cm4gbmV3IFVpbnQxNkFycmF5KGUpO2Nhc2UiVWludDMyQXJyYXkiOnJldHVybiBuZXcgVWludDMyQXJyYXkoZSk7Y2FzZSJJbnQ4QXJyYXkiOnJldHVybiBuZXcgSW50OEFycmF5KGUpO2Nhc2UiSW50MTZBcnJheSI6cmV0dXJuIG5ldyBJbnQxNkFycmF5KGUpO2Nhc2UiSW50MzJBcnJheSI6cmV0dXJuIG5ldyBJbnQzMkFycmF5KGUpfXRocm93IG5ldyBFcnJvcigiaW52YWxpZCBzdGF0ZSIpfWZ1bmN0aW9uIEUoZSl7bGV0IHQ9ZS5pbnB1dC5tYXAobz0+eChvLGUuaW5wdXRUeXBlKSksaD1lLm9wYXF1ZVZhbHVlLG47aWYoZS5idWZmZXJTaXplJiZlLmRhdGFUeXBlKXN3aXRjaChlLmRhdGFUeXBlKXtjYXNlIFQ6bj1uZXcgRmxvYXQzMkFycmF5KGUuYnVmZmVyU2l6ZSk7YnJlYWs7Y2FzZSBrOm49bmV3IFVpbnQ4Q2xhbXBlZEFycmF5KGUuYnVmZmVyU2l6ZSk7YnJlYWs7ZGVmYXVsdDp0aHJvdyBuZXcgRXJyb3IoInVucmVjb2duaXplZCBidWZmZXIgdHlwZTogIitlLmRhdGFUeXBlKX1lbHNlIHRocm93IGNvbnNvbGUuZXJyb3IoIm1pc3NpbmcgdmFsdWVzIiksbmV3IEVycm9yKCJtaXNzaW5nIHZhbHVlcyIpO2xldCB5PTEvMCxtPS0xLzAsdz0hMDtpZih0Lmxlbmd0aD09PTEpe2xldCBvPXRbMF0sZj1vLmxlbmd0aDtmb3IobGV0IGQ9MDtkPGY7ZCsrKXtsZXQgaT1kKjIsYSxyLHM9b1tkXTtzIT09c3x8cz09PWUubm9kYXRhPyhhPXAscj1BKTooYT1zLHI9aCx3PSExKSx5PU1hdGgubWluKHksYSksbT1NYXRoLm1heChtLGEpLG5baSswXT1hLG5baSsxXT1yfX1pZih0Lmxlbmd0aD09PTIpe2xldCBvPXRbMF0sZj10WzFdLGQ9by5sZW5ndGg7Zm9yKGxldCBpPTA7aTxkO2krKyl7bGV0IGE9aSoyLHIscz1vW2ldLGM9ZltpXTtzIT09c3x8cz09PWUubm9kYXRhP3I9cDpyPXMsYz4wJiYodz0hMSkseT1NYXRoLm1pbih5LHIpLG09TWF0aC5tYXgobSxyKSxuW2ErMF09cixuW2ErMV09ZltpXX19aWYodC5sZW5ndGg9PT0zKXtsZXQgbz10WzBdLGY9dFsxXSxkPXRbMl0saT1vLmxlbmd0aCxhO2ZvcihsZXQgcj0wO3I8aTtyKyspe2xldCBzPXIqNCxjPW9bcl0sbD1mW3JdLHU9ZFtyXTsoYyE9PWN8fGM9PT1lLm5vZGF0YSkmJihsIT09bHx8bD09PWUubm9kYXRhKSYmKHUhPT11fHx1PT09ZS5ub2RhdGEpPyhjPXAsbD1wLHU9cCxhPUEpOihhPWgsdz0hMSksbltzKzBdPWMsbltzKzFdPWwsbltzKzJdPXUsbltzKzNdPWF9fWlmKHQubGVuZ3RoPT09NCl7bGV0IG89dFswXSxmPXRbMV0sZD10WzJdLGk9dFszXSxhPW8ubGVuZ3RoO2ZvcihsZXQgcj0wO3I8YTtyKyspe2xldCBzPXIqNCxjPW9bcl0sbD1mW3JdLHU9ZFtyXSxnPWlbcl07KGMhPT1jfHxjPT09ZS5ub2RhdGEpJiYobCE9PWx8fGw9PT1lLm5vZGF0YSkmJih1IT09dXx8dT09PWUubm9kYXRhKT8oYz1wLGw9cCx1PXAsZz1BKTpnPjAmJih3PSExKSxuW3MrMF09YyxuW3MrMV09bCxuW3MrMl09dSxuW3MrM109Z319cmV0dXJue2J1ZmZlcjpuLmJ1ZmZlcixtaW46eSxtYXg6bSxpc1RyYW5zcGFyZW50Ond9fW9ubWVzc2FnZT1hc3luYyBmdW5jdGlvbihlKXtsZXQgdD1lLmRhdGE7dHJ5e3N3aXRjaCh0LnR5cGUpe2Nhc2UiQ3JlYXRlUGl4ZWxCdWZmZXIiOntsZXQgaD1FKHQucGF5bG9hZCksbj17cmVxdWVzdElkOnQuaWQscGF5bG9hZDpofTt0aGlzLnBvc3RNZXNzYWdlKG4se3RyYW5zZmVyOltuLnBheWxvYWQuYnVmZmVyXX0pfWJyZWFrO2Nhc2UiQ3JlYXRlSW1hZ2VCaXRtYXAiOntsZXQgaD1uZXcgQmxvYihbdC5wYXlsb2FkLmJ1ZmZlcl0pLG49YXdhaXQgY3JlYXRlSW1hZ2VCaXRtYXAoaCx0LnBheWxvYWQub3B0aW9ucykseT17cmVxdWVzdElkOnQuaWQscGF5bG9hZDpufTt0aGlzLnBvc3RNZXNzYWdlKHkse3RyYW5zZmVyOltuXX0pfWJyZWFrfX1jYXRjaChoKXt0aGlzLnBvc3RNZXNzYWdlKF8odC5pZCxoKSl9fTt9KSgpOwo=")],{type:"text/javascript"})),{type:"module"}),concurrency:2})),Jh}async function yR(n,t){if(window.Worker!=null){const e=y0(),i=await n.arrayBuffer();return await e.queue("CreateImageBitmap",{buffer:i,options:t},[i])}else return createImageBitmap(n,t)}async function MR(n,t={}){const[e]=n.type.split(";");switch(e){case"image/webp":case"image/png":case"image/jpg":case"image/jpeg":{const i=t?.enableWorkers??!0;let s;const r={imageOrientation:t.flipY===!0?"flipY":"none"};i?s=await yR(n,r):s=await createImageBitmap(n,r);let a;const o=to.getMaxTextureSize();if(s.width>o||s.height>o)throw new Error(`image dimensions (${s.width} * ${s.height} pixels) exceed max texture size (${o} pixels)`);if(t.createDataTexture===!0){const l=Cf(s);a=new ah(l,s.width,s.height,Te,ue)}else a=new Ze(s);return a.wrapS=ii,a.wrapT=ii,a.minFilter=Fe,a.magFilter=Fe,a.generateMipmaps=!1,a.needsUpdate=!0,a}default:throw new Error(`unsupported media type for textures: ${n.type}`)}}function M0(n,t,e,i,s){const r=n.isTransparent?new Tf:new ah(x0(n.buffer,s),t,e,i,s);return Lf(r)||(r.needsUpdate=!0,r.generateMipmaps=!1,r.magFilter=Fe,r.minFilter=Fe),{texture:r,min:n.min,max:n.max}}function E0(n){switch(n){case 1:case 2:return Wr;default:return Te}}function S0(n,...t){const{width:e,height:i,type:s,nodata:r}=n,a=s;let o;switch(t.length){case 1:case 2:o=2;break;default:o=4;break}let l;return a===Ie?l=pR:l=dR,{bufferSize:e*i*o,inputType:fR(t[0]),dataType:a,input:t.map(h=>n.makeCopyOfBuffers?h.buffer.slice(0):h.buffer),opaqueValue:l,nodata:r}}function ER(n,t,...e){const i=S0({width:n.width,height:n.height,type:t,nodata:n.nodata,makeCopyOfBuffers:!1},...e),s=Af(i),r=E0(e.length);return M0(s,n.width,n.height,r,i.dataType)}async function SR(n,t,...e){const i=S0({width:n.width,height:n.height,type:t,nodata:n.nodata,makeCopyOfBuffers:!0},...e);let s;(n?.enableWorkers??!0)&&window.Worker!=null?s=await y0().queue("CreatePixelBuffer",i,i.input):s=Af(i);const a=E0(e.length);return M0(s,n.width,n.height,a,i.dataType)}function wR(n,t){const e=n.length,i=new Uint8ClampedArray(e*4);for(let r=0;r<e;r++){const a=n[r],o=r*4;i[o+0]=a.r*255,i[o+1]=a.g*255,i[o+2]=a.b*255,i[o+3]=t?qt.clamp(t[r],0,1)*255:255}const s=new ah(i,e,1,Te,ue);return s.needsUpdate=!0,s}function Pf(n,t,e=ri.Raw,i=4){let s=1/0,r=-1/0;const a=0,o=i-1;switch(e.mode){case cn.Raw:for(let l=0;l<n.length;l+=i){const h=n[l+a],u=n[l+o];h===h&&h!==t&&u!==0&&(s=Math.min(s,h),r=Math.max(r,h))}break;case cn.ScaleToMinMax:{const l=e.min,h=e.max;for(let u=0;u<n.length;u+=i){const f=n[u+a]/255,c=l+f*(h-l),d=n[u+o];c===c&&c!==t&&d!==0&&(s=Math.min(s,c),r=Math.max(r,c))}}break;default:throw new Error("not implemented")}return e.negateValues===!0?{min:-r,max:-s}:{min:s,max:r}}function TR(n,t){return Ua(n)>Ua(t)?n:t}function bR(n,t){return!(t!==Te||n===t)}function w0(n,t=ri.Raw){const e=Cf(n);return Pf(e,0,t)}function AR(n,t=0,e=ri.Raw){if(Rf(n)){const i=eo(n.format);return Pf(n.image.data,t,e,i)}return hh(n)?w0(n.image,e):null}function Lf(n){return n==null||n.isEmptyTexture?!0:hh(n)?n.source?.data==null:Rf(n)?n.image?.data==null:n.isRenderTargetTexture?!1:n.source?.data==null}function Qh(n,t){if(t!=null)if(Lf(t))n.objects.set(t.id,{gpuMemory:0,cpuMemory:0});else if(t.userData?.memoryUsage!=null){const e=t.userData.memoryUsage;n.objects.set(t.id,e)}else if(hh(t)){const{width:e,height:i}=t.source.data;n.objects.set(t.id,{gpuMemory:e*i*4,cpuMemory:0})}else{const{width:e,height:i}=t.image,s=e*i*Ua(t.type)*eo(t.format);t.isRenderTargetTexture?n.objects.set(t.id,{gpuMemory:s,cpuMemory:0}):n.objects.set(t.id,{gpuMemory:s,cpuMemory:s})}}function RR(n,t){const e=n.renderer.getContext(),i=e.getParameter(e.DEPTH_BITS),s=t.width*t.height*(i/8);n.objects.set(t.texture.id,{gpuMemory:s,cpuMemory:0})}function CR(n,t){t!=null&&(mR(t)?Qh(n,t):gR(t)&&(t.depthBuffer&&(t.depthTexture!=null?Qh(n,t.depthTexture):RR(n,t)),Qh(n,t.texture)))}function PR(n){return n instanceof HTMLCanvasElement||n instanceof OffscreenCanvas?n.getContext("2d",{willReadFrequently:!0}).getImageData(0,0,n.width,n.height).data:Cf(n)}function LR(n){const t=PR(n);for(let e=0;e<t.length;e+=4)if(t[e+3]!==0)return!1;return!0}function Au(n,t,e){const i=e?.getContext();if(i==null)return n;const s=Ge;return n===Fe&&(t===Ie&&!i.getExtension("OES_texture_float_linear")||t===Ni&&!i.getExtension("OES_texture_half_float_linear"))?s:n}function IR(n,t){n.minFilter=Au(n.minFilter,n.type,t),n.magFilter=Au(n.magFilter,n.type,t)}const Ne={createDataTexture:ER,createDataTextureAsync:SR,isEmptyTexture:Lf,decodeBlob:MR,getChannelCount:eo,getBytesPerChannel:Ua,getWiderType:TR,getDataTypeString:_R,create1DTexture:wR,createDataCopy:xR,computeMinMax:AR,isDataTexture:Rf,isCanvasTexture:hh,computeMinMaxFromBuffer:Pf,computeMinMaxFromImage:w0,estimateSize:vR,shouldExpandRGB:bR,isCanvasEmpty:LR,getMemoryUsage:CR,getCompatibleTextureFilter:Au,ensureCompatibility:IR};class DR{EDLRadius=1.5;enableInpainting=!1;constructor(){this.enableEDL=!1,this.EDLStrength=.7,this.EDLRadius=1.5,this.enableInpainting=!1,this.inpaintingSteps=2,this.inpaintingDepthContribution=.5,this.enablePointCloudOcclusion=!1,this.enableMSAA=!0}}const T0={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class no{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const NR=new sh(-1,1,1,-1,0,1);class OR extends _n{constructor(){super(),this.setAttribute("position",new ze([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ze([0,2,0,0,2,0],2))}}const UR=new OR;class If{constructor(t){this._mesh=new dn(UR,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,NR)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class FR extends no{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof je?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=nh.clone(t.uniforms),this.material=new je({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new If(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class tm extends no{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class GR extends no{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class BR{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new Z);this._width=i.width,this._height=i.height,e=new bn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ni}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new FR(T0),this.copyPass.material.blending=ui,this.clock=new Sf}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}tm!==void 0&&(a instanceof tm?i=!0:a instanceof GR&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Z);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const zR={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class kR extends no{constructor(){super();const t=zR;this.uniforms=nh.clone(t.uniforms),this.material=new YA({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new If(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Qt.getTransfer(this._outputColorSpace)===me&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Og?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ug?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Fg?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Gg?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Bg?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===zg&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class VR extends no{constructor(t,e){super();const i=T0;this.map=t,this.opacity=e!==void 0?e:1,this.uniforms=nh.clone(i.uniforms),this.material=new je({uniforms:this.uniforms,vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,depthTest:!1,depthWrite:!1,premultipliedAlpha:!0}),this.needsSwap=!1,this.fsQuad=new If(null)}render(t,e,i){const s=t.autoClear;t.autoClear=!1,this.fsQuad.material=this.material,this.uniforms.opacity.value=this.opacity,this.uniforms.tDiffuse.value=this.map,this.material.transparent=this.opacity<1,t.setRenderTarget(this.renderToScreen?null:i),this.clear&&t.clear(),this.fsQuad.render(t),t.autoClear=s}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const na=`varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,HR=`#include <packing>
uniform sampler2D depthTexture;
uniform vec2 resolution;
uniform float strength;
uniform float cameraNear;
uniform float cameraFar;

uniform int n;
uniform int directions;
uniform float radius;

varying vec2 vUv;

float readDepth (float fragCoordZ) {
    float viewZ = perspectiveDepthToViewZ(fragCoordZ, cameraNear, cameraFar);
    return log2(viewZToOrthographicDepth(viewZ, cameraNear, cameraFar));
}

// inspiration from https://tel.archives-ouvertes.fr/tel-00438464/document and Potree
void main() {
    float fragCoordZ = texture2D(depthTexture, vUv).x;
    if (fragCoordZ == 1.0) {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        return;
    }

    float zp = readDepth(fragCoordZ);
    float s = 0.0;

    const int max_k = 16;
    const int max_n = 4;

    float step = 2.0 * 3.1415926 / float(directions);

    for (int i = 0; i < max_k; i++) {
        if (i == directions) {
            // workaround for loop index cannot be compared with non-constant expression
            break;
        }

        for (int j = 1; j <= max_n; j++) {
            if (j > n) {
                // workaround for loop index cannot be compared with non-constant expression
                break;
            }

            float distance = radius * float(j);
            float rad = float(i) * step;

            vec2 offset = vec2(
                cos(rad) * distance,
                sin(rad) * distance) / resolution;

            float fz = texture2D(depthTexture, vUv + offset).x;
            float zq = readDepth(fz);

            s += max(0.0, -(zq - zp) / distance);
        }
    }
    s = s / float(directions) / float(n);

    float A = 300.0 * strength;

    s = exp(-s * A);

    gl_FragColor = vec4(s, s, s, 1.0);
}
`,WR=`uniform sampler2D depthTexture;
uniform sampler2D textureColor;
uniform sampler2D textureEDL;

varying vec2 vUv;
uniform float opacity;

void main() {
    float edl = texture2D(textureEDL, vUv).r;
    // edl is 0 => no neighbours, so disable EDL to avoid drawing a black
    // circle around individual points
    vec4 source = texture2D(textureColor, vUv);
    if (edl == 0.0) {
        gl_FragColor = vec4(source.rgb, source.a);
    } else {
        gl_FragColor = vec4(source.rgb * edl, source.a);
    }
    gl_FragDepth = texture2D(depthTexture, vUv).r;
}
`,XR=`uniform sampler2D depthTexture;

varying vec2 vUv;

void main() {
    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
    gl_FragDepth = texture2D(depthTexture, vUv).r;
}
`,YR=`uniform sampler2D depthTexture;
uniform sampler2D colorTexture;

varying vec2 vUv;

uniform float m43;
uniform float m33;
uniform vec2 resolution;
uniform float depth_contrib;
uniform float opacity;

uniform bool enableZAttenuation;
uniform float zAttMax;
uniform float zAttMin;

float zview(float depth) {
    // http://www.derschmale.com/2014/01/26/reconstructing-positions-from-the-depth-buffer/
    float zndc = 2.0 * depth - 1.0;
    return - m43 / (zndc + m33);
}

void main() {
    float depth = texture2D(depthTexture, vUv).x;
    gl_FragDepth = depth;

    // non empty pixel
    if (depth < 1.0) {
        gl_FragColor = texture2D(colorTexture, vUv);
        return;
    }

    // empty pixel
    {
        float total_weight = 0.0;
        vec4 averageColor = vec4(0.0, 0.0, 0.0, 0.0);
        float averageDepth = 0.;
        const int kernel = 3;
        for (int i=-kernel; i<=kernel; i++) {
            for (int j=-kernel; j<=kernel; j++) {
                if (i == 0 && j == 0) continue;
                vec2 uv = vUv + vec2(float(i) / resolution.x, float(j) / resolution.y);
                float d = texture2D(depthTexture, uv).x;

                if (d < 1.0) {
                    if (enableZAttenuation) {
                        float z = -zview(d);
                        // attenuation according to distance
                        float zAttenuation = clamp((zAttMax - z) / (zAttMax - zAttMin), 0.0, 1.0); // I wish smoothstep was supported...
                        if (abs(float(i))+abs(float(j)) > (float(kernel) * 2.0 * zAttenuation)) {
                            continue;
                        }
                    }
                    float r_ij = sqrt(float(i*i + j*j));
                    float weight_ij = (float(kernel) - r_ij * 1.0)
                        * (1.0 - min(1.0, abs(d - depth) / depth_contrib));
                    if (weight_ij > 0.0) {
                        averageColor += weight_ij * texture2D(colorTexture, uv);
                        averageDepth += weight_ij * d;
                        total_weight += weight_ij;
                    }
                }
            }
        }

        if (total_weight > 0.0) {
            gl_FragColor = averageColor / total_weight;
            gl_FragDepth = averageDepth / total_weight;
        } else {
            gl_FragColor.a = 0.0;
            discard;
        }
    }
}
`,qR=`uniform sampler2D depthTexture;
uniform sampler2D colorTexture;

varying vec2 vUv;

uniform float m43;
uniform float m33;
uniform vec2 resolution;
uniform mat4 invPersMatrix;

uniform float threshold;
uniform bool showRemoved;

vec3 unproject (vec2 ptex, float d)
{
    vec2 pndc = ptex * 2.0 - 1.0;
    vec3 pray = (invPersMatrix * vec4(pndc, 1.0, 1.0)).xyz;
    return d * pray;
}


float zView(float depth) {
    // http://www.derschmale.com/2014/01/26/reconstructing-positions-from-the-depth-buffer/
    float zndc = 2.0 * depth - 1.0;
    return - m43 / (zndc + m33);
}

void main() {
   float depth = texture2D(depthTexture, vUv).x;

    if (depth < 1.0) {
        float sectors[8];
        for (int i=0; i<8; i++) {
            sectors[i] = -1.0;
        }

        vec3 p0 = unproject(gl_FragCoord.xy / resolution, -zView(depth));
        vec3 v = -normalize(p0);

        const int kernelSize = 7;
        for (int i=-kernelSize; i<=kernelSize; i++) {
            for (int j=-kernelSize; j<=kernelSize; j++) {
                if (i == 0 && j == 0) {
                    continue;
                }
                float d = texture2D(
                    depthTexture,
                    vUv + vec2(float(i) / resolution.x, float(j) / resolution.y)).x;

                if (d == 1.0) {
                    continue;
                }

                vec2 coord = (gl_FragCoord.xy + vec2(i, j)) / resolution;
                vec3 pij = unproject(coord, - zView(d));
                vec3 c = normalize(pij - p0);
                float test = dot(v, c);

                if (i >= 0) {
                    if(abs(float(j)) <= abs(float(i))) {
                        if (j >= 0) {
                            sectors[0] = max(sectors[0], test);
                        }
                        if (j <= 0) {
                            sectors[7] = max(sectors[7], test);
                        }
                    }
                    if(abs(float(j)) >= abs(float(i))) {
                        if (j >= 0) {
                            sectors[1] = max(sectors[1], test);
                        }
                        if (j <= 0) {
                            sectors[6] = max(sectors[6], test);
                        }
                    }
                }
                if (i <= 0) {
                    if(abs(float(j)) <= abs(float(i))) {
                        if (j >= 0) {
                            sectors[3] = max(sectors[3], test);
                        }
                        if (j <= 0) {
                            sectors[4] = max(sectors[4], test);
                        }
                    }
                    if(abs(float(j)) >= abs(float(i))) {
                        if (j >= 0) {
                            sectors[2] = max(sectors[2], test);
                        }
                        if (j <= 0) {
                            sectors[5] = max(sectors[5], test);
                        }
                    }
                }
            }
        }

        float m = 0.0;
        for (int i=0; i< 8 ;i++) {
            m += (1.0 + sectors[i]) * 0.5;
        }
        m /= 8.0;

        if (m < threshold) {
            gl_FragColor = texture2D(colorTexture, vUv);
            gl_FragDepth = depth;
        } else if (showRemoved) {
            gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);
            gl_FragDepth = 1.0;
        } else {
            gl_FragColor.a = 0.0;
            gl_FragDepth = 1.0;
        }
    } else {
        gl_FragColor.a = 0.0;
        gl_FragDepth = 1.0;
    }
}
`,ys={FULL_RES_0:0,EDL_VALUES:2,EDL_ZERO:3};class jR{constructor(t){this.scene=new yf;const e=new _n;e.setAttribute("position",new ze([0,0,-3,2,0,-3,0,2,-3],3)),e.setAttribute("uv",new ze([0,0,2,0,0,2],2)),this.mesh=new dn(e,null),this.mesh.frustumCulled=!1,this.scene.add(this.mesh),this.camera=new sh(0,1,1,0,0,10),this.classic={passes:[void 0],parameters:null,enabled:!0,setup(){return{material:void 0}}},this.edl={passes:[new je({uniforms:{depthTexture:{value:null}},transparent:!0,blending:kn,vertexShader:na,fragmentShader:XR}),new je({uniforms:{depthTexture:{value:null},resolution:{value:new Z(256,256)},cameraNear:{value:.01},cameraFar:{value:100},radius:{value:0},strength:{value:0},directions:{value:0},n:{value:0},opacity:{value:1}},transparent:!0,blending:kn,vertexShader:na,fragmentShader:HR}),new je({uniforms:{depthTexture:{value:null},textureColor:{value:null},textureEDL:{value:null},opacity:{value:1}},transparent:!0,blending:kn,vertexShader:na,fragmentShader:WR})],enabled:!0,parameters:{radius:1.5,strength:.7,directions:8,n:1},setup({targets:i,input:s,passIdx:r,camera:a}){const o=this.passes[r],l=o.uniforms;return r===0?(l.depthTexture.value=s.depthTexture,{material:o,output:i[ys.EDL_ZERO]}):r===1?(l.depthTexture.value=i[ys.EDL_ZERO].depthTexture,l.resolution.value.set(s.width,s.height),l.cameraNear.value=a.near,l.cameraFar.value=a.far,l.radius.value=this.parameters.radius,l.strength.value=this.parameters.strength,l.directions.value=this.parameters.directions,l.n.value=this.parameters.n,{material:o,output:i[ys.EDL_VALUES]}):(l.textureColor.value=s.texture,l.textureEDL.value=i[ys.EDL_VALUES].texture,l.depthTexture.value=s.depthTexture,{material:o})}},this.occlusion={passes:[new je({uniforms:{depthTexture:{value:null},colorTexture:{value:null},m43:{value:0},m33:{value:0},resolution:{value:new Z(256,256)},invPersMatrix:{value:new Xt},threshold:{value:0},showRemoved:{value:!1}},transparent:!0,blending:kn,vertexShader:na,fragmentShader:qR})],enabled:!0,parameters:{threshold:.9,showRemoved:!1},setup({input:i,camera:s}){const r=this.passes[0],a=s.near,o=s.far;new Xt().copy(s.projectionMatrix).invert();const h=r.uniforms;return h.colorTexture.value=i.texture,h.depthTexture.value=i.depthTexture,h.resolution.value.set(i.width,i.height),h.m43.value=-(2*o*a)/(o-a),h.m33.value=-(o+a)/(o-a),h.threshold.value=this.parameters.threshold,h.showRemoved.value=this.parameters.showRemoved,h.invPersMatrix.value.copy(s.projectionMatrix).invert(),{material:r}}},this.inpainting={passes:[new je({uniforms:{depthTexture:{value:null},colorTexture:{value:null},resolution:{value:new Z(256,256)},depth_contrib:{value:.5},opacity:{value:1},m43:{value:0},m33:{value:0},enableZAttenuation:{value:!1},zAttMax:{value:0},zAttMin:{value:0}},transparent:!0,blending:kn,vertexShader:na,fragmentShader:YR})],enabled:!0,parameters:{fill_steps:2,depth_contrib:.5,enableZAttenuation:!1,zAttMin:10,zAttMax:100},setup({input:i,camera:s}){const r=this.passes[0],a=s.near,o=s.far;return r.uniforms.m43.value=-(2*o*a)/(o-a),r.uniforms.m33.value=-(o+a)/(o-a),r.uniforms.colorTexture.value=i.texture,r.uniforms.depthTexture.value=i.depthTexture,r.uniforms.resolution.value.set(i.width,i.height),r.uniforms.depth_contrib.value=this.parameters.depth_contrib,r.uniforms.enableZAttenuation.value=this.parameters.enableZAttenuation,r.uniforms.zAttMin.value=this.parameters.zAttMin,r.uniforms.zAttMax.value=this.parameters.zAttMax,{material:r}}},this.renderer=t,this.renderTargets=null}updateRenderTargets(t){return(!this.renderTargets||t.width!==this.renderTargets[ys.FULL_RES_0].width||t.height!==this.renderTargets[ys.FULL_RES_0].height)&&(this.renderTargets&&this.renderTargets.forEach(e=>e.dispose()),this.renderTargets=this.createRenderTargets(t.width,t.height)),this.renderTargets}createRenderTarget(t,e,i){return new bn(t,e,{format:Te,depthBuffer:i,stencilBuffer:!0,generateMipmaps:!1,minFilter:Ge,magFilter:Ge,depthTexture:i?new Qa(t,e,Ie):void 0})}createRenderTargets(t,e){const i=[];return i.push(this.createRenderTarget(t,e,!0)),i.push(this.createRenderTarget(t,e,!0)),i.push(this.createRenderTarget(t,e,!1)),i.push(this.createRenderTarget(t,e,!0)),i}render(t,e,i){const s=this.updateRenderTargets(i);if(!Br(e)&&!Ea(e))throw new Error("invalid camera");const r=this.renderer,a=[];a.push(this.classic);const o="far"in e&&"near"in e;if(this.occlusion.enabled&&o&&a.push(this.occlusion),this.inpainting.enabled&&o){const u=this.inpainting.parameters.fill_steps;for(let f=0;f<u;f++)a.push(this.inpainting)}this.edl.enabled&&o&&a.push(this.edl);const l=r.getClearAlpha();r.setClearAlpha(0);let h=ys.FULL_RES_0;for(let u=0;u<a.length;u++){const f=a[u],c=(h+1)%2;for(let d=0;d<f.passes.length;d++){let{material:m,output:_}=f.setup({targets:s,input:s[h],passIdx:d,camera:e});u===a.length-1&&d===f.passes.length-1?_=i??null:_||(_=s[c]),r.setRenderTarget(_),_!==i&&r.clear(),r.setViewport(0,0,_!=null?_.width:e.width,_!=null?_.height:e.height),m?(this.mesh.material=m,r.render(this.scene,this.camera)):r.render(t,e)}h=c}r.setClearAlpha(l)}dispose(){this.renderTargets&&(this.renderTargets.forEach(t=>t.dispose()),this.renderTargets.length=0)}}const lr={OPAQUE:0,POINT_CLOUD:1,TRANSPARENT:2},em=new bt,ZR=new bt;function ia(n,t){for(let e=0;e<n.length;e++)n[e].material.visible=t}function $R(n){const t=n.getClearColor(em),e=n.getClearAlpha(),i=ZR.setRGB(t.r,t.g,t.b,"srgb-linear");n.setClearColor(i),n.setClearAlpha(e),n.clear(),n.setClearColor(em),n.setClearAlpha(e)}class KR{constructor(t){this.renderer=t,this.buckets=[[],[],[]],this.sceneRenderTarget=null}prepareRenderTargets(t,e,i){return(!this.sceneRenderTarget||this.sceneRenderTarget.width!==t||this.sceneRenderTarget.height!==e||this.sceneRenderTarget.samples!==i)&&(this.sceneRenderTarget?.dispose(),this.effectComposer?.dispose(),this.sceneRenderTarget=new bn(t,e,{generateMipmaps:!1,magFilter:Ge,minFilter:Ge,depthBuffer:!0,samples:i,depthTexture:new Qa(t,e,Ie)}),this.effectComposer=new BR(this.renderer),this.effectComposer.addPass(new VR(this.sceneRenderTarget.texture)),this.effectComposer.addPass(new kR)),{composer:this.effectComposer,target:this.sceneRenderTarget}}render(t,e,i,s,r){const a=this.renderer,o=this.renderer.capabilities.maxSamples,l=r.enableMSAA?Math.min(o,4):0,{composer:h,target:u}=this.prepareRenderTargets(i,s,l);a.setRenderTarget(this.sceneRenderTarget),this.collectRenderBuckets(t),$R(a),this.renderer.render(t,e),this.renderMeshes(t,e,this.buckets[lr.OPAQUE]),this.renderPointClouds(t,e,u,this.buckets[lr.POINT_CLOUD],r),this.renderMeshes(t,e,this.buckets[lr.TRANSPARENT]),h.render(),this.onAfterRender()}renderPointClouds(t,e,i,s,r){if(s.length===0)return;this.pointCloudRenderer||(this.pointCloudRenderer=new jR(this.renderer));const a=this.pointCloudRenderer;a.edl.enabled=r.enableEDL,a.edl.parameters.radius=r.EDLRadius,a.edl.parameters.strength=r.EDLStrength,a.inpainting.enabled=r.enableInpainting,a.inpainting.parameters.fill_steps=r.inpaintingSteps,a.inpainting.parameters.depth_contrib=r.inpaintingDepthContribution,a.occlusion.enabled=r.enablePointCloudOcclusion,ia(s,!0),a.render(t,e,i),ia(s,!1)}renderMeshes(t,e,i){if(i.length===0)return;const s=this.renderer;ia(i,!0),s.render(t,e),ia(i,!1)}onAfterRender(){for(const t of this.buckets)ia(t,!0),t.length=0}dispose(){this.effectComposer?.dispose(),this.sceneRenderTarget?.dispose(),this.pointCloudRenderer?.dispose()}collectRenderBuckets(t){const e=this.buckets;t.traverse(i=>{const s=i,r=s.material;s.visible&&r!=null&&r.visible&&(r.visible=!1,s.userData.giro3dRenderPipeline?.usePointCloudPostProcessing===!0?e[lr.POINT_CLOUD].push(s):s.material.transparent?e[lr.TRANSPARENT].push(s):e[lr.OPAQUE].push(s))})}}const JR=`uniform sampler2D colorMapAtlas; // The color maps atlas
`,QR=`#define M_PI    3.1415926535897932384626433832795

// Pixel formats
const int PIXEL_FORMAT_RGBA = 1023;
const int PIXEL_FORMAT_RG = 1030;

// Texture types
const int TEXTURE_TYPE_FLOAT = 1015;
const int TEXTURE_TYPE_UINT8 = 1009;

// Converts a RG / Float color into a RGBA / Unsigned byte color
vec4 convert_RG_Float_RGBA_UnsignedByte(const in vec4 color, const in float _precision, const in float offset) {
    float f = (color.r + offset) / _precision;

    vec4 result;

    // https://stackoverflow.com/a/12553149/2704779
    result.b = floor(f / 256.0 / 256.0);
    result.g = floor((f - result.b * 256.0 * 256.0) / 256.0);
    result.r = floor(f - result.b * 256.0 * 256.0 - result.g * 256.0);
    // now we have a vec3 with the 3 components in range [0..255]. Let's normalize it!
    result /= 255.0;
    result.a = color.g;

    return result;
}

const int BLENDING_MODE_NONE = 0;
const int BLENDING_MODE_NORMAL = 1;
const int BLENDING_MODE_ADDITIVE = 2;
const int BLENDING_MODE_MULTIPLICATIVE = 3;

/**
 * Describe a color layer's attributes.
 */
struct LayerInfo {
    vec4        offsetScale; // The offset/scale tuple.
    vec4        color;       // Includes opacity/visible as alpha component
    vec2        textureSize; // The size, in pixels, of the atlas section mapping to this layer.
    int         mode;        // The layer mode (normal, mask)
    #if defined(ENABLE_ELEVATION_RANGE)
    vec2        elevationRange; // Optional elevation range for the layer. Any fragment above or below this range will be ignored.
    #endif
    vec3        brightnessContrastSaturation;
    int         blendingMode;
};

struct NoDataOptions {
    float       replacementAlpha;
    float       radius;
    bool        enabled;
};

float linearTransfer(float v) {
    return (v < 0.04045) ? v * 0.0773993808 : pow(v * 0.9478672986 + 0.0521327014, 2.4);
}

vec4 sRGBToLinear( in vec4 srgb ) {
    float r = linearTransfer(srgb.r);
    float g = linearTransfer(srgb.g);
    float b = linearTransfer(srgb.b);
    return vec4(r, g, b, srgb.a);
}

float getElevationAlpha(vec4 c) {
    // Elevation textures are in the RG Format, so the transparency/no-data
    // information is actually in the green channel rather than the alpha channel.
    return c.g;
}

/**
 * Returns the elevation value at the specified coordinate, or the default value if the pixel is transparent (no-data).
 */
float getElevationOrDefault(sampler2D tex, vec2 uv, float defaultValue) {
    vec4 c = texture2D(tex, uv);
    float alpha = getElevationAlpha(c);
    if (alpha == 0.0) {
        return defaultValue;
    }
    return c.r;
}

bool isNoData(sampler2D tex, vec2 uv) {
    float alpha = getElevationAlpha(texture2D(tex, uv));
    if (abs(alpha) < 0.001) {
        return true;
    }

    return false;
}

float getElevation(sampler2D tex, vec2 uv) {
    vec4 c = texture2D(tex, uv);
    return c.r;
}

vec4 blend(vec4 fore, vec4 back) {
    if (fore.a == 0. && back.a == 0.) {
        return vec4(0);
    }
    float alpha = fore.a + back.a * (1.0 - fore.a);
    vec3 color = (fore.rgb * fore.a) + back.rgb * (back.a * (1.0 - fore.a)) / alpha;

    return vec4(color, alpha);
}

vec4 applyBlending(vec4 fore, vec4 back, int blendingMode) {
    if (blendingMode == BLENDING_MODE_NORMAL) {
        return blend(fore, back);
    } else if (blendingMode == BLENDING_MODE_ADDITIVE) {
        vec3 rgb = clamp((fore.rgb * fore.a) + (back.rgb * back.a), 0.0, 1.0);
        return vec4(rgb, 1.0);
    } else if (blendingMode == BLENDING_MODE_MULTIPLICATIVE) {
        vec3 rgb = clamp(fore.rgb * back.rgb, 0.0, 1.0);
        return vec4(rgb, 1.0);
    } else {
        return fore;
    }
}

vec3 desaturate(vec3 color, float factor) {
    vec3 lum = vec3(0.299, 0.587, 0.114);
    vec3 gray = vec3(dot(lum, color));
    return mix(color, gray, factor);
}

// This version of atan is numerically stable around zero
// See https://stackoverflow.com/a/27228836
// This is used to circumvent a bug on Mac devices where this computation would produce visual artifacts.
float atan2(in float y, in float x) {
    return x == 0.0 ? sign(y) * M_PI / 2. : atan(y, x);
}

vec2 computeElevationDerivatives(vec2 dimensions, vec2 uv, sampler2D tex, float elevationFactor, vec4 offsetScale) {
    ivec2 texSize = textureSize(tex, 0);
    // Compute pixel dimensions, in normalized coordinates.
    // Since textures are not necessarily square, we must compute both width and height separately.
    float width = 1.0 / float(texSize.x);
    float height = 1.0 / float(texSize.y);

    // Now compute the elevations for the 8 neigbouring pixels
    // +---+---+---+
    // | a | b | c |
    // +---+---+---+
    // | d | e | f |
    // +---+---+---+
    // | g | h | i |
    // +---+---+---+
    // Note: 'e' is the center of the sample. We don't use it for derivative computation.
    float a = elevationFactor * getElevation(tex, uv + vec2(-width, height));
    float b = elevationFactor * getElevation(tex, uv + vec2( 0.0, height));
    float c = elevationFactor * getElevation(tex, uv + vec2( width, height));
    float d = elevationFactor * getElevation(tex, uv + vec2(-width, 0.0));
    float f = elevationFactor * getElevation(tex, uv + vec2( width, 0.0));
    float g = elevationFactor * getElevation(tex, uv + vec2(-width, -height));
    float h = elevationFactor * getElevation(tex, uv + vec2( 0.0, -height));
    float i = elevationFactor * getElevation(tex, uv + vec2( width, -height));

    float cellWidth = dimensions.x / (offsetScale.z * float(texSize.x));
    float cellHeight = dimensions.y / (offsetScale.w * float(texSize.y));
    float dzdx = ((c + 2.0 * f + i) - (a + 2.0 * d + g)) / (8.0 * cellWidth);
    float dzdy = ((g + 2.0 * h + i) - (a + 2.0 * b + c)) / (8.0 * cellHeight);

    return vec2(dzdx, dzdy);
}

/**
 * Returns the slope given the derivatives (X and Y derivatives)
 */
float calcSlope( vec2 derivatives ) {
    // https://desktop.arcgis.com/en/arcmap/10.3/tools/spatial-analyst-toolbox/how-slope-works.htm
    return atan(sqrt(derivatives.x * derivatives.x + derivatives.y * derivatives.y)); // In radians
}

/**
 * Returns the aspect (azimuth from the light source)
 */
float calcAspect ( vec2 derivatives ) {
    // https://desktop.arcgis.com/en/arcmap/10.3/tools/spatial-analyst-toolbox/how-aspect-works.htm
    float aspect = atan2(derivatives.y, -derivatives.x);
    if(aspect < 0.0){
        aspect = M_PI * 0.5 - aspect;
    } else if (aspect > M_PI * 0.5) {
        aspect = 2.0 * M_PI - aspect + M_PI * 0.5;
    } else {
        aspect = M_PI * 0.5 - aspect;
    }
    return aspect; // In radians
}

/**
 * Linear map between [min1, max1] and [min2, max2]
 */
float map(float value, float min1, float max1, float min2, float max2) {
    return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

vec3 getNormalFromDerivatives(float dx, float dy) {
    vec3 direction = normalize(vec3(-dx, dy, 1.0));
    float magnitude = sqrt(pow(direction.x, 2.0) + pow(direction.y, 2.0) + pow(direction.z, 2.0));
    return direction / magnitude;
}

vec2 clamp01(vec2 uv) {
    return vec2(
        clamp(uv.x, 0., 1.),
        clamp(uv.y, 0., 1.));
}

vec2 computeUv(vec2 uv, vec2 offset, vec2 scale) {
    return vec2(
        uv.x * scale.x + offset.x,
        uv.y * scale.y + offset.y);
}

float squaredDistance(vec2 a, vec2 b) {
    vec2 c = a - b;
    return dot(c, c);
}

/**
 * Returns the value of the valid pixel closest to uv.
 */
vec4 getNearestPixel(sampler2D tex, vec2 uv, int alphaChannel, float radius, float alpha) {
    const int SAMPLES = 64;
    const float fSAMPLES = float(SAMPLES);

    vec4 result = vec4(0, 0, 0, 0);
    float nearest = 9999.;
    float sqRadius = radius * radius;

    // This brute force approach produces very good visual results, but is quite costly.
    // Collect all the samples, then use only the closest valid sample to the requested position.
    for(int x = 0; x < SAMPLES; ++x) {
        for(int y = 0; y < SAMPLES; ++y) {
            float u = float(x) / fSAMPLES;
            float v = float(y) / fSAMPLES;

            vec2 samplePosition = vec2(u, v);

            vec4 color = texture2D(tex, samplePosition);

            // Is it a valid sample ?
            if(color[alphaChannel] == 1.) {
                // We don't need the absolute distance, since we are only interested
                // in the closest point: we avoid a costly square root computation.
                float dist = squaredDistance(samplePosition, uv);

                if (dist < nearest && dist <= sqRadius) {
                    nearest = dist;
                    result.rgb = color.rgb;
                    result[alphaChannel] = alpha;
                }
            }
        }
    }

    return result;
}

/*
 * Sample the texture, filling no-data (transparent) pixels with neighbouring
 * valid pixels.
 * Note: a pixel is considered no-data if its alpha channel is less than 1.
 * This way, if a bilinear interpolation touches a no-data pixel, it's also considered no-data.
 */
vec4 texture2DFillNodata(sampler2D tex, vec2 uv, NoDataOptions options, int alphaChannel) {
    vec4 value = texture2D(tex, uv);

    // Due to how no-data is determined here, we don't support non 1-bit alpha.
    if(value[alphaChannel] == 1.) {
        return value;
    }

    return getNearestPixel(tex, uv, alphaChannel, options.radius, options.replacementAlpha);
}

const int INTERPRETATION_RAW = 0;
const int INTERPRETATION_SCALED = 2;
const int INTERPRETATION_COMPRESS_TO_8BIT = 3;

struct Interpretation {
    int mode;
    bool negateValues;
    float min; // only for INTERPRETATION_SCALED
    float max; // only for INTERPRETATION_SCALED
};

vec4 grayscaleToRGB(vec4 c, Interpretation interpretation) {
    if (interpretation.mode == INTERPRETATION_RAW) {
        return c.rrrg;
    }

    return c.rrra;
}

const int OUTPUT_MODE_COLOR = 0;
const int OUTPUT_MODE_ELEVATION = 1;

/**
 * Decodes the raw color according to the specified interpretation.
 */
vec4 decodeInterpretation(vec4 raw, Interpretation interpretation) {
    vec4 result = raw;
    if (interpretation.mode == INTERPRETATION_SCALED) {
        float min = interpretation.min;
        float max = interpretation.max;
        float scale = max - min;
        result = vec4(
            min + raw.r * scale,
            min + raw.g * scale,
            min + raw.b * scale,
            raw.a);
    } else if (interpretation.mode == INTERPRETATION_COMPRESS_TO_8BIT) {
        float min = interpretation.min;
        float max = interpretation.max;
        float scale = 1.0 / (max - min);
        vec3 srgb = vec3(
            (raw.r - min) * scale,
            (raw.g - min) * scale,
            (raw.b - min) * scale);

        result = sRGBToLinear(vec4(srgb, raw.a));
    }

    if (interpretation.negateValues) {
        // Note that we don't flip the alpha channel
        return vec4(-result.r, -result.g, -result.b, result.a);
    }

    return result;
}

/**
 * Describes a color map.
 * Color maps are a way to change the color of a texture by
 * mapping the pixel's grayscale color into a value of the lookup table (LUT).
 * The pixel color acts like a UV value, that is then scaled with the min/max values
 * and mapped to the LUT texture.
 * Note: due to limitations in GLSL, the actual LUT texture must be in a separate uniform.
 */
struct ColorMap {
    int         mode;
    float       min;
    float       max;
    float       offset; // The V offset in the color map atlas texture.
};

const int COLORMAP_MODE_DISABLED = 0;
const int COLORMAP_MODE_ELEVATION = 1;
const int COLORMAP_MODE_SLOPE = 2;
const int COLORMAP_MODE_ASPECT = 3;

vec4 sampleColorMap(in float t, in float min, in float max, in sampler2D lut, in float v) {
    t = clamp(t, min, max);
    t = map(t, min, max, 0., 1.);
    return texture2D(lut, vec2(t, v));
}

vec4 computeColorMap(
    vec2 tileDimensions,
    LayerInfo layer,
    sampler2D sampledTexture,
    ColorMap colorMap,
    sampler2D lut,
    vec2 rawUv
) {
    float value;

    vec2 uv = computeUv(rawUv, layer.offsetScale.xy, layer.offsetScale.zw);

    if (colorMap.mode == COLORMAP_MODE_ELEVATION) {
        value = getElevation(sampledTexture, uv);
    } else {
        vec2 derivatives = computeElevationDerivatives(tileDimensions, uv, sampledTexture, 1.0, layer.offsetScale);
        if (colorMap.mode == COLORMAP_MODE_SLOPE) {
            value = calcSlope(derivatives);
        } else if (colorMap.mode == COLORMAP_MODE_ASPECT) {
            value = calcAspect(derivatives);
        }
        value *= 180.0 / M_PI; // Convert radians to degrees
    }

    vec4 rgba = sampleColorMap(value, colorMap.min, colorMap.max, lut, colorMap.offset);
    float a = texture2D(sampledTexture, uv).a;
    return vec4(rgba.rgb, rgba.a * a);
}

vec3 adjustBrightnessContrastSaturation(
    vec3 rgb,
    vec3 brightnessContrastSaturation
) {
    rgb = (rgb - 0.5) * brightnessContrastSaturation.y + 0.5;
    rgb += brightnessContrastSaturation.x;

    float luminance = dot(rgb, vec3(0.2126, 0.7152, 0.0722));
    return mix(vec3(luminance), rgb, brightnessContrastSaturation.z);
}
`,tC=`#if defined(ENABLE_LAYER_MASKS)
const int LAYER_MODE_NORMAL = 0;
const int LAYER_MODE_MASK = 1;
const int LAYER_MODE_MASK_INVERTED = 2;
#endif

#if VISIBLE_COLOR_LAYER_COUNT
#if defined(USE_ATLAS_TEXTURE)
uniform sampler2D   atlasTexture;         // Atlas texture shared among color layers
#else
uniform sampler2D   colorTextures[VISIBLE_COLOR_LAYER_COUNT]; // Individual textures for each color layer
#endif
uniform LayerInfo   layers[VISIBLE_COLOR_LAYER_COUNT]; // The color layers' infos
uniform ColorMap    layersColorMaps[VISIBLE_COLOR_LAYER_COUNT]; // The color layers' color maps
#endif

vec4 computeColor(vec2 rawUv, vec4 offsetScale, sampler2D tex) {
    vec2 uv = computeUv(rawUv, offsetScale.xy, offsetScale.zw);
    return texture2D(tex, uv);
}

vec4 computeColorLayer(
    vec2 tileDimensions,
    sampler2D texture,
    sampler2D lut,
    LayerInfo layer,
    ColorMap colorMap,
    vec2 uv
) {
    if (layer.offsetScale.zw != vec2(0.0)) {
        vec4 color;
        if (colorMap.mode != COLORMAP_MODE_DISABLED) {
            color = computeColorMap(tileDimensions, layer, texture, colorMap, lut, uv);
        } else {
            color = computeColor(uv, layer.offsetScale, texture);
        }
        vec3 rgb = color.rgb * layer.color.rgb;

        float a = color.a * layer.color.a;
        return vec4(adjustBrightnessContrastSaturation(rgb, layer.brightnessContrastSaturation), a);
    }

    return vec4(0);
}`,eC=`#if defined(ENABLE_CONTOUR_LINES)
    // Code inspired from https://github.com/NASA-AMMOS/3DTilesRendererJS/blob/master/example/customMaterial.js
    // Note: we use the 'height' variable rather than vWorldPosition.z because we want
    // this feature to work event when terrain deformation is disabled, and height
    // is always available.

    // thickness scale
    float upwardness = dot( vWorldNormal, vec3( 0.0, 1.0, 0.0 ) );
    float yInv = clamp( 1.0 - abs( upwardness ), 0.0, 1.0 );
    float thicknessScale = pow( yInv, 0.4 );
    thicknessScale *= 0.25 + 0.5 * ( vViewPosition.z + 1.0 ) / 2.0;

    // thickness
    float thickness = 0.01 * thicknessScale;

    float finalThickness = thickness * contourLines.thickness * 0.15;

    float contourLineAlpha = contourLines.color.a * 1.0;

    drawContourLine(height, contourLines.primaryInterval, finalThickness, vec4(contourLines.color.rgb, contourLineAlpha));

    drawContourLine(height, contourLines.secondaryInterval, finalThickness, vec4(contourLines.color.rgb, contourLineAlpha *  0.4));
#endif`,nC=`#if defined(ENABLE_CONTOUR_LINES)
struct ContourLine {
    float thickness; // 1 = default
    float primaryInterval; // A zero interval disables the line
    float secondaryInterval; // A zero interval disables the line
    vec4  color; // Stores both the color and opacity
};

uniform ContourLine contourLines; // 1 = default
#endif

void drawContourLine(float height, float interval, float thickness, vec4 color) {
    if (interval > 0.) {
        float dist = mod(height, interval);

        if (dist <= thickness) {
            gl_FragColor = blend(color, gl_FragColor);
        }
    }
}`,iC=`layout(location = 0) out highp vec4 pc_fragColor;
// GLSL version 3 does not define the built-in gl_FragColor, so we alias it
#define gl_FragColor pc_fragColor`,sC=`#if defined(ENABLE_GRATICULE)
    vec2 graticuleCoordinates = vec2(extent[0] + vUv.x * extent[2], extent[1] + vUv.y * extent[3]);
    drawGraticule(graticuleCoordinates, graticule);
#endif`,rC=`#if defined(ENABLE_GRATICULE)
struct Graticule {
    float thickness; // 1 = default
    // xOffset, yOffset, xStep, yStep
    vec4 position;
    vec4  color; // Stores both the color and opacity
};

uniform Graticule graticule;


float getGraticuleOpacity(float coordinate, float offset, float step, float thickness) {
    float dist = mod(coordinate + offset, step);

    float halfThickness = graticule.thickness / 2.0;
    float falloffWidth = graticule.thickness / 10.0;
    float fallofStart = halfThickness - falloffWidth;

    if (dist <= halfThickness) {
        float opacity = 1.0;
        if (dist > fallofStart) {
            float normalizedBorderDistance = 1.0 - ((dist - fallofStart) / falloffWidth);
            opacity *= normalizedBorderDistance;
        } else if (dist <= falloffWidth) {
            float normalizedBorderDistance = 1.0 - ((falloffWidth - dist) / falloffWidth);
            opacity *= normalizedBorderDistance;
        }

        return opacity;
    }

    return 0.0;
}

void drawGraticule(vec2 coordinate, Graticule graticule) {
    vec4 pos = graticule.position;
    float xOffset = pos[0];
    float yOffset = pos[1];
    float xStep = pos[2];
    float yStep = pos[3];

    if (xStep > 0. && yStep > 0.) {
        float xOpacity = getGraticuleOpacity(coordinate.x, xOffset, xStep, graticule.thickness);
        float yOpacity = getGraticuleOpacity(coordinate.y, yOffset, yStep, graticule.thickness);

        float opacity = graticule.color.a * max(xOpacity, yOpacity);

        vec4 finalColor = vec4(graticule.color.rgb, opacity);
        gl_FragColor = blend(finalColor, gl_FragColor);
    }
}
#endif`,aC=`const int HILLSHADE_DISABLED = 0;
const int HILLSHADE_SIMPLE = 1;
const int HILLSHADE_PHYSICAL = 2;

struct Hillshading {
    int   mode;       // One of HILLSHADE_DISABLED, HILLSHADE_SIMPLE, HILLSHADE_PHYSICAL

    float zFactor;    // The factor to apply to slopes.

    // HILLSHADE_SIMPLE specific parameters
    float intensity;  // The global lighting intensity
    float zenith;     // Zenith of sunlight, in degrees (0 - 90)
    float azimuth;    // Azimuth on sunlight, in degrees (0 - 360)
};

uniform Hillshading hillshading;

vec3 hillshade(in vec2 derivatives, in float zenith, in float azimuth, float intensity) {
    float slope = calcSlope(derivatives);
    float aspect = calcAspect(derivatives);
    float zenith_rad = hillshading.zenith * M_PI / 180.0; // in radians
    float azimuth_rad = hillshading.azimuth * M_PI / 180.0; // in radians
    float diffuse = ((cos(zenith_rad) * cos(slope)) + (sin(zenith_rad) * sin(slope) * cos(azimuth_rad - aspect)));

    diffuse = clamp(diffuse, 0., 1.);
    diffuse = mix(1., diffuse, intensity);

    return vec3(diffuse, diffuse, diffuse);
}`,oC=`#ifdef INTERSECTING_VOLUMES_SUPPORT
struct IntersectingVolume {
    mat4 viewToBoxNc;
    vec3 color;
};

struct IntersectingVolumes {
    int count;
    IntersectingVolume volumes[MAX_INTERSECTING_VOLUMES_COUNT];
};

uniform IntersectingVolumes intersectingVolumes;

void applyIntersectingVolumes(const vec4 viewPosition, inout vec4 color) {
    for (int i = 0; i < intersectingVolumes.count; i++) {
        vec4 volumeNc = intersectingVolumes.volumes[i].viewToBoxNc * viewPosition;
        volumeNc.xyz /= volumeNc.w;
        volumeNc.xyz = abs(volumeNc.xyz);
        if (volumeNc.x < 1.0 && volumeNc.y < 1.0 && volumeNc.z < 1.0) {
            color = vec4(intersectingVolumes.volumes[i].color, 1);
            return;
        }
    }
}
#endif`,lC=`#if defined(ENABLE_OUTLINES)
if (vUv.x < (OUTLINE_THICKNESS / baseTextureSize.x)) { // WEST
    gl_FragColor.rgb = tileOutlineColor;
} else if (vUv.x > 1.0 - (OUTLINE_THICKNESS / baseTextureSize.x)) { // EAST
    gl_FragColor.rgb = tileOutlineColor;
} else if (vUv.y < (OUTLINE_THICKNESS / baseTextureSize.y)) { // NORTH
    gl_FragColor.rgb = tileOutlineColor;
} else if (vUv.y > 1.0 - (OUTLINE_THICKNESS / baseTextureSize.y)) { // SOUTH
    gl_FragColor.rgb = tileOutlineColor;
}
#endif`,hC=`#if defined(ENABLE_OUTLINES)
const float OUTLINE_THICKNESS = 1.0;

uniform vec3 tileOutlineColor;
#endif`,cC=`precision highp float;
precision highp int;`,uC=`    uniform float       segments;
    uniform vec2        tileDimensions;
    uniform sampler2D   elevationTexture;
    uniform LayerInfo   elevationLayer;

    uniform float       elevationScaling;

#if defined (ENABLE_SKIRTS)
    // The vertex indices range that corresponds to the skirt bottom vertices
    uniform vec2        skirtVertexRange;
#endif

#if defined(STITCHING)
    struct Neighbour {
        vec4            offsetScale;
        float           diffLevel;
    };

    uniform Neighbour   neighbours[8];
    uniform sampler2D   neighbourTextures[8];

    const int   NULL = -1;
    const int   NO_CORNER_NEIGHBOUR = 0;
    const int   ALL_NEIGHBOURS_ARE_SAME_SIZE = 1;
    const int   SOME_NEIGHBOURS_ARE_BIGGER = 2;
    const float NO_NEIGHBOUR = -99.;
    const int   INNER_VERTEX = -1;

    const int TOP = 0;
    const int TOP_RIGHT = 1;
    const int RIGHT = 2;
    const int BOTTOM_RIGHT = 3;
    const int BOTTOM = 4;
    const int BOTTOM_LEFT = 5;
    const int LEFT = 6;
    const int TOP_LEFT = 7;

    struct CornerNeighbour {
        int location;
        float diffLevel;
    };

    bool isEdge(int location) {
        return mod(float(location), 2.) == 0.;
    }

    float readNeighbourElevation(vec2 uv, int neighbour, float defaultElevation) {
        // We don't want UV outside the unit square
        vec2 vv = clamp01(uv);

        vec4 offsetScale = neighbours[neighbour].offsetScale;
        vec2 neighbourUv = computeUv(vv, offsetScale.xy, offsetScale.zw);

        // Why can't we simply do neighbourTextures[neighbour] ?
        // It's because of a limitation of GLSL ES : texture arrays cannot be indexed dynamically.
        // They must be indexed by a constant expression (a literal or a constant).
        // See https://stackoverflow.com/a/60110986/2704779
        if (neighbour == TOP)
            return getElevationOrDefault(neighbourTextures[TOP], neighbourUv, defaultElevation);
        if (neighbour == TOP_RIGHT)
            return getElevationOrDefault(neighbourTextures[TOP_RIGHT], neighbourUv, defaultElevation);
        if (neighbour == RIGHT)
            return getElevationOrDefault(neighbourTextures[RIGHT], neighbourUv, defaultElevation);
        if (neighbour == BOTTOM_RIGHT)
            return getElevationOrDefault(neighbourTextures[BOTTOM_RIGHT], neighbourUv, defaultElevation);
        if (neighbour == BOTTOM)
            return getElevationOrDefault(neighbourTextures[BOTTOM], neighbourUv, defaultElevation);
        if (neighbour == BOTTOM_LEFT)
            return getElevationOrDefault(neighbourTextures[BOTTOM_LEFT], neighbourUv, defaultElevation);
        if (neighbour == LEFT)
            return getElevationOrDefault(neighbourTextures[LEFT], neighbourUv, defaultElevation);
        if (neighbour == TOP_LEFT)
            return getElevationOrDefault(neighbourTextures[TOP_LEFT], neighbourUv, defaultElevation);
    }

    // Returns the seam or corner that this UV belongs to.
    // If this UV does not belong to a seam nor a corner, returns INNER_VERTEX
    int locateVertex(vec2 uv) {
        const float ONE = 1.;
        const float ZERO = 0.;

        uv = clamp01(uv);

        float x = uv.x;
        float y = uv.y;

        if (y == ONE) {
            if (x == ZERO) {
                return TOP_LEFT;
            } else if (x == ONE) {
                return TOP_RIGHT;
            } else {
                return TOP;
            }
        } else if (y == ZERO) {
            if (x == ZERO) {
                return BOTTOM_LEFT;
            } else if (x == ONE) {
                return BOTTOM_RIGHT;
            } else {
                return BOTTOM;
            }
        } else if (x == ONE) {
            return RIGHT;
        } else if (x == ZERO) {
            return LEFT;
        } else {
            return INNER_VERTEX;
        }
    }

    /**
    * Computes the offsets of vertex position and UV coordinate to apply to this vertex
    * in order to fuse it with a neighbouring vertex.
    */
    bool computeXYStitchingOffsets(
        // the UV of the vertex
        vec2 uv,
        // the location of the vertex (seam, corner, or inner)
        int location,
        // the resulting offset to apply to the vertex local space position
        out vec3 vertexOffset,
        // the resulting offset to apply to the vertex UV
        out vec2 uvOffset) {

        vec3 factor;
        float axis;

        const vec2 NO_UV_OFFSET = vec2(0, 0);
        const vec3 NO_POS_OFFSET = vec3(0, 0, 0);

        if (location == RIGHT || location == LEFT) {
            factor = vec3(0, 1, 0);
            axis = uv.y;
        } else if (location == TOP || location == BOTTOM) {
            factor = vec3(1, 0, 0);
            axis = uv.x;
        } else {
            // we only move vertices that do belong to seams and nothing else.
            vertexOffset = NO_POS_OFFSET;
            uvOffset = NO_UV_OFFSET;
            return false;
        }

        float diffLevel = neighbours[location].diffLevel;
        if (diffLevel == NO_NEIGHBOUR) {
            vertexOffset = NO_POS_OFFSET;
            uvOffset = NO_UV_OFFSET;
            return false;
        }

        // XY-stitching only concerns tiles smaller than their neighbour.
        if (diffLevel < 0.) {
            float neighbourFactor = pow(2.0, abs(diffLevel));
            float modulo = neighbourFactor / segments;
            float offset = fract(axis / modulo) * modulo;
            uvOffset = offset * factor.xy;
            vertexOffset = offset * factor * vec3(tileDimensions, 0);
            return true;
        } else {
            vertexOffset = NO_POS_OFFSET;
            uvOffset = NO_UV_OFFSET;
            return false;
        }
    }

    CornerNeighbour getNeighbour(int location) {
        float diffLevel = neighbours[location].diffLevel;
        CornerNeighbour result;

        if (diffLevel != NO_NEIGHBOUR) {
            result.location = location;
            result.diffLevel = diffLevel;
        } else {
            result.location = NULL;
            result.diffLevel = NO_NEIGHBOUR;
        }

        return result;
    }

    /**
    * Returns the locations of the three possible neighbours of this corner location.
    * If a neighbour is not present, its value is NULL.
    * If a neighbour is bigger than us, short-circuit and return only this neighbour.
    * Returns true if at least one corner neighbour exists.
    */
    ivec4 getCornerNeighbours(int location) {
        int result = ALL_NEIGHBOURS_ARE_SAME_SIZE;

        int n0 = NULL;
        int n1 = NULL;
        int n2 = NULL;

        CornerNeighbour cn0;
        CornerNeighbour cn1;
        CornerNeighbour cn2;

        float biggerDiffLevel = 0.;

        bool atLeastOne = false;

        float floc = float(location);

        // one of the neighbour is the location itself of course
        cn0 = getNeighbour(location);
        if (cn0.diffLevel != NO_NEIGHBOUR) {
            biggerDiffLevel = min(biggerDiffLevel, cn0.diffLevel);
            atLeastOne = true;
        }

        int next = int(mod(floc + 1., 8.));
        cn1 = getNeighbour(next);
        if (cn1.diffLevel != NO_NEIGHBOUR) {
            biggerDiffLevel = min(biggerDiffLevel, cn1.diffLevel);
            atLeastOne = true;
        }

        int prev = int(mod(floc - 1., 8.));
        cn2 = getNeighbour(prev);
        if (cn2.diffLevel != NO_NEIGHBOUR) {
            biggerDiffLevel = min(biggerDiffLevel, cn2.diffLevel);
            atLeastOne = true;
        }

        if (atLeastOne) {
            // Eliminate corners that are smaller than the others
            if (cn0.location != NULL && cn0.diffLevel != biggerDiffLevel) {
                cn0.location = NULL;
                result = SOME_NEIGHBOURS_ARE_BIGGER;
            }
            if (cn1.location != NULL && cn1.diffLevel != biggerDiffLevel) {
                cn1.location = NULL;
                result = SOME_NEIGHBOURS_ARE_BIGGER;
            }
            if (cn2.location != NULL && cn2.diffLevel != biggerDiffLevel) {
                cn2.location = NULL;
                result = SOME_NEIGHBOURS_ARE_BIGGER;
            }

            n0 = cn0.location;
            n1 = cn1.location;
            n2 = cn2.location;

            return ivec4(result, n0, n1, n2);
        }

        return ivec4(NO_CORNER_NEIGHBOUR, NULL, NULL, NULL);
    }

    float computeZStitchedElevation(vec2 uv, int location, float currentElevation) {
        // First case : the vertex is on an edge
        if (isEdge(location)) {
            float diffLevel = neighbours[location].diffLevel;

            // We don't have any neighbour at this location
            if (diffLevel == NO_NEIGHBOUR) {
                return currentElevation;
            }

            // If our neighbour has the same level (hence size), we average the two elevations
            // This neighbour will do the same in its own vertex shader with our elevation, and
            // the two vertices will have the same height.
            float neighbourElevation = readNeighbourElevation(uv, location, currentElevation);
            if (diffLevel == 0.) {
                return mix(currentElevation, neighbourElevation, 0.5);
            } else if (diffLevel < 0.) {
                // If our neighbour is bigger than us, we don't average. Instead, we take its elevation.
                // The reason for this behaviour is that it's not possible for the bigger neighbour to
                // average with our elevation, as the bigger neighbour can have more than one neighbour
                // for the same edge, making the computation really impractical.
                return neighbourElevation;
            }
        } else {
            // Corner case (pun intended). This case is more complicated as we can have up to 3 neighbours,
            // and the rule differ whether one neighbour is bigger than us.
            // If all the neighbours of this corner have the same depth, we average, otherwise we take the
            // elevation of the biggest neighbour.

            // First, we need to collect the theoretical neighbours, then eliminate the absent ones.
            ivec4 corners = getCornerNeighbours(location);

            int cornerSituation = corners[0];

            // First, check that we have at least one corner neighbour.
            if (cornerSituation != NO_CORNER_NEIGHBOUR) {
                int n0, n1, n2;

                n0 = corners[1];
                n1 = corners[2];
                n2 = corners[3];

                float sum;
                float weight;

                if (cornerSituation == ALL_NEIGHBOURS_ARE_SAME_SIZE) {
                    // Now compute the weighted average between existing (same level) neighbours.
                    sum = currentElevation;
                    weight = 1.;
                } else {
                    // If the neighbour(s) are bigger, we don't average with our own elevation, but
                    // we only consider the neighbours' elevation.
                    sum = 0.;
                    weight = 0.;
                }

                if (n0 != NULL) {
                    sum += readNeighbourElevation(uv, n0, currentElevation);
                    weight += 1.;
                }
                if (n1 != NULL) {
                    sum += readNeighbourElevation(uv, n1, currentElevation);
                    weight += 1.;
                }
                if (n2 != NULL) {
                    sum += readNeighbourElevation(uv, n2, currentElevation);
                    weight += 1.;
                }

                return sum / weight;
            }
        }

        return currentElevation;
    }
#endif
`,fC=`// The elevation offset to apply to vertices
float elevation = 0.0;

#if defined(GLOBE)
    // Nothing to do
#else
    // In flat mode, the vertex shader does the terrain deformation on the Z-axis,
    // since this axis is the same as the local up vector.
    transformed.z = 0.0;
#endif

#if defined(TERRAIN_DEFORMATION)
#if defined(ELEVATION_LAYER)
if(elevationLayer.offsetScale.z > 0.) {
    vec2 vVv = computeUv(vUv, elevationLayer.offsetScale.xy, elevationLayer.offsetScale.zw);

    elevation = getElevation(elevationTexture, vVv);

#if defined(GLOBE)
    // Disabled: stitching does not work well we curved surfaces (globes)
#elif defined(STITCHING)
    /*
        Stitching aims to eliminate visible cracks between neighbouring tiles, that are caused
        by slight discrepancies in elevation and a different level of detail (LOD).

        This process contains 2 steps : XY-stitching and Z-stitching.

        XY-stitching
        ============

        XY-stitching works on the horizontal plane and is used to weld seams for neighbour tiles
        that have a different levels.

        The smallest tile (with the highest level) has a higher vertex density along the seam.
        Meaning that some vertices will not have an equivalent vertex in the neighbour, leading
        to visible cracks.

        In this figure, XY-stitching moves vertex A along the seam to the position of B.
        A and B have now exactly the same position in space, and the crack is removed.

        +------B------+------+      +------A+B----+------+
        |      |             |      |    / |             |
        |      |             |      | /    |             |
        +------A             +  =>  +      |             |
        |      |             |      |      |             |
        |      |             |      |      |             |
        +------+------+------+      +------+------+------+

        Note : XY-stitching only moves intermediate vertices of the seams, not corner vertices.

        Z-stitching
        ============

        Z-stitching is used to reconcile the variations in elevation (on the Z-axis) between the
        neighbouring seams, due to the fact that elevation pixels may have slightly different
        values on each side of the seam.
    */

    // Locate the vertex (is it on a seam, on a corner, or an inner vertex ?)
    int location = locateVertex(uv);

    // Don't perform stitching on vertices that are not on borders
    if (location != INNER_VERTEX) {
        vec3 vertexOffset;
        vec2 uvOffset;

        // Is there XY-stiching ?
        if (computeXYStitchingOffsets(
                vUv,
                location,
                vertexOffset,
                uvOffset)) {

            // move the UV and the vertex to perform XY-stitching
            vUv -= uvOffset;
            transformed -= vertexOffset;

            // sanitize the UV to fight off potential rounding errors (we don't want the UV to
            // be outside the unit square)
            vUv = clamp01(vUv);

            // The vertex has moved, maybe now it location has changed (from seam to corner)
            location = locateVertex(vUv);
        }

        // Get the elevation of our vertex in our texture
        vec2 elevUv = computeUv(vUv, elevationLayer.offsetScale.xy, elevationLayer.offsetScale.zw);
        float currentElevation = getElevation(elevationTexture, elevUv);

        // Then apply Z-stitching
        elevation = computeZStitchedElevation(vUv, location, currentElevation);
    }
#endif // STITCHING
}
#endif // ELEVATION_LAYER

#if defined(ENABLE_SKIRTS)
    bool isBottomVertex = vUv.x <= -999.0 && vUv.y <= -999.0;
    // Skirt bottom vertices must not be affected by terrain
    // deformation since they have a pre-defined height.
    if (isBottomVertex) {
        elevation = skirtElevation;
    }
#endif

#if defined(GLOBE)
    vec3 upVector = objectNormal;
#else
    vec3 upVector = vec3(0, 0, 1);
#endif
    transformed.xyz += upVector * elevation * elevationScaling;
#endif // TERRAIN_DEFORMATION
`;function dC(){const n=Ht;n.giro3d_precision_qualifiers=cC,n.giro3d_common=QR,n.giro3d_outline_pars_fragment=hC,n.giro3d_outline_fragment=lC,n.giro3d_compose_layers_pars_fragment=tC,n.giro3d_colormap_pars_fragment=JR,n.giro3d_contour_line_pars_fragment=nC,n.giro3d_contour_line_fragment=eC,n.giro3d_fragment_shader_header=iC,n.giro3d_graticule_fragment=sC,n.giro3d_graticule_pars_fragment=rC,n.giro3d_hillshading_pars_fragment=aC,n.giro3d_intersecting_volume_pars=oC,n.giro3d_terrain_pars_vertex=uC,n.giro3d_terrain_vertex=fC}const pC=new Z;function mC(n,t,e,i){const s=new bn(n,t,{type:e,format:Te});return s.texture.minFilter=Ne.getCompatibleTextureFilter(Fe,e,i),s.texture.magFilter=Ge,s.texture.generateMipmaps=!1,s.depthBuffer=!0,s.depthTexture=new Qa(n,t,os),s}function gC(n){return n.enableEDL||n.enableInpainting||n.enablePointCloudOcclusion}function _C(){const n=document.createElement("div");return n.id="webgl-error-message",n.style.fontFamily="monospace",n.style.fontSize="13px",n.style.fontWeight="normal",n.style.textAlign="center",n.style.background="#fff",n.style.color="#000",n.style.padding="1.5em",n.style.width="400px",n.style.margin="5em auto 0",n.innerHTML=window.WebGLRenderingContext!=null?['Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br />','Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.<br>','See also <a href="https://www.khronos.org/webgl/wiki/BlacklistsAndWhitelists">graphics card blacklisting</a>'].join(`
`):['Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br/>','Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.<br>',"You can also try another browser like Firefox or Chrome."].join(`
`),n}function vC(n,t){try{const e=new s0({...t,canvas:t?.canvas??document.createElement("canvas"),antialias:t?.antialias??!0,alpha:t?.alpha??!0,logarithmicDepthBuffer:t?.logarithmicDepthBuffer??!1});return e.localClippingEnabled=!0,e}catch(e){const i="Failed to create WebGLRenderer";throw console.error(i,e),n.appendChild(_C()),e instanceof Error?new Error(`${i}: ${e.message}`):new Error(i)}}class xC{_renderTargets=new Map;clearAlpha=1;clearColor=197896;constructor(t,e){dC(),this.width=t.clientWidth,this.height=t.clientHeight,e?.renderer instanceof s0?this.renderer=e?.renderer:this.renderer=vC(t,{...e?.renderer}),this.renderer.debug.checkShaderErrors=!1,this.labelRenderer=new uR,this.renderer.domElement.tabIndex===-1&&(this.renderer.domElement.tabIndex=-1),to.updateCapabilities(this.renderer);let i=e?.clearColor;i===void 0?i=197896:i===null&&(this.clearAlpha=0,i=0),this.clearColor=i,this.renderer.setClearColor(this.clearColor,this.clearAlpha),this.renderer.clear(),this.renderer.autoClear=!1,this.renderer.domElement.style.position="absolute",this.labelRenderer.domElement.style.position="absolute",this.labelRenderer.domElement.style.top="0",this.labelRenderer.domElement.style.pointerEvents="none",this.labelRenderer.domElement.style.zIndex="0",this.renderer.setSize(this.width,this.height),this.labelRenderer.setSize(this.width,this.height),t.appendChild(this.renderer.domElement),t.appendChild(this.labelRenderer.domElement),this._renderPipeline=null,this.renderingOptions=new DR}dispose(){for(const t of this._renderTargets.values())t.dispose();this._renderTargets.clear(),this.labelRenderer.domElement.remove(),this.renderer.domElement.remove(),this.renderer.dispose()}onWindowResize(t,e){this.width=t,this.height=e;for(const i of this._renderTargets.values())i.setSize(this.width,this.height);this.renderer.setSize(this.width,this.height),this.labelRenderer.setSize(this.width,this.height)}getWindowSize(t){return t=t??new Z,t.set(this.width,this.height)}render(t,e){this.renderer.setRenderTarget(null);const i=this.renderer.getDrawingBufferSize(pC);i.width===0||i.height===0||(this.renderer.setClearColor(this.clearColor,this.clearAlpha),this.renderer.clear(),gC(this.renderingOptions)?this.renderUsingCustomPipeline(t,e):this.renderer.render(t,e),this.labelRenderer.render(t,e))}renderUsingCustomPipeline(t,e){this._renderPipeline||(this._renderPipeline=new KR(this.renderer)),this._renderPipeline.render(t,e,this.width,this.height,this.renderingOptions)}acquireRenderTarget(t){let e=this._renderTargets.get(t);if(!e){const i=mC(this.width,this.height,t,this.renderer);this._renderTargets.set(t,i),e=i}return e}renderToBuffer(t){const e=t.zone||{x:0,y:0,width:this.width,height:this.height},{scene:i,camera:s}=t;t.clearColor!=null&&this.renderer.setClearColor(t.clearColor,1);const r=t.datatype??ue,a=this.acquireRenderTarget(r);this.renderToRenderTarget(i,s,a,e),this.renderer.setClearColor(this.clearColor,this.clearAlpha),e.x=Math.max(0,Math.min(e.x,this.width)),e.y=Math.max(0,Math.min(e.y,this.height));const o=4*e.width*e.height,l=r===ue?new Uint8Array(o):new Float32Array(o);return this.renderer.readRenderTargetPixels(a,e.x,this.height-(e.y+e.height),e.width,e.height,l),l}renderToRenderTarget(t,e,i,s){i==null&&(i=this.acquireRenderTarget(ue));const r=this.renderer.getRenderTarget();return i.viewport.set(0,0,i.width,i.height),s!=null&&(i.scissor.set(Math.max(0,s.x),Math.max(i.height-(s.y+s.height)),s.width,s.height),i.scissorTest=!0),this.renderer.setRenderTarget(i),this.renderer.clear(),this.renderer.render(t,e),this.renderer.setRenderTarget(r),i.scissorTest=!1,i}static bufferToImage(t,e,i){const s=document.createElement("canvas"),r=s.getContext("2d");if(r==null)throw new Error("could not acquire 2D rendering context on canvas");s.width=e,s.height=i;const a=r.getImageData(0,0,e,i);a.data.set(t),r.putImageData(a,0,0);const o=new Image;return o.src=s.toDataURL(),o}}const nm=()=>[];class yC extends pn{isMemoryUsage=!0;_globalPool=new c0;_renderTargets=new Map;_timeout=null;constructor(t,e){super(),this._cleanupTimeoutMs=t,this._maxPoolSize=e}getMemoryUsage(t){this._globalPool.size!==0&&this._globalPool.forEach((e,i)=>{i===t.renderer&&e.forEach(s=>Ne.getMemoryUsage(t,s))})}acquire(t,e,i,s){const r=this._globalPool.getOrCreate(t,s,nm);if(r.length>0){const o=r.pop();return o.setSize(e,i),o}const a=new bn(e,i,s);return this._renderTargets.set(a,s),a}get count(){return this._renderTargets.size}release(t,e){const i=this._renderTargets.get(t);if(i){const s=this._globalPool.getOrCreate(e,i,nm);s.length<this._maxPoolSize?s.push(t):(t.dispose(),this._renderTargets.delete(t))}this._timeout&&clearTimeout(this._timeout),this._timeout=setTimeout(()=>this.cleanup(),this._cleanupTimeoutMs)}cleanup(){this._timeout=null,this._globalPool.forEach(t=>{t.forEach(e=>{e.dispose(),this._renderTargets.delete(e)})}),this._globalPool.clear(),this.dispatchEvent({type:"cleanup"})}}const Ru=new yC(50,16),MC=new rn(Yt.epsg4326,0,0),EC=new Z,SC=new C,wC=new C,tc=new Oi,Go=new Xt,ec=new Hs,TC=new C,bC=new C,AC=new C(0,0,0),RC=new C;let nc;const CC=new C(0,0,1);class wr{get semiMajorAxis(){return this._semiMajor}get semiMinorAxis(){return this._semiMinor}get flattening(){return this._flattening}get equatorialCircumference(){return this._equatorialCircumference}get eccentricity(){return this._eccentricity}get compressionFactor(){return this._semiMinor/this._semiMajor}constructor(t){this._semiMajor=t.semiMajorAxis,this._semiMinor=t.semiMinorAxis;const e=(this._semiMajor-this._semiMinor)/this._semiMajor;this._sqEccentricity=Math.sqrt(1-this._semiMinor**2/this._semiMajor**2),this._eccentricity=Math.sqrt(2*e-e*e),this._flattening=e;const i=this._semiMajor,s=(1/i)**2,r=this._semiMinor;this._radii=new C(i,i,r),this._invRadiiSquared=new C(s,s,(1/r)**2),this._equatorialCircumference=Math.PI*2*this._semiMajor}static get WGS84(){return nc==null&&(nc=new wr({semiMajorAxis:6378137,semiMinorAxis:6356752314245e-6})),nc}static sphere(t){return new wr({semiMinorAxis:t,semiMajorAxis:t})}scale(t){return new wr({semiMajorAxis:this.semiMajorAxis*t,semiMinorAxis:this.semiMinorAxis*t})}grow(t){return new wr({semiMajorAxis:this.semiMajorAxis+t,semiMinorAxis:this.semiMinorAxis+t})}toCartesian(t,e,i,s){s=s??new C;const r=Math.cos(t*qt.DEG2RAD),a=Math.sin(t*qt.DEG2RAD),o=Math.cos(e*qt.DEG2RAD),l=Math.sin(e*qt.DEG2RAD),h=this._semiMajor/Math.sqrt(1-this._eccentricity*this._eccentricity*a*a),u=(h*(1-this._eccentricity*this._eccentricity)+i)*a;return s.set((h+i)*r*o,(h+i)*r*l,u),s}getEastNorthUpMatrix(t,e,i){const s=this.toCartesian(t,e,0,SC);return this.getEastNorthUpMatrixFromCartesian(s,i)}getEastNorthUpMatrixFromCartesian(t,e){const s=this.getNormalFromCartesian(t,wC),r=TC.crossVectors(CC,s).normalize(),a=bC.crossVectors(s,r).normalize(),o=e??new Xt;return o.set(r.x,r.y,r.z,0,a.x,a.y,a.z,0,s.x,s.y,s.z,0,0,0,0,1).transpose(),o}intersectRay(t,e){return Go.makeScale(this._radii.x,this._radii.y,this._radii.z).invert(),tc.center.set(0,0,0),tc.radius=1,e=e??new C,ec.copy(t).applyMatrix4(Go),ec.intersectSphere(tc,e)?(Go.makeScale(this._radii.x,this._radii.y,this._radii.z),e.applyMatrix4(Go),e):null}getNormal(t,e,i){return this.toCartesian(t,e,0,i).multiply(this._invRadiiSquared).normalize()}getNormalFromCartesian(t,e){return e=e??new C,e.copy(t).multiply(this._invRadiiSquared).normalize()}toGeodetic(t,e,i,s){s=s??new rn(Yt.epsg4979,0,0,0);const r=Math.atan2(e,t),a=Math.sqrt(t**2+e**2),o=Math.atan2(i*this._semiMajor,a*this._semiMinor),l=Math.atan2(i+this._eccentricity**2*this._semiMinor*Math.sin(o)**3,a-this._sqEccentricity**2*this._semiMajor*Math.cos(o)**3),h=this._semiMajor/Math.sqrt(1-this._sqEccentricity**2*Math.sin(l)**2);let u=a/Math.cos(l)-h;const f=qt.radToDeg(l),c=qt.radToDeg(r);if(Math.abs(Math.abs(f)-90)<1e-7){const d=this._semiMinor;u=Math.abs(i)-d}return s.set(Yt.epsg4979,c,f,u),s}getParallelArcLength(t,e){const i=this._semiMajor*Math.cos(t*qt.DEG2RAD),s=2*Math.PI*i;return e/360*s}getMeridianArcLength(t,e){return Math.abs(t-e)/360*this._equatorialCircumference}getExtentDimensions(t,e){if(!t.crs.isEpsg(4326))throw new Error("not a WGS 84 extent (EPSG:4326)");const i=t.center(MC),s=t.dimensions(EC),r=this.getParallelArcLength(i.latitude,s.width),a=this.getMeridianArcLength(t.north,t.south);return e=e??new Z,e.set(r,a),e}getOpticalHorizon(t,e){e=e??AC;const i=ec.set(t,e.clone().sub(t)),s=this.intersectRay(i,RC);if(s==null)return null;const r=t.distanceTo(s);return Math.sqrt(r*(2*this.semiMajorAxis+r))}isHorizonVisible(t,e,i=1){const s=this._semiMajor*i,r=this._semiMajor*i,a=this._semiMinor*i,o=t.x/s,l=t.y/r,h=t.z/a,u=o*o+l*l+h*h-1,f=e.x/s,c=e.y/r,d=e.z/a,m=f-o,_=c-l,g=d-h,p=-(m*o+_*l+g*h);return!(p>u&&p*p/(m*m+_*_+g*g)>u)}}function PC(n){return n?.hasDefaultPointOfView===!0}function LC(n){return n!=null&&typeof n=="object"?"origin"in n&&bu(n.origin)&&"target"in n&&bu(n.target)&&"orthographicZoom"in n&&typeof n.orthographicZoom=="number":!1}const IC=new C(0,0,0),Xe={vec3:new C,frustum:new ih,matrix:new Xt,obbMatrix:new Xt,box3:new Be,up:new C,sphere:new Oi},$n=[new C,new C,new C,new C,new C,new C,new C,new C],im=new Xt,sm=2,rm=2e9;function b0(n,t){const e=n.fov/2,i=qt.degToRad(e);return t/Math.tan(i)}function A0(n,t){const e=n.right-n.left,i=n.top-n.bottom;return Math.max(e,i)/(t*2)/2}class DC extends pn{_maxFar=rm;_minNear=sm;_controls=null;_onControlsUpdated=()=>this.dispatchEvent({type:"change"});_frustum=new ih;get width(){return this._width}get height(){return this._height}get camera(){return this._camera}set camera(t){if(t!=null)this._camera=t;else throw new Error("a camera is required")}constructor(t){super();const{width:e,height:i,crs:s}=t;this._coordinateSystem=s,this._camera=t.camera??new zn(30,e/i),this._camera.near=sm,this._camera.far=rm,this._camera.updateProjectionMatrix(),this._viewMatrix=new Xt,this._width=e,this._height=i,this._preSSE=1/0}get crs(){return this._coordinateSystem}get preSSE(){return this._preSSE}set preSSE(t){this._preSSE=t}get viewMatrix(){return this._viewMatrix}get near(){return this.camera.near}get frustum(){return this._frustum}set near(t){if(!Number.isFinite(t)||t<0){console.warn(`Invalid near plane distance: ${t}`);return}this.camera.near=qt.clamp(t,this.minNearPlane,this.maxFarPlane)}get far(){return this.camera.far}set far(t){if(!Number.isFinite(t)||t<0){console.warn(`Invalid far plane distance: ${t}`);return}this.camera.far=qt.clamp(t,this.minNearPlane,this.maxFarPlane)}get maxFarPlane(){return this._maxFar}set maxFarPlane(t){this._maxFar=t,this.camera.far=Math.min(this.camera.far,t)}get minNearPlane(){return this._minNear}set minNearPlane(t){this._minNear=t,this.camera.near=Math.max(this.camera.near,t)}get controls(){return this._controls}setControls(t){t!=null?t.addEventListener("change",this._onControlsUpdated):this._controls?.removeEventListener("change",this._onControlsUpdated),this._controls=t}resetPlanes(){this.near=this.minNearPlane,this.far=this.maxFarPlane}update(){this._controls?.update(),this.camera.updateMatrixWorld(),this.camera.updateProjectionMatrix(),this._viewMatrix.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse),this._frustum.setFromProjectionMatrix(this._viewMatrix)}setSize(t,e){if(t!=null&&e!=null){this._width=t,this._height=e;const i=t/e;if(Br(this.camera))this.camera.aspect!==i&&(this.camera.aspect=i);else if(Ea(this.camera)){const s=this.camera,a=(s.right-s.left)/i;s.top=a/2,s.bottom=-a/2}}this.camera.updateProjectionMatrix()}position(t){return new rn(this.crs,this.camera.position).as(t??this.crs)}isOBBVisible(t){const e=Xe.box3.setFromCenterAndSize(IC,t.getSize(Xe.vec3)),i=Xe.obbMatrix.setFromMatrix3(t.rotation).setPosition(t.center),s=Xe.matrix.multiplyMatrices(this._viewMatrix,i);return Xe.frustum.setFromProjectionMatrix(s),Xe.frustum.intersectsBox(e)}isBox3Visible(t,e){return e&&!e.equals(im)?(Xe.matrix.multiplyMatrices(this._viewMatrix,e),Xe.frustum.setFromProjectionMatrix(Xe.matrix),Xe.frustum.intersectsBox(t)):this._frustum.intersectsBox(t)}isSphereVisible(t,e){return e&&!e.equals(im)?(Xe.matrix.multiplyMatrices(this._viewMatrix,e),Xe.frustum.setFromProjectionMatrix(Xe.matrix),Xe.frustum.intersectsSphere(t)):this._frustum.intersectsSphere(t)}box3SizeOnScreen(t,e){const i=this.projectBox3PointsInCameraSpace(t,e);if(!i)return Xe.box3.makeEmpty();for(let s=0;s<8;s++)i[s].applyMatrix4(this.camera.projectionMatrix);return Xe.box3.setFromPoints(i)}getUpVector(t,e){return this._coordinateSystem.isEpsg(4978)?wr.WGS84.getNormalFromCartesian(t,e):(e=e??new C,e.copy(an.DEFAULT_UP))}getDefaultPointOfView(t,e){if(t==null)return null;const s=(iR(t)?t:new Be().setFromObject(t)).getBoundingSphere(Xe.sphere),r=s.center,a=e?.camera??this.camera,o=this.getUpVector(r,Xe.up),l=s.radius*1.2;let h=0,u=1;if(Br(a))h=b0(a,l);else if(Ea(a))u=A0(a,l),h=l*4;else return null;const c={origin:r.clone().addScaledVector(o,h),target:r,orthographicZoom:u};return Object.freeze(c),c}applyPointOfView(t,e){if(t!=null){e&&this.camera.position.copy(t.origin);let i=t.target;this.camera.position.x===t.target.x&&this.camera.position.y===t.target.y&&(i=t.target.clone().setY(t.target.y+-.001)),this.camera.lookAt(i),Ea(this.camera)&&(this.camera.zoom=t.orthographicZoom),this.camera.updateMatrixWorld(!0)}this.dispatchEvent({type:"change"})}goTo(t,e){if(t==null)return null;let i=null;return LC(t)?i={...t}:PC(t)?i=t.getDefaultPointOfView({camera:this.camera}):i=this.getDefaultPointOfView(t),i!=null&&this.applyPointOfView(i,e?.allowTranslation??!0),Object.freeze(i)}projectBox3PointsInCameraSpace(t,e){if(!("near"in this.camera))return;let i=this.camera.matrixWorldInverse;e&&(i=Xe.matrix.multiplyMatrices(this.camera.matrixWorldInverse,e)),$n[0].set(t.min.x,t.min.y,t.min.z).applyMatrix4(i),$n[1].set(t.min.x,t.min.y,t.max.z).applyMatrix4(i),$n[2].set(t.min.x,t.max.y,t.min.z).applyMatrix4(i),$n[3].set(t.min.x,t.max.y,t.max.z).applyMatrix4(i),$n[4].set(t.max.x,t.min.y,t.min.z).applyMatrix4(i),$n[5].set(t.max.x,t.min.y,t.max.z).applyMatrix4(i),$n[6].set(t.max.x,t.max.y,t.min.z).applyMatrix4(i),$n[7].set(t.max.x,t.max.y,t.max.z).applyMatrix4(i);let s=!1;for(let r=0;r<8;r++)$n[r].z<=-this.camera.near?s=!0:$n[r].z=-this.camera.near;return s?$n:void 0}dispose(){this.setControls(null)}}const hr=typeof performance=="object"&&performance&&typeof performance.now=="function"?performance:Date,R0=new Set,Cu=typeof process=="object"&&process?process:{},C0=(n,t,e,i)=>{typeof Cu.emitWarning=="function"?Cu.emitWarning(n,t,e,i):console.error(`[${e}] ${t}: ${n}`)};let Il=globalThis.AbortController,am=globalThis.AbortSignal;if(typeof Il>"u"){am=class{onabort;_onabort=[];reason;aborted=!1;addEventListener(i,s){this._onabort.push(s)}},Il=class{constructor(){t()}signal=new am;abort(i){if(!this.signal.aborted){this.signal.reason=i,this.signal.aborted=!0;for(const s of this.signal._onabort)s(i);this.signal.onabort?.(i)}}};let n=Cu.env?.LRU_CACHE_IGNORE_AC_WARNING!=="1";const t=()=>{n&&(n=!1,C0("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.","NO_ABORT_CONTROLLER","ENOTSUP",t))}}const NC=n=>!R0.has(n),ji=n=>n&&n===Math.floor(n)&&n>0&&isFinite(n),P0=n=>ji(n)?n<=Math.pow(2,8)?Uint8Array:n<=Math.pow(2,16)?Uint16Array:n<=Math.pow(2,32)?Uint32Array:n<=Number.MAX_SAFE_INTEGER?cl:null:null;class cl extends Array{constructor(t){super(t),this.fill(0)}}class Tr{heap;length;static#l=!1;static create(t){const e=P0(t);if(!e)return[];Tr.#l=!0;const i=new Tr(t,e);return Tr.#l=!1,i}constructor(t,e){if(!Tr.#l)throw new TypeError("instantiate Stack using Stack.create(n)");this.heap=new e(t),this.length=0}push(t){this.heap[this.length++]=t}pop(){return this.heap[--this.length]}}class Df{#l;#u;#m;#g;#P;#L;ttl;ttlResolution;ttlAutopurge;updateAgeOnGet;updateAgeOnHas;allowStale;noDisposeOnSet;noUpdateTTL;maxEntrySize;sizeCalculation;noDeleteOnFetchRejection;noDeleteOnStaleGet;allowStaleOnFetchAbort;allowStaleOnFetchRejection;ignoreFetchAbort;#s;#_;#i;#n;#t;#h;#f;#o;#r;#v;#a;#x;#y;#d;#M;#b;#c;static unsafeExposeInternals(t){return{starts:t.#y,ttls:t.#d,sizes:t.#x,keyMap:t.#i,keyList:t.#n,valList:t.#t,next:t.#h,prev:t.#f,get head(){return t.#o},get tail(){return t.#r},free:t.#v,isBackgroundFetch:e=>t.#e(e),backgroundFetch:(e,i,s,r)=>t.#N(e,i,s,r),moveToTail:e=>t.#C(e),indexes:e=>t.#E(e),rindexes:e=>t.#S(e),isStale:e=>t.#p(e)}}get max(){return this.#l}get maxSize(){return this.#u}get calculatedSize(){return this.#_}get size(){return this.#s}get fetchMethod(){return this.#P}get memoMethod(){return this.#L}get dispose(){return this.#m}get disposeAfter(){return this.#g}constructor(t){const{max:e=0,ttl:i,ttlResolution:s=1,ttlAutopurge:r,updateAgeOnGet:a,updateAgeOnHas:o,allowStale:l,dispose:h,disposeAfter:u,noDisposeOnSet:f,noUpdateTTL:c,maxSize:d=0,maxEntrySize:m=0,sizeCalculation:_,fetchMethod:g,memoMethod:p,noDeleteOnFetchRejection:y,noDeleteOnStaleGet:x,allowStaleOnFetchRejection:v,allowStaleOnFetchAbort:T,ignoreFetchAbort:b}=t;if(e!==0&&!ji(e))throw new TypeError("max option must be a nonnegative integer");const R=e?P0(e):Array;if(!R)throw new Error("invalid max value: "+e);if(this.#l=e,this.#u=d,this.maxEntrySize=m||this.#u,this.sizeCalculation=_,this.sizeCalculation){if(!this.#u&&!this.maxEntrySize)throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");if(typeof this.sizeCalculation!="function")throw new TypeError("sizeCalculation set to non-function")}if(p!==void 0&&typeof p!="function")throw new TypeError("memoMethod must be a function if defined");if(this.#L=p,g!==void 0&&typeof g!="function")throw new TypeError("fetchMethod must be a function if specified");if(this.#P=g,this.#b=!!g,this.#i=new Map,this.#n=new Array(e).fill(void 0),this.#t=new Array(e).fill(void 0),this.#h=new R(e),this.#f=new R(e),this.#o=0,this.#r=0,this.#v=Tr.create(e),this.#s=0,this.#_=0,typeof h=="function"&&(this.#m=h),typeof u=="function"?(this.#g=u,this.#a=[]):(this.#g=void 0,this.#a=void 0),this.#M=!!this.#m,this.#c=!!this.#g,this.noDisposeOnSet=!!f,this.noUpdateTTL=!!c,this.noDeleteOnFetchRejection=!!y,this.allowStaleOnFetchRejection=!!v,this.allowStaleOnFetchAbort=!!T,this.ignoreFetchAbort=!!b,this.maxEntrySize!==0){if(this.#u!==0&&!ji(this.#u))throw new TypeError("maxSize must be a positive integer if specified");if(!ji(this.maxEntrySize))throw new TypeError("maxEntrySize must be a positive integer if specified");this.#k()}if(this.allowStale=!!l,this.noDeleteOnStaleGet=!!x,this.updateAgeOnGet=!!a,this.updateAgeOnHas=!!o,this.ttlResolution=ji(s)||s===0?s:1,this.ttlAutopurge=!!r,this.ttl=i||0,this.ttl){if(!ji(this.ttl))throw new TypeError("ttl must be a positive integer if specified");this.#O()}if(this.#l===0&&this.ttl===0&&this.#u===0)throw new TypeError("At least one of max, maxSize, or ttl is required");if(!this.ttlAutopurge&&!this.#l&&!this.#u){const L="LRU_CACHE_UNBOUNDED";NC(L)&&(R0.add(L),C0("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.","UnboundedCacheWarning",L,Df))}}getRemainingTTL(t){return this.#i.has(t)?1/0:0}#O(){const t=new cl(this.#l),e=new cl(this.#l);this.#d=t,this.#y=e,this.#U=(r,a,o=hr.now())=>{if(e[r]=a!==0?o:0,t[r]=a,a!==0&&this.ttlAutopurge){const l=setTimeout(()=>{this.#p(r)&&this.#w(this.#n[r],"expire")},a+1);l.unref&&l.unref()}},this.#A=r=>{e[r]=t[r]!==0?hr.now():0},this.#T=(r,a)=>{if(t[a]){const o=t[a],l=e[a];if(!o||!l)return;r.ttl=o,r.start=l,r.now=i||s();const h=r.now-l;r.remainingTTL=o-h}};let i=0;const s=()=>{const r=hr.now();if(this.ttlResolution>0){i=r;const a=setTimeout(()=>i=0,this.ttlResolution);a.unref&&a.unref()}return r};this.getRemainingTTL=r=>{const a=this.#i.get(r);if(a===void 0)return 0;const o=t[a],l=e[a];if(!o||!l)return 1/0;const h=(i||s())-l;return o-h},this.#p=r=>{const a=e[r],o=t[r];return!!o&&!!a&&(i||s())-a>o}}#A=()=>{};#T=()=>{};#U=()=>{};#p=()=>!1;#k(){const t=new cl(this.#l);this.#_=0,this.#x=t,this.#R=e=>{this.#_-=t[e],t[e]=0},this.#F=(e,i,s,r)=>{if(this.#e(i))return 0;if(!ji(s))if(r){if(typeof r!="function")throw new TypeError("sizeCalculation must be a function");if(s=r(i,e),!ji(s))throw new TypeError("sizeCalculation return invalid (expect positive integer)")}else throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");return s},this.#I=(e,i,s)=>{if(t[e]=i,this.#u){const r=this.#u-t[e];for(;this.#_>r;)this.#D(!0)}this.#_+=t[e],s&&(s.entrySize=i,s.totalCalculatedSize=this.#_)}}#R=t=>{};#I=(t,e,i)=>{};#F=(t,e,i,s)=>{if(i||s)throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");return 0};*#E({allowStale:t=this.allowStale}={}){if(this.#s)for(let e=this.#r;!(!this.#G(e)||((t||!this.#p(e))&&(yield e),e===this.#o));)e=this.#f[e]}*#S({allowStale:t=this.allowStale}={}){if(this.#s)for(let e=this.#o;!(!this.#G(e)||((t||!this.#p(e))&&(yield e),e===this.#r));)e=this.#h[e]}#G(t){return t!==void 0&&this.#i.get(this.#n[t])===t}*entries(){for(const t of this.#E())this.#t[t]!==void 0&&this.#n[t]!==void 0&&!this.#e(this.#t[t])&&(yield[this.#n[t],this.#t[t]])}*rentries(){for(const t of this.#S())this.#t[t]!==void 0&&this.#n[t]!==void 0&&!this.#e(this.#t[t])&&(yield[this.#n[t],this.#t[t]])}*keys(){for(const t of this.#E()){const e=this.#n[t];e!==void 0&&!this.#e(this.#t[t])&&(yield e)}}*rkeys(){for(const t of this.#S()){const e=this.#n[t];e!==void 0&&!this.#e(this.#t[t])&&(yield e)}}*values(){for(const t of this.#E())this.#t[t]!==void 0&&!this.#e(this.#t[t])&&(yield this.#t[t])}*rvalues(){for(const t of this.#S())this.#t[t]!==void 0&&!this.#e(this.#t[t])&&(yield this.#t[t])}[Symbol.iterator](){return this.entries()}[Symbol.toStringTag]="LRUCache";find(t,e={}){for(const i of this.#E()){const s=this.#t[i],r=this.#e(s)?s.__staleWhileFetching:s;if(r!==void 0&&t(r,this.#n[i],this))return this.get(this.#n[i],e)}}forEach(t,e=this){for(const i of this.#E()){const s=this.#t[i],r=this.#e(s)?s.__staleWhileFetching:s;r!==void 0&&t.call(e,r,this.#n[i],this)}}rforEach(t,e=this){for(const i of this.#S()){const s=this.#t[i],r=this.#e(s)?s.__staleWhileFetching:s;r!==void 0&&t.call(e,r,this.#n[i],this)}}purgeStale(){let t=!1;for(const e of this.#S({allowStale:!0}))this.#p(e)&&(this.#w(this.#n[e],"expire"),t=!0);return t}info(t){const e=this.#i.get(t);if(e===void 0)return;const i=this.#t[e],s=this.#e(i)?i.__staleWhileFetching:i;if(s===void 0)return;const r={value:s};if(this.#d&&this.#y){const a=this.#d[e],o=this.#y[e];if(a&&o){const l=a-(hr.now()-o);r.ttl=l,r.start=Date.now()}}return this.#x&&(r.size=this.#x[e]),r}dump(){const t=[];for(const e of this.#E({allowStale:!0})){const i=this.#n[e],s=this.#t[e],r=this.#e(s)?s.__staleWhileFetching:s;if(r===void 0||i===void 0)continue;const a={value:r};if(this.#d&&this.#y){a.ttl=this.#d[e];const o=hr.now()-this.#y[e];a.start=Math.floor(Date.now()-o)}this.#x&&(a.size=this.#x[e]),t.unshift([i,a])}return t}load(t){this.clear();for(const[e,i]of t){if(i.start){const s=Date.now()-i.start;i.start=hr.now()-s}this.set(e,i.value,i)}}set(t,e,i={}){if(e===void 0)return this.delete(t),this;const{ttl:s=this.ttl,start:r,noDisposeOnSet:a=this.noDisposeOnSet,sizeCalculation:o=this.sizeCalculation,status:l}=i;let{noUpdateTTL:h=this.noUpdateTTL}=i;const u=this.#F(t,e,i.size||0,o);if(this.maxEntrySize&&u>this.maxEntrySize)return l&&(l.set="miss",l.maxEntrySizeExceeded=!0),this.#w(t,"set"),this;let f=this.#s===0?void 0:this.#i.get(t);if(f===void 0)f=this.#s===0?this.#r:this.#v.length!==0?this.#v.pop():this.#s===this.#l?this.#D(!1):this.#s,this.#n[f]=t,this.#t[f]=e,this.#i.set(t,f),this.#h[this.#r]=f,this.#f[f]=this.#r,this.#r=f,this.#s++,this.#I(f,u,l),l&&(l.set="add"),h=!1;else{this.#C(f);const c=this.#t[f];if(e!==c){if(this.#b&&this.#e(c)){c.__abortController.abort(new Error("replaced"));const{__staleWhileFetching:d}=c;d!==void 0&&!a&&(this.#M&&this.#m?.(d,t,"set"),this.#c&&this.#a?.push([d,t,"set"]))}else a||(this.#M&&this.#m?.(c,t,"set"),this.#c&&this.#a?.push([c,t,"set"]));if(this.#R(f),this.#I(f,u,l),this.#t[f]=e,l){l.set="replace";const d=c&&this.#e(c)?c.__staleWhileFetching:c;d!==void 0&&(l.oldValue=d)}}else l&&(l.set="update")}if(s!==0&&!this.#d&&this.#O(),this.#d&&(h||this.#U(f,s,r),l&&this.#T(l,f)),!a&&this.#c&&this.#a){const c=this.#a;let d;for(;d=c?.shift();)this.#g?.(...d)}return this}pop(){try{for(;this.#s;){const t=this.#t[this.#o];if(this.#D(!0),this.#e(t)){if(t.__staleWhileFetching)return t.__staleWhileFetching}else if(t!==void 0)return t}}finally{if(this.#c&&this.#a){const t=this.#a;let e;for(;e=t?.shift();)this.#g?.(...e)}}}#D(t){const e=this.#o,i=this.#n[e],s=this.#t[e];return this.#b&&this.#e(s)?s.__abortController.abort(new Error("evicted")):(this.#M||this.#c)&&(this.#M&&this.#m?.(s,i,"evict"),this.#c&&this.#a?.push([s,i,"evict"])),this.#R(e),t&&(this.#n[e]=void 0,this.#t[e]=void 0,this.#v.push(e)),this.#s===1?(this.#o=this.#r=0,this.#v.length=0):this.#o=this.#h[e],this.#i.delete(i),this.#s--,e}has(t,e={}){const{updateAgeOnHas:i=this.updateAgeOnHas,status:s}=e,r=this.#i.get(t);if(r!==void 0){const a=this.#t[r];if(this.#e(a)&&a.__staleWhileFetching===void 0)return!1;if(this.#p(r))s&&(s.has="stale",this.#T(s,r));else return i&&this.#A(r),s&&(s.has="hit",this.#T(s,r)),!0}else s&&(s.has="miss");return!1}peek(t,e={}){const{allowStale:i=this.allowStale}=e,s=this.#i.get(t);if(s===void 0||!i&&this.#p(s))return;const r=this.#t[s];return this.#e(r)?r.__staleWhileFetching:r}#N(t,e,i,s){const r=e===void 0?void 0:this.#t[e];if(this.#e(r))return r;const a=new Il,{signal:o}=i;o?.addEventListener("abort",()=>a.abort(o.reason),{signal:a.signal});const l={signal:a.signal,options:i,context:s},h=(_,g=!1)=>{const{aborted:p}=a.signal,y=i.ignoreFetchAbort&&_!==void 0;if(i.status&&(p&&!g?(i.status.fetchAborted=!0,i.status.fetchError=a.signal.reason,y&&(i.status.fetchAbortIgnored=!0)):i.status.fetchResolved=!0),p&&!y&&!g)return f(a.signal.reason);const x=d;return this.#t[e]===d&&(_===void 0?x.__staleWhileFetching?this.#t[e]=x.__staleWhileFetching:this.#w(t,"fetch"):(i.status&&(i.status.fetchUpdated=!0),this.set(t,_,l.options))),_},u=_=>(i.status&&(i.status.fetchRejected=!0,i.status.fetchError=_),f(_)),f=_=>{const{aborted:g}=a.signal,p=g&&i.allowStaleOnFetchAbort,y=p||i.allowStaleOnFetchRejection,x=y||i.noDeleteOnFetchRejection,v=d;if(this.#t[e]===d&&(!x||v.__staleWhileFetching===void 0?this.#w(t,"fetch"):p||(this.#t[e]=v.__staleWhileFetching)),y)return i.status&&v.__staleWhileFetching!==void 0&&(i.status.returnedStale=!0),v.__staleWhileFetching;if(v.__returned===v)throw _},c=(_,g)=>{const p=this.#P?.(t,r,l);p&&p instanceof Promise&&p.then(y=>_(y===void 0?void 0:y),g),a.signal.addEventListener("abort",()=>{(!i.ignoreFetchAbort||i.allowStaleOnFetchAbort)&&(_(void 0),i.allowStaleOnFetchAbort&&(_=y=>h(y,!0)))})};i.status&&(i.status.fetchDispatched=!0);const d=new Promise(c).then(h,u),m=Object.assign(d,{__abortController:a,__staleWhileFetching:r,__returned:void 0});return e===void 0?(this.set(t,m,{...l.options,status:void 0}),e=this.#i.get(t)):this.#t[e]=m,m}#e(t){if(!this.#b)return!1;const e=t;return!!e&&e instanceof Promise&&e.hasOwnProperty("__staleWhileFetching")&&e.__abortController instanceof Il}async fetch(t,e={}){const{allowStale:i=this.allowStale,updateAgeOnGet:s=this.updateAgeOnGet,noDeleteOnStaleGet:r=this.noDeleteOnStaleGet,ttl:a=this.ttl,noDisposeOnSet:o=this.noDisposeOnSet,size:l=0,sizeCalculation:h=this.sizeCalculation,noUpdateTTL:u=this.noUpdateTTL,noDeleteOnFetchRejection:f=this.noDeleteOnFetchRejection,allowStaleOnFetchRejection:c=this.allowStaleOnFetchRejection,ignoreFetchAbort:d=this.ignoreFetchAbort,allowStaleOnFetchAbort:m=this.allowStaleOnFetchAbort,context:_,forceRefresh:g=!1,status:p,signal:y}=e;if(!this.#b)return p&&(p.fetch="get"),this.get(t,{allowStale:i,updateAgeOnGet:s,noDeleteOnStaleGet:r,status:p});const x={allowStale:i,updateAgeOnGet:s,noDeleteOnStaleGet:r,ttl:a,noDisposeOnSet:o,size:l,sizeCalculation:h,noUpdateTTL:u,noDeleteOnFetchRejection:f,allowStaleOnFetchRejection:c,allowStaleOnFetchAbort:m,ignoreFetchAbort:d,status:p,signal:y};let v=this.#i.get(t);if(v===void 0){p&&(p.fetch="miss");const T=this.#N(t,v,x,_);return T.__returned=T}else{const T=this.#t[v];if(this.#e(T)){const E=i&&T.__staleWhileFetching!==void 0;return p&&(p.fetch="inflight",E&&(p.returnedStale=!0)),E?T.__staleWhileFetching:T.__returned=T}const b=this.#p(v);if(!g&&!b)return p&&(p.fetch="hit"),this.#C(v),s&&this.#A(v),p&&this.#T(p,v),T;const R=this.#N(t,v,x,_),S=R.__staleWhileFetching!==void 0&&i;return p&&(p.fetch=b?"stale":"refresh",S&&b&&(p.returnedStale=!0)),S?R.__staleWhileFetching:R.__returned=R}}async forceFetch(t,e={}){const i=await this.fetch(t,e);if(i===void 0)throw new Error("fetch() returned undefined");return i}memo(t,e={}){const i=this.#L;if(!i)throw new Error("no memoMethod provided to constructor");const{context:s,forceRefresh:r,...a}=e,o=this.get(t,a);if(!r&&o!==void 0)return o;const l=i(t,o,{options:a,context:s});return this.set(t,l,a),l}get(t,e={}){const{allowStale:i=this.allowStale,updateAgeOnGet:s=this.updateAgeOnGet,noDeleteOnStaleGet:r=this.noDeleteOnStaleGet,status:a}=e,o=this.#i.get(t);if(o!==void 0){const l=this.#t[o],h=this.#e(l);return a&&this.#T(a,o),this.#p(o)?(a&&(a.get="stale"),h?(a&&i&&l.__staleWhileFetching!==void 0&&(a.returnedStale=!0),i?l.__staleWhileFetching:void 0):(r||this.#w(t,"expire"),a&&i&&(a.returnedStale=!0),i?l:void 0)):(a&&(a.get="hit"),h?l.__staleWhileFetching:(this.#C(o),s&&this.#A(o),l))}else a&&(a.get="miss")}#B(t,e){this.#f[e]=t,this.#h[t]=e}#C(t){t!==this.#r&&(t===this.#o?this.#o=this.#h[t]:this.#B(this.#f[t],this.#h[t]),this.#B(this.#r,t),this.#r=t)}delete(t){return this.#w(t,"delete")}#w(t,e){let i=!1;if(this.#s!==0){const s=this.#i.get(t);if(s!==void 0)if(i=!0,this.#s===1)this.#z(e);else{this.#R(s);const r=this.#t[s];if(this.#e(r)?r.__abortController.abort(new Error("deleted")):(this.#M||this.#c)&&(this.#M&&this.#m?.(r,t,e),this.#c&&this.#a?.push([r,t,e])),this.#i.delete(t),this.#n[s]=void 0,this.#t[s]=void 0,s===this.#r)this.#r=this.#f[s];else if(s===this.#o)this.#o=this.#h[s];else{const a=this.#f[s];this.#h[a]=this.#h[s];const o=this.#h[s];this.#f[o]=this.#f[s]}this.#s--,this.#v.push(s)}}if(this.#c&&this.#a?.length){const s=this.#a;let r;for(;r=s?.shift();)this.#g?.(...r)}return i}clear(){return this.#z("delete")}#z(t){for(const e of this.#S({allowStale:!0})){const i=this.#t[e];if(this.#e(i))i.__abortController.abort(new Error("deleted"));else{const s=this.#n[e];this.#M&&this.#m?.(i,s,t),this.#c&&this.#a?.push([i,s,t])}}if(this.#i.clear(),this.#t.fill(void 0),this.#n.fill(void 0),this.#d&&this.#y&&(this.#d.fill(0),this.#y.fill(0)),this.#x&&this.#x.fill(0),this.#o=0,this.#r=0,this.#v.length=0,this.#_=0,this.#s=0,this.#c&&this.#a){const e=this.#a;let i;for(;i=e?.shift();)this.#g?.(...i)}}}function OC(n){return n?.isMemoryUsage??!1}function UC(n){let t=0,e=0;return n.objects.forEach(i=>{t+=i.cpuMemory,e+=i.gpuMemory}),{gpuMemory:e,cpuMemory:t}}function FC(n,t){const e=n;if(e.material!=null){if(Ll(e.material))t(e.material);else if(Array.isArray(e.material))for(const i of e.material)Ll(i)&&t(i)}}function GC(n,t){"geometry"in t&&f0(t.geometry)&&Dl(n,t.geometry),FC(t,e=>{zC(n,e)})}function BC(n,t){const e=t.value;d0(e)&&Ne.getMemoryUsage(n,e)}function zC(n,t){if(sR(t))for(const e of Object.values(t.uniforms))BC(n,e);else rR(t)&&t.map&&Ne.getMemoryUsage(n,t.map)}function Dl(n,t){let e=0;for(const i of Object.keys(t.attributes))e+=t.getAttribute(i).array.byteLength;t.index&&(e+=t.index.array.byteLength),n.objects.set(t.id,{cpuMemory:e,gpuMemory:e})}const kC=8192,VC=24e4,HC=536870912;class WC{isMemoryUsage=!0;constructor(t){this._deleteHandlers=new Map,this._enabled=!0,this._lru=this.createLRUCache(t)}createLRUCache(t){return new Df({ttl:t?.ttl??VC,ttlResolution:1e3,updateAgeOnGet:!0,maxSize:t?.byteCapacity??HC,max:t?.maxNumberOfEntries??kC,allowStale:!1,dispose:(e,i)=>{this.onDisposed(i,e)}})}configure(t){if(this.count>0)throw new Error("cannot configure the cache as it is not empty.");this._lru=this.createLRUCache(t)}getMemoryUsage(t){this._lru.forEach(e=>{OC(e)&&e.getMemoryUsage(t)})}get enabled(){return this._enabled}set enabled(t){this._enabled=t}get defaultTtl(){return this._lru.ttl}set defaultTtl(t){this._lru.ttl=t}get maxSize(){return this._lru.maxSize}get capacity(){return this._lru.max}get count(){return this._lru.size}get size(){return this._lru.calculatedSize}entries(){return[...this._lru.entries()]}onDisposed(t,e){const i=this._deleteHandlers.get(t);i&&(this._deleteHandlers.delete(t),i(e))}purge(){this._lru.purgeStale()}get(t){if(this.enabled)return this._lru.get(t)}set(t,e,i={}){if(!this.enabled)return e;if(typeof t!="string")throw new Error("the cache expects strings as keys.");return this._lru.set(t,e,{ttl:i.ttl??this.defaultTtl,size:i.size??1024}),i.onDelete&&this._deleteHandlers.set(t,i.onDelete),e}delete(t){return this._lru.delete(t)}clear(){this._lru.clear()}}const Pu=new WC;function XC(n){return typeof n.dispose=="function"}let sa=(function(n){return n[n.RENDERING_PAUSED=0]="RENDERING_PAUSED",n[n.RENDERING_SCHEDULED=1]="RENDERING_SCHEDULED",n})({});class YC{constructor(t){this.view=t,this.distance={plane:new Si().setFromNormalAndCoplanarPoint(t.camera.getWorldDirection(new C),t.camera.position),min:1/0,max:0}}}const Bo=new Oi;function L0(n,t,e){if(e)for(const i of e){const s=t.update(n,i);L0(n,t,s)}}class qC{get renderingState(){return this._renderingState}_automaticCameraPlaneComputation=!0;_clock=new Sf;_frame=0;get frameCount(){return this._frame}get automaticCameraPlaneComputation(){return this._automaticCameraPlaneComputation}set automaticCameraPlaneComputation(t){this._automaticCameraPlaneComputation=t}constructor(){this._renderingState=sa.RENDERING_PAUSED,this._needsRedraw=!1,this._updateLoopRestarted=!0,this._changeSources=new Set}scheduleUpdate(t,e=void 0,i){e!=null&&(Array.isArray(e)?e.forEach(a=>this._changeSources.add(a)):this._changeSources.add(e));const s=i?.needsRedraw??!0,r=i?.immediate??!1;this._needsRedraw=this._needsRedraw||s,this._renderingState!==sa.RENDERING_SCHEDULED&&(this._renderingState=sa.RENDERING_SCHEDULED,r?this.step(t):requestAnimationFrame(()=>{this.step(t)}))}update(t,e,i){const s=this._frame,r=new YC(t.view);for(const a of t.getEntities())if(a.shouldCheckForUpdate()){t.dispatchEvent({type:"before-entity-update",frame:s,entity:a,dt:i,updateLoopRestarted:this._updateLoopRestarted});const o=a.filterChangeSources(e);if(o.size>0){const l=a.preUpdate(r,o);L0(r,a,l),a.postUpdate(r,e)}if(pr(a)){const l=a.distance;r.distance.min=Math.min(r.distance.min,l.min),l.max===1/0?r.distance.max=t.view.maxFarPlane:r.distance.max=Math.max(r.distance.max,l.max)}t.dispatchEvent({type:"after-entity-update",frame:s,entity:a,dt:i,updateLoopRestarted:this._updateLoopRestarted})}this.updateCameraPlanesFromObjects(r,t),this.automaticCameraPlaneComputation&&(t.view.near=r.distance.min,t.view.far=r.distance.max,t.view.camera.updateProjectionMatrix())}updateCameraPlanesFromObjects(t,e){e.threeObjects.traverse(i=>{if(i.visible&&"geometry"in i&&f0(i.geometry)){const s=i.geometry.boundingSphere;if(s&&!s.isEmpty()){Bo.copy(s),Bo.applyMatrix4(i.matrixWorld);const r=Bo.distanceToPoint(t.view.camera.position);t.distance.min=qt.clamp(r,.01,t.distance.min),t.distance.max=Math.max(t.distance.max,r+2*Bo.radius)}}})}step(t){const e=this._clock.getDelta()*1e3,i=this._frame++;t.dispatchEvent({type:"update-start",frame:i,dt:e,updateLoopRestarted:this._updateLoopRestarted});const s=this._needsRedraw;this._needsRedraw=!1,this._renderingState=sa.RENDERING_PAUSED;const r=new Set(this._changeSources);this._changeSources.clear(),t.dispatchEvent({type:"before-camera-update",frame:i,camera:t.view,dt:e,updateLoopRestarted:this._updateLoopRestarted}),this.automaticCameraPlaneComputation&&t.view.resetPlanes();const a=t.engine.getWindowSize();t.view.setSize(a.x,a.y),t.view.update(),t.dispatchEvent({type:"after-camera-update",frame:i,camera:t.view,dt:e,updateLoopRestarted:this._updateLoopRestarted});const o=t.view.camera.matrixAutoUpdate;t.view.camera.matrixAutoUpdate=!1,this.update(t,r,e),s&&(t.dispatchEvent({type:"before-render",frame:i,dt:e,updateLoopRestarted:this._updateLoopRestarted}),t.render(),t.dispatchEvent({type:"after-render",frame:i,dt:e,updateLoopRestarted:this._updateLoopRestarted})),this._updateLoopRestarted=this._renderingState===sa.RENDERING_PAUSED,t.view.camera.matrixAutoUpdate=o,t.dispatchEvent({type:"update-end",frame:i,dt:e,updateLoopRestarted:this._updateLoopRestarted})}}const jC=n=>n.isPickable,Lu=n=>n.isPickableFeatures,om={pos:new C,size:new C,evtToCanvas:new Z,pickVec2:new Z};function ic(n){return n.isObject3D}class ZC extends pn{_disposed=!1;constructor(t){super(),an.DEFAULT_UP.set(0,0,1);const e=t.target;let i=null;if(typeof e=="string"?i=document.getElementById(e):t.target instanceof HTMLElement&&(i=t.target),!i||!(i instanceof HTMLDivElement))throw new Error("Invalid target parameter (must be a valid <div>)");i.childElementCount>0&&console.warn("Target element has children; Giro3D expects an empty element - this can lead to unexpected behaviors"),this._referenceCrs=t.crs,this._viewport=i,this._viewport=document.createElement("div"),this._viewport.style.position="relative",this._viewport.style.overflow="hidden",this._viewport.style.width="100%",this._viewport.style.height="100%",i.appendChild(this._viewport),this._engine=new xC(this._viewport,{clearColor:t.backgroundColor,renderer:t.renderer}),this._mainLoop=new qC,this._scene=t.scene3D||new yf,this._threeObjects=new Ps,this._threeObjects.name="threeObjects",this._scene.add(this._threeObjects),t.scene3D||(this._scene.matrixWorldAutoUpdate=!1);const s=this._engine.getWindowSize();this._view=new DC({crs:this._referenceCrs,camera:t.camera,width:s.width,height:s.height}),this._view.addEventListener("change",()=>this.notifyChange(this._view.camera)),this._entities=new Set,window.ResizeObserver!=null&&(this._resizeObserver=new ResizeObserver(()=>{this._updateRendererSize(this.viewport)}),this._resizeObserver.observe(i)),this._pickingClock=new Sf(!1),this._onContextRestored=this.onContextRestored.bind(this),this._onContextLost=this.onContextLost.bind(this),this.domElement.addEventListener("webglcontextlost",this._onContextLost),this.domElement.addEventListener("webglcontextrestored",this._onContextRestored)}onContextLost(){this.getEntities().forEach(t=>{pr(t)&&t.onRenderingContextLost({canvas:this.domElement})})}onContextRestored(){this.getEntities().forEach(t=>{pr(t)&&t.onRenderingContextRestored({canvas:this.domElement})}),this.notifyChange()}get domElement(){return this._engine.renderer.domElement}get viewport(){return this._viewport}get coordinateSystem(){return this._referenceCrs}get loading(){return this.getEntities().some(e=>e.loading)}get progress(){const t=this.getEntities();return t.length===0?1:t.reduce((i,s)=>i+s.progress,0)/t.length}get mainLoop(){return this._mainLoop}get engine(){return this._engine}get renderingOptions(){return this._engine.renderingOptions}get renderer(){return this._engine.renderer}get css2DRenderer(){return this._engine.labelRenderer}get scene(){return this._scene}get threeObjects(){return this._threeObjects}get view(){return this._view}_doUpdateRendererSize(t){this._engine.onWindowResize(t.clientWidth,t.clientHeight),this.notifyChange(this._view.camera)}_updateRendererSize(t){this._resizeTimeout!=null&&clearTimeout(this._resizeTimeout),this._resizeTimeout=setTimeout(()=>this._doUpdateRendererSize(t),50)}dispose(){if(!this._disposed){this._disposed=!0,this.domElement.removeEventListener("webglcontextlost",this._onContextLost),this.domElement.removeEventListener("webglcontextrestored",this._onContextRestored),this._resizeObserver?.disconnect();for(const t of this.getObjects())this.remove(t);this._scene.remove(this._threeObjects),this._engine.dispose(),this._view.dispose(),this.viewport.remove(),this.dispatchEvent({type:"dispose"})}}async add(t){if(t==null)throw new Error("object is undefined");if(!ic(t)&&!Xp(t))throw new Error("object is not an instance of THREE.Object3D or Giro3D.Entity");if(ic(t)){const s=t;return t.parent==null&&this._threeObjects.add(s),this.notifyChange(s),s}const e=t;if(this.getObjects(s=>s.id===t.id).length>0)throw new Error(`Invalid id '${t.id}': id already used`);return this._entities.add(e),await e.initialize({instance:this}),pr(e)&&e.object3d!=null&&e.object3d.parent==null&&e.object3d!==this._scene&&this._scene.add(e.object3d),this.notifyChange(t,{needsRedraw:!1}),this.dispatchEvent({type:"entity-added"}),t}remove(t){XC(t)&&t.dispose(),Xp(t)?(pr(t)&&t.object3d.removeFromParent(),this._entities.delete(t),this.dispatchEvent({type:"entity-removed"})):ic(t)&&t.removeFromParent(),this.notifyChange(this._view.camera)}notifyChange(t=void 0,e){this._mainLoop.scheduleUpdate(this,t,e)}getObjects(t){const e=[];for(const i of this._entities)(!t||t(i))&&e.push(i);for(const i of this._threeObjects.children)(!t||t(i))&&e.push(i);return e}getEntities(t){const e=[];for(const i of this._entities)(!t||t(i))&&e.push(i);return e}render(){this._engine.render(this._scene,this._view.camera)}eventToCanvasCoords(t,e,i=0){if(window.TouchEvent!=null&&t instanceof TouchEvent){const a=t,o=this.domElement.getBoundingClientRect();return e.set(a.touches[i].clientX-o.x,a.touches[i].clientY-o.y)}const s=t;if(s.target===this.domElement)return e.set(s.offsetX,s.offsetY);const r=this.domElement.getBoundingClientRect();return e.set(s.clientX-r.x,s.clientY-r.y)}eventToNormalizedCoords(t,e,i=0){return this.canvasToNormalizedCoords(this.eventToCanvasCoords(t,e,i),e)}canvasToNormalizedCoords(t,e){return e.x=2*(t.x/this._view.width)-1,e.y=-2*(t.y/this._view.height)+1,e}normalizedToCanvasCoords(t,e){return e.x=(t.x+1)*.5*this._view.width,e.y=(t.y-1)*-.5*this._view.height,e}objectIdToObject(t){const e=this.getObjects(i=>i.id===t);if(!e.length)throw new Error(`Invalid object id used as where argument (value = ${t})`);return e[0]}pickObjectsAt(t,e={}){this.dispatchEvent({type:"picking-start"}),this._pickingClock.start();let i=[];const s=e.where&&e.where.length>0?[...e.where]:this.getObjects(),r=t instanceof Event?this.eventToCanvasCoords(t,om.evtToCanvas):t,a=e.radius??0,o=e.limit??1/0,l=e.sortByDistance??!1,h=e.pickFeatures??!1;for(const f of s){const c=typeof f=="string"?this.objectIdToObject(f):f;if(!c.visible)continue;const d={...e,radius:a,limit:o-i.length,vec2:om.pickVec2,sortByDistance:!1};if(l&&(d.limit=1/0,d.pickFeatures=!1),jC(c)){const m=c.pick(r,d);i.push(...m)}else if(c.isObject3D){const m=m0(this,r,c,d);i.push(...m)}if(i.length>=o&&!l)break}if(l&&(i.sort((f,c)=>f.distance-c.distance),o!==1/0&&(i=i.slice(0,o))),h){const f=e;i.forEach(c=>{c.entity&&Lu(c.entity)?c.entity.pickFeaturesFrom(c,f):c.object!=null&&Lu(c.object)&&c.object.pickFeaturesFrom(c,f)})}const u=this._pickingClock.getElapsedTime();return this._pickingClock.stop(),this.dispatchEvent({type:"picking-end",elapsed:u,results:i}),i}getMemoryUsage(){const t={renderer:this.renderer,objects:new globalThis.Map};for(const e of this._entities)pr(e)&&e.getMemoryUsage(t);return this.threeObjects.traverse(e=>{GC(t,e)}),Ru.getMemoryUsage(t),Pu.getMemoryUsage(t),UC(t)}}function I0(n,t){return new Qe(t,n[0],n[2],n[1],n[3])}function $C(n,t=0){return[n.west-t,n.south-t,n.east+t,n.north+t]}function KC(n){let t;const e=i=>i?parseFloat(i):1;return(t=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))||(t=/^\s*(\d+)%\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))?e(t[4]):1}function JC(n){if(typeof n=="string"){const t=new bt().setStyle(n),e=KC(n);return{color:t,opacity:e}}else if(Array.isArray(n)){const[t,e,i,s]=n;return{color:new bt(t/255,e/255,i/255),opacity:s}}else throw new Error("unsupported color: "+n)}function QC(n,t){const e=n.getGeometry();if(!e)return;const i=e.getExtent();return I0(i,t)}const ul={fromOLExtent:I0,toOLExtent:$C,fromOLColor:JC,getFeatureExtent:QC};function D0(){return{brightness:0,saturation:1,contrast:1}}var Nl=(function(n){return n[n.None=0]="None",n[n.Normal=1]="Normal",n[n.Add=2]="Add",n[n.Multiply=3]="Multiply",n})(Nl||{});function t3(n){return n?.isTexture}class e3{inGpuMemory=!1;constructor(t){if(this.texture=t,t.addEventListener("dispose",()=>this.inGpuMemory=!1),t.isRenderTargetTexture)this.inGpuMemory=!0;else{const e=t.onUpdate,i=()=>{this.inGpuMemory=!0,e?.call(t)};t.onUpdate=i}}}let ra=[];const sc=new Map,n3=100;let aa=!1,rc=0;class Nn{static set enable(t){aa!==t&&(aa=t,aa||(ra.length=0))}static get enable(){return aa}static track(t,e){aa&&(ra.push({name:e,weakref:new WeakRef(t)}),rc++,t3(t)&&!sc.has(t.id)&&sc.set(t.id,new e3(t)),rc===n3&&(this.flush(),rc=0))}static flush(){const t=[];let e=!1;for(const i of ra){const{weakref:s}=i;s.deref()?t.push(i):e=!0}e&&(ra=t)}static getTrackedObjects(){const t={};for(const e of ra){const{name:i,weakref:s}=e,r=s.deref();if(r){const a=r.constructor.name;t[a]==null&&(t[a]=[]),t[a].push({name:i,value:r})}}return t}static getTrackedTextures(){return[...sc.values()]}}class lm{constructor(t){if(!t.id)throw new Error("id cannot be null");if(t.texture==null)throw new Error("texture cannot be null");if(t.extent==null)throw new Error("extent cannot be null");this.id=t.id,this.zIndex=t.zIndex,this.texture=t.texture,this.extent=t.extent,this.min=t.min,this.max=t.max}}class i3 extends pn{isMemoryUsage=!0;isImageSource=!0;priority="auto";synchronous=!1;constructor(t={}){super(),this.isImageSource=!0,this.type="ImageSource",this.flipY=t.flipY??!1,this.datatype=t.is8bit??!0?ue:Ie,this._customColorSpace=t.colorSpace,this.priority=t.requestPriority??"auto",this.transparent=t.transparent??!1,this.containsFn=t.containsFn,this.synchronous=t?.synchronous??!1}getMemoryUsage(){}get colorSpace(){return this._customColorSpace!=null?this._customColorSpace:this.datatype===ue?Dn:Vs}adjustExtentAndPixelSize(t=0){return null}update(t){this.dispatchEvent({type:"updated",extent:t})}contains(t){const e=t.clone().as(this.getCrs());return this.containsFn?this.containsFn(e):this.intersects(e)}intersects(t){const e=this.getExtent();return e!=null?e.intersectsExtent(t):!0}initialize(){return Promise.resolve()}dispose(){}}function s3(n){return n.isImageSource===!0}function r3(n){return new Promise(t=>setTimeout(t,n))}let N0=(function(n){return n.Fullfilled="fulfilled",n.Rejected="rejected",n})({});class a3 extends Error{constructor(){super("aborted"),this.name="AbortError"}}function o3(){return new a3}const zs={delay:r3,PromiseStatus:N0,abortError:o3};function mr(n,t){if(!n)throw new Error(t)}const hm=1/0;class l3{constructor(t,e){this.priorityFunction_=t,this.keyFunction_=e,this.elements_=[],this.priorities_=[],this.queuedElements_={}}clear(){this.elements_.length=0,this.priorities_.length=0,qu(this.queuedElements_)}dequeue(){const t=this.elements_,e=this.priorities_,i=t[0];t.length==1?(t.length=0,e.length=0):(t[0]=t.pop(),e[0]=e.pop(),this.siftUp_(0));const s=this.keyFunction_(i);return delete this.queuedElements_[s],i}enqueue(t){mr(!(this.keyFunction_(t)in this.queuedElements_),"Tried to enqueue an `element` that was already added to the queue");const e=this.priorityFunction_(t);return e!=hm?(this.elements_.push(t),this.priorities_.push(e),this.queuedElements_[this.keyFunction_(t)]=!0,this.siftDown_(0,this.elements_.length-1),!0):!1}getCount(){return this.elements_.length}getLeftChildIndex_(t){return t*2+1}getRightChildIndex_(t){return t*2+2}getParentIndex_(t){return t-1>>1}heapify_(){let t;for(t=(this.elements_.length>>1)-1;t>=0;t--)this.siftUp_(t)}isEmpty(){return this.elements_.length===0}isKeyQueued(t){return t in this.queuedElements_}isQueued(t){return this.isKeyQueued(this.keyFunction_(t))}siftUp_(t){const e=this.elements_,i=this.priorities_,s=e.length,r=e[t],a=i[t],o=t;for(;t<s>>1;){const l=this.getLeftChildIndex_(t),h=this.getRightChildIndex_(t),u=h<s&&i[h]<i[l]?h:l;e[t]=e[u],i[t]=i[u],t=u}e[t]=r,i[t]=a,this.siftDown_(o,t)}siftDown_(t,e){const i=this.elements_,s=this.priorities_,r=i[e],a=s[e];for(;e>t;){const o=this.getParentIndex_(e);if(s[o]>a)i[e]=i[o],s[e]=s[o],e=o;else break}i[e]=r,s[e]=a}reprioritize(){const t=this.priorityFunction_,e=this.elements_,i=this.priorities_;let s=0;const r=e.length;let a,o,l;for(o=0;o<r;++o)a=e[o],l=t(a),l==hm?delete this.queuedElements_[this.keyFunction_(a)]:(i[s]=l,e[s++]=a);e.length=s,i.length=s,this.heapify_()}}function h3(){return!0}class c3{constructor(t,e,i,s,r,a,o){this.id=t,this._priority=e,this._signal=o,this._resolve=s,this.reject=r,this._request=i,this.shouldExecute=a??h3}getKey(){return this.id}getPriority(){return this._signal?.aborted===!0?1/0:this._priority}execute(){return this._signal?.aborted===!0?(this.reject(zs.abortError()),Promise.reject()):this._request().then(t=>this._resolve(t)).catch(t=>this.reject(t))}}function u3(n){return n.getPriority()}function f3(n){return n.getKey()}const d3=10;class O0 extends pn{constructor(t={}){super(),this._pendingIds=new Map,this._queue=new l3(u3,f3),this._opCounter=new bf,this._concurrentRequests=0,this._maxConcurrentRequests=t.maxConcurrentRequests??d3}get length(){return this._queue.getCount()}get progress(){return this._opCounter.progress}get loading(){return this._opCounter.loading}get pendingRequests(){return this._pendingIds.size}get concurrentRequests(){return this._concurrentRequests}onQueueAvailable(){for(;this._concurrentRequests<this._maxConcurrentRequests&&!this._queue.isEmpty();){const t=this._queue.dequeue(),e=t.getKey();t.shouldExecute()?(this._concurrentRequests++,t.execute().catch(i=>t.reject(i)).finally(()=>{this._opCounter.decrement(),this._pendingIds.delete(e),this._concurrentRequests--,this.onQueueAvailable(),this.dispatchEvent({type:"task-executed"})})):(this._opCounter.decrement(),this._pendingIds.delete(e),t.reject(zs.abortError()),this.dispatchEvent({type:"task-cancelled"}))}}enqueue(t){const{id:e,request:i,signal:s,shouldExecute:r}=t,a=t.priority??0;if(s?.aborted===!0)return Promise.reject(zs.abortError());if(this._pendingIds.has(e))return this._pendingIds.get(e);this._opCounter.increment();const o=new Promise((l,h)=>{const u=new c3(e,a,i,l,h,r,s);this._queue.isEmpty()?(this._queue.enqueue(u),this.onQueueAvailable()):this._queue.enqueue(u)});return this._pendingIds.set(e,o),o}}const U0=new O0;class Ol{_disposed=!1;constructor(t,e,i,s){this._object=t,this._owner=e,this._refCount=i,this._onDispose=s}get object(){return this.checkDisposed(),this._object}get owner(){return this.checkDisposed(),this._owner}static new(t,e,i){return new Ol(t,e,{count:1},i)}clone(){return this.checkDisposed(),this._refCount.count++,new Ol(this._object,this.owner,this._refCount,this._onDispose)}checkDisposed(){if(this._refCount.count===0)throw new Error("cannot use disposed Shared object")}dispose(){this._disposed||(this._refCount.count--,this._refCount.count===0&&(this._disposed=!0,this._onDispose(this._object)))}}class tn{constructor(t,e,i,s){this.xMin=t,this.xMax=e,this.yMin=i,this.yMax=s}get left(){return this.xMin}get right(){return this.xMax}get top(){return this.yMax}get bottom(){return this.yMin}get width(){return this.xMax-this.xMin}get height(){return this.yMax-this.yMin}get centerX(){return this.xMin+(this.xMax-this.xMin)*.5}get centerY(){return this.yMin+(this.yMax-this.yMin)*.5}static fromExtent(t){return new tn(t.west,t.east,t.south,t.north)}equals(t,e=1e-4){return Math.abs(t.xMin-this.xMin)<=e&&Math.abs(t.xMax-this.xMax)<=e&&Math.abs(t.yMin-this.yMin)<=e&&Math.abs(t.yMax-this.yMax)<=e}getIntersection(t){const e=Math.max(this.xMin,t.xMin),i=Math.min(this.xMax,t.xMax),s=Math.max(this.yMin,t.yMin),r=Math.min(this.yMax,t.yMax);return new tn(e,i,s,r)}static getNormalizedRect(t,e){const i={x:e.width,y:e.height},s={x:t.width,y:t.height};let r=(t.left-e.left)/i.x,a=(e.top-t.top)/i.y,o=s.x/i.x,l=s.y/i.y;const h=10**10;return r=Math.round((r+Number.EPSILON)*h)/h,a=Math.round((a+Number.EPSILON)*h)/h,o=Math.round((o+Number.EPSILON)*h)/h,l=Math.round((l+Number.EPSILON)*h)/h,{x:r,y:a,w:o,h:l}}}const p3=`#include <giro3d_precision_qualifiers>
#include <giro3d_fragment_shader_header>
#include <giro3d_common>

varying vec2 vUv;

uniform Interpretation interpretation;
uniform sampler2D tex;
uniform sampler2D gridTexture;
uniform float opacity;
uniform bool flipY;
uniform NoDataOptions noDataOptions;
uniform bool showImageOutlines;
uniform bool isEmptyTexture;
uniform bool showEmptyTexture;
uniform bool convertRGFloatToRGBAUnsignedByte;
uniform int channelCount;
uniform bool expandRGB;
uniform float heightPrecision;
uniform float heightOffset;

void main() {
    vec2 uv = flipY
        ? vec2(vUv.x, 1.0 - vUv.y)
        : vUv;

    gl_FragColor = vec4(0, 0, 0, 0);

    if (!isEmptyTexture) {
        int alphaChannelLocation = channelCount - 1;

        if (noDataOptions.enabled) {
            gl_FragColor = texture2DFillNodata(tex, uv, noDataOptions, alphaChannelLocation);
        } else {
            vec4 color = texture2D(tex, uv);
            gl_FragColor = color;

            if (convertRGFloatToRGBAUnsignedByte) {
                gl_FragColor = convert_RG_Float_RGBA_UnsignedByte(gl_FragColor, heightPrecision, heightOffset);
            } else {
                gl_FragColor = decodeInterpretation(gl_FragColor, interpretation);
            }

            if(expandRGB) {
                gl_FragColor = grayscaleToRGB(gl_FragColor, interpretation);
            }

            // Transfer alpha channel to its new location
            gl_FragColor.a = color[alphaChannelLocation];
        }
    } else if (showEmptyTexture) {
        gl_FragColor = vec4(1, 0, 0, 0.5);
    }

    if (showImageOutlines && (!isEmptyTexture || showEmptyTexture)) {
        vec4 grid = texture2D(gridTexture, uv);
        gl_FragColor = blend(grid, gl_FragColor);
    }

    gl_FragColor.a *= opacity;

    #include <colorspace_fragment>
}
`,m3=`#include <giro3d_precision_qualifiers>

// outputs
varying vec2 vUv;

void main() {
    vUv = uv;
    #include <begin_vertex>
    #include <project_vertex>
}`;function g3(){const n=document.createElement("canvas");n.width=512,n.height=512;const t=n.width,e=n.height,i=n.getContext("2d",{willReadFrequently:!0});if(!i)throw new Error("could not acquire 2D rendering context");const s="black",r="yellow",a=4,o=3;i.strokeStyle=s,i.lineWidth=o+2*a,i.strokeRect(0,0,t,e),i.strokeStyle=r,i.lineWidth=o,i.strokeRect(0,0,t,e),i.strokeStyle=r,i.setLineDash([8,8]),i.lineWidth=2;const l=2;for(let c=1;c<l;c++){const d=c*(t/l);i.moveTo(d,0),i.lineTo(d,e),i.stroke()}for(let c=1;c<l;c++){const d=c*(e/l);i.moveTo(0,d),i.lineTo(t,d),i.stroke()}const h=4,u=t/2,f=e/2;return i.fillStyle=s,i.beginPath(),i.ellipse(u,f,h+a,h+a,0,0,2*Math.PI),i.fill(),i.fillStyle=r,i.beginPath(),i.ellipse(u,f,h,h,0,0,2*Math.PI),i.fill(),new RA(n)}const zo=[],_3=2048;let ac;class Sa extends je{isComposerTileMaterial=!0;get type(){return"ComposerTileMaterial"}constructor(t){super({glslVersion:bl}),this.fragmentShader=p3,this.vertexShader=m3,this.depthTest=!1,this.uniforms={tex:new Pt(null),gridTexture:new Pt(null),interpretation:new Pt({max:1,min:0,mode:0,negateValues:!1}),flipY:new Pt(!1),noDataOptions:new Pt({enabled:!1,radius:0,replacementAlpha:0}),showImageOutlines:new Pt(!1),opacity:new Pt(this.opacity),channelCount:new Pt(3),expandRGB:new Pt(t.expandRGB??!1),showEmptyTexture:new Pt(t.showEmptyTexture??!1),isEmptyTexture:new Pt(!1),convertRGFloatToRGBAUnsignedByte:new Pt(t.convertRGFloatToRGBAUnsignedByte!=null),heightPrecision:new Pt(t.convertRGFloatToRGBAUnsignedByte?.precision??.1),heightOffset:new Pt(t.convertRGFloatToRGBAUnsignedByte?.offset??2e4)},t!=null&&this.init(t)}init(t){const e=t.interpretation??ri.Raw;this.dataType=e.mode!==cn.Raw?Ie:t.texture.type,this.pixelFormat=t.texture.format;const i={};e.setUniform(i),this.needsUpdate=this.transparent!==t.transparent,this.transparent=t.transparent??!1,this.opacity=1,this.uniforms.opacity.value=this.opacity,this.uniforms.interpretation.value=i,this.uniforms.tex.value=t.texture,this.uniforms.flipY.value=t.flipY??!1,this.uniforms.noDataOptions.value=t.noDataOptions??{enabled:!1,radius:0,replacementAlpha:0},this.uniforms.showImageOutlines.value=t.showImageOutlines??!1,this.uniforms.expandRGB.value=t.expandRGB??!1,this.uniforms.showEmptyTexture.value=t.showEmptyTexture??!1,this.uniforms.isEmptyTexture.value=Ne.isEmptyTexture(t.texture),this.uniforms.convertRGFloatToRGBAUnsignedByte.value=t.convertRGFloatToRGBAUnsignedByte!=null,this.uniforms.heightPrecision.value=t.convertRGFloatToRGBAUnsignedByte?.precision??.1,this.uniforms.heightOffset.value=t.convertRGFloatToRGBAUnsignedByte?.offset??.1;const s=Ne.getChannelCount(this.pixelFormat);this.uniforms.channelCount.value=s,t.showImageOutlines&&(ac==null&&(ac=g3()),this.uniforms.gridTexture.value=ac)}reset(){this.uniforms.tex.value=null}static acquire(t){if(zo.length>0){const e=zo.pop();return e.init(t),e}return new Sa(t)}static release(t){t.reset(),zo.length<_3?zo.push(t):t.dispose()}}function v3(n){return n?.isComposerTileMaterial}let ko=null;const x3=-10,Iu=new Map,y3=1,M3=100,E3=new bt(0,0,0);function F0(n){const t=n.target;t.removeEventListener("dispose",F0);const e=Iu.get(t.uuid);e?(e.dispose(),Iu.delete(t.uuid)):console.error("no owner for ",t)}class Fa{constructor(t){this._showImageOutlines=t.showImageOutlines??!1,this._showEmptyTextures=t.showEmptyTextures??!1,this._extent=t.extent,this.width=t.width,this.height=t.height,this._renderer=t.webGLRenderer,this._reuseTexture=t.reuseTexture??!1,this._clearColor=t.clearColor;const e=Ne.getCompatibleTextureFilter(Fe,t.textureDataType,t.webGLRenderer);this._minFilter=t.minFilter||e,this._magFilter=t.magFilter||e,this.dataType=t.textureDataType,this.pixelFormat=t.pixelFormat,this._expandRGB=t.expandRGB??!1,ko||(ko=new cs(1,1,1,1),Nn.track(ko,"WebGLComposer - PlaneGeometry")),this._ownedTextures=[],this._scene=new yf,this._camera=new sh,this._camera.near=y3,this._camera.far=M3,this._extent&&this.setCameraRect(this._extent)}setCameraRect(t){const e=t.width/2,i=t.height/2;this._camera.position.set(t.centerX,t.centerY,0),this._camera.left=-e,this._camera.right=+e,this._camera.top=+i,this._camera.bottom=-i,this._camera.updateProjectionMatrix()}createRenderTarget(t,e,i,s){const r=new bn(i,s,{format:e,anisotropy:to.getMaxAnisotropy(),magFilter:this._magFilter,minFilter:this._minFilter,type:t,depthBuffer:!1,generateMipmaps:!0});return Iu.set(r.texture.uuid,r),r.texture.addEventListener("dispose",F0),r.texture.name="WebGLComposer texture",Nn.track(r,"WebGLRenderTarget"),Nn.track(r.texture,"WebGLRenderTarget.texture"),r}draw(t,e,i={}){const s=new dn(ko,null);Nn.track(s,"WebGLComposer - mesh"),s.scale.set(e.width,e.height,1),this._scene.add(s);const r=e.centerX,a=e.centerY;return s.position.set(r,a,0),this.drawMesh(t,s,i)}drawMesh(t,e,i={}){let s;d0(t)?s=t:(s=new Ze(t),s.needsUpdate=!0,this._ownedTextures.push(s),Nn.track(s,"WebGLComposer - owned texture")),Ne.ensureCompatibility(s,this._renderer);const r=i.interpretation??ri.Raw,a=Sa.acquire({texture:s,noDataOptions:{enabled:i.fillNoData??!1,radius:i.fillNoDataRadius??1,replacementAlpha:i.fillNoDataAlphaReplacement??0},interpretation:r,flipY:i.flipY??!1,transparent:i.transparent??!1,showEmptyTexture:this._showEmptyTextures,showImageOutlines:this._showImageOutlines,expandRGB:i.expandRGB??this._expandRGB,convertRGFloatToRGBAUnsignedByte:i.convertRGFloatToRGBAUnsignedByte??null});return Nn.track(a,"WebGLComposer - material"),e.material=a,e.renderOrder=i.renderOrder??0,e.position.setZ(x3),this._scene.add(e),e.updateMatrixWorld(!0),e.matrixAutoUpdate=!1,e.matrixWorldAutoUpdate=!1,e}remove(t){Sa.release(t.material),this._scene.remove(t)}clear(){this.removeTextures(),this.removeObjects()}removeObjects(){this._scene.traverse(t=>{eR(t)&&v3(t.material)&&Sa.release(t.material)}),this._scene.clear()}saveState(){return{clearAlpha:this._renderer.getClearAlpha(),renderTarget:this._renderer.getRenderTarget(),scissorTest:this._renderer.getScissorTest(),scissor:this._renderer.getScissor(new te),clearColor:this._renderer.getClearColor(new bt),viewport:this._renderer.getViewport(new te)}}restoreState(t){this._renderer.setClearAlpha(t.clearAlpha),this._renderer.setRenderTarget(t.renderTarget),this._renderer.setScissorTest(t.scissorTest),this._renderer.setScissor(t.scissor),this._renderer.setClearColor(t.clearColor,t.clearAlpha),this._renderer.setViewport(t.viewport)}render(t={}){const e=t.target?.width??t.width??this.width,i=t.target?.height??t.height??this.height;if(e==null||i==null)throw new Error("this composer does not have preset width/height and none was provided");let s;if(t.target)s=t.target;else if(!this._reuseTexture)s=this.createRenderTarget(this.dataType,this.pixelFormat,e,i);else{if(!this._renderTarget){if(this.width==null||this.height==null)throw new Error("cannot reuse render target without height/width defined ");this._renderTarget=this.createRenderTarget(this.dataType,this.pixelFormat,this.width,this.height)}s=this._renderTarget}const r=this.saveState();this._clearColor!=null?this._renderer.setClearColor(this._clearColor):this._renderer.setClearColor(E3,0),this._renderer.setRenderTarget(s),this._renderer.setViewport(0,0,s.width,s.height),this._renderer.clear();const a=t.rect??this._extent;if(!a)throw new Error("no rect provided and no default rect to setup camera");if(this.setCameraRect(a),this._extent&&t.rect&&!t.rect.equals(this._extent)){this._renderer.setScissorTest(!0);const o=this._extent.getIntersection(t.rect),l=tn.getNormalizedRect(o,t.rect),h=1,u=Math.floor(l.x*e-h),f=Math.floor((1-l.y-l.h)*i-h),c=Math.ceil(l.w*e+2*h),d=Math.ceil(l.h*i+2*h);this._renderer.setScissor(qt.clamp(u,0,e),qt.clamp(f,0,i),qt.clamp(c,0,e),qt.clamp(d,0,i))}return this._renderer.render(this._scene,this._camera),s.texture.wrapS=ii,s.texture.wrapT=ii,s.texture.generateMipmaps=!1,this.restoreState(r),s.texture}removeTextures(){this._ownedTextures.forEach(t=>t.dispose()),this._ownedTextures.length=0}dispose(){this.removeTextures(),this.removeObjects(),this._renderTarget&&this._renderTarget.dispose()}}function S3(n){const{renderTarget:t,outputWidth:e,outputHeight:i,renderer:s}=n;let r=t.texture.type,a=t.texture.format;const o=r!==ue&&a!==Te,l=new Uint8ClampedArray(e*i*4);let h=t;if(o){a=Te,r=ue;const u=new tn(0,1,0,1),f=new Fa({textureDataType:r,pixelFormat:a,webGLRenderer:s,reuseTexture:!1});f.draw(t.texture,u,{convertRGFloatToRGBAUnsignedByte:{precision:n.precision,offset:n.offset}}),h=new bn(e,i,{format:a,type:r}),f.render({rect:u,target:h}),f.dispose()}return s.readRenderTargetPixels(h,0,0,e,i,l),t!==h&&h.dispose(),l}const w3=new Z,oc=new Z,Du=8,cm=new Float64Array(Du*Du*3),T3=new rn(Yt.epsg4326,0,0);function b3(n){n.image!=null&&(n.isDataTexture?n.image.data=null:n.isCanvasTexture&&(n.source.data=null))}function A3(n,{interpretation:t,noDataValue:e}){if(n.min!=null&&n.max!=null)return{min:n.min,max:n.max};const i=Ne.computeMinMax(n,e,t);if(i)return i;throw new Error("no min/max could be computed from texture")}const lc=new Map;let R3=class{isMemoryUsage=!0;getMemoryUsage(t){return Ne.getMemoryUsage(t,this.texture)}constructor(t){this.id=t.id,this.mesh=t.mesh,this.extent=t.extent,this.texture=t.texture,this.alwaysVisible=t.alwaysVisible??!1,this.material=this.mesh.material,this.min=t.min,this.max=t.max,this.disposed=!1,this.owners=new Set}canBeDeleted(){return!this.alwaysVisible&&this.owners.size===0}set visible(t){this.mesh.visible=t}get visible(){return this.mesh.visible}set opacity(t){this.material.opacity=t}get opacity(){return this.material.opacity}dispose(){if(this.disposed)throw new Error("already disposed");this.disposed=!0,this.texture?.dispose()}};class C3{isMemoryUsage=!0;getMemoryUsage(t){this.images.forEach(e=>e.getMemoryUsage(t))}constructor(t){this.computeMinMax=t.computeMinMax,this.extent=t.extent,this.dimensions=t.dimensions??null,this.images=new Map,this.webGLRenderer=t.renderer,this.transparent=t.transparent??!1,this.noDataValue=t.noDataValue??0,this.sourceCrs=t.sourceCrs,this.targetCrs=t.targetCrs,this.needsReprojection=!this.sourceCrs.equals(this.targetCrs),this.interpretation=t.interpretation,this.fillNoData=t.fillNoData,this.fillNoDataAlphaReplacement=t.fillNoDataAlphaReplacement,this.fillNoDataRadius=t.fillNoDataRadius,this.pixelFormat=t.pixelFormat,this.textureDataType=t.textureDataType,this.showEmptyTextures=t.showEmptyTextures,this._minFilter=t.minFilter,this._magFilter=t.magFilter,this.composer=new Fa({webGLRenderer:t.renderer,extent:this.extent?tn.fromExtent(this.extent):void 0,showImageOutlines:t.showImageOutlines,minFilter:this._minFilter,magFilter:this._magFilter,pixelFormat:t.pixelFormat,textureDataType:t.textureDataType,showEmptyTextures:t.showEmptyTextures}),this._needsCleanup=!1}lock(t,e){const i=this.images.get(t);i&&i.owners.add(e)}unlock(t,e){t.forEach(i=>{const s=this.images.get(i);s&&(s.owners.delete(e),s.owners.size===0&&(this._needsCleanup=!0))})}computeRenderOrder(t){if(this.dimensions){const e=t.dimensions(oc).width,i=this.dimensions.width/e;return Math.round(i*1e3)}return 0}preprocessImage(t,e,i){const s=tn.fromExtent(t),r=new Fa({extent:s,width:e.image.width,height:e.image.height,webGLRenderer:this.webGLRenderer,textureDataType:i.outputType,pixelFormat:this.pixelFormat,expandRGB:i.expandRGB??!1});let a=1;if(i.fillNoData===!0&&i.fillNoDataRadius!=null&&Number.isFinite(i.fillNoDataRadius)){const l=t.dimensions(oc);a=i.fillNoDataRadius/l.width}r.draw(e,s,{fillNoData:i.fillNoData,fillNoDataAlphaReplacement:i.fillNoDataAlphaReplacement,fillNoDataRadius:a,interpretation:i.interpretation,transparent:this.transparent});const o=r.render({target:i.target});return o.name="LayerComposer - image (preprocessed)",o.min=e.min,o.max=e.max,r.dispose(),e.dispose(),o}createWarpedMesh(t,e=Du){const i=t.dimensions(w3),s=3,r=(e+1)*(e+1)*s,a=cm.length===r?cm:new Float64Array(r),o=t.toGrid(e,e,a,s),l=t.center(T3).as(this.targetCrs).toVector2(oc),h=l.clone().negate();u0.transformBufferInPlace(o,{srcCrs:this.sourceCrs,dstCrs:this.targetCrs,offset:h,stride:s});const u=new cs(i.x,i.y,e,e);u.name="warped mesh";const f=u.getAttribute("position"),c=f.array;for(let m=0;m<a.length;m++)c[m]=a[m];f.needsUpdate=!0,u.computeBoundingSphere();const d=new dn(u);return d.position.set(l.x,l.y,0),d.updateMatrixWorld(),d}add(t){const{extent:e,texture:i,id:s}=t;if(this.images.has(s))return;if(i==null)throw new Error("texture cannot be null. Use an empty texture instead. (i.e new EmptyTexture())");this._minFilter&&(i.minFilter=this._minFilter),this._magFilter&&(i.magFilter=this._magFilter);let r=i;const a=Ne.shouldExpandRGB(r.format,this.pixelFormat);if(!$h(i)){if(this.computeMinMax&&t.min==null&&t.max==null){const{min:f,max:c}=A3(i,{interpretation:this.interpretation,noDataValue:this.noDataValue});t.min=f,t.max=c}(a||!this.interpretation.isDefault())&&(r=this.preprocessImage(e,i,{interpretation:this.interpretation,outputType:this.textureDataType,expandRGB:a}))}let o;const l={transparent:this.transparent,flipY:t.flipY,renderOrder:t.zIndex??this.computeRenderOrder(e)};if(this.needsReprojection){const f=this.createWarpedMesh(e);o=this.composer.drawMesh(r,f,l)}else o=this.composer.draw(r,tn.fromExtent(e),l);Nn.enable&&Nn.track(r,`LayerComposer - texture ${s}`),lc.clear(),Ne.getMemoryUsage({renderer:this.webGLRenderer,objects:lc},r);const h=Nt(lc.get(r.id));h.cpuMemory=0,r.userData.memoryUsage=h,i.onUpdate=()=>b3(i),this._minFilter&&(r.minFilter=this._minFilter),this._magFilter&&(r.magFilter=this._magFilter);const u=new R3({id:s,mesh:o,texture:r,extent:e,alwaysVisible:t.alwaysVisible??!1,min:t.min,max:t.max});this.images.set(s,u),this._needsCleanup=!0}has(t){return this.images.has(t)}hasAll(t){for(const e of t)if(!this.has(e))return!1;return!0}copy(t){const e=t.targetExtent,i=t.dest,s=[];let r=1/0,a=-1/0;for(const{texture:l,extent:h,renderOrder:u}of t.source){const f=this.composer.draw(l,tn.fromExtent(h),{renderOrder:u});s.push(f),l.min!=null&&l.max!=null&&(r=Math.min(r,l.min),a=Math.max(a,l.max))}for(const l of this.images.values())l.visible=!1;this.composer.render({rect:tn.fromExtent(e),target:i,width:i.width,height:i.height});const o=i.texture;o.min=r,o.max=a;for(const l of s)this.composer.remove(l)}clearTexture(t){const{extent:e,width:i,height:s,target:r}=t;this.images.forEach(a=>{a.visible=!1}),this.composer.render({width:i,height:s,rect:tn.fromExtent(e),target:r})}getMinMax(t){let e=1/0,i=-1/0;return this.images.forEach(s=>{t.intersectsExtent(s.extent)&&es(s.min)&&es(s.max)&&(e=Math.min(s.min,e),i=Math.max(s.max,i))}),{min:e,max:i}}render(t){const{extent:e,width:i,height:s,target:r,imageIds:a}=t;let o=!0;for(const c of a.values())if(!this.images.has(c)){o=!1;break}const l=t.isFallbackMode??!o;let h=1/0,u=-1/0;for(const c of this.images.values()){const d=a.has(c.id),m=e.intersectsExtent(c.extent)||c.alwaysVisible,_=$h(c.texture);c.visible=(!_||this.showEmptyTextures)&&(l&&m||d),c.visible&&(c.opacity=1),this.computeMinMax&&d&&!_&&(h=Math.min(Nt(c.min),h),u=Math.max(Nt(c.max),u))}if(this.computeMinMax&&l&&(!es(h)||!es(u)))for(const c of this.images.values())e.intersectsExtent(c.extent)&&!$h(c.texture)&&(h=Math.min(Nt(c.min),h),u=Math.max(Nt(c.max),u));let f=this.composer.render({width:i,height:s,rect:tn.fromExtent(e),target:this.fillNoData?void 0:r});return f.min=h,f.max=u,this.fillNoData&&(f=this.processFillNoData(f,e,r)),{texture:f,isLastRender:!l}}processFillNoData(t,e,i){return this.preprocessImage(e,t,{fillNoData:this.fillNoData,fillNoDataAlphaReplacement:this.fillNoDataAlphaReplacement,fillNoDataRadius:this.fillNoDataRadius,interpretation:ri.Raw,target:i,outputType:this.textureDataType})}postUpdate(){return this._needsCleanup&&(this.cleanup(),this._needsCleanup=!1),!1}disposeImage(t){this.needsReprojection&&t.mesh.geometry.dispose(),this.composer.remove(t.mesh),t.dispose(),this.images.delete(t.id)}cleanup(){for(const t of Array.from(this.images.values()))t.canBeDeleted()&&this.disposeImage(t)}clear(t){t?[...this.images.values()].forEach(e=>{e.extent.intersectsExtent(t)&&this.disposeImage(e)}):(this.images.forEach(e=>this.disposeImage(e)),this.images.clear(),this.composer.clear())}dispose(){this.clear()}}const hc=new Z;var Ve=(function(n){return n[n.Pending=0]="Pending",n[n.Processing=1]="Processing",n[n.Complete=2]="Complete",n})(Ve||{});function G0(n){return n.disposed||n.parent==null||n.material==null?!0:!n.material.visible}let P3=class{isMemoryUsage=!0;renderTarget=null;paintCount=0;_disposed=!1;isDisposed(){return this.node.disposed||this._disposed}getMemoryUsage(t){if(this.renderTarget&&this.renderTarget.owner===this)return Ne.getMemoryUsage(t,this.renderTarget.object)}constructor(t){this.node=t.node,this.pitch=t.pitch,this.extent=t.extent,this.geometryExtent=t.geometryExtent,this.width=t.width,this.height=t.height,this.imageIds=new Set,this.controller=new AbortController,this.state=Ve.Pending,this.textureIsFinal=!1,this._onVisibilityChanged=this.onVisibilityChanged.bind(this),this.node.addEventListener("visibility-changed",this._onVisibilityChanged)}dispose(){this._disposed=!0,this.node.removeEventListener("visibility-changed",this._onVisibilityChanged),this.abort()}onVisibilityChanged(){G0(this.node)&&this.state!==Ve.Complete&&(this.abort(),this.state=Ve.Pending)}reset(){this.abort(),this.state=Ve.Pending,this.imageIds.clear()}abort(){this.controller.abort(zs.abortError()),this.controller=new AbortController}abortAndThrow(){const t=this.controller.signal;this.abort(),t.throwIfAborted()}};class B0 extends pn{isMemoryUsage=!0;isLayer=!0;colorMap=null;extent=null;_composer=null;_targetsToDestroy=[];_sortedTargets=null;_instance=null;_composerProjection=null;_preprocessOnce=null;_ready=!1;frozen=!1;get ready(){return this._ready}getMemoryUsage(t){this._targets.forEach(e=>e.getMemoryUsage(t)),this.composer&&this.composer.getMemoryUsage(t),this.source.getMemoryUsage(t)}constructor(t){if(super(),this.name=t.name,this.userData={},this._onNodeDisposed=e=>this.unregisterNode(e.target),this.id=qt.generateUUID(),this.type="Layer",this._minFilter=t.minFilter,this._magFilter=t.magFilter,this.interpretation=t.interpretation??ri.Raw,this.showTileBorders=t.showTileBorders??!1,this.showEmptyTextures=t.showEmptyTextures??!1,this._preloadImages=t.preloadImages??!1,this._fallbackImagesPromise=null,this.noDataOptions=t.noDataOptions??{replaceNoData:!1},this.computeMinMax=t.computeMinMax??!1,this._createReadableTextures=this.computeMinMax!=null&&this.computeMinMax!==!1,this._visible=!0,this.colorMap=t.colorMap??null,this.extent=t.extent??null,this.resolutionFactor=t.resolutionFactor??1,t.source==null||!s3(t.source))throw new Error("missing or invalid source");this.source=t.source,this.source.addEventListener("updated",({extent:e})=>this.onSourceUpdated(e)),this.backgroundColor=new bt(t.backgroundColor),this._targets=new Map,this._filter=e=>!Nt(this._composer).has(e),this._queue=U0,this._opCounter=new bf,this._sortedTargets=null}shouldCancelRequest(t){return G0(t)}onSourceUpdated(t){this.clear(t)}onRenderingContextLost(){}onRenderingContextRestored(){this.clear()}clear(t){if(!this.ready)return;Nt(this._composer).clear(t),this._fallbackImagesPromise=null;const e=()=>{for(const i of this._targets.values())(!t||t.intersectsExtent(i.extent))&&i.reset();this.instance.notifyChange(this,{immediate:!0})};this._preloadImages?this.loadFallbackImages().then(e):e()}get visible(){return this._visible}set visible(t){this._visible!==t&&(this._visible=t,this.dispatchEvent({type:"visible-property-changed",visible:t}),this._targets.forEach(e=>this.updateMaterial(e.node.material)))}get loading(){return this._opCounter.loading}get progress(){return this._opCounter.progress}initialize(t){const{instance:e}=t;if(this._instance!=null&&e!==this._instance)throw new Error("This layer has already been initialized for another instance.");if(this._instance=e,this._composerProjection=t.composerProjection,this.extent&&!this.extent.crs.equals(this._composerProjection))throw new Error(`the extent of the layer was defined in a different CRS (${this.extent.crs.id}) than the composer projection (${this._composerProjection.id}). Please convert the extent to the proper CRS before creating the layer.`);return this._preprocessOnce||(this._preprocessOnce=this.initializeOnce().then(()=>(this._ready=!0,this))),this._preprocessOnce}get instance(){return Nt(this._instance,"This layer is not initialized")}async initializeOnce(){this._opCounter.increment();const t=Nt(this._composerProjection);try{await this.source.initialize({targetProjection:t}),this._composer=new C3({transparent:this.source.transparent,renderer:this.instance.renderer,showImageOutlines:this.showTileBorders,showEmptyTextures:this.showEmptyTextures,extent:this.extent??void 0,dimensions:this.getExtent()?.dimensions(),computeMinMax:this.computeMinMax,sourceCrs:this.source.getCrs(),targetCrs:t,interpretation:this.interpretation,fillNoData:this.noDataOptions.replaceNoData,fillNoDataAlphaReplacement:this.noDataOptions.alpha,fillNoDataRadius:this.noDataOptions.maxSearchDistance,textureDataType:this.getRenderTargetDataType(),pixelFormat:this.getRenderTargetPixelFormat(),minFilter:this._minFilter,magFilter:this._magFilter}),this._preloadImages&&await this.loadFallbackImages(),this.instance.notifyChange(this)}finally{this._opCounter.decrement()}return this}getExtent(){const t=Nt(this._composerProjection);return this.extent??this.source.getExtent()?.clone()?.as(t)}async loadFallbackImagesInternal(){const t=this.getExtent();if(!t)return;const e=512*this.resolutionFactor,i=t.dimensions(),s=e*(i.y/i.x),r=t.clone().as(this.source.getCrs()),o=this.source.getImages({id:"background",extent:r,width:e,height:s,createReadableTextures:this._createReadableTextures}).map(h=>h.request());this._opCounter.increment();const l=await Promise.allSettled(o);this._opCounter.decrement();for(const h of l)if(h.status===N0.Fullfilled){const u=h.value;this.addToComposer(u,!0)}await this.onInitialized()}onTextureCreated(t){t.colorSpace=this.interpretation.colorSpace??this.source.colorSpace}addToComposer(t,e){this.onTextureCreated(t.texture),Nt(this._composer).add({alwaysVisible:e,flipY:this.source.flipY,...t})}async loadFallbackImages(){this._preloadImages&&(this._fallbackImagesPromise||(this._fallbackImagesPromise=this.loadFallbackImagesInternal()),await this._fallbackImagesPromise)}async onInitialized(){}fetchImagesSync(t){const{extent:e,width:i,height:s,target:r}=t,a=r.node,o=this.source.getImages({id:`${r.node.id}`,extent:e.clone().as(this.source.getCrs()),width:i,height:s,signal:r.controller.signal,createReadableTextures:this._createReadableTextures});if(o.length===0)return;o.forEach(h=>{r.imageIds.add(h.id)}),this.shouldCancelRequest(a)&&r.abortAndThrow();const l=Nt(this._composer);for(const{id:h,request:u}of o)if(!(u==null||l.has(h)))try{const f=u();this.addToComposer(f,!1),this.shouldCancelRequest(a)||l.lock(h,a.id)}catch(f){f instanceof Error&&f.name!=="AbortError"&&console.error(f)}}getExtentAsSourceCRS(t){const e=t.clone();return e.crs.isEpsg(4326)&&e.intersect(Qe.WGS84),e.as(this.source.getCrs())}async fetchImages(t){const{extent:e,width:i,height:s,target:r}=t,a=r.node,o=this.source.getImages({id:`${r.node.id}`,extent:this.getExtentAsSourceCRS(e),width:i,height:s,signal:r.controller.signal,createReadableTextures:this._createReadableTextures});if(o.length===0)return;o.forEach(u=>{r.imageIds.add(u.id)}),this.shouldCancelRequest(a)&&r.abortAndThrow();const l=[],h=Nt(this._composer);for(const{id:u,request:f}of o){if(f==null||h.has(u))continue;const c=performance.now(),d=()=>a.visible&&this._filter(u);this._opCounter.increment();const m=`${this.id}-${u}`,_=this._queue.enqueue({id:m,request:f,priority:c,shouldExecute:d}).then(g=>{this.addToComposer(g,!1),this.shouldCancelRequest(a)||h.lock(u,a.id)}).catch(g=>{g.name!=="AbortError"&&console.error(g)}).finally(()=>{this._opCounter.decrement()});l.push(_)}await Promise.allSettled(l)}destroyTarget(t){const e=t.node;t.renderTarget?.dispose(),this._targets.delete(e.id),Nt(this._composer).unlock(t.imageIds,e.id),t.dispose(),this._sortedTargets=null}unregisterNode(t,e=!1){const i=t.id,s=this._targets.get(i);t.removeEventListener("dispose",this._onNodeDisposed),s&&(e?this.destroyTarget(s):this._targetsToDestroy.push(s))}adjustExtent(t){return t}adjustExtentAndPixelSize(t,e,i){if(this.source.getCrs()===this._composerProjection){const o=this.source.adjustExtentAndPixelSize(t,e,i,2);if(o)return o}const s=4,r=t.withRelativeMargin(.05);return{extent:this.adjustExtent(r),width:e+s*2,height:i+s*2}}getSortedTargets(){return this._sortedTargets==null&&(this._sortedTargets=Array.from(this._targets.values()).sort((t,e)=>{const i=t.extent.dimensions(hc).x,s=e.extent.dimensions(hc).x;return i-s})),this._sortedTargets}getPixel(t){const e=t.coordinates.as(this.instance.coordinateSystem);if(this.source.datatype!==ue)return;const i=this.getSortedTargets().find(o=>o.extent.isPointInside(e));if(!i||!i.renderTarget)return;const s=i.extent.offsetInExtent(e,hc),r=t.size??1,a=new Uint8ClampedArray(r*r*4);if(this.instance.renderer.readRenderTargetPixels(i.renderTarget.object,i.width*s.x,i.height*s.y,r,r,a),a.reduce((o,l)=>o+l)>0){const o=[];for(let l=0;l<a.length;l+=4){const h=a[l]/255,u=a[l+1]/255,f=a[l+2]/255,c=new bt(h,u,f);o.push(c)}return o}else return}getLoadedAncestor(t){const e=t.geometryExtent,i=this.getSortedTargets();for(const s of i){const r=s.geometryExtent;if(s!==t&&e.isInside(r,1e-8)&&s.state===Ve.Complete&&s.renderTarget!=null)return s}return null}getLoadedDirectChildren(t){const e=t.geometryExtent,i=this.getSortedTargets(),s=t.node.lod+1,r=[];for(const a of i){const o=a.geometryExtent;a.node.lod===s&&e.contains(o,1e-8)&&a.state===Ve.Complete&&a.renderTarget!=null&&r.push(a)}return r.length>0?r:null}borrowTextureFromAncestor(t,e){const i=this.getLoadedAncestor(t);if(i){const s=Nt(i.renderTarget);if(t.renderTarget&&t.renderTarget.owner===i)return!0;e(),t.renderTarget?.dispose(),t.renderTarget=s.clone();const r=t.extent.offsetToParent(i.extent).combine(t.pitch),a=t.renderTarget.object.texture;return this.applyTextureToNode({texture:a,pitch:r},t,!1),!0}return!1}borrowTexturesFromChildren(t,e){const i=this.getLoadedDirectChildren(t);if(i){this.createRenderTargetIfNecessary(t);const s=Nt(t.renderTarget).object,r=Nt(this._composer),a=i.map(h=>({texture:Nt(h.renderTarget).object.texture,extent:h.extent,renderOrder:1}));if(i.length<4){const h=this.getLoadedAncestor(t);h&&a.push({extent:h.extent,texture:Nt(h.renderTarget).object.texture,renderOrder:0})}r.copy({dest:s,targetExtent:t.extent,source:a});const o=s.texture,l=t.pitch;return this.applyTextureToNode({texture:o,pitch:l},t,!1),e(),!0}return!1}generateDefaultTextureFromExistingComposerImages(t,e){this.createRenderTargetIfNecessary(t);const i=Nt(this._composer),s=Nt(t.renderTarget).object;i.render({extent:t.extent,width:t.width,height:t.height,target:s,imageIds:t.imageIds,isFallbackMode:!0});const r=s.texture,a=t.pitch;this.applyTextureToNode({texture:r,pitch:a},t,!1),e()}applyInterimTexture(t){if(t.isDisposed())return;const e=()=>{this.updateMaterial(t.node.material),this.instance.notifyChange(this),t.paintCount++};this.borrowTexturesFromChildren(t,e)||this.borrowTextureFromAncestor(t,e)||this.generateDefaultTextureFromExistingComposerImages(t,e)}getInfo(t){const e=this._targets.get(t.id);return e?{state:Ve[e.state],imageCount:e.imageIds.size,paintCount:e.paintCount}:{state:"unknown",imageCount:-1,paintCount:-1}}processTarget(t){if(t.state!==Ve.Pending)return;if(t.controller.signal.aborted){this.setTargetState(t,Ve.Pending);return}const i=t.extent,s=t.width,r=t.height;if(this.contains(i))if(this.source.synchronous||t.textureIsFinal||this.applyInterimTexture(t),this.setTargetState(t,Ve.Processing),this.source.synchronous)try{this.fetchImagesSync({extent:i,width:s,height:r,target:t}),this.paintTarget(t)}catch(o){console.error(o),this.setTargetState(t,Ve.Pending)}else this.fetchImages({extent:i,width:s,height:r,target:t}).then(()=>{this.paintTarget(t)}).catch(o=>{o.name!=="AbortError"?(console.error(o),this.setTargetState(t,Ve.Complete)):this.setTargetState(t,Ve.Pending)});else this.setTargetState(t,Ve.Complete),this.applyEmptyTextureToNode(t)}createRenderTargetIfNecessary(t){if(!t.renderTarget||t.renderTarget.owner!==t){t.renderTarget?.dispose();const e=this.acquireRenderTarget(t.width,t.height);t.renderTarget=Ol.new(e,t,i=>this.releaseRenderTarget(i))}}paintTarget(t){if(t.isDisposed())return;if(!Nt(this._composer).hasAll(t.imageIds)){this.setTargetState(t,Ve.Pending);return}const s=t.extent,r=t.width,a=t.height,o=t.pitch;this.createRenderTargetIfNecessary(t);const{isLastRender:l}=Nt(this._composer).render({extent:s,width:r,height:a,target:Nt(t.renderTarget).object,imageIds:t.imageIds});t.textureIsFinal=l,l?this.setTargetState(t,Ve.Complete):this.setTargetState(t,Ve.Pending),t.paintCount++;const h=Nt(t.renderTarget).object.texture;this.applyTextureToNode({texture:h,pitch:o},t,l),this.instance.notifyChange(this)}setTargetState(t,e){t.state!==e&&(t.state=e,e===Ve.Complete&&this.dispatchEvent({type:"node-complete",node:t.node}))}update(t,e){if(!this.ready||!this.visible)return;const{material:i}=e;if(e.parent==null||i==null||!i.visible)return;let s;if(this._targets.has(e.id))s=Nt(this._targets.get(e.id));else{const r=e.getExtent().clone(),a=e.textureSize,{extent:o,width:l,height:h}=this.adjustExtentAndPixelSize(r,Math.round(a.x*this.resolutionFactor),Math.round(a.y*this.resolutionFactor));this.composer?.targetCrs.isEpsg(4326)===!0&&o?.intersect(Qe.WGS84);const u=r.offsetToParent(o);s=new P3({node:e,extent:o,pitch:u,width:Math.round(l),height:Math.round(h),geometryExtent:r}),this._targets.set(e.id,s),this._sortedTargets=null,e.addEventListener("dispose",this._onNodeDisposed)}s.isDisposed()||(this.updateMaterial(i),!(this.frozen||!this.visible)&&this.processTarget(s))}contains(t){const e=this.extent;return e&&!e.intersectsExtent(t)?!1:this.source.contains(t)}releaseRenderTarget(t){t&&Ru.release(t,this.instance.renderer)}acquireRenderTarget(t,e){const i=this.getRenderTargetDataType(),s=Ne.getCompatibleTextureFilter(this._minFilter??Fe,i,this.instance.renderer),r=Ne.getCompatibleTextureFilter(this._magFilter??Fe,i,this.instance.renderer),a={format:this.getRenderTargetPixelFormat(),minFilter:s,magFilter:r,type:i,depthBuffer:!1,generateMipmaps:!1},o=Ru.acquire(this.instance.renderer,t,e,a);return o.texture.name=`Layer "${this.id} - WebGLRenderTarget`,Nn.track(o,`Layer "${this.id} - WebGLRenderTarget`),o}postUpdate(){this._targetsToDestroy.length>0&&(this._targetsToDestroy.forEach(t=>this.destroyTarget(t)),this._targetsToDestroy.length=0),this._composer?.postUpdate()}get composer(){return this._composer}updateMaterial(){}isLoaded(t){const e=this._targets.get(t);return e?e.state===Ve.Complete:!1}dispose(){this.source.dispose(),this._composer?.dispose();for(const t of this._targets.values())t.abort(),this.unregisterNode(t.node,!0);this.dispatchEvent({type:"dispose"})}}function L3(n){return typeof n=="object"&&n?.isLayer}class I3 extends B0{_blendingMode=Nl.Normal;isColorLayer=!0;isPickableFeatures=!0;_elevationRange=null;_colorimetry=D0();constructor(t){super(t),this.type="ColorLayer",this._elevationRange=t.elevationRange??null,this._opacity=t.opacity??1,this._blendingMode=t.blendingMode??Nl.Normal}get elevationRange(){return this._elevationRange}set elevationRange(t){this._elevationRange=t,this.dispatchEvent({type:"elevationRange-property-changed",range:t})}get blendingMode(){return this._blendingMode}set blendingMode(t){this._blendingMode!==t&&(this._blendingMode=t,this.dispatchEvent({type:"blendingMode-property-changed",blendingMode:t}))}get opacity(){return this._opacity}set opacity(t){this._opacity!==t&&(this._opacity=t,this.dispatchEvent({type:"opacity-property-changed",opacity:t}))}get colorimetry(){return this._colorimetry}get brightness(){return this._colorimetry.brightness}set brightness(t){this._colorimetry.brightness!==t&&(this._colorimetry.brightness=t,this.dispatchEvent({type:"brightness-property-changed",brightness:t}))}get contrast(){return this._colorimetry.contrast}set contrast(t){this._colorimetry.contrast!==t&&(this._colorimetry.contrast=t,this.dispatchEvent({type:"contrast-property-changed",contrast:t}))}get saturation(){return this._colorimetry.saturation}set saturation(t){this._colorimetry.saturation!==t&&(this._colorimetry.saturation=t,this.dispatchEvent({type:"saturation-property-changed",saturation:t}))}updateMaterial(t){t.hasColorLayer(this)&&(t.setLayerVisibility(this,this.visible),t.setLayerOpacity(this,this.opacity),t.setLayerElevationRange(this,this._elevationRange),t.setColorimetry(this,this._colorimetry.brightness,this._colorimetry.contrast,this._colorimetry.saturation))}getRenderTargetDataType(){return this.interpretation.mode===cn.ScaleToMinMax?Ie:this.source.datatype}getRenderTargetPixelFormat(){return Te}unregisterNode(t){super.unregisterNode(t);const e=t.material;e!=null&&e.indexOfColorLayer(this)!==-1&&e.removeColorLayer(this)}applyTextureToNode(t,e){const i=e.node.material;i.hasColorLayer(this)||i.pushColorLayer(this,e.extent),e.node.material.setColorTextures(this,t)}applyEmptyTextureToNode(t){t.node.material.removeColorLayer(this)}pickFeaturesFrom(t,e){const i={radius:e?.radius??0,xTileRes:0,yTileRes:0};if(i.radius>0){const s=t.object,r=s.extent.as(t.coord.crs).dimensions();i.xTileRes=r.x/s.textureSize.width,i.yTileRes=r.y/s.textureSize.height}return this.getVectorFeaturesAtCoordinate(t.coord,i).map(s=>({isVectorPickFeature:!0,layer:this,feature:s}))}getVectorFeaturesAtCoordinate(t,e){const i=this.getExtent()?.crs;if(i==null)return[];const s=e?.radius??0,r=e?.xTileRes,a=e?.yTileRes;if(s>0){if(!es(r)||!es(a))return console.warn("Calling getVectorFeaturesAtCoordinate with radius but no tile resolution, this will return nothing"),[];const o=[],l=new Qe(t.crs,t.x-r*s,t.x+r*s,t.y-a*s,t.y+a*s),h=this.getVectorFeaturesInExtent(l),u=t.as(i),f=[u.x,u.y];for(const c of h){const d=c.getGeometry();if(!d)continue;if(d.intersectsCoordinate(f)){o.push(c);continue}const m=d.getClosestPoint(f),_=Math.abs(m[0]-f[0])/r,g=Math.abs(m[1]-f[1])/a;if(_**2+g**2<=s**2){o.push(c);continue}}return o}if(this.source.isVectorSource&&this.visible){const o=t.as(i),l=[o.x,o.y];return this.source.source.getFeaturesAtCoordinate(l)}return[]}getVectorFeaturesInExtent(t){if(this.source.isVectorSource&&this.visible){const e=this.getExtent()?.crs;if(e==null)return[];const i=t.as(e),s=ul.toOLExtent(i);return this.source.source.getFeaturesInExtent(s)}return[]}}function fl(n){return typeof n=="object"&&n?.isColorLayer}class D3 extends B0{isElevationLayer=!0;constructor(t){super({...t,noDataOptions:t.noDataOptions??{replaceNoData:!1},computeMinMax:t.computeMinMax??!0,preloadImages:t.preloadImages??t.minmax==null}),t.minmax?this.minmax=t.minmax:this.minmax={min:0,max:0,isDefault:!0},this.type="ElevationLayer"}getRenderTargetDataType(){return Ie}getRenderTargetPixelFormat(){return Wr}adjustExtent(t){const e=this.getExtent();return e&&t.intersectsExtent(e)&&t.intersect(e),t}async onInitialized(){if(this.minmax==null||this.minmax.isDefault===!0){const t=Nt(this.getExtent(),"neither this layer nor the source has an extent"),{min:e,max:i}=Nt(this._composer).getMinMax(t);this.minmax={min:e,max:i}}}unregisterNode(t){super.unregisterNode(t),t.removeElevationTexture(),t.material.removeElevationLayer()}getMinMax(t){const e=es(t.min)?t.min:this.minmax.min,i=es(t.max)?t.max:this.minmax.max;return this.minmax.min=Math.min(e,this.minmax.min),this.minmax.max=Math.max(i,this.minmax.max),{min:e,max:i}}applyTextureToNode(t,e){const{texture:i,pitch:s}=t,{min:r,max:a}=this.getMinMax(i),o=e.node;o.material.hasElevationLayer(this)||o.material.pushElevationLayer(this),o.setElevationTexture(this,{texture:i,pitch:s,min:r,max:a,renderTarget:Nt(e.renderTarget).object})}applyEmptyTextureToNode(t){t.node.removeElevationTexture()}onTextureCreated(t){t.colorSpace=hi}}function $i(n){return typeof n=="object"&&n?.isElevationLayer}var Ul=(function(n){return n[n.FINAL=0]="FINAL",n[n.PICKING=1]="PICKING",n})(Ul||{});const N3=new bt(0,0,0),Vo=new rn(Yt.epsg3857,0,0,0);function O3(n,t,e,i){const s=n.engine.getWindowSize();e=e||new Z(Math.floor(s.x/2),Math.floor(s.y/2));const r=t.setRenderState(Ul.PICKING),a=n.engine.renderToBuffer({camera:n.view.camera,scene:t.object3d,clearColor:N3,datatype:Ie,zone:{x:e.x-i,y:e.y-i,width:1+i*2,height:1+i*2}});r();const o=[],l=[],h=[];return wf(i,(u,f,c)=>{const d=c*4,m=a[d+0],_=a[d+1],g=a[d+2],p=a[d+3];return o.push(m),h.push(_),l.push(new Z(g,p)),null}),{ids:o,uvs:l,zs:h}}function U3(n,t,e,i={}){const s=i.radius??0,r=i.limit??1/0,a=i.filter,o=[],{ids:l,uvs:h,zs:u}=O3(n,e,t,s),c=e.extent.crs;for(let d=0;d<l.length;d++){const m=l[d],_=h[d],g=u[d],p=e.tileIndex.getTile(m);if(p!=null&&p.isTileMesh){const y=p.extent;Vo.set(c,y.west+_.x*(y.east-y.west),y.south+_.y*(y.north-y.south),0);const x=g;if(x!=null){Vo.values[2]=x;const v=Vo.as(n.coordinateSystem),T=Vo.toVector3(new C),b={isMapPickResult:!0,object:p,entity:e,point:T,coord:v,distance:n.view.camera.position.distanceTo(T)};if((!a||a(b))&&(o.push(b),o.length>=r))break}}}return o}const um=new Xt,Ho=new Be,Bt=[new C,new C,new C,new C,new C,new C];function F3(n){return n<.5?2*n*n:-1+(4-2*n)*n}function G3(n,t,e,i,s){Bt[0].copy(n),Bt[0].applyMatrix4(e),e.extractBasis(Bt[1],Bt[2],Bt[3]),Bt[1].normalize().multiplyScalar(t.x),Bt[2].normalize().multiplyScalar(t.y),Bt[3]=Bt[1].clone().add(Bt[2]),s&&Bt[4].normalize().multiplyScalar(t.z);for(let c=1;c<(s?5:4);c++)Bt[c].add(Bt[0]);const r=i.viewMatrix;for(let c=0;c<(s?5:4);c++)Bt[c].applyMatrix4(r),Bt[c].z=0,Bt[c].x=(Bt[c].x+1)*i.width*.5,Bt[c].y=i.height-(Bt[c].y+1)*i.height*.5;const a=Math.abs(Mf.area([Bt[0],Bt[2],Bt[3],Bt[1]])),o=Bt[1].sub(Bt[0]).length(),l=Bt[2].sub(Bt[0]).length();let h=null,u=null;return s&&(h=Bt[4].clone(),u=Bt[4].sub(Bt[0]).length()),{origin:Bt[0].clone(),x:Bt[1].clone(),y:Bt[2].clone(),z:h,lengths:{x:o,y:l,z:u},ratio:F3(a/(o*l)),area:a}}function B3(n,t,e,i){um.copy(e).invert();const s=new C(0,0,0).applyMatrix4(n.camera.matrixWorld).applyMatrix4(um);if(Ho.copy(t),!i){const r=(t.min.z+t.max.z)/2;Ho.min.z=r-.1,Ho.max.z=r+.1}return Ho.distanceToPoint(s)}function z3(n,t,e){const i=n.getSize(Bt[5]);let s=Math.max(i.x,i.y);return e&&(s=Math.max(s,i.z)),i.multiplyScalar(t/s),i}var pa=(function(n){return n[n.MODE_2D=1]="MODE_2D",n[n.MODE_3D=2]="MODE_3D",n})(pa||{});const fm={Mode:pa,computeFromBox3(n,t,e,i,s){if(Br(n.camera)&&B3(n,t,e,s===pa.MODE_3D)<=i)return null;const r=z3(t,i,s===pa.MODE_3D),a=t.min;return G3(a,r,e,n,s===pa.MODE_3D)},computeFromSphere(n,t,e){if(t.containsPoint(n.camera.position))return 1/0;const i=Math.max(0,t.distanceToPoint(n.camera.position));return Bt[0].set(e,0,-i),Bt[0].applyMatrix4(n.camera.projectionMatrix),Bt[0].x=Bt[0].x*n.width*.5,Bt[0].y=Bt[0].y*n.height*.5,Bt[0].z=0,Bt[0].length()}},k3=!0,V3=!0,H3=32;class W3{_colorMaps=new Map;_texture=null;_dirty=!1;_disposed=!1;constructor(t){this._renderer=t}add(t){this._colorMaps.set(t,{offset:0,texture:""}),this._dirty=!0}remove(t){this._colorMaps.delete(t),this._dirty=!0}forceUpdate(){this._dirty=!0}update(){for(const[t,e]of this._colorMaps.entries())if(t.getTexture().uuid!==e.texture){this._dirty=!0;break}}createTexture(){if(this._texture?.dispose(),this._texture=null,this._colorMaps.size===0)return;const t=Math.max(...[...this._colorMaps.keys()].map(a=>a.colors.length)),e=this._colorMaps.size*3,i=new Fa({extent:new tn(0,1,0,1),width:t,height:e,webGLRenderer:this._renderer,minFilter:Ge,magFilter:Ge,reuseTexture:!1,textureDataType:ue,pixelFormat:Te}),s=1/this._colorMaps.size;let r=0;for(const[a,o]of this._colorMaps.entries()){const l=r+s,h=new tn(0,1,r,l),u=a.getTexture();i.draw(a.getTexture(),h),o.offset=h.centerY,o.texture=u.uuid,r=l}this._texture=i.render(),this._texture.name="ColorMapAtlas",i.dispose(),this._dirty=!1}get texture(){return this._dirty&&this.createTexture(),this._texture}getOffset(t){return this._dirty&&this.createTexture(),this._colorMaps.get(t)?.offset}dispose(){this._disposed||(this._disposed=!0,this._texture?.dispose(),this._colorMaps.clear())}}let Nf=(function(n){return n[n.Hillshade=0]="Hillshade",n[n.LightBased=1]="LightBased",n})({});function Nu(n,t,e){if(n.used===!0){const i=n;return Nu(i.right,t,e)||Nu(i.down,t,e)}return t<=n.w&&e<=n.h?n:null}function X3(n,t,e){return n.used=!0,n.down={x:n.x,y:n.y+e,w:n.w,h:n.h-e},n.right={x:n.x+t,y:n.y,w:n.w-t,h:e},n}function Y3(n,t,e,i){const s=i||{x:0,y:0,w:t,h:e};let r=0,a=0;for(const o of n){const l=Nu(s,o.w,o.h);l&&(o.fit=X3(l,o.w,o.h),r=Math.max(r,l.x+o.w),a=Math.max(a,l.y+o.h))}return{maxX:r,maxY:a}}function q3(n,t,e){const i=[];for(let l=0;l<t.length;l++){if(e&&t[l].id in e)continue;const h=t[l].size.width,u=t[l].size.height;i.push({layerId:t[l].id,w:Math.min(n,h),h:Math.min(n,u)})}i.sort((l,h)=>Math.max(l.w,l.h)<Math.max(h.w,h.h));let s=null;if(e)for(const l of Object.keys(e)){const h=e[l];if(h.x===0&&h.y===0){s=h;break}}if(e&&!s)throw new Error("oldAtlas is defined, but not previousRoot");const{maxX:r,maxY:a}=Y3(i,n,n,s),o=e||{};for(let l=0;l<i.length;l++)o[i[l].layerId]={...i[l].fit,offset:0};return{atlas:o,maxX:r,maxY:a}}const j3={pack:q3};function Z3(n,t,e){if(e=e??!1,n.defines==null)throw new Error("material.defines is null");const i=t;n.defines[i]===void 0?e&&(n.defines[i]=1,n.needsUpdate=!0):e||(delete n.defines[i],n.needsUpdate=!0)}function $3(n,t,e){if(n.defines==null)throw new Error("material.defines is null");const i=t,s=n.defines[i]!==e;return e!=null?n.defines[i]=e:delete n.defines[i],s&&(n.needsUpdate=!0),s}function K3(n){if(n instanceof ze||n instanceof LS)return"float";if(n instanceof PS||n instanceof CS||n instanceof bS)return"int";if(n instanceof vf||n instanceof _f||n instanceof AS||n instanceof RS)return"uint";throw new Error("unsupported vertex attribute type")}const pe={setDefine:Z3,setDefineValue:$3,getVertexAttributeType:K3},J3=`#define LAMBERT

#include <giro3d_precision_qualifiers>
#include <giro3d_fragment_shader_header>
#include <giro3d_common>

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <lights_pars_begin>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>

#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <fog_pars_fragment>

/**
 * Map tile fragment shader.
 */

/**
 * Rendering states are modes that change the kind of data that the fragment shader outputs.
 * - FINAL : the FS outputs the regular object's color and aspect. This is the default.
 * - PICKING : the FS outputs (ID, Z, U, V) as Float32 color
 */
const int STATE_FINAL = 0;
const int STATE_PICKING = 1;

varying vec2        vUv; // The input UV
varying vec3        vWorldPosition; // The input world position
varying vec3        vWorldNormal;
varying vec3        vNormal;

// For depth-based rendering (directional light shadow maps)
varying vec2        vHighPrecisionZW;

// Distance-based rendering (point light shadow maps)
uniform float       nearDistance;
uniform float       farDistance;
uniform vec3        referencePosition;

#if defined(ENABLE_SKIRTS)
varying float       vIsSkirtVertex; // 1.0 if the vertex belongs to the skirt, 0.0 if it belongs to the top side
#endif

uniform int         renderingState; // Current rendering state (default is STATE_FINAL)
uniform int         uuid;           // The ID of the tile mesh (used for the STATE_PICKING rendering state)

uniform float       opacity;        // The entire map opacity
uniform vec4        backgroundColor; // The background color
uniform vec3        brightnessContrastSaturation; // Brightness/contrast/saturation for the entire map

uniform vec4        extent; // The extent of the tile in local coordinates (e.g meters for cartesian, or degrees for geographic)

uniform vec2        baseTextureSize; // The theoretical texture size of the tile (not the actual texture size of any texture)

#include <giro3d_colormap_pars_fragment>
#include <giro3d_outline_pars_fragment>
#include <giro3d_graticule_pars_fragment>
#include <giro3d_compose_layers_pars_fragment>
#include <giro3d_contour_line_pars_fragment>
#include <giro3d_hillshading_pars_fragment>

#if defined(ENABLE_ELEVATION_RANGE)
uniform vec2        elevationRange; // Optional elevation range for the whole tile. Not to be confused with elevation range per layer.
#endif

uniform vec2        tileDimensions; // The dimensions of the tile, in linear units (not degrees)

#if defined(ELEVATION_LAYER)
uniform sampler2D   elevationTexture;
uniform LayerInfo   elevationLayer;
uniform ColorMap    elevationColorMap;  // The elevation layer's optional color map
#endif

void applyDiffuse(vec3 diffuse, int mode) {
    if (mode == HILLSHADE_SIMPLE) {
        // Hillshading expects an sRGB color space, so we have to convert the color
        // temporarily to sRGB, then back to sRGB-linear. Otherwise the result
        // looks washed out and lacks contrast.
        gl_FragColor = sRGBTransferOETF(gl_FragColor);
        gl_FragColor.rgb *= diffuse;
        gl_FragColor = sRGBToLinear(gl_FragColor);
    } else {
        // However in light-based lighting, we want to use exactly the same lighting
        // model as the other shaders in three.js to avoid discrepancies
        gl_FragColor.rgb *= diffuse;
    }
}

void renderDistance() {
    // Distance-based rendering for point light shadows
    float dist = length( vWorldPosition - referencePosition );
    dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
    dist = saturate( dist ); // clamp to [ 0, 1 ]
    gl_FragColor = packDepthToRGBA( dist );
}
vec3 Z = vec3(0, 0, 1);

void renderDepth() {
    // Depth-based rendering for directional light shadows
    // Higher precision equivalent of gl_FragCoord.z. This assumes depthRange has been left to its default values.
    float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
    gl_FragColor = packDepthToRGBA(fragCoordZ);
}

void renderBackface() {
    if (!gl_FrontFacing) {
        // Display the backside in a desaturated, darker tone, to give visual feedback that
        // we are, in fact, looking at the map from the "wrong" side.
        gl_FragColor.rgb = desaturate(gl_FragColor.rgb, 1.) * 0.5;
    }

}

// Transforms the local normal to ENU (for Globes)
vec3 transformENU(in vec3 normal, in vec3 localNormal) {
    vec3 u = normal;
    vec3 e = normalize(cross(Z, normal));
    vec3 n = normalize(cross(u, e));

    mat4 enu = transpose(mat4(
        e.x, e.y, e.z, 0.0,
        n.x, n.y, n.z, 0.0,
        u.x, u.y, u.z, 0.0,
        0.0, 0.0, 0.0, 1.0
    ));

    vec4 result = vec4(localNormal, 1.0) * enu;

    return result.xyz;
}

void main() {
    // Step 0 : discard fragment in trivial cases of transparency
    if (opacity == 0.) {
        return;
    }

    // Determine if the fragment belongs to the surface of the tile
    // or not. If skirts are enabled, then fragments belonging to the
    // sides or at the bottom are not part of the surface.
    // In other words, the surface is all the fragments that point "upward"
    bool isSurface = true;
#if defined(ENABLE_SKIRTS)
    if (vIsSkirtVertex > 0.0) {
        isSurface = false;
    }
#endif

    vec4 diffuseColor = vec4( 1, 1, 1, opacity );
    #include <clipping_planes_fragment>

    ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = vec3(0, 0, 0);

    #include <logdepthbuf_fragment>

    float height = 0.;

#if defined(ELEVATION_LAYER)
    vec2 elevUv = computeUv(vUv, elevationLayer.offsetScale.xy, elevationLayer.offsetScale.zw);
    height = getElevation(elevationTexture, elevUv);
#endif

#if defined(ENABLE_ELEVATION_RANGE)
    if (clamp(height, elevationRange.x, elevationRange.y) != height) {
        discard;
    }
#endif

    // Step 1 : discard fragment if the elevation texture is transparent
#if defined(DISCARD_NODATA_ELEVATION)
#if defined(ELEVATION_LAYER)
    // Let's discard transparent pixels in the elevation texture
    // Important note : if there is no elevation texture, all fragments are discarded
    // because the default value for texture pixels is zero.
    if (isNoData(elevationTexture, elevUv)) {
        discard;
    }
#else
    // No elevation layer present, discard completely.
    discard;
#endif
#endif

    // Step 2 : start with the background color
    gl_FragColor = backgroundColor;

#if defined(ELEVATION_LAYER)
    // Step 3 : if the elevation layer has a color map, use it as the background color.
    if (isSurface && elevationColorMap.mode != COLORMAP_MODE_DISABLED) {
        vec4 rgba = computeColorMap(
            tileDimensions,
            elevationLayer,
            elevationTexture,
            elevationColorMap,
            colorMapAtlas,
            vUv);
        gl_FragColor = blend(rgba, gl_FragColor);
    }
#endif

    vec3 localNormal = vec3(0, 0, 1);

#if defined(ELEVATION_LAYER)
    vec2 df = computeElevationDerivatives(
        tileDimensions,
        elevUv,
        elevationTexture,
        hillshading.zFactor,
        elevationLayer.offsetScale
    );

    localNormal = getNormalFromDerivatives(df.x, df.y);
#endif

#if defined(ENABLE_SKIRTS)
    // Skirts have their own normal that must not be overriden by elevation sampling
    if (!isSurface) {
        localNormal = vWorldNormal;
    }
#endif

    vec3 outgoingLight = vec3(1, 1, 1);

// Apply shading but only if we are not performing shadow mapping
// Since this shader is used to render both the "normal" aspect of the map
// as well as shadow mapping, we have to be careful to exclude irrelevant
// code from the shadow map code paths, both for performance and to avoid
// nasty issue such as https://gitlab.com/giro3d/giro3d/-/issues/579
#if defined(COLOR_RENDER)
    if (hillshading.mode == HILLSHADE_SIMPLE) {
        #if defined(ELEVATION_LAYER)
        outgoingLight = hillshade(df, hillshading.zenith, hillshading.azimuth, hillshading.intensity);
        #endif
    } else if (hillshading.mode == HILLSHADE_PHYSICAL) {
        #if defined(GLOBE)
            // In globe mode, we have to convert the normal local to the surface
            // to the world normal using an East/North/Up transformation matrix.
            vec3 worldNormal = transformENU(vWorldNormal, localNormal);
        #else
            vec3 worldNormal = localNormal;
        #endif

        vec3 normal = (vec4(worldNormal.xyz, 1.0) * inverse(viewMatrix)).xyz;

        #include <specularmap_fragment>
        #include <lights_lambert_fragment>
        #include <lights_fragment_begin>
        #include <lights_fragment_maps>
        #include <lights_fragment_end>

        outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
    }
#endif

// Shading can be applied either:
// - before the color layers (i.e only the background pixels will be shaded)
// - or after the color layers (i.e all pixels will be shaded).
#if defined(APPLY_SHADING_ON_COLORLAYERS)
    // Do nothing
#else
    applyDiffuse(outgoingLight, hillshading.mode);
#endif

    // Step 4 : process all color layers (either directly sampling the atlas texture, or use a color map).
    // Note: this was originally an included chunk (giro3d_compose_layers_pars_fragment), but due to
    // the limitation described by https://github.com/mrdoob/three.js/issues/28020,
    // we have to inline the code so that it can be patched from the material.
#if defined(COLOR_RENDER)
#if VISIBLE_COLOR_LAYER_COUNT
if (isSurface) {
    float maskOpacity = 1.;

    LayerInfo layer;
    ColorMap colorMap;
    vec4 rgba;
    vec4 blended;
    vec2 range;

    #pragma unroll_loop_start
    for ( int i = 0; i < COLOR_LAYERS_LOOP_END; i++ ) {
        layer = layers[UNROLLED_LOOP_INDEX];
        if (layer.color.a > 0.) {
            colorMap = layersColorMaps[UNROLLED_LOOP_INDEX];

        // If we are using an atlas texture, then all color layers will get their pixels from this shared texture.
        #if defined(USE_ATLAS_TEXTURE)
            rgba = computeColorLayer(tileDimensions, atlasTexture, colorMapAtlas, layer, colorMap, vUv);
        // Otherwise each color layer will get their pixels from their own texture.
        #else
            // We have to unroll the loop because we are accessing an array of samplers without a constant index (i.e UNROLLED_LOOP_INDEX)
            rgba = computeColorLayer(tileDimensions, colorTextures[UNROLLED_LOOP_INDEX], colorMapAtlas, layer, colorMap, vUv);
        #endif

        // Let's blend the layer color to the composited color.
        #if defined(ENABLE_LAYER_MASKS)
            if (layer.mode == LAYER_MODE_MASK) {
                // Mask layers do not contribute to the composition color.
                // instead, they contribute to the overall opacity of the map.
                maskOpacity *= rgba.a;
                blended = gl_FragColor;
            } else if (layer.mode == LAYER_MODE_MASK_INVERTED) {
                maskOpacity *= (1. - rgba.a);
                blended = gl_FragColor;
            } else if (layer.mode == LAYER_MODE_NORMAL) {
                blended = applyBlending(rgba, gl_FragColor, layer.blendingMode);
            }
        #else
            blended = applyBlending(rgba, gl_FragColor, layer.blendingMode);
        #endif

#if defined(ENABLE_ELEVATION_RANGE)
            range = layer.elevationRange;
            if (clamp(height, range.x, range.y) == height) {
                gl_FragColor = blended;
            }
#else
            if (isSurface) {
                gl_FragColor =  blended;
            }
#endif
        }
    }
    #pragma unroll_loop_end

    gl_FragColor.a *= maskOpacity;
}
#endif // VISIBLE_COLOR_LAYER_COUNT

    if (gl_FragColor.a <= 0.0) {
        discard;
    }

#if defined(ELEVATION_LAYER)
if (isSurface) {
    // Contour lines
    #include <giro3d_contour_line_fragment>
}
#endif
#endif // COLOR_RENDER

#if defined(APPLY_SHADING_ON_COLORLAYERS)
    applyDiffuse(outgoingLight, hillshading.mode);
#endif

    gl_FragColor.a *= opacity;

#if defined(DEPTH_RENDER)

    renderDepth();

#elif defined(DISTANCE_RENDER)

    renderDistance();

#else

    renderBackface();

if (isSurface) {
    // Step 7 : draw tile outlines
    #include <giro3d_outline_fragment>

    #include <giro3d_graticule_fragment>
}

    // Final step : process rendering states.
    if (gl_FragColor.a <= 0.) {
        // The fragment is transparent, discard it to short-circuit rendering state evaluation.
        discard;
    } else if (renderingState == STATE_FINAL) {
        if (isSurface) {
            gl_FragColor.rgb = adjustBrightnessContrastSaturation(gl_FragColor.rgb, brightnessContrastSaturation);
        }
        #include <colorspace_fragment>
        #include <fog_fragment>
        #include <premultiplied_alpha_fragment>
        #include <dithering_fragment>
    } else if (renderingState == STATE_PICKING) {
        float id = float(uuid);
        float z = height;
        float u = vUv.x;
        float v = vUv.y;
        // Requires a float32 render target
        gl_FragColor = vec4(id, z, u, v);
    }
#endif
}
`,Q3=`#include <giro3d_precision_qualifiers>
#include <giro3d_common>
#include <giro3d_terrain_pars_vertex>

#include <common>
#include <normal_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>

// Outputs
varying vec2        vUv;
varying vec3        vWorldPosition; // World space position
varying vec3        vWorldNormal; // World space normal
varying vec3        vViewPosition;

#if defined(ENABLE_SKIRTS)
uniform float       skirtElevation;
varying float       vIsSkirtVertex;
#endif

// This is used for computing an equivalent of gl_FragCoord.z that is as high precision as possible.
// Some platforms compute gl_FragCoord at a lower precision which makes the manually computed value better for
// depth-based postprocessing effects. Reproduced on iPad with A10 processor / iPadOS 13.3.1.
varying vec2        vHighPrecisionZW;

void main() {
    vUv = uv;

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

    #include <begin_vertex>

    #include <giro3d_terrain_vertex>
    #include <project_vertex>
    #include <logdepthbuf_vertex>
    #include <clipping_planes_vertex>

    vWorldNormal = normal;
    vViewPosition = -mvPosition.xyz;

    #include <worldpos_vertex>
    #include <shadowmap_vertex>
    #include <fog_vertex>

    vWorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;
    vHighPrecisionZW = gl_Position.zw;

#if defined(ENABLE_SKIRTS)
    vIsSkirtVertex = gl_VertexID >= int(skirtVertexRange[0]) && gl_VertexID <= int(skirtVertexRange[1]) ? 1.0 : 0.0;
#endif
}
`,Wo=16,tP=new Z,eP=new Tf,cc=0,uc=new Z(-999999,999999);class nP{constructor(t){this.layer=t,this.opacity=t.opacity,this.visible=t.visible,this.offsetScale=new fi(0,0,0,0),this.originalOffsetScale=new fi(0,0,0,0),this.texture=eP,this.color=new bt(1,1,1),this.brightnessContrastSaturation=new C(0,1,1)}get mode(){return this.layer.maskMode??0}}const iP="red",z0=1,k0=1,Ou=135,Uu=45,fc=new bt(0,0,0),Ki=500,dl=1;new C(1,0,0);function sP(n,t,e,i,s){const r=i.x,a=i.y+Nt(i.offset),o=new tn(r,r+n,a,a+t);e.draw(s,o)}function rP(n,t,e,i,s,r){if(e.z===0||e.w===0){r.set(0,0,0,0);return}const a=n.width/i,o=n.height/s;r.set(t.x/i+e.x*a,(t.y+Nt(t.offset))/s+e.y*o,e.z*a,e.w*o)}function aP(n,t){const e=new Array(t);for(let i=0;i<t;i++)e[i]={...n};return e}var pl=(function(n){return n[n.Disabled=0]="Disabled",n[n.Simple=1]="Simple",n[n.Realistic=2]="Realistic",n})(pl||{});function dm(n){return n.enabled!==!0?pl.Disabled:n.mode===Nf.LightBased?pl.Realistic:pl.Simple}class V0 extends je{isMemoryUsage=!0;_colorLayers=[];_elevationLayer=null;_mustUpdateUniforms=!0;_needsSorting=!0;_needsAtlasRepaint=!1;_composer=null;_colorMapAtlas=null;_composerDataType=ue;defines={VISIBLE_COLOR_LAYER_COUNT:0};getMemoryUsage(t){const e=this._texturesInfo.color.atlasTexture;e&&Ne.getMemoryUsage(t,e)}constructor(t){super({clipping:!0,glslVersion:bl}),this._atlasInfo={maxX:0,maxY:0,atlas:null},this._textureSize=t.textureSize,this.fog=!0,this._maxTextureImageUnits=t.maxTextureImageUnits,this._getIndexFn=t.getIndexFn;const e=t.options;pe.setDefine(this,"USE_ATLAS_TEXTURE",!1),pe.setDefine(this,"STITCHING",e.terrain.stitching),pe.setDefine(this,"GLOBE",t.isGlobe),pe.setDefine(this,"TERRAIN_DEFORMATION",e.terrain.enabled),pe.setDefine(this,"DISCARD_NODATA_ELEVATION",e.discardNoData),pe.setDefine(this,"ENABLE_ELEVATION_RANGE",e.elevationRange!=null),pe.setDefineValue(this,"VISIBLE_COLOR_LAYER_COUNT",0),pe.setDefine(this,"COLOR_RENDER",!0),this.fragmentShader=J3,this.vertexShader=Q3,this._texturesInfo={color:{infos:[],atlasTexture:null},elevation:{offsetScale:new fi(0,0,0,0),texture:null}},this.side=e.side,this.lights=!0,this._renderer=t.renderer,this._forceTextureAtlas=e.forceTextureAtlases??!1,this._composerDataType=t.textureDataType,this._colorMapAtlas=e.colorMapAtlas??null;const i=e.elevationRange?new Z(e.elevationRange.min,e.elevationRange.max):uc,s=this._texturesInfo.elevation,r=t.extent,{width:a,height:o}=r.dimensions(tP);this.uniforms={...at.common,...at.lights,...at.fog,referencePosition:new Pt(new C),nearDistance:new Pt(1),farDistance:new Pt(1e3),uuid:new Pt(0),baseTextureSize:new Pt(this._textureSize),hillshading:new Pt({mode:dm(e.lighting),zenith:Uu,azimuth:Ou,intensity:z0,zFactor:k0}),renderingState:new Pt(Ul.FINAL),extent:new Pt(new te(r.west,r.south,a,o)),tileDimensions:new Pt(t.tileDimensions),segments:new Pt(e.terrain.segments??8),neighbours:new Pt(aP({diffLevel:0,offsetScale:null},8)),neighbourTextures:new Pt([null,null,null,null,null,null,null,null]),elevationRange:new Pt(i),graticule:new Pt({color:new te(0,0,0,1),thickness:dl,position:new te(0,0,Ki,Ki)}),contourLines:new Pt({thickness:1,primaryInterval:100,secondaryInterval:20,color:new te(0,0,0,1)}),backgroundColor:new Pt(new te),tileOutlineColor:new Pt(new bt(iP)),brightnessContrastSaturation:new Pt(new C(0,1,1)),colorMapAtlas:new Pt(null),layersColorMaps:new Pt([]),elevationColorMap:new Pt({mode:0,offset:0,max:0,min:0}),elevationScaling:new Pt(1),elevationTexture:new Pt(s.texture),atlasTexture:new Pt(this._texturesInfo.color.atlasTexture),colorTextures:new Pt([]),layers:new Pt([]),elevationLayer:new Pt({brightnessContrastSaturation:new C(0,1,1),color:new te(0,0,0,0),elevationRange:new Z(0,0),offsetScale:new fi(0,0,0,0),textureSize:new Z(0,0),blendingMode:Nl.None,mode:0}),skirtVertexRange:new Pt(new Z(0,0)),skirtElevation:new Pt(0)},this.uniformsNeedUpdate=!0,this.update(e),Nn.track(this,"LayeredMaterial")}set segments(t){this.uniforms.segments.value=t}updateNeighbour(t,e,i,s){this.uniforms.neighbours.value[t].diffLevel=e,this.uniforms.neighbours.value[t].offsetScale=i,this.uniforms.neighbourTextures.value[t]=s}setElevationScaling(t){this.uniforms.elevationScaling.value=t}onBeforeCompile(t){t.fragmentShader=t.fragmentShader.replaceAll("COLOR_LAYERS_LOOP_END",`${this.defines.VISIBLE_COLOR_LAYER_COUNT}`)}updateColorLayerUniforms(){const t=this.defines.USE_ATLAS_TEXTURE===1;if(this.sortLayersIfNecessary(),this._mustUpdateUniforms){const e=[],i=this._texturesInfo.color.infos,s=this.uniforms.colorTextures.value;s.length=0;for(const r of i){const a=r.layer;if(!a.visible)continue;const o=t?r.offsetScale:r.originalOffsetScale,l=r.texture;let h=new Z(0,0);const u=l.image;u!=null&&(h=new Z(u.width,u.height));const f=r.color,c=r.visible?r.opacity:0,d=new te(f.r,f.g,f.b,c),m=r.elevationRange||uc,_={offsetScale:o,color:d,textureSize:h,elevationRange:m,mode:r.mode,blendingMode:a.blendingMode,brightnessContrastSaturation:r.brightnessContrastSaturation};e.push(_),t||s.push(l)}this.uniforms.layers.value=e}}dispose(){this.dispatchEvent({type:"dispose"});for(const t of this._colorLayers){const e=this.indexOfColorLayer(t);e!==-1&&delete this._texturesInfo.color.infos[e]}this._colorLayers.length=0,this._composer?.dispose(),this._texturesInfo.color.atlasTexture?.dispose()}getColorTexture(t){const e=this.indexOfColorLayer(t);return e===-1?null:this._texturesInfo.color.infos[e].texture}countIndividualTextures(){let t=0;this._elevationLayer&&(t++,this.defines.STITCHING&&(t+=8)),this._colorMapAtlas&&t++;const e=this.getVisibleColorLayerCount();return t+=e,{totalTextureUnits:t,visibleColorLayers:e}}onBeforeRender(){this.updateOpacityParameters(this.opacity),this.defines.USE_ATLAS_TEXTURE&&this._needsAtlasRepaint&&(this.repaintAtlas(),this._needsAtlasRepaint=!1),this.updateColorWrite(),this.updateColorLayerUniforms(),this.updateColorMaps()}updateColorWrite(){this._texturesInfo.elevation.texture==null&&this.defines.DISCARD_NODATA_ELEVATION?this.colorWrite=!1:this.colorWrite=!0}repaintAtlas(){this.rebuildAtlasIfNecessary();const t=Nt(this._composer);t.clear();for(const i of this._colorLayers){if(!i.visible)continue;const s=this.indexOfColorLayer(i),r=Nt(this._atlasInfo.atlas)[i.id],a=this._texturesInfo.color.infos[s].texture,o=a?.image?.width??Wo,l=a?.image?.height??Wo;rP(new Z(o,l),r,this._texturesInfo.color.infos[s].originalOffsetScale,this.composerWidth,this.composerHeight,this._texturesInfo.color.infos[s].offsetScale),a!=null&&sP(o,l,Nt(t),r,a)}const e=t.render();e.name="LayeredMaterial - Atlas",Nn.track(e,e.name),e.uuid!==this._texturesInfo.color.atlasTexture?.uuid&&this.rebuildAtlasTexture(e),this.uniforms.atlasTexture.value=this._texturesInfo.color.atlasTexture}setColorTextures(t,e){const i=this.indexOfColorLayer(t);i<0&&this.pushColorLayer(t);const{pitch:s,texture:r}=e;this._texturesInfo.color.infos[i].originalOffsetScale.copy(s),this._texturesInfo.color.infos[i].texture=r;const a=Ne.getBytesPerChannel(this._composerDataType);Ne.getBytesPerChannel(r.type)>a&&(this._composerDataType=r.type),this._needsAtlasRepaint=!0}pushElevationLayer(t){this._elevationLayer=t}removeElevationLayer(){this._elevationLayer=null,this.uniforms.elevationTexture.value=null,this._texturesInfo.elevation.texture=null,pe.setDefine(this,"ELEVATION_LAYER",!1)}setElevationTexture(t,{texture:e,pitch:i}){this._elevationLayer=t,pe.setDefine(this,"ELEVATION_LAYER",!0),this.uniforms.elevationTexture.value=e,this._texturesInfo.elevation.texture=e,this._texturesInfo.elevation.offsetScale.copy(i);const s=this.uniforms.elevationLayer.value;s.offsetScale=i,s.textureSize=new Z(e.image.width,e.image.height),s.color=new te(1,1,1,1),s.brightnessContrastSaturation=new C(1,1,1),s.elevationRange=new Z,this.updateColorMaps()}rebuildAtlasInfo(){const t=this._colorLayers,e=1.1,{width:i,height:s}=this._textureSize,{atlas:r,maxX:a,maxY:o}=j3.pack(to.getMaxTextureSize(),t.map(l=>({id:l.id,size:new Z(Math.round(i*l.resolutionFactor*e),Math.round(s*l.resolutionFactor*e))})),this._atlasInfo.atlas);this._atlasInfo.atlas=r,this._atlasInfo.maxX=Math.max(this._atlasInfo.maxX,a),this._atlasInfo.maxY=Math.max(this._atlasInfo.maxY,o)}pushColorLayer(t){if(this._colorLayers.includes(t))return;this._colorLayers.push(t);const e=new nP(t);if(t.type==="MaskLayer"&&pe.setDefine(this,"ENABLE_LAYER_MASKS",!0),this.rebuildAtlasInfo(),t.elevationRange!=null){pe.setDefine(this,"ENABLE_ELEVATION_RANGE",!0);const{min:i,max:s}=t.elevationRange;e.elevationRange=new Z(i,s)}this._texturesInfo.color.infos.push(e),this.updateColorLayerCount(),this.updateColorMaps(),this.needsUpdate=!0}getVisibleColorLayerCount(){let t=0;for(let e=0;e<this._colorLayers.length;e++)this._colorLayers[e].visible&&t++;return t}reorderLayers(){this._needsSorting=!0}sortLayersIfNecessary(){const t=this._getIndexFn;this._needsSorting&&(this._colorLayers.sort((e,i)=>t(e)-t(i)),this._texturesInfo.color.infos.sort((e,i)=>t(e.layer)-t(i.layer)),this._needsSorting=!1)}removeColorLayer(t){const e=this.indexOfColorLayer(t);e!==-1&&(this._texturesInfo.color.infos.splice(e,1),this._colorLayers.splice(e,1),this.updateColorMaps(),this.rebuildAtlasInfo(),this.updateColorLayerCount())}setColorMapAtlas(t){this._colorMapAtlas=t}updateColorMaps(){this.sortLayersIfNecessary();const t=this._colorMapAtlas,e=this._elevationLayer?.colorMap,i=this.uniforms.elevationColorMap;e?.active===!0?(i.value.mode=e?.mode??cc,i.value.min=e?.min??0,i.value.max=e?.max??0,i.value.offset=t?.getOffset(e)??0):(i.value.mode=cc,i.value.min=0,i.value.max=0);const s=this._texturesInfo.color.infos,r=[];for(let a=0;a<s.length;a++){const o=s[a];if(!o.layer.visible)continue;const l=o.layer.colorMap,h={mode:l?.active===!0?l.mode:cc,min:l?.min??0,max:l?.max??0,offset:l?t?.getOffset(l)??0:0};r.push(h)}if(this.uniforms.layersColorMaps=new Pt(r),t?.texture){const a=t.texture??null;this.uniforms.colorMapAtlas.value=a}}updateGraticuleUniforms(t){const e=t.graticule,i=e.enabled??!1;if(pe.setDefine(this,"ENABLE_GRATICULE",i),i){const s=this.uniforms.graticule.value;s.thickness=e.thickness,s.position.set(e.xOffset,e.yOffset,e.xStep,e.yStep);const r=jh(e.color);s.color.set(r.r,r.g,r.b,e.opacity??0)}}updateContourLineUniforms(t){const e=t.contourLines;if(e.enabled){const i=jh(e.color),s=e.opacity;this.uniforms.contourLines.value={thickness:e.thickness??1,primaryInterval:e.interval??100,secondaryInterval:e.secondaryInterval??0,color:new te(i.r,i.g,i.b,s)}}pe.setDefine(this,"ENABLE_CONTOUR_LINES",e.enabled)}updateColorUniforms(t){const e=t.backgroundOpacity,i=t.backgroundColor,s=new te(i.r,i.g,i.b,e);this.uniforms.backgroundColor.value.copy(s);const r=t.colorimetry;this.uniforms.brightnessContrastSaturation.value.set(r.brightness,r.contrast,r.saturation)}updateHillshadingUniforms(t){const e=t.lighting;pe.setDefine(this,"APPLY_SHADING_ON_COLORLAYERS",!e.elevationLayersOnly);const i=this.uniforms.hillshading.value;e.mode===Nf.Hillshade&&(i.zenith=e.hillshadeZenith??Uu,i.azimuth=e.hillshadeAzimuth??Ou,i.intensity=e.hillshadeIntensity??1),i.mode=dm(e),i.zFactor=e.zFactor??1}update(t){if(t){if(this._options=t,this.depthTest=t.depthTest,this._colorMapAtlas&&this.updateColorMaps(),this.updateColorUniforms(t),this.updateGraticuleUniforms(t),this.updateContourLineUniforms(t),this.updateHillshadingUniforms(t),t.elevationRange){const{min:i,max:s}=t.elevationRange;this.uniforms.elevationRange.value.set(i,s)}pe.setDefine(this,"ELEVATION_LAYER",this._elevationLayer?.visible),pe.setDefine(this,"ENABLE_OUTLINES",t.showTileOutlines),t.showTileOutlines&&(this.uniforms.tileOutlineColor.value=jh(t.tileOutlineColor)),pe.setDefine(this,"DISCARD_NODATA_ELEVATION",t.discardNoData),pe.setDefine(this,"TERRAIN_DEFORMATION",t.terrain.enabled),pe.setDefine(this,"STITCHING",t.terrain.stitching);const e=t.side;this.side!==e&&(this.side=e,this.needsUpdate=!0)}return this._colorLayers.length===0?!0:this.rebuildAtlasIfNecessary()}updateColorLayerCount(){const{totalTextureUnits:t,visibleColorLayers:e}=this.countIndividualTextures(),i=this._forceTextureAtlas||t>this._maxTextureImageUnits;pe.setDefine(this,"USE_ATLAS_TEXTURE",i),pe.setDefineValue(this,"VISIBLE_COLOR_LAYER_COUNT",e)&&(this._mustUpdateUniforms=!0,this._needsAtlasRepaint=!0,this.needsUpdate=!0)}customProgramCacheKey(){return(this.defines.VISIBLE_COLOR_LAYER_COUNT??0).toString()}createComposer(){return new Fa({extent:new tn(0,this._atlasInfo.maxX,0,this._atlasInfo.maxY),width:this._atlasInfo.maxX,height:this._atlasInfo.maxY,reuseTexture:!0,webGLRenderer:this._renderer,pixelFormat:Te,textureDataType:this._composerDataType})}get composerWidth(){return this._composer?.width??0}get composerHeight(){return this._composer?.height??0}rebuildAtlasIfNecessary(){if(this._composer==null||this._atlasInfo.maxX>this.composerWidth||this._atlasInfo.maxY>this.composerHeight||this._composer.dataType!==this._composerDataType){const t=this.createComposer();let e=null;const i=this._texturesInfo.color.atlasTexture;this._composer&&i&&this.composerWidth>0&&(t.draw(i,new tn(0,this.composerWidth,0,this.composerHeight)),e=t.render()),this._composer?.dispose(),i?.dispose(),this._composer=t;const s=Nt(this._atlasInfo.atlas);for(let r=0;r<this._colorLayers.length;r++){const a=this._colorLayers[r],o=s[a.id],l=this._texturesInfo.color.infos[r].originalOffsetScale,h=this._texturesInfo.color.infos[r].texture,u=h?.image?.width??Wo,f=h?.image?.height??Wo,c=u/this.composerWidth,d=f/this.composerHeight;this._texturesInfo.color.infos[r].offsetScale=new fi(o.x/this.composerWidth+l.x*c,(o.y+Nt(o.offset))/this.composerHeight+l.y*d,l.z*c,l.w*d)}this.rebuildAtlasTexture(e)}return this.composerWidth>0}rebuildAtlasTexture(t){t&&(t.name="LayeredMaterial - Atlas"),this._texturesInfo.color.atlasTexture?.dispose(),this._texturesInfo.color.atlasTexture=t,this.uniforms.atlasTexture.value=this._texturesInfo.color.atlasTexture}changeState(t){this.uniforms.renderingState.value!==t&&(this.uniforms.renderingState.value=t,this.updateOpacityParameters(this.opacity),this.updateBlendingMode(),this.needsUpdate=!0)}updateBlendingMode(){if(this.uniforms.renderingState.value===Ul.FINAL){const e=this._options?.backgroundOpacity??1;this.transparent=this.opacity<1||e<1,this.needsUpdate=!0,this.blending=kn}else this.blending=ui,this.transparent=!1,this.needsUpdate=!0}hasColorLayer(t){return this.indexOfColorLayer(t)!==-1}hasElevationLayer(t){return this._elevationLayer!==t}indexOfColorLayer(t){return this._colorLayers.indexOf(t)}updateOpacityParameters(t){this.uniforms.opacity.value=t,this.updateBlendingMode()}setLayerOpacity(t,e){const i=this.indexOfColorLayer(t);this._texturesInfo.color.infos[i].opacity=e,this._mustUpdateUniforms=!0}setLayerVisibility(t,e){const i=this.indexOfColorLayer(t);this._texturesInfo.color.infos[i].visible=e,this._mustUpdateUniforms=!0,this.needsUpdate=!0,this.reorderLayers(),this.updateColorLayerCount()}setLayerElevationRange(t,e){e!=null&&pe.setDefine(this,"ENABLE_ELEVATION_RANGE",!0);const i=this.indexOfColorLayer(t),s=e?new Z(e.min,e.max):uc;this._texturesInfo.color.infos[i].elevationRange=s,this._mustUpdateUniforms=!0}setColorimetry(t,e,i,s){const r=this.indexOfColorLayer(t);this._texturesInfo.color.infos[r].brightnessContrastSaturation.set(e,i,s),this._mustUpdateUniforms=!0}getElevationTexture(){return this._texturesInfo.elevation.texture}getElevationOffsetScale(){return this._texturesInfo.elevation.offsetScale}getElevationLayer(){return this._elevationLayer}getLayerCount(){return(this._elevationLayer?1:0)+this._colorLayers.length}setUuid(t){this.uniforms.uuid.value=t}}class pm extends V0{constructor(t){switch(super(t),this._source=t.source,this._shadowMode=t.shadowMode,this.isMeshDistanceMaterial=t.shadowMode==="distance",this.isMeshDepthMaterial=!this.isMeshDistanceMaterial,this.transparent=!1,this.opacity=1,pe.setDefine(this,"COLOR_RENDER",!1),pe.setDefine(this,"STITCHING",!1),this._shadowMode){case"distance":pe.setDefine(this,"DISTANCE_RENDER",!0);break;case"depth":pe.setDefine(this,"DEPTH_RENDER",!0);break}}copyElevationParameters(){const t=this._source.getElevationLayer();if(t){const e=this._source.getElevationTexture();if(e){const i=this._source.getElevationOffsetScale();this.setElevationTexture(t,{texture:e,pitch:i})}}else this.removeElevationLayer()}onBeforeRender(){this.copyElevationParameters()}}const ti=0,ei=1,oi=2,Yi=3;class H0{_lastExpansion=0;get byteLength(){return this.array.byteLength}get capacity(){return this.array.length/this._dimension}get array(){return this._array}toFloat32Array(){return this._array instanceof Float32Array?this._array.length===this._length*this._dimension?this._array:this._array.slice(0,this._length*this._dimension):new Float32Array(this._array.slice(0,this._length*this._dimension))}constructor(t,e){if(this._dimension=e,t.length%this._dimension!==0)throw new Error(`invalid size, expected a multiple of ${this._dimension}, got ${t.length}`);this._array=t,this._capacity=this._array.length/this._dimension,this._length=this._capacity}get length(){return this._length}set length(t){this._length=t}setX(t,e){const i=t*this._dimension;this._array[i+ti]=e}getX(t){const e=t*this._dimension;return this._array[e+ti]}setY(t,e){const i=t*this._dimension;this._array[i+ei]=e}getY(t){const e=t*this._dimension;return this._array[e+ei]}setZ(t,e){if(this._dimension>=3){const i=t*this._dimension;this._array[i+oi]=e}}getZ(t){if(this._dimension>=3){const e=t*this._dimension;return this._array[e+oi]}return null}setW(t,e){if(this._dimension>=4){const i=t*this._dimension;this._array[i+Yi]=e}}getW(t){if(this._dimension>=4){const e=t*this._dimension;return this._array[e+Yi]}return null}setVector(t,e){const i=t*this._dimension;this._array[i+ti]=e.getComponent(ti),this._array[i+ei]=e.getComponent(ei),this._dimension>=3&&(this._array[i+oi]=e.getComponent(oi)),this._dimension>=4&&(this._array[i+Yi]=e.getComponent(Yi))}set(t,e,i,s,r){const a=t*this._dimension;if(a>=this._array.length)throw new Error("index out of bounds");this._array[a+ti]=e,this._array[a+ei]=i,this._dimension>=oi&&s!=null&&(this._array[a+oi]=s),this._dimension>=Yi&&r!=null&&(this._array[a+Yi]=r)}copyItem(t,e){const i=this._dimension,s=e*i,r=t*i;this._array[s+ti]=this._array[r+ti],this._array[s+ei]=this._array[r+ei],i>=3&&(this._array[s+oi]=this._array[r+oi]),i>=4&&(this._array[s+Yi]=this._array[r+Yi])}computeExpansionSize(){return this._lastExpansion===0?this._lastExpansion=32:(this._lastExpansion*=2,this._lastExpansion=qt.clamp(this._lastExpansion,32,65536)),this._lastExpansion}trim(){this._capacity>this._length&&(this._capacity=this._length,this._array=this._array.slice(0,this._length*this._dimension))}allocateIfFull(){if(this._capacity===this._length){const t=this._length;this.expand(this._length+this.computeExpansionSize()),this._capacity=this._array.length/this._dimension,this._length=t}}push(t,e,i,s){this.allocateIfFull(),this.setX(this._length,t),this.setY(this._length,e),i!=null&&this.setZ(this._length,i),s!=null&&this.setW(this._length,s),this._length++}pushVector(t){this.allocateIfFull(),this.assignVector(this._length*this._dimension,t),this._length++}expand(t){const e=new this.array.constructor(t*this._dimension);return e.set(this._array),this._array=e,this._capacity=this._array.length/this._dimension,this._length=this._capacity,this}forEach(t){const e=this.getTempVector(),i=this._dimension;for(let s=0;s<this._array.length;s+=i){this.readVector(s,e);const r=s/i;t(e,r,this)}}}class Of extends H0{dimension=2;constructor(t){super(t,2)}get(t,e){return e=e??new Z,e.set(this.getX(t),this.getY(t))}clone(){return new Of(this._array.slice(0))}getTempVector(){return new Z}readVector(t,e){const i=this._array;e.set(i[t+ti],i[t+ei])}assignVector(t,e){this._array[t+ti]=e.x,this._array[t+ei]=e.y}}class Fl extends H0{dimension=3;constructor(t){super(t,3)}get(t,e){return e=e??new C,e.set(this.getX(t),this.getY(t),Nt(this.getZ(t)))}clone(){return new Fl(this._array.slice(0))}getZ(t){return super.getZ(t)}getTempVector(){return new C}readVector(t,e){const i=this._array;e.set(i[t+ti],i[t+ei],i[t+oi])}assignVector(t,e){this._array[t+ti]=e.x,this._array[t+ei]=e.y,this._array[t+oi]=e.z}}const mm=new Map;let Xo=(function(n){return n[n.Top=0]="Top",n[n.Right=1]="Right",n[n.Bottom=2]="Bottom",n[n.Left=3]="Left",n})({});function gm(n,t){const e=n.length;t(e-4),t(e-3),t(e-2),t(e-1)}function dc(n,t,e){const i=n+1,s=i*i,r=i*2;let a=0,o=0;for(let l=0;l<i;l++){const h=s+o+l;e(Xo.Top,l+a,h,h+i)}o+=r;for(let l=0;l<i;l++){const h=s+o+l;e(Xo.Right,l*i+(i-1),h,h+i)}a=i*(i-1),o+=r;for(let l=0;l<i;l++){const h=s+o+l;e(Xo.Bottom,l+a,h,h+i)}o+=r;for(let l=0;l<i;l++){const h=s+o+l;e(Xo.Left,l*i,h,h+i)}}function pc(n,t){return t.expand(t.length+(4*((n+1)*2)+4)),t}function oP(n,t){const e=Nt(new cs(1,1,n,1).index).array,i=e.slice(0);for(let _=0;_<i.length;_+=3){const g=i[_+0],p=i[_+1];i[_+0]=p,i[_+1]=g}let s;const r=n+1,a=r*r,o=r*2,l=e?.length*4+6,h=t.length+l;t instanceof Uint16Array?s=new Uint16Array(h):s=new Uint32Array(h),s.set(t,0);const u=t.length;let f=a,c=u;s.set(i.slice(0).map(_=>_+f),c),f+=o,c+=e.length,s.set(i.slice(0).map(_=>_+f),c),f+=o,c+=e.length,s.set(e.slice(0).map(_=>_+f),c),f+=o,c+=e.length,s.set(e.slice(0).map(_=>_+f),c),f+=o,c+=e.length;const d=a+r*2*4+4-4,m=d+2;return s.set([d,d+1,m,d,m,d+3],c),s}function W0(n,t){const e=`${n}-${t?1:0}`;let i=mm.get(e);if(!i){const s=new cs(1,1,n,n);let r=new Fl(s.getAttribute("position").array),a=new Fl(s.getAttribute("normal").array),o=new Of(s.getAttribute("uv").array),l=Nt(s.getIndex()).array;t&&(r=pc(n,r),a=pc(n,a),o=pc(n,o),l=oP(n,l)),i={positionBuffer:r,normalBuffer:a,uvBuffer:o,indexBuffer:l},mm.set(e,i)}return{normalBuffer:i.positionBuffer,positionBuffer:i.positionBuffer,uvBuffer:i.uvBuffer,indexBuffer:i.indexBuffer}}const lP=new Z,hP=new C,cP=new C,uP=new C,fP=new C,dP=new C,pP=new C;var Zi=(function(n){return n[n.Rendering=0]="Rendering",n[n.Raycasting=1]="Raycasting",n})(Zi||{});function mP(n,t){const e=t+1,i=e*e;n.copyItem(0,i+0),n.copyItem(e,i+1),n.copyItem(i-e,i+2),n.copyItem(i,i+3)}class gP extends _n{isMemoryUsage=!0;_segments=32;_heightMap=null;_skirtDepth=null;get vertexCount(){return this.getAttribute("position").count}get segments(){return this._segments}set segments(t){this._segments!==t&&(this._segments=t,this.buildBuffers(this,Zi.Rendering),this.buildBuffers(this._raycastGeometry,Zi.Raycasting))}get origin(){return this._origin}get raycastGeometry(){return this._raycastGeometry}constructor(t){if(super(),this._segments=t.segments,this._extent=t.extent,this._skirtDepth=t.skirtDepth,this._ellipsoid=t.ellipsoid,this._origin=this._ellipsoid.toCartesian(this._extent.north,this._extent.west,0),!this._extent.crs.isEpsg(4326))throw new Error(`invalid CRS. Expected EPSG:4326, got: ${this._extent.crs.id}`);this._raycastGeometry=new _n,this.buildBuffers(this,Zi.Rendering),this.buildBuffers(this._raycastGeometry,Zi.Raycasting)}resetHeights(){this.buildBuffers(this.raycastGeometry,Zi.Raycasting)}applyHeightMap(t){return this._heightMap=t,this.buildBuffers(this.raycastGeometry,Zi.Raycasting)}getMemoryUsage(t){Dl(t,this),Dl(t,this.raycastGeometry)}buildBuffers(t,e){this.dispose();const i=this._segments+1,s=this._extent.dimensions(lP),r=s.width,a=s.height,o=this._extent.west,l=this._extent.north,h=this._extent.south,u=this._extent.east,f=this._origin,c=W0(this.segments,this._skirtDepth!=null),d=this._heightMap;function m(b,R){return d?d.getValue(b,R,!0)??0:0}let _=1/0,g=-1/0;const p=new Be().makeEmpty(),y=c.positionBuffer.clone(),x=c.normalBuffer.clone(),v=c.uvBuffer,T=c.indexBuffer;for(let b=0;b<i;b++)for(let R=0;R<i;R++){const L=b*i+R,S=R/this.segments,E=b/this.segments,P=e===Zi.Raycasting?m(S,1-E):0;_=Math.min(_,P),g=Math.max(g,P);const F=this._ellipsoid.toCartesian(l-E*a,o+S*r,P,hP),I=this._ellipsoid.getNormalFromCartesian(F,cP),z=F.sub(f);p.expandByPoint(z),y.set(L,z.x,z.y,z.z),x.set(L,I.x,I.y,I.z)}if(this._skirtDepth!=null){const b=this._skirtDepth,R=i*i,L=this._ellipsoid.toCartesian(l,o,b,uP).sub(f),S=this._ellipsoid.toCartesian(l,u,b,fP).sub(f),E=this._ellipsoid.toCartesian(h,o,b,dP).sub(f),P=this._ellipsoid.toCartesian(h,u,b,pP).sub(f);y.set(R+0,L.x,L.y,L.z),y.set(R+1,S.x,S.y,S.z),y.set(R+2,E.x,E.y,E.z),y.set(R+3,P.x,P.y,P.z),mP(x,this.segments)}return t.setAttribute("position",new De(y.array,3)),t.setAttribute("normal",new De(x.array,3)),t.setAttribute("uv",new De(v.array,2)),t.setIndex(new De(T,1)),this.boundingBox=p,{min:_,max:g}}}class _P{constructor(t,e,i){this.ellipsoid=t,this._segments=e,this._skirtDepth=i}get rootTileMatrix(){return new Z(4,2)}set segments(t){this._segments=t}build(t){return new gP({extent:t.extent,ellipsoid:this.ellipsoid,segments:this._segments,skirtDepth:this._skirtDepth})}}const Yo=new C,vP=new Z;class xP extends _n{isMemoryUsage=!0;_heightMap=null;_skirtDepth=null;getMemoryUsage(t){Dl(t,this)}get vertexCount(){return this.getAttribute("position").count}get origin(){return this._origin}get raycastGeometry(){return this}constructor(t){super(),this._extent=t.extent,this._origin=this._extent.center().toVector3(),this._dimensions=t.extent.dimensions(),this._skirtDepth=t.skirtDepth??null,this._segments=t.segments,this.buildBuffers(this)}get segments(){return this._segments}set segments(t){this._segments!==t&&(this._segments=t,this.buildBuffers(this))}resetHeights(){const t=this.getAttribute("position");let e=t.count;this._skirtDepth!=null&&(e-=4);for(let i=0;i<e;i++)t.setZ(i,0);if(this._skirtDepth!=null)for(let i=e;i<e+4;i++)t.setZ(i,this._skirtDepth);t.needsUpdate=!0,this.computeBoundingBox()}applyHeightMap(t){return this._heightMap=t,this.buildBuffers(this)}buildBuffers(t){this.dispose();const e=this._segments+1,i=this._dimensions,s=i.width,r=i.height,a=this._origin,o=W0(this._segments,this._skirtDepth!=null),l=this._heightMap;function h(L,S){return l==null?0:l.getValue(L,S,!0)??0}let u=1/0,f=-1/0;const c=new Be().makeEmpty(),d=o.positionBuffer.clone(),m=o.normalBuffer.clone(),_=o.uvBuffer,g=o.indexBuffer,p=new C,y=new C(0,0,1),x=new C(0,1,0),v=new C(1,0,0),T=new C(0,-1,0),b=new C(-1,0,0),R=new C(0,0,-1);for(let L=0;L<e;L++)for(let S=0;S<e;S++){const E=L*e+S,P=S/this.segments,F=L/this.segments,I=h(P,1-F);u=Math.min(u,I),f=Math.max(f,I);const z=a.x-s/2+P*s,X=a.y+r/2-F*r;p.set(z,X,I);const H=p.sub(a);c.expandByPoint(H),d.set(E,H.x,H.y,I),m.set(E,y.x,y.y,y.z)}if(this._skirtDepth!=null){const L=this._skirtDepth,S=e*e;dc(this.segments,d,(X,H,Y,k)=>{const et=d.getX(H),ht=d.getY(H),vt=d.getZ(H);d.set(Y,et,ht,vt),d.set(k,et,ht,L)});const E=[x,v,T,b];dc(this.segments,m,(X,H,Y,k)=>{const et=E[X];m.setVector(Y,et),m.setVector(k,et)});const P=new Z(-999,-999);dc(this.segments,m,(X,H,Y,k)=>{const et=_.get(H,vP);_.setVector(Y,et),_.setVector(k,P)});const F=d.length,I=c.min,z=c.max;d.set(F-4,I.x,z.y,L),d.set(F-3,z.x,z.y,L),d.set(F-2,z.x,I.y,L),d.set(F-1,I.x,I.y,L),gm(_,X=>{_.setVector(X,P)}),gm(m,X=>{m.setVector(X,R)}),c.expandByPoint(d.get(S+0,Yo)),c.expandByPoint(d.get(S+1,Yo)),c.expandByPoint(d.get(S+2,Yo)),c.expandByPoint(d.get(S+3,Yo))}if(t.setAttribute("position",new ze(d.array,3)),t.setAttribute("normal",new ze(m.array,3)),t.setAttribute("uv",new ze(_.array,2)),t.setIndex(new De(g,1)),this.boundingBox=c,this.boundingSphere=c.getBoundingSphere(new Oi),this._skirtDepth!=null){const L=e*e;this.addGroup(0,L,0),this.addGroup(L,4,1)}return{min:u,max:f}}}function yP(n,t){const e=n.dimensions(),i=e.x/e.y;let s=1,r=1;return i>1?s=Math.min(Math.round(i),t):i<1&&(r=Math.min(Math.round(1/i),t)),new Z(s,r)}class _m{constructor(t){this.extent=t.extent,this._rootTileMatrix=yP(t.extent,t.maxAspectRatio),this._segments=t.segments,this._skirtDepth=t.skirtDepth}set segments(t){this._segments=t}get rootTileMatrix(){return this._rootTileMatrix}build(t){return new xP({extent:t.extent,segments:this._segments,skirtDepth:this._skirtDepth})}}const vm={type:"change"},Uf={type:"start"},X0={type:"end"},qo=new Hs,xm=new Si,MP=Math.cos(70*qt.DEG2RAD),Ye=new C,yn=2*Math.PI,_e={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},mc=1e-6;class EP extends jA{constructor(t,e=null){super(t,e),this.state=_e.NONE,this.enabled=!0,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ri.ROTATE,MIDDLE:Ri.DOLLY,RIGHT:Ri.PAN},this.touches={ONE:ts.ROTATE,TWO:ts.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new Gs,this._lastTargetPosition=new C,this._quat=new Gs().setFromUnitVectors(t.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Vp,this._sphericalDelta=new Vp,this._scale=1,this._panOffset=new C,this._rotateStart=new Z,this._rotateEnd=new Z,this._rotateDelta=new Z,this._panStart=new Z,this._panEnd=new Z,this._panDelta=new Z,this._dollyStart=new Z,this._dollyEnd=new Z,this._dollyDelta=new Z,this._dollyDirection=new C,this._mouse=new Z,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=wP.bind(this),this._onPointerDown=SP.bind(this),this._onPointerUp=TP.bind(this),this._onContextMenu=IP.bind(this),this._onMouseWheel=RP.bind(this),this._onKeyDown=CP.bind(this),this._onTouchStart=PP.bind(this),this._onTouchMove=LP.bind(this),this._onMouseDown=bP.bind(this),this._onMouseMove=AP.bind(this),this._interceptControlDown=DP.bind(this),this._interceptControlUp=NP.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(vm),this.update(),this.state=_e.NONE}update(t=null){const e=this.object.position;Ye.copy(e).sub(this.target),Ye.applyQuaternion(this._quat),this._spherical.setFromVector3(Ye),this.autoRotate&&this.state===_e.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=yn:i>Math.PI&&(i-=yn),s<-Math.PI?s+=yn:s>Math.PI&&(s-=yn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ye.setFromSpherical(this._spherical),Ye.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ye),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Ye.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new C(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const h=new C(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(o),this.object.updateMatrixWorld(),a=Ye.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(qo.origin.copy(this.object.position),qo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(qo.direction))<MP?this.object.lookAt(this.target):(xm.setFromNormalAndCoplanarPoint(this.object.up,this.target),qo.intersectPlane(xm,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>mc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>mc||this._lastTargetPosition.distanceToSquared(this.target)>mc?(this.dispatchEvent(vm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?yn/60*this.autoRotateSpeed*t:yn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ye.setFromMatrixColumn(e,0),Ye.multiplyScalar(-t),this._panOffset.add(Ye)}_panUp(t,e){this.screenSpacePanning===!0?Ye.setFromMatrixColumn(e,1):(Ye.setFromMatrixColumn(e,0),Ye.crossVectors(this.object.up,Ye)),Ye.multiplyScalar(t),this._panOffset.add(Ye)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ye.copy(s).sub(this.target);let r=Ye.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(yn*this._rotateDelta.x/e.clientHeight),this._rotateUp(yn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(yn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-yn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(yn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-yn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(yn*this._rotateDelta.x/e.clientHeight),this._rotateUp(yn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Z,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function SP(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function wP(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function TP(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(X0),this.state=_e.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function bP(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ri.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=_e.DOLLY;break;case Ri.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=_e.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=_e.ROTATE}break;case Ri.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=_e.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=_e.PAN}break;default:this.state=_e.NONE}this.state!==_e.NONE&&this.dispatchEvent(Uf)}function AP(n){switch(this.state){case _e.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case _e.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case _e.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function RP(n){this.enabled===!1||this.enableZoom===!1||this.state!==_e.NONE||(n.preventDefault(),this.dispatchEvent(Uf),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(X0))}function CP(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function PP(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ts.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=_e.TOUCH_ROTATE;break;case ts.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=_e.TOUCH_PAN;break;default:this.state=_e.NONE}break;case 2:switch(this.touches.TWO){case ts.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=_e.TOUCH_DOLLY_PAN;break;case ts.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=_e.TOUCH_DOLLY_ROTATE;break;default:this.state=_e.NONE}break;default:this.state=_e.NONE}this.state!==_e.NONE&&this.dispatchEvent(Uf)}function LP(n){switch(this._trackPointer(n),this.state){case _e.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case _e.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case _e.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case _e.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=_e.NONE}}function IP(n){this.enabled!==!1&&n.preventDefault()}function DP(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function NP(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class OP extends EP{constructor(t,e){super(t,e),this.screenSpacePanning=!1,this.mouseButtons={LEFT:Ri.PAN,MIDDLE:Ri.DOLLY,RIGHT:Ri.ROTATE},this.touches={ONE:ts.PAN,TWO:ts.DOLLY_ROTATE}}}const Kt={c:null,u:[new C,new C,new C],e:[]},ae={c:null,u:[new C,new C,new C],e:[]},Ae=[[],[],[]],Ft=[[],[],[]],we=[],Ms=new C,Es=new C,Ss=new C,qe=new C,ym=new C,Mm=new C,Kn=new Gt,Em=new Be,jo=new Xt,Sm=new Xt,wm=new Hs;class Y0{constructor(t=new C,e=new C,i=new Gt){this.center=t,this.halfSize=e,this.rotation=i}set(t,e,i){return this.center=t,this.halfSize=e,this.rotation=i,this}copy(t){return this.center.copy(t.center),this.halfSize.copy(t.halfSize),this.rotation.copy(t.rotation),this}clone(){return new this.constructor().copy(this)}getSize(t){return t.copy(this.halfSize).multiplyScalar(2)}clampPoint(t,e){const i=this.halfSize;qe.subVectors(t,this.center),this.rotation.extractBasis(Ms,Es,Ss),e.copy(this.center);const s=qt.clamp(qe.dot(Ms),-i.x,i.x);e.add(Ms.multiplyScalar(s));const r=qt.clamp(qe.dot(Es),-i.y,i.y);e.add(Es.multiplyScalar(r));const a=qt.clamp(qe.dot(Ss),-i.z,i.z);return e.add(Ss.multiplyScalar(a)),e}containsPoint(t){return qe.subVectors(t,this.center),this.rotation.extractBasis(Ms,Es,Ss),Math.abs(qe.dot(Ms))<=this.halfSize.x&&Math.abs(qe.dot(Es))<=this.halfSize.y&&Math.abs(qe.dot(Ss))<=this.halfSize.z}intersectsBox3(t){return this.intersectsOBB(UP.fromBox3(t))}intersectsSphere(t){return this.clampPoint(t.center,Mm),Mm.distanceToSquared(t.center)<=t.radius*t.radius}intersectsOBB(t,e=Number.EPSILON){Kt.c=this.center,Kt.e[0]=this.halfSize.x,Kt.e[1]=this.halfSize.y,Kt.e[2]=this.halfSize.z,this.rotation.extractBasis(Kt.u[0],Kt.u[1],Kt.u[2]),ae.c=t.center,ae.e[0]=t.halfSize.x,ae.e[1]=t.halfSize.y,ae.e[2]=t.halfSize.z,t.rotation.extractBasis(ae.u[0],ae.u[1],ae.u[2]);for(let r=0;r<3;r++)for(let a=0;a<3;a++)Ae[r][a]=Kt.u[r].dot(ae.u[a]);qe.subVectors(ae.c,Kt.c),we[0]=qe.dot(Kt.u[0]),we[1]=qe.dot(Kt.u[1]),we[2]=qe.dot(Kt.u[2]);for(let r=0;r<3;r++)for(let a=0;a<3;a++)Ft[r][a]=Math.abs(Ae[r][a])+e;let i,s;for(let r=0;r<3;r++)if(i=Kt.e[r],s=ae.e[0]*Ft[r][0]+ae.e[1]*Ft[r][1]+ae.e[2]*Ft[r][2],Math.abs(we[r])>i+s)return!1;for(let r=0;r<3;r++)if(i=Kt.e[0]*Ft[0][r]+Kt.e[1]*Ft[1][r]+Kt.e[2]*Ft[2][r],s=ae.e[r],Math.abs(we[0]*Ae[0][r]+we[1]*Ae[1][r]+we[2]*Ae[2][r])>i+s)return!1;return i=Kt.e[1]*Ft[2][0]+Kt.e[2]*Ft[1][0],s=ae.e[1]*Ft[0][2]+ae.e[2]*Ft[0][1],!(Math.abs(we[2]*Ae[1][0]-we[1]*Ae[2][0])>i+s||(i=Kt.e[1]*Ft[2][1]+Kt.e[2]*Ft[1][1],s=ae.e[0]*Ft[0][2]+ae.e[2]*Ft[0][0],Math.abs(we[2]*Ae[1][1]-we[1]*Ae[2][1])>i+s)||(i=Kt.e[1]*Ft[2][2]+Kt.e[2]*Ft[1][2],s=ae.e[0]*Ft[0][1]+ae.e[1]*Ft[0][0],Math.abs(we[2]*Ae[1][2]-we[1]*Ae[2][2])>i+s)||(i=Kt.e[0]*Ft[2][0]+Kt.e[2]*Ft[0][0],s=ae.e[1]*Ft[1][2]+ae.e[2]*Ft[1][1],Math.abs(we[0]*Ae[2][0]-we[2]*Ae[0][0])>i+s)||(i=Kt.e[0]*Ft[2][1]+Kt.e[2]*Ft[0][1],s=ae.e[0]*Ft[1][2]+ae.e[2]*Ft[1][0],Math.abs(we[0]*Ae[2][1]-we[2]*Ae[0][1])>i+s)||(i=Kt.e[0]*Ft[2][2]+Kt.e[2]*Ft[0][2],s=ae.e[0]*Ft[1][1]+ae.e[1]*Ft[1][0],Math.abs(we[0]*Ae[2][2]-we[2]*Ae[0][2])>i+s)||(i=Kt.e[0]*Ft[1][0]+Kt.e[1]*Ft[0][0],s=ae.e[1]*Ft[2][2]+ae.e[2]*Ft[2][1],Math.abs(we[1]*Ae[0][0]-we[0]*Ae[1][0])>i+s)||(i=Kt.e[0]*Ft[1][1]+Kt.e[1]*Ft[0][1],s=ae.e[0]*Ft[2][2]+ae.e[2]*Ft[2][0],Math.abs(we[1]*Ae[0][1]-we[0]*Ae[1][1])>i+s)||(i=Kt.e[0]*Ft[1][2]+Kt.e[1]*Ft[0][2],s=ae.e[0]*Ft[2][1]+ae.e[1]*Ft[2][0],Math.abs(we[1]*Ae[0][2]-we[0]*Ae[1][2])>i+s))}intersectsPlane(t){this.rotation.extractBasis(Ms,Es,Ss);const e=this.halfSize.x*Math.abs(t.normal.dot(Ms))+this.halfSize.y*Math.abs(t.normal.dot(Es))+this.halfSize.z*Math.abs(t.normal.dot(Ss)),i=t.normal.dot(this.center)-t.constant;return Math.abs(i)<=e}intersectRay(t,e){return this.getSize(ym),Em.setFromCenterAndSize(qe.set(0,0,0),ym),jo.setFromMatrix3(this.rotation),jo.setPosition(this.center),Sm.copy(jo).invert(),wm.copy(t).applyMatrix4(Sm),wm.intersectBox(Em,e)?e.applyMatrix4(jo):null}intersectsRay(t){return this.intersectRay(t,qe)!==null}fromBox3(t){return t.getCenter(this.center),t.getSize(this.halfSize).multiplyScalar(.5),this.rotation.identity(),this}equals(t){return t.center.equals(this.center)&&t.halfSize.equals(this.halfSize)&&t.rotation.equals(this.rotation)}applyMatrix4(t){const e=t.elements;let i=qe.set(e[0],e[1],e[2]).length();const s=qe.set(e[4],e[5],e[6]).length(),r=qe.set(e[8],e[9],e[10]).length();t.determinant()<0&&(i=-i),Kn.setFromMatrix4(t);const o=1/i,l=1/s,h=1/r;return Kn.elements[0]*=o,Kn.elements[1]*=o,Kn.elements[2]*=o,Kn.elements[3]*=l,Kn.elements[4]*=l,Kn.elements[5]*=l,Kn.elements[6]*=h,Kn.elements[7]*=h,Kn.elements[8]*=h,this.rotation.multiply(Kn),this.halfSize.x*=i,this.halfSize.y*=s,this.halfSize.z*=r,qe.setFromMatrixPosition(t),this.center.add(qe),this}}const UP=new Y0,FP=new Be;class GP{_localBox=null;get localBox(){return this._localBox||(this._localBox=this.computeLocalBox()),this._localBox}getLocalSize(t){return this.localBox.getSize(t)}getLocalBoundingBox(t){const e=t??new Be;return e.copy(this.localBox),e}getWorldSpaceBoundingBox(t,e){const i=t??new Be;return i.copy(this.localBox),i.applyMatrix4(e),i}getOBB(t){return new Y0().fromBox3(this.getWorldSpaceBoundingBox(new Be,t))}getWorldSpaceBoundingSphere(t,e){return this.getWorldSpaceBoundingBox(FP,e).getBoundingSphere(t)}}const BP=new Z,zP=new Be;class kP extends GP{_range={min:-1,max:1};get extent(){return this._extent}constructor(t){super(),this._extent=t.extent,this._range=t.range}computeLocalBox(){const t=this._extent.dimensions(BP),e=t.x,i=t.y,s=new C(-e/2,-i/2,this._range.min),r=new C(+e/2,+i/2,this._range.max);return new Be(s,r)}getWorldSpaceCorners(t){const e=this.getWorldSpaceBoundingBox(zP,t),i=new C(e.min.x,e.min.y,e.min.z),s=new C(e.min.x,e.min.y,e.max.z),r=new C(e.max.x,e.min.y,e.min.z),a=new C(e.max.x,e.min.y,e.max.z),o=new C(e.max.x,e.max.y,e.min.z),l=new C(e.max.x,e.max.y,e.max.z),h=new C(e.min.x,e.max.y,e.min.z),u=new C(e.min.x,e.max.y,e.max.z);return[i,s,r,a,o,l,h,u]}setElevationRange(t){this._range=t,this.localBox.min.setZ(t.min),this.localBox.max.setZ(t.max)}}const VP=0,HP=1,WP=2,XP=3,YP=4,qP=5,jP=6,ZP=7;class wa{constructor(){this.tiles=new Map,this.tilesById=new Map}addTile(t){const{x:e,y:i,z:s}=t.coordinate,r=wa.getKey(e,i,s),a=new WeakRef(t);this.tiles.set(r,a),this.tilesById.set(t.id,a)}getTile(t){const e=this.tilesById.get(t);if(e){const i=e.deref();if(i)return i}}static getKey(t,e,i){return`${t},${e},${i}`}getNeighbours(t,e,i){const{x:s,y:r,z:a}=t.coordinate;return e[VP]=this.searchTileOrAncestor(s,r+1,a,i),e[HP]=this.searchTileOrAncestor(s+1,r+1,a,i),e[WP]=this.searchTileOrAncestor(s+1,r,a,i),e[XP]=this.searchTileOrAncestor(s+1,r-1,a,i),e[YP]=this.searchTileOrAncestor(s,r-1,a,i),e[qP]=this.searchTileOrAncestor(s-1,r-1,a,i),e[jP]=this.searchTileOrAncestor(s-1,r,a,i),e[ZP]=this.searchTileOrAncestor(s-1,r+1,a,i),e}static getParent(t,e,i){if(i===0)return null;const s=Math.floor(t/2),r=Math.floor(e/2);return{x:s,y:r,z:i-1}}update(){const t=[...this.tiles.keys()];for(const i of t){const s=this.tiles.get(i);s&&!s.deref()&&this.tiles.delete(i)}const e=[...this.tilesById.keys()];for(const i of e){const s=this.tilesById.get(i);s&&!s.deref()&&this.tilesById.delete(i)}}searchTileOrAncestor(t,e,i,s){const r=wa.getKey(t,e,i),a=this.tiles.get(r);if(a){const l=a.deref();if(l&&(typeof s!="function"||s(l)))return l}const o=wa.getParent(t,e,i);return o?this.searchTileOrAncestor(o.x,o.y,o.z,s):null}}const $P=2e4,cr={input:new Z,output:new Z,ij:new Z,topLeft:new Z,bottomRight:new Z};class Ff{constructor(t,e,i,s,r,a,o,l,h){const u=Ne.getChannelCount(r);if(t.length<e*i*u)throw new Error("buffer is too small");this.buffer=t,this.width=e,this.height=i,this.offsetScale=s,this.stride=u,this.format=r,this.type=a,this.precision=o??.1,this.offset=l??$P,this.verticalScaling=h??1}readRGBA(t,e){const{buffer:i,stride:s}=this,r=i[t*s+0],a=i[t*s+1],o=i[t*s+2],l=i[t*s+3];return!e&&l===0?null:(r+a*256+o*256*256)*this.precision-this.offset}readRG(t,e){const{buffer:i,stride:s}=this,r=i[t*s+1];return!e&&r===0?null:i[t*s+0]}clone(){return new Ff(this.buffer,this.width,this.height,this.offsetScale.clone(),this.format,this.type,this.precision,this.offset,this.verticalScaling)}getValue(t,e,i=!1){const s=this.getPixelCoordinates(t,e,cr.ij);return this.getValueRaw(s.x,s.y,i)}getMinMax(t){const e=t.left,i=t.top,s=t.bottom,r=t.right;let a=1/0,o=-1/0;const l=this.getPixelCoordinates(e,i,cr.topLeft),h=this.getPixelCoordinates(r,s,cr.bottomRight);for(let u=l.x;u<=h.x;u++)for(let f=h.y;f<=l.y;f++){const c=this.getValueRaw(u,f,!0);c!=null&&(a=Math.min(c,a),o=Math.max(c,o))}return isFinite(a)&&isFinite(o)?{min:a,max:o}:null}getPixelCoordinates(t,e,i){const{width:s,height:r,offsetScale:a}=this;cr.input.set(t,e);const o=a.transform(cr.input,cr.output),l=qt.clamp(o.x,0,1),h=qt.clamp(o.y,0,1),u=qt.clamp(Math.round(l*s-1),0,s),f=qt.clamp(Math.round(h*r-1),0,r);return i.set(u,f)}getValueRaw(t,e,i=!1){const s=t+e*this.width;let r=null;return this.format===Te&&this.type===ue?r=this.readRGBA(s,i):r=this.readRG(s,i),r!==null&&(r*=this.verticalScaling),r}}function Tm(n,t){return{payload:n,owner:t}}class KP extends an{type="OBBHelper";isOBBHelper=!0;constructor(t,e){super(),this.obb=t,this._color=new bt(e),this._helper=this.buildHelper(),this.setRotationFromMatrix(new Xt().setFromMatrix3(this.obb.rotation)),this.position.copy(this.obb.center),this.updateMatrix(),this.updateMatrixWorld(!0)}buildHelper(){const t=new qA(new Be().setFromCenterAndSize(new C(0,0,0),this.obb.getSize(new C)),this._color);return t.raycast=()=>{},this.raycast=()=>{},this.add(t),t}set color(t){const e=new bt(t);e.equals(this._color)||(this._color=e,this._helper.dispose(),this._helper.removeFromParent(),this._helper=this.buildHelper(),this.updateMatrixWorld(!0))}dispose(){this._helper.dispose()}}const bm=new Hs,Am=new Xt,JP=new tn(0,1,0,1),Rm=new Oi,QP=new Ef(1,32,16),tL=new eh({color:"#75eba8",depthTest:!1,depthWrite:!1,wireframe:!0,transparent:!0}),Cm=()=>{},eL=-99,nL=new fi(0,0,0,0),Pm=new Z,iL=new C,sL=new C;class Gl extends dn{isTileMesh=!0;type="TileMesh";isMemoryUsage=!0;_verticalScaling=1;_heightMap=null;_minmax={min:-1/0,max:1/0};_shouldUpdateHeightMap=!1;_helpers={root:null,color:"cyan"};_elevationLayerInfo=null;disposed=!1;isLeaf=!1;getMemoryUsage(t){this.material?.getMemoryUsage(t),this._heightMap&&this._heightMap.owner===this&&t.objects.set(`heightmap-${this._heightMap.owner.id}`,{cpuMemory:this._heightMap.payload.buffer.byteLength,gpuMemory:0}),this.geometry.getMemoryUsage(t)}get boundingBox(){return!this._enableTerrainDeformation||this._elevationLayerInfo?.layer.visible!==!0?this._volume.setElevationRange({min:0,max:0}):this._volume.setElevationRange(this.minmax),this._volume.localBox}get lod(){return this.coordinate.z}getOBB(){return this._volume.getOBB(this.matrixWorld)}getWorldSpaceBoundingBox(t){const e=this._volume.getLocalBoundingBox(t);return this.updateMatrixWorld(!0),e.applyMatrix4(this.matrixWorld),e}getWorldSpaceBoundingSphere(t){return this.updateWorldMatrix(!0,!1),this._volume.getWorldSpaceBoundingSphere(t,this.matrixWorld)}getBoundingBoxCorners(){return this.updateWorldMatrix(!0,!1),this._volume.getWorldSpaceCorners(this.matrixWorld)}constructor(t){super(t.geometryBuilder.build({extent:t.extent,tile:t.coord}),t.material),this._geometryBuilder=t.geometryBuilder,this._tileGeometry=this.geometry,this._segments=t.segments,this._skirtDepth=t.skirtDepth,this._renderer=t.renderer,this._onElevationChanged=t.onElevationChanged,this.matrixAutoUpdate=!1,this.coordinate=t.coord,this.extent=t.extent,this.textureSize=t.textureSize,this._enableTerrainDeformation=t.enableTerrainDeformation,this.customDepthMaterial=t.depthMaterial,this.customDistanceMaterial=t.distanceMaterial,this.geometry.boundingBox||this.geometry.computeBoundingBox(),this._volume=t.volume;const{z:e,x:i,y:s}=this.coordinate;this.name=`tile @ (z=${e}, x=${i}, y=${s})`,this.frustumCulled=!1,this.setDisplayed(!1),this.material.setUuid(this.id);const r=t.extent.dimensions();this._extentDimensions=r,this.setBBoxZ(-.5,.5),Nn.track(this,this.name),this.updateSkirtParameters()}onBeforeShadow(){this.customDepthMaterial.onBeforeRender(),this.customDistanceMaterial.onBeforeRender()}updateSkirtParameters(){const t=this._skirtDepth;t!=null?this.forEachMaterial(e=>{pe.setDefine(e,"ENABLE_SKIRTS",!0);const i=this.geometry.vertexCount,s=this.segments+1;e.uniforms.skirtVertexRange.value=new Z(s*s,i-1),e.uniforms.skirtElevation.value=t}):this.forEachMaterial(e=>{pe.setDefine(e,"ENABLE_SKIRTS",!1)})}setVerticalScaling(t){this._verticalScaling=t,this.material.setElevationScaling(t)}get absolutePosition(){return this.geometry.origin}get showColliderMesh(){return this._helpers.colliderMesh?this._helpers.colliderMesh.material.visible:!1}set showColliderMesh(t){t&&!this._helpers.colliderMesh&&(this._helpers.colliderMesh=new dn(this.geometry.raycastGeometry,tL),this._helpers.colliderMesh.matrixAutoUpdate=!1,this._helpers.colliderMesh.name="collider helper",this.createHelperRootIfNecessary(),this._helpers.root?.add(this._helpers.colliderMesh),this._helpers.colliderMesh.updateMatrix(),this._helpers.colliderMesh.updateMatrixWorld(!0)),!t&&this._helpers.colliderMesh&&(this._helpers.colliderMesh.removeFromParent(),this._helpers.colliderMesh=void 0),this._helpers.colliderMesh&&(this._helpers.colliderMesh.material.visible=t)}deleteBoundingBoxHelper(){this._helpers.boundingBox!=null&&(this._helpers.boundingBox.dispose(),this._helpers.boundingBox.removeFromParent(),this._helpers.boundingBox=void 0)}deleteBoundingSphereHelper(){this._helpers.boundingSphere!=null&&(this._helpers.boundingSphere.removeFromParent(),this._helpers.boundingSphere=void 0)}recreateBoundingBoxHelper(){this.deleteBoundingBoxHelper();const t=this._volume.getOBB(this.matrixWorld),e=new KP(t,this.helperColor);e.raycast=Cm,this.createHelperRootIfNecessary(),Nt(this._helpers.root).attach(e),e.updateMatrixWorld(!0),this._helpers.boundingBox=e}recreateBoundingSphereHelper(){this.deleteBoundingSphereHelper(),this._helpers.boundingSphere=new dn(QP,new eh({color:this.helperColor,wireframe:!0})),this._helpers.boundingSphere.rotateX(qt.degToRad(90)),this._helpers.boundingSphere.raycast=Cm;const t=this._volume.getWorldSpaceBoundingSphere(Rm,this.matrixWorld);this._helpers.boundingSphere.scale.set(t.radius,t.radius,t.radius),this._helpers.boundingSphere.position.copy(t.center),this.createHelperRootIfNecessary(),Nt(this._helpers.root).attach(this._helpers.boundingSphere),this._helpers.boundingSphere.updateMatrixWorld(!0)}get showBoundingBox(){return this._helpers.boundingBox?.visible??!1}set showBoundingBox(t){t&&this._helpers.boundingBox==null?this.recreateBoundingBoxHelper():!t&&this._helpers.boundingBox!=null&&this.deleteBoundingBoxHelper()}get showBoundingSphere(){return this._helpers.boundingSphere?.visible??!1}set showBoundingSphere(t){t&&this._helpers.boundingSphere==null?this.recreateBoundingSphereHelper():!t&&this._helpers.boundingSphere!=null&&this.deleteBoundingSphereHelper()}get helperColor(){return this._helpers.color}set helperColor(t){this._helpers.color=t,this.showBoundingBox&&this.recreateBoundingBoxHelper(),this.showBoundingSphere&&this.recreateBoundingSphereHelper()}get segments(){return this._segments}set segments(t){this._segments!==t&&(this._segments=t,this.forEachMaterial(e=>e.segments=t),this.createGeometry(),this._shouldUpdateHeightMap=!0)}createHelperRootIfNecessary(){this._helpers.root||(this._helpers.root=new Ps,this._helpers.root.name="helpers",this.add(this._helpers.root),this._helpers.root.updateMatrixWorld(!0))}createGeometry(){this.geometry.dispose(),this.geometry=this._geometryBuilder.build({extent:this.extent,tile:this.coordinate}),this._tileGeometry=this.geometry,this._helpers.colliderMesh&&(this._helpers.colliderMesh.geometry=this.geometry.raycastGeometry),this.updateSkirtParameters()}onLayerVisibilityChanged(t){$i(t)&&(this._shouldUpdateHeightMap=!0)}addChildTile(t){const e=sL.copy(t.absolutePosition);if(t.position.copy(e.sub(this.absolutePosition)),this.add(t),t.updateMatrix(),t.updateMatrixWorld(),this._heightMap){const i=this._heightMap.payload,s=i.clone(),r=t.extent.offsetToParent(this.extent);i.offsetScale.combine(r,s.offsetScale),t.inheritHeightMap(Tm(s,this))}}reorderLayers(){this.material.reorderLayers()}checkRayVolumeIntersection(t){const e=this.matrixWorld;return Am.copy(e).invert(),bm.copy(t.ray).applyMatrix4(Am),bm.intersectsBox(this.boundingBox)}raycast(t,e){this.material.visible&&this.checkRayVolumeIntersection(t)&&(this.updateHeightMapIfNecessary(),this.geometry=this._tileGeometry.raycastGeometry,super.raycast(t,e),this.geometry=this._tileGeometry)}updateHeightMapIfNecessary(){this._shouldUpdateHeightMap&&(this._shouldUpdateHeightMap=!1,this._elevationLayerInfo&&(this.createHeightMap(this._elevationLayerInfo.renderTarget,this._elevationLayerInfo.offsetScale),this._elevationLayerInfo.layer.visible&&this._enableTerrainDeformation?this.applyHeightMap():this.resetHeights()))}processNeighbour(t,e){const i=t.lod-this.lod,s=t.material.getElevationTexture(),r=t.material.getElevationOffsetScale(),a=this.extent.offsetToParent(t.extent),o=r.combine(a);this.forEachMaterial(l=>{l.updateNeighbour(e,i,o,s)})}processNeighbours(t){for(let e=0;e<t.length;e++){const i=t[e];i!=null&&i.material!=null&&i.material.visible?this.processNeighbour(i,e):this.forEachMaterial(s=>s.updateNeighbour(e,eL,nL,null))}}update(t){this._heightMap&&this._elevationLayerInfo&&this._enableTerrainDeformation!==t.terrain.enabled&&(this._enableTerrainDeformation=t.terrain.enabled,this._shouldUpdateHeightMap=!0),this.helperColor=t.helperColor??"cyan",this.showColliderMesh=t.showColliderMeshes??!1,this.showBoundingBox=t.showBoundingBoxes??!1,this.showBoundingSphere=t.showBoundingSpheres??!1}isVisible(){return this.visible}setDisplayed(t){const e=this.material.visible;this.material.visible=t&&this.material.update(),this._helpers.root&&this._helpers.boundingBox&&(this._helpers.boundingBox.color=t?this.helperColor:"gray"),e!==t&&this.dispatchEvent({type:"visibility-changed"})}set opacity(t){this.material.opacity=t}setVisibility(t){const e=this.visible;this.visible=t,e!==t&&this.dispatchEvent({type:"visibility-changed"})}isDisplayed(){return this.material.visible}changeState(t){this.material.changeState(t)}static applyChangeState(t,e){t.isTileMesh&&t.changeState(e)}pushRenderState(t){if(this.material.uniforms.renderingState.value===t)return()=>{};const e=this.material.uniforms.renderingState.value;return this.traverse(i=>Gl.applyChangeState(i,t)),()=>{this.traverse(i=>Gl.applyChangeState(i,e))}}canProcessColorLayer(){return this._elevationLayerInfo?this._elevationLayerInfo.layer.isLoaded(this.id):!0}removeElevationTexture(){this._elevationLayerInfo=null,this._shouldUpdateHeightMap=!0,this.material.removeElevationLayer()}setElevationTexture(t,e){this.disposed||(this._elevationLayerInfo={layer:t,offsetScale:e.pitch,renderTarget:e.renderTarget},this.material.setElevationTexture(t,e),this.setBBoxZ(e.min,e.max),this._shouldUpdateHeightMap=!0,this._onElevationChanged(this))}getScreenPixelSize(t,e){e=e??new Z;const i=this.getWorldSpaceBoundingSphere(Rm),s=i.center.distanceTo(t.camera.getWorldPosition(iL));let r,a;const o=t.camera;if(Br(o)){const f=qt.degToRad(o.fov);r=2*Math.tan(f/2)*s,a=r*o.aspect}else r=Math.abs(o.top-o.bottom),a=Math.abs(o.right-o.left);const l=i.radius*2,h=l/a,u=l/r;return e.setX(Math.ceil(h*t.width)),e.setY(Math.ceil(u*t.height)),e}createHeightMap(t,e){const i=Math.floor(t.height),s=Math.floor(t.width),r=.001,a=-this._minmax.min,o=S3({renderTarget:t,renderer:this._renderer,outputWidth:s,outputHeight:i,precision:r,offset:a}),l=new Ff(o,s,i,e,Te,ue,r,a,this._verticalScaling);this._heightMap=Tm(l,this)}inheritHeightMap(t){this._heightMap=t,this._shouldUpdateHeightMap=!0;const e=t.payload.getMinMax(JP);e!=null&&(this._minmax=e)}resetHeights(){this.geometry.resetHeights(),this.setBBoxZ(0,0),this._onElevationChanged(this)}applyHeightMap(){if(!this._heightMap)return;const{min:t,max:e}=this.geometry.applyHeightMap(this._heightMap.payload);t>this._minmax.min&&e<this._minmax.max&&this.setBBoxZ(t,e),this._helpers.colliderMesh&&(this._helpers.colliderMesh.geometry=this.geometry.raycastGeometry),this._onElevationChanged(this)}setBBoxZ(t,e){t==null||e==null||(this._minmax={min:t,max:e},this._skirtDepth!=null&&(this._minmax.min=Math.min(this._skirtDepth,this._minmax.min)),this.updateVolume(t,e))}traverseTiles(t){this.traverse(e=>{br(e)&&t(e)})}detachChildren(){const t=this.children.filter(e=>br(e));return t.forEach(e=>e.dispose()),this.remove(...t),t}updateVolume(t,e){this._volume.setElevationRange({min:t,max:e}),this.showBoundingBox&&this.recreateBoundingBoxHelper(),this.showBoundingSphere&&this.recreateBoundingSphereHelper()}get minmax(){const t=Math.abs(this._minmax.max-this._minmax.min),e=this._extentDimensions.width,i=this._extentDimensions.height;return t/Math.max(e,i)>3&&this.updateHeightMapIfNecessary(),this._minmax}getExtent(){return this.extent}getElevation(t){if(this.updateHeightMapIfNecessary(),this._heightMap){const e=this.extent.offsetInExtent(t.coordinates,Pm),i=this._heightMap.payload,s=i.getValue(e.x,e.y);if(s!=null){const r=this.extent.dimensions(Pm),a=r.x/i.width,o=r.y/i.height,l=Math.min(a,o);return{elevation:s,resolution:l}}}return null}findCommonAncestor(t){return t==null?null:t.lod===this.lod?t.id===this.id?t:t.lod!==0?this.parent.findCommonAncestor(t.parent):null:t.lod<this.lod?this.parent.findCommonAncestor(t):this.findCommonAncestor(t.parent)}isAncestorOf(t){return t.findCommonAncestor(this)===this}forEachMaterial(t){t(this.material),t(this.customDepthMaterial),t(this.customDistanceMaterial)}dispose(){this.disposed||(this.disposed=!0,this.dispatchEvent({type:"dispose"}),this.forEachMaterial(t=>t.dispose()),this.geometry.dispose())}}function br(n){return n.isTileMesh}const rL=(n,t)=>t.entity.terrain.enabled?t.layers.every(e=>!e.visible||fl(e)||$i(e)&&e.isLoaded(n.id)):!0,aL=(n,t)=>t.layers.every(e=>e.isLoaded(n.id)),oL="#0a3b59",lL=1.5,hL=new Xt().identity();function cL(n){return!n.disposed&&n.visible&&n.material.visible&&n.material.getElevationTexture()!=null}const Fu=10,gc=new C,Lm=new Be,uL=new Z,q0=new Z,Im=new Z,_c=[0,0],oa=[],fL=[null,null,null,null,null,null,null,null];function Dm(n){return n==null?{enabled:!1,thickness:1,interval:100,secondaryInterval:20,color:new bt(0,0,0),opacity:1}:typeof n=="boolean"?{enabled:!0,thickness:1,interval:100,secondaryInterval:20,color:new bt(0,0,0),opacity:1}:{enabled:n.enabled??!1,thickness:n.thickness??1,interval:n.interval??100,secondaryInterval:n.secondaryInterval??20,color:n.color??new bt(0,0,0),opacity:n.opacity??1}}function Nm(n,t){return n==null?{...t}:typeof n=="boolean"?{enabled:n,stitching:t.stitching,segments:t.segments,skirts:{enabled:!1,depth:0}}:{enabled:n.enabled??t.enabled,stitching:n.stitching??t.stitching,segments:n.segments??t.segments,skirts:n.skirts??t.skirts}}function Om(n){return n==null?{enabled:!1,color:fc,xStep:Ki,yStep:Ki,xOffset:0,yOffset:0,thickness:dl,opacity:1}:typeof n=="boolean"?{enabled:n,color:fc,xStep:Ki,yStep:Ki,xOffset:0,yOffset:0,thickness:dl,opacity:1}:{enabled:n.enabled??!0,color:n.color??fc,thickness:n.thickness??dl,xStep:n.xStep??Ki,yStep:n.yStep??Ki,xOffset:n.xOffset??0,yOffset:n.yOffset??0,opacity:n.opacity??1}}function dL(n){return n??D0()}function Um(n,t){return n==null?{...t}:typeof n=="boolean"?{...t,enabled:n}:{enabled:n.enabled??t.enabled,mode:n.mode??t.mode,elevationLayersOnly:n.elevationLayersOnly??t.elevationLayersOnly,hillshadeAzimuth:n.hillshadeAzimuth??t.hillshadeAzimuth,hillshadeZenith:n.hillshadeZenith??t.hillshadeZenith,hillshadeIntensity:n.hillshadeIntensity??t.hillshadeIntensity,zFactor:n.zFactor??t.zFactor}}function pL(n){const e=n.dimensions(q0),i=e.x/e.y;if(Math.abs(i-1)<.01)return new Z(512,512);if(i>1){const r=Math.min(i,Fu);return new Z(Math.round(512*r),512)}const s=Math.min(1/i,Fu);return new Z(512,Math.round(512*s))}function mL(n){let t=-1,e=ue;for(let i=0;i<n.length;i++){const r=n[i].getRenderTargetDataType(),a=Ne.getBytesPerChannel(r);a>t&&(t=a,e=r)}return e}let gL=class extends cR{isMap=!0;type="Map";hasLayers=!0;isPickableFeatures=!0;_objectOptions={castShadow:!0,receiveShadow:!0};_layers=[];_allTiles=new Set;_cachedTraversals=new globalThis.Map;_layerIds=new Set;_paintCompleteTimeout=null;_geometryBuilder=null;_hasElevationLayer=!1;_elevationScaling=1;_colorAtlasDataType=ue;_wireframe=!1;getMemoryUsage(t){this._layers.forEach(e=>e.getMemoryUsage(t)),this._allTiles.forEach(e=>e.getMemoryUsage(t))}constructor(t){if(super(t),this._rootTiles=[],this._layerIndices=new window.Map,!t.extent.isValid())throw new Error("Invalid extent: minX must be less than maxX and minY must be less than maxY.");this.extent=t.extent,this._onNodeComplete=this.onNodeComplete.bind(this),this._subdivisionStrategy=t.subdivisionStrategy??rL,this._subdivisionThreshold=t.subdivisionThreshold??lL,this.maxSubdivisionLevel=t.maxSubdivisionLevel??30,this._onTileElevationChanged=this.onTileElevationChanged.bind(this),this._onLayerVisibilityChanged=this.onLayerVisibilityChanged.bind(this),this._materialOptions={showColliderMeshes:!1,showBoundingSpheres:!1,helperColor:"cyan",showBoundingBoxes:!1,forceTextureAtlases:t.forceTextureAtlases??!1,lighting:Um(t.lighting,this.getDefaultLightingOptions()),contourLines:Dm(t.contourLines),discardNoData:t.discardNoData??!1,side:t.side??Pi,depthTest:t.depthTest??!0,showTileOutlines:t.showOutline??!1,terrain:Nm(t.terrain,this.getDefaultTerrainOptions()),colorimetry:dL(t.colorimetry),graticule:Om(t.graticule),colorMapAtlas:null,elevationRange:t.elevationRange??null,backgroundOpacity:t.backgroundOpacity??1,tileOutlineColor:new bt(t.outlineColor??"#ff0000"),backgroundColor:t.backgroundColor!==void 0?new bt(t.backgroundColor):new bt(oL)},this._tileIndex=new wa}get tileIndex(){return this._tileIndex}get rootTiles(){return this._rootTiles}get loading(){return this._layers.some(t=>t.loading)}onNodeComplete(){this._paintCompleteTimeout&&clearTimeout(this._paintCompleteTimeout),this._paintCompleteTimeout=setTimeout(this.evaluatePaintComplete.bind(this),500)}evaluatePaintComplete(){let t=!0;this.traverseTiles(e=>{e.visible&&e.material.visible&&(this._layers.filter(s=>s.visible).every(s=>s.isLoaded(e.id))||(t=!1))}),t&&this.dispatchEvent({type:"paint-complete"})}get progress(){return this._layers.length===0?1:this._layers.reduce((e,i)=>e+i.progress,0)/this._layers.length}get depthTest(){return this._materialOptions.depthTest}set depthTest(t){this._materialOptions.depthTest=t}get backgroundOpacity(){return this._materialOptions.backgroundOpacity}set backgroundOpacity(t){this._materialOptions.backgroundOpacity=t}get terrain(){return this._materialOptions.terrain}set terrain(t){this._materialOptions.terrain=Nm(t,this.getDefaultTerrainOptions())}get subdivisionThreshold(){return this._subdivisionThreshold}set subdivisionThreshold(t){this._subdivisionThreshold=t}get side(){return this._materialOptions.side}set side(t){this._materialOptions.side=t}get discardNoData(){return this._materialOptions.discardNoData}set discardNoData(t){this._materialOptions.discardNoData=t}get backgroundColor(){return this._materialOptions.backgroundColor}set backgroundColor(t){this._materialOptions.backgroundColor=new bt(t)}get graticule(){return this._materialOptions.graticule}set graticule(t){this._materialOptions.graticule=Om(t)}updateObject(t){const e=this._objectOptions;t.castShadow=e.castShadow,t.receiveShadow=e.receiveShadow}updateObjectOption(t,e){this._objectOptions[t]!==e&&(this._objectOptions[t]=e,this.traverse(i=>this.updateObject(i)),this.notifyChange(this))}get castShadow(){return this._objectOptions.castShadow}set castShadow(t){this.updateObjectOption("castShadow",t)}get receiveShadow(){return this._objectOptions.receiveShadow}set receiveShadow(t){this.updateObjectOption("receiveShadow",t)}get lighting(){return this._materialOptions.lighting}set lighting(t){this._materialOptions.lighting=Um(t,this.getDefaultLightingOptions())}get colorimetry(){return this._materialOptions.colorimetry}set colorimetry(t){this._materialOptions.colorimetry=t}get elevationRange(){return this._materialOptions.elevationRange}set elevationRange(t){this._materialOptions.elevationRange=t}get showTileOutlines(){return this._materialOptions.showTileOutlines}set showTileOutlines(t){this._materialOptions.showTileOutlines=t}get tileOutlineColor(){return this._materialOptions.tileOutlineColor}set tileOutlineColor(t){this._materialOptions.tileOutlineColor=new bt(t)}get contourLines(){return this._materialOptions.contourLines}set contourLines(t){this._materialOptions.contourLines=Dm(t)}get showBoundingBoxes(){return this._materialOptions.showBoundingBoxes}set showBoundingBoxes(t){this._materialOptions.showBoundingBoxes!==t&&(this._materialOptions.showBoundingBoxes=t,this.notifyChange(this))}get showBoundingSpheres(){return this._materialOptions.showBoundingSpheres}set showBoundingSpheres(t){this._materialOptions.showBoundingSpheres!==t&&(this._materialOptions.showBoundingSpheres=t,this.notifyChange(this))}get helperColor(){return this._materialOptions.helperColor}set helperColor(t){this._materialOptions.helperColor!==t&&(this._materialOptions.helperColor=t,this.notifyChange(this))}get showColliderMeshes(){return this._materialOptions.showColliderMeshes}set showColliderMeshes(t){this._materialOptions.showColliderMeshes!==t&&(this._materialOptions.showColliderMeshes=t,this.notifyChange(this))}get segments(){return this._materialOptions.terrain.segments}set segments(t){if(this._materialOptions.terrain.segments!==t)if(qt.isPowerOfTwo(t)&&t>=1&&t<=128)this._materialOptions.terrain.segments=t,(this._geometryBuilder instanceof _m||this._geometryBuilder instanceof _P)&&(this._geometryBuilder.segments=t),this.updateGeometries(),this.notifyChange(this);else throw new Error("invalid segments. Must be a power of two between 1 and 128 included")}get wireframe(){return this._wireframe}set wireframe(t){t!==this._wireframe&&(this._wireframe=t,this.traverseTiles(e=>{e.material.wireframe=t}))}subdivideNode(t,e){if(!e.children.some(i=>br(i))){const i=e.extent.split(2,2);let s=0;const{x:r,y:a,z:o}=e.coordinate;for(const l of i){let h;s===0?h=this.requestNewTile(l,e,o+1,2*r+0,2*a+0):s===1?h=this.requestNewTile(l,e,o+1,2*r+0,2*a+1):s===2?h=this.requestNewTile(l,e,o+1,2*r+1,2*a+0):h=this.requestNewTile(l,e,o+1,2*r+1,2*a+1);for(const u of this.getElevationLayers())u.update(t,h);for(const u of this.getColorLayers())u.update(t,h);h.update(this._materialOptions),h.updateMatrixWorld(!0),s++}this.notifyChange(e)}}updateGeometries(){this.traverseTiles(t=>{t.segments=this.segments})}getRootTileMatrix(){return Nt(this._geometryBuilder).rootTileMatrix}preprocess(){if(!this.extent.crs.equals(this.getComposerProjection()))throw new Error(`The extent of this map is not in the correct CRS. Expected: ${this.getComposerProjection().id}, got: ${this.extent.crs.id}`);this._geometryBuilder=this.getGeometryBuilder();const t=this.getRootTileMatrix(),e=this.extent.split(t.x,t.y);let i=0;for(const s of e)t.x>t.y?this._rootTiles.push(this.requestNewTile(s,void 0,0,i,0)):t.y>t.x?this._rootTiles.push(this.requestNewTile(s,void 0,0,0,i)):this._rootTiles.push(this.requestNewTile(s,void 0,0,0,0)),i++;for(const s of this._rootTiles)this.object3d.add(s),s.updateMatrixWorld(!1);return Promise.resolve()}getTextureSize(t){return pL(t)}getTileDimensions(t){return t.dimensions()}get isEllipsoidal(){return!1}getComposerProjection(){return this.instance.coordinateSystem}getGeometryBuilder(){return new _m({extent:this.extent,maxAspectRatio:Fu,segments:this.segments,skirtDepth:this.terrain.skirts.enabled?this.terrain.skirts.depth:void 0})}requestNewTile(t,e,i,s=0,r=0){const a=this.getTextureSize(t),o={renderer:this.instance.renderer,options:this._materialOptions,textureSize:a,extent:t,tileDimensions:this.getTileDimensions(t),getIndexFn:this.getIndex.bind(this),textureDataType:this._colorAtlasDataType,hasElevationLayer:this._hasElevationLayer,maxTextureImageUnits:to.getMaxTextureUnitsCount(),isGlobe:this.isEllipsoidal},l=new V0(o),h=new pm({...o,source:l,shadowMode:"depth"}),u=new pm({...o,source:l,shadowMode:"distance"}),f=new Gl({renderer:this.instance.renderer,material:l,depthMaterial:h,distanceMaterial:u,extent:t,textureSize:a,segments:this.segments,coord:{z:i,x:s,y:r},skirtDepth:this.terrain.skirts.enabled?this.terrain.skirts.depth:void 0,enableTerrainDeformation:this._materialOptions.terrain.enabled??!0,onElevationChanged:this._onTileElevationChanged,geometryBuilder:Nt(this._geometryBuilder),volume:this.createTileVolume(t)});f.setVerticalScaling(this._elevationScaling),this._allTiles.add(f),this._tileIndex.addTile(f),this._cachedTraversals.clear(),f.material.opacity=this.opacity;const c=f.absolutePosition;if(f.position.copy(c),f.opacity=this.opacity,f.setVisibility(!1),f.updateMatrix(),f.material.wireframe=this.wireframe||!1,e)f.setBBoxZ(e.minmax.min,e.minmax.max);else{const{min:d,max:m}=this.getElevationMinMax();f.setBBoxZ(d,m)}return this.updateObject(f),this.onObjectCreated(f),e&&e.addChildTile(f),f}createTileVolume(t){return new kP({extent:t,range:{min:-1,max:1}})}onTileElevationChanged(t){this.dispatchEvent({type:"elevation-changed",extent:t.extent})}setRenderState(t){const e=this._rootTiles.map(i=>i.pushRenderState(t));return()=>{e.forEach(i=>i())}}pick(t,e){return e?.gpuPicking===!0?U3(this.instance,t,this,e):this.pickUsingRaycast(t,e)}raycastAtCoordinate(t,e,i){const s=this.instance.canvasToNormalizedCoords(t,uL),r=new h0;r.setFromCamera(s,this.instance.view.camera),oa.length=0,this.raycast(r,oa);const a=i?.filter??(()=>!0);if(oa.length>0){oa.sort((c,d)=>c.distance-d.distance);const o=oa[0],{x:l,y:h,z:u}=o.point,f={isMapPickResult:!0,coord:new rn(this.instance.coordinateSystem,l,h,u),entity:this,...o};a(f)&&e.push(f)}}getDefaultTerrainOptions(){return{enabled:k3,stitching:V3,segments:H3,skirts:{enabled:!1,depth:0}}}getDefaultLightingOptions(){return{enabled:!1,mode:Nf.Hillshade,elevationLayersOnly:!1,hillshadeIntensity:z0,zFactor:k0,hillshadeAzimuth:Ou,hillshadeZenith:Uu}}pickUsingRaycast(t,e){const i=[],s=e?.radius;if(s==null||s===0)this.raycastAtCoordinate(t,i,e);else{const r=t.x,a=t.y;wf(s,(o,l)=>(Im.set(r+o,a+l),this.raycastAtCoordinate(Im,i,e),null))}return i}raycast(t,e){this.traverseTiles(i=>{!i.disposed&&i.visible&&i.material.visible&&i.raycast(t,e)}),e.sort((i,s)=>i.distance-s.distance)}pickFeaturesFrom(t,e){const i=[];for(const s of this._layers)if(Lu(s)){const r=s.pickFeaturesFrom(t,e);i.push(...r)}return t.features=i,i}preUpdate(t,e){if(super.preUpdate(t,e),this._materialOptions.colorMapAtlas?.update(),this._tileIndex.update(),e.has(void 0)||e.size===0)return this._rootTiles;let i=null;for(const s of e.values()){if(s.isCamera)return this._rootTiles;if(br(s)){if(!i)i=s;else if(i=s.findCommonAncestor(i),!i)return this._rootTiles;i.material==null&&(i=null)}}return i?[i]:this._rootTiles}sortColorLayers(t){if(t==null)throw new Error("missing comparator function");this._layers.sort((e,i)=>fl(e)&&fl(i)?t(e,i):$i(e)&&$i(i)?0:$i(e)?-1:1),this.reorderLayers()}moveLayerUp(t){const e=this._layers.indexOf(t);if(e===-1)throw new Error("The layer is not present in the map.");if(e<this._layers.length-1){const i=this._layers[e+1];this._layers[e+1]=t,this._layers[e]=i,this.reorderLayers()}}onRenderingContextRestored(){this._materialOptions.colorMapAtlas?.forceUpdate(),this.forEachLayer(t=>t.onRenderingContextRestored()),this.notifyChange(this)}insertLayerAfter(t,e){const i=this._layers.indexOf(t);let s=e==null?-1:this._layers.indexOf(e);if(i===-1)throw new Error("The layer is not present in the map.");s===-1&&(s=0),this._layers.splice(i,1),s=e==null?-1:this._layers.indexOf(e),this._layers.splice(s+1,0,t),this.reorderLayers()}moveLayerDown(t){const e=this._layers.indexOf(t);if(e===-1)throw new Error("The layer is not present in the map.");if(e>0){const i=this._layers[e-1];this._layers[e-1]=t,this._layers[e]=i,this.reorderLayers()}}getIndex(t){const e=this._layerIndices.get(t.id);return e??-1}reorderLayers(){const t=this._layers;for(let e=0;e<t.length;e++){const i=t[e];this._layerIndices.set(i.id,e)}this.traverseTiles(e=>e.reorderLayers()),this.dispatchEvent({type:"layer-order-changed"}),this.notifyChange(this)}contains(t){return t.isLayer?this._layers.includes(t):!1}update(t,e){if(!e.parent){this.disposeTile(e);return}if(this.frozen||(e.visible=this.testVisibility(e,t)),e.visible){let i=!1;return this.frozen?i=!0:this.shouldSubdivide(t,e)&&this._subdivisionStrategy(e,{entity:this,layers:this._layers})?(this.subdivideNode(t,e),e.setDisplayed(!1),i=!0):e.setDisplayed(!0),e.material.visible&&(e.material.update(this._materialOptions),!i)?(this._cachedTraversals.clear(),e.detachChildren()):i?e.children.filter(s=>br(s)):void 0}return e.setDisplayed(!1),this._cachedTraversals.clear(),e.detachChildren()}testVisibility(t,e){t.update(this._materialOptions);const i=t.getOBB();return e.view.isOBBVisible(i)}postUpdate(t){this.traverseTiles(i=>{i.visible&&i.material.visible&&(this._layers.forEach(s=>s.update(t,i)),this.updateMinMaxDistance(t,i))}),this._layers.forEach(i=>i.postUpdate()),this._materialOptions.terrain.stitching&&this._materialOptions.terrain.enabled&&this.traverseTiles(i=>{if(i.material.visible){const s=this._tileIndex.getNeighbours(i,fL,cL);i.processNeighbours(s)}})}registerColorLayer(){this._colorAtlasDataType=mL(this.getColorLayers())}updateGlobalMinMax(){const t=this.getElevationMinMax();this.traverseTiles(e=>{e.setBBoxZ(t.min,t.max)})}registerColorMap(t){this._materialOptions.colorMapAtlas||(this._materialOptions.colorMapAtlas=new W3(this.instance.renderer),this.traverseTiles(e=>{e.material.setColorMapAtlas(this._materialOptions.colorMapAtlas)})),this._materialOptions.colorMapAtlas.add(t)}async addLayer(t){if(!L3(t))throw new Error("layer is not an instance of Layer");if(this._layerIds.has(t.id))throw new Error(`layer ${t.name??t.id} is already present in this map`);if(this._layerIds.add(t.id),this._layers.push(t),await t.initialize({instance:this.instance,composerProjection:this.getComposerProjection()}),t.addEventListener("node-complete",this._onNodeComplete),t.addEventListener("visible-property-changed",this._onLayerVisibilityChanged),fl(t))this.registerColorLayer();else if($i(t)){this._hasElevationLayer=!0,this._elevationScaling=t.source.getCrs().metersPerVerticalUnit/this.instance.coordinateSystem.metersPerVerticalUnit;for(const e of this._allTiles)e.setVerticalScaling(this._elevationScaling);this.updateGlobalMinMax()}return t.colorMap&&this.registerColorMap(t.colorMap),this.reorderLayers(),this.notifyChange(this),this.dispatchEvent({type:"layer-added",layer:t}),t}onLayerVisibilityChanged(t){$i(t.target)&&(this.dispatchEvent({type:"elevation-changed",extent:this.extent}),this.updateGlobalMinMax()),this.traverseTiles(e=>{e.onLayerVisibilityChanged(t.target)})}removeLayer(t,e={}){return t==null?!1:this._layerIds.has(t.id)?(this._layerIds.delete(t.id),this._layers.splice(this._layers.indexOf(t),1),t.colorMap&&this._materialOptions.colorMapAtlas?.remove(t.colorMap),$i(t)&&(this._hasElevationLayer=!1),this.traverseTiles(i=>{t.unregisterNode(i)}),t.removeEventListener("visible-property-changed",this._onLayerVisibilityChanged),t.removeEventListener("node-complete",this._onNodeComplete),t.postUpdate(),this.reorderLayers(),this.dispatchEvent({type:"layer-removed",layer:t}),this.notifyChange(this),e.disposeLayer===!0&&t.dispose(),!0):!1}get layerCount(){return this._layers.length}forEachLayer(t){this._layers.forEach(e=>t(e))}getLayers(t){const e=[];for(const i of this._layers)(!t||t(i))&&e.push(i);return e}getColorLayers(){return this.getLayers(t=>t.isColorLayer)}getElevationLayers(){return this.getLayers(t=>t.isElevationLayer)}dispose(t={disposeLayers:!1}){this.traverseTiles(e=>this.disposeTile(e)),t.disposeLayers===!0&&this.getLayers().forEach(e=>e.dispose()),this._materialOptions.colorMapAtlas?.dispose()}disposeTile(t){t.traverseTiles(e=>{e.dispose(),this._allTiles.delete(e)})}getElevationMinMaxForVisibleTiles(){if(!this._hasElevationLayer)return null;let t=1/0,e=-1/0;return this.traverseTiles(i=>{i.visible&&i.material.visible&&(t=Math.min(t,i.minmax.min),e=Math.max(e,i.minmax.max))}),isFinite(t)&&isFinite(e)?{min:t,max:e}:null}getElevationMinMax(){const t=this.getElevationLayers();if(t.length>0){let e=null,i=null;for(const s of t){const r=s.minmax;s.visible&&r!=null&&(e==null||i==null?(e=e??r.min,i=i??r.max):(e=Math.min(e,r.min),i=Math.max(i,r.max)))}if(e!=null&&i!=null)return{min:e,max:i}}return{min:0,max:0}}getElevation(t,e={samples:[],coordinates:t.coordinates}){e.coordinates=t.coordinates;const i=t.coordinates.as(this.extent.crs);return!this.extent.isPointInside(i)||!this._hasElevationLayer||!this.getElevationLayers()[0].visible||this.traverseTiles(r=>{if(r.extent.isPointInside(i)){const a=r.getElevation(t);a&&e.samples.push({...a,source:this})}}),e}traverseTiles(t,e=void 0){const i=e??this.object3d;let s=this._cachedTraversals.get(i);if(s==null)s=[],i.traverse(r=>{br(r)&&(t(r),s?.push(r))}),this._cachedTraversals.set(i,s);else for(let r=0;r<s.length;r++)t(s[r])}testTileSSE(t,e){if(this.maxSubdivisionLevel<=t.lod)return!1;if(!e)return!0;_c[0]=e.lengths.x*e.ratio,_c[1]=e.lengths.y*e.ratio;const{width:i,height:s}=t.textureSize,r=Math.max(i,s);return _c.some(a=>a>=r*this.subdivisionThreshold)}shouldSubdivide(t,e){const i=e.getWorldSpaceBoundingBox(Lm),s=i.getSize(gc),r=Math.max(s.x,s.y),a=fm.computeFromBox3(t.view,i,hL,r,fm.Mode.MODE_2D);return this.testTileSSE(e,a)}updateMinMaxDistance(t,e){const i=e.getWorldSpaceBoundingBox(Lm),s=t.distance.plane.distanceToPoint(i.getCenter(gc)),r=i.getSize(gc).length()*.5,a=1e9;this._distance.min=qt.clamp(Math.min(this._distance.min,s-r),.5,a),this._distance.max=qt.clamp(Math.max(this._distance.max,s+r),this._distance.min,a)}getDefaultPointOfView(t){const e=this.extent.centerAsVector3(),i=this.getElevationMinMax();e.setZ(qt.lerp(i.min,i.max,.5));const s=this.extent.dimensions(q0),a=1.2*(Math.max(s.width,s.height)/2);let o=1;const l=t.camera;let h;if(Ea(l))o=A0(l,a),h=i.max+a;else if(Br(l))h=b0(l,a)+i.max;else return null;const u=new C(e.x,e.y-.01,h);return this.object3d.updateMatrixWorld(!0),u.applyMatrix4(this.object3d.matrixWorld),e.applyMatrix4(this.object3d.matrixWorld),Object.freeze({origin:u,target:e,orthographicZoom:o})}};class _L{isImageFormat=!0;constructor(t,e){this.isImageFormat=!0,this.type="ImageFormat",this.flipY=t,this.dataType=e}}function vL(n){const t=new OffscreenCanvas(n.width,n.height);t.width=n.width,t.height=n.height;const e=t.getContext("2d",{willReadFrequently:!0});if(!e)throw console.error("could not acquire 2D context on canvas"),new Error("could not acquire 2D context on canvas");return e.drawImage(n,0,0),e.getImageData(0,0,n.width,n.height).data}async function j0(n,t){const e=await createImageBitmap(n),i=vL(e);return{...xL(i,t),width:e.width,height:e.height}}function xL(n,t){const e=n.length%3===0?3:4,i=n.length/e,s=new Float32Array(i*2);let r=0,a=1/0,o=-1/0;for(let l=0;l<n.length;l+=e){const h=n[l+0],u=n[l+1],f=n[l+2],c=-1e4+(h*256*256+u*256+f)*.1;s[r*2+0]=c,t!=null&&t===c?s[r*2+1]=0:(s[r*2+1]=1,a=Math.min(a,c),o=Math.max(o,c)),r+=1}return{data:s.buffer,min:a,max:o}}onmessage=async function(n){const t=n.data;try{if(t.type==="DecodeMapboxTerrainMessage"){const e=new Blob([t.payload.buffer],{type:"image/png"}),i=await j0(e,t.payload.noData),s={requestId:t.id,payload:i};this.postMessage(s,{transfer:[s.payload.data]})}}catch(e){this.postMessage(g0(t.id,e))}};let vc=null;function yL(){return new Worker(URL.createObjectURL(new Blob([atob("InVzZSBzdHJpY3QiOygoKT0+e2Z1bmN0aW9uIHUoZSx0KXtyZXR1cm57cmVxdWVzdElkOmUsZXJyb3I6dCBpbnN0YW5jZW9mIEVycm9yP3QubWVzc2FnZToidW5rbm93biBlcnJvciJ9fWZ1bmN0aW9uIGYoZSl7bGV0IHQ9bmV3IE9mZnNjcmVlbkNhbnZhcyhlLndpZHRoLGUuaGVpZ2h0KTt0LndpZHRoPWUud2lkdGgsdC5oZWlnaHQ9ZS5oZWlnaHQ7bGV0IHI9dC5nZXRDb250ZXh0KCIyZCIse3dpbGxSZWFkRnJlcXVlbnRseTohMH0pO2lmKCFyKXRocm93IGNvbnNvbGUuZXJyb3IoImNvdWxkIG5vdCBhY3F1aXJlIDJEIGNvbnRleHQgb24gY2FudmFzIiksbmV3IEVycm9yKCJjb3VsZCBub3QgYWNxdWlyZSAyRCBjb250ZXh0IG9uIGNhbnZhcyIpO3JldHVybiByLmRyYXdJbWFnZShlLDAsMCksci5nZXRJbWFnZURhdGEoMCwwLGUud2lkdGgsZS5oZWlnaHQpLmRhdGF9YXN5bmMgZnVuY3Rpb24gbShlLHQpe2xldCByPWF3YWl0IGNyZWF0ZUltYWdlQml0bWFwKGUpLG89ZihyKTtyZXR1cm57Li4uZyhvLHQpLHdpZHRoOnIud2lkdGgsaGVpZ2h0OnIuaGVpZ2h0fX1mdW5jdGlvbiBnKGUsdCl7bGV0IHI9ZS5sZW5ndGglMz09PTA/Mzo0LG89ZS5sZW5ndGgvcixzPW5ldyBGbG9hdDMyQXJyYXkobyoyKSxpPTAsYz0xLzAsZD0tMS8wO2ZvcihsZXQgbj0wO248ZS5sZW5ndGg7bis9cil7bGV0IGg9ZVtuKzBdLGw9ZVtuKzFdLHA9ZVtuKzJdLGE9LTFlNCsoaCoyNTYqMjU2K2wqMjU2K3ApKi4xO3NbaSoyKzBdPWEsdCE9bnVsbCYmdD09PWE/c1tpKjIrMV09MDooc1tpKjIrMV09MSxjPU1hdGgubWluKGMsYSksZD1NYXRoLm1heChkLGEpKSxpKz0xfXJldHVybntkYXRhOnMuYnVmZmVyLG1pbjpjLG1heDpkfX1vbm1lc3NhZ2U9YXN5bmMgZnVuY3Rpb24oZSl7bGV0IHQ9ZS5kYXRhO3RyeXtpZih0LnR5cGU9PT0iRGVjb2RlTWFwYm94VGVycmFpbk1lc3NhZ2UiKXtsZXQgcj1uZXcgQmxvYihbdC5wYXlsb2FkLmJ1ZmZlcl0se3R5cGU6ImltYWdlL3BuZyJ9KSxvPWF3YWl0IG0ocix0LnBheWxvYWQubm9EYXRhKSxzPXtyZXF1ZXN0SWQ6dC5pZCxwYXlsb2FkOm99O3RoaXMucG9zdE1lc3NhZ2Uocyx7dHJhbnNmZXI6W3MucGF5bG9hZC5kYXRhXX0pfX1jYXRjaChyKXt0aGlzLnBvc3RNZXNzYWdlKHUodC5pZCxyKSl9fTt9KSgpOwo=")],{type:"text/javascript"})),{type:"module",name:"mapbox"})}class ML extends _L{isMapboxTerrainFormat=!0;type="MapboxTerrainFormat";_enableWorkers=!0;constructor(t){super(!0,Ie),this._enableWorkers=t?.enableWorkers??!0,this._workerConcurrency=t?.workerConcurrency??void 0}async decode(t,e){let i;this._enableWorkers?i=await this.getHeightValuesUsingWorker(t,e?.noDataValue,this._workerConcurrency):i=await j0(t,e?.noDataValue);const s=new ah(new Float32Array(i.data),i.width,i.height,Wr,Ie);return s.needsUpdate=!0,s.generateMipmaps=!1,s.magFilter=Fe,s.minFilter=Fe,{texture:s,min:i.min,max:i.max}}async getHeightValuesUsingWorker(t,e,i){vc==null&&(vc=new lh({createWorker:yL,concurrency:i}));const s=await t.arrayBuffer();return await vc.queue("DecodeMapboxTerrainMessage",{buffer:s,noData:e},[s])}}const EL={PROPERTYCHANGE:"propertychange"},zr={CHANGE:"change",ERROR:"error",LOAD:"load"};class SL{constructor(){this.disposed=!1}dispose(){this.disposed||(this.disposed=!0,this.disposeInternal())}disposeInternal(){}}function wL(n,t){return n>t?1:n<t?-1:0}function TL(n,t,e){if(n[0]<=t)return 0;const i=n.length;if(t<=n[i-1])return i-1;if(typeof e=="function"){for(let s=1;s<i;++s){const r=n[s];if(r===t)return s;if(r<t)return e(t,n[s-1],r)>0?s-1:s}return i-1}if(e>0){for(let s=1;s<i;++s)if(n[s]<t)return s-1;return i-1}if(e<0){for(let s=1;s<i;++s)if(n[s]<=t)return s;return i-1}for(let s=1;s<i;++s){if(n[s]==t)return s;if(n[s]<t)return n[s-1]-t<t-n[s]?s-1:s}return i-1}function bL(n,t,e){const i=t||wL;return n.every(function(s,r){if(r===0)return!0;const a=i(n[r-1],s);return!(a>0||a===0)})}function Fm(){}class Gf{constructor(t){this.propagationStopped,this.defaultPrevented,this.type=t,this.target=null}preventDefault(){this.defaultPrevented=!0}stopPropagation(){this.propagationStopped=!0}}class Z0 extends SL{constructor(t){super(),this.eventTarget_=t,this.pendingRemovals_=null,this.dispatching_=null,this.listeners_=null}addEventListener(t,e){if(!t||!e)return;const i=this.listeners_||(this.listeners_={}),s=i[t]||(i[t]=[]);s.includes(e)||s.push(e)}dispatchEvent(t){const e=typeof t=="string",i=e?t:t.type,s=this.listeners_&&this.listeners_[i];if(!s)return;const r=e?new Gf(t):t;r.target||(r.target=this.eventTarget_||this);const a=this.dispatching_||(this.dispatching_={}),o=this.pendingRemovals_||(this.pendingRemovals_={});i in a||(a[i]=0,o[i]=0),++a[i];let l;for(let h=0,u=s.length;h<u;++h)if("handleEvent"in s[h]?l=s[h].handleEvent(r):l=s[h].call(this,r),l===!1||r.propagationStopped){l=!1;break}if(--a[i]===0){let h=o[i];for(delete o[i];h--;)this.removeEventListener(i,Fm);delete a[i]}return l}disposeInternal(){this.listeners_&&qu(this.listeners_)}getListeners(t){return this.listeners_&&this.listeners_[t]||void 0}hasListener(t){return this.listeners_?t?t in this.listeners_:Object.keys(this.listeners_).length>0:!1}removeEventListener(t,e){if(!this.listeners_)return;const i=this.listeners_[t];if(!i)return;const s=i.indexOf(e);s!==-1&&(this.pendingRemovals_&&t in this.pendingRemovals_?(i[s]=Fm,++this.pendingRemovals_[t]):(i.splice(s,1),i.length===0&&delete this.listeners_[t]))}}function Bl(n,t,e,i,s){if(s){const a=e;e=function(o){return n.removeEventListener(t,e),a.call(this,o)}}const r={target:n,type:t,listener:e};return n.addEventListener(t,e),r}function zl(n,t,e,i){return Bl(n,t,e,i,!0)}function Ga(n){n&&n.target&&(n.target.removeEventListener(n.type,n.listener),qu(n))}class ch extends Z0{constructor(){super(),this.on=this.onInternal,this.once=this.onceInternal,this.un=this.unInternal,this.revision_=0}changed(){++this.revision_,this.dispatchEvent(zr.CHANGE)}getRevision(){return this.revision_}onInternal(t,e){if(Array.isArray(t)){const i=t.length,s=new Array(i);for(let r=0;r<i;++r)s[r]=Bl(this,t[r],e);return s}return Bl(this,t,e)}onceInternal(t,e){let i;if(Array.isArray(t)){const s=t.length;i=new Array(s);for(let r=0;r<s;++r)i[r]=zl(this,t[r],e)}else i=zl(this,t,e);return e.ol_key=i,i}unInternal(t,e){const i=e.ol_key;if(i)AL(i);else if(Array.isArray(t))for(let s=0,r=t.length;s<r;++s)this.removeEventListener(t[s],e);else this.removeEventListener(t,e)}}ch.prototype.on;ch.prototype.once;ch.prototype.un;function AL(n){if(Array.isArray(n))for(let t=0,e=n.length;t<e;++t)Ga(n[t]);else Ga(n)}function Bf(){throw new Error("Unimplemented abstract method.")}let RL=0;function kr(n){return n.ol_uid||(n.ol_uid=String(++RL))}class Gm extends Gf{constructor(t,e,i){super(t),this.key=e,this.oldValue=i}}class CL extends ch{constructor(t){super(),this.on,this.once,this.un,kr(this),this.values_=null,t!==void 0&&this.setProperties(t)}get(t){let e;return this.values_&&this.values_.hasOwnProperty(t)&&(e=this.values_[t]),e}getKeys(){return this.values_&&Object.keys(this.values_)||[]}getProperties(){return this.values_&&Object.assign({},this.values_)||{}}getPropertiesInternal(){return this.values_}hasProperties(){return!!this.values_}notify(t,e){let i;i=`change:${t}`,this.hasListener(i)&&this.dispatchEvent(new Gm(i,t,e)),i=EL.PROPERTYCHANGE,this.hasListener(i)&&this.dispatchEvent(new Gm(i,t,e))}addChangeListener(t,e){this.addEventListener(`change:${t}`,e)}removeChangeListener(t,e){this.removeEventListener(`change:${t}`,e)}set(t,e,i){const s=this.values_||(this.values_={});if(i)s[t]=e;else{const r=s[t];s[t]=e,r!==e&&this.notify(t,r)}}setProperties(t,e){for(const i in t)this.set(i,t[i],e)}applyProperties(t){t.values_&&Object.assign(this.values_||(this.values_={}),t.values_)}unset(t,e){if(this.values_&&t in this.values_){const i=this.values_[t];delete this.values_[t],F_(this.values_)&&(this.values_=null),e||this.notify(t,i)}}}new Array(6);function PL(n,t){const e=t[0],i=t[1];return t[0]=n[0]*e+n[2]*i+n[4],t[1]=n[1]*e+n[3]*i+n[5],t}function Zo(n,t,e,i,s,r){let a=0,o=n[e-i],l=n[e-i+1];for(;t<e;t+=i){const h=n[t],u=n[t+1];l<=r?u>r&&(h-o)*(r-l)-(s-o)*(u-l)>0&&a++:u<=r&&(h-o)*(r-l)-(s-o)*(u-l)<0&&a--,o=h,l=u}return a!==0}function LL(n,t,e,i,s){let r;for(t+=i;t<e;t+=i)if(r=s(n.slice(t-i,t),n.slice(t,t+i)),r)return r;return!1}function IL(n,t,e,i,s,r){return r=r??y_(za(),n,t,e,i),Yu(s,r)?r[0]>=s[0]&&r[2]<=s[2]||r[1]>=s[1]&&r[3]<=s[3]?!0:LL(n,t,e,i,function(a,o){return w_(s,a,o)}):!1}function DL(n,t,e,i,s){return!!(IL(n,t,e,i,s)||Zo(n,t,e,i,s[0],s[1])||Zo(n,t,e,i,s[0],s[3])||Zo(n,t,e,i,s[2],s[1])||Zo(n,t,e,i,s[2],s[3]))}const ks=typeof navigator<"u"&&typeof navigator.userAgent<"u"?navigator.userAgent.toLowerCase():"",NL=ks.includes("safari")&&!ks.includes("chrom");NL&&(ks.includes("version/15.4")||/cpu (os|iphone os) 15_4 like mac os x/.test(ks));ks.includes("webkit")&&ks.includes("edge");ks.includes("macintosh");const kl=typeof WorkerGlobalScope<"u"&&typeof OffscreenCanvas<"u"&&self instanceof WorkerGlobalScope,OL=typeof Image<"u"&&Image.prototype.decode;(function(){let n=!1;try{const t=Object.defineProperty({},"passive",{get:function(){n=!0}});window.addEventListener("_",null,t),window.removeEventListener("_",null,t)}catch{}return n})();function Vl(n,t,e,i){let s;return e&&e.length?s=e.shift():kl?s=new class extends OffscreenCanvas{style={}}(n??300,t??150):s=document.createElement("canvas"),n&&(s.width=n),t&&(s.height=t),s.getContext("2d",i)}function zf(n){const t=n.canvas;t.width=1,t.height=1,n.clearRect(0,0,1,1)}function UL(n,t,e){const i=n;let s=!0,r=!1,a=!1;const o=[zl(i,zr.LOAD,function(){a=!0,r||t()})];return i.src&&OL?(r=!0,i.decode().then(function(){s&&t()}).catch(function(l){s&&(a?t():e())})):o.push(zl(i,zr.ERROR,e)),function(){s=!1,o.forEach(Ga)}}class FL extends CL{constructor(t){super(),this.projection=He(t.projection),this.attributions_=Bm(t.attributions),this.attributionsCollapsible_=t.attributionsCollapsible??!0,this.loading=!1,this.state_=t.state!==void 0?t.state:"ready",this.wrapX_=t.wrapX!==void 0?t.wrapX:!1,this.interpolate_=!!t.interpolate,this.viewResolver=null,this.viewRejector=null;const e=this;this.viewPromise_=new Promise(function(i,s){e.viewResolver=i,e.viewRejector=s})}getAttributions(){return this.attributions_}getAttributionsCollapsible(){return this.attributionsCollapsible_}getProjection(){return this.projection}getResolutions(t){return null}getView(){return this.viewPromise_}getState(){return this.state_}getWrapX(){return this.wrapX_}getInterpolate(){return this.interpolate_}refresh(){this.changed()}setAttributions(t){this.attributions_=Bm(t),this.changed()}setState(t){this.state_=t,this.changed()}}function Bm(n){return n?typeof n=="function"?n:(Array.isArray(n)||(n=[n]),t=>n):null}function GL(n,t,e){return e===void 0&&(e=[0,0]),e[0]=n[0]*t+.5|0,e[1]=n[1]*t+.5|0,e}function Ls(n,t){return Array.isArray(n)?n:(t===void 0?t=[n,n]:(t[0]=n,t[1]=n),t)}function BL(n){return Math.pow(n,3)}const zL=42,$0=256,Jt={IDLE:0,LOADING:1,LOADED:2,ERROR:3,EMPTY:4};class K0 extends Z0{constructor(t,e,i){super(),i=i||{},this.tileCoord=t,this.state=e,this.key="",this.transition_=i.transition===void 0?250:i.transition,this.transitionStarts_={},this.interpolate=!!i.interpolate}changed(){this.dispatchEvent(zr.CHANGE)}release(){this.setState(Jt.EMPTY)}getKey(){return this.key+"/"+this.tileCoord}getTileCoord(){return this.tileCoord}getState(){return this.state}setState(t){if(this.state!==Jt.EMPTY){if(this.state!==Jt.ERROR&&this.state>t)throw new Error("Tile load sequence violation");this.state=t,this.changed()}}load(){Bf()}getAlpha(t,e){if(!this.transition_)return 1;let i=this.transitionStarts_[t];if(!i)i=e,this.transitionStarts_[t]=i;else if(i===-1)return 1;const s=e-i+1e3/60;return s>=this.transition_?1:BL(s/this.transition_)}inTransition(t){return this.transition_?this.transitionStarts_[t]!==-1:!1}endTransition(t){this.transition_&&(this.transitionStarts_[t]=-1)}disposeInternal(){this.release(),super.disposeInternal()}}class kL extends K0{constructor(t,e,i,s,r,a){super(t,e,a),this.crossOrigin_=s?.crossOrigin,this.referrerPolicy_=s?.referrerPolicy,this.src_=i,this.key=i,this.image_,kl?this.image_=new OffscreenCanvas(1,1):(this.image_=new Image,this.crossOrigin_!==null&&(this.image_.crossOrigin=this.crossOrigin_),this.referrerPolicy_!==void 0&&(this.image_.referrerPolicy=this.referrerPolicy_)),this.unlisten_=null,this.tileLoadFunction_=r}getImage(){return this.image_}setImage(t){this.image_=t,this.state=Jt.LOADED,this.unlistenImage_(),this.changed()}getCrossOrigin(){return this.crossOrigin_}getReferrerPolicy(){return this.referrerPolicy_}handleImageError_(){this.state=Jt.ERROR,this.unlistenImage_(),this.image_=VL(),this.changed()}handleImageLoad_(){if(kl)this.state=Jt.LOADED;else{const t=this.image_;t.naturalWidth&&t.naturalHeight?this.state=Jt.LOADED:this.state=Jt.EMPTY}this.unlistenImage_(),this.changed()}load(){this.state==Jt.ERROR&&(this.state=Jt.IDLE,this.image_=new Image,this.crossOrigin_!==null&&(this.image_.crossOrigin=this.crossOrigin_),this.referrerPolicy_!==void 0&&(this.image_.referrerPolicy=this.referrerPolicy_)),this.state==Jt.IDLE&&(this.state=Jt.LOADING,this.changed(),this.tileLoadFunction_(this,this.src_),this.unlisten_=UL(this.image_,this.handleImageLoad_.bind(this),this.handleImageError_.bind(this)))}unlistenImage_(){this.unlisten_&&(this.unlisten_(),this.unlisten_=null)}disposeInternal(){this.unlistenImage_(),this.image_=null,super.disposeInternal()}}function VL(){const n=Vl(1,1);return n.fillStyle="rgba(0,0,0,0)",n.fillRect(0,0,1,1),n.canvas}class J0{constructor(t,e,i,s){this.minX=t,this.maxX=e,this.minY=i,this.maxY=s}contains(t){return this.containsXY(t[1],t[2])}containsTileRange(t){return this.minX<=t.minX&&t.maxX<=this.maxX&&this.minY<=t.minY&&t.maxY<=this.maxY}containsXY(t,e){return this.minX<=t&&t<=this.maxX&&this.minY<=e&&e<=this.maxY}equals(t){return this.minX==t.minX&&this.minY==t.minY&&this.maxX==t.maxX&&this.maxY==t.maxY}extend(t){t.minX<this.minX&&(this.minX=t.minX),t.maxX>this.maxX&&(this.maxX=t.maxX),t.minY<this.minY&&(this.minY=t.minY),t.maxY>this.maxY&&(this.maxY=t.maxY)}getHeight(){return this.maxY-this.minY+1}getSize(){return[this.getWidth(),this.getHeight()]}getWidth(){return this.maxX-this.minX+1}intersects(t){return this.minX<=t.maxX&&this.maxX>=t.minX&&this.minY<=t.maxY&&this.maxY>=t.minY}}function ur(n,t,e,i,s){return s!==void 0?(s.minX=n,s.maxX=t,s.minY=e,s.maxY=i,s):new J0(n,t,e,i)}class HL{options=null;constructor(t){this.urlPrefix=t,this.headers=new Map}setHeader(t,e){this.headers.set(t,e)}}const Ba=new Map;function Q0(n){const e=new URL(n).hostname;let i=Ba.get(e);i||(i=[],Ba.set(e,i));let s=i.find(r=>r.urlPrefix===n);return s||(s=new HL(n),i.push(s),i.sort((r,a)=>a.urlPrefix.length-r.urlPrefix.length)),s}function WL(n,t){if(Ba.size===0)return t;let e;typeof n=="string"?e=new URL(n):n instanceof URL?e=n:e=new URL(n.url);const i=Ba.get(e.hostname);if(!i)return t;t||(t={});const s=t.headers??{},r=e.toString();let a={};for(const l of i)if(r.startsWith(l.urlPrefix)){a={...l.options,...a};for(const[h,u]of l.headers.entries())s[h]||(s[h]=u)}const o=Object.keys(a);for(const l of o)t[l]=a[l];return t.headers=s,t}function XL(n,t){const e=Q0(n);e.options=t}function t_(n,t,e){Q0(n).setHeader(t,e)}function YL(n,t){t_(n,"Authorization",t)}function qL(){Ba.clear()}const jL={setAuth:YL,setHeader:t_,setOptions:XL,applyConfiguration:WL,clear:qL},ZL=1e3,$L=10;class KL extends pn{}const Vr=new KL;function JL(n,t){Vr.addEventListener(n,t)}function QL(n,t){return Vr.hasEventListener(n,t)}function tI(n,t){Vr.removeEventListener(n,t)}const Gu=new Map;let eI=0;function nI(n){if(!(n==null||n==="auto"))return n==="high"?1:-1}function iI(n,t){const e=new URL(n.url);let i=Gu.get(e.hostname);i||(i=new O0({maxConcurrentRequests:$L}),Gu.set(e.hostname,i));const s=async()=>(n.signal?.throwIfAborted(),await fetch(n,t));return i.enqueue({id:(eI++).toString(),request:()=>s(),shouldExecute:n.signal==null?void 0:()=>!n.signal.aborted,priority:nI(t?.priority)})}function sI(){let n=0;return Gu.forEach(t=>{n+=t.length}),{pending:n}}class rI extends Error{isHttpError=!0;constructor(t){super(`${t.status} ${t.statusText} - ${t.url}`),this.response=t}}function aI(n){return n.isHttpError===!0}async function Ws(n,t){const e=jL.applyConfiguration(n,t),i=new Request(n,e),s=await iI(i,{priority:t?.priority}).catch(r=>{throw Vr.dispatchEvent({type:"error",error:r}),r});if(!s.ok){const r=t?.retries??0;if(r>0){const a=t?.retryDelay??ZL;return a>0&&await zs.delay(a),Ws(n,{...t,retries:r-1})}else{const a=new rI(s);throw Vr.dispatchEvent({type:"error",error:a}),a}}return s}async function e_(n,t){return(await Ws(n,t)).blob()}async function oI(n,t){return(await Ws(n,t)).text()}async function lI(n,t){return(await Ws(n,t)).json()}async function hI(n,t){const i=await(await Ws(n,t)).text();return new window.DOMParser().parseFromString(i,"text/xml")}async function cI(n,t){return(await Ws(n,t)).arrayBuffer()}async function uI(n,t){const e=await e_(n,t);return Ne.decodeBlob(e,t)}const n_={fetch:Ws,xml:hI,json:lI,blob:e_,texture:uI,arrayBuffer:cI,text:oI,getInfo:sI,addEventListener:JL,hasEventListener:QL,removeEventListener:tI,_eventTarget:Vr},Jn=[];function fI(n,t){if(Jn.length=0,t?.method!=null&&Jn.push(t.method),Jn.push(n),t){const e=t.headers;if(e)if(Array.isArray(e))e.forEach(([i,s])=>{Jn.push(i),Jn.push(s)});else if(typeof e.forEach=="function")e.forEach((i,s)=>{Jn.push(s),Jn.push(i)});else for(const[i,s]of Object.entries(e))Jn.push(i),Jn.push(s);t.cache&&Jn.push(t.cache)}return Jn.join(",")}class dI{_requests=new Map;constructor(t){this._timeout=t.timeout??5e3,this._retry=t.retry??3,this._fetch=t.fetch??n_.fetch}async fetch(t,e){const i=fI(t,e),s=this._requests.get(i),r=e?.signal;if(r?.addEventListener("abort",()=>{const l=this._requests.get(i);l&&l.signals.every(h=>h.aborted)&&l.abortController.abort(zs.abortError())}),s)return r&&s.signals.push(r),(await s.promise).clone();const a=new AbortController;this._timeout&&setTimeout(()=>a.abort("timeout"),this._timeout),e&&delete e.signal;const o={abortController:a,signals:r?[r]:[],promise:this._fetch(t,{...e,signal:a.signal,retries:this._retry}).finally(()=>{this._requests.delete(i),clearTimeout(this._timeout)})};return this._requests.set(i,o),o.promise}}const pI=2,mI=3,gI=5e3,zm={dims:new Z};class i_ extends i3{isTiledImageSource=!0;type="TiledImageSource";info={requestedTiles:0,loadedTiles:0};constructor(t){super({...t,flipY:t.flipY??t.format?.flipY??!1,is8bit:t.is8bit??(t.format?.dataType??ue)===ue}),this.source=t.source,this.format=t.format,this._enableWorkers=t.enableWorkers??!0,this._downloader=new dI({retry:t.retries??mI,timeout:t.httpTimeout??gI});const e=Nt(this.source.getProjection(),"could not get projection from source");this.olprojection=e;const i=this.source.getTileGridForProjection(e);this._tileGrid=i,this._getTileUrl=this.source.getTileUrlFunction(),this.noDataValue=t.noDataValue,this._sourceExtent=t.extent??ul.fromOLExtent(i.getExtent(),Yt.get(e.getCode()))}getExtent(){return this._sourceExtent}getCrs(){return Yt.get(this.olprojection.getCode())}adjustExtentAndPixelSize(t,e,i,s=0){const r=this.getZoomLevel(t,e,i)??this._tileGrid.getMinZoom(),a=this._tileGrid.getResolution(r),o=a,l=a,h=t.withMargin(o*s,l*s).intersect(this._sourceExtent),u=h.dimensions(zm.dims),f=Math.round(u.x/o),c=Math.round(u.y/l);return{extent:h,width:f,height:c}}getZoomLevel(t,e,i){const s=this._tileGrid.getMinZoom(),r=this._tileGrid.getMaxZoom();function a(m){return Math.round(m*1e6)/1e6}const o=t.dimensions(zm.dims),l=o.x/e,h=o.y/i,u=a(Math.min(l,h)),f=this._tileGrid.getResolution(s);if(u/f>pI)return null;if(s===r||u>f)return s;let c=1/0,d=s;for(let m=s;m<=r;m++){const _=a(this._tileGrid.getResolution(m)),g=Math.abs(_-u);g<c&&(c=g,d=m)}return d}getImages(t){const{extent:e,width:i,height:s,signal:r}=t;if(r?.throwIfAborted(),!e.crs.equals(this.getCrs()))throw new Error("invalid CRS");const a=this.getZoomLevel(e,i,s);if(a==null)return[];const o=this._tileGrid.getTileRangeForExtentAndZ(ul.toOLExtent(e),a);return this.loadTiles(o,this.getCrs(),a,t.createReadableTextures,r)}async fetchData(t,e){try{const i=await this._downloader.fetch(t,{signal:e,priority:this.priority});return i.status!==200?null:await i.blob()}catch(i){if(i instanceof Error&&i.name==="AbortError")throw i;return aI(i)||console.error(i),null}}async loadTile(t,e,i,s,r){this.info.requestedTiles++,r!=null&&(await zs.delay(25),r.throwIfAborted());const a=await this.fetchData(e,r);if(!a)return new lm({texture:new Tf,extent:i,id:t});let o,l,h;if(this.format){const u=this._tileGrid.getTileSize(0),f=await this.format.decode(a,{noDataValue:this.noDataValue,width:u,height:u});o=f.texture,l=f.min,h=f.max}else o=await Ne.decodeBlob(a,{createDataTexture:s,flipY:!0,enableWorkers:this._enableWorkers}),o.flipY=!1;return o.generateMipmaps=!1,o.name="TiledImageSource - tile",Nn.track(o,o.name),this.info.loadedTiles++,new lm({texture:o,extent:i,id:t,min:l,max:h})}shouldLoad(t){return this.containsFn?this.containsFn(t):t.clone().as(this.getCrs()).intersectsExtent(this._sourceExtent)}update(){this.source.refresh(),super.update()}loadTiles(t,e,i,s,r){const a=this.source,o=this._tileGrid,l=o.getFullTileRange(i);if(l==null)return[];const h=[];for(let u=t.minX;u<=t.maxX;u++)for(let f=t.minY;f<=t.maxY;f++){if(!l.containsXY(u,f))continue;const c=a.getTile(i,u,f,1,this.olprojection);if(!c)continue;const d=c.tileCoord,m=o.getTileCoordExtent(d),_=ul.fromOLExtent(m,e),g=`${d[0]}-${d[1]}-${d[2]}`;if(this.shouldLoad(_)){const p=this._getTileUrl(d,1,this.olprojection);if(p!=null){const y=()=>this.loadTile(g,p,_,s,r);h.push({id:g,request:y})}}}return h}}function kf(n,t){return s_(n,t,[]).join("")}function s_(n,t,e){if(n.nodeType==Node.CDATA_SECTION_NODE||n.nodeType==Node.TEXT_NODE)e.push(n.nodeValue);else{let i;for(i=n.firstChild;i;i=i.nextSibling)s_(i,t,e)}return e}function _I(n){return"documentElement"in n}function vI(n){return new DOMParser().parseFromString(n,"application/xml")}function Bu(n,t){return(function(e,i){const s=n.call(this,e,i);s!==void 0&&i[i.length-1].push(s)})}function En(n,t,e){return(function(i,s){const r=n.call(this,i,s);if(r!==void 0){const a=s[s.length-1],o=i.localName;let l;o in a?l=a[o]:(l=[],a[o]=l),l.push(r)}})}function wt(n,t,e){return(function(i,s){const r=n.call(this,i,s);if(r!==void 0){const a=s[s.length-1],o=i.localName;a[o]=r}})}function fe(n,t,e){e=e!==void 0?e:{};let i,s;for(i=0,s=n.length;i<s;++i)e[n[i]]=t;return e}function xI(n,t,e,i){let s;for(s=t.firstElementChild;s;s=s.nextElementSibling){const r=n[s.namespaceURI];if(r!==void 0){const a=r[s.localName];a!==void 0&&a.call(i,s,e)}}}function ye(n,t,e,i,s){return i.push(n),xI(t,e,i,s),i.pop()}class r_{read(t){if(!t)return null;if(typeof t=="string"){const e=vI(t);return this.readFromDocument(e)}return _I(t)?this.readFromDocument(t):this.readFromNode(t)}readFromDocument(t){for(let e=t.firstChild;e;e=e.nextSibling)if(e.nodeType==Node.ELEMENT_NODE)return this.readFromNode(e);return null}readFromNode(t){Bf()}}const yI="http://www.w3.org/1999/xlink";function Vf(n){return n.getAttributeNS(yI,"href")}function MI(n){const t=kf(n,!1);return EI(t)}function EI(n){const t=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(n);if(t)return parseFloat(t[1])}function ns(n){const t=kf(n,!1);return SI(t)}function SI(n){const t=/^\s*(\d+)\s*$/.exec(n);if(t)return parseInt(t[1],10)}function ee(n){return kf(n,!1).trim()}const Rn=[null,"http://www.opengis.net/ows/1.1"],wI=fe(Rn,{ServiceIdentification:wt(ZI),ServiceProvider:wt(KI),OperationsMetadata:wt(qI)});class TI extends r_{constructor(){super()}readFromNode(t){const e=ye({},wI,t,[]);return e||null}}const bI=fe(Rn,{DeliveryPoint:wt(ee),City:wt(ee),AdministrativeArea:wt(ee),PostalCode:wt(ee),Country:wt(ee),ElectronicMailAddress:wt(ee)}),AI=fe(Rn,{Value:En(JI)}),RI=fe(Rn,{AllowedValues:wt(zI)}),CI=fe(Rn,{Phone:wt(jI),Address:wt(BI)}),PI=fe(Rn,{HTTP:wt(XI)}),LI=fe(Rn,{Get:En(WI),Post:void 0}),II=fe(Rn,{DCP:wt(HI)}),DI=fe(Rn,{Operation:YI}),NI=fe(Rn,{Voice:wt(ee),Facsimile:wt(ee)}),OI=fe(Rn,{Constraint:En(kI)}),UI=fe(Rn,{IndividualName:wt(ee),PositionName:wt(ee),ContactInfo:wt(VI)}),FI=fe(Rn,{Abstract:wt(ee),AccessConstraints:wt(ee),Fees:wt(ee),Title:wt(ee),ServiceTypeVersion:wt(ee),ServiceType:wt(ee)}),GI=fe(Rn,{ProviderName:wt(ee),ProviderSite:wt(Vf),ServiceContact:wt($I)});function BI(n,t){return ye({},bI,n,t)}function zI(n,t){return ye({},AI,n,t)}function kI(n,t){const e=n.getAttribute("name");if(e)return ye({name:e},RI,n,t)}function VI(n,t){return ye({},CI,n,t)}function HI(n,t){return ye({},PI,n,t)}function WI(n,t){const e=Vf(n);if(e)return ye({href:e},OI,n,t)}function XI(n,t){return ye({},LI,n,t)}function YI(n,t){const e=n.getAttribute("name"),i=ye({},II,n,t);if(!i)return;const s=t[t.length-1];s[e]=i}function qI(n,t){return ye({},DI,n,t)}function jI(n,t){return ye({},NI,n,t)}function ZI(n,t){return ye({},FI,n,t)}function $I(n,t){return ye({},UI,n,t)}function KI(n,t){return ye({},GI,n,t)}function JI(n,t){return ee(n)}const pi=[null,"http://www.opengis.net/wmts/1.0"],qr=[null,"http://www.opengis.net/ows/1.1"],QI=fe(pi,{Contents:wt(c4)});class t4 extends r_{constructor(){super(),this.owsParser_=new TI}readFromNode(t){let e=t.getAttribute("version");e&&(e=e.trim());let i=this.owsParser_.readFromNode(t);return i?(i.version=e,i=ye(i,QI,t,[]),i||null):null}}const e4=fe(pi,{Layer:En(u4),TileMatrixSet:En(f4)}),n4=fe(pi,{Style:En(d4),Format:En(ee),TileMatrixSetLink:En(p4),Dimension:En(m4),ResourceURL:En(g4)},fe(qr,{Title:wt(ee),Abstract:wt(ee),WGS84BoundingBox:wt(o_),BoundingBox:En(_4),Identifier:wt(ee)})),i4=fe(pi,{LegendURL:En(v4)},fe(qr,{Title:wt(ee),Identifier:wt(ee)})),s4=fe(pi,{TileMatrixSet:wt(ee),TileMatrixSetLimits:wt(y4)}),r4=fe(pi,{TileMatrixLimits:Bu(M4)}),a4=fe(pi,{TileMatrix:wt(ee),MinTileRow:wt(ns),MaxTileRow:wt(ns),MinTileCol:wt(ns),MaxTileCol:wt(ns)}),o4=fe(pi,{Default:wt(ee),Value:En(ee)},fe(qr,{Identifier:wt(ee)})),a_=fe(qr,{LowerCorner:Bu(zu),UpperCorner:Bu(zu)}),l4=fe(pi,{WellKnownScaleSet:wt(ee),TileMatrix:En(x4)},fe(qr,{SupportedCRS:wt(ee),Identifier:wt(ee),BoundingBox:wt(o_)})),h4=fe(pi,{TopLeftCorner:wt(zu),ScaleDenominator:wt(MI),TileWidth:wt(ns),TileHeight:wt(ns),MatrixWidth:wt(ns),MatrixHeight:wt(ns)},fe(qr,{Identifier:wt(ee)}));function c4(n,t){return ye({},e4,n,t)}function u4(n,t){return ye({},n4,n,t)}function f4(n,t){return ye({},l4,n,t)}function d4(n,t){const e=ye({},i4,n,t);if(!e)return;const i=n.getAttribute("isDefault")==="true";return e.isDefault=i,e}function p4(n,t){return ye({},s4,n,t)}function m4(n,t){return ye({},o4,n,t)}function g4(n,t){const e=n.getAttribute("format"),i=n.getAttribute("template"),s=n.getAttribute("resourceType"),r={};return e&&(r.format=e),i&&(r.template=i),s&&(r.resourceType=s),r}function o_(n,t){const e=ye([],a_,n,t);if(e.length==2)return ml(e)}function _4(n,t){const e=n.getAttribute("crs"),i=ye([],a_,n,t);if(i.length==2)return{extent:ml(i),crs:e}}function v4(n,t){const e={};return e.format=n.getAttribute("format"),e.href=Vf(n),e}function zu(n,t){const e=ee(n).split(/\s+/);if(!e||e.length!=2)return;const i=+e[0],s=+e[1];if(!(isNaN(i)||isNaN(s)))return[i,s]}function x4(n,t){return ye({},h4,n,t)}function y4(n,t){return ye([],r4,n,t)}function M4(n,t){return ye({},a4,n,t)}function km(n,t,e,i){return i!==void 0?(i[0]=n,i[1]=t,i[2]=e,i):[n,t,e]}function E4(n,t,e){return n+"/"+t+"/"+e}function S4(n,t,e,i,s){return`${kr(n)},${t},${E4(e,i,s)}`}function w4(n){return T4(n[0],n[1],n[2])}function T4(n,t,e){return(t<<n)+e}function b4(n,t){const e=n[0],i=n[1],s=n[2];if(t.getMinZoom()>e||e>t.getMaxZoom())return!1;const r=t.getFullTileRange(e);return r?r.containsXY(i,s):!0}const fr=[0,0,0],qi=5;class uh{constructor(t){this.minZoom=t.minZoom!==void 0?t.minZoom:0,this.resolutions_=t.resolutions,mr(bL(this.resolutions_,(s,r)=>r-s),"`resolutions` must be sorted in descending order");let e;if(!t.origins){for(let s=0,r=this.resolutions_.length-1;s<r;++s)if(!e)e=this.resolutions_[s]/this.resolutions_[s+1];else if(this.resolutions_[s]/this.resolutions_[s+1]!==e){e=void 0;break}}this.zoomFactor_=e,this.maxZoom=this.resolutions_.length-1,this.origin_=t.origin!==void 0?t.origin:null,this.origins_=null,t.origins!==void 0&&(this.origins_=t.origins,mr(this.origins_.length==this.resolutions_.length,"Number of `origins` and `resolutions` must be equal"));const i=t.extent;i!==void 0&&!this.origin_&&!this.origins_&&(this.origin_=ka(i)),mr(!this.origin_&&this.origins_||this.origin_&&!this.origins_,"Either `origin` or `origins` must be configured, never both"),this.tileSizes_=null,t.tileSizes!==void 0&&(this.tileSizes_=t.tileSizes,mr(this.tileSizes_.length==this.resolutions_.length,"Number of `tileSizes` and `resolutions` must be equal")),this.tileSize_=t.tileSize!==void 0?t.tileSize:this.tileSizes_?null:$0,mr(!this.tileSize_&&this.tileSizes_||this.tileSize_&&!this.tileSizes_,"Either `tileSize` or `tileSizes` must be configured, never both"),this.extent_=i!==void 0?i:null,this.fullTileRanges_=null,this.tmpSize_=[0,0],this.tmpExtent_=[0,0,0,0],t.sizes!==void 0?this.fullTileRanges_=t.sizes.map((s,r)=>{const a=new J0(Math.min(0,s[0]),Math.max(s[0]-1,-1),Math.min(0,s[1]),Math.max(s[1]-1,-1));if(i){const o=this.getTileRangeForExtentAndZ(i,r);a.minX=Math.max(o.minX,a.minX),a.maxX=Math.min(o.maxX,a.maxX),a.minY=Math.max(o.minY,a.minY),a.maxY=Math.min(o.maxY,a.maxY)}return a}):i&&this.calculateTileRanges_(i)}forEachTileCoord(t,e,i){const s=this.getTileRangeForExtentAndZ(t,e);for(let r=s.minX,a=s.maxX;r<=a;++r)for(let o=s.minY,l=s.maxY;o<=l;++o)i([e,r,o])}forEachTileCoordParentTileRange(t,e,i,s){let r,a,o,l=null,h=t[0]-1;for(this.zoomFactor_===2?(a=t[1],o=t[2]):l=this.getTileCoordExtent(t,s);h>=this.minZoom;){if(a!==void 0&&o!==void 0?(a=Math.floor(a/2),o=Math.floor(o/2),r=ur(a,a,o,o,i)):r=this.getTileRangeForExtentAndZ(l,h,i),e(h,r))return!0;--h}return!1}getExtent(){return this.extent_}getMaxZoom(){return this.maxZoom}getMinZoom(){return this.minZoom}getOrigin(t){return this.origin_?this.origin_:this.origins_[t]}getOrigins(){return this.origins_}getResolution(t){return this.resolutions_[t]}getResolutions(){return this.resolutions_}getTileCoordChildTileRange(t,e,i){if(t[0]<this.maxZoom){if(this.zoomFactor_===2){const r=t[1]*2,a=t[2]*2;return ur(r,r+1,a,a+1,e)}const s=this.getTileCoordExtent(t,i||this.tmpExtent_);return this.getTileRangeForExtentAndZ(s,t[0]+1,e)}return null}getTileRangeForTileCoordAndZ(t,e,i){if(e>this.maxZoom||e<this.minZoom)return null;const s=t[0],r=t[1],a=t[2];if(e===s)return ur(r,a,r,a,i);if(this.zoomFactor_){const l=Math.pow(this.zoomFactor_,e-s),h=Math.floor(r*l),u=Math.floor(a*l);if(e<s)return ur(h,h,u,u,i);const f=Math.floor(l*(r+1))-1,c=Math.floor(l*(a+1))-1;return ur(h,f,u,c,i)}const o=this.getTileCoordExtent(t,this.tmpExtent_);return this.getTileRangeForExtentAndZ(o,e,i)}getTileRangeForExtentAndZ(t,e,i){this.getTileCoordForXYAndZ_(t[0],t[3],e,!1,fr);const s=fr[1],r=fr[2];this.getTileCoordForXYAndZ_(t[2],t[1],e,!0,fr);const a=fr[1],o=fr[2];return ur(s,a,r,o,i)}getTileCoordCenter(t){const e=this.getOrigin(t[0]),i=this.getResolution(t[0]),s=Ls(this.getTileSize(t[0]),this.tmpSize_);return[e[0]+(t[1]+.5)*s[0]*i,e[1]-(t[2]+.5)*s[1]*i]}getTileCoordExtent(t,e){const i=this.getOrigin(t[0]),s=this.getResolution(t[0]),r=Ls(this.getTileSize(t[0]),this.tmpSize_),a=i[0]+t[1]*r[0]*s,o=i[1]-(t[2]+1)*r[1]*s,l=a+r[0]*s,h=o+r[1]*s;return Hl(a,o,l,h,e)}getTileCoordForCoordAndResolution(t,e,i){return this.getTileCoordForXYAndResolution_(t[0],t[1],e,!1,i)}getTileCoordForXYAndResolution_(t,e,i,s,r){const a=this.getZForResolution(i),o=i/this.getResolution(a),l=this.getOrigin(a),h=Ls(this.getTileSize(a),this.tmpSize_);let u=o*(t-l[0])/i/h[0],f=o*(l[1]-e)/i/h[1];return s?(u=ao(u,qi)-1,f=ao(f,qi)-1):(u=ro(u,qi),f=ro(f,qi)),km(a,u,f,r)}getTileCoordForXYAndZ_(t,e,i,s,r){const a=this.getOrigin(i),o=this.getResolution(i),l=Ls(this.getTileSize(i),this.tmpSize_);let h=(t-a[0])/o/l[0],u=(a[1]-e)/o/l[1];return s?(h=ao(h,qi)-1,u=ao(u,qi)-1):(h=ro(h,qi),u=ro(u,qi)),km(i,h,u,r)}getTileCoordForCoordAndZ(t,e,i){return this.getTileCoordForXYAndZ_(t[0],t[1],e,!1,i)}getTileCoordResolution(t){return this.resolutions_[t[0]]}getTileSize(t){return this.tileSize_?this.tileSize_:this.tileSizes_[t]}getFullTileRange(t){return this.fullTileRanges_?this.fullTileRanges_[t]:this.extent_?this.getTileRangeForExtentAndZ(this.extent_,t):null}getZForResolution(t,e){const i=TL(this.resolutions_,t,e||0);return ba(i,this.minZoom,this.maxZoom)}tileCoordIntersectsViewport(t,e){return DL(e,0,e.length,2,this.getTileCoordExtent(t))}calculateTileRanges_(t){const e=this.resolutions_.length,i=new Array(e);for(let s=this.minZoom;s<e;++s)i[s]=this.getTileRangeForExtentAndZ(t,s);this.fullTileRanges_=i}}class A4 extends uh{constructor(t){super({extent:t.extent,origin:t.origin,origins:t.origins,resolutions:t.resolutions,tileSize:t.tileSize,tileSizes:t.tileSizes,sizes:t.sizes}),this.matrixIds_=t.matrixIds}getMatrixId(t){return this.matrixIds_[t]}getMatrixIds(){return this.matrixIds_}}function R4(n,t,e){const i=[],s=[],r=[],a=[],o=[];e=e!==void 0?e:[];const l="SupportedCRS",h="TileMatrix",u="Identifier",f="ScaleDenominator",c="TopLeftCorner",d="TileWidth",m="TileHeight",_=n[l],g=He(_),p=g.getMetersPerUnit(),y=g.getAxisOrientation().startsWith("ne");return n[h].sort(function(x,v){return v[f]-x[f]}),n[h].forEach(function(x){let v;if(e.length>0?v=e.find(function(T){return x[u]==T[h]?!0:x[u].includes(":")?!1:n[u]+":"+x[u]===T[h]}):v=!0,v){s.push(x[u]);const T=x[f]*28e-5/p,b=x[d],R=x[m];y?r.push([x[c][1],x[c][0]]):r.push(x[c]),i.push(T),a.push(b==R?b:[b,R]),o.push([x.MatrixWidth,x.MatrixHeight])}}),new A4({extent:t,origins:r,resolutions:i,matrixIds:s,tileSizes:a,sizes:o})}function Vm(n,t){const e=[];Object.keys(t).forEach(function(s){t[s]!==null&&t[s]!==void 0&&e.push(s+"="+encodeURIComponent(t[s]))});const i=e.join("&");return n=n.replace(/[?&]$/,""),n+=n.includes("?")?"&":"?",n+i}const C4=/\{z\}/g,P4=/\{x\}/g,L4=/\{y\}/g,I4=/\{-y\}/g;function D4(n,t,e,i,s){return n.replace(C4,t.toString()).replace(P4,e.toString()).replace(L4,i.toString()).replace(I4,function(){if(s===void 0)throw new Error("If the URL template has a {-y} placeholder, the grid extent must be known");return(s-i).toString()})}function l_(n){const t=[];let e=/\{([a-z])-([a-z])\}/.exec(n);if(e){const i=e[1].charCodeAt(0),s=e[2].charCodeAt(0);let r;for(r=i;r<=s;++r)t.push(n.replace(e[0],String.fromCharCode(r)));return t}if(e=/\{(\d+)-(\d+)\}/.exec(n),e){const i=parseInt(e[2],10);for(let s=parseInt(e[1],10);s<=i;s++)t.push(n.replace(e[0],s.toString()));return t}return t.push(n),t}function N4(n,t){return(function(e,i,s){if(!e)return;let r;const a=e[0];if(t){const o=t.getFullTileRange(a);o&&(r=o.getHeight()-1)}return D4(n,a,e[1],e[2],r)})}function O4(n,t){const e=n.length,i=new Array(e);for(let s=0;s<e;++s)i[s]=N4(n[s],t);return ku(i)}function ku(n){return n.length===1?n[0]:(function(t,e,i){if(!t)return;const s=w4(t),r=Ko(s,n.length);return n[r](t,e,i)})}let xc;const Ir=[];function Hm(n,t,e,i,s){n.beginPath(),n.moveTo(0,0),n.lineTo(t,e),n.lineTo(i,s),n.closePath(),n.save(),n.clip(),n.fillRect(0,0,Math.max(t,i)+1,Math.max(e,s)),n.restore()}function yc(n,t){return Math.abs(n[t*4]-210)>2||Math.abs(n[t*4+3]-.75*255)>2}function U4(){if(xc===void 0){const n=Vl(6,6,Ir);n.globalCompositeOperation="lighter",n.fillStyle="rgba(210, 0, 0, 0.75)",Hm(n,4,5,4,0),Hm(n,4,5,0,5);const t=n.getImageData(0,0,3,3).data;xc=yc(t,0)||yc(t,4)||yc(t,8),zf(n),Ir.push(n.canvas)}return xc}function Wm(n,t,e,i){const s=ig(e,t,n);let r=cd(t,i,e);const a=t.getMetersPerUnit();a!==void 0&&(r*=a);const o=n.getMetersPerUnit();o!==void 0&&(r/=o);const l=n.getExtent();if(!l||Ym(l,s)){const h=cd(n,r,s)/r;isFinite(h)&&h>0&&(r/=h)}return r}function F4(n,t,e,i){const s=jm(e);let r=Wm(n,t,s,i);return(!isFinite(r)||r<=0)&&E_(e,function(a){return r=Wm(n,t,a,i),isFinite(r)&&r>0}),r}function G4(n,t,e,i,s,r,a,o,l,h,u,f,c,d){const m=Vl(Math.round(e*n),Math.round(e*t),Ir);if(f||(m.imageSmoothingEnabled=!1),l.length===0)return m.canvas;m.scale(e,e);function _(T){return Math.round(T*e)/e}m.globalCompositeOperation="lighter";const g=za();l.forEach(function(T,b,R){x_(g,T.extent)});let p;const y=e/i,x=(f?1:1+Math.pow(2,-24))/y;p=Vl(Math.round(We(g)*y),Math.round(gr(g)*y),Ir),f||(p.imageSmoothingEnabled=!1),l.forEach(function(T,b,R){if(T.image.width>0&&T.image.height>0){if(T.clipExtent){p.save();const F=(T.clipExtent[0]-g[0])*y,I=-(T.clipExtent[3]-g[3])*y,z=We(T.clipExtent)*y,X=gr(T.clipExtent)*y;p.rect(f?F:Math.round(F),f?I:Math.round(I),f?z:Math.round(F+z)-Math.round(F),f?X:Math.round(I+X)-Math.round(I)),p.clip()}const L=(T.extent[0]-g[0])*y,S=-(T.extent[3]-g[3])*y,E=We(T.extent)*y,P=gr(T.extent)*y;p.drawImage(T.image,h,h,T.image.width-2*h,T.image.height-2*h,f?L:Math.round(L),f?S:Math.round(S),f?E:Math.round(L+E)-Math.round(L),f?P:Math.round(S+P)-Math.round(S)),T.clipExtent&&p.restore()}});const v=ka(a);return o.getTriangles().forEach(function(T,b,R){const L=T.source,S=T.target;let E=L[0][0],P=L[0][1],F=L[1][0],I=L[1][1],z=L[2][0],X=L[2][1];const H=_((S[0][0]-v[0])/r),Y=_(-(S[0][1]-v[1])/r),k=_((S[1][0]-v[0])/r),et=_(-(S[1][1]-v[1])/r),ht=_((S[2][0]-v[0])/r),vt=_(-(S[2][1]-v[1])/r),zt=E,re=P;E=0,P=0,F-=zt,I-=re,z-=zt,X-=re;const q=[[F,I,0,0,k-H],[z,X,0,0,ht-H],[0,0,F,I,et-Y],[0,0,z,X,vt-Y]],tt=R_(q);if(!tt)return;if(m.save(),m.beginPath(),U4()||!f){m.moveTo(k,et);const rt=4,Tt=H-k,Lt=Y-et;for(let It=0;It<rt;It++)m.lineTo(k+_((It+1)*Tt/rt),et+_(It*Lt/(rt-1))),It!=rt-1&&m.lineTo(k+_((It+1)*Tt/rt),et+_((It+1)*Lt/(rt-1)));m.lineTo(ht,vt)}else m.moveTo(k,et),m.lineTo(H,Y),m.lineTo(ht,vt);m.clip(),m.transform(tt[0],tt[2],tt[1],tt[3],H,Y),m.translate(g[0]-zt,g[3]-re);let mt;if(p)mt=p.canvas,m.scale(x,-x);else{const rt=l[0],Tt=rt.extent;mt=rt.image,m.scale(We(Tt)/mt.width,-gr(Tt)/mt.height)}m.drawImage(mt,0,0),m.restore()}),p&&(zf(p),Ir.push(p.canvas)),u&&(m.save(),m.globalCompositeOperation="source-over",m.strokeStyle="black",m.lineWidth=1,o.getTriangles().forEach(function(T,b,R){const L=T.target,S=(L[0][0]-v[0])/r,E=-(L[0][1]-v[1])/r,P=(L[1][0]-v[0])/r,F=-(L[1][1]-v[1])/r,I=(L[2][0]-v[0])/r,z=-(L[2][1]-v[1])/r;m.beginPath(),m.moveTo(P,F),m.lineTo(S,E),m.lineTo(I,z),m.closePath(),m.stroke()}),m.restore()),m.canvas}const B4=10,Xm=.25;class z4{constructor(t,e,i,s,r,a,o){this.sourceProj_=t,this.targetProj_=e;let l={};const h=o?bc(x=>PL(o,ig(x,this.targetProj_,this.sourceProj_))):Ju(this.targetProj_,this.sourceProj_);this.transformInv_=function(x){const v=x[0]+"/"+x[1];return l[v]||(l[v]=h(x)),l[v]},this.maxSourceExtent_=s,this.errorThresholdSquared_=r*r,this.triangles_=[],this.wrapsXInSource_=!1,this.canWrapXInSource_=this.sourceProj_.canWrapX()&&!!s&&!!this.sourceProj_.getExtent()&&We(s)>=We(this.sourceProj_.getExtent()),this.sourceWorldWidth_=this.sourceProj_.getExtent()?We(this.sourceProj_.getExtent()):null,this.targetWorldWidth_=this.targetProj_.getExtent()?We(this.targetProj_.getExtent()):null;const u=ka(i),f=Xu(i),c=Wu(i),d=Hu(i),m=this.transformInv_(u),_=this.transformInv_(f),g=this.transformInv_(c),p=this.transformInv_(d),y=B4+(a?Math.max(0,Math.ceil(Math.log2(Ec(i)/(a*a*256*256)))):0);if(this.addQuad_(u,f,c,d,m,_,g,p,y),this.wrapsXInSource_){let x=1/0;this.triangles_.forEach(function(v,T,b){x=Math.min(x,v.source[0][0],v.source[1][0],v.source[2][0])}),this.triangles_.forEach(v=>{if(Math.max(v.source[0][0],v.source[1][0],v.source[2][0])-x>this.sourceWorldWidth_/2){const T=[[v.source[0][0],v.source[0][1]],[v.source[1][0],v.source[1][1]],[v.source[2][0],v.source[2][1]]];T[0][0]-x>this.sourceWorldWidth_/2&&(T[0][0]-=this.sourceWorldWidth_),T[1][0]-x>this.sourceWorldWidth_/2&&(T[1][0]-=this.sourceWorldWidth_),T[2][0]-x>this.sourceWorldWidth_/2&&(T[2][0]-=this.sourceWorldWidth_);const b=Math.min(T[0][0],T[1][0],T[2][0]);Math.max(T[0][0],T[1][0],T[2][0])-b<this.sourceWorldWidth_/2&&(v.source=T)}})}l={}}addTriangle_(t,e,i,s,r,a){this.triangles_.push({source:[s,r,a],target:[t,e,i]})}addQuad_(t,e,i,s,r,a,o,l,h){const u=ml([r,a,o,l]),f=this.sourceWorldWidth_?We(u)/this.sourceWorldWidth_:null,c=this.sourceWorldWidth_,d=this.sourceProj_.canWrapX()&&f>.5&&f<1;let m=!1;if(h>0){if(this.targetProj_.isGlobal()&&this.targetWorldWidth_){const g=ml([t,e,i,s]);m=We(g)/this.targetWorldWidth_>Xm||m}!d&&this.sourceProj_.isGlobal()&&f&&(m=f>Xm||m)}if(!m&&this.maxSourceExtent_&&isFinite(u[0])&&isFinite(u[1])&&isFinite(u[2])&&isFinite(u[3])&&!Yu(u,this.maxSourceExtent_))return;let _=0;if(!m&&(!isFinite(r[0])||!isFinite(r[1])||!isFinite(a[0])||!isFinite(a[1])||!isFinite(o[0])||!isFinite(o[1])||!isFinite(l[0])||!isFinite(l[1]))){if(h>0)m=!0;else if(_=(!isFinite(r[0])||!isFinite(r[1])?8:0)+(!isFinite(a[0])||!isFinite(a[1])?4:0)+(!isFinite(o[0])||!isFinite(o[1])?2:0)+(!isFinite(l[0])||!isFinite(l[1])?1:0),_!=1&&_!=2&&_!=4&&_!=8)return}if(h>0){if(!m){const g=[(t[0]+i[0])/2,(t[1]+i[1])/2],p=this.transformInv_(g);let y;d?y=(Ko(r[0],c)+Ko(o[0],c))/2-Ko(p[0],c):y=(r[0]+o[0])/2-p[0];const x=(r[1]+o[1])/2-p[1];m=y*y+x*x>this.errorThresholdSquared_}if(m){if(Math.abs(t[0]-i[0])<=Math.abs(t[1]-i[1])){const g=[(e[0]+i[0])/2,(e[1]+i[1])/2],p=this.transformInv_(g),y=[(s[0]+t[0])/2,(s[1]+t[1])/2],x=this.transformInv_(y);this.addQuad_(t,e,g,y,r,a,p,x,h-1),this.addQuad_(y,g,i,s,x,p,o,l,h-1)}else{const g=[(t[0]+e[0])/2,(t[1]+e[1])/2],p=this.transformInv_(g),y=[(i[0]+s[0])/2,(i[1]+s[1])/2],x=this.transformInv_(y);this.addQuad_(t,g,y,s,r,p,x,l,h-1),this.addQuad_(g,e,i,y,p,a,o,x,h-1)}return}}if(d){if(!this.canWrapXInSource_)return;this.wrapsXInSource_=!0}(_&11)==0&&this.addTriangle_(t,i,s,r,o,l),(_&14)==0&&this.addTriangle_(t,i,e,r,o,a),_&&((_&13)==0&&this.addTriangle_(e,s,t,a,l,r),(_&7)==0&&this.addTriangle_(e,s,i,a,l,o))}calculateSourceExtent(){const t=za();return this.triangles_.forEach(function(e,i,s){const r=e.source;$o(t,r[0]),$o(t,r[1]),$o(t,r[2])}),t}getTriangles(){return this.triangles_}}const k4=.5;class V4 extends K0{constructor(t,e,i,s,r,a,o,l,h,u,f,c){super(r,Jt.IDLE,c),this.renderEdges_=f!==void 0?f:!1,this.pixelRatio_=o,this.gutter_=l,this.canvas_=null,this.sourceTileGrid_=e,this.targetTileGrid_=s,this.wrappedTileCoord_=a||r,this.sourceTiles_=[],this.sourcesListenerKeys_=null,this.sourceZ_=0,this.clipExtent_=t.canWrapX()?t.getExtent():void 0;const d=s.getTileCoordExtent(this.wrappedTileCoord_),m=this.targetTileGrid_.getExtent();let _=this.sourceTileGrid_.getExtent();const g=m?dh(d,m):d;if(Ec(g)===0){this.state=Jt.EMPTY;return}const p=t.getExtent();p&&(_?_=dh(_,p):_=p);const y=s.getResolution(this.wrappedTileCoord_[0]),x=F4(t,i,g,y);if(!isFinite(x)||x<=0){this.state=Jt.EMPTY;return}const v=u!==void 0?u:k4;if(this.triangulation_=new z4(t,i,g,_,x*v,y),this.triangulation_.getTriangles().length===0){this.state=Jt.EMPTY;return}this.sourceZ_=e.getZForResolution(x);let T=this.triangulation_.calculateSourceExtent();if(_&&(t.canWrapX()?(T[1]=ba(T[1],_[1],_[3]),T[3]=ba(T[3],_[1],_[3])):T=dh(T,_)),!Ec(T))this.state=Jt.EMPTY;else{let b=0,R=0;t.canWrapX()&&(b=We(p),R=Math.floor((T[0]-p[0])/b)),A_(T.slice(),t).forEach(S=>{const E=e.getTileRangeForExtentAndZ(S,this.sourceZ_);for(let P=E.minX;P<=E.maxX;P++)for(let F=E.minY;F<=E.maxY;F++){const I=R*b;this.sourceTiles_.push({getTile:()=>h(this.sourceZ_,P,F,o),offset:I})}++R}),this.sourceTiles_.length===0&&(this.state=Jt.EMPTY)}}getImage(){return this.canvas_}reproject_(){const t=[];if(this.sourceTiles_.forEach(e=>{const i=e.tile;if(i&&i.getState()==Jt.LOADED){const s=this.sourceTileGrid_.getTileCoordExtent(i.tileCoord);s[0]+=e.offset,s[2]+=e.offset;const r=this.clipExtent_?.slice();r&&(r[0]+=e.offset,r[2]+=e.offset),t.push({extent:s,clipExtent:r,image:i.getImage()})}}),this.sourceTiles_.length=0,t.length===0)this.state=Jt.ERROR;else{const e=this.wrappedTileCoord_[0],i=this.targetTileGrid_.getTileSize(e),s=typeof i=="number"?i:i[0],r=typeof i=="number"?i:i[1],a=this.targetTileGrid_.getResolution(e),o=this.sourceTileGrid_.getResolution(this.sourceZ_),l=this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_);this.canvas_=G4(s,r,this.pixelRatio_,o,this.sourceTileGrid_.getExtent(),a,l,this.triangulation_,t,this.gutter_,this.renderEdges_,this.interpolate),this.state=Jt.LOADED}this.changed()}load(){for(const t of this.sourceTiles_)t.tile=t.getTile();if(this.state==Jt.IDLE){this.state=Jt.LOADING,this.changed();let t=0;this.sourcesListenerKeys_=[],this.sourceTiles_.forEach(({tile:e})=>{const i=e.getState();if(i==Jt.IDLE||i==Jt.LOADING){t++;const s=Bl(e,zr.CHANGE,r=>{const a=e.getState();(a==Jt.LOADED||a==Jt.ERROR||a==Jt.EMPTY)&&(Ga(s),t--,t===0&&(this.unlistenSources_(),this.reproject_()))});this.sourcesListenerKeys_.push(s)}}),t===0?setTimeout(this.reproject_.bind(this),0):this.sourceTiles_.forEach(function({tile:e},i,s){e.getState()==Jt.IDLE&&e.load()})}}unlistenSources_(){this.sourcesListenerKeys_.forEach(Ga),this.sourcesListenerKeys_=null}release(){this.canvas_&&(zf(this.canvas_.getContext("2d")),Ir.push(this.canvas_),this.canvas_=null),this.sourceTiles_.length=0,super.release()}}function h_(n){let t=n.getDefaultTileGrid();return t||(t=Y4(n),n.setDefaultTileGrid(t)),t}function H4(n,t,e){const i=t[0],s=n.getTileCoordCenter(t),r=Hf(e);if(!Ym(r,s)){const a=We(r),o=Math.ceil((r[0]-s[0])/a);return s[0]+=a*o,n.getTileCoordForCoordAndZ(s,i)}return t}function W4(n,t,e,i){i=i!==void 0?i:"top-left";const s=c_(n,t,e);return new uh({extent:n,origin:S_(n,i),resolutions:s,tileSize:e})}function X4(n){const t=n||{},e=t.extent||He("EPSG:3857").getExtent(),i={extent:e,minZoom:t.minZoom,tileSize:t.tileSize,resolutions:c_(e,t.maxZoom,t.tileSize,t.maxResolution)};return new uh(i)}function c_(n,t,e,i){t=t!==void 0?t:zL,e=Ls(e!==void 0?e:$0);const s=gr(n),r=We(n);i=i>0?i:Math.max(r/e[0],s/e[1]);const a=t+1,o=new Array(a);for(let l=0;l<a;++l)o[l]=i/Math.pow(2,l);return o}function Y4(n,t,e,i){const s=Hf(n);return W4(s,t,e,i)}function Hf(n){n=He(n);let t=n.getExtent();if(!t){const e=180*Km.degrees/n.getMetersPerUnit();t=Hl(-e,-e,e,e)}return t}class q4 extends FL{constructor(t){super({attributions:t.attributions,attributionsCollapsible:t.attributionsCollapsible,projection:t.projection,state:t.state,wrapX:t.wrapX,interpolate:t.interpolate}),this.on,this.once,this.un,this.tilePixelRatio_=t.tilePixelRatio!==void 0?t.tilePixelRatio:1,this.tileGrid=t.tileGrid!==void 0?t.tileGrid:null;const e=[256,256];this.tileGrid&&Ls(this.tileGrid.getTileSize(this.tileGrid.getMinZoom()),e),this.tmpSize=[0,0],this.key_=t.key||kr(this),this.tileOptions={transition:t.transition,interpolate:t.interpolate},this.zDirection=t.zDirection?t.zDirection:0}getGutterForProjection(t){return 0}getKey(){return this.key_}setKey(t){this.key_!==t&&(this.key_=t,this.changed())}getResolutions(t){const e=t?this.getTileGridForProjection(t):this.tileGrid;return e?e.getResolutions():null}getTile(t,e,i,s,r,a){return Bf()}getTileGrid(){return this.tileGrid}getTileGridForProjection(t){return this.tileGrid?this.tileGrid:h_(t)}getTilePixelRatio(t){return this.tilePixelRatio_}getTilePixelSize(t,e,i){const s=this.getTileGridForProjection(i),r=this.getTilePixelRatio(e),a=Ls(s.getTileSize(t),this.tmpSize);return r==1?a:GL(a,r,this.tmpSize)}getTileCoordForTileUrlFunction(t,e){const i=e!==void 0?e:this.getProjection(),s=e!==void 0?this.getTileGridForProjection(i):this.tileGrid||this.getTileGridForProjection(i);return this.getWrapX()&&i.isGlobal()&&(t=H4(s,t,i)),b4(t,s)?t:null}clear(){}refresh(){this.clear(),super.refresh()}}class j4 extends Gf{constructor(t,e){super(t),this.tile=e}}const Mc={TILELOADSTART:"tileloadstart",TILELOADEND:"tileloadend",TILELOADERROR:"tileloaderror"};class Wf extends q4{constructor(t){super({attributions:t.attributions,cacheSize:t.cacheSize,projection:t.projection,state:t.state,tileGrid:t.tileGrid,tilePixelRatio:t.tilePixelRatio,wrapX:t.wrapX,transition:t.transition,interpolate:t.interpolate,key:t.key,attributionsCollapsible:t.attributionsCollapsible,zDirection:t.zDirection}),this.generateTileUrlFunction_=this.tileUrlFunction===Wf.prototype.tileUrlFunction,this.tileLoadFunction=t.tileLoadFunction,t.tileUrlFunction&&(this.tileUrlFunction=t.tileUrlFunction),this.urls=null,t.urls?this.setUrls(t.urls):t.url&&this.setUrl(t.url),this.tileLoadingKeys_={}}getTileLoadFunction(){return this.tileLoadFunction}getTileUrlFunction(){return Object.getPrototypeOf(this).tileUrlFunction===this.tileUrlFunction?this.tileUrlFunction.bind(this):this.tileUrlFunction}getUrls(){return this.urls}handleTileChange(t){const e=t.target,i=kr(e),s=e.getState();let r;s==Jt.LOADING?(this.tileLoadingKeys_[i]=!0,r=Mc.TILELOADSTART):i in this.tileLoadingKeys_&&(delete this.tileLoadingKeys_[i],r=s==Jt.ERROR?Mc.TILELOADERROR:s==Jt.LOADED?Mc.TILELOADEND:void 0),r!=null&&this.dispatchEvent(new j4(r,e))}setTileLoadFunction(t){this.tileLoadFunction=t,this.changed()}setTileUrlFunction(t,e){this.tileUrlFunction=t,typeof e<"u"?this.setKey(e):this.changed()}setUrl(t){const e=l_(t);this.urls=e,this.setUrls(e)}setUrls(t){this.urls=t;const e=t.join(`
`);this.generateTileUrlFunction_?this.setTileUrlFunction(O4(t,this.tileGrid),e):this.setKey(e)}tileUrlFunction(t,e,i){}}class u_ extends Wf{constructor(t){super({attributions:t.attributions,cacheSize:t.cacheSize,projection:t.projection,state:t.state,tileGrid:t.tileGrid,tileLoadFunction:t.tileLoadFunction?t.tileLoadFunction:Z4,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:t.wrapX,transition:t.transition,interpolate:t.interpolate!==void 0?t.interpolate:!0,key:t.key,attributionsCollapsible:t.attributionsCollapsible,zDirection:t.zDirection}),this.crossOrigin=t.crossOrigin!==void 0?t.crossOrigin:null,this.referrerPolicy=t.referrerPolicy,this.tileClass=t.tileClass!==void 0?t.tileClass:kL,this.tileGridForProjection={},this.reprojectionErrorThreshold_=t.reprojectionErrorThreshold,this.renderReprojectionEdges_=!1}getGutterForProjection(t){return this.getProjection()&&t&&!Rr(this.getProjection(),t)?0:this.getGutter()}getGutter(){return 0}getKey(){let t=super.getKey();return this.getInterpolate()||(t+=":disable-interpolation"),t}getTileGridForProjection(t){const e=this.getProjection();if(this.tileGrid&&(!e||Rr(e,t)))return this.tileGrid;const i=kr(t);return i in this.tileGridForProjection||(this.tileGridForProjection[i]=h_(t)),this.tileGridForProjection[i]}createTile_(t,e,i,s,r,a){const o=[t,e,i],l=this.getTileCoordForTileUrlFunction(o,r),h=l?this.tileUrlFunction(l,s,r):void 0,u=new this.tileClass(o,h!==void 0?Jt.IDLE:Jt.EMPTY,h!==void 0?h:"",{crossOrigin:this.crossOrigin,referrerPolicy:this.referrerPolicy},this.tileLoadFunction,this.tileOptions);return u.key=a,u.addEventListener(zr.CHANGE,this.handleTileChange.bind(this)),u}getTile(t,e,i,s,r,a){const o=this.getProjection();if(!o||!r||Rr(o,r))return this.getTileInternal(t,e,i,s,o||r);const l=[t,e,i],h=this.getKey(),u=this.getTileGridForProjection(o),f=this.getTileGridForProjection(r),c=this.getTileCoordForTileUrlFunction(l,r),d=new V4(o,u,r,f,l,c,this.getTilePixelRatio(s),this.getGutter(),(m,_,g,p)=>this.getTileInternal(m,_,g,p,o,a),this.reprojectionErrorThreshold_,this.renderReprojectionEdges_,this.tileOptions);return d.key=h,d}getTileInternal(t,e,i,s,r,a){const o=this.getKey(),l=S4(this,o,t,e,i);if(a&&a.containsKey(l))return a.get(l);const h=this.createTile_(t,e,i,s,r,o);return a?.set(l,h),h}setRenderReprojectionEdges(t){this.renderReprojectionEdges_!=t&&(this.renderReprojectionEdges_=t,this.changed())}setTileGridForProjection(t,e){const i=He(t);if(i){const s=kr(i);s in this.tileGridForProjection||(this.tileGridForProjection[s]=e)}}}function Z4(n,t){if(kl){const e=n.getCrossOrigin();let i="same-origin",s="same-origin";e==="anonymous"||e===""?(i="cors",s="omit"):e==="use-credentials"&&(i="cors",s="include");const r={mode:i,credentials:s,referrerPolicy:n.getReferrerPolicy()};fetch(t,r).then(a=>{if(!a.ok)throw new Error(`HTTP ${a.status}`);return a.blob()}).then(a=>createImageBitmap(a)).then(a=>{const o=n.getImage();o.width=a.width,o.height=a.height,o.getContext("2d").drawImage(a,0,0),a.close?.(),o.dispatchEvent(new Event("load"))}).catch(()=>{n.getImage().dispatchEvent(new Event("error"))});return}n.getImage().src=t}class $4 extends u_{constructor(t){const e=t.requestEncoding!==void 0?t.requestEncoding:"KVP",i=t.tileGrid;let s=t.urls;s===void 0&&t.url!==void 0&&(s=l_(t.url)),super({attributions:t.attributions,attributionsCollapsible:t.attributionsCollapsible,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,interpolate:t.interpolate,projection:t.projection,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileClass:t.tileClass,tileGrid:i,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,urls:s,wrapX:t.wrapX!==void 0?t.wrapX:!1,transition:t.transition,zDirection:t.zDirection}),this.version_=t.version!==void 0?t.version:"1.0.0",this.format_=t.format!==void 0?t.format:"image/jpeg",this.dimensions_=t.dimensions!==void 0?t.dimensions:{},this.layer_=t.layer,this.matrixSet_=t.matrixSet,this.style_=t.style,this.requestEncoding_=e,this.setKey(this.getKeyForDimensions_()),s&&s.length>0&&(this.tileUrlFunction=ku(s.map(this.createFromWMTSTemplate.bind(this))))}setUrls(t){this.urls=t;const e=t.join(`
`);this.setTileUrlFunction(ku(t.map(this.createFromWMTSTemplate.bind(this))),e)}getDimensions(){return this.dimensions_}getFormat(){return this.format_}getLayer(){return this.layer_}getMatrixSet(){return this.matrixSet_}getRequestEncoding(){return this.requestEncoding_}getStyle(){return this.style_}getVersion(){return this.version_}getKeyForDimensions_(){const t=this.urls?this.urls.slice(0):[];for(const e in this.dimensions_)t.push(e+"-"+this.dimensions_[e]);return t.join("/")}updateDimensions(t){Object.assign(this.dimensions_,t),this.setKey(this.getKeyForDimensions_())}createFromWMTSTemplate(t){const e=this.requestEncoding_,i={layer:this.layer_,style:this.style_,tilematrixset:this.matrixSet_};e=="KVP"&&Object.assign(i,{Service:"WMTS",Request:"GetTile",Version:this.version_,Format:this.format_}),t=e=="KVP"?Vm(t,i):t.replace(/\{(\w+?)\}/g,function(a,o){return o.toLowerCase()in i?i[o.toLowerCase()]:a});const s=this.tileGrid,r=this.dimensions_;return(function(a,o,l){if(!a)return;const h={TileMatrix:s.getMatrixId(a[0]),TileCol:a[1],TileRow:a[2]};Object.assign(h,r);let u=t;return e=="KVP"?u=Vm(u,h):u=u.replace(/\{(\w+?)\}/g,function(f,c){return encodeURIComponent(h[c])}),u})}}function K4(n,t){const i=n.Contents.Layer?.find(function(I){return I.Identifier==t.layer});if(!i)return null;const s=n.Contents.TileMatrixSet;let r;i.TileMatrixSetLink.length>1?"projection"in t?r=i.TileMatrixSetLink.findIndex(function(I){const X=s.find(function(k){return k.Identifier==I.TileMatrixSet}).SupportedCRS,H=He(X),Y=He(t.projection);return H&&Y?Rr(H,Y):X==t.projection}):r=i.TileMatrixSetLink.findIndex(function(I){return I.TileMatrixSet==t.matrixSet}):r=0,r<0&&(r=0);const a=i.TileMatrixSetLink[r].TileMatrixSet,o=i.TileMatrixSetLink[r].TileMatrixSetLimits;let l=i.Format[0];"format"in t&&(l=t.format),r=i.Style.findIndex(function(I){return"style"in t?I.Title==t.style:I.isDefault}),r<0&&(r=0);const h=i.Style[r].Identifier,u={};"Dimension"in i&&i.Dimension.forEach(function(I,z,X){const H=I.Identifier;let Y=I.Default;Y===void 0&&(Y=I.Value[0]),u[H]=Y});const c=n.Contents.TileMatrixSet.find(function(I){return I.Identifier==a});let d;const m=c.SupportedCRS;if(m&&(d=He(m)),"projection"in t){const I=He(t.projection);I&&(!d||Rr(I,d))&&(d=I)}let _=!1;const g=d.getAxisOrientation().startsWith("ne");let p=c.TileMatrix[0],y={MinTileCol:0,MinTileRow:0,MaxTileCol:p.MatrixWidth-1,MaxTileRow:p.MatrixHeight-1};if(o){y=o[o.length-1];const I=c.TileMatrix.find(z=>z.Identifier===y.TileMatrix||c.Identifier+":"+z.Identifier===y.TileMatrix);I&&(p=I)}const x=i.BoundingBox?.find(I=>He(I.crs)&&Rr(He(I.crs),d)),v=p.ScaleDenominator*28e-5/d.getMetersPerUnit(),T=g?[p.TopLeftCorner[1],p.TopLeftCorner[0]]:p.TopLeftCorner,b=p.TileWidth*v,R=p.TileHeight*v;let L=x?.extent??c.BoundingBox;L&&g&&(L=[L[1],L[0],L[3],L[2]]);let S=[T[0]+b*y.MinTileCol,T[1]-R*(1+y.MaxTileRow),T[0]+b*(1+y.MaxTileCol),T[1]-R*y.MinTileRow];if(L!==void 0&&!__(L,S)){const I=i.WGS84BoundingBox,z=He("EPSG:4326").getExtent();if(S=L,I)_=I[0]===z[0]&&I[2]===z[2];else{const X=sv(L,c.SupportedCRS,"EPSG:4326");_=X[0]-1e-10<=z[0]&&X[2]+1e-10>=z[2]}}const E=R4(c,S,o),P=[];let F=t.requestEncoding;if(F=F!==void 0?F:"","OperationsMetadata"in n&&"GetTile"in n.OperationsMetadata){const I=n.OperationsMetadata.GetTile.DCP.HTTP.Get;for(let z=0,X=I.length;z<X;++z)if(I[z].Constraint){const Y=I[z].Constraint.find(function(k){return k.name=="GetEncoding"}).AllowedValues.Value;if(F===""&&(F=Y[0]),F==="KVP")Y.includes("KVP")&&P.push(I[z].href);else break}else I[z].href&&(F="KVP",P.push(I[z].href))}return P.length===0&&(F="REST",i.ResourceURL.forEach(function(I){I.resourceType==="tile"&&(l=I.format,P.push(I.template))})),{urls:P,layer:t.layer,matrixSet:a,format:l,projection:d,requestEncoding:F,tileGrid:E,style:h,dimensions:u,wrapX:_,crossOrigin:t.crossOrigin}}async function J4(n){const t=Pu.get(n);if(t!=null)return t;const e=new t4,s=await(await n_.fetch(n)).text(),r=e.read(s);return Pu.set(n,r),r}class Xf extends i_{constructor(t){super(t)}static async fromCapabilities(t,e){const i=await U0.enqueue({id:t,request:()=>J4(t)}),s={layer:e.layer};e.matrixSet!=null&&(s.matrixSet=e.matrixSet),e.imageFormat!=null&&(s.format=e.imageFormat,delete e.imageFormat);const r=K4(i,s);if(!r)throw new Error("layer was not found");return new Xf({source:new $4(r),...e})}}class Q4 extends u_{constructor(t){t=t||{};const e=t.projection!==void 0?t.projection:"EPSG:3857",i=t.tileGrid!==void 0?t.tileGrid:X4({extent:Hf(e),maxResolution:t.maxResolution,maxZoom:t.maxZoom,minZoom:t.minZoom,tileSize:t.tileSize});super({attributions:t.attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,interpolate:t.interpolate,projection:e,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileGrid:i,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:t.wrapX!==void 0?t.wrapX:!0,transition:t.transition,attributionsCollapsible:t.attributionsCollapsible,zDirection:t.zDirection}),this.gutter_=t.gutter!==void 0?t.gutter:0}getGutter(){return this.gutter_}}const tD="+proj=sterea +lat_0=52.15616055555555 +lon_0=5.38763888888889 +k=0.9999079 +x_0=155000 +y_0=463000 +ellps=bessel +towgs84=565.2369,50.0087,465.658,-0.406857330322,-0.350732676542,1.870347383606,-4.0812 +units=m +no_defs +type=crs",f_=Yt.register("EPSG:28992",tD),Ta=new Qe(f_,18e4,198e3,313e3,323e3),la=new ZC({target:"view",crs:f_,backgroundColor:15856888}),Vu=new gL({extent:Ta,subdivisionThreshold:1.2,subdivisionStrategy:aL,terrain:{segments:16}}),eD=Array.from({length:12},(n,t)=>3440.64/2**t),nD=[-285401.92,22598.08,595401.92,903401.92],iD=new uh({extent:nD,origin:[-285401.92,903401.92],resolutions:eD,tileSize:256});async function sD(){const n=new D3({name:"ahn5-terrain",extent:Ta,source:new i_({format:new ML,extent:Ta,source:new Q4({projection:"EPSG:28992",tileGrid:iD,crossOrigin:"anonymous",url:"./tiles/{z}/{x}/{y}.png"})})});await Vu.addLayer(n);const t=await Xf.fromCapabilities("https://service.pdok.nl/brt/achtergrondkaart/wmts/v2_0?SERVICE=WMTS&REQUEST=GetCapabilities",{layer:"standaard",matrixSet:"EPSG:28992",imageFormat:"image/png"}),e=new I3({name:"pdok-achtergrondkaart",extent:Ta,preloadImages:!0,source:t});await Vu.addLayer(e)}async function rD(){await la.add(Vu);const n=new OP(la.view.camera,la.domElement);n.enableDamping=!0,n.dampingFactor=.2,n.maxPolarAngle=Math.PI/2.25,la.view.setControls(n);const t=Ta.centerAsVector3();la.view.camera.position.set(t.x,t.y-900,1200),n.target.copy(t),n.update(),await sD()}rD().catch(console.error);
