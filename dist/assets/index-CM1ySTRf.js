(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const el="186",Od=0,Gl=1,Bd=2,Fs=1,kd=2,Us=3,Ti=0,rn=1,we=2,Zn=0,ss=1,Ge=2,Hl=3,Vl=4,zd=5,ji=100,Gd=101,Hd=102,Vd=103,Wd=104,Xd=200,qd=201,Yd=202,$d=203,xh=204,vh=205,Zd=206,Kd=207,Jd=208,Qd=209,jd=210,tu=211,eu=212,nu=213,iu=214,ro=0,ao=1,oo=2,zs=3,lo=4,co=5,ho=6,uo=7,Mh=0,su=1,ru=2,Bn=0,Sh=1,yh=2,wh=3,nl=4,bh=5,Eh=6,Th=7,Ah=300,Ai=301,os=302,ua=303,fa=304,ia=306,fo=1e3,$n=1001,po=1002,We=1003,au=1004,sr=1005,Ke=1006,pa=1007,wi=1008,pn=1009,Rh=1010,Ch=1011,Gs=1012,il=1013,zn=1014,Tn=1015,Gn=1016,sl=1017,rl=1018,Hs=1020,Ph=35902,Ih=35899,Lh=1021,Dh=1022,An=1023,Qn=1026,bi=1027,al=1028,ol=1029,Ri=1030,ll=1031,cl=1033,Fr=33776,Or=33777,Br=33778,kr=33779,mo=35840,go=35841,_o=35842,xo=35843,vo=36196,Mo=37492,So=37496,yo=37488,wo=37489,Vr=37490,bo=37491,Eo=37808,To=37809,Ao=37810,Ro=37811,Co=37812,Po=37813,Io=37814,Lo=37815,Do=37816,Uo=37817,No=37818,Fo=37819,Oo=37820,Bo=37821,ko=36492,zo=36494,Go=36495,Ho=36283,Vo=36284,Wr=36285,Wo=36286,ou=3200,Xo=0,lu=1,hi="",He="srgb",Xr="srgb-linear",qr="linear",ae="srgb",ma=7680,cu=519,hu=512,du=513,uu=514,hl=515,fu=516,pu=517,dl=518,mu=519,Uh=35044,rr=35048,Wl="300 es",Nn=2e3,Vs=2001;function gu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Yr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function _u(){const s=Yr("canvas");return s.style.display="block",s}const Xl={};function $r(...s){const t="THREE."+s.shift();console.log(t,...s)}function Nh(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ut(...s){s=Nh(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Qt(...s){s=Nh(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function rs(...s){const t=s.join(" ");t in Xl||(Xl[t]=!0,Ut(...s))}function xu(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const vu={[ro]:ao,[oo]:ho,[lo]:uo,[zs]:co,[ao]:ro,[ho]:oo,[uo]:lo,[co]:zs};class Pi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ql=1234567;const Os=Math.PI/180,Ws=180/Math.PI;function Kn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ye[s&255]+Ye[s>>8&255]+Ye[s>>16&255]+Ye[s>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]).toLowerCase()}function $t(s,t,e){return Math.max(t,Math.min(e,s))}function ul(s,t){return(s%t+t)%t}function Mu(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Su(s,t,e){return s!==t?(e-s)/(t-s):0}function Bs(s,t,e){return(1-e)*s+e*t}function yu(s,t,e,n){return Bs(s,t,1-Math.exp(-e*n))}function wu(s,t=1){return t-Math.abs(ul(s,t*2)-t)}function bu(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Eu(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Tu(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Au(s,t){return s+Math.random()*(t-s)}function Ru(s){return s*(.5-Math.random())}function Cu(s){s!==void 0&&(ql=s);let t=ql+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Pu(s){return s*Os}function Iu(s){return s*Ws}function Lu(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Du(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Uu(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Nu(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),u=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":s.set(o*h,c*d,c*u,o*l);break;case"YZY":s.set(c*u,o*h,c*d,o*l);break;case"ZXZ":s.set(c*d,c*u,o*h,o*l);break;case"XZX":s.set(o*h,c*g,c*f,o*l);break;case"YXY":s.set(c*f,o*h,c*g,o*l);break;case"ZYZ":s.set(c*g,c*f,o*h,o*l);break;default:Ut("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function En(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function oe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ks={DEG2RAD:Os,RAD2DEG:Ws,generateUUID:Kn,clamp:$t,euclideanModulo:ul,mapLinear:Mu,inverseLerp:Su,lerp:Bs,damp:yu,pingpong:wu,smoothstep:bu,smootherstep:Eu,randInt:Tu,randFloat:Au,randFloatSpread:Ru,seededRandom:Cu,degToRad:Pu,radToDeg:Iu,isPowerOfTwo:Lu,ceilPowerOfTwo:Du,floorPowerOfTwo:Uu,setQuaternionFromProperEuler:Nu,normalize:oe,denormalize:En},Tl=class Tl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Tl.prototype.isVector2=!0;let Nt=Tl;class ps{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3],u=r[a+0],f=r[a+1],g=r[a+2],M=r[a+3];if(d!==M||c!==u||l!==f||h!==g){let m=c*u+l*f+h*g+d*M;m<0&&(u=-u,f=-f,g=-g,M=-M,m=-m);let p=1-o;if(m<.9995){const y=Math.acos(m),T=Math.sin(y);p=Math.sin(p*y)/T,o=Math.sin(o*y)/T,c=c*p+u*o,l=l*p+f*o,h=h*p+g*o,d=d*p+M*o}else{c=c*p+u*o,l=l*p+f*o,h=h*p+g*o,d=d*p+M*o;const y=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=y,l*=y,h*=y,d*=y}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*d+c*f-l*u,t[e+1]=c*g+h*u+l*d-o*f,t[e+2]=l*g+h*f+o*u-c*d,t[e+3]=h*g-o*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),d=o(r/2),u=c(n/2),f=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:Ut("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Al=class Al{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Yl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Yl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),h=2*(o*e-r*i),d=2*(r*n-a*e);return this.x=e+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=i+c*d+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ga.copy(this).projectOnVector(t),this.sub(ga)}reflect(t){return this.sub(ga.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Al.prototype.isVector3=!0;let I=Al;const ga=new I,Yl=new ps,Rl=class Rl{constructor(t,e,n,i,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l)}set(t,e,n,i,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],M=i[0],m=i[3],p=i[6],y=i[1],T=i[4],x=i[7],w=i[2],E=i[5],R=i[8];return r[0]=a*M+o*y+c*w,r[3]=a*m+o*T+c*E,r[6]=a*p+o*x+c*R,r[1]=l*M+h*y+d*w,r[4]=l*m+h*T+d*E,r[7]=l*p+h*x+d*R,r[2]=u*M+f*y+g*w,r[5]=u*m+f*T+g*E,r[8]=u*p+f*x+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,u=o*c-h*r,f=l*r-a*c,g=e*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return t[0]=d*M,t[1]=(i*l-h*n)*M,t[2]=(o*n-i*a)*M,t[3]=u*M,t[4]=(h*e-i*c)*M,t[5]=(i*r-o*e)*M,t[6]=f*M,t[7]=(n*c-l*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return rs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(_a.makeScale(t,e)),this}rotate(t){return rs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(_a.makeRotation(-t)),this}translate(t,e){return rs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(_a.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Rl.prototype.isMatrix3=!0;let Ot=Rl;const _a=new Ot,$l=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zl=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fu(){const s={enabled:!0,workingColorSpace:Xr,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ae&&(i.r=Jn(i.r),i.g=Jn(i.g),i.b=Jn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ae&&(i.r=as(i.r),i.g=as(i.g),i.b=as(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===hi?qr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return rs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return rs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Xr]:{primaries:t,whitePoint:n,transfer:qr,toXYZ:$l,fromXYZ:Zl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:He},outputColorSpaceConfig:{drawingBufferColorSpace:He}},[He]:{primaries:t,whitePoint:n,transfer:ae,toXYZ:$l,fromXYZ:Zl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:He}}}),s}const Zt=Fu();function Jn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function as(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ui;class Ou{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ui===void 0&&(Ui=Yr("canvas")),Ui.width=t.width,Ui.height=t.height;const i=Ui.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Ui}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Yr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Jn(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Jn(e[n]/255)*255):e[n]=Jn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Bu=0;class fl{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=Kn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(xa(i[a].image)):r.push(xa(i[a]))}else r=xa(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function xa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ou.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ut("Texture: Unable to serialize Texture."),{})}let ku=0;const va=new I;class Je extends Pi{constructor(t=Je.DEFAULT_IMAGE,e=Je.DEFAULT_MAPPING,n=$n,i=$n,r=Ke,a=wi,o=An,c=pn,l=Je.DEFAULT_ANISOTROPY,h=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=Kn(),this.name="",this.source=new fl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(va).x}get height(){return this.source.getSize(va).y}get depth(){return this.source.getSize(va).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Ut(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Ut(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ah)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fo:t.x=t.x-Math.floor(t.x);break;case $n:t.x=t.x<0?0:1;break;case po:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fo:t.y=t.y-Math.floor(t.y);break;case $n:t.y=t.y<0?0:1;break;case po:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=Ah;Je.DEFAULT_ANISOTROPY=1;const Cl=class Cl{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],M=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+M)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(l+1)/2,x=(f+1)/2,w=(p+1)/2,E=(h+u)/4,R=(d+M)/4,_=(g+m)/4;return T>x&&T>w?T<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=E/n,r=R/n):x>w?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=E/i,r=_/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=R/r,i=_/r),this.set(n,i,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(d-M)*(d-M)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-M)/y,this.z=(u-h)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Cl.prototype.isVector4=!0;let Ee=Cl;class zu extends Pi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e),this.textures=[];const i={width:t,height:e,depth:n.depth},r=new Je(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Ke,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new fl(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rn extends zu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Fh extends Je{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=We,this.minFilter=We,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Gu extends Je{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=We,this.minFilter=We,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const na=class na{constructor(t,e,n,i,r,a,o,c,l,h,d,u,f,g,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l,h,d,u,f,g,M,m)}set(t,e,n,i,r,a,o,c,l,h,d,u,f,g,M,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new na().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,i=1/Ni.setFromMatrixColumn(t,0).length(),r=1/Ni.setFromMatrixColumn(t,1).length(),a=1/Ni.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=a*h,f=a*d,g=o*h,M=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=u-M*l,e[9]=-o*c,e[2]=M-u*l,e[6]=g+f*l,e[10]=a*c}else if(t.order==="YXZ"){const u=c*h,f=c*d,g=l*h,M=l*d;e[0]=u+M*o,e[4]=g*o-f,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=M+u*o,e[10]=a*c}else if(t.order==="ZXY"){const u=c*h,f=c*d,g=l*h,M=l*d;e[0]=u-M*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=M-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const u=a*h,f=a*d,g=o*h,M=o*d;e[0]=c*h,e[4]=g*l-f,e[8]=u*l+M,e[1]=c*d,e[5]=M*l+u,e[9]=f*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const u=a*c,f=a*l,g=o*c,M=o*l;e[0]=c*h,e[4]=M-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*d+g,e[10]=u-M*d}else if(t.order==="XZY"){const u=a*c,f=a*l,g=o*c,M=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+M,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=M*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hu,t,Vu)}lookAt(t,e,n){const i=this.elements;return hn.subVectors(t,e),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),ni.crossVectors(n,hn),ni.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),ni.crossVectors(n,hn)),ni.normalize(),ar.crossVectors(hn,ni),i[0]=ni.x,i[4]=ar.x,i[8]=hn.x,i[1]=ni.y,i[5]=ar.y,i[9]=hn.y,i[2]=ni.z,i[6]=ar.z,i[10]=hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],M=n[6],m=n[10],p=n[14],y=n[3],T=n[7],x=n[11],w=n[15],E=i[0],R=i[4],_=i[8],b=i[12],C=i[1],P=i[5],U=i[9],G=i[13],D=i[2],B=i[6],$=i[10],W=i[14],nt=i[3],Y=i[7],tt=i[11],it=i[15];return r[0]=a*E+o*C+c*D+l*nt,r[4]=a*R+o*P+c*B+l*Y,r[8]=a*_+o*U+c*$+l*tt,r[12]=a*b+o*G+c*W+l*it,r[1]=h*E+d*C+u*D+f*nt,r[5]=h*R+d*P+u*B+f*Y,r[9]=h*_+d*U+u*$+f*tt,r[13]=h*b+d*G+u*W+f*it,r[2]=g*E+M*C+m*D+p*nt,r[6]=g*R+M*P+m*B+p*Y,r[10]=g*_+M*U+m*$+p*tt,r[14]=g*b+M*G+m*W+p*it,r[3]=y*E+T*C+x*D+w*nt,r[7]=y*R+T*P+x*B+w*Y,r[11]=y*_+T*U+x*$+w*tt,r[15]=y*b+T*G+x*W+w*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],M=t[7],m=t[11],p=t[15],y=c*f-l*u,T=o*f-l*d,x=o*u-c*d,w=a*f-l*h,E=a*u-c*h,R=a*d-o*h;return e*(M*y-m*T+p*x)-n*(g*y-m*w+p*E)+i*(g*T-M*w+p*R)-r*(g*x-M*E+m*R)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-n*(r*h-o*c)+i*(r*l-a*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],M=t[13],m=t[14],p=t[15],y=e*o-n*a,T=e*c-i*a,x=e*l-r*a,w=n*c-i*o,E=n*l-r*o,R=i*l-r*c,_=h*M-d*g,b=h*m-u*g,C=h*p-f*g,P=d*m-u*M,U=d*p-f*M,G=u*p-f*m,D=y*G-T*U+x*P+w*C-E*b+R*_;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/D;return t[0]=(o*G-c*U+l*P)*B,t[1]=(i*U-n*G-r*P)*B,t[2]=(M*R-m*E+p*w)*B,t[3]=(u*E-d*R-f*w)*B,t[4]=(c*C-a*G-l*b)*B,t[5]=(e*G-i*C+r*b)*B,t[6]=(m*x-g*R-p*T)*B,t[7]=(h*R-u*x+f*T)*B,t[8]=(a*U-o*C+l*_)*B,t[9]=(n*C-e*U-r*_)*B,t[10]=(g*E-M*x+p*y)*B,t[11]=(d*x-h*E-f*y)*B,t[12]=(o*b-a*P-c*_)*B,t[13]=(e*P-n*b+i*_)*B,t[14]=(M*T-g*w-m*y)*B,t[15]=(h*w-d*T+u*y)*B,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,d=o+o,u=r*l,f=r*h,g=r*d,M=a*h,m=a*d,p=o*d,y=c*l,T=c*h,x=c*d,w=n.x,E=n.y,R=n.z;return i[0]=(1-(M+p))*w,i[1]=(f+x)*w,i[2]=(g-T)*w,i[3]=0,i[4]=(f-x)*E,i[5]=(1-(u+p))*E,i[6]=(m+y)*E,i[7]=0,i[8]=(g+T)*R,i[9]=(m-y)*R,i[10]=(1-(u+M))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ni.set(i[0],i[1],i[2]).length();const o=Ni.set(i[4],i[5],i[6]).length(),c=Ni.set(i[8],i[9],i[10]).length();r<0&&(a=-a),Sn.copy(this);const l=1/a,h=1/o,d=1/c;return Sn.elements[0]*=l,Sn.elements[1]*=l,Sn.elements[2]*=l,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=d,Sn.elements[9]*=d,Sn.elements[10]*=d,e.setFromRotationMatrix(Sn),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,i,r,a,o=Nn,c=!1){const l=this.elements,h=2*r/(e-t),d=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let g,M;if(c)g=r/(a-r),M=a*r/(a-r);else if(o===Nn)g=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===Vs)g=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Nn,c=!1){const l=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i);let g,M;if(c)g=1/(a-r),M=a/(a-r);else if(o===Nn)g=-2/(a-r),M=-(a+r)/(a-r);else if(o===Vs)g=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};na.prototype.isMatrix4=!0;let le=na;const Ni=new I,Sn=new le,Hu=new I(0,0,0),Vu=new I(1,1,1),ni=new I,ar=new I,hn=new I,Kl=new le,Jl=new ps;class di{constructor(t=0,e=0,n=0,i=di.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin($t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin($t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-$t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin($t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-$t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Kl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Jl.setFromEuler(this),this.setFromQuaternion(Jl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}di.DEFAULT_ORDER="XYZ";class pl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Wu=0;const Ql=new I,Fi=new ps,Hn=new le,or=new I,Ss=new I,Xu=new I,qu=new ps,jl=new I(1,0,0),tc=new I(0,1,0),ec=new I(0,0,1),nc={type:"added"},Yu={type:"removed"},Oi={type:"childadded",child:null},Ma={type:"childremoved",child:null};class Ce extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ce.DEFAULT_UP.clone();const t=new I,e=new di,n=new ps,i=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new le},normalMatrix:{value:new Ot}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=Ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.premultiply(Fi),this}rotateX(t){return this.rotateOnAxis(jl,t)}rotateY(t){return this.rotateOnAxis(tc,t)}rotateZ(t){return this.rotateOnAxis(ec,t)}translateOnAxis(t,e){return Ql.copy(t).applyQuaternion(this.quaternion),this.position.add(Ql.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(jl,t)}translateY(t){return this.translateOnAxis(tc,t)}translateZ(t){return this.translateOnAxis(ec,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?or.copy(t):or.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Ss,or,this.up):Hn.lookAt(or,Ss,this.up),this.quaternion.setFromRotationMatrix(Hn),i&&(Hn.extractRotation(i.matrixWorld),Fi.setFromRotationMatrix(Hn),this.quaternion.premultiply(Fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nc),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null):Qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Yu),Ma.child=t,this.dispatchEvent(Ma),Ma.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nc),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,t,Xu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,qu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ce.DEFAULT_UP=new I(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Jt extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $u={type:"move"};class Sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const M of t.hand.values()){const m=e.getJointPose(M,n),p=this._getHandJoint(l,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($u)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Jt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Oh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},lr={h:0,s:0,l:0};function ya(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Dt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=He){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Zt.workingColorSpace){if(t=ul(t,1),e=$t(e,0,1),n=$t(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ya(a,r,t+1/3),this.g=ya(a,r,t),this.b=ya(a,r,t-1/3)}return Zt.colorSpaceToWorking(this,i),this}setStyle(t,e=He){function n(r){r!==void 0&&parseFloat(r)<1&&Ut("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ut("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ut("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=He){const n=Oh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ut("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Jn(t.r),this.g=Jn(t.g),this.b=Jn(t.b),this}copyLinearToSRGB(t){return this.r=as(t.r),this.g=as(t.g),this.b=as(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=He){return Zt.workingToColorSpace($e.copy(this),t),Math.round($t($e.r*255,0,255))*65536+Math.round($t($e.g*255,0,255))*256+Math.round($t($e.b*255,0,255))}getHexString(t=He){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.workingToColorSpace($e.copy(this),e);const n=$e.r,i=$e.g,r=$e.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.workingToColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=He){Zt.workingToColorSpace($e.copy(this),t);const e=$e.r,n=$e.g,i=$e.b;return t!==He?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ii),this.setHSL(ii.h+t,ii.s+e,ii.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ii),t.getHSL(lr);const n=Bs(ii.h,lr.h,e),i=Bs(ii.s,lr.s,e),r=Bs(ii.l,lr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $e=new Dt;Dt.NAMES=Oh;class ml{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Dt(t),this.near=e,this.far=n}clone(){return new ml(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Zu extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new di,this.environmentIntensity=1,this.environmentRotation=new di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const yn=new I,Vn=new I,wa=new I,Wn=new I,Bi=new I,ki=new I,ic=new I,ba=new I,Ea=new I,Ta=new I,Aa=new Ee,Ra=new Ee,Ca=new Ee;class vn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),yn.subVectors(t,e),i.cross(yn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){yn.subVectors(i,e),Vn.subVectors(n,e),wa.subVectors(t,e);const a=yn.dot(yn),o=yn.dot(Vn),c=yn.dot(wa),l=Vn.dot(Vn),h=Vn.dot(wa),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(l*c-o*h)*u,g=(a*h-o*c)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(t,e,n,i,r,a,o,c){return this.getBarycoord(t,e,n,i,Wn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Wn.x),c.addScaledVector(a,Wn.y),c.addScaledVector(o,Wn.z),c)}static getInterpolatedAttribute(t,e,n,i,r,a){return Aa.setScalar(0),Ra.setScalar(0),Ca.setScalar(0),Aa.fromBufferAttribute(t,e),Ra.fromBufferAttribute(t,n),Ca.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Aa,r.x),a.addScaledVector(Ra,r.y),a.addScaledVector(Ca,r.z),a}static isFrontFacing(t,e,n,i){return yn.subVectors(n,e),Vn.subVectors(t,e),yn.cross(Vn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),yn.cross(Vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return vn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return vn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return vn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return vn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return vn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;Bi.subVectors(i,n),ki.subVectors(r,n),ba.subVectors(t,n);const c=Bi.dot(ba),l=ki.dot(ba);if(c<=0&&l<=0)return e.copy(n);Ea.subVectors(t,i);const h=Bi.dot(Ea),d=ki.dot(Ea);if(h>=0&&d<=h)return e.copy(i);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Bi,a);Ta.subVectors(t,r);const f=Bi.dot(Ta),g=ki.dot(Ta);if(g>=0&&f<=g)return e.copy(r);const M=f*l-c*g;if(M<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(ki,o);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return ic.subVectors(r,i),o=(d-h)/(d-h+(f-g)),e.copy(i).addScaledVector(ic,o);const p=1/(m+M+u);return a=M*p,o=u*p,e.copy(n).addScaledVector(Bi,a).addScaledVector(ki,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ii{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,wn):wn.fromBufferAttribute(r,a),wn.applyMatrix4(t.matrixWorld),this.expandByPoint(wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),cr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),cr.copy(n.boundingBox)),cr.applyMatrix4(t.matrixWorld),this.union(cr)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wn),wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ys),hr.subVectors(this.max,ys),zi.subVectors(t.a,ys),Gi.subVectors(t.b,ys),Hi.subVectors(t.c,ys),si.subVectors(Gi,zi),ri.subVectors(Hi,Gi),_i.subVectors(zi,Hi);let e=[0,-si.z,si.y,0,-ri.z,ri.y,0,-_i.z,_i.y,si.z,0,-si.x,ri.z,0,-ri.x,_i.z,0,-_i.x,-si.y,si.x,0,-ri.y,ri.x,0,-_i.y,_i.x,0];return!Pa(e,zi,Gi,Hi,hr)||(e=[1,0,0,0,1,0,0,0,1],!Pa(e,zi,Gi,Hi,hr))?!1:(dr.crossVectors(si,ri),e=[dr.x,dr.y,dr.z],Pa(e,zi,Gi,Hi,hr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Xn=[new I,new I,new I,new I,new I,new I,new I,new I],wn=new I,cr=new Ii,zi=new I,Gi=new I,Hi=new I,si=new I,ri=new I,_i=new I,ys=new I,hr=new I,dr=new I,xi=new I;function Pa(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){xi.fromArray(s,r);const o=i.x*Math.abs(xi.x)+i.y*Math.abs(xi.y)+i.z*Math.abs(xi.z),c=t.dot(xi),l=e.dot(xi),h=n.dot(xi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Le=new I,ur=new Nt;let Ku=0;class Ue extends Pi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ku++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Uh,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ur.fromBufferAttribute(this,e),ur.applyMatrix3(t),this.setXY(e,ur.x,ur.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=En(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=En(e,this.array)),e}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=En(e,this.array)),e}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=En(e,this.array)),e}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=En(e,this.array)),e}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),i=oe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),i=oe(i,this.array),r=oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Bh extends Ue{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class kh extends Ue{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class he extends Ue{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Ju=new Ii,ws=new I,Ia=new I;class pi{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ju.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ws.subVectors(t,this.center);const e=ws.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ws,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ia.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ws.copy(t.center).add(Ia)),this.expandByPoint(ws.copy(t.center).sub(Ia))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Qu=0;const gn=new le,La=new Ce,Vi=new I,dn=new Ii,bs=new Ii,ze=new I;class ve extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gu(t)?kh:Bh)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ot().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return gn.makeRotationFromQuaternion(t),this.applyMatrix4(gn),this}rotateX(t){return gn.makeRotationX(t),this.applyMatrix4(gn),this}rotateY(t){return gn.makeRotationY(t),this.applyMatrix4(gn),this}rotateZ(t){return gn.makeRotationZ(t),this.applyMatrix4(gn),this}translate(t,e,n){return gn.makeTranslation(t,e,n),this.applyMatrix4(gn),this}scale(t,e,n){return gn.makeScale(t,e,n),this.applyMatrix4(gn),this}lookAt(t){return La.lookAt(t),La.updateMatrix(),this.applyMatrix4(La.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new he(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(dn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];bs.setFromBufferAttribute(o),this.morphTargetsRelative?(ze.addVectors(dn.min,bs.min),dn.expandByPoint(ze),ze.addVectors(dn.max,bs.max),dn.expandByPoint(ze)):(dn.expandByPoint(bs.min),dn.expandByPoint(bs.max))}dn.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)ze.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ze));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)ze.fromBufferAttribute(o,l),c&&(Vi.fromBufferAttribute(t,l),ze.add(Vi)),i=Math.max(i,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ue(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let _=0;_<n.count;_++)o[_]=new I,c[_]=new I;const l=new I,h=new I,d=new I,u=new Nt,f=new Nt,g=new Nt,M=new I,m=new I;function p(_,b,C){l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,b),d.fromBufferAttribute(n,C),u.fromBufferAttribute(r,_),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,C),h.sub(l),d.sub(l),f.sub(u),g.sub(u);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(M.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(P),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),o[_].add(M),o[b].add(M),o[C].add(M),c[_].add(m),c[b].add(m),c[C].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let _=0,b=y.length;_<b;++_){const C=y[_],P=C.start,U=C.count;for(let G=P,D=P+U;G<D;G+=3)p(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const T=new I,x=new I,w=new I,E=new I;function R(_){w.fromBufferAttribute(i,_),E.copy(w);const b=o[_];T.copy(b),T.sub(w.multiplyScalar(w.dot(b))).normalize(),x.crossVectors(E,b);const P=x.dot(c[_])<0?-1:1;a.setXYZW(_,T.x,T.y,T.z,P)}for(let _=0,b=y.length;_<b;++_){const C=y[_],P=C.start,U=C.count;for(let G=P,D=P+U;G<D;G+=3)R(t.getX(G+0)),R(t.getX(G+1)),R(t.getX(G+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ue(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new I,r=new I,a=new I,o=new I,c=new I,l=new I,h=new I,d=new I;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),M=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h);let f=0,g=0;for(let M=0,m=c.length;M<m;M++){o.isInterleavedBufferAttribute?f=c[M]*o.data.stride+o.offset:f=c[M]*h;for(let p=0;p<h;p++)u[g++]=l[f++]}return new Ue(u,h,d)}if(this.index===null)return Ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ve,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){const u=l[h],f=t(u,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ju{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Uh,this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const je=new I;class Zr{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=En(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=oe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=En(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=En(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=En(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=En(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),i=oe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),i=oe(i,this.array),r=oe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){$r("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Ue(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Zr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){$r("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Da=new I,tf=new I,ef=new Ot;class li{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Da.subVectors(n,e).cross(tf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const i=t.delta(Da),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ef.getNormalMatrix(t),i=this.coplanarPoint(Da).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let nf=0;class mi extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=Kn(),this.name="",this.type="Material",this.blending=ss,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xh,this.blendDst=vh,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ma,this.stencilZFail=ma,this.stencilZPass=ma,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Ut(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Ut(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Dt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new li().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Nt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Nt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Yn extends mi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Wi;const Es=new I,Xi=new I,qi=new I,Yi=new Nt,Ts=new Nt,zh=new le,fr=new I,As=new I,pr=new I,sc=new Nt,Ua=new Nt,rc=new Nt;class ci extends Ce{constructor(t=new Yn){if(super(),this.isSprite=!0,this.type="Sprite",Wi===void 0){Wi=new ve;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ju(e,5);Wi.setIndex([0,1,2,0,2,3]),Wi.setAttribute("position",new Zr(n,3,0,!1)),Wi.setAttribute("uv",new Zr(n,2,3,!1))}this.geometry=Wi,this.material=t,this.center=new Nt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Qt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xi.setFromMatrixScale(this.matrixWorld),zh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),qi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xi.multiplyScalar(-qi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;mr(fr.set(-.5,-.5,0),qi,a,Xi,i,r),mr(As.set(.5,-.5,0),qi,a,Xi,i,r),mr(pr.set(.5,.5,0),qi,a,Xi,i,r),sc.set(0,0),Ua.set(1,0),rc.set(1,1);let o=t.ray.intersectTriangle(fr,As,pr,!1,Es);if(o===null&&(mr(As.set(-.5,.5,0),qi,a,Xi,i,r),Ua.set(0,1),o=t.ray.intersectTriangle(fr,pr,As,!1,Es),o===null))return;const c=t.ray.origin.distanceTo(Es);c<t.near||c>t.far||e.push({distance:c,point:Es.clone(),uv:vn.getInterpolation(Es,fr,As,pr,sc,Ua,rc,new Nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function mr(s,t,e,n,i,r){Yi.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Ts.x=r*Yi.x-i*Yi.y,Ts.y=i*Yi.x+r*Yi.y):Ts.copy(Yi),s.copy(t),s.x+=Ts.x,s.y+=Ts.y,s.applyMatrix4(zh)}const qn=new I,Na=new I,gr=new I,_r=new I;class sa{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(qn.copy(this.origin).addScaledVector(this.direction,e),qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Na.copy(t).add(e).multiplyScalar(.5),gr.copy(e).sub(t).normalize(),_r.copy(this.origin).sub(Na);const r=t.distanceTo(e)*.5,a=-this.direction.dot(gr),o=_r.dot(this.direction),c=-_r.dot(gr),l=_r.lengthSq(),h=Math.abs(1-a*a);let d,u,f,g;if(h>0)if(d=a*c-o,u=a*o-c,g=r*h,d>=0)if(u>=-g)if(u<=g){const M=1/h;d*=M,u*=M,f=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Na).addScaledVector(gr,u),f}intersectSphere(t,e){if(t.radius<0)return null;qn.subVectors(t.center,this.origin);const n=qn.dot(this.direction),i=qn.dot(qn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,qn)!==null}intersectTriangle(t,e,n,i,r){const a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,g=e.x-a.x,M=e.y-a.y,m=e.z-a.z,p=n.x-a.x,y=n.y-a.y,T=n.z-a.z,x=Math.abs(c),w=Math.abs(l),E=Math.abs(h);let R,_,b,C,P,U,G,D,B,$,W,nt;if(x>=w&&x>=E?(b=c,U=d,B=g,nt=p,c>=0?(R=l,_=h,C=u,P=f,G=M,D=m,$=y,W=T):(R=h,_=l,C=f,P=u,G=m,D=M,$=T,W=y)):w>=E?(b=l,U=u,B=M,nt=y,l>=0?(R=h,_=c,C=f,P=d,G=m,D=g,$=T,W=p):(R=c,_=h,C=d,P=f,G=g,D=m,$=p,W=T)):(b=h,U=f,B=m,nt=T,h>=0?(R=c,_=l,C=d,P=u,G=g,D=M,$=p,W=y):(R=l,_=c,C=u,P=d,G=M,D=g,$=y,W=p)),b===0)return null;const Y=R/b,tt=_/b,it=1/b,It=C-Y*U,Rt=P-tt*U,ue=G-Y*B,Kt=D-tt*B,ne=$-Y*nt,Z=W-tt*nt,j=ne*Kt-Z*ue,Mt=It*Z-Rt*ne,Ft=ue*Rt-Kt*It;if(i){if(j<0||Mt<0||Ft<0)return null}else if((j<0||Mt<0||Ft<0)&&(j>0||Mt>0||Ft>0))return null;const xt=j+Mt+Ft;if(xt===0)return null;const Vt=it*(j*U+Mt*B+Ft*nt);return(xt>0?Vt<0:Vt>0)?null:this.at(Vt/xt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ei extends mi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=Mh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ac=new le,vi=new sa,xr=new pi,oc=new I,vr=new I,Mr=new I,Sr=new I,Fa=new I,yr=new I,lc=new I,wr=new I;class X extends Ce{constructor(t=new ve,e=new Ei){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){yr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],d=r[c];h!==0&&(Fa.fromBufferAttribute(d,t),a?yr.addScaledVector(Fa,h):yr.addScaledVector(Fa.sub(e),h))}e.add(yr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere),xr.applyMatrix4(r),vi.copy(t.ray).recast(t.near),!(xr.containsPoint(vi.origin)===!1&&(vi.intersectSphere(xr,oc)===null||vi.origin.distanceToSquared(oc)>(t.far-t.near)**2))&&(ac.copy(r).invert(),vi.copy(t.ray).applyMatrix4(ac),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,vi)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=u.length;g<M;g++){const m=u[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),T=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,w=T;x<w;x+=3){const E=o.getX(x),R=o.getX(x+1),_=o.getX(x+2);i=br(this,p,t,n,l,h,d,E,R,_),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),M=Math.min(o.count,f.start+f.count);for(let m=g,p=M;m<p;m+=3){const y=o.getX(m),T=o.getX(m+1),x=o.getX(m+2);i=br(this,a,t,n,l,h,d,y,T,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,M=u.length;g<M;g++){const m=u[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),T=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,w=T;x<w;x+=3){const E=x,R=x+1,_=x+2;i=br(this,p,t,n,l,h,d,E,R,_),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),M=Math.min(c.count,f.start+f.count);for(let m=g,p=M;m<p;m+=3){const y=m,T=m+1,x=m+2;i=br(this,a,t,n,l,h,d,y,T,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function sf(s,t,e,n,i,r,a,o){let c;if(t.side===rn?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,t.side===Ti,o),c===null)return null;wr.copy(o),wr.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(wr);return l<e.near||l>e.far?null:{distance:l,point:wr.clone(),object:s}}function br(s,t,e,n,i,r,a,o,c,l){s.getVertexPosition(o,vr),s.getVertexPosition(c,Mr),s.getVertexPosition(l,Sr);const h=sf(s,t,e,n,vr,Mr,Sr,lc);if(h){const d=new I;vn.getBarycoord(lc,vr,Mr,Sr,d),i&&(h.uv=vn.getInterpolatedAttribute(i,o,c,l,d,new Nt)),r&&(h.uv1=vn.getInterpolatedAttribute(r,o,c,l,d,new Nt)),a&&(h.normal=vn.getInterpolatedAttribute(a,o,c,l,d,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new I,materialIndex:0};vn.getNormal(vr,Mr,Sr,u.normal),h.face=u,h.barycoord=d}return h}class Gh extends Je{constructor(t=null,e=1,n=1,i,r,a,o,c,l=We,h=We,d,u){super(null,a,o,c,l,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cc extends Ue{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const $i=new le,hc=new le,Er=[],dc=new Ii,rf=new le,Rs=new X,Cs=new pi;class af extends X{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new cc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,rf)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ii),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$i),dc.copy(t.boundingBox).applyMatrix4($i),this.boundingBox.union(dc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new pi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$i),Cs.copy(t.boundingSphere).applyMatrix4($i),this.boundingSphere.union(Cs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Rs.geometry=this.geometry,Rs.material=this.material,Rs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cs.copy(this.boundingSphere),Cs.applyMatrix4(n),t.ray.intersectsSphere(Cs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,$i),hc.multiplyMatrices(n,$i),Rs.matrixWorld=hc,Rs.raycast(t,Er);for(let a=0,o=Er.length;a<o;a++){const c=Er[a];c.instanceId=r,c.object=this,e.push(c)}Er.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new cc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Gh(new Float32Array(i*this.count),i,this.count,al,Tn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*t;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Mi=new pi,of=new Nt(.5,.5),Tr=new I;class gl{constructor(t=new li,e=new li,n=new li,i=new li,r=new li,a=new li){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Nn,n=!1){const i=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],M=r[9],m=r[10],p=r[11],y=r[12],T=r[13],x=r[14],w=r[15];if(i[0].setComponents(l-a,f-h,p-g,w-y).normalize(),i[1].setComponents(l+a,f+h,p+g,w+y).normalize(),i[2].setComponents(l+o,f+d,p+M,w+T).normalize(),i[3].setComponents(l-o,f-d,p-M,w-T).normalize(),n)i[4].setComponents(c,u,m,x).normalize(),i[5].setComponents(l-c,f-u,p-m,w-x).normalize();else if(i[4].setComponents(l-c,f-u,p-m,w-x).normalize(),e===Nn)i[5].setComponents(l+c,f+u,p+m,w+x).normalize();else if(e===Vs)i[5].setComponents(c,u,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(t){Mi.center.set(0,0,0);const e=of.distanceTo(t.center);return Mi.radius=.7071067811865476+e,Mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Tr.x=i.normal.x>0?t.max.x:t.min.x,Tr.y=i.normal.y>0?t.max.y:t.min.y,Tr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Tr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Hh extends mi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Kr=new I,Jr=new I,uc=new le,Ps=new sa,Ar=new pi,Oa=new I,fc=new I;class lf extends Ce{constructor(t=new ve,e=new Hh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Kr.fromBufferAttribute(e,i-1),Jr.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Kr.distanceTo(Jr);t.setAttribute("lineDistance",new he(n,1))}else Ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere),Ar.applyMatrix4(i),Ar.radius+=r,t.ray.intersectsSphere(Ar)===!1)return;uc.copy(i).invert(),Ps.copy(t.ray).applyMatrix4(uc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let M=f,m=g-1;M<m;M+=l){const p=h.getX(M),y=h.getX(M+1),T=Rr(this,t,Ps,c,p,y,M);T&&e.push(T)}if(this.isLineLoop){const M=h.getX(g-1),m=h.getX(f),p=Rr(this,t,Ps,c,M,m,g-1);p&&e.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let M=f,m=g-1;M<m;M+=l){const p=Rr(this,t,Ps,c,M,M+1,M);p&&e.push(p)}if(this.isLineLoop){const M=Rr(this,t,Ps,c,g-1,f,g-1);M&&e.push(M)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Rr(s,t,e,n,i,r,a){const o=s.geometry.attributes.position;if(Kr.fromBufferAttribute(o,i),Jr.fromBufferAttribute(o,r),e.distanceSqToSegment(Kr,Jr,Oa,fc)>n)return;Oa.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Oa);if(!(l<t.near||l>t.far))return{distance:l,point:fc.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}class _l extends mi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const pc=new le,qo=new sa,Cr=new pi,Pr=new I;class ra extends Ce{constructor(t=new ve,e=new _l){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(i),Cr.radius+=r,t.ray.intersectsSphere(Cr)===!1)return;pc.copy(i).invert(),qo.copy(t.ray).applyMatrix4(pc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){const u=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=u,M=f;g<M;g++){const m=l.getX(g);Pr.fromBufferAttribute(d,m),mc(Pr,m,c,i,t,e,this)}}else{const u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,M=f;g<M;g++)Pr.fromBufferAttribute(d,g),mc(Pr,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function mc(s,t,e,n,i,r,a){const o=qo.distanceSqToPoint(s);if(o<e){const c=new I;qo.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Vh extends Je{constructor(t=[],e=Ai,n,i,r,a,o,c,l,h){super(t,e,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class $s extends Je{constructor(t,e,n,i,r,a,o,c,l){super(t,e,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xs extends Je{constructor(t,e,n=zn,i,r,a,o=We,c=We,l,h=Qn,d=1){if(h!==Qn&&h!==bi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new fl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class cf extends Xs{constructor(t,e=zn,n=Ai,i,r,a=We,o=We,c,l=Qn){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Wh extends Je{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class sn extends ve{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new he(l,3)),this.setAttribute("normal",new he(h,3)),this.setAttribute("uv",new he(d,2));function g(M,m,p,y,T,x,w,E,R,_,b){const C=x/R,P=w/_,U=x/2,G=w/2,D=E/2,B=R+1,$=_+1;let W=0,nt=0;const Y=new I;for(let tt=0;tt<$;tt++){const it=tt*P-G;for(let It=0;It<B;It++){const Rt=It*C-U;Y[M]=Rt*y,Y[m]=it*T,Y[p]=D,l.push(Y.x,Y.y,Y.z),Y[M]=0,Y[m]=0,Y[p]=E>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(It/R),d.push(1-tt/_),W+=1}}for(let tt=0;tt<_;tt++)for(let it=0;it<R;it++){const It=u+it+B*tt,Rt=u+it+B*(tt+1),ue=u+(it+1)+B*(tt+1),Kt=u+(it+1)+B*tt;c.push(It,Rt,Kt),c.push(Rt,ue,Kt),nt+=6}o.addGroup(f,nt,b),f+=nt,u+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class kt extends ve{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],u=[],f=[];let g=0;const M=[],m=n/2;let p=0;y(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new he(d,3)),this.setAttribute("normal",new he(u,3)),this.setAttribute("uv",new he(f,2));function y(){const x=new I,w=new I;let E=0;const R=(e-t)/n;for(let _=0;_<=r;_++){const b=[],C=_/r,P=C*(e-t)+t;for(let U=0;U<=i;U++){const G=U/i,D=G*c+o,B=Math.sin(D),$=Math.cos(D);w.x=P*B,w.y=-C*n+m,w.z=P*$,d.push(w.x,w.y,w.z),x.set(B,R,$).normalize(),u.push(x.x,x.y,x.z),f.push(G,1-C),b.push(g++)}M.push(b)}for(let _=0;_<i;_++)for(let b=0;b<r;b++){const C=M[b][_],P=M[b+1][_],U=M[b+1][_+1],G=M[b][_+1];(t>0||b!==0)&&(h.push(C,P,G),E+=3),(e>0||b!==r-1)&&(h.push(P,U,G),E+=3)}l.addGroup(p,E,0),p+=E}function T(x){const w=g,E=new Nt,R=new I;let _=0;const b=x===!0?t:e,C=x===!0?1:-1;for(let U=1;U<=i;U++)d.push(0,m*C,0),u.push(0,C,0),f.push(.5,.5),g++;const P=g;for(let U=0;U<=i;U++){const D=U/i*c+o,B=Math.cos(D),$=Math.sin(D);R.x=b*$,R.y=m*C,R.z=b*B,d.push(R.x,R.y,R.z),u.push(0,C,0),E.x=B*.5+.5,E.y=$*.5*C+.5,f.push(E.x,E.y),g++}for(let U=0;U<i;U++){const G=w+U,D=P+U;x===!0?h.push(D,D+1,G):h.push(D+1,D,G),_+=3}l.addGroup(p,_,x===!0?1:2),p+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class bn extends kt{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new bn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Zs extends ve{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new he(r,3)),this.setAttribute("normal",new he(r.slice(),3)),this.setAttribute("uv",new he(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const T=new I,x=new I,w=new I;for(let E=0;E<e.length;E+=3)f(e[E+0],T),f(e[E+1],x),f(e[E+2],w),c(T,x,w,y)}function c(y,T,x,w){const E=w+1,R=[];for(let _=0;_<=E;_++){R[_]=[];const b=y.clone().lerp(x,_/E),C=T.clone().lerp(x,_/E),P=E-_;for(let U=0;U<=P;U++)U===0&&_===E?R[_][U]=b:R[_][U]=b.clone().lerp(C,U/P)}for(let _=0;_<E;_++)for(let b=0;b<2*(E-_)-1;b++){const C=Math.floor(b/2);b%2===0?(u(R[_][C+1]),u(R[_+1][C]),u(R[_][C])):(u(R[_][C+1]),u(R[_+1][C+1]),u(R[_+1][C]))}}function l(y){const T=new I;for(let x=0;x<r.length;x+=3)T.x=r[x+0],T.y=r[x+1],T.z=r[x+2],T.normalize().multiplyScalar(y),r[x+0]=T.x,r[x+1]=T.y,r[x+2]=T.z}function h(){const y=new I;for(let T=0;T<r.length;T+=3){y.x=r[T+0],y.y=r[T+1],y.z=r[T+2];const x=m(y)/2/Math.PI+.5,w=p(y)/Math.PI+.5;a.push(x,1-w)}g(),d()}function d(){for(let y=0;y<a.length;y+=6){const T=a[y+0],x=a[y+2],w=a[y+4],E=Math.max(T,x,w),R=Math.min(T,x,w);E>.9&&R<.1&&(T<.2&&(a[y+0]+=1),x<.2&&(a[y+2]+=1),w<.2&&(a[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function f(y,T){const x=y*3;T.x=t[x+0],T.y=t[x+1],T.z=t[x+2]}function g(){const y=new I,T=new I,x=new I,w=new I,E=new Nt,R=new Nt,_=new Nt;for(let b=0,C=0;b<r.length;b+=9,C+=6){y.set(r[b+0],r[b+1],r[b+2]),T.set(r[b+3],r[b+4],r[b+5]),x.set(r[b+6],r[b+7],r[b+8]),E.set(a[C+0],a[C+1]),R.set(a[C+2],a[C+3]),_.set(a[C+4],a[C+5]),w.copy(y).add(T).add(x).divideScalar(3);const P=m(w);M(E,C+0,y,P),M(R,C+2,T,P),M(_,C+4,x,P)}}function M(y,T,x,w){w<0&&y.x===1&&(a[T]=y.x-1),x.x===0&&x.z===0&&(a[T]=w/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zs(t.vertices,t.indices,t.radius,t.detail)}}class xl extends Zs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new xl(t.radius,t.detail)}}class _n extends Zs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new _n(t.radius,t.detail)}}class yi extends Zs{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new yi(t.radius,t.detail)}}class Ks extends ve{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,d=t/o,u=e/c,f=[],g=[],M=[],m=[];for(let p=0;p<h;p++){const y=p*u-a;for(let T=0;T<l;T++){const x=T*d-r;g.push(x,-y,0),M.push(0,0,1),m.push(T/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){const T=y+l*p,x=y+l*(p+1),w=y+1+l*(p+1),E=y+1+l*p;f.push(T,x,E),f.push(x,w,E)}this.setIndex(f),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(M,3)),this.setAttribute("uv",new he(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ks(t.width,t.height,t.widthSegments,t.heightSegments)}}class xn extends ve{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new I,u=new I,f=[],g=[],M=[],m=[];for(let p=0;p<=n;p++){const y=[],T=p/n,x=a+T*o,w=t*Math.cos(x),E=Math.sqrt(t*t-w*w);let R=0;p===0&&a===0?R=.5/e:p===n&&c===Math.PI&&(R=-.5/e);for(let _=0;_<=e;_++){const b=_/e,C=i+b*r;d.x=-E*Math.cos(C),d.y=w,d.z=E*Math.sin(C),g.push(d.x,d.y,d.z),u.copy(d).normalize(),M.push(u.x,u.y,u.z),m.push(b+R,1-T),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const T=h[p][y+1],x=h[p][y],w=h[p+1][y],E=h[p+1][y+1];(p!==0||a>0)&&f.push(T,x,E),(p!==n-1||c<Math.PI)&&f.push(x,w,E)}this.setIndex(f),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(M,3)),this.setAttribute("uv",new he(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Dn extends ve{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const c=[],l=[],h=[],d=[],u=new I,f=new I,g=new I;for(let M=0;M<=n;M++){const m=a+M/n*o;for(let p=0;p<=i;p++){const y=p/i*r;f.x=(t+e*Math.cos(m))*Math.cos(y),f.y=(t+e*Math.cos(m))*Math.sin(y),f.z=e*Math.sin(m),l.push(f.x,f.y,f.z),u.x=t*Math.cos(y),u.y=t*Math.sin(y),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/i),d.push(M/n)}}for(let M=1;M<=n;M++)for(let m=1;m<=i;m++){const p=(i+1)*M+m-1,y=(i+1)*(M-1)+m-1,T=(i+1)*(M-1)+m,x=(i+1)*M+m;c.push(p,y,x),c.push(y,T,x)}this.setIndex(c),this.setAttribute("position",new he(l,3)),this.setAttribute("normal",new he(h,3)),this.setAttribute("uv",new he(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function ls(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];if(gc(i))i.isRenderTargetTexture?(Ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(gc(i[0])){const r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function en(s){const t={};for(let e=0;e<s.length;e++){const n=ls(s[e]);for(const i in n)t[i]=n[i]}return t}function gc(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function hf(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Xh(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const df={clone:ls,merge:en};var uf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ff=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ve extends mi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uf,this.fragmentShader=ff,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ls(t.uniforms),this.uniformsGroups=hf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Dt().setHex(i.value);break;case"v2":this.uniforms[n].value=new Nt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new I().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Ee().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ot().fromArray(i.value);break;case"m4":this.uniforms[n].value=new le().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class pf extends Ve{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class gt extends mi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xo,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class mf extends mi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ou,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class gf extends mi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class vl extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class _f extends vl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Ba=new le,_c=new I,xc=new I;class qh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.mapType=pn,this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gl,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;_c.setFromMatrixPosition(t.matrixWorld),e.position.copy(_c),xc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Ba.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Ba,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,c=i?i.x/r.x:0,l=i?i.y/r.y:0;t.coordinateSystem===Vs||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(Ba)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ir=new I,Lr=new ps,In=new I;class Yh extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=Nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ir,Lr,In),In.x===1&&In.y===1&&In.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ir,Lr,In.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ir,Lr,In),In.x===1&&In.y===1&&In.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ir,Lr,In.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ai=new I,vc=new Nt,Mc=new Nt;class un extends Yh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ws*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Os*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ws*2*Math.atan(Math.tan(Os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ai.x,ai.y).multiplyScalar(-t/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-t/ai.z)}getViewSize(t,e){return this.getViewBounds(t,vc,Mc),e.subVectors(Mc,vc)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Os*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class xf extends qh{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0}}class $h extends vl{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new xf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Ml extends Yh{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class vf extends qh{constructor(){super(new Ml(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ka extends vl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new vf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Zi=-90,Ki=1;class Mf extends Ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new un(Zi,Ki,t,e);i.layers=this.layers,this.add(i);const r=new un(Zi,Ki,t,e);r.layers=this.layers,this.add(r);const a=new un(Zi,Ki,t,e);a.layers=this.layers,this.add(a);const o=new un(Zi,Ki,t,e);o.layers=this.layers,this.add(o);const c=new un(Zi,Ki,t,e);c.layers=this.layers,this.add(c);const l=new un(Zi,Ki,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Vs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Sf extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Sc=new le;class yf{constructor(t,e,n=0,i=1/0){this.ray=new sa(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new pl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Qt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Sc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Sc),this}intersectObject(t,e=!0,n=[]){return Yo(t,this,n,e),n.sort(yc),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Yo(t[i],this,n,e);return n.sort(yc),n}}function yc(s,t){return s.distance-t.distance}function Yo(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)Yo(r[a],t,e,!0)}}const Pl=class Pl{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};Pl.prototype.isMatrix2=!0;let wc=Pl;function bc(s,t,e,n){const i=wf(n);switch(e){case Lh:return s*t;case al:return s*t/i.components*i.byteLength;case ol:return s*t/i.components*i.byteLength;case Ri:return s*t*2/i.components*i.byteLength;case ll:return s*t*2/i.components*i.byteLength;case Dh:return s*t*3/i.components*i.byteLength;case An:return s*t*4/i.components*i.byteLength;case cl:return s*t*4/i.components*i.byteLength;case Fr:case Or:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Br:case kr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case go:case xo:return Math.max(s,16)*Math.max(t,8)/4;case mo:case _o:return Math.max(s,8)*Math.max(t,8)/2;case vo:case Mo:case yo:case wo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case So:case Vr:case bo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Eo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case To:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ao:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ro:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Co:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Po:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Io:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Lo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Do:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Uo:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case No:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Fo:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Oo:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Bo:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case ko:case zo:case Go:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Ho:case Vo:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Wr:case Wo:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function wf(s){switch(s){case pn:case Rh:return{byteLength:1,components:1};case Gs:case Ch:case Gn:return{byteLength:2,components:1};case sl:case rl:return{byteLength:2,components:4};case zn:case il:case Tn:return{byteLength:4,components:1};case Ph:case Ih:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:el}}));typeof window<"u"&&(window.__THREE__?Ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=el);function Zh(){let s=null,t=!1,e=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function bf(s){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,d=l.byteLength,u=s.createBuffer();s.bindBuffer(c,u),s.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const h=c.array,d=c.updateRanges;if(s.bindBuffer(l,o),d.length===0)s.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],M=d[f];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++u,d[u]=M)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const M=d[f];s.bufferSubData(l,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(s.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var Ef=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tf=`#ifdef USE_ALPHAHASH
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
#endif`,Af=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,If=`#ifdef USE_AOMAP
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
#endif`,Lf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Df=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Uf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ff=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Of=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bf=`#ifdef USE_IRIDESCENCE
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
#endif`,kf=`#ifdef USE_BUMPMAP
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
#endif`,zf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Xf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,qf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Yf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,$f=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Zf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kf=`vec3 transformedNormal = objectNormal;
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
#endif`,Jf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ep="gl_FragColor = linearToOutputTexel( gl_FragColor );",np=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ip=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,sp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,rp=`#ifdef USE_ENVMAP
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
#endif`,ap=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,op=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,up=`#ifdef USE_GRADIENTMAP
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
}`,fp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gp=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,_p=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,xp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,wp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bp=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ep=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Tp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ap=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Rp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ip=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Up=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Np=`#if defined( USE_POINTS_UV )
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
#endif`,Fp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Op=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gp=`#ifdef USE_MORPHTARGETS
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
#endif`,Hp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Wp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,$p=`#ifdef USE_NORMALMAP
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
#endif`,Zp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,t0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,e0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,n0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,i0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,s0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,r0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,a0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,o0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,l0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,c0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,h0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,d0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,u0=`#ifdef USE_SKINNING
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
#endif`,f0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,p0=`#ifdef USE_SKINNING
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
#endif`,m0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,g0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,x0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,v0=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,M0=`#ifdef USE_TRANSMISSION
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
#endif`,S0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const E0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,T0=`uniform sampler2D t2D;
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
}`,A0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I0=`#include <common>
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
}`,L0=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,D0=`#define DISTANCE
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
}`,U0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,N0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,F0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O0=`uniform float scale;
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
}`,B0=`uniform vec3 diffuse;
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
}`,k0=`#include <common>
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
}`,z0=`uniform vec3 diffuse;
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
}`,G0=`#define LAMBERT
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
}`,H0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,V0=`#define MATCAP
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
}`,W0=`#define MATCAP
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
}`,X0=`#define NORMAL
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
}`,q0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Y0=`#define PHONG
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
}`,$0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Z0=`#define STANDARD
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
}`,K0=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,J0=`#define TOON
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
}`,Q0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,j0=`uniform float size;
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
}`,tm=`uniform vec3 diffuse;
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
}`,em=`#include <common>
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
}`,nm=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,im=`uniform float rotation;
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
}`,sm=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:Ef,alphahash_pars_fragment:Tf,alphamap_fragment:Af,alphamap_pars_fragment:Rf,alphatest_fragment:Cf,alphatest_pars_fragment:Pf,aomap_fragment:If,aomap_pars_fragment:Lf,batching_pars_vertex:Df,batching_vertex:Uf,begin_vertex:Nf,beginnormal_vertex:Ff,bsdfs:Of,iridescence_fragment:Bf,bumpmap_pars_fragment:kf,clipping_planes_fragment:zf,clipping_planes_pars_fragment:Gf,clipping_planes_pars_vertex:Hf,clipping_planes_vertex:Vf,color_fragment:Wf,color_pars_fragment:Xf,color_pars_vertex:qf,color_vertex:Yf,common:$f,cube_uv_reflection_fragment:Zf,defaultnormal_vertex:Kf,displacementmap_pars_vertex:Jf,displacementmap_vertex:Qf,emissivemap_fragment:jf,emissivemap_pars_fragment:tp,colorspace_fragment:ep,colorspace_pars_fragment:np,envmap_fragment:ip,envmap_common_pars_fragment:sp,envmap_pars_fragment:rp,envmap_pars_vertex:ap,envmap_physical_pars_fragment:_p,envmap_vertex:op,fog_vertex:lp,fog_pars_vertex:cp,fog_fragment:hp,fog_pars_fragment:dp,gradientmap_pars_fragment:up,lightmap_pars_fragment:fp,lights_lambert_fragment:pp,lights_lambert_pars_fragment:mp,lights_pars_begin:gp,lights_toon_fragment:xp,lights_toon_pars_fragment:vp,lights_phong_fragment:Mp,lights_phong_pars_fragment:Sp,lights_physical_fragment:yp,lights_physical_pars_fragment:wp,lights_fragment_begin:bp,lights_fragment_maps:Ep,lights_fragment_end:Tp,lightprobes_pars_fragment:Ap,logdepthbuf_fragment:Rp,logdepthbuf_pars_fragment:Cp,logdepthbuf_pars_vertex:Pp,logdepthbuf_vertex:Ip,map_fragment:Lp,map_pars_fragment:Dp,map_particle_fragment:Up,map_particle_pars_fragment:Np,metalnessmap_fragment:Fp,metalnessmap_pars_fragment:Op,morphinstance_vertex:Bp,morphcolor_vertex:kp,morphnormal_vertex:zp,morphtarget_pars_vertex:Gp,morphtarget_vertex:Hp,normal_fragment_begin:Vp,normal_fragment_maps:Wp,normal_pars_fragment:Xp,normal_pars_vertex:qp,normal_vertex:Yp,normalmap_pars_fragment:$p,clearcoat_normal_fragment_begin:Zp,clearcoat_normal_fragment_maps:Kp,clearcoat_pars_fragment:Jp,iridescence_pars_fragment:Qp,opaque_fragment:jp,packing:t0,premultiplied_alpha_fragment:e0,project_vertex:n0,dithering_fragment:i0,dithering_pars_fragment:s0,roughnessmap_fragment:r0,roughnessmap_pars_fragment:a0,shadowmap_pars_fragment:o0,shadowmap_pars_vertex:l0,shadowmap_vertex:c0,shadowmask_pars_fragment:h0,skinbase_vertex:d0,skinning_pars_vertex:u0,skinning_vertex:f0,skinnormal_vertex:p0,specularmap_fragment:m0,specularmap_pars_fragment:g0,tonemapping_fragment:_0,tonemapping_pars_fragment:x0,transmission_fragment:v0,transmission_pars_fragment:M0,uv_pars_fragment:S0,uv_pars_vertex:y0,uv_vertex:w0,worldpos_vertex:b0,background_vert:E0,background_frag:T0,backgroundCube_vert:A0,backgroundCube_frag:R0,cube_vert:C0,cube_frag:P0,depth_vert:I0,depth_frag:L0,distance_vert:D0,distance_frag:U0,equirect_vert:N0,equirect_frag:F0,linedashed_vert:O0,linedashed_frag:B0,meshbasic_vert:k0,meshbasic_frag:z0,meshlambert_vert:G0,meshlambert_frag:H0,meshmatcap_vert:V0,meshmatcap_frag:W0,meshnormal_vert:X0,meshnormal_frag:q0,meshphong_vert:Y0,meshphong_frag:$0,meshphysical_vert:Z0,meshphysical_frag:K0,meshtoon_vert:J0,meshtoon_frag:Q0,points_vert:j0,points_frag:tm,shadow_vert:em,shadow_frag:nm,sprite_vert:im,sprite_frag:sm},ut={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Un={basic:{uniforms:en([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:en([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Dt(0)},envMapIntensity:{value:1}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:en([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:en([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:en([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:en([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:en([ut.points,ut.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:en([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:en([ut.common,ut.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:en([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:en([ut.sprite,ut.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distance:{uniforms:en([ut.common,ut.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distance_vert,fragmentShader:Gt.distance_frag},shadow:{uniforms:en([ut.lights,ut.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};Un.physical={uniforms:en([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const Dr={r:0,b:0,g:0},rm=new le,Kh=new Ot;Kh.set(-1,0,0,0,1,0,0,0,1);function am(s,t,e,n,i,r){const a=new Dt(0);let o=i===!0?0:1,c,l,h=null,d=0,u=null;function f(y){let T=y.isScene===!0?y.background:null;if(T&&T.isTexture){const x=y.backgroundBlurriness>0;T=t.get(T,x)}return T}function g(y){let T=!1;const x=f(y);x===null?m(a,o):x&&x.isColor&&(m(x,1),T=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(y,T){const x=f(T);x&&(x.isCubeTexture||x.mapping===ia)?(l===void 0&&(l=new X(new sn(1,1,1),new Ve({name:"BackgroundCubeMaterial",uniforms:ls(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(rm.makeRotationFromEuler(T.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Kh),l.material.toneMapped=Zt.getTransfer(x.colorSpace)!==ae,(h!==x||d!==x.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,u=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new X(new Ks(2,2),new Ve({name:"BackgroundMaterial",uniforms:ls(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(x.colorSpace)!==ae,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,u=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,T){y.getRGB(Dr,Xh(s)),e.buffers.color.setClear(Dr.r,Dr.g,Dr.b,T,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,T=1){a.set(y),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:g,addToRenderList:M,dispose:p}}function om(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,a=!1;function o(P,U,G,D,B){let $=!1;const W=d(P,D,G,U);r!==W&&(r=W,l(r.object)),$=f(P,D,G,B),$&&g(P,D,G,B),B!==null&&t.update(B,s.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,x(P,U,G,D),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function c(){return s.createVertexArray()}function l(P){return s.bindVertexArray(P)}function h(P){return s.deleteVertexArray(P)}function d(P,U,G,D){const B=D.wireframe===!0;let $=n[U.id];$===void 0&&($={},n[U.id]=$);const W=P.isInstancedMesh===!0?P.id:0;let nt=$[W];nt===void 0&&(nt={},$[W]=nt);let Y=nt[G.id];Y===void 0&&(Y={},nt[G.id]=Y);let tt=Y[B];return tt===void 0&&(tt=u(c()),Y[B]=tt),tt}function u(P){const U=[],G=[],D=[];for(let B=0;B<e;B++)U[B]=0,G[B]=0,D[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:G,attributeDivisors:D,object:P,attributes:{},index:null}}function f(P,U,G,D){const B=r.attributes,$=U.attributes;let W=0;const nt=G.getAttributes();for(const Y in nt)if(nt[Y].location>=0){const it=B[Y];let It=$[Y];if(It===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(It=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(It=P.instanceColor)),it===void 0||it.attribute!==It||It&&it.data!==It.data)return!0;W++}return r.attributesNum!==W||r.index!==D}function g(P,U,G,D){const B={},$=U.attributes;let W=0;const nt=G.getAttributes();for(const Y in nt)if(nt[Y].location>=0){let it=$[Y];it===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(it=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(it=P.instanceColor));const It={};It.attribute=it,it&&it.data&&(It.data=it.data),B[Y]=It,W++}r.attributes=B,r.attributesNum=W,r.index=D}function M(){const P=r.newAttributes;for(let U=0,G=P.length;U<G;U++)P[U]=0}function m(P){p(P,0)}function p(P,U){const G=r.newAttributes,D=r.enabledAttributes,B=r.attributeDivisors;G[P]=1,D[P]===0&&(s.enableVertexAttribArray(P),D[P]=1),B[P]!==U&&(s.vertexAttribDivisor(P,U),B[P]=U)}function y(){const P=r.newAttributes,U=r.enabledAttributes;for(let G=0,D=U.length;G<D;G++)U[G]!==P[G]&&(s.disableVertexAttribArray(G),U[G]=0)}function T(P,U,G,D,B,$,W){W===!0?s.vertexAttribIPointer(P,U,G,B,$):s.vertexAttribPointer(P,U,G,D,B,$)}function x(P,U,G,D){M();const B=D.attributes,$=G.getAttributes(),W=U.defaultAttributeValues;for(const nt in $){const Y=$[nt];if(Y.location>=0){let tt=B[nt];if(tt===void 0&&(nt==="instanceMatrix"&&P.instanceMatrix&&(tt=P.instanceMatrix),nt==="instanceColor"&&P.instanceColor&&(tt=P.instanceColor)),tt!==void 0){const it=tt.normalized,It=tt.itemSize,Rt=t.get(tt);if(Rt===void 0)continue;const ue=Rt.buffer,Kt=Rt.type,ne=Rt.bytesPerElement,Z=Kt===s.INT||Kt===s.UNSIGNED_INT||tt.gpuType===il;if(tt.isInterleavedBufferAttribute){const j=tt.data,Mt=j.stride,Ft=tt.offset;if(j.isInstancedInterleavedBuffer){for(let xt=0;xt<Y.locationSize;xt++)p(Y.location+xt,j.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let xt=0;xt<Y.locationSize;xt++)m(Y.location+xt);s.bindBuffer(s.ARRAY_BUFFER,ue);for(let xt=0;xt<Y.locationSize;xt++)T(Y.location+xt,It/Y.locationSize,Kt,it,Mt*ne,(Ft+It/Y.locationSize*xt)*ne,Z)}else{if(tt.isInstancedBufferAttribute){for(let j=0;j<Y.locationSize;j++)p(Y.location+j,tt.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let j=0;j<Y.locationSize;j++)m(Y.location+j);s.bindBuffer(s.ARRAY_BUFFER,ue);for(let j=0;j<Y.locationSize;j++)T(Y.location+j,It/Y.locationSize,Kt,it,It*ne,It/Y.locationSize*j*ne,Z)}}else if(W!==void 0){const it=W[nt];if(it!==void 0)switch(it.length){case 2:s.vertexAttrib2fv(Y.location,it);break;case 3:s.vertexAttrib3fv(Y.location,it);break;case 4:s.vertexAttrib4fv(Y.location,it);break;default:s.vertexAttrib1fv(Y.location,it)}}}}y()}function w(){b();for(const P in n){const U=n[P];for(const G in U){const D=U[G];for(const B in D){const $=D[B];for(const W in $)h($[W].object),delete $[W];delete D[B]}}delete n[P]}}function E(P){if(n[P.id]===void 0)return;const U=n[P.id];for(const G in U){const D=U[G];for(const B in D){const $=D[B];for(const W in $)h($[W].object),delete $[W];delete D[B]}}delete n[P.id]}function R(P){for(const U in n){const G=n[U];for(const D in G){const B=G[D];if(B[P.id]===void 0)continue;const $=B[P.id];for(const W in $)h($[W].object),delete $[W];delete B[P.id]}}}function _(P){for(const U in n){const G=n[U],D=P.isInstancedMesh===!0?P.id:0,B=G[D];if(B!==void 0){for(const $ in B){const W=B[$];for(const nt in W)h(W[nt].object),delete W[nt];delete B[$]}delete G[D],Object.keys(G).length===0&&delete n[U]}}}function b(){C(),a=!0,r!==i&&(r=i,l(r.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:b,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:m,disableUnusedAttributes:y}}function lm(s,t,e){let n;function i(c){n=c}function r(c,l){s.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,h){h!==0&&(s.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];e.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function cm(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==An&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const _=R===Gn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==pn&&R!==Tn&&!_&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(Ut("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:x,maxSamples:w,samples:E}}function hm(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new li,o=new Ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const y=r?0:n,T=y*4;let x=p.clippingState||null;c.value=x,x=h(g,u,T,f);for(let w=0;w!==T;++w)x[w]=e[w];p.clippingState=x,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){const M=d!==null?d.length:0;let m=null;if(M!==0){if(m=c.value,g!==!0||m===null){const p=f+M*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,x=f;T!==M;++T,x+=4)a.copy(d[T]).applyMatrix4(y,o),a.normal.toArray(m,x),m[x+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}const ns=4,dm=6,um=20,fm=256,Is=new Ml,Ec=new Dt;let za=null,Ga=0,Ha=0,Va=!1;const pm=new I,Si=new I;class Tc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){const{size:a=256,position:o=pm}=r;za=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(za,Ga,Ha),this._renderer.xr.enabled=Va,t.scissorTest=!1,Ji(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ai||t.mapping===os?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),za=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:Gn,format:An,colorSpace:Xr,depthBuffer:!1},i=Ac(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ac(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=mm(r)),this._blurMaterial=_m(r,t,e),this._ggxMaterial=gm(r,t,e)}return i}_compileMaterial(t){const e=new X(new ve,t);this._renderer.compile(e,Is)}_sceneToCubeUV(t,e,n,i,r){const c=new un(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Ec),d.toneMapping=Bn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new X(new sn,new Ei({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,m=M.material;let p=!1;const y=t.background;y?y.isColor&&(m.color.copy(y),t.background=null,p=!0):(m.color.copy(Ec),p=!0);for(let T=0;T<6;T++){const x=T%3;x===0?(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[T],r.y,r.z)):x===1?(c.up.set(0,0,l[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[T],r.z)):(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[T]));const w=this._cubeSize;Ji(i,x*w,T>2?w:0,w,w),d.setRenderTarget(i),p&&d.render(M,c),d.render(t,c)}d.toneMapping=f,d.autoClear=u,t.background=y}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ai||t.mapping===os;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rc());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Ji(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Is)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=l*1.25,f=d*u,{_lodMax:g}=this,M=this._sizeLods[n],m=3*M*(n>g-ns?n-g+ns:0),p=4*(this._cubeSize-M);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=g-e,Ji(r,m,p,3*M,2*M),i.setRenderTarget(r),i.render(o,Is),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,Ji(t,m,p,3*M,2*M),i.setRenderTarget(t),i.render(o,Is)}_blur(t,e,n,i){const r=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,i,r){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[i];c.material=o;const l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;const h=this._sizeLods[i],d=3*h*(i>this._lodMax-ns?i-this._lodMax+ns:0),u=4*(this._cubeSize-h);Ji(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(c,Is)}}function mm(s){const t=[],e=[];let n=s;const i=s-ns+1+dm;for(let r=0;r<i;r++){const a=Math.pow(2,n);t.push(a);const o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,u=6,f=3,g=new Float32Array(f*u*d),M=new Float32Array(f*u*d);for(let p=0;p<d;p++){const y=p%3*2/3-1,T=p>2?0:-1,x=[y,T,0,y+2/3,T,0,y+2/3,T+1,0,y,T,0,y+2/3,T+1,0,y,T+1,0];g.set(x,f*u*p);for(let w=0;w<u;w++){const E=h[w*2]*2-1,R=h[w*2+1]*2-1;p===0?Si.set(1,R,E):p===1?Si.set(-E,1,-R):p===2?Si.set(-E,R,1):p===3?Si.set(-1,R,-E):p===4?Si.set(-E,-1,R):Si.set(E,R,-1),Si.toArray(M,(p*u+w)*f)}}const m=new ve;m.setAttribute("position",new Ue(g,f)),m.setAttribute("outputDirection",new Ue(M,f)),e.push(new X(m,null)),n>ns&&n--}return{lodMeshes:e,sizeLods:t}}function Ac(s,t,e){const n=new Rn(s,t,e);return n.texture.mapping=ia,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ji(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function gm(s,t,e){return new Ve({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:fm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:aa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function _m(s,t,e){return new Ve({name:"SphericalGaussianBlur",defines:{SAMPLES:um,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:aa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Rc(){return new Ve({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:aa(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Cc(){return new Ve({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function aa(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Jh extends Rn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Vh(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new sn(5,5,5),r=new Ve({name:"CubemapFromEquirect",uniforms:ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:Zn});r.uniforms.tEquirect.value=e;const a=new X(i,r),o=e.minFilter;return e.minFilter===wi&&(e.minFilter=Ke),new Mf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}function xm(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===ua||f===fa)if(t.has(u)){const g=t.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const M=new Jh(g.height);return M.fromEquirectangularTexture(s,u),t.set(u,M),u.addEventListener("dispose",l),o(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const f=u.mapping,g=f===ua||f===fa,M=f===Ai||f===os;if(g||M){let m=e.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Tc(s)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{const y=u.image;return g&&y&&y.height>0||M&&y&&c(y)?(n===null&&(n=new Tc(s)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===ua?u.mapping=Ai:f===fa&&(u.mapping=os),u}function c(u){let f=0;const g=6;for(let M=0;M<g;M++)u[M]!==void 0&&f++;return f===g}function l(u){const f=u.target;f.removeEventListener("dispose",l);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function vm(s){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&rs("WebGLRenderer: "+n+" extension not supported."),i}}}function Mm(s,t,e,n){const i={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete i[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function c(d){const u=d.attributes;for(const f in u)t.update(u[f],s.ARRAY_BUFFER)}function l(d){const u=[],f=d.index,g=d.attributes.position;let M=0;if(g===void 0)return;if(f!==null){const y=f.array;M=f.version;for(let T=0,x=y.length;T<x;T+=3){const w=y[T+0],E=y[T+1],R=y[T+2];u.push(w,E,E,R,R,w)}}else{const y=g.array;M=g.version;for(let T=0,x=y.length/3-1;T<x;T+=3){const w=T+0,E=T+1,R=T+2;u.push(w,E,E,R,R,w)}}const m=new(g.count>=65535?kh:Bh)(u,1);m.version=M;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function Sm(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,u){s.drawElements(n,u,r,d*a),e.update(u,n,1)}function l(d,u,f){f!==0&&(s.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let M=0;for(let m=0;m<f;m++)M+=u[m];e.update(M,n,1)}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function ym(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:Qt("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function wm(s,t,e){const n=new WeakMap,i=new Ee;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let C=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",C)};var f=C;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),M===!0&&(x=2),m===!0&&(x=3);let w=o.attributes.position.count*x,E=1;w>t.maxTextureSize&&(E=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const R=new Float32Array(w*E*4*d),_=new Fh(R,w,E,d);_.type=Tn,_.needsUpdate=!0;const b=x*4;for(let P=0;P<d;P++){const U=p[P],G=y[P],D=T[P],B=w*E*4*P;for(let $=0;$<U.count;$++){const W=$*b;g===!0&&(i.fromBufferAttribute(U,$),R[B+W+0]=i.x,R[B+W+1]=i.y,R[B+W+2]=i.z,R[B+W+3]=0),M===!0&&(i.fromBufferAttribute(G,$),R[B+W+4]=i.x,R[B+W+5]=i.y,R[B+W+6]=i.z,R[B+W+7]=0),m===!0&&(i.fromBufferAttribute(D,$),R[B+W+8]=i.x,R[B+W+9]=i.y,R[B+W+10]=i.z,R[B+W+11]=D.itemSize===4?i.w:1)}}u={count:d,texture:_,size:new Nt(w,E)},n.set(o,u),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const M=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",M),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function bm(s,t,e,n,i){let r=new WeakMap;function a(l){const h=i.render.frame,d=l.geometry,u=t.get(l,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const Em={[Sh]:"LINEAR_TONE_MAPPING",[yh]:"REINHARD_TONE_MAPPING",[wh]:"CINEON_TONE_MAPPING",[nl]:"ACES_FILMIC_TONE_MAPPING",[Eh]:"AGX_TONE_MAPPING",[Th]:"NEUTRAL_TONE_MAPPING",[bh]:"CUSTOM_TONE_MAPPING"};function Tm(s,t,e,n,i,r){const a=new Rn(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new ve;l.setAttribute("position",new he([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new he([0,2,0,0,2,0],2));const h=new pf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

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
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new X(l,h),u=new Ml(-1,1,1,-1,0,1);let f=null,g=null,M=!1,m,p=null,y=[],T=!1;this.setSize=function(x,w){a.setSize(x,w),o!==null&&o.setSize(x,w),c!==null&&c.setSize(x,w);for(let E=0;E<y.length;E++){const R=y[E];R.setSize&&R.setSize(x,w)}},this.setEffects=function(x){y=x,T=y.length>0&&y[0].isRenderPass===!0;const w=a.width,E=a.height;y.length>0&&o===null&&(o=new Rn(w,E,{type:Gn,depthBuffer:!1,stencilBuffer:!1}),c=new Rn(w,E,{type:Gn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<y.length;R++){const _=y[R];_.setSize&&_.setSize(w,E)}},this.begin=function(x,w){if(M||x.toneMapping===Bn&&y.length===0)return!1;if(p=w,w!==null){const E=w.width,R=w.height;(a.width!==E||a.height!==R)&&this.setSize(E,R)}return T===!1&&x.setRenderTarget(a),m=x.toneMapping,x.toneMapping=Bn,!0},this.hasRenderPass=function(){return T},this.end=function(x,w){x.toneMapping=m,M=!0;let E=a,R=o;for(let _=0;_<y.length;_++){const b=y[_];b.enabled!==!1&&(b.render(x,R,E,w),b.needsSwap!==!1&&(E=R,R=R===o?c:o))}if(f!==x.outputColorSpace||g!==x.toneMapping){f=x.outputColorSpace,g=x.toneMapping,h.defines={},Zt.getTransfer(f)===ae&&(h.defines.SRGB_TRANSFER="");const _=Em[g];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,x.setRenderTarget(p),x.render(d,u),p=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}const Qh=new Je,$o=new Xs(1,1),jh=new Fh,td=new Gu,ed=new Vh,Pc=[],Ic=[],Lc=new Float32Array(16),Dc=new Float32Array(9),Uc=new Float32Array(4);function ms(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Pc[i];if(r===void 0&&(r=new Float32Array(i),Pc[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Oe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Be(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function oa(s,t){let e=Ic[t];e===void 0&&(e=new Int32Array(t),Ic[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Am(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Rm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;s.uniform2fv(this.addr,t),Be(e,t)}}function Cm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;s.uniform3fv(this.addr,t),Be(e,t)}}function Pm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;s.uniform4fv(this.addr,t),Be(e,t)}}function Im(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;Uc.set(n),s.uniformMatrix2fv(this.addr,!1,Uc),Be(e,n)}}function Lm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;Dc.set(n),s.uniformMatrix3fv(this.addr,!1,Dc),Be(e,n)}}function Dm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;Lc.set(n),s.uniformMatrix4fv(this.addr,!1,Lc),Be(e,n)}}function Um(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Nm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;s.uniform2iv(this.addr,t),Be(e,t)}}function Fm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;s.uniform3iv(this.addr,t),Be(e,t)}}function Om(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;s.uniform4iv(this.addr,t),Be(e,t)}}function Bm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function km(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;s.uniform2uiv(this.addr,t),Be(e,t)}}function zm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;s.uniform3uiv(this.addr,t),Be(e,t)}}function Gm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;s.uniform4uiv(this.addr,t),Be(e,t)}}function Hm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?($o.compareFunction=e.isReversedDepthBuffer()?dl:hl,r=$o):r=Qh,e.setTexture2D(t||r,i)}function Vm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||td,i)}function Wm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||ed,i)}function Xm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||jh,i)}function qm(s){switch(s){case 5126:return Am;case 35664:return Rm;case 35665:return Cm;case 35666:return Pm;case 35674:return Im;case 35675:return Lm;case 35676:return Dm;case 5124:case 35670:return Um;case 35667:case 35671:return Nm;case 35668:case 35672:return Fm;case 35669:case 35673:return Om;case 5125:return Bm;case 36294:return km;case 36295:return zm;case 36296:return Gm;case 35678:case 36198:case 36298:case 36306:case 35682:return Hm;case 35679:case 36299:case 36307:return Vm;case 35680:case 36300:case 36308:case 36293:return Wm;case 36289:case 36303:case 36311:case 36292:return Xm}}function Ym(s,t){s.uniform1fv(this.addr,t)}function $m(s,t){const e=ms(t,this.size,2);s.uniform2fv(this.addr,e)}function Zm(s,t){const e=ms(t,this.size,3);s.uniform3fv(this.addr,e)}function Km(s,t){const e=ms(t,this.size,4);s.uniform4fv(this.addr,e)}function Jm(s,t){const e=ms(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Qm(s,t){const e=ms(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function jm(s,t){const e=ms(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function tg(s,t){s.uniform1iv(this.addr,t)}function eg(s,t){s.uniform2iv(this.addr,t)}function ng(s,t){s.uniform3iv(this.addr,t)}function ig(s,t){s.uniform4iv(this.addr,t)}function sg(s,t){s.uniform1uiv(this.addr,t)}function rg(s,t){s.uniform2uiv(this.addr,t)}function ag(s,t){s.uniform3uiv(this.addr,t)}function og(s,t){s.uniform4uiv(this.addr,t)}function lg(s,t,e){const n=this.cache,i=t.length,r=oa(e,i);Oe(n,r)||(s.uniform1iv(this.addr,r),Be(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=$o:a=Qh;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,r[o])}function cg(s,t,e){const n=this.cache,i=t.length,r=oa(e,i);Oe(n,r)||(s.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||td,r[a])}function hg(s,t,e){const n=this.cache,i=t.length,r=oa(e,i);Oe(n,r)||(s.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||ed,r[a])}function dg(s,t,e){const n=this.cache,i=t.length,r=oa(e,i);Oe(n,r)||(s.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||jh,r[a])}function ug(s){switch(s){case 5126:return Ym;case 35664:return $m;case 35665:return Zm;case 35666:return Km;case 35674:return Jm;case 35675:return Qm;case 35676:return jm;case 5124:case 35670:return tg;case 35667:case 35671:return eg;case 35668:case 35672:return ng;case 35669:case 35673:return ig;case 5125:return sg;case 36294:return rg;case 36295:return ag;case 36296:return og;case 35678:case 36198:case 36298:case 36306:case 35682:return lg;case 35679:case 36299:case 36307:return cg;case 35680:case 36300:case 36308:case 36293:return hg;case 36289:case 36303:case 36311:case 36292:return dg}}class fg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=qm(e.type)}}class pg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ug(e.type)}}class mg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const Wa=/(\w+)(\])?(\[|\.)?/g;function Nc(s,t){s.seq.push(t),s.map[t.id]=t}function gg(s,t,e){const n=s.name,i=n.length;for(Wa.lastIndex=0;;){const r=Wa.exec(n),a=Wa.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Nc(e,l===void 0?new fg(o,s,t):new pg(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new mg(o),Nc(e,d)),e=d}}}class zr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);gg(o,c,this)}const i=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Fc(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const _g=37297;let xg=0;function vg(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Oc=new Ot;function Mg(s){Zt._getMatrix(Oc,Zt.workingColorSpace,s);const t=`mat3( ${Oc.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(s)){case qr:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return Ut("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Bc(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+vg(s.getShaderSource(t),o)}else return r}function Sg(s,t){const e=Mg(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const yg={[Sh]:"Linear",[yh]:"Reinhard",[wh]:"Cineon",[nl]:"ACESFilmic",[Eh]:"AgX",[Th]:"Neutral",[bh]:"Custom"};function wg(s,t){const e=yg[t];return e===void 0?(Ut("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ur=new I;function bg(){Zt.getLuminanceCoefficients(Ur);const s=Ur.x.toFixed(4),t=Ur.y.toFixed(4),e=Ur.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Eg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ns).join(`
`)}function Tg(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ag(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Ns(s){return s!==""}function kc(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Rg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zo(s){return s.replace(Rg,Pg)}const Cg=new Map;function Pg(s,t){let e=Gt[t];if(e===void 0){const n=Cg.get(t);if(n!==void 0)e=Gt[n],Ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Zo(e)}const Ig=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gc(s){return s.replace(Ig,Lg)}function Lg(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Hc(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Dg={[Fs]:"SHADOWMAP_TYPE_PCF",[Us]:"SHADOWMAP_TYPE_VSM"};function Ug(s){return Dg[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Ng={[Ai]:"ENVMAP_TYPE_CUBE",[os]:"ENVMAP_TYPE_CUBE",[ia]:"ENVMAP_TYPE_CUBE_UV"};function Fg(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Ng[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const Og={[os]:"ENVMAP_MODE_REFRACTION"};function Bg(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Og[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const kg={[Mh]:"ENVMAP_BLENDING_MULTIPLY",[su]:"ENVMAP_BLENDING_MIX",[ru]:"ENVMAP_BLENDING_ADD"};function zg(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":kg[s.combine]||"ENVMAP_BLENDING_NONE"}function Gg(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Hg(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Ug(e),l=Fg(e),h=Bg(e),d=zg(e),u=Gg(e),f=Eg(e),g=Tg(r),M=i.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ns).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ns).join(`
`),p.length>0&&(p+=`
`)):(m=[Hc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),p=[Hc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bn?"#define TONE_MAPPING":"",e.toneMapping!==Bn?Gt.tonemapping_pars_fragment:"",e.toneMapping!==Bn?wg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,Sg("linearToOutputTexel",e.outputColorSpace),bg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ns).join(`
`)),a=Zo(a),a=kc(a,e),a=zc(a,e),o=Zo(o),o=kc(o,e),o=zc(o,e),a=Gc(a),o=Gc(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Wl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=y+m+a,x=y+p+o,w=Fc(i,i.VERTEX_SHADER,T),E=Fc(i,i.FRAGMENT_SHADER,x);i.attachShader(M,w),i.attachShader(M,E),e.index0AttributeName!==void 0?i.bindAttribLocation(M,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(M,0,"position"),i.linkProgram(M);function R(P){if(s.debug.checkShaderErrors){const U=i.getProgramInfoLog(M)||"",G=i.getShaderInfoLog(w)||"",D=i.getShaderInfoLog(E)||"",B=U.trim(),$=G.trim(),W=D.trim();let nt=!0,Y=!0;if(i.getProgramParameter(M,i.LINK_STATUS)===!1)if(nt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,M,w,E);else{const tt=Bc(i,w,"vertex"),it=Bc(i,E,"fragment");Qt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(M,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+tt+`
`+it)}else B!==""?Ut("WebGLProgram: Program Info Log:",B):($===""||W==="")&&(Y=!1);Y&&(P.diagnostics={runnable:nt,programLog:B,vertexShader:{log:$,prefix:m},fragmentShader:{log:W,prefix:p}})}i.deleteShader(w),i.deleteShader(E),_=new zr(i,M),b=Ag(i,M)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(M,_g)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=xg++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=w,this.fragmentShader=E,this}let Vg=0;class Wg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Xg(t),e.set(t,n)),n}}class Xg{constructor(t){this.id=Vg++,this.code=t,this.usedTimes=0}}function qg(s){return s===Ri||s===Vr||s===Wr}function Yg(s,t,e,n,i,r){const a=new pl,o=new Wg,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer;let u=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function M(_,b,C,P,U,G){const D=P.fog,B=U.geometry,$=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,nt=t.get(_.envMap||$,W),Y=nt&&nt.mapping===ia?nt.image.height:null,tt=f[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&Ut("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));const it=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,It=it!==void 0?it.length:0;let Rt=0;B.morphAttributes.position!==void 0&&(Rt=1),B.morphAttributes.normal!==void 0&&(Rt=2),B.morphAttributes.color!==void 0&&(Rt=3);let ue,Kt,ne,Z;if(tt){const pe=Un[tt];ue=pe.vertexShader,Kt=pe.fragmentShader}else{ue=_.vertexShader,Kt=_.fragmentShader;const pe=o.getVertexShaderStage(_),ie=o.getFragmentShaderStage(_);o.update(_,pe,ie),ne=pe.id,Z=ie.id}const j=s.getRenderTarget(),Mt=s.state.buffers.depth.getReversed(),Ft=U.isInstancedMesh===!0,xt=U.isBatchedMesh===!0,Vt=!!_.map,Ne=!!_.matcap,Wt=!!nt,te=!!_.aoMap,fe=!!_.lightMap,qt=!!_.bumpMap&&_.wireframe===!1,Me=!!_.normalMap,ke=!!_.displacementMap,on=!!_.emissiveMap,ye=!!_.metalnessMap,Pe=!!_.roughnessMap,F=_.anisotropy>0,Xe=_.clearcoat>0,re=_.dispersion>0,A=_.retroreflectivity>0,v=_.iridescence>0,O=_.sheen>0,H=_.transmission>0,q=F&&!!_.anisotropyMap,rt=Xe&&!!_.clearcoatMap,at=Xe&&!!_.clearcoatNormalMap,K=Xe&&!!_.clearcoatRoughnessMap,Q=v&&!!_.iridescenceMap,ot=v&&!!_.iridescenceThicknessMap,Tt=O&&!!_.sheenColorMap,dt=O&&!!_.sheenRoughnessMap,lt=!!_.specularMap,At=!!_.specularColorMap,Lt=!!_.specularIntensityMap,Bt=H&&!!_.transmissionMap,N=H&&!!_.thicknessMap,ct=!!_.gradientMap,J=!!_.alphaMap,ht=_.alphaTest>0,mt=!!_.alphaHash,et=!!_.extensions;let Ct=Bn;_.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ct=s.toneMapping);const bt={shaderID:tt,shaderType:_.type,shaderName:_.name,vertexShader:ue,fragmentShader:Kt,defines:_.defines,customVertexShaderID:ne,customFragmentShaderID:Z,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:xt,batchingColor:xt&&U._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&U.instanceColor!==null,instancingMorph:Ft&&U.morphTexture!==null,outputColorSpace:j===null?s.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Zt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Vt,matcap:Ne,envMap:Wt,envMapMode:Wt&&nt.mapping,envMapCubeUVHeight:Y,aoMap:te,lightMap:fe,bumpMap:qt,normalMap:Me,displacementMap:ke,emissiveMap:on,normalMapObjectSpace:Me&&_.normalMapType===lu,normalMapTangentSpace:Me&&_.normalMapType===Xo,packedNormalMap:Me&&_.normalMapType===Xo&&qg(_.normalMap.format),metalnessMap:ye,roughnessMap:Pe,anisotropy:F,anisotropyMap:q,clearcoat:Xe,clearcoatMap:rt,clearcoatNormalMap:at,clearcoatRoughnessMap:K,dispersion:re,retroreflection:A,iridescence:v,iridescenceMap:Q,iridescenceThicknessMap:ot,sheen:O,sheenColorMap:Tt,sheenRoughnessMap:dt,specularMap:lt,specularColorMap:At,specularIntensityMap:Lt,transmission:H,transmissionMap:Bt,thicknessMap:N,gradientMap:ct,opaque:_.transparent===!1&&_.blending===ss&&_.alphaToCoverage===!1,alphaMap:J,alphaTest:ht,alphaHash:mt,combine:_.combine,mapUv:Vt&&g(_.map.channel),aoMapUv:te&&g(_.aoMap.channel),lightMapUv:fe&&g(_.lightMap.channel),bumpMapUv:qt&&g(_.bumpMap.channel),normalMapUv:Me&&g(_.normalMap.channel),displacementMapUv:ke&&g(_.displacementMap.channel),emissiveMapUv:on&&g(_.emissiveMap.channel),metalnessMapUv:ye&&g(_.metalnessMap.channel),roughnessMapUv:Pe&&g(_.roughnessMap.channel),anisotropyMapUv:q&&g(_.anisotropyMap.channel),clearcoatMapUv:rt&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:at&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:dt&&g(_.sheenRoughnessMap.channel),specularMapUv:lt&&g(_.specularMap.channel),specularColorMapUv:At&&g(_.specularColorMap.channel),specularIntensityMapUv:Lt&&g(_.specularIntensityMap.channel),transmissionMapUv:Bt&&g(_.transmissionMap.channel),thicknessMapUv:N&&g(_.thicknessMap.channel),alphaMapUv:J&&g(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Me||F),vertexNormals:!!B.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!B.attributes.uv&&(Vt||J),fog:!!D,useFog:_.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||B.attributes.normal===void 0&&Me===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Mt,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:It,morphTextureStride:Rt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ct,decodeVideoTexture:Vt&&_.map.isVideoTexture===!0&&Zt.getTransfer(_.map.colorSpace)===ae,decodeVideoTextureEmissive:on&&_.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(_.emissiveMap.colorSpace)===ae,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===we,flipSided:_.side===rn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:et&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&_.extensions.multiDraw===!0||xt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return bt.vertexUv1s=c.has(1),bt.vertexUv2s=c.has(2),bt.vertexUv3s=c.has(3),c.clear(),bt}function m(_){const b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(const C in _.defines)b.push(C),b.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(p(b,_),y(b,_),b.push(s.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function p(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function y(_,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function T(_){const b=f[_.type];let C;if(b){const P=Un[b];C=df.clone(P.uniforms)}else C=_.uniforms;return C}function x(_,b){let C=h.get(b);return C!==void 0?++C.usedTimes:(C=new Hg(s,b,_,i),l.push(C),h.set(b,C)),C}function w(_){if(--_.usedTimes===0){const b=l.indexOf(_);l[b]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function R(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:T,acquireProgram:x,releaseProgram:w,releaseShaderCache:E,programs:l,dispose:R}}function $g(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Zg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Vc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Wc(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,M,m,p){let y=s[t];return y===void 0?(y={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:m,group:p},s[t]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=g,y.materialVariant=a(u),y.groupOrder=M,y.renderOrder=u.renderOrder,y.z=m,y.group=p),t++,y}function c(u,f,g,M,m,p,y){y.reversedDepth===!0&&(m=-m);const T=o(u,f,g,M,m,p);g.transmission>0?n.push(T):g.transparent===!0?i.push(T):e.push(T)}function l(u,f,g,M,m,p){const y=o(u,f,g,M,m,p);g.transmission>0?n.unshift(y):g.transparent===!0?i.unshift(y):e.unshift(y)}function h(u,f){e.length>1&&e.sort(u||Zg),n.length>1&&n.sort(f||Vc),i.length>1&&i.sort(f||Vc)}function d(){for(let u=t,f=s.length;u<f;u++){const g=s[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:c,unshift:l,finish:d,sort:h}}function Kg(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new Wc,s.set(n,[a])):i>=r.length?(a=new Wc,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Jg(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new Dt};break;case"SpotLight":e={position:new I,direction:new I,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":e={color:new Dt,position:new I,halfWidth:new I,halfHeight:new I};break}return s[t.id]=e,e}}}function Qg(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let jg=0;function t_(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function e_(s){const t=new Jg,e=Qg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const i=new I,r=new le,a=new le;function o(l){let h=0,d=0,u=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let f=0,g=0,M=0,m=0,p=0,y=0,T=0,x=0,w=0,E=0,R=0,_=0,b=0,C=0;l.sort(t_);for(let U=0,G=l.length;U<G;U++){const D=l[U],B=D.color,$=D.intensity,W=D.distance;let nt=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Ri?nt=D.shadow.map.texture:nt=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=B.r*$,d+=B.g*$,u+=B.b*$;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(D.sh.coefficients[Y],$);C++}else if(D.isSunLight){const Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const tt=D.shadow,it=e.get(D);it.shadowIntensity=tt.intensity,it.shadowBias=tt.bias,it.shadowNormalBias=tt.normalBias,it.shadowRadius=tt.radius,it.shadowMapSize.copy(tt.mapSize).multiply(tt.getFrameExtents()),n.sunShadow[g]=it,n.sunShadowMap[g]=nt;const It=tt.getViewportCount();for(let Rt=0;Rt<It;Rt++)n.sunShadowMatrix[M+Rt]=tt.getMatrix(Rt),n.sunShadowCascade[M+Rt]=tt._cascadeData[Rt];M+=It,g++}n.sun[f]=Y,f++}else if(D.isDirectionalLight){const Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const tt=D.shadow,it=e.get(D);it.shadowIntensity=tt.intensity,it.shadowBias=tt.bias,it.shadowNormalBias=tt.normalBias,it.shadowRadius=tt.radius,it.shadowMapSize=tt.mapSize,n.directionalShadow[m]=it,n.directionalShadowMap[m]=nt,n.directionalShadowMatrix[m]=D.shadow.matrix,w++}n.directional[m]=Y,m++}else if(D.isSpotLight){const Y=t.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(B).multiplyScalar($),Y.distance=W,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,n.spot[y]=Y;const tt=D.shadow;if(D.map&&(n.spotLightMap[_]=D.map,_++,tt.updateMatrices(D),D.castShadow&&b++),n.spotLightMatrix[y]=tt.matrix,D.castShadow){const it=e.get(D);it.shadowIntensity=tt.intensity,it.shadowBias=tt.bias,it.shadowNormalBias=tt.normalBias,it.shadowRadius=tt.radius,it.shadowMapSize=tt.mapSize,n.spotShadow[y]=it,n.spotShadowMap[y]=nt,R++}y++}else if(D.isRectAreaLight){const Y=t.get(D);Y.color.copy(B).multiplyScalar($),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),n.rectArea[T]=Y,T++}else if(D.isPointLight){const Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){const tt=D.shadow,it=e.get(D);it.shadowIntensity=tt.intensity,it.shadowBias=tt.bias,it.shadowNormalBias=tt.normalBias,it.shadowRadius=tt.radius,it.shadowMapSize=tt.mapSize,it.shadowCameraNear=tt.camera.near,it.shadowCameraFar=tt.camera.far,n.pointShadow[p]=it,n.pointShadowMap[p]=nt,n.pointShadowMatrix[p]=D.shadow.matrix,E++}n.point[p]=Y,p++}else if(D.isHemisphereLight){const Y=t.get(D);Y.skyColor.copy(D.color).multiplyScalar($),Y.groundColor.copy(D.groundColor).multiplyScalar($),n.hemi[x]=Y,x++}}T>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const P=n.hash;(P.sunLength!==f||P.directionalLength!==m||P.pointLength!==p||P.spotLength!==y||P.rectAreaLength!==T||P.hemiLength!==x||P.numSunShadows!==g||P.numDirectionalShadows!==w||P.numPointShadows!==E||P.numSpotShadows!==R||P.numSpotMaps!==_||P.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=m,n.spot.length=y,n.rectArea.length=T,n.point.length=p,n.hemi.length=x,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+_-b,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=C,P.sunLength=f,P.directionalLength=m,P.pointLength=p,P.spotLength=y,P.rectAreaLength=T,P.hemiLength=x,P.numSunShadows=g,P.numDirectionalShadows=w,P.numPointShadows=E,P.numSpotShadows=R,P.numSpotMaps=_,P.numLightProbes=C,n.version=jg++)}function c(l,h){let d=0,u=0,f=0,g=0,M=0,m=0;const p=h.matrixWorldInverse;for(let y=0,T=l.length;y<T;y++){const x=l[y];if(x.isSunLight){const w=n.sun[d];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(p),d++}else if(x.isDirectionalLight){const w=n.directional[u];w.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(p),u++}else if(x.isSpotLight){const w=n.spot[g];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(p),g++}else if(x.isRectAreaLight){const w=n.rectArea[M];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(x.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(x.width*.5,0,0),w.halfHeight.set(0,x.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),M++}else if(x.isPointLight){const w=n.point[f];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){const w=n.hemi[m];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:n}}function Xc(s){const t=new e_(s),e=[],n=[],i=[];function r(u){d.camera=u,e.length=0,n.length=0,i.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function c(u){i.push(u)}function l(){t.setup(e)}function h(u){t.setupView(e,u)}const d={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function n_(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new Xc(s),t.set(i,[o])):r>=a.length?(o=new Xc(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const i_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,r_=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],a_=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],qc=new le,Ls=new I,Xa=new I;function o_(s,t,e){let n=new gl;const i=new Nt,r=new Nt,a=new Ee,o=new mf,c=new gf,l={},h=e.maxTextureSize,d={[Ti]:rn,[rn]:Ti,[we]:we},u=new Ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:i_,fragmentShader:s_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new ve;g.setAttribute("position",new Ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new X(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fs;let p=this.type;this.render=function(E,R,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===kd&&(Ut("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Fs);const b=s.getRenderTarget(),C=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),U=s.state;U.setBlending(Zn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const G=p!==this.type;G&&R.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(B=>B.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,B=E.length;D<B;D++){const $=E[D],W=$.shadow;if(W===void 0){Ut("WebGLShadowMap:",$,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const nt=W.getFrameExtents();i.multiply(nt),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/nt.x),i.x=r.x*nt.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/nt.y),i.y=r.y*nt.y,W.mapSize.y=r.y));const Y=s.state.buffers.depth.getReversed();if(W.camera._reversedDepth=Y,W.map===null||G===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Us){if($.isPointLight){Ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Rn(i.x,i.y,{format:Ri,type:Gn,minFilter:Ke,magFilter:Ke,generateMipmaps:!1}),W.map.texture.name=$.name+".shadowMap",W.map.depthTexture=new Xs(i.x,i.y,Tn),W.map.depthTexture.name=$.name+".shadowMapDepth",W.map.depthTexture.format=Qn,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=We,W.map.depthTexture.magFilter=We}else $.isPointLight?(W.map=new Jh(i.x),W.map.depthTexture=new cf(i.x,zn)):(W.map=new Rn(i.x,i.y),W.map.depthTexture=new Xs(i.x,i.y,zn)),W.map.depthTexture.name=$.name+".shadowMap",W.map.depthTexture.format=Qn,this.type===Fs?(W.map.depthTexture.compareFunction=Y?dl:hl,W.map.depthTexture.minFilter=Ke,W.map.depthTexture.magFilter=Ke):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=We,W.map.depthTexture.magFilter=We);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==i.x||W.map.height!==i.y)&&W.map.setSize(i.x,i.y);const tt=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();$.isPointLight!==!0&&W.updateMatrices($,_);for(let it=0;it<tt;it++){const It=W.getCamera(it);if($.isPointLight){const Rt=W.camera,ue=W.matrix,Kt=$.distance||Rt.far;Kt!==Rt.far&&(Rt.far=Kt,Rt.updateProjectionMatrix()),Ls.setFromMatrixPosition($.matrixWorld),Rt.position.copy(Ls),Xa.copy(Rt.position),Xa.add(r_[it]),Rt.up.copy(a_[it]),Rt.lookAt(Xa),Rt.updateMatrixWorld(),ue.makeTranslation(-Ls.x,-Ls.y,-Ls.z),qc.multiplyMatrices(Rt.projectionMatrix,Rt.matrixWorldInverse),W._frustum.setFromProjectionMatrix(qc,Rt.coordinateSystem,Rt.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)s.setRenderTarget(W.map,it),s.clear();else{it===0&&(s.setRenderTarget(W.map),s.clear());const Rt=W.getViewport(it);a.set(r.x*Rt.x,r.y*Rt.y,r.x*Rt.z,r.y*Rt.w),U.viewport(a)}n=W.getFrustum(it),x(R,_,It,$,this.type)}W.isPointLightShadow!==!0&&this.type===Us&&y(W,_),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(b,C,P)};function y(E,R){const _=t.update(M);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new Rn(i.x,i.y,{format:Ri,type:Gn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(R,null,_,u,M,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(R,null,_,f,M,null)}function T(E,R,_,b){let C=null;const P=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)C=P;else if(C=_.isPointLight===!0?c:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const U=C.uuid,G=R.uuid;let D=l[U];D===void 0&&(D={},l[U]=D);let B=D[G];B===void 0&&(B=C.clone(),D[G]=B,R.addEventListener("dispose",w)),C=B}if(C.visible=R.visible,C.wireframe=R.wireframe,b===Us?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:d[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const U=s.properties.get(C);U.light=_}return C}function x(E,R,_,b,C){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===Us)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);const G=t.update(E),D=E.material;if(Array.isArray(D)){const B=G.groups;for(let $=0,W=B.length;$<W;$++){const nt=B[$],Y=D[nt.materialIndex];if(Y&&Y.visible){const tt=T(E,Y,b,C);E.onBeforeShadow(s,E,R,_,G,tt,nt),s.renderBufferDirect(_,null,G,tt,E,nt),E.onAfterShadow(s,E,R,_,G,tt,nt)}}}else if(D.visible){const B=T(E,D,b,C);E.onBeforeShadow(s,E,R,_,G,B,null),s.renderBufferDirect(_,null,G,B,E,null),E.onAfterShadow(s,E,R,_,G,B,null)}}const U=E.children;for(let G=0,D=U.length;G<D;G++)x(U[G],R,_,b,C)}function w(E){E.target.removeEventListener("dispose",w);for(const _ in l){const b=l[_],C=E.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}function l_(s,t){function e(){let N=!1;const ct=new Ee;let J=null;const ht=new Ee(0,0,0,0);return{setMask:function(mt){J!==mt&&!N&&(s.colorMask(mt,mt,mt,mt),J=mt)},setLocked:function(mt){N=mt},setClear:function(mt,et,Ct,bt,pe){pe===!0&&(mt*=bt,et*=bt,Ct*=bt),ct.set(mt,et,Ct,bt),ht.equals(ct)===!1&&(s.clearColor(mt,et,Ct,bt),ht.copy(ct))},reset:function(){N=!1,J=null,ht.set(-1,0,0,0)}}}function n(){let N=!1,ct=!1,J=null,ht=null,mt=null;return{setReversed:function(et){if(ct!==et){const Ct=t.get("EXT_clip_control");et?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),ct=et;const bt=mt;mt=null,this.setClear(bt)}},getReversed:function(){return ct},setTest:function(et){et?j(s.DEPTH_TEST):Mt(s.DEPTH_TEST)},setMask:function(et){J!==et&&!N&&(s.depthMask(et),J=et)},setFunc:function(et){if(ct&&(et=vu[et]),ht!==et){switch(et){case ro:s.depthFunc(s.NEVER);break;case ao:s.depthFunc(s.ALWAYS);break;case oo:s.depthFunc(s.LESS);break;case zs:s.depthFunc(s.LEQUAL);break;case lo:s.depthFunc(s.EQUAL);break;case co:s.depthFunc(s.GEQUAL);break;case ho:s.depthFunc(s.GREATER);break;case uo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ht=et}},setLocked:function(et){N=et},setClear:function(et){mt!==et&&(mt=et,ct&&(et=1-et),s.clearDepth(et))},reset:function(){N=!1,J=null,ht=null,mt=null,ct=!1}}}function i(){let N=!1,ct=null,J=null,ht=null,mt=null,et=null,Ct=null,bt=null,pe=null;return{setTest:function(ie){N||(ie?j(s.STENCIL_TEST):Mt(s.STENCIL_TEST))},setMask:function(ie){ct!==ie&&!N&&(s.stencilMask(ie),ct=ie)},setFunc:function(ie,Mn,Cn){(J!==ie||ht!==Mn||mt!==Cn)&&(s.stencilFunc(ie,Mn,Cn),J=ie,ht=Mn,mt=Cn)},setOp:function(ie,Mn,Cn){(et!==ie||Ct!==Mn||bt!==Cn)&&(s.stencilOp(ie,Mn,Cn),et=ie,Ct=Mn,bt=Cn)},setLocked:function(ie){N=ie},setClear:function(ie){pe!==ie&&(s.clearStencil(ie),pe=ie)},reset:function(){N=!1,ct=null,J=null,ht=null,mt=null,et=null,Ct=null,bt=null,pe=null}}}const r=new e,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let h={},d={},u={},f=new WeakMap,g=[],M=null,m=!1,p=null,y=null,T=null,x=null,w=null,E=null,R=null,_=new Dt(0,0,0),b=0,C=!1,P=null,U=null,G=null,D=null,B=null;const $=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,nt=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(Y)[1]),W=nt>=1):Y.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),W=nt>=2);let tt=null,it={};const It=s.getParameter(s.SCISSOR_BOX),Rt=s.getParameter(s.VIEWPORT),ue=new Ee().fromArray(It),Kt=new Ee().fromArray(Rt);function ne(N,ct,J,ht){const mt=new Uint8Array(4),et=s.createTexture();s.bindTexture(N,et),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ct=0;Ct<J;Ct++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(ct,0,s.RGBA,1,1,ht,0,s.RGBA,s.UNSIGNED_BYTE,mt):s.texImage2D(ct+Ct,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,mt);return et}const Z={};Z[s.TEXTURE_2D]=ne(s.TEXTURE_2D,s.TEXTURE_2D,1),Z[s.TEXTURE_CUBE_MAP]=ne(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[s.TEXTURE_2D_ARRAY]=ne(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Z[s.TEXTURE_3D]=ne(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(s.DEPTH_TEST),a.setFunc(zs),qt(!1),Me(Gl),j(s.CULL_FACE),te(Zn);function j(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function Mt(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function Ft(N,ct){return u[N]!==ct?(s.bindFramebuffer(N,ct),u[N]=ct,N===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ct),N===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ct),!0):!1}function xt(N,ct){let J=g,ht=!1;if(N){J=f.get(ct),J===void 0&&(J=[],f.set(ct,J));const mt=N.textures;if(J.length!==mt.length||J[0]!==s.COLOR_ATTACHMENT0){for(let et=0,Ct=mt.length;et<Ct;et++)J[et]=s.COLOR_ATTACHMENT0+et;J.length=mt.length,ht=!0}}else J[0]!==s.BACK&&(J[0]=s.BACK,ht=!0);ht&&s.drawBuffers(J)}function Vt(N){return M!==N?(s.useProgram(N),M=N,!0):!1}const Ne={[ji]:s.FUNC_ADD,[Gd]:s.FUNC_SUBTRACT,[Hd]:s.FUNC_REVERSE_SUBTRACT};Ne[Vd]=s.MIN,Ne[Wd]=s.MAX;const Wt={[Xd]:s.ZERO,[qd]:s.ONE,[Yd]:s.SRC_COLOR,[xh]:s.SRC_ALPHA,[jd]:s.SRC_ALPHA_SATURATE,[Jd]:s.DST_COLOR,[Zd]:s.DST_ALPHA,[$d]:s.ONE_MINUS_SRC_COLOR,[vh]:s.ONE_MINUS_SRC_ALPHA,[Qd]:s.ONE_MINUS_DST_COLOR,[Kd]:s.ONE_MINUS_DST_ALPHA,[tu]:s.CONSTANT_COLOR,[eu]:s.ONE_MINUS_CONSTANT_COLOR,[nu]:s.CONSTANT_ALPHA,[iu]:s.ONE_MINUS_CONSTANT_ALPHA};function te(N,ct,J,ht,mt,et,Ct,bt,pe,ie){if(N===Zn){m===!0&&(Mt(s.BLEND),m=!1);return}if(m===!1&&(j(s.BLEND),m=!0),N!==zd){if(N!==p||ie!==C){if((y!==ji||w!==ji)&&(s.blendEquation(s.FUNC_ADD),y=ji,w=ji),ie)switch(N){case ss:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ge:s.blendFunc(s.ONE,s.ONE);break;case Hl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Vl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Qt("WebGLState: Invalid blending: ",N);break}else switch(N){case ss:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ge:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Hl:Qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vl:Qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qt("WebGLState: Invalid blending: ",N);break}T=null,x=null,E=null,R=null,_.set(0,0,0),b=0,p=N,C=ie}return}mt=mt||ct,et=et||J,Ct=Ct||ht,(ct!==y||mt!==w)&&(s.blendEquationSeparate(Ne[ct],Ne[mt]),y=ct,w=mt),(J!==T||ht!==x||et!==E||Ct!==R)&&(s.blendFuncSeparate(Wt[J],Wt[ht],Wt[et],Wt[Ct]),T=J,x=ht,E=et,R=Ct),(bt.equals(_)===!1||pe!==b)&&(s.blendColor(bt.r,bt.g,bt.b,pe),_.copy(bt),b=pe),p=N,C=!1}function fe(N,ct){N.side===we?Mt(s.CULL_FACE):j(s.CULL_FACE);let J=N.side===rn;ct&&(J=!J),qt(J),N.blending===ss&&N.transparent===!1?te(Zn):te(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const ht=N.stencilWrite;o.setTest(ht),ht&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),on(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?j(s.SAMPLE_ALPHA_TO_COVERAGE):Mt(s.SAMPLE_ALPHA_TO_COVERAGE)}function qt(N){P!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),P=N)}function Me(N){N!==Od?(j(s.CULL_FACE),N!==U&&(N===Gl?s.cullFace(s.BACK):N===Bd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Mt(s.CULL_FACE),U=N}function ke(N){N!==G&&(W&&s.lineWidth(N),G=N)}function on(N,ct,J){N?(j(s.POLYGON_OFFSET_FILL),(D!==ct||B!==J)&&(D=ct,B=J,a.getReversed()&&(ct=-ct),s.polygonOffset(ct,J))):Mt(s.POLYGON_OFFSET_FILL)}function ye(N){N?j(s.SCISSOR_TEST):Mt(s.SCISSOR_TEST)}function Pe(N){N===void 0&&(N=s.TEXTURE0+$-1),tt!==N&&(s.activeTexture(N),tt=N)}function F(N,ct,J){J===void 0&&(tt===null?J=s.TEXTURE0+$-1:J=tt);let ht=it[J];ht===void 0&&(ht={type:void 0,texture:void 0},it[J]=ht),(ht.type!==N||ht.texture!==ct)&&(tt!==J&&(s.activeTexture(J),tt=J),s.bindTexture(N,ct||Z[N]),ht.type=N,ht.texture=ct)}function Xe(){const N=it[tt];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function re(){try{s.compressedTexImage2D(...arguments)}catch(N){Qt("WebGLState:",N)}}function A(){try{s.compressedTexImage3D(...arguments)}catch(N){Qt("WebGLState:",N)}}function v(){try{s.texSubImage2D(...arguments)}catch(N){Qt("WebGLState:",N)}}function O(){try{s.texSubImage3D(...arguments)}catch(N){Qt("WebGLState:",N)}}function H(){try{s.compressedTexSubImage2D(...arguments)}catch(N){Qt("WebGLState:",N)}}function q(){try{s.compressedTexSubImage3D(...arguments)}catch(N){Qt("WebGLState:",N)}}function rt(){try{s.texStorage2D(...arguments)}catch(N){Qt("WebGLState:",N)}}function at(){try{s.texStorage3D(...arguments)}catch(N){Qt("WebGLState:",N)}}function K(){try{s.texImage2D(...arguments)}catch(N){Qt("WebGLState:",N)}}function Q(){try{s.texImage3D(...arguments)}catch(N){Qt("WebGLState:",N)}}function ot(N){return d[N]!==void 0?d[N]:s.getParameter(N)}function Tt(N,ct){d[N]!==ct&&(s.pixelStorei(N,ct),d[N]=ct)}function dt(N){ue.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),ue.copy(N))}function lt(N){Kt.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),Kt.copy(N))}function At(N,ct){let J=l.get(ct);J===void 0&&(J=new WeakMap,l.set(ct,J));let ht=J.get(N);ht===void 0&&(ht=s.getUniformBlockIndex(ct,N.name),J.set(N,ht))}function Lt(N,ct){const ht=l.get(ct).get(N);c.get(ct)!==ht&&(s.uniformBlockBinding(ct,ht,N.__bindingPointIndex),c.set(ct,ht))}function Bt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},tt=null,it={},u={},f=new WeakMap,g=[],M=null,m=!1,p=null,y=null,T=null,x=null,w=null,E=null,R=null,_=new Dt(0,0,0),b=0,C=!1,P=null,U=null,G=null,D=null,B=null,ue.set(0,0,s.canvas.width,s.canvas.height),Kt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:Mt,bindFramebuffer:Ft,drawBuffers:xt,useProgram:Vt,setBlending:te,setMaterial:fe,setFlipSided:qt,setCullFace:Me,setLineWidth:ke,setPolygonOffset:on,setScissorTest:ye,activeTexture:Pe,bindTexture:F,unbindTexture:Xe,compressedTexImage2D:re,compressedTexImage3D:A,texImage2D:K,texImage3D:Q,pixelStorei:Tt,getParameter:ot,updateUBOMapping:At,uniformBlockBinding:Lt,texStorage2D:rt,texStorage3D:at,texSubImage2D:v,texSubImage3D:O,compressedTexSubImage2D:H,compressedTexSubImage3D:q,scissor:dt,viewport:lt,reset:Bt}}function c_(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Nt,h=new WeakMap,d=new Set;let u;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(A,v){return g?new OffscreenCanvas(A,v):Yr("canvas")}function m(A,v,O){let H=1;const q=re(A);if((q.width>O||q.height>O)&&(H=O/Math.max(q.width,q.height)),H<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const rt=Math.floor(H*q.width),at=Math.floor(H*q.height);u===void 0&&(u=M(rt,at));const K=v?M(rt,at):u;return K.width=rt,K.height=at,K.getContext("2d").drawImage(A,0,0,rt,at),Ut("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+rt+"x"+at+")."),K}else return"data"in A&&Ut("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),A;return A}function p(A){return A.generateMipmaps}function y(A){s.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(A,v,O,H,q,rt=!1){if(A!==null){if(s[A]!==void 0)return s[A];Ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let at;H&&(at=t.get("EXT_texture_norm16"),at||Ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=v;if(v===s.RED&&(O===s.FLOAT&&(K=s.R32F),O===s.HALF_FLOAT&&(K=s.R16F),O===s.UNSIGNED_BYTE&&(K=s.R8),O===s.UNSIGNED_SHORT&&at&&(K=at.R16_EXT),O===s.SHORT&&at&&(K=at.R16_SNORM_EXT)),v===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(K=s.R8UI),O===s.UNSIGNED_SHORT&&(K=s.R16UI),O===s.UNSIGNED_INT&&(K=s.R32UI),O===s.BYTE&&(K=s.R8I),O===s.SHORT&&(K=s.R16I),O===s.INT&&(K=s.R32I)),v===s.RG&&(O===s.FLOAT&&(K=s.RG32F),O===s.HALF_FLOAT&&(K=s.RG16F),O===s.UNSIGNED_BYTE&&(K=s.RG8),O===s.UNSIGNED_SHORT&&at&&(K=at.RG16_EXT),O===s.SHORT&&at&&(K=at.RG16_SNORM_EXT)),v===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(K=s.RG8UI),O===s.UNSIGNED_SHORT&&(K=s.RG16UI),O===s.UNSIGNED_INT&&(K=s.RG32UI),O===s.BYTE&&(K=s.RG8I),O===s.SHORT&&(K=s.RG16I),O===s.INT&&(K=s.RG32I)),v===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(K=s.RGB8UI),O===s.UNSIGNED_SHORT&&(K=s.RGB16UI),O===s.UNSIGNED_INT&&(K=s.RGB32UI),O===s.BYTE&&(K=s.RGB8I),O===s.SHORT&&(K=s.RGB16I),O===s.INT&&(K=s.RGB32I)),v===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),O===s.UNSIGNED_INT&&(K=s.RGBA32UI),O===s.BYTE&&(K=s.RGBA8I),O===s.SHORT&&(K=s.RGBA16I),O===s.INT&&(K=s.RGBA32I)),v===s.RGB&&(O===s.UNSIGNED_SHORT&&at&&(K=at.RGB16_EXT),O===s.SHORT&&at&&(K=at.RGB16_SNORM_EXT),O===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),O===s.UNSIGNED_INT_10F_11F_11F_REV&&(K=s.R11F_G11F_B10F)),v===s.RGBA){const Q=rt?qr:Zt.getTransfer(q);O===s.FLOAT&&(K=s.RGBA32F),O===s.HALF_FLOAT&&(K=s.RGBA16F),O===s.UNSIGNED_BYTE&&(K=Q===ae?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT&&at&&(K=at.RGBA16_EXT),O===s.SHORT&&at&&(K=at.RGBA16_SNORM_EXT),O===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function w(A,v){let O;return A?v===null||v===zn||v===Hs?O=s.DEPTH24_STENCIL8:v===Tn?O=s.DEPTH32F_STENCIL8:v===Gs&&(O=s.DEPTH24_STENCIL8,Ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===zn||v===Hs?O=s.DEPTH_COMPONENT24:v===Tn?O=s.DEPTH_COMPONENT32F:v===Gs&&(O=s.DEPTH_COMPONENT16),O}function E(A,v){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==We&&A.minFilter!==Ke?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function R(A){const v=A.target;v.removeEventListener("dispose",R),b(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&d.delete(v)}function _(A){const v=A.target;v.removeEventListener("dispose",_),P(v)}function b(A){const v=n.get(A);if(v.__webglInit===void 0)return;const O=A.source,H=f.get(O);if(H){const q=H[v.__cacheKey];q.usedTimes--,q.usedTimes===0&&C(A),Object.keys(H).length===0&&f.delete(O)}n.remove(A)}function C(A){const v=n.get(A);s.deleteTexture(v.__webglTexture);const O=A.source,H=f.get(O);delete H[v.__cacheKey],a.memory.textures--}function P(A){const v=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(v.__webglFramebuffer[H]))for(let q=0;q<v.__webglFramebuffer[H].length;q++)s.deleteFramebuffer(v.__webglFramebuffer[H][q]);else s.deleteFramebuffer(v.__webglFramebuffer[H]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[H])}else{if(Array.isArray(v.__webglFramebuffer))for(let H=0;H<v.__webglFramebuffer.length;H++)s.deleteFramebuffer(v.__webglFramebuffer[H]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let H=0;H<v.__webglColorRenderbuffer.length;H++)v.__webglColorRenderbuffer[H]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[H]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const O=A.textures;for(let H=0,q=O.length;H<q;H++){const rt=n.get(O[H]);rt.__webglTexture&&(s.deleteTexture(rt.__webglTexture),a.memory.textures--),n.remove(O[H])}n.remove(A)}let U=0;function G(){U=0}function D(){return U}function B(A){U=A}function $(){const A=U;return A>=i.maxTextures&&Ut("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+i.maxTextures),U+=1,A}function W(A){const v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function nt(A,v){const O=n.get(A);if(A.isVideoTexture&&F(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&O.__version!==A.version){const H=A.image;if(H===null)Ut("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Ut("WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(O,A,v);return}}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+v)}function Y(A,v){const O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){Mt(O,A,v);return}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+v)}function tt(A,v){const O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){Mt(O,A,v);return}e.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+v)}function it(A,v){const O=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&O.__version!==A.version){Ft(O,A,v);return}e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+v)}const It={[fo]:s.REPEAT,[$n]:s.CLAMP_TO_EDGE,[po]:s.MIRRORED_REPEAT},Rt={[We]:s.NEAREST,[au]:s.NEAREST_MIPMAP_NEAREST,[sr]:s.NEAREST_MIPMAP_LINEAR,[Ke]:s.LINEAR,[pa]:s.LINEAR_MIPMAP_NEAREST,[wi]:s.LINEAR_MIPMAP_LINEAR},ue={[hu]:s.NEVER,[mu]:s.ALWAYS,[du]:s.LESS,[hl]:s.LEQUAL,[uu]:s.EQUAL,[dl]:s.GEQUAL,[fu]:s.GREATER,[pu]:s.NOTEQUAL};function Kt(A,v){if(v.type===Tn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Ke||v.magFilter===pa||v.magFilter===sr||v.magFilter===wi||v.minFilter===Ke||v.minFilter===pa||v.minFilter===sr||v.minFilter===wi)&&Ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,It[v.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,It[v.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,It[v.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,Rt[v.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,Rt[v.minFilter]),v.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,ue[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===We||v.minFilter!==sr&&v.minFilter!==wi||v.type===Tn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ne(A,v){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",R));const H=v.source;let q=f.get(H);q===void 0&&(q={},f.set(H,q));const rt=W(v);if(rt!==A.__cacheKey){q[rt]===void 0&&(q[rt]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),q[rt].usedTimes++;const at=q[A.__cacheKey];at!==void 0&&(q[A.__cacheKey].usedTimes--,at.usedTimes===0&&C(v)),A.__cacheKey=rt,A.__webglTexture=q[rt].texture}return O}function Z(A,v,O){return Math.floor(Math.floor(A/O)/v)}function j(A,v,O,H){const rt=A.updateRanges;if(rt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,v.width,v.height,O,H,v.data);else{rt.sort((Tt,dt)=>Tt.start-dt.start);let at=0;for(let Tt=1;Tt<rt.length;Tt++){const dt=rt[at],lt=rt[Tt],At=dt.start+dt.count,Lt=Z(lt.start,v.width,4),Bt=Z(dt.start,v.width,4);lt.start<=At+1&&Lt===Bt&&Z(lt.start+lt.count-1,v.width,4)===Lt?dt.count=Math.max(dt.count,lt.start+lt.count-dt.start):(++at,rt[at]=lt)}rt.length=at+1;const K=e.getParameter(s.UNPACK_ROW_LENGTH),Q=e.getParameter(s.UNPACK_SKIP_PIXELS),ot=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,v.width);for(let Tt=0,dt=rt.length;Tt<dt;Tt++){const lt=rt[Tt],At=Math.floor(lt.start/4),Lt=Math.ceil(lt.count/4),Bt=At%v.width,N=Math.floor(At/v.width),ct=Lt,J=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Bt),e.pixelStorei(s.UNPACK_SKIP_ROWS,N),e.texSubImage2D(s.TEXTURE_2D,0,Bt,N,ct,J,O,H,v.data)}A.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,K),e.pixelStorei(s.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(s.UNPACK_SKIP_ROWS,ot)}}function Mt(A,v,O){let H=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(H=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(H=s.TEXTURE_3D);const q=ne(A,v),rt=v.source;e.bindTexture(H,A.__webglTexture,s.TEXTURE0+O);const at=n.get(rt);if(rt.version!==at.__version||q===!0){if(e.activeTexture(s.TEXTURE0+O),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const J=Zt.getPrimaries(Zt.workingColorSpace),ht=v.colorSpace===hi?null:Zt.getPrimaries(v.colorSpace),mt=v.colorSpace===hi||J===ht?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt)}e.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment);let Q=m(v.image,!1,i.maxTextureSize);Q=Xe(v,Q);const ot=r.convert(v.format,v.colorSpace),Tt=r.convert(v.type);let dt=x(v.internalFormat,ot,Tt,v.normalized,v.colorSpace,v.isVideoTexture);Kt(H,v);let lt;const At=v.mipmaps,Lt=v.isVideoTexture!==!0,Bt=at.__version===void 0||q===!0,N=rt.dataReady,ct=E(v,Q);if(v.isDepthTexture)dt=w(v.format===bi,v.type),Bt&&(Lt?e.texStorage2D(s.TEXTURE_2D,1,dt,Q.width,Q.height):e.texImage2D(s.TEXTURE_2D,0,dt,Q.width,Q.height,0,ot,Tt,null));else if(v.isDataTexture)if(At.length>0){Lt&&Bt&&e.texStorage2D(s.TEXTURE_2D,ct,dt,At[0].width,At[0].height);for(let J=0,ht=At.length;J<ht;J++)lt=At[J],Lt?N&&e.texSubImage2D(s.TEXTURE_2D,J,0,0,lt.width,lt.height,ot,Tt,lt.data):e.texImage2D(s.TEXTURE_2D,J,dt,lt.width,lt.height,0,ot,Tt,lt.data);v.generateMipmaps=!1}else Lt?(Bt&&e.texStorage2D(s.TEXTURE_2D,ct,dt,Q.width,Q.height),N&&j(v,Q,ot,Tt)):e.texImage2D(s.TEXTURE_2D,0,dt,Q.width,Q.height,0,ot,Tt,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Lt&&Bt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ct,dt,At[0].width,At[0].height,Q.depth);for(let J=0,ht=At.length;J<ht;J++)if(lt=At[J],v.format!==An)if(ot!==null)if(Lt){if(N)if(v.layerUpdates.size>0){const mt=bc(lt.width,lt.height,v.format,v.type);for(const et of v.layerUpdates){const Ct=lt.data.subarray(et*mt/lt.data.BYTES_PER_ELEMENT,(et+1)*mt/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,et,lt.width,lt.height,1,ot,Ct)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,lt.width,lt.height,Q.depth,ot,lt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,J,dt,lt.width,lt.height,Q.depth,0,lt.data,0,0);else Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Lt?N&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,lt.width,lt.height,Q.depth,ot,Tt,lt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,J,dt,lt.width,lt.height,Q.depth,0,ot,Tt,lt.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Lt&&Bt&&e.texStorage2D(s.TEXTURE_2D,ct,dt,At[0].width,At[0].height);for(let J=0,ht=At.length;J<ht;J++)lt=At[J],v.format!==An?ot!==null?Lt?N&&e.compressedTexSubImage2D(s.TEXTURE_2D,J,0,0,lt.width,lt.height,ot,lt.data):e.compressedTexImage2D(s.TEXTURE_2D,J,dt,lt.width,lt.height,0,lt.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?N&&e.texSubImage2D(s.TEXTURE_2D,J,0,0,lt.width,lt.height,ot,Tt,lt.data):e.texImage2D(s.TEXTURE_2D,J,dt,lt.width,lt.height,0,ot,Tt,lt.data)}else if(v.isDataArrayTexture)if(Lt){if(Bt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ct,dt,Q.width,Q.height,Q.depth),N)if(v.layerUpdates.size>0){const J=bc(Q.width,Q.height,v.format,v.type);for(const ht of v.layerUpdates){const mt=Q.data.subarray(ht*J/Q.data.BYTES_PER_ELEMENT,(ht+1)*J/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ht,Q.width,Q.height,1,ot,Tt,mt)}v.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ot,Tt,Q.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,dt,Q.width,Q.height,Q.depth,0,ot,Tt,Q.data);else if(v.isData3DTexture)Lt?(Bt&&e.texStorage3D(s.TEXTURE_3D,ct,dt,Q.width,Q.height,Q.depth),N&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ot,Tt,Q.data)):e.texImage3D(s.TEXTURE_3D,0,dt,Q.width,Q.height,Q.depth,0,ot,Tt,Q.data);else if(v.isFramebufferTexture){if(Bt)if(Lt)e.texStorage2D(s.TEXTURE_2D,ct,dt,Q.width,Q.height);else{let J=Q.width,ht=Q.height;for(let mt=0;mt<ct;mt++)e.texImage2D(s.TEXTURE_2D,mt,dt,J,ht,0,ot,Tt,null),J>>=1,ht>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in s){const J=s.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),Q.parentNode!==J){J.appendChild(Q),d.add(v),J.onpaint=ht=>{const mt=ht.changedElements;for(const et of d)mt.includes(et.image)&&(et.needsUpdate=!0)},J.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,Q);else{const mt=s.RGBA,et=s.RGBA,Ct=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,mt,et,Ct,Q)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(At.length>0){if(Lt&&Bt){const J=re(At[0]);e.texStorage2D(s.TEXTURE_2D,ct,dt,J.width,J.height)}for(let J=0,ht=At.length;J<ht;J++)lt=At[J],Lt?N&&e.texSubImage2D(s.TEXTURE_2D,J,0,0,ot,Tt,lt):e.texImage2D(s.TEXTURE_2D,J,dt,ot,Tt,lt);v.generateMipmaps=!1}else if(Lt){if(Bt){const J=re(Q);e.texStorage2D(s.TEXTURE_2D,ct,dt,J.width,J.height)}N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ot,Tt,Q)}else e.texImage2D(s.TEXTURE_2D,0,dt,ot,Tt,Q);p(v)&&y(H),at.__version=rt.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function Ft(A,v,O){if(v.image.length!==6)return;const H=ne(A,v),q=v.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+O);const rt=n.get(q);if(q.version!==rt.__version||H===!0){e.activeTexture(s.TEXTURE0+O);const at=Zt.getPrimaries(Zt.workingColorSpace),K=v.colorSpace===hi?null:Zt.getPrimaries(v.colorSpace),Q=v.colorSpace===hi||at===K?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const ot=v.isCompressedTexture||v.image[0].isCompressedTexture,Tt=v.image[0]&&v.image[0].isDataTexture,dt=[];for(let et=0;et<6;et++)!ot&&!Tt?dt[et]=m(v.image[et],!0,i.maxCubemapSize):dt[et]=Tt?v.image[et].image:v.image[et],dt[et]=Xe(v,dt[et]);const lt=dt[0],At=r.convert(v.format,v.colorSpace),Lt=r.convert(v.type),Bt=x(v.internalFormat,At,Lt,v.normalized,v.colorSpace),N=v.isVideoTexture!==!0,ct=rt.__version===void 0||H===!0,J=q.dataReady;let ht=E(v,lt);Kt(s.TEXTURE_CUBE_MAP,v);let mt;if(ot){N&&ct&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ht,Bt,lt.width,lt.height);for(let et=0;et<6;et++){mt=dt[et].mipmaps;for(let Ct=0;Ct<mt.length;Ct++){const bt=mt[Ct];v.format!==An?At!==null?N?J&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ct,0,0,bt.width,bt.height,At,bt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ct,Bt,bt.width,bt.height,0,bt.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?J&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ct,0,0,bt.width,bt.height,At,Lt,bt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ct,Bt,bt.width,bt.height,0,At,Lt,bt.data)}}}else{if(mt=v.mipmaps,N&&ct){mt.length>0&&ht++;const et=re(dt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ht,Bt,et.width,et.height)}for(let et=0;et<6;et++)if(Tt){N?J&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,dt[et].width,dt[et].height,At,Lt,dt[et].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Bt,dt[et].width,dt[et].height,0,At,Lt,dt[et].data);for(let Ct=0;Ct<mt.length;Ct++){const pe=mt[Ct].image[et].image;N?J&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ct+1,0,0,pe.width,pe.height,At,Lt,pe.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ct+1,Bt,pe.width,pe.height,0,At,Lt,pe.data)}}else{N?J&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,At,Lt,dt[et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Bt,At,Lt,dt[et]);for(let Ct=0;Ct<mt.length;Ct++){const bt=mt[Ct];N?J&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ct+1,0,0,At,Lt,bt.image[et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ct+1,Bt,At,Lt,bt.image[et])}}}p(v)&&y(s.TEXTURE_CUBE_MAP),rt.__version=q.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function xt(A,v,O,H,q,rt){const at=r.convert(O.format,O.colorSpace),K=r.convert(O.type),Q=x(O.internalFormat,at,K,O.normalized,O.colorSpace),ot=n.get(v),Tt=n.get(O);if(Tt.__renderTarget=v,!ot.__hasExternalTextures){const dt=Math.max(1,v.width>>rt),lt=Math.max(1,v.height>>rt);q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?e.texImage3D(q,rt,Q,dt,lt,v.depth,0,at,K,null):e.texImage2D(q,rt,Q,dt,lt,0,at,K,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),Pe(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,H,q,Tt.__webglTexture,0,ye(v)):(q===s.TEXTURE_2D||q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,H,q,Tt.__webglTexture,rt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Vt(A,v,O){if(s.bindRenderbuffer(s.RENDERBUFFER,A),v.depthBuffer){const H=v.depthTexture,q=H&&H.isDepthTexture?H.type:null,rt=w(v.stencilBuffer,q),at=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Pe(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ye(v),rt,v.width,v.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,ye(v),rt,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,rt,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,at,s.RENDERBUFFER,A)}else{const H=v.textures;for(let q=0;q<H.length;q++){const rt=H[q],at=r.convert(rt.format,rt.colorSpace),K=r.convert(rt.type),Q=x(rt.internalFormat,at,K,rt.normalized,rt.colorSpace);Pe(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ye(v),Q,v.width,v.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,ye(v),Q,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,Q,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ne(A,v,O){const H=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const q=n.get(v.depthTexture);if(q.__renderTarget=v,(!q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),H){if(q.__webglInit===void 0&&(q.__webglInit=!0,v.depthTexture.addEventListener("dispose",R)),q.__webglTexture===void 0){q.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture),Kt(s.TEXTURE_CUBE_MAP,v.depthTexture);const ot=r.convert(v.depthTexture.format),Tt=r.convert(v.depthTexture.type);let dt;v.depthTexture.format===Qn?dt=s.DEPTH_COMPONENT24:v.depthTexture.format===bi&&(dt=s.DEPTH24_STENCIL8);for(let lt=0;lt<6;lt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,dt,v.width,v.height,0,ot,Tt,null)}}else nt(v.depthTexture,0);const rt=q.__webglTexture,at=ye(v),K=H?s.TEXTURE_CUBE_MAP_POSITIVE_X+O:s.TEXTURE_2D,Q=v.depthTexture.format===bi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(v.depthTexture.format===Qn)Pe(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,K,rt,0,at):s.framebufferTexture2D(s.FRAMEBUFFER,Q,K,rt,0);else if(v.depthTexture.format===bi)Pe(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,K,rt,0,at):s.framebufferTexture2D(s.FRAMEBUFFER,Q,K,rt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Wt(A){const v=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){const H=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),H){const q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,H.removeEventListener("dispose",q)};H.addEventListener("dispose",q),v.__depthDisposeCallback=q}v.__boundDepthTexture=H}if(A.depthTexture&&!v.__autoAllocateDepthBuffer)if(O)for(let H=0;H<6;H++)Ne(v.__webglFramebuffer[H],A,H);else{const H=A.texture.mipmaps;H&&H.length>0?Ne(v.__webglFramebuffer[0],A,0):Ne(v.__webglFramebuffer,A,0)}else if(O){v.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[H]),v.__webglDepthbuffer[H]===void 0)v.__webglDepthbuffer[H]=s.createRenderbuffer(),Vt(v.__webglDepthbuffer[H],A,!1);else{const q=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,rt=v.__webglDepthbuffer[H];s.bindRenderbuffer(s.RENDERBUFFER,rt),s.framebufferRenderbuffer(s.FRAMEBUFFER,q,s.RENDERBUFFER,rt)}}else{const H=A.texture.mipmaps;if(H&&H.length>0?e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),Vt(v.__webglDepthbuffer,A,!1);else{const q=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,rt=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,rt),s.framebufferRenderbuffer(s.FRAMEBUFFER,q,s.RENDERBUFFER,rt)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function te(A,v,O){const H=n.get(A);v!==void 0&&xt(H.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&Wt(A)}function fe(A){const v=A.texture,O=n.get(A),H=n.get(v);A.addEventListener("dispose",_);const q=A.textures,rt=A.isWebGLCubeRenderTarget===!0,at=q.length>1;if(at||(H.__webglTexture===void 0&&(H.__webglTexture=s.createTexture()),H.__version=v.version,a.memory.textures++),rt){O.__webglFramebuffer=[];for(let K=0;K<6;K++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[K]=[];for(let Q=0;Q<v.mipmaps.length;Q++)O.__webglFramebuffer[K][Q]=s.createFramebuffer()}else O.__webglFramebuffer[K]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let K=0;K<v.mipmaps.length;K++)O.__webglFramebuffer[K]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(at)for(let K=0,Q=q.length;K<Q;K++){const ot=n.get(q[K]);ot.__webglTexture===void 0&&(ot.__webglTexture=s.createTexture(),a.memory.textures++)}if(A.samples>0&&Pe(A)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let K=0;K<q.length;K++){const Q=q[K];O.__webglColorRenderbuffer[K]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[K]);const ot=r.convert(Q.format,Q.colorSpace),Tt=r.convert(Q.type),dt=x(Q.internalFormat,ot,Tt,Q.normalized,Q.colorSpace,A.isXRRenderTarget===!0),lt=ye(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,dt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+K,s.RENDERBUFFER,O.__webglColorRenderbuffer[K])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),Vt(O.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(rt){e.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture),Kt(s.TEXTURE_CUBE_MAP,v);for(let K=0;K<6;K++)if(v.mipmaps&&v.mipmaps.length>0)for(let Q=0;Q<v.mipmaps.length;Q++)xt(O.__webglFramebuffer[K][Q],A,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+K,Q);else xt(O.__webglFramebuffer[K],A,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);p(v)&&y(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){for(let K=0,Q=q.length;K<Q;K++){const ot=q[K],Tt=n.get(ot);let dt=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(dt=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(dt,Tt.__webglTexture),Kt(dt,ot),xt(O.__webglFramebuffer,A,ot,s.COLOR_ATTACHMENT0+K,dt,0),p(ot)&&y(dt)}e.unbindTexture()}else{let K=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(K,H.__webglTexture),Kt(K,v),v.mipmaps&&v.mipmaps.length>0)for(let Q=0;Q<v.mipmaps.length;Q++)xt(O.__webglFramebuffer[Q],A,v,s.COLOR_ATTACHMENT0,K,Q);else xt(O.__webglFramebuffer,A,v,s.COLOR_ATTACHMENT0,K,0);p(v)&&y(K),e.unbindTexture()}A.depthBuffer&&Wt(A)}function qt(A){const v=A.textures;for(let O=0,H=v.length;O<H;O++){const q=v[O];if(p(q)){const rt=T(A),at=n.get(q).__webglTexture;e.bindTexture(rt,at),y(rt),e.unbindTexture()}}}const Me=[],ke=[];function on(A){if(A.samples>0){if(Pe(A)===!1){const v=A.textures,O=A.width,H=A.height;let q=s.COLOR_BUFFER_BIT;const rt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=n.get(A),K=v.length>1;if(K)for(let ot=0;ot<v.length;ot++)e.bindFramebuffer(s.FRAMEBUFFER,at.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ot,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,at.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ot,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer);const Q=A.texture.mipmaps;Q&&Q.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,at.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let ot=0;ot<v.length;ot++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(q|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(q|=s.STENCIL_BUFFER_BIT)),K){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,at.__webglColorRenderbuffer[ot]);const Tt=n.get(v[ot]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Tt,0)}s.blitFramebuffer(0,0,O,H,0,0,O,H,q,s.NEAREST),c===!0&&(Me.length=0,ke.length=0,Me.push(s.COLOR_ATTACHMENT0+ot),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(Me.push(rt),ke.push(rt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ke)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Me))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),K)for(let ot=0;ot<v.length;ot++){e.bindFramebuffer(s.FRAMEBUFFER,at.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ot,s.RENDERBUFFER,at.__webglColorRenderbuffer[ot]);const Tt=n.get(v[ot]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,at.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ot,s.TEXTURE_2D,Tt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){const v=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function ye(A){return Math.min(i.maxSamples,A.samples)}function Pe(A){const v=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function F(A){const v=a.render.frame;h.get(A)!==v&&(h.set(A,v),A.update())}function Xe(A,v){const O=A.colorSpace,H=A.format,q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==Xr&&O!==hi&&(Zt.getTransfer(O)===ae?(H!==An||q!==pn)&&Ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qt("WebGLTextures: Unsupported texture color space:",O)),v}function re(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=$,this.resetTextureUnits=G,this.getTextureUnits=D,this.setTextureUnits=B,this.setTexture2D=nt,this.setTexture2DArray=Y,this.setTexture3D=tt,this.setTextureCube=it,this.rebindTextures=te,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=on,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Pe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function h_(s,t){function e(n,i=hi){let r;const a=Zt.getTransfer(i);if(n===pn)return s.UNSIGNED_BYTE;if(n===sl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===rl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Ph)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Ih)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Rh)return s.BYTE;if(n===Ch)return s.SHORT;if(n===Gs)return s.UNSIGNED_SHORT;if(n===il)return s.INT;if(n===zn)return s.UNSIGNED_INT;if(n===Tn)return s.FLOAT;if(n===Gn)return s.HALF_FLOAT;if(n===Lh)return s.ALPHA;if(n===Dh)return s.RGB;if(n===An)return s.RGBA;if(n===Qn)return s.DEPTH_COMPONENT;if(n===bi)return s.DEPTH_STENCIL;if(n===al)return s.RED;if(n===ol)return s.RED_INTEGER;if(n===Ri)return s.RG;if(n===ll)return s.RG_INTEGER;if(n===cl)return s.RGBA_INTEGER;if(n===Fr||n===Or||n===Br||n===kr)if(a===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===mo||n===go||n===_o||n===xo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===mo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===go)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_o)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vo||n===Mo||n===So||n===yo||n===wo||n===Vr||n===bo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===vo||n===Mo)return a===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===So)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===yo)return r.COMPRESSED_R11_EAC;if(n===wo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Vr)return r.COMPRESSED_RG11_EAC;if(n===bo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Eo||n===To||n===Ao||n===Ro||n===Co||n===Po||n===Io||n===Lo||n===Do||n===Uo||n===No||n===Fo||n===Oo||n===Bo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Eo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===To)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ao)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ro)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Co)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Po)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Io)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Lo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Do)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Uo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===No)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Oo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ko||n===zo||n===Go)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ko)return a===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Go)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ho||n===Vo||n===Wr||n===Wo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ho)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Vo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const d_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,u_=`
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

}`;class f_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Wh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ve({vertexShader:d_,fragmentShader:u_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new X(new Ks(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class p_ extends Pi{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null;const M=typeof XRWebGLBinding<"u",m=new f_,p={},y=e.getContextAttributes();let T=null,x=null;const w=[],E=[],R=new Nt;let _=null,b=null;const C=new un;C.viewport=new Ee;const P=new un;P.viewport=new Ee;const U=[C,P],G=new Sf;let D=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let j=w[Z];return j===void 0&&(j=new Sa,w[Z]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Z){let j=w[Z];return j===void 0&&(j=new Sa,w[Z]=j),j.getGripSpace()},this.getHand=function(Z){let j=w[Z];return j===void 0&&(j=new Sa,w[Z]=j),j.getHandSpace()};function $(Z){const j=E.indexOf(Z.inputSource);if(j===-1)return;const Mt=w[j];Mt!==void 0&&(Mt.update(Z.inputSource,Z.frame,l||a),Mt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function W(){i.removeEventListener("select",$),i.removeEventListener("selectstart",$),i.removeEventListener("selectend",$),i.removeEventListener("squeeze",$),i.removeEventListener("squeezestart",$),i.removeEventListener("squeezeend",$),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",nt);for(let Z=0;Z<w.length;Z++){const j=E[Z];j!==null&&(E[Z]=null,w[Z].disconnect(j))}D=null,B=null,m.reset();for(const Z in p)delete p[Z];if(t.setRenderTarget(T),f=null,u=null,d=null,i=null,x=null,ne.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(R.width,R.height,!1),b!==null){const Z=b.camera;Z.fov=b.fov,Z.zoom=b.zoom,Z.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(T=t.getRenderTarget(),i.addEventListener("select",$),i.addEventListener("selectstart",$),i.addEventListener("selectend",$),i.addEventListener("squeeze",$),i.addEventListener("squeezestart",$),i.addEventListener("squeezeend",$),i.addEventListener("end",W),i.addEventListener("inputsourceschange",nt),y.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(R),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Ft=null,xt=null;y.depth&&(xt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Mt=y.stencil?bi:Qn,Ft=y.stencil?Hs:zn);const Vt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Vt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new Rn(u.textureWidth,u.textureHeight,{format:An,type:pn,depthTexture:new Xs(u.textureWidth,u.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const Mt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,Mt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Rn(f.framebufferWidth,f.framebufferHeight,{format:An,type:pn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),ne.setContext(i),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function nt(Z){for(let j=0;j<Z.removed.length;j++){const Mt=Z.removed[j],Ft=E.indexOf(Mt);Ft>=0&&(E[Ft]=null,w[Ft].disconnect(Mt))}for(let j=0;j<Z.added.length;j++){const Mt=Z.added[j];let Ft=E.indexOf(Mt);if(Ft===-1){for(let Vt=0;Vt<w.length;Vt++)if(Vt>=E.length){E.push(Mt),Ft=Vt;break}else if(E[Vt]===null){E[Vt]=Mt,Ft=Vt;break}if(Ft===-1)break}const xt=w[Ft];xt&&xt.connect(Mt)}}const Y=new I,tt=new I;function it(Z,j,Mt){Y.setFromMatrixPosition(j.matrixWorld),tt.setFromMatrixPosition(Mt.matrixWorld);const Ft=Y.distanceTo(tt),xt=j.projectionMatrix.elements,Vt=Mt.projectionMatrix.elements,Ne=xt[14]/(xt[10]-1),Wt=xt[14]/(xt[10]+1),te=(xt[9]+1)/xt[5],fe=(xt[9]-1)/xt[5],qt=(xt[8]-1)/xt[0],Me=(Vt[8]+1)/Vt[0],ke=Ne*qt,on=Ne*Me,ye=Ft/(-qt+Me),Pe=ye*-qt;if(j.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Pe),Z.translateZ(ye),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),xt[10]===-1)Z.projectionMatrix.copy(j.projectionMatrix),Z.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const F=Ne+ye,Xe=Wt+ye,re=ke-Pe,A=on+(Ft-Pe),v=te*Wt/Xe*F,O=fe*Wt/Xe*F;Z.projectionMatrix.makePerspective(re,A,v,O,F,Xe),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function It(Z,j){j===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(j.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let j=Z.near,Mt=Z.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(Mt=m.depthFar)),G.near=P.near=C.near=j,G.far=P.far=C.far=Mt,(D!==G.near||B!==G.far)&&(i.updateRenderState({depthNear:G.near,depthFar:G.far}),D=G.near,B=G.far),G.layers.mask=Z.layers.mask|6,C.layers.mask=G.layers.mask&-5,P.layers.mask=G.layers.mask&-3;const Ft=Z.parent,xt=G.cameras;It(G,Ft);for(let Vt=0;Vt<xt.length;Vt++)It(xt[Vt],Ft);xt.length===2?it(G,C,P):G.projectionMatrix.copy(C.projectionMatrix),b===null&&Z.isPerspectiveCamera&&(b={camera:Z,fov:Z.fov,zoom:Z.zoom}),Rt(Z,G,Ft)};function Rt(Z,j,Mt){Mt===null?Z.matrix.copy(j.matrixWorld):(Z.matrix.copy(Mt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(j.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(j.projectionMatrix),Z.projectionMatrixInverse.copy(j.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ws*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(Z){c=Z,u!==null&&(u.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(Z){return p[Z]};let ue=null;function Kt(Z,j){if(h=j.getViewerPose(l||a),g=j,h!==null){const Mt=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let Ft=!1;Mt.length!==G.cameras.length&&(G.cameras.length=0,Ft=!0);for(let Wt=0;Wt<Mt.length;Wt++){const te=Mt[Wt];let fe=null;if(f!==null)fe=f.getViewport(te);else{const Me=d.getViewSubImage(u,te);fe=Me.viewport,Wt===0&&(t.setRenderTargetTextures(x,Me.colorTexture,Me.depthStencilTexture),t.setRenderTarget(x))}let qt=U[Wt];qt===void 0&&(qt=new un,qt.layers.enable(Wt),qt.viewport=new Ee,U[Wt]=qt),qt.matrix.fromArray(te.transform.matrix),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt.projectionMatrix.fromArray(te.projectionMatrix),qt.projectionMatrixInverse.copy(qt.projectionMatrix).invert(),qt.viewport.set(fe.x,fe.y,fe.width,fe.height),Wt===0&&(G.matrix.copy(qt.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Ft===!0&&G.cameras.push(qt)}const xt=i.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&M){d=n.getBinding();const Wt=d.getDepthInformation(Mt[0]);Wt&&Wt.isValid&&Wt.texture&&m.init(Wt,i.renderState)}if(xt&&xt.includes("camera-access")&&M){t.state.unbindTexture(),d=n.getBinding();for(let Wt=0;Wt<Mt.length;Wt++){const te=Mt[Wt].camera;if(te){let fe=p[te];fe||(fe=new Wh,p[te]=fe);const qt=d.getCameraImage(te);fe.sourceTexture=qt}}}}for(let Mt=0;Mt<w.length;Mt++){const Ft=E[Mt],xt=w[Mt];Ft!==null&&xt!==void 0&&xt.update(Ft,j,l||a)}ue&&ue(Z,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const ne=new Zh;ne.setAnimationLoop(Kt),this.setAnimationLoop=function(Z){ue=Z},this.dispose=function(){}}}const m_=new le,nd=new Ot;nd.set(-1,0,0,0,1,0,0,0,1);function g_(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Xh(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,T,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),M(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,y,T):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),T=y.envMap,x=y.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(m_.makeRotationFromEuler(x)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(nd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=T*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function __(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,w){const E=w.program;n.uniformBlockBinding(x,E)}function l(x,w){let E=i[x.id];E===void 0&&(m(x),E=h(x),i[x.id]=E,x.addEventListener("dispose",y));const R=w.program;n.updateUBOMapping(x,R);const _=t.render.frame;r[x.id]!==_&&(u(x),r[x.id]=_)}function h(x){const w=d();x.__bindingPointIndex=w;const E=s.createBuffer(),R=x.__size,_=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,R,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,E),E}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return Qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const w=i[x.id],E=x.uniforms,R=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let _=0,b=E.length;_<b;_++){const C=E[_];if(Array.isArray(C))for(let P=0,U=C.length;P<U;P++)f(C[P],_,P,R);else f(C,_,0,R)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,w,E,R){if(M(x,w,E,R)===!0){const _=x.__offset,b=x.value;if(Array.isArray(b)){let C=0;for(let P=0;P<b.length;P++){const U=b[P],G=p(U);g(U,x.__data,C),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(C+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(b,x.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,_,x.__data)}}function g(x,w,E){typeof x=="number"||typeof x=="boolean"?w[0]=x:x.isMatrix3?(w[0]=x.elements[0],w[1]=x.elements[1],w[2]=x.elements[2],w[3]=0,w[4]=x.elements[3],w[5]=x.elements[4],w[6]=x.elements[5],w[7]=0,w[8]=x.elements[6],w[9]=x.elements[7],w[10]=x.elements[8],w[11]=0):ArrayBuffer.isView(x)?w.set(new x.constructor(x.buffer,x.byteOffset,w.length)):x.toArray(w,E)}function M(x,w,E,R){const _=x.value,b=w+"_"+E;if(R[b]===void 0)return typeof _=="number"||typeof _=="boolean"?R[b]=_:ArrayBuffer.isView(_)?R[b]=_.slice():R[b]=_.clone(),!0;{const C=R[b];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return R[b]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function m(x){const w=x.uniforms;let E=0;const R=16;for(let b=0,C=w.length;b<C;b++){const P=Array.isArray(w[b])?w[b]:[w[b]];for(let U=0,G=P.length;U<G;U++){const D=P[U],B=Array.isArray(D.value)?D.value:[D.value];for(let $=0,W=B.length;$<W;$++){const nt=B[$],Y=p(nt),tt=E%R,it=tt%Y.boundary,It=tt+it;E+=it,It!==0&&R-It<Y.storage&&(E+=R-It),D.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=E,E+=Y.storage}}}const _=E%R;return _>0&&(E+=R-_),x.__size=E,x.__cache={},this}function p(x){const w={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(w.boundary=4,w.storage=4):x.isVector2?(w.boundary=8,w.storage=8):x.isVector3||x.isColor?(w.boundary=16,w.storage=12):x.isVector4?(w.boundary=16,w.storage=16):x.isMatrix3?(w.boundary=48,w.storage=48):x.isMatrix4?(w.boundary=64,w.storage=64):x.isTexture?Ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(w.boundary=16,w.storage=x.byteLength):Ut("WebGLRenderer: Unsupported uniform value type.",x),w}function y(x){const w=x.target;w.removeEventListener("dispose",y);const E=a.indexOf(w.__bindingPointIndex);a.splice(E,1),s.deleteBuffer(i[w.id]),delete i[w.id],delete r[w.id]}function T(){for(const x in i)s.deleteBuffer(i[x]);a=[],i={},r={}}return{bind:c,update:l,dispose:T}}const x_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ln=null;function v_(){return Ln===null&&(Ln=new Gh(x_,16,16,Ri,Gn),Ln.name="DFG_LUT",Ln.minFilter=Ke,Ln.magFilter=Ke,Ln.wrapS=$n,Ln.wrapT=$n,Ln.generateMipmaps=!1,Ln.needsUpdate=!0),Ln}class M_{constructor(t={}){const{canvas:e=_u(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=pn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const M=f,m=new Set([cl,ll,ol]),p=new Set([pn,zn,Gs,Hs,sl,rl]),y=new Uint32Array(4),T=new Int32Array(4),x=new I;let w=null,E=null;const R=[],_=[];let b=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let P=!1,U=null,G=null,D=null,B=null;this._outputColorSpace=He;let $=0,W=0,nt=null,Y=-1,tt=null;const it=new Ee,It=new Ee;let Rt=null;const ue=new Dt(0);let Kt=0,ne=e.width,Z=e.height,j=1,Mt=null,Ft=null;const xt=new Ee(0,0,ne,Z),Vt=new Ee(0,0,ne,Z);let Ne=!1;const Wt=new gl;let te=!1,fe=!1;const qt=new le,Me=new I,ke=new Ee,on={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ye=!1;function Pe(){return nt===null?j:1}let F=n;function Xe(S,L){return e.getContext(S,L)}let re,A,v,O,H,q,rt,at,K,Q,ot,Tt,dt,lt,At,Lt,Bt,N,ct,J,ht,mt,et;try{const S={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${el}`),e.addEventListener("webglcontextlost",pe,!1),e.addEventListener("webglcontextrestored",ie,!1),e.addEventListener("webglcontextcreationerror",Mn,!1),F===null){const L="webgl2";if(F=Xe(L,S),F===null)throw Xe(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ct()}catch(S){throw e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",ie,!1),e.removeEventListener("webglcontextcreationerror",Mn,!1),Qt("WebGLRenderer: "+S.message),S}function Ct(){re=new vm(F),re.init(),ht=new h_(F,re),A=new cm(F,re,t,ht),v=new l_(F,re),A.reversedDepthBuffer&&u&&v.buffers.depth.setReversed(!0),G=F.createFramebuffer(),D=F.createFramebuffer(),B=F.createFramebuffer(),O=new ym(F),H=new $g,q=new c_(F,re,v,H,A,ht,O),rt=new xm(C),at=new bf(F),mt=new om(F,at),K=new Mm(F,at,O,mt),Q=new bm(F,K,at,mt,O),N=new wm(F,A,q),At=new hm(H),ot=new Yg(C,rt,re,A,mt,At),Tt=new g_(C,H),dt=new Kg,lt=new n_(re),Bt=new am(C,rt,v,Q,g,c),Lt=new o_(C,Q,A),et=new __(F,O,A,v),ct=new lm(F,re,O),J=new Sm(F,re,O),O.programs=ot.programs,C.capabilities=A,C.extensions=re,C.properties=H,C.renderLists=dt,C.shadowMap=Lt,C.state=v,C.info=O}M!==pn&&(b=new Tm(M,e.width,e.height,o,i,r));const bt=new p_(C,F);this.xr=bt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const S=re.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=re.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(S){S!==void 0&&(j=S,this.setSize(ne,Z,!1))},this.getSize=function(S){return S.set(ne,Z)},this.setSize=function(S,L,V=!0){if(bt.isPresenting){Ut("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=S,Z=L,e.width=Math.floor(S*j),e.height=Math.floor(L*j),V===!0&&(e.style.width=S+"px",e.style.height=L+"px"),b!==null&&b.setSize(e.width,e.height),this.setViewport(0,0,S,L)},this.getDrawingBufferSize=function(S){return S.set(ne*j,Z*j).floor()},this.setDrawingBufferSize=function(S,L,V){ne=S,Z=L,j=V,e.width=Math.floor(S*V),e.height=Math.floor(L*V),this.setViewport(0,0,S,L)},this.setEffects=function(S){if(M===pn){Qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let L=0;L<S.length;L++)if(S[L].isOutputPass===!0){Ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(it)},this.getViewport=function(S){return S.copy(xt)},this.setViewport=function(S,L,V,k){S.isVector4?xt.set(S.x,S.y,S.z,S.w):xt.set(S,L,V,k),v.viewport(it.copy(xt).multiplyScalar(j).round())},this.getScissor=function(S){return S.copy(Vt)},this.setScissor=function(S,L,V,k){S.isVector4?Vt.set(S.x,S.y,S.z,S.w):Vt.set(S,L,V,k),v.scissor(It.copy(Vt).multiplyScalar(j).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(S){v.setScissorTest(Ne=S)},this.setOpaqueSort=function(S){Mt=S},this.setTransparentSort=function(S){Ft=S},this.getClearColor=function(S){return S.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor(...arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha(...arguments)},this.clear=function(S=!0,L=!0,V=!0){let k=0;if(S){let z=!1;if(nt!==null){const pt=nt.texture.format;z=m.has(pt)}if(z){const pt=nt.texture.type,vt=p.has(pt),ft=Bt.getClearColor(),yt=Bt.getClearAlpha(),Et=ft.r,zt=ft.g,Xt=ft.b;vt?(y[0]=Et,y[1]=zt,y[2]=Xt,y[3]=yt,F.clearBufferuiv(F.COLOR,0,y)):(T[0]=Et,T[1]=zt,T[2]=Xt,T[3]=yt,F.clearBufferiv(F.COLOR,0,T))}else k|=F.COLOR_BUFFER_BIT}L&&(k|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(k|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&F.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),U=S},this.dispose=function(){e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",ie,!1),e.removeEventListener("webglcontextcreationerror",Mn,!1),Bt.dispose(),dt.dispose(),lt.dispose(),H.dispose(),rt.dispose(),Q.dispose(),mt.dispose(),et.dispose(),ot.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",Ll),bt.removeEventListener("sessionend",Dl),gi.stop()};function pe(S){S.preventDefault(),$r("WebGLRenderer: Context Lost."),P=!0}function ie(){$r("WebGLRenderer: Context Restored."),P=!1;const S=O.autoReset,L=Lt.enabled,V=Lt.autoUpdate,k=Lt.needsUpdate,z=Lt.type;Ct(),O.autoReset=S,Lt.enabled=L,Lt.autoUpdate=V,Lt.needsUpdate=k,Lt.type=z}function Mn(S){Qt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Cn(S){const L=S.target;L.removeEventListener("dispose",Cn),Pd(L)}function Pd(S){Id(S),H.remove(S)}function Id(S){const L=H.get(S).programs;L!==void 0&&(L.forEach(function(V){ot.releaseProgram(V)}),S.isShaderMaterial&&ot.releaseShaderCache(S))}this.renderBufferDirect=function(S,L,V,k,z,pt){L===null&&(L=on);const vt=z.isMesh&&z.matrixWorld.determinantAffine()<0,ft=Ud(S,L,V,k,z);v.setMaterial(k,vt);let yt=V.index,Et=1;if(k.wireframe===!0){if(yt=K.getWireframeAttribute(V),yt===void 0)return;Et=2}const zt=V.drawRange,Xt=V.attributes.position;let wt=zt.start*Et,se=(zt.start+zt.count)*Et;pt!==null&&(wt=Math.max(wt,pt.start*Et),se=Math.min(se,(pt.start+pt.count)*Et)),yt!==null?(wt=Math.max(wt,0),se=Math.min(se,yt.count)):Xt!=null&&(wt=Math.max(wt,0),se=Math.min(se,Xt.count));const Ie=se-wt;if(Ie<0||Ie===1/0)return;mt.setup(z,k,ft,V,yt);let ge,de=ct;if(yt!==null&&(ge=at.get(yt),de=J,de.setIndex(ge)),z.isMesh)k.wireframe===!0?(v.setLineWidth(k.wireframeLinewidth*Pe()),de.setMode(F.LINES)):de.setMode(F.TRIANGLES);else if(z.isLine){let qe=k.linewidth;qe===void 0&&(qe=1),v.setLineWidth(qe*Pe()),z.isLineSegments?de.setMode(F.LINES):z.isLineLoop?de.setMode(F.LINE_LOOP):de.setMode(F.LINE_STRIP)}else z.isPoints?de.setMode(F.POINTS):z.isSprite&&de.setMode(F.TRIANGLES);if(z.isBatchedMesh)if(re.get("WEBGL_multi_draw"))de.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const qe=z._multiDrawStarts,_t=z._multiDrawCounts,Qe=z._multiDrawCount,jt=yt?at.get(yt).bytesPerElement:1,mn=H.get(k).currentProgram.getUniforms();for(let Pn=0;Pn<Qe;Pn++)mn.setValue(F,"_gl_DrawID",Pn),de.render(qe[Pn]/jt,_t[Pn])}else if(z.isInstancedMesh)de.renderInstances(wt,Ie,z.count);else if(V.isInstancedBufferGeometry){const qe=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,_t=Math.min(V.instanceCount,qe);de.renderInstances(wt,Ie,_t)}else de.render(wt,Ie)};function Il(S,L,V,k){U!==null&&S.isNodeMaterial&&U.setObject(k,S),te===!0&&At.setState(S,V,!1),S.transparent===!0&&S.side===we&&S.forceSinglePass===!1?(S.side=rn,S.needsUpdate=!0,ir(S,L,k),S.side=Ti,S.needsUpdate=!0,ir(S,L,k),S.side=we):ir(S,L,k)}this.compile=function(S,L,V=null){V===null&&(V=S),U!==null&&U.renderStart(S,L,V),E=lt.get(V),E.init(L),_.push(E),V.traverseVisible(function(z){z.isLight&&z.layers.test(L.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),S!==V&&S.traverseVisible(function(z){z.isLight&&z.layers.test(L.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),E.setupLights(),U!==null&&U.updateLights(E.state.lightsArray),fe=this.localClippingEnabled,te=At.init(this.clippingPlanes,fe),te===!0&&At.setGlobalState(this.clippingPlanes,L),U!==null&&Lt.render(E.state.shadowsArray,V,L);const k=new Set;return S.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const pt=z.material;if(pt)if(Array.isArray(pt))for(let vt=0;vt<pt.length;vt++){const ft=pt[vt];Il(ft,V,L,z),k.add(ft)}else Il(pt,V,L,z),k.add(pt)}),E=_.pop(),U!==null&&U.renderEnd(),k},this.compileAsync=function(S,L,V=null){const k=this.compile(S,L,V);return new Promise(z=>{function pt(){if(k.forEach(function(vt){const yt=H.get(vt).currentProgram;(yt===void 0||yt.isReady())&&k.delete(vt)}),k.size===0){z(S);return}setTimeout(pt,10)}re.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let ha=null;function Ld(S){ha&&ha(S)}function Ll(){gi.stop()}function Dl(){gi.start()}const gi=new Zh;gi.setAnimationLoop(Ld),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(S){ha=S,bt.setAnimationLoop(S),S===null?gi.stop():gi.start()},bt.addEventListener("sessionstart",Ll),bt.addEventListener("sessionend",Dl),this.render=function(S,L){if(L!==void 0&&L.isCamera!==!0){Qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;U!==null&&U.renderStart(S,L);const V=bt.enabled===!0&&bt.isPresenting===!0,k=b!==null&&(nt===null||V)&&b.begin(C,nt);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(L),L=bt.getCamera()),S.isScene===!0&&S.onBeforeRender(C,S,L,nt),E=lt.get(S,_.length),E.init(L),E.state.textureUnits=q.getTextureUnits(),_.push(E),qt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Wt.setFromProjectionMatrix(qt,Nn,L.reversedDepth),fe=this.localClippingEnabled,te=At.init(this.clippingPlanes,fe),w=dt.get(S,R.length),w.init(),R.push(w),bt.enabled===!0&&bt.isPresenting===!0){const vt=C.xr.getDepthSensingMesh();vt!==null&&da(vt,L,-1/0,C.sortObjects)}da(S,L,0,C.sortObjects),w.finish(),U!==null&&U.updateLights(E.state.lightsArray),C.sortObjects===!0&&w.sort(Mt,Ft),ye=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,ye&&Bt.addToRenderList(w,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),te===!0&&At.beginShadows();const z=E.state.shadowsArray;if(Lt.render(z,S,L),te===!0&&At.endShadows(),(k&&b.hasRenderPass())===!1){const vt=w.opaque,ft=w.transmissive;if(E.setupLights(),L.isArrayCamera){const yt=L.cameras;if(ft.length>0)for(let Et=0,zt=yt.length;Et<zt;Et++){const Xt=yt[Et];Nl(vt,ft,S,Xt)}ye&&Bt.render(S);for(let Et=0,zt=yt.length;Et<zt;Et++){const Xt=yt[Et];Ul(w,S,Xt,Xt.viewport)}}else ft.length>0&&Nl(vt,ft,S,L),ye&&Bt.render(S),Ul(w,S,L)}nt!==null&&W===0&&(q.updateMultisampleRenderTarget(nt),q.updateRenderTargetMipmap(nt)),k&&b.end(C),S.isScene===!0&&S.onAfterRender(C,S,L),mt.resetDefaultState(),Y=-1,tt=null,_.pop(),_.length>0?(E=_[_.length-1],q.setTextureUnits(E.state.textureUnits),te===!0&&At.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?w=R[R.length-1]:w=null,U!==null&&U.renderEnd()};function da(S,L,V,k){if(S.visible===!1)return;if(S.layers.test(L.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(L);else if(S.isLightProbeGrid)E.pushLightProbeGrid(S);else if(S.isLight)E.pushLight(S),S.castShadow&&E.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(Wt)){k&&ke.setFromMatrixPosition(S.matrixWorld).applyMatrix4(qt);const vt=Q.update(S),ft=S.material;ft.visible&&w.push(S,vt,ft,V,ke.z,null,L)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(Wt))){const vt=Q.update(S),ft=S.material;if(k&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ke.copy(S.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),ke.copy(vt.boundingSphere.center)),ke.applyMatrix4(S.matrixWorld).applyMatrix4(qt)),Array.isArray(ft)){const yt=vt.groups;for(let Et=0,zt=yt.length;Et<zt;Et++){const Xt=yt[Et],wt=ft[Xt.materialIndex];wt&&wt.visible&&w.push(S,vt,wt,V,ke.z,Xt,L)}}else ft.visible&&w.push(S,vt,ft,V,ke.z,null,L)}}const pt=S.children;for(let vt=0,ft=pt.length;vt<ft;vt++)da(pt[vt],L,V,k)}function Ul(S,L,V,k){const{opaque:z,transmissive:pt,transparent:vt}=S;E.setupLightsView(V),te===!0&&At.setGlobalState(C.clippingPlanes,V),k&&v.viewport(it.copy(k)),z.length>0&&nr(z,L,V),pt.length>0&&nr(pt,L,V),vt.length>0&&nr(vt,L,V),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Nl(S,L,V,k){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[k.id]===void 0){const wt=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[k.id]=new Rn(1,1,{generateMipmaps:!0,type:wt?Gn:pn,minFilter:wi,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Zt.workingColorSpace})}const pt=E.state.transmissionRenderTarget[k.id],vt=k.viewport||it;pt.setSize(vt.z*C.transmissionResolutionScale,vt.w*C.transmissionResolutionScale);const ft=C.getRenderTarget(),yt=C.getActiveCubeFace(),Et=C.getActiveMipmapLevel();C.setRenderTarget(pt),C.getClearColor(ue),Kt=C.getClearAlpha(),Kt<1&&C.setClearColor(16777215,.5),C.clear(),ye&&Bt.render(V);const zt=C.toneMapping;C.toneMapping=Bn;const Xt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),E.setupLightsView(k),te===!0&&At.setGlobalState(C.clippingPlanes,k),nr(S,V,k),q.updateMultisampleRenderTarget(pt),q.updateRenderTargetMipmap(pt),re.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let se=0,Ie=L.length;se<Ie;se++){const ge=L[se],{object:de,geometry:qe,material:_t,group:Qe}=ge;if(_t.side===we&&de.layers.test(k.layers)){const jt=_t.side;_t.side=rn,_t.needsUpdate=!0,Fl(de,V,k,qe,_t,Qe),_t.side=jt,_t.needsUpdate=!0,wt=!0}}wt===!0&&(q.updateMultisampleRenderTarget(pt),q.updateRenderTargetMipmap(pt))}C.setRenderTarget(ft,yt,Et),C.setClearColor(ue,Kt),Xt!==void 0&&(k.viewport=Xt),C.toneMapping=zt}function nr(S,L,V){const k=L.isScene===!0?L.overrideMaterial:null;for(let z=0,pt=S.length;z<pt;z++){const vt=S[z],{object:ft,geometry:yt,group:Et}=vt;let zt=vt.material;zt.allowOverride===!0&&k!==null&&(zt=k),ft.layers.test(V.layers)&&Fl(ft,L,V,yt,zt,Et)}}function Fl(S,L,V,k,z,pt){U!==null&&z.isNodeMaterial&&U.setObject(S,z),S.onBeforeRender(C,L,V,k,z,pt),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),z.onBeforeRender(C,L,V,k,S,pt),z.transparent===!0&&z.side===we&&z.forceSinglePass===!1?(z.side=rn,z.needsUpdate=!0,C.renderBufferDirect(V,L,k,z,S,pt),z.side=Ti,z.needsUpdate=!0,C.renderBufferDirect(V,L,k,z,S,pt),z.side=we):C.renderBufferDirect(V,L,k,z,S,pt),S.onAfterRender(C,L,V,k,z,pt)}function ir(S,L,V){L.isScene!==!0&&(L=on);const k=H.get(S),z=E.state.lights,pt=E.state.shadowsArray,vt=z.state.version,ft=ot.getParameters(S,z.state,pt,L,V,E.state.lightProbeGridArray),yt=ot.getProgramCacheKey(ft);let Et=k.programs;k.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?L.environment:null,k.fog=L.fog;const zt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;k.envMap=rt.get(S.envMap||k.environment,zt),k.envMapRotation=k.environment!==null&&S.envMap===null?L.environmentRotation:S.envMapRotation,Et===void 0&&(S.addEventListener("dispose",Cn),Et=new Map,k.programs=Et);let Xt=Et.get(yt);if(Xt!==void 0){if(k.currentProgram===Xt&&k.lightsStateVersion===vt)return Bl(S,ft),Xt}else ft.uniforms=ot.getUniforms(S),U!==null&&S.isNodeMaterial&&U.build(S,V,ft),S.onBeforeCompile(ft,C),Xt=ot.acquireProgram(ft,yt),Et.set(yt,Xt),k.uniforms=ft.uniforms;const wt=k.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(wt.clippingPlanes=At.uniform),Bl(S,ft),k.needsLights=Fd(S),k.lightsStateVersion=vt,k.needsLights&&(wt.ambientLightColor.value=z.state.ambient,wt.lightProbe.value=z.state.probe,wt.sunLights.value=z.state.sun,wt.sunLightShadows.value=z.state.sunShadow,wt.directionalLights.value=z.state.directional,wt.directionalLightShadows.value=z.state.directionalShadow,wt.spotLights.value=z.state.spot,wt.spotLightShadows.value=z.state.spotShadow,wt.rectAreaLights.value=z.state.rectArea,wt.ltc_1.value=z.state.rectAreaLTC1,wt.ltc_2.value=z.state.rectAreaLTC2,wt.pointLights.value=z.state.point,wt.pointLightShadows.value=z.state.pointShadow,wt.hemisphereLights.value=z.state.hemi,wt.sunShadowMatrix.value=z.state.sunShadowMatrix,wt.sunShadowCascade.value=z.state.sunShadowCascade,wt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,wt.spotLightMatrix.value=z.state.spotLightMatrix,wt.spotLightMap.value=z.state.spotLightMap,wt.pointShadowMatrix.value=z.state.pointShadowMatrix),k.lightProbeGrid=E.state.lightProbeGridArray.length>0,k.currentProgram=Xt,k.uniformsList=null,Xt}function Ol(S){if(S.uniformsList===null){const L=S.currentProgram.getUniforms();S.uniformsList=zr.seqWithValue(L.seq,S.uniforms)}return S.uniformsList}function Bl(S,L){const V=H.get(S);V.outputColorSpace=L.outputColorSpace,V.batching=L.batching,V.batchingColor=L.batchingColor,V.instancing=L.instancing,V.instancingColor=L.instancingColor,V.instancingMorph=L.instancingMorph,V.skinning=L.skinning,V.morphTargets=L.morphTargets,V.morphNormals=L.morphNormals,V.morphColors=L.morphColors,V.morphTargetsCount=L.morphTargetsCount,V.numClippingPlanes=L.numClippingPlanes,V.numIntersection=L.numClipIntersection,V.vertexAlphas=L.vertexAlphas,V.vertexTangents=L.vertexTangents,V.toneMapping=L.toneMapping}function Dd(S,L){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;x.setFromMatrixPosition(L.matrixWorld);for(let V=0,k=S.length;V<k;V++){const z=S[V];if(z.texture!==null&&z.boundingBox.containsPoint(x))return z}return null}function Ud(S,L,V,k,z){L.isScene!==!0&&(L=on),q.resetTextureUnits();const pt=L.fog,vt=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?L.environment:null,ft=nt===null?C.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Zt.workingColorSpace,yt=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Et=rt.get(k.envMap||vt,yt),zt=k.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Xt=!!V.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),wt=!!V.morphAttributes.position,se=!!V.morphAttributes.normal,Ie=!!V.morphAttributes.color;let ge=Bn;k.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(ge=C.toneMapping);const de=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,qe=de!==void 0?de.length:0,_t=H.get(k),Qe=E.state.lights;if(te===!0&&(fe===!0||S!==tt)){const me=S===tt&&k.id===Y;At.setState(k,S,me)}let jt=!1;k.version===_t.__version?(_t.needsLights&&_t.lightsStateVersion!==Qe.state.version||_t.outputColorSpace!==ft||z.isBatchedMesh&&_t.batching===!1||!z.isBatchedMesh&&_t.batching===!0||z.isBatchedMesh&&_t.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&_t.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&_t.instancing===!1||!z.isInstancedMesh&&_t.instancing===!0||z.isSkinnedMesh&&_t.skinning===!1||!z.isSkinnedMesh&&_t.skinning===!0||z.isInstancedMesh&&_t.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&_t.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&_t.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&_t.instancingMorph===!1&&z.morphTexture!==null||_t.envMap!==Et||k.fog===!0&&_t.fog!==pt||_t.numClippingPlanes!==void 0&&(_t.numClippingPlanes!==At.numPlanes||_t.numIntersection!==At.numIntersection)||_t.vertexAlphas!==zt||_t.vertexTangents!==Xt||_t.morphTargets!==wt||_t.morphNormals!==se||_t.morphColors!==Ie||_t.toneMapping!==ge||_t.morphTargetsCount!==qe||!!_t.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(jt=!0):(jt=!0,_t.__version=k.version);let mn=_t.currentProgram;jt===!0&&(mn=ir(k,L,z),U&&k.isNodeMaterial&&U.onUpdateProgram(k,mn,_t));let Pn=!1,jn=!1,Li=!1;const ce=mn.getUniforms(),Ae=_t.uniforms;if(v.useProgram(mn.program)&&(Pn=!0,jn=!0,Li=!0),k.id!==Y&&(Y=k.id,jn=!0),_t.needsLights){const me=Dd(E.state.lightProbeGridArray,z);_t.lightProbeGrid!==me&&(_t.lightProbeGrid=me,jn=!0)}if(Pn||tt!==S){v.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ce.setValue(F,"projectionMatrix",S.projectionMatrix),ce.setValue(F,"viewMatrix",S.matrixWorldInverse);const ei=ce.map.cameraPosition;ei!==void 0&&ei.setValue(F,Me.setFromMatrixPosition(S.matrixWorld)),A.logarithmicDepthBuffer&&ce.setValue(F,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ce.setValue(F,"isOrthographic",S.isOrthographicCamera===!0),tt!==S&&(tt=S,jn=!0,Li=!0)}if(_t.needsLights&&(Qe.state.sunShadowMap.length>0&&ce.setValue(F,"sunShadowMap",Qe.state.sunShadowMap,q),Qe.state.directionalShadowMap.length>0&&ce.setValue(F,"directionalShadowMap",Qe.state.directionalShadowMap,q),Qe.state.spotShadowMap.length>0&&ce.setValue(F,"spotShadowMap",Qe.state.spotShadowMap,q),Qe.state.pointShadowMap.length>0&&ce.setValue(F,"pointShadowMap",Qe.state.pointShadowMap,q)),z.isSkinnedMesh){ce.setOptional(F,z,"bindMatrix"),ce.setOptional(F,z,"bindMatrixInverse");const me=z.skeleton;me&&(me.boneTexture===null&&me.computeBoneTexture(),ce.setValue(F,"boneTexture",me.boneTexture,q))}z.isBatchedMesh&&(ce.setOptional(F,z,"batchingTexture"),ce.setValue(F,"batchingTexture",z._matricesTexture,q),ce.setOptional(F,z,"batchingIdTexture"),ce.setValue(F,"batchingIdTexture",z._indirectTexture,q),ce.setOptional(F,z,"batchingColorTexture"),z._colorsTexture!==null&&ce.setValue(F,"batchingColorTexture",z._colorsTexture,q));const ti=V.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&N.update(z,V,mn),(jn||_t.receiveShadow!==z.receiveShadow)&&(_t.receiveShadow=z.receiveShadow,ce.setValue(F,"receiveShadow",z.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&L.environment!==null&&(Ae.envMapIntensity.value=L.environmentIntensity),Ae.dfgLUT!==void 0&&(Ae.dfgLUT.value=v_()),jn){if(ce.setValue(F,"toneMappingExposure",C.toneMappingExposure),_t.needsLights&&Nd(Ae,Li),pt&&k.fog===!0&&Tt.refreshFogUniforms(Ae,pt),Tt.refreshMaterialUniforms(Ae,k,j,Z,E.state.transmissionRenderTarget[S.id]),_t.needsLights&&_t.lightProbeGrid){const me=_t.lightProbeGrid;Ae.probesSH.value=me.texture,Ae.probesMin.value.copy(me.boundingBox.min),Ae.probesMax.value.copy(me.boundingBox.max),Ae.probesResolution.value.copy(me.resolution)}zr.upload(F,Ol(_t),Ae,q)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(zr.upload(F,Ol(_t),Ae,q),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ce.setValue(F,"center",z.center),ce.setValue(F,"modelViewMatrix",z.modelViewMatrix),ce.setValue(F,"normalMatrix",z.normalMatrix),ce.setValue(F,"modelMatrix",z.matrixWorld),k.uniformsGroups!==void 0){const me=k.uniformsGroups;for(let ei=0,Di=me.length;ei<Di;ei++){const zl=me[ei];et.update(zl,mn),et.bind(zl,mn)}}return mn}function Nd(S,L){S.ambientLightColor.needsUpdate=L,S.lightProbe.needsUpdate=L,S.sunLights.needsUpdate=L,S.sunLightShadows.needsUpdate=L,S.directionalLights.needsUpdate=L,S.directionalLightShadows.needsUpdate=L,S.pointLights.needsUpdate=L,S.pointLightShadows.needsUpdate=L,S.spotLights.needsUpdate=L,S.spotLightShadows.needsUpdate=L,S.rectAreaLights.needsUpdate=L,S.hemisphereLights.needsUpdate=L}function Fd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(S,L,V){const k=H.get(S);k.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),H.get(S.texture).__webglTexture=L,H.get(S.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:V,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,L){const V=H.get(S);V.__webglFramebuffer=L,V.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(S,L=0,V=0){nt=S,$=L,W=V;let k=null,z=!1,pt=!1;if(S){const ft=H.get(S);if(ft.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(F.FRAMEBUFFER,ft.__webglFramebuffer),it.copy(S.viewport),It.copy(S.scissor),Rt=S.scissorTest,v.viewport(it),v.scissor(It),v.setScissorTest(Rt),Y=-1;return}else if(ft.__webglFramebuffer===void 0)q.setupRenderTarget(S);else if(ft.__hasExternalTextures)q.rebindTextures(S,H.get(S.texture).__webglTexture,H.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const zt=S.depthTexture;if(ft.__boundDepthTexture!==zt){if(zt!==null&&H.has(zt)&&(S.width!==zt.image.width||S.height!==zt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(S)}}const yt=S.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(pt=!0);const Et=H.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Et[L])?k=Et[L][V]:k=Et[L],z=!0):S.samples>0&&q.useMultisampledRTT(S)===!1?k=H.get(S).__webglMultisampledFramebuffer:Array.isArray(Et)?k=Et[V]:k=Et,it.copy(S.viewport),It.copy(S.scissor),Rt=S.scissorTest}else it.copy(xt).multiplyScalar(j).floor(),It.copy(Vt).multiplyScalar(j).floor(),Rt=Ne;if(V!==0&&(k=G),v.bindFramebuffer(F.FRAMEBUFFER,k)&&v.drawBuffers(S,k),v.viewport(it),v.scissor(It),v.setScissorTest(Rt),z){const ft=H.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+L,ft.__webglTexture,V)}else if(pt){const ft=L;for(let yt=0;yt<S.textures.length;yt++){const Et=H.get(S.textures[yt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+yt,Et.__webglTexture,V,ft)}}else if(S!==null&&V!==0){const ft=H.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ft.__webglTexture,V)}Y=-1};function kl(S){const L=H.get(S);return(L.__readFormat!==S.format||L.__readType!==S.type)&&(L.__readFormat=S.format,L.__readType=S.type,L.__formatReadable=A.textureFormatReadable(S.format),L.__typeReadable=A.textureTypeReadable(S.type)),L}this.readRenderTargetPixels=function(S,L,V,k,z,pt,vt,ft=0){if(!(S&&S.isWebGLRenderTarget)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=H.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&vt!==void 0&&(yt=yt[vt]),yt){v.bindFramebuffer(F.FRAMEBUFFER,yt);try{const Et=S.textures[ft],zt=Et.format,Xt=Et.type;S.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ft);const wt=kl(Et);if(wt.__formatReadable===!1){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(wt.__typeReadable===!1){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=S.width-k&&V>=0&&V<=S.height-z&&F.readPixels(L,V,k,z,ht.convert(zt),ht.convert(Xt),pt)}finally{const Et=nt!==null?H.get(nt).__webglFramebuffer:null;v.bindFramebuffer(F.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(S,L,V,k,z,pt,vt,ft=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=H.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&vt!==void 0&&(yt=yt[vt]),yt)if(L>=0&&L<=S.width-k&&V>=0&&V<=S.height-z){v.bindFramebuffer(F.FRAMEBUFFER,yt);const Et=S.textures[ft],zt=Et.format,Xt=Et.type;S.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ft);const wt=kl(Et);if(wt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(wt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const se=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,se),F.bufferData(F.PIXEL_PACK_BUFFER,pt.byteLength,F.STREAM_READ),F.readPixels(L,V,k,z,ht.convert(zt),ht.convert(Xt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const Ie=nt!==null?H.get(nt).__webglFramebuffer:null;v.bindFramebuffer(F.FRAMEBUFFER,Ie);const ge=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await xu(F,ge,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,se),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,pt),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(se),F.deleteSync(ge),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,L=null,V=0){const k=Math.pow(2,-V),z=Math.floor(S.image.width*k),pt=Math.floor(S.image.height*k),vt=L!==null?L.x:0,ft=L!==null?L.y:0;q.setTexture2D(S,0),F.copyTexSubImage2D(F.TEXTURE_2D,V,0,0,vt,ft,z,pt),v.unbindTexture()},this.copyTextureToTexture=function(S,L,V=null,k=null,z=0,pt=0){let vt,ft,yt,Et,zt,Xt,wt,se,Ie;const ge=S.isCompressedTexture?S.mipmaps[pt]:S.image;if(V!==null)vt=V.max.x-V.min.x,ft=V.max.y-V.min.y,yt=V.isBox3?V.max.z-V.min.z:1,Et=V.min.x,zt=V.min.y,Xt=V.isBox3?V.min.z:0;else{const Ae=Math.pow(2,-z);vt=Math.floor(ge.width*Ae),ft=Math.floor(ge.height*Ae),S.isDataArrayTexture?yt=ge.depth:S.isData3DTexture?yt=Math.floor(ge.depth*Ae):yt=1,Et=0,zt=0,Xt=0}k!==null?(wt=k.x,se=k.y,Ie=k.z):(wt=0,se=0,Ie=0);const de=ht.convert(L.format),qe=ht.convert(L.type);let _t;L.isData3DTexture?(q.setTexture3D(L,0),_t=F.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(q.setTexture2DArray(L,0),_t=F.TEXTURE_2D_ARRAY):(q.setTexture2D(L,0),_t=F.TEXTURE_2D),v.activeTexture(F.TEXTURE0),v.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,L.flipY),v.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),v.pixelStorei(F.UNPACK_ALIGNMENT,L.unpackAlignment);const Qe=v.getParameter(F.UNPACK_ROW_LENGTH),jt=v.getParameter(F.UNPACK_IMAGE_HEIGHT),mn=v.getParameter(F.UNPACK_SKIP_PIXELS),Pn=v.getParameter(F.UNPACK_SKIP_ROWS),jn=v.getParameter(F.UNPACK_SKIP_IMAGES);v.pixelStorei(F.UNPACK_ROW_LENGTH,ge.width),v.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ge.height),v.pixelStorei(F.UNPACK_SKIP_PIXELS,Et),v.pixelStorei(F.UNPACK_SKIP_ROWS,zt),v.pixelStorei(F.UNPACK_SKIP_IMAGES,Xt);const Li=S.isDataArrayTexture||S.isData3DTexture,ce=L.isDataArrayTexture||L.isData3DTexture;if(S.isDepthTexture){const Ae=H.get(S),ti=H.get(L),me=H.get(Ae.__renderTarget),ei=H.get(ti.__renderTarget);v.bindFramebuffer(F.READ_FRAMEBUFFER,me.__webglFramebuffer),v.bindFramebuffer(F.DRAW_FRAMEBUFFER,ei.__webglFramebuffer);for(let Di=0;Di<yt;Di++)Li&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,H.get(S).__webglTexture,z,Xt+Di),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,H.get(L).__webglTexture,pt,Ie+Di)),F.blitFramebuffer(Et,zt,vt,ft,wt,se,vt,ft,F.DEPTH_BUFFER_BIT,F.NEAREST);v.bindFramebuffer(F.READ_FRAMEBUFFER,null),v.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(z!==0||S.isRenderTargetTexture||H.has(S)){const Ae=H.get(S),ti=H.get(L);v.bindFramebuffer(F.READ_FRAMEBUFFER,D),v.bindFramebuffer(F.DRAW_FRAMEBUFFER,B);for(let me=0;me<yt;me++)Li?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ae.__webglTexture,z,Xt+me):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ae.__webglTexture,z),ce?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ti.__webglTexture,pt,Ie+me):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ti.__webglTexture,pt),z!==0?F.blitFramebuffer(Et,zt,vt,ft,wt,se,vt,ft,F.COLOR_BUFFER_BIT,F.NEAREST):ce?F.copyTexSubImage3D(_t,pt,wt,se,Ie+me,Et,zt,vt,ft):F.copyTexSubImage2D(_t,pt,wt,se,Et,zt,vt,ft);v.bindFramebuffer(F.READ_FRAMEBUFFER,null),v.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ce?S.isDataTexture||S.isData3DTexture?F.texSubImage3D(_t,pt,wt,se,Ie,vt,ft,yt,de,qe,ge.data):L.isCompressedArrayTexture?F.compressedTexSubImage3D(_t,pt,wt,se,Ie,vt,ft,yt,de,ge.data):F.texSubImage3D(_t,pt,wt,se,Ie,vt,ft,yt,de,qe,ge):S.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,pt,wt,se,vt,ft,de,qe,ge.data):S.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,pt,wt,se,ge.width,ge.height,de,ge.data):F.texSubImage2D(F.TEXTURE_2D,pt,wt,se,vt,ft,de,qe,ge);v.pixelStorei(F.UNPACK_ROW_LENGTH,Qe),v.pixelStorei(F.UNPACK_IMAGE_HEIGHT,jt),v.pixelStorei(F.UNPACK_SKIP_PIXELS,mn),v.pixelStorei(F.UNPACK_SKIP_ROWS,Pn),v.pixelStorei(F.UNPACK_SKIP_IMAGES,jn),pt===0&&L.generateMipmaps&&F.generateMipmap(_t),v.unbindTexture()},this.initRenderTarget=function(S){H.get(S).__webglFramebuffer===void 0&&q.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?q.setTextureCube(S,0):S.isData3DTexture?q.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?q.setTexture2DArray(S,0):q.setTexture2D(S,0),v.unbindTexture()},this.resetState=function(){$=0,W=0,nt=null,v.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}}const be=(s,t,e)=>Math.min(e,Math.max(t,s)),S_=(s,t,e)=>s+(t-s)*e,is=(s,t,e,n)=>S_(s,t,1-Math.exp(-e*n));function nn(s){let t=s>>>0;return function(){t|=0,t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function De(s,t){let e=Math.imul(s|0,374761393)^Math.imul(t|0,668265263);return e=(e^e>>>13)*1274126177,((e^e>>>16)>>>0)/4294967296}function qa(s,t,e){const n=be((e-s)/(t-s),0,1);return n*n*(3-2*n)}function Ya(s){return 1-Math.pow(1-s,3)}function Yc(s){return 1+2.70158*Math.pow(s-1,3)+1.70158*Math.pow(s-1,2)}function tn(s,t){return`${s},${t}`}const Qr=1,id=Math.sqrt(3);function y_(s,t){return{x:1.5*Qr*s,z:id*Qr*(t+s/2)}}const $c=[[1,0],[1,-1],[0,-1],[-1,0],[-1,1],[0,1]];function Zc(s,t){const e=.6666666666666666*s/Qr,n=(-1/3*s+id/3*t)/Qr;return w_(e,n)}function w_(s,t){const e=-s-t;let n=Math.round(s),i=Math.round(t),r=Math.round(e);const a=Math.abs(n-s),o=Math.abs(i-t),c=Math.abs(r-e);return a>o&&a>c?n=-i-r:o>c&&(i=-n-r),[n,i]}function b_(s){const t=[];for(let e=-s;e<=s;e+=1){const n=Math.max(-s,-e-s),i=Math.min(s,-e+s);for(let r=n;r<=i;r+=1)t.push([e,r])}return t}function E_(){return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1}const T_=`
  attribute float aSize;
  attribute float aAlpha;
  attribute vec3 aColor;
  varying vec3 vColor;
  varying float vAlpha;
  uniform float uScale;

  void main() {
    vColor = aColor;
    vAlpha = aAlpha;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = aSize * uScale / max(0.1, -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`,A_=`
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    vec2 uv = gl_PointCoord - vec2(0.5);
    float d = length(uv);
    float core = smoothstep(0.5, 0.04, d);
    float sparkle = smoothstep(0.11, 0.0, d);
    float a = (core * 0.75 + sparkle) * vAlpha;
    if (a < 0.004) discard;
    gl_FragColor = vec4(vColor, a);
  }
`;class R_{constructor(t,e=900){this.max=e,this.cursor=0,this.positions=new Float32Array(e*3),this.colors=new Float32Array(e*3),this.sizes=new Float32Array(e),this.alphas=new Float32Array(e),this.velocities=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.drag=new Float32Array(e),this.gravity=new Float32Array(e),this.origin=new Float32Array(e*3);const n=new ve,i=new Ue(this.positions,3),r=new Ue(this.colors,3),a=new Ue(this.sizes,1),o=new Ue(this.alphas,1);i.setUsage(rr),r.setUsage(rr),a.setUsage(rr),o.setUsage(rr),n.setAttribute("position",i),n.setAttribute("aColor",r),n.setAttribute("aSize",a),n.setAttribute("aAlpha",o),this.uniforms={uScale:{value:800}};const c=new Ve({uniforms:this.uniforms,vertexShader:T_,fragmentShader:A_,transparent:!0,depthWrite:!1,blending:Ge});this.points=new ra(n,c),this.points.frustumCulled=!1,this.points.renderOrder=20,t.add(this.points),this.geometry=n}setViewport(t,e){const n=t*Math.min(window.devicePixelRatio||1,2);this.uniforms.uScale.value=n/(2*Math.tan(e*Math.PI/360))}emitBurst(t,e={}){const{count:n=24,color:i=16765578,color2:r=null,speed:a=1.4,spread:o=.22,size:c=.075,sizeVariance:l=.06,life:h=1.1,lifeVariance:d=.6,gravity:u=-1.1,drag:f=1.8,upward:g=.8,ring:M=!1}=e,m=new Dt(i),p=r!==null?new Dt(r):m;for(let y=0;y<n;y+=1){const T=this.cursor;this.cursor=(this.cursor+1)%this.max;const x=T*3,w=Math.random()*Math.PI*2,E=(M?.75+Math.random()*.35:Math.random())*o;this.positions[x]=t.x+Math.cos(w)*E,this.positions[x+1]=t.y+(Math.random()-.35)*o*.7,this.positions[x+2]=t.z+Math.sin(w)*E,this.origin[x]=this.positions[x],this.origin[x+1]=this.positions[x+1],this.origin[x+2]=this.positions[x+2];const R=M?.6+Math.random()*.8:Math.random()*.55;this.velocities[x]=Math.cos(w)*R*a,this.velocities[x+1]=(Math.random()*.8+g)*a,this.velocities[x+2]=Math.sin(w)*R*a;const _=m.clone().lerp(p,Math.random());this.colors[x]=_.r,this.colors[x+1]=_.g,this.colors[x+2]=_.b,this.sizes[T]=Math.max(.015,c+(Math.random()-.5)*l);const b=Math.max(.2,h+(Math.random()-.5)*d);this.life[T]=b,this.maxLife[T]=b,this.alphas[T]=1,this.drag[T]=f,this.gravity[T]=u}}emitTrail(t,e={}){const{color:n=16765578,size:i=.04,life:r=1.4}=e,a=this.cursor;this.cursor=(this.cursor+1)%this.max;const o=a*3;this.positions[o]=t.x+(Math.random()-.5)*.2,this.positions[o+1]=t.y,this.positions[o+2]=t.z+(Math.random()-.5)*.2,this.velocities[o]=(Math.random()-.5)*.08,this.velocities[o+1]=.12+Math.random()*.15,this.velocities[o+2]=(Math.random()-.5)*.08;const c=new Dt(n);this.colors[o]=c.r,this.colors[o+1]=c.g,this.colors[o+2]=c.b,this.sizes[a]=i*(.6+Math.random()*.8),this.life[a]=r*(.6+Math.random()*.8),this.maxLife[a]=this.life[a],this.alphas[a]=.9,this.drag[a]=.4,this.gravity[a]=.04}update(t){const e=this.geometry.attributes.position,n=this.geometry.attributes.aColor,i=this.geometry.attributes.aSize,r=this.geometry.attributes.aAlpha;for(let a=0;a<this.max;a+=1){if(this.life[a]<=0){this.alphas[a]!==0&&(this.alphas[a]=0,r.needsUpdate=!0);continue}const o=a*3,c=1-this.life[a]/this.maxLife[a];this.life[a]-=t;const l=Math.exp(-this.drag[a]*t);this.velocities[o]*=l,this.velocities[o+1]=this.velocities[o+1]*l+this.gravity[a]*t,this.velocities[o+2]*=l,this.positions[o]+=this.velocities[o]*t,this.positions[o+1]+=this.velocities[o+1]*t,this.positions[o+2]+=this.velocities[o+2]*t,this.alphas[a]=this.life[a]>0?Math.pow(1-c,1.4):0}e.needsUpdate=!0,n.needsUpdate=!0,i.needsUpdate=!0,r.needsUpdate=!0}}const C_=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,P_=`
  varying vec2 vUv;
  uniform vec3 uColor;
  uniform float uOpacity;
  void main() {
    vec2 p = vUv - 0.5;
    float d = length(p);
    float ring = smoothstep(0.5, 0.43, d) * smoothstep(0.32, 0.4, d);
    float halo = smoothstep(0.5, 0.08, d) * 0.2;
    float a = (ring * 0.9 + halo) * uOpacity;
    gl_FragColor = vec4(uColor, a);
  }
`;class I_{constructor(t,e=14){this.scene=t,this.ripples=[];const n=new Ks(2,2);for(let i=0;i<e;i+=1){const r=new Ve({vertexShader:C_,fragmentShader:P_,uniforms:{uColor:{value:new Dt(16765578)},uOpacity:{value:0}},transparent:!0,depthWrite:!1,side:we,blending:Ge}),a=new X(n,r);a.rotation.x=-Math.PI/2,a.visible=!1,a.renderOrder=16,t.add(a),this.ripples.push({mesh:a,material:r,life:0,duration:1,startScale:.4,endScale:1.4})}this.cursor=0}spawn(t,e={}){const{color:n=16765578,scale:i=1.25,duration:r=1.2,startScale:a=.25}=e,o=this.ripples[this.cursor];this.cursor=(this.cursor+1)%this.ripples.length,o.mesh.position.set(t.x,t.y+.025,t.z),o.material.uniforms.uColor.value.set(n),o.material.uniforms.uOpacity.value=0,o.duration=r,o.life=r,o.startScale=a,o.endScale=i,o.mesh.scale.setScalar(a),o.mesh.visible=!0}update(t){for(const e of this.ripples){if(e.life<=0)continue;e.life-=t;const n=1-Math.max(0,e.life)/e.duration,i=1-Math.pow(1-n,3),r=e.startScale+(e.endScale-e.startScale)*i;e.mesh.scale.setScalar(r),e.material.uniforms.uOpacity.value=Math.pow(1-n,1.7),e.life<=0&&(e.mesh.visible=!1)}}}const sd={terrain:{icon:"terrain",color:13214573,color2:9418099},tree:{icon:"tree",color:10209146,color2:15323005},water:{icon:"water",color:7656147,color2:10348255},path:{icon:"path",color:13150075,color2:14929833},home:{icon:"home",color:15258541,color2:10970437},shop:{icon:"shop",color:15317355,color2:12146239},folk:{icon:"folk",color:9550244,color2:15780231},magic:{icon:"crystal",color:15906525,color2:10349539},prop:{icon:"prop",color:11186330,color2:15062455},festive:{icon:"festive",color:15774570,color2:14970716}},rd=[{id:"terrain",label:"Terrain",note:"Sculpt the earth",tools:[["land","Land","terrain","land",1,2,"Raised the earth"],["mesa","Mesa","terrain","mesa",3,5,"Lifted a flat-topped mesa"],["cliff","Cliff","terrain","cliff",4,6,"Raised a sheer cliff"],["plateau","Plateau","terrain","plateau",3,5,"Laid a stony plateau"],["basin","Basin","terrain","basin",2,2,"Hollowed a soft basin"],["terrace","Terrace","terrain","terrace",2,4,"Stepped the hillside"],["stone","Stone","terrain","stone",2,3,"Bared the stone beneath"],["dune","Dune","terrain","dune",2,3,"Swept up a pale dune"]]},{id:"flora",label:"Flora",note:"Cultivate canopies",tools:[["grove","Grove","tree","grove",4,8,"Planted a grove"],["pine","Pine","tree","pine",5,9,"Planted a wind-bent pine"],["blossom","Blossom","tree","blossom",5,10,"Planted a blossom tree"],["birch","Birch","tree","birch",4,8,"Planted a pale birch"],["palm","Palm","tree","palm",6,10,"Raised a salt-loving palm"],["willow","Willow","tree","willow",6,11,"Planted a weeping willow"],["orchard","Orchard","tree","orchard",8,14,"Planted a fruiting orchard"],["ancient","Elder","tree","ancient",12,20,"Woke an elder tree"]]},{id:"water",label:"Water",note:"Carve living water",tools:[["water","Pool","water","pool",2,5,"Carved a mirror pool"],["spring","Spring","water","spring",4,7,"Opened a bright spring"],["pond","Pond","water","pond",3,6,"Dug a quiet pond"],["stream","Stream","water","stream",3,6,"Let a stream wander through"],["lagoon","Lagoon","water","lagoon",6,10,"Spilled a warm lagoon"],["tidepool","Tidepool","water","tidepool",4,7,"Left a tidepool among stones"],["cascade","Cascade","water","cascade",8,13,"Spilled a small cascade"],["moonwell","Moonwell","water","moonwell",11,18,"Sank a moonwell"]]},{id:"ways",label:"Ways",note:"Draw the paths",tools:[["path","Path","path","path",1,1,"Laid a winding path"],["cobble","Cobbles","path","cobble",2,2,"Set a cobbled way"],["boardwalk","Boardwalk","path","boardwalk",3,3,"Ran a timber boardwalk"],["steps","Steps","path","steps",2,2,"Cut shallow steps"],["plaza","Plaza","path","plaza",4,5,"Paved a little plaza"],["gardenPath","Garden Way","path","garden",2,4,"Laid a flowering garden way"],["gravel","Gravel","path","gravel",1,2,"Spread a gravel walk"],["mosaic","Mosaic","path","mosaic",5,7,"Set a colored mosaic"]]},{id:"homes",label:"Homes",note:"Raise places to dwell",tools:[["home","Cottage","home","cottage",10,14,"Raised a cottage"],["cabin","Cabin","home","cabin",9,12,"Built a snug cabin"],["longhouse","Longhouse","home","longhouse",14,18,"Raised a longhouse"],["tower","Tower","home","tower",16,22,"Raised a stone tower"],["treehouse","Treehouse","home","treehouse",13,17,"Nested a treehouse"],["lighthouse","Lighthouse","home","lighthouse",18,24,"Lit a lighthouse"],["atelier","Atelier","home","atelier",12,16,"Opened an artist’s atelier"],["hall","Great Hall","home","hall",20,28,"Raised a great hall"]]},{id:"trade",label:"Trade",note:"Open doors for trade",tools:[["shop","Market","shop","market",16,20,"Opened a market stall"],["bakery","Bakery","shop","bakery",15,19,"Fired the bakery ovens"],["forge","Forge","shop","forge",17,21,"Lit the village forge"],["tavern","Tavern","shop","tavern",18,23,"Opened a warm tavern"],["library","Library","shop","library",20,26,"Shelved a tiny library"],["bathhouse","Bathhouse","shop","bathhouse",19,24,"Steamed a bathhouse"],["apothecary","Apothecary","shop","apothecary",15,19,"Stocked an apothecary"],["observatory","Observatory","shop","observatory",22,30,"Raised an observatory"]]},{id:"folk",label:"Folk",note:"Welcome new lives",tools:[["villager","Neighbor","folk","resident",3,4,"Welcomed a neighbor"],["child","Child","folk","child",2,3,"Welcomed a curious child"],["elder","Elder","folk","elder",4,5,"Welcomed a village elder"],["musician","Musician","folk","musician",5,6,"Welcomed a wandering musician"],["gardener","Gardener","folk","gardener",4,5,"Welcomed a patient gardener"],["fisher","Fisher","folk","fisher",4,5,"Welcomed a river fisher"],["merchant","Merchant","folk","merchant",5,7,"Welcomed a travelling merchant"],["keeper","Keeper","folk","keeper",6,8,"Welcomed a lantern keeper"]]},{id:"magic",label:"Magic",note:"Wake old wonder",tools:[["crystal","Prism","magic","prism",7,12,"Woke a prism"],["moonstone","Moonstone","magic","moonstone",8,13,"Set a moonstone singing"],["sunshard","Sunshard","magic","sunshard",9,15,"Planted a sunshard"],["rune","Runestone","magic","rune",6,10,"Raised a humming runestone"],["glowcap","Glowcap","magic","glowcap",5,8,"Coaxed out a ring of glowcaps"],["wisp","Wisp","magic","wisp",10,16,"Called a gentle wisp"],["starfall","Starfall","magic","starfall",12,19,"Caught a fallen star"],["portal","Portal","magic","portal",18,28,"Opened a quiet portal"]]},{id:"wilds",label:"Wilds",note:"Place wild things",tools:[["flowers","Wildflowers","prop","wildflowers",1,2,"Scattered wildflowers"],["rock","Stone","prop","rock",1,2,"Set a weathered stone"],["boulder","Boulder","prop","boulder",2,3,"Rolled in a boulder"],["log","Fallen Log","prop","log",1,2,"Laid a fallen log"],["mushrooms","Mushrooms","prop","mushrooms",2,3,"Raised a mushroom ring"],["beehive","Beehive","prop","beehive",4,6,"Hung a busy beehive"],["nest","Nest","prop","nest",3,4,"Wove a quiet nest"],["statue","Statue","prop","statue",8,12,"Raised a small statue"]]},{id:"festive",label:"Festive",note:"Set the isle alight",tools:[["lantern","Lantern","prop","lantern",2,3,"Hung a warm lantern"],["bonfire","Bonfire","prop","bonfire",4,6,"Lit a gathering bonfire"],["banner","Banner","prop","banner",3,4,"Raised a fluttering banner"],["sculpture","Sculpture","prop","sculpture",6,9,"Set a curious sculpture"],["fountain","Fountain","prop","fountain",8,12,"Started a small fountain"],["bench","Bench","prop","bench",2,3,"Set a place to rest"],["swing","Swing","prop","swing",4,6,"Hung a garden swing"],["kite","Kite","prop","kite",3,5,"Tethered a bright kite"]]}],Fn=rd.map(s=>({id:s.id,label:s.label,note:s.note,icon:s.tools[0]?sd[s.tools[0][2]].icon:"prop",tools:s.tools.map(t=>t[0])})),cs={};for(const s of rd)for(const[t,e,n,i,r,a,o]of s.tools){const c=sd[n];cs[t]={id:t,category:s.id,family:n,style:i,cost:r,bloom:a,label:e,hint:o,color:c.color,color2:c.color2,icon:c.icon}}const ad={terrain:'<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M3.5 24.2 12.4 11l5.2 7.6L20.8 15l7.7 9.2H3.5Z"/><path d="m9.4 15.8 3-4.8 3.1 4.6" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>',tree:'<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3.8c5.7 5.7 9.8 9.5 9.8 14.1 0 4-3 6.8-6.9 6.8H13c-3.9 0-6.9-2.8-6.9-6.8 0-4.6 4.2-8.4 9.9-14.1Z"/><path d="M16 24.6v4.1M16 21.5v-5.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',water:'<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 4.4c4.5 5.7 8 9.9 8 14.2A8 8 0 0 1 8 18.6c0-4.3 3.5-8.5 8-14.2Z"/><path d="M12 19.2c.7 2.2 2.2 3.3 4.4 3.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',path:'<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M8 28c0-6 7-6 7-11s-5-5-5-9" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/><path d="M20 28c0-4 4-5 4-9" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" opacity=".55"/></svg>',home:'<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M4.6 15.2 16 5l11.4 10.2"/><path d="M7.6 13.4v13.2h16.8V13.4" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M13 26.6v-7h6v7" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M20.6 8.1V4.2h3.1v6.7" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',shop:'<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M5 12.2h22l-2.2-5.4H7.2L5 12.2Z"/><path d="M7 12.2v13.2h18V12.2M12.4 25.4v-8.2h7.2v8.2" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M5 12.2h22M9.5 8l1.2 4.2M14.6 8l.5 4.2M19.7 8l-.4 4.2M24.5 8l-1.1 4.2" fill="none" stroke="currentColor" stroke-width="1.3" opacity=".7"/></svg>',folk:'<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="10" r="4.2"/><path d="M8 27c.3-5.1 3.3-8.1 8-8.1s7.7 3 8 8.1" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M16 5.5c2.7 0 4.6 1.4 4.6 3.9H11.4c0-2.5 1.9-3.9 4.6-3.9Z" fill="currentColor" opacity=".65"/></svg>',crystal:'<svg viewBox="0 0 32 32" aria-hidden="true"><path d="m16 2.8 8.6 11.3L16 29.2 7.4 14.1 16 2.8Z"/><path d="M7.8 14.1h16.4M16 3.1v25.8M16 14.1l-4.7 8.2M16 14.1l4.7 8.2" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>',prop:'<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M9 25.5c-3.2-2.5-3-7.4 1-10.7 2-1.7 4.2-2.6 6-4.8 1.9 2.6 4.6 3.6 6.2 6.4 2.1 3.8.4 7.9-2.8 9.1H9Z"/><path d="M13.5 25.5c0-3.4 1.2-6.6 3.5-9.3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',festive:'<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3.2c2.5 3.3 4.5 5.6 4.5 8.2a4.5 4.5 0 1 1-9 0c0-2.6 2-4.9 4.5-8.2Z"/><path d="M16 16.2v12M10.5 28.2h11M12.5 20.8h7" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M10.5 23.2h11" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" opacity=".6"/></svg>'},Ds=120,Nr=2,L_=6,$a=4.4,Za=.22,D_=[{bloom:18,radius:3,sparks:7,message:"A new ring of the isle unfurls"},{bloom:48,radius:4,sparks:9,message:"The horizon opens — the world is growing"},{bloom:88,radius:5,sparks:11,message:"Another ring rises from the clouds"},{bloom:145,radius:6,sparks:15,message:"The isle has become a small world"}],Yt={meadow:"meadow",stone:"stone",water:"water"},Qi={meadow:[8366200,8957821,7708016,9287810],stone:[9607050,8883586,10133137],water:[6077634,6735561,5616315]},U_={meadow:[10846551,10189138,11372381],stone:[7632493,8158836,7172457],water:[9206107,8417109,9731680]},_e={none:"none",tree:"tree",crystal:"crystal",magic:"magic",prop:"prop"},Ht={none:"none",path:"path",home:"home",shop:"shop",water:"water"},Kc={cabin:{w:.96,d:.78,wallH:.5,wall:0,roof:0,roofMode:"gable",porch:!0,chimney:!0},longhouse:{w:1.18,d:.72,wallH:.52,wall:1,roof:1,roofMode:"gable",ridge:!0},tower:{w:.68,d:.68,wallH:1.38,wall:1,roof:1,roofMode:"cone",lantern:!0},treehouse:{w:.78,d:.78,wallH:.44,wall:0,roof:0,roofMode:"gable",elevated:.48},lighthouse:{w:.6,d:.6,wallH:1.52,wall:0,roof:1,roofMode:"cone",stripes:!0,lantern:!0},atelier:{w:.94,d:.8,wallH:.52,wall:0,roof:2,roofMode:"flat",glass:!0,plants:!0},hall:{w:1.16,d:.84,wallH:.68,wall:0,roof:2,roofMode:"gable",columns:!0,banners:!0},bakery:{w:.96,d:.74,wallH:.48,wall:0,roof:0,roofMode:"gable",chimney:!0,awning:!0},forge:{w:.92,d:.78,wallH:.5,wall:1,roof:2,roofMode:"gable",chimney:!0,forge:!0},tavern:{w:1.02,d:.8,wallH:.55,wall:1,roof:1,roofMode:"gable",sign:!0,chimney:!0},library:{w:1.02,d:.82,wallH:.64,wall:2,roof:1,roofMode:"gable",columns:!0,books:!0},bathhouse:{w:1.02,d:.88,wallH:.48,wall:2,roof:2,roofMode:"flat",pool:!0,columns:!0},apothecary:{w:.9,d:.76,wallH:.48,wall:0,roof:2,roofMode:"gable",plants:!0,sign:!0},observatory:{w:.78,d:.78,wallH:.7,wall:1,roof:2,roofMode:"dome",telescope:!0}},ts=["Isle of First Light","Fernhollow","The Lantern Shelf","Mosswake","Amberstep","Little Comet","The Quiet Orchard","Windrow"];function Ka(s,t,e=6){const n=[],i=[];for(let a=0;a<e;a+=1){const o=a/e*Math.PI*2,c=(a+1)/e*Math.PI*2;n.push(Math.cos(o)*s,0,Math.sin(o)*s),n.push(Math.cos(o)*t,0,Math.sin(o)*t),n.push(Math.cos(c)*t,0,Math.sin(c)*t),n.push(Math.cos(c)*s,0,Math.sin(c)*s);const l=a*4;i.push(l,l+1,l+2,l,l+2,l+3)}const r=new ve;return r.setAttribute("position",new he(n,3)),r.setIndex(i),r.computeVertexNormals(),r}function N_(){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d"),n=e.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);n.addColorStop(0,"rgba(255,255,255,0.95)"),n.addColorStop(.12,"rgba(255,242,194,0.75)"),n.addColorStop(.36,"rgba(255,195,104,0.25)"),n.addColorStop(1,"rgba(255,180,80,0)"),e.fillStyle=n,e.fillRect(0,0,128,128);const i=new $s(t);return i.colorSpace=He,i}function F_(){const t=document.createElement("canvas");t.width=64,t.height=64;const e=t.getContext("2d");e.translate(32,32),e.fillStyle="white";for(let i=0;i<5;i+=1){const r=i/5*Math.PI*2;e.beginPath(),e.ellipse(Math.cos(r)*9,Math.sin(r)*9,7,5,r,0,Math.PI*2),e.fill()}e.fillStyle="rgba(255,220,120,0.95)",e.beginPath(),e.arc(0,0,5,0,Math.PI*2),e.fill();const n=new $s(t);return n.colorSpace=He,n}function O_(s){return new Ve({uniforms:{uTime:{value:0},uColor:{value:new Dt(s)},uDeep:{value:new Dt(1924971)},uSun:{value:new I(.35,.8,.5).normalize()}},vertexShader:`
      varying vec3 vWorld;
      varying vec3 vNormalW;
      void main() {
        vec4 world = modelMatrix * vec4(position, 1.0);
        vWorld = world.xyz;
        vNormalW = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * world;
      }
    `,fragmentShader:`
      uniform float uTime;
      uniform vec3 uColor;
      uniform vec3 uDeep;
      uniform vec3 uSun;
      varying vec3 vWorld;
      varying vec3 vNormalW;
      void main() {
        vec3 n = normalize(vNormalW);
        if (n.y < 0.0) n = -n;
        vec3 viewDir = normalize(cameraPosition - vWorld);
        float w1 = sin(vWorld.x * 3.1 + vWorld.z * 2.6 + uTime * 1.35);
        float w2 = sin(vWorld.x * 5.7 - vWorld.z * 4.3 - uTime * 1.8);
        float ripple = (w1 + w2) * 0.5;
        vec3 color = mix(uDeep, uColor, 0.55 + ripple * 0.18);
        float fresnel = pow(1.0 - max(dot(n, viewDir), 0.0), 2.2);
        float glint = smoothstep(0.72, 1.0, sin(vWorld.x * 11.0 + vWorld.z * 8.0 + uTime * 2.3) * 0.5 + 0.5);
        float spec = pow(max(dot(n, normalize(uSun + viewDir * 0.35)), 0.0), 26.0);
        color += vec3(0.07, 0.16, 0.18) * fresnel;
        color += vec3(0.42, 0.4, 0.3) * spec;
        color += vec3(0.16, 0.25, 0.23) * glint * 0.45;
        gl_FragColor = vec4(color, 1.0);
      }
    `})}function B_(){return new Ve({uniforms:{uTime:{value:0},uColor:{value:new Dt(14155764)}},transparent:!0,depthWrite:!1,side:we,blending:Ge,vertexShader:`
      varying vec3 vLocal;
      void main() {
        vLocal = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform float uTime;
      uniform vec3 uColor;
      varying vec3 vLocal;
      void main() {
        float angle = atan(vLocal.z, vLocal.x);
        float flow = sin(angle * 7.0 + uTime * 1.7) * 0.5 + 0.5;
        float fine = sin(angle * 19.0 - uTime * 2.6) * 0.5 + 0.5;
        float alpha = 0.12 + flow * 0.2 + fine * 0.08;
        gl_FragColor = vec4(uColor, alpha);
      }
    `})}class Ja{constructor(t,e={},n={}){this.scene=t,this.events=e,this.id=n.id||`isle-${Date.now().toString(36)}`,this.name=n.name||ts[0],this.index=n.index??0,this.origin=new I(n.x||0,0,n.z||0),this.theme=n.theme||"meadow",this.connections=new Set(n.connections||[]),this.group=new Jt,this.group.name=`openwork-isle-${this.id}`,this.group.position.copy(this.origin),this.scene.add(this.group),this.tiles=new Map,this.tileList=[],this.tileMeshes=[],this.trees=[],this.crystals=[],this.residents=[],this.ripples=[],this.radius=Nr,this.sparks=20,this.bloom=0,this.won=!1,this.active=!1,this.time=0,this.saveClock=0,this.spawnClock=0,this.milestonesReached=new Set,this.history=[],this.stats={actions:0,land:0,water:0,grovesPlanted:0,prismsWoken:0,villagers:2,homes:0,shops:0,paths:0,residents:0,magic:0,props:0,folk:{},tools:{}},this.heartBloom=0,this.winPulse=0,this.floraDirty=!1,this.buildMaterials(),this.buildGeometry(),this.buildSelection(),this.particles=new R_(t,1100),this.ripplesSystem=new I_(t,16),this.glowTexture=N_(),this.flowerTexture=F_(),this.buildHeartseed(),this.buildFlowers(),this.buildResidentMaterials(),this.buildAnimalKit(),this.loadOrCreate(n.saved),this.refreshStats(),this.syncResidents(),this.updateHeartseedImmediate()}setEvents(t){this.events={...this.events,...t}}getCenterWorld(){return this.origin.clone()}toWorldPoint(t){return t.clone().add(this.origin)}setActive(t){this.active=t}setWorldVisible(t){if(this.group.visible=t,this.particles?.points&&(this.particles.points.visible=t),this.ripplesSystem?.ripples)for(const e of this.ripplesSystem.ripples)e.mesh.visible=t&&e.life>0}buildMaterials(){this.topMaterials={},this.sideMaterials={},this.waterMaterials=Qi.water.map(t=>O_(t)),this.foamMaterial=B_();for(const t of Object.keys(Qi))t==="water"?this.topMaterials[t]=this.waterMaterials:this.topMaterials[t]=Qi[t].map(e=>{const n={color:e,roughness:.92,metalness:0,flatShading:!1};return new gt(n)}),this.sideMaterials[t]=U_[t].map(e=>new gt({color:e,roughness:1,metalness:0,flatShading:!0}));this.trunkMaterial=new gt({color:8281154,roughness:1,flatShading:!0}),this.leafMaterials=[new gt({color:7247461,roughness:.95,flatShading:!0}),new gt({color:8168301,roughness:.95,flatShading:!0}),new gt({color:6457695,roughness:.95,flatShading:!0}),new gt({color:9483127,roughness:.95,flatShading:!0})],this.fruitMaterial=new gt({color:15844974,emissive:13798198,emissiveIntensity:.45,roughness:.5,flatShading:!0}),this.crystalMaterials=[new gt({color:15772114,emissive:11947401,emissiveIntensity:.5,roughness:.28,metalness:.08,flatShading:!0}),new gt({color:9429208,emissive:2527114,emissiveIntensity:.45,roughness:.25,metalness:.08,flatShading:!0}),new gt({color:16111499,emissive:10906142,emissiveIntensity:.4,roughness:.3,metalness:.08,flatShading:!0})],this.rockMaterial=new gt({color:8485226,roughness:1,flatShading:!0}),this.rockDarkMaterial=new gt({color:6512213,roughness:1,flatShading:!0}),this.pathMaterial=new gt({color:13084794,roughness:1,flatShading:!0}),this.pathStoneMaterial=new gt({color:11572335,roughness:1,flatShading:!0}),this.plasterMaterials=[new gt({color:15787210,roughness:.92}),new gt({color:15259060,roughness:.94}),new gt({color:14082255,roughness:.92})],this.timberMaterial=new gt({color:7754042,roughness:.94,flatShading:!0}),this.thatchMaterial=new gt({color:12158286,roughness:1,flatShading:!0}),this.roofMaterials=[new gt({color:10116933,roughness:.95,flatShading:!0}),new gt({color:5795933,roughness:.95,flatShading:!0}),new gt({color:11040837,roughness:.95,flatShading:!0})],this.awningMaterials=[new gt({color:15128248,roughness:.9}),new gt({color:12804680,roughness:.9}),new gt({color:6784109,roughness:.9})],this.warmGlowMaterial=new gt({color:16769698,emissive:16755261,emissiveIntensity:.7,roughness:.4}),this.rugMaterial=new gt({color:12086866,roughness:1,flatShading:!0}),this.counterMaterial=new gt({color:10120521,roughness:.9,flatShading:!0}),this.produceMaterials=[new gt({color:14649938,roughness:.85,flatShading:!0}),new gt({color:14925151,roughness:.85,flatShading:!0}),new gt({color:8693857,roughness:.85,flatShading:!0}),new gt({color:13199714,roughness:.85,flatShading:!0})],this.paleWoodMaterial=new gt({color:14205853,roughness:.94,flatShading:!0}),this.darkWoodMaterial=new gt({color:5191979,roughness:1,flatShading:!0}),this.slateMaterial=new gt({color:5857629,roughness:.96,flatShading:!0}),this.copperMaterial=new gt({color:10119749,roughness:.62,metalness:.16,flatShading:!0}),this.birchBarkMaterial=new gt({color:15065038,roughness:.95,flatShading:!0}),this.palmLeafMaterial=new gt({color:7314529,roughness:.9,flatShading:!0}),this.blossomMaterials=[new gt({color:15116215,roughness:.9,flatShading:!0}),new gt({color:15779789,roughness:.9,flatShading:!0}),new gt({color:14258085,roughness:.9,flatShading:!0})],this.moonMaterial=new gt({color:13229311,emissive:7114456,emissiveIntensity:.62,roughness:.22,metalness:.12,flatShading:!0}),this.sunMaterial=new gt({color:16766851,emissive:14060578,emissiveIntensity:.7,roughness:.28,metalness:.08,flatShading:!0}),this.mushroomCapMaterial=new gt({color:13199186,roughness:.88,flatShading:!0}),this.creamMaterial=new gt({color:15918797,roughness:.94,flatShading:!0}),this.charcoalMaterial=new gt({color:3685174,roughness:1,flatShading:!0}),this.glassMaterial=new gt({color:11000274,emissive:4488825,emissiveIntensity:.32,transparent:!0,opacity:.56,roughness:.16,metalness:.12,flatShading:!0}),this.bannerMaterials=[new gt({color:13001549,roughness:.9,side:we}),new gt({color:14726239,roughness:.9,side:we}),new gt({color:6784109,roughness:.9,side:we})],this.kiteMaterials=[new gt({color:14715748,roughness:.7,side:we}),new gt({color:15255659,roughness:.7,side:we}),new gt({color:7447456,roughness:.7,side:we})],this.flameMaterial=new gt({color:16757855,emissive:16743204,emissiveIntensity:.9,roughness:.4,transparent:!0,opacity:.88,flatShading:!0}),this.waterGlowMaterial=new Ei({color:12120809,transparent:!0,opacity:.32,depthWrite:!1,blending:Ge}),this.baseMaterial=new gt({vertexColors:!0,roughness:1,metalness:0,flatShading:!0}),this.heartMaterials={shell:new gt({color:16172654,emissive:14518820,emissiveIntensity:.58,roughness:.24,metalness:.12,transparent:!0,opacity:.96,flatShading:!0}),core:new gt({color:16774349,emissive:16764776,emissiveIntensity:1.05,roughness:.2}),petal:new gt({color:16177034,emissive:12548645,emissiveIntensity:.45,roughness:.45,side:we,flatShading:!0}),petalInner:new gt({color:16773316,emissive:13733170,emissiveIntensity:.6,roughness:.4,side:we,flatShading:!0}),beam:new Ei({color:16768416,transparent:!0,opacity:0,depthWrite:!1,blending:Ge,side:we})}}buildGeometry(){const t=new kt(.975,1.02,1,6,1,!1);t.rotateY(Math.PI/6),this.tileGeometry=t,this.treeTrunkGeometry=new kt(.065,.11,.72,5,1),this.treeCanopyGeometry=new _n(1,0),this.crystalGeometry=new yi(.5,0),this.rockGeometry=new xl(.5,0),this.crystalRingGeometry=new Dn(.43,.012,4,24),this.heartRingGeometry=new Dn(.58,.012,4,40),this.seedGeometry=new yi(.34,0),this.coreGeometry=new yi(.16,0),this.petalGeometry=new xn(.5,7,5),this.selectionGeometry=Ka(.72,.92),this.waterRingGeometry=Ka(.83,.995),this.selectionGlowGeometry=Ka(.54,.98),this.pathGeometry=new kt(.82,.82,.035,6,1),this.pathGeometry.rotateY(Math.PI/6),this.pathStoneGeometry=new sn(.22,.035,.14),this.beamGeometry=new sn(1,1,1),this.residentLimbGeometry=new kt(.045,.055,.2,5),this.residentBodyGeometry=new kt(.105,.145,.3,7),this.residentHeadGeometry=new _n(.11,1)}buildResidentMaterials(){this.residentPalette=[{coat:8100745,accent:15123583,hat:7100486},{coat:12154716,accent:15655368,hat:5070676},{coat:7307932,accent:14987875,hat:9398088},{coat:10124957,accent:14213577,hat:6115652},{coat:12816984,accent:11981504,hat:7689025},{coat:7573644,accent:14197153,hat:5982519}].map(t=>({coat:new gt({color:t.coat,roughness:.92,flatShading:!0}),accent:new gt({color:t.accent,roughness:.9,flatShading:!0}),hat:new gt({color:t.hat,roughness:.96,flatShading:!0}),skin:new gt({color:[15253409,13012589,9265224,15781808][Math.floor(Math.random()*4)],roughness:.9,flatShading:!0})}))}buildAnimalKit(){this.animalLegGeometry=new kt(.022,.032,.24,5),this.animalEarGeometry=new bn(.045,.16,5),this.animalTailGeometry=new bn(.055,.3,5),this.animalBodyGeometry=new xn(1,8,6),this.animalHeadGeometry=new _n(1,1),this.animalEyeGeometry=new xn(.022,5,4);const t=(e,n=.95)=>new gt({color:e,roughness:n,flatShading:!0});this.animalMaterials={deerFur:t(10120005),deerBelly:t(15193266),rabbitFur:t(14206892),rabbitInner:t(14721949),foxFur:t(12741179),foxCream:t(15786695),dark:t(3878436),eye:new gt({color:2038293,roughness:.35})},this.animals=[],this.animalKitReady=!0}buildSelection(){this.selection=new Jt;const t=new Ei({color:16767116,transparent:!0,opacity:.88,depthWrite:!1,blending:Ge,side:we}),e=new Ei({color:16762977,transparent:!0,opacity:.1,depthWrite:!1,blending:Ge,side:we});this.selectionRing=new X(this.selectionGeometry,t),this.selectionGlow=new X(this.selectionGlowGeometry,e),this.selectionRing.renderOrder=15,this.selectionGlow.renderOrder=14,this.selection.add(this.selectionGlow,this.selectionRing),this.selection.visible=!1,this.selection.userData.target=null,this.group.add(this.selection)}buildHeartseed(){const t=new Jt;t.position.set(0,1.5,0);const e=new X(new kt(.46,.56,.16,6),this.rockDarkMaterial);e.position.y=.08,e.receiveShadow=!0,t.add(e);const n=new X(new Dn(.42,.018,5,28),this.fruitMaterial);n.rotation.x=Math.PI/2,n.position.y=.17,t.add(n);const i=new Jt;i.position.y=1.06,t.add(i);const r=new X(this.seedGeometry,this.heartMaterials.shell);r.scale.set(.9,1.65,.9),r.castShadow=!0,i.add(r);const a=new X(this.coreGeometry,this.heartMaterials.core);a.scale.set(.72,1.3,.72),i.add(a);const o=new ci(new Yn({map:this.glowTexture,color:16762985,transparent:!0,opacity:.72,depthWrite:!1,blending:Ge}));o.scale.setScalar(3.3),i.add(o);const c=new Jt;i.add(c);const l=new X(this.heartRingGeometry,this.fruitMaterial);l.rotation.x=1.22,l.rotation.z=.3,c.add(l);const h=new X(this.heartRingGeometry,this.fruitMaterial);h.rotation.x=-1.3,h.rotation.z=-.2,h.scale.setScalar(.82),c.add(h);const d=[],u=new yi(.065,0);for(let p=0;p<3;p+=1){const y=new X(u,this.fruitMaterial);y.scale.set(.7,1.7,.7),c.add(y),d.push(y)}const f=new $h(16760674,2.2,8,1.7);f.position.y=1.06,t.add(f);const g=new Jt;g.position.y=1.06,g.visible=!1;for(let p=0;p<14;p+=1){const y=p/14*Math.PI*2,T=new X(this.petalGeometry,p%2===0?this.heartMaterials.petal:this.heartMaterials.petalInner);T.scale.set(.18,.62,.05),T.position.set(Math.cos(y)*.38,.04,Math.sin(y)*.38),T.rotation.y=-y,T.rotation.z=Math.PI/2-.32,T.userData.angle=y,g.add(T)}const M=new X(new _n(.34,1),this.heartMaterials.core);g.add(M);for(let p=0;p<10;p+=1){const y=p/10*Math.PI*2,T=new X(this.petalGeometry,this.heartMaterials.petal);T.scale.set(.1,.5,.04),T.position.set(Math.cos(y)*.2,.24,Math.sin(y)*.2),T.rotation.y=-y,T.rotation.z=Math.PI/2,g.add(T)}t.add(g);const m=new X(new kt(.18,.72,8,12,1,!0),this.heartMaterials.beam);m.position.y=4.3,m.visible=!1,t.add(m),this.heartseed={group:t,seedPivot:i,shell:r,core:a,glow:o,orbit:c,orbitRing:l,orbitRing2:h,shards:d,light:f,bloomGroup:g,beam:m,bloomProgress:0},this.group.add(t)}buildFlowers(){this.flowerGeometry=new ve,this.flowerMaterial=new _l({size:.16,map:this.flowerTexture,transparent:!0,alphaTest:.08,depthWrite:!1,vertexColors:!0,sizeAttenuation:!0}),this.flowers=new ra(this.flowerGeometry,this.flowerMaterial),this.flowers.renderOrder=4,this.flowers.frustumCulled=!1,this.group.add(this.flowers),this.rebuildFlowers()}createInitialTile(t,e){const n=Math.max(Math.abs(t),Math.abs(e),Math.abs(-t-e)),i=De(t*7+12,e*11-4),r=t===0&&e===0,a=r||i>.82?Yt.stone:Yt.meadow,o=r?1.58:be(1.3-n*.11+De(t*13-2,e*5+9)*.28,.72,1.48);return{q:t,r:e,x:0,z:0,height:o,targetHeight:o,currentHeight:o,type:a,variant:Math.floor(De(t*3+1,e*8+3)*4)%Qi[a].length,decor:_e.none,decorLevel:0,decorStyle:null,feature:Ht.none,featureLevel:0,featureStyle:null,wildRock:!r&&De(t*17+4,e*2+7)>.81,isHeart:r,group:null,mesh:null,decorGroup:null,featureGroup:null,rockMesh:null,spawn:1,spawnDelay:0,spawnProgress:1,heightPulse:0}}createTile(t,e={}){const{animate:n=!1,delay:i=0}=e,r=y_(t.q,t.r);t.x=r.x,t.z=r.z;const a=new Jt;a.position.set(t.x,n?-2.8:0,t.z),t.group=a;const o=[this.sideMaterials[t.type][t.variant%this.sideMaterials[t.type].length],this.topMaterials[t.type][t.variant%this.topMaterials[t.type].length],this.sideMaterials[t.type][t.variant%this.sideMaterials[t.type].length]],c=new X(this.tileGeometry,o);c.position.y=t.height/2,c.scale.y=t.height,c.receiveShadow=!0,c.castShadow=!0,c.userData.tile=t,t.mesh=c,a.add(c);const l=new Jt;l.position.y=t.height,t.decorGroup=l,a.add(l);const h=new Jt;h.position.y=t.height,t.featureGroup=h,a.add(h);const d=new X(this.waterRingGeometry,this.foamMaterial);return d.position.y=t.height+.012,d.rotation.y=Math.PI/6,d.renderOrder=2,d.visible=t.type===Yt.water,t.waterRing=d,a.add(d),this.group.add(a),this.tiles.set(tn(t.q,t.r),t),this.tileList.push(t),this.tileMeshes.push(c),t.decor!==_e.none?this.createDecor(t,t.decor,t.decorLevel,!1,t.decorStyle):t.wildRock&&this.createWildRock(t),t.feature!==Ht.none&&this.createFeature(t,t.feature,!1,t.featureStyle),t.spawn=n?0:1,t.spawnDelay=i,t.spawnProgress=n?0:1,n&&(a.scale.setScalar(.25),a.visible=!1),t}spawnRing(t,e=!0,n=0){this.tiles.size;const i=b_(t);let r=0;return i.forEach(([a,o],c)=>{const l=tn(a,o);if(this.tiles.has(l))return;const h=this.createInitialTile(a,o);this.createTile(h,{animate:e,delay:n+c*.018}),r+=1}),r>0&&(this.radius=Math.max(this.radius,t),this.rebuildBase(e),this.rebuildFlowers()),r}applySavedTile(t,e){e&&(e.height=be(Number(t.h)||e.height,Za,$a),e.targetHeight=e.height,e.currentHeight=e.height,e.type=Object.values(Yt).includes(t.t)?t.t:e.type,e.variant=Number.isInteger(t.v)?t.v:e.variant,e.decor=Object.values(_e).includes(t.d)?t.d:_e.none,e.decorLevel=Number(t.l)||0,e.decorStyle=typeof t.ds=="string"?t.ds:null,e.feature=Object.values(Ht).includes(t.f)?t.f:Ht.none,e.featureStyle=typeof t.fs=="string"?t.fs:null,e.wildRock=!!t.rock,e.mesh.position.y=e.height/2,e.mesh.scale.y=e.height,this.updateTileMaterials(e),e.decorGroup.position.y=e.height,e.featureGroup.position.y=e.height,e.decor!==_e.none?this.createDecor(e,e.decor,e.decorLevel,!1,e.decorStyle):e.wildRock?this.createWildRock(e):this.clearWildRock(e),e.feature!==Ht.none&&this.createFeature(e,e.feature,!1,e.featureStyle))}loadOrCreate(t=null){if(t&&Array.isArray(t.tiles)){this.sparks=be(Number(t.sparks)||20,0,999),this.bloom=Math.max(0,Number(t.bloom)||0),this.won=!!t.won,this.stats={...this.stats,...t.stats||{}},this.radius=be(Number(t.radius)||Nr,Nr,L_),this.milestonesReached=new Set(t.milestonesReached||[]),this.spawnRing(this.radius,!1);const n=new Map(t.tiles.map(i=>[tn(i.q,i.r),i]));for(const i of this.tileList){const r=n.get(tn(i.q,i.r));r&&this.applySavedTile(r,i)}this.heartBloom=be(this.bloom/Ds,0,1),this.rebuildFlowers();return}this.spawnRing(Nr,!1);const e=this.tiles.get(tn(0,0));e&&(e.type=Yt.stone,e.variant=1,e.height=1.58,e.targetHeight=1.58,e.currentHeight=1.58,e.mesh.position.y=e.height/2,e.mesh.scale.y=e.height,this.updateTileMaterials(e))}rebuildBase(t=!1){this.baseGroup&&(this.group.remove(this.baseGroup),this.baseGroup.traverse(_=>{_.geometry&&_.geometry!==this.rockGeometry&&_.geometry.dispose()}));const e=this.radius,n=1.6*e+1.25,i=3.8+e*1.2,r=17+e*5,a=new Jt,o=[],c=[],l=[],h=7,d=20,u=nn(r),f=new Dt(8087374),g=new Dt(6050117),M=new Dt(3948601);for(let _=0;_<=h;_+=1){const b=_/h,C=-.4-i*Math.pow(b,.88),P=1-qa(0,1,b),U=Math.max(.12,n*(1-Math.pow(b,1.25))*(.92+P*.08));for(let G=0;G<d;G+=1){const D=G/d*Math.PI*2,B=1+Math.sin(D*3+r*.4)*.055+Math.cos(D*5-r)*.035,$=1+(u()-.5)*.16,W=U*B*$;o.push(Math.cos(D)*W,C+(u()-.5)*.24,Math.sin(D)*W);const nt=f.clone().lerp(g,qa(0,.62,b)).lerp(M,qa(.55,1,b));nt.offsetHSL((u()-.5)*.012,(u()-.5)*.03,(u()-.5)*.045),c.push(nt.r,nt.g,nt.b)}}for(let _=0;_<h;_+=1)for(let b=0;b<d;b+=1){const C=(b+1)%d,P=_*d+b,U=_*d+C,G=(_+1)*d+b,D=(_+1)*d+C;l.push(P,G,U,U,G,D)}const m=o.length/3;o.push(0,-.34,0);const p=f.clone().offsetHSL(0,.02,-.02);c.push(p.r,p.g,p.b);for(let _=0;_<d;_+=1){const b=(_+1)%d;l.push(m,_,b)}const y=o.length/3;o.push(0,-.4-i*1.08,0);const T=M.clone();c.push(T.r,T.g,T.b);const x=h*d;for(let _=0;_<d;_+=1){const b=(_+1)%d;l.push(y,x+b,x+_)}const w=new ve;w.setAttribute("position",new he(o,3)),w.setAttribute("color",new he(c,3)),w.setIndex(l),w.computeVertexNormals();const E=new X(w,this.baseMaterial);E.receiveShadow=!0,E.castShadow=!1,a.add(E);const R=4+e*2;for(let _=0;_<R;_+=1){const b=u()*Math.PI*2,C=n*(.45+u()*.42),P=new X(this.rockGeometry,u()>.5?this.rockMaterial:this.rockDarkMaterial);P.castShadow=!0,P.receiveShadow=!0;const U=.32+u()*.72;P.scale.set(U*(.7+u()*.6),U*(.8+u()*1.2),U*(.7+u()*.6)),P.position.set(Math.cos(b)*C,-1.9-u()*(i*.62),Math.sin(b)*C),P.rotation.set(u()*Math.PI,u()*Math.PI,u()*Math.PI),a.add(P)}this.baseGroup=a,this.group.add(a),t?(a.scale.set(.84,.7,.84),this.baseGrow=0):(a.scale.setScalar(1),this.baseGrow=1)}updateTileMaterials(t){const e=this.topMaterials[t.type],n=this.sideMaterials[t.type],i=e[t.variant%e.length],r=n[t.variant%n.length];t.mesh.material=[r,i,r],t.waterRing&&(t.waterRing.visible=t.type===Yt.water)}updateTileHeight(t){t.mesh.position.y=t.currentHeight/2,t.mesh.scale.y=t.currentHeight,t.decorGroup.position.y=t.currentHeight,t.featureGroup.position.y=t.currentHeight,t.waterRing&&(t.waterRing.position.y=t.currentHeight+.012)}createDecor(t,e,n,i=!0,r=null){for(t.decor=e,t.decorLevel=n,t.decorStyle=r||t.decorStyle||null;t.decorGroup.children.length>0;)t.decorGroup.remove(t.decorGroup.children[0]);this.clearWildRock(t);let a=null;e===_e.tree?(a=this.createTree(t,n,t.decorStyle),this.trees.includes(a)||this.trees.push(a)):e===_e.crystal?(a=this.createCrystal(t,n,t.decorStyle),this.crystals.includes(a)||this.crystals.push(a)):e===_e.magic?(a=this.createMagicDecor(t,t.decorStyle,n),this.crystals.includes(a)||this.crystals.push(a)):e===_e.prop&&(a=this.createProp(t,t.decorStyle,n)),t.decorObject=a,a&&(t.decorGroup.add(a),a.userData.pop=i?0:1),i?(t.decorGroup.scale.setScalar(.01),t.decorGroup.userData.pop=0):(t.decorGroup.scale.setScalar(1),t.decorGroup.userData.pop=1)}createFeature(t,e,n=!0,i=null){for(t.feature=e,t.featureStyle=i||t.featureStyle||null;t.featureGroup.children.length>0;)t.featureGroup.remove(t.featureGroup.children[0]);let r=null;e===Ht.path?r=this.createPath(t,t.featureStyle):e===Ht.home?r=t.featureStyle&&t.featureStyle!=="cottage"?this.createStyledBuilding(t,t.featureStyle,"home"):this.createHome(t):e===Ht.shop?r=t.featureStyle&&t.featureStyle!=="market"?this.createStyledBuilding(t,t.featureStyle,"shop"):this.createShop(t):e===Ht.water&&(r=this.createWaterFeature(t,t.featureStyle)),t.featureObject=r,r&&t.featureGroup.add(r),n?(t.featureGroup.scale.setScalar(.01),t.featureGroup.userData.pop=0):(t.featureGroup.scale.setScalar(1),t.featureGroup.userData.pop=1)}clearFeature(t){for(;t.featureGroup.children.length>0;)t.featureGroup.remove(t.featureGroup.children[0]);t.feature=Ht.none,t.featureStyle=null,t.featureObject=null}createPath(t,e="path"){const n=new Jt,i=nn(Math.floor(De(t.q+21,t.r+9)*1e5)+(e?.length||0)*31),r=e==="cobble"?this.slateMaterial:e==="boardwalk"?this.darkWoodMaterial:e==="plaza"?this.creamMaterial:e==="garden"?this.leafMaterials[1]:this.pathMaterial,a=new X(this.pathGeometry,r);if(a.position.y=.018,a.receiveShadow=!0,a.scale.setScalar(e==="plaza"?.96:e==="garden"?.9:1),n.add(a),e==="boardwalk"){for(let o=0;o<5;o+=1){const c=new X(this.pathStoneGeometry,o%2?this.timberMaterial:this.paleWoodMaterial);c.scale.set(4.4,.72,1.4),c.position.set(0,.055,-.5+o*.25),c.rotation.y=.04,c.castShadow=!0,n.add(c)}for(const o of[-.78,.78]){const c=new X(this.beamGeometry,this.timberMaterial);c.scale.set(.06,.06,1.5),c.position.set(o,.02,0),n.add(c)}}else if(e==="steps")for(let o=0;o<3;o+=1){const c=new X(new kt(.78-o*.17,.82-o*.16,.08,6),o%2?this.pathStoneMaterial:this.slateMaterial);c.rotation.y=Math.PI/6,c.position.y=.05+o*.075,c.castShadow=!0,c.receiveShadow=!0,n.add(c)}else if(e==="garden"){for(let c=0;c<7;c+=1){const l=c/7*Math.PI*2,h=.58,d=new X(new kt(.012,.018,.13,4),this.leafMaterials[0]);d.position.set(Math.cos(l)*h,.08,Math.sin(l)*h);const u=new X(new _n(.045,0),this.blossomMaterials[c%this.blossomMaterials.length]);u.position.set(d.position.x,.16,d.position.z),n.add(d,u)}const o=new X(this.pathStoneGeometry,this.slateMaterial);o.scale.set(1.3,1,1.3),o.position.set(0,.05,0),n.add(o)}else if(e==="mosaic"){const o=[this.pathStoneMaterial,this.creamMaterial,this.blossomMaterials[0],this.sunMaterial,this.moonMaterial,this.leafMaterials[1]];for(let c=0;c<18;c+=1){const l=new X(this.pathStoneGeometry,o[c%o.length]),h=c/18*Math.PI*2,d=c<6?.26:c<12?.47:.69;l.scale.set(.75,.55,.75),l.position.set(Math.cos(h)*d,.056,Math.sin(h)*d),l.rotation.y=-h,n.add(l)}}else{const o=e==="gravel"?18:e==="cobble"?12:e==="plaza"?14:4+Math.floor(i()*3);for(let c=0;c<o;c+=1){const l=new X(this.pathStoneGeometry,e==="cobble"?c%3?this.slateMaterial:this.pathStoneMaterial:this.pathStoneMaterial),h=i()*Math.PI*2,d=e==="gravel"?.12+i()*.7:.16+i()*.52;l.position.set(Math.cos(h)*d,e==="gravel"?.04:.045,Math.sin(h)*d),l.scale.setScalar(e==="gravel"?.48:e==="plaza"?1.15:1),l.rotation.y=e==="plaza"?-h:i()*Math.PI,l.rotation.x=(i()-.5)*.12,l.castShadow=!0,n.add(l)}if(e==="plaza"){const c=new X(this.crystalRingGeometry,this.copperMaterial);c.rotation.x=Math.PI/2,c.position.y=.06,c.scale.setScalar(1.45),n.add(c)}}return n.userData.kind="path",n.userData.style=e,n}createHome(t){const e=new Jt,n=nn(Math.floor(De(t.q+3,t.r+31)*1e5));e.rotation.y=Math.floor(n()*4)*(Math.PI/2)+.16;const i=new X(new kt(.72,.74,.055,6),this.plasterMaterials[0]);i.position.y=.03,i.receiveShadow=!0,e.add(i);const r=new X(this.beamGeometry,this.rugMaterial);r.scale.set(.42,.015,.3),r.position.set(.05,.063,.04),r.receiveShadow=!0,e.add(r);const a=this.plasterMaterials[Math.floor(n()*this.plasterMaterials.length)],o=(f,g,M,m,p,y,T)=>{const x=new X(this.beamGeometry,f);return x.scale.set(g,M,m),x.position.set(p,y,T),x.castShadow=!0,x.receiveShadow=!0,e.add(x),x};o(a,1.08,.56,.075,0,.34,-.44),o(a,.075,.56,.76,-.5,.34,0),o(a,.075,.56,.76,.5,.34,0),o(a,.34,.56,.075,-.38,.34,.44),o(a,.34,.56,.075,.38,.34,.44),o(this.timberMaterial,.16,.17,.085,.38,.61,.44),o(a,1.16,.08,.1,0,.65,-.44);for(const f of[-.54,.54])for(const g of[-.47,.47])o(this.timberMaterial,.07,.78,.07,f,.42,g);o(this.timberMaterial,1.14,.07,.07,0,.79,-.47),o(this.timberMaterial,1.14,.07,.07,0,.79,.47),o(this.timberMaterial,.07,.07,.99,-.54,.79,0),o(this.timberMaterial,.07,.07,.99,.54,.79,0);const c=o(this.warmGlowMaterial,.24,.2,.03,-.27,.45,-.485);c.castShadow=!1;const l=o(this.timberMaterial,.3,.08,.5,-.23,.15,-.17);l.castShadow=!0,o(this.rugMaterial,.27,.055,.42,-.23,.205,-.17),o(this.plasterMaterials[0],.24,.06,.12,-.23,.245,-.33),o(this.timberMaterial,.26,.04,.26,.24,.28,.17),o(this.timberMaterial,.05,.24,.05,.24,.16,.17);const h=new X(new kt(.07,.055,.11,6),this.roofMaterials[0]);h.position.set(.34,.11,.08),e.add(h);const d=new X(new _n(.1,0),this.leafMaterials[0]);d.position.set(.34,.21,.08),d.castShadow=!0,e.add(d);const u=o(this.rockMaterial,.14,.34,.14,-.37,.62,-.31);return e.userData.kind="home",e.userData.door=new I(0,0,.75),e.userData.chimney=u,e}createShop(t){const e=new Jt,n=nn(Math.floor(De(t.q+27,t.r+11)*1e5));e.rotation.y=Math.floor(n()*4)*(Math.PI/2)+.08;const i=new X(new kt(.74,.76,.05,6),this.pathMaterial);i.position.y=.028,i.receiveShadow=!0,e.add(i);const r=(l,h,d,u,f,g,M)=>{const m=new X(this.beamGeometry,l);return m.scale.set(h,d,u),m.position.set(f,g,M),m.castShadow=!0,m.receiveShadow=!0,e.add(m),m};for(const l of[-.46,.46])for(const h of[-.39,.39])r(this.timberMaterial,.06,.86,.06,l,.46,h);r(this.counterMaterial,1.04,.16,.32,0,.31,.3),r(this.timberMaterial,.96,.28,.08,0,.16,.3);const a=7;for(let l=0;l<a;l+=1){const h=this.awningMaterials[l%this.awningMaterials.length],d=r(h,1.08/a,.045,.78,-.54+(l+.5)*(1.08/a),.88,0);d.rotation.z=(l-(a-1)/2)*.018}r(this.timberMaterial,.04,.045,.8,0,.91,0);for(let l=0;l<4;l+=1){const h=new X(new kt(.1,.075,.09,7),this.counterMaterial);h.position.set(-.34+l*.22,.43,.3),h.castShadow=!0,e.add(h);for(let d=0;d<3;d+=1){const u=new X(new _n(.045,0),this.produceMaterials[(l+d)%this.produceMaterials.length]);u.position.set(h.position.x+(n()-.5)*.08,.49+n()*.025,.3+(n()-.5)*.08),e.add(u)}}const o=r(this.timberMaterial,.24,.2,.24,-.35,.12,.28);o.rotation.y=.16;const c=r(this.plasterMaterials[0],.34,.22,.04,.34,.63,-.38);return c.rotation.z=-.04,r(this.timberMaterial,.04,.55,.04,.34,.33,-.38),r(this.warmGlowMaterial,.1,.1,.028,.34,.63,-.35),e.userData.kind="shop",e}createStyledBuilding(t,e,n="home"){const i=Kc[e]||Kc.cabin,r=new Jt,a=nn(Math.floor(De(t.q+41,t.r+13)*1e5)+e.length*37);r.rotation.y=Math.floor(a()*4)*(Math.PI/2)+.12;const o=i.elevated||0,c=i.wall===2?this.slateMaterial:this.plasterMaterials[i.wall%this.plasterMaterials.length],l=i.glass?this.glassMaterial:i.roof===2?this.slateMaterial:this.roofMaterials[i.roof%this.roofMaterials.length],h=new X(new kt(.72,.74,.055,6),i.wall===2?this.pathStoneMaterial:this.plasterMaterials[0]);h.position.y=o+.03,h.receiveShadow=!0,r.add(h);const d=(x,w,E,R,_,b,C)=>{const P=new X(this.beamGeometry,x);return P.scale.set(w,E,R),P.position.set(_,o+b,C),P.castShadow=!0,P.receiveShadow=!0,r.add(P),P},u=(x,w,E,R,_,b,C,P=8)=>{const U=new X(new kt(w,E,R,P),x);return U.position.set(_,o+b,C),U.castShadow=!0,U.receiveShadow=!0,r.add(U),U},f=(x,w,E,R,_,b=.42)=>{const C=new ci(new Yn({map:this.glowTexture,color:x,transparent:!0,opacity:b,depthWrite:!1,blending:Ge}));return C.position.set(E,o+R,_),C.scale.setScalar(w),r.add(C),C};if(o>0){for(const[x,w]of[[-.48,-.4],[.48,-.4],[-.48,.4],[.48,.4]])d(this.timberMaterial,.07,o+.2,.07,x,o*.5,w);d(this.paleWoodMaterial,.08,.06,.55,.28,.17,.72)}const g=i.w,M=i.d,m=i.wallH;d(c,g,m,.075,0,m*.5+.06,-M*.5),d(c,.075,m,M,-g*.5,m*.5+.06,0),d(c,.075,m,M,g*.5,m*.5+.06,0),d(c,g*.34,m,.075,-g*.33,m*.5+.06,M*.5),d(c,g*.34,m,.075,g*.33,m*.5+.06,M*.5),d(this.timberMaterial,.16,.18,.08,0,.64,M*.5);for(const x of[-g*.5,g*.5])for(const w of[-M*.5,M*.5])d(this.timberMaterial,.065,m+.18,.065,x,m*.5+.09,w);d(this.timberMaterial,g+.06,.065,.065,0,m+.08,-M*.5),d(this.timberMaterial,g+.06,.065,.065,0,m+.08,M*.5),d(this.timberMaterial,.065,.065,M+.06,-g*.5,m+.08,0),d(this.timberMaterial,.065,.065,M+.06,g*.5,m+.08,0);const p=d(this.warmGlowMaterial,.22,.18,.03,-g*.25,.42,-M*.5-.045);p.castShadow=!1;const y=d(this.darkWoodMaterial,g*.2,m*.8,.04,0,m*.4+.07,M*.5+.045);y.castShadow=!1;const T=m+(i.roofMode==="cone"?.08:.12);if(i.roofMode==="gable"){for(const x of[-1,1]){const w=d(l,g*.63,.055,M+.16,x*g*.22,T+.11,0);w.rotation.z=x*(i.ridge?.45:.58),w.castShadow=!0}i.ridge&&d(this.timberMaterial,.055,.06,M+.2,0,T+.3,0)}else if(i.roofMode==="cone"){const x=new X(new bn(Math.max(g,M)*.66,i.glass?.42:.62,8),l);x.position.y=o+T+.18,x.castShadow=!0,x.receiveShadow=!0,r.add(x)}else if(i.roofMode==="dome"){const x=new X(new xn(Math.max(g,M)*.54,12,8,0,Math.PI*2,0,Math.PI/2),l);x.position.y=o+T+.03,x.castShadow=!0,r.add(x),f(12114175,.72,0,T+.62,0,.34)}else if(d(l,g+.12,.055,M+.12,0,T+.03,0),i.glass)for(let x=0;x<4;x+=1)d(this.glassMaterial,g*.2,.04,M*.8,-g*.3+x*g*.2,T+.09,0);if(i.chimney){const x=d(i.forge?this.slateMaterial:this.rockMaterial,.14,T*.75,.14,-g*.32,T*.54,-M*.3);x.castShadow=!0,i.forge&&f(16747069,.5,-g*.32,T*.92,-M*.3,.45)}if(i.porch){d(this.paleWoodMaterial,g+.16,.045,.28,0,.06,M*.5+.16);for(const x of[-g*.42,g*.42])d(this.timberMaterial,.055,.42,.055,x,.26,M*.5+.26);d(this.timberMaterial,g*.9,.045,.065,0,.48,M*.5+.26)}if(i.columns)for(const x of[-g*.36,g*.36])u(this.creamMaterial,.04,.05,m+.2,x,m*.54,M*.5+.13,6);if(i.banners)for(const x of[-g*.55,g*.55]){d(this.timberMaterial,.035,m+.54,.035,x,m*.5+.2,M*.5+.05);const w=d(this.bannerMaterials[x<0?0:1],.18,.34,.02,x+(x<0?.1:-.1),m+.2,M*.5+.05);w.castShadow=!1}if(i.awning)for(let x=0;x<5;x+=1){const w=d(this.awningMaterials[x%this.awningMaterials.length],.17,.04,.32,-g*.34+x*.17,m-.02,M*.5+.19);w.rotation.x=-.22}if(i.sign&&(d(this.timberMaterial,.035,.48,.035,g*.44,.27,M*.5+.16),d(this.plasterMaterials[0],.28,.18,.035,g*.44,.56,M*.5+.16),d(this.warmGlowMaterial,.08,.08,.025,g*.44,.56,M*.5+.19)),i.books)for(let x=0;x<3;x+=1){d(this.timberMaterial,.06,.3,.52,-g*.31+x*.07,.24,-M*.28);const w=[this.blossomMaterials[0],this.sunMaterial,this.leafMaterials[1],this.moonMaterial];for(let E=0;E<4;E+=1)d(w[E],.05,.045,.1,-g*.31+x*.07,.14+E*.05,-M*.36)}if(i.plants)for(let x=0;x<4;x+=1){const w=x*1.7+a(),E=Math.cos(w)*(g*.32),R=Math.sin(w)*(M*.28);u(this.roofMaterials[0],.045,.055,.1,E,.09,R,6);const _=new X(this.treeCanopyGeometry,this.blossomMaterials[x%this.blossomMaterials.length]);_.scale.setScalar(.07),_.position.set(E,o+.17,R),r.add(_)}if(i.pool){u(this.slateMaterial,.26,.28,.08,0,.06,.1,8);const x=new X(new kt(.2,.2,.02,8),this.topMaterials.water[1]);x.position.set(0,o+.11,.1),r.add(x),f(10480101,.34,0,.2,.1,.26)}if(i.telescope){const x=u(this.copperMaterial,.035,.055,.48,.12,.62,.08,6);x.rotation.z=-.82,x.rotation.x=.22,d(this.timberMaterial,.05,.28,.05,.06,.3,.04)}if(i.lantern&&(d(this.warmGlowMaterial,.17,.2,.17,0,T+.52,0),f(16762732,.95,0,T+.52,0,.56)),i.stripes)for(let x=0;x<3;x+=1){const w=u(this.awningMaterials[1],g*.56,g*.56,.1,0,.3+x*.34,0,8);w.scale.x=.98}if(i.forge&&(d(this.slateMaterial,.22,.12,.14,.25,.17,.2),d(this.warmGlowMaterial,.12,.07,.1,.25,.25,.2),f(16747842,.38,.25,.25,.2,.4)),i.elevated){d(this.timberMaterial,.06,.045,.62,.28,-.21,.74);for(let x=0;x<3;x+=1)d(this.timberMaterial,.35,.035,.2,.28,-.15+x*-.1,.74)}if(n==="shop"){d(this.counterMaterial,g*.62,.15,.26,0,.28,.12);for(let x=0;x<3;x+=1){const w=new X(new kt(.08,.06,.08,6),this.counterMaterial);w.position.set(-.2+x*.2,o+.4,.12),r.add(w)}}else d(this.timberMaterial,.28,.08,.4,-g*.23,.15,-M*.16),d(this.rugMaterial,.25,.045,.34,-g*.23,.2,-M*.16),d(this.timberMaterial,.2,.05,.2,g*.22,.27,M*.12),d(this.timberMaterial,.04,.23,.04,g*.22,.16,M*.12);return r.userData.kind=n,r.userData.style=e,r.userData.door=new I(0,0,M*.5+.2),r}createWaterFeature(t,e="pool"){const n=new Jt,i=nn(Math.floor(De(t.q+17,t.r+37)*1e5)+e.length*43),r=(c,l,h=.02)=>{const d=new X(this.crystalRingGeometry,c);return d.rotation.x=Math.PI/2,d.position.y=h,d.scale.setScalar(l),n.add(d),d},a=(c,l,h,d,u,f)=>{const g=new X(this.rockGeometry,c);g.scale.set(l,h,l*.9),g.position.set(Math.cos(d)*u,f,Math.sin(d)*u),g.rotation.set(i()*Math.PI,i()*Math.PI,i()*Math.PI),g.castShadow=!0,n.add(g)},o=(c,l,h,d=.4)=>{const u=new ci(new Yn({map:this.glowTexture,color:c,transparent:!0,opacity:d,depthWrite:!1,blending:Ge}));u.position.y=h,u.scale.setScalar(l),n.add(u)};if(e==="pond"){for(let c=0;c<5;c+=1){const l=new X(new kt(.09+i()*.05,.09+i()*.05,.012,7),this.leafMaterials[c%this.leafMaterials.length]),h=i()*Math.PI*2,d=i()*.48;l.position.set(Math.cos(h)*d,.045,Math.sin(h)*d),l.rotation.y=i()*Math.PI,n.add(l)}for(let c=0;c<6;c+=1){const l=i()*Math.PI*2,h=.58+i()*.12,d=new X(new kt(.012,.018,.34,4),this.leafMaterials[2]);d.position.set(Math.cos(l)*h,.17,Math.sin(l)*h),d.rotation.z=(i()-.5)*.16,n.add(d);const u=new X(new kt(.025,.02,.12,5),this.darkWoodMaterial);u.position.set(d.position.x,.37,d.position.z),n.add(u)}}else if(e==="stream"){for(let c=0;c<6;c+=1){const l=c/6*Math.PI*2,h=new X(this.rockGeometry,c%2?this.rockMaterial:this.pathStoneMaterial);h.scale.set(.12,.045,.16),h.position.set(Math.cos(l)*.5,.05,Math.sin(l)*.5),h.rotation.y=-l,n.add(h)}for(let c=0;c<4;c+=1)a(this.rockMaterial,.09,.06,i()*Math.PI*2,.7,.025)}else if(e==="lagoon"){r(this.leafMaterials[1],.7,.025);for(let c=0;c<5;c+=1){const l=c/5*Math.PI*2+.3,h=new X(new kt(.02,.035,.24+i()*.2,5),this.blossomMaterials[c%this.blossomMaterials.length]);h.position.set(Math.cos(l)*.52,.12,Math.sin(l)*.52),h.rotation.z=(i()-.5)*.45,n.add(h)}for(let c=0;c<4;c+=1)a(this.rockMaterial,.11,.05,i()*Math.PI*2,.68,.02)}else if(e==="tidepool"){for(let c=0;c<7;c+=1)a(c%2?this.rockMaterial:this.rockDarkMaterial,.1+i()*.08,.07+i()*.09,c/7*Math.PI*2,.46+i()*.25,.02);for(let c=0;c<3;c+=1){const l=new Jt;for(let h=0;h<5;h+=1){const d=new X(this.pathStoneGeometry,this.produceMaterials[0]);d.scale.set(.07,.012,.15),d.position.set(Math.cos(h/5*Math.PI*2)*.07,0,Math.sin(h/5*Math.PI*2)*.07),d.rotation.y=-(h/5)*Math.PI*2,l.add(d)}l.position.set((i()-.5)*.5,.045,(i()-.5)*.5),n.add(l)}}else if(e==="cascade"){for(let l=0;l<3;l+=1){const h=new X(new kt(.42-l*.09,.48-l*.09,.08,6),l%2?this.rockMaterial:this.slateMaterial);h.rotation.y=Math.PI/6,h.position.set(.1-l*.05,.04+l*.07,-.18+l*.16),h.castShadow=!0,n.add(h)}const c=new X(new kt(.018,.04,.32,6),this.waterGlowMaterial);c.position.set(.18,.24,.12),n.add(c),o(12908783,.5,.27,.3)}else if(e==="moonwell"){r(this.slateMaterial,.7,.025);const c=new X(new kt(.5,.5,.02,12),this.topMaterials.water[2]);c.position.y=.04,n.add(c);const l=new X(this.coreGeometry,this.moonMaterial);l.position.y=.35,l.scale.setScalar(.72),n.add(l),o(12573183,1.2,.35,.52);for(let h=0;h<4;h+=1)a(this.rockMaterial,.1,.16,h/4*Math.PI*2,.62,.07)}else if(e==="spring"){for(let l=0;l<5;l+=1)a(l%2?this.rockMaterial:this.pathStoneMaterial,.1,.09,l/5*Math.PI*2,.54,.045);const c=new X(new kt(.025,.055,.32,6),this.waterGlowMaterial);c.position.y=.18,n.add(c),o(13107187,.75,.22,.38)}else{r(this.leafMaterials[1],.68,.025);for(let c=0;c<4;c+=1){const l=new X(new kt(.08,.08,.01,6),this.leafMaterials[c%this.leafMaterials.length]);l.position.set((i()-.5)*.6,.04,(i()-.5)*.6),n.add(l)}}return n.userData.kind="water",n.userData.style=e,n}createMagicDecor(t,e="moonstone",n=1){const i=new Jt,r=nn(Math.floor(De(t.q+29,t.r+7)*1e5)+e.length*53),a=(c,l,h,d=.45)=>{const u=new ci(new Yn({map:this.glowTexture,color:c,transparent:!0,opacity:d,depthWrite:!1,blending:Ge}));return u.position.y=h,u.scale.setScalar(l),i.add(u),u},o=(c,l,h,d,u=.18)=>{const f=new X(this.crystalGeometry,c);return f.scale.set(.16+r()*.08,l,.16+r()*.08),f.position.set(Math.cos(h)*d,l*.5+.03,Math.sin(h)*d),f.rotation.set((r()-.5)*u,r()*Math.PI,(r()-.5)*u),f.castShadow=!0,i.add(f),f};if(e==="wisp"){const c=new X(this.coreGeometry,this.sunMaterial);c.position.y=.55,c.scale.setScalar(.9),i.add(c);const l=new X(this.crystalRingGeometry,this.moonMaterial);l.rotation.x=Math.PI/2.4,l.position.y=.55,l.scale.setScalar(1.05),i.add(l),a(16773053,1.45,.58,.55);for(let h=0;h<5;h+=1){const d=new X(this.coreGeometry,this.fruitMaterial);d.scale.setScalar(.16),d.position.set(Math.cos(h*1.5)*.36,.44+h*.06,Math.sin(h*1.5)*.36),i.add(d)}i.userData.orbit=l}else if(e==="portal"){const c=new X(new Dn(.48,.06,6,24),this.moonMaterial);c.position.y=.62,i.add(c);const l=new X(new kt(.4,.4,.015,20),this.glassMaterial);l.rotation.x=Math.PI/2,l.position.y=.62,i.add(l);const h=new X(this.slateMaterial,this.crystalRingGeometry);h.rotation.x=Math.PI/2,h.position.y=.02,h.scale.setScalar(.86),i.add(h);for(let d=0;d<3;d+=1){const u=new X(this.rockGeometry,this.rockDarkMaterial);u.scale.set(.11,.24,.1),u.position.set(Math.cos(d/3*Math.PI*2)*.56,.11,Math.sin(d/3*Math.PI*2)*.56),i.add(u)}a(11137279,1.35,.62,.48),i.userData.orbit=c}else if(e==="glowcap"){for(let c=0;c<6;c+=1){const l=c/6*Math.PI*2+r()*.4,h=c===0?0:.2+r()*.34,d=.15+r()*.18,u=new X(new kt(.018,.026,d,5),this.creamMaterial);u.position.set(Math.cos(l)*h,d*.5+.03,Math.sin(l)*h),i.add(u);const f=new X(new xn(.09+r()*.04,7,4,0,Math.PI*2,0,Math.PI/2),this.moonMaterial);f.position.set(u.position.x,d+.03,u.position.z),f.scale.y=.7,i.add(f)}a(10348762,.85,.22,.42)}else if(e==="rune"){for(let c=0;c<3;c+=1){const l=new X(this.beamGeometry,c===0?this.slateMaterial:this.rockDarkMaterial),h=c===0?.9:.44+r()*.2;if(l.scale.set(c===0?.26:.13,h,c===0?.13:.11),l.position.set(Math.cos(c/3*Math.PI*2+.4)*(c===0?0:.34),h*.5+.03,Math.sin(c/3*Math.PI*2+.4)*(c===0?0:.34)),l.rotation.y=r()*.4,l.castShadow=!0,i.add(l),c===0){const d=new X(this.beamGeometry,this.moonMaterial);d.scale.set(.08,.42,.015),d.position.set(0,.5,.075),d.rotation.z=.6,i.add(d);const u=d.clone();u.rotation.z=-.6,u.position.y=.42,i.add(u)}}a(11067391,.7,.5,.4)}else if(e==="sunshard"){const c=new X(this.crystalRingGeometry,this.sunMaterial);c.rotation.x=Math.PI/2,c.position.y=.02,c.scale.setScalar(.95),i.add(c);for(let l=0;l<5+n;l+=1)o(this.sunMaterial,.55+r()*.4,l/(5+n)*Math.PI*2,l===0?0:.22+r()*.16,.5);a(16764790,1.25,.42,.52)}else if(e==="starfall"){o(this.moonMaterial,.95,0,0,.12),o(this.sunMaterial,.46,2.1,.24,.4),o(this.crystalMaterials[1],.52,4.2,.2,.4);for(let c=0;c<6;c+=1){const l=new X(this.coreGeometry,this.sunMaterial);l.scale.setScalar(.12),l.position.set(Math.cos(c*1.7)*.4,.3+r()*.4,Math.sin(c*1.7)*.4),i.add(l)}a(16769700,1.4,.6,.55)}else{const c=new X(this.crystalRingGeometry,this.moonMaterial);c.rotation.x=Math.PI/2,c.position.y=.02,c.scale.setScalar(.85),i.add(c);for(let l=0;l<4+n;l+=1)o(this.moonMaterial,.44+r()*.38,l/(4+n)*Math.PI*2+.3,l===0?0:.2+r()*.16,.22);a(12573183,1.05,.36,.46)}return i.userData.kind="magic",i.userData.style=e,i.userData.phase=r()*Math.PI*2,i.userData.level=n,i.userData.glow=i.children.find(c=>c.isSprite),i}createProp(t,e="rock",n=1){const i=new Jt,r=nn(Math.floor(De(t.q+53,t.r+19)*1e5)+e.length*67),a=(l,h,d,u,f,g,M)=>{const m=new X(this.beamGeometry,l);return m.scale.set(h,d,u),m.position.set(f,g,M),m.castShadow=!0,m.receiveShadow=!0,i.add(m),m},o=(l,h,d,u,f,g,M,m=6)=>{const p=new X(new kt(h,d,u,m),l);return p.position.set(f,g,M),p.castShadow=!0,p.receiveShadow=!0,i.add(p),p},c=(l,h,d,u,f,g=.4)=>{const M=new ci(new Yn({map:this.glowTexture,color:l,transparent:!0,opacity:g,depthWrite:!1,blending:Ge}));return M.position.set(d,u,f),M.scale.setScalar(h),i.add(M),M};if(e==="wildflowers")for(let l=0;l<9;l+=1){const h=r()*Math.PI*2,d=.16+r()*.58,u=Math.cos(h)*d,f=Math.sin(h)*d,g=.12+r()*.2;o(this.leafMaterials[0],.011,.018,g,u,g*.5+.02,f,4);const M=new X(new _n(.045+r()*.025,0),[this.blossomMaterials[0],this.sunMaterial,this.creamMaterial,this.produceMaterials[2]][l%4]);M.position.set(u,g+.02,f),i.add(M)}else if(e==="rock"||e==="boulder"){const l=e==="boulder"?3:1;for(let h=0;h<l;h+=1){const d=new X(this.rockGeometry,h%2?this.rockMaterial:this.rockDarkMaterial),u=e==="boulder"?.3+r()*.18:.22+r()*.08;d.scale.set(u*1.2,u*.78,u),d.position.set((r()-.5)*.5,u*.32,(r()-.5)*.5),d.rotation.set(r()*Math.PI,r()*Math.PI,0),d.castShadow=!0,i.add(d)}}else if(e==="log"){const l=o(this.trunkMaterial,.1,.12,.82,0,.13,0,7);l.rotation.z=Math.PI/2,l.rotation.y=.6;const h=o(this.creamMaterial,.095,.095,.012,.4,.13,.22,7);h.rotation.z=Math.PI/2,h.rotation.y=.6;for(let d=0;d<2;d+=1){const u=new X(new xn(.045,6,4,0,Math.PI*2,0,Math.PI/2),this.mushroomCapMaterial);u.position.set(-.16+d*.24,.23,.05+d*.06),i.add(u)}}else if(e==="mushrooms")for(let l=0;l<5+n;l+=1){const h=r()*Math.PI*2,d=l===0?0:.14+r()*.44,u=.1+r()*.18,f=Math.cos(h)*d,g=Math.sin(h)*d;o(this.creamMaterial,.02,.03,u,f,u*.5+.02,g,5);const M=new X(new xn(.08+r()*.04,7,4,0,Math.PI*2,0,Math.PI/2),this.mushroomCapMaterial);M.position.set(f,u+.02,g),M.scale.y=.72,i.add(M)}else if(e==="beehive"){o(this.timberMaterial,.03,.035,.42,-.2,.21,0,5),a(this.timberMaterial,.28,.04,.04,-.08,.4,0);for(let l=0;l<3;l+=1){const h=new X(new Dn(.12-l*.02,.035,5,9),this.thatchMaterial);h.rotation.x=Math.PI/2,h.position.set(.08,.3+l*.065,0),i.add(h)}for(let l=0;l<3;l+=1){const h=new X(this.coreGeometry,this.sunMaterial);h.scale.setScalar(.055),h.position.set((r()-.5)*.5,.38+r()*.2,(r()-.5)*.5),i.add(h)}}else if(e==="nest"){const l=new X(new Dn(.22,.075,5,10),this.darkWoodMaterial);l.rotation.x=Math.PI/2,l.position.y=.11,l.scale.y=.6,i.add(l);for(let h=0;h<3;h+=1){const d=new X(new _n(.055,1),this.creamMaterial);d.position.set((h-1)*.07,.13,(r()-.5)*.09),d.scale.y=1.22,i.add(d)}for(let h=0;h<5;h+=1){const d=o(this.timberMaterial,.008,.01,.3+r()*.16,(r()-.5)*.5,.08,(r()-.5)*.5,4);d.rotation.z=(r()-.5)*1.1,d.rotation.y=r()*Math.PI}}else if(e==="statue"){o(this.pathStoneMaterial,.24,.28,.14,0,.07,0,6);const l=o(this.slateMaterial,.09,.13,.42,0,.35,0,6);l.rotation.z=.04;const h=new X(this.residentHeadGeometry,this.slateMaterial);h.position.y=.6,h.scale.setScalar(.9),i.add(h);const d=a(this.slateMaterial,.06,.32,.18,-.12,.38,-.03);d.rotation.z=.45;const u=a(this.slateMaterial,.06,.32,.18,.12,.38,-.03);u.rotation.z=-.45}else if(e==="lantern")o(this.timberMaterial,.035,.05,.72,0,.36,0,5),a(this.timberMaterial,.24,.045,.045,.1,.72,0),a(this.warmGlowMaterial,.13,.16,.13,.2,.64,0),a(this.charcoalMaterial,.18,.035,.18,.2,.74,0),c(16762477,.7,.2,.64,0,.52);else if(e==="bonfire"){for(let l=0;l<5;l+=1){const h=o(this.darkWoodMaterial,.05,.065,.46,Math.cos(l/5*Math.PI*2)*.15,.1,Math.sin(l/5*Math.PI*2)*.15,5);h.rotation.z=Math.PI/2.5,h.rotation.y=l/5*Math.PI*2}for(let l=0;l<3;l+=1){const h=new X(new bn(.1-l*.02,.3+l*.12,6),this.flameMaterial);h.position.set((l-1)*.06,.28+l*.06,0),h.rotation.z=(l-1)*.16,i.add(h)}c(16751174,.95,0,.3,0,.55);for(let l=0;l<5;l+=1){const h=new X(this.rockGeometry,this.rockMaterial);h.scale.setScalar(.07),h.position.set(Math.cos(l/5*Math.PI*2)*.36,.04,Math.sin(l/5*Math.PI*2)*.36),i.add(h)}}else if(e==="banner"){o(this.timberMaterial,.025,.035,1.18,0,.59,0,5),a(this.timberMaterial,.38,.035,.035,.17,1.12,0);const l=a(this.bannerMaterials[0],.32,.34,.018,.18,.94,0);l.castShadow=!1,c(16768927,.34,.18,.9,0,.2)}else if(e==="sculpture"){o(this.pathStoneMaterial,.2,.24,.12,0,.06,0,7);const l=[[this.moonMaterial,.16,.16,.16,0,.22,0],[this.sunMaterial,.12,.12,.12,.12,.35,.03],[this.blossomMaterials[0],.1,.18,.1,-.09,.42,-.02],[this.crystalMaterials[1],.08,.08,.08,.04,.54,.04]];for(const[h,d,u,f,g,M,m]of l)a(h,d,u,f,g,M,m).rotation.set(r()*.5,r()*Math.PI,r()*.5)}else if(e==="fountain"){o(this.pathStoneMaterial,.48,.52,.14,0,.08,0,8),o(this.slateMaterial,.42,.44,.04,0,.16,0,8);const l=new X(new kt(.38,.38,.02,12),this.topMaterials.water[1]);l.position.y=.18,i.add(l),o(this.creamMaterial,.055,.08,.38,0,.35,0,7),o(this.creamMaterial,.18,.16,.04,0,.54,0,8);const h=o(this.waterGlowMaterial,.018,.035,.22,0,.65,0,6);h.castShadow=!1,c(11925742,.5,0,.6,0,.36)}else if(e==="bench"){a(this.paleWoodMaterial,.72,.06,.24,0,.24,0),a(this.paleWoodMaterial,.72,.06,.1,0,.46,-.12);for(const l of[-.27,.27])a(this.timberMaterial,.06,.24,.28,l,.12,0),a(this.timberMaterial,.06,.3,.06,l,.34,-.14)}else if(e==="swing"){for(const l of[-.3,.3])o(this.timberMaterial,.035,.045,1,l,.5,0,5);a(this.timberMaterial,.72,.045,.045,0,.96,0),a(this.paleWoodMaterial,.32,.045,.16,0,.32,0);for(const l of[-.14,.14])o(this.charcoalMaterial,.008,.008,.62,l,.64,0,4);i.userData.swing=i.children.find(l=>l.material===this.paleWoodMaterial)}else if(e==="kite"){o(this.timberMaterial,.018,.025,.78,0,.39,0,4);const l=o(this.creamMaterial,.004,.004,.92,.24,.98,0,3);l.rotation.z=-.55;const h=o(this.creamMaterial,.004,.004,.4,.56,1.34,0,3);h.rotation.z=.3;const d=new X(new yi(.22,0),this.kiteMaterials[0]);d.scale.set(1,1.25,.08),d.position.set(.62,1.48,0),d.rotation.z=.35,i.add(d);for(let u=0;u<3;u+=1){const f=a(this.kiteMaterials[(u+1)%this.kiteMaterials.length],.1,.035,.01,.62+u*.08,1.32-u*.07,.02);f.rotation.z=.4}i.userData.kite=d}return i.userData.kind="prop",i.userData.style=e,i.userData.phase=r()*Math.PI*2,i.userData.level=n,i}clearWildRock(t){t.rockMesh&&(t.decorGroup.remove(t.rockMesh),t.rockMesh=null),t.wildRock=!1}buildPersonModel(t,e=!1,n="resident"){const i=new Jt,r=new X(this.residentBodyGeometry,t.coat);r.position.y=.31,r.castShadow=!0,i.add(r);const a=new X(this.residentHeadGeometry,t.skin);a.position.y=.52,a.castShadow=!0,i.add(a);const o=new X(new bn(.15,.14,7),t.hat);o.position.y=.62,o.castShadow=!0,i.add(o);const c=new X(new kt(.09,.11,.05,7),t.accent);c.position.y=.435,i.add(c);const l={leftLeg:null,rightLeg:null,leftArm:null,rightArm:null};for(const[h,d]of[["leftLeg",-.062],["rightLeg",.062]]){const u=new Jt;u.position.set(d,.22,0);const f=new X(this.residentLimbGeometry,t.hat);f.position.y=-.09,f.castShadow=!0,u.add(f),i.add(u),l[h]=u}for(const[h,d]of[["leftArm",-.13],["rightArm",.13]]){const u=new Jt;u.position.set(d,.4,0);const f=new X(this.residentLimbGeometry,t.coat);f.position.y=-.08,f.rotation.z=h==="leftArm"?.12:-.12,f.castShadow=!0,u.add(f),i.add(u),l[h]=u}if(n==="child"&&i.scale.setScalar(.78),n==="elder"){const h=new X(new bn(.075,.18,5),this.creamMaterial);h.position.set(0,.43,.085),h.rotation.x=Math.PI,i.add(h);const d=new X(new kt(.012,.016,.56,4),this.timberMaterial);d.position.set(.18,.27,.03),d.rotation.z=-.08,i.add(d)}if(n==="musician"){const h=new X(new sn(.16,.1,.07),this.timberMaterial);h.position.set(.16,.32,.09),h.rotation.z=-.25,i.add(h);const d=new X(new sn(.025,.26,.025),this.timberMaterial);d.position.set(.23,.45,.09),d.rotation.z=-.2,i.add(d)}if(n==="gardener"){const h=new X(new kt(.17,.17,.018,9),this.thatchMaterial);h.position.y=.61,i.add(h);const d=new X(new kt(.01,.014,.55,4),this.timberMaterial);d.position.set(-.16,.3,.02),d.rotation.z=.18,i.add(d)}if(n==="fisher"){const h=new X(new kt(.008,.012,.68,4),this.darkWoodMaterial);h.position.set(.17,.38,.05),h.rotation.z=-.28,i.add(h);const d=new X(new kt(.003,.003,.3,3),this.creamMaterial);d.position.set(.28,.52,.05),i.add(d)}if(n==="merchant"){const h=new X(new sn(.17,.2,.11),this.counterMaterial);h.position.set(0,.31,-.14),h.castShadow=!0,i.add(h);const d=new X(new sn(.03,.24,.16),this.awningMaterials[1]);d.position.set(-.06,.36,-.02),d.rotation.z=.55,i.add(d)}if(n==="keeper"){const h=new X(new sn(.1,.13,.1),this.warmGlowMaterial);h.position.set(-.17,.26,.01),i.add(h);const d=new X(new Dn(.045,.006,4,8,Math.PI),this.charcoalMaterial);d.position.set(-.17,.34,.01),i.add(d)}if(e){const h=new X(new sn(.14,.19,.09),this.timberMaterial);h.position.set(0,.32,-.13),h.castShadow=!0,i.add(h);const d=new X(new bn(.025,.2,5),this.fruitMaterial);d.position.set(.06,.5,-.12),d.rotation.z=-.28,i.add(d),i.scale.setScalar(1.1)}return i.userData.limbs=l,i.userData.role=n,i}getRandomLandTile(){const t=this.tileList.filter(e=>e.type!==Yt.water&&e.spawnProgress>.7);return t.length?t[Math.floor(Math.random()*t.length)]:this.tiles.get(tn(0,0))||null}pickFolkRole(){const t=this.stats.folk||{},e=Object.entries(t).filter(([,r])=>r>0);if(!e.length)return"resident";const n=e.reduce((r,[,a])=>r+a,0);let i=Math.random()*n;for(const[r,a]of e)if(i-=a,i<=0)return r;return e[0][0]}spawnResident(t=null,e=null){const n=t||this.getRandomLandTile();if(!n)return null;const i=e||this.pickFolkRole(),r=this.residentPalette[Math.floor(Math.random()*this.residentPalette.length)],a=this.buildPersonModel(r,!1,i),o=.3;a.position.set(n.x+(Math.random()-.5)*o,n.currentHeight+.02,n.z+(Math.random()-.5)*o),a.rotation.y=Math.random()*Math.PI*2;const c={group:a,tile:n,role:i,target:null,wait:.5+Math.random()*2.4,phase:Math.random()*Math.PI*2,speed:i==="child"?.42:i==="elder"?.22:.28+Math.random()*.16,fromY:n.currentHeight,toY:n.currentHeight};return a.userData.resident=c,this.group.add(a),this.residents.push(c),c}getResidentTarget(){const t=this.stats.homes+this.stats.shops*2;return be(this.stats.villagers+t,2,30)}syncResidents(){if(!this.tileList.length)return;const t=this.getResidentTarget();for(;this.residents.length>t;){const n=this.residents.pop();this.group.remove(n.group)}let e=0;for(;this.residents.length<t&&e<t+12;){e+=1;const n=this.getRandomLandTile();if(!n||!this.spawnResident(n))break}this.stats.residents=this.residents.length}buildAnimalModel(t){const e=new Jt,n=this.animalMaterials,i=[],r=(d,u,f,g,M,m=1,p=1,y=1)=>{const T=new X(d,u);return T.position.set(f,g,M),T.scale.set(m,p,y),T.castShadow=!0,T.receiveShadow=!0,e.add(T),T},a=(d,u,f)=>{r(this.animalEyeGeometry,n.eye,-f,d,u,1,1,1),r(this.animalEyeGeometry,n.eye,f,d,u,1,1,1)},o=(d,u,f,g=1)=>{const M=r(this.animalLegGeometry,n.dark,d,f*.5,u,g,f/.24,g);return i.push(M),M};let c,l,h=0;if(t==="deer"){r(this.animalBodyGeometry,n.deerFur,0,.5,0,.3,.21,.2),r(this.animalBodyGeometry,n.deerBelly,0,.43,.04,.24,.12,.17);const d=r(this.animalLegGeometry,n.deerFur,0,.68,.16,2.1,1.25,2.1);d.rotation.x=.34,c=r(this.animalHeadGeometry,n.deerFur,0,.83,.29,.1,.11,.16),r(this.animalHeadGeometry,n.deerBelly,0,.81,.42,.07,.06,.08),h=c.position.y;for(const u of[-1,1]){const f=r(this.animalEarGeometry,n.deerFur,u*.08,.93,.28,1.1,1.25,.8);f.rotation.z=u*.32;const g=r(this.animalLegGeometry,n.dark,u*.07,.98,.31,.35,.95,.35);g.rotation.z=u*.5,g.rotation.x=.18;const M=r(this.animalLegGeometry,n.dark,u*.12,1.05,.34,.25,.55,.25);M.rotation.z=u*1.05}a(.85,.4,.058);for(const u of[-1,1])for(const f of[-1,1])o(u*.18,f*.14,.44,1.1);l=r(this.animalTailGeometry,n.deerBelly,0,.53,-.21,.65,.7,.65),l.rotation.x=-1.05}else if(t==="fox"){r(this.animalBodyGeometry,n.foxFur,0,.3,0,.29,.18,.19),r(this.animalBodyGeometry,n.foxCream,0,.27,.13,.2,.14,.14),c=r(this.animalHeadGeometry,n.foxFur,0,.39,.26,.12,.11,.16),r(this.animalHeadGeometry,n.foxCream,0,.37,.4,.065,.055,.115),r(this.animalEyeGeometry,n.eye,0,.35,.42,1.2,1.2,.8),h=c.position.y;for(const d of[-1,1]){const u=r(this.animalEarGeometry,n.foxFur,d*.072,.49,.24,1.15,1.25,.85);u.rotation.z=d*.22}a(.41,.39,.062);for(const d of[-1,1])for(const u of[-1,1])o(d*.15,u*.12,.24,.9);l=r(this.animalTailGeometry,n.foxFur,0,.46,-.3,1.15,1.55,1.15),l.rotation.x=-1.25}else{r(this.animalBodyGeometry,n.rabbitFur,0,.2,0,.19,.17,.25),r(this.animalBodyGeometry,n.rabbitFur,0,.25,.1,.16,.15,.16),c=r(this.animalHeadGeometry,n.rabbitFur,0,.35,.2,.13,.13,.14),r(this.animalHeadGeometry,n.rabbitInner,0,.33,.32,.045,.04,.04),h=c.position.y;for(const d of[-1,1]){const u=r(this.animalEarGeometry,n.rabbitFur,d*.055,.5,.17,.95,1.45,.7);u.rotation.z=d*.16,r(this.animalEarGeometry,n.rabbitInner,d*.055,.5,.18,.55,1.12,.35)}a(.37,.31,.058);for(const d of[-1,1])for(const u of[-1,1])o(d*.105,u*.13,u>0?.16:.2,.85);l=r(this.animalBodyGeometry,n.rabbitFur,0,.2,-.24,.07,.07,.07)}return e.userData={kind:"animal",species:t,legs:i,head:c,tail:l,headBaseY:h,phase:Math.random()*Math.PI*2},e}pickAnimalTile(t,e=null){if(!t)return null;const n=[];for(const[i,r]of $c){const a=this.tiles.get(tn(t.q+i,t.r+r));if(!a||a.type===Yt.water||a.spawnProgress<.7)continue;const o=a.decor===_e.tree?3:a.feature===Ht.path?2:1;for(let c=0;c<o;c+=1)n.push(a)}return n.length?e?(n.sort((i,r)=>{const a=Math.hypot(i.x-e.x,i.z-e.z);return Math.hypot(r.x-e.x,r.z-e.z)-a}),n[Math.floor(Math.random()*Math.min(3,n.length))]):n[Math.floor(Math.random()*n.length)]:null}syncAnimals(){if(!this.animalKitReady)return;const t=this.tileList.filter(i=>i.decor===_e.tree&&i.type!==Yt.water&&i.spawnProgress>.7),e=t.length?be(Math.ceil(t.length/1.4),2,8):0;for(;this.animals.length>e;){const i=this.animals.pop();this.group.remove(i.group)}let n=0;for(;this.animals.length<e&&n<e+8;){n+=1;const i=t[Math.floor(Math.random()*t.length)]||this.getRandomLandTile();if(!i||!this.spawnAnimal(i))break}}spawnAnimal(t){if(!t)return null;const e=Math.random(),n=e<.42?"rabbit":e<.78?"deer":"fox",i=this.buildAnimalModel(n);i.position.set(t.x,t.currentHeight+.01,t.z),i.rotation.y=Math.random()*Math.PI*2,this.group.add(i);const r={group:i,species:n,tile:t,target:null,wait:Math.random()*2.5,speed:n==="rabbit"?.62:n==="fox"?.5:.38,alert:0,moving:!1};return this.animals.push(r),r}updateAnimals(t,e){if(!this.animals.length)return;const n=this.explorer?.group.visible?this.explorer.group.position:null;for(const i of this.animals){const{group:r}=i,a=r.userData;let o=null;n&&Math.hypot(n.x-r.position.x,n.z-r.position.z)<2.4&&(o=n,i.alert<=0&&(i.alert=1.4,i.target=this.pickAnimalTile(i.tile,n))),i.alert>0&&(i.alert-=t),i.target||(i.wait-=t,i.wait<=0&&(i.target=this.pickAnimalTile(i.tile,o),i.wait=.5+Math.random()*2.4));let c=!1;if(i.target){const u=i.target.x-r.position.x,f=i.target.z-r.position.z,g=Math.hypot(u,f);if(g<.04)i.tile=i.target,i.target=null,i.wait=i.species==="rabbit"?.8+Math.random()*2:1.4+Math.random()*3.4;else{const M=i.alert>0?1.9:1,m=Math.min(g,i.speed*M*t);r.position.x+=u/g*m,r.position.z+=f/g*m;const p=Math.atan2(u,f);r.rotation.y=p,c=!0}}const l=(i.target||i.tile).currentHeight+.01;r.position.y+=(l-r.position.y)*Math.min(1,t*10);const h=i.species==="rabbit"?13:i.species==="fox"?10:7.5,d=c?Math.sin(e*h+a.phase)*(i.species==="rabbit"?.8:.55):0;if(a.legs.forEach((u,f)=>{u.rotation.x=d*(f%2===0?1:-1)}),a.head){const u=c?0:Math.sin(e*.8+a.phase)*.02;a.head.position.y=a.headBaseY+u}a.tail&&(a.tail.rotation.z=Math.sin(e*(c?5:2.2)+a.phase)*.22),i.species==="rabbit"&&c?r.position.y+=Math.abs(Math.sin(e*h+a.phase))*.07:c&&(r.position.y+=Math.abs(Math.sin(e*h+a.phase))*.012)}}pickNextTile(t){if(!t)return null;const e=[];for(const[n,i]of $c){const r=this.tiles.get(tn(t.q+n,t.r+i));if(!r||r.type===Yt.water||r.spawnProgress<.7)continue;const a=r.feature===Ht.path?4:r.feature===Ht.shop?3:r.feature===Ht.home?2:1;for(let o=0;o<a;o+=1)e.push(r)}return e.length?e[Math.floor(Math.random()*e.length)]:null}updateResidents(t,e){for(const n of this.residents){const{group:i}=n;if(n.target||(n.wait-=t,n.wait<=0&&(n.target=this.pickNextTile(n.tile),n.target?(n.fromY=n.tile.currentHeight,n.toY=n.target.currentHeight,n.wait=.25+Math.random()*.6):n.wait=1.3+Math.random()*2.5)),n.target){const l=n.target.x-i.position.x,h=n.target.z-i.position.z,d=Math.hypot(l,h);if(d<.035)n.tile=n.target,n.target=null,n.wait=n.tile.feature===Ht.shop?4+Math.random()*4:1.2+Math.random()*3.6;else{const u=Math.min(d,n.speed*t);i.position.x+=l/d*u,i.position.z+=h/d*u,i.rotation.y=Math.atan2(l,h)}}const r=n.target?n.toY:n.tile.currentHeight;i.position.y+=(r+.015-i.position.y)*Math.min(1,t*9);const a=!!n.target,o=a?Math.sin(e*8.5+n.phase)*.55:Math.sin(e*1.8+n.phase)*.04,c=i.userData.limbs;c&&(c.leftLeg.rotation.x=o,c.rightLeg.rotation.x=-o,c.leftArm.rotation.x=-o*.7,c.rightArm.rotation.x=o*.7),i.position.y+=a?Math.abs(Math.sin(e*8.5+n.phase))*.012:0}}canStandAt(t,e){const[n,i]=Zc(t,e),r=this.tiles.get(tn(n,i));return!r||r.type===Yt.water||r.spawnProgress<.7?!1:Math.hypot(t-r.x,e-r.z)<.92}ensureExplorer(){if(this.explorer)return this.explorer;const t=this.residentPalette[0],e=this.buildPersonModel(t,!0);return e.visible=!1,this.group.add(e),this.explorer={group:e,tile:null,walkPhase:0,moving:!1,status:""},this.explorer}startWalk(){const t=this.ensureExplorer(),e=this.tileList.filter(a=>a.type!==Yt.water&&!a.isHeart&&a.spawnProgress>.7),n=e.filter(a=>a.feature===Ht.path),i=n.length?n:e;i.sort((a,o)=>Math.hypot(a.x,a.z)-Math.hypot(o.x,o.z));const r=i[0]||this.tiles.get(tn(0,0))||this.getRandomLandTile();return r?(t.tile=r,t.group.position.set(r.x,r.currentHeight+.02,r.z),t.group.rotation.y=Math.atan2(-r.x,-r.z),t.group.visible=!0,t.walkPhase=0,!0):!1}stopWalk(){this.explorer&&(this.explorer.group.visible=!1)}moveExplorer(t,e,n){const i=this.explorer;if(!i)return;const r=Math.hypot(t,e);if(r<.001){i.moving=!1;return}const a=1.55,o=i.group.position.x+t/r*a*n,c=i.group.position.z+e/r*a*n;let l=!1;if(this.canStandAt(o,c)?(i.group.position.x=o,i.group.position.z=c,l=!0):this.canStandAt(o,i.group.position.z)?(i.group.position.x=o,l=!0):this.canStandAt(i.group.position.x,c)&&(i.group.position.z=c,l=!0),l){i.group.rotation.y=Math.atan2(t,e);const[h,d]=Zc(i.group.position.x,i.group.position.z);i.tile=this.tiles.get(tn(h,d))||i.tile,i.moving=!0,i.walkPhase+=n*9}else i.moving=!1}updateExplorer(t,e){const n=this.explorer;if(!n||!n.group.visible)return;const i=n.tile,r=i?i.currentHeight+.02:n.group.position.y;n.group.position.y+=(r-n.group.position.y)*Math.min(1,t*10);const a=n.moving?Math.sin(n.walkPhase)*.62:Math.sin(e*2.1)*.035,o=n.group.userData.limbs;o&&(o.leftLeg.rotation.x=a,o.rightLeg.rotation.x=-a,o.leftArm.rotation.x=-a*.75,o.rightArm.rotation.x=a*.75),n.moving&&(n.group.position.y+=Math.abs(Math.sin(n.walkPhase))*.018)}getExplorerWorldPosition(){return this.explorer?this.explorer.group.position.clone().add(this.origin):this.origin.clone()}getWalkStatus(){const t=this.explorer?.tile;return t?t.feature===Ht.home?"Inside a cottage":t.feature===Ht.shop?"At the market stall":t.feature===Ht.path?"On the winding path":this.name:this.name}createWildRock(t){if(t.rockMesh)return;const e=new X(this.rockGeometry,De(t.q,t.r)>.5?this.rockMaterial:this.rockDarkMaterial),n=.16+De(t.q+4,t.r-2)*.18;e.scale.set(n*1.2,n*.8,n),e.position.set((De(t.q,t.r+10)-.5)*.55,n*.35,(De(t.q+2,t.r)-.5)*.55),e.rotation.set(De(t.q,t.r)*Math.PI,De(t.q+5,t.r)*Math.PI,0),e.castShadow=!0,e.receiveShadow=!0,t.decorGroup.add(e),t.rockMesh=e}createTree(t,e,n="grove"){const i=new Jt,r=nn(Math.floor(De(t.q+10,t.r+20)*1e5)+e*71+(n?.length||0)*17),a=n==="birch"?this.birchBarkMaterial:n==="palm"?this.paleWoodMaterial:this.trunkMaterial,o=new X(this.treeTrunkGeometry,a);o.position.y=.36,n==="ancient"&&o.scale.set(1.7,1.3,1.7),n==="palm"&&(o.scale.set(.8,1.7,.8),o.rotation.z=.1,o.position.y=.58),n==="willow"&&o.scale.set(1.05,1.12,1.05),o.castShadow=!0,o.receiveShadow=!0,i.add(o);const c=new Jt;if(c.position.y=.72,n==="palm"&&c.position.set(.1,1.17,0),i.add(c),n==="pine"){const l=[this.leafMaterials[2],this.leafMaterials[0],this.leafMaterials[3]];for(let h=0;h<3;h+=1){const d=new X(new bn(.43-h*.08,.38,7),l[h%l.length]);d.position.y=.05+h*.21,d.rotation.y=r()*Math.PI,d.castShadow=!0,d.receiveShadow=!0,c.add(d)}if(e>=3){const h=new X(this.coreGeometry,this.fruitMaterial);h.position.y=.73,h.scale.setScalar(.55),c.add(h)}}else if(n==="palm"){for(let l=0;l<6;l+=1){const h=new X(new bn(.12,.72,4),this.palmLeafMaterial),d=l/6*Math.PI*2+r()*.35;h.position.set(Math.cos(d)*.23,-.04-l%2*.04,Math.sin(d)*.23),h.rotation.z=Math.PI/2-.26,h.rotation.y=-d,h.castShadow=!0,c.add(h)}if(e>=3)for(let l=0;l<3;l+=1){const h=new X(this.residentHeadGeometry,this.darkWoodMaterial);h.position.set((r()-.5)*.22,-.12,(r()-.5)*.22),c.add(h)}}else if(n==="willow"){const l=new X(this.treeCanopyGeometry,this.leafMaterials[0]);l.scale.set(.45,.3,.45),l.position.y=.24,l.castShadow=!0,c.add(l);for(let h=0;h<8+e*2;h+=1){const d=new X(new kt(.018,.012,.52+r()*.32,4),this.leafMaterials[2]),u=h/(8+e*2)*Math.PI*2+r()*.35,f=.26+r()*.2;d.position.set(Math.cos(u)*f,.13-r()*.28,Math.sin(u)*f),d.rotation.z=(r()-.5)*.18,c.add(d)}}else{const l=n==="blossom"?this.blossomMaterials:n==="birch"?[this.leafMaterials[3],this.leafMaterials[1],this.leafMaterials[3]]:[this.leafMaterials[1],this.leafMaterials[0],this.leafMaterials[3],this.leafMaterials[2]],h=2+e+(n==="ancient"?2:0),d=n==="ancient"?.5:n==="birch"?.29:[.3,.36,.41][e-1]??.32;for(let f=0;f<h;f+=1){const g=new X(this.treeCanopyGeometry,l[(f+e)%l.length]),M=f/h*Math.PI*2+r()*.6,m=f===0?0:(n==="ancient"?.3:.2)+r()*.18,p=d*(f===0?1:.64+r()*.28);g.position.set(f===0?0:Math.cos(M)*m,(f===0?.22:.08+r()*.22)+e*.035+(n==="ancient"?.12:0),f===0?0:Math.sin(M)*m),g.scale.set(p*(.9+r()*.18),p*(.86+r()*.22),p*(.9+r()*.18)),g.rotation.set(r()*.4,r()*Math.PI,r()*.4),g.castShadow=!0,g.receiveShadow=!0,c.add(g)}const u=n==="orchard"?7+e*2:n==="ancient"?3:e>=3?4:0;if(u){const f=new _n(n==="ancient"?.055:.045,0);for(let g=0;g<u;g+=1){const M=new X(f,this.fruitMaterial),m=r()*Math.PI*2;M.position.set(Math.cos(m)*.42,.12+r()*.36,Math.sin(m)*.42),c.add(M)}}if(n==="ancient"){const f=new X(new Dn(.24,.045,4,8),this.slateMaterial);f.rotation.x=Math.PI/2,f.position.y=.02,i.add(f)}}return i.userData.kind="tree",i.userData.canopy=c,i.userData.phase=r()*Math.PI*2,i.userData.sway=.008+e*.003+(n==="willow"?.005:0),i.userData.level=e,i.userData.style=n,i}createCrystal(t,e,n="prism"){const i=new Jt,r=nn(Math.floor(De(t.q+4,t.r+16)*1e5)+e*89),a=[3,5,7][e-1]??3,o=new X(this.crystalRingGeometry,this.crystalMaterials[1]);o.rotation.x=Math.PI/2,o.position.y=.018,o.scale.setScalar(1+e*.08),i.add(o);for(let l=0;l<a;l+=1){const h=new X(this.crystalGeometry,this.crystalMaterials[(l+e)%this.crystalMaterials.length]),d=l/a*Math.PI*2+r()*.5,u=l===0?0:.14+r()*.2,f=(.26+r()*.26)*(1+e*.26);h.scale.set(.18+r()*.1,f,.18+r()*.1),h.position.set(Math.cos(d)*u,f*.5+.04,Math.sin(d)*u),h.rotation.set((r()-.5)*.35,r()*Math.PI,(r()-.5)*.35),h.castShadow=!0,h.userData.baseY=h.position.y,h.userData.phase=r()*Math.PI*2,i.add(h)}const c=new ci(new Yn({map:this.glowTexture,color:e>=3?16767475:12058613,transparent:!0,opacity:.36+e*.06,depthWrite:!1,blending:Ge}));if(c.scale.setScalar(.72+e*.18),c.position.y=.24,i.add(c),e>=3){const l=new X(this.crystalRingGeometry,this.fruitMaterial);l.rotation.x=Math.PI/2,l.rotation.z=.3,l.position.y=.7,l.scale.setScalar(.9),i.add(l),i.userData.halo=l}return i.userData.kind="crystal",i.userData.phase=r()*Math.PI*2,i.userData.level=e,i.userData.glow=c,i.userData.style=n,i}rebuildFlowers(){if(!this.flowers)return;const t=[],e=[],n=[16773843,16372091,15178939,13624998,16249310];for(const r of this.tileList){if(r.type===Yt.water||r.spawnProgress<.7)continue;const a=nn(Math.floor(De(r.q*3+5,r.r*7+1)*1e5)),o=r.decor===_e.tree?1:1+Math.floor(a()*(r.type===Yt.stone?1:4));for(let c=0;c<o;c+=1){const l=a()*Math.PI*2,h=.18+a()*.58;t.push(r.x+Math.cos(l)*h,r.targetHeight+.055,r.z+Math.sin(l)*h);const d=new Dt(n[Math.floor(a()*n.length)]);d.offsetHSL((a()-.5)*.04,0,(a()-.5)*.08),e.push(d.r,d.g,d.b)}}const i=new ve;i.setAttribute("position",new he(t,3)),i.setAttribute("color",new he(e,3)),this.flowers.geometry&&this.flowers.geometry.dispose(),this.flowers.geometry=i}refreshStats(){let t=0,e=0,n=0,i=0,r=0,a=0,o=0,c=0;for(const l of this.tileList)l.decor===_e.tree&&(t+=1),l.decor===_e.crystal&&(e+=1),l.decor===_e.magic&&(n+=1),l.decor===_e.prop&&(i+=1),l.type===Yt.water&&(r+=1),l.feature===Ht.home&&(a+=1),l.feature===Ht.shop&&(o+=1),l.feature===Ht.path&&(c+=1);this.stats.groves=t,this.stats.prisms=e,this.stats.magic=n,this.stats.props=i,this.stats.waters=r,this.stats.homes=a,this.stats.shops=o,this.stats.paths=c,this.stats.hexes=this.tileList.length,this.syncResidents(),this.syncAnimals()}getSparkRate(){return .42+this.stats.groves*.062+this.stats.prisms*.092+(this.stats.magic||0)*.075+this.stats.waters*.018+this.stats.homes*.085+this.stats.shops*.11+this.stats.paths*.008}getState(){return{sparks:this.sparks,sparksFloor:Math.floor(this.sparks),bloom:this.bloom,bloomTarget:Ds,bloomPct:be(this.bloom/Ds,0,1),radius:this.radius,won:this.won,groves:this.stats.groves,prisms:this.stats.prisms,magic:this.stats.magic,props:this.stats.props,waters:this.stats.waters,homes:this.stats.homes,shops:this.stats.shops,paths:this.stats.paths,residents:this.stats.residents,hexes:this.stats.hexes,actions:this.stats.actions,sparkRate:this.getSparkRate(),islandId:this.id,islandName:this.name,origins:{x:this.origin.x,z:this.origin.z}}}getNextMilestone(){return D_.find(t=>!this.milestonesReached.has(t.bloom))??null}place(t,e){if(!e)return{ok:!1,reason:"missing"};if(e.isHeart)return this.events.toast?.("The Heartseed rests here — shape the land around it.","gold"),{ok:!1,reason:"heart"};const n=cs[t];if(!n)return{ok:!1,reason:"tool"};if(this.sparks+1e-4<n.cost)return this.events.denied?.(n,e),{ok:!1,reason:"sparks"};const i={height:e.height,type:e.type,decor:e.decor,decorLevel:e.decorLevel,decorStyle:e.decorStyle,feature:e.feature,featureStyle:e.featureStyle,rock:e.wildRock,variant:e.variant};let r=0,a=!1,o=n.hint,c=!1;if(n.family==="terrain"){const h={land:{height:.42,type:Yt.meadow,variant:(e.variant+1)%Qi.meadow.length},mesa:{height:.72,type:Yt.meadow,variant:1},cliff:{height:1.05,type:Yt.stone,variant:1},plateau:{height:.55,type:Yt.stone,variant:0},basin:{height:-.38,type:Yt.meadow,variant:0},terrace:{height:.24,type:Yt.meadow,variant:2},stone:{height:.08,type:Yt.stone,variant:1},dune:{height:.32,type:Yt.meadow,variant:3}}[n.style]||{height:.42,type:Yt.meadow,variant:e.variant},d=e.targetHeight+h.height;if(d>=$a-.02)return this.events.toast?.("This piece of earth has reached the sky.","gold"),{ok:!1,reason:"max-height"};if(d<=Za+.02)return this.events.toast?.("The basin has already sunk to the roots.","gold"),{ok:!1,reason:"min-height"};e.targetHeight=be(d,Za,$a),e.height=e.targetHeight,e.type=h.type,e.variant=h.variant,e.wildRock=!1,this.clearWildRock(e),r=n.bloom,this.stats.land+=1,a=!0}else if(n.family==="water"){if(e.type===Yt.water&&e.targetHeight<=.3&&e.featureStyle===n.style)return this.events.toast?.("This water is already deep and still.","gold"),{ok:!1,reason:"already-water"};this.clearDecor(e),this.clearFeature(e),e.targetHeight=.22,e.height=.22,e.type=Yt.water,e.variant=Math.floor(Math.random()*Qi.water.length),e.wildRock=!1,this.clearWildRock(e),n.style!=="pool"&&this.createFeature(e,Ht.water,!0,n.style),this.stats.water+=1,r=n.bloom,a=!0}else if(n.family==="tree"){if(e.type===Yt.water)return this.events.toast?.("Trees need dry ground — raise the land first.","gold"),{ok:!1,reason:"water"};if(e.feature===Ht.home||e.feature===Ht.shop)return this.events.toast?.("There is a doorway here already.","gold"),{ok:!1,reason:"occupied"};if(e.decor===_e.tree&&e.decorStyle===n.style){if(e.decorLevel>=3)return this.events.toast?.("This canopy has reached its full height.","gold"),{ok:!1,reason:"max-level"};c=!0;const h=e.decorLevel+1;r=Math.max(2,n.bloom-1),this.createDecor(e,_e.tree,h,!0,n.style),o=h===2?"The canopy deepens":"The tree has become an elder",a=!0}else this.clearDecor(e),this.createDecor(e,_e.tree,1,!0,n.style),e.type=e.type===Yt.stone?Yt.stone:Yt.meadow,this.stats.grovesPlanted+=1,r=n.bloom,a=!0;e.wildRock=!1}else if(n.family==="magic"){if(e.type===Yt.water)return this.events.toast?.("Old magic roots in earth, not water.","gold"),{ok:!1,reason:"water"};if(e.feature===Ht.home||e.feature===Ht.shop)return this.events.toast?.("There is a doorway here already.","gold"),{ok:!1,reason:"occupied"};const h=n.style==="prism"?_e.crystal:_e.magic;if(e.decor===h&&e.decorStyle===n.style){if(e.decorLevel>=3)return this.events.toast?.("This relic is already singing at its brightest.","gold"),{ok:!1,reason:"max-level"};c=!0;const d=e.decorLevel+1;r=Math.max(3,n.bloom-2),this.createDecor(e,h,d,!0,n.style),o="The relic brightens",a=!0}else this.clearDecor(e),this.createDecor(e,h,1,!0,n.style),h===_e.crystal?this.stats.prismsWoken+=1:this.stats.magic+=1,r=n.bloom,a=!0;e.wildRock=!1}else if(n.family==="path"){if(e.type===Yt.water)return this.events.toast?.("Paths need solid ground — raise the land first.","gold"),{ok:!1,reason:"water"};if(e.feature===Ht.home||e.feature===Ht.shop)return this.events.toast?.("A doorway already opens onto this hex.","gold"),{ok:!1,reason:"occupied"};if(e.feature===Ht.path&&e.featureStyle===n.style)return this.events.toast?.("This way is already worn smooth.","gold"),{ok:!1,reason:"already-path"};this.clearDecor(e),this.clearFeature(e),this.createFeature(e,Ht.path,!0,n.style),r=n.bloom,a=!0}else if(n.family==="home"||n.family==="shop"){const h=n.family==="shop"?Ht.shop:Ht.home;if(e.type===Yt.water)return this.events.toast?.("Buildings need dry earth beneath them.","gold"),{ok:!1,reason:"water"};if(e.feature===Ht.home||e.feature===Ht.shop)return this.events.toast?.(e.feature===Ht.shop?"A market already fills this hex.":"A building already stands here.","gold"),{ok:!1,reason:"occupied"};this.clearDecor(e),this.clearFeature(e),this.createFeature(e,h,!0,n.style),r=n.bloom,a=!0}else if(n.family==="folk"){if(e.type===Yt.water)return this.events.toast?.("Neighbors need a place to stand.","gold"),{ok:!1,reason:"water"};this.stats.villagers+=1,this.stats.folk=this.stats.folk||{},this.stats.folk[n.style]=(this.stats.folk[n.style]||0)+1,this.spawnResident(e,n.style),r=n.bloom,a=!0}else if(n.family==="prop"){if(e.type===Yt.water)return this.events.toast?.("This wild thing needs dry ground.","gold"),{ok:!1,reason:"water"};if(e.feature===Ht.home||e.feature===Ht.shop)return this.events.toast?.("There is a doorway here already.","gold"),{ok:!1,reason:"occupied"};this.clearDecor(e),this.createDecor(e,_e.prop,1,!0,n.style),e.wildRock=!1,this.stats.props+=1,r=n.bloom,a=!0}if(!a)return{ok:!1,reason:"unknown"};(i.decor===_e.none||i.feature===Ht.none)&&this.clearWildRock(e),this.sparks=Math.max(0,this.sparks-n.cost),this.bloom+=r,this.stats.actions+=1,this.stats.tools=this.stats.tools||{},this.stats.tools[t]=(this.stats.tools[t]||0)+1,this.history.push({tile:e,before:i,toolName:t,bloomGain:r,cost:n.cost}),this.history.length>40&&this.history.shift(),this.updateTileMaterials(e),this.updateTileHeight(e),this.refreshStats(),this.rebuildFlowers(),e.heightPulse=1,this.emitPlacement(e,t,c);const l=this.getTileWorldPosition(e);return this.events.action?.({toolName:t,family:n.family,style:n.style,tile:e,bloomGain:r,cost:n.cost,position:l,upgraded:c,message:o,sparkRate:this.getSparkRate()}),this.events.state?.(this.getState()),this.checkMilestones(),this.checkWin(),this.save(),{ok:!0,bloomGain:r,tile:e,message:o,position:l}}clearDecor(t){for(t.decorObject&&(t.decorObject.traverse(e=>{e.userData?.kind}),t.decorGroup.remove(t.decorObject),t.decor=_e.none,t.decorLevel=0,t.decorStyle=null,t.decorObject=null);t.decorGroup.children.length>0;)t.decorGroup.remove(t.decorGroup.children[0]);this.trees=this.trees.filter(e=>e.parent),this.crystals=this.crystals.filter(e=>e.parent)}emitPlacement(t,e,n){const i=cs[e],r=this.getTileWorldPosition(t),a=n?2:1;this.ripplesSystem.spawn(r,{color:i.color,scale:1.15+a*.2,duration:1.05,startScale:.25}),this.particles.emitBurst(r,{count:i.family==="magic"?42:i.family==="tree"?32:i.family==="terrain"?20:26,color:i.color,color2:i.color2,speed:i.family==="terrain"?1.05:1.45,spread:.34,size:.085,sizeVariance:.055,life:1.25,gravity:i.family==="terrain"?-.85:-.45,drag:1.7,upward:i.family==="terrain"?.45:.8,ring:i.family==="water"}),i.family==="magic"&&this.particles.emitBurst(r,{count:16,color:16773560,speed:.65,spread:.12,size:.05,life:2.1,gravity:.3,drag:.7,upward:1.05})}checkMilestones(){let t=this.getNextMilestone();for(;t&&this.bloom>=t.bloom;){this.milestonesReached.add(t.bloom),this.spawnRing(t.radius,!0,.2),this.sparks=Math.min(999,this.sparks+t.sparks),this.refreshStats(),this.rebuildFlowers();const e=new I(0,.8,0).add(this.origin);this.ripplesSystem.spawn(e,{color:16769185,scale:10,duration:2.1,startScale:1}),this.particles.emitBurst(e,{count:70,color:16765322,color2:12579551,speed:2.8,spread:2.5,size:.07,life:2.4,gravity:.15,drag:.9,upward:1.5,ring:!0}),this.events.expansion?.({radius:t.radius,message:t.message,sparks:t.sparks,state:this.getState()}),t=this.getNextMilestone()}this.events.state?.(this.getState())}checkWin(){if(this.won||this.bloom<Ds)return;this.won=!0,this.winPulse=0,this.floraDirty=!1,this.sparks=Math.min(999,this.sparks+24),this.refreshStats(),this.heartBloom=1;const t=this.getHeartseedPosition().clone();this.particles.emitBurst(t,{count:130,color:16766847,color2:16774876,speed:3.8,spread:.9,size:.09,life:3.2,gravity:.45,drag:.8,upward:2.4,ring:!0}),this.ripplesSystem.spawn(new I(t.x,this.getCenterTop()+.1+this.origin.y,t.z),{color:16766346,scale:9,duration:2.4,startScale:.8}),this.events.win?.({state:this.getState()}),this.events.state?.(this.getState()),this.save()}getCenterTop(){const t=this.tiles.get(tn(0,0));return t?t.currentHeight:1.4}getHeartseedPosition(){return new I(0,this.getCenterTop()+1.55,0).add(this.origin)}getTileWorldPosition(t){return new I(t.x,t.currentHeight+.05,t.z).add(this.origin)}pick(t,e,n,i){const r=i.getBoundingClientRect(),a=(t-r.left)/r.width*2-1,o=-((e-r.top)/r.height)*2+1;this.raycaster??=new yf,this.pointer??=new Nt,this.pointer.set(a,o),this.raycaster.setFromCamera(this.pointer,n);const c=this.raycaster.intersectObjects(this.tileMeshes,!1);for(const l of c){const h=l.object.userData.tile;if(h&&h.spawnProgress>.6&&h.group.visible)return this.selection.userData.point=l.point,h}return null}highlight(t){if(!t||!t.group.visible||t.spawnProgress<.6){this.selection.visible=!1,this.selection.userData.target=null;return}this.selection.visible=!0,this.selection.userData.target=t,this.selection.position.set(t.x,t.currentHeight+.03,t.z);const e=t.isHeart;this.selectionRing.material.color.setHex(e?16773050:16767116),this.selectionGlow.material.color.setHex(e?16773050:16762977);const n=1+Math.sin(this.time*3.2)*.025;this.selectionRing.scale.setScalar(n),this.selectionGlow.scale.setScalar(1.03+Math.sin(this.time*2.1)*.03)}pulseAt(t){this.ripplesSystem.spawn(t,{color:16765578,scale:.9,duration:.9,startScale:.2})}update(t,e){this.time=e;const n=Math.min(t,.05);for(const i of this.waterMaterials)i.uniforms.uTime.value=e;this.foamMaterial.uniforms.uTime.value=e,this.active&&(this.sparks=Math.min(999,this.sparks+this.getSparkRate()*n),this.saveClock+=n,this.saveClock>10&&(this.saveClock=0,this.save()));for(const i of this.tileList){if(i.spawnProgress<1){if(i.spawnDelay>0){i.spawnDelay-=n;continue}i.spawn=Math.min(1,i.spawn+n*1.65);const r=Ya(i.spawn);i.spawnProgress=r,i.group.visible=!0,i.group.position.y=-2.8*(1-r),i.group.scale.setScalar(.25+.75*r),i.spawn>=1&&(i.group.position.y=0,i.group.scale.setScalar(1),i.spawnProgress=1,this.floraDirty=!0)}if(Math.abs(i.currentHeight-i.targetHeight)>.001?(i.currentHeight=is(i.currentHeight,i.targetHeight,9,n),this.updateTileHeight(i)):i.currentHeight!==i.targetHeight&&(i.currentHeight=i.targetHeight,this.updateTileHeight(i)),i.decorGroup.userData.pop!==void 0&&i.decorGroup.userData.pop<1){i.decorGroup.userData.pop=Math.min(1,i.decorGroup.userData.pop+n*2.7);const r=Yc(i.decorGroup.userData.pop);i.decorGroup.scale.setScalar(Math.max(.01,r))}if(i.featureGroup.userData.pop!==void 0&&i.featureGroup.userData.pop<1){i.featureGroup.userData.pop=Math.min(1,i.featureGroup.userData.pop+n*2.7);const r=Yc(i.featureGroup.userData.pop);i.featureGroup.scale.setScalar(Math.max(.01,r))}if(i.heightPulse>0){i.heightPulse=Math.max(0,i.heightPulse-n*2.6);const r=Math.sin(i.heightPulse*Math.PI)*.035;i.group.position.y=r}if(i.decorObject?.userData.kind==="tree"){const r=i.decorObject.userData.canopy;r&&(r.rotation.z=Math.sin(e*.72+i.decorObject.userData.phase)*i.decorObject.userData.sway,r.rotation.x=Math.cos(e*.53+i.decorObject.userData.phase)*i.decorObject.userData.sway*.6)}if(i.decorObject?.userData.kind==="crystal"){const r=i.decorObject;if(r.children.forEach(a=>{a.userData.baseY&&(a.position.y=a.userData.baseY+Math.sin(e*1.6+a.userData.phase)*.012)}),r.userData.halo&&(r.userData.halo.rotation.z+=n*.35),r.userData.glow){const a=1+Math.sin(e*1.9+r.userData.phase)*.08;r.userData.glow.scale.setScalar((.72+r.userData.level*.18)*a)}}if(i.decorObject?.userData.kind==="magic"){const r=i.decorObject;if(r.userData.orbit&&(r.userData.orbit.rotation.z=Math.sin(e*.8+r.userData.phase)*.25,r.userData.orbit.rotation.y=e*.45),r.userData.glow){const a=1+Math.sin(e*2.2+r.userData.phase)*.1;r.userData.glow.scale.setScalar((.9+r.userData.level*.12)*a)}}if(i.decorObject?.userData.kind==="prop"){const r=i.decorObject;r.userData.kite&&(r.userData.kite.position.y=1.48+Math.sin(e*1.3+r.userData.phase)*.07,r.userData.kite.rotation.z=.35+Math.sin(e*1.7+r.userData.phase)*.1,r.userData.kite.rotation.y=Math.sin(e*.6+r.userData.phase)*.25)}}if(this.baseGrow<1){this.baseGrow=Math.min(1,this.baseGrow+n*1.1);const i=Ya(this.baseGrow);this.baseGroup&&this.baseGroup.scale.set(.84+.16*i,.7+.3*i,.84+.16*i)}if(this.floraDirty&&(this.floraDirty=!1,this.rebuildFlowers()),this.selection.visible){const i=this.selection.userData.target;i&&this.highlight(i)}this.updateHeartseed(n,e),this.updateResidents(n,e),this.updateAnimals(n,e),this.updateExplorer(n,e),this.particles.update(n),this.ripplesSystem.update(n)}updateHeartseedImmediate(){const t=this.tiles.get(tn(0,0));t&&this.heartseed.group.position.set(0,t.currentHeight,0)}updateHeartseed(t,e){const n=this.tiles.get(tn(0,0)),i=n?n.currentHeight:1.4,r=this.heartseed;r.group.position.y=is(r.group.position.y,i,9,t);const a=be(this.bloom/Ds,0,1);this.heartBloom=a;const o=Math.sin(e*1.15)*.06;r.seedPivot.position.y=1.06+o,r.seedPivot.rotation.y=e*.32,r.core.rotation.y=-e*.6,r.core.rotation.z=Math.sin(e*.6)*.2;const c=1+Math.sin(e*2.2)*.03;if(r.shell.scale.set(.9*c+a*.08,1.65*c+a*.16,.9*c+a*.08),r.glow.scale.setScalar(3.3+a*1.8+Math.sin(e*1.7)*.12),r.glow.material.opacity=.5+a*.24,r.light.intensity=1.7+a*2.4+(this.won?1.5:0),r.orbit.rotation.y=-e*.28,r.orbit.rotation.z=Math.sin(e*.35)*.16,r.orbitRing.rotation.z+=t*.06,r.orbitRing2.rotation.z-=t*.08,r.shards.forEach((l,h)=>{const d=e*(.48+h*.08)+h*(Math.PI*2/3),u=.66+Math.sin(e*.7+h)*.05;l.position.set(Math.cos(d)*u,Math.sin(e*1.2+h*2)*.08,Math.sin(d)*u),l.rotation.y+=t*.4}),this.won){this.winPulse=Math.min(1,this.winPulse+t*.55);const l=Ya(this.winPulse);if(r.bloomGroup.visible=!0,r.bloomGroup.scale.setScalar(.4+l*1.35),r.bloomGroup.rotation.y=e*.18,r.bloomGroup.children.forEach((h,d)=>{if(h.userData.angle!==void 0){const u=.28+l*1.2;h.rotation.z=Math.PI/2-u+Math.sin(e*1.2+d)*.03,h.position.y=.04+l*.1}}),r.beam.visible=!0,r.beam.material.opacity=.08+l*.13+Math.sin(e*1.4)*.015,r.beam.rotation.y=e*.12,Math.random()<t*18){const h=Math.random()*Math.PI*2,d=Math.random()*.8;this.particles.emitTrail(this.toWorldPoint(new I(Math.cos(h)*d,i+1.3+Math.random()*1.4,Math.sin(h)*d)),{color:Math.random()>.5?16770212:16761064,size:.045,life:2.4})}}else if(r.bloomGroup.scale.setScalar(.01),r.bloomGroup.visible=!1,r.beam.visible=!1,a>.3&&Math.random()<t*2.5){const l=Math.random()*Math.PI*2,h=Math.random()*.5;this.particles.emitTrail(this.toWorldPoint(new I(Math.cos(l)*h,i+1.3,Math.sin(l)*h)),{color:16767392,size:.035,life:1.8})}}serialize(){const t=this.tileList.map(e=>({q:e.q,r:e.r,h:Number(e.targetHeight.toFixed(2)),t:e.type,v:e.variant,d:e.decor,l:e.decorLevel,ds:e.decorStyle,f:e.feature,fs:e.featureStyle,rock:e.wildRock}));return{id:this.id,name:this.name,x:Number(this.origin.x.toFixed(2)),z:Number(this.origin.z.toFixed(2)),radius:this.radius,sparks:Number(this.sparks.toFixed(2)),bloom:this.bloom,won:this.won,stats:this.stats,connections:Array.from(this.connections),milestonesReached:Array.from(this.milestonesReached),tiles:t}}save(){this.events.persist?.(this)}rename(t){const e=String(t||"").trim().slice(0,32);return e?(this.name=e,this.events.rename?.({island:this,name:e}),this.save(),!0):!1}reset(){this.events.reset?.()}}const jr=25e4,k_=118,z_=-128,Ko=443,Jc=[8826232,9549955,8102513,10272906],Qc=[11053718,10067342,11974047],jc=[7064010,8050386,6012613];function G_(s){const t=Math.sin(s*127.1+311.7)*43758.5453123;return t-Math.floor(t)}function H_(s,t,e){s[t]=(e>>16&255)/255,s[t+1]=(e>>8&255)/255,s[t+2]=(e&255)/255}function th(s,t,e){const n=be((e-s)/(t-s),0,1);return n*n*(3-2*n)}function es(s){return new Dt(s).convertLinearToSRGB()}function V_(){let s=887,t=1/0;for(let e=820;e<=950;e+=1){let n=0;for(let r=0;r<Ko;r+=1){const a=-Math.PI/2+(r+.5)/Ko*Math.PI;n+=Math.max(4,Math.round(e*Math.cos(a)))}if(n<jr)continue;const i=n-jr;i<t&&(t=i,s=e)}return s}function W_(){return new Ve({side:rn,transparent:!0,depthWrite:!1,blending:Ge,uniforms:{uColor:{value:es(10475228)},uPower:{value:3.2}},vertexShader:`
      varying vec3 vNormal;
      varying vec3 vView;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vNormal = normalize(normalMatrix * normal);
        vView = normalize(-mv.xyz);
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      uniform vec3 uColor;
      uniform float uPower;
      varying vec3 vNormal;
      varying vec3 vView;
      void main() {
        float rim = pow(1.0 - abs(dot(normalize(vNormal), normalize(vView))), uPower);
        gl_FragColor = vec4(uColor, rim * 0.42);
      }
    `})}function X_(s){return new Ve({transparent:!0,depthWrite:!1,depthTest:!0,blending:ss,uniforms:{uPixelRatio:{value:s},uTime:{value:0},uSize:{value:1.7}},vertexShader:`
      attribute vec3 aColor;
      attribute float aClaim;
      attribute float aSeed;
      uniform float uPixelRatio;
      uniform float uTime;
      uniform float uSize;
      varying vec3 vColor;
      varying float vClaim;
      varying float vSeed;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        float distanceScale = 300.0 / max(1.0, -mv.z);
        float pulse = 1.0 + sin(uTime * 1.6 + aSeed * 6.2831) * 0.08 * aClaim;
        gl_PointSize = max(1.15, uSize * uPixelRatio * distanceScale * mix(0.78, 2.2, aClaim) * pulse);
        gl_Position = projectionMatrix * mv;
        vColor = aColor;
        vClaim = aClaim;
        vSeed = aSeed;
      }
    `,fragmentShader:`
      varying vec3 vColor;
      varying float vClaim;
      varying float vSeed;
      void main() {
        vec2 p = gl_PointCoord - 0.5;
        vec2 q = abs(p);
        float hexEdge = max(q.x * 0.8660254 + q.y * 0.5, q.y);
        float edge = 1.0 - smoothstep(0.34, 0.5, hexEdge);
        float halo = 1.0 - smoothstep(0.0, 0.52, length(p));
        float alpha = mix(0.23, 1.0, vClaim) * mix(edge, halo, 0.18);
        float glow = vClaim * (0.8 + 0.22 * sin(vSeed * 31.0));
        vec3 color = vColor + glow * 0.34;
        if (alpha < 0.018) discard;
        gl_FragColor = vec4(color, alpha);
      }
    `})}function q_(){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d"),n=128/2,i=e.createRadialGradient(n,n,0,n,n,n);i.addColorStop(0,"rgba(255, 249, 222, 0.96)"),i.addColorStop(.16,"rgba(255, 214, 129, 0.78)"),i.addColorStop(.4,"rgba(255, 180, 78, 0.28)"),i.addColorStop(.72,"rgba(255, 157, 55, 0.06)"),i.addColorStop(1,"rgba(255, 150, 48, 0)"),e.fillStyle=i,e.fillRect(0,0,128,128),e.strokeStyle="rgba(255, 238, 190, 0.92)",e.lineWidth=2.4,e.beginPath(),e.arc(n,n,33,0,Math.PI*2),e.stroke(),e.strokeStyle="rgba(255, 201, 106, 0.5)",e.lineWidth=1.2,e.beginPath(),e.arc(n,n,42,0,Math.PI*2),e.stroke();const r=new $s(t);return r.colorSpace=He,r}function Y_(){return new Ve({uniforms:{uTime:{value:0},uSun:{value:new I(.38,.82,.44).normalize()},uDeep:{value:es(666682)},uShallow:{value:es(2915202)},uLand:{value:es(7311709)},uDry:{value:es(12230765)},uIce:{value:es(14872298)}},vertexShader:`
      varying vec3 vNormal;
      varying vec3 vWorldNormal;
      varying vec3 vView;
      void main() {
        vec4 world = modelMatrix * vec4(position, 1.0);
        vec4 mv = viewMatrix * world;
        vNormal = normalize(normalMatrix * normal);
        vWorldNormal = normalize(mat3(modelMatrix) * normal);
        vView = normalize(-mv.xyz);
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      uniform float uTime;
      uniform vec3 uSun;
      uniform vec3 uDeep;
      uniform vec3 uShallow;
      uniform vec3 uLand;
      uniform vec3 uDry;
      uniform vec3 uIce;
      varying vec3 vNormal;
      varying vec3 vWorldNormal;
      varying vec3 vView;

      float hash(vec3 p) {
        p = fract(p * 0.3183099 + vec3(0.13, 0.27, 0.41));
        p *= 17.0;
        return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
      }

      float noise(vec3 x) {
        vec3 i = floor(x);
        vec3 f = fract(x);
        f = f * f * (3.0 - 2.0 * f);
        return mix(
          mix(mix(hash(i + vec3(0,0,0)), hash(i + vec3(1,0,0)), f.x),
              mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
          mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
              mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y),
          f.z
        );
      }

      float fbm(vec3 p) {
        float value = 0.0;
        float amplitude = 0.54;
        for (int i = 0; i < 4; i++) {
          value += amplitude * noise(p);
          p = p * 2.07 + vec3(1.7, 3.1, 4.3);
          amplitude *= 0.5;
        }
        return value;
      }

      void main() {
        vec3 p = normalize(vWorldNormal);
        float drift = uTime * 0.003;
        float broad = fbm(p * 2.15 + vec3(drift, 0.0, 0.0));
        float detail = fbm(p * 6.2 + vec3(11.4, 2.1, 5.7));
        float height = broad * 0.78 + detail * 0.22;
        float land = smoothstep(0.505, 0.585, height);
        float shore = smoothstep(0.435, 0.57, height);
        float mountains = smoothstep(0.655, 0.79, height);
        float latitude = abs(p.y);

        vec3 color = mix(uDeep, uShallow, shore * 0.72);
        vec3 ground = mix(uLand, uDry, smoothstep(0.4, 0.85, detail) * 0.6);
        color = mix(color, ground, land);
        color = mix(color, uDry * 1.06, mountains * 0.34);
        float polar = smoothstep(0.82, 0.965, latitude);
        color = mix(color, uIce, polar * 0.9);

        float light = clamp(dot(normalize(vWorldNormal), normalize(uSun)) * 0.78 + 0.34, 0.16, 1.1);
        float rim = pow(1.0 - abs(dot(normalize(vNormal), normalize(vView))), 3.4);
        color *= light;
        color += vec3(0.24, 0.52, 0.56) * rim * 0.26;
        color += uDeep * 0.16;
        gl_FragColor = vec4(color, 1.0);
      }
    `})}class $_{constructor(t,e={}){this.scene=t,this.radius=e.radius??k_,this.centerY=e.centerY??z_,this.rows=Ko,this.claimedCount=0,this.time=0,this.rotation=0,this.group=new Jt,this.group.name="openwork-worldsphere",this.group.position.set(0,this.centerY,0),this.group.rotation.z=ks.degToRad(-13.4),this.group.rotation.x=ks.degToRad(8.5),this.scene.add(this.group),this.buildGrid(),this.buildBody(),this.buildHexField(),this.buildAtmosphere(),this.markers=new Jt,this.markers.name="worldsphere-island-markers",this.markerMap=new Map,this.markerTexture=q_(),this.group.add(this.markers)}buildGrid(){const t=V_();this.rowStart=new Int32Array(this.rows+1),this.rowCols=new Uint16Array(this.rows),this.rowLat=new Float32Array(this.rows);let e=0;for(let a=0;a<this.rows;a+=1){const o=-Math.PI/2+(a+.5)/this.rows*Math.PI;this.rowLat[a]=o;const c=Math.max(4,Math.round(t*Math.cos(o)));this.rowCols[a]=c,e+=c}let n=e-jr,i=0,r=0;for(;n>0&&r<this.rows*4;)this.rowCols[i]>4&&(this.rowCols[i]-=1,n-=1),i=(i+1)%this.rows,r+=1;e=0;for(let a=0;a<this.rows;a+=1)this.rowStart[a]=e,e+=this.rowCols[a];this.rowStart[this.rows]=e,this.cellCount=e,this.capacity=e,this.target=jr,this.positions=new Float32Array(e*3),this.baseColors=new Float32Array(e*3),this.colors=new Float32Array(e*3),this.claims=new Float32Array(e),this.seeds=new Float32Array(e),this.owners=new Uint16Array(e);for(let a=0;a<this.rows;a+=1){const o=this.rowCols[a],c=this.rowLat[a],l=Math.cos(c),h=Math.sin(c),d=a%2===0?0:Math.PI/o;for(let u=0;u<o;u+=1){const f=this.rowStart[a]+u,g=u/o*Math.PI*2+d-Math.PI,M=Math.cos(g)*l,m=h,p=Math.sin(g)*l;this.positions[f*3]=M*this.radius,this.positions[f*3+1]=m*this.radius,this.positions[f*3+2]=p*this.radius;const y=G_(f*.731+a*7.13);this.seeds[f]=y;const T=Math.sin(g*2.3+a*.17)*.5+.5,x=be(Math.abs(c)/(Math.PI/2),0,1),w=Math.sin(g*2.1+Math.sin(c*3.4+1.1)*1.28)*.56+Math.sin(g*4.6-c*2.2+.8)*.24+Math.sin(c*6.8+g*.7)*.2,E=th(.02,.42,w),R=th(.83,.97,x),_=.028+T*.026+y*.008,b=.115+T*.075+y*.012,C=.15+T*.08,P=.105+y*.05+T*.025,U=.238+T*.085+y*.035,G=.135+y*.045;let D=_+(P-_)*E,B=b+(U-b)*E,$=C+(G-C)*E;D+=(.38-D)*R*.72,B+=(.48-B)*R*.72,$+=(.5-$)*R*.72,this.baseColors[f*3]=D,this.baseColors[f*3+1]=B,this.baseColors[f*3+2]=$,this.colors[f*3]=D,this.colors[f*3+1]=B,this.colors[f*3+2]=$}}}buildBody(){const t=Y_(),e=new X(new xn(this.radius*.985,160,96),t);e.name="worldsphere-body",e.receiveShadow=!1,e.castShadow=!1,this.group.add(e),this.body=e,this.bodyMaterial=t}buildHexField(){const t=new ve;t.setAttribute("position",new Ue(this.positions,3)),t.setAttribute("aColor",new Ue(this.colors,3)),t.setAttribute("aClaim",new Ue(this.claims,1)),t.setAttribute("aSeed",new Ue(this.seeds,1)),t.boundingSphere=new pi(new I,this.radius*1.02),this.hexMaterial=X_(Math.min(window.devicePixelRatio||1,2));const e=new ra(t,this.hexMaterial);e.name="worldsphere-hex-field",e.frustumCulled=!1,e.renderOrder=3,this.group.add(e),this.points=e,this.geometry=t,this.colorAttribute=t.getAttribute("aColor"),this.claimAttribute=t.getAttribute("aClaim")}buildAtmosphere(){const t=new X(new xn(this.radius*1.075,64,48),W_());t.name="worldsphere-atmosphere",t.renderOrder=4,this.group.add(t),this.atmosphere=t;const e=new Ve({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uSun:{value:new I(.38,.82,.44).normalize()}},vertexShader:`
        varying vec3 vWorldNormal;
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vWorldNormal = normalize(mat3(modelMatrix) * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float uTime;
        uniform vec3 uSun;
        varying vec3 vWorldNormal;
        varying vec3 vNormal;

        float hash(vec3 p) {
          p = fract(p * 0.3183099 + vec3(0.13, 0.27, 0.41));
          p *= 17.0;
          return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
        }

        float noise(vec3 x) {
          vec3 i = floor(x);
          vec3 f = fract(x);
          f = f * f * (3.0 - 2.0 * f);
          return mix(
            mix(mix(hash(i + vec3(0,0,0)), hash(i + vec3(1,0,0)), f.x),
                mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
            mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
                mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y),
            f.z
          );
        }

        float fbm(vec3 p) {
          float value = 0.0;
          float amplitude = 0.55;
          for (int i = 0; i < 4; i++) {
            value += amplitude * noise(p);
            p = p * 2.05 + vec3(2.2, 1.3, 4.4);
            amplitude *= 0.5;
          }
          return value;
        }

        void main() {
          vec3 p = normalize(vWorldNormal);
          float drift = uTime * 0.005;
          float broad = fbm(p * 3.1 + vec3(drift, drift * 0.4, 0.0));
          float detail = fbm(p * 7.4 + vec3(4.1, drift * 0.8, 7.7));
          float cloud = smoothstep(0.52, 0.72, broad * 0.8 + detail * 0.2);
          float light = clamp(dot(normalize(vNormal), normalize(uSun)) * 0.8 + 0.28, 0.12, 1.05);
          float alpha = cloud * 0.26 * light;
          if (alpha < 0.012) discard;
          gl_FragColor = vec4(vec3(0.94, 0.97, 0.95), alpha);
        }
      `}),n=new X(new xn(this.radius*1.014,96,64),e);n.name="worldsphere-clouds",n.renderOrder=2,this.group.add(n),this.clouds=n,this.cloudMaterial=e}rowColForIndex(t){let e=0,n=this.rows-1;for(;e<n;){const i=e+n+1>>1;this.rowStart[i]<=t?e=i:n=i-1}return{row:e,col:t-this.rowStart[e]}}cellIndex(t,e){if(t<0||t>=this.rows)return-1;const n=this.rowCols[t];if(!n)return-1;const i=(e%n+n)%n;return this.rowStart[t]+i}slotForIndex(t){let e,n;if(t<8){const o=t%4,c=Math.floor(t/4);e=c===0?.46:.14,n=2.04+o*.19+c*.04}else e=(t*.6180339887498949%1*2-1)*1.33,n=(t*2.399963229728653+.7)%(Math.PI*2);const i=be(Math.round((e+Math.PI/2)/Math.PI*(this.rows-1)),8,this.rows-9),r=this.rowCols[i],a=Math.floor((n+Math.PI)%(Math.PI*2)/(Math.PI*2)*r);return{row:i,col:a}}cellDirection(t,e){const n=be(t,0,this.rows-1),i=this.rowCols[n],r=this.rowLat[n],a=n%2===0?0:Math.PI/i,o=e/i*Math.PI*2+a-Math.PI,c=Math.cos(r);return new I(Math.cos(o)*c,Math.sin(r),Math.sin(o)*c)}updateMarker(t){if(!t)return;const e=t.id||`island-${t.index??0}`;let n=this.markerMap.get(e);if(!n){const a=new Yn({map:this.markerTexture,color:16764806,transparent:!0,depthWrite:!1,depthTest:!0,blending:Ge});n=new ci(a),n.name=`worldsphere-marker-${e}`,n.renderOrder=6,n.userData.phase=(t.index??0)*1.7,this.markers.add(n),this.markerMap.set(e,n)}const i=this.slotForIndex(t.index??0),r=this.cellDirection(i.row,i.col);n.position.copy(r).multiplyScalar(this.radius*1.016),n.userData.baseScale=this.radius*.13,n.scale.setScalar(n.userData.baseScale)}clearMarkers(){for(const t of this.markerMap.values())this.markers.remove(t),t.material.dispose();this.markerMap.clear()}tileColor(t){return t?t.feature==="home"?15778676:t.feature==="shop"?16307084:t.feature==="path"?14070137:t.decor==="crystal"?9627109:t.decor==="magic"?13019647:t.decor==="prop"?14855542:t.decor==="tree"?7447914:t.type==="water"?jc[t.variant%jc.length]:t.type==="stone"?Qc[t.variant%Qc.length]:Jc[t.variant%Jc.length]:7314276}syncIsland(t){if(!t||!Array.isArray(t.tileList))return;const e=this.slotForIndex(t.index??0),n=(t.index??0)+1;for(const i of t.tileList){if(!i)continue;const r=e.row+i.r,a=e.col+i.q+Math.floor(i.r/2),o=this.cellIndex(r,a);if(o<0)continue;this.owners[o]===0&&(this.claimedCount+=1),this.owners[o]=n;const c=this.tileColor(i);H_(this.colors,o*3,c);const l=i.feature==="home"||i.feature==="shop"?1.16:1;this.colors[o*3]=Math.min(1,this.colors[o*3]*l),this.colors[o*3+1]=Math.min(1,this.colors[o*3+1]*l),this.colors[o*3+2]=Math.min(1,this.colors[o*3+2]*l),this.claims[o]=1}this.colorAttribute.needsUpdate=!0,this.claimAttribute.needsUpdate=!0,this.updateMarker(t)}clearClaims(){this.owners.fill(0),this.claims.fill(0),this.colors.set(this.baseColors),this.claimedCount=0,this.colorAttribute.needsUpdate=!0,this.claimAttribute.needsUpdate=!0}syncAll(t){this.clearClaims(),this.clearMarkers();for(const e of t)this.syncIsland(e)}getStats(){return{target:this.target,cells:this.cellCount,claimed:this.claimedCount,percent:this.cellCount?this.claimedCount/this.cellCount*100:0,radius:this.radius,rows:this.rows}}getCameraTarget(){return new I(0,this.centerY,0)}getViewDistance(){return this.radius*3.72}setPixelRatio(t){this.hexMaterial&&(this.hexMaterial.uniforms.uPixelRatio.value=t)}update(t,e){this.time=e,this.rotation+=t*.012,this.group.rotation.y=this.rotation,this.hexMaterial&&(this.hexMaterial.uniforms.uTime.value=e),this.bodyMaterial&&(this.bodyMaterial.uniforms.uTime.value=e),this.cloudMaterial&&(this.cloudMaterial.uniforms.uTime.value=e),this.clouds&&(this.clouds.rotation.y=e*.005),this.atmosphere&&(this.atmosphere.material.uniforms.uPower.value=3.1+Math.sin(e*.18)*.2);for(const n of this.markerMap.values()){const i=1+Math.sin(e*1.9+n.userData.phase)*.12;n.scale.setScalar(n.userData.baseScale*i),n.material.opacity=.82+Math.sin(e*2.4+n.userData.phase)*.12}}}const Qa="openwork-world-v3",eh="openwork-world-v2",nh=new gt({color:10120003,roughness:.98,flatShading:!0}),Z_=new gt({color:7753783,roughness:1,flatShading:!0}),K_=new Hh({color:13677444,transparent:!0,opacity:.85});function ja(s){return 1.6*s.radius+1.25}function J_(s){const t=s*2.39996+.45,e=12.4+s%3*2.1;return{x:Math.cos(t)*e,z:Math.sin(t)*e}}class Q_{constructor(t,e={}){this.scene=t,this.events=e,this.islands=new Map,this.activeId=null,this.mood="dawn",this.time=0,this.saveClock=0,this.bridgeGroup=new Jt,this.bridgeGroup.name="openwork-bridges",this.scene.add(this.bridgeGroup),this.planet=new $_(t),this.planet.group.visible=!1,this.load(),this.planet.syncAll(this.islands.values()),this.bindEvents()}get active(){return this.islands.get(this.activeId)||[...this.islands.values()][0]||null}get radius(){return this.active?.radius??2}get sparks(){return this.active?.sparks??0}get bloom(){return this.active?.bloom??0}get won(){return this.active?.won??!1}get stats(){return this.active?.stats??{actions:0,groves:0,prisms:0,hexes:0,residents:0}}get tiles(){return this.active?.tiles??new Map}get particles(){return this.active?.particles??null}get heartseed(){return this.active?.heartseed??null}load(){let t=null;try{const e=localStorage.getItem(Qa);e&&(t=JSON.parse(e))}catch(e){console.warn("Could not restore the archipelago",e)}if(t?.v===3&&Array.isArray(t.islands)&&t.islands.length)t.islands.forEach((e,n)=>{const i=new Ja(this.scene,{},{id:e.id||`isle-${n}`,name:e.name||ts[n%ts.length],index:n,x:e.x||0,z:e.z||0,connections:e.connections||[],saved:e});this.islands.set(i.id,i)}),this.activeId=this.islands.has(t.activeId)?t.activeId:[...this.islands.keys()][0],t.mood&&(this.mood=t.mood);else{let e=null;try{const i=localStorage.getItem(eh);i&&(e=JSON.parse(i))}catch{}const n=new Ja(this.scene,{},{id:"first-light",name:ts[0],index:0,x:0,z:0,saved:e&&Array.isArray(e.tiles)?e:null});this.islands.set(n.id,n),this.activeId=n.id}for(const e of this.islands.values())e.setActive(e.id===this.activeId);this.rebuildBridges()}bindEvents(t=null){t&&(this.events={...this.events,...t});for(const[e,n]of this.islands)n.setEvents({state:()=>this.events.state?.(this.getState()),action:i=>{this.events.action?.({...i,islandId:e}),this.save()},denied:(i,r)=>this.events.denied?.(i,r),toast:(i,r)=>this.events.toast?.(i,r),expansion:i=>this.events.expansion?.(i),win:i=>this.events.win?.(i),persist:()=>this.save(),rename:()=>this.events.state?.(this.getState()),reset:()=>this.reset()})}setEvents(t){this.events={...this.events,...t},this.bindEvents()}setActive(t,e={}){return!this.islands.has(t)||t===this.activeId?!1:(this.active?.setActive(!1),this.activeId=t,this.active?.setActive(!0),this.save(),e.focus!==!1&&this.events.focus?.(this.getState()),!0)}isConnected(t,e){return!!(t?.connections?.has(e?.id)&&e?.connections?.has(t?.id))}connectNearest(){const t=this.active;if(!t)return null;const n=[...this.islands.values()].filter(i=>i.id!==t.id&&!this.isConnected(t,i)).sort((i,r)=>t.origin.distanceTo(i.origin)-t.origin.distanceTo(r.origin))[0];return n?(t.connections.add(n.id),n.connections.add(t.id),this.rebuildBridges(),this.save(),this.events.bridge?.({from:t,to:n}),{from:t,to:n}):(this.events.toast?.("Every isle within reach is already connected.","gold"),null)}disconnectNearest(){const t=this.active;if(!t||!t.connections.size)return this.events.toast?.("No bridge leaves this isle yet.","gold"),null;const e=[...t.connections][0],n=this.islands.get(e);return t.connections.delete(e),n?.connections.delete(t.id),this.rebuildBridges(),this.save(),this.events.toast?.("The bridge was taken back by the wind."),{from:t,to:n}}rebuildBridges(){for(;this.bridgeGroup.children.length;)this.bridgeGroup.children.pop().traverse?.(n=>{n.geometry&&n.geometry.dispose()});const t=new Set;for(const e of this.islands.values())for(const n of e.connections){const i=this.islands.get(n);if(!i)continue;const r=[e.id,i.id].sort().join("|");t.has(r)||(t.add(r),this.bridgeGroup.add(this.createBridge(e,i)))}}createBridge(t,e){const n=new Jt;n.name=`bridge-${t.id}-${e.id}`;const i=e.origin.clone().sub(t.origin).setY(0).normalize(),r=t.origin.clone().add(i.clone().multiplyScalar(ja(t)*.82)),a=e.origin.clone().sub(i.clone().multiplyScalar(ja(e)*.82)),o=.52,c=.58;r.y=o,a.y=c;const l=r.distanceTo(a),h=Math.max(24,Math.round(l*4)),d=.46,u=new af(new sn(1,1,1),nh,h),f=new Ce,g=[];for(let y=0;y<h;y+=1){const T=y/(h-1),x=ks.lerp(r.x,a.x,T),w=ks.lerp(r.z,a.z,T),E=ks.lerp(o,c,T)-Math.sin(T*Math.PI)*.5,R=new I((a.x-r.x)/h,(c-o)/h-Math.cos(T*Math.PI)*Math.PI*.5/h,(a.z-r.z)/h).normalize();f.position.set(x,E,w),f.rotation.y=Math.atan2(-R.z,R.x),f.rotation.z=Math.atan2(R.y,Math.hypot(R.x,R.z))*.5,f.scale.set(l/h*1.16,.055,d),f.updateMatrix(),u.setMatrixAt(y,f.matrix),g.push(new I(x,E,w))}u.instanceMatrix.needsUpdate=!0,u.castShadow=!0,u.receiveShadow=!0,n.add(u);const M=[],m=[],p=new I(-i.z,0,i.x);for(const y of g)M.push(y.clone().addScaledVector(p,-d*.52).add(new I(0,.09,0))),m.push(y.clone().addScaledVector(p,d*.52).add(new I(0,.09,0)));for(const y of[M,m]){const T=new lf(new ve().setFromPoints(y),K_);n.add(T)}for(let y=3;y<g.length-3;y+=8){const T=new X(new sn(.045,.38,.045),Z_);T.position.copy(g[y]).add(new I(0,.12,0)),n.add(T);for(const x of[-d*.52,d*.52]){const w=T.clone();w.position.addScaledVector(p,x),n.add(w)}}for(const[y,T]of[[r,t],[a,e]]){const x=new X(new kt(.055,.07,.12,6),nh);x.position.copy(y).add(new I(0,.22,0)),n.add(x);const w=new $h(16761466,.85,3.8,2);w.position.copy(y).add(new I(0,.42,0)),n.add(w)}return n}newIsland(t={}){const e=this.islands.size,n=t.position||this.findIslandPosition(e),i=t.name||ts[e%ts.length],r=new Ja(this.scene,{},{id:`isle-${Date.now().toString(36)}-${e}`,name:i,index:e,x:n.x,z:n.z});return this.islands.set(r.id,r),r.setActive(!1),this.bindEvents(),t.focus!==!1&&(this.active?.setActive(!1),this.activeId=r.id,r.setActive(!0),this.events.focus?.(this.getState())),this.planet.syncIsland(r),this.rebuildBridges(),this.save(),this.events.newIsland?.(r),r}findIslandPosition(t){let e=J_(t),n=0;for(;n<18;){let i=!0;for(const o of this.islands.values())if(Math.hypot(e.x-o.origin.x,e.z-o.origin.z)<11.5){i=!1;break}if(i)break;const r=t*2.39996+.45+(n+1)*.62,a=12.4+n%4*1.7;e={x:Math.cos(r)*a,z:Math.sin(r)*a},n+=1}return e}getActiveCenter(){return this.active?.origin.clone()||new I}getCameraTarget(){return this.getActiveCenter()}getWorldBoundsRadius(){let t=0;for(const e of this.islands.values())t=Math.max(t,e.origin.length()+ja(e));return t}getIslandList(){return[...this.islands.values()].map(t=>({id:t.id,name:t.name,active:t.id===this.activeId,hexes:t.tileList.length,bloom:t.bloom,won:t.won,residents:t.stats.residents,connections:[...t.connections]}))}setWorldView(t){for(const e of this.islands.values())e.setWorldVisible(!t);this.bridgeGroup.visible=!t,this.planet.group.visible=t}getState(){return{...this.active?.getState()||{},mood:this.mood,islandCount:this.islands.size,activeIslandId:this.activeId,islands:this.getIslandList(),sphere:this.planet.getStats()}}renameActiveIsland(t){return this.active?.rename(t)??!1}setMood(t){this.mood=t,this.save(),this.events.mood?.(t)}place(t,e){const n=this.active?.place(t,e)??{ok:!1,reason:"missing"};return n.ok&&this.planet.syncIsland(this.active),n}pick(t,e,n,i){return this.active?.pick(t,e,n,i)??null}highlight(t){this.active?.highlight(t)}setActiveState(t){this.active?.setActive(t)}beginWalk(){return this.active?.startWalk()??!1}endWalk(){this.active?.stopWalk()}moveExplorer(t,e,n){this.active?.moveExplorer(t,e,n)}getExplorerWorldPosition(){return this.active?.getExplorerWorldPosition()||this.getActiveCenter()}getWalkStatus(){return this.active?.getWalkStatus()||this.active?.name||"The isle"}update(t,e){this.time=e;for(const n of this.islands.values())n.update(t,e);this.planet.update(t,e),this.saveClock+=t,this.saveClock>12&&(this.saveClock=0,this.save())}save(){try{const t=[...this.islands.values()].map(e=>e.serialize());localStorage.setItem(Qa,JSON.stringify({v:3,activeId:this.activeId,mood:this.mood,islands:t,savedAt:Date.now()}))}catch{}}reset(){localStorage.removeItem(Qa),localStorage.removeItem(eh)}}function j_(){const t=document.createElement("canvas");t.width=64,t.height=64;const e=t.getContext("2d"),n=e.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,"rgba(255,250,226,0.95)"),n.addColorStop(.4,"rgba(255,238,186,0.38)"),n.addColorStop(1,"rgba(255,225,160,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);const i=new $s(t);return i.colorSpace=He,i}function tx(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d"),n=nn(281);e.clearRect(0,0,256,256);for(let r=0;r<16;r+=1){const a=50+n()*156,o=84+n()*76,c=22+n()*42,l=e.createRadialGradient(a,o,0,a,o,c);l.addColorStop(0,"rgba(255,251,242,0.55)"),l.addColorStop(.55,"rgba(255,248,235,0.25)"),l.addColorStop(1,"rgba(255,246,232,0)"),e.fillStyle=l,e.beginPath(),e.arc(a,o,c,0,Math.PI*2),e.fill()}const i=new $s(t);return i.colorSpace=He,i}class ex{constructor(t,e){this.scene=t,this.renderer=e,this.clock=0,this.clouds=[],this.birds=[],this.focus=new Nt(0,0),this.buildLights(),this.buildClouds(),this.buildMotes()}buildLights(){const t=new _f(14477802,9072979,1.5);this.scene.add(t),this.hemisphere=t;const e=new ka(16769204,2.15);e.position.set(9,15,7),e.castShadow=!0;const n=window.innerWidth<720?10:13;e.shadow.mapSize.set(n===10?1024:2048,n===10?1024:2048),e.shadow.camera.left=-n,e.shadow.camera.right=n,e.shadow.camera.top=n,e.shadow.camera.bottom=-n,e.shadow.camera.near=1,e.shadow.camera.far=42,e.shadow.bias=-7e-4,e.shadow.normalBias=.035,e.target.position.set(0,1,0),this.scene.add(e),this.scene.add(e.target),this.sun=e;const i=new ka(10403793,.52);i.position.set(-8,6,-9),this.scene.add(i),this.fill=i;const r=new ka(15909779,.24);r.position.set(0,-4,3),this.scene.add(r),this.bounce=r}setFocus(t,e){this.focus.set(t,e),this.sun&&(this.sun.position.set(t+9,15,e+7),this.sun.target.position.set(t,1,e),this.sun.target.updateMatrixWorld()),this.fill&&this.fill.position.set(t-8,6,e-9),this.bounce&&this.bounce.position.set(t,-4,e+3)}setWorldView(t){for(const e of this.clouds)e.visible=!t;for(const e of this.birds)e.visible=!t}setMood(t){if(!this.sun)return;const e={dawn:{sun:16769204,sunI:2.15,sky:14477802,ground:9072979,hemiI:1.5,fill:10403793,fillI:.52,bounce:15909779,bounceI:.24,exposure:.98,fog:14209475},noon:{sun:16775135,sunI:2.8,sky:14938610,ground:10126690,hemiI:1.75,fill:11128288,fillI:.62,bounce:16179126,bounceI:.28,exposure:1.02,fog:14279132},golden:{sun:16762744,sunI:2.55,sky:15916997,ground:10319185,hemiI:1.3,fill:11973829,fillI:.42,bounce:15115628,bounceI:.3,exposure:.98,fog:14665642},dusk:{sun:16751206,sunI:1.85,sky:12562109,ground:7625553,hemiI:.9,fill:8755385,fillI:.5,bounce:13074024,bounceI:.24,exposure:.9,fog:11902110},night:{sun:11125736,sunI:.92,sky:5270922,ground:3883336,hemiI:.46,fill:6719149,fillI:.38,bounce:7174799,bounceI:.13,exposure:.76,fog:4413291}},n=e[t]||e.dawn;this.sun.color.setHex(n.sun),this.sun.intensity=n.sunI,this.hemisphere.color.setHex(n.sky),this.hemisphere.groundColor.setHex(n.ground),this.hemisphere.intensity=n.hemiI,this.fill.color.setHex(n.fill),this.fill.intensity=n.fillI,this.bounce.color.setHex(n.bounce),this.bounce.intensity=n.bounceI,this.renderer.toneMappingExposure=n.exposure,this.scene.fog&&this.scene.fog.color.setHex(n.fog);for(const i of this.clouds)i.material.opacity=t==="night"?.15:t==="dusk"?.28:.3}buildClouds(){const t=tx(),e=nn(921);for(let n=0;n<11;n+=1){const i=7+e()*14,r=n/11*Math.PI*2+e()*.5,a=new Yn({map:t,color:16775404,transparent:!0,opacity:.3+e()*.22,depthWrite:!1,fog:!0}),o=new ci(a),c=6+e()*7;o.scale.set(c,c*(.34+e()*.18),1),o.position.set(Math.cos(r)*i,-8.4+e()*2.3,Math.sin(r)*i),o.userData={angle:r,radius:i,y:o.position.y,speed:.004+e()*.008,phase:e()*Math.PI*2},o.renderOrder=2,this.scene.add(o),this.clouds.push(o)}}buildBirds(){const t=new Ei({color:5661016,side:we,transparent:!0,opacity:.5,depthWrite:!1,fog:!1}),e=new ve;e.setAttribute("position",new he([0,0,0,-.52,.08,.12,0,0,.34],3)),e.computeVertexNormals();const n=nn(761);for(let i=0;i<7;i+=1){const r=new Jt,a=new X(e,t);a.scale.x=1;const o=new X(e,t);o.scale.x=-1,r.add(a,o);const c=11+n()*10;r.userData={radius:c,y:5.4+n()*4.2,angle:n()*Math.PI*2,speed:.055+n()*.06,flap:n()*Math.PI*2,flapSpeed:5.5+n()*3,left:a,right:o,bob:n()*Math.PI*2},r.scale.setScalar(.44+n()*.3),this.scene.add(r),this.birds.push(r)}}buildMotes(){const t=nn(7781),e=150,n=new Float32Array(e*3),i=[];for(let o=0;o<e;o+=1){const c=t()*Math.PI*2,l=1.6+t()*8.5,h=.4+t()*6.5;n[o*3]=Math.cos(c)*l,n[o*3+1]=h,n[o*3+2]=Math.sin(c)*l,i.push({angle:c,radius:l,y:h,speed:.008+t()*.02,phase:t()*Math.PI*2,drift:.15+t()*.4})}const r=new ve;r.setAttribute("position",new Ue(n,3));const a=new _l({size:.085,map:j_(),color:16770993,transparent:!0,opacity:.8,alphaTest:.03,depthWrite:!1,blending:Ge,sizeAttenuation:!0,fog:!1});this.motes=new ra(r,a),this.motes.renderOrder=8,this.scene.add(this.motes),this.moteSeeds=i}update(t,e){this.clock=e;for(const i of this.clouds){const r=i.userData,a=r.angle+e*r.speed;i.position.x=this.focus.x+Math.cos(a)*r.radius,i.position.z=this.focus.y+Math.sin(a)*r.radius,i.position.y=r.y+Math.sin(e*.1+r.phase)*.2}for(const i of this.birds){const r=i.userData;r.angle+=t*r.speed,r.flap+=t*r.flapSpeed;const a=this.focus.x+Math.cos(r.angle)*r.radius,o=this.focus.y+Math.sin(r.angle)*r.radius;i.position.set(a,r.y+Math.sin(e*.6+r.bob)*.22,o),i.rotation.y=-r.angle+Math.PI/2;const c=Math.sin(r.flap)*.5+.1;r.left.rotation.z=c,r.right.rotation.z=-c}const n=this.motes.geometry.attributes.position.array;for(let i=0;i<this.moteSeeds.length;i+=1){const r=this.moteSeeds[i],a=i*3,o=r.angle+e*r.speed;n[a]=this.focus.x+Math.cos(o)*r.radius+Math.sin(e*.2+r.phase)*r.drift,n[a+1]=r.y+Math.sin(e*.35+r.phase)*.3,n[a+2]=this.focus.y+Math.sin(o)*r.radius+Math.cos(e*.2+r.phase)*r.drift}this.motes.geometry.attributes.position.needsUpdate=!0}}class nx{constructor(){this.context=null,this.started=!1,this.muted=localStorage.getItem("openwork-muted")==="1",this.nextBird=5,this.master=null,this.ambient=null,this.reverb=null}async start(){if(this.started){await this.context?.resume();return}const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.context=new t,this.started=!0;const e=this.context,n=e.createDynamicsCompressor();n.threshold.value=-20,n.knee.value=20,n.ratio.value=5,n.attack.value=.01,n.release.value=.3,this.master=e.createGain(),this.master.gain.value=this.muted?0:.62,this.master.connect(n),n.connect(e.destination),this.reverb=e.createConvolver(),this.reverb.buffer=this.makeImpulse(3.2,2.8);const i=e.createGain();i.gain.value=.32,this.reverb.connect(i),i.connect(n),this.ambient=e.createGain(),this.ambient.gain.value=this.muted?0:1,this.ambient.connect(this.master);const r=e.createGain();r.gain.value=.25,this.ambient.connect(r),r.connect(this.reverb),this.buildPad(),this.buildWind(),await e.resume()}makeImpulse(t=3,e=2.5){const n=this.context,i=Math.floor(n.sampleRate*t),r=n.createBuffer(2,i,n.sampleRate);for(let a=0;a<2;a+=1){const o=r.getChannelData(a);for(let c=0;c<i;c+=1){const l=c/i,h=Math.random()*2-1,d=c<n.sampleRate*.08?.4:1;o[c]=h*Math.pow(1-l,e)*d}}return r}buildPad(){const t=this.context,e=t.createGain();e.gain.value=this.muted?0:.022;const n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=620,n.Q.value=.5,e.connect(n),n.connect(this.ambient);const i=[73.42,110,146.83,185,220,293.66],r=[.8,.55,.46,.28,.2,.11];this.padOscillators=[],i.forEach((c,l)=>{const h=t.createOscillator();h.type=l%2===0?"sine":"triangle",h.frequency.value=c,h.detune.value=(l-2.5)*4;const d=t.createGain();d.gain.value=r[l];const u=t.createOscillator();u.type="sine",u.frequency.value=.025+l*.007;const f=t.createGain();f.gain.value=c*.0035,u.connect(f),f.connect(h.frequency),u.start(),h.connect(d),d.connect(e),h.start(),this.padOscillators.push({oscillator:h,gain:d,lfo:u})});const a=t.createOscillator();a.type="sine",a.frequency.value=.04;const o=t.createGain();o.gain.value=160,a.connect(o),o.connect(n.frequency),a.start(),this.padBus=e}buildWind(){const t=this.context,e=t.sampleRate*4,n=t.createBuffer(1,e,t.sampleRate),i=n.getChannelData(0);let r=0;for(let d=0;d<e;d+=1){const u=Math.random()*2-1;r=r*.985+u*.015,i[d]=r*8}const a=t.createBufferSource();a.buffer=n,a.loop=!0;const o=t.createBiquadFilter();o.type="bandpass",o.frequency.value=430,o.Q.value=.65;const c=t.createGain();c.gain.value=this.muted?0:.026;const l=t.createOscillator();l.type="sine",l.frequency.value=.055;const h=t.createGain();h.gain.value=170,l.connect(h),h.connect(o.frequency),l.start(),a.connect(o),o.connect(c),c.connect(this.ambient),a.start(),this.windGain=c}setMuted(t){if(this.muted=t,localStorage.setItem("openwork-muted",t?"1":"0"),!this.context)return;const e=this.context.currentTime;this.master.gain.cancelScheduledValues(e),this.master.gain.linearRampToValueAtTime(t?0:.62,e+.3),this.ambient.gain.cancelScheduledValues(e),this.ambient.gain.linearRampToValueAtTime(t?0:1,e+.3)}note(t,e,n={}){if(!this.started||this.muted)return;const{type:i="sine",gain:r=.08,attack:a=.01,release:o=.4,delay:c=0,pan:l=0,send:h=.4,endFrequency:d=null}=n,u=this.context,f=u.currentTime+c,g=u.createOscillator();g.type=i,g.frequency.setValueAtTime(t,f),d!==null&&g.frequency.exponentialRampToValueAtTime(Math.max(20,d),f+e);const M=u.createGain();M.gain.setValueAtTime(1e-4,f),M.gain.exponentialRampToValueAtTime(r,f+a),M.gain.exponentialRampToValueAtTime(1e-4,f+e+o);const m=u.createStereoPanner();if(m.pan.value=l,g.connect(M),M.connect(m),m.connect(this.master),h>0){const p=u.createGain();p.gain.value=h,m.connect(p),p.connect(this.reverb)}g.start(f),g.stop(f+e+o+.05)}noise(t=.2,e={}){if(!this.started||this.muted)return;const{gain:n=.03,frequency:i=1200,q:r=.8,delay:a=0,type:o="bandpass"}=e,c=this.context,l=c.currentTime+a,h=Math.ceil(c.sampleRate*t),d=c.createBuffer(1,h,c.sampleRate),u=d.getChannelData(0);for(let m=0;m<h;m+=1)u[m]=Math.random()*2-1;const f=c.createBufferSource();f.buffer=d;const g=c.createBiquadFilter();g.type=o,g.frequency.value=i,g.Q.value=r;const M=c.createGain();M.gain.setValueAtTime(1e-4,l),M.gain.exponentialRampToValueAtTime(n,l+.012),M.gain.exponentialRampToValueAtTime(1e-4,l+t),f.connect(g),g.connect(M),M.connect(this.master),f.start(l)}select(){this.note(520,.08,{type:"sine",gain:.035,release:.12,send:.2})}place(t,e=1){const n=1+Math.min(e-1,2)*.08;if(t==="land"||t==="terrain")this.note(104*n,.18,{type:"sine",gain:.12,endFrequency:72,release:.28,send:.2}),this.noise(.22,{gain:.045,frequency:650,q:.7}),this.note(392,.22,{type:"triangle",gain:.018,delay:.02,release:.3,send:.5});else if(t==="water")this.note(520*n,.2,{type:"sine",gain:.06,endFrequency:880,release:.5,send:.8}),this.note(780*n,.3,{type:"sine",gain:.025,delay:.06,release:.55,send:.9}),this.noise(.28,{gain:.025,frequency:1700,q:1.4});else if(t==="grove"||t==="tree"){const i=293.66*n;[1,1.25,1.5,2].forEach((r,a)=>{this.note(i*r,.28,{type:a===0?"sine":"triangle",gain:.032,delay:a*.055,release:.6,pan:(a-1.5)*.16,send:.8})}),this.noise(.18,{gain:.022,frequency:2800,q:1.1,delay:.02})}else if(t==="crystal"||t==="magic"){const i=659.25*n;[1,1.5,2,2.5,3].forEach((r,a)=>{this.note(i*r,.34,{type:"sine",gain:.026-a*.002,delay:a*.075,release:.8,pan:(a-2)*.18,send:1})})}else if(t==="home"||t==="shop"){const i=220*n;[1,1.5,2].forEach((r,a)=>{this.note(i*r,.22,{type:"triangle",gain:.032,delay:a*.065,release:.55,send:.55})}),this.noise(.16,{gain:.02,frequency:900,q:.9})}else t==="folk"?(this.note(392*n,.1,{type:"sine",gain:.04,release:.22,send:.4}),this.note(523.25*n,.14,{type:"sine",gain:.03,delay:.08,release:.3,send:.5})):t==="path"?(this.note(174*n,.08,{type:"triangle",gain:.022,release:.18,send:.2}),this.noise(.1,{gain:.016,frequency:520,q:.7})):t==="prop"?(this.note(246.94*n,.14,{type:"sine",gain:.036,endFrequency:220,release:.24,send:.32}),this.noise(.12,{gain:.02,frequency:700,q:.8})):this.note(329.63*n,.16,{type:"sine",gain:.03,release:.3,send:.4})}denied(){!this.started||this.muted||(this.note(146.83,.1,{type:"triangle",gain:.045,endFrequency:120,release:.15,send:.1}),this.note(138.59,.12,{type:"triangle",gain:.035,delay:.07,endFrequency:110,release:.18,send:.1}))}expand(){!this.started||this.muted||([146.83,220,293.66,369.99,440,587.33].forEach((t,e)=>{this.note(t,.9,{type:e<2?"sine":"triangle",gain:.028,delay:e*.07,release:1.8,pan:(e-2.5)*.1,send:1})}),this.noise(.7,{gain:.022,frequency:900,q:.45}))}win(){if(!this.started||this.muted)return;[146.83,185,220,293.66,369.99,440,587.33,739.99].forEach((e,n)=>{this.note(e,1.7,{type:n%2===0?"sine":"triangle",gain:.038,delay:n*.11,release:3,pan:(n-3.5)*.1,send:1.1})}),this.noise(1.2,{gain:.032,frequency:1500,q:.4})}chime(){this.note(880,.2,{type:"sine",gain:.024,release:.5,send:.8}),this.note(1318.5,.24,{type:"sine",gain:.016,delay:.08,release:.6,send:.8})}update(t){if(!(!this.started||this.muted)&&(this.nextBird-=t,this.nextBird<=0)){this.nextBird=7+Math.random()*10;const e=Math.random()*1.6-.8,n=1600+Math.random()*900,i=2+Math.floor(Math.random()*3);for(let r=0;r<i;r+=1)this.note(n*(.9+Math.random()*.25),.07,{type:"sine",gain:.012,delay:r*.1,endFrequency:n*(1.15+Math.random()*.2),release:.12,pan:e,send:.7})}}}const Fe=document.getElementById("world"),ih=document.getElementById("loading"),sh=document.getElementById("startScreen"),Jo=document.getElementById("startBtn"),ta=document.getElementById("game"),hs=document.getElementById("winScreen"),od=document.getElementById("keepBuildingBtn"),ui=document.getElementById("helpBackdrop"),ld=document.getElementById("helpBtn"),cd=document.getElementById("helpClose"),to=document.getElementById("resetBtn"),hd=document.getElementById("helpSoundBtn"),Qo=document.getElementById("soundBtn"),Gr=document.getElementById("walkBtn"),ix=document.getElementById("walkUi"),rh=document.getElementById("walkStatus"),Ci=document.getElementById("joystick"),Sl=document.getElementById("joystickKnob"),dd=document.getElementById("studioBtn"),ds=document.getElementById("studioBackdrop"),ud=document.getElementById("studioClose"),yl=document.getElementById("islandNameInput"),fd=document.getElementById("islandNameSave"),ah=document.getElementById("islandList"),sx=document.getElementById("islandCount"),rx=document.getElementById("newIslandBtn"),ax=document.getElementById("bridgeBtn"),ox=document.getElementById("studioWalkBtn"),lx=document.getElementById("worldName"),cx=document.getElementById("app"),wl=[...document.querySelectorAll(".mood")],hx=document.getElementById("sparkValue"),oh=document.getElementById("goalFill"),lh=document.getElementById("goalPct"),jo=document.getElementById("goalLabel"),ch=document.getElementById("goalEyebrow"),dx=document.getElementById("worldViewNote"),ux=document.getElementById("worldSub"),ea=document.getElementById("sphereChip"),hh=document.getElementById("sphereMeta"),fx=document.getElementById("sphereAction"),Hr=document.getElementById("toolDock"),qs=document.getElementById("toolPages"),px=document.getElementById("toolPageName"),mx=document.getElementById("toolPageIndex"),pd=document.getElementById("hintPill"),gx=document.getElementById("hintText"),md=document.getElementById("orbitHint"),eo=document.getElementById("toasts"),_x=document.getElementById("floaters");let Js=[],On=0;const gd=E_(),xx=matchMedia("(pointer: coarse)").matches,cn=new M_({canvas:Fe,antialias:!0,alpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:!1});cn.setPixelRatio(Math.min(window.devicePixelRatio||1,2));cn.setSize(window.innerWidth,window.innerHeight);cn.outputColorSpace=He;cn.toneMapping=nl;cn.toneMappingExposure=.98;cn.shadowMap.enabled=!0;cn.shadowMap.type=Fs;cn.setClearColor(0,0);const _d=cn.getContext(),dh=_d.getExtension("WEBGL_debug_renderer_info"),xd=dh?String(_d.getParameter(dh.UNMASKED_RENDERER_WEBGL)):"",vd=/swiftshader|software|llvmpipe|mesa offscreen/i.test(xd);vd&&document.documentElement.classList.add("software-renderer");const Ze=new Zu;Ze.fog=new ml(14209475,25,90);const Te=new un(window.innerWidth<900?55:37,window.innerWidth/window.innerHeight,.1,620),Qs=new ex(Ze,cn),ee=new nx,St=new Q_(Ze),st={target:new I(0,0,0),targetGoal:new I(0,0,0),yaw:-.62,targetYaw:-.62,pitch:window.innerWidth<900?.9:.98,targetPitch:window.innerWidth<900?.9:.98,zoom:1,targetZoom:1,fit:16,autoOrbit:!gd,pointerId:null};let fi="land",an=!1,Ys=!1,uh=!1,tl=-1,fh="",no=!1,ph=0,oi=0,gs=!1,Re=!1,xe=!1,io=0;const Se={keys:new Set,joystick:{x:0,y:0},pointerId:null},Pt={pointers:new Map,drag:null,pinch:null,multiTouch:!1,hovered:null,isDragging:!1};function vx(){return window.innerWidth<900?55:37}function Md(){return xe?{min:.4,max:1.8}:{min:.66,max:1.8}}function js(){if(xe)return St.planet.getViewDistance();const s=St.radius,t=Math.max(Te.aspect,.35),e=Math.tan(Te.fov*Math.PI/360),n=10.6+s*3.5,r=(1.4+s*1.9)/(e*Math.min(t,2.05));return Math.max(n,r)}function _s(){if(xe)return;const s=St.getActiveCenter(),e=Te.aspect<.95?-.15:.28;st.targetGoal.set(s.x,e,s.z),an||st.target.copy(st.targetGoal),st.pitch=be(st.pitch,.62,1.22),st.targetPitch=be(st.targetPitch,.62,1.22),st.fit=js(),Qs.setFocus(s.x,s.z)}function Sd(){if(xe){st.targetGoal.copy(St.planet.getCameraTarget());return}_s()}function us(s=null){const t=s===null?!xe:!!s;if(t!==xe&&!(t&&!an))if(t&&Re&&Ms(!1),xe=t,ta.classList.toggle("is-world-view",xe),St.setWorldView(xe),Qs.setWorldView(xe),dx.setAttribute("aria-hidden",String(!xe)),kn(!0),ea.setAttribute("aria-pressed",String(xe)),fx.textContent=xe?"Back":"View",ea.setAttribute("aria-label",xe?"Return to the active isle":"View the worldsphere"),xe){const e=St.planet.getCameraTarget();st.targetGoal.copy(e),st.target.copy(e),st.fit=St.planet.getViewDistance(),st.targetPitch=1.04,st.targetYaw=-.62,st.targetZoom=1,ln("The worldsphere — every isle becomes part of it"),ee.chime()}else _s(),st.targetPitch=Te.aspect<.95?.9:.98,st.targetZoom=1,er(),ee.select()}function Mx(s){const t=s.sphere;!t||!hh||(hh.textContent=`${t.claimed.toLocaleString("en-US")} / ${t.target.toLocaleString("en-US")} hexes`,ea.title=`${t.percent<.01?t.percent.toFixed(3):t.percent.toFixed(2)}% of the worldsphere is claimed`)}function Sx(){st.target.copy(st.targetGoal),st.fit=js();const s=st.fit*st.zoom;Ze.fog&&(Ze.fog.near=s+6,Ze.fog.far=s+62);const t=Math.sin(st.pitch);Te.position.set(st.target.x+Math.sin(st.yaw)*t*s,st.target.y+Math.cos(st.pitch)*s,st.target.z+Math.cos(st.yaw)*t*s),Te.lookAt(st.target)}Sd();st.fit=js();Sx();St.particles.setViewport(window.innerHeight,Te.fov);function yx(){const s=St.getState();return`${s.hexes} hexes · ${s.homes||0} cottages · ${s.residents||0} neighbors`}function kn(s=!1){const t=St.getState(),e=`${t.islandId}|${t.sparksFloor}|${Math.round(t.bloomPct*1e3)}|${t.hexes}|${t.homes}|${t.residents}|${t.islandCount}|${t.mood}|${t.won}|${t.sphere?.claimed||0}|${xe}`;if(!s&&e===fh)return;if(fh=e,t.sparksFloor!==tl&&(hx.textContent=t.sparksFloor.toLocaleString("en-US"),tl=t.sparksFloor),xe&&t.sphere){const i=t.sphere.percent;ch.textContent="Worldsphere",jo.textContent="One island at a time",oh.style.width=`${Math.min(100,i)}%`,lh.textContent=`${i<1?i.toFixed(2):Math.round(i)}%`}else{const i=Math.min(100,Math.round(t.bloomPct*100));ch.textContent="World bloom",oh.style.width=`${Math.min(100,t.bloomPct*100)}%`,lh.textContent=`${i}%`,jo.textContent=t.won?"The world is awake":"Wake the Heartseed"}ux.textContent=yx(),lx.textContent=t.islandName||"Isle of First Light",Mx(t);for(const i of Js){const r=cs[i.dataset.tool];r&&i.classList.toggle("unaffordable",t.sparksFloor<r.cost)}const n=document.querySelector(".sparks");n&&(n.title=`Sparks — earning ${t.sparkRate.toFixed(2)} per second from living things`),gs&&xs()}function wx(){qs.replaceChildren(),Fn.forEach((s,t)=>{const e=document.createElement("button");e.className="tool-page",e.dataset.page=String(t),e.setAttribute("role","tab"),e.setAttribute("aria-selected",String(t===On)),e.setAttribute("aria-controls","toolDock"),e.setAttribute("aria-label",`${s.label} — ${s.note}`),e.innerHTML=`<span class="tool-page-icon">${ad[s.icon]}</span><span>${s.label}</span>`,qs.appendChild(e)})}function fs(s,t=!1){On=be(s,0,Fn.length-1);const e=Fn[On];Hr.replaceChildren(),e.tools.forEach((n,i)=>{const r=cs[n];if(!r)return;const a=document.createElement("button"),o=n===fi;a.className=`tool${o?" active":""}`,a.dataset.tool=n,a.setAttribute("aria-pressed",String(o)),a.setAttribute("aria-label",`${r.label} — ${r.hint}, costs ${r.cost} sparks`),a.innerHTML=`
      <span class="key">${i+1}</span>
      <span class="tool-icon">${ad[r.icon]}</span>
      <span class="tool-name">${r.label}</span>
      <span class="tool-cost"><b>${r.cost}</b><i></i></span>
    `,Hr.appendChild(a)}),Js=[...Hr.querySelectorAll(".tool")];for(const n of qs.querySelectorAll(".tool-page")){const i=Number(n.dataset.page)===On;n.classList.toggle("active",i),n.setAttribute("aria-selected",String(i))}px.textContent=e.label,mx.textContent=`${String(On+1).padStart(2,"0")} / ${Fn.length}`,t&&!e.tools.includes(fi)&&tr(e.tools[0],!0),kn(!0)}function tr(s,t=!1){if(!cs[s])return;const n=Fn.findIndex(i=>i.tools.includes(s));n>=0&&n!==On&&fs(n,!1),fi=s;for(const i of Js){const r=i.dataset.tool===s;i.classList.toggle("active",r),i.setAttribute("aria-pressed",String(r))}!t&&an&&ee.select(),Pt.hovered&&St.highlight(Pt.hovered)}function fn(s,t=""){if(!s)return;const e=document.createElement("div");e.className=`toast ${t}`.trim(),e.innerHTML='<span class="toast-mark"></span>';const n=document.createElement("span");for(n.textContent=s,e.appendChild(n),eo.appendChild(e);eo.children.length>3;)eo.firstElementChild.remove();window.setTimeout(()=>{e.classList.add("is-leaving"),window.setTimeout(()=>e.remove(),380)},3100)}function bx(s){const t=s.clone();return t.y+=.6,t.project(Te),{x:(t.x*.5+.5)*window.innerWidth,y:(-t.y*.5+.5)*window.innerHeight}}function Ex(s,t,e=""){const n=bx(s);if(n.x<10||n.x>window.innerWidth-10)return;const i=document.createElement("div");i.className=`floater ${e}`.trim(),i.textContent=t,i.style.left=`${be(n.x,20,window.innerWidth-20)}px`,i.style.top=`${be(n.y,60,window.innerHeight-150)}px`,_x.appendChild(i),window.setTimeout(()=>i.remove(),1600)}function ln(s){gx.textContent=s,pd.classList.remove("is-hidden")}function er(){const s=St.stats;St.won?ln("The isle is awake — settle another, or walk among your neighbors"):s.shops>0?ln("The market is open — walk the isle to meet your neighbors"):s.homes>0?ln("Cottages bring neighbors — try opening a market"):s.prisms>0?ln("Every living thing adds bloom"):s.groves>0?ln("Groves gather sparks while you dream"):s.actions>0?ln("Try a path, a cottage, or a pool"):ln("Tap a hex to shape the land")}function Tx(s){ee.place(s.family||s.toolName,Math.max(1,s.tile.decorLevel)),Ex(s.position,`+${s.bloomGain} bloom`,"");const t=St.stats;oi<1&&s.toolName==="land"?(oi=1,window.setTimeout(()=>ln("Now try a path or a grove"),500)):oi<2&&s.toolName==="water"?(oi=2,window.setTimeout(()=>ln("Groves gather sparks while you dream"),500)):oi<3&&s.toolName==="grove"?(oi=3,window.setTimeout(()=>ln("Raise a cottage and neighbors will arrive"),500)):oi<4&&(s.toolName==="home"||s.toolName==="shop"||s.toolName==="villager")&&(oi=4,window.setTimeout(()=>er(),500)),t.actions===1&&window.setTimeout(()=>fn("Every choice deepens the bloom"),600)}St.setEvents({state:()=>kn(),action:s=>{kn(!0),Tx(s)},denied:s=>{const t=Js.find(n=>n.dataset.tool===fi);t&&(t.classList.remove("shake"),t.offsetWidth,t.classList.add("shake"),window.setTimeout(()=>t.classList.remove("shake"),450));const e=Math.max(0,Math.ceil(s.cost-St.sparks));fn(`Need ${e} more spark${e===1?"":"s"} — living tiles give more`,"gold"),ee.denied()},toast:(s,t)=>fn(s,t),expansion:s=>{fn(`${s.message}  ·  +${s.sparks} sparks`,"gold"),ee.expand(),window.setTimeout(()=>fn("The isle grew. New hexes are yours."),700),ln("A new ring of the isle rises — keep shaping")},focus:()=>{xe?us(!1):_s(),kn(!0)},newIsland:s=>{ee.expand(),fn(`${s.name} rises from the clouds`,"gold"),ln("A new isle waits — shape it, then bridge the two"),gs&&xs()},bridge:s=>{ee.expand(),fn(`A bridge links ${s.from.name} and ${s.to.name}`,"gold"),ln("The isles are connected")},win:()=>{Ys||(ee.win(),window.setTimeout(Ax,1750))}});function Ax(){if(Ys||!an)return;Ys=!0;const s=St.getState(),t=document.getElementById("winStats");t.innerHTML="";const e=[[s.hexes,"hexes"],[s.groves,"groves"],[s.prisms,"prisms"],[s.actions,"choices"]];for(const[n,i]of e){const r=document.createElement("div");r.className="win-stat";const a=document.createElement("b");a.textContent=n;const o=document.createElement("span");o.textContent=i,r.append(a,o),t.appendChild(r)}hs.classList.remove("hidden"),hs.setAttribute("aria-hidden","false"),od.focus({preventScroll:!0})}function bl(){hs.classList.add("hidden"),hs.setAttribute("aria-hidden","true"),Fe.focus({preventScroll:!0}),fn("The isle is yours to keep shaping"),ee.chime()}function yd(){ui.classList.remove("hidden"),ui.setAttribute("aria-hidden","false"),cd.focus({preventScroll:!0})}function la(){ui.classList.add("hidden"),ui.setAttribute("aria-hidden","true"),ld.focus({preventScroll:!0})}function ca(s,t=!1){const n=["dawn","noon","golden","dusk","night"].includes(s)?s:"dawn";cx.dataset.mood=n,Qs.setMood(n);for(const i of wl)i.classList.toggle("active",i.dataset.mood===n);t&&St.setMood(n)}function xs(){const s=St.getState();if(gs){yl.value=s.islandName||"",sx.textContent=`${s.islandCount} isle${s.islandCount===1?"":"s"}`,ah.replaceChildren();for(const t of s.islands){const e=document.createElement("div");e.className=`island-row${t.active?" active":""}`;const n=document.createElement("div");n.className="island-row-copy";const i=document.createElement("b");i.textContent=t.name;const r=document.createElement("span"),a=t.connections.length;r.textContent=`${t.hexes} hexes · ${t.residents} neighbors · ${a} bridge${a===1?"":"s"}`,n.append(i,r);const o=document.createElement("button");o.className="island-visit",o.textContent=t.active?"Here":"Visit",o.disabled=t.active,o.setAttribute("aria-label",t.active?`${t.name}, current isle`:`Visit ${t.name}`),o.addEventListener("click",()=>{St.setActive(t.id),ee.select(),vs()}),e.append(n,o),ah.appendChild(e)}for(const t of wl)t.classList.toggle("active",t.dataset.mood===s.mood)}}function Rx(){Re&&Ms(!1),xe&&us(!1),ui.classList.contains("hidden")||la(),hs.classList.contains("hidden")||bl(),gs=!0,xs(),ds.classList.remove("hidden"),ds.setAttribute("aria-hidden","false"),ud.focus({preventScroll:!0})}function vs(){gs=!1,ds.classList.add("hidden"),ds.setAttribute("aria-hidden","true"),dd.focus({preventScroll:!0})}function wd(s){rh.textContent!==s&&(rh.textContent=s)}function Cx(){Gr.setAttribute("aria-pressed",String(Re)),Gr.setAttribute("aria-label",Re?"Return to building":"Walk the isle"),Gr.querySelector(".walk-label").textContent=Re?"Build":"Walk",ta.classList.toggle("is-walking",Re),ix.setAttribute("aria-hidden",String(!Re))}function Ms(s=null){const t=s===null?!Re:!!s;if(t!==Re){if(t){if(!an)return;if(!St.beginWalk()){fn("There is no land here to walk on","gold");return}Re=!0,Pt.drag=null,Pt.isDragging=!1,Pt.hovered=null,St.highlight(null),Fe.classList.remove("is-dragging"),st.targetPitch=.96,st.pitch=.96,Se.keys.clear(),Se.joystick.x=0,Se.joystick.y=0,Sl.style.transform="translate(0px, 0px)",wd(St.getWalkStatus()),ee.chime()}else Re=!1,St.endWalk(),_s(),st.targetZoom=1,st.targetPitch=Te.aspect<.95?.9:.98,ee.select();Cx(),t||er()}}function bd(){Se.pointerId=null,Se.joystick.x=0,Se.joystick.y=0,Sl.style.transform="translate(0px, 0px)"}function Ed(s){const t=Ci.getBoundingClientRect(),e=t.left+t.width/2,n=t.top+t.height/2,i=Math.min(t.width,t.height)*.31;let r=s.clientX-e,a=s.clientY-n;const o=Math.hypot(r,a);o>i&&(r=r/o*i,a=a/o*i),Se.joystick.x=r/i,Se.joystick.y=a/i,Sl.style.transform=`translate(${r}px, ${a}px)`}function Td(){Qo.classList.toggle("muted",ee.muted),Qo.setAttribute("aria-label",ee.muted?"Turn sound on":"Turn sound off"),hd.textContent=`Sound: ${ee.muted?"off":"on"}`}async function El(){ee.started||await ee.start(),ee.setMuted(!ee.muted),Td(),ee.muted||ee.chime()}async function Ad(){an||(an=!0,await ee.start(),ee.chime(),St.setActiveState(!0),ca(St.mood),tr(fi,!0),sh.classList.add("hidden"),sh.setAttribute("aria-hidden","true"),ta.classList.add("is-playing"),ta.setAttribute("aria-hidden","false"),st.autoOrbit=!1,st.zoom>1.25&&(st.targetZoom=1),kn(!0),er(),window.setTimeout(()=>{pd.classList.remove("is-hidden")},600),window.setTimeout(()=>md.classList.add("is-hidden"),7e3),St.won&&(Ys=!0),St.stats.actions>0&&window.setTimeout(()=>fn("Your world was remembered"),900))}function Px(s,t){if(!an||Re||xe)return;const e=St.pick(s,t,Te,Fe);if(!e){St.highlight(null);return}St.highlight(e),St.place(fi,e)}function Ix(s){if(s.pointerType==="mouse"&&s.button!==0||!an)return;const t={x:s.clientX,y:s.clientY,startX:s.clientX,startY:s.clientY};Pt.pointers.set(s.pointerId,t);try{Fe.setPointerCapture(s.pointerId)}catch{}if(Pt.pointers.size===1)Pt.drag={id:s.pointerId,startX:s.clientX,startY:s.clientY,lastX:s.clientX,lastY:s.clientY,moved:0,time:performance.now()},Pt.multiTouch=!1,Pt.isDragging=!1,Fe.classList.remove("is-dragging");else if(Pt.pointers.size===2){Pt.multiTouch=!0,Pt.drag=null,Pt.isDragging=!1;const[e,n]=[...Pt.pointers.values()];Pt.pinch={distance:Math.hypot(e.x-n.x,e.y-n.y),startZoom:st.targetZoom},St.highlight(null)}}function Lx(s){if(!an)return;const t=Pt.pointers.get(s.pointerId);if(t&&(t.x=s.clientX,t.y=s.clientY),Pt.pointers.size>=2){const[e,n]=[...Pt.pointers.values()],i=Math.hypot(e.x-n.x,e.y-n.y);if(Pt.pinch&&Pt.pinch.distance>0){const r=Pt.pinch.distance/Math.max(1,i),a=Md();st.targetZoom=be(Pt.pinch.startZoom*r,a.min,a.max)}return}if(Pt.drag&&Pt.drag.id===s.pointerId){const e=Pt.drag,n=s.clientX-e.lastX,i=s.clientY-e.lastY;e.lastX=s.clientX,e.lastY=s.clientY,e.moved+=Math.hypot(n,i),e.moved>7&&(Pt.isDragging=!0,Fe.classList.add("is-dragging")),st.targetYaw-=n*.0062,st.targetPitch=be(st.targetPitch+i*.0042,.65,1.2),Pt.isDragging&&St.highlight(null);return}if(Re||xe){Fe.style.cursor=Pt.isDragging?"grabbing":"grab";return}if(s.pointerType==="mouse"){const e=St.pick(s.clientX,s.clientY,Te,Fe);Pt.hovered=e,St.highlight(e),Fe.style.cursor=e?"pointer":"grab"}}function Dx(s){if(!an){Pt.pointers.delete(s.pointerId);return}const t=Pt.drag;if(Pt.pointers.delete(s.pointerId),t&&t.id===s.pointerId&&t.moved<8&&performance.now()-t.time<700&&!Pt.multiTouch&&!Re&&!xe&&Pt.pointers.size===0&&Px(s.clientX,s.clientY),Pt.pointers.size===0)Pt.drag=null,Pt.pinch=null,Pt.multiTouch=!1,Pt.isDragging=!1,Fe.classList.remove("is-dragging");else if(Pt.pointers.size===1){const[n]=[...Pt.pointers.values()];Pt.drag={id:[...Pt.pointers.keys()][0],startX:n.x,startY:n.y,lastX:n.x,lastY:n.y,moved:0,time:performance.now()},Pt.multiTouch=!0,Pt.pinch=null}}function Ux(s){Pt.pointers.delete(s.pointerId),Pt.pointers.size===0&&(Pt.drag=null,Pt.pinch=null,Pt.multiTouch=!1,Pt.isDragging=!1,Fe.classList.remove("is-dragging"))}Fe.addEventListener("pointerdown",Ix);Fe.addEventListener("pointermove",Lx);Fe.addEventListener("pointerup",Dx);Fe.addEventListener("pointercancel",Ux);Fe.addEventListener("pointerleave",()=>{Pt.pointers.size===0&&(Pt.hovered=null,St.highlight(null),Pt.isDragging||(Fe.style.cursor="grab"))});Fe.addEventListener("wheel",s=>{if(!an)return;s.preventDefault();const t=Md();st.targetZoom=be(st.targetZoom*(1+s.deltaY*.001),t.min,t.max)},{passive:!1});Hr.addEventListener("click",s=>{const t=s.target.closest(".tool");t&&tr(t.dataset.tool)});qs.addEventListener("click",s=>{const t=s.target.closest(".tool-page");t&&(fs(Number(t.dataset.page),!0),ee.select())});qs.addEventListener("wheel",s=>{Math.abs(s.deltaY)<Math.abs(s.deltaX)||(s.preventDefault(),fs(On+(s.deltaY>0?1:-1),!0),ee.select())},{passive:!1});Jo.addEventListener("click",Ad);od.addEventListener("click",bl);ld.addEventListener("click",yd);cd.addEventListener("click",la);ui.addEventListener("pointerdown",s=>{s.target===ui&&la()});Qo.addEventListener("click",El);hd.addEventListener("click",El);dd.addEventListener("click",Rx);ud.addEventListener("click",vs);ds.addEventListener("pointerdown",s=>{s.target===ds&&vs()});rx.addEventListener("click",()=>{const s=St.newIsland();vs(),s&&ee.chime()});ax.addEventListener("click",()=>{St.connectNearest()&&window.setTimeout(()=>{st.targetZoom=1.48,fn("Pinch or scroll out to see the bridge")},500),xs()});fd.addEventListener("click",()=>{St.renameActiveIsland(yl.value)&&(fn("The isle has a new name","gold"),kn(!0),xs(),ee.select())});yl.addEventListener("keydown",s=>{s.key==="Enter"&&(s.preventDefault(),fd.click())});for(const s of wl)s.addEventListener("click",()=>{ca(s.dataset.mood,!0),ee.select(),xs()});ox.addEventListener("click",()=>{vs(),Ms(!0)});Gr.addEventListener("click",()=>Ms());Ci.addEventListener("pointerdown",s=>{if(Re){s.preventDefault(),s.stopPropagation(),Se.pointerId=s.pointerId;try{Ci.setPointerCapture(s.pointerId)}catch{}Ed(s)}});Ci.addEventListener("pointermove",s=>{s.pointerId===Se.pointerId&&(s.preventDefault(),Ed(s))});const Rd=s=>{s.pointerId===Se.pointerId&&bd()};Ci.addEventListener("pointerup",Rd);Ci.addEventListener("pointercancel",Rd);Ci.addEventListener("lostpointercapture",s=>{s.pointerId===Se.pointerId&&bd()});to.addEventListener("click",()=>{if(!no){no=!0,to.textContent="Tap again to begin anew",window.clearTimeout(ph),ph=window.setTimeout(()=>{no=!1,to.textContent="Begin a new world"},3500);return}St.reset(),window.location.reload()});window.addEventListener("keydown",s=>{if(s.key==="Escape"){gs?vs():xe?us(!1):Re?Ms(!1):ui.classList.contains("hidden")?hs.classList.contains("hidden")||bl():la();return}if(!an)return;const t=["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright"];if(Re){const e=s.key.toLowerCase();t.includes(e)&&(s.preventDefault(),Se.keys.add(e));return}if(!(s.target instanceof HTMLInputElement||s.target instanceof HTMLTextAreaElement))if(s.key>="1"&&s.key<="8"){const n=Fn[On].tools[Number(s.key)-1];if(!n)return;tr(n);const i=Js.find(r=>r.dataset.tool===n);i&&(i.classList.remove("keyboard-flash"),i.offsetWidth,i.classList.add("keyboard-flash"))}else s.key==="q"||s.key==="Q"?(fs((On+Fn.length-1)%Fn.length,!0),ee.select()):s.key==="e"||s.key==="E"?(fs((On+1)%Fn.length,!0),ee.select()):s.key==="v"||s.key==="V"?us():s.key==="r"||s.key==="R"?(xe?(st.targetYaw=-.62,st.targetPitch=1.04):(st.targetYaw=-.62,st.targetPitch=window.innerWidth<900?.9:.98),st.targetZoom=1,fn("The view drifts home")):s.key==="h"||s.key==="H"?yd():(s.key==="m"||s.key==="M")&&El()});window.addEventListener("keyup",s=>{Se.keys.delete(s.key.toLowerCase())});window.addEventListener("resize",()=>{const s=window.innerWidth,t=window.innerHeight;Te.aspect=s/t,Te.fov=vx(),Te.updateProjectionMatrix(),cn.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),cn.setSize(s,t),St.particles.setViewport(t,Te.fov),St.planet.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Sd(),st.fit=js()});document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&St.save()});wx();ea.addEventListener("click",()=>us());const Nx=Fn.findIndex(s=>s.tools.includes(fi));fs(Math.max(0,Nx),!1);ca(St.mood);_s();Td();kn(!0);er();(St.stats.actions>0||St.bloom>0||St.radius>2)&&(Jo.querySelector("span").textContent="Return to your isle",Jo.setAttribute("aria-label","Start game"));St.won&&(Ys=!0,jo.textContent="The world is awake");xx&&(md.style.display="none");let so=0,mh=!1,gh=performance.now();function Cd(s){requestAnimationFrame(Cd);const t=Math.min(Math.max(0,(s-gh)/1e3),.05);if(gh=s,so+=t,st.autoOrbit&&!an&&!gd&&!Re&&(st.targetYaw+=t*.035),st.yaw=is(st.yaw,st.targetYaw,7.5,t),st.pitch=is(st.pitch,st.targetPitch,7.5,t),st.zoom=is(st.zoom,st.targetZoom,8,t),st.fit=is(st.fit,js(),3.2,t),Re||st.target.lerp(st.targetGoal,1-Math.exp(-t*4.2)),Re){let e=0,n=0;(Se.keys.has("w")||Se.keys.has("arrowup"))&&(e+=1),(Se.keys.has("s")||Se.keys.has("arrowdown"))&&(e-=1),(Se.keys.has("d")||Se.keys.has("arrowright"))&&(n+=1),(Se.keys.has("a")||Se.keys.has("arrowleft"))&&(n-=1),e-=Se.joystick.y,n+=Se.joystick.x;const i=Math.hypot(e,n);if(i>1&&(e/=i,n/=i),Math.abs(e)>.02||Math.abs(n)>.02){const r=Math.sin(st.yaw),a=Math.cos(st.yaw);St.moveExplorer(-r*e+a*n,-a*e-r*n,t)}else St.moveExplorer(0,0,t)}if(St.update(t,so),Qs.update(t,so),ee.update(t),Re){const e=St.getExplorerWorldPosition();st.target.set(e.x,e.y+.56,e.z);const n=Te.aspect<.95?5.5:6.2,i=Math.sin(st.pitch);Te.position.set(st.target.x+Math.sin(st.yaw)*i*n,st.target.y+Math.cos(st.pitch)*n,st.target.z+Math.cos(st.yaw)*i*n),Te.lookAt(st.target),Ze.fog&&(Ze.fog.near=18,Ze.fog.far=76),io+=t,io>.28&&(io=0,wd(St.getWalkStatus()))}else{const e=st.fit*st.zoom;Ze.fog&&(xe?(Ze.fog.near=e*.82,Ze.fog.far=e+St.planet.radius*2.4):(Ze.fog.near=e+6,Ze.fog.far=e+62));const n=Math.sin(st.pitch);Te.position.set(st.target.x+Math.sin(st.yaw)*n*e,st.target.y+Math.cos(st.pitch)*e,st.target.z+Math.cos(st.yaw)*n*e),Te.lookAt(st.target)}an&&(kn(),Math.floor(St.sparks)!==tl&&kn(!0)),cn.render(Ze,Te),mh||(mh=!0,window.setTimeout(()=>{uh||(uh=!0,ih.classList.add("hidden"),window.setTimeout(()=>ih.remove(),1e3))},280))}requestAnimationFrame(Cd);window.addEventListener("beforeunload",()=>St.save());const _h=document.querySelector(".sparks");_h&&_h.setAttribute("role","status");window.__OPENWORK__={world:St,environment:Qs,camera:Te,cameraState:st,scene:Ze,renderer:cn,rendererName:xd,softwareRenderer:vd,enterWorld:Ad,selectTool:tr,state:()=>St.getState(),placeAt:(s,t,e=fi)=>St.place(e,St.tiles.get(tn(s,t))),newIsland:s=>St.newIsland({name:s}),connect:()=>St.connectNearest(),walk:(s=!0)=>Ms(s),mood:s=>ca(s,!0),sphere:(s=!0)=>us(s),planet:St.planet,resetCamera:()=>{st.targetYaw=-.62,st.targetPitch=window.innerWidth<900?.9:.98,st.targetZoom=1,_s()}};
