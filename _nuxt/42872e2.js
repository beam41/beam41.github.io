(window.webpackJsonp=window.webpackJsonp||[]).push([[6,11],{208:function(e,t,n){"use strict";n.r(t),n.d(t,"TILE_COUNT",(function(){return o})),n.d(t,"FOOTER_HEIGHT",(function(){return r})),n.d(t,"PALETTE",(function(){return d})),n.d(t,"LOADING_OUT",(function(){return l}));var o=10,r=96,d=[["B97A95","F6AE99","F2E1C1"],["DEEDF0","F4C7AB","B2B8A3"],["7B6079","A7D0CD","FFE9D6"],["E8E9A1","E6B566","E5707E"],["A6DCEF","F2AAAA","E36387"]],l=1e3},225:function(e,t,n){var content=n(239);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(116).default)("2ed84f9a",content,!0,{sourceMap:!1})},238:function(e,t,n){"use strict";n(225)},239:function(e,t,n){var o=n(115)(!1);o.push([e.i,'.loading-cover[data-v-054d8113]{z-index:1000;position:absolute;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;margin:0;padding:0;background:#041e33;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;transition:top .25s}.loading-cover .loading-bg[data-v-054d8113]{background:hsla(0,0%,100%,.8);border-radius:8px;overflow:hidden}.loading-cover.unload[data-v-054d8113]{top:-100%}.loading-cover .loading[data-v-054d8113]{color:#041e33;width:100px;padding:4px 8px;font-weight:700;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}',""]),e.exports=o},249:function(e,t,n){"use strict";n.r(t);n(84);var o=n(208),r={data:function(){return{unload:!1}},mounted:function(){var e=this;setTimeout((function(){e.unload=!0,e.$emit("unloaded")}),o.LOADING_OUT)},methods:{close:function(){this.$destroy(),this.$root.$el.parentNode.removeChild(this.$root.$el)}}},d=(n(238),n(56)),component=Object(d.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:["loading-cover",{unload:e.unload}]},[e._m(0)])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"loading-bg"},[n("div",{staticClass:"loading"},[e._v("Welcome")])])}],!1,null,"054d8113",null);t.default=component.exports}}]);