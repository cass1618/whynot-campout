const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Survey-B2RMosrG.js","assets/Survey-Dv-9iP_2.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ch(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const ze={},Cs=[],tn=()=>{},Gw=()=>!1,wl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),uh=t=>t.startsWith("onUpdate:"),rt=Object.assign,hh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Qw=Object.prototype.hasOwnProperty,Re=(t,e)=>Qw.call(t,e),le=Array.isArray,Rs=t=>Il(t)==="[object Map]",c_=t=>Il(t)==="[object Set]",ce=t=>typeof t=="function",Xe=t=>typeof t=="string",Sr=t=>typeof t=="symbol",$e=t=>t!==null&&typeof t=="object",u_=t=>($e(t)||ce(t))&&ce(t.then)&&ce(t.catch),h_=Object.prototype.toString,Il=t=>h_.call(t),Yw=t=>Il(t).slice(8,-1),f_=t=>Il(t)==="[object Object]",fh=t=>Xe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,$i=ch(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Al=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Xw=/-(\w)/g,pn=Al(t=>t.replace(Xw,(e,n)=>n?n.toUpperCase():"")),Jw=/\B([A-Z])/g,is=Al(t=>t.replace(Jw,"-$1").toLowerCase()),Ro=Al(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ic=Al(t=>t?`on${Ro(t)}`:""),wr=(t,e)=>!Object.is(t,e),Ra=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},d_=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},iu=t=>{const e=parseFloat(t);return isNaN(e)?t:e},p_=t=>{const e=Xe(t)?Number(t):NaN;return isNaN(e)?t:e};let Ld;const m_=()=>Ld||(Ld=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function dh(t){if(le(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Xe(r)?n0(r):dh(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Xe(t)||$e(t))return t}const Zw=/;(?![^(]*\))/g,e0=/:([^]+)/,t0=/\/\*[^]*?\*\//g;function n0(t){const e={};return t.replace(t0,"").split(Zw).forEach(n=>{if(n){const r=n.split(e0);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ph(t){let e="";if(Xe(t))e=t;else if(le(t))for(let n=0;n<t.length;n++){const r=ph(t[n]);r&&(e+=r+" ")}else if($e(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const r0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",s0=ch(r0);function g_(t){return!!t||t===""}const __=t=>!!(t&&t.__v_isRef===!0),i0=t=>Xe(t)?t:t==null?"":le(t)||$e(t)&&(t.toString===h_||!ce(t.toString))?__(t)?i0(t.value):JSON.stringify(t,y_,2):String(t),y_=(t,e)=>__(e)?y_(t,e.value):Rs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ac(r,i)+" =>"]=s,n),{})}:c_(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ac(n))}:Sr(e)?Ac(e):$e(e)&&!le(e)&&!f_(e)?String(e):e,Ac=(t,e="")=>{var n;return Sr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ht;class v_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ht,!e&&Ht&&(this.index=(Ht.scopes||(Ht.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ht;try{return Ht=this,e()}finally{Ht=n}}}on(){Ht=this}off(){Ht=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function E_(t){return new v_(t)}function o0(t,e=Ht){e&&e.active&&e.effects.push(t)}function a0(){return Ht}function l0(t){Ht&&Ht.cleanups.push(t)}let Kr;class mh{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,o0(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Pr();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(c0(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),kr()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=pr,n=Kr;try{return pr=!0,Kr=this,this._runnings++,Vd(this),this.fn()}finally{Fd(this),this._runnings--,Kr=n,pr=e}}stop(){this.active&&(Vd(this),Fd(this),this.onStop&&this.onStop(),this.active=!1)}}function c0(t){return t.value}function Vd(t){t._trackId++,t._depsLength=0}function Fd(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)T_(t.deps[e],t);t.deps.length=t._depsLength}}function T_(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let pr=!0,ou=0;const w_=[];function Pr(){w_.push(pr),pr=!1}function kr(){const t=w_.pop();pr=t===void 0?!0:t}function gh(){ou++}function _h(){for(ou--;!ou&&au.length;)au.shift()()}function I_(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&T_(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const au=[];function A_(t,e,n){gh();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&au.push(r.scheduler)))}_h()}const b_=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Ua=new WeakMap,zr=Symbol(""),lu=Symbol("");function Ut(t,e,n){if(pr&&Kr){let r=Ua.get(t);r||Ua.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=b_(()=>r.delete(n))),I_(Kr,s)}}function Hn(t,e,n,r,s,i){const o=Ua.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&le(t)){const c=Number(r);o.forEach((u,h)=>{(h==="length"||!Sr(h)&&h>=c)&&l.push(u)})}else switch(n!==void 0&&l.push(o.get(n)),e){case"add":le(t)?fh(n)&&l.push(o.get("length")):(l.push(o.get(zr)),Rs(t)&&l.push(o.get(lu)));break;case"delete":le(t)||(l.push(o.get(zr)),Rs(t)&&l.push(o.get(lu)));break;case"set":Rs(t)&&l.push(o.get(zr));break}gh();for(const c of l)c&&A_(c,4);_h()}function u0(t,e){const n=Ua.get(t);return n&&n.get(e)}const h0=ch("__proto__,__v_isRef,__isVue"),C_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Sr)),Ud=f0();function f0(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=be(this);for(let i=0,o=this.length;i<o;i++)Ut(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(be)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Pr(),gh();const r=be(this)[e].apply(this,n);return _h(),kr(),r}}),t}function d0(t){Sr(t)||(t=String(t));const e=be(this);return Ut(e,"has",t),e.hasOwnProperty(t)}class R_{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?C0:N_:i?k_:P_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=le(e);if(!s){if(o&&Re(Ud,n))return Reflect.get(Ud,n,r);if(n==="hasOwnProperty")return d0}const l=Reflect.get(e,n,r);return(Sr(n)?C_.has(n):h0(n))||(s||Ut(e,"get",n),i)?l:St(l)?o&&fh(n)?l:l.value:$e(l)?s?Cl(l):qt(l):l}}class S_ extends R_{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Yr(i);if(!Ls(r)&&!Yr(r)&&(i=be(i),r=be(r)),!le(e)&&St(i)&&!St(r))return c?!1:(i.value=r,!0)}const o=le(e)&&fh(n)?Number(n)<e.length:Re(e,n),l=Reflect.set(e,n,r,s);return e===be(s)&&(o?wr(r,i)&&Hn(e,"set",n,r):Hn(e,"add",n,r)),l}deleteProperty(e,n){const r=Re(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Hn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Sr(n)||!C_.has(n))&&Ut(e,"has",n),r}ownKeys(e){return Ut(e,"iterate",le(e)?"length":zr),Reflect.ownKeys(e)}}class p0 extends R_{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const m0=new S_,g0=new p0,_0=new S_(!0);const yh=t=>t,bl=t=>Reflect.getPrototypeOf(t);function aa(t,e,n=!1,r=!1){t=t.__v_raw;const s=be(t),i=be(e);n||(wr(e,i)&&Ut(s,"get",e),Ut(s,"get",i));const{has:o}=bl(s),l=r?yh:n?Th:io;if(o.call(s,e))return l(t.get(e));if(o.call(s,i))return l(t.get(i));t!==s&&t.get(e)}function la(t,e=!1){const n=this.__v_raw,r=be(n),s=be(t);return e||(wr(t,s)&&Ut(r,"has",t),Ut(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function ca(t,e=!1){return t=t.__v_raw,!e&&Ut(be(t),"iterate",zr),Reflect.get(t,"size",t)}function Bd(t,e=!1){!e&&!Ls(t)&&!Yr(t)&&(t=be(t));const n=be(this);return bl(n).has.call(n,t)||(n.add(t),Hn(n,"add",t,t)),this}function $d(t,e,n=!1){!n&&!Ls(e)&&!Yr(e)&&(e=be(e));const r=be(this),{has:s,get:i}=bl(r);let o=s.call(r,t);o||(t=be(t),o=s.call(r,t));const l=i.call(r,t);return r.set(t,e),o?wr(e,l)&&Hn(r,"set",t,e):Hn(r,"add",t,e),this}function jd(t){const e=be(this),{has:n,get:r}=bl(e);let s=n.call(e,t);s||(t=be(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Hn(e,"delete",t,void 0),i}function Hd(){const t=be(this),e=t.size!==0,n=t.clear();return e&&Hn(t,"clear",void 0,void 0),n}function ua(t,e){return function(r,s){const i=this,o=i.__v_raw,l=be(o),c=e?yh:t?Th:io;return!t&&Ut(l,"iterate",zr),o.forEach((u,h)=>r.call(s,c(u),c(h),i))}}function ha(t,e,n){return function(...r){const s=this.__v_raw,i=be(s),o=Rs(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),h=n?yh:e?Th:io;return!e&&Ut(i,"iterate",c?lu:zr),{next(){const{value:d,done:m}=u.next();return m?{value:d,done:m}:{value:l?[h(d[0]),h(d[1])]:h(d),done:m}},[Symbol.iterator](){return this}}}}function nr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function y0(){const t={get(i){return aa(this,i)},get size(){return ca(this)},has:la,add:Bd,set:$d,delete:jd,clear:Hd,forEach:ua(!1,!1)},e={get(i){return aa(this,i,!1,!0)},get size(){return ca(this)},has:la,add(i){return Bd.call(this,i,!0)},set(i,o){return $d.call(this,i,o,!0)},delete:jd,clear:Hd,forEach:ua(!1,!0)},n={get(i){return aa(this,i,!0)},get size(){return ca(this,!0)},has(i){return la.call(this,i,!0)},add:nr("add"),set:nr("set"),delete:nr("delete"),clear:nr("clear"),forEach:ua(!0,!1)},r={get(i){return aa(this,i,!0,!0)},get size(){return ca(this,!0)},has(i){return la.call(this,i,!0)},add:nr("add"),set:nr("set"),delete:nr("delete"),clear:nr("clear"),forEach:ua(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ha(i,!1,!1),n[i]=ha(i,!0,!1),e[i]=ha(i,!1,!0),r[i]=ha(i,!0,!0)}),[t,n,e,r]}const[v0,E0,T0,w0]=y0();function vh(t,e){const n=e?t?w0:T0:t?E0:v0;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Re(n,s)&&s in r?n:r,s,i)}const I0={get:vh(!1,!1)},A0={get:vh(!1,!0)},b0={get:vh(!0,!1)};const P_=new WeakMap,k_=new WeakMap,N_=new WeakMap,C0=new WeakMap;function R0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function S0(t){return t.__v_skip||!Object.isExtensible(t)?0:R0(Yw(t))}function qt(t){return Yr(t)?t:Eh(t,!1,m0,I0,P_)}function D_(t){return Eh(t,!1,_0,A0,k_)}function Cl(t){return Eh(t,!0,g0,b0,N_)}function Eh(t,e,n,r,s){if(!$e(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=S0(t);if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function ji(t){return Yr(t)?ji(t.__v_raw):!!(t&&t.__v_isReactive)}function Yr(t){return!!(t&&t.__v_isReadonly)}function Ls(t){return!!(t&&t.__v_isShallow)}function O_(t){return t?!!t.__v_raw:!1}function be(t){const e=t&&t.__v_raw;return e?be(e):t}function M_(t){return Object.isExtensible(t)&&d_(t,"__v_skip",!0),t}const io=t=>$e(t)?qt(t):t,Th=t=>$e(t)?Cl(t):t;class x_{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new mh(()=>e(this._value),()=>Sa(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=be(this);return(!e._cacheable||e.effect.dirty)&&wr(e._value,e._value=e.effect.run())&&Sa(e,4),L_(e),e.effect._dirtyLevel>=2&&Sa(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function P0(t,e,n=!1){let r,s;const i=ce(t);return i?(r=t,s=tn):(r=t.get,s=t.set),new x_(r,s,i||!s,n)}function L_(t){var e;pr&&Kr&&(t=be(t),I_(Kr,(e=t.dep)!=null?e:t.dep=b_(()=>t.dep=void 0,t instanceof x_?t:void 0)))}function Sa(t,e=4,n,r){t=be(t);const s=t.dep;s&&A_(s,e)}function St(t){return!!(t&&t.__v_isRef===!0)}function Dt(t){return V_(t,!1)}function Rn(t){return V_(t,!0)}function V_(t,e){return St(t)?t:new k0(t,e)}class k0{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:be(e),this._value=n?e:io(e)}get value(){return L_(this),this._value}set value(e){const n=this.__v_isShallow||Ls(e)||Yr(e);e=n?e:be(e),wr(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=n?e:io(e),Sa(this,4))}}function Kt(t){return St(t)?t.value:t}function IL(t){return ce(t)?t():Kt(t)}const N0={get:(t,e,n)=>Kt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return St(s)&&!St(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function F_(t){return ji(t)?t:new Proxy(t,N0)}function U_(t){const e=le(t)?new Array(t.length):{};for(const n in t)e[n]=B_(t,n);return e}class D0{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return u0(be(this._object),this._key)}}class O0{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function AL(t,e,n){return St(t)?t:ce(t)?new O0(t):$e(t)&&arguments.length>1?B_(t,e,n):Dt(t)}function B_(t,e,n){const r=t[e];return St(r)?r:new D0(t,e,n)}/**
* @vue/runtime-core v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function mr(t,e,n,r){try{return r?t(...r):t()}catch(s){Zs(s,e,n)}}function rn(t,e,n,r){if(ce(t)){const s=mr(t,e,n,r);return s&&u_(s)&&s.catch(i=>{Zs(i,e,n)}),s}if(le(t)){const s=[];for(let i=0;i<t.length;i++)s.push(rn(t[i],e,n,r));return s}}function Zs(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const u=i.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,o,l)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Pr(),mr(c,null,10,[t,o,l]),kr();return}}M0(t,n,s,r)}function M0(t,e,n,r=!0){console.error(t)}let oo=!1,cu=!1;const bt=[];let In=0;const Ss=[];let ar=null,jr=0;const $_=Promise.resolve();let wh=null;function Ih(t){const e=wh||$_;return t?e.then(this?t.bind(this):t):e}function x0(t){let e=In+1,n=bt.length;for(;e<n;){const r=e+n>>>1,s=bt[r],i=ao(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function Rl(t){(!bt.length||!bt.includes(t,oo&&t.allowRecurse?In+1:In))&&(t.id==null?bt.push(t):bt.splice(x0(t.id),0,t),j_())}function j_(){!oo&&!cu&&(cu=!0,wh=$_.then(W_))}function L0(t){const e=bt.indexOf(t);e>In&&bt.splice(e,1)}function uu(t){le(t)?Ss.push(...t):(!ar||!ar.includes(t,t.allowRecurse?jr+1:jr))&&Ss.push(t),j_()}function Wd(t,e,n=oo?In+1:0){for(;n<bt.length;n++){const r=bt[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;bt.splice(n,1),n--,r()}}}function H_(t){if(Ss.length){const e=[...new Set(Ss)].sort((n,r)=>ao(n)-ao(r));if(Ss.length=0,ar){ar.push(...e);return}for(ar=e,jr=0;jr<ar.length;jr++){const n=ar[jr];n.active!==!1&&n()}ar=null,jr=0}}const ao=t=>t.id==null?1/0:t.id,V0=(t,e)=>{const n=ao(t)-ao(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function W_(t){cu=!1,oo=!0,bt.sort(V0);try{for(In=0;In<bt.length;In++){const e=bt[In];e&&e.active!==!1&&mr(e,e.i,e.i?15:14)}}finally{In=0,bt.length=0,H_(),oo=!1,wh=null,(bt.length||Ss.length)&&W_()}}let lt=null,Sl=null;function Ba(t){const e=lt;return lt=t,Sl=t&&t.type.__scopeId||null,e}function F0(t){Sl=t}function U0(){Sl=null}function Xr(t,e=lt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&rp(-1);const i=Ba(e);let o;try{o=t(...s)}finally{Ba(i),r._d&&rp(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function bL(t,e){if(lt===null)return t;const n=Ll(lt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=ze]=e[s];i&&(ce(i)&&(i={mounted:i,updated:i}),i.deep&&hr(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Lr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(Pr(),rn(c,n,8,[t.el,l,t,e]),kr())}}const lr=Symbol("_leaveCb"),fa=Symbol("_enterCb");function q_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Nl(()=>{t.isMounted=!0}),bh(()=>{t.isUnmounting=!0}),t}const Zt=[Function,Array],K_={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Zt,onEnter:Zt,onAfterEnter:Zt,onEnterCancelled:Zt,onBeforeLeave:Zt,onLeave:Zt,onAfterLeave:Zt,onLeaveCancelled:Zt,onBeforeAppear:Zt,onAppear:Zt,onAfterAppear:Zt,onAppearCancelled:Zt},z_=t=>{const e=t.subTree;return e.component?z_(e.component):e},B0={name:"BaseTransition",props:K_,setup(t,{slots:e}){const n=xl(),r=q_();return()=>{const s=e.default&&Ah(e.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const m of s)if(m.type!==Ct){i=m;break}}const o=be(t),{mode:l}=o;if(r.isLeaving)return bc(i);const c=qd(i);if(!c)return bc(i);let u=lo(c,o,r,n,m=>u=m);Vs(c,u);const h=n.subTree,d=h&&qd(h);if(d&&d.type!==Ct&&!An(c,d)&&z_(n).type!==Ct){const m=lo(d,o,r,n);if(Vs(d,m),l==="out-in"&&c.type!==Ct)return r.isLeaving=!0,m.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},bc(i);l==="in-out"&&c.type!==Ct&&(m.delayLeave=(g,E,S)=>{const P=G_(r,d);P[String(d.key)]=d,g[lr]=()=>{E(),g[lr]=void 0,delete u.delayedLeave},u.delayedLeave=S})}return i}}},$0=B0;function G_(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function lo(t,e,n,r,s){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:m,onLeave:g,onAfterLeave:E,onLeaveCancelled:S,onBeforeAppear:P,onAppear:V,onAfterAppear:M,onAppearCancelled:F}=e,Q=String(t.key),W=G_(n,t),O=(v,I)=>{v&&rn(v,r,9,I)},A=(v,I)=>{const R=I[1];O(v,I),le(v)?v.every(b=>b.length<=1)&&R():v.length<=1&&R()},y={mode:o,persisted:l,beforeEnter(v){let I=c;if(!n.isMounted)if(i)I=P||c;else return;v[lr]&&v[lr](!0);const R=W[Q];R&&An(t,R)&&R.el[lr]&&R.el[lr](),O(I,[v])},enter(v){let I=u,R=h,b=d;if(!n.isMounted)if(i)I=V||u,R=M||h,b=F||d;else return;let T=!1;const me=v[fa]=Ke=>{T||(T=!0,Ke?O(b,[v]):O(R,[v]),y.delayedLeave&&y.delayedLeave(),v[fa]=void 0)};I?A(I,[v,me]):me()},leave(v,I){const R=String(t.key);if(v[fa]&&v[fa](!0),n.isUnmounting)return I();O(m,[v]);let b=!1;const T=v[lr]=me=>{b||(b=!0,I(),me?O(S,[v]):O(E,[v]),v[lr]=void 0,W[R]===t&&delete W[R])};W[R]=t,g?A(g,[v,T]):T()},clone(v){const I=lo(v,e,n,r,s);return s&&s(I),I}};return y}function bc(t){if(So(t))return t=Ir(t),t.children=null,t}function qd(t){if(!So(t))return t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ce(n.default))return n.default()}}function Vs(t,e){t.shapeFlag&6&&t.component?Vs(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ah(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Lt?(o.patchFlag&128&&s++,r=r.concat(Ah(o.children,e,l))):(e||o.type!==Ct)&&r.push(l!=null?Ir(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Pl(t,e){return ce(t)?rt({name:t.name},e,{setup:t}):t}const Hi=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function j0(t){ce(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,timeout:i,suspensible:o=!0,onError:l}=t;let c=null,u,h=0;const d=()=>(h++,c=null,m()),m=()=>{let g;return c||(g=c=e().catch(E=>{if(E=E instanceof Error?E:new Error(String(E)),l)return new Promise((S,P)=>{l(E,()=>S(d()),()=>P(E),h+1)});throw E}).then(E=>g!==c&&c?c:(E&&(E.__esModule||E[Symbol.toStringTag]==="Module")&&(E=E.default),u=E,E)))};return Pl({name:"AsyncComponentWrapper",__asyncLoader:m,get __asyncResolved(){return u},setup(){const g=ot;if(u)return()=>Cc(u,g);const E=M=>{c=null,Zs(M,g,13,!r)};if(o&&g.suspense||No)return m().then(M=>()=>Cc(M,g)).catch(M=>(E(M),()=>r?pe(r,{error:M}):null));const S=Dt(!1),P=Dt(),V=Dt(!!s);return s&&setTimeout(()=>{V.value=!1},s),i!=null&&setTimeout(()=>{if(!S.value&&!P.value){const M=new Error(`Async component timed out after ${i}ms.`);E(M),P.value=M}},i),m().then(()=>{S.value=!0,g.parent&&So(g.parent.vnode)&&(g.parent.effect.dirty=!0,Rl(g.parent.update))}).catch(M=>{E(M),P.value=M}),()=>{if(S.value&&u)return Cc(u,g);if(P.value&&r)return pe(r,{error:P.value});if(n&&!V.value)return pe(n)}}})}function Cc(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=pe(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const So=t=>t.type.__isKeepAlive;function H0(t,e){Q_(t,"a",e)}function W0(t,e){Q_(t,"da",e)}function Q_(t,e,n=ot){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(kl(e,r,n),n){let s=n.parent;for(;s&&s.parent;)So(s.parent.vnode)&&q0(r,e,n,s),s=s.parent}}function q0(t,e,n,r){const s=kl(e,t,r,!0);X_(()=>{hh(r[e],s)},n)}function kl(t,e,n=ot,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Pr();const l=ko(n),c=rn(e,n,t,o);return l(),kr(),c});return r?s.unshift(i):s.push(i),i}}const Qn=t=>(e,n=ot)=>{(!No||t==="sp")&&kl(t,(...r)=>e(...r),n)},K0=Qn("bm"),Nl=Qn("m"),z0=Qn("bu"),Y_=Qn("u"),bh=Qn("bum"),X_=Qn("um"),G0=Qn("sp"),Q0=Qn("rtg"),Y0=Qn("rtc");function X0(t,e=ot){kl("ec",t,e)}const Ch="components",J0="directives";function Z0(t,e){return Rh(Ch,t,!0,e)||t}const eI=Symbol.for("v-ndc");function CL(t){return Xe(t)&&Rh(Ch,t,!1)||t}function RL(t){return Rh(J0,t)}function Rh(t,e,n=!0,r=!1){const s=lt||ot;if(s){const i=s.type;if(t===Ch){const l=QI(i,!1);if(l&&(l===e||l===pn(e)||l===Ro(pn(e))))return i}const o=Kd(s[t]||i[t],e)||Kd(s.appContext[t],e);return!o&&r?i:o}}function Kd(t,e){return t&&(t[e]||t[pn(e)]||t[Ro(pn(e))])}function SL(t,e,n,r){let s;const i=n;if(le(t)||Xe(t)){s=new Array(t.length);for(let o=0,l=t.length;o<l;o++)s[o]=e(t[o],o,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i)}else if($e(t))if(t[Symbol.iterator])s=Array.from(t,(o,l)=>e(o,l,void 0,i));else{const o=Object.keys(t);s=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];s[l]=e(t[u],u,l,i)}}else s=[];return s}function PL(t,e,n={},r,s){if(lt.isCE||lt.parent&&Hi(lt.parent)&&lt.parent.isCE)return pe("slot",n,r);let i=t[e];i&&i._c&&(i._d=!1),ei();const o=i&&J_(i(n)),l=Po(Lt,{key:(n.key||o&&o.key||`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return i&&i._c&&(i._d=!0),l}function J_(t){return t.some(e=>uo(e)?!(e.type===Ct||e.type===Lt&&!J_(e.children)):!0)?t:null}const hu=t=>t?wy(t)?Ll(t):hu(t.parent):null,Wi=rt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>hu(t.parent),$root:t=>hu(t.root),$emit:t=>t.emit,$options:t=>Sh(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Rl(t.update)}),$nextTick:t=>t.n||(t.n=Ih.bind(t.proxy)),$watch:t=>AI.bind(t)}),Rc=(t,e)=>t!==ze&&!t.__isScriptSetup&&Re(t,e),tI={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Rc(r,e))return o[e]=1,r[e];if(s!==ze&&Re(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Re(u,e))return o[e]=3,i[e];if(n!==ze&&Re(n,e))return o[e]=4,n[e];fu&&(o[e]=0)}}const h=Wi[e];let d,m;if(h)return e==="$attrs"&&Ut(t.attrs,"get",""),h(t);if((d=l.__cssModules)&&(d=d[e]))return d;if(n!==ze&&Re(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,Re(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Rc(s,e)?(s[e]=n,!0):r!==ze&&Re(r,e)?(r[e]=n,!0):Re(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==ze&&Re(t,o)||Rc(e,o)||(l=i[0])&&Re(l,o)||Re(r,o)||Re(Wi,o)||Re(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Re(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function zd(t){return le(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let fu=!0;function nI(t){const e=Sh(t),n=t.proxy,r=t.ctx;fu=!1,e.beforeCreate&&Gd(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:h,beforeMount:d,mounted:m,beforeUpdate:g,updated:E,activated:S,deactivated:P,beforeDestroy:V,beforeUnmount:M,destroyed:F,unmounted:Q,render:W,renderTracked:O,renderTriggered:A,errorCaptured:y,serverPrefetch:v,expose:I,inheritAttrs:R,components:b,directives:T,filters:me}=e;if(u&&rI(u,r,null),o)for(const ge in o){const _e=o[ge];ce(_e)&&(r[ge]=_e.bind(n))}if(s){const ge=s.call(n,n);$e(ge)&&(t.data=qt(ge))}if(fu=!0,i)for(const ge in i){const _e=i[ge],ut=ce(_e)?_e.bind(n,n):ce(_e.get)?_e.get.bind(n,n):tn,Bt=!ce(_e)&&ce(_e.set)?_e.set.bind(n):tn,Ot=ue({get:ut,set:Bt});Object.defineProperty(r,ge,{enumerable:!0,configurable:!0,get:()=>Ot.value,set:Me=>Ot.value=Me})}if(l)for(const ge in l)Z_(l[ge],r,n,ge);if(c){const ge=ce(c)?c.call(n):c;Reflect.ownKeys(ge).forEach(_e=>{gr(_e,ge[_e])})}h&&Gd(h,t,"c");function Ne(ge,_e){le(_e)?_e.forEach(ut=>ge(ut.bind(n))):_e&&ge(_e.bind(n))}if(Ne(K0,d),Ne(Nl,m),Ne(z0,g),Ne(Y_,E),Ne(H0,S),Ne(W0,P),Ne(X0,y),Ne(Y0,O),Ne(Q0,A),Ne(bh,M),Ne(X_,Q),Ne(G0,v),le(I))if(I.length){const ge=t.exposed||(t.exposed={});I.forEach(_e=>{Object.defineProperty(ge,_e,{get:()=>n[_e],set:ut=>n[_e]=ut})})}else t.exposed||(t.exposed={});W&&t.render===tn&&(t.render=W),R!=null&&(t.inheritAttrs=R),b&&(t.components=b),T&&(t.directives=T)}function rI(t,e,n=tn){le(t)&&(t=du(t));for(const r in t){const s=t[r];let i;$e(s)?"default"in s?i=ct(s.from||r,s.default,!0):i=ct(s.from||r):i=ct(s),St(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Gd(t,e,n){rn(le(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Z_(t,e,n,r){const s=r.includes(".")?py(n,r):()=>n[r];if(Xe(t)){const i=e[t];ce(i)&&fn(s,i)}else if(ce(t))fn(s,t.bind(n));else if($e(t))if(le(t))t.forEach(i=>Z_(i,e,n,r));else{const i=ce(t.handler)?t.handler.bind(n):e[t.handler];ce(i)&&fn(s,i,t)}}function Sh(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>$a(c,u,o,!0)),$a(c,e,o)),$e(e)&&i.set(e,c),c}function $a(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&$a(t,i,n,!0),s&&s.forEach(o=>$a(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=sI[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const sI={data:Qd,props:Yd,emits:Yd,methods:Oi,computed:Oi,beforeCreate:Nt,created:Nt,beforeMount:Nt,mounted:Nt,beforeUpdate:Nt,updated:Nt,beforeDestroy:Nt,beforeUnmount:Nt,destroyed:Nt,unmounted:Nt,activated:Nt,deactivated:Nt,errorCaptured:Nt,serverPrefetch:Nt,components:Oi,directives:Oi,watch:oI,provide:Qd,inject:iI};function Qd(t,e){return e?t?function(){return rt(ce(t)?t.call(this,this):t,ce(e)?e.call(this,this):e)}:e:t}function iI(t,e){return Oi(du(t),du(e))}function du(t){if(le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Nt(t,e){return t?[...new Set([].concat(t,e))]:e}function Oi(t,e){return t?rt(Object.create(null),t,e):e}function Yd(t,e){return t?le(t)&&le(e)?[...new Set([...t,...e])]:rt(Object.create(null),zd(t),zd(e??{})):e}function oI(t,e){if(!t)return e;if(!e)return t;const n=rt(Object.create(null),t);for(const r in e)n[r]=Nt(t[r],e[r]);return n}function ey(){return{app:null,config:{isNativeTag:Gw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let aI=0;function lI(t,e){return function(r,s=null){ce(r)||(r=rt({},r)),s!=null&&!$e(s)&&(s=null);const i=ey(),o=new WeakSet;let l=!1;const c=i.app={_uid:aI++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:XI,get config(){return i.config},set config(u){},use(u,...h){return o.has(u)||(u&&ce(u.install)?(o.add(u),u.install(c,...h)):ce(u)&&(o.add(u),u(c,...h))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,h){return h?(i.components[u]=h,c):i.components[u]},directive(u,h){return h?(i.directives[u]=h,c):i.directives[u]},mount(u,h,d){if(!l){const m=pe(r,s);return m.appContext=i,d===!0?d="svg":d===!1&&(d=void 0),h&&e?e(m,u):t(m,u,d),l=!0,c._container=u,u.__vue_app__=c,Ll(m.component)}},unmount(){l&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,h){return i.provides[u]=h,c},runWithContext(u){const h=Ps;Ps=c;try{return u()}finally{Ps=h}}};return c}}let Ps=null;function gr(t,e){if(ot){let n=ot.provides;const r=ot.parent&&ot.parent.provides;r===n&&(n=ot.provides=Object.create(r)),n[t]=e}}function ct(t,e,n=!1){const r=ot||lt;if(r||Ps){const s=Ps?Ps._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ce(e)?e.call(r&&r.proxy):e}}const ty={},ny=()=>Object.create(ty),ry=t=>Object.getPrototypeOf(t)===ty;function cI(t,e,n,r=!1){const s={},i=ny();t.propsDefaults=Object.create(null),sy(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:D_(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function uI(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=be(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let d=0;d<h.length;d++){let m=h[d];if(Ol(t.emitsOptions,m))continue;const g=e[m];if(c)if(Re(i,m))g!==i[m]&&(i[m]=g,u=!0);else{const E=pn(m);s[E]=pu(c,l,E,g,t,!1)}else g!==i[m]&&(i[m]=g,u=!0)}}}else{sy(t,e,s,i)&&(u=!0);let h;for(const d in l)(!e||!Re(e,d)&&((h=is(d))===d||!Re(e,h)))&&(c?n&&(n[d]!==void 0||n[h]!==void 0)&&(s[d]=pu(c,l,d,void 0,t,!0)):delete s[d]);if(i!==l)for(const d in i)(!e||!Re(e,d))&&(delete i[d],u=!0)}u&&Hn(t.attrs,"set","")}function sy(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if($i(c))continue;const u=e[c];let h;s&&Re(s,h=pn(c))?!i||!i.includes(h)?n[h]=u:(l||(l={}))[h]=u:Ol(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=be(n),u=l||ze;for(let h=0;h<i.length;h++){const d=i[h];n[d]=pu(s,c,d,u[d],t,!Re(u,d))}}return o}function pu(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Re(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ce(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const h=ko(s);r=u[n]=c.call(null,e),h()}}else r=c}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===is(n))&&(r=!0))}return r}const hI=new WeakMap;function iy(t,e,n=!1){const r=n?hI:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!ce(t)){const h=d=>{c=!0;const[m,g]=iy(d,e,!0);rt(o,m),g&&l.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!c)return $e(t)&&r.set(t,Cs),Cs;if(le(i))for(let h=0;h<i.length;h++){const d=pn(i[h]);Xd(d)&&(o[d]=ze)}else if(i)for(const h in i){const d=pn(h);if(Xd(d)){const m=i[h],g=o[d]=le(m)||ce(m)?{type:m}:rt({},m),E=g.type;let S=!1,P=!0;if(le(E))for(let V=0;V<E.length;++V){const M=E[V],F=ce(M)&&M.name;if(F==="Boolean"){S=!0;break}else F==="String"&&(P=!1)}else S=ce(E)&&E.name==="Boolean";g[0]=S,g[1]=P,(S||Re(g,"default"))&&l.push(d)}}const u=[o,l];return $e(t)&&r.set(t,u),u}function Xd(t){return t[0]!=="$"&&!$i(t)}const oy=t=>t[0]==="_"||t==="$stable",Ph=t=>le(t)?t.map(an):[an(t)],fI=(t,e,n)=>{if(e._n)return e;const r=Xr((...s)=>Ph(e(...s)),n);return r._c=!1,r},ay=(t,e,n)=>{const r=t._ctx;for(const s in t){if(oy(s))continue;const i=t[s];if(ce(i))e[s]=fI(s,i,r);else if(i!=null){const o=Ph(i);e[s]=()=>o}}},ly=(t,e)=>{const n=Ph(e);t.slots.default=()=>n},cy=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},dI=(t,e,n)=>{const r=t.slots=ny();if(t.vnode.shapeFlag&32){const s=e._;s?(cy(r,e,n),n&&d_(r,"_",s,!0)):ay(e,r)}else e&&ly(t,e)},pI=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ze;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:cy(s,e,n):(i=!e.$stable,ay(e,s)),o=e}else e&&(ly(t,e),o={default:1});if(i)for(const l in s)!oy(l)&&o[l]==null&&delete s[l]};function mu(t,e,n,r,s=!1){if(le(t)){t.forEach((m,g)=>mu(m,e&&(le(e)?e[g]:e),n,r,s));return}if(Hi(r)&&!s)return;const i=r.shapeFlag&4?Ll(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,h=l.refs===ze?l.refs={}:l.refs,d=l.setupState;if(u!=null&&u!==c&&(Xe(u)?(h[u]=null,Re(d,u)&&(d[u]=null)):St(u)&&(u.value=null)),ce(c))mr(c,l,12,[o,h]);else{const m=Xe(c),g=St(c);if(m||g){const E=()=>{if(t.f){const S=m?Re(d,c)?d[c]:h[c]:c.value;s?le(S)&&hh(S,i):le(S)?S.includes(i)||S.push(i):m?(h[c]=[i],Re(d,c)&&(d[c]=h[c])):(c.value=[i],t.k&&(h[t.k]=c.value))}else m?(h[c]=o,Re(d,c)&&(d[c]=o)):g&&(c.value=o,t.k&&(h[t.k]=o))};o?(E.id=-1,xt(E,n)):E()}}}const uy=Symbol("_vte"),mI=t=>t.__isTeleport,qi=t=>t&&(t.disabled||t.disabled===""),Jd=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Zd=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,gu=(t,e)=>{const n=t&&t.to;return Xe(n)?e?e(n):null:n},gI={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,l,c,u){const{mc:h,pc:d,pbc:m,o:{insert:g,querySelector:E,createText:S,createComment:P}}=u,V=qi(e.props);let{shapeFlag:M,children:F,dynamicChildren:Q}=e;if(t==null){const W=e.el=S(""),O=e.anchor=S("");g(W,n,r),g(O,n,r);const A=e.target=gu(e.props,E),y=fy(A,e,S,g);A&&(o==="svg"||Jd(A)?o="svg":(o==="mathml"||Zd(A))&&(o="mathml"));const v=(I,R)=>{M&16&&h(F,I,R,s,i,o,l,c)};V?v(n,O):A&&v(A,y)}else{e.el=t.el,e.targetStart=t.targetStart;const W=e.anchor=t.anchor,O=e.target=t.target,A=e.targetAnchor=t.targetAnchor,y=qi(t.props),v=y?n:O,I=y?W:A;if(o==="svg"||Jd(O)?o="svg":(o==="mathml"||Zd(O))&&(o="mathml"),Q?(m(t.dynamicChildren,Q,v,s,i,o,l),kh(t,e,!0)):c||d(t,e,v,I,s,i,o,l,!1),V)y?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):da(e,n,W,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const R=e.target=gu(e.props,E);R&&da(e,R,null,u,0)}else y&&da(e,O,A,u,1)}hy(e)},remove(t,e,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:l,anchor:c,targetStart:u,targetAnchor:h,target:d,props:m}=t;if(d&&(s(u),s(h)),i&&s(c),o&16){const g=i||!qi(m);for(let E=0;E<l.length;E++){const S=l[E];r(S,e,n,g,!!S.dynamicChildren)}}},move:da,hydrate:_I};function da(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:l,shapeFlag:c,children:u,props:h}=t,d=i===2;if(d&&r(o,e,n),(!d||qi(h))&&c&16)for(let m=0;m<u.length;m++)s(u[m],e,n,2);d&&r(l,e,n)}function _I(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:l,querySelector:c,insert:u,createText:h}},d){const m=e.target=gu(e.props,c);if(m){const g=m._lpa||m.firstChild;if(e.shapeFlag&16)if(qi(e.props))e.anchor=d(o(t),e,l(t),n,r,s,i),e.targetStart=g,e.targetAnchor=g&&o(g);else{e.anchor=o(t);let E=g;for(;E;){if(E&&E.nodeType===8){if(E.data==="teleport start anchor")e.targetStart=E;else if(E.data==="teleport anchor"){e.targetAnchor=E,m._lpa=e.targetAnchor&&o(e.targetAnchor);break}}E=o(E)}e.targetAnchor||fy(m,e,h,u),d(g&&o(g),e,m,n,r,s,i)}hy(e)}return e.anchor&&o(e.anchor)}const kL=gI;function hy(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n&&n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}function fy(t,e,n,r){const s=e.targetStart=n(""),i=e.targetAnchor=n("");return s[uy]=i,t&&(r(s,t),r(i,t)),i}const xt=FI;function yI(t){return vI(t)}function vI(t,e){const n=m_();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:h,parentNode:d,nextSibling:m,setScopeId:g=tn,insertStaticContent:E}=t,S=(w,C,N,U=null,L=null,H=null,X=void 0,q=null,z=!!C.dynamicChildren)=>{if(w===C)return;w&&!An(w,C)&&(U=x(w),Me(w,L,H,!0),w=null),C.patchFlag===-2&&(z=!1,C.dynamicChildren=null);const{type:$,ref:Z,shapeFlag:se}=C;switch($){case Ml:P(w,C,N,U);break;case Ct:V(w,C,N,U);break;case kc:w==null&&M(C,N,U,X);break;case Lt:b(w,C,N,U,L,H,X,q,z);break;default:se&1?W(w,C,N,U,L,H,X,q,z):se&6?T(w,C,N,U,L,H,X,q,z):(se&64||se&128)&&$.process(w,C,N,U,L,H,X,q,z,ee)}Z!=null&&L&&mu(Z,w&&w.ref,H,C||w,!C)},P=(w,C,N,U)=>{if(w==null)r(C.el=l(C.children),N,U);else{const L=C.el=w.el;C.children!==w.children&&u(L,C.children)}},V=(w,C,N,U)=>{w==null?r(C.el=c(C.children||""),N,U):C.el=w.el},M=(w,C,N,U)=>{[w.el,w.anchor]=E(w.children,C,N,U,w.el,w.anchor)},F=({el:w,anchor:C},N,U)=>{let L;for(;w&&w!==C;)L=m(w),r(w,N,U),w=L;r(C,N,U)},Q=({el:w,anchor:C})=>{let N;for(;w&&w!==C;)N=m(w),s(w),w=N;s(C)},W=(w,C,N,U,L,H,X,q,z)=>{C.type==="svg"?X="svg":C.type==="math"&&(X="mathml"),w==null?O(C,N,U,L,H,X,q,z):v(w,C,L,H,X,q,z)},O=(w,C,N,U,L,H,X,q)=>{let z,$;const{props:Z,shapeFlag:se,transition:re,dirs:ne}=w;if(z=w.el=o(w.type,H,Z&&Z.is,Z),se&8?h(z,w.children):se&16&&y(w.children,z,null,U,L,Sc(w,H),X,q),ne&&Lr(w,null,U,"created"),A(z,w,w.scopeId,X,U),Z){for(const De in Z)De!=="value"&&!$i(De)&&i(z,De,null,Z[De],H,U);"value"in Z&&i(z,"value",null,Z.value,H),($=Z.onVnodeBeforeMount)&&Tn($,U,w)}ne&&Lr(w,null,U,"beforeMount");const ie=EI(L,re);ie&&re.beforeEnter(z),r(z,C,N),(($=Z&&Z.onVnodeMounted)||ie||ne)&&xt(()=>{$&&Tn($,U,w),ie&&re.enter(z),ne&&Lr(w,null,U,"mounted")},L)},A=(w,C,N,U,L)=>{if(N&&g(w,N),U)for(let H=0;H<U.length;H++)g(w,U[H]);if(L){let H=L.subTree;if(C===H){const X=L.vnode;A(w,X,X.scopeId,X.slotScopeIds,L.parent)}}},y=(w,C,N,U,L,H,X,q,z=0)=>{for(let $=z;$<w.length;$++){const Z=w[$]=q?cr(w[$]):an(w[$]);S(null,Z,C,N,U,L,H,X,q)}},v=(w,C,N,U,L,H,X)=>{const q=C.el=w.el;let{patchFlag:z,dynamicChildren:$,dirs:Z}=C;z|=w.patchFlag&16;const se=w.props||ze,re=C.props||ze;let ne;if(N&&Vr(N,!1),(ne=re.onVnodeBeforeUpdate)&&Tn(ne,N,C,w),Z&&Lr(C,w,N,"beforeUpdate"),N&&Vr(N,!0),(se.innerHTML&&re.innerHTML==null||se.textContent&&re.textContent==null)&&h(q,""),$?I(w.dynamicChildren,$,q,N,U,Sc(C,L),H):X||_e(w,C,q,null,N,U,Sc(C,L),H,!1),z>0){if(z&16)R(q,se,re,N,L);else if(z&2&&se.class!==re.class&&i(q,"class",null,re.class,L),z&4&&i(q,"style",se.style,re.style,L),z&8){const ie=C.dynamicProps;for(let De=0;De<ie.length;De++){const Ce=ie[De],Je=se[Ce],$t=re[Ce];($t!==Je||Ce==="value")&&i(q,Ce,Je,$t,L,N)}}z&1&&w.children!==C.children&&h(q,C.children)}else!X&&$==null&&R(q,se,re,N,L);((ne=re.onVnodeUpdated)||Z)&&xt(()=>{ne&&Tn(ne,N,C,w),Z&&Lr(C,w,N,"updated")},U)},I=(w,C,N,U,L,H,X)=>{for(let q=0;q<C.length;q++){const z=w[q],$=C[q],Z=z.el&&(z.type===Lt||!An(z,$)||z.shapeFlag&70)?d(z.el):N;S(z,$,Z,null,U,L,H,X,!0)}},R=(w,C,N,U,L)=>{if(C!==N){if(C!==ze)for(const H in C)!$i(H)&&!(H in N)&&i(w,H,C[H],null,L,U);for(const H in N){if($i(H))continue;const X=N[H],q=C[H];X!==q&&H!=="value"&&i(w,H,q,X,L,U)}"value"in N&&i(w,"value",C.value,N.value,L)}},b=(w,C,N,U,L,H,X,q,z)=>{const $=C.el=w?w.el:l(""),Z=C.anchor=w?w.anchor:l("");let{patchFlag:se,dynamicChildren:re,slotScopeIds:ne}=C;ne&&(q=q?q.concat(ne):ne),w==null?(r($,N,U),r(Z,N,U),y(C.children||[],N,Z,L,H,X,q,z)):se>0&&se&64&&re&&w.dynamicChildren?(I(w.dynamicChildren,re,N,L,H,X,q),(C.key!=null||L&&C===L.subTree)&&kh(w,C,!0)):_e(w,C,N,Z,L,H,X,q,z)},T=(w,C,N,U,L,H,X,q,z)=>{C.slotScopeIds=q,w==null?C.shapeFlag&512?L.ctx.activate(C,N,U,X,z):me(C,N,U,L,H,X,z):Ke(w,C,z)},me=(w,C,N,U,L,H,X)=>{const q=w.component=WI(w,U,L);if(So(w)&&(q.ctx.renderer=ee),qI(q,!1,X),q.asyncDep){if(L&&L.registerDep(q,Ne,X),!w.el){const z=q.subTree=pe(Ct);V(null,z,C,N)}}else Ne(q,w,C,N,L,H,X)},Ke=(w,C,N)=>{const U=C.component=w.component;if(kI(w,C,N))if(U.asyncDep&&!U.asyncResolved){ge(U,C,N);return}else U.next=C,L0(U.update),U.effect.dirty=!0,U.update();else C.el=w.el,U.vnode=C},Ne=(w,C,N,U,L,H,X)=>{const q=()=>{if(w.isMounted){let{next:Z,bu:se,u:re,parent:ne,vnode:ie}=w;{const Xt=dy(w);if(Xt){Z&&(Z.el=ie.el,ge(w,Z,X)),Xt.asyncDep.then(()=>{w.isUnmounted||q()});return}}let De=Z,Ce;Vr(w,!1),Z?(Z.el=ie.el,ge(w,Z,X)):Z=ie,se&&Ra(se),(Ce=Z.props&&Z.props.onVnodeBeforeUpdate)&&Tn(Ce,ne,Z,ie),Vr(w,!0);const Je=Pc(w),$t=w.subTree;w.subTree=Je,S($t,Je,d($t.el),x($t),w,L,H),Z.el=Je.el,De===null&&Dh(w,Je.el),re&&xt(re,L),(Ce=Z.props&&Z.props.onVnodeUpdated)&&xt(()=>Tn(Ce,ne,Z,ie),L)}else{let Z;const{el:se,props:re}=C,{bm:ne,m:ie,parent:De}=w,Ce=Hi(C);if(Vr(w,!1),ne&&Ra(ne),!Ce&&(Z=re&&re.onVnodeBeforeMount)&&Tn(Z,De,C),Vr(w,!0),se&&Fe){const Je=()=>{w.subTree=Pc(w),Fe(se,w.subTree,w,L,null)};Ce?C.type.__asyncLoader().then(()=>!w.isUnmounted&&Je()):Je()}else{const Je=w.subTree=Pc(w);S(null,Je,N,U,w,L,H),C.el=Je.el}if(ie&&xt(ie,L),!Ce&&(Z=re&&re.onVnodeMounted)){const Je=C;xt(()=>Tn(Z,De,Je),L)}(C.shapeFlag&256||De&&Hi(De.vnode)&&De.vnode.shapeFlag&256)&&w.a&&xt(w.a,L),w.isMounted=!0,C=N=U=null}},z=w.effect=new mh(q,tn,()=>Rl($),w.scope),$=w.update=()=>{z.dirty&&z.run()};$.i=w,$.id=w.uid,Vr(w,!0),$()},ge=(w,C,N)=>{C.component=w;const U=w.vnode.props;w.vnode=C,w.next=null,uI(w,C.props,U,N),pI(w,C.children,N),Pr(),Wd(w),kr()},_e=(w,C,N,U,L,H,X,q,z=!1)=>{const $=w&&w.children,Z=w?w.shapeFlag:0,se=C.children,{patchFlag:re,shapeFlag:ne}=C;if(re>0){if(re&128){Bt($,se,N,U,L,H,X,q,z);return}else if(re&256){ut($,se,N,U,L,H,X,q,z);return}}ne&8?(Z&16&&_t($,L,H),se!==$&&h(N,se)):Z&16?ne&16?Bt($,se,N,U,L,H,X,q,z):_t($,L,H,!0):(Z&8&&h(N,""),ne&16&&y(se,N,U,L,H,X,q,z))},ut=(w,C,N,U,L,H,X,q,z)=>{w=w||Cs,C=C||Cs;const $=w.length,Z=C.length,se=Math.min($,Z);let re;for(re=0;re<se;re++){const ne=C[re]=z?cr(C[re]):an(C[re]);S(w[re],ne,N,null,L,H,X,q,z)}$>Z?_t(w,L,H,!0,!1,se):y(C,N,U,L,H,X,q,z,se)},Bt=(w,C,N,U,L,H,X,q,z)=>{let $=0;const Z=C.length;let se=w.length-1,re=Z-1;for(;$<=se&&$<=re;){const ne=w[$],ie=C[$]=z?cr(C[$]):an(C[$]);if(An(ne,ie))S(ne,ie,N,null,L,H,X,q,z);else break;$++}for(;$<=se&&$<=re;){const ne=w[se],ie=C[re]=z?cr(C[re]):an(C[re]);if(An(ne,ie))S(ne,ie,N,null,L,H,X,q,z);else break;se--,re--}if($>se){if($<=re){const ne=re+1,ie=ne<Z?C[ne].el:U;for(;$<=re;)S(null,C[$]=z?cr(C[$]):an(C[$]),N,ie,L,H,X,q,z),$++}}else if($>re)for(;$<=se;)Me(w[$],L,H,!0),$++;else{const ne=$,ie=$,De=new Map;for($=ie;$<=re;$++){const Pt=C[$]=z?cr(C[$]):an(C[$]);Pt.key!=null&&De.set(Pt.key,$)}let Ce,Je=0;const $t=re-ie+1;let Xt=!1,hi=0;const Jn=new Array($t);for($=0;$<$t;$++)Jn[$]=0;for($=ne;$<=se;$++){const Pt=w[$];if(Je>=$t){Me(Pt,L,H,!0);continue}let Jt;if(Pt.key!=null)Jt=De.get(Pt.key);else for(Ce=ie;Ce<=re;Ce++)if(Jn[Ce-ie]===0&&An(Pt,C[Ce])){Jt=Ce;break}Jt===void 0?Me(Pt,L,H,!0):(Jn[Jt-ie]=$+1,Jt>=hi?hi=Jt:Xt=!0,S(Pt,C[Jt],N,null,L,H,X,q,z),Je++)}const us=Xt?TI(Jn):Cs;for(Ce=us.length-1,$=$t-1;$>=0;$--){const Pt=ie+$,Jt=C[Pt],hs=Pt+1<Z?C[Pt+1].el:U;Jn[$]===0?S(null,Jt,N,hs,L,H,X,q,z):Xt&&(Ce<0||$!==us[Ce]?Ot(Jt,N,hs,2):Ce--)}}},Ot=(w,C,N,U,L=null)=>{const{el:H,type:X,transition:q,children:z,shapeFlag:$}=w;if($&6){Ot(w.component.subTree,C,N,U);return}if($&128){w.suspense.move(C,N,U);return}if($&64){X.move(w,C,N,ee);return}if(X===Lt){r(H,C,N);for(let se=0;se<z.length;se++)Ot(z[se],C,N,U);r(w.anchor,C,N);return}if(X===kc){F(w,C,N);return}if(U!==2&&$&1&&q)if(U===0)q.beforeEnter(H),r(H,C,N),xt(()=>q.enter(H),L);else{const{leave:se,delayLeave:re,afterLeave:ne}=q,ie=()=>r(H,C,N),De=()=>{se(H,()=>{ie(),ne&&ne()})};re?re(H,ie,De):De()}else r(H,C,N)},Me=(w,C,N,U=!1,L=!1)=>{const{type:H,props:X,ref:q,children:z,dynamicChildren:$,shapeFlag:Z,patchFlag:se,dirs:re,cacheIndex:ne}=w;if(se===-2&&(L=!1),q!=null&&mu(q,null,N,w,!0),ne!=null&&(C.renderCache[ne]=void 0),Z&256){C.ctx.deactivate(w);return}const ie=Z&1&&re,De=!Hi(w);let Ce;if(De&&(Ce=X&&X.onVnodeBeforeUnmount)&&Tn(Ce,C,w),Z&6)Mt(w.component,N,U);else{if(Z&128){w.suspense.unmount(N,U);return}ie&&Lr(w,null,C,"beforeUnmount"),Z&64?w.type.remove(w,C,N,ee,U):$&&!$.hasOnce&&(H!==Lt||se>0&&se&64)?_t($,C,N,!1,!0):(H===Lt&&se&384||!L&&Z&16)&&_t(z,C,N),U&&Ve(w)}(De&&(Ce=X&&X.onVnodeUnmounted)||ie)&&xt(()=>{Ce&&Tn(Ce,C,w),ie&&Lr(w,null,C,"unmounted")},N)},Ve=w=>{const{type:C,el:N,anchor:U,transition:L}=w;if(C===Lt){En(N,U);return}if(C===kc){Q(w);return}const H=()=>{s(N),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(w.shapeFlag&1&&L&&!L.persisted){const{leave:X,delayLeave:q}=L,z=()=>X(N,H);q?q(w.el,H,z):z()}else H()},En=(w,C)=>{let N;for(;w!==C;)N=m(w),s(w),w=N;s(C)},Mt=(w,C,N)=>{const{bum:U,scope:L,update:H,subTree:X,um:q,m:z,a:$}=w;ep(z),ep($),U&&Ra(U),L.stop(),H&&(H.active=!1,Me(X,w,C,N)),q&&xt(q,C),xt(()=>{w.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},_t=(w,C,N,U=!1,L=!1,H=0)=>{for(let X=H;X<w.length;X++)Me(w[X],C,N,U,L)},x=w=>{if(w.shapeFlag&6)return x(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const C=m(w.anchor||w.el),N=C&&C[uy];return N?m(N):C};let G=!1;const Y=(w,C,N)=>{w==null?C._vnode&&Me(C._vnode,null,null,!0):S(C._vnode||null,w,C,null,null,null,N),C._vnode=w,G||(G=!0,Wd(),H_(),G=!1)},ee={p:S,um:Me,m:Ot,r:Ve,mt:me,mc:y,pc:_e,pbc:I,n:x,o:t};let Te,Fe;return{render:Y,hydrate:Te,createApp:lI(Y,Te)}}function Sc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Vr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function EI(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function kh(t,e,n=!1){const r=t.children,s=e.children;if(le(r)&&le(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=cr(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&kh(o,l)),l.type===Ml&&(l.el=o.el)}}function TI(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function dy(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:dy(e)}function ep(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const wI=Symbol.for("v-scx"),II=()=>ct(wI);function Dl(t,e){return Nh(t,null,e)}const pa={};function fn(t,e,n){return Nh(t,e,n)}function Nh(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:l}=ze){if(e&&i){const O=e;e=(...A)=>{O(...A),W()}}const c=ot,u=O=>r===!0?O:hr(O,r===!1?1:void 0);let h,d=!1,m=!1;if(St(t)?(h=()=>t.value,d=Ls(t)):ji(t)?(h=()=>u(t),d=!0):le(t)?(m=!0,d=t.some(O=>ji(O)||Ls(O)),h=()=>t.map(O=>{if(St(O))return O.value;if(ji(O))return u(O);if(ce(O))return mr(O,c,2)})):ce(t)?e?h=()=>mr(t,c,2):h=()=>(g&&g(),rn(t,c,3,[E])):h=tn,e&&r){const O=h;h=()=>hr(O())}let g,E=O=>{g=F.onStop=()=>{mr(O,c,4),g=F.onStop=void 0}},S;if(No)if(E=tn,e?n&&rn(e,c,3,[h(),m?[]:void 0,E]):h(),s==="sync"){const O=II();S=O.__watcherHandles||(O.__watcherHandles=[])}else return tn;let P=m?new Array(t.length).fill(pa):pa;const V=()=>{if(!(!F.active||!F.dirty))if(e){const O=F.run();(r||d||(m?O.some((A,y)=>wr(A,P[y])):wr(O,P)))&&(g&&g(),rn(e,c,3,[O,P===pa?void 0:m&&P[0]===pa?[]:P,E]),P=O)}else F.run()};V.allowRecurse=!!e;let M;s==="sync"?M=V:s==="post"?M=()=>xt(V,c&&c.suspense):(V.pre=!0,c&&(V.id=c.uid),M=()=>Rl(V));const F=new mh(h,tn,M),Q=a0(),W=()=>{F.stop(),Q&&hh(Q.effects,F)};return e?n?V():P=F.run():s==="post"?xt(F.run.bind(F),c&&c.suspense):F.run(),S&&S.push(W),W}function AI(t,e,n){const r=this.proxy,s=Xe(t)?t.includes(".")?py(r,t):()=>r[t]:t.bind(r,r);let i;ce(e)?i=e:(i=e.handler,n=e);const o=ko(this),l=Nh(s,i.bind(r),n);return o(),l}function py(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function hr(t,e=1/0,n){if(e<=0||!$e(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,St(t))hr(t.value,e,n);else if(le(t))for(let r=0;r<t.length;r++)hr(t[r],e,n);else if(c_(t)||Rs(t))t.forEach(r=>{hr(r,e,n)});else if(f_(t)){for(const r in t)hr(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&hr(t[r],e,n)}return t}const bI=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${pn(e)}Modifiers`]||t[`${is(e)}Modifiers`];function CI(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ze;let s=n;const i=e.startsWith("update:"),o=i&&bI(r,e.slice(7));o&&(o.trim&&(s=n.map(h=>Xe(h)?h.trim():h)),o.number&&(s=n.map(iu)));let l,c=r[l=Ic(e)]||r[l=Ic(pn(e))];!c&&i&&(c=r[l=Ic(is(e))]),c&&rn(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,rn(u,t,6,s)}}function my(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!ce(t)){const c=u=>{const h=my(u,e,!0);h&&(l=!0,rt(o,h))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?($e(t)&&r.set(t,null),null):(le(i)?i.forEach(c=>o[c]=null):rt(o,i),$e(t)&&r.set(t,o),o)}function Ol(t,e){return!t||!wl(e)?!1:(e=e.slice(2).replace(/Once$/,""),Re(t,e[0].toLowerCase()+e.slice(1))||Re(t,is(e))||Re(t,e))}function Pc(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:h,props:d,data:m,setupState:g,ctx:E,inheritAttrs:S}=t,P=Ba(t);let V,M;try{if(n.shapeFlag&4){const Q=s||r,W=Q;V=an(u.call(W,Q,h,d,g,m,E)),M=l}else{const Q=e;V=an(Q.length>1?Q(d,{attrs:l,slots:o,emit:c}):Q(d,null)),M=e.props?l:SI(l)}}catch(Q){Ki.length=0,Zs(Q,t,1),V=pe(Ct)}let F=V;if(M&&S!==!1){const Q=Object.keys(M),{shapeFlag:W}=F;Q.length&&W&7&&(i&&Q.some(uh)&&(M=PI(M,i)),F=Ir(F,M,!1,!0))}return n.dirs&&(F=Ir(F,null,!1,!0),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),V=F,Ba(P),V}function RI(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(uo(s)){if(s.type!==Ct||s.children==="v-if"){if(n)return;n=s}}else return}return n}const SI=t=>{let e;for(const n in t)(n==="class"||n==="style"||wl(n))&&((e||(e={}))[n]=t[n]);return e},PI=(t,e)=>{const n={};for(const r in t)(!uh(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function kI(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?tp(r,o,u):!!o;if(c&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const m=h[d];if(o[m]!==r[m]&&!Ol(u,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?tp(r,o,u):!0:!!o;return!1}function tp(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ol(n,i))return!0}return!1}function Dh({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const NI=t=>t.__isSuspense;let _u=0;const DI={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,l,c,u){if(t==null)MI(e,n,r,s,i,o,l,c,u);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}xI(t,e,n,r,s,o,l,c,u)}},hydrate:LI,normalize:VI},OI=DI;function co(t,e){const n=t.props&&t.props[e];ce(n)&&n()}function MI(t,e,n,r,s,i,o,l,c){const{p:u,o:{createElement:h}}=c,d=h("div"),m=t.suspense=gy(t,s,r,e,d,n,i,o,l,c);u(null,m.pendingBranch=t.ssContent,d,null,r,m,i,o),m.deps>0?(co(t,"onPending"),co(t,"onFallback"),u(null,t.ssFallback,e,n,r,null,i,o),ks(m,t.ssFallback)):m.resolve(!1,!0)}function xI(t,e,n,r,s,i,o,l,{p:c,um:u,o:{createElement:h}}){const d=e.suspense=t.suspense;d.vnode=e,e.el=t.el;const m=e.ssContent,g=e.ssFallback,{activeBranch:E,pendingBranch:S,isInFallback:P,isHydrating:V}=d;if(S)d.pendingBranch=m,An(m,S)?(c(S,m,d.hiddenContainer,null,s,d,i,o,l),d.deps<=0?d.resolve():P&&(V||(c(E,g,n,r,s,null,i,o,l),ks(d,g)))):(d.pendingId=_u++,V?(d.isHydrating=!1,d.activeBranch=S):u(S,s,d),d.deps=0,d.effects.length=0,d.hiddenContainer=h("div"),P?(c(null,m,d.hiddenContainer,null,s,d,i,o,l),d.deps<=0?d.resolve():(c(E,g,n,r,s,null,i,o,l),ks(d,g))):E&&An(m,E)?(c(E,m,n,r,s,d,i,o,l),d.resolve(!0)):(c(null,m,d.hiddenContainer,null,s,d,i,o,l),d.deps<=0&&d.resolve()));else if(E&&An(m,E))c(E,m,n,r,s,d,i,o,l),ks(d,m);else if(co(e,"onPending"),d.pendingBranch=m,m.shapeFlag&512?d.pendingId=m.component.suspenseId:d.pendingId=_u++,c(null,m,d.hiddenContainer,null,s,d,i,o,l),d.deps<=0)d.resolve();else{const{timeout:M,pendingId:F}=d;M>0?setTimeout(()=>{d.pendingId===F&&d.fallback(g)},M):M===0&&d.fallback(g)}}function gy(t,e,n,r,s,i,o,l,c,u,h=!1){const{p:d,m,um:g,n:E,o:{parentNode:S,remove:P}}=u;let V;const M=UI(t);M&&e&&e.pendingBranch&&(V=e.pendingId,e.deps++);const F=t.props?p_(t.props.timeout):void 0,Q=i,W={vnode:t,parent:e,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:_u++,timeout:typeof F=="number"?F:-1,activeBranch:null,pendingBranch:null,isInFallback:!h,isHydrating:h,isUnmounted:!1,effects:[],resolve(O=!1,A=!1){const{vnode:y,activeBranch:v,pendingBranch:I,pendingId:R,effects:b,parentComponent:T,container:me}=W;let Ke=!1;W.isHydrating?W.isHydrating=!1:O||(Ke=v&&I.transition&&I.transition.mode==="out-in",Ke&&(v.transition.afterLeave=()=>{R===W.pendingId&&(m(I,me,i===Q?E(v):i,0),uu(b))}),v&&(S(v.el)!==W.hiddenContainer&&(i=E(v)),g(v,T,W,!0)),Ke||m(I,me,i,0)),ks(W,I),W.pendingBranch=null,W.isInFallback=!1;let Ne=W.parent,ge=!1;for(;Ne;){if(Ne.pendingBranch){Ne.effects.push(...b),ge=!0;break}Ne=Ne.parent}!ge&&!Ke&&uu(b),W.effects=[],M&&e&&e.pendingBranch&&V===e.pendingId&&(e.deps--,e.deps===0&&!A&&e.resolve()),co(y,"onResolve")},fallback(O){if(!W.pendingBranch)return;const{vnode:A,activeBranch:y,parentComponent:v,container:I,namespace:R}=W;co(A,"onFallback");const b=E(y),T=()=>{W.isInFallback&&(d(null,O,I,b,v,null,R,l,c),ks(W,O))},me=O.transition&&O.transition.mode==="out-in";me&&(y.transition.afterLeave=T),W.isInFallback=!0,g(y,v,null,!0),me||T()},move(O,A,y){W.activeBranch&&m(W.activeBranch,O,A,y),W.container=O},next(){return W.activeBranch&&E(W.activeBranch)},registerDep(O,A,y){const v=!!W.pendingBranch;v&&W.deps++;const I=O.vnode.el;O.asyncDep.catch(R=>{Zs(R,O,0)}).then(R=>{if(O.isUnmounted||W.isUnmounted||W.pendingId!==O.suspenseId)return;O.asyncResolved=!0;const{vnode:b}=O;vu(O,R,!1),I&&(b.el=I);const T=!I&&O.subTree.el;A(O,b,S(I||O.subTree.el),I?null:E(O.subTree),W,o,y),T&&P(T),Dh(O,b.el),v&&--W.deps===0&&W.resolve()})},unmount(O,A){W.isUnmounted=!0,W.activeBranch&&g(W.activeBranch,n,O,A),W.pendingBranch&&g(W.pendingBranch,n,O,A)}};return W}function LI(t,e,n,r,s,i,o,l,c){const u=e.suspense=gy(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,l,!0),h=c(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(!1,!0),h}function VI(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=np(r?n.default:n),t.ssFallback=r?np(n.fallback):pe(Ct)}function np(t){let e;if(ce(t)){const n=Fs&&t._c;n&&(t._d=!1,ei()),t=t(),n&&(t._d=!0,e=Vt,_y())}return le(t)&&(t=RI(t)),t=an(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function FI(t,e){e&&e.pendingBranch?le(t)?e.effects.push(...t):e.effects.push(t):uu(t)}function ks(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,Dh(r,s))}function UI(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const Lt=Symbol.for("v-fgt"),Ml=Symbol.for("v-txt"),Ct=Symbol.for("v-cmt"),kc=Symbol.for("v-stc"),Ki=[];let Vt=null;function ei(t=!1){Ki.push(Vt=t?null:[])}function _y(){Ki.pop(),Vt=Ki[Ki.length-1]||null}let Fs=1;function rp(t){Fs+=t,t<0&&Vt&&(Vt.hasOnce=!0)}function yy(t){return t.dynamicChildren=Fs>0?Vt||Cs:null,_y(),Fs>0&&Vt&&Vt.push(t),t}function NL(t,e,n,r,s,i){return yy(Oh(t,e,n,r,s,i,!0))}function Po(t,e,n,r,s){return yy(pe(t,e,n,r,s,!0))}function uo(t){return t?t.__v_isVNode===!0:!1}function An(t,e){return t.type===e.type&&t.key===e.key}const vy=({key:t})=>t??null,Pa=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Xe(t)||St(t)||ce(t)?{i:lt,r:t,k:e,f:!!n}:t:null);function Oh(t,e=null,n=null,r=0,s=null,i=t===Lt?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&vy(e),ref:e&&Pa(e),scopeId:Sl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:lt};return l?(Mh(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Xe(n)?8:16),Fs>0&&!o&&Vt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Vt.push(c),c}const pe=BI;function BI(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===eI)&&(t=Ct),uo(t)){const l=Ir(t,e,!0);return n&&Mh(l,n),Fs>0&&!i&&Vt&&(l.shapeFlag&6?Vt[Vt.indexOf(t)]=l:Vt.push(l)),l.patchFlag=-2,l}if(YI(t)&&(t=t.__vccOpts),e){e=$I(e);let{class:l,style:c}=e;l&&!Xe(l)&&(e.class=ph(l)),$e(c)&&(O_(c)&&!le(c)&&(c=rt({},c)),e.style=dh(c))}const o=Xe(t)?1:NI(t)?128:mI(t)?64:$e(t)?4:ce(t)?2:0;return Oh(t,e,n,r,s,o,i,!0)}function $I(t){return t?O_(t)||ry(t)?rt({},t):t:null}function Ir(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?Ty(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&vy(u),ref:e&&e.ref?n&&i?le(i)?i.concat(Pa(e)):[i,Pa(e)]:Pa(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Lt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ir(t.ssContent),ssFallback:t.ssFallback&&Ir(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Vs(h,c.clone(h)),h}function Ey(t=" ",e=0){return pe(Ml,null,t,e)}function DL(t="",e=!1){return e?(ei(),Po(Ct,null,t)):pe(Ct,null,t)}function an(t){return t==null||typeof t=="boolean"?pe(Ct):le(t)?pe(Lt,null,t.slice()):typeof t=="object"?cr(t):pe(Ml,null,String(t))}function cr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ir(t)}function Mh(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(le(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Mh(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!ry(e)?e._ctx=lt:s===3&&lt&&(lt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ce(e)?(e={default:e,_ctx:lt},n=32):(e=String(e),r&64?(n=16,e=[Ey(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ty(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ph([e.class,r.class]));else if(s==="style")e.style=dh([e.style,r.style]);else if(wl(s)){const i=e[s],o=r[s];o&&i!==o&&!(le(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Tn(t,e,n,r=null){rn(t,e,7,[n,r])}const jI=ey();let HI=0;function WI(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||jI,i={uid:HI++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new v_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:iy(r,s),emitsOptions:my(r,s),emit:null,emitted:null,propsDefaults:ze,inheritAttrs:r.inheritAttrs,ctx:ze,data:ze,props:ze,attrs:ze,slots:ze,refs:ze,setupState:ze,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=CI.bind(null,i),t.ce&&t.ce(i),i}let ot=null;const xl=()=>ot||lt;let ja,yu;{const t=m_(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};ja=e("__VUE_INSTANCE_SETTERS__",n=>ot=n),yu=e("__VUE_SSR_SETTERS__",n=>No=n)}const ko=t=>{const e=ot;return ja(t),t.scope.on(),()=>{t.scope.off(),ja(e)}},sp=()=>{ot&&ot.scope.off(),ja(null)};function wy(t){return t.vnode.shapeFlag&4}let No=!1;function qI(t,e=!1,n=!1){e&&yu(e);const{props:r,children:s}=t.vnode,i=wy(t);cI(t,r,i,e),dI(t,s,n);const o=i?KI(t,e):void 0;return e&&yu(!1),o}function KI(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,tI);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?GI(t):null,i=ko(t);Pr();const o=mr(r,t,0,[t.props,s]);if(kr(),i(),u_(o)){if(o.then(sp,sp),e)return o.then(l=>{vu(t,l,e)}).catch(l=>{Zs(l,t,0)});t.asyncDep=o}else vu(t,o,e)}else Iy(t,e)}function vu(t,e,n){ce(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:$e(e)&&(t.setupState=F_(e)),Iy(t,n)}let ip;function Iy(t,e,n){const r=t.type;if(!t.render){if(!e&&ip&&!r.render){const s=r.template||Sh(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:c}=r,u=rt(rt({isCustomElement:i,delimiters:l},o),c);r.render=ip(s,u)}}t.render=r.render||tn}{const s=ko(t);Pr();try{nI(t)}finally{kr(),s()}}}const zI={get(t,e){return Ut(t,"get",""),t[e]}};function GI(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,zI),slots:t.slots,emit:t.emit,expose:e}}function Ll(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(F_(M_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Wi)return Wi[n](t)},has(e,n){return n in e||n in Wi}})):t.proxy}function QI(t,e=!0){return ce(t)?t.displayName||t.name:t.name||e&&t.__name}function YI(t){return ce(t)&&"__vccOpts"in t}const ue=(t,e)=>P0(t,e,No);function Vl(t,e,n){const r=arguments.length;return r===2?$e(e)&&!le(e)?uo(e)?pe(t,null,[e]):pe(t,e):pe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&uo(n)&&(n=[n]),pe(t,e,n))}const XI="3.4.38";/**
* @vue/runtime-dom v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const JI="http://www.w3.org/2000/svg",ZI="http://www.w3.org/1998/Math/MathML",Bn=typeof document<"u"?document:null,op=Bn&&Bn.createElement("template"),eA={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Bn.createElementNS(JI,t):e==="mathml"?Bn.createElementNS(ZI,t):n?Bn.createElement(t,{is:n}):Bn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Bn.createTextNode(t),createComment:t=>Bn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Bn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{op.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const l=op.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},rr="transition",bi="animation",Us=Symbol("_vtc"),Ay=(t,{slots:e})=>Vl($0,Cy(t),e);Ay.displayName="Transition";const by={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},tA=Ay.props=rt({},K_,by),Fr=(t,e=[])=>{le(t)?t.forEach(n=>n(...e)):t&&t(...e)},ap=t=>t?le(t)?t.some(e=>e.length>1):t.length>1:!1;function Cy(t){const e={};for(const b in t)b in by||(e[b]=t[b]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:h=l,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,E=nA(s),S=E&&E[0],P=E&&E[1],{onBeforeEnter:V,onEnter:M,onEnterCancelled:F,onLeave:Q,onLeaveCancelled:W,onBeforeAppear:O=V,onAppear:A=M,onAppearCancelled:y=F}=e,v=(b,T,me)=>{or(b,T?h:l),or(b,T?u:o),me&&me()},I=(b,T)=>{b._isLeaving=!1,or(b,d),or(b,g),or(b,m),T&&T()},R=b=>(T,me)=>{const Ke=b?A:M,Ne=()=>v(T,b,me);Fr(Ke,[T,Ne]),lp(()=>{or(T,b?c:i),Un(T,b?h:l),ap(Ke)||cp(T,r,S,Ne)})};return rt(e,{onBeforeEnter(b){Fr(V,[b]),Un(b,i),Un(b,o)},onBeforeAppear(b){Fr(O,[b]),Un(b,c),Un(b,u)},onEnter:R(!1),onAppear:R(!0),onLeave(b,T){b._isLeaving=!0;const me=()=>I(b,T);Un(b,d),Un(b,m),Sy(),lp(()=>{b._isLeaving&&(or(b,d),Un(b,g),ap(Q)||cp(b,r,P,me))}),Fr(Q,[b,me])},onEnterCancelled(b){v(b,!1),Fr(F,[b])},onAppearCancelled(b){v(b,!0),Fr(y,[b])},onLeaveCancelled(b){I(b),Fr(W,[b])}})}function nA(t){if(t==null)return null;if($e(t))return[Nc(t.enter),Nc(t.leave)];{const e=Nc(t);return[e,e]}}function Nc(t){return p_(t)}function Un(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Us]||(t[Us]=new Set)).add(e)}function or(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Us];n&&(n.delete(e),n.size||(t[Us]=void 0))}function lp(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let rA=0;function cp(t,e,n,r){const s=t._endId=++rA,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=Ry(t,e);if(!o)return r();const u=o+"end";let h=0;const d=()=>{t.removeEventListener(u,m),i()},m=g=>{g.target===t&&++h>=c&&d()};setTimeout(()=>{h<c&&d()},l+1),t.addEventListener(u,m)}function Ry(t,e){const n=window.getComputedStyle(t),r=E=>(n[E]||"").split(", "),s=r(`${rr}Delay`),i=r(`${rr}Duration`),o=up(s,i),l=r(`${bi}Delay`),c=r(`${bi}Duration`),u=up(l,c);let h=null,d=0,m=0;e===rr?o>0&&(h=rr,d=o,m=i.length):e===bi?u>0&&(h=bi,d=u,m=c.length):(d=Math.max(o,u),h=d>0?o>u?rr:bi:null,m=h?h===rr?i.length:c.length:0);const g=h===rr&&/\b(transform|all)(,|$)/.test(r(`${rr}Property`).toString());return{type:h,timeout:d,propCount:m,hasTransform:g}}function up(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>hp(n)+hp(t[r])))}function hp(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Sy(){return document.body.offsetHeight}function sA(t,e,n){const r=t[Us];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ha=Symbol("_vod"),Py=Symbol("_vsh"),OL={beforeMount(t,{value:e},{transition:n}){t[Ha]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ci(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Ci(t,!0),r.enter(t)):r.leave(t,()=>{Ci(t,!1)}):Ci(t,e))},beforeUnmount(t,{value:e}){Ci(t,e)}};function Ci(t,e){t.style.display=e?t[Ha]:"none",t[Py]=!e}const iA=Symbol(""),oA=/(^|;)\s*display\s*:/;function aA(t,e,n){const r=t.style,s=Xe(n);let i=!1;if(n&&!s){if(e)if(Xe(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&ka(r,l,"")}else for(const o in e)n[o]==null&&ka(r,o,"");for(const o in n)o==="display"&&(i=!0),ka(r,o,n[o])}else if(s){if(e!==n){const o=r[iA];o&&(n+=";"+o),r.cssText=n,i=oA.test(n)}}else e&&t.removeAttribute("style");Ha in t&&(t[Ha]=i?r.display:"",t[Py]&&(r.display="none"))}const fp=/\s*!important$/;function ka(t,e,n){if(le(n))n.forEach(r=>ka(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=lA(t,e);fp.test(n)?t.setProperty(is(r),n.replace(fp,""),"important"):t[r]=n}}const dp=["Webkit","Moz","ms"],Dc={};function lA(t,e){const n=Dc[e];if(n)return n;let r=pn(e);if(r!=="filter"&&r in t)return Dc[e]=r;r=Ro(r);for(let s=0;s<dp.length;s++){const i=dp[s]+r;if(i in t)return Dc[e]=i}return e}const pp="http://www.w3.org/1999/xlink";function mp(t,e,n,r,s,i=s0(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(pp,e.slice(6,e.length)):t.setAttributeNS(pp,e,n):n==null||i&&!g_(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Sr(n)?String(n):n)}function cA(t,e,n,r){if(e==="innerHTML"||e==="textContent"){if(n==null)return;t[e]=n;return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?"":String(n);(o!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let i=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=g_(n):n==null&&o==="string"?(n="",i=!0):o==="number"&&(n=0,i=!0)}try{t[e]=n}catch{}i&&t.removeAttribute(e)}function vs(t,e,n,r){t.addEventListener(e,n,r)}function uA(t,e,n,r){t.removeEventListener(e,n,r)}const gp=Symbol("_vei");function hA(t,e,n,r,s=null){const i=t[gp]||(t[gp]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=fA(e);if(r){const u=i[e]=mA(r,s);vs(t,l,u,c)}else o&&(uA(t,l,o,c),i[e]=void 0)}}const _p=/(?:Once|Passive|Capture)$/;function fA(t){let e;if(_p.test(t)){e={};let r;for(;r=t.match(_p);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):is(t.slice(2)),e]}let Oc=0;const dA=Promise.resolve(),pA=()=>Oc||(dA.then(()=>Oc=0),Oc=Date.now());function mA(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;rn(gA(r,n.value),e,5,[r])};return n.value=t,n.attached=pA(),n}function gA(t,e){if(le(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const yp=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,_A=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?sA(t,r,o):e==="style"?aA(t,n,r):wl(e)?uh(e)||hA(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):yA(t,e,r,o))?(cA(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&mp(t,e,r,o,i,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),mp(t,e,r,o))};function yA(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&yp(e)&&ce(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return yp(e)&&Xe(n)?!1:e in t}const ky=new WeakMap,Ny=new WeakMap,Wa=Symbol("_moveCb"),vp=Symbol("_enterCb"),Dy={name:"TransitionGroup",props:rt({},tA,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=xl(),r=q_();let s,i;return Y_(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!IA(s[0].el,n.vnode.el,o))return;s.forEach(EA),s.forEach(TA);const l=s.filter(wA);Sy(),l.forEach(c=>{const u=c.el,h=u.style;Un(u,o),h.transform=h.webkitTransform=h.transitionDuration="";const d=u[Wa]=m=>{m&&m.target!==u||(!m||/transform$/.test(m.propertyName))&&(u.removeEventListener("transitionend",d),u[Wa]=null,or(u,o))};u.addEventListener("transitionend",d)})}),()=>{const o=be(t),l=Cy(o);let c=o.tag||Lt;if(s=[],i)for(let u=0;u<i.length;u++){const h=i[u];h.el&&h.el instanceof Element&&(s.push(h),Vs(h,lo(h,l,r,n)),ky.set(h,h.el.getBoundingClientRect()))}i=e.default?Ah(e.default()):[];for(let u=0;u<i.length;u++){const h=i[u];h.key!=null&&Vs(h,lo(h,l,r,n))}return pe(c,null,i)}}},vA=t=>delete t.mode;Dy.props;const ML=Dy;function EA(t){const e=t.el;e[Wa]&&e[Wa](),e[vp]&&e[vp]()}function TA(t){Ny.set(t,t.el.getBoundingClientRect())}function wA(t){const e=ky.get(t),n=Ny.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function IA(t,e,n){const r=t.cloneNode(),s=t[Us];s&&s.forEach(l=>{l.split(/\s+/).forEach(c=>c&&r.classList.remove(c))}),n.split(/\s+/).forEach(l=>l&&r.classList.add(l)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=Ry(r);return i.removeChild(r),o}const Ep=t=>{const e=t.props["onUpdate:modelValue"]||!1;return le(e)?n=>Ra(e,n):e};function AA(t){t.target.composing=!0}function Tp(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Mc=Symbol("_assign"),xL={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Mc]=Ep(s);const i=r||s.props&&s.props.type==="number";vs(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=iu(l)),t[Mc](l)}),n&&vs(t,"change",()=>{t.value=t.value.trim()}),e||(vs(t,"compositionstart",AA),vs(t,"compositionend",Tp),vs(t,"change",Tp))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Mc]=Ep(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?iu(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},bA=["ctrl","shift","alt","meta"],CA={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>bA.some(n=>t[`${n}Key`]&&!e.includes(n))},LL=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=CA[e[o]];if(l&&l(s,e))return}return t(s,...i)})},RA=rt({patchProp:_A},eA);let wp;function SA(){return wp||(wp=yI(RA))}const PA=(...t)=>{const e=SA().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=NA(r);if(!s)return;const i=e._component;!ce(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,kA(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function kA(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function NA(t){return Xe(t)?document.querySelector(t):t}function DA(t,e){let n;function r(){n=E_(),n.run(()=>e.length?e(()=>{n==null||n.stop(),r()}):e())}fn(t,s=>{s&&!n?r():s||(n==null||n.stop(),n=void 0)},{immediate:!0}),l0(()=>{n==null||n.stop()})}const Ft=typeof window<"u",VL=Ft&&"IntersectionObserver"in window,OA=Ft&&("ontouchstart"in window||window.navigator.maxTouchPoints>0);function MA(t,e,n){const r=e.length-1;if(r<0)return t===void 0?n:t;for(let s=0;s<r;s++){if(t==null)return n;t=t[e[s]]}return t==null||t[e[r]]===void 0?n:t[e[r]]}function xA(t,e){if(t===e)return!0;if(t instanceof Date&&e instanceof Date&&t.getTime()!==e.getTime()||t!==Object(t)||e!==Object(e))return!1;const n=Object.keys(t);return n.length!==Object.keys(e).length?!1:n.every(r=>xA(t[r],e[r]))}function Ip(t,e,n){return t==null||!e||typeof e!="string"?n:t[e]!==void 0?t[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),MA(t,e.split("."),n))}function Oy(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:t},(n,r)=>e+r)}function wn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(t==null||t===""))return isNaN(+t)?String(t):isFinite(+t)?`${Number(t)}${e}`:void 0}function FL(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)}function Ap(t){let e;return t!==null&&typeof t=="object"&&((e=Object.getPrototypeOf(t))===Object.prototype||e===null)}function LA(t){if(t&&"$el"in t){const e=t.$el;return(e==null?void 0:e.nodeType)===Node.TEXT_NODE?e.nextElementSibling:e}return t}const UL=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function xc(t,e){return e.every(n=>t.hasOwnProperty(n))}function VA(t,e){const n={},r=new Set(Object.keys(t));for(const s of e)r.has(s)&&(n[s]=t[s]);return n}function bp(t,e,n){const r=Object.create(null),s=Object.create(null);for(const i in t)e.some(o=>o instanceof RegExp?o.test(i):o===i)&&!(n!=null&&n.some(o=>o===i))?r[i]=t[i]:s[i]=t[i];return[r,s]}function FA(t,e){const n={...t};return e.forEach(r=>delete n[r]),n}function BL(t,e){const n={};return e.forEach(r=>n[r]=t[r]),n}const My=/^on[^a-z]/,$L=t=>My.test(t),UA=["onAfterscriptexecute","onAnimationcancel","onAnimationend","onAnimationiteration","onAnimationstart","onAuxclick","onBeforeinput","onBeforescriptexecute","onChange","onClick","onCompositionend","onCompositionstart","onCompositionupdate","onContextmenu","onCopy","onCut","onDblclick","onFocusin","onFocusout","onFullscreenchange","onFullscreenerror","onGesturechange","onGestureend","onGesturestart","onGotpointercapture","onInput","onKeydown","onKeypress","onKeyup","onLostpointercapture","onMousedown","onMousemove","onMouseout","onMouseover","onMouseup","onMousewheel","onPaste","onPointercancel","onPointerdown","onPointerenter","onPointerleave","onPointermove","onPointerout","onPointerover","onPointerup","onReset","onSelect","onSubmit","onTouchcancel","onTouchend","onTouchmove","onTouchstart","onTransitioncancel","onTransitionend","onTransitionrun","onTransitionstart","onWheel"];function jL(t){const[e,n]=bp(t,[My]),r=FA(e,UA),[s,i]=bp(n,["class","style","id",/^data-/]);return Object.assign(s,e),Object.assign(i,r),[s,i]}function HL(t){return t==null?[]:Array.isArray(t)?t:[t]}function BA(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(e,Math.min(n,t))}function Cp(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return t+n.repeat(Math.max(0,e-t.length))}function Rp(t,e){return(arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0").repeat(Math.max(0,e-t.length))+t}function $A(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const n=[];let r=0;for(;r<t.length;)n.push(t.substr(r,e)),r+=e;return n}function zt(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const r={};for(const s in t)r[s]=t[s];for(const s in e){const i=t[s],o=e[s];if(Ap(i)&&Ap(o)){r[s]=zt(i,o,n);continue}if(n&&Array.isArray(i)&&Array.isArray(o)){r[s]=n(i,o);continue}r[s]=o}return r}function jA(t){return t.map(e=>e.type===Lt?jA(e.children):e).flat()}function Gr(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(Gr.cache.has(t))return Gr.cache.get(t);const e=t.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return Gr.cache.set(t,e),e}Gr.cache=new Map;function Mi(t,e){if(!e||typeof e!="object")return[];if(Array.isArray(e))return e.map(n=>Mi(t,n)).flat(1);if(e.suspense)return Mi(t,e.ssContent);if(Array.isArray(e.children))return e.children.map(n=>Mi(t,n)).flat(1);if(e.component){if(Object.getOwnPropertySymbols(e.component.provides).includes(t))return[e.component];if(e.component.subTree)return Mi(t,e.component.subTree).flat(1)}return[]}function WL(t){const e=qt({}),n=ue(t);return Dl(()=>{for(const r in n.value)e[r]=n.value[r]},{flush:"sync"}),U_(e)}function qL(t,e){return t.includes(e)}function KL(t){return t[2].toLowerCase()+t.slice(3)}const zL=()=>[Function,Array];function GL(t,e){return e="on"+Ro(e),!!(t[e]||t[`${e}Once`]||t[`${e}Capture`]||t[`${e}OnceCapture`]||t[`${e}CaptureOnce`])}function QL(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];if(Array.isArray(t))for(const s of t)s(...n);else typeof t=="function"&&t(...n)}function YL(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const n=["button","[href]",'input:not([type="hidden"])',"select","textarea","[tabindex]"].map(r=>`${r}${e?':not([tabindex="-1"])':""}:not([disabled])`).join(", ");return[...t.querySelectorAll(n)]}function XL(t,e){if(!(Ft&&typeof CSS<"u"&&typeof CSS.supports<"u"&&CSS.supports(`selector(${e})`)))return null;try{return!!t&&t.matches(e)}catch{return null}}function JL(t,e){if(!Ft||t===0)return e(),()=>{};const n=window.setTimeout(e,t);return()=>window.clearTimeout(n)}function HA(){const t=Rn(),e=n=>{t.value=n};return Object.defineProperty(e,"value",{enumerable:!0,get:()=>t.value,set:n=>t.value=n}),Object.defineProperty(e,"el",{enumerable:!0,get:()=>LA(t.value)}),e}const gs=2.4,Sp=.2126729,Pp=.7151522,kp=.072175,WA=.55,qA=.58,KA=.57,zA=.62,ma=.03,Np=1.45,GA=5e-4,QA=1.25,YA=1.25,Dp=.078,Op=12.82051282051282,ga=.06,Mp=.001;function xp(t,e){const n=(t.r/255)**gs,r=(t.g/255)**gs,s=(t.b/255)**gs,i=(e.r/255)**gs,o=(e.g/255)**gs,l=(e.b/255)**gs;let c=n*Sp+r*Pp+s*kp,u=i*Sp+o*Pp+l*kp;if(c<=ma&&(c+=(ma-c)**Np),u<=ma&&(u+=(ma-u)**Np),Math.abs(u-c)<GA)return 0;let h;if(u>c){const d=(u**WA-c**qA)*QA;h=d<Mp?0:d<Dp?d-d*Op*ga:d-ga}else{const d=(u**zA-c**KA)*YA;h=d>-Mp?0:d>-Dp?d-d*Op*ga:d+ga}return h*100}const qa=.20689655172413793,XA=t=>t>qa**3?Math.cbrt(t):t/(3*qa**2)+4/29,JA=t=>t>qa?t**3:3*qa**2*(t-4/29);function xy(t){const e=XA,n=e(t[1]);return[116*n-16,500*(e(t[0]/.95047)-n),200*(n-e(t[2]/1.08883))]}function Ly(t){const e=JA,n=(t[0]+16)/116;return[e(n+t[1]/500)*.95047,e(n),e(n-t[2]/200)*1.08883]}const ZA=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],eb=t=>t<=.0031308?t*12.92:1.055*t**(1/2.4)-.055,tb=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],nb=t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4;function Vy(t){const e=Array(3),n=eb,r=ZA;for(let s=0;s<3;++s)e[s]=Math.round(BA(n(r[s][0]*t[0]+r[s][1]*t[1]+r[s][2]*t[2]))*255);return{r:e[0],g:e[1],b:e[2]}}function xh(t){let{r:e,g:n,b:r}=t;const s=[0,0,0],i=nb,o=tb;e=i(e/255),n=i(n/255),r=i(r/255);for(let l=0;l<3;++l)s[l]=o[l][0]*e+o[l][1]*n+o[l][2]*r;return s}function rb(t){return!!t&&/^(#|var\(--|(rgb|hsl)a?\()/.test(t)}function ZL(t){return rb(t)&&!/^((rgb|hsl)a?\()?var\(--/.test(t)}const Lp=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,sb={rgb:(t,e,n,r)=>({r:t,g:e,b:n,a:r}),rgba:(t,e,n,r)=>({r:t,g:e,b:n,a:r}),hsl:(t,e,n,r)=>Vp({h:t,s:e,l:n,a:r}),hsla:(t,e,n,r)=>Vp({h:t,s:e,l:n,a:r}),hsv:(t,e,n,r)=>ho({h:t,s:e,v:n,a:r}),hsva:(t,e,n,r)=>ho({h:t,s:e,v:n,a:r})};function $n(t){if(typeof t=="number")return{r:(t&16711680)>>16,g:(t&65280)>>8,b:t&255};if(typeof t=="string"&&Lp.test(t)){const{groups:e}=t.match(Lp),{fn:n,values:r}=e,s=r.split(/,\s*/).map(i=>i.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(n)?parseFloat(i)/100:parseFloat(i));return sb[n](...s)}else if(typeof t=="string"){let e=t.startsWith("#")?t.slice(1):t;return[3,4].includes(e.length)?e=e.split("").map(n=>n+n).join(""):[6,8].includes(e.length),ob(e)}else if(typeof t=="object"){if(xc(t,["r","g","b"]))return t;if(xc(t,["h","s","l"]))return ho(Fy(t));if(xc(t,["h","s","v"]))return ho(t)}throw new TypeError(`Invalid color: ${t==null?t:String(t)||t.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function ho(t){const{h:e,s:n,v:r,a:s}=t,i=l=>{const c=(l+e/60)%6;return r-r*n*Math.max(Math.min(c,4-c,1),0)},o=[i(5),i(3),i(1)].map(l=>Math.round(l*255));return{r:o[0],g:o[1],b:o[2],a:s}}function Vp(t){return ho(Fy(t))}function Fy(t){const{h:e,s:n,l:r,a:s}=t,i=r+n*Math.min(r,1-r),o=i===0?0:2-2*r/i;return{h:e,s:o,v:i,a:s}}function _a(t){const e=Math.round(t).toString(16);return("00".substr(0,2-e.length)+e).toUpperCase()}function ib(t){let{r:e,g:n,b:r,a:s}=t;return`#${[_a(e),_a(n),_a(r),s!==void 0?_a(Math.round(s*255)):""].join("")}`}function ob(t){t=ab(t);let[e,n,r,s]=$A(t,2).map(i=>parseInt(i,16));return s=s===void 0?s:s/255,{r:e,g:n,b:r,a:s}}function ab(t){return t.startsWith("#")&&(t=t.slice(1)),t=t.replace(/([^0-9a-f])/gi,"F"),(t.length===3||t.length===4)&&(t=t.split("").map(e=>e+e).join("")),t.length!==6&&(t=Cp(Cp(t,6),8,"F")),t}function lb(t,e){const n=xy(xh(t));return n[0]=n[0]+e*10,Vy(Ly(n))}function cb(t,e){const n=xy(xh(t));return n[0]=n[0]-e*10,Vy(Ly(n))}function ub(t){const e=$n(t);return xh(e)[1]}function hb(t){const e=Math.abs(xp($n(0),$n(t)));return Math.abs(xp($n(16777215),$n(t)))>Math.min(e,50)?"#fff":"#000"}function vn(t,e){return n=>Object.keys(t).reduce((r,s)=>{const o=typeof t[s]=="object"&&t[s]!=null&&!Array.isArray(t[s])?t[s]:{type:t[s]};return n&&s in n?r[s]={...o,default:n[s]}:r[s]=o,e&&!r[s].source&&(r[s].source=e),r},{})}const Fl=vn({class:[String,Array,Object],style:{type:[String,Array,Object],default:null}},"component");function Nr(t,e){const n=xl();if(!n)throw new Error(`[Vuetify] ${t} must be called from inside a setup function`);return n}function fb(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";const e=Nr(t).type;return Gr((e==null?void 0:e.aliasName)||(e==null?void 0:e.name))}let Uy=0,Na=new WeakMap;function By(){const t=Nr("getUid");if(Na.has(t))return Na.get(t);{const e=Uy++;return Na.set(t,e),e}}By.reset=()=>{Uy=0,Na=new WeakMap};function db(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Nr("injectSelf");const{provides:n}=e;if(n&&t in n)return n[t]}const Bs=Symbol.for("vuetify:defaults");function pb(t){return Dt(t)}function Lh(){const t=ct(Bs);if(!t)throw new Error("[Vuetify] Could not find defaults instance");return t}function eV(t,e){const n=Lh(),r=Dt(t),s=ue(()=>{if(Kt(e==null?void 0:e.disabled))return n.value;const o=Kt(e==null?void 0:e.scoped),l=Kt(e==null?void 0:e.reset),c=Kt(e==null?void 0:e.root);if(r.value==null&&!(o||l||c))return n.value;let u=zt(r.value,{prev:n.value});if(o)return u;if(l||c){const h=Number(l||1/0);for(let d=0;d<=h&&!(!u||!("prev"in u));d++)u=u.prev;return u&&typeof c=="string"&&c in u&&(u=zt(zt(u,{prev:u}),u[c])),u}return u.prev?zt(u.prev,u):u});return gr(Bs,s),s}function mb(t,e){var n,r;return typeof((n=t.props)==null?void 0:n[e])<"u"||typeof((r=t.props)==null?void 0:r[Gr(e)])<"u"}function gb(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Lh();const r=Nr("useDefaults");if(e=e??r.type.name??r.type.__name,!e)throw new Error("[Vuetify] Could not determine component name");const s=ue(()=>{var c;return(c=n.value)==null?void 0:c[t._as??e]}),i=new Proxy(t,{get(c,u){var d,m,g,E,S,P,V;const h=Reflect.get(c,u);return u==="class"||u==="style"?[(d=s.value)==null?void 0:d[u],h].filter(M=>M!=null):typeof u=="string"&&!mb(r.vnode,u)?((m=s.value)==null?void 0:m[u])!==void 0?(g=s.value)==null?void 0:g[u]:((S=(E=n.value)==null?void 0:E.global)==null?void 0:S[u])!==void 0?(V=(P=n.value)==null?void 0:P.global)==null?void 0:V[u]:h:h}}),o=Rn();Dl(()=>{if(s.value){const c=Object.entries(s.value).filter(u=>{let[h]=u;return h.startsWith(h[0].toUpperCase())});o.value=c.length?Object.fromEntries(c):void 0}else o.value=void 0});function l(){const c=db(Bs,r);gr(Bs,ue(()=>o.value?zt((c==null?void 0:c.value)??{},o.value):c==null?void 0:c.value))}return{props:i,provideSubDefaults:l}}function Do(t){if(t._setup=t._setup??t.setup,!t.name)return t;if(t._setup){t.props=vn(t.props??{},t.name)();const e=Object.keys(t.props).filter(n=>n!=="class"&&n!=="style");t.filterProps=function(r){return VA(r,e)},t.props._as=String,t.setup=function(r,s){const i=Lh();if(!i.value)return t._setup(r,s);const{props:o,provideSubDefaults:l}=gb(r,r._as??t.name,i),c=t._setup(o,s);return l(),c}}return t}function Oo(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return e=>(t?Do:Pl)(e)}function Ul(t){const e=Nr("useRender");e.render=t}function _b(t,e,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:d=>d,s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:d=>d;const i=Nr("useProxiedModel"),o=Dt(t[e]!==void 0?t[e]:n),l=Gr(e),u=ue(l!==e?()=>{var d,m,g,E;return t[e],!!(((d=i.vnode.props)!=null&&d.hasOwnProperty(e)||(m=i.vnode.props)!=null&&m.hasOwnProperty(l))&&((g=i.vnode.props)!=null&&g.hasOwnProperty(`onUpdate:${e}`)||(E=i.vnode.props)!=null&&E.hasOwnProperty(`onUpdate:${l}`)))}:()=>{var d,m;return t[e],!!((d=i.vnode.props)!=null&&d.hasOwnProperty(e)&&((m=i.vnode.props)!=null&&m.hasOwnProperty(`onUpdate:${e}`)))});DA(()=>!u.value,()=>{fn(()=>t[e],d=>{o.value=d})});const h=ue({get(){const d=t[e];return r(u.value?d:o.value)},set(d){const m=s(d),g=be(u.value?t[e]:o.value);g===m||r(g)===d||(o.value=m,i==null||i.emit(`update:${e}`,m))}});return Object.defineProperty(h,"externalValue",{get:()=>u.value?t[e]:o.value}),h}const yb={badge:"Badge",open:"Open",close:"Close",dismiss:"Dismiss",confirmEdit:{ok:"OK",cancel:"Cancel"},dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{itemsSelected:"{0} selected",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more",today:"Today"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action",otp:"Please enter OTP character {0}"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM",title:"Select Time"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},stepper:{next:"Next",prev:"Previous"},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}},Fp="$vuetify.",Up=(t,e)=>t.replace(/\{(\d+)\}/g,(n,r)=>String(e[+r])),$y=(t,e,n)=>function(r){for(var s=arguments.length,i=new Array(s>1?s-1:0),o=1;o<s;o++)i[o-1]=arguments[o];if(!r.startsWith(Fp))return Up(r,i);const l=r.replace(Fp,""),c=t.value&&n.value[t.value],u=e.value&&n.value[e.value];let h=Ip(c,l,null);return h||(`${r}${t.value}`,h=Ip(u,l,null)),h||(h=r),typeof h!="string"&&(h=r),Up(h,i)};function jy(t,e){return(n,r)=>new Intl.NumberFormat([t.value,e.value],r).format(n)}function Lc(t,e,n){const r=_b(t,e,t[e]??n.value);return r.value=t[e]??n.value,fn(n,s=>{t[e]==null&&(r.value=n.value)}),r}function Hy(t){return e=>{const n=Lc(e,"locale",t.current),r=Lc(e,"fallback",t.fallback),s=Lc(e,"messages",t.messages);return{name:"vuetify",current:n,fallback:r,messages:s,t:$y(n,r,s),n:jy(n,r),provide:Hy({current:n,fallback:r,messages:s})}}}function vb(t){const e=Rn((t==null?void 0:t.locale)??"en"),n=Rn((t==null?void 0:t.fallback)??"en"),r=Dt({en:yb,...t==null?void 0:t.messages});return{name:"vuetify",current:e,fallback:n,messages:r,t:$y(e,n,r),n:jy(e,n),provide:Hy({current:e,fallback:n,messages:r})}}const Ka=Symbol.for("vuetify:locale");function Eb(t){return t.name!=null}function Tb(t){const e=t!=null&&t.adapter&&Eb(t==null?void 0:t.adapter)?t==null?void 0:t.adapter:vb(t),n=Ib(e,t);return{...e,...n}}function tV(){const t=ct(Ka);if(!t)throw new Error("[Vuetify] Could not find injected locale instance");return t}function wb(){return{af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,km:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1}}function Ib(t,e){const n=Dt((e==null?void 0:e.rtl)??wb()),r=ue(()=>n.value[t.current.value]??!1);return{isRtl:r,rtl:n,rtlClasses:ue(()=>`v-locale--is-${r.value?"rtl":"ltr"}`)}}function Wy(){const t=ct(Ka);if(!t)throw new Error("[Vuetify] Could not find injected rtl instance");return{isRtl:t.isRtl,rtlClasses:t.rtlClasses}}const Bl={"001":1,AD:1,AE:6,AF:6,AG:0,AI:1,AL:1,AM:1,AN:1,AR:1,AS:0,AT:1,AU:1,AX:1,AZ:1,BA:1,BD:0,BE:1,BG:1,BH:6,BM:1,BN:1,BR:0,BS:0,BT:0,BW:0,BY:1,BZ:0,CA:0,CH:1,CL:1,CM:1,CN:1,CO:0,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DM:0,DO:0,DZ:6,EC:1,EE:1,EG:6,ES:1,ET:0,FI:1,FJ:1,FO:1,FR:1,GB:1,"GB-alt-variant":0,GE:1,GF:1,GP:1,GR:1,GT:0,GU:0,HK:0,HN:0,HR:1,HU:1,ID:0,IE:1,IL:0,IN:0,IQ:6,IR:6,IS:1,IT:1,JM:0,JO:6,JP:0,KE:0,KG:1,KH:0,KR:0,KW:6,KZ:1,LA:0,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MH:0,MK:1,MM:0,MN:1,MO:0,MQ:1,MT:0,MV:5,MX:0,MY:1,MZ:0,NI:0,NL:1,NO:1,NP:0,NZ:1,OM:6,PA:0,PE:0,PH:0,PK:0,PL:1,PR:0,PT:0,PY:0,QA:6,RE:1,RO:1,RS:1,RU:1,SA:0,SD:6,SE:1,SG:0,SI:1,SK:1,SM:1,SV:0,SY:6,TH:0,TJ:1,TM:1,TR:1,TT:0,TW:0,UA:1,UM:0,US:0,UY:1,UZ:1,VA:1,VE:0,VI:0,VN:1,WS:0,XK:1,YE:0,ZA:0,ZW:0};function Ab(t,e,n){const r=[];let s=[];const i=qy(t),o=Ky(t),l=n??Bl[e.slice(-2).toUpperCase()]??0,c=(i.getDay()-l+7)%7,u=(o.getDay()-l+7)%7;for(let h=0;h<c;h++){const d=new Date(i);d.setDate(d.getDate()-(c-h)),s.push(d)}for(let h=1;h<=o.getDate();h++){const d=new Date(t.getFullYear(),t.getMonth(),h);s.push(d),s.length===7&&(r.push(s),s=[])}for(let h=1;h<7-u;h++){const d=new Date(o);d.setDate(d.getDate()+h),s.push(d)}return s.length>0&&r.push(s),r}function bb(t,e,n){const r=n??Bl[e.slice(-2).toUpperCase()]??0,s=new Date(t);for(;s.getDay()!==r;)s.setDate(s.getDate()-1);return s}function Cb(t,e){const n=new Date(t),r=((Bl[e.slice(-2).toUpperCase()]??0)+6)%7;for(;n.getDay()!==r;)n.setDate(n.getDate()+1);return n}function qy(t){return new Date(t.getFullYear(),t.getMonth(),1)}function Ky(t){return new Date(t.getFullYear(),t.getMonth()+1,0)}function Rb(t){const e=t.split("-").map(Number);return new Date(e[0],e[1]-1,e[2])}const Sb=/^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;function zy(t){if(t==null)return new Date;if(t instanceof Date)return t;if(typeof t=="string"){let e;if(Sb.test(t))return Rb(t);if(e=Date.parse(t),!isNaN(e))return new Date(e)}return null}const Bp=new Date(2e3,0,2);function Pb(t,e){const n=e??Bl[t.slice(-2).toUpperCase()]??0;return Oy(7).map(r=>{const s=new Date(Bp);return s.setDate(Bp.getDate()+n+r),new Intl.DateTimeFormat(t,{weekday:"narrow"}).format(s)})}function kb(t,e,n,r){const s=zy(t)??new Date,i=r==null?void 0:r[e];if(typeof i=="function")return i(s,e,n);let o={};switch(e){case"fullDate":o={year:"numeric",month:"long",day:"numeric"};break;case"fullDateWithWeekday":o={weekday:"long",year:"numeric",month:"long",day:"numeric"};break;case"normalDate":const l=s.getDate(),c=new Intl.DateTimeFormat(n,{month:"long"}).format(s);return`${l} ${c}`;case"normalDateWithWeekday":o={weekday:"short",day:"numeric",month:"short"};break;case"shortDate":o={month:"short",day:"numeric"};break;case"year":o={year:"numeric"};break;case"month":o={month:"long"};break;case"monthShort":o={month:"short"};break;case"monthAndYear":o={month:"long",year:"numeric"};break;case"monthAndDate":o={month:"long",day:"numeric"};break;case"weekday":o={weekday:"long"};break;case"weekdayShort":o={weekday:"short"};break;case"dayOfMonth":return new Intl.NumberFormat(n).format(s.getDate());case"hours12h":o={hour:"numeric",hour12:!0};break;case"hours24h":o={hour:"numeric",hour12:!1};break;case"minutes":o={minute:"numeric"};break;case"seconds":o={second:"numeric"};break;case"fullTime":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullTime12h":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullTime24h":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"fullDateTime":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullDateTime12h":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullDateTime24h":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"keyboardDate":o={year:"numeric",month:"2-digit",day:"2-digit"};break;case"keyboardDateTime":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"keyboardDateTime12h":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"keyboardDateTime24h":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;default:o=i??{timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(n,o).format(s)}function Nb(t,e){const n=t.toJsDate(e),r=n.getFullYear(),s=Rp(String(n.getMonth()+1),2,"0"),i=Rp(String(n.getDate()),2,"0");return`${r}-${s}-${i}`}function Db(t){const[e,n,r]=t.split("-").map(Number);return new Date(e,n-1,r)}function Ob(t,e){const n=new Date(t);return n.setMinutes(n.getMinutes()+e),n}function Mb(t,e){const n=new Date(t);return n.setHours(n.getHours()+e),n}function xb(t,e){const n=new Date(t);return n.setDate(n.getDate()+e),n}function Lb(t,e){const n=new Date(t);return n.setDate(n.getDate()+e*7),n}function Vb(t,e){const n=new Date(t);return n.setDate(1),n.setMonth(n.getMonth()+e),n}function Fb(t){return t.getFullYear()}function Ub(t){return t.getMonth()}function Bb(t){return t.getDate()}function $b(t){return new Date(t.getFullYear(),t.getMonth()+1,1)}function jb(t){return new Date(t.getFullYear(),t.getMonth()-1,1)}function Hb(t){return t.getHours()}function Wb(t){return t.getMinutes()}function qb(t){return new Date(t.getFullYear(),0,1)}function Kb(t){return new Date(t.getFullYear(),11,31)}function zb(t,e){return za(t,e[0])&&Yb(t,e[1])}function Gb(t){const e=new Date(t);return e instanceof Date&&!isNaN(e.getTime())}function za(t,e){return t.getTime()>e.getTime()}function Qb(t,e){return za(Eu(t),Eu(e))}function Yb(t,e){return t.getTime()<e.getTime()}function $p(t,e){return t.getTime()===e.getTime()}function Xb(t,e){return t.getDate()===e.getDate()&&t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function Jb(t,e){return t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function Zb(t,e){return t.getFullYear()===e.getFullYear()}function eC(t,e,n){const r=new Date(t),s=new Date(e);switch(n){case"years":return r.getFullYear()-s.getFullYear();case"quarters":return Math.floor((r.getMonth()-s.getMonth()+(r.getFullYear()-s.getFullYear())*12)/4);case"months":return r.getMonth()-s.getMonth()+(r.getFullYear()-s.getFullYear())*12;case"weeks":return Math.floor((r.getTime()-s.getTime())/(1e3*60*60*24*7));case"days":return Math.floor((r.getTime()-s.getTime())/(1e3*60*60*24));case"hours":return Math.floor((r.getTime()-s.getTime())/(1e3*60*60));case"minutes":return Math.floor((r.getTime()-s.getTime())/(1e3*60));case"seconds":return Math.floor((r.getTime()-s.getTime())/1e3);default:return r.getTime()-s.getTime()}}function tC(t,e){const n=new Date(t);return n.setHours(e),n}function nC(t,e){const n=new Date(t);return n.setMinutes(e),n}function rC(t,e){const n=new Date(t);return n.setMonth(e),n}function sC(t,e){const n=new Date(t);return n.setDate(e),n}function iC(t,e){const n=new Date(t);return n.setFullYear(e),n}function Eu(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate(),0,0,0,0)}function oC(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate(),23,59,59,999)}class aC{constructor(e){this.locale=e.locale,this.formats=e.formats}date(e){return zy(e)}toJsDate(e){return e}toISO(e){return Nb(this,e)}parseISO(e){return Db(e)}addMinutes(e,n){return Ob(e,n)}addHours(e,n){return Mb(e,n)}addDays(e,n){return xb(e,n)}addWeeks(e,n){return Lb(e,n)}addMonths(e,n){return Vb(e,n)}getWeekArray(e,n){return Ab(e,this.locale,n?Number(n):void 0)}startOfWeek(e,n){return bb(e,this.locale,n?Number(n):void 0)}endOfWeek(e){return Cb(e,this.locale)}startOfMonth(e){return qy(e)}endOfMonth(e){return Ky(e)}format(e,n){return kb(e,n,this.locale,this.formats)}isEqual(e,n){return $p(e,n)}isValid(e){return Gb(e)}isWithinRange(e,n){return zb(e,n)}isAfter(e,n){return za(e,n)}isAfterDay(e,n){return Qb(e,n)}isBefore(e,n){return!za(e,n)&&!$p(e,n)}isSameDay(e,n){return Xb(e,n)}isSameMonth(e,n){return Jb(e,n)}isSameYear(e,n){return Zb(e,n)}setMinutes(e,n){return nC(e,n)}setHours(e,n){return tC(e,n)}setMonth(e,n){return rC(e,n)}setDate(e,n){return sC(e,n)}setYear(e,n){return iC(e,n)}getDiff(e,n,r){return eC(e,n,r)}getWeekdays(e){return Pb(this.locale,e?Number(e):void 0)}getYear(e){return Fb(e)}getMonth(e){return Ub(e)}getDate(e){return Bb(e)}getNextMonth(e){return $b(e)}getPreviousMonth(e){return jb(e)}getHours(e){return Hb(e)}getMinutes(e){return Wb(e)}startOfDay(e){return Eu(e)}endOfDay(e){return oC(e)}startOfYear(e){return qb(e)}endOfYear(e){return Kb(e)}}const lC=Symbol.for("vuetify:date-options"),jp=Symbol.for("vuetify:date-adapter");function cC(t,e){const n=zt({adapter:aC,locale:{af:"af-ZA",bg:"bg-BG",ca:"ca-ES",ckb:"",cs:"cs-CZ",de:"de-DE",el:"el-GR",en:"en-US",et:"et-EE",fa:"fa-IR",fi:"fi-FI",hr:"hr-HR",hu:"hu-HU",he:"he-IL",id:"id-ID",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lv:"lv-LV",lt:"lt-LT",nl:"nl-NL",no:"no-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",srCyrl:"sr-SP",srLatn:"sr-SP",sv:"sv-SE",th:"th-TH",tr:"tr-TR",az:"az-AZ",uk:"uk-UA",vi:"vi-VN",zhHans:"zh-CN",zhHant:"zh-TW"}},t);return{options:n,instance:uC(n,e)}}function uC(t,e){const n=qt(typeof t.adapter=="function"?new t.adapter({locale:t.locale[e.current.value]??e.current.value,formats:t.formats}):t.adapter);return fn(e.current,r=>{n.locale=t.locale[r]??r??n.locale}),n}const nV=["sm","md","lg","xl","xxl"],Tu=Symbol.for("vuetify:display"),Hp={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},hC=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Hp;return zt(Hp,t)};function Wp(t){return Ft&&!t?window.innerWidth:typeof t=="object"&&t.clientWidth||0}function qp(t){return Ft&&!t?window.innerHeight:typeof t=="object"&&t.clientHeight||0}function Kp(t){const e=Ft&&!t?window.navigator.userAgent:"ssr";function n(E){return!!e.match(E)}const r=n(/android/i),s=n(/iphone|ipad|ipod/i),i=n(/cordova/i),o=n(/electron/i),l=n(/chrome/i),c=n(/edge/i),u=n(/firefox/i),h=n(/opera/i),d=n(/win/i),m=n(/mac/i),g=n(/linux/i);return{android:r,ios:s,cordova:i,electron:o,chrome:l,edge:c,firefox:u,opera:h,win:d,mac:m,linux:g,touch:OA,ssr:e==="ssr"}}function fC(t,e){const{thresholds:n,mobileBreakpoint:r}=hC(t),s=Rn(qp(e)),i=Rn(Kp(e)),o=qt({}),l=Rn(Wp(e));function c(){s.value=qp(),l.value=Wp()}function u(){c(),i.value=Kp()}return Dl(()=>{const h=l.value<n.sm,d=l.value<n.md&&!h,m=l.value<n.lg&&!(d||h),g=l.value<n.xl&&!(m||d||h),E=l.value<n.xxl&&!(g||m||d||h),S=l.value>=n.xxl,P=h?"xs":d?"sm":m?"md":g?"lg":E?"xl":"xxl",V=typeof r=="number"?r:n[r],M=l.value<V;o.xs=h,o.sm=d,o.md=m,o.lg=g,o.xl=E,o.xxl=S,o.smAndUp=!h,o.mdAndUp=!(h||d),o.lgAndUp=!(h||d||m),o.xlAndUp=!(h||d||m||g),o.smAndDown=!(m||g||E||S),o.mdAndDown=!(g||E||S),o.lgAndDown=!(E||S),o.xlAndDown=!S,o.name=P,o.height=s.value,o.width=l.value,o.mobile=M,o.mobileBreakpoint=r,o.platform=i.value,o.thresholds=n}),Ft&&window.addEventListener("resize",c,{passive:!0}),{...U_(o),update:u,ssr:!!e}}function rV(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:fb();const n=ct(Tu);if(!n)throw new Error("Could not find Vuetify display injection");const r=ue(()=>{if(t.mobile!=null)return t.mobile;if(!t.mobileBreakpoint)return n.mobile.value;const i=typeof t.mobileBreakpoint=="number"?t.mobileBreakpoint:n.thresholds.value[t.mobileBreakpoint];return n.width.value<i}),s=ue(()=>e?{[`${e}--mobile`]:r.value}:{});return{...n,displayClasses:s,mobile:r}}const dC=Symbol.for("vuetify:goto");function pC(){return{container:void 0,duration:300,layout:!1,offset:0,easing:"easeInOutCubic",patterns:{linear:t=>t,easeInQuad:t=>t**2,easeOutQuad:t=>t*(2-t),easeInOutQuad:t=>t<.5?2*t**2:-1+(4-2*t)*t,easeInCubic:t=>t**3,easeOutCubic:t=>--t**3+1,easeInOutCubic:t=>t<.5?4*t**3:(t-1)*(2*t-2)*(2*t-2)+1,easeInQuart:t=>t**4,easeOutQuart:t=>1- --t**4,easeInOutQuart:t=>t<.5?8*t**4:1-8*--t**4,easeInQuint:t=>t**5,easeOutQuint:t=>1+--t**5,easeInOutQuint:t=>t<.5?16*t**5:1+16*--t**5}}}function mC(t,e){return{rtl:e.isRtl,options:zt(pC(),t)}}const gC={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar",treeviewCollapse:"mdi-menu-down",treeviewExpand:"mdi-menu-right",eyeDropper:"mdi-eyedropper"},_C={component:t=>Vl(Qy,{...t,class:"mdi"})},yC=[String,Function,Object,Array],wu=Symbol.for("vuetify:icons"),$l=vn({icon:{type:yC},tag:{type:String,required:!0}},"icon"),zp=Oo()({name:"VComponentIcon",props:$l(),setup(t,e){let{slots:n}=e;return()=>{const r=t.icon;return pe(t.tag,null,{default:()=>{var s;return[t.icon?pe(r,null,null):(s=n.default)==null?void 0:s.call(n)]}})}}}),Gy=Do({name:"VSvgIcon",inheritAttrs:!1,props:$l(),setup(t,e){let{attrs:n}=e;return()=>pe(t.tag,Ty(n,{style:null}),{default:()=>[pe("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(t.icon)?t.icon.map(r=>Array.isArray(r)?pe("path",{d:r[0],"fill-opacity":r[1]},null):pe("path",{d:r},null)):pe("path",{d:t.icon},null)])]})}});Do({name:"VLigatureIcon",props:$l(),setup(t){return()=>pe(t.tag,null,{default:()=>[t.icon]})}});const Qy=Do({name:"VClassIcon",props:$l(),setup(t){return()=>pe(t.tag,{class:t.icon},null)}});function vC(){return{svg:{component:Gy},class:{component:Qy}}}function EC(t){const e=vC(),n=(t==null?void 0:t.defaultSet)??"mdi";return n==="mdi"&&!e.mdi&&(e.mdi=_C),zt({defaultSet:n,sets:e,aliases:{...gC,vuetify:["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",.6]],"vuetify-outline":"svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z","vuetify-play":["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z",["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z",.6]]}},t)}const sV=t=>{const e=ct(wu);if(!e)throw new Error("Missing Vuetify Icons provide!");return{iconData:ue(()=>{var c;const r=Kt(t);if(!r)return{component:zp};let s=r;if(typeof s=="string"&&(s=s.trim(),s.startsWith("$")&&(s=(c=e.aliases)==null?void 0:c[s.slice(1)])),Array.isArray(s))return{component:Gy,icon:s};if(typeof s!="string")return{component:zp,icon:s};const i=Object.keys(e.sets).find(u=>typeof s=="string"&&s.startsWith(`${u}:`)),o=i?s.slice(i.length+1):s;return{component:e.sets[i??e.defaultSet].component,icon:o}})}},Ga=Symbol.for("vuetify:theme"),TC=vn({theme:String},"theme");function Gp(){return{defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-light":"#EEEEEE","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-light":"#424242","surface-variant":"#a3a3a3","on-surface-variant":"#424242",primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}}}function wC(){var r,s;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Gp();const e=Gp();if(!t)return{...e,isDisabled:!0};const n={};for(const[i,o]of Object.entries(t.themes??{})){const l=o.dark||i==="dark"?(r=e.themes)==null?void 0:r.dark:(s=e.themes)==null?void 0:s.light;n[i]=zt(l,o)}return zt(e,{...t,themes:n})}function IC(t){const e=wC(t),n=Dt(e.defaultTheme),r=Dt(e.themes),s=ue(()=>{const h={};for(const[d,m]of Object.entries(r.value)){const g=h[d]={...m,colors:{...m.colors}};if(e.variations)for(const E of e.variations.colors){const S=g.colors[E];if(S)for(const P of["lighten","darken"]){const V=P==="lighten"?lb:cb;for(const M of Oy(e.variations[P],1))g.colors[`${E}-${P}-${M}`]=ib(V($n(S),M))}}for(const E of Object.keys(g.colors)){if(/^on-[a-z]/.test(E)||g.colors[`on-${E}`])continue;const S=`on-${E}`,P=$n(g.colors[E]);g.colors[S]=hb(P)}}return h}),i=ue(()=>s.value[n.value]),o=ue(()=>{var E;const h=[];(E=i.value)!=null&&E.dark&&Ur(h,":root",["color-scheme: dark"]),Ur(h,":root",Qp(i.value));for(const[S,P]of Object.entries(s.value))Ur(h,`.v-theme--${S}`,[`color-scheme: ${P.dark?"dark":"normal"}`,...Qp(P)]);const d=[],m=[],g=new Set(Object.values(s.value).flatMap(S=>Object.keys(S.colors)));for(const S of g)/^on-[a-z]/.test(S)?Ur(m,`.${S}`,[`color: rgb(var(--v-theme-${S})) !important`]):(Ur(d,`.bg-${S}`,[`--v-theme-overlay-multiplier: var(--v-theme-${S}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${S})) !important`,`color: rgb(var(--v-theme-on-${S})) !important`]),Ur(m,`.text-${S}`,[`color: rgb(var(--v-theme-${S})) !important`]),Ur(m,`.border-${S}`,[`--v-border-color: var(--v-theme-${S})`]));return h.push(...d,...m),h.map((S,P)=>P===0?S:`    ${S}`).join("")});function l(){return{style:[{children:o.value,id:"vuetify-theme-stylesheet",nonce:e.cspNonce||!1}]}}function c(h){if(e.isDisabled)return;const d=h._context.provides.usehead;if(d)if(d.push){const m=d.push(l);Ft&&fn(o,()=>{m.patch(l)})}else Ft?(d.addHeadObjs(ue(l)),Dl(()=>d.updateDOM())):d.addHeadObjs(l());else{let g=function(){if(typeof document<"u"&&!m){const E=document.createElement("style");E.type="text/css",E.id="vuetify-theme-stylesheet",e.cspNonce&&E.setAttribute("nonce",e.cspNonce),m=E,document.head.appendChild(m)}m&&(m.innerHTML=o.value)},m=Ft?document.getElementById("vuetify-theme-stylesheet"):null;Ft?fn(o,g,{immediate:!0}):g()}}const u=ue(()=>e.isDisabled?void 0:`v-theme--${n.value}`);return{install:c,isDisabled:e.isDisabled,name:n,themes:r,current:i,computedThemes:s,themeClasses:u,styles:o,global:{name:n,current:i}}}function AC(t){Nr("provideTheme");const e=ct(Ga,null);if(!e)throw new Error("Could not find Vuetify theme injection");const n=ue(()=>t.theme??e.name.value),r=ue(()=>e.themes.value[n.value]),s=ue(()=>e.isDisabled?void 0:`v-theme--${n.value}`),i={...e,name:n,current:r,themeClasses:s};return gr(Ga,i),i}function Ur(t,e,n){t.push(`${e} {
`,...n.map(r=>`  ${r};
`),`}
`)}function Qp(t){const e=t.dark?2:1,n=t.dark?1:2,r=[];for(const[s,i]of Object.entries(t.colors)){const o=$n(i);r.push(`--v-theme-${s}: ${o.r},${o.g},${o.b}`),s.startsWith("on-")||r.push(`--v-theme-${s}-overlay-multiplier: ${ub(i)>.18?e:n}`)}for(const[s,i]of Object.entries(t.variables)){const o=typeof i=="string"&&i.startsWith("#")?$n(i):void 0,l=o?`${o.r}, ${o.g}, ${o.b}`:void 0;r.push(`--v-${s}: ${l??i}`)}return r}function bC(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const n=HA(),r=Dt();if(Ft){const s=new ResizeObserver(i=>{i.length&&(e==="content"?r.value=i[0].contentRect:r.value=i[0].target.getBoundingClientRect())});bh(()=>{s.disconnect()}),fn(()=>n.el,(i,o)=>{o&&(s.unobserve(o),r.value=void 0),i&&s.observe(i)},{flush:"post"})}return{resizeRef:n,contentRect:Cl(r)}}const Iu=Symbol.for("vuetify:layout"),CC=Symbol.for("vuetify:layout-item"),Yp=1e3,RC=vn({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout");function SC(){const t=ct(Iu);if(!t)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:t.getLayoutItem,mainRect:t.mainRect,mainStyles:t.mainStyles}}const PC=(t,e,n,r)=>{let s={top:0,left:0,right:0,bottom:0};const i=[{id:"",layer:{...s}}];for(const o of t){const l=e.get(o),c=n.get(o),u=r.get(o);if(!l||!c||!u)continue;const h={...s,[l.value]:parseInt(s[l.value],10)+(u.value?parseInt(c.value,10):0)};i.push({id:o,layer:h}),s=h}return i};function kC(t){const e=ct(Iu,null),n=ue(()=>e?e.rootZIndex.value-100:Yp),r=Dt([]),s=qt(new Map),i=qt(new Map),o=qt(new Map),l=qt(new Map),c=qt(new Map),{resizeRef:u,contentRect:h}=bC(),d=ue(()=>{const O=new Map,A=t.overlaps??[];for(const y of A.filter(v=>v.includes(":"))){const[v,I]=y.split(":");if(!r.value.includes(v)||!r.value.includes(I))continue;const R=s.get(v),b=s.get(I),T=i.get(v),me=i.get(I);!R||!b||!T||!me||(O.set(I,{position:R.value,amount:parseInt(T.value,10)}),O.set(v,{position:b.value,amount:-parseInt(me.value,10)}))}return O}),m=ue(()=>{const O=[...new Set([...o.values()].map(y=>y.value))].sort((y,v)=>y-v),A=[];for(const y of O){const v=r.value.filter(I=>{var R;return((R=o.get(I))==null?void 0:R.value)===y});A.push(...v)}return PC(A,s,i,l)}),g=ue(()=>!Array.from(c.values()).some(O=>O.value)),E=ue(()=>m.value[m.value.length-1].layer),S=ue(()=>({"--v-layout-left":wn(E.value.left),"--v-layout-right":wn(E.value.right),"--v-layout-top":wn(E.value.top),"--v-layout-bottom":wn(E.value.bottom),...g.value?void 0:{transition:"none"}})),P=ue(()=>m.value.slice(1).map((O,A)=>{let{id:y}=O;const{layer:v}=m.value[A],I=i.get(y),R=s.get(y);return{id:y,...v,size:Number(I.value),position:R.value}})),V=O=>P.value.find(A=>A.id===O),M=Nr("createLayout"),F=Rn(!1);Nl(()=>{F.value=!0}),gr(Iu,{register:(O,A)=>{let{id:y,order:v,position:I,layoutSize:R,elementSize:b,active:T,disableTransitions:me,absolute:Ke}=A;o.set(y,v),s.set(y,I),i.set(y,R),l.set(y,T),me&&c.set(y,me);const ge=Mi(CC,M==null?void 0:M.vnode).indexOf(O);ge>-1?r.value.splice(ge,0,y):r.value.push(y);const _e=ue(()=>P.value.findIndex(Me=>Me.id===y)),ut=ue(()=>n.value+m.value.length*2-_e.value*2),Bt=ue(()=>{const Me=I.value==="left"||I.value==="right",Ve=I.value==="right",En=I.value==="bottom",Mt=b.value??R.value,_t=Mt===0?"%":"px",x={[I.value]:0,zIndex:ut.value,transform:`translate${Me?"X":"Y"}(${(T.value?0:-(Mt===0?100:Mt))*(Ve||En?-1:1)}${_t})`,position:Ke.value||n.value!==Yp?"absolute":"fixed",...g.value?void 0:{transition:"none"}};if(!F.value)return x;const G=P.value[_e.value];if(!G)throw new Error(`[Vuetify] Could not find layout item "${y}"`);const Y=d.value.get(y);return Y&&(G[Y.position]+=Y.amount),{...x,height:Me?`calc(100% - ${G.top}px - ${G.bottom}px)`:b.value?`${b.value}px`:void 0,left:Ve?void 0:`${G.left}px`,right:Ve?`${G.right}px`:void 0,top:I.value!=="bottom"?`${G.top}px`:void 0,bottom:I.value!=="top"?`${G.bottom}px`:void 0,width:Me?b.value?`${b.value}px`:void 0:`calc(100% - ${G.left}px - ${G.right}px)`}}),Ot=ue(()=>({zIndex:ut.value-1}));return{layoutItemStyles:Bt,layoutItemScrimStyles:Ot,zIndex:ut}},unregister:O=>{o.delete(O),s.delete(O),i.delete(O),l.delete(O),c.delete(O),r.value=r.value.filter(A=>A!==O)},mainRect:E,mainStyles:S,getLayoutItem:V,items:P,layoutRect:h,rootZIndex:n});const Q=ue(()=>["v-layout",{"v-layout--full-height":t.fullHeight}]),W=ue(()=>({zIndex:e?n.value:void 0,position:e?"relative":void 0,overflow:e?"hidden":void 0}));return{layoutClasses:Q,layoutStyles:W,getLayoutItem:V,items:P,layoutRect:h,layoutRef:u}}function Yy(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{blueprint:e,...n}=t,r=zt(e,n),{aliases:s={},components:i={},directives:o={}}=r,l=pb(r.defaults),c=fC(r.display,r.ssr),u=IC(r.theme),h=EC(r.icons),d=Tb(r.locale),m=cC(r.date,d),g=mC(r.goTo,d);return{install:S=>{for(const P in o)S.directive(P,o[P]);for(const P in i)S.component(P,i[P]);for(const P in s)S.component(P,Do({...s[P],name:P,aliasName:s[P].name}));if(u.install(S),S.provide(Bs,l),S.provide(Tu,c),S.provide(Ga,u),S.provide(wu,h),S.provide(Ka,d),S.provide(lC,m.options),S.provide(jp,m.instance),S.provide(dC,g),Ft&&r.ssr)if(S.$nuxt)S.$nuxt.hook("app:suspense:resolve",()=>{c.update()});else{const{mount:P}=S;S.mount=function(){const V=P(...arguments);return Ih(()=>c.update()),S.mount=P,V}}By.reset(),S.mixin({computed:{$vuetify(){return qt({defaults:_s.call(this,Bs),display:_s.call(this,Tu),theme:_s.call(this,Ga),icons:_s.call(this,wu),locale:_s.call(this,Ka),date:_s.call(this,jp)})}}})},defaults:l,display:c,theme:u,icons:h,locale:d,date:m,goTo:g}}const NC="3.7.1";Yy.version=NC;function _s(t){var r,s;const e=this.$,n=((r=e.parent)==null?void 0:r.provides)??((s=e.vnode.appContext)==null?void 0:s.provides);if(n&&t in n)return n[t]}const DC={dark:!0,colors:{"on-surface-variant":"#EEEEEE",primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786"},variables:{"medium-emphasis-opacity":.9}},OC=Yy({theme:{defaultTheme:"customdark",themes:{customdark:DC}}});var MC=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */const xC=Symbol();var Xp;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Xp||(Xp={}));function LC(){const t=E_(!0),e=t.run(()=>Dt({}));let n=[],r=[];const s=M_({install(i){s._a=i,i.provide(xC,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!MC?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const VC=LC();/*!
  * vue-router v4.4.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Es=typeof document<"u";function FC(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const xe=Object.assign;function Vc(t,e){const n={};for(const r in e){const s=e[r];n[r]=mn(s)?s.map(t):t(s)}return n}const zi=()=>{},mn=Array.isArray,Xy=/#/g,UC=/&/g,BC=/\//g,$C=/=/g,jC=/\?/g,Jy=/\+/g,HC=/%5B/g,WC=/%5D/g,Zy=/%5E/g,qC=/%60/g,ev=/%7B/g,KC=/%7C/g,tv=/%7D/g,zC=/%20/g;function Vh(t){return encodeURI(""+t).replace(KC,"|").replace(HC,"[").replace(WC,"]")}function GC(t){return Vh(t).replace(ev,"{").replace(tv,"}").replace(Zy,"^")}function Au(t){return Vh(t).replace(Jy,"%2B").replace(zC,"+").replace(Xy,"%23").replace(UC,"%26").replace(qC,"`").replace(ev,"{").replace(tv,"}").replace(Zy,"^")}function QC(t){return Au(t).replace($C,"%3D")}function YC(t){return Vh(t).replace(Xy,"%23").replace(jC,"%3F")}function XC(t){return t==null?"":YC(t).replace(BC,"%2F")}function fo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const JC=/\/$/,ZC=t=>t.replace(JC,"");function Fc(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=rR(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:fo(o)}}function eR(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Jp(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function tR(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&$s(e.matched[r],n.matched[s])&&nv(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function $s(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function nv(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!nR(t[n],e[n]))return!1;return!0}function nR(t,e){return mn(t)?Zp(t,e):mn(e)?Zp(e,t):t===e}function Zp(t,e){return mn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function rR(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const sr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var po;(function(t){t.pop="pop",t.push="push"})(po||(po={}));var Gi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Gi||(Gi={}));function sR(t){if(!t)if(Es){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),ZC(t)}const iR=/^[^#]+#/;function oR(t,e){return t.replace(iR,"#")+e}function aR(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const jl=()=>({left:window.scrollX,top:window.scrollY});function lR(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=aR(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function em(t,e){return(history.state?history.state.position-e:-1)+t}const bu=new Map;function cR(t,e){bu.set(t,e)}function uR(t){const e=bu.get(t);return bu.delete(t),e}let hR=()=>location.protocol+"//"+location.host;function rv(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),Jp(c,"")}return Jp(n,t)+r+s}function fR(t,e,n,r){let s=[],i=[],o=null;const l=({state:m})=>{const g=rv(t,location),E=n.value,S=e.value;let P=0;if(m){if(n.value=g,e.value=m,o&&o===E){o=null;return}P=S?m.position-S.position:0}else r(g);s.forEach(V=>{V(n.value,E,{delta:P,type:po.pop,direction:P?P>0?Gi.forward:Gi.back:Gi.unknown})})};function c(){o=n.value}function u(m){s.push(m);const g=()=>{const E=s.indexOf(m);E>-1&&s.splice(E,1)};return i.push(g),g}function h(){const{history:m}=window;m.state&&m.replaceState(xe({},m.state,{scroll:jl()}),"")}function d(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:u,destroy:d}}function tm(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?jl():null}}function dR(t){const{history:e,location:n}=window,r={value:rv(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,h){const d=t.indexOf("#"),m=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:hR()+t+c;try{e[h?"replaceState":"pushState"](u,"",m),s.value=u}catch(g){console.error(g),n[h?"replace":"assign"](m)}}function o(c,u){const h=xe({},e.state,tm(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,h,!0),r.value=c}function l(c,u){const h=xe({},s.value,e.state,{forward:c,scroll:jl()});i(h.current,h,!0);const d=xe({},tm(r.value,c,null),{position:h.position+1},u);i(c,d,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function pR(t){t=sR(t);const e=dR(t),n=fR(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=xe({location:"",base:t,go:r,createHref:oR.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function mR(t){return typeof t=="string"||t&&typeof t=="object"}function sv(t){return typeof t=="string"||typeof t=="symbol"}const iv=Symbol("");var nm;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(nm||(nm={}));function js(t,e){return xe(new Error,{type:t,[iv]:!0},e)}function Fn(t,e){return t instanceof Error&&iv in t&&(e==null||!!(t.type&e))}const rm="[^/]+?",gR={sensitive:!1,strict:!1,start:!0,end:!0},_R=/[.+*?^${}()[\]/\\]/g;function yR(t,e){const n=xe({},gR,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const m=u[d];let g=40+(n.sensitive?.25:0);if(m.type===0)d||(s+="/"),s+=m.value.replace(_R,"\\$&"),g+=40;else if(m.type===1){const{value:E,repeatable:S,optional:P,regexp:V}=m;i.push({name:E,repeatable:S,optional:P});const M=V||rm;if(M!==rm){g+=10;try{new RegExp(`(${M})`)}catch(Q){throw new Error(`Invalid custom RegExp for param "${E}" (${M}): `+Q.message)}}let F=S?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;d||(F=P&&u.length<2?`(?:/${F})`:"/"+F),P&&(F+="?"),s+=F,g+=20,P&&(g+=-8),S&&(g+=-20),M===".*"&&(g+=-50)}h.push(g)}r.push(h)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const h=u.match(o),d={};if(!h)return null;for(let m=1;m<h.length;m++){const g=h[m]||"",E=i[m-1];d[E.name]=g&&E.repeatable?g.split("/"):g}return d}function c(u){let h="",d=!1;for(const m of t){(!d||!h.endsWith("/"))&&(h+="/"),d=!1;for(const g of m)if(g.type===0)h+=g.value;else if(g.type===1){const{value:E,repeatable:S,optional:P}=g,V=E in u?u[E]:"";if(mn(V)&&!S)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const M=mn(V)?V.join("/"):V;if(!M)if(P)m.length<2&&(h.endsWith("/")?h=h.slice(0,-1):d=!0);else throw new Error(`Missing required param "${E}"`);h+=M}}return h||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function vR(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function ov(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=vR(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(sm(r))return 1;if(sm(s))return-1}return s.length-r.length}function sm(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const ER={type:0,value:""},TR=/[a-zA-Z0-9_]/;function wR(t){if(!t)return[[]];if(t==="/")return[[ER]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",h="";function d(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&d(),o()):c===":"?(d(),n=1):m();break;case 4:m(),n=r;break;case 1:c==="("?n=2:TR.test(c)?m():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:n=3:h+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),s}function IR(t,e,n){const r=yR(wR(t.path),n),s=xe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function AR(t,e){const n=[],r=new Map;e=am({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,m,g){const E=!g,S=bR(d);S.aliasOf=g&&g.record;const P=am(e,d),V=[S];if("alias"in d){const Q=typeof d.alias=="string"?[d.alias]:d.alias;for(const W of Q)V.push(xe({},S,{components:g?g.record.components:S.components,path:W,aliasOf:g?g.record:S}))}let M,F;for(const Q of V){const{path:W}=Q;if(m&&W[0]!=="/"){const O=m.record.path,A=O[O.length-1]==="/"?"":"/";Q.path=m.record.path+(W&&A+W)}if(M=IR(Q,m,P),g?g.alias.push(M):(F=F||M,F!==M&&F.alias.push(M),E&&d.name&&!om(M)&&o(d.name)),av(M)&&c(M),S.children){const O=S.children;for(let A=0;A<O.length;A++)i(O[A],M,g&&g.children[A])}g=g||M}return F?()=>{o(F)}:zi}function o(d){if(sv(d)){const m=r.get(d);m&&(r.delete(d),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(d);m>-1&&(n.splice(m,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function l(){return n}function c(d){const m=SR(d,n);n.splice(m,0,d),d.record.name&&!om(d)&&r.set(d.record.name,d)}function u(d,m){let g,E={},S,P;if("name"in d&&d.name){if(g=r.get(d.name),!g)throw js(1,{location:d});P=g.record.name,E=xe(im(m.params,g.keys.filter(F=>!F.optional).concat(g.parent?g.parent.keys.filter(F=>F.optional):[]).map(F=>F.name)),d.params&&im(d.params,g.keys.map(F=>F.name))),S=g.stringify(E)}else if(d.path!=null)S=d.path,g=n.find(F=>F.re.test(S)),g&&(E=g.parse(S),P=g.record.name);else{if(g=m.name?r.get(m.name):n.find(F=>F.re.test(m.path)),!g)throw js(1,{location:d,currentLocation:m});P=g.record.name,E=xe({},m.params,d.params),S=g.stringify(E)}const V=[];let M=g;for(;M;)V.unshift(M.record),M=M.parent;return{name:P,path:S,params:E,matched:V,meta:RR(V)}}t.forEach(d=>i(d));function h(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:l,getRecordMatcher:s}}function im(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function bR(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:CR(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function CR(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function om(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function RR(t){return t.reduce((e,n)=>xe(e,n.meta),{})}function am(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function SR(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;ov(t,e[i])<0?r=i:n=i+1}const s=PR(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function PR(t){let e=t;for(;e=e.parent;)if(av(e)&&ov(t,e)===0)return e}function av({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function kR(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Jy," "),o=i.indexOf("="),l=fo(o<0?i:i.slice(0,o)),c=o<0?null:fo(i.slice(o+1));if(l in e){let u=e[l];mn(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function lm(t){let e="";for(let n in t){const r=t[n];if(n=QC(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(mn(r)?r.map(i=>i&&Au(i)):[r&&Au(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function NR(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=mn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const DR=Symbol(""),cm=Symbol(""),Fh=Symbol(""),lv=Symbol(""),Cu=Symbol("");function Ri(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ur(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=m=>{m===!1?c(js(4,{from:n,to:e})):m instanceof Error?c(m):mR(m)?c(js(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),l())},h=i(()=>t.call(r&&r.instances[s],e,n,u));let d=Promise.resolve(h);t.length<3&&(d=d.then(u)),d.catch(m=>c(m))})}function Uc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(OR(c)){const h=(c.__vccOpts||c)[e];h&&i.push(ur(h,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(h=>{if(!h)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${o.path}"`));const d=FC(h)?h.default:h;o.components[l]=d;const g=(d.__vccOpts||d)[e];return g&&ur(g,n,r,o,l,s)()}))}}return i}function OR(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function um(t){const e=ct(Fh),n=ct(lv),r=ue(()=>{const c=Kt(t.to);return e.resolve(c)}),s=ue(()=>{const{matched:c}=r.value,{length:u}=c,h=c[u-1],d=n.matched;if(!h||!d.length)return-1;const m=d.findIndex($s.bind(null,h));if(m>-1)return m;const g=hm(c[u-2]);return u>1&&hm(h)===g&&d[d.length-1].path!==g?d.findIndex($s.bind(null,c[u-2])):m}),i=ue(()=>s.value>-1&&VR(n.params,r.value.params)),o=ue(()=>s.value>-1&&s.value===n.matched.length-1&&nv(n.params,r.value.params));function l(c={}){return LR(c)?e[Kt(t.replace)?"replace":"push"](Kt(t.to)).catch(zi):Promise.resolve()}return{route:r,href:ue(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}const MR=Pl({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:um,setup(t,{slots:e}){const n=qt(um(t)),{options:r}=ct(Fh),s=ue(()=>({[fm(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[fm(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Vl("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),xR=MR;function LR(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function VR(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!mn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function hm(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const fm=(t,e,n)=>t??e??n,FR=Pl({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=ct(Cu),s=ue(()=>t.route||r.value),i=ct(cm,0),o=ue(()=>{let u=Kt(i);const{matched:h}=s.value;let d;for(;(d=h[u])&&!d.components;)u++;return u}),l=ue(()=>s.value.matched[o.value]);gr(cm,ue(()=>o.value+1)),gr(DR,l),gr(Cu,s);const c=Dt();return fn(()=>[c.value,l.value,t.name],([u,h,d],[m,g,E])=>{h&&(h.instances[d]=u,g&&g!==h&&u&&u===m&&(h.leaveGuards.size||(h.leaveGuards=g.leaveGuards),h.updateGuards.size||(h.updateGuards=g.updateGuards))),u&&h&&(!g||!$s(h,g)||!m)&&(h.enterCallbacks[d]||[]).forEach(S=>S(u))},{flush:"post"}),()=>{const u=s.value,h=t.name,d=l.value,m=d&&d.components[h];if(!m)return dm(n.default,{Component:m,route:u});const g=d.props[h],E=g?g===!0?u.params:typeof g=="function"?g(u):g:null,P=Vl(m,xe({},E,e,{onVnodeUnmounted:V=>{V.component.isUnmounted&&(d.instances[h]=null)},ref:c}));return dm(n.default,{Component:P,route:u})||P}}});function dm(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const UR=FR;function BR(t){const e=AR(t.routes,t),n=t.parseQuery||kR,r=t.stringifyQuery||lm,s=t.history,i=Ri(),o=Ri(),l=Ri(),c=Rn(sr);let u=sr;Es&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Vc.bind(null,x=>""+x),d=Vc.bind(null,XC),m=Vc.bind(null,fo);function g(x,G){let Y,ee;return sv(x)?(Y=e.getRecordMatcher(x),ee=G):ee=x,e.addRoute(ee,Y)}function E(x){const G=e.getRecordMatcher(x);G&&e.removeRoute(G)}function S(){return e.getRoutes().map(x=>x.record)}function P(x){return!!e.getRecordMatcher(x)}function V(x,G){if(G=xe({},G||c.value),typeof x=="string"){const C=Fc(n,x,G.path),N=e.resolve({path:C.path},G),U=s.createHref(C.fullPath);return xe(C,N,{params:m(N.params),hash:fo(C.hash),redirectedFrom:void 0,href:U})}let Y;if(x.path!=null)Y=xe({},x,{path:Fc(n,x.path,G.path).path});else{const C=xe({},x.params);for(const N in C)C[N]==null&&delete C[N];Y=xe({},x,{params:d(C)}),G.params=d(G.params)}const ee=e.resolve(Y,G),Te=x.hash||"";ee.params=h(m(ee.params));const Fe=eR(r,xe({},x,{hash:GC(Te),path:ee.path})),w=s.createHref(Fe);return xe({fullPath:Fe,hash:Te,query:r===lm?NR(x.query):x.query||{}},ee,{redirectedFrom:void 0,href:w})}function M(x){return typeof x=="string"?Fc(n,x,c.value.path):xe({},x)}function F(x,G){if(u!==x)return js(8,{from:G,to:x})}function Q(x){return A(x)}function W(x){return Q(xe(M(x),{replace:!0}))}function O(x){const G=x.matched[x.matched.length-1];if(G&&G.redirect){const{redirect:Y}=G;let ee=typeof Y=="function"?Y(x):Y;return typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=M(ee):{path:ee},ee.params={}),xe({query:x.query,hash:x.hash,params:ee.path!=null?{}:x.params},ee)}}function A(x,G){const Y=u=V(x),ee=c.value,Te=x.state,Fe=x.force,w=x.replace===!0,C=O(Y);if(C)return A(xe(M(C),{state:typeof C=="object"?xe({},Te,C.state):Te,force:Fe,replace:w}),G||Y);const N=Y;N.redirectedFrom=G;let U;return!Fe&&tR(r,ee,Y)&&(U=js(16,{to:N,from:ee}),Ot(ee,ee,!0,!1)),(U?Promise.resolve(U):I(N,ee)).catch(L=>Fn(L)?Fn(L,2)?L:Bt(L):_e(L,N,ee)).then(L=>{if(L){if(Fn(L,2))return A(xe({replace:w},M(L.to),{state:typeof L.to=="object"?xe({},Te,L.to.state):Te,force:Fe}),G||N)}else L=b(N,ee,!0,w,Te);return R(N,ee,L),L})}function y(x,G){const Y=F(x,G);return Y?Promise.reject(Y):Promise.resolve()}function v(x){const G=En.values().next().value;return G&&typeof G.runWithContext=="function"?G.runWithContext(x):x()}function I(x,G){let Y;const[ee,Te,Fe]=$R(x,G);Y=Uc(ee.reverse(),"beforeRouteLeave",x,G);for(const C of ee)C.leaveGuards.forEach(N=>{Y.push(ur(N,x,G))});const w=y.bind(null,x,G);return Y.push(w),_t(Y).then(()=>{Y=[];for(const C of i.list())Y.push(ur(C,x,G));return Y.push(w),_t(Y)}).then(()=>{Y=Uc(Te,"beforeRouteUpdate",x,G);for(const C of Te)C.updateGuards.forEach(N=>{Y.push(ur(N,x,G))});return Y.push(w),_t(Y)}).then(()=>{Y=[];for(const C of Fe)if(C.beforeEnter)if(mn(C.beforeEnter))for(const N of C.beforeEnter)Y.push(ur(N,x,G));else Y.push(ur(C.beforeEnter,x,G));return Y.push(w),_t(Y)}).then(()=>(x.matched.forEach(C=>C.enterCallbacks={}),Y=Uc(Fe,"beforeRouteEnter",x,G,v),Y.push(w),_t(Y))).then(()=>{Y=[];for(const C of o.list())Y.push(ur(C,x,G));return Y.push(w),_t(Y)}).catch(C=>Fn(C,8)?C:Promise.reject(C))}function R(x,G,Y){l.list().forEach(ee=>v(()=>ee(x,G,Y)))}function b(x,G,Y,ee,Te){const Fe=F(x,G);if(Fe)return Fe;const w=G===sr,C=Es?history.state:{};Y&&(ee||w?s.replace(x.fullPath,xe({scroll:w&&C&&C.scroll},Te)):s.push(x.fullPath,Te)),c.value=x,Ot(x,G,Y,w),Bt()}let T;function me(){T||(T=s.listen((x,G,Y)=>{if(!Mt.listening)return;const ee=V(x),Te=O(ee);if(Te){A(xe(Te,{replace:!0}),ee).catch(zi);return}u=ee;const Fe=c.value;Es&&cR(em(Fe.fullPath,Y.delta),jl()),I(ee,Fe).catch(w=>Fn(w,12)?w:Fn(w,2)?(A(w.to,ee).then(C=>{Fn(C,20)&&!Y.delta&&Y.type===po.pop&&s.go(-1,!1)}).catch(zi),Promise.reject()):(Y.delta&&s.go(-Y.delta,!1),_e(w,ee,Fe))).then(w=>{w=w||b(ee,Fe,!1),w&&(Y.delta&&!Fn(w,8)?s.go(-Y.delta,!1):Y.type===po.pop&&Fn(w,20)&&s.go(-1,!1)),R(ee,Fe,w)}).catch(zi)}))}let Ke=Ri(),Ne=Ri(),ge;function _e(x,G,Y){Bt(x);const ee=Ne.list();return ee.length?ee.forEach(Te=>Te(x,G,Y)):console.error(x),Promise.reject(x)}function ut(){return ge&&c.value!==sr?Promise.resolve():new Promise((x,G)=>{Ke.add([x,G])})}function Bt(x){return ge||(ge=!x,me(),Ke.list().forEach(([G,Y])=>x?Y(x):G()),Ke.reset()),x}function Ot(x,G,Y,ee){const{scrollBehavior:Te}=t;if(!Es||!Te)return Promise.resolve();const Fe=!Y&&uR(em(x.fullPath,0))||(ee||!Y)&&history.state&&history.state.scroll||null;return Ih().then(()=>Te(x,G,Fe)).then(w=>w&&lR(w)).catch(w=>_e(w,x,G))}const Me=x=>s.go(x);let Ve;const En=new Set,Mt={currentRoute:c,listening:!0,addRoute:g,removeRoute:E,clearRoutes:e.clearRoutes,hasRoute:P,getRoutes:S,resolve:V,options:t,push:Q,replace:W,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:Ne.add,isReady:ut,install(x){const G=this;x.component("RouterLink",xR),x.component("RouterView",UR),x.config.globalProperties.$router=G,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>Kt(c)}),Es&&!Ve&&c.value===sr&&(Ve=!0,Q(s.location).catch(Te=>{}));const Y={};for(const Te in sr)Object.defineProperty(Y,Te,{get:()=>c.value[Te],enumerable:!0});x.provide(Fh,G),x.provide(lv,D_(Y)),x.provide(Cu,c);const ee=x.unmount;En.add(x),x.unmount=function(){En.delete(x),En.size<1&&(u=sr,T&&T(),T=null,c.value=sr,Ve=!1,ge=!1),ee()}}};function _t(x){return x.reduce((G,Y)=>G.then(()=>v(Y)),Promise.resolve())}return Mt}function $R(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>$s(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>$s(u,c))||s.push(c))}return[n,r,s]}function jR(t){const{extendRoutes:e,routes:n}=t;return e&&console.warn('"extendRoutes()" is deprecated, please modify the routes directly. See https://uvr.esm.is/guide/extending-routes.html#extending-routes-at-runtime for an alternative.'),BR(Object.assign(t,{routes:typeof e=="function"&&e(n)||n}))}const HR="modulepreload",WR=function(t){return"/"+t},pm={},Qa=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),o=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));s=Promise.all(n.map(l=>{if(l=WR(l),l in pm)return;pm[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":HR,c||(h.as="script",h.crossOrigin=""),h.href=l,o&&h.setAttribute("nonce",o),document.head.appendChild(h),c)return new Promise((d,m)=>{h.addEventListener("load",d),h.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}return s.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},qR=t=>{const e={};Object.entries(Object.assign({"/src/layouts/default.vue":()=>Qa(()=>import("./default-DGrKIPt9.js"),[])})).forEach(([s,i])=>{let o=s.replace("/src/layouts/","").replace(".vue","");e[o]=i});function r(s,i=!0){return s.map(o=>{var l,c,u,h,d,m;if(((l=o.children)==null?void 0:l.length)>0&&(o.children=r(o.children,!1)),i){if(!o.component&&((c=o.children)==null?void 0:c.find(E=>{var S;return(E.path===""||E.path==="/")&&((S=E.meta)==null?void 0:S.isLayout)})))return o;if(((u=o.meta)==null?void 0:u.layout)!==!1)return{path:o.path,component:e[((h=o.meta)==null?void 0:h.layout)||"default"],children:o.path==="/"?[o]:[{...o,path:""}],meta:{isLayout:!0}}}return(d=o.meta)!=null&&d.layout?{path:o.path,component:e[(m=o.meta)==null?void 0:m.layout],children:[{...o,path:""}],meta:{isLayout:!0}}:o})}return r(t)},KR=[{path:"/",name:"/",component:()=>Qa(()=>Promise.resolve().then(()=>sS),void 0)},{path:"/PostCampoutSurvey",name:"/PostCampoutSurvey",component:()=>Qa(()=>Promise.resolve().then(()=>iS),void 0)}],zR="/assets/header-DuGFuV-t.png",GR=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Uh=vn({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Bh(t){return{dimensionStyles:ue(()=>{const n={},r=wn(t.height),s=wn(t.maxHeight),i=wn(t.maxWidth),o=wn(t.minHeight),l=wn(t.minWidth),c=wn(t.width);return r!=null&&(n.height=r),s!=null&&(n.maxHeight=s),i!=null&&(n.maxWidth=i),o!=null&&(n.minHeight=o),l!=null&&(n.minWidth=l),c!=null&&(n.width=c),n})}}const cv=vn({tag:{type:String,default:"div"}},"tag"),QR=vn({fluid:{type:Boolean,default:!1},...Fl(),...Uh(),...cv()},"VContainer"),YR=Oo()({name:"VContainer",props:QR(),setup(t,e){let{slots:n}=e;const{rtlClasses:r}=Wy(),{dimensionStyles:s}=Bh(t);return Ul(()=>pe(t.tag,{class:["v-container",{"v-container--fluid":t.fluid},r.value,t.class],style:[s.value,t.style]},n)),{}}});function XR(t){return{aspectStyles:ue(()=>{const e=Number(t.aspectRatio);return e?{paddingBottom:String(1/e*100)+"%"}:void 0})}}const JR=vn({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...Fl(),...Uh()},"VResponsive"),ZR=Oo()({name:"VResponsive",props:JR(),setup(t,e){let{slots:n}=e;const{aspectStyles:r}=XR(t),{dimensionStyles:s}=Bh(t);return Ul(()=>{var i;return pe("div",{class:["v-responsive",{"v-responsive--inline":t.inline},t.class],style:[s.value,t.style]},[pe("div",{class:"v-responsive__sizer",style:r.value},null),(i=n.additional)==null?void 0:i.call(n),n.default&&pe("div",{class:["v-responsive__content",t.contentClass]},[n.default()])])}),{}}}),eS={},tS=t=>(F0("data-v-5773da3a"),t=t(),U0(),t),nS=tS(()=>Oh("img",{src:zR,alt:"WHYNOT CAMPOUT BANNER",class:"header"},null,-1));function rS(t,e){return ei(),Po(YR,null,{default:Xr(()=>[pe(ZR,null,{default:Xr(()=>[nS]),_:1})]),_:1})}const uv=GR(eS,[["render",rS],["__scopeId","data-v-5773da3a"]]),sS=Object.freeze(Object.defineProperty({__proto__:null,default:uv},Symbol.toStringTag,{value:"Module"})),hv={__name:"PostCampoutSurvey",setup(t){const e=j0(()=>Qa(()=>import("./Survey-B2RMosrG.js"),__vite__mapDeps([0,1])));return(n,r)=>(ei(),Po(OI,null,{default:Xr(()=>[pe(Kt(e))]),fallback:Xr(()=>[Ey(" Loading... ")]),_:1}))}},iS=Object.freeze(Object.defineProperty({__proto__:null,default:hv},Symbol.toStringTag,{value:"Module"})),$h=jR({history:pR("/"),routes:qR([...KR,{path:"/",name:"index",component:uv},{path:"/post-campout-survey",name:"PostCampoutSurvey",component:hv}])});$h.onError((t,e)=>{var n,r;(r=(n=t==null?void 0:t.message)==null?void 0:n.includes)!=null&&r.call(n,"Failed to fetch dynamically imported module")?localStorage.getItem("vuetify:dynamic-reload")?console.error("Dynamic import error, reloading page did not fix it",t):(console.log("Reloading page to fix dynamic import error"),localStorage.setItem("vuetify:dynamic-reload","true"),location.assign(e.fullPath)):console.error(t)});$h.isReady().then(()=>{localStorage.removeItem("vuetify:dynamic-reload")});var mm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fv={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J=function(t,e){if(!t)throw ti(e)},ti=function(t){return new Error("Firebase Database ("+fv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},oS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Hl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,h=i>>2,d=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,g=u&63;c||(g=64,o||(m=64)),r.push(n[h],n[d],n[m],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(dv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):oS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||d==null)throw new aS;const m=i<<2|l>>4;if(r.push(m),u!==64){const g=l<<4&240|u>>2;if(r.push(g),d!==64){const E=u<<6&192|d;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class aS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pv=function(t){const e=dv(t);return Hl.encodeByteArray(e,!0)},Ya=function(t){return pv(t).replace(/\./g,"")},Xa=function(t){try{return Hl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lS(t){return mv(void 0,t)}function mv(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!cS(n)||(t[n]=mv(t[n],e[n]));return t}function cS(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS=()=>uS().__FIREBASE_DEFAULTS__,fS=()=>{if(typeof process>"u"||typeof mm>"u")return;const t=mm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},dS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Xa(t[1]);return e&&JSON.parse(e)},Wl=()=>{try{return hS()||fS()||dS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},pS=t=>{var e,n;return(n=(e=Wl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},mS=t=>{const e=pS(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},gv=()=>{var t;return(t=Wl())===null||t===void 0?void 0:t.config},gS=t=>{var e;return(e=Wl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _S(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ya(JSON.stringify(n)),Ya(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gn())}function yS(){var t;const e=(t=Wl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function vS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function _v(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yv(){return fv.NODE_ADMIN===!0}function ES(){return!yS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function vv(){try{return typeof indexedDB=="object"}catch{return!1}}function TS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS="FirebaseError";class Yn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=wS,Object.setPrototypeOf(this,Yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ni.prototype.create)}}class ni{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?IS(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Yn(s,l,r)}}function IS(t,e){return t.replace(AS,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const AS=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(t){return JSON.parse(t)}function dt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=go(Xa(i[0])||""),n=go(Xa(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},bS=function(t){const e=Ev(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},CS=function(t){const e=Ev(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Hs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function gm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ja(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function Ru(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(_m(i)&&_m(o)){if(!Ru(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function _m(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hh(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const m=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(m<<1|m>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],u,h;for(let d=0;d<80;d++){d<40?d<20?(u=l^i&(o^l),h=1518500249):(u=i^o^l,h=1859775393):d<60?(u=i&o|l&(i|o),h=2400959708):(u=i^o^l,h=3395469782);const m=(s<<5|s>>>27)+u+c+h+r[d]&4294967295;c=l,l=o,o=(i<<30|i>>>2)&4294967295,i=s,s=m}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function SS(t,e){const n=new PS(t,e);return n.subscribe.bind(n)}class PS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");kS(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Bc),s.error===void 0&&(s.error=Bc),s.complete===void 0&&(s.complete=Bc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Bc(){}function NS(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,J(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ql=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(t){return t&&t._delegate?t._delegate:t}class _n{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new mo;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xS(e))try{this.getOrInitializeService({instanceIdentifier:Br})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Br){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Br){return this.instances.has(e)}getOptions(e=Br){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:MS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Br){return this.component?this.component.multipleInstances?e:Br:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function MS(t){return t===Br?void 0:t}function xS(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new OS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const VS={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},FS=ye.INFO,US={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},BS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=US[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mo{constructor(e){this.name=e,this._logLevel=FS,this._logHandler=BS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?VS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const $S=(t,e)=>e.some(n=>t instanceof n);let ym,vm;function jS(){return ym||(ym=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function HS(){return vm||(vm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Tv=new WeakMap,Su=new WeakMap,wv=new WeakMap,$c=new WeakMap,Wh=new WeakMap;function WS(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(_r(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Tv.set(n,t)}).catch(()=>{}),Wh.set(e,t),e}function qS(t){if(Su.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Su.set(t,e)}let Pu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Su.get(t);if(e==="objectStoreNames")return t.objectStoreNames||wv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _r(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function KS(t){Pu=t(Pu)}function zS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(jc(this),e,...n);return wv.set(r,e.sort?e.sort():[e]),_r(r)}:HS().includes(t)?function(...e){return t.apply(jc(this),e),_r(Tv.get(this))}:function(...e){return _r(t.apply(jc(this),e))}}function GS(t){return typeof t=="function"?zS(t):(t instanceof IDBTransaction&&qS(t),$S(t,jS())?new Proxy(t,Pu):t)}function _r(t){if(t instanceof IDBRequest)return WS(t);if($c.has(t))return $c.get(t);const e=GS(t);return e!==t&&($c.set(t,e),Wh.set(e,t)),e}const jc=t=>Wh.get(t);function QS(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=_r(o);return r&&o.addEventListener("upgradeneeded",c=>{r(_r(o.result),c.oldVersion,c.newVersion,_r(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const YS=["get","getKey","getAll","getAllKeys","count"],XS=["put","add","delete","clear"],Hc=new Map;function Em(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Hc.get(e))return Hc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=XS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||YS.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return Hc.set(e,i),i}KS(t=>({...t,get:(e,n,r)=>Em(e,n)||t.get(e,n,r),has:(e,n)=>!!Em(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ZS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ZS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ku="@firebase/app",Tm="0.10.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn=new Mo("@firebase/app"),eP="@firebase/app-compat",tP="@firebase/analytics-compat",nP="@firebase/analytics",rP="@firebase/app-check-compat",sP="@firebase/app-check",iP="@firebase/auth",oP="@firebase/auth-compat",aP="@firebase/database",lP="@firebase/database-compat",cP="@firebase/functions",uP="@firebase/functions-compat",hP="@firebase/installations",fP="@firebase/installations-compat",dP="@firebase/messaging",pP="@firebase/messaging-compat",mP="@firebase/performance",gP="@firebase/performance-compat",_P="@firebase/remote-config",yP="@firebase/remote-config-compat",vP="@firebase/storage",EP="@firebase/storage-compat",TP="@firebase/firestore",wP="@firebase/vertexai-preview",IP="@firebase/firestore-compat",AP="firebase",bP="10.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu="[DEFAULT]",CP={[ku]:"fire-core",[eP]:"fire-core-compat",[nP]:"fire-analytics",[tP]:"fire-analytics-compat",[sP]:"fire-app-check",[rP]:"fire-app-check-compat",[iP]:"fire-auth",[oP]:"fire-auth-compat",[aP]:"fire-rtdb",[lP]:"fire-rtdb-compat",[cP]:"fire-fn",[uP]:"fire-fn-compat",[hP]:"fire-iid",[fP]:"fire-iid-compat",[dP]:"fire-fcm",[pP]:"fire-fcm-compat",[mP]:"fire-perf",[gP]:"fire-perf-compat",[_P]:"fire-rc",[yP]:"fire-rc-compat",[vP]:"fire-gcs",[EP]:"fire-gcs-compat",[TP]:"fire-fst",[IP]:"fire-fst-compat",[wP]:"fire-vertex","fire-js":"fire-js",[AP]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za=new Map,RP=new Map,Du=new Map;function wm(t,e){try{t.container.addComponent(e)}catch(n){Kn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Nn(t){const e=t.name;if(Du.has(e))return Kn.debug(`There were multiple attempts to register component ${e}.`),!1;Du.set(e,t);for(const n of Za.values())wm(n,t);for(const n of RP.values())wm(n,t);return!0}function SP(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function xi(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yr=new ni("app","Firebase",PP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=bP;function Iv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Nu,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw yr.create("bad-app-name",{appName:String(s)});if(n||(n=gv()),!n)throw yr.create("no-options");const i=Za.get(s);if(i){if(Ru(n,i.options)&&Ru(r,i.config))return i;throw yr.create("duplicate-app",{appName:s})}const o=new LS(s);for(const c of Du.values())o.addComponent(c);const l=new kP(n,r,o);return Za.set(s,l),l}function Av(t=Nu){const e=Za.get(t);if(!e&&t===Nu&&gv())return Iv();if(!e)throw yr.create("no-app",{appName:t});return e}function Gt(t,e,n){var r;let s=(r=CP[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kn.warn(l.join(" "));return}Nn(new _n(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NP="firebase-heartbeat-database",DP=1,_o="firebase-heartbeat-store";let Wc=null;function bv(){return Wc||(Wc=QS(NP,DP,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(_o)}catch(n){console.warn(n)}}}}).catch(t=>{throw yr.create("idb-open",{originalErrorMessage:t.message})})),Wc}async function OP(t){try{const n=(await bv()).transaction(_o),r=await n.objectStore(_o).get(Cv(t));return await n.done,r}catch(e){if(e instanceof Yn)Kn.warn(e.message);else{const n=yr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Kn.warn(n.message)}}}async function Im(t,e){try{const r=(await bv()).transaction(_o,"readwrite");await r.objectStore(_o).put(e,Cv(t)),await r.done}catch(n){if(n instanceof Yn)Kn.warn(n.message);else{const r=yr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Kn.warn(r.message)}}}function Cv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MP=1024,xP=30*24*60*60*1e3;class LP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new FP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n,r;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Am();return console.log("heartbeats",(e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats),((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)===null||r===void 0?void 0:r.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const c=new Date(l.date).valueOf();return Date.now()-c<=xP}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Kn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Am(),{heartbeatsToSend:r,unsentEntries:s}=VP(this._heartbeatsCache.heartbeats),i=Ya(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Kn.warn(n),""}}}function Am(){return new Date().toISOString().substring(0,10)}function VP(t,e=MP){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),bm(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),bm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class FP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vv()?TS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await OP(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Im(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Im(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function bm(t){return Ya(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UP(t){Nn(new _n("platform-logger",e=>new JS(e),"PRIVATE")),Nn(new _n("heartbeat",e=>new LP(e),"PRIVATE")),Gt(ku,Tm,t),Gt(ku,Tm,"esm2017"),Gt("fire-js","")}UP("");function Rv(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Sv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const BP=Sv,Pv=new ni("auth","Firebase",Sv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el=new Mo("@firebase/auth");function $P(t,...e){el.logLevel<=ye.WARN&&el.warn(`Auth (${ri}): ${t}`,...e)}function Da(t,...e){el.logLevel<=ye.ERROR&&el.error(`Auth (${ri}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(t,...e){throw qh(t,...e)}function kv(t,...e){return qh(t,...e)}function Nv(t,e,n){const r=Object.assign(Object.assign({},BP()),{[e]:n});return new ni("auth","Firebase",r).create(e,{appName:t.name})}function Oa(t){return Nv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function qh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Pv.create(t,...e)}function ke(t,e,...n){if(!t)throw qh(e,...n)}function Qi(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Da(e),new Error(e)}function tl(t,e){t||Qi(e)}function jP(){return Rm()==="http:"||Rm()==="https:"}function Rm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jP()||vS()||"connection"in navigator)?navigator.onLine:!0}function WP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,n){this.shortDelay=e,this.longDelay=n,tl(n>e,"Short delay should be less than long delay!"),this.isMobile=jh()||_v()}get(){return HP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qP(t,e){tl(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Qi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Qi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Qi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zP=new xo(3e4,6e4);function Ov(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Kl(t,e,n,r,s={}){return Mv(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Hh(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Dv.fetch()(xv(t,t.config.apiHost,n,l),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Mv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},KP),e);try{const s=new GP(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ya(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ya(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ya(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ya(t,"user-disabled",o);const h=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Nv(t,h,u);Cm(t,h)}}catch(s){if(s instanceof Yn)throw s;Cm(t,"network-request-failed",{message:String(s)})}}function xv(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?qP(t.config,s):`${t.config.apiScheme}://${s}`}class GP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(kv(this.auth,"network-request-failed")),zP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ya(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=kv(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QP(t,e){return Kl(t,"POST","/v1/accounts:delete",e)}async function Lv(t,e){return Kl(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function YP(t,e=!1){const n=kn(t),r=await n.getIdToken(e),s=Vv(r);ke(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Yi(qc(s.auth_time)),issuedAtTime:Yi(qc(s.iat)),expirationTime:Yi(qc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function qc(t){return Number(t)*1e3}function Vv(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Da("JWT malformed, contained fewer than 3 sections"),null;try{const s=Xa(n);return s?JSON.parse(s):(Da("Failed to decode base64 JWT payload"),null)}catch(s){return Da("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Sm(t){const e=Vv(t);return ke(e,"internal-error"),ke(typeof e.exp<"u","internal-error"),ke(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ou(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Yn&&XP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function XP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yi(this.lastLoginAt),this.creationTime=Yi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nl(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ou(t,Lv(n,{idToken:r}));ke(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Fv(i.providerUserInfo):[],l=e1(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),h=c?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Mu(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function ZP(t){const e=kn(t);await nl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function e1(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Fv(t){return t.map(e=>{var{providerId:n}=e,r=Rv(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t1(t,e){const n=await Mv(t,{},async()=>{const r=Hh({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=xv(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Dv.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function n1(t,e){return Kl(t,"POST","/v2/accounts:revokeToken",Ov(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ke(e.idToken,"internal-error"),ke(typeof e.idToken<"u","internal-error"),ke(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ke(e.length!==0,"internal-error");const n=Sm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ke(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await t1(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ns;return r&&(ke(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ke(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ke(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ns,this.toJSON())}_performRefresh(){return Qi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(t,e){ke(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class fr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Rv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new JP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Mu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ou(this,this.stsTokenManager.getToken(this.auth,e));return ke(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return YP(this,e)}reload(){return ZP(this)}_assign(e){this!==e&&(ke(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new fr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ke(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await nl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xi(this.auth.app))return Promise.reject(Oa(this.auth));const e=await this.getIdToken();return await Ou(this,QP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,h;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(l=n.tenantId)!==null&&l!==void 0?l:void 0,P=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,V=(u=n.createdAt)!==null&&u!==void 0?u:void 0,M=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:F,emailVerified:Q,isAnonymous:W,providerData:O,stsTokenManager:A}=n;ke(F&&A,e,"internal-error");const y=Ns.fromJSON(this.name,A);ke(typeof F=="string",e,"internal-error"),ir(d,e.name),ir(m,e.name),ke(typeof Q=="boolean",e,"internal-error"),ke(typeof W=="boolean",e,"internal-error"),ir(g,e.name),ir(E,e.name),ir(S,e.name),ir(P,e.name),ir(V,e.name),ir(M,e.name);const v=new fr({uid:F,auth:e,email:m,emailVerified:Q,displayName:d,isAnonymous:W,photoURL:E,phoneNumber:g,tenantId:S,stsTokenManager:y,createdAt:V,lastLoginAt:M});return O&&Array.isArray(O)&&(v.providerData=O.map(I=>Object.assign({},I))),P&&(v._redirectEventId=P),v}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ns;s.updateFromServerResponse(n);const i=new fr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await nl(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ke(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Fv(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Ns;l.updateFromIdToken(r);const c=new fr({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Mu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm=new Map;function Hr(t){tl(t instanceof Function,"Expected a class definition");let e=Pm.get(t);return e?(tl(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Pm.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Uv.type="NONE";const km=Uv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(t,e,n){return`firebase:${t}:${e}:${n}`}class Ds{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Kc(this.userKey,s.apiKey,i),this.fullPersistenceKey=Kc("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?fr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ds(Hr(km),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Hr(km);const o=Kc(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const h=await u._get(o);if(h){const d=fr._fromJSON(e,h);u!==i&&(l=d),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ds(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Ds(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(o1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(r1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(l1(e))return"Blackberry";if(c1(e))return"Webos";if(s1(e))return"Safari";if((e.includes("chrome/")||i1(e))&&!e.includes("edge/"))return"Chrome";if(a1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function r1(t=gn()){return/firefox\//i.test(t)}function s1(t=gn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function i1(t=gn()){return/crios\//i.test(t)}function o1(t=gn()){return/iemobile/i.test(t)}function a1(t=gn()){return/android/i.test(t)}function l1(t=gn()){return/blackberry/i.test(t)}function c1(t=gn()){return/webos/i.test(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bv(t,e=[]){let n;switch(t){case"Browser":n=Nm(gn());break;case"Worker":n=`${Nm(gn())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ri}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h1(t,e={}){return Kl(t,"GET","/v2/passwordPolicy",Ov(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f1=6;class d1{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:f1,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dm(this),this.idTokenSubscription=new Dm(this),this.beforeStateQueue=new u1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Pv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Hr(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ds.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Lv(this,{idToken:e}),r=await fr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(xi(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ke(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await nl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=WP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(xi(this.app))return Promise.reject(Oa(this));const n=e?kn(e):null;return n&&ke(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ke(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return xi(this.app)?Promise.reject(Oa(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return xi(this.app)?Promise.reject(Oa(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Hr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await h1(this),n=new d1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ni("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await n1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Hr(e)||this._popupRedirectResolver;ke(n,this,"argument-error"),this.redirectPersistenceManager=await Ds.create(this,[Hr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ke(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ke(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Bv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&$P(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function m1(t){return kn(t)}class Dm{constructor(e){this.auth=e,this.observer=null,this.addObserver=SS(n=>this.observer=n)}get next(){return ke(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function g1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Hr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}new xo(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new xo(2e3,1e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new xo(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new xo(5e3,15e3);var Om="@firebase/auth",Mm="1.7.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ke(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function v1(t){Nn(new _n("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ke(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Bv(t)},u=new p1(r,s,i,c);return g1(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Nn(new _n("auth-internal",e=>{const n=m1(e.getProvider("auth").getImmediate());return(r=>new _1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gt(Om,Mm,y1(t)),Gt(Om,Mm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E1=5*60;gS("authIdTokenMaxAge");v1("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T1=new Map,w1={activated:!1,tokenObservers:[]};function yn(t){return T1.get(t)||Object.assign({},w1)}const xm={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{constructor(e,n,r,s,i){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=r,this.lowerBound=s,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=s,s>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new mo,this.pending.promise.catch(n=>{}),await A1(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new mo,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function A1(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b1={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},rl=new ni("appCheck","AppCheck",b1);function $v(t){if(!yn(t).activated)throw rl.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C1="firebase-app-check-database",R1=1,xu="firebase-app-check-store";let va=null;function S1(){return va||(va=new Promise((t,e)=>{try{const n=indexedDB.open(C1,R1);n.onsuccess=r=>{t(r.target.result)},n.onerror=r=>{var s;e(rl.create("storage-open",{originalErrorMessage:(s=r.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=r=>{const s=r.target.result;switch(r.oldVersion){case 0:s.createObjectStore(xu,{keyPath:"compositeKey"})}}}catch(n){e(rl.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),va)}function P1(t,e){return k1(N1(t),e)}async function k1(t,e){const r=(await S1()).transaction(xu,"readwrite"),i=r.objectStore(xu).put({compositeKey:t,value:e});return new Promise((o,l)=>{i.onsuccess=c=>{o()},r.onerror=c=>{var u;l(rl.create("storage-set",{originalErrorMessage:(u=c.target.error)===null||u===void 0?void 0:u.message}))}})}function N1(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu=new Mo("@firebase/app-check");function Lm(t,e){return vv()?P1(t,e).catch(n=>{Lu.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D1={error:"UNKNOWN_ERROR"};function O1(t){return Hl.encodeString(JSON.stringify(t),!1)}async function Vu(t,e=!1){const n=t.app;$v(n);const r=yn(n);let s=r.token,i;if(s&&!Li(s)&&(r.token=void 0,s=void 0),!s){const c=await r.cachedTokenPromise;c&&(Li(c)?s=c:await Lm(n,void 0))}if(!e&&s&&Li(s))return{token:s.token};let o=!1;try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),o=!0),s=await yn(n).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?Lu.warn(c.message):Lu.error(c),i=c}let l;return s?i?Li(s)?l={token:s.token,internalError:i}:l=Fm(i):(l={token:s.token},r.token=s,await Lm(n,s)):l=Fm(i),o&&V1(n,l),l}async function M1(t){const e=t.app;$v(e);const{provider:n}=yn(e);{const{token:r}=await n.getToken();return{token:r}}}function x1(t,e,n,r){const{app:s}=t,i=yn(s),o={next:n,error:r,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&Li(i.token)){const l=i.token;Promise.resolve().then(()=>{n({token:l.token}),Vm(t)}).catch(()=>{})}i.cachedTokenPromise.then(()=>Vm(t))}function jv(t,e){const n=yn(t),r=n.tokenObservers.filter(s=>s.next!==e);r.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function Vm(t){const{app:e}=t,n=yn(e);let r=n.tokenRefresher;r||(r=L1(t),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function L1(t){const{app:e}=t;return new I1(async()=>{const n=yn(e);let r;if(n.token?r=await Vu(t,!0):r=await Vu(t),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const n=yn(e);if(n.token){let r=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,s),Math.max(0,r-Date.now())}else return 0},xm.RETRIAL_MIN_WAIT,xm.RETRIAL_MAX_WAIT)}function V1(t,e){const n=yn(t).tokenObservers;for(const r of n)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function Li(t){return t.expireTimeMillis-Date.now()>0}function Fm(t){return{token:O1(D1),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=yn(this.app);for(const n of e)jv(this.app,n.next);return Promise.resolve()}}function U1(t,e){return new F1(t,e)}function B1(t){return{getToken:e=>Vu(t,e),getLimitedUseToken:()=>M1(t),addTokenListener:e=>x1(t,"INTERNAL",e),removeTokenListener:e=>jv(t.app,e)}}const $1="@firebase/app-check",j1="0.8.7",H1="app-check",Um="app-check-internal";function W1(){Nn(new _n(H1,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return U1(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Um).initialize()})),Nn(new _n(Um,t=>{const e=t.getProvider("app-check").getImmediate();return B1(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Gt($1,j1)}W1();var q1="firebase",K1="10.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gt(q1,K1,"app");const Hv=Symbol("firebaseApp");function z1(t){return xl()&&ct(Hv,null)||Av(t)}var Bm={};const $m="@firebase/database",jm="1.0.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wv="";function G1(t){Wv=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),dt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:go(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Xn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Q1(e)}}catch{}return new Y1},Wr=qv("localStorage"),X1=qv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os=new Mo("@firebase/database"),J1=function(){let t=1;return function(){return t++}}(),Kv=function(t){const e=DS(t),n=new RS;n.update(e);const r=n.digest();return Hl.encodeByteArray(r)},Lo=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Lo.apply(null,r):typeof r=="object"?e+=dt(r):e+=r,e+=" "}return e};let Xi=null,Hm=!0;const Z1=function(t,e){J(!e,"Can't turn on custom loggers persistently."),Os.logLevel=ye.VERBOSE,Xi=Os.log.bind(Os)},wt=function(...t){if(Hm===!0&&(Hm=!1,Xi===null&&X1.get("logging_enabled")===!0&&Z1()),Xi){const e=Lo.apply(null,t);Xi(e)}},Vo=function(t){return function(...e){wt(t,...e)}},Fu=function(...t){const e="FIREBASE INTERNAL ERROR: "+Lo(...t);Os.error(e)},Jr=function(...t){const e=`FIREBASE FATAL ERROR: ${Lo(...t)}`;throw Os.error(e),new Error(e)},Qt=function(...t){const e="FIREBASE WARNING: "+Lo(...t);Os.warn(e)},ek=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Qt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},zv=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},tk=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ws="[MIN_NAME]",Zr="[MAX_NAME]",si=function(t,e){if(t===e)return 0;if(t===Ws||e===Zr)return-1;if(e===Ws||t===Zr)return 1;{const n=Wm(t),r=Wm(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},nk=function(t,e){return t===e?0:t<e?-1:1},Si=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+dt(e))},Kh=function(t){if(typeof t!="object"||t===null)return dt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=dt(e[r]),n+=":",n+=Kh(t[e[r]]);return n+="}",n},Gv=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function sn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Qv=function(t){J(!zv(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,l,c;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(c=n;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(s?1:0),u.reverse();const h=u.join("");let d="";for(c=0;c<64;c+=8){let m=parseInt(h.substr(c,8),2).toString(16);m.length===1&&(m="0"+m),d=d+m}return d.toLowerCase()},rk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},sk=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},ik=new RegExp("^-?(0*)\\d{1,10}$"),ok=-2147483648,ak=2147483647,Wm=function(t){if(ik.test(t)){const e=Number(t);if(e>=ok&&e<=ak)return e}return null},Fo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Qt("Exception was thrown by user callback.",n),e},Math.floor(0))}},lk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ji=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Qt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(wt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Qt(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh="5",Yv="v",Xv="s",Jv="r",Zv="f",eE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,tE="ls",nE="p",Uu="ac",rE="websocket",sE="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(e,n,r,s,i=!1,o="",l=!1,c=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Wr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Wr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function fk(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function iE(t,e,n){J(typeof e=="string","typeof type must == string"),J(typeof n=="object","typeof params must == object");let r;if(e===rE)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===sE)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);fk(t)&&(n.ns=t.namespace);const s=[];return sn(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(){this.counters_={}}incrementCounter(e,n=1){Xn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return lS(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc={},Gc={};function Gh(t){const e=t.toString();return zc[e]||(zc[e]=new dk),zc[e]}function pk(t,e){const n=t.toString();return Gc[n]||(Gc[n]=e()),Gc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&Fo(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm="start",gk="close",_k="pLPCommand",yk="pRTLPCB",oE="id",aE="pw",lE="ser",vk="cb",Ek="seg",Tk="ts",wk="d",Ik="dframe",cE=1870,uE=30,Ak=cE-uE,bk=25e3,Ck=3e4;class As{constructor(e,n,r,s,i,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Vo(e),this.stats_=Gh(n),this.urlFn=c=>(this.appCheckToken&&(c[Uu]=this.appCheckToken),iE(n,sE,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new mk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Ck)),tk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Qh((...i)=>{const[o,l,c,u,h]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===qm)this.id=l,this.password=c;else if(o===gk)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,l]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[qm]="t",r[lE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[vk]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Yv]=zh,this.transportSessionId&&(r[Xv]=this.transportSessionId),this.lastSessionId&&(r[tE]=this.lastSessionId),this.applicationId&&(r[nE]=this.applicationId),this.appCheckToken&&(r[Uu]=this.appCheckToken),typeof location<"u"&&location.hostname&&eE.test(location.hostname)&&(r[Jv]=Zv);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){As.forceAllow_=!0}static forceDisallow(){As.forceDisallow_=!0}static isAvailable(){return As.forceAllow_?!0:!As.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!rk()&&!sk()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=dt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=pv(n),s=Gv(r,Ak);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[Ik]="t",r[oE]=e,r[aE]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=dt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Qh{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=J1(),window[_k+this.uniqueCallbackIdentifier]=e,window[yk+this.uniqueCallbackIdentifier]=n,this.myIFrame=Qh.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){wt("frame writing exception"),l.stack&&wt(l.stack),wt(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||wt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[oE]=this.myID,e[aE]=this.myPW,e[lE]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+uE+r.length<=cE;){const o=this.pendingSegs.shift();r=r+"&"+Ek+s+"="+o.seg+"&"+Tk+s+"="+o.ts+"&"+wk+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(bk)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{wt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk=16384,Sk=45e3;let sl=null;typeof MozWebSocket<"u"?sl=MozWebSocket:typeof WebSocket<"u"&&(sl=WebSocket);class ln{constructor(e,n,r,s,i,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Vo(this.connId),this.stats_=Gh(n),this.connURL=ln.connectionURL_(n,o,l,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[Yv]=zh,typeof location<"u"&&location.hostname&&eE.test(location.hostname)&&(o[Jv]=Zv),n&&(o[Xv]=n),r&&(o[tE]=r),s&&(o[Uu]=s),i&&(o[nE]=i),iE(e,rE,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Wr.set("previous_websocket_failure",!0);try{let r;yv(),this.mySock=new sl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){ln.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&sl!==null&&!ln.forceDisallow_}static previouslyFailed(){return Wr.isInMemoryStorage||Wr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Wr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=go(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(J(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=dt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Gv(n,Rk);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Sk))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ln.responsesRequiredToBeHealthy=2;ln.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[As,ln]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ln&&ln.isAvailable();let r=n&&!ln.previouslyFailed();if(e.webSocketOnly&&(n||Qt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[ln];else{const s=this.transports_=[];for(const i of yo.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);yo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}yo.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk=6e4,kk=5e3,Nk=10*1024,Dk=100*1024,Qc="t",Km="d",Ok="s",zm="r",Mk="e",Gm="o",Qm="a",Ym="n",Xm="p",xk="h";class Lk{constructor(e,n,r,s,i,o,l,c,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Vo("c:"+this.id+":"),this.transportManager_=new yo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Ji(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Dk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Nk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Qc in e){const n=e[Qc];n===Qm?this.upgradeIfSecondaryHealthy_():n===zm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Gm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Si("t",e),r=Si("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Xm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Qm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ym,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Si("t",e),r=Si("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Si(Qc,e);if(Km in e){const r=e[Km];if(n===xk){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Ym){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Ok?this.onConnectionShutdown_(r):n===zm?this.onReset_(r):n===Mk?Fu("Server Error: "+r):n===Gm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Fu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),zh!==r&&Qt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ji(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Pk))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ji(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(kk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Xm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Wr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(e){this.allowedEvents_=e,this.listeners_={},J(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){J(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il extends fE{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!jh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new il}getInitialEvent(e){return J(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm=32,Zm=768;class qe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Le(){return new qe("")}function Ie(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ar(t){return t.pieces_.length-t.pieceNum_}function We(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new qe(t.pieces_,e)}function dE(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Vk(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function pE(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function mE(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new qe(e,0)}function at(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof qe)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new qe(n,0)}function Ee(t){return t.pieceNum_>=t.pieces_.length}function nn(t,e){const n=Ie(t),r=Ie(e);if(n===null)return e;if(n===r)return nn(We(t),We(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function gE(t,e){if(Ar(t)!==Ar(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function cn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Ar(t)>Ar(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class Fk{constructor(e,n){this.errorPrefix_=n,this.parts_=pE(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=ql(this.parts_[r]);_E(this)}}function Uk(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ql(e),_E(t)}function Bk(t){const e=t.parts_.pop();t.byteLength_-=ql(e),t.parts_.length>0&&(t.byteLength_-=1)}function _E(t){if(t.byteLength_>Zm)throw new Error(t.errorPrefix_+"has a key path longer than "+Zm+" bytes ("+t.byteLength_+").");if(t.parts_.length>Jm)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Jm+") or object contains a cycle "+$r(t))}function $r(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh extends fE{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Yh}getInitialEvent(e){return J(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=1e3,$k=60*5*1e3,eg=30*1e3,jk=1.3,Hk=3e4,Wk="server_kill",tg=3;class Wn extends hE{constructor(e,n,r,s,i,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=Wn.nextPersistentConnectionId_++,this.log_=Vo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Pi,this.maxReconnectDelay_=$k,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!yv())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Yh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&il.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(dt(i)),J(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new mo,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),J(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),J(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,l=>{const c=l.d,u=l.s;Wn.warnOnListenWarnings_(c,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Xn(e,"w")){const r=Hs(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();Qt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||CS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=eg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=bS(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),J(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+dt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Fu("Unrecognized action received from server: "+dt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){J(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Pi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Pi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Hk&&(this.reconnectDelay_=Pi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*jk)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Wn.nextConnectionId_++,i=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,r())},u=function(d){J(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:c,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,m]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?wt("getToken() completed but was canceled"):(wt("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=m&&m.token,l=new Lk(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{Qt(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(Wk)},i))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Qt(d),c())}}}interrupt(e){wt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){wt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],gm(this.interruptReasons_)&&(this.reconnectDelay_=Pi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>Kh(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new qe(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){wt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=tg&&(this.reconnectDelay_=eg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){wt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=tg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Wv.replace(/\./g,"-")]=1,jh()?e["framework.cordova"]=1:_v()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=il.getInstance().currentlyOnline();return gm(this.interruptReasons_)&&e}}Wn.nextPersistentConnectionId_=0;Wn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Ae(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Ae(Ws,e),s=new Ae(Ws,n);return this.compare(r,s)!==0}minPost(){return Ae.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ea;class yE extends zl{static get __EMPTY_NODE(){return Ea}static set __EMPTY_NODE(e){Ea=e}compare(e,n){return si(e.name,n.name)}isDefinedOn(e){throw ti("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Ae.MIN}maxPost(){return new Ae(Zr,Ea)}makePost(e,n){return J(typeof e=="string","KeyIndex indexValue must always be a string."),new Ae(e,Ea)}toString(){return".key"}}const Ms=new yE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ta=class{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Wt=class Vi{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Vi.RED,this.left=s??bn.EMPTY_NODE,this.right=i??bn.EMPTY_NODE}copy(e,n,r,s,i){return new Vi(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return bn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return bn.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Vi.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Vi.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Wt.RED=!0;Wt.BLACK=!1;class qk{copy(e,n,r,s,i){return this}insert(e,n,r){return new Wt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let bn=class Ma{constructor(e,n=Ma.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ma(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Wt.BLACK,null,null))}remove(e){return new Ma(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Wt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ta(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ta(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ta(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ta(this.root_,null,this.comparator_,!0,e)}};bn.EMPTY_NODE=new qk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kk(t,e){return si(t.name,e.name)}function Xh(t,e){return si(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bu;function zk(t){Bu=t}const vE=function(t){return typeof t=="number"?"number:"+Qv(t):"string:"+t},EE=function(t){if(t.isLeafNode()){const e=t.val();J(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Xn(e,".sv"),"Priority must be a string or number.")}else J(t===Bu||t.isEmpty(),"priority of unexpected type.");J(t===Bu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ng;class st{constructor(e,n=st.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,J(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),EE(this.priorityNode_)}static set __childrenNodeConstructor(e){ng=e}static get __childrenNodeConstructor(){return ng}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new st(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:st.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ee(e)?this:Ie(e)===".priority"?this.priorityNode_:st.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:st.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=Ie(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(J(r!==".priority"||Ar(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,st.__childrenNodeConstructor.EMPTY_NODE.updateChild(We(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+vE(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Qv(this.value_):e+=this.value_,this.lazyHash_=Kv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===st.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof st.__childrenNodeConstructor?-1:(J(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=st.VALUE_TYPE_ORDER.indexOf(n),i=st.VALUE_TYPE_ORDER.indexOf(r);return J(s>=0,"Unknown leaf type: "+n),J(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}st.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let TE,wE;function Gk(t){TE=t}function Qk(t){wE=t}class Yk extends zl{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?si(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Ae.MIN}maxPost(){return new Ae(Zr,new st("[PRIORITY-POST]",wE))}makePost(e,n){const r=TE(e);return new Ae(n,new st("[PRIORITY-POST]",r))}toString(){return".priority"}}const Rt=new Yk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xk=Math.log(2);class Jk{constructor(e){const n=i=>parseInt(Math.log(i)/Xk,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ol=function(t,e,n,r){t.sort(e);const s=function(c,u){const h=u-c;let d,m;if(h===0)return null;if(h===1)return d=t[c],m=n?n(d):d,new Wt(m,d.node,Wt.BLACK,null,null);{const g=parseInt(h/2,10)+c,E=s(c,g),S=s(g+1,u);return d=t[g],m=n?n(d):d,new Wt(m,d.node,Wt.BLACK,E,S)}},i=function(c){let u=null,h=null,d=t.length;const m=function(E,S){const P=d-E,V=d;d-=E;const M=s(P+1,V),F=t[P],Q=n?n(F):F;g(new Wt(Q,F.node,S,null,M))},g=function(E){u?(u.left=E,u=E):(h=E,u=E)};for(let E=0;E<c.count;++E){const S=c.nextBitIsOne(),P=Math.pow(2,c.count-(E+1));S?m(P,Wt.BLACK):(m(P,Wt.BLACK),m(P,Wt.RED))}return h},o=new Jk(t.length),l=i(o);return new bn(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yc;const ys={};class jn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return J(ys&&Rt,"ChildrenNode.ts has not been loaded"),Yc=Yc||new jn({".priority":ys},{".priority":Rt}),Yc}get(e){const n=Hs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof bn?n:null}hasIndex(e){return Xn(this.indexSet_,e.toString())}addIndex(e,n){J(e!==Ms,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(Ae.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let l;s?l=ol(r,e.getCompare()):l=ys;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const h=Object.assign({},this.indexes_);return h[c]=l,new jn(h,u)}addToIndexes(e,n){const r=Ja(this.indexes_,(s,i)=>{const o=Hs(this.indexSet_,i);if(J(o,"Missing index implementation for "+i),s===ys)if(o.isDefinedOn(e.node)){const l=[],c=n.getIterator(Ae.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&l.push(u),u=c.getNext();return l.push(e),ol(l,o.getCompare())}else return ys;else{const l=n.get(e.name);let c=s;return l&&(c=c.remove(new Ae(e.name,l))),c.insert(e,e.node)}});return new jn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Ja(this.indexes_,s=>{if(s===ys)return s;{const i=n.get(e.name);return i?s.remove(new Ae(e.name,i)):s}});return new jn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ki;class Oe{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&EE(this.priorityNode_),this.children_.isEmpty()&&J(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ki||(ki=new Oe(new bn(Xh),null,jn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ki}updatePriority(e){return this.children_.isEmpty()?this:new Oe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ki:n}}getChild(e){const n=Ie(e);return n===null?this:this.getImmediateChild(n).getChild(We(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(J(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Ae(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?ki:this.priorityNode_;return new Oe(s,o,i)}}updateChild(e,n){const r=Ie(e);if(r===null)return n;{J(Ie(e)!==".priority"||Ar(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(We(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(Rt,(o,l)=>{n[o]=l.val(e),r++,i&&Oe.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+vE(this.getPriority().val())+":"),this.forEachChild(Rt,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":Kv(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new Ae(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Ae(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Ae(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Ae.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Ae.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Uo?-1:0}withIndex(e){if(e===Ms||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Oe(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ms||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Rt),s=n.getIterator(Rt);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ms?null:this.indexMap_.get(e.toString())}}Oe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Zk extends Oe{constructor(){super(new bn(Xh),Oe.EMPTY_NODE,jn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Oe.EMPTY_NODE}isEmpty(){return!1}}const Uo=new Zk;Object.defineProperties(Ae,{MIN:{value:new Ae(Ws,Oe.EMPTY_NODE)},MAX:{value:new Ae(Zr,Uo)}});yE.__EMPTY_NODE=Oe.EMPTY_NODE;st.__childrenNodeConstructor=Oe;zk(Uo);Qk(Uo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eN=!0;function It(t,e=null){if(t===null)return Oe.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),J(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new st(n,It(e))}if(!(t instanceof Array)&&eN){const n=[];let r=!1;if(sn(t,(o,l)=>{if(o.substring(0,1)!=="."){const c=It(l);c.isEmpty()||(r=r||!c.getPriority().isEmpty(),n.push(new Ae(o,c)))}}),n.length===0)return Oe.EMPTY_NODE;const i=ol(n,Kk,o=>o.name,Xh);if(r){const o=ol(n,Rt.getCompare());return new Oe(i,It(e),new jn({".priority":o},{".priority":Rt}))}else return new Oe(i,It(e),jn.Default)}else{let n=Oe.EMPTY_NODE;return sn(t,(r,s)=>{if(Xn(t,r)&&r.substring(0,1)!=="."){const i=It(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(It(e))}}Gk(It);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN extends zl{constructor(e){super(),this.indexPath_=e,J(!Ee(e)&&Ie(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?si(e.name,n.name):i}makePost(e,n){const r=It(e),s=Oe.EMPTY_NODE.updateChild(this.indexPath_,r);return new Ae(n,s)}maxPost(){const e=Oe.EMPTY_NODE.updateChild(this.indexPath_,Uo);return new Ae(Zr,e)}toString(){return pE(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN extends zl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?si(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Ae.MIN}maxPost(){return Ae.MAX}makePost(e,n){const r=It(e);return new Ae(n,r)}toString(){return".value"}}const rN=new nN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sN(t){return{type:"value",snapshotNode:t}}function iN(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function oN(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function rg(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function aN(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Rt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return J(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return J(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ws}hasEnd(){return this.endSet_}getIndexEndValue(){return J(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return J(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Zr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return J(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Rt}copy(){const e=new Jh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function sg(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Rt?n="$priority":t.index_===rN?n="$value":t.index_===Ms?n="$key":(J(t.index_ instanceof tN,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=dt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=dt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+dt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=dt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+dt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ig(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Rt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al extends hE{constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=Vo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(J(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=al.getListenId_(e,r),l={};this.listens_[o]=l;const c=sg(e._queryParams);this.restRequest_(i+".json",c,(u,h)=>{let d=h;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(i,d,!1,r),Hs(this.listens_,o)===l){let m;u?u===401?m="permission_denied":m="rest_error:"+u:m="ok",s(m,null)}})}unlisten(e,n){const r=al.getListenId_(e,n);delete this.listens_[r]}get(e){const n=sg(e._queryParams),r=e._path.toString(),s=new mo;return this.restRequest_(r+".json",n,(i,o)=>{let l=o;i===404&&(l=null,i=null),i===null?(this.onDataUpdate_(r,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Hh(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=go(l.responseText)}catch{Qt("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,c)}else l.status!==401&&l.status!==404&&Qt("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(){this.rootNode_=Oe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(){return{value:null,children:new Map}}function IE(t,e,n){if(Ee(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=Ie(e);t.children.has(r)||t.children.set(r,ll());const s=t.children.get(r);e=We(e),IE(s,e,n)}}function $u(t,e,n){t.value!==null?n(e,t.value):cN(t,(r,s)=>{const i=new qe(e.toString()+"/"+r);$u(s,i,n)})}function cN(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&sn(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og=10*1e3,hN=30*1e3,fN=5*60*1e3;class dN{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new uN(e);const r=og+(hN-og)*Math.random();Ji(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;sn(e,(s,i)=>{i>0&&Xn(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),Ji(this.reportStats_.bind(this),Math.floor(Math.random()*2*fN))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Cn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Cn||(Cn={}));function AE(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function bE(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function CE(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Cn.ACK_USER_WRITE,this.source=AE()}operationForChild(e){if(Ee(this.path)){if(this.affectedTree.value!=null)return J(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new qe(e));return new cl(Le(),n,this.revert)}}else return J(Ie(this.path)===e,"operationForChild called for unrelated child."),new cl(We(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Cn.OVERWRITE}operationForChild(e){return Ee(this.path)?new es(this.source,Le(),this.snap.getImmediateChild(e)):new es(this.source,We(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Cn.MERGE}operationForChild(e){if(Ee(this.path)){const n=this.children.subtree(new qe(e));return n.isEmpty()?null:n.value?new es(this.source,Le(),n.value):new vo(this.source,Le(),n)}else return J(Ie(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new vo(this.source,We(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ee(e))return this.isFullyInitialized()&&!this.filtered_;const n=Ie(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function pN(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(aN(o.childName,o.snapshotNode))}),Ni(t,s,"child_removed",e,r,n),Ni(t,s,"child_added",e,r,n),Ni(t,s,"child_moved",i,r,n),Ni(t,s,"child_changed",e,r,n),Ni(t,s,"value",e,r,n),s}function Ni(t,e,n,r,s,i){const o=r.filter(l=>l.type===n);o.sort((l,c)=>gN(t,l,c)),o.forEach(l=>{const c=mN(t,l,i);s.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(c,t.query_))})})}function mN(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function gN(t,e,n){if(e.childName==null||n.childName==null)throw ti("Should only compare child_ events.");const r=new Ae(e.childName,e.snapshotNode),s=new Ae(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RE(t,e){return{eventCache:t,serverCache:e}}function Zi(t,e,n,r){return RE(new Zh(e,n,r),t.serverCache)}function SE(t,e,n,r){return RE(t.eventCache,new Zh(e,n,r))}function ju(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ts(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xc;const _N=()=>(Xc||(Xc=new bn(nk)),Xc);class He{constructor(e,n=_N()){this.value=e,this.children=n}static fromObject(e){let n=new He(null);return sn(e,(r,s)=>{n=n.set(new qe(r),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Le(),value:this.value};if(Ee(e))return null;{const r=Ie(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(We(e),n);return i!=null?{path:at(new qe(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ee(e))return this;{const n=Ie(e),r=this.children.get(n);return r!==null?r.subtree(We(e)):new He(null)}}set(e,n){if(Ee(e))return new He(n,this.children);{const r=Ie(e),i=(this.children.get(r)||new He(null)).set(We(e),n),o=this.children.insert(r,i);return new He(this.value,o)}}remove(e){if(Ee(e))return this.children.isEmpty()?new He(null):new He(null,this.children);{const n=Ie(e),r=this.children.get(n);if(r){const s=r.remove(We(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new He(null):new He(this.value,i)}else return this}}get(e){if(Ee(e))return this.value;{const n=Ie(e),r=this.children.get(n);return r?r.get(We(e)):null}}setTree(e,n){if(Ee(e))return n;{const r=Ie(e),i=(this.children.get(r)||new He(null)).setTree(We(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new He(this.value,o)}}fold(e){return this.fold_(Le(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(at(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Le(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(Ee(e))return null;{const i=Ie(e),o=this.children.get(i);return o?o.findOnPath_(We(e),at(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Le(),n)}foreachOnPath_(e,n,r){if(Ee(e))return this;{this.value&&r(n,this.value);const s=Ie(e),i=this.children.get(s);return i?i.foreachOnPath_(We(e),at(n,s),r):new He(null)}}foreach(e){this.foreach_(Le(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(at(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.writeTree_=e}static empty(){return new dn(new He(null))}}function eo(t,e,n){if(Ee(e))return new dn(new He(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=nn(s,e);return i=i.updateChild(o,n),new dn(t.writeTree_.set(s,i))}else{const s=new He(n),i=t.writeTree_.setTree(e,s);return new dn(i)}}}function ag(t,e,n){let r=t;return sn(n,(s,i)=>{r=eo(r,at(e,s),i)}),r}function lg(t,e){if(Ee(e))return dn.empty();{const n=t.writeTree_.setTree(e,new He(null));return new dn(n)}}function Hu(t,e){return os(t,e)!=null}function os(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(nn(n.path,e)):null}function cg(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Rt,(r,s)=>{e.push(new Ae(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new Ae(r,s.value))}),e}function vr(t,e){if(Ee(e))return t;{const n=os(t,e);return n!=null?new dn(new He(n)):new dn(t.writeTree_.subtree(e))}}function Wu(t){return t.writeTree_.isEmpty()}function qs(t,e){return PE(Le(),t.writeTree_,e)}function PE(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(J(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=PE(at(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(at(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kE(t,e){return xE(e,t)}function yN(t,e,n,r,s){J(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=eo(t.visibleWrites,e,n)),t.lastWriteId=r}function vN(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function EN(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);J(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&TN(l,r.path)?s=!1:cn(r.path,l.path)&&(i=!0)),o--}if(s){if(i)return wN(t),!0;if(r.snap)t.visibleWrites=lg(t.visibleWrites,r.path);else{const l=r.children;sn(l,c=>{t.visibleWrites=lg(t.visibleWrites,at(r.path,c))})}return!0}else return!1}function TN(t,e){if(t.snap)return cn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&cn(at(t.path,n),e))return!0;return!1}function wN(t){t.visibleWrites=NE(t.allWrites,IN,Le()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function IN(t){return t.visible}function NE(t,e,n){let r=dn.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let l;if(i.snap)cn(n,o)?(l=nn(n,o),r=eo(r,l,i.snap)):cn(o,n)&&(l=nn(o,n),r=eo(r,Le(),i.snap.getChild(l)));else if(i.children){if(cn(n,o))l=nn(n,o),r=ag(r,l,i.children);else if(cn(o,n))if(l=nn(o,n),Ee(l))r=ag(r,Le(),i.children);else{const c=Hs(i.children,Ie(l));if(c){const u=c.getChild(We(l));r=eo(r,Le(),u)}}}else throw ti("WriteRecord should have .snap or .children")}}return r}function DE(t,e,n,r,s){if(!r&&!s){const i=os(t.visibleWrites,e);if(i!=null)return i;{const o=vr(t.visibleWrites,e);if(Wu(o))return n;if(n==null&&!Hu(o,Le()))return null;{const l=n||Oe.EMPTY_NODE;return qs(o,l)}}}else{const i=vr(t.visibleWrites,e);if(!s&&Wu(i))return n;if(!s&&n==null&&!Hu(i,Le()))return null;{const o=function(u){return(u.visible||s)&&(!r||!~r.indexOf(u.writeId))&&(cn(u.path,e)||cn(e,u.path))},l=NE(t.allWrites,o,e),c=n||Oe.EMPTY_NODE;return qs(l,c)}}}function AN(t,e,n){let r=Oe.EMPTY_NODE;const s=os(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Rt,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=vr(t.visibleWrites,e);return n.forEachChild(Rt,(o,l)=>{const c=qs(vr(i,new qe(o)),l);r=r.updateImmediateChild(o,c)}),cg(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=vr(t.visibleWrites,e);return cg(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function bN(t,e,n,r,s){J(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=at(e,n);if(Hu(t.visibleWrites,i))return null;{const o=vr(t.visibleWrites,i);return Wu(o)?s.getChild(n):qs(o,s.getChild(n))}}function CN(t,e,n,r){const s=at(e,n),i=os(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=vr(t.visibleWrites,s);return qs(o,r.getNode().getImmediateChild(n))}else return null}function RN(t,e){return os(t.visibleWrites,e)}function SN(t,e,n,r,s,i,o){let l;const c=vr(t.visibleWrites,e),u=os(c,Le());if(u!=null)l=u;else if(n!=null)l=qs(c,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const h=[],d=o.getCompare(),m=i?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let g=m.getNext();for(;g&&h.length<s;)d(g,r)!==0&&h.push(g),g=m.getNext();return h}else return[]}function PN(){return{visibleWrites:dn.empty(),allWrites:[],lastWriteId:-1}}function qu(t,e,n,r){return DE(t.writeTree,t.treePath,e,n,r)}function OE(t,e){return AN(t.writeTree,t.treePath,e)}function ug(t,e,n,r){return bN(t.writeTree,t.treePath,e,n,r)}function ul(t,e){return RN(t.writeTree,at(t.treePath,e))}function kN(t,e,n,r,s,i){return SN(t.writeTree,t.treePath,e,n,r,s,i)}function ef(t,e,n){return CN(t.writeTree,t.treePath,e,n)}function ME(t,e){return xE(at(t.treePath,e),t.writeTree)}function xE(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;J(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),J(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,rg(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,oN(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,iN(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,rg(r,e.snapshotNode,s.oldSnap));else throw ti("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const LE=new DN;class tf{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Zh(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ef(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ts(this.viewCache_),i=kN(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}function ON(t,e){J(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),J(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function MN(t,e,n,r,s){const i=new NN;let o,l;if(n.type===Cn.OVERWRITE){const u=n;u.source.fromUser?o=Ku(t,e,u.path,u.snap,r,s,i):(J(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!Ee(u.path),o=hl(t,e,u.path,u.snap,r,s,l,i))}else if(n.type===Cn.MERGE){const u=n;u.source.fromUser?o=LN(t,e,u.path,u.children,r,s,i):(J(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=zu(t,e,u.path,u.children,r,s,l,i))}else if(n.type===Cn.ACK_USER_WRITE){const u=n;u.revert?o=UN(t,e,u.path,r,s,i):o=VN(t,e,u.path,u.affectedTree,r,s,i)}else if(n.type===Cn.LISTEN_COMPLETE)o=FN(t,e,n.path,r,i);else throw ti("Unknown operation type: "+n.type);const c=i.getChanges();return xN(e,o,c),{viewCache:o,changes:c}}function xN(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=ju(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(sN(ju(e)))}}function VE(t,e,n,r,s,i){const o=e.eventCache;if(ul(r,n)!=null)return e;{let l,c;if(Ee(n))if(J(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=ts(e),h=u instanceof Oe?u:Oe.EMPTY_NODE,d=OE(r,h);l=t.filter.updateFullNode(e.eventCache.getNode(),d,i)}else{const u=qu(r,ts(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=Ie(n);if(u===".priority"){J(Ar(n)===1,"Can't have a priority with additional path components");const h=o.getNode();c=e.serverCache.getNode();const d=ug(r,n,h,c);d!=null?l=t.filter.updatePriority(h,d):l=o.getNode()}else{const h=We(n);let d;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const m=ug(r,n,o.getNode(),c);m!=null?d=o.getNode().getImmediateChild(u).updateChild(h,m):d=o.getNode().getImmediateChild(u)}else d=ef(r,u,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),u,d,h,s,i):l=o.getNode()}}return Zi(e,l,o.isFullyInitialized()||Ee(n),t.filter.filtersNodes())}}function hl(t,e,n,r,s,i,o,l){const c=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(Ee(n))u=h.updateFullNode(c.getNode(),r,null);else if(h.filtersNodes()&&!c.isFiltered()){const g=c.getNode().updateChild(n,r);u=h.updateFullNode(c.getNode(),g,null)}else{const g=Ie(n);if(!c.isCompleteForPath(n)&&Ar(n)>1)return e;const E=We(n),P=c.getNode().getImmediateChild(g).updateChild(E,r);g===".priority"?u=h.updatePriority(c.getNode(),P):u=h.updateChild(c.getNode(),g,P,E,LE,null)}const d=SE(e,u,c.isFullyInitialized()||Ee(n),h.filtersNodes()),m=new tf(s,d,i);return VE(t,d,n,s,m,l)}function Ku(t,e,n,r,s,i,o){const l=e.eventCache;let c,u;const h=new tf(s,e,i);if(Ee(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),c=Zi(e,u,!0,t.filter.filtersNodes());else{const d=Ie(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),c=Zi(e,u,l.isFullyInitialized(),l.isFiltered());else{const m=We(n),g=l.getNode().getImmediateChild(d);let E;if(Ee(m))E=r;else{const S=h.getCompleteChild(d);S!=null?dE(m)===".priority"&&S.getChild(mE(m)).isEmpty()?E=S:E=S.updateChild(m,r):E=Oe.EMPTY_NODE}if(g.equals(E))c=e;else{const S=t.filter.updateChild(l.getNode(),d,E,m,h,o);c=Zi(e,S,l.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function hg(t,e){return t.eventCache.isCompleteForChild(e)}function LN(t,e,n,r,s,i,o){let l=e;return r.foreach((c,u)=>{const h=at(n,c);hg(e,Ie(h))&&(l=Ku(t,l,h,u,s,i,o))}),r.foreach((c,u)=>{const h=at(n,c);hg(e,Ie(h))||(l=Ku(t,l,h,u,s,i,o))}),l}function fg(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function zu(t,e,n,r,s,i,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;Ee(n)?u=r:u=new He(null).setTree(n,r);const h=e.serverCache.getNode();return u.children.inorderTraversal((d,m)=>{if(h.hasChild(d)){const g=e.serverCache.getNode().getImmediateChild(d),E=fg(t,g,m);c=hl(t,c,new qe(d),E,s,i,o,l)}}),u.children.inorderTraversal((d,m)=>{const g=!e.serverCache.isCompleteForChild(d)&&m.value===null;if(!h.hasChild(d)&&!g){const E=e.serverCache.getNode().getImmediateChild(d),S=fg(t,E,m);c=hl(t,c,new qe(d),S,s,i,o,l)}}),c}function VN(t,e,n,r,s,i,o){if(ul(s,n)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(r.value!=null){if(Ee(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return hl(t,e,n,c.getNode().getChild(n),s,i,l,o);if(Ee(n)){let u=new He(null);return c.getNode().forEachChild(Ms,(h,d)=>{u=u.set(new qe(h),d)}),zu(t,e,n,u,s,i,l,o)}else return e}else{let u=new He(null);return r.foreach((h,d)=>{const m=at(n,h);c.isCompleteForPath(m)&&(u=u.set(h,c.getNode().getChild(m)))}),zu(t,e,n,u,s,i,l,o)}}function FN(t,e,n,r,s){const i=e.serverCache,o=SE(e,i.getNode(),i.isFullyInitialized()||Ee(n),i.isFiltered());return VE(t,o,n,r,LE,s)}function UN(t,e,n,r,s,i){let o;if(ul(r,n)!=null)return e;{const l=new tf(r,e,s),c=e.eventCache.getNode();let u;if(Ee(n)||Ie(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=qu(r,ts(e));else{const d=e.serverCache.getNode();J(d instanceof Oe,"serverChildren would be complete if leaf node"),h=OE(r,d)}h=h,u=t.filter.updateFullNode(c,h,i)}else{const h=Ie(n);let d=ef(r,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=c.getImmediateChild(h)),d!=null?u=t.filter.updateChild(c,h,d,We(n),l,i):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(c,h,Oe.EMPTY_NODE,We(n),l,i):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=qu(r,ts(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||ul(r,Le())!=null,Zi(e,u,o,t.filter.filtersNodes())}}function BN(t,e){const n=ts(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Ee(e)&&!n.getImmediateChild(Ie(e)).isEmpty())?n.getChild(e):null}function dg(t,e,n,r){e.type===Cn.MERGE&&e.source.queryId!==null&&(J(ts(t.viewCache_),"We should always have a full cache before handling merges"),J(ju(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=MN(t.processor_,s,e,n,r);return ON(t.processor_,i.viewCache),J(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,$N(t,i.changes,i.viewCache.eventCache.getNode())}function $N(t,e,n,r){const s=t.eventRegistrations_;return pN(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pg;function jN(t){J(!pg,"__referenceConstructor has already been defined"),pg=t}function nf(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return J(i!=null,"SyncTree gave us an op for an invalid query."),dg(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(dg(o,e,n,r));return i}}function rf(t,e){let n=null;for(const r of t.views.values())n=n||BN(r,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mg;function HN(t){J(!mg,"__referenceConstructor has already been defined"),mg=t}class gg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new He(null),this.pendingWriteTree_=PN(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function WN(t,e,n,r,s){return yN(t.pendingWriteTree_,e,n,r,s),s?Ql(t,new es(AE(),e,n)):[]}function bs(t,e,n=!1){const r=vN(t.pendingWriteTree_,e);if(EN(t.pendingWriteTree_,e)){let i=new He(null);return r.snap!=null?i=i.set(Le(),!0):sn(r.children,o=>{i=i.set(new qe(o),!0)}),Ql(t,new cl(r.path,i,n))}else return[]}function Gl(t,e,n){return Ql(t,new es(bE(),e,n))}function qN(t,e,n){const r=He.fromObject(n);return Ql(t,new vo(bE(),e,r))}function KN(t,e,n,r){const s=$E(t,r);if(s!=null){const i=jE(s),o=i.path,l=i.queryId,c=nn(o,e),u=new es(CE(l),c,n);return HE(t,o,u)}else return[]}function zN(t,e,n,r){const s=$E(t,r);if(s){const i=jE(s),o=i.path,l=i.queryId,c=nn(o,e),u=He.fromObject(n),h=new vo(CE(l),c,u);return HE(t,o,h)}else return[]}function FE(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,l)=>{const c=nn(o,e),u=rf(l,c);if(u)return u});return DE(s,e,i,n,!0)}function Ql(t,e){return UE(e,t.syncPointTree_,null,kE(t.pendingWriteTree_,Le()))}function UE(t,e,n,r){if(Ee(t.path))return BE(t,e,n,r);{const s=e.get(Le());n==null&&s!=null&&(n=rf(s,Le()));let i=[];const o=Ie(t.path),l=t.operationForChild(o),c=e.children.get(o);if(c&&l){const u=n?n.getImmediateChild(o):null,h=ME(r,o);i=i.concat(UE(l,c,u,h))}return s&&(i=i.concat(nf(s,t,r,n))),i}}function BE(t,e,n,r){const s=e.get(Le());n==null&&s!=null&&(n=rf(s,Le()));let i=[];return e.children.inorderTraversal((o,l)=>{const c=n?n.getImmediateChild(o):null,u=ME(r,o),h=t.operationForChild(o);h&&(i=i.concat(BE(h,l,c,u)))}),s&&(i=i.concat(nf(s,t,r,n))),i}function $E(t,e){return t.tagToQueryMap.get(e)}function jE(t){const e=t.indexOf("$");return J(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new qe(t.substr(0,e))}}function HE(t,e,n){const r=t.syncPointTree_.get(e);J(r,"Missing sync point for query tag that we're tracking");const s=kE(t.pendingWriteTree_,e);return nf(r,n,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new sf(n)}node(){return this.node_}}class of{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=at(this.path_,e);return new of(this.syncTree_,n)}node(){return FE(this.syncTree_,this.path_)}}const GN=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},_g=function(t,e,n){if(!t||typeof t!="object")return t;if(J(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return QN(t[".sv"],e,n);if(typeof t[".sv"]=="object")return YN(t[".sv"],e);J(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},QN=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:J(!1,"Unexpected server value: "+t)}},YN=function(t,e,n){t.hasOwnProperty("increment")||J(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&J(!1,"Unexpected increment value: "+r);const s=e.node();if(J(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},XN=function(t,e,n,r){return af(e,new of(n,t),r)},JN=function(t,e,n){return af(t,new sf(e),n)};function af(t,e,n){const r=t.getPriority().val(),s=_g(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,l=_g(o.getValue(),e,n);return l!==o.getValue()||s!==o.getPriority().val()?new st(l,It(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new st(s))),o.forEachChild(Rt,(l,c)=>{const u=af(c,e.getImmediateChild(l),n);u!==c&&(i=i.updateImmediateChild(l,u))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function cf(t,e){let n=e instanceof qe?e:new qe(e),r=t,s=Ie(n);for(;s!==null;){const i=Hs(r.node.children,s)||{children:{},childCount:0};r=new lf(s,r,i),n=We(n),s=Ie(n)}return r}function ii(t){return t.node.value}function WE(t,e){t.node.value=e,Gu(t)}function qE(t){return t.node.childCount>0}function ZN(t){return ii(t)===void 0&&!qE(t)}function Yl(t,e){sn(t.node.children,(n,r)=>{e(new lf(n,t,r))})}function KE(t,e,n,r){n&&!r&&e(t),Yl(t,s=>{KE(s,e,!0,r)}),n&&r&&e(t)}function eD(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Bo(t){return new qe(t.parent===null?t.name:Bo(t.parent)+"/"+t.name)}function Gu(t){t.parent!==null&&tD(t.parent,t.name,t)}function tD(t,e,n){const r=ZN(n),s=Xn(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,Gu(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Gu(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nD=/[\[\].#$\/\u0000-\u001F\u007F]/,rD=/[\[\].#$\u0000-\u001F\u007F]/,Jc=10*1024*1024,zE=function(t){return typeof t=="string"&&t.length!==0&&!nD.test(t)},sD=function(t){return typeof t=="string"&&t.length!==0&&!rD.test(t)},iD=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),sD(t)},GE=function(t,e,n){const r=n instanceof qe?new Fk(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+$r(r));if(typeof e=="function")throw new Error(t+"contains a function "+$r(r)+" with contents = "+e.toString());if(zv(e))throw new Error(t+"contains "+e.toString()+" "+$r(r));if(typeof e=="string"&&e.length>Jc/3&&ql(e)>Jc)throw new Error(t+"contains a string greater than "+Jc+" utf8 bytes "+$r(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(sn(e,(o,l)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!zE(o)))throw new Error(t+" contains an invalid key ("+o+") "+$r(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Uk(r,o),GE(t,l,r),Bk(r)}),s&&i)throw new Error(t+' contains ".value" child '+$r(r)+" in addition to actual children.")}},oD=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!zE(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!iD(n))throw new Error(NS(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function lD(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!gE(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function as(t,e,n){lD(t,n),cD(t,r=>cn(r,e)||cn(e,r))}function cD(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(uD(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function uD(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Xi&&wt("event: "+n.toString()),Fo(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hD="repo_interrupt",fD=25;class dD{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new aD,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ll(),this.transactionQueueTree_=new lf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function pD(t,e,n){if(t.stats_=Gh(t.repoInfo_),t.forceRestClient_||lk())t.server_=new al(t.repoInfo_,(r,s,i,o)=>{yg(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>vg(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{dt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Wn(t.repoInfo_,e,(r,s,i,o)=>{yg(t,r,s,i,o)},r=>{vg(t,r)},r=>{gD(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=pk(t.repoInfo_,()=>new dN(t.stats_,t.server_)),t.infoData_=new lN,t.infoSyncTree_=new gg({startListening:(r,s,i,o)=>{let l=[];const c=t.infoData_.getNode(r._path);return c.isEmpty()||(l=Gl(t.infoSyncTree_,r._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),uf(t,"connected",!1),t.serverSyncTree_=new gg({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(l,c)=>{const u=o(l,c);as(t.eventQueue_,r._path,u)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function mD(t){const n=t.infoData_.getNode(new qe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function QE(t){return GN({timestamp:mD(t)})}function yg(t,e,n,r,s){t.dataUpdateCount++;const i=new qe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const c=Ja(n,u=>It(u));o=zN(t.serverSyncTree_,i,c,s)}else{const c=It(n);o=KN(t.serverSyncTree_,i,c,s)}else if(r){const c=Ja(n,u=>It(u));o=qN(t.serverSyncTree_,i,c)}else{const c=It(n);o=Gl(t.serverSyncTree_,i,c)}let l=i;o.length>0&&(l=ff(t,i)),as(t.eventQueue_,l,o)}function vg(t,e){uf(t,"connected",e),e===!1&&yD(t)}function gD(t,e){sn(e,(n,r)=>{uf(t,n,r)})}function uf(t,e,n){const r=new qe("/.info/"+e),s=It(n);t.infoData_.updateSnapshot(r,s);const i=Gl(t.infoSyncTree_,r,s);as(t.eventQueue_,r,i)}function _D(t){return t.nextWriteId_++}function yD(t){YE(t,"onDisconnectEvents");const e=QE(t),n=ll();$u(t.onDisconnect_,Le(),(s,i)=>{const o=XN(s,i,t.serverSyncTree_,e);IE(n,s,o)});let r=[];$u(n,Le(),(s,i)=>{r=r.concat(Gl(t.serverSyncTree_,s,i));const o=wD(t,s);ff(t,o)}),t.onDisconnect_=ll(),as(t.eventQueue_,Le(),r)}function vD(t){t.persistentConnection_&&t.persistentConnection_.interrupt(hD)}function YE(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),wt(n,...e)}function XE(t,e,n){return FE(t.serverSyncTree_,e,n)||Oe.EMPTY_NODE}function hf(t,e=t.transactionQueueTree_){if(e||Xl(t,e),ii(e)){const n=ZE(t,e);J(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&ED(t,Bo(e),n)}else qE(e)&&Yl(e,n=>{hf(t,n)})}function ED(t,e,n){const r=n.map(u=>u.currentWriteId),s=XE(t,e,r);let i=s;const o=s.hash();for(let u=0;u<n.length;u++){const h=n[u];J(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const d=nn(e,h.path);i=i.updateChild(d,h.currentOutputSnapshotRaw)}const l=i.val(!0),c=e;t.server_.put(c.toString(),l,u=>{YE(t,"transaction put response",{path:c.toString(),status:u});let h=[];if(u==="ok"){const d=[];for(let m=0;m<n.length;m++)n[m].status=2,h=h.concat(bs(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&d.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();Xl(t,cf(t.transactionQueueTree_,e)),hf(t,t.transactionQueueTree_),as(t.eventQueue_,e,h);for(let m=0;m<d.length;m++)Fo(d[m])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Qt("transaction at "+c.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}ff(t,e)}},o)}function ff(t,e){const n=JE(t,e),r=Bo(n),s=ZE(t,n);return TD(t,s,r),r}function TD(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],u=nn(n,c.path);let h=!1,d;if(J(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,d=c.abortReason,s=s.concat(bs(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=fD)h=!0,d="maxretry",s=s.concat(bs(t.serverSyncTree_,c.currentWriteId,!0));else{const m=XE(t,c.path,o);c.currentInputSnapshot=m;const g=e[l].update(m.val());if(g!==void 0){GE("transaction failed: Data returned ",g,c.path);let E=It(g);typeof g=="object"&&g!=null&&Xn(g,".priority")||(E=E.updatePriority(m.getPriority()));const P=c.currentWriteId,V=QE(t),M=JN(E,m,V);c.currentOutputSnapshotRaw=E,c.currentOutputSnapshotResolved=M,c.currentWriteId=_D(t),o.splice(o.indexOf(P),1),s=s.concat(WN(t.serverSyncTree_,c.path,M,c.currentWriteId,c.applyLocally)),s=s.concat(bs(t.serverSyncTree_,P,!0))}else h=!0,d="nodata",s=s.concat(bs(t.serverSyncTree_,c.currentWriteId,!0))}as(t.eventQueue_,n,s),s=[],h&&(e[l].status=2,function(m){setTimeout(m,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(d),!1,null))))}Xl(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)Fo(r[l]);hf(t,t.transactionQueueTree_)}function JE(t,e){let n,r=t.transactionQueueTree_;for(n=Ie(e);n!==null&&ii(r)===void 0;)r=cf(r,n),e=We(e),n=Ie(e);return r}function ZE(t,e){const n=[];return eT(t,e,n),n.sort((r,s)=>r.order-s.order),n}function eT(t,e,n){const r=ii(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);Yl(e,s=>{eT(t,s,n)})}function Xl(t,e){const n=ii(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,WE(e,n.length>0?n:void 0)}Yl(e,r=>{Xl(t,r)})}function wD(t,e){const n=Bo(JE(t,e)),r=cf(t.transactionQueueTree_,e);return eD(r,s=>{Zc(t,s)}),Zc(t,r),KE(r,s=>{Zc(t,s)}),n}function Zc(t,e){const n=ii(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(J(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(J(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(bs(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?WE(e,void 0):n.length=i+1,as(t.eventQueue_,Bo(e),s);for(let o=0;o<r.length;o++)Fo(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ID(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function AD(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Qt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Eg=function(t,e){const n=bD(t),r=n.namespace;n.domain==="firebase.com"&&Jr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Jr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||ek();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new hk(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new qe(n.pathString)}},bD=function(t){let e="",n="",r="",s="",i="",o=!0,l="https",c=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(h,d)),h<d&&(s=ID(t.substring(h,d)));const m=AD(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const E=e.indexOf(".");r=e.substring(0,E).toLowerCase(),n=e.substring(E+1),i=r}"ns"in m&&(i=m.ns)}return{host:e,port:c,domain:n,subdomain:r,secure:o,scheme:l,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return Ee(this._path)?null:dE(this._path)}get ref(){return new oi(this._repo,this._path)}get _queryIdentifier(){const e=ig(this._queryParams),n=Kh(e);return n==="{}"?"default":n}get _queryObject(){return ig(this._queryParams)}isEqual(e){if(e=kn(e),!(e instanceof df))return!1;const n=this._repo===e._repo,r=gE(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Vk(this._path)}}class oi extends df{constructor(e,n){super(e,n,new Jh,!1)}get parent(){const e=mE(this._path);return e===null?null:new oi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}jN(oi);HN(oi);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CD="FIREBASE_DATABASE_EMULATOR_HOST",Qu={};let RD=!1;function SD(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||Jr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),wt("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Eg(i,s),l=o.repoInfo,c;typeof process<"u"&&Bm&&(c=Bm[CD]),c?(i=`http://${c}?ns=${l.namespace}`,o=Eg(i,s),l=o.repoInfo):o.repoInfo.secure;const u=new uk(t.name,t.options,e);oD("Invalid Firebase Database URL",o),Ee(o.path)||Jr("Database URL must point to the root of a Firebase Database (not including a child path).");const h=kD(l,t,u,new ck(t.name,n));return new ND(h,t)}function PD(t,e){const n=Qu[e];(!n||n[t.key]!==t)&&Jr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),vD(t),delete n[t.key]}function kD(t,e,n,r){let s=Qu[e.name];s||(s={},Qu[e.name]=s);let i=s[t.toURLString()];return i&&Jr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new dD(t,RD,n,r),s[t.toURLString()]=i,i}class ND{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(pD(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new oi(this._repo,Le())),this._rootInternal}_delete(){return this._rootInternal!==null&&(PD(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Jr("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DD(t){G1(ri),Nn(new _n("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return SD(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),Gt($m,jm,t),Gt($m,jm,"esm2017")}Wn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Wn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};DD();var Tg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qr,tT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,y){function v(){}v.prototype=y.prototype,A.D=y.prototype,A.prototype=new v,A.prototype.constructor=A,A.C=function(I,R,b){for(var T=Array(arguments.length-2),me=2;me<arguments.length;me++)T[me-2]=arguments[me];return y.prototype[R].apply(I,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,y,v){v||(v=0);var I=Array(16);if(typeof y=="string")for(var R=0;16>R;++R)I[R]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(R=0;16>R;++R)I[R]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=A.g[0],v=A.g[1],R=A.g[2];var b=A.g[3],T=y+(b^v&(R^b))+I[0]+3614090360&4294967295;y=v+(T<<7&4294967295|T>>>25),T=b+(R^y&(v^R))+I[1]+3905402710&4294967295,b=y+(T<<12&4294967295|T>>>20),T=R+(v^b&(y^v))+I[2]+606105819&4294967295,R=b+(T<<17&4294967295|T>>>15),T=v+(y^R&(b^y))+I[3]+3250441966&4294967295,v=R+(T<<22&4294967295|T>>>10),T=y+(b^v&(R^b))+I[4]+4118548399&4294967295,y=v+(T<<7&4294967295|T>>>25),T=b+(R^y&(v^R))+I[5]+1200080426&4294967295,b=y+(T<<12&4294967295|T>>>20),T=R+(v^b&(y^v))+I[6]+2821735955&4294967295,R=b+(T<<17&4294967295|T>>>15),T=v+(y^R&(b^y))+I[7]+4249261313&4294967295,v=R+(T<<22&4294967295|T>>>10),T=y+(b^v&(R^b))+I[8]+1770035416&4294967295,y=v+(T<<7&4294967295|T>>>25),T=b+(R^y&(v^R))+I[9]+2336552879&4294967295,b=y+(T<<12&4294967295|T>>>20),T=R+(v^b&(y^v))+I[10]+4294925233&4294967295,R=b+(T<<17&4294967295|T>>>15),T=v+(y^R&(b^y))+I[11]+2304563134&4294967295,v=R+(T<<22&4294967295|T>>>10),T=y+(b^v&(R^b))+I[12]+1804603682&4294967295,y=v+(T<<7&4294967295|T>>>25),T=b+(R^y&(v^R))+I[13]+4254626195&4294967295,b=y+(T<<12&4294967295|T>>>20),T=R+(v^b&(y^v))+I[14]+2792965006&4294967295,R=b+(T<<17&4294967295|T>>>15),T=v+(y^R&(b^y))+I[15]+1236535329&4294967295,v=R+(T<<22&4294967295|T>>>10),T=y+(R^b&(v^R))+I[1]+4129170786&4294967295,y=v+(T<<5&4294967295|T>>>27),T=b+(v^R&(y^v))+I[6]+3225465664&4294967295,b=y+(T<<9&4294967295|T>>>23),T=R+(y^v&(b^y))+I[11]+643717713&4294967295,R=b+(T<<14&4294967295|T>>>18),T=v+(b^y&(R^b))+I[0]+3921069994&4294967295,v=R+(T<<20&4294967295|T>>>12),T=y+(R^b&(v^R))+I[5]+3593408605&4294967295,y=v+(T<<5&4294967295|T>>>27),T=b+(v^R&(y^v))+I[10]+38016083&4294967295,b=y+(T<<9&4294967295|T>>>23),T=R+(y^v&(b^y))+I[15]+3634488961&4294967295,R=b+(T<<14&4294967295|T>>>18),T=v+(b^y&(R^b))+I[4]+3889429448&4294967295,v=R+(T<<20&4294967295|T>>>12),T=y+(R^b&(v^R))+I[9]+568446438&4294967295,y=v+(T<<5&4294967295|T>>>27),T=b+(v^R&(y^v))+I[14]+3275163606&4294967295,b=y+(T<<9&4294967295|T>>>23),T=R+(y^v&(b^y))+I[3]+4107603335&4294967295,R=b+(T<<14&4294967295|T>>>18),T=v+(b^y&(R^b))+I[8]+1163531501&4294967295,v=R+(T<<20&4294967295|T>>>12),T=y+(R^b&(v^R))+I[13]+2850285829&4294967295,y=v+(T<<5&4294967295|T>>>27),T=b+(v^R&(y^v))+I[2]+4243563512&4294967295,b=y+(T<<9&4294967295|T>>>23),T=R+(y^v&(b^y))+I[7]+1735328473&4294967295,R=b+(T<<14&4294967295|T>>>18),T=v+(b^y&(R^b))+I[12]+2368359562&4294967295,v=R+(T<<20&4294967295|T>>>12),T=y+(v^R^b)+I[5]+4294588738&4294967295,y=v+(T<<4&4294967295|T>>>28),T=b+(y^v^R)+I[8]+2272392833&4294967295,b=y+(T<<11&4294967295|T>>>21),T=R+(b^y^v)+I[11]+1839030562&4294967295,R=b+(T<<16&4294967295|T>>>16),T=v+(R^b^y)+I[14]+4259657740&4294967295,v=R+(T<<23&4294967295|T>>>9),T=y+(v^R^b)+I[1]+2763975236&4294967295,y=v+(T<<4&4294967295|T>>>28),T=b+(y^v^R)+I[4]+1272893353&4294967295,b=y+(T<<11&4294967295|T>>>21),T=R+(b^y^v)+I[7]+4139469664&4294967295,R=b+(T<<16&4294967295|T>>>16),T=v+(R^b^y)+I[10]+3200236656&4294967295,v=R+(T<<23&4294967295|T>>>9),T=y+(v^R^b)+I[13]+681279174&4294967295,y=v+(T<<4&4294967295|T>>>28),T=b+(y^v^R)+I[0]+3936430074&4294967295,b=y+(T<<11&4294967295|T>>>21),T=R+(b^y^v)+I[3]+3572445317&4294967295,R=b+(T<<16&4294967295|T>>>16),T=v+(R^b^y)+I[6]+76029189&4294967295,v=R+(T<<23&4294967295|T>>>9),T=y+(v^R^b)+I[9]+3654602809&4294967295,y=v+(T<<4&4294967295|T>>>28),T=b+(y^v^R)+I[12]+3873151461&4294967295,b=y+(T<<11&4294967295|T>>>21),T=R+(b^y^v)+I[15]+530742520&4294967295,R=b+(T<<16&4294967295|T>>>16),T=v+(R^b^y)+I[2]+3299628645&4294967295,v=R+(T<<23&4294967295|T>>>9),T=y+(R^(v|~b))+I[0]+4096336452&4294967295,y=v+(T<<6&4294967295|T>>>26),T=b+(v^(y|~R))+I[7]+1126891415&4294967295,b=y+(T<<10&4294967295|T>>>22),T=R+(y^(b|~v))+I[14]+2878612391&4294967295,R=b+(T<<15&4294967295|T>>>17),T=v+(b^(R|~y))+I[5]+4237533241&4294967295,v=R+(T<<21&4294967295|T>>>11),T=y+(R^(v|~b))+I[12]+1700485571&4294967295,y=v+(T<<6&4294967295|T>>>26),T=b+(v^(y|~R))+I[3]+2399980690&4294967295,b=y+(T<<10&4294967295|T>>>22),T=R+(y^(b|~v))+I[10]+4293915773&4294967295,R=b+(T<<15&4294967295|T>>>17),T=v+(b^(R|~y))+I[1]+2240044497&4294967295,v=R+(T<<21&4294967295|T>>>11),T=y+(R^(v|~b))+I[8]+1873313359&4294967295,y=v+(T<<6&4294967295|T>>>26),T=b+(v^(y|~R))+I[15]+4264355552&4294967295,b=y+(T<<10&4294967295|T>>>22),T=R+(y^(b|~v))+I[6]+2734768916&4294967295,R=b+(T<<15&4294967295|T>>>17),T=v+(b^(R|~y))+I[13]+1309151649&4294967295,v=R+(T<<21&4294967295|T>>>11),T=y+(R^(v|~b))+I[4]+4149444226&4294967295,y=v+(T<<6&4294967295|T>>>26),T=b+(v^(y|~R))+I[11]+3174756917&4294967295,b=y+(T<<10&4294967295|T>>>22),T=R+(y^(b|~v))+I[2]+718787259&4294967295,R=b+(T<<15&4294967295|T>>>17),T=v+(b^(R|~y))+I[9]+3951481745&4294967295,A.g[0]=A.g[0]+y&4294967295,A.g[1]=A.g[1]+(R+(T<<21&4294967295|T>>>11))&4294967295,A.g[2]=A.g[2]+R&4294967295,A.g[3]=A.g[3]+b&4294967295}r.prototype.u=function(A,y){y===void 0&&(y=A.length);for(var v=y-this.blockSize,I=this.B,R=this.h,b=0;b<y;){if(R==0)for(;b<=v;)s(this,A,b),b+=this.blockSize;if(typeof A=="string"){for(;b<y;)if(I[R++]=A.charCodeAt(b++),R==this.blockSize){s(this,I),R=0;break}}else for(;b<y;)if(I[R++]=A[b++],R==this.blockSize){s(this,I),R=0;break}}this.h=R,this.o+=y},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var y=1;y<A.length-8;++y)A[y]=0;var v=8*this.o;for(y=A.length-8;y<A.length;++y)A[y]=v&255,v/=256;for(this.u(A),A=Array(16),y=v=0;4>y;++y)for(var I=0;32>I;I+=8)A[v++]=this.g[y]>>>I&255;return A};function i(A,y){var v=l;return Object.prototype.hasOwnProperty.call(v,A)?v[A]:v[A]=y(A)}function o(A,y){this.h=y;for(var v=[],I=!0,R=A.length-1;0<=R;R--){var b=A[R]|0;I&&b==y||(v[R]=b,I=!1)}this.g=v}var l={};function c(A){return-128<=A&&128>A?i(A,function(y){return new o([y|0],0>y?-1:0)}):new o([A|0],0>A?-1:0)}function u(A){if(isNaN(A)||!isFinite(A))return d;if(0>A)return P(u(-A));for(var y=[],v=1,I=0;A>=v;I++)y[I]=A/v|0,v*=4294967296;return new o(y,0)}function h(A,y){if(A.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(A.charAt(0)=="-")return P(h(A.substring(1),y));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=u(Math.pow(y,8)),I=d,R=0;R<A.length;R+=8){var b=Math.min(8,A.length-R),T=parseInt(A.substring(R,R+b),y);8>b?(b=u(Math.pow(y,b)),I=I.j(b).add(u(T))):(I=I.j(v),I=I.add(u(T)))}return I}var d=c(0),m=c(1),g=c(16777216);t=o.prototype,t.m=function(){if(S(this))return-P(this).m();for(var A=0,y=1,v=0;v<this.g.length;v++){var I=this.i(v);A+=(0<=I?I:4294967296+I)*y,y*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(E(this))return"0";if(S(this))return"-"+P(this).toString(A);for(var y=u(Math.pow(A,6)),v=this,I="";;){var R=Q(v,y).g;v=V(v,R.j(y));var b=((0<v.g.length?v.g[0]:v.h)>>>0).toString(A);if(v=R,E(v))return b+I;for(;6>b.length;)b="0"+b;I=b+I}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function E(A){if(A.h!=0)return!1;for(var y=0;y<A.g.length;y++)if(A.g[y]!=0)return!1;return!0}function S(A){return A.h==-1}t.l=function(A){return A=V(this,A),S(A)?-1:E(A)?0:1};function P(A){for(var y=A.g.length,v=[],I=0;I<y;I++)v[I]=~A.g[I];return new o(v,~A.h).add(m)}t.abs=function(){return S(this)?P(this):this},t.add=function(A){for(var y=Math.max(this.g.length,A.g.length),v=[],I=0,R=0;R<=y;R++){var b=I+(this.i(R)&65535)+(A.i(R)&65535),T=(b>>>16)+(this.i(R)>>>16)+(A.i(R)>>>16);I=T>>>16,b&=65535,T&=65535,v[R]=T<<16|b}return new o(v,v[v.length-1]&-2147483648?-1:0)};function V(A,y){return A.add(P(y))}t.j=function(A){if(E(this)||E(A))return d;if(S(this))return S(A)?P(this).j(P(A)):P(P(this).j(A));if(S(A))return P(this.j(P(A)));if(0>this.l(g)&&0>A.l(g))return u(this.m()*A.m());for(var y=this.g.length+A.g.length,v=[],I=0;I<2*y;I++)v[I]=0;for(I=0;I<this.g.length;I++)for(var R=0;R<A.g.length;R++){var b=this.i(I)>>>16,T=this.i(I)&65535,me=A.i(R)>>>16,Ke=A.i(R)&65535;v[2*I+2*R]+=T*Ke,M(v,2*I+2*R),v[2*I+2*R+1]+=b*Ke,M(v,2*I+2*R+1),v[2*I+2*R+1]+=T*me,M(v,2*I+2*R+1),v[2*I+2*R+2]+=b*me,M(v,2*I+2*R+2)}for(I=0;I<y;I++)v[I]=v[2*I+1]<<16|v[2*I];for(I=y;I<2*y;I++)v[I]=0;return new o(v,0)};function M(A,y){for(;(A[y]&65535)!=A[y];)A[y+1]+=A[y]>>>16,A[y]&=65535,y++}function F(A,y){this.g=A,this.h=y}function Q(A,y){if(E(y))throw Error("division by zero");if(E(A))return new F(d,d);if(S(A))return y=Q(P(A),y),new F(P(y.g),P(y.h));if(S(y))return y=Q(A,P(y)),new F(P(y.g),y.h);if(30<A.g.length){if(S(A)||S(y))throw Error("slowDivide_ only works with positive integers.");for(var v=m,I=y;0>=I.l(A);)v=W(v),I=W(I);var R=O(v,1),b=O(I,1);for(I=O(I,2),v=O(v,2);!E(I);){var T=b.add(I);0>=T.l(A)&&(R=R.add(v),b=T),I=O(I,1),v=O(v,1)}return y=V(A,R.j(y)),new F(R,y)}for(R=d;0<=A.l(y);){for(v=Math.max(1,Math.floor(A.m()/y.m())),I=Math.ceil(Math.log(v)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),b=u(v),T=b.j(y);S(T)||0<T.l(A);)v-=I,b=u(v),T=b.j(y);E(b)&&(b=m),R=R.add(b),A=V(A,T)}return new F(R,A)}t.A=function(A){return Q(this,A).h},t.and=function(A){for(var y=Math.max(this.g.length,A.g.length),v=[],I=0;I<y;I++)v[I]=this.i(I)&A.i(I);return new o(v,this.h&A.h)},t.or=function(A){for(var y=Math.max(this.g.length,A.g.length),v=[],I=0;I<y;I++)v[I]=this.i(I)|A.i(I);return new o(v,this.h|A.h)},t.xor=function(A){for(var y=Math.max(this.g.length,A.g.length),v=[],I=0;I<y;I++)v[I]=this.i(I)^A.i(I);return new o(v,this.h^A.h)};function W(A){for(var y=A.g.length+1,v=[],I=0;I<y;I++)v[I]=A.i(I)<<1|A.i(I-1)>>>31;return new o(v,A.h)}function O(A,y){var v=y>>5;y%=32;for(var I=A.g.length-v,R=[],b=0;b<I;b++)R[b]=0<y?A.i(b+v)>>>y|A.i(b+v+1)<<32-y:A.i(b+v);return new o(R,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,tT=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Qr=o}).apply(typeof Tg<"u"?Tg:typeof self<"u"?self:typeof window<"u"?window:{});var wa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var nT,rT,Fi,sT,xa,Yu,iT,oT,aT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,f,p){return a==Array.prototype||a==Object.prototype||(a[f]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof wa=="object"&&wa];for(var f=0;f<a.length;++f){var p=a[f];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(a,f){if(f)e:{var p=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var k=a[_];if(!(k in p))break e;p=p[k]}a=a[a.length-1],_=p[a],f=f(_),f!=_&&f!=null&&e(p,a,{configurable:!0,writable:!0,value:f})}}function i(a,f){a instanceof String&&(a+="");var p=0,_=!1,k={next:function(){if(!_&&p<a.length){var D=p++;return{value:f(D,a[D]),done:!1}}return _=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}s("Array.prototype.values",function(a){return a||function(){return i(this,function(f,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var f=typeof a;return f=f!="object"?f:a?Array.isArray(a)?"array":f:"null",f=="array"||f=="object"&&typeof a.length=="number"}function u(a){var f=typeof a;return f=="object"&&a!=null||f=="function"}function h(a,f,p){return a.call.apply(a.bind,arguments)}function d(a,f,p){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,_),a.apply(f,k)}}return function(){return a.apply(f,arguments)}}function m(a,f,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,m.apply(null,arguments)}function g(a,f){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function E(a,f){function p(){}p.prototype=f.prototype,a.aa=f.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(_,k,D){for(var K=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)K[Ue-2]=arguments[Ue];return f.prototype[k].apply(_,K)}}function S(a){const f=a.length;if(0<f){const p=Array(f);for(let _=0;_<f;_++)p[_]=a[_];return p}return[]}function P(a,f){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(c(_)){const k=a.length||0,D=_.length||0;a.length=k+D;for(let K=0;K<D;K++)a[k+K]=_[K]}else a.push(_)}}class V{constructor(f,p){this.i=f,this.j=p,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function M(a){return/^[\s\xa0]*$/.test(a)}function F(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function Q(a){return Q[" "](a),a}Q[" "]=function(){};var W=F().indexOf("Gecko")!=-1&&!(F().toLowerCase().indexOf("webkit")!=-1&&F().indexOf("Edge")==-1)&&!(F().indexOf("Trident")!=-1||F().indexOf("MSIE")!=-1)&&F().indexOf("Edge")==-1;function O(a,f,p){for(const _ in a)f.call(p,a[_],_,a)}function A(a,f){for(const p in a)f.call(void 0,a[p],p,a)}function y(a){const f={};for(const p in a)f[p]=a[p];return f}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,f){let p,_;for(let k=1;k<arguments.length;k++){_=arguments[k];for(p in _)a[p]=_[p];for(let D=0;D<v.length;D++)p=v[D],Object.prototype.hasOwnProperty.call(_,p)&&(a[p]=_[p])}}function R(a){var f=1;a=a.split(":");const p=[];for(;0<f&&a.length;)p.push(a.shift()),f--;return a.length&&p.push(a.join(":")),p}function b(a){l.setTimeout(()=>{throw a},0)}function T(){var a=ut;let f=null;return a.g&&(f=a.g,a.g=a.g.next,a.g||(a.h=null),f.next=null),f}class me{constructor(){this.h=this.g=null}add(f,p){const _=Ke.get();_.set(f,p),this.h?this.h.next=_:this.g=_,this.h=_}}var Ke=new V(()=>new Ne,a=>a.reset());class Ne{constructor(){this.next=this.g=this.h=null}set(f,p){this.h=f,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let ge,_e=!1,ut=new me,Bt=()=>{const a=l.Promise.resolve(void 0);ge=()=>{a.then(Ot)}};var Ot=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(p){b(p)}var f=Ke;f.j(a),100>f.h&&(f.h++,a.next=f.g,f.g=a)}_e=!1};function Me(){this.s=this.s,this.C=this.C}Me.prototype.s=!1,Me.prototype.ma=function(){this.s||(this.s=!0,this.N())},Me.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ve(a,f){this.type=a,this.g=this.target=f,this.defaultPrevented=!1}Ve.prototype.h=function(){this.defaultPrevented=!0};var En=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,f=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};l.addEventListener("test",p,f),l.removeEventListener("test",p,f)}catch{}return a}();function Mt(a,f){if(Ve.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=f,f=a.relatedTarget){if(W){e:{try{Q(f.nodeName);var k=!0;break e}catch{}k=!1}k||(f=null)}}else p=="mouseover"?f=a.fromElement:p=="mouseout"&&(f=a.toElement);this.relatedTarget=f,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:_t[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Mt.aa.h.call(this)}}E(Mt,Ve);var _t={2:"touch",3:"pen",4:"mouse"};Mt.prototype.h=function(){Mt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var x="closure_listenable_"+(1e6*Math.random()|0),G=0;function Y(a,f,p,_,k){this.listener=a,this.proxy=null,this.src=f,this.type=p,this.capture=!!_,this.ha=k,this.key=++G,this.da=this.fa=!1}function ee(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Te(a){this.src=a,this.g={},this.h=0}Te.prototype.add=function(a,f,p,_,k){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var K=w(a,f,_,k);return-1<K?(f=a[K],p||(f.fa=!1)):(f=new Y(f,this.src,D,!!_,k),f.fa=p,a.push(f)),f};function Fe(a,f){var p=f.type;if(p in a.g){var _=a.g[p],k=Array.prototype.indexOf.call(_,f,void 0),D;(D=0<=k)&&Array.prototype.splice.call(_,k,1),D&&(ee(f),a.g[p].length==0&&(delete a.g[p],a.h--))}}function w(a,f,p,_){for(var k=0;k<a.length;++k){var D=a[k];if(!D.da&&D.listener==f&&D.capture==!!p&&D.ha==_)return k}return-1}var C="closure_lm_"+(1e6*Math.random()|0),N={};function U(a,f,p,_,k){if(Array.isArray(f)){for(var D=0;D<f.length;D++)U(a,f[D],p,_,k);return null}return p=re(p),a&&a[x]?a.K(f,p,u(_)?!!_.capture:!!_,k):L(a,f,p,!1,_,k)}function L(a,f,p,_,k,D){if(!f)throw Error("Invalid event type");var K=u(k)?!!k.capture:!!k,Ue=Z(a);if(Ue||(a[C]=Ue=new Te(a)),p=Ue.add(f,p,_,K,D),p.proxy)return p;if(_=H(),p.proxy=_,_.src=a,_.listener=p,a.addEventListener)En||(k=K),k===void 0&&(k=!1),a.addEventListener(f.toString(),_,k);else if(a.attachEvent)a.attachEvent(z(f.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function H(){function a(p){return f.call(a.src,a.listener,p)}const f=$;return a}function X(a,f,p,_,k){if(Array.isArray(f))for(var D=0;D<f.length;D++)X(a,f[D],p,_,k);else _=u(_)?!!_.capture:!!_,p=re(p),a&&a[x]?(a=a.i,f=String(f).toString(),f in a.g&&(D=a.g[f],p=w(D,p,_,k),-1<p&&(ee(D[p]),Array.prototype.splice.call(D,p,1),D.length==0&&(delete a.g[f],a.h--)))):a&&(a=Z(a))&&(f=a.g[f.toString()],a=-1,f&&(a=w(f,p,_,k)),(p=-1<a?f[a]:null)&&q(p))}function q(a){if(typeof a!="number"&&a&&!a.da){var f=a.src;if(f&&f[x])Fe(f.i,a);else{var p=a.type,_=a.proxy;f.removeEventListener?f.removeEventListener(p,_,a.capture):f.detachEvent?f.detachEvent(z(p),_):f.addListener&&f.removeListener&&f.removeListener(_),(p=Z(f))?(Fe(p,a),p.h==0&&(p.src=null,f[C]=null)):ee(a)}}}function z(a){return a in N?N[a]:N[a]="on"+a}function $(a,f){if(a.da)a=!0;else{f=new Mt(f,this);var p=a.listener,_=a.ha||a.src;a.fa&&q(a),a=p.call(_,f)}return a}function Z(a){return a=a[C],a instanceof Te?a:null}var se="__closure_events_fn_"+(1e9*Math.random()>>>0);function re(a){return typeof a=="function"?a:(a[se]||(a[se]=function(f){return a.handleEvent(f)}),a[se])}function ne(){Me.call(this),this.i=new Te(this),this.M=this,this.F=null}E(ne,Me),ne.prototype[x]=!0,ne.prototype.removeEventListener=function(a,f,p,_){X(this,a,f,p,_)};function ie(a,f){var p,_=a.F;if(_)for(p=[];_;_=_.F)p.push(_);if(a=a.M,_=f.type||f,typeof f=="string")f=new Ve(f,a);else if(f instanceof Ve)f.target=f.target||a;else{var k=f;f=new Ve(_,a),I(f,k)}if(k=!0,p)for(var D=p.length-1;0<=D;D--){var K=f.g=p[D];k=De(K,_,!0,f)&&k}if(K=f.g=a,k=De(K,_,!0,f)&&k,k=De(K,_,!1,f)&&k,p)for(D=0;D<p.length;D++)K=f.g=p[D],k=De(K,_,!1,f)&&k}ne.prototype.N=function(){if(ne.aa.N.call(this),this.i){var a=this.i,f;for(f in a.g){for(var p=a.g[f],_=0;_<p.length;_++)ee(p[_]);delete a.g[f],a.h--}}this.F=null},ne.prototype.K=function(a,f,p,_){return this.i.add(String(a),f,!1,p,_)},ne.prototype.L=function(a,f,p,_){return this.i.add(String(a),f,!0,p,_)};function De(a,f,p,_){if(f=a.i.g[String(f)],!f)return!0;f=f.concat();for(var k=!0,D=0;D<f.length;++D){var K=f[D];if(K&&!K.da&&K.capture==p){var Ue=K.listener,ht=K.ha||K.src;K.fa&&Fe(a.i,K),k=Ue.call(ht,_)!==!1&&k}}return k&&!_.defaultPrevented}function Ce(a,f,p){if(typeof a=="function")p&&(a=m(a,p));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:l.setTimeout(a,f||0)}function Je(a){a.g=Ce(()=>{a.g=null,a.i&&(a.i=!1,Je(a))},a.l);const f=a.h;a.h=null,a.m.apply(null,f)}class $t extends Me{constructor(f,p){super(),this.m=f,this.l=p,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Je(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xt(a){Me.call(this),this.h=a,this.g={}}E(Xt,Me);var hi=[];function Jn(a){O(a.g,function(f,p){this.g.hasOwnProperty(p)&&q(f)},a),a.g={}}Xt.prototype.N=function(){Xt.aa.N.call(this),Jn(this)},Xt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var us=l.JSON.stringify,Pt=l.JSON.parse,Jt=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function hs(){}hs.prototype.h=null;function qf(a){return a.h||(a.h=a.i())}function Kf(){}var fi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function cc(){Ve.call(this,"d")}E(cc,Ve);function uc(){Ve.call(this,"c")}E(uc,Ve);var Dr={},zf=null;function zo(){return zf=zf||new ne}Dr.La="serverreachability";function Gf(a){Ve.call(this,Dr.La,a)}E(Gf,Ve);function di(a){const f=zo();ie(f,new Gf(f))}Dr.STAT_EVENT="statevent";function Qf(a,f){Ve.call(this,Dr.STAT_EVENT,a),this.stat=f}E(Qf,Ve);function kt(a){const f=zo();ie(f,new Qf(f,a))}Dr.Ma="timingevent";function Yf(a,f){Ve.call(this,Dr.Ma,a),this.size=f}E(Yf,Ve);function pi(a,f){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},f)}function mi(){this.g=!0}mi.prototype.xa=function(){this.g=!1};function bw(a,f,p,_,k,D){a.info(function(){if(a.g)if(D)for(var K="",Ue=D.split("&"),ht=0;ht<Ue.length;ht++){var Se=Ue[ht].split("=");if(1<Se.length){var yt=Se[0];Se=Se[1];var vt=yt.split("_");K=2<=vt.length&&vt[1]=="type"?K+(yt+"="+Se+"&"):K+(yt+"=redacted&")}}else K=null;else K=D;return"XMLHTTP REQ ("+_+") [attempt "+k+"]: "+f+`
`+p+`
`+K})}function Cw(a,f,p,_,k,D,K){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+k+"]: "+f+`
`+p+`
`+D+" "+K})}function fs(a,f,p,_){a.info(function(){return"XMLHTTP TEXT ("+f+"): "+Sw(a,p)+(_?" "+_:"")})}function Rw(a,f){a.info(function(){return"TIMEOUT: "+f})}mi.prototype.info=function(){};function Sw(a,f){if(!a.g)return f;if(!f)return null;try{var p=JSON.parse(f);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var _=p[a];if(!(2>_.length)){var k=_[1];if(Array.isArray(k)&&!(1>k.length)){var D=k[0];if(D!="noop"&&D!="stop"&&D!="close")for(var K=1;K<k.length;K++)k[K]=""}}}}return us(p)}catch{return f}}var Go={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Xf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},hc;function Qo(){}E(Qo,hs),Qo.prototype.g=function(){return new XMLHttpRequest},Qo.prototype.i=function(){return{}},hc=new Qo;function Zn(a,f,p,_){this.j=a,this.i=f,this.l=p,this.R=_||1,this.U=new Xt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Jf}function Jf(){this.i=null,this.g="",this.h=!1}var Zf={},fc={};function dc(a,f,p){a.L=1,a.v=Zo(Ln(f)),a.m=p,a.P=!0,ed(a,null)}function ed(a,f){a.F=Date.now(),Yo(a),a.A=Ln(a.v);var p=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),pd(p.i,"t",_),a.C=0,p=a.j.J,a.h=new Jf,a.g=Dd(a.j,p?f:null,!a.m),0<a.O&&(a.M=new $t(m(a.Y,a,a.g),a.O)),f=a.U,p=a.g,_=a.ca;var k="readystatechange";Array.isArray(k)||(k&&(hi[0]=k.toString()),k=hi);for(var D=0;D<k.length;D++){var K=U(p,k[D],_||f.handleEvent,!1,f.h||f);if(!K)break;f.g[K.key]=K}f=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,f)):(a.u="GET",a.g.ea(a.A,a.u,null,f)),di(),bw(a.i,a.u,a.A,a.l,a.R,a.m)}Zn.prototype.ca=function(a){a=a.target;const f=this.M;f&&Vn(a)==3?f.j():this.Y(a)},Zn.prototype.Y=function(a){try{if(a==this.g)e:{const vt=Vn(this.g);var f=this.g.Ba();const ms=this.g.Z();if(!(3>vt)&&(vt!=3||this.g&&(this.h.h||this.g.oa()||Td(this.g)))){this.J||vt!=4||f==7||(f==8||0>=ms?di(3):di(2)),pc(this);var p=this.g.Z();this.X=p;t:if(td(this)){var _=Td(this.g);a="";var k=_.length,D=Vn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Or(this),gi(this);var K="";break t}this.h.i=new l.TextDecoder}for(f=0;f<k;f++)this.h.h=!0,a+=this.h.i.decode(_[f],{stream:!(D&&f==k-1)});_.length=0,this.h.g+=a,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=p==200,Cw(this.i,this.u,this.A,this.l,this.R,vt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,ht=this.g;if((Ue=ht.g?ht.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(Ue)){var Se=Ue;break t}}Se=null}if(p=Se)fs(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,mc(this,p);else{this.o=!1,this.s=3,kt(12),Or(this),gi(this);break e}}if(this.P){p=!0;let on;for(;!this.J&&this.C<K.length;)if(on=Pw(this,K),on==fc){vt==4&&(this.s=4,kt(14),p=!1),fs(this.i,this.l,null,"[Incomplete Response]");break}else if(on==Zf){this.s=4,kt(15),fs(this.i,this.l,K,"[Invalid Chunk]"),p=!1;break}else fs(this.i,this.l,on,null),mc(this,on);if(td(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),vt!=4||K.length!=0||this.h.h||(this.s=1,kt(16),p=!1),this.o=this.o&&p,!p)fs(this.i,this.l,K,"[Invalid Chunked Response]"),Or(this),gi(this);else if(0<K.length&&!this.W){this.W=!0;var yt=this.j;yt.g==this&&yt.ba&&!yt.M&&(yt.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),Tc(yt),yt.M=!0,kt(11))}}else fs(this.i,this.l,K,null),mc(this,K);vt==4&&Or(this),this.o&&!this.J&&(vt==4?Sd(this.j,this):(this.o=!1,Yo(this)))}else Kw(this.g),p==400&&0<K.indexOf("Unknown SID")?(this.s=3,kt(12)):(this.s=0,kt(13)),Or(this),gi(this)}}}catch{}finally{}};function td(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Pw(a,f){var p=a.C,_=f.indexOf(`
`,p);return _==-1?fc:(p=Number(f.substring(p,_)),isNaN(p)?Zf:(_+=1,_+p>f.length?fc:(f=f.slice(_,_+p),a.C=_+p,f)))}Zn.prototype.cancel=function(){this.J=!0,Or(this)};function Yo(a){a.S=Date.now()+a.I,nd(a,a.I)}function nd(a,f){if(a.B!=null)throw Error("WatchDog timer not null");a.B=pi(m(a.ba,a),f)}function pc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Zn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Rw(this.i,this.A),this.L!=2&&(di(),kt(17)),Or(this),this.s=2,gi(this)):nd(this,this.S-a)};function gi(a){a.j.G==0||a.J||Sd(a.j,a)}function Or(a){pc(a);var f=a.M;f&&typeof f.ma=="function"&&f.ma(),a.M=null,Jn(a.U),a.g&&(f=a.g,a.g=null,f.abort(),f.ma())}function mc(a,f){try{var p=a.j;if(p.G!=0&&(p.g==a||gc(p.h,a))){if(!a.K&&gc(p.h,a)&&p.G==3){try{var _=p.Da.g.parse(f)}catch{_=null}if(Array.isArray(_)&&_.length==3){var k=_;if(k[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)sa(p),na(p);else break e;Ec(p),kt(18)}}else p.za=k[1],0<p.za-p.T&&37500>k[2]&&p.F&&p.v==0&&!p.C&&(p.C=pi(m(p.Za,p),6e3));if(1>=id(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else xr(p,11)}else if((a.K||p.g==a)&&sa(p),!M(f))for(k=p.Da.g.parse(f),f=0;f<k.length;f++){let Se=k[f];if(p.T=Se[0],Se=Se[1],p.G==2)if(Se[0]=="c"){p.K=Se[1],p.ia=Se[2];const yt=Se[3];yt!=null&&(p.la=yt,p.j.info("VER="+p.la));const vt=Se[4];vt!=null&&(p.Aa=vt,p.j.info("SVER="+p.Aa));const ms=Se[5];ms!=null&&typeof ms=="number"&&0<ms&&(_=1.5*ms,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const on=a.g;if(on){const oa=on.g?on.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(oa){var D=_.h;D.g||oa.indexOf("spdy")==-1&&oa.indexOf("quic")==-1&&oa.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(_c(D,D.h),D.h=null))}if(_.D){const wc=on.g?on.g.getResponseHeader("X-HTTP-Session-Id"):null;wc&&(_.ya=wc,je(_.I,_.D,wc))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var K=a;if(_.qa=Nd(_,_.J?_.ia:null,_.W),K.K){od(_.h,K);var Ue=K,ht=_.L;ht&&(Ue.I=ht),Ue.B&&(pc(Ue),Yo(Ue)),_.g=K}else Cd(_);0<p.i.length&&ra(p)}else Se[0]!="stop"&&Se[0]!="close"||xr(p,7);else p.G==3&&(Se[0]=="stop"||Se[0]=="close"?Se[0]=="stop"?xr(p,7):vc(p):Se[0]!="noop"&&p.l&&p.l.ta(Se),p.v=0)}}di(4)}catch{}}var kw=class{constructor(a,f){this.g=a,this.map=f}};function rd(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function sd(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function id(a){return a.h?1:a.g?a.g.size:0}function gc(a,f){return a.h?a.h==f:a.g?a.g.has(f):!1}function _c(a,f){a.g?a.g.add(f):a.h=f}function od(a,f){a.h&&a.h==f?a.h=null:a.g&&a.g.has(f)&&a.g.delete(f)}rd.prototype.cancel=function(){if(this.i=ad(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function ad(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let f=a.i;for(const p of a.g.values())f=f.concat(p.D);return f}return S(a.i)}function Nw(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var f=[],p=a.length,_=0;_<p;_++)f.push(a[_]);return f}f=[],p=0;for(_ in a)f[p++]=a[_];return f}function Dw(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var f=[];a=a.length;for(var p=0;p<a;p++)f.push(p);return f}f=[],p=0;for(const _ in a)f[p++]=_;return f}}}function ld(a,f){if(a.forEach&&typeof a.forEach=="function")a.forEach(f,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,f,void 0);else for(var p=Dw(a),_=Nw(a),k=_.length,D=0;D<k;D++)f.call(void 0,_[D],p&&p[D],a)}var cd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ow(a,f){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var _=a[p].indexOf("="),k=null;if(0<=_){var D=a[p].substring(0,_);k=a[p].substring(_+1)}else D=a[p];f(D,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Mr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Mr){this.h=a.h,Xo(this,a.j),this.o=a.o,this.g=a.g,Jo(this,a.s),this.l=a.l;var f=a.i,p=new vi;p.i=f.i,f.g&&(p.g=new Map(f.g),p.h=f.h),ud(this,p),this.m=a.m}else a&&(f=String(a).match(cd))?(this.h=!1,Xo(this,f[1]||"",!0),this.o=_i(f[2]||""),this.g=_i(f[3]||"",!0),Jo(this,f[4]),this.l=_i(f[5]||"",!0),ud(this,f[6]||"",!0),this.m=_i(f[7]||"")):(this.h=!1,this.i=new vi(null,this.h))}Mr.prototype.toString=function(){var a=[],f=this.j;f&&a.push(yi(f,hd,!0),":");var p=this.g;return(p||f=="file")&&(a.push("//"),(f=this.o)&&a.push(yi(f,hd,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(yi(p,p.charAt(0)=="/"?Lw:xw,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",yi(p,Fw)),a.join("")};function Ln(a){return new Mr(a)}function Xo(a,f,p){a.j=p?_i(f,!0):f,a.j&&(a.j=a.j.replace(/:$/,""))}function Jo(a,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);a.s=f}else a.s=null}function ud(a,f,p){f instanceof vi?(a.i=f,Uw(a.i,a.h)):(p||(f=yi(f,Vw)),a.i=new vi(f,a.h))}function je(a,f,p){a.i.set(f,p)}function Zo(a){return je(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function _i(a,f){return a?f?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function yi(a,f,p){return typeof a=="string"?(a=encodeURI(a).replace(f,Mw),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Mw(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var hd=/[#\/\?@]/g,xw=/[#\?:]/g,Lw=/[#\?]/g,Vw=/[#\?@]/g,Fw=/#/g;function vi(a,f){this.h=this.g=null,this.i=a||null,this.j=!!f}function er(a){a.g||(a.g=new Map,a.h=0,a.i&&Ow(a.i,function(f,p){a.add(decodeURIComponent(f.replace(/\+/g," ")),p)}))}t=vi.prototype,t.add=function(a,f){er(this),this.i=null,a=ds(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(f),this.h+=1,this};function fd(a,f){er(a),f=ds(a,f),a.g.has(f)&&(a.i=null,a.h-=a.g.get(f).length,a.g.delete(f))}function dd(a,f){return er(a),f=ds(a,f),a.g.has(f)}t.forEach=function(a,f){er(this),this.g.forEach(function(p,_){p.forEach(function(k){a.call(f,k,_,this)},this)},this)},t.na=function(){er(this);const a=Array.from(this.g.values()),f=Array.from(this.g.keys()),p=[];for(let _=0;_<f.length;_++){const k=a[_];for(let D=0;D<k.length;D++)p.push(f[_])}return p},t.V=function(a){er(this);let f=[];if(typeof a=="string")dd(this,a)&&(f=f.concat(this.g.get(ds(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)f=f.concat(a[p])}return f},t.set=function(a,f){return er(this),this.i=null,a=ds(this,a),dd(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[f]),this.h+=1,this},t.get=function(a,f){return a?(a=this.V(a),0<a.length?String(a[0]):f):f};function pd(a,f,p){fd(a,f),0<p.length&&(a.i=null,a.g.set(ds(a,f),S(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],f=Array.from(this.g.keys());for(var p=0;p<f.length;p++){var _=f[p];const D=encodeURIComponent(String(_)),K=this.V(_);for(_=0;_<K.length;_++){var k=D;K[_]!==""&&(k+="="+encodeURIComponent(String(K[_]))),a.push(k)}}return this.i=a.join("&")};function ds(a,f){return f=String(f),a.j&&(f=f.toLowerCase()),f}function Uw(a,f){f&&!a.j&&(er(a),a.i=null,a.g.forEach(function(p,_){var k=_.toLowerCase();_!=k&&(fd(this,_),pd(this,k,p))},a)),a.j=f}function Bw(a,f){const p=new mi;if(l.Image){const _=new Image;_.onload=g(tr,p,"TestLoadImage: loaded",!0,f,_),_.onerror=g(tr,p,"TestLoadImage: error",!1,f,_),_.onabort=g(tr,p,"TestLoadImage: abort",!1,f,_),_.ontimeout=g(tr,p,"TestLoadImage: timeout",!1,f,_),l.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else f(!1)}function $w(a,f){const p=new mi,_=new AbortController,k=setTimeout(()=>{_.abort(),tr(p,"TestPingServer: timeout",!1,f)},1e4);fetch(a,{signal:_.signal}).then(D=>{clearTimeout(k),D.ok?tr(p,"TestPingServer: ok",!0,f):tr(p,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(k),tr(p,"TestPingServer: error",!1,f)})}function tr(a,f,p,_,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),_(p)}catch{}}function jw(){this.g=new Jt}function Hw(a,f,p){const _=p||"";try{ld(a,function(k,D){let K=k;u(k)&&(K=us(k)),f.push(_+D+"="+encodeURIComponent(K))})}catch(k){throw f.push(_+"type="+encodeURIComponent("_badmap")),k}}function Ei(a){this.l=a.Ub||null,this.j=a.eb||!1}E(Ei,hs),Ei.prototype.g=function(){return new ea(this.l,this.j)},Ei.prototype.i=function(a){return function(){return a}}({});function ea(a,f){ne.call(this),this.D=a,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}E(ea,ne),t=ea.prototype,t.open=function(a,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=f,this.readyState=1,wi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(f.body=a),(this.D||l).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ti(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,wi(this)),this.g&&(this.readyState=3,wi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;md(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function md(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var f=a.value?a.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!a.done}))&&(this.response=this.responseText+=f)}a.done?Ti(this):wi(this),this.readyState==3&&md(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ti(this))},t.Qa=function(a){this.g&&(this.response=a,Ti(this))},t.ga=function(){this.g&&Ti(this)};function Ti(a){a.readyState=4,a.l=null,a.j=null,a.v=null,wi(a)}t.setRequestHeader=function(a,f){this.u.append(a,f)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],f=this.h.entries();for(var p=f.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=f.next();return a.join(`\r
`)};function wi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ea.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function gd(a){let f="";return O(a,function(p,_){f+=_,f+=":",f+=p,f+=`\r
`}),f}function yc(a,f,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=gd(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):je(a,f,p))}function Ye(a){ne.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}E(Ye,ne);var Ww=/^https?$/i,qw=["POST","PUT"];t=Ye.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,f,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);f=f?f.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():hc.g(),this.v=this.o?qf(this.o):qf(hc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(f,String(a),!0),this.B=!1}catch(D){_d(this,D);return}if(a=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var k in _)p.set(k,_[k]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const D of _.keys())p.set(D,_.get(D));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(D=>D.toLowerCase()=="content-type"),k=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(qw,f,void 0))||_||k||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,K]of p)this.g.setRequestHeader(D,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ed(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){_d(this,D)}};function _d(a,f){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=f,a.m=5,yd(a),ta(a)}function yd(a){a.A||(a.A=!0,ie(a,"complete"),ie(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ie(this,"complete"),ie(this,"abort"),ta(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ta(this,!0)),Ye.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?vd(this):this.bb())},t.bb=function(){vd(this)};function vd(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Vn(a)!=4||a.Z()!=2)){if(a.u&&Vn(a)==4)Ce(a.Ea,0,a);else if(ie(a,"readystatechange"),Vn(a)==4){a.h=!1;try{const K=a.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var p;if(!(p=f)){var _;if(_=K===0){var k=String(a.D).match(cd)[1]||null;!k&&l.self&&l.self.location&&(k=l.self.location.protocol.slice(0,-1)),_=!Ww.test(k?k.toLowerCase():"")}p=_}if(p)ie(a,"complete"),ie(a,"success");else{a.m=6;try{var D=2<Vn(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",yd(a)}}finally{ta(a)}}}}function ta(a,f){if(a.g){Ed(a);const p=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,f||ie(a,"ready");try{p.onreadystatechange=_}catch{}}}function Ed(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Vn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Vn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var f=this.g.responseText;return a&&f.indexOf(a)==0&&(f=f.substring(a.length)),Pt(f)}};function Td(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Kw(a){const f={};a=(a.g&&2<=Vn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(M(a[_]))continue;var p=R(a[_]);const k=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const D=f[k]||[];f[k]=D,D.push(p)}A(f,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ii(a,f,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||f}function wd(a){this.Aa=0,this.i=[],this.j=new mi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ii("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ii("baseRetryDelayMs",5e3,a),this.cb=Ii("retryDelaySeedMs",1e4,a),this.Wa=Ii("forwardChannelMaxRetries",2,a),this.wa=Ii("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new rd(a&&a.concurrentRequestLimit),this.Da=new jw,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=wd.prototype,t.la=8,t.G=1,t.connect=function(a,f,p,_){kt(0),this.W=a,this.H=f||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=Nd(this,null,this.W),ra(this)};function vc(a){if(Id(a),a.G==3){var f=a.U++,p=Ln(a.I);if(je(p,"SID",a.K),je(p,"RID",f),je(p,"TYPE","terminate"),Ai(a,p),f=new Zn(a,a.j,f),f.L=2,f.v=Zo(Ln(p)),p=!1,l.navigator&&l.navigator.sendBeacon)try{p=l.navigator.sendBeacon(f.v.toString(),"")}catch{}!p&&l.Image&&(new Image().src=f.v,p=!0),p||(f.g=Dd(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Yo(f)}kd(a)}function na(a){a.g&&(Tc(a),a.g.cancel(),a.g=null)}function Id(a){na(a),a.u&&(l.clearTimeout(a.u),a.u=null),sa(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ra(a){if(!sd(a.h)&&!a.s){a.s=!0;var f=a.Ga;ge||Bt(),_e||(ge(),_e=!0),ut.add(f,a),a.B=0}}function zw(a,f){return id(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=f.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=pi(m(a.Ga,a,f),Pd(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const k=new Zn(this,this.j,a);let D=this.o;if(this.S&&(D?(D=y(D),I(D,this.S)):D=this.S),this.m!==null||this.O||(k.H=D,D=null),this.P)e:{for(var f=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(f+=_,4096<f){f=p;break e}if(f===4096||p===this.i.length-1){f=p+1;break e}}f=1e3}else f=1e3;f=bd(this,k,f),p=Ln(this.I),je(p,"RID",a),je(p,"CVER",22),this.D&&je(p,"X-HTTP-Session-Id",this.D),Ai(this,p),D&&(this.O?f="headers="+encodeURIComponent(String(gd(D)))+"&"+f:this.m&&yc(p,this.m,D)),_c(this.h,k),this.Ua&&je(p,"TYPE","init"),this.P?(je(p,"$req",f),je(p,"SID","null"),k.T=!0,dc(k,p,null)):dc(k,p,f),this.G=2}}else this.G==3&&(a?Ad(this,a):this.i.length==0||sd(this.h)||Ad(this))};function Ad(a,f){var p;f?p=f.l:p=a.U++;const _=Ln(a.I);je(_,"SID",a.K),je(_,"RID",p),je(_,"AID",a.T),Ai(a,_),a.m&&a.o&&yc(_,a.m,a.o),p=new Zn(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),f&&(a.i=f.D.concat(a.i)),f=bd(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),_c(a.h,p),dc(p,_,f)}function Ai(a,f){a.H&&O(a.H,function(p,_){je(f,_,p)}),a.l&&ld({},function(p,_){je(f,_,p)})}function bd(a,f,p){p=Math.min(a.i.length,p);var _=a.l?m(a.l.Na,a.l,a):null;e:{var k=a.i;let D=-1;for(;;){const K=["count="+p];D==-1?0<p?(D=k[0].g,K.push("ofs="+D)):D=0:K.push("ofs="+D);let Ue=!0;for(let ht=0;ht<p;ht++){let Se=k[ht].g;const yt=k[ht].map;if(Se-=D,0>Se)D=Math.max(0,k[ht].g-100),Ue=!1;else try{Hw(yt,K,"req"+Se+"_")}catch{_&&_(yt)}}if(Ue){_=K.join("&");break e}}}return a=a.i.splice(0,p),f.D=a,_}function Cd(a){if(!a.g&&!a.u){a.Y=1;var f=a.Fa;ge||Bt(),_e||(ge(),_e=!0),ut.add(f,a),a.v=0}}function Ec(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=pi(m(a.Fa,a),Pd(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Rd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=pi(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,kt(10),na(this),Rd(this))};function Tc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Rd(a){a.g=new Zn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var f=Ln(a.qa);je(f,"RID","rpc"),je(f,"SID",a.K),je(f,"AID",a.T),je(f,"CI",a.F?"0":"1"),!a.F&&a.ja&&je(f,"TO",a.ja),je(f,"TYPE","xmlhttp"),Ai(a,f),a.m&&a.o&&yc(f,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=Zo(Ln(f)),p.m=null,p.P=!0,ed(p,a)}t.Za=function(){this.C!=null&&(this.C=null,na(this),Ec(this),kt(19))};function sa(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Sd(a,f){var p=null;if(a.g==f){sa(a),Tc(a),a.g=null;var _=2}else if(gc(a.h,f))p=f.D,od(a.h,f),_=1;else return;if(a.G!=0){if(f.o)if(_==1){p=f.m?f.m.length:0,f=Date.now()-f.F;var k=a.B;_=zo(),ie(_,new Yf(_,p)),ra(a)}else Cd(a);else if(k=f.s,k==3||k==0&&0<f.X||!(_==1&&zw(a,f)||_==2&&Ec(a)))switch(p&&0<p.length&&(f=a.h,f.i=f.i.concat(p)),k){case 1:xr(a,5);break;case 4:xr(a,10);break;case 3:xr(a,6);break;default:xr(a,2)}}}function Pd(a,f){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*f}function xr(a,f){if(a.j.info("Error code "+f),f==2){var p=m(a.fb,a),_=a.Xa;const k=!_;_=new Mr(_||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Xo(_,"https"),Zo(_),k?Bw(_.toString(),p):$w(_.toString(),p)}else kt(2);a.G=0,a.l&&a.l.sa(f),kd(a),Id(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),kt(2)):(this.j.info("Failed to ping google.com"),kt(1))};function kd(a){if(a.G=0,a.ka=[],a.l){const f=ad(a.h);(f.length!=0||a.i.length!=0)&&(P(a.ka,f),P(a.ka,a.i),a.h.i.length=0,S(a.i),a.i.length=0),a.l.ra()}}function Nd(a,f,p){var _=p instanceof Mr?Ln(p):new Mr(p);if(_.g!="")f&&(_.g=f+"."+_.g),Jo(_,_.s);else{var k=l.location;_=k.protocol,f=f?f+"."+k.hostname:k.hostname,k=+k.port;var D=new Mr(null);_&&Xo(D,_),f&&(D.g=f),k&&Jo(D,k),p&&(D.l=p),_=D}return p=a.D,f=a.ya,p&&f&&je(_,p,f),je(_,"VER",a.la),Ai(a,_),_}function Dd(a,f,p){if(f&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=a.Ca&&!a.pa?new Ye(new Ei({eb:p})):new Ye(a.pa),f.Ha(a.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Od(){}t=Od.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ia(){}ia.prototype.g=function(a,f){return new jt(a,f)};function jt(a,f){ne.call(this),this.g=new wd(f),this.l=a,this.h=f&&f.messageUrlParams||null,a=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(a?a["X-WebChannel-Content-Type"]=f.messageContentType:a={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(a?a["X-WebChannel-Client-Profile"]=f.va:a={"X-WebChannel-Client-Profile":f.va}),this.g.S=a,(a=f&&f.Sb)&&!M(a)&&(this.g.m=a),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!M(f)&&(this.g.D=f,a=this.h,a!==null&&f in a&&(a=this.h,f in a&&delete a[f])),this.j=new ps(this)}E(jt,ne),jt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},jt.prototype.close=function(){vc(this.g)},jt.prototype.o=function(a){var f=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=us(a),a=p);f.i.push(new kw(f.Ya++,a)),f.G==3&&ra(f)},jt.prototype.N=function(){this.g.l=null,delete this.j,vc(this.g),delete this.g,jt.aa.N.call(this)};function Md(a){cc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var f=a.__sm__;if(f){e:{for(const p in f){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,f=f!==null&&a in f?f[a]:void 0),this.data=f}else this.data=a}E(Md,cc);function xd(){uc.call(this),this.status=1}E(xd,uc);function ps(a){this.g=a}E(ps,Od),ps.prototype.ua=function(){ie(this.g,"a")},ps.prototype.ta=function(a){ie(this.g,new Md(a))},ps.prototype.sa=function(a){ie(this.g,new xd)},ps.prototype.ra=function(){ie(this.g,"b")},ia.prototype.createWebChannel=ia.prototype.g,jt.prototype.send=jt.prototype.o,jt.prototype.open=jt.prototype.m,jt.prototype.close=jt.prototype.close,aT=function(){return new ia},oT=function(){return zo()},iT=Dr,Yu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Go.NO_ERROR=0,Go.TIMEOUT=8,Go.HTTP_ERROR=6,xa=Go,Xf.COMPLETE="complete",sT=Xf,Kf.EventType=fi,fi.OPEN="a",fi.CLOSE="b",fi.ERROR="c",fi.MESSAGE="d",ne.prototype.listen=ne.prototype.K,Fi=Kf,rT=Ei,Ye.prototype.listenOnce=Ye.prototype.L,Ye.prototype.getLastError=Ye.prototype.Ka,Ye.prototype.getLastErrorCode=Ye.prototype.Ba,Ye.prototype.getStatus=Ye.prototype.Z,Ye.prototype.getResponseJson=Ye.prototype.Oa,Ye.prototype.getResponseText=Ye.prototype.oa,Ye.prototype.send=Ye.prototype.ea,Ye.prototype.setWithCredentials=Ye.prototype.Ha,nT=Ye}).apply(typeof wa<"u"?wa:typeof self<"u"?self:typeof window<"u"?window:{});const wg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Tt.UNAUTHENTICATED=new Tt(null),Tt.GOOGLE_CREDENTIALS=new Tt("google-credentials-uid"),Tt.FIRST_PARTY=new Tt("first-party-uid"),Tt.MOCK_USER=new Tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ai="10.13.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=new Mo("@firebase/firestore");function Di(){return ns.logLevel}function te(t,...e){if(ns.logLevel<=ye.DEBUG){const n=e.map(pf);ns.debug(`Firestore (${ai}): ${t}`,...n)}}function zn(t,...e){if(ns.logLevel<=ye.ERROR){const n=e.map(pf);ns.error(`Firestore (${ai}): ${t}`,...n)}}function Ks(t,...e){if(ns.logLevel<=ye.WARN){const n=e.map(pf);ns.warn(`Firestore (${ai}): ${t}`,...n)}}function pf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(t="Unexpected state"){const e=`FIRESTORE (${ai}) INTERNAL ASSERTION FAILED: `+t;throw zn(e),new Error(e)}function Be(t,e){t||he()}function de(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class oe extends Yn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class OD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Tt.UNAUTHENTICATED))}shutdown(){}}class MD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class xD{constructor(e){this.t=e,this.currentUser=Tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Er;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Er,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Er)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Be(typeof r.accessToken=="string"),new lT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Be(e===null||typeof e=="string"),new Tt(e)}}class LD{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Tt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class VD{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new LD(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class FD{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class UD{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,te("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Be(typeof n.token=="string"),this.R=n.token,new FD(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=BD(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Pe(t,e){return t<e?-1:t>e?1:0}function zs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new oe(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new oe(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new oe(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new oe(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return nt.fromMillis(Date.now())}static fromDate(e){return nt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new nt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new fe(e)}static min(){return new fe(new nt(0,0))}static max(){return new fe(new nt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,n,r){n===void 0?n=0:n>e.length&&he(),r===void 0?r=e.length-n:r>e.length-n&&he(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Eo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Eo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ge extends Eo{construct(e,n,r){return new Ge(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new oe(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ge(n)}static emptyPath(){return new Ge([])}}const $D=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pt extends Eo{construct(e,n,r){return new pt(e,n,r)}static isValidIdentifier(e){return $D.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new pt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new oe(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new oe(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new oe(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new oe(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pt(n)}static emptyPath(){return new pt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.path=e}static fromPath(e){return new ae(Ge.fromString(e))}static fromName(e){return new ae(Ge.fromString(e).popFirst(5))}static empty(){return new ae(Ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ae(new Ge(e.slice()))}}function jD(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=fe.fromTimestamp(r===1e9?new nt(n+1,0):new nt(n,r));return new br(s,ae.empty(),e)}function HD(t){return new br(t.readTime,t.key,-1)}class br{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new br(fe.min(),ae.empty(),-1)}static max(){return new br(fe.max(),ae.empty(),-1)}}function WD(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ae.comparator(t.documentKey,e.documentKey),n!==0?n:Pe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class KD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $o(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==qD)throw t;te("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&he(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(s=>s?B.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new B((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(h=>{o[u]=h,++l,l===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new B((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function zD(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function jo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}mf.oe=-1;function Jl(t){return t==null}function fl(t){return t===0&&1/t==-1/0}function GD(t){return typeof t=="number"&&Number.isInteger(t)&&!fl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ig(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function li(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function uT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,n){this.comparator=e,this.root=n||ft.EMPTY}insert(e,n){return new Qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ft.BLACK,null,null))}remove(e){return new Qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ft.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ia(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ia(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ia(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ia(this.root,e,this.comparator,!0)}}class Ia{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ft{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ft.RED,this.left=s??ft.EMPTY,this.right=i??ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ft(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ft.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ft.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw he();const e=this.left.check();if(e!==this.right.check())throw he();return e+(this.isRed()?0:1)}}ft.EMPTY=null,ft.RED=!0,ft.BLACK=!1;ft.EMPTY=new class{constructor(){this.size=0}get key(){throw he()}get value(){throw he()}get color(){throw he()}get left(){throw he()}get right(){throw he()}copy(e,n,r,s,i){return this}insert(e,n,r){return new ft(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.comparator=e,this.data=new Qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ag(this.data.getIterator())}getIteratorFrom(e){return new Ag(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof mt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new mt(this.comparator);return n.data=e,n}}class Ag{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this.fields=e,e.sort(pt.comparator)}static empty(){return new un([])}unionWith(e){let n=new mt(pt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new un(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return zs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new hT("Invalid base64 string: "+i):i}}(e);return new gt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new gt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}gt.EMPTY_BYTE_STRING=new gt("");const QD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Cr(t){if(Be(!!t),typeof t=="string"){let e=0;const n=QD.exec(t);if(Be(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ze(t.seconds),nanos:Ze(t.nanos)}}function Ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function rs(t){return typeof t=="string"?gt.fromBase64String(t):gt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function _f(t){const e=t.mapValue.fields.__previous_value__;return gf(e)?_f(e):e}function To(t){const e=Cr(t.mapValue.fields.__local_write_time__.timestampValue);return new nt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YD{constructor(e,n,r,s,i,o,l,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}class wo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new wo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof wo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ss(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?gf(t)?4:JD(t)?9007199254740991:XD(t)?10:11:he()}function Dn(t,e){if(t===e)return!0;const n=ss(t);if(n!==ss(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return To(t).isEqual(To(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Cr(s.timestampValue),l=Cr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return rs(s.bytesValue).isEqual(rs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ze(s.geoPointValue.latitude)===Ze(i.geoPointValue.latitude)&&Ze(s.geoPointValue.longitude)===Ze(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ze(s.integerValue)===Ze(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ze(s.doubleValue),l=Ze(i.doubleValue);return o===l?fl(o)===fl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return zs(t.arrayValue.values||[],e.arrayValue.values||[],Dn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Ig(o)!==Ig(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!Dn(o[c],l[c])))return!1;return!0}(t,e);default:return he()}}function Io(t,e){return(t.values||[]).find(n=>Dn(n,e))!==void 0}function Gs(t,e){if(t===e)return 0;const n=ss(t),r=ss(e);if(n!==r)return Pe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Pe(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Ze(i.integerValue||i.doubleValue),c=Ze(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return bg(t.timestampValue,e.timestampValue);case 4:return bg(To(t),To(e));case 5:return Pe(t.stringValue,e.stringValue);case 6:return function(i,o){const l=rs(i),c=rs(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const h=Pe(l[u],c[u]);if(h!==0)return h}return Pe(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Pe(Ze(i.latitude),Ze(o.latitude));return l!==0?l:Pe(Ze(i.longitude),Ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Cg(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,h;const d=i.fields||{},m=o.fields||{},g=(l=d.value)===null||l===void 0?void 0:l.arrayValue,E=(c=m.value)===null||c===void 0?void 0:c.arrayValue,S=Pe(((u=g==null?void 0:g.values)===null||u===void 0?void 0:u.length)||0,((h=E==null?void 0:E.values)===null||h===void 0?void 0:h.length)||0);return S!==0?S:Cg(g,E)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Aa.mapValue&&o===Aa.mapValue)return 0;if(i===Aa.mapValue)return 1;if(o===Aa.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let d=0;d<c.length&&d<h.length;++d){const m=Pe(c[d],h[d]);if(m!==0)return m;const g=Gs(l[c[d]],u[h[d]]);if(g!==0)return g}return Pe(c.length,h.length)}(t.mapValue,e.mapValue);default:throw he()}}function bg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Pe(t,e);const n=Cr(t),r=Cr(e),s=Pe(n.seconds,r.seconds);return s!==0?s:Pe(n.nanos,r.nanos)}function Cg(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Gs(n[s],r[s]);if(i)return i}return Pe(n.length,r.length)}function Qs(t){return Xu(t)}function Xu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Cr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return rs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ae.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Xu(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Xu(n.fields[o])}`;return s+"}"}(t.mapValue):he()}function Ju(t){return!!t&&"integerValue"in t}function yf(t){return!!t&&"arrayValue"in t}function Rg(t){return!!t&&"nullValue"in t}function Sg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function La(t){return!!t&&"mapValue"in t}function XD(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function to(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return li(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=to(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=to(t.arrayValue.values[n]);return e}return Object.assign({},t)}function JD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.value=e}static empty(){return new en({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!La(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=to(n)}setAll(e){let n=pt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=to(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());La(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];La(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){li(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new en(to(this.value))}}function fT(t){const e=[];return li(t.fields,(n,r)=>{const s=new pt([n]);if(La(r)){const i=fT(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new un(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new At(e,0,fe.min(),fe.min(),fe.min(),en.empty(),0)}static newFoundDocument(e,n,r,s){return new At(e,1,n,fe.min(),r,s,0)}static newNoDocument(e,n){return new At(e,2,n,fe.min(),fe.min(),en.empty(),0)}static newUnknownDocument(e,n){return new At(e,3,n,fe.min(),fe.min(),en.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(fe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=en.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=en.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=fe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof At&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new At(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,n){this.position=e,this.inclusive=n}}function Pg(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ae.comparator(ae.fromName(o.referenceValue),n.key):r=Gs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function kg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Dn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,n="asc"){this.field=e,this.dir=n}}function ZD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{}class tt extends dT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new tO(e,n,r):n==="array-contains"?new sO(e,r):n==="in"?new iO(e,r):n==="not-in"?new oO(e,r):n==="array-contains-any"?new aO(e,r):new tt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new nO(e,r):new rO(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Gs(n,this.value)):n!==null&&ss(this.value)===ss(n)&&this.matchesComparison(Gs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return he()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class On extends dT{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new On(e,n)}matches(e){return pT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function pT(t){return t.op==="and"}function mT(t){return eO(t)&&pT(t)}function eO(t){for(const e of t.filters)if(e instanceof On)return!1;return!0}function Zu(t){if(t instanceof tt)return t.field.canonicalString()+t.op.toString()+Qs(t.value);if(mT(t))return t.filters.map(e=>Zu(e)).join(",");{const e=t.filters.map(n=>Zu(n)).join(",");return`${t.op}(${e})`}}function gT(t,e){return t instanceof tt?function(r,s){return s instanceof tt&&r.op===s.op&&r.field.isEqual(s.field)&&Dn(r.value,s.value)}(t,e):t instanceof On?function(r,s){return s instanceof On&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&gT(o,s.filters[l]),!0):!1}(t,e):void he()}function _T(t){return t instanceof tt?function(n){return`${n.field.canonicalString()} ${n.op} ${Qs(n.value)}`}(t):t instanceof On?function(n){return n.op.toString()+" {"+n.getFilters().map(_T).join(" ,")+"}"}(t):"Filter"}class tO extends tt{constructor(e,n,r){super(e,n,r),this.key=ae.fromName(r.referenceValue)}matches(e){const n=ae.comparator(e.key,this.key);return this.matchesComparison(n)}}class nO extends tt{constructor(e,n){super(e,"in",n),this.keys=yT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class rO extends tt{constructor(e,n){super(e,"not-in",n),this.keys=yT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function yT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ae.fromName(r.referenceValue))}class sO extends tt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return yf(n)&&Io(n.arrayValue,this.value)}}class iO extends tt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Io(this.value.arrayValue,n)}}class oO extends tt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Io(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Io(this.value.arrayValue,n)}}class aO extends tt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!yf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Io(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lO{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function Ng(t,e=null,n=[],r=[],s=null,i=null,o=null){return new lO(t,e,n,r,s,i,o)}function vf(t){const e=de(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Zu(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Jl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Qs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Qs(r)).join(",")),e.ue=n}return e.ue}function Ef(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ZD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!gT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!kg(t.startAt,e.startAt)&&kg(t.endAt,e.endAt)}function eh(t){return ae.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function cO(t,e,n,r,s,i,o,l){return new Zl(t,e,n,r,s,i,o,l)}function Tf(t){return new Zl(t)}function Dg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function uO(t){return t.collectionGroup!==null}function no(t){const e=de(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new mt(pt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new pl(i,r))}),n.has(pt.keyField().canonicalString())||e.ce.push(new pl(pt.keyField(),r))}return e.ce}function Sn(t){const e=de(t);return e.le||(e.le=hO(e,no(t))),e.le}function hO(t,e){if(t.limitType==="F")return Ng(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new pl(s.field,i)});const n=t.endAt?new dl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new dl(t.startAt.position,t.startAt.inclusive):null;return Ng(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function th(t,e,n){return new Zl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ec(t,e){return Ef(Sn(t),Sn(e))&&t.limitType===e.limitType}function vT(t){return`${vf(Sn(t))}|lt:${t.limitType}`}function Ts(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>_T(s)).join(", ")}]`),Jl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Qs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Qs(s)).join(",")),`Target(${r})`}(Sn(t))}; limitType=${t.limitType})`}function tc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ae.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of no(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=Pg(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,no(r),s)||r.endAt&&!function(o,l,c){const u=Pg(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,no(r),s))}(t,e)}function fO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ET(t){return(e,n)=>{let r=!1;for(const s of no(t)){const i=dO(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function dO(t,e,n){const r=t.field.isKeyField()?ae.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?Gs(c,u):he()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return he()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){li(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return uT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pO=new Qe(ae.comparator);function Gn(){return pO}const TT=new Qe(ae.comparator);function Ui(...t){let e=TT;for(const n of t)e=e.insert(n.key,n);return e}function wT(t){let e=TT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function qr(){return ro()}function IT(){return ro()}function ro(){return new ci(t=>t.toString(),(t,e)=>t.isEqual(e))}const mO=new Qe(ae.comparator),gO=new mt(ae.comparator);function ve(...t){let e=gO;for(const n of t)e=e.add(n);return e}const _O=new mt(Pe);function yO(){return _O}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fl(e)?"-0":e}}function AT(t){return{integerValue:""+t}}function vO(t,e){return GD(e)?AT(e):wf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(){this._=void 0}}function EO(t,e,n){return t instanceof ml?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&gf(i)&&(i=_f(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Ao?CT(t,e):t instanceof bo?RT(t,e):function(s,i){const o=bT(s,i),l=Og(o)+Og(s.Pe);return Ju(o)&&Ju(s.Pe)?AT(l):wf(s.serializer,l)}(t,e)}function TO(t,e,n){return t instanceof Ao?CT(t,e):t instanceof bo?RT(t,e):n}function bT(t,e){return t instanceof gl?function(r){return Ju(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ml extends nc{}class Ao extends nc{constructor(e){super(),this.elements=e}}function CT(t,e){const n=ST(e);for(const r of t.elements)n.some(s=>Dn(s,r))||n.push(r);return{arrayValue:{values:n}}}class bo extends nc{constructor(e){super(),this.elements=e}}function RT(t,e){let n=ST(e);for(const r of t.elements)n=n.filter(s=>!Dn(s,r));return{arrayValue:{values:n}}}class gl extends nc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Og(t){return Ze(t.integerValue||t.doubleValue)}function ST(t){return yf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function wO(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ao&&s instanceof Ao||r instanceof bo&&s instanceof bo?zs(r.elements,s.elements,Dn):r instanceof gl&&s instanceof gl?Dn(r.Pe,s.Pe):r instanceof ml&&s instanceof ml}(t.transform,e.transform)}class IO{constructor(e,n){this.version=e,this.transformResults=n}}class qn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new qn}static exists(e){return new qn(void 0,e)}static updateTime(e){return new qn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Va(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class rc{}function PT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new NT(t.key,qn.none()):new Ho(t.key,t.data,qn.none());{const n=t.data,r=en.empty();let s=new mt(pt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ls(t.key,r,new un(s.toArray()),qn.none())}}function AO(t,e,n){t instanceof Ho?function(s,i,o){const l=s.value.clone(),c=xg(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof ls?function(s,i,o){if(!Va(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=xg(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(kT(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function so(t,e,n,r){return t instanceof Ho?function(i,o,l,c){if(!Va(i.precondition,o))return l;const u=i.value.clone(),h=Lg(i.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof ls?function(i,o,l,c){if(!Va(i.precondition,o))return l;const u=Lg(i.fieldTransforms,c,o),h=o.data;return h.setAll(kT(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(i,o,l){return Va(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function bO(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=bT(r.transform,s||null);i!=null&&(n===null&&(n=en.empty()),n.set(r.field,i))}return n||null}function Mg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&zs(r,s,(i,o)=>wO(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ho extends rc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ls extends rc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function kT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function xg(t,e,n){const r=new Map;Be(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,TO(o,l,n[s]))}return r}function Lg(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,EO(i,o,e))}return r}class NT extends rc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class CO extends rc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RO{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&AO(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=so(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=so(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=IT();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=PT(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(fe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ve())}isEqual(e){return this.batchId===e.batchId&&zs(this.mutations,e.mutations,(n,r)=>Mg(n,r))&&zs(this.baseMutations,e.baseMutations,(n,r)=>Mg(n,r))}}class If{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Be(e.mutations.length===r.length);let s=function(){return mO}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new If(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PO{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var et,we;function kO(t){switch(t){default:return he();case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0}}function DT(t){if(t===void 0)return zn("GRPC error has no .code"),j.UNKNOWN;switch(t){case et.OK:return j.OK;case et.CANCELLED:return j.CANCELLED;case et.UNKNOWN:return j.UNKNOWN;case et.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case et.INTERNAL:return j.INTERNAL;case et.UNAVAILABLE:return j.UNAVAILABLE;case et.UNAUTHENTICATED:return j.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case et.NOT_FOUND:return j.NOT_FOUND;case et.ALREADY_EXISTS:return j.ALREADY_EXISTS;case et.PERMISSION_DENIED:return j.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case et.ABORTED:return j.ABORTED;case et.OUT_OF_RANGE:return j.OUT_OF_RANGE;case et.UNIMPLEMENTED:return j.UNIMPLEMENTED;case et.DATA_LOSS:return j.DATA_LOSS;default:return he()}}(we=et||(et={}))[we.OK=0]="OK",we[we.CANCELLED=1]="CANCELLED",we[we.UNKNOWN=2]="UNKNOWN",we[we.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",we[we.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",we[we.NOT_FOUND=5]="NOT_FOUND",we[we.ALREADY_EXISTS=6]="ALREADY_EXISTS",we[we.PERMISSION_DENIED=7]="PERMISSION_DENIED",we[we.UNAUTHENTICATED=16]="UNAUTHENTICATED",we[we.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",we[we.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",we[we.ABORTED=10]="ABORTED",we[we.OUT_OF_RANGE=11]="OUT_OF_RANGE",we[we.UNIMPLEMENTED=12]="UNIMPLEMENTED",we[we.INTERNAL=13]="INTERNAL",we[we.UNAVAILABLE=14]="UNAVAILABLE",we[we.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NO(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DO=new Qr([4294967295,4294967295],0);function Vg(t){const e=NO().encode(t),n=new tT;return n.update(e),new Uint8Array(n.digest())}function Fg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Qr([n,r],0),new Qr([s,i],0)]}class Af{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Bi(`Invalid padding: ${n}`);if(r<0)throw new Bi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Bi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Bi(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Qr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Qr.fromNumber(r)));return s.compare(DO)===1&&(s=new Qr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Vg(e),[r,s]=Fg(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Af(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Vg(e),[r,s]=Fg(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Bi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Wo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new sc(fe.min(),s,new Qe(Pe),Gn(),ve())}}class Wo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Wo(r,n,ve(),ve(),ve())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class OT{constructor(e,n){this.targetId=e,this.me=n}}class MT{constructor(e,n,r=gt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Ug{constructor(){this.fe=0,this.ge=$g(),this.pe=gt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ve(),n=ve(),r=ve();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:he()}}),new Wo(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=$g()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Be(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class OO{constructor(e){this.Le=e,this.Be=new Map,this.ke=Gn(),this.qe=Bg(),this.Qe=new Qe(Pe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:he()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(eh(i))if(r===0){const o=new ae(i.path);this.Ue(n,o,At.newNoDocument(o,fe.min()))}else Be(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),c=l?this.Xe(l,e,o):1;if(c!==0){this.je(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=rs(r).toUint8Array()}catch(c){if(c instanceof hT)return Ks("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Af(o,s,i)}catch(c){return Ks(c instanceof Bi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&eh(l.target)){const c=new ae(l.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,At.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=ve();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.Je(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new sc(e,n,this.Qe,this.ke,r);return this.ke=Gn(),this.qe=Bg(),this.Qe=new Qe(Pe),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Ug,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new mt(Pe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||te("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Ug),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Bg(){return new Qe(ae.comparator)}function $g(){return new Qe(ae.comparator)}const MO={asc:"ASCENDING",desc:"DESCENDING"},xO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},LO={and:"AND",or:"OR"};class VO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function nh(t,e){return t.useProto3Json||Jl(e)?e:{value:e}}function _l(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function FO(t,e){return _l(t,e.toTimestamp())}function Pn(t){return Be(!!t),fe.fromTimestamp(function(n){const r=Cr(n);return new nt(r.seconds,r.nanos)}(t))}function bf(t,e){return rh(t,e).canonicalString()}function rh(t,e){const n=function(s){return new Ge(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function LT(t){const e=Ge.fromString(t);return Be($T(e)),e}function sh(t,e){return bf(t.databaseId,e.path)}function eu(t,e){const n=LT(e);if(n.get(1)!==t.databaseId.projectId)throw new oe(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new oe(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ae(FT(n))}function VT(t,e){return bf(t.databaseId,e)}function UO(t){const e=LT(t);return e.length===4?Ge.emptyPath():FT(e)}function ih(t){return new Ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function FT(t){return Be(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function jg(t,e,n){return{name:sh(t,e),fields:n.value.mapValue.fields}}function BO(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:he()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(Be(h===void 0||typeof h=="string"),gt.fromBase64String(h||"")):(Be(h===void 0||h instanceof Buffer||h instanceof Uint8Array),gt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const h=u.code===void 0?j.UNKNOWN:DT(u.code);return new oe(h,u.message||"")}(o);n=new MT(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=eu(t,r.document.name),i=Pn(r.document.updateTime),o=r.document.createTime?Pn(r.document.createTime):fe.min(),l=new en({mapValue:{fields:r.document.fields}}),c=At.newFoundDocument(s,i,o,l),u=r.targetIds||[],h=r.removedTargetIds||[];n=new Fa(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=eu(t,r.document),i=r.readTime?Pn(r.readTime):fe.min(),o=At.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Fa([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=eu(t,r.document),i=r.removedTargetIds||[];n=new Fa([],i,s,null)}else{if(!("filter"in e))return he();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new PO(s,i),l=r.targetId;n=new OT(l,o)}}return n}function $O(t,e){let n;if(e instanceof Ho)n={update:jg(t,e.key,e.value)};else if(e instanceof NT)n={delete:sh(t,e.key)};else if(e instanceof ls)n={update:jg(t,e.key,e.data),updateMask:YO(e.fieldMask)};else{if(!(e instanceof CO))return he();n={verify:sh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof ml)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ao)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof bo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof gl)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw he()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:FO(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:he()}(t,e.precondition)),n}function jO(t,e){return t&&t.length>0?(Be(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Pn(s.updateTime):Pn(i);return o.isEqual(fe.min())&&(o=Pn(i)),new IO(o,s.transformResults||[])}(n,e))):[]}function HO(t,e){return{documents:[VT(t,e.path)]}}function WO(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=VT(t,s);const i=function(u){if(u.length!==0)return BT(On.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(m){return{field:ws(m.field),direction:zO(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=nh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:s}}function qO(t){let e=UO(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Be(r===1);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(d){const m=UT(d);return m instanceof On&&mT(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(m=>function(E){return new pl(Is(E.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(d){let m;return m=typeof d=="object"?d.value:d,Jl(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(d){const m=!!d.before,g=d.values||[];return new dl(g,m)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const m=!d.before,g=d.values||[];return new dl(g,m)}(n.endAt)),cO(e,s,o,i,l,"F",c,u)}function KO(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return he()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function UT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Is(n.unaryFilter.field);return tt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Is(n.unaryFilter.field);return tt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Is(n.unaryFilter.field);return tt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Is(n.unaryFilter.field);return tt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return he()}}(t):t.fieldFilter!==void 0?function(n){return tt.create(Is(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return he()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return On.create(n.compositeFilter.filters.map(r=>UT(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return he()}}(n.compositeFilter.op))}(t):he()}function zO(t){return MO[t]}function GO(t){return xO[t]}function QO(t){return LO[t]}function ws(t){return{fieldPath:t.canonicalString()}}function Is(t){return pt.fromServerFormat(t.fieldPath)}function BT(t){return t instanceof tt?function(n){if(n.op==="=="){if(Sg(n.value))return{unaryFilter:{field:ws(n.field),op:"IS_NAN"}};if(Rg(n.value))return{unaryFilter:{field:ws(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Sg(n.value))return{unaryFilter:{field:ws(n.field),op:"IS_NOT_NAN"}};if(Rg(n.value))return{unaryFilter:{field:ws(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ws(n.field),op:GO(n.op),value:n.value}}}(t):t instanceof On?function(n){const r=n.getFilters().map(s=>BT(s));return r.length===1?r[0]:{compositeFilter:{op:QO(n.op),filters:r}}}(t):he()}function YO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function $T(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,n,r,s,i=fe.min(),o=fe.min(),l=gt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new dr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XO{constructor(e){this.ct=e}}function JO(t){const e=qO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?th(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZO{constructor(){this.un=new eM}addToCollectionParentIndex(e,n){return this.un.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(br.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(br.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class eM{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new mt(Ge.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new mt(Ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ys(0)}static kn(){return new Ys(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tM{constructor(){this.changes=new ci(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,At.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rM{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&so(r.mutation,s,un.empty(),nt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ve()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ve()){const s=qr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ui();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=qr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ve()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Gn();const o=ro(),l=function(){return ro()}();return n.forEach((c,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof ls)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),so(h.mutation,u,h.mutation.getFieldMask(),nt.now())):o.set(u.key,un.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var d;return l.set(u,new nM(h,(d=o.get(u))!==null&&d!==void 0?d:null))}),l))}recalculateAndSaveOverlays(e,n){const r=ro();let s=new Qe((o,l)=>o-l),i=ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let h=r.get(c)||un.empty();h=l.applyToLocalView(u,h),r.set(c,h);const d=(s.get(l.batchId)||ve()).add(c);s=s.insert(l.batchId,d)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,h=c.value,d=IT();h.forEach(m=>{if(!i.has(m)){const g=PT(n.get(m),r.get(m));g!==null&&d.set(m,g),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return B.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ae.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):uO(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):B.resolve(qr());let l=-1,c=i;return o.next(u=>B.forEach(u,(h,d)=>(l<d.largestBatchId&&(l=d.largestBatchId),i.get(h)?B.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{c=c.insert(h,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,ve())).next(h=>({batchId:l,changes:wT(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ae(n)).next(r=>{let s=Ui();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ui();return this.indexManager.getCollectionParents(e,i).next(l=>B.forEach(l,c=>{const u=function(d,m){return new Zl(m,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((d,m)=>{o=o.insert(d,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,At.newInvalidDocument(h)))});let l=Ui();return o.forEach((c,u)=>{const h=i.get(c);h!==void 0&&so(h.mutation,u,un.empty(),nt.now()),tc(n,u)&&(l=l.insert(c,u))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sM{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return B.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Pn(s.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:JO(s.bundledQuery),readTime:Pn(s.readTime)}}(n)),B.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(){this.overlays=new Qe(ae.comparator),this.Ir=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=qr();return B.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const s=qr(),i=n.length+1,o=new ae(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return B.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Qe((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=qr(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const l=qr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>l.set(u,h)),!(l.size()>=s)););return B.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new SO(n,r));let i=this.Ir.get(n);i===void 0&&(i=ve(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oM{constructor(){this.sessionToken=gt.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,B.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(){this.Tr=new mt(it.Er),this.dr=new mt(it.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new it(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new it(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new ae(new Ge([])),r=new it(n,e),s=new it(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new ae(new Ge([])),r=new it(n,e),s=new it(n,e+1);let i=ve();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new it(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class it{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return ae.comparator(e.key,n.key)||Pe(e.wr,n.wr)}static Ar(e,n){return Pe(e.wr,n.wr)||ae.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aM{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new mt(it.Er)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new RO(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new it(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return B.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new it(n,0),s=new it(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),B.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new mt(Pe);return n.forEach(s=>{const i=new it(s,0),o=new it(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),B.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ae.isDocumentKey(i)||(i=i.child(""));const o=new it(new ae(i),0);let l=new mt(Pe);return this.br.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.wr)),!0)},o),B.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Be(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return B.forEach(n.mutations,s=>{const i=new it(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new it(n,0),s=this.br.firstAfterOrEqual(r);return B.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lM{constructor(e){this.Mr=e,this.docs=function(){return new Qe(ae.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():At.newInvalidDocument(n))}getEntries(e,n){let r=Gn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():At.newInvalidDocument(s))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Gn();const o=n.path,l=new ae(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||WD(HD(h),r)<=0||(s.has(h.key)||tc(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return B.resolve(i)}getAllFromCollectionGroup(e,n,r,s){he()}Or(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new cM(this)}getSize(e){return B.resolve(this.size)}}class cM extends tM{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uM{constructor(e){this.persistence=e,this.Nr=new ci(n=>vf(n),Ef),this.lastRemoteSnapshotVersion=fe.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Cf,this.targetCount=0,this.kr=Ys.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),B.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Ys(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.Kn(n),B.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),B.waitFor(i).next(()=>s)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),B.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),B.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hM{constructor(e,n){this.qr={},this.overlays={},this.Qr=new mf(0),this.Kr=!1,this.Kr=!0,this.$r=new oM,this.referenceDelegate=e(this),this.Ur=new uM(this),this.indexManager=new ZO,this.remoteDocumentCache=function(s){return new lM(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new XO(n),this.Gr=new sM(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new iM,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new aM(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){te("MemoryPersistence","Starting transaction:",e);const s=new fM(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return B.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class fM extends KD{constructor(e){super(),this.currentSequenceNumber=e}}class Rf{constructor(e){this.persistence=e,this.Jr=new Cf,this.Yr=null}static Zr(e){return new Rf(e)}get Xr(){if(this.Yr)return this.Yr;throw he()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),B.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.Xr,r=>{const s=ae.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,fe.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return B.or([()=>B.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=ve(),s=ve();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Sf(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dM{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pM{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return ES()?8:zD(gn())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new dM;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Di()<=ye.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",Ts(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),B.resolve()):(Di()<=ye.DEBUG&&te("QueryEngine","Query:",Ts(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Di()<=ye.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",Ts(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Sn(n))):B.resolve())}Yi(e,n){if(Dg(n))return B.resolve(null);let r=Sn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=th(n,null,"F"),r=Sn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ve(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.ts(n,l);return this.ns(n,u,o,c.readTime)?this.Yi(e,th(n,null,"F")):this.rs(e,u,n,c)}))})))}Zi(e,n,r,s){return Dg(n)||s.isEqual(fe.min())?B.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?B.resolve(null):(Di()<=ye.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ts(n)),this.rs(e,o,n,jD(s,-1)).next(l=>l))})}ts(e,n){let r=new mt(ET(e));return n.forEach((s,i)=>{tc(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Di()<=ye.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",Ts(n)),this.Ji.getDocumentsMatchingQuery(e,n,br.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mM{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Qe(Pe),this._s=new ci(i=>vf(i),Ef),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new rM(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function gM(t,e,n,r){return new mM(t,e,n,r)}async function jT(t,e){const n=de(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=ve();for(const u of s){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){l.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(r,c).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:l}))})})}function _M(t,e){const n=de(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,h){const d=u.batch,m=d.keys();let g=B.resolve();return m.forEach(E=>{g=g.next(()=>h.getEntry(c,E)).next(S=>{const P=u.docVersions.get(E);Be(P!==null),S.version.compareTo(P)<0&&(d.applyToRemoteDocument(S,u),S.isValidDocument()&&(S.setReadTime(u.commitVersion),h.addEntry(S)))})}),g.next(()=>l.mutationQueue.removeMutationBatch(c,d))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=ve();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function HT(t){const e=de(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function yM(t,e){const n=de(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((h,d)=>{const m=s.get(d);if(!m)return;l.push(n.Ur.removeMatchingKeys(i,h.removedDocuments,d).next(()=>n.Ur.addMatchingKeys(i,h.addedDocuments,d)));let g=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?g=g.withResumeToken(gt.EMPTY_BYTE_STRING,fe.min()).withLastLimboFreeSnapshotVersion(fe.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,r)),s=s.insert(d,g),function(S,P,V){return S.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=3e8?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0}(m,g,h)&&l.push(n.Ur.updateTargetData(i,g))});let c=Gn(),u=ve();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),l.push(vM(i,o,e.documentUpdates).next(h=>{c=h.Ps,u=h.Is})),!r.isEqual(fe.min())){const h=n.Ur.getLastRemoteSnapshotVersion(i).next(d=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(h)}return B.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.os=s,i))}function vM(t,e,n){let r=ve(),s=ve();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Gn();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(fe.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):te("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Ps:o,Is:s}})}function EM(t,e){const n=de(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function TM(t,e){const n=de(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,B.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new dr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function oh(t,e,n){const r=de(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!jo(o))throw o;te("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Hg(t,e,n){const r=de(t);let s=fe.min(),i=ve();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,h){const d=de(c),m=d._s.get(h);return m!==void 0?B.resolve(d.os.get(m)):d.Ur.getTargetData(u,h)}(r,o,Sn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:fe.min(),n?i:ve())).next(l=>(wM(r,fO(e),l),{documents:l,Ts:i})))}function wM(t,e,n){let r=t.us.get(e)||fe.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class Wg{constructor(){this.activeTargetIds=yO()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class IM{constructor(){this.so=new Wg,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Wg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AM{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){te("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){te("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ba=null;function tu(){return ba===null?ba=function(){return 268435456+Math.round(2147483648*Math.random())}():ba++,"0x"+ba.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CM{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et="WebChannelConnection";class RM extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=tu(),c=this.xo(n,r.toUriEncodedString());te("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,i,o),this.No(n,c,u,s).then(h=>(te("RestConnection",`Received RPC '${n}' ${l}: `,h),h),h=>{throw Ks("RestConnection",`RPC '${n}' ${l} failed with error: `,h,"url: ",c,"request:",s),h})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ai}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=bM[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=tu();return new Promise((o,l)=>{const c=new nT;c.setWithCredentials(!0),c.listenOnce(sT.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case xa.NO_ERROR:const h=c.getResponseJson();te(Et,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),o(h);break;case xa.TIMEOUT:te(Et,`RPC '${e}' ${i} timed out`),l(new oe(j.DEADLINE_EXCEEDED,"Request time out"));break;case xa.HTTP_ERROR:const d=c.getStatus();if(te(Et,`RPC '${e}' ${i} failed with status:`,d,"response text:",c.getResponseText()),d>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const g=m==null?void 0:m.error;if(g&&g.status&&g.message){const E=function(P){const V=P.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(V)>=0?V:j.UNKNOWN}(g.status);l(new oe(E,g.message))}else l(new oe(j.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new oe(j.UNAVAILABLE,"Connection failed."));break;default:he()}}finally{te(Et,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);te(Et,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",u,r,15)})}Bo(e,n,r){const s=tu(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=aT(),l=oT(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.xmlHttpFactory=new rT({})),this.Oo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const h=i.join("");te(Et,`Creating RPC '${e}' stream ${s}: ${h}`,c);const d=o.createWebChannel(h,c);let m=!1,g=!1;const E=new CM({Io:P=>{g?te(Et,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(m||(te(Et,`Opening RPC '${e}' stream ${s} transport.`),d.open(),m=!0),te(Et,`RPC '${e}' stream ${s} sending:`,P),d.send(P))},To:()=>d.close()}),S=(P,V,M)=>{P.listen(V,F=>{try{M(F)}catch(Q){setTimeout(()=>{throw Q},0)}})};return S(d,Fi.EventType.OPEN,()=>{g||(te(Et,`RPC '${e}' stream ${s} transport opened.`),E.yo())}),S(d,Fi.EventType.CLOSE,()=>{g||(g=!0,te(Et,`RPC '${e}' stream ${s} transport closed`),E.So())}),S(d,Fi.EventType.ERROR,P=>{g||(g=!0,Ks(Et,`RPC '${e}' stream ${s} transport errored:`,P),E.So(new oe(j.UNAVAILABLE,"The operation could not be completed")))}),S(d,Fi.EventType.MESSAGE,P=>{var V;if(!g){const M=P.data[0];Be(!!M);const F=M,Q=F.error||((V=F[0])===null||V===void 0?void 0:V.error);if(Q){te(Et,`RPC '${e}' stream ${s} received error:`,Q);const W=Q.status;let O=function(v){const I=et[v];if(I!==void 0)return DT(I)}(W),A=Q.message;O===void 0&&(O=j.INTERNAL,A="Unknown error status: "+W+" with message "+Q.message),g=!0,E.So(new oe(O,A)),d.close()}else te(Et,`RPC '${e}' stream ${s} received:`,M),E.bo(M)}}),S(l,iT.STAT_EVENT,P=>{P.stat===Yu.PROXY?te(Et,`RPC '${e}' stream ${s} detected buffering proxy`):P.stat===Yu.NOPROXY&&te(Et,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{E.wo()},0),E}}function nu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(t){return new VO(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&te("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(e,n,r,s,i,o,l,c){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new WT(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(zn(n.toString()),zn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new oe(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return te("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(te("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class SM extends qT{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=BO(this.serializer,e),r=function(i){if(!("targetChange"in i))return fe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?fe.min():o.readTime?Pn(o.readTime):fe.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=ih(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=eh(c)?{documents:HO(i,c)}:{query:WO(i,c)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=xT(i,o.resumeToken);const u=nh(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(fe.min())>0){l.readTime=_l(i,o.snapshotVersion.toTimestamp());const u=nh(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=KO(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=ih(this.serializer),n.removeTarget=e,this.a_(n)}}class PM extends qT{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Be(!!e.streamToken),this.lastStreamToken=e.streamToken,Be(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=jO(e.writeResults,e.commitTime),r=Pn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=ih(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>$O(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kM extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new oe(j.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,rh(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new oe(j.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,rh(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new oe(j.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class NM{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(zn(n),this.D_=!1):te("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DM{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{cs(this)&&(te("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=de(c);u.L_.add(4),await qo(u),u.q_.set("Unknown"),u.L_.delete(4),await oc(u)}(this))})}),this.q_=new NM(r,s)}}async function oc(t){if(cs(t))for(const e of t.B_)await e(!0)}async function qo(t){for(const e of t.B_)await e(!1)}function KT(t,e){const n=de(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Df(n)?Nf(n):ui(n).r_()&&kf(n,e))}function Pf(t,e){const n=de(t),r=ui(n);n.N_.delete(e),r.r_()&&zT(n,e),n.N_.size===0&&(r.r_()?r.o_():cs(n)&&n.q_.set("Unknown"))}function kf(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(fe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ui(t).A_(e)}function zT(t,e){t.Q_.xe(e),ui(t).R_(e)}function Nf(t){t.Q_=new OO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ui(t).start(),t.q_.v_()}function Df(t){return cs(t)&&!ui(t).n_()&&t.N_.size>0}function cs(t){return de(t).L_.size===0}function GT(t){t.Q_=void 0}async function OM(t){t.q_.set("Online")}async function MM(t){t.N_.forEach((e,n)=>{kf(t,e)})}async function xM(t,e){GT(t),Df(t)?(t.q_.M_(e),Nf(t)):t.q_.set("Unknown")}async function LM(t,e,n){if(t.q_.set("Online"),e instanceof MT&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){te("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await yl(t,r)}else if(e instanceof Fa?t.Q_.Ke(e):e instanceof OT?t.Q_.He(e):t.Q_.We(e),!n.isEqual(fe.min()))try{const r=await HT(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=i.N_.get(u);h&&i.N_.set(u,h.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const h=i.N_.get(c);if(!h)return;i.N_.set(c,h.withResumeToken(gt.EMPTY_BYTE_STRING,h.snapshotVersion)),zT(i,c);const d=new dr(h.target,c,u,h.sequenceNumber);kf(i,d)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){te("RemoteStore","Failed to raise snapshot:",r),await yl(t,r)}}async function yl(t,e,n){if(!jo(e))throw e;t.L_.add(1),await qo(t),t.q_.set("Offline"),n||(n=()=>HT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{te("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await oc(t)})}function QT(t,e){return e().catch(n=>yl(t,n,e))}async function ac(t){const e=de(t),n=Rr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;VM(e);)try{const s=await EM(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,FM(e,s)}catch(s){await yl(e,s)}YT(e)&&XT(e)}function VM(t){return cs(t)&&t.O_.length<10}function FM(t,e){t.O_.push(e);const n=Rr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function YT(t){return cs(t)&&!Rr(t).n_()&&t.O_.length>0}function XT(t){Rr(t).start()}async function UM(t){Rr(t).p_()}async function BM(t){const e=Rr(t);for(const n of t.O_)e.m_(n.mutations)}async function $M(t,e,n){const r=t.O_.shift(),s=If.from(r,e,n);await QT(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ac(t)}async function jM(t,e){e&&Rr(t).V_&&await async function(r,s){if(function(o){return kO(o)&&o!==j.ABORTED}(s.code)){const i=r.O_.shift();Rr(r).s_(),await QT(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ac(r)}}(t,e),YT(t)&&XT(t)}async function Kg(t,e){const n=de(t);n.asyncQueue.verifyOperationInProgress(),te("RemoteStore","RemoteStore received new credentials");const r=cs(n);n.L_.add(3),await qo(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await oc(n)}async function HM(t,e){const n=de(t);e?(n.L_.delete(2),await oc(n)):e||(n.L_.add(2),await qo(n),n.q_.set("Unknown"))}function ui(t){return t.K_||(t.K_=function(n,r,s){const i=de(n);return i.w_(),new SM(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:OM.bind(null,t),Ro:MM.bind(null,t),mo:xM.bind(null,t),d_:LM.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Df(t)?Nf(t):t.q_.set("Unknown")):(await t.K_.stop(),GT(t))})),t.K_}function Rr(t){return t.U_||(t.U_=function(n,r,s){const i=de(n);return i.w_(),new PM(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:UM.bind(null,t),mo:jM.bind(null,t),f_:BM.bind(null,t),g_:$M.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await ac(t)):(await t.U_.stop(),t.O_.length>0&&(te("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Er,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Of(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new oe(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Mf(t,e){if(zn("AsyncQueue",`${e}: ${t}`),jo(t))return new oe(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ae.comparator(n.key,r.key):(n,r)=>ae.comparator(n.key,r.key),this.keyedMap=Ui(),this.sortedSet=new Qe(this.comparator)}static emptySet(e){return new xs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof xs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new xs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(){this.W_=new Qe(ae.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):he():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Xs{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Xs(e,n,xs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ec(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WM{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class qM{constructor(){this.queries=Gg(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=de(n),i=s.queries;s.queries=Gg(),i.forEach((o,l)=>{for(const c of l.j_)c.onError(r)})})(this,new oe(j.ABORTED,"Firestore shutting down"))}}function Gg(){return new ci(t=>vT(t),ec)}async function KM(t,e){const n=de(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new WM,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Mf(o,`Initialization of query '${Ts(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&xf(n)}async function zM(t,e){const n=de(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function GM(t,e){const n=de(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&xf(n)}function QM(t,e,n){const r=de(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function xf(t){t.Y_.forEach(e=>{e.next()})}var ah,Qg;(Qg=ah||(ah={})).ea="default",Qg.Cache="cache";class YM{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Xs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Xs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==ah.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(e){this.key=e}}class ZT{constructor(e){this.key=e}}class XM{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ve(),this.mutatedKeys=ve(),this.Aa=ET(e),this.Ra=new xs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new zg,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,d)=>{const m=s.get(h),g=tc(this.query,d)?d:null,E=!!m&&this.mutatedKeys.has(m.key),S=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let P=!1;m&&g?m.data.isEqual(g.data)?E!==S&&(r.track({type:3,doc:g}),P=!0):this.ga(m,g)||(r.track({type:2,doc:g}),P=!0,(c&&this.Aa(g,c)>0||u&&this.Aa(g,u)<0)&&(l=!0)):!m&&g?(r.track({type:0,doc:g}),P=!0):m&&!g&&(r.track({type:1,doc:m}),P=!0,(c||u)&&(l=!0)),P&&(g?(o=o.add(g),i=S?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,d)=>function(g,E){const S=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return he()}};return S(g)-S(E)}(h.type,d.type)||this.Aa(h.doc,d.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,u=c!==this.Ea;return this.Ea=c,o.length!==0||u?{snapshot:new Xs(this.query,e.Ra,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new zg,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ve(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new ZT(r))}),this.da.forEach(r=>{e.has(r)||n.push(new JT(r))}),n}ba(e){this.Ta=e.Ts,this.da=ve();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Xs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class JM{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class ZM{constructor(e){this.key=e,this.va=!1}}class ex{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ci(l=>vT(l),ec),this.Ma=new Map,this.xa=new Set,this.Oa=new Qe(ae.comparator),this.Na=new Map,this.La=new Cf,this.Ba={},this.ka=new Map,this.qa=Ys.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function tx(t,e,n=!0){const r=iw(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await ew(r,e,n,!0),s}async function nx(t,e){const n=iw(t);await ew(n,e,!0,!1)}async function ew(t,e,n,r){const s=await TM(t.localStore,Sn(e)),i=s.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let l;return r&&(l=await rx(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&KT(t.remoteStore,s),l}async function rx(t,e,n,r,s){t.Ka=(d,m,g)=>async function(S,P,V,M){let F=P.view.ma(V);F.ns&&(F=await Hg(S.localStore,P.query,!1).then(({documents:A})=>P.view.ma(A,F)));const Q=M&&M.targetChanges.get(P.targetId),W=M&&M.targetMismatches.get(P.targetId)!=null,O=P.view.applyChanges(F,S.isPrimaryClient,Q,W);return Xg(S,P.targetId,O.wa),O.snapshot}(t,d,m,g);const i=await Hg(t.localStore,e,!0),o=new XM(e,i.Ts),l=o.ma(i.documents),c=Wo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);Xg(t,n,u.wa);const h=new JM(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),u.snapshot}async function sx(t,e,n){const r=de(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!ec(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await oh(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Pf(r.remoteStore,s.targetId),lh(r,s.targetId)}).catch($o)):(lh(r,s.targetId),await oh(r.localStore,s.targetId,!0))}async function ix(t,e){const n=de(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Pf(n.remoteStore,r.targetId))}async function ox(t,e,n){const r=dx(t);try{const s=await function(o,l){const c=de(o),u=nt.now(),h=l.reduce((g,E)=>g.add(E.key),ve());let d,m;return c.persistence.runTransaction("Locally write mutations","readwrite",g=>{let E=Gn(),S=ve();return c.cs.getEntries(g,h).next(P=>{E=P,E.forEach((V,M)=>{M.isValidDocument()||(S=S.add(V))})}).next(()=>c.localDocuments.getOverlayedDocuments(g,E)).next(P=>{d=P;const V=[];for(const M of l){const F=bO(M,d.get(M.key).overlayedDocument);F!=null&&V.push(new ls(M.key,F,fT(F.value.mapValue),qn.exists(!0)))}return c.mutationQueue.addMutationBatch(g,u,V,l)}).next(P=>{m=P;const V=P.applyToLocalDocumentSet(d,S);return c.documentOverlayCache.saveOverlays(g,P.batchId,V)})}).then(()=>({batchId:m.batchId,changes:wT(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.Ba[o.currentUser.toKey()];u||(u=new Qe(Pe)),u=u.insert(l,c),o.Ba[o.currentUser.toKey()]=u}(r,s.batchId,n),await Ko(r,s.changes),await ac(r.remoteStore)}catch(s){const i=Mf(s,"Failed to persist write");n.reject(i)}}async function tw(t,e){const n=de(t);try{const r=await yM(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(Be(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?Be(o.va):s.removedDocuments.size>0&&(Be(o.va),o.va=!1))}),await Ko(n,r,e)}catch(r){await $o(r)}}function Yg(t,e,n){const r=de(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=de(o);c.onlineState=l;let u=!1;c.queries.forEach((h,d)=>{for(const m of d.j_)m.Z_(l)&&(u=!0)}),u&&xf(c)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ax(t,e,n){const r=de(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Qe(ae.comparator);o=o.insert(i,At.newNoDocument(i,fe.min()));const l=ve().add(i),c=new sc(fe.min(),new Map,new Qe(Pe),o,l);await tw(r,c),r.Oa=r.Oa.remove(i),r.Na.delete(e),Lf(r)}else await oh(r.localStore,e,!1).then(()=>lh(r,e,n)).catch($o)}async function lx(t,e){const n=de(t),r=e.batch.batchId;try{const s=await _M(n.localStore,e);rw(n,r,null),nw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ko(n,s)}catch(s){await $o(s)}}async function cx(t,e,n){const r=de(t);try{const s=await function(o,l){const c=de(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,l).next(d=>(Be(d!==null),h=d.keys(),c.mutationQueue.removeMutationBatch(u,d))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(r.localStore,e);rw(r,e,n),nw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ko(r,s)}catch(s){await $o(s)}}function nw(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function rw(t,e,n){const r=de(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function lh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||sw(t,r)})}function sw(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Pf(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Lf(t))}function Xg(t,e,n){for(const r of n)r instanceof JT?(t.La.addReference(r.key,e),ux(t,r)):r instanceof ZT?(te("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||sw(t,r.key)):he()}function ux(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(te("SyncEngine","New document in limbo: "+n),t.xa.add(r),Lf(t))}function Lf(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new ae(Ge.fromString(e)),r=t.qa.next();t.Na.set(r,new ZM(n)),t.Oa=t.Oa.insert(n,r),KT(t.remoteStore,new dr(Sn(Tf(n.path)),r,"TargetPurposeLimboResolution",mf.oe))}}async function Ko(t,e,n){const r=de(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,c)=>{o.push(r.Ka(c,e,n).then(u=>{var h;if((u||n)&&r.isPrimaryClient){const d=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(c.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(c.targetId,d?"current":"not-current")}if(u){s.push(u);const d=Sf.Wi(c.targetId,u);i.push(d)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(c,u){const h=de(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>B.forEach(u,m=>B.forEach(m.$i,g=>h.persistence.referenceDelegate.addReference(d,m.targetId,g)).next(()=>B.forEach(m.Ui,g=>h.persistence.referenceDelegate.removeReference(d,m.targetId,g)))))}catch(d){if(!jo(d))throw d;te("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const m=d.targetId;if(!d.fromCache){const g=h.os.get(m),E=g.snapshotVersion,S=g.withLastLimboFreeSnapshotVersion(E);h.os=h.os.insert(m,S)}}}(r.localStore,i))}async function hx(t,e){const n=de(t);if(!n.currentUser.isEqual(e)){te("SyncEngine","User change. New user:",e.toKey());const r=await jT(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(c=>{c.reject(new oe(j.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ko(n,r.hs)}}function fx(t,e){const n=de(t),r=n.Na.get(e);if(r&&r.va)return ve().add(r.key);{let s=ve();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function iw(t){const e=de(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=tw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=fx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ax.bind(null,e),e.Ca.d_=GM.bind(null,e.eventManager),e.Ca.$a=QM.bind(null,e.eventManager),e}function dx(t){const e=de(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=lx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=cx.bind(null,e),e}class Jg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ic(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return gM(this.persistence,new pM,e.initialUser,this.serializer)}createPersistence(e){return new hM(Rf.Zr,this.serializer)}createSharedClientState(e){return new IM}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class px{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Yg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=hx.bind(null,this.syncEngine),await HM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new qM}()}createDatastore(e){const n=ic(e.databaseInfo.databaseId),r=function(i){return new RM(i)}(e.databaseInfo);return function(i,o,l,c){return new kM(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new DM(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Yg(this.syncEngine,n,0),function(){return qg.D()?new qg:new AM}())}createSyncEngine(e,n){return function(s,i,o,l,c,u,h){const d=new ex(s,i,o,l,c,u);return h&&(d.Qa=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=de(s);te("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await qo(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mx{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ga(this.observer.next,e)}error(e){this.observer.error?this.Ga(this.observer.error,e):zn("Uncaught Error in snapshot listener:",e.toString())}za(){this.muted=!0}Ga(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gx{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Tt.UNAUTHENTICATED,this.clientId=cT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{te("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(te("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new oe(j.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Er;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Mf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ru(t,e){t.asyncQueue.verifyOperationInProgress(),te("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await jT(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Zg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await yx(t);te("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Kg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Kg(e.remoteStore,s)),t._onlineComponents=e}function _x(t){return t.name==="FirebaseError"?t.code===j.FAILED_PRECONDITION||t.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function yx(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){te("FirestoreClient","Using user provided OfflineComponentProvider");try{await ru(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!_x(n))throw n;Ks("Error using user provided cache. Falling back to memory cache: "+n),await ru(t,new Jg)}}else te("FirestoreClient","Using default OfflineComponentProvider"),await ru(t,new Jg);return t._offlineComponents}async function ow(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(te("FirestoreClient","Using user provided OnlineComponentProvider"),await Zg(t,t._uninitializedComponentsProvider._online)):(te("FirestoreClient","Using default OnlineComponentProvider"),await Zg(t,new px))),t._onlineComponents}function vx(t){return ow(t).then(e=>e.syncEngine)}async function Ex(t){const e=await ow(t),n=e.eventManager;return n.onListen=tx.bind(null,e.syncEngine),n.onUnlisten=sx.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=nx.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=ix.bind(null,e.syncEngine),n}function Tx(t,e,n={}){const r=new Er;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const h=new mx({next:m=>{o.enqueueAndForget(()=>zM(i,d));const g=m.docs.has(l);!g&&m.fromCache?u.reject(new oe(j.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&m.fromCache&&c&&c.source==="server"?u.reject(new oe(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),d=new YM(Tf(l.path),h,{includeMetadataChanges:!0,_a:!0});return KM(i,d)}(await Ex(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lw(t,e,n){if(!n)throw new oe(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function wx(t,e,n,r){if(e===!0&&r===!0)throw new oe(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function t_(t){if(!ae.isDocumentKey(t))throw new oe(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function n_(t){if(ae.isDocumentKey(t))throw new oe(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Vf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":he()}function Co(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new oe(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Vf(t);throw new oe(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new oe(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new oe(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}wx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=aw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new oe(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new oe(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new oe(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class lc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new r_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new oe(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new oe(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new r_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new OD;switch(r.type){case"firstParty":return new VD(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new oe(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=e_.get(n);r&&(te("ComponentProvider","Removing Datastore"),e_.delete(n),r.terminate())}(this),Promise.resolve()}}function Ix(t,e,n,r={}){var s;const i=(t=Co(t,lc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Ks("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=Tt.MOCK_USER;else{l=_S(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new oe(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Tt(u)}t._authCredentials=new MD(new lT(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ff(this.firestore,e,this._query)}}class Yt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Tr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Yt(this.firestore,e,this._key)}}class Tr extends Ff{constructor(e,n,r){super(e,n,Tf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Yt(this.firestore,null,new ae(e))}withConverter(e){return new Tr(this.firestore,e,this._path)}}function cV(t,e,...n){if(t=kn(t),lw("collection","path",e),t instanceof lc){const r=Ge.fromString(e,...n);return n_(r),new Tr(t,null,r)}{if(!(t instanceof Yt||t instanceof Tr))throw new oe(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ge.fromString(e,...n));return n_(r),new Tr(t.firestore,null,r)}}function uV(t,e,...n){if(t=kn(t),arguments.length===1&&(e=cT.newId()),lw("doc","path",e),t instanceof lc){const r=Ge.fromString(e,...n);return t_(r),new Yt(t,null,new ae(r))}{if(!(t instanceof Yt||t instanceof Tr))throw new oe(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ge.fromString(e,...n));return t_(r),new Yt(t.firestore,t instanceof Tr?t.converter:null,new ae(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ax{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new WT(this,"async_queue_retry"),this.Eu=()=>{const n=nu();n&&te("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()};const e=nu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const n=nu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const n=new Er;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!jo(e))throw e;te("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const n=this.au.then(()=>(this.Pu=!0,e().catch(r=>{this.hu=r,this.Pu=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw zn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Pu=!1,r))));return this.au=n,n}enqueueAfterDelay(e,n,r){this.du(),this.Tu.indexOf(e)>-1&&(n=0);const s=Of.createAndSchedule(this,e,n,r,i=>this.Vu(i));return this.lu.push(s),s}du(){this.hu&&he()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const n of this.lu)if(n.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.lu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const n=this.lu.indexOf(e);this.lu.splice(n,1)}}class Uf extends lc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new Ax}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||uw(this),this._firestoreClient.terminate()}}function Bf(t,e){const n=typeof t=="object"?t:Av(),r=typeof t=="string"?t:"(default)",s=SP(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=mS("firestore");i&&Ix(s,...i)}return s}function cw(t){return t._firestoreClient||uw(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function uw(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,u,h){return new YD(l,c,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,aw(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new gx(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Js(gt.fromBase64String(e))}catch(n){throw new oe(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Js(gt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new oe(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new oe(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new oe(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bx=/^__.*__$/;class Cx{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ls(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ho(e,this.data,n,this.fieldTransforms)}}function fw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw he()}}class Wf{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.yu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(e){return new Wf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Su({path:r,Du:!1});return s.vu(e),s}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Su({path:r,Du:!1});return s.yu(),s}Fu(e){return this.Su({path:void 0,Du:!0})}Mu(e){return vl(e,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}yu(){if(this.path)for(let e=0;e<this.path.length;e++)this.vu(this.path.get(e))}vu(e){if(e.length===0)throw this.Mu("Document fields must not be empty");if(fw(this.wu)&&bx.test(e))throw this.Mu('Document fields cannot begin and end with "__"')}}class Rx{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ic(e)}Nu(e,n,r,s=!1){return new Wf({wu:e,methodName:n,Ou:r,path:pt.emptyPath(),Du:!1,xu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Sx(t){const e=t._freezeSettings(),n=ic(t._databaseId);return new Rx(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Px(t,e,n,r,s,i={}){const o=t.Nu(i.merge||i.mergeFields?2:0,e,n,s);gw("Data must be an object, but it was:",o,r);const l=pw(r,o);let c,u;if(i.merge)c=new un(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const d of i.mergeFields){const m=kx(e,d,n);if(!o.contains(m))throw new oe(j.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Dx(h,m)||h.push(m)}c=new un(h),u=o.fieldTransforms.filter(d=>c.covers(d.field))}else c=null,u=o.fieldTransforms;return new Cx(new en(l),c,u)}function dw(t,e){if(mw(t=kn(t)))return gw("Unsupported field value:",e,t),pw(t,e);if(t instanceof hw)return function(r,s){if(!fw(s.wu))throw s.Mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Mu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Du&&e.wu!==4)throw e.Mu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=dw(l,s.Fu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=kn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return vO(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=nt.fromDate(r);return{timestampValue:_l(s.serializer,i)}}if(r instanceof nt){const i=new nt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:_l(s.serializer,i)}}if(r instanceof jf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Js)return{bytesValue:xT(s.serializer,r._byteString)};if(r instanceof Yt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:bf(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Hf)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Mu("VectorValues must only contain numeric values.");return wf(l.serializer,c)})}}}}}}(r,s);throw s.Mu(`Unsupported field value: ${Vf(r)}`)}(t,e)}function pw(t,e){const n={};return uT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):li(t,(r,s)=>{const i=dw(s,e.bu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function mw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof nt||t instanceof jf||t instanceof Js||t instanceof Yt||t instanceof hw||t instanceof Hf)}function gw(t,e,n){if(!mw(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Vf(n);throw r==="an object"?e.Mu(t+" a custom object"):e.Mu(t+" "+r)}}function kx(t,e,n){if((e=kn(e))instanceof $f)return e._internalPath;if(typeof e=="string")return _w(t,e);throw vl("Field path arguments must be of type string or ",t,!1,void 0,n)}const Nx=new RegExp("[~\\*/\\[\\]]");function _w(t,e,n){if(e.search(Nx)>=0)throw vl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new $f(...e.split("."))._internalPath}catch{throw vl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function vl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new oe(j.INVALID_ARGUMENT,l+t+c)}function Dx(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ox(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(vw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Ox extends yw{data(){return super.data()}}function vw(t,e){return typeof e=="string"?_w(t,e):e instanceof $f?e._internalPath:e._delegate._internalPath}class Mx{convertValue(e,n="none"){switch(ss(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(rs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw he()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return li(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Ze(o.doubleValue));return new Hf(i)}convertGeoPoint(e){return new jf(Ze(e.latitude),Ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=_f(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(To(e));default:return null}}convertTimestamp(e){const n=Cr(e);return new nt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ge.fromString(e);Be($T(r));const s=new wo(r.get(1),r.get(3)),i=new ae(r.popFirst(5));return s.isEqual(n)||zn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xx(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ew extends yw{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Vx(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(vw("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Vx extends Ew{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hV(t){t=Co(t,Yt);const e=Co(t.firestore,Uf);return Tx(cw(e),t._key).then(n=>Bx(e,t,n))}class Fx extends Mx{constructor(e){super(),this.firestore=e}convertBytes(e){return new Js(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Yt(this.firestore,null,n)}}function fV(t,e,n){t=Co(t,Yt);const r=Co(t.firestore,Uf),s=xx(t.converter,e);return Ux(r,[Px(Sx(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,qn.none())])}function Ux(t,e){return function(r,s){const i=new Er;return r.asyncQueue.enqueueAndForget(async()=>ox(await vx(r),s,i)),i.promise}(cw(t),e)}function Bx(t,e,n){const r=n.docs.get(e._key),s=new Fx(t);return new Ew(t,s,e._key,r,new Lx(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){ai=s})(ri),Nn(new _n("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Uf(new xD(r.getProvider("auth-internal")),new UD(r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new oe(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wo(u.options.projectId,h)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Gt(wg,"4.7.0",e),Gt(wg,"4.7.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw="firebasestorage.googleapis.com",$x="storageBucket",jx=2*60*1e3,Hx=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends Yn{constructor(e,n,r=0){super(su(e),`Firebase Storage: ${n} (${su(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,xn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return su(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Mn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Mn||(Mn={}));function su(t){return"storage/"+t}function Wx(){const t="An unknown error occurred, please check the error payload for server response.";return new xn(Mn.UNKNOWN,t)}function qx(){return new xn(Mn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Kx(){return new xn(Mn.CANCELED,"User canceled the upload/download.")}function zx(t){return new xn(Mn.INVALID_URL,"Invalid URL '"+t+"'.")}function Gx(t){return new xn(Mn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function s_(t){return new xn(Mn.INVALID_ARGUMENT,t)}function ww(){return new xn(Mn.APP_DELETED,"The Firebase app was deleted.")}function Qx(t){return new xn(Mn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=hn.makeFromUrl(e,n)}catch{return new hn(e,"")}if(r.path==="")return r;throw Gx(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(Q){Q.path.charAt(Q.path.length-1)==="/"&&(Q.path_=Q.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(Q){Q.path_=decodeURIComponent(Q.path)}const h="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",g=new RegExp(`^https?://${d}/${h}/b/${s}/o${m}`,"i"),E={bucket:1,path:3},S=n===Tw?"(?:storage.googleapis.com|storage.cloud.google.com)":n,P="([^?#]*)",V=new RegExp(`^https?://${S}/${s}/${P}`,"i"),F=[{regex:l,indices:c,postModify:i},{regex:g,indices:E,postModify:u},{regex:V,indices:{bucket:1,path:2},postModify:u}];for(let Q=0;Q<F.length;Q++){const W=F[Q],O=W.regex.exec(e);if(O){const A=O[W.indices.bucket];let y=O[W.indices.path];y||(y=""),r=new hn(A,y),W.postModify(r);break}}if(r==null)throw zx(e);return r}}class Yx{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xx(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function c(){return l===2}let u=!1;function h(...P){u||(u=!0,e.apply(null,P))}function d(P){s=setTimeout(()=>{s=null,t(g,c())},P)}function m(){i&&clearTimeout(i)}function g(P,...V){if(u){m();return}if(P){m(),h.call(null,P,...V);return}if(c()||o){m(),h.call(null,P,...V);return}r<64&&(r*=2);let F;l===1?(l=2,F=0):F=(r+Math.random())*1e3,d(F)}let E=!1;function S(P){E||(E=!0,m(),!u&&(s!==null?(P||(l=2),clearTimeout(s),d(0)):P||(l=1)))}return d(0),i=setTimeout(()=>{o=!0,S(!0)},n),S}function Jx(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zx(t){return t!==void 0}function i_(t,e,n,r){if(r<e)throw s_(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw s_(`Invalid value for '${t}'. Expected ${n} or less.`)}function eL(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var El;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(El||(El={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tL(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nL{constructor(e,n,r,s,i,o,l,c,u,h,d,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=d,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,E)=>{this.resolve_=g,this.reject_=E,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Ca(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===El.NO_ERROR,c=i.getStatus();if(!l||tL(c,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===El.ABORT;r(!1,new Ca(!1,null,h));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new Ca(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());Zx(c)?i(c):i()}catch(c){o(c)}else if(l!==null){const c=Wx();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(s.canceled){const c=this.appDelete_?ww():Kx();o(c)}else{const c=qx();o(c)}};this.canceled_?n(!1,new Ca(!1,null,!0)):this.backoffId_=Xx(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Jx(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ca{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function rL(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function sL(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function iL(t,e){e&&(t["X-Firebase-GMPID"]=e)}function oL(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function aL(t,e,n,r,s,i,o=!0){const l=eL(t.urlParams),c=t.url+l,u=Object.assign({},t.headers);return iL(u,e),rL(u,n),sL(u,i),oL(u,r),new nL(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lL(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function cL(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,n){this._service=e,n instanceof hn?this._location=n:this._location=hn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Tl(e,n)}get root(){const e=new hn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return cL(this._location.path)}get storage(){return this._service}get parent(){const e=lL(this._location.path);if(e===null)return null;const n=new hn(this._location.bucket,e);return new Tl(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Qx(e)}}function o_(t,e){const n=e==null?void 0:e[$x];return n==null?null:hn.makeFromBucketSpec(n,t)}class uL{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Tw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=jx,this._maxUploadRetryTime=Hx,this._requests=new Set,s!=null?this._bucket=hn.makeFromBucketSpec(s,this._host):this._bucket=o_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=hn.makeFromBucketSpec(this._url,e):this._bucket=o_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){i_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){i_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Tl(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new Yx(ww());{const o=aL(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const a_="@firebase/storage",l_="0.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hL="storage";function fL(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new uL(n,r,s,e,ri)}function dL(){Nn(new _n(hL,fL,"PUBLIC").setMultipleInstances(!0)),Gt(a_,l_,""),Gt(a_,l_,"esm2017")}dL();function dV(t){return Bf(z1(t))}function pL(t,{firebaseApp:e,modules:n=[]}){t.provide(Hv,e);for(const r of n)r(e,t)}const mL={apiKey:"AIzaSyBK11imJiLbzuPxEhZJNNI9_u6j8ZnjbYk",authDomain:"whynot-campout.firebaseapp.com",projectId:"whynot-campout",storageBucket:"whynot-campout.appspot.com",messagingSenderId:"357119600262",appId:"1:357119600262:web:05e14d9ade682a65925307",measurementId:"G-J06NPQNEC7"},Iw=Iv(mL);Bf(Iw);function gL(t){t.use(OC).use($h).use(VC).use(pL,{firestore:Bf(Iw)})}const _L=vn({...Fl(),...RC({fullHeight:!0}),...TC()},"VApp"),yL=Oo()({name:"VApp",props:_L(),setup(t,e){let{slots:n}=e;const r=AC(t),{layoutClasses:s,getLayoutItem:i,items:o,layoutRef:l}=kC(t),{rtlClasses:c}=Wy();return Ul(()=>{var u;return pe("div",{ref:l,class:["v-application",r.themeClasses.value,s.value,c.value,t.class],style:[t.style]},[pe("div",{class:"v-application__wrap"},[(u=n.default)==null?void 0:u.call(n)])])}),{getLayoutItem:i,items:o,theme:r}}});function vL(){const t=Rn(!1);return Nl(()=>{window.requestAnimationFrame(()=>{t.value=!0})}),{ssrBootStyles:ue(()=>t.value?void 0:{transition:"none !important"}),isBooted:Cl(t)}}const EL=vn({scrollable:Boolean,...Fl(),...Uh(),...cv({tag:"main"})},"VMain"),TL=Oo()({name:"VMain",props:EL(),setup(t,e){let{slots:n}=e;const{dimensionStyles:r}=Bh(t),{mainStyles:s}=SC(),{ssrBootStyles:i}=vL();return Ul(()=>pe(t.tag,{class:["v-main",{"v-main--scrollable":t.scrollable},t.class],style:[s.value,i.value,r.value,t.style]},{default:()=>{var o,l;return[t.scrollable?pe("div",{class:"v-main__scroller"},[(o=n.default)==null?void 0:o.call(n)]):(l=n.default)==null?void 0:l.call(n)]}})),{}}}),wL={__name:"App",setup(t){return(e,n)=>{const r=Z0("router-view");return ei(),Po(yL,null,{default:Xr(()=>[pe(TL,null,{default:Xr(()=>[pe(r)]),_:1})]),_:1})}}},Aw=PA(wL);gL(Aw);Aw.mount("#app");export{HL as $,qt as A,Ih as B,Cl as C,Dl as D,ct as E,xl as F,Rn as G,WL as H,rb as I,ZL as J,$n as K,hb as L,fb as M,wn as N,yC as O,TC as P,AC as Q,sV as R,AL as S,Ul as T,jA as U,yL as V,Ml as W,tV as X,ML as Y,Ay as Z,Ty as _,pe as a,YR as a$,_b as a0,zL as a1,M_ as a2,By as a3,Nr as a4,K0 as a5,DA as a6,BL as a7,Uh as a8,Bh as a9,OL as aA,jL as aB,XL as aC,FA as aD,E_ as aE,JL as aF,HA as aG,rV as aH,be as aI,kL as aJ,YL as aK,Oy as aL,Iu as aM,SC as aN,LA as aO,VA as aP,Ir as aQ,QL as aR,xL as aS,dV as aT,fV as aU,uV as aV,cV as aW,DL as aX,LL as aY,NL as aZ,SL as a_,Wy as aa,GR as ab,Oh as ac,Ey as ad,i0 as ae,PL as af,ph as ag,Lt as ah,eV as ai,Y_ as aj,xA as ak,Mi as al,U_ as am,VL as an,bC as ao,BA as ap,Ft as aq,CL as ar,GL as as,l0 as at,FL as au,UL as av,bL as aw,JR as ax,ZR as ay,RL as az,TL as b,hV as b0,F0 as b1,U0 as b2,Po as c,$L as d,KL as e,Ro as f,Oo as g,pn as h,qL as i,Vl as j,nV as k,cv as l,Fl as m,ue as n,ei as o,vn as p,Nl as q,Z0 as r,gr as s,IL as t,Kt as u,St as v,Xr as w,fn as x,bh as y,Dt as z};
