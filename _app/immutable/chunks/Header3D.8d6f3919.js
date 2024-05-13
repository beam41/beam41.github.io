import{S as V,i as q,s as j,k,a as W,l as C,m as I,h as l,c as K,n as P,b as x,I as y,T as J,o as d,w as D}from"./index.5bf6425e.js";import{p as Q,e as Z,c as L}from"./tween.d4a2008c.js";var $="attribute vec2 position;void main(){gl_Position=vec4(position,0,1);}",ee=`#ifndef GL_FRAGMENT_PRECISION_HIGH
precision mediump float;
#else
precision highp float;
#endif
uniform vec2 resolution,rotateCamera;uniform float mouseRotateStrength,rotateYValue;uniform vec2 nameTextureSize;uniform sampler2D nameTexture;
#define EPS (0.1)
#define MAX_DIST (1000.0)
#define FOG_START (500.0)
#ifdef MOBILE
#define AA (1)
#define MAX_STEPS (128)
#else
#define AA (2)
#define MAX_STEPS (256)
#endif
float v(float v){return floor(v+.5);}vec3 v(vec3 m){return vec3(v(m.x),v(m.y),v(m.z));}float v(float m,float y,float v){return clamp((m-y)/(v-y),0.,1.);}float v(vec2 m,vec2 y){vec2 v=abs(m)-y;return length(max(v,0.))+min(max(v.x,v.y),0.);}float v(vec3 m,vec3 y){vec3 v=abs(m)-y;return length(max(v,0.))+min(max(v.x,max(v.y,v.z)),0.);}float x(vec3 v){vec3 m=abs(v)-vec3(35,12,1.5)+1.;return length(max(m,0.))+min(max(m.x,max(m.y,m.z)),0.)-1.;}mat3 n(float v){float m=cos(v),y=sin(v);return mat3(vec3(1,0,0),vec3(0,m,-y),vec3(0,y,m));}mat3 s(float v){float m=cos(v),y=sin(v);return mat3(vec3(m,0,y),vec3(0,1,0),vec3(-y,0,m));}float n(float v,float m){float y=clamp(.5+.5*(m-v)/.8,0.,1.);return mix(m,v,y)-.8*y*(1.-y);}float s(float v,float m){float y=clamp(.5-.5*(m-v)/.8,0.,1.);return mix(m,v,y)+.8*y*(1.-y);}float x(vec3 m,float v){vec2 f=vec2(v,abs(m.z)-2.5);return min(max(f.x,f.y),0.)+length(max(f,0.));}float f(vec3 m){const vec3 y=vec3(300);m*=n(-rotateCamera.y*mouseRotateStrength);m*=s(-rotateCamera.x*mouseRotateStrength+rotateYValue);m-=y*v(m/y);float f=v(m,vec3(35,12,2.5)+1.);if(f>1.)return f;float A=x(m,-texture2D(nameTexture,m.xy/vec2(nameTextureSize.x/nameTextureSize.y,-1)/5./2.+.5).x+.5),r=x(m),z=length(m)-(length(rotateCamera)+abs(rotateYValue))*80.,T=s(r,z),M=n(A,T);return M-.2;}vec3 m(vec3 m){const vec2 y=vec2(EPS,0);
#ifndef MOBILE
vec3 M=vec3(f(m+y.xyy),f(m+y.yxy),f(m+y.yyx));
#else
float A=f(m);
#endif
vec3 r=vec3(f(m-y.xyy),f(m-y.yxy),f(m-y.yyx));return v(A-r);}void main(){vec4 y=vec4(0);
#if AA>1
for(int r=0;r<AA;r++)for(int A=0;A<AA;A++){vec2 M=vec2(float(r),float(A))/float(AA)-.5,T=(gl_FragCoord.xy+M)*2.;
#else
vec2 n=gl_FragCoord.xy*2.;
#endif
n=(n-resolution.xy)/min(resolution.x,resolution.y);vec3 x=vec3(0,0,-100),i=x,a=v(vec3(n,2));float l=EPS;for(int u=0;u<MAX_STEPS;u++){l=f(x);x+=a*l;if(l<EPS||x.z>MAX_DIST)break;}if(l<EPS){vec3 d=(m(x)+1.)/3.;float z=v(distance(i,x),FOG_START,MAX_DIST);y+=vec4(vec3(d.x+d.y),1)*(1.-z);}
#if AA>1
}y/=float(AA*AA);
#endif
gl_FragColor=vec4(1)*(1.-y.w)+y;}`;const te=""+new URL("../assets/name.4fd88018.png",import.meta.url).href;function M(n,a,i,r=!1){const t=n.createShader(i);if(!t)throw console.error("Cannot create shader",a),new Error("Cannot create shader");if(n.shaderSource(t,(r?`#define MOBILE
`:"")+a),n.compileShader(t),!n.getShaderParameter(t,n.COMPILE_STATUS))throw console.error("Shader compile failed",n.getShaderInfoLog(t)),new Error("Shader compile failed");return t}function ne(n,a,i){const r=n.getAttribLocation(a,i);if(r===-1)throw console.error("Cannot find attribute",i),new Error("Cannot find attribute");return r}function f(n,a,i){const r=n.getUniformLocation(a,i);if(r===null)throw console.error("Cannot find uniform",i),new Error("Cannot find uniform");return r}function ae(n,a){let i=0;return(...t)=>{clearTimeout(i),i=setTimeout(()=>n(...t),a)}}function re(){let n=!1;return function(a){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(a.substr(0,4)))&&(n=!0)}(navigator.userAgent||navigator.vendor||window.opera),n}function oe(n){let a,i,r;return{c(){a=k("div"),i=W(),r=k("canvas"),this.h()},l(t){a=C(t,"DIV",{class:!0}),I(a).forEach(l),i=K(t),r=C(t,"CANVAS",{class:!0}),I(r).forEach(l),this.h()},h(){P(a,"class","measureScreen svelte-vn3atx"),P(r,"class","logo svelte-vn3atx")},m(t,c){x(t,a,c),n[2](a),x(t,i,c),x(t,r,c),n[3](r)},p:y,i:y,o:y,d(t){t&&l(a),n[2](null),t&&l(i),t&&l(r),n[3](null)}}}const ie=.5;function se(n,a,i){const r=J();let t,c,A=!1,u;d(()=>{let o=new IntersectionObserver(e=>{A=e[0].isIntersecting});return o.observe(t),()=>{o.disconnect()}});let E=0,b=0;d(()=>{let o;try{const e=t.getContext("webgl",{alpha:!1,antialias:!1,depth:!1,stencil:!1,preserveDrawingBuffer:!1,failIfMajorPerformanceCaveat:!0});if(!e){console.error("webgl not supported"),r("glFailed");return}const v=M(e,$,e.VERTEX_SHADER),p=M(e,ee,e.FRAGMENT_SHADER,re()),s=e.createProgram();if(!s){console.error("Cannot create webgl program"),r("glFailed");return}e.attachShader(s,v),e.attachShader(s,p),e.linkProgram(s),e.useProgram(s);const N=new Float32Array([-1,1,-1,-1,1,1,1,-1]),w=e.createBuffer();if(!w){console.error("Cannot create buffer"),r("glFailed");return}e.bindBuffer(e.ARRAY_BUFFER,w),e.bufferData(e.ARRAY_BUFFER,N,e.STATIC_DRAW);const S=ne(e,s,"position");e.enableVertexAttribArray(S),e.vertexAttribPointer(S,2,e.FLOAT,!1,2*4,0);const g=e.createTexture();if(!g){console.error("Cannot create texture"),r("glFailed");return}e.bindTexture(e.TEXTURE_2D,g),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,null);const U=f(e,s,"nameTextureSize"),m=new Image;m.onload=function(){e.bindTexture(e.TEXTURE_2D,g),e.pixelStorei(e.UNPACK_ALIGNMENT,1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.NONE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,m),e.uniform2f(U,m.width,m.height)},m.src=te;const X=f(e,s,"resolution"),G=f(e,s,"mouseRotateStrength");e.uniform1f(G,ie);const O=f(e,s,"rotateCamera"),B=f(e,s,"rotateYValue");u=()=>{e.viewport(0,0,t.width,t.height),e.uniform2f(X,t.width,t.height)};let h=!0;const R=H=>{if(A&&h){const Y=Q(-.5,.5,0,4e4,0,H,Z);e.uniform1f(B,Y),e.uniform2f(O,E,b),e.drawArrays(e.TRIANGLE_STRIP,0,4)}h=!h,o=requestAnimationFrame(R)};o=requestAnimationFrame(R)}catch{r("glFailed")}return()=>{cancelAnimationFrame(o)}});const T=o=>{if(o.pointerType!=="mouse")return;const e=document.body.clientWidth/2,v=window.innerHeight/2,p=o.pageX,s=o.pageY;E=L(-1,1,(e-p)/e),b=L(-1,1,(v-s)/v)};d(()=>(addEventListener("pointermove",T,!0),()=>{removeEventListener("pointermove",T,!0)}));const _=()=>{let o=window.devicePixelRatio;i(0,t.width=c.clientWidth*o,t),i(0,t.height=c.clientHeight*o,t),u==null||u()};d(()=>{_();const o=ae(_,300);return addEventListener("resize",o,!0),()=>{removeEventListener("resize",o,!0)}});function z(o){D[o?"unshift":"push"](()=>{c=o,i(1,c)})}function F(o){D[o?"unshift":"push"](()=>{t=o,i(0,t)})}return[t,c,z,F]}class le extends V{constructor(a){super(),q(this,a,se,oe,j,{})}}export{le as default};
