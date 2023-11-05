import{R as be,u as Dr,c as Nr,s as x,j as u,a as Gt,r as f,b as Br,d as ve,e as Vr,f as Ur,g as kr,h as zr,i as Kt}from"./index-42b274f7.js";function Wt(e=be){const t=e===be?Dr:Nr(e);return function(){const{store:n}=t();return n}}const Hr=Wt();function Gr(e=be){const t=e===be?Hr:Wt(e);return function(){return t().dispatch}}const Ge=Gr(),Kr=e=>e.cars,Wr=e=>e.favorites,Yr=e=>e.isLastPage,qr=e=>e.isLoading,Xr=x.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 150px;
`,Zr=x.h2`
  visibility: ${({$hidden:e})=>e?"hidden":"visible"};
`,Jr=x.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(274px, 1fr));

  grid-column-gap: 29px;
  grid-row-gap: 50px;

  margin-bottom: 100px;
`,Qr=x.button`
  justify-self: end;
  padding-block: 12px;
  padding-inline: ${({$wide:e})=>e?"99px":"50px"};

  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: calc(20 / 14); /* 142.857% */

  color: #ffffff;
  background-color: #3470ff;
  border-radius: 12px;
  border: none;
  transition: all 0.3s ease-out;

  &:hover {
    background-color: #0b44cd;
    transition: all 0.3s ease-out;
  }
`,en=({text:e,...t})=>u.jsx(Qr,{...t,children:e}),tn=x.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background-color: rgba(18, 20, 23, 0.5);
`,rn=x.div`
  position: relative;
  padding: 40px;

  width: 541px;
  height: 752px;

  background-color: #fff;
  border-radius: 24px;
`,nn=x.button`
  position: absolute;
  top: 16px;
  right: 16px;

  padding: 0;
  border: 0;
  margin: 0;
  width: 24px;
  height: 24px;

  color: #121417;
  background-color: transparent;
  border-radius: 6px;
  transition: all 0.3s ease;

  cursor: pointer;

  &:hover {
    color: #3470ff;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-out;
  }
`,an=({closeModal:e})=>u.jsx(nn,{onClick:e,children:u.jsx("svg",{width:"24",height:"24",children:u.jsx("use",{href:`${Gt}#close`,stroke:"currentColor"})})}),on=({closeModal:e,children:t})=>{const r=n=>{n.currentTarget===n.target&&e()};return f.useEffect(()=>{document.body.style.overflow="hidden";const n=i=>{i.code==="Escape"&&e()};return window.addEventListener("keydown",n),()=>{document.body.style.overflow="unset",window.removeEventListener("keydown",n)}},[e]),Br.createPortal(u.jsx(tn,{onClick:r,children:u.jsxs(rn,{children:[u.jsx(an,{closeModal:e}),t]})}),document.querySelector("#root"))},sn=x.button`
  position: absolute;
  top: 14px;
  right: 14px;

  padding: 0;
  line-height: 0;

  fill: ${({$isSaved:e})=>e?"#3470ff":"transparent"};
  color: ${({$isSaved:e})=>e?"#3470ff":"#ffffffcc"};
  background-color: transparent;
  border: none;
  transition: all 0.3s ease-out;
`,cn=e=>u.jsx(sn,{...e,children:u.jsx("svg",{width:"18",height:"18",children:u.jsx("use",{href:`${Gt}#heart`,stroke:"currentColor"})})}),un=x.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: all 0.3s ease-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.3s ease-out;
  }
`,ln=x.img`
  height: 268px;
  object-fit: cover;
`,fn=x.div`
  position: relative;
  margin-bottom: 14px;

  width: 274px;
  height: 268px;
  overflow: hidden;
  border-radius: 14px;
`,dn=x.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(18, 20, 23, 0.5) 2.5%,
    rgba(18, 20, 23, 0) 41.07%
  );
`,pn=x.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`,hn=x.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16); /* 150% */

  color: #121417;

  & span {
    color: #3470ff;
  }
`,gn=x.p`
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16); /* 150% */
  color: #121417;
`,vn=x.div`
  flex-grow: 1;
  margin-bottom: 28px;
`,yn=x.ul`
  display: flex;
  flex-wrap: wrap;
`,bn=x.li`
  span {
    margin-inline: 6px;
  }

  &:last-child {
    span {
      display: none;
    }
  }
`,mn=({auto:e})=>{const{img:t,year:r,make:n,model:i,type:o,accessories:s,rentalPrice:h,rentalCompany:v,address:b,id:O}=e,[w,d]=f.useState(!1),_=()=>d(!w),I=Ge(),$=ve(Wr).find(y=>y.id===e.id),A=()=>{$||I(Vr(e)),$&&I(Ur(e))},[M,ae,ie]=b.split(", "),J=[ae,ie,v,o,i,O,s[0]];return u.jsxs(u.Fragment,{children:[u.jsxs(un,{children:[u.jsxs(fn,{children:[u.jsx(ln,{src:t,alt:`${n} ${i}`,loading:"lazy"}),u.jsx(dn,{}),u.jsx(cn,{$isSaved:$,onClick:A})]}),u.jsxs(pn,{children:[u.jsxs(hn,{children:[n," ",u.jsx("span",{children:i}),", ",r]}),u.jsx(gn,{children:h})]}),u.jsx(vn,{children:u.jsx(yn,{children:J.map((y,m)=>u.jsxs(bn,{children:[y,u.jsx("span",{children:"|"})]},m))})}),u.jsx(en,{$wide:!0,text:"Learn more",onClick:_})]}),w&&u.jsx(on,{closeModal:_,children:u.jsx("div",{children:"sdfsadfsdf"})})]})},Tn=({cars:e})=>u.jsx(Jr,{children:e.length>0&&e.map(t=>u.jsx("li",{children:u.jsx(mn,{auto:t})},t.id))}),Sn=x.button`
  align-self: center;

  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: calc(24 / 16); /* 150% */
  text-decoration-line: underline;
  color: #3470ff;
  border: none;
  background-color: transparent;
  transition: all 0.3s ease-out;

  &:hover {
    color: #0b44cd;
    transition: all 0.3s ease-out;
  }
`,En=e=>u.jsx(Sn,{...e,children:"Load More"});var jn=function(t){return xn(t)&&!_n(t)};function xn(e){return!!e&&typeof e=="object"}function _n(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||wn(e)}var An=typeof Symbol=="function"&&Symbol.for,$n=An?Symbol.for("react.element"):60103;function wn(e){return e.$$typeof===$n}function Cn(e){return Array.isArray(e)?[]:{}}function me(e,t){return t.clone!==!1&&t.isMergeableObject(e)?ue(Cn(e),e,t):e}function On(e,t,r){return e.concat(t).map(function(n){return me(n,r)})}function In(e,t,r){var n={};return r.isMergeableObject(e)&&Object.keys(e).forEach(function(i){n[i]=me(e[i],r)}),Object.keys(t).forEach(function(i){!r.isMergeableObject(t[i])||!e[i]?n[i]=me(t[i],r):n[i]=ue(e[i],t[i],r)}),n}function ue(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||On,r.isMergeableObject=r.isMergeableObject||jn;var n=Array.isArray(t),i=Array.isArray(e),o=n===i;return o?n?r.arrayMerge(e,t,r):In(e,t,r):me(t,r)}ue.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(n,i){return ue(n,i,r)},{})};var Ne=ue,Fn=typeof global=="object"&&global&&global.Object===Object&&global;const Yt=Fn;var Mn=typeof self=="object"&&self&&self.Object===Object&&self,Rn=Yt||Mn||Function("return this")();const N=Rn;var Pn=N.Symbol;const U=Pn;var qt=Object.prototype,Ln=qt.hasOwnProperty,Dn=qt.toString,se=U?U.toStringTag:void 0;function Nn(e){var t=Ln.call(e,se),r=e[se];try{e[se]=void 0;var n=!0}catch{}var i=Dn.call(e);return n&&(t?e[se]=r:delete e[se]),i}var Bn=Object.prototype,Vn=Bn.toString;function Un(e){return Vn.call(e)}var kn="[object Null]",zn="[object Undefined]",vt=U?U.toStringTag:void 0;function Y(e){return e==null?e===void 0?zn:kn:vt&&vt in Object(e)?Nn(e):Un(e)}function Xt(e,t){return function(r){return e(t(r))}}var Hn=Xt(Object.getPrototypeOf,Object);const Ke=Hn;function q(e){return e!=null&&typeof e=="object"}var Gn="[object Object]",Kn=Function.prototype,Wn=Object.prototype,Zt=Kn.toString,Yn=Wn.hasOwnProperty,qn=Zt.call(Object);function yt(e){if(!q(e)||Y(e)!=Gn)return!1;var t=Ke(e);if(t===null)return!0;var r=Yn.call(t,"constructor")&&t.constructor;return typeof r=="function"&&r instanceof r&&Zt.call(r)==qn}var bt=Array.isArray,mt=Object.keys,Xn=Object.prototype.hasOwnProperty,Zn=typeof Element<"u";function Be(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var r=bt(e),n=bt(t),i,o,s;if(r&&n){if(o=e.length,o!=t.length)return!1;for(i=o;i--!==0;)if(!Be(e[i],t[i]))return!1;return!0}if(r!=n)return!1;var h=e instanceof Date,v=t instanceof Date;if(h!=v)return!1;if(h&&v)return e.getTime()==t.getTime();var b=e instanceof RegExp,O=t instanceof RegExp;if(b!=O)return!1;if(b&&O)return e.toString()==t.toString();var w=mt(e);if(o=w.length,o!==mt(t).length)return!1;for(i=o;i--!==0;)if(!Xn.call(t,w[i]))return!1;if(Zn&&e instanceof Element&&t instanceof Element)return e===t;for(i=o;i--!==0;)if(s=w[i],!(s==="_owner"&&e.$$typeof)&&!Be(e[s],t[s]))return!1;return!0}return e!==e&&t!==t}var Jn=function(t,r){try{return Be(t,r)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||n.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}};const H=kr(Jn);var Qn=!0;function ea(e,t){if(!Qn){if(e)return;var r="Warning: "+t;typeof console<"u"&&console.warn(r);try{throw Error(r)}catch{}}}function ta(){this.__data__=[],this.size=0}function Jt(e,t){return e===t||e!==e&&t!==t}function Se(e,t){for(var r=e.length;r--;)if(Jt(e[r][0],t))return r;return-1}var ra=Array.prototype,na=ra.splice;function aa(e){var t=this.__data__,r=Se(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():na.call(t,r,1),--this.size,!0}function ia(e){var t=this.__data__,r=Se(t,e);return r<0?void 0:t[r][1]}function oa(e){return Se(this.__data__,e)>-1}function sa(e,t){var r=this.__data__,n=Se(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this}function V(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}V.prototype.clear=ta;V.prototype.delete=aa;V.prototype.get=ia;V.prototype.has=oa;V.prototype.set=sa;function ca(){this.__data__=new V,this.size=0}function ua(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}function la(e){return this.__data__.get(e)}function fa(e){return this.__data__.has(e)}function de(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var da="[object AsyncFunction]",pa="[object Function]",ha="[object GeneratorFunction]",ga="[object Proxy]";function Qt(e){if(!de(e))return!1;var t=Y(e);return t==pa||t==ha||t==da||t==ga}var va=N["__core-js_shared__"];const Me=va;var Tt=function(){var e=/[^.]+$/.exec(Me&&Me.keys&&Me.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function ya(e){return!!Tt&&Tt in e}var ba=Function.prototype,ma=ba.toString;function X(e){if(e!=null){try{return ma.call(e)}catch{}try{return e+""}catch{}}return""}var Ta=/[\\^$.*+?()[\]{}|]/g,Sa=/^\[object .+?Constructor\]$/,Ea=Function.prototype,ja=Object.prototype,xa=Ea.toString,_a=ja.hasOwnProperty,Aa=RegExp("^"+xa.call(_a).replace(Ta,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function $a(e){if(!de(e)||ya(e))return!1;var t=Qt(e)?Aa:Sa;return t.test(X(e))}function wa(e,t){return e==null?void 0:e[t]}function Z(e,t){var r=wa(e,t);return $a(r)?r:void 0}var Ca=Z(N,"Map");const le=Ca;var Oa=Z(Object,"create");const fe=Oa;function Ia(){this.__data__=fe?fe(null):{},this.size=0}function Fa(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Ma="__lodash_hash_undefined__",Ra=Object.prototype,Pa=Ra.hasOwnProperty;function La(e){var t=this.__data__;if(fe){var r=t[e];return r===Ma?void 0:r}return Pa.call(t,e)?t[e]:void 0}var Da=Object.prototype,Na=Da.hasOwnProperty;function Ba(e){var t=this.__data__;return fe?t[e]!==void 0:Na.call(t,e)}var Va="__lodash_hash_undefined__";function Ua(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=fe&&t===void 0?Va:t,this}function W(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}W.prototype.clear=Ia;W.prototype.delete=Fa;W.prototype.get=La;W.prototype.has=Ba;W.prototype.set=Ua;function ka(){this.size=0,this.__data__={hash:new W,map:new(le||V),string:new W}}function za(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Ee(e,t){var r=e.__data__;return za(t)?r[typeof t=="string"?"string":"hash"]:r.map}function Ha(e){var t=Ee(this,e).delete(e);return this.size-=t?1:0,t}function Ga(e){return Ee(this,e).get(e)}function Ka(e){return Ee(this,e).has(e)}function Wa(e,t){var r=Ee(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this}function k(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}k.prototype.clear=ka;k.prototype.delete=Ha;k.prototype.get=Ga;k.prototype.has=Ka;k.prototype.set=Wa;var Ya=200;function qa(e,t){var r=this.__data__;if(r instanceof V){var n=r.__data__;if(!le||n.length<Ya-1)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new k(n)}return r.set(e,t),this.size=r.size,this}function ne(e){var t=this.__data__=new V(e);this.size=t.size}ne.prototype.clear=ca;ne.prototype.delete=ua;ne.prototype.get=la;ne.prototype.has=fa;ne.prototype.set=qa;function Xa(e,t){for(var r=-1,n=e==null?0:e.length;++r<n&&t(e[r],r,e)!==!1;);return e}var Za=function(){try{var e=Z(Object,"defineProperty");return e({},"",{}),e}catch{}}();const St=Za;function er(e,t,r){t=="__proto__"&&St?St(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}var Ja=Object.prototype,Qa=Ja.hasOwnProperty;function tr(e,t,r){var n=e[t];(!(Qa.call(e,t)&&Jt(n,r))||r===void 0&&!(t in e))&&er(e,t,r)}function je(e,t,r,n){var i=!r;r||(r={});for(var o=-1,s=t.length;++o<s;){var h=t[o],v=n?n(r[h],e[h],h,r,e):void 0;v===void 0&&(v=e[h]),i?er(r,h,v):tr(r,h,v)}return r}function ei(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}var ti="[object Arguments]";function Et(e){return q(e)&&Y(e)==ti}var rr=Object.prototype,ri=rr.hasOwnProperty,ni=rr.propertyIsEnumerable,ai=Et(function(){return arguments}())?Et:function(e){return q(e)&&ri.call(e,"callee")&&!ni.call(e,"callee")};const ii=ai;var oi=Array.isArray;const pe=oi;function si(){return!1}var nr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,jt=nr&&typeof module=="object"&&module&&!module.nodeType&&module,ci=jt&&jt.exports===nr,xt=ci?N.Buffer:void 0,ui=xt?xt.isBuffer:void 0,li=ui||si;const ar=li;var fi=9007199254740991,di=/^(?:0|[1-9]\d*)$/;function pi(e,t){var r=typeof e;return t=t??fi,!!t&&(r=="number"||r!="symbol"&&di.test(e))&&e>-1&&e%1==0&&e<t}var hi=9007199254740991;function ir(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=hi}var gi="[object Arguments]",vi="[object Array]",yi="[object Boolean]",bi="[object Date]",mi="[object Error]",Ti="[object Function]",Si="[object Map]",Ei="[object Number]",ji="[object Object]",xi="[object RegExp]",_i="[object Set]",Ai="[object String]",$i="[object WeakMap]",wi="[object ArrayBuffer]",Ci="[object DataView]",Oi="[object Float32Array]",Ii="[object Float64Array]",Fi="[object Int8Array]",Mi="[object Int16Array]",Ri="[object Int32Array]",Pi="[object Uint8Array]",Li="[object Uint8ClampedArray]",Di="[object Uint16Array]",Ni="[object Uint32Array]",E={};E[Oi]=E[Ii]=E[Fi]=E[Mi]=E[Ri]=E[Pi]=E[Li]=E[Di]=E[Ni]=!0;E[gi]=E[vi]=E[wi]=E[yi]=E[Ci]=E[bi]=E[mi]=E[Ti]=E[Si]=E[Ei]=E[ji]=E[xi]=E[_i]=E[Ai]=E[$i]=!1;function Bi(e){return q(e)&&ir(e.length)&&!!E[Y(e)]}function We(e){return function(t){return e(t)}}var or=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ce=or&&typeof module=="object"&&module&&!module.nodeType&&module,Vi=ce&&ce.exports===or,Re=Vi&&Yt.process,Ui=function(){try{var e=ce&&ce.require&&ce.require("util").types;return e||Re&&Re.binding&&Re.binding("util")}catch{}}();const re=Ui;var _t=re&&re.isTypedArray,ki=_t?We(_t):Bi;const zi=ki;var Hi=Object.prototype,Gi=Hi.hasOwnProperty;function sr(e,t){var r=pe(e),n=!r&&ii(e),i=!r&&!n&&ar(e),o=!r&&!n&&!i&&zi(e),s=r||n||i||o,h=s?ei(e.length,String):[],v=h.length;for(var b in e)(t||Gi.call(e,b))&&!(s&&(b=="length"||i&&(b=="offset"||b=="parent")||o&&(b=="buffer"||b=="byteLength"||b=="byteOffset")||pi(b,v)))&&h.push(b);return h}var Ki=Object.prototype;function Ye(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||Ki;return e===r}var Wi=Xt(Object.keys,Object);const Yi=Wi;var qi=Object.prototype,Xi=qi.hasOwnProperty;function Zi(e){if(!Ye(e))return Yi(e);var t=[];for(var r in Object(e))Xi.call(e,r)&&r!="constructor"&&t.push(r);return t}function cr(e){return e!=null&&ir(e.length)&&!Qt(e)}function qe(e){return cr(e)?sr(e):Zi(e)}function Ji(e,t){return e&&je(t,qe(t),e)}function Qi(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}var eo=Object.prototype,to=eo.hasOwnProperty;function ro(e){if(!de(e))return Qi(e);var t=Ye(e),r=[];for(var n in e)n=="constructor"&&(t||!to.call(e,n))||r.push(n);return r}function Xe(e){return cr(e)?sr(e,!0):ro(e)}function no(e,t){return e&&je(t,Xe(t),e)}var ur=typeof exports=="object"&&exports&&!exports.nodeType&&exports,At=ur&&typeof module=="object"&&module&&!module.nodeType&&module,ao=At&&At.exports===ur,$t=ao?N.Buffer:void 0,wt=$t?$t.allocUnsafe:void 0;function io(e,t){if(t)return e.slice();var r=e.length,n=wt?wt(r):new e.constructor(r);return e.copy(n),n}function lr(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}function oo(e,t){for(var r=-1,n=e==null?0:e.length,i=0,o=[];++r<n;){var s=e[r];t(s,r,e)&&(o[i++]=s)}return o}function fr(){return[]}var so=Object.prototype,co=so.propertyIsEnumerable,Ct=Object.getOwnPropertySymbols,uo=Ct?function(e){return e==null?[]:(e=Object(e),oo(Ct(e),function(t){return co.call(e,t)}))}:fr;const Ze=uo;function lo(e,t){return je(e,Ze(e),t)}function dr(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e}var fo=Object.getOwnPropertySymbols,po=fo?function(e){for(var t=[];e;)dr(t,Ze(e)),e=Ke(e);return t}:fr;const pr=po;function ho(e,t){return je(e,pr(e),t)}function hr(e,t,r){var n=t(e);return pe(e)?n:dr(n,r(e))}function go(e){return hr(e,qe,Ze)}function vo(e){return hr(e,Xe,pr)}var yo=Z(N,"DataView");const Ve=yo;var bo=Z(N,"Promise");const Ue=bo;var mo=Z(N,"Set");const ke=mo;var To=Z(N,"WeakMap");const ze=To;var Ot="[object Map]",So="[object Object]",It="[object Promise]",Ft="[object Set]",Mt="[object WeakMap]",Rt="[object DataView]",Eo=X(Ve),jo=X(le),xo=X(Ue),_o=X(ke),Ao=X(ze),G=Y;(Ve&&G(new Ve(new ArrayBuffer(1)))!=Rt||le&&G(new le)!=Ot||Ue&&G(Ue.resolve())!=It||ke&&G(new ke)!=Ft||ze&&G(new ze)!=Mt)&&(G=function(e){var t=Y(e),r=t==So?e.constructor:void 0,n=r?X(r):"";if(n)switch(n){case Eo:return Rt;case jo:return Ot;case xo:return It;case _o:return Ft;case Ao:return Mt}return t});const Je=G;var $o=Object.prototype,wo=$o.hasOwnProperty;function Co(e){var t=e.length,r=new e.constructor(t);return t&&typeof e[0]=="string"&&wo.call(e,"index")&&(r.index=e.index,r.input=e.input),r}var Oo=N.Uint8Array;const Pt=Oo;function Qe(e){var t=new e.constructor(e.byteLength);return new Pt(t).set(new Pt(e)),t}function Io(e,t){var r=t?Qe(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}var Fo=/\w*$/;function Mo(e){var t=new e.constructor(e.source,Fo.exec(e));return t.lastIndex=e.lastIndex,t}var Lt=U?U.prototype:void 0,Dt=Lt?Lt.valueOf:void 0;function Ro(e){return Dt?Object(Dt.call(e)):{}}function Po(e,t){var r=t?Qe(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}var Lo="[object Boolean]",Do="[object Date]",No="[object Map]",Bo="[object Number]",Vo="[object RegExp]",Uo="[object Set]",ko="[object String]",zo="[object Symbol]",Ho="[object ArrayBuffer]",Go="[object DataView]",Ko="[object Float32Array]",Wo="[object Float64Array]",Yo="[object Int8Array]",qo="[object Int16Array]",Xo="[object Int32Array]",Zo="[object Uint8Array]",Jo="[object Uint8ClampedArray]",Qo="[object Uint16Array]",es="[object Uint32Array]";function ts(e,t,r){var n=e.constructor;switch(t){case Ho:return Qe(e);case Lo:case Do:return new n(+e);case Go:return Io(e,r);case Ko:case Wo:case Yo:case qo:case Xo:case Zo:case Jo:case Qo:case es:return Po(e,r);case No:return new n;case Bo:case ko:return new n(e);case Vo:return Mo(e);case Uo:return new n;case zo:return Ro(e)}}var Nt=Object.create,rs=function(){function e(){}return function(t){if(!de(t))return{};if(Nt)return Nt(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();const ns=rs;function as(e){return typeof e.constructor=="function"&&!Ye(e)?ns(Ke(e)):{}}var is="[object Map]";function os(e){return q(e)&&Je(e)==is}var Bt=re&&re.isMap,ss=Bt?We(Bt):os;const cs=ss;var us="[object Set]";function ls(e){return q(e)&&Je(e)==us}var Vt=re&&re.isSet,fs=Vt?We(Vt):ls;const ds=fs;var ps=1,hs=2,gs=4,gr="[object Arguments]",vs="[object Array]",ys="[object Boolean]",bs="[object Date]",ms="[object Error]",vr="[object Function]",Ts="[object GeneratorFunction]",Ss="[object Map]",Es="[object Number]",yr="[object Object]",js="[object RegExp]",xs="[object Set]",_s="[object String]",As="[object Symbol]",$s="[object WeakMap]",ws="[object ArrayBuffer]",Cs="[object DataView]",Os="[object Float32Array]",Is="[object Float64Array]",Fs="[object Int8Array]",Ms="[object Int16Array]",Rs="[object Int32Array]",Ps="[object Uint8Array]",Ls="[object Uint8ClampedArray]",Ds="[object Uint16Array]",Ns="[object Uint32Array]",S={};S[gr]=S[vs]=S[ws]=S[Cs]=S[ys]=S[bs]=S[Os]=S[Is]=S[Fs]=S[Ms]=S[Rs]=S[Ss]=S[Es]=S[yr]=S[js]=S[xs]=S[_s]=S[As]=S[Ps]=S[Ls]=S[Ds]=S[Ns]=!0;S[ms]=S[vr]=S[$s]=!1;function ye(e,t,r,n,i,o){var s,h=t&ps,v=t&hs,b=t&gs;if(r&&(s=i?r(e,n,i,o):r(e)),s!==void 0)return s;if(!de(e))return e;var O=pe(e);if(O){if(s=Co(e),!h)return lr(e,s)}else{var w=Je(e),d=w==vr||w==Ts;if(ar(e))return io(e,h);if(w==yr||w==gr||d&&!i){if(s=v||d?{}:as(e),!h)return v?ho(e,no(s,e)):lo(e,Ji(s,e))}else{if(!S[w])return i?e:{};s=ts(e,w,h)}}o||(o=new ne);var _=o.get(e);if(_)return _;o.set(e,s),ds(e)?e.forEach(function($){s.add(ye($,t,r,$,e,o))}):cs(e)&&e.forEach(function($,A){s.set(A,ye($,t,r,A,e,o))});var I=b?v?vo:go:v?Xe:qe,F=O?void 0:I(e);return Xa(F||e,function($,A){F&&(A=$,$=e[A]),tr(s,A,ye($,t,r,A,e,o))}),s}var Bs=4;function Ut(e){return ye(e,Bs)}function br(e,t){for(var r=-1,n=e==null?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i}var Vs="[object Symbol]";function et(e){return typeof e=="symbol"||q(e)&&Y(e)==Vs}var Us="Expected a function";function tt(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(Us);var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var s=e.apply(this,n);return r.cache=o.set(i,s)||o,s};return r.cache=new(tt.Cache||k),r}tt.Cache=k;var ks=500;function zs(e){var t=tt(e,function(n){return r.size===ks&&r.clear(),n}),r=t.cache;return t}var Hs=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Gs=/\\(\\)?/g,Ks=zs(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Hs,function(r,n,i,o){t.push(i?o.replace(Gs,"$1"):n||r)}),t});const Ws=Ks;var Ys=1/0;function qs(e){if(typeof e=="string"||et(e))return e;var t=e+"";return t=="0"&&1/e==-Ys?"-0":t}var Xs=1/0,kt=U?U.prototype:void 0,zt=kt?kt.toString:void 0;function mr(e){if(typeof e=="string")return e;if(pe(e))return br(e,mr)+"";if(et(e))return zt?zt.call(e):"";var t=e+"";return t=="0"&&1/e==-Xs?"-0":t}function Zs(e){return e==null?"":mr(e)}function Tr(e){return pe(e)?br(e,qs):et(e)?[e]:lr(Ws(Zs(e)))}function j(){return j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},j.apply(this,arguments)}function te(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}var xe=f.createContext(void 0);xe.displayName="FormikContext";var Js=xe.Provider;xe.Consumer;function Sr(){var e=f.useContext(xe);return e||ea(!1),e}var P=function(t){return typeof t=="function"},_e=function(t){return t!==null&&typeof t=="object"},Qs=function(t){return String(Math.floor(Number(t)))===t},Pe=function(t){return Object.prototype.toString.call(t)==="[object String]"},ec=function(t){return f.Children.count(t)===0},Le=function(t){return _e(t)&&P(t.then)};function R(e,t,r,n){n===void 0&&(n=0);for(var i=Tr(t);e&&n<i.length;)e=e[i[n++]];return n!==i.length&&!e||e===void 0?r:e}function K(e,t,r){for(var n=Ut(e),i=n,o=0,s=Tr(t);o<s.length-1;o++){var h=s[o],v=R(e,s.slice(0,o+1));if(v&&(_e(v)||Array.isArray(v)))i=i[h]=Ut(v);else{var b=s[o+1];i=i[h]=Qs(b)&&Number(b)>=0?[]:{}}}return(o===0?e:i)[s[o]]===r?e:(r===void 0?delete i[s[o]]:i[s[o]]=r,o===0&&r===void 0&&delete n[s[o]],n)}function Er(e,t,r,n){r===void 0&&(r=new WeakMap),n===void 0&&(n={});for(var i=0,o=Object.keys(e);i<o.length;i++){var s=o[i],h=e[s];_e(h)?r.get(h)||(r.set(h,!0),n[s]=Array.isArray(h)?[]:{},Er(h,t,r,n[s])):n[s]=t}return n}function tc(e,t){switch(t.type){case"SET_VALUES":return j({},e,{values:t.payload});case"SET_TOUCHED":return j({},e,{touched:t.payload});case"SET_ERRORS":return H(e.errors,t.payload)?e:j({},e,{errors:t.payload});case"SET_STATUS":return j({},e,{status:t.payload});case"SET_ISSUBMITTING":return j({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return j({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return j({},e,{values:K(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return j({},e,{touched:K(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return j({},e,{errors:K(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return j({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return j({},e,{touched:Er(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return j({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return j({},e,{isSubmitting:!1});default:return e}}var z={},ge={};function rc(e){var t=e.validateOnChange,r=t===void 0?!0:t,n=e.validateOnBlur,i=n===void 0?!0:n,o=e.validateOnMount,s=o===void 0?!1:o,h=e.isInitialValid,v=e.enableReinitialize,b=v===void 0?!1:v,O=e.onSubmit,w=te(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),d=j({validateOnChange:r,validateOnBlur:i,validateOnMount:s,onSubmit:O},w),_=f.useRef(d.initialValues),I=f.useRef(d.initialErrors||z),F=f.useRef(d.initialTouched||ge),$=f.useRef(d.initialStatus),A=f.useRef(!1),M=f.useRef({});f.useEffect(function(){return A.current=!0,function(){A.current=!1}},[]);var ae=f.useState(0),ie=ae[1],J=f.useRef({values:d.initialValues,errors:d.initialErrors||z,touched:d.initialTouched||ge,status:d.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),y=J.current,m=f.useCallback(function(a){var c=J.current;J.current=tc(c,a),c!==J.current&&ie(function(l){return l+1})},[]),rt=f.useCallback(function(a,c){return new Promise(function(l,p){var g=d.validate(a,c);g==null?l(z):Le(g)?g.then(function(T){l(T||z)},function(T){p(T)}):l(g)})},[d.validate]),Ae=f.useCallback(function(a,c){var l=d.validationSchema,p=P(l)?l(c):l,g=c&&p.validateAt?p.validateAt(c,a):ic(a,p);return new Promise(function(T,C){g.then(function(){T(z)},function(B){B.name==="ValidationError"?T(ac(B)):C(B)})})},[d.validationSchema]),nt=f.useCallback(function(a,c){return new Promise(function(l){return l(M.current[a].validate(c))})},[]),at=f.useCallback(function(a){var c=Object.keys(M.current).filter(function(p){return P(M.current[p].validate)}),l=c.length>0?c.map(function(p){return nt(p,R(a,p))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(l).then(function(p){return p.reduce(function(g,T,C){return T==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||T&&(g=K(g,c[C],T)),g},{})})},[nt]),xr=f.useCallback(function(a){return Promise.all([at(a),d.validationSchema?Ae(a):{},d.validate?rt(a):{}]).then(function(c){var l=c[0],p=c[1],g=c[2],T=Ne.all([l,p,g],{arrayMerge:oc});return T})},[d.validate,d.validationSchema,at,rt,Ae]),D=L(function(a){return a===void 0&&(a=y.values),m({type:"SET_ISVALIDATING",payload:!0}),xr(a).then(function(c){return A.current&&(m({type:"SET_ISVALIDATING",payload:!1}),m({type:"SET_ERRORS",payload:c})),c})});f.useEffect(function(){s&&A.current===!0&&H(_.current,d.initialValues)&&D(_.current)},[s,D]);var oe=f.useCallback(function(a){var c=a&&a.values?a.values:_.current,l=a&&a.errors?a.errors:I.current?I.current:d.initialErrors||{},p=a&&a.touched?a.touched:F.current?F.current:d.initialTouched||{},g=a&&a.status?a.status:$.current?$.current:d.initialStatus;_.current=c,I.current=l,F.current=p,$.current=g;var T=function(){m({type:"RESET_FORM",payload:{isSubmitting:!!a&&!!a.isSubmitting,errors:l,touched:p,status:g,values:c,isValidating:!!a&&!!a.isValidating,submitCount:a&&a.submitCount&&typeof a.submitCount=="number"?a.submitCount:0}})};if(d.onReset){var C=d.onReset(y.values,ht);Le(C)?C.then(T):T()}else T()},[d.initialErrors,d.initialStatus,d.initialTouched,d.onReset]);f.useEffect(function(){A.current===!0&&!H(_.current,d.initialValues)&&b&&(_.current=d.initialValues,oe(),s&&D(_.current))},[b,d.initialValues,oe,s,D]),f.useEffect(function(){b&&A.current===!0&&!H(I.current,d.initialErrors)&&(I.current=d.initialErrors||z,m({type:"SET_ERRORS",payload:d.initialErrors||z}))},[b,d.initialErrors]),f.useEffect(function(){b&&A.current===!0&&!H(F.current,d.initialTouched)&&(F.current=d.initialTouched||ge,m({type:"SET_TOUCHED",payload:d.initialTouched||ge}))},[b,d.initialTouched]),f.useEffect(function(){b&&A.current===!0&&!H($.current,d.initialStatus)&&($.current=d.initialStatus,m({type:"SET_STATUS",payload:d.initialStatus}))},[b,d.initialStatus,d.initialTouched]);var it=L(function(a){if(M.current[a]&&P(M.current[a].validate)){var c=R(y.values,a),l=M.current[a].validate(c);return Le(l)?(m({type:"SET_ISVALIDATING",payload:!0}),l.then(function(p){return p}).then(function(p){m({type:"SET_FIELD_ERROR",payload:{field:a,value:p}}),m({type:"SET_ISVALIDATING",payload:!1})})):(m({type:"SET_FIELD_ERROR",payload:{field:a,value:l}}),Promise.resolve(l))}else if(d.validationSchema)return m({type:"SET_ISVALIDATING",payload:!0}),Ae(y.values,a).then(function(p){return p}).then(function(p){m({type:"SET_FIELD_ERROR",payload:{field:a,value:R(p,a)}}),m({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),_r=f.useCallback(function(a,c){var l=c.validate;M.current[a]={validate:l}},[]),Ar=f.useCallback(function(a){delete M.current[a]},[]),ot=L(function(a,c){m({type:"SET_TOUCHED",payload:a});var l=c===void 0?i:c;return l?D(y.values):Promise.resolve()}),st=f.useCallback(function(a){m({type:"SET_ERRORS",payload:a})},[]),ct=L(function(a,c){var l=P(a)?a(y.values):a;m({type:"SET_VALUES",payload:l});var p=c===void 0?r:c;return p?D(l):Promise.resolve()}),he=f.useCallback(function(a,c){m({type:"SET_FIELD_ERROR",payload:{field:a,value:c}})},[]),Q=L(function(a,c,l){m({type:"SET_FIELD_VALUE",payload:{field:a,value:c}});var p=l===void 0?r:l;return p?D(K(y.values,a,c)):Promise.resolve()}),ut=f.useCallback(function(a,c){var l=c,p=a,g;if(!Pe(a)){a.persist&&a.persist();var T=a.target?a.target:a.currentTarget,C=T.type,B=T.name,Ie=T.id,Fe=T.value,Pr=T.checked,hc=T.outerHTML,gt=T.options,Lr=T.multiple;l=c||B||Ie,p=/number|range/.test(C)?(g=parseFloat(Fe),isNaN(g)?"":g):/checkbox/.test(C)?cc(R(y.values,l),Pr,Fe):gt&&Lr?sc(gt):Fe}l&&Q(l,p)},[Q,y.values]),$e=L(function(a){if(Pe(a))return function(c){return ut(c,a)};ut(a)}),ee=L(function(a,c,l){c===void 0&&(c=!0),m({type:"SET_FIELD_TOUCHED",payload:{field:a,value:c}});var p=l===void 0?i:l;return p?D(y.values):Promise.resolve()}),lt=f.useCallback(function(a,c){a.persist&&a.persist();var l=a.target,p=l.name,g=l.id,T=l.outerHTML,C=c||p||g;ee(C,!0)},[ee]),we=L(function(a){if(Pe(a))return function(c){return lt(c,a)};lt(a)}),ft=f.useCallback(function(a){P(a)?m({type:"SET_FORMIK_STATE",payload:a}):m({type:"SET_FORMIK_STATE",payload:function(){return a}})},[]),dt=f.useCallback(function(a){m({type:"SET_STATUS",payload:a})},[]),pt=f.useCallback(function(a){m({type:"SET_ISSUBMITTING",payload:a})},[]),Ce=L(function(){return m({type:"SUBMIT_ATTEMPT"}),D().then(function(a){var c=a instanceof Error,l=!c&&Object.keys(a).length===0;if(l){var p;try{if(p=wr(),p===void 0)return}catch(g){throw g}return Promise.resolve(p).then(function(g){return A.current&&m({type:"SUBMIT_SUCCESS"}),g}).catch(function(g){if(A.current)throw m({type:"SUBMIT_FAILURE"}),g})}else if(A.current&&(m({type:"SUBMIT_FAILURE"}),c))throw a})}),$r=L(function(a){a&&a.preventDefault&&P(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&P(a.stopPropagation)&&a.stopPropagation(),Ce().catch(function(c){console.warn("Warning: An unhandled error was caught from submitForm()",c)})}),ht={resetForm:oe,validateForm:D,validateField:it,setErrors:st,setFieldError:he,setFieldTouched:ee,setFieldValue:Q,setStatus:dt,setSubmitting:pt,setTouched:ot,setValues:ct,setFormikState:ft,submitForm:Ce},wr=L(function(){return O(y.values,ht)}),Cr=L(function(a){a&&a.preventDefault&&P(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&P(a.stopPropagation)&&a.stopPropagation(),oe()}),Or=f.useCallback(function(a){return{value:R(y.values,a),error:R(y.errors,a),touched:!!R(y.touched,a),initialValue:R(_.current,a),initialTouched:!!R(F.current,a),initialError:R(I.current,a)}},[y.errors,y.touched,y.values]),Ir=f.useCallback(function(a){return{setValue:function(l,p){return Q(a,l,p)},setTouched:function(l,p){return ee(a,l,p)},setError:function(l){return he(a,l)}}},[Q,ee,he]),Fr=f.useCallback(function(a){var c=_e(a),l=c?a.name:a,p=R(y.values,l),g={name:l,value:p,onChange:$e,onBlur:we};if(c){var T=a.type,C=a.value,B=a.as,Ie=a.multiple;T==="checkbox"?C===void 0?g.checked=!!p:(g.checked=!!(Array.isArray(p)&&~p.indexOf(C)),g.value=C):T==="radio"?(g.checked=p===C,g.value=C):B==="select"&&Ie&&(g.value=g.value||[],g.multiple=!0)}return g},[we,$e,y.values]),Oe=f.useMemo(function(){return!H(_.current,y.values)},[_.current,y.values]),Mr=f.useMemo(function(){return typeof h<"u"?Oe?y.errors&&Object.keys(y.errors).length===0:h!==!1&&P(h)?h(d):h:y.errors&&Object.keys(y.errors).length===0},[h,Oe,y.errors,d]),Rr=j({},y,{initialValues:_.current,initialErrors:I.current,initialTouched:F.current,initialStatus:$.current,handleBlur:we,handleChange:$e,handleReset:Cr,handleSubmit:$r,resetForm:oe,setErrors:st,setFormikState:ft,setFieldTouched:ee,setFieldValue:Q,setFieldError:he,setStatus:dt,setSubmitting:pt,setTouched:ot,setValues:ct,submitForm:Ce,validateForm:D,validateField:it,isValid:Mr,dirty:Oe,unregisterField:Ar,registerField:_r,getFieldProps:Fr,getFieldMeta:Or,getFieldHelpers:Ir,validateOnBlur:i,validateOnChange:r,validateOnMount:s});return Rr}function nc(e){var t=rc(e),r=e.component,n=e.children,i=e.render,o=e.innerRef;return f.useImperativeHandle(o,function(){return t}),f.createElement(Js,{value:t},r?f.createElement(r,t):i?i(t):n?P(n)?n(t):ec(n)?null:f.Children.only(n):null)}function ac(e){var t={};if(e.inner){if(e.inner.length===0)return K(t,e.path,e.message);for(var i=e.inner,r=Array.isArray(i),n=0,i=r?i:i[Symbol.iterator]();;){var o;if(r){if(n>=i.length)break;o=i[n++]}else{if(n=i.next(),n.done)break;o=n.value}var s=o;R(t,s.path)||(t=K(t,s.path,s.message))}}return t}function ic(e,t,r,n){r===void 0&&(r=!1);var i=He(e);return t[r?"validateSync":"validate"](i,{abortEarly:!1,context:n||i})}function He(e){var t=Array.isArray(e)?[]:{};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=String(r);Array.isArray(e[n])===!0?t[n]=e[n].map(function(i){return Array.isArray(i)===!0||yt(i)?He(i):i!==""?i:void 0}):yt(e[n])?t[n]=He(e[n]):t[n]=e[n]!==""?e[n]:void 0}return t}function oc(e,t,r){var n=e.slice();return t.forEach(function(o,s){if(typeof n[s]>"u"){var h=r.clone!==!1,v=h&&r.isMergeableObject(o);n[s]=v?Ne(Array.isArray(o)?[]:{},o,r):o}else r.isMergeableObject(o)?n[s]=Ne(e[s],o,r):e.indexOf(o)===-1&&n.push(o)}),n}function sc(e){return Array.from(e).filter(function(t){return t.selected}).map(function(t){return t.value})}function cc(e,t,r){if(typeof e=="boolean")return!!t;var n=[],i=!1,o=-1;if(Array.isArray(e))n=e,o=e.indexOf(r),i=o>=0;else if(!r||r=="true"||r=="false")return!!t;return t&&r&&!i?n.concat(r):i?n.slice(0,o).concat(n.slice(o+1)):n}var uc=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?f.useLayoutEffect:f.useEffect;function L(e){var t=f.useRef(e);return uc(function(){t.current=e}),f.useCallback(function(){for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return t.current.apply(void 0,n)},[])}function Te(e){var t=e.validate,r=e.name,n=e.render,i=e.children,o=e.as,s=e.component,h=e.className,v=te(e,["validate","name","render","children","as","component","className"]),b=Sr(),O=te(b,["validate","validationSchema"]),w=O.registerField,d=O.unregisterField;f.useEffect(function(){return w(r,{validate:t}),function(){d(r)}},[w,d,r,t]);var _=O.getFieldProps(j({name:r},v)),I=O.getFieldMeta(r),F={field:_,form:O};if(n)return n(j({},F,{meta:I}));if(P(i))return i(j({},F,{meta:I}));if(s){if(typeof s=="string"){var $=v.innerRef,A=te(v,["innerRef"]);return f.createElement(s,j({ref:$},_,A,{className:h}),i)}return f.createElement(s,j({field:_,form:O},v,{className:h}),i)}var M=o||"input";if(typeof M=="string"){var ae=v.innerRef,ie=te(v,["innerRef"]);return f.createElement(M,j({ref:ae},_,ie,{className:h}),i)}return f.createElement(M,j({},_,v,{className:h}),i)}var jr=f.forwardRef(function(e,t){var r=e.action,n=te(e,["action"]),i=r??"#",o=Sr(),s=o.handleReset,h=o.handleSubmit;return f.createElement("form",j({onSubmit:h,ref:t,onReset:s,action:i},n))});jr.displayName="Form";const lc=x.section`
  margin-bottom: 50px;
`,fc=x(jr)`
  display: flex;
  justify-content: center;
  align-items: end;
  margin-bottom: 50px;

  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: calc(18 / 14); /* 128.571% */
  color: #8a8a89;

  & label {
    margin-bottom: 8px;
  }

  & .placeholder {
    display: none;
  }
`,De=x.div`
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-right: 18px;
  }
`;x(Te)`
  padding-block: 14px;
  padding-right: 89px;
  padding-left: 18px;

  font-family: Manrope;
  font-size: 18px;
  font-weight: 500;
  line-height: calc(20 / 18); /* 111.111% */

  color: #121417;
  background-color: #f7f7fb;
  border-radius: 14px;
  border: none;
  outline: none;

  & .placeholder {
    display: none;
  }
`;const Ht=x(Te)`
  padding-block: 14px;
  padding-right: 41px;
  padding-left: 24px;

  font-family: Manrope;
  font-size: 18px;
  font-weight: 500;
  line-height: calc(20 / 18); /* 111.111% */

  color: #121417;
  background-color: #f7f7fb;
  border-radius: 14px;
  border: none;
  outline: none;

  & .placeholder {
    display: none;
  }
`,dc=["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Chrysler","Kia","Land"],pc=({page:e})=>{const t=Ge(),r={make:"",price:"",mileageFrom:"",mileageTo:""},n=zr(30,500,10),i=async o=>{t(Kt({page:e,...o}))};return u.jsx(lc,{children:u.jsx(nc,{initialValues:r,onSubmit:i,children:({isSubmitting:o})=>u.jsxs(fc,{children:[u.jsxs(De,{children:[u.jsx("label",{htmlFor:"",children:"Car brand"}),u.jsxs(Te,{name:"make",as:"select",children:[u.jsx("option",{value:"",disabled:!0,className:"placeholder",children:"Enter the text"}),dc.map(s=>u.jsx("option",{value:s,children:s},s))]})]}),u.jsxs(De,{children:[u.jsx("label",{htmlFor:"price",children:"Price/ 1 hour"}),u.jsxs(Te,{name:"price",as:"select",placeholder:"To $",children:[u.jsx("option",{value:"",disabled:!0,className:"placeholder",children:"To $"}),n.map(s=>u.jsx("option",{value:s,children:s},s))]})]}),u.jsxs(De,{children:[u.jsx("p",{role:"label",children:"Сar mileage / km"}),u.jsxs("div",{children:[u.jsx(Ht,{name:"mileageFrom",placeholder:"From",type:"number"}),u.jsx(Ht,{name:"mileageTo",placeholder:"To",type:"number"})]})]}),u.jsx("button",{type:"submit",disabled:o,children:"Submit"})]})})})},vc=()=>{const e=Ge(),t=ve(Kr),r=ve(Yr),n=ve(qr),[i,o]=f.useState(1);f.useEffect(()=>{e(Kt({page:i}))},[i,e]);const s=!r&&!n&&t.length>0;return u.jsxs(u.Fragment,{children:[u.jsx(Zr,{$hidden:!0,children:"Catalog Page"}),u.jsx(pc,{page:i}),u.jsxs(Xr,{children:[t.length==0&&u.jsx("p",{style:{alignSelf:"center"},children:"Nothing found"}),u.jsx(Tn,{cars:t}),s&&u.jsx(En,{onClick:()=>o(i+1)})]})]})};export{vc as default};
