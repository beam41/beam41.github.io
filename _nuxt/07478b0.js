(window.webpackJsonp=window.webpackJsonp||[]).push([[5,4],{206:function(t,e){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},t.exports.default=t.exports,t.exports.__esModule=!0},207:function(t,e,r){var n=r(219);t.exports=function(source,t){if(null==source)return{};var e,i,r=n(source,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(source);for(i=0;i<o.length;i++)e=o[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(source,e)&&(r[e]=source[e])}return r},t.exports.default=t.exports,t.exports.__esModule=!0},209:function(t,e,r){var content=r(223);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(116).default)("26b4792f",content,!0,{sourceMap:!1})},210:function(t,e,r){"use strict";function n(a,b,t){return a+(b-a)*c(0,1,t)}function o(a,b,t){return(c(a,b,t)-a)/(b-a)}function c(a,b,t){return Math.min(Math.max(t,a),b)}r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return o}))},212:function(t,e,r){"use strict";var n=r(10),o=r(5),c=r(83),l=r(14),f=r(11),v=r(38),d=r(158),h=r(59),y=r(157),w=r(4),O=r(48),x=r(60).f,C=r(30).f,m=r(13).f,j=r(216).trim,_="Number",P=o.Number,L=P.prototype,S=v(O(L))==_,M=function(t){if(h(t))throw TypeError("Cannot convert a Symbol value to a number");var e,r,n,o,c,l,f,code,v=y(t,"number");if("string"==typeof v&&v.length>2)if(43===(e=(v=j(v)).charCodeAt(0))||45===e){if(88===(r=v.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(v.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+v}for(l=(c=v.slice(2)).length,f=0;f<l;f++)if((code=c.charCodeAt(f))<48||code>o)return NaN;return parseInt(c,n)}return+v};if(c(_,!P(" 0o1")||!P("0b1")||P("+0x1"))){for(var E,A=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof A&&(S?w((function(){L.valueOf.call(r)})):v(r)!=_)?d(new P(M(e)),r,A):M(e)},I=n?x(P):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),N=0;I.length>N;N++)f(P,E=I[N])&&!f(A,E)&&m(A,E,C(P,E));A.prototype=L,L.constructor=A,l(o,_,A)}},215:function(t,e,r){var content=r(233);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(116).default)("4e380696",content,!0,{sourceMap:!1})},216:function(t,e,r){var n=r(17),o=r(8),c="["+r(217)+"]",l=RegExp("^"+c+c+"*"),f=RegExp(c+c+"*$"),v=function(t){return function(e){var r=o(n(e));return 1&t&&(r=r.replace(l,"")),2&t&&(r=r.replace(f,"")),r}};t.exports={start:v(1),end:v(2),trim:v(3)}},217:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},218:function(t,e,r){r(37),r(29),r(36),r(57),r(32),r(58);var n=r(206),o=r(207),c=["class","staticClass","style","staticStyle","attrs"];function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}r(82),t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),f=e.children,v=void 0===f?[]:f,d=data.class,h=data.staticClass,style=data.style,y=data.staticStyle,w=data.attrs,O=void 0===w?{}:w,x=o(data,c);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){n(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[d,h],style:[style,y],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",width:"24",height:"24",viewBox:"0 0 24 24"},O)},x),v.concat([r("path",{attrs:{d:"M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"}})]))}}},219:function(t,e){t.exports=function(source,t){if(null==source)return{};var e,i,r={},n=Object.keys(source);for(i=0;i<n.length;i++)e=n[i],t.indexOf(e)>=0||(r[e]=source[e]);return r},t.exports.default=t.exports,t.exports.__esModule=!0},220:function(t,e,r){r(37),r(29),r(36),r(57),r(32),r(58);var n=r(206),o=r(207),c=["class","staticClass","style","staticStyle","attrs"];function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}r(82),t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),f=e.children,v=void 0===f?[]:f,d=data.class,h=data.staticClass,style=data.style,y=data.staticStyle,w=data.attrs,O=void 0===w?{}:w,x=o(data,c);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){n(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[d,h],style:[style,y],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",width:"24",height:"24",viewBox:"0 0 24 24"},O)},x),v.concat([r("path",{attrs:{d:"M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"}})]))}}},221:function(t,e,r){r(37),r(29),r(36),r(57),r(32),r(58);var n=r(206),o=r(207),c=["class","staticClass","style","staticStyle","attrs"];function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}r(82),t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),f=e.children,v=void 0===f?[]:f,d=data.class,h=data.staticClass,style=data.style,y=data.staticStyle,w=data.attrs,O=void 0===w?{}:w,x=o(data,c);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){n(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[d,h],style:[style,y],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",width:"24",height:"24",viewBox:"0 0 24 24"},O)},x),v.concat([r("path",{attrs:{d:"M21.94 13.11L20.89 9.89C20.89 9.86 20.88 9.83 20.87 9.8L18.76 3.32C18.65 3 18.33 2.75 17.96 2.75C17.6 2.75 17.28 3 17.17 3.33L15.17 9.5H8.84L6.83 3.33C6.72 3 6.4 2.75 6.04 2.75H6.04C5.67 2.75 5.35 3 5.24 3.33L3.13 9.82C3.13 9.82 3.13 9.83 3.13 9.83L2.06 13.11C1.9 13.61 2.07 14.15 2.5 14.45L11.72 21.16C11.89 21.28 12.11 21.28 12.28 21.15L21.5 14.45C21.93 14.15 22.1 13.61 21.94 13.11M8.15 10.45L10.72 18.36L4.55 10.45M13.28 18.37L15.75 10.78L15.85 10.45H19.46L13.87 17.61M17.97 3.94L19.78 9.5H16.16M14.86 10.45L13.07 15.96L12 19.24L9.14 10.45M6.03 3.94L7.84 9.5H4.23M3.05 13.69C2.96 13.62 2.92 13.5 2.96 13.4L3.75 10.97L9.57 18.42M20.95 13.69L14.44 18.42L14.46 18.39L20.25 10.97L21.04 13.4C21.08 13.5 21.04 13.62 20.95 13.69"}})]))}}},222:function(t,e,r){"use strict";r(209)},223:function(t,e,r){var n=r(115)(!1);n.push([t.i,".contact-box[data-v-16c794a8]{display:flex;justify-content:center;align-items:center;padding-top:16px;opacity:0;transition:opacity .25s}.contact-box>a[data-v-16c794a8]{display:flex;margin:0 8px}.contact-box>a path[data-v-16c794a8]{fill:hsla(0,0%,100%,.65);transition:fill .25s}.contact-box>a.gh:hover path[data-v-16c794a8]{fill:#14191e}.contact-box>a.gl:hover path[data-v-16c794a8]{fill:#f96424}.contact-box>a.li:hover path[data-v-16c794a8]{fill:#0077b7}.contact-box.visible[data-v-16c794a8]{opacity:1;transition:opacity .5s}",""]),t.exports=n},224:function(t,e,r){"use strict";r.r(e);var n=r(218),o=r.n(n),c=r(220),l=r.n(c),f=r(221),v=r.n(f),d={components:{GithubSvg:l.a,GitlabSvg:v.a,LinkedinSvg:o.a},props:{visible:{type:Boolean}}},h=(r(222),r(56)),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:["contact-box",{visible:t.visible}]},[r("a",{staticClass:"gh",attrs:{href:"https://github.com/beam41"}},[r("GithubSvg")],1),t._v(" "),r("a",{staticClass:"gl",attrs:{href:"https://gitlab.com/beam41"}},[r("GitlabSvg")],1),t._v(" "),r("a",{staticClass:"li",attrs:{href:"https://www.linkedin.com/in/phumdol/"}},[r("LinkedinSvg")],1)])}),[],!1,null,"16c794a8",null);e.default=component.exports},232:function(t,e,r){"use strict";r(215)},233:function(t,e,r){var n=r(115)(!1);n.push([t.i,".about-detail[data-v-c962dcd0]{color:hsla(0,0%,100%,.65);max-width:800px;padding:0 16px;margin:0;text-align:center}.cover[data-v-c962dcd0]{overflow:hidden}",""]),t.exports=n},237:function(t,e,r){"use strict";r.r(e);r(212);var n=r(210),o={components:{Contact:r(224).default},props:{percentage:{type:Number,required:!0}},data:function(){return{scrollHeight:0}},computed:{coverHeight:function(){var t=this.percentage;return this.scrollHeight?Object(n.a)(0,this.scrollHeight,Object(n.b)(.2,.8,t)):0}},mounted:function(){var t,e=this;this.scrollHeight=null===(t=this.$refs.text)||void 0===t?void 0:t.scrollHeight,window.addEventListener("resize",(function(){var t;e.scrollHeight=null===(t=e.$refs.text)||void 0===t?void 0:t.scrollHeight}))}},c=(r(232),r(56)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"cover",style:{height:t.coverHeight+"px"}},[r("p",{ref:"text",staticClass:"about-detail"},[t._v("\n    I'm a software engineer based in Chiang Mai, Thailand.\n    "),r("br"),t._v("\n    I have knowledge in front-end development and back-end development with\n    Vue, React, Angular, Node.js, and ASP.NET.\n    "),r("br"),t._v("\n    I'm also familiar with Python and Java.\n    "),r("br"),t._v(" "),r("Contact",{attrs:{visible:t.percentage>.9}})],1)])}),[],!1,null,"c962dcd0",null);e.default=component.exports}}]);