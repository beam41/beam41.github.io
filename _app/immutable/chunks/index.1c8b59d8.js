function S(){}function nt(t,e){for(const n in e)t[n]=e[n];return t}function ct(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function K(t){return t()}function G(){return Object.create(null)}function k(t){t.forEach(K)}function Q(t){return typeof t=="function"}function jt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function rt(t){return Object.keys(t).length===0}function st(t,...e){if(t==null)return S;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Ct(t,e,n){t.$$.on_destroy.push(st(e,n))}function Mt(t,e,n,c){if(t){const r=U(t,e,n,c);return t[0](r)}}function U(t,e,n,c){return t[1]&&c?nt(n.ctx.slice(),t[1](c(e))):n.ctx}function Ot(t,e,n,c){if(t[2]&&c){const r=t[2](c(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],s=Math.max(e.dirty.length,r.length);for(let o=0;o<s;o+=1)u[o]=e.dirty[o]|r[o];return u}return e.dirty|r}return e.dirty}function Tt(t,e,n,c,r,u){if(r){const s=U(e,n,c,u);t.p(s,r)}}function Dt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let c=0;c<n;c++)e[c]=-1;return e}return-1}function Pt(t){return t??""}let j=!1;function it(){j=!0}function lt(){j=!1}function ut(t,e,n,c){for(;t<e;){const r=t+(e-t>>1);n(r)<=c?t=r+1:e=r}return t}function ot(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const i=[];for(let l=0;l<e.length;l++){const _=e[l];_.claim_order!==void 0&&i.push(_)}e=i}const n=new Int32Array(e.length+1),c=new Int32Array(e.length);n[0]=-1;let r=0;for(let i=0;i<e.length;i++){const l=e[i].claim_order,_=(r>0&&e[n[r]].claim_order<=l?r+1:ut(1,r,a=>e[n[a]].claim_order,l))-1;c[i]=n[_]+1;const d=_+1;n[d]=i,r=Math.max(d,r)}const u=[],s=[];let o=e.length-1;for(let i=n[r]+1;i!=0;i=c[i-1]){for(u.push(e[i-1]);o>=i;o--)s.push(e[o]);o--}for(;o>=0;o--)s.push(e[o]);u.reverse(),s.sort((i,l)=>i.claim_order-l.claim_order);for(let i=0,l=0;i<s.length;i++){for(;l<u.length&&s[i].claim_order>=u[l].claim_order;)l++;const _=l<u.length?u[l]:null;t.insertBefore(s[i],_)}}function at(t,e){if(j){for(ot(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Bt(t,e,n){j&&!n?at(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ft(t){t.parentNode&&t.parentNode.removeChild(t)}function Ht(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _t(t){return document.createElement(t)}function dt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function L(t){return document.createTextNode(t)}function Lt(){return L(" ")}function qt(){return L("")}function V(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const ht=["width","height"];function mt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const c in e)e[c]==null?t.removeAttribute(c):c==="style"?t.style.cssText=e[c]:c==="__value"?t.value=t[c]=e[c]:n[c]&&n[c].set&&ht.indexOf(c)===-1?t[c]=e[c]:V(t,c,e[c])}function pt(t,e){Object.keys(e).forEach(n=>{yt(t,n,e[n])})}function yt(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:V(t,e,n)}function zt(t){return/-/.test(t)?pt:mt}function gt(t){return Array.from(t.childNodes)}function bt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function X(t,e,n,c,r=!1){bt(t);const u=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const i=n(o);return i===void 0?t.splice(s,1):t[s]=i,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const i=n(o);return i===void 0?t.splice(s,1):t[s]=i,r?i===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return c()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function Y(t,e,n,c){return X(t,r=>r.nodeName===e,r=>{const u=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];n[o.name]||u.push(o.name)}u.forEach(s=>r.removeAttribute(s))},()=>c(e))}function Ft(t,e,n){return Y(t,e,n,_t)}function Rt(t,e,n){return Y(t,e,n,dt)}function xt(t,e){return X(t,n=>n.nodeType===3,n=>{const c=""+e;if(n.data.startsWith(c)){if(n.data.length!==c.length)return n.splitText(c.length)}else n.data=c},()=>L(e),!0)}function Wt(t){return xt(t," ")}function Gt(t,e){e=""+e,t.data!==e&&(t.data=e)}function It(t,e,n,c){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,c?"important":"")}function Jt(t,e,n){t.classList[n?"add":"remove"](e)}function wt(t,e,{bubbles:n=!1,cancelable:c=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,c,e),r}function Kt(t,e){const n=[];let c=0;for(const r of e.childNodes)if(r.nodeType===8){const u=r.textContent.trim();u===`HEAD_${t}_END`?(c-=1,n.push(r)):u===`HEAD_${t}_START`&&(c+=1,n.push(r))}else c>0&&n.push(r);return n}function Qt(t,e){return new t(e)}let v;function g(t){v=t}function C(){if(!v)throw new Error("Function called outside component initialization");return v}function Ut(t){C().$$.on_mount.push(t)}function Vt(t){C().$$.after_update.push(t)}function Xt(){const t=C();return(e,n,{cancelable:c=!1}={})=>{const r=t.$$.callbacks[e];if(r){const u=wt(e,n,{cancelable:c});return r.slice().forEach(s=>{s.call(t,u)}),!u.defaultPrevented}return!0}}const w=[],I=[];let $=[];const J=[],Z=Promise.resolve();let B=!1;function tt(){B||(B=!0,Z.then(q))}function Yt(){return tt(),Z}function H(t){$.push(t)}const P=new Set;let x=0;function q(){if(x!==0)return;const t=v;do{try{for(;x<w.length;){const e=w[x];x++,g(e),$t(e.$$)}}catch(e){throw w.length=0,x=0,e}for(g(null),w.length=0,x=0;I.length;)I.pop()();for(let e=0;e<$.length;e+=1){const n=$[e];P.has(n)||(P.add(n),n())}$.length=0}while(w.length);for(;J.length;)J.pop()();B=!1,P.clear(),g(t)}function $t(t){if(t.fragment!==null){t.update(),k(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}function kt(t){const e=[],n=[];$.forEach(c=>t.indexOf(c)===-1?e.push(c):n.push(c)),n.forEach(c=>c()),$=e}const A=new Set;let b;function vt(){b={r:0,c:[],p:b}}function Et(){b.r||k(b.c),b=b.p}function z(t,e){t&&t.i&&(A.delete(t),t.i(e))}function et(t,e,n,c){if(t&&t.o){if(A.has(t))return;A.add(t),b.c.push(()=>{A.delete(t),c&&(n&&t.d(1),c())}),t.o(e)}else c&&c()}function Zt(t,e){const n=e.token={};function c(r,u,s,o){if(e.token!==n)return;e.resolved=o;let i=e.ctx;s!==void 0&&(i=i.slice(),i[s]=o);const l=r&&(e.current=r)(i);let _=!1;e.block&&(e.blocks?e.blocks.forEach((d,a)=>{a!==u&&d&&(vt(),et(d,1,1,()=>{e.blocks[a]===d&&(e.blocks[a]=null)}),Et())}):e.block.d(1),l.c(),z(l,1),l.m(e.mount(),e.anchor),_=!0),e.block=l,e.blocks&&(e.blocks[u]=l),_&&q()}if(ct(t)){const r=C();if(t.then(u=>{g(r),c(e.then,1,e.value,u),g(null)},u=>{if(g(r),c(e.catch,2,e.error,u),g(null),!e.hasCatch)throw u}),e.current!==e.pending)return c(e.pending,0),!0}else{if(e.current!==e.then)return c(e.then,1,e.value,t),!0;e.resolved=t}}function te(t,e,n){const c=e.slice(),{resolved:r}=t;t.current===t.then&&(c[t.value]=r),t.current===t.catch&&(c[t.error]=r),t.block.p(c,n)}function ee(t,e){t.d(1),e.delete(t.key)}function ne(t,e){et(t,1,1,()=>{e.delete(t.key)})}function ce(t,e,n,c,r,u,s,o,i,l,_,d){let a=t.length,m=u.length,h=a;const M={};for(;h--;)M[t[h].key]=h;const E=[],O=new Map,T=new Map,F=[];for(h=m;h--;){const f=d(r,u,h),p=n(f);let y=s.get(p);y?c&&F.push(()=>y.p(f,e)):(y=l(p,f),y.c()),O.set(p,E[h]=y),p in M&&T.set(p,Math.abs(h-M[p]))}const R=new Set,W=new Set;function D(f){z(f,1),f.m(o,_),s.set(f.key,f),_=f.first,m--}for(;a&&m;){const f=E[m-1],p=t[a-1],y=f.key,N=p.key;f===p?(_=f.first,a--,m--):O.has(N)?!s.has(y)||R.has(y)?D(f):W.has(N)?a--:T.get(y)>T.get(N)?(W.add(y),D(f)):(R.add(N),a--):(i(p,s),a--)}for(;a--;){const f=t[a];O.has(f.key)||i(f,s)}for(;m;)D(E[m-1]);return k(F),E}function re(t){t&&t.c()}function se(t,e){t&&t.l(e)}function Nt(t,e,n,c){const{fragment:r,after_update:u}=t.$$;r&&r.m(e,n),c||H(()=>{const s=t.$$.on_mount.map(K).filter(Q);t.$$.on_destroy?t.$$.on_destroy.push(...s):k(s),t.$$.on_mount=[]}),u.forEach(H)}function At(t,e){const n=t.$$;n.fragment!==null&&(kt(n.after_update),k(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function St(t,e){t.$$.dirty[0]===-1&&(w.push(t),tt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ie(t,e,n,c,r,u,s,o=[-1]){const i=v;g(t);const l=t.$$={fragment:null,ctx:[],props:u,update:S,not_equal:r,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(i?i.$$.context:[])),callbacks:G(),dirty:o,skip_bound:!1,root:e.target||i.$$.root};s&&s(l.root);let _=!1;if(l.ctx=n?n(t,e.props||{},(d,a,...m)=>{const h=m.length?m[0]:a;return l.ctx&&r(l.ctx[d],l.ctx[d]=h)&&(!l.skip_bound&&l.bound[d]&&l.bound[d](h),_&&St(t,d)),a}):[],l.update(),_=!0,k(l.before_update),l.fragment=c?c(l.ctx):!1,e.target){if(e.hydrate){it();const d=gt(e.target);l.fragment&&l.fragment.l(d),d.forEach(ft)}else l.fragment&&l.fragment.c();e.intro&&z(t.$$.fragment),Nt(t,e.target,e.anchor,e.customElement),lt(),q()}g(i)}class le{$destroy(){At(this,1),this.$destroy=S}$on(e,n){if(!Q(n))return S;const c=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return c.push(n),()=>{const r=c.indexOf(n);r!==-1&&c.splice(r,1)}}$set(e){this.$$set&&!rt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Nt as A,At as B,Mt as C,Kt as D,at as E,Tt as F,Dt as G,Ot as H,S as I,Ct as J,Jt as K,dt as L,Rt as M,ce as N,ne as O,zt as P,Pt as Q,ee as R,le as S,Zt as T,te as U,Xt as V,Ht as W,Lt as a,Bt as b,Wt as c,et as d,qt as e,Et as f,z as g,ft as h,ie as i,Vt as j,_t as k,Ft as l,gt as m,V as n,Ut as o,It as p,L as q,xt as r,jt as s,Yt as t,Gt as u,vt as v,I as w,Qt as x,re as y,se as z};
