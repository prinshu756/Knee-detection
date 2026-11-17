(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var Gg={exports:{}},sc={},Wg={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ja=Symbol.for("react.element"),By=Symbol.for("react.portal"),Vy=Symbol.for("react.fragment"),Hy=Symbol.for("react.strict_mode"),Gy=Symbol.for("react.profiler"),Wy=Symbol.for("react.provider"),Xy=Symbol.for("react.context"),jy=Symbol.for("react.forward_ref"),Yy=Symbol.for("react.suspense"),$y=Symbol.for("react.memo"),qy=Symbol.for("react.lazy"),_m=Symbol.iterator;function Ky(n){return n===null||typeof n!="object"?null:(n=_m&&n[_m]||n["@@iterator"],typeof n=="function"?n:null)}var Xg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jg=Object.assign,Yg={};function Bo(n,e,t){this.props=n,this.context=e,this.refs=Yg,this.updater=t||Xg}Bo.prototype.isReactComponent={};Bo.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Bo.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function $g(){}$g.prototype=Bo.prototype;function Bh(n,e,t){this.props=n,this.context=e,this.refs=Yg,this.updater=t||Xg}var Vh=Bh.prototype=new $g;Vh.constructor=Bh;jg(Vh,Bo.prototype);Vh.isPureReactComponent=!0;var gm=Array.isArray,qg=Object.prototype.hasOwnProperty,Hh={current:null},Kg={key:!0,ref:!0,__self:!0,__source:!0};function Zg(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)qg.call(e,i)&&!Kg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ja,type:n,key:s,ref:o,props:r,_owner:Hh.current}}function Zy(n,e){return{$$typeof:Ja,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Gh(n){return typeof n=="object"&&n!==null&&n.$$typeof===Ja}function Qy(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var vm=/\/+/g;function Ic(n,e){return typeof n=="object"&&n!==null&&n.key!=null?Qy(""+n.key):e.toString(36)}function Zl(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Ja:case By:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Ic(o,0):i,gm(r)?(t="",n!=null&&(t=n.replace(vm,"$&/")+"/"),Zl(r,e,t,"",function(u){return u})):r!=null&&(Gh(r)&&(r=Zy(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(vm,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",gm(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Ic(s,a);o+=Zl(s,e,t,l,r)}else if(l=Ky(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Ic(s,a++),o+=Zl(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function dl(n,e,t){if(n==null)return n;var i=[],r=0;return Zl(n,i,"","",function(s){return e.call(t,s,r++)}),i}function Jy(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var sn={current:null},Ql={transition:null},eS={ReactCurrentDispatcher:sn,ReactCurrentBatchConfig:Ql,ReactCurrentOwner:Hh};function Qg(){throw Error("act(...) is not supported in production builds of React.")}ke.Children={map:dl,forEach:function(n,e,t){dl(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return dl(n,function(){e++}),e},toArray:function(n){return dl(n,function(e){return e})||[]},only:function(n){if(!Gh(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};ke.Component=Bo;ke.Fragment=Vy;ke.Profiler=Gy;ke.PureComponent=Bh;ke.StrictMode=Hy;ke.Suspense=Yy;ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eS;ke.act=Qg;ke.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=jg({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Hh.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)qg.call(e,l)&&!Kg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Ja,type:n.type,key:r,ref:s,props:i,_owner:o}};ke.createContext=function(n){return n={$$typeof:Xy,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:Wy,_context:n},n.Consumer=n};ke.createElement=Zg;ke.createFactory=function(n){var e=Zg.bind(null,n);return e.type=n,e};ke.createRef=function(){return{current:null}};ke.forwardRef=function(n){return{$$typeof:jy,render:n}};ke.isValidElement=Gh;ke.lazy=function(n){return{$$typeof:qy,_payload:{_status:-1,_result:n},_init:Jy}};ke.memo=function(n,e){return{$$typeof:$y,type:n,compare:e===void 0?null:e}};ke.startTransition=function(n){var e=Ql.transition;Ql.transition={};try{n()}finally{Ql.transition=e}};ke.unstable_act=Qg;ke.useCallback=function(n,e){return sn.current.useCallback(n,e)};ke.useContext=function(n){return sn.current.useContext(n)};ke.useDebugValue=function(){};ke.useDeferredValue=function(n){return sn.current.useDeferredValue(n)};ke.useEffect=function(n,e){return sn.current.useEffect(n,e)};ke.useId=function(){return sn.current.useId()};ke.useImperativeHandle=function(n,e,t){return sn.current.useImperativeHandle(n,e,t)};ke.useInsertionEffect=function(n,e){return sn.current.useInsertionEffect(n,e)};ke.useLayoutEffect=function(n,e){return sn.current.useLayoutEffect(n,e)};ke.useMemo=function(n,e){return sn.current.useMemo(n,e)};ke.useReducer=function(n,e,t){return sn.current.useReducer(n,e,t)};ke.useRef=function(n){return sn.current.useRef(n)};ke.useState=function(n){return sn.current.useState(n)};ke.useSyncExternalStore=function(n,e,t){return sn.current.useSyncExternalStore(n,e,t)};ke.useTransition=function(){return sn.current.useTransition()};ke.version="18.3.1";Wg.exports=ke;var Ue=Wg.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tS=Ue,nS=Symbol.for("react.element"),iS=Symbol.for("react.fragment"),rS=Object.prototype.hasOwnProperty,sS=tS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,oS={key:!0,ref:!0,__self:!0,__source:!0};function Jg(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)rS.call(e,i)&&!oS.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:nS,type:n,key:s,ref:o,props:r,_owner:sS.current}}sc.Fragment=iS;sc.jsx=Jg;sc.jsxs=Jg;Gg.exports=sc;var j=Gg.exports,ev={exports:{}},Bn={},tv={exports:{}},nv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(b,q){var Z=b.length;b.push(q);e:for(;0<Z;){var Q=Z-1>>>1,re=b[Q];if(0<r(re,q))b[Q]=q,b[Z]=re,Z=Q;else break e}}function t(b){return b.length===0?null:b[0]}function i(b){if(b.length===0)return null;var q=b[0],Z=b.pop();if(Z!==q){b[0]=Z;e:for(var Q=0,re=b.length,ge=re>>>1;Q<ge;){var B=2*(Q+1)-1,Y=b[B],le=B+1,ae=b[le];if(0>r(Y,Z))le<re&&0>r(ae,Y)?(b[Q]=ae,b[le]=Z,Q=le):(b[Q]=Y,b[B]=Z,Q=B);else if(le<re&&0>r(ae,Z))b[Q]=ae,b[le]=Z,Q=le;else break e}}return q}function r(b,q){var Z=b.sortIndex-q.sortIndex;return Z!==0?Z:b.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,h=3,p=!1,g=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(b){for(var q=t(u);q!==null;){if(q.callback===null)i(u);else if(q.startTime<=b)i(u),q.sortIndex=q.expirationTime,e(l,q);else break;q=t(u)}}function S(b){if(_=!1,x(b),!g)if(t(l)!==null)g=!0,O(w);else{var q=t(u);q!==null&&$(S,q.startTime-b)}}function w(b,q){g=!1,_&&(_=!1,d(R),R=-1),p=!0;var Z=h;try{for(x(q),f=t(l);f!==null&&(!(f.expirationTime>q)||b&&!T());){var Q=f.callback;if(typeof Q=="function"){f.callback=null,h=f.priorityLevel;var re=Q(f.expirationTime<=q);q=n.unstable_now(),typeof re=="function"?f.callback=re:f===t(l)&&i(l),x(q)}else i(l);f=t(l)}if(f!==null)var ge=!0;else{var B=t(u);B!==null&&$(S,B.startTime-q),ge=!1}return ge}finally{f=null,h=Z,p=!1}}var C=!1,M=null,R=-1,L=5,y=-1;function T(){return!(n.unstable_now()-y<L)}function k(){if(M!==null){var b=n.unstable_now();y=b;var q=!0;try{q=M(!0,b)}finally{q?F():(C=!1,M=null)}}else C=!1}var F;if(typeof v=="function")F=function(){v(k)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,K=H.port2;H.port1.onmessage=k,F=function(){K.postMessage(null)}}else F=function(){m(k,0)};function O(b){M=b,C||(C=!0,F())}function $(b,q){R=m(function(){b(n.unstable_now())},q)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(b){b.callback=null},n.unstable_continueExecution=function(){g||p||(g=!0,O(w))},n.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<b?Math.floor(1e3/b):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(b){switch(h){case 1:case 2:case 3:var q=3;break;default:q=h}var Z=h;h=q;try{return b()}finally{h=Z}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(b,q){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var Z=h;h=b;try{return q()}finally{h=Z}},n.unstable_scheduleCallback=function(b,q,Z){var Q=n.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?Q+Z:Q):Z=Q,b){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=Z+re,b={id:c++,callback:q,priorityLevel:b,startTime:Z,expirationTime:re,sortIndex:-1},Z>Q?(b.sortIndex=Z,e(u,b),t(l)===null&&b===t(u)&&(_?(d(R),R=-1):_=!0,$(S,Z-Q))):(b.sortIndex=re,e(l,b),g||p||(g=!0,O(w))),b},n.unstable_shouldYield=T,n.unstable_wrapCallback=function(b){var q=h;return function(){var Z=h;h=q;try{return b.apply(this,arguments)}finally{h=Z}}}})(nv);tv.exports=nv;var aS=tv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lS=Ue,On=aS;function ie(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var iv=new Set,Aa={};function ws(n,e){So(n,e),So(n+"Capture",e)}function So(n,e){for(Aa[n]=e,n=0;n<e.length;n++)iv.add(e[n])}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$f=Object.prototype.hasOwnProperty,uS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xm={},ym={};function cS(n){return $f.call(ym,n)?!0:$f.call(xm,n)?!1:uS.test(n)?ym[n]=!0:(xm[n]=!0,!1)}function fS(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function dS(n,e,t,i){if(e===null||typeof e>"u"||fS(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function on(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Wt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Wt[n]=new on(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Wt[e]=new on(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Wt[n]=new on(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Wt[n]=new on(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Wt[n]=new on(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Wt[n]=new on(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Wt[n]=new on(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Wt[n]=new on(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Wt[n]=new on(n,5,!1,n.toLowerCase(),null,!1,!1)});var Wh=/[\-:]([a-z])/g;function Xh(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Wh,Xh);Wt[e]=new on(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Wh,Xh);Wt[e]=new on(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Wh,Xh);Wt[e]=new on(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Wt[n]=new on(n,1,!1,n.toLowerCase(),null,!1,!1)});Wt.xlinkHref=new on("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Wt[n]=new on(n,1,!1,n.toLowerCase(),null,!0,!0)});function jh(n,e,t,i){var r=Wt.hasOwnProperty(e)?Wt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(dS(e,t,r,i)&&(t=null),i||r===null?cS(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var er=lS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hl=Symbol.for("react.element"),Ys=Symbol.for("react.portal"),$s=Symbol.for("react.fragment"),Yh=Symbol.for("react.strict_mode"),qf=Symbol.for("react.profiler"),rv=Symbol.for("react.provider"),sv=Symbol.for("react.context"),$h=Symbol.for("react.forward_ref"),Kf=Symbol.for("react.suspense"),Zf=Symbol.for("react.suspense_list"),qh=Symbol.for("react.memo"),ur=Symbol.for("react.lazy"),ov=Symbol.for("react.offscreen"),Sm=Symbol.iterator;function Xo(n){return n===null||typeof n!="object"?null:(n=Sm&&n[Sm]||n["@@iterator"],typeof n=="function"?n:null)}var vt=Object.assign,Nc;function oa(n){if(Nc===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Nc=e&&e[1]||""}return`
`+Nc+n}var Uc=!1;function Fc(n,e){if(!n||Uc)return"";Uc=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Uc=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?oa(n):""}function hS(n){switch(n.tag){case 5:return oa(n.type);case 16:return oa("Lazy");case 13:return oa("Suspense");case 19:return oa("SuspenseList");case 0:case 2:case 15:return n=Fc(n.type,!1),n;case 11:return n=Fc(n.type.render,!1),n;case 1:return n=Fc(n.type,!0),n;default:return""}}function Qf(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case $s:return"Fragment";case Ys:return"Portal";case qf:return"Profiler";case Yh:return"StrictMode";case Kf:return"Suspense";case Zf:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case sv:return(n.displayName||"Context")+".Consumer";case rv:return(n._context.displayName||"Context")+".Provider";case $h:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case qh:return e=n.displayName||null,e!==null?e:Qf(n.type)||"Memo";case ur:e=n._payload,n=n._init;try{return Qf(n(e))}catch{}}return null}function pS(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qf(e);case 8:return e===Yh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ir(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function av(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function mS(n){var e=av(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function pl(n){n._valueTracker||(n._valueTracker=mS(n))}function lv(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=av(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function xu(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Jf(n,e){var t=e.checked;return vt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Mm(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Ir(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function uv(n,e){e=e.checked,e!=null&&jh(n,"checked",e,!1)}function ed(n,e){uv(n,e);var t=Ir(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?td(n,e.type,t):e.hasOwnProperty("defaultValue")&&td(n,e.type,Ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Em(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function td(n,e,t){(e!=="number"||xu(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var aa=Array.isArray;function lo(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Ir(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function nd(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return vt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Tm(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ie(92));if(aa(t)){if(1<t.length)throw Error(ie(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Ir(t)}}function cv(n,e){var t=Ir(e.value),i=Ir(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function wm(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function fv(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function id(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?fv(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ml,dv=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(ml=ml||document.createElement("div"),ml.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ml.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Ca(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var pa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_S=["Webkit","ms","Moz","O"];Object.keys(pa).forEach(function(n){_S.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),pa[e]=pa[n]})});function hv(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||pa.hasOwnProperty(n)&&pa[n]?(""+e).trim():e+"px"}function pv(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=hv(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var gS=vt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rd(n,e){if(e){if(gS[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function sd(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var od=null;function Kh(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ad=null,uo=null,co=null;function Am(n){if(n=nl(n)){if(typeof ad!="function")throw Error(ie(280));var e=n.stateNode;e&&(e=cc(e),ad(n.stateNode,n.type,e))}}function mv(n){uo?co?co.push(n):co=[n]:uo=n}function _v(){if(uo){var n=uo,e=co;if(co=uo=null,Am(n),e)for(n=0;n<e.length;n++)Am(e[n])}}function gv(n,e){return n(e)}function vv(){}var Oc=!1;function xv(n,e,t){if(Oc)return n(e,t);Oc=!0;try{return gv(n,e,t)}finally{Oc=!1,(uo!==null||co!==null)&&(vv(),_v())}}function Ra(n,e){var t=n.stateNode;if(t===null)return null;var i=cc(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ie(231,e,typeof t));return t}var ld=!1;if(ji)try{var jo={};Object.defineProperty(jo,"passive",{get:function(){ld=!0}}),window.addEventListener("test",jo,jo),window.removeEventListener("test",jo,jo)}catch{ld=!1}function vS(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var ma=!1,yu=null,Su=!1,ud=null,xS={onError:function(n){ma=!0,yu=n}};function yS(n,e,t,i,r,s,o,a,l){ma=!1,yu=null,vS.apply(xS,arguments)}function SS(n,e,t,i,r,s,o,a,l){if(yS.apply(this,arguments),ma){if(ma){var u=yu;ma=!1,yu=null}else throw Error(ie(198));Su||(Su=!0,ud=u)}}function As(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function yv(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Cm(n){if(As(n)!==n)throw Error(ie(188))}function MS(n){var e=n.alternate;if(!e){if(e=As(n),e===null)throw Error(ie(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Cm(r),n;if(s===i)return Cm(r),e;s=s.sibling}throw Error(ie(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ie(189))}}if(t.alternate!==i)throw Error(ie(190))}if(t.tag!==3)throw Error(ie(188));return t.stateNode.current===t?n:e}function Sv(n){return n=MS(n),n!==null?Mv(n):null}function Mv(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Mv(n);if(e!==null)return e;n=n.sibling}return null}var Ev=On.unstable_scheduleCallback,Rm=On.unstable_cancelCallback,ES=On.unstable_shouldYield,TS=On.unstable_requestPaint,Tt=On.unstable_now,wS=On.unstable_getCurrentPriorityLevel,Zh=On.unstable_ImmediatePriority,Tv=On.unstable_UserBlockingPriority,Mu=On.unstable_NormalPriority,AS=On.unstable_LowPriority,wv=On.unstable_IdlePriority,oc=null,Ti=null;function CS(n){if(Ti&&typeof Ti.onCommitFiberRoot=="function")try{Ti.onCommitFiberRoot(oc,n,void 0,(n.current.flags&128)===128)}catch{}}var hi=Math.clz32?Math.clz32:bS,RS=Math.log,PS=Math.LN2;function bS(n){return n>>>=0,n===0?32:31-(RS(n)/PS|0)|0}var _l=64,gl=4194304;function la(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Eu(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=la(a):(s&=o,s!==0&&(i=la(s)))}else o=t&~r,o!==0?i=la(o):s!==0&&(i=la(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-hi(e),r=1<<t,i|=n[t],e&=~r;return i}function LS(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function DS(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-hi(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=LS(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function cd(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Av(){var n=_l;return _l<<=1,!(_l&4194240)&&(_l=64),n}function kc(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function el(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-hi(e),n[e]=t}function IS(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-hi(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Qh(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-hi(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var Je=0;function Cv(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Rv,Jh,Pv,bv,Lv,fd=!1,vl=[],Sr=null,Mr=null,Er=null,Pa=new Map,ba=new Map,fr=[],NS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pm(n,e){switch(n){case"focusin":case"focusout":Sr=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":Pa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ba.delete(e.pointerId)}}function Yo(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=nl(e),e!==null&&Jh(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function US(n,e,t,i,r){switch(e){case"focusin":return Sr=Yo(Sr,n,e,t,i,r),!0;case"dragenter":return Mr=Yo(Mr,n,e,t,i,r),!0;case"mouseover":return Er=Yo(Er,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Pa.set(s,Yo(Pa.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ba.set(s,Yo(ba.get(s)||null,n,e,t,i,r)),!0}return!1}function Dv(n){var e=os(n.target);if(e!==null){var t=As(e);if(t!==null){if(e=t.tag,e===13){if(e=yv(t),e!==null){n.blockedOn=e,Lv(n.priority,function(){Pv(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Jl(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=dd(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);od=i,t.target.dispatchEvent(i),od=null}else return e=nl(t),e!==null&&Jh(e),n.blockedOn=t,!1;e.shift()}return!0}function bm(n,e,t){Jl(n)&&t.delete(e)}function FS(){fd=!1,Sr!==null&&Jl(Sr)&&(Sr=null),Mr!==null&&Jl(Mr)&&(Mr=null),Er!==null&&Jl(Er)&&(Er=null),Pa.forEach(bm),ba.forEach(bm)}function $o(n,e){n.blockedOn===e&&(n.blockedOn=null,fd||(fd=!0,On.unstable_scheduleCallback(On.unstable_NormalPriority,FS)))}function La(n){function e(r){return $o(r,n)}if(0<vl.length){$o(vl[0],n);for(var t=1;t<vl.length;t++){var i=vl[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Sr!==null&&$o(Sr,n),Mr!==null&&$o(Mr,n),Er!==null&&$o(Er,n),Pa.forEach(e),ba.forEach(e),t=0;t<fr.length;t++)i=fr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<fr.length&&(t=fr[0],t.blockedOn===null);)Dv(t),t.blockedOn===null&&fr.shift()}var fo=er.ReactCurrentBatchConfig,Tu=!0;function OS(n,e,t,i){var r=Je,s=fo.transition;fo.transition=null;try{Je=1,ep(n,e,t,i)}finally{Je=r,fo.transition=s}}function kS(n,e,t,i){var r=Je,s=fo.transition;fo.transition=null;try{Je=4,ep(n,e,t,i)}finally{Je=r,fo.transition=s}}function ep(n,e,t,i){if(Tu){var r=dd(n,e,t,i);if(r===null)$c(n,e,i,wu,t),Pm(n,i);else if(US(r,n,e,t,i))i.stopPropagation();else if(Pm(n,i),e&4&&-1<NS.indexOf(n)){for(;r!==null;){var s=nl(r);if(s!==null&&Rv(s),s=dd(n,e,t,i),s===null&&$c(n,e,i,wu,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else $c(n,e,i,null,t)}}var wu=null;function dd(n,e,t,i){if(wu=null,n=Kh(i),n=os(n),n!==null)if(e=As(n),e===null)n=null;else if(t=e.tag,t===13){if(n=yv(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return wu=n,null}function Iv(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wS()){case Zh:return 1;case Tv:return 4;case Mu:case AS:return 16;case wv:return 536870912;default:return 16}default:return 16}}var mr=null,tp=null,eu=null;function Nv(){if(eu)return eu;var n,e=tp,t=e.length,i,r="value"in mr?mr.value:mr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return eu=r.slice(n,1<i?1-i:void 0)}function tu(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function xl(){return!0}function Lm(){return!1}function Vn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?xl:Lm,this.isPropagationStopped=Lm,this}return vt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=xl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=xl)},persist:function(){},isPersistent:xl}),e}var Vo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},np=Vn(Vo),tl=vt({},Vo,{view:0,detail:0}),zS=Vn(tl),zc,Bc,qo,ac=vt({},tl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ip,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==qo&&(qo&&n.type==="mousemove"?(zc=n.screenX-qo.screenX,Bc=n.screenY-qo.screenY):Bc=zc=0,qo=n),zc)},movementY:function(n){return"movementY"in n?n.movementY:Bc}}),Dm=Vn(ac),BS=vt({},ac,{dataTransfer:0}),VS=Vn(BS),HS=vt({},tl,{relatedTarget:0}),Vc=Vn(HS),GS=vt({},Vo,{animationName:0,elapsedTime:0,pseudoElement:0}),WS=Vn(GS),XS=vt({},Vo,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),jS=Vn(XS),YS=vt({},Vo,{data:0}),Im=Vn(YS),$S={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},KS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ZS(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=KS[n])?!!e[n]:!1}function ip(){return ZS}var QS=vt({},tl,{key:function(n){if(n.key){var e=$S[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=tu(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?qS[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ip,charCode:function(n){return n.type==="keypress"?tu(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?tu(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),JS=Vn(QS),eM=vt({},ac,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nm=Vn(eM),tM=vt({},tl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ip}),nM=Vn(tM),iM=vt({},Vo,{propertyName:0,elapsedTime:0,pseudoElement:0}),rM=Vn(iM),sM=vt({},ac,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),oM=Vn(sM),aM=[9,13,27,32],rp=ji&&"CompositionEvent"in window,_a=null;ji&&"documentMode"in document&&(_a=document.documentMode);var lM=ji&&"TextEvent"in window&&!_a,Uv=ji&&(!rp||_a&&8<_a&&11>=_a),Um=" ",Fm=!1;function Fv(n,e){switch(n){case"keyup":return aM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ov(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var qs=!1;function uM(n,e){switch(n){case"compositionend":return Ov(e);case"keypress":return e.which!==32?null:(Fm=!0,Um);case"textInput":return n=e.data,n===Um&&Fm?null:n;default:return null}}function cM(n,e){if(qs)return n==="compositionend"||!rp&&Fv(n,e)?(n=Nv(),eu=tp=mr=null,qs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Uv&&e.locale!=="ko"?null:e.data;default:return null}}var fM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Om(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!fM[n.type]:e==="textarea"}function kv(n,e,t,i){mv(i),e=Au(e,"onChange"),0<e.length&&(t=new np("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var ga=null,Da=null;function dM(n){qv(n,0)}function lc(n){var e=Qs(n);if(lv(e))return n}function hM(n,e){if(n==="change")return e}var zv=!1;if(ji){var Hc;if(ji){var Gc="oninput"in document;if(!Gc){var km=document.createElement("div");km.setAttribute("oninput","return;"),Gc=typeof km.oninput=="function"}Hc=Gc}else Hc=!1;zv=Hc&&(!document.documentMode||9<document.documentMode)}function zm(){ga&&(ga.detachEvent("onpropertychange",Bv),Da=ga=null)}function Bv(n){if(n.propertyName==="value"&&lc(Da)){var e=[];kv(e,Da,n,Kh(n)),xv(dM,e)}}function pM(n,e,t){n==="focusin"?(zm(),ga=e,Da=t,ga.attachEvent("onpropertychange",Bv)):n==="focusout"&&zm()}function mM(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return lc(Da)}function _M(n,e){if(n==="click")return lc(e)}function gM(n,e){if(n==="input"||n==="change")return lc(e)}function vM(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var mi=typeof Object.is=="function"?Object.is:vM;function Ia(n,e){if(mi(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!$f.call(e,r)||!mi(n[r],e[r]))return!1}return!0}function Bm(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Vm(n,e){var t=Bm(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Bm(t)}}function Vv(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Vv(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Hv(){for(var n=window,e=xu();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=xu(n.document)}return e}function sp(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function xM(n){var e=Hv(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Vv(t.ownerDocument.documentElement,t)){if(i!==null&&sp(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Vm(t,s);var o=Vm(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var yM=ji&&"documentMode"in document&&11>=document.documentMode,Ks=null,hd=null,va=null,pd=!1;function Hm(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;pd||Ks==null||Ks!==xu(i)||(i=Ks,"selectionStart"in i&&sp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),va&&Ia(va,i)||(va=i,i=Au(hd,"onSelect"),0<i.length&&(e=new np("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Ks)))}function yl(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Zs={animationend:yl("Animation","AnimationEnd"),animationiteration:yl("Animation","AnimationIteration"),animationstart:yl("Animation","AnimationStart"),transitionend:yl("Transition","TransitionEnd")},Wc={},Gv={};ji&&(Gv=document.createElement("div").style,"AnimationEvent"in window||(delete Zs.animationend.animation,delete Zs.animationiteration.animation,delete Zs.animationstart.animation),"TransitionEvent"in window||delete Zs.transitionend.transition);function uc(n){if(Wc[n])return Wc[n];if(!Zs[n])return n;var e=Zs[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Gv)return Wc[n]=e[t];return n}var Wv=uc("animationend"),Xv=uc("animationiteration"),jv=uc("animationstart"),Yv=uc("transitionend"),$v=new Map,Gm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zr(n,e){$v.set(n,e),ws(e,[n])}for(var Xc=0;Xc<Gm.length;Xc++){var jc=Gm[Xc],SM=jc.toLowerCase(),MM=jc[0].toUpperCase()+jc.slice(1);zr(SM,"on"+MM)}zr(Wv,"onAnimationEnd");zr(Xv,"onAnimationIteration");zr(jv,"onAnimationStart");zr("dblclick","onDoubleClick");zr("focusin","onFocus");zr("focusout","onBlur");zr(Yv,"onTransitionEnd");So("onMouseEnter",["mouseout","mouseover"]);So("onMouseLeave",["mouseout","mouseover"]);So("onPointerEnter",["pointerout","pointerover"]);So("onPointerLeave",["pointerout","pointerover"]);ws("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ws("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ws("onBeforeInput",["compositionend","keypress","textInput","paste"]);ws("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ws("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ws("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),EM=new Set("cancel close invalid load scroll toggle".split(" ").concat(ua));function Wm(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,SS(i,e,void 0,n),n.currentTarget=null}function qv(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Wm(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Wm(r,a,u),s=l}}}if(Su)throw n=ud,Su=!1,ud=null,n}function lt(n,e){var t=e[xd];t===void 0&&(t=e[xd]=new Set);var i=n+"__bubble";t.has(i)||(Kv(e,n,2,!1),t.add(i))}function Yc(n,e,t){var i=0;e&&(i|=4),Kv(t,n,i,e)}var Sl="_reactListening"+Math.random().toString(36).slice(2);function Na(n){if(!n[Sl]){n[Sl]=!0,iv.forEach(function(t){t!=="selectionchange"&&(EM.has(t)||Yc(t,!1,n),Yc(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Sl]||(e[Sl]=!0,Yc("selectionchange",!1,e))}}function Kv(n,e,t,i){switch(Iv(e)){case 1:var r=OS;break;case 4:r=kS;break;default:r=ep}t=r.bind(null,e,t,n),r=void 0,!ld||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function $c(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=os(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}xv(function(){var u=s,c=Kh(t),f=[];e:{var h=$v.get(n);if(h!==void 0){var p=np,g=n;switch(n){case"keypress":if(tu(t)===0)break e;case"keydown":case"keyup":p=JS;break;case"focusin":g="focus",p=Vc;break;case"focusout":g="blur",p=Vc;break;case"beforeblur":case"afterblur":p=Vc;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Dm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=VS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=nM;break;case Wv:case Xv:case jv:p=WS;break;case Yv:p=rM;break;case"scroll":p=zS;break;case"wheel":p=oM;break;case"copy":case"cut":case"paste":p=jS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Nm}var _=(e&4)!==0,m=!_&&n==="scroll",d=_?h!==null?h+"Capture":null:h;_=[];for(var v=u,x;v!==null;){x=v;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,d!==null&&(S=Ra(v,d),S!=null&&_.push(Ua(v,S,x)))),m)break;v=v.return}0<_.length&&(h=new p(h,g,null,t,c),f.push({event:h,listeners:_}))}}if(!(e&7)){e:{if(h=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",h&&t!==od&&(g=t.relatedTarget||t.fromElement)&&(os(g)||g[Yi]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(g=t.relatedTarget||t.toElement,p=u,g=g?os(g):null,g!==null&&(m=As(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(_=Dm,S="onMouseLeave",d="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(_=Nm,S="onPointerLeave",d="onPointerEnter",v="pointer"),m=p==null?h:Qs(p),x=g==null?h:Qs(g),h=new _(S,v+"leave",p,t,c),h.target=m,h.relatedTarget=x,S=null,os(c)===u&&(_=new _(d,v+"enter",g,t,c),_.target=x,_.relatedTarget=m,S=_),m=S,p&&g)t:{for(_=p,d=g,v=0,x=_;x;x=Ls(x))v++;for(x=0,S=d;S;S=Ls(S))x++;for(;0<v-x;)_=Ls(_),v--;for(;0<x-v;)d=Ls(d),x--;for(;v--;){if(_===d||d!==null&&_===d.alternate)break t;_=Ls(_),d=Ls(d)}_=null}else _=null;p!==null&&Xm(f,h,p,_,!1),g!==null&&m!==null&&Xm(f,m,g,_,!0)}}e:{if(h=u?Qs(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var w=hM;else if(Om(h))if(zv)w=gM;else{w=mM;var C=pM}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(w=_M);if(w&&(w=w(n,u))){kv(f,w,t,c);break e}C&&C(n,h,u),n==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&td(h,"number",h.value)}switch(C=u?Qs(u):window,n){case"focusin":(Om(C)||C.contentEditable==="true")&&(Ks=C,hd=u,va=null);break;case"focusout":va=hd=Ks=null;break;case"mousedown":pd=!0;break;case"contextmenu":case"mouseup":case"dragend":pd=!1,Hm(f,t,c);break;case"selectionchange":if(yM)break;case"keydown":case"keyup":Hm(f,t,c)}var M;if(rp)e:{switch(n){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else qs?Fv(n,t)&&(R="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(R="onCompositionStart");R&&(Uv&&t.locale!=="ko"&&(qs||R!=="onCompositionStart"?R==="onCompositionEnd"&&qs&&(M=Nv()):(mr=c,tp="value"in mr?mr.value:mr.textContent,qs=!0)),C=Au(u,R),0<C.length&&(R=new Im(R,n,null,t,c),f.push({event:R,listeners:C}),M?R.data=M:(M=Ov(t),M!==null&&(R.data=M)))),(M=lM?uM(n,t):cM(n,t))&&(u=Au(u,"onBeforeInput"),0<u.length&&(c=new Im("onBeforeInput","beforeinput",null,t,c),f.push({event:c,listeners:u}),c.data=M))}qv(f,e)})}function Ua(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Au(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ra(n,t),s!=null&&i.unshift(Ua(n,s,r)),s=Ra(n,e),s!=null&&i.push(Ua(n,s,r))),n=n.return}return i}function Ls(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Xm(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Ra(t,s),l!=null&&o.unshift(Ua(t,l,a))):r||(l=Ra(t,s),l!=null&&o.push(Ua(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var TM=/\r\n?/g,wM=/\u0000|\uFFFD/g;function jm(n){return(typeof n=="string"?n:""+n).replace(TM,`
`).replace(wM,"")}function Ml(n,e,t){if(e=jm(e),jm(n)!==e&&t)throw Error(ie(425))}function Cu(){}var md=null,_d=null;function gd(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var vd=typeof setTimeout=="function"?setTimeout:void 0,AM=typeof clearTimeout=="function"?clearTimeout:void 0,Ym=typeof Promise=="function"?Promise:void 0,CM=typeof queueMicrotask=="function"?queueMicrotask:typeof Ym<"u"?function(n){return Ym.resolve(null).then(n).catch(RM)}:vd;function RM(n){setTimeout(function(){throw n})}function qc(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),La(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);La(e)}function Tr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function $m(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Ho=Math.random().toString(36).slice(2),Si="__reactFiber$"+Ho,Fa="__reactProps$"+Ho,Yi="__reactContainer$"+Ho,xd="__reactEvents$"+Ho,PM="__reactListeners$"+Ho,bM="__reactHandles$"+Ho;function os(n){var e=n[Si];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Yi]||t[Si]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=$m(n);n!==null;){if(t=n[Si])return t;n=$m(n)}return e}n=t,t=n.parentNode}return null}function nl(n){return n=n[Si]||n[Yi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Qs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ie(33))}function cc(n){return n[Fa]||null}var yd=[],Js=-1;function Br(n){return{current:n}}function ct(n){0>Js||(n.current=yd[Js],yd[Js]=null,Js--)}function st(n,e){Js++,yd[Js]=n.current,n.current=e}var Nr={},Jt=Br(Nr),pn=Br(!1),vs=Nr;function Mo(n,e){var t=n.type.contextTypes;if(!t)return Nr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function mn(n){return n=n.childContextTypes,n!=null}function Ru(){ct(pn),ct(Jt)}function qm(n,e,t){if(Jt.current!==Nr)throw Error(ie(168));st(Jt,e),st(pn,t)}function Zv(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,pS(n)||"Unknown",r));return vt({},t,i)}function Pu(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Nr,vs=Jt.current,st(Jt,n),st(pn,pn.current),!0}function Km(n,e,t){var i=n.stateNode;if(!i)throw Error(ie(169));t?(n=Zv(n,e,vs),i.__reactInternalMemoizedMergedChildContext=n,ct(pn),ct(Jt),st(Jt,n)):ct(pn),st(pn,t)}var ki=null,fc=!1,Kc=!1;function Qv(n){ki===null?ki=[n]:ki.push(n)}function LM(n){fc=!0,Qv(n)}function Vr(){if(!Kc&&ki!==null){Kc=!0;var n=0,e=Je;try{var t=ki;for(Je=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}ki=null,fc=!1}catch(r){throw ki!==null&&(ki=ki.slice(n+1)),Ev(Zh,Vr),r}finally{Je=e,Kc=!1}}return null}var eo=[],to=0,bu=null,Lu=0,Xn=[],jn=0,xs=null,Vi=1,Hi="";function Jr(n,e){eo[to++]=Lu,eo[to++]=bu,bu=n,Lu=e}function Jv(n,e,t){Xn[jn++]=Vi,Xn[jn++]=Hi,Xn[jn++]=xs,xs=n;var i=Vi;n=Hi;var r=32-hi(i)-1;i&=~(1<<r),t+=1;var s=32-hi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Vi=1<<32-hi(e)+r|t<<r|i,Hi=s+n}else Vi=1<<s|t<<r|i,Hi=n}function op(n){n.return!==null&&(Jr(n,1),Jv(n,1,0))}function ap(n){for(;n===bu;)bu=eo[--to],eo[to]=null,Lu=eo[--to],eo[to]=null;for(;n===xs;)xs=Xn[--jn],Xn[jn]=null,Hi=Xn[--jn],Xn[jn]=null,Vi=Xn[--jn],Xn[jn]=null}var Nn=null,Ln=null,ft=!1,li=null;function e0(n,e){var t=$n(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Zm(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Nn=n,Ln=Tr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Nn=n,Ln=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=xs!==null?{id:Vi,overflow:Hi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=$n(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Nn=n,Ln=null,!0):!1;default:return!1}}function Sd(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Md(n){if(ft){var e=Ln;if(e){var t=e;if(!Zm(n,e)){if(Sd(n))throw Error(ie(418));e=Tr(t.nextSibling);var i=Nn;e&&Zm(n,e)?e0(i,t):(n.flags=n.flags&-4097|2,ft=!1,Nn=n)}}else{if(Sd(n))throw Error(ie(418));n.flags=n.flags&-4097|2,ft=!1,Nn=n}}}function Qm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Nn=n}function El(n){if(n!==Nn)return!1;if(!ft)return Qm(n),ft=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!gd(n.type,n.memoizedProps)),e&&(e=Ln)){if(Sd(n))throw t0(),Error(ie(418));for(;e;)e0(n,e),e=Tr(e.nextSibling)}if(Qm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ie(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Ln=Tr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Ln=null}}else Ln=Nn?Tr(n.stateNode.nextSibling):null;return!0}function t0(){for(var n=Ln;n;)n=Tr(n.nextSibling)}function Eo(){Ln=Nn=null,ft=!1}function lp(n){li===null?li=[n]:li.push(n)}var DM=er.ReactCurrentBatchConfig;function Ko(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ie(309));var i=t.stateNode}if(!i)throw Error(ie(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ie(284));if(!t._owner)throw Error(ie(290,n))}return n}function Tl(n,e){throw n=Object.prototype.toString.call(e),Error(ie(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Jm(n){var e=n._init;return e(n._payload)}function n0(n){function e(d,v){if(n){var x=d.deletions;x===null?(d.deletions=[v],d.flags|=16):x.push(v)}}function t(d,v){if(!n)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=Rr(d,v),d.index=0,d.sibling=null,d}function s(d,v,x){return d.index=x,n?(x=d.alternate,x!==null?(x=x.index,x<v?(d.flags|=2,v):x):(d.flags|=2,v)):(d.flags|=1048576,v)}function o(d){return n&&d.alternate===null&&(d.flags|=2),d}function a(d,v,x,S){return v===null||v.tag!==6?(v=rf(x,d.mode,S),v.return=d,v):(v=r(v,x),v.return=d,v)}function l(d,v,x,S){var w=x.type;return w===$s?c(d,v,x.props.children,S,x.key):v!==null&&(v.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===ur&&Jm(w)===v.type)?(S=r(v,x.props),S.ref=Ko(d,v,x),S.return=d,S):(S=lu(x.type,x.key,x.props,null,d.mode,S),S.ref=Ko(d,v,x),S.return=d,S)}function u(d,v,x,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=sf(x,d.mode,S),v.return=d,v):(v=r(v,x.children||[]),v.return=d,v)}function c(d,v,x,S,w){return v===null||v.tag!==7?(v=ds(x,d.mode,S,w),v.return=d,v):(v=r(v,x),v.return=d,v)}function f(d,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=rf(""+v,d.mode,x),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case hl:return x=lu(v.type,v.key,v.props,null,d.mode,x),x.ref=Ko(d,null,v),x.return=d,x;case Ys:return v=sf(v,d.mode,x),v.return=d,v;case ur:var S=v._init;return f(d,S(v._payload),x)}if(aa(v)||Xo(v))return v=ds(v,d.mode,x,null),v.return=d,v;Tl(d,v)}return null}function h(d,v,x,S){var w=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return w!==null?null:a(d,v,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case hl:return x.key===w?l(d,v,x,S):null;case Ys:return x.key===w?u(d,v,x,S):null;case ur:return w=x._init,h(d,v,w(x._payload),S)}if(aa(x)||Xo(x))return w!==null?null:c(d,v,x,S,null);Tl(d,x)}return null}function p(d,v,x,S,w){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(x)||null,a(v,d,""+S,w);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case hl:return d=d.get(S.key===null?x:S.key)||null,l(v,d,S,w);case Ys:return d=d.get(S.key===null?x:S.key)||null,u(v,d,S,w);case ur:var C=S._init;return p(d,v,x,C(S._payload),w)}if(aa(S)||Xo(S))return d=d.get(x)||null,c(v,d,S,w,null);Tl(v,S)}return null}function g(d,v,x,S){for(var w=null,C=null,M=v,R=v=0,L=null;M!==null&&R<x.length;R++){M.index>R?(L=M,M=null):L=M.sibling;var y=h(d,M,x[R],S);if(y===null){M===null&&(M=L);break}n&&M&&y.alternate===null&&e(d,M),v=s(y,v,R),C===null?w=y:C.sibling=y,C=y,M=L}if(R===x.length)return t(d,M),ft&&Jr(d,R),w;if(M===null){for(;R<x.length;R++)M=f(d,x[R],S),M!==null&&(v=s(M,v,R),C===null?w=M:C.sibling=M,C=M);return ft&&Jr(d,R),w}for(M=i(d,M);R<x.length;R++)L=p(M,d,R,x[R],S),L!==null&&(n&&L.alternate!==null&&M.delete(L.key===null?R:L.key),v=s(L,v,R),C===null?w=L:C.sibling=L,C=L);return n&&M.forEach(function(T){return e(d,T)}),ft&&Jr(d,R),w}function _(d,v,x,S){var w=Xo(x);if(typeof w!="function")throw Error(ie(150));if(x=w.call(x),x==null)throw Error(ie(151));for(var C=w=null,M=v,R=v=0,L=null,y=x.next();M!==null&&!y.done;R++,y=x.next()){M.index>R?(L=M,M=null):L=M.sibling;var T=h(d,M,y.value,S);if(T===null){M===null&&(M=L);break}n&&M&&T.alternate===null&&e(d,M),v=s(T,v,R),C===null?w=T:C.sibling=T,C=T,M=L}if(y.done)return t(d,M),ft&&Jr(d,R),w;if(M===null){for(;!y.done;R++,y=x.next())y=f(d,y.value,S),y!==null&&(v=s(y,v,R),C===null?w=y:C.sibling=y,C=y);return ft&&Jr(d,R),w}for(M=i(d,M);!y.done;R++,y=x.next())y=p(M,d,R,y.value,S),y!==null&&(n&&y.alternate!==null&&M.delete(y.key===null?R:y.key),v=s(y,v,R),C===null?w=y:C.sibling=y,C=y);return n&&M.forEach(function(k){return e(d,k)}),ft&&Jr(d,R),w}function m(d,v,x,S){if(typeof x=="object"&&x!==null&&x.type===$s&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case hl:e:{for(var w=x.key,C=v;C!==null;){if(C.key===w){if(w=x.type,w===$s){if(C.tag===7){t(d,C.sibling),v=r(C,x.props.children),v.return=d,d=v;break e}}else if(C.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===ur&&Jm(w)===C.type){t(d,C.sibling),v=r(C,x.props),v.ref=Ko(d,C,x),v.return=d,d=v;break e}t(d,C);break}else e(d,C);C=C.sibling}x.type===$s?(v=ds(x.props.children,d.mode,S,x.key),v.return=d,d=v):(S=lu(x.type,x.key,x.props,null,d.mode,S),S.ref=Ko(d,v,x),S.return=d,d=S)}return o(d);case Ys:e:{for(C=x.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){t(d,v.sibling),v=r(v,x.children||[]),v.return=d,d=v;break e}else{t(d,v);break}else e(d,v);v=v.sibling}v=sf(x,d.mode,S),v.return=d,d=v}return o(d);case ur:return C=x._init,m(d,v,C(x._payload),S)}if(aa(x))return g(d,v,x,S);if(Xo(x))return _(d,v,x,S);Tl(d,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(t(d,v.sibling),v=r(v,x),v.return=d,d=v):(t(d,v),v=rf(x,d.mode,S),v.return=d,d=v),o(d)):t(d,v)}return m}var To=n0(!0),i0=n0(!1),Du=Br(null),Iu=null,no=null,up=null;function cp(){up=no=Iu=null}function fp(n){var e=Du.current;ct(Du),n._currentValue=e}function Ed(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function ho(n,e){Iu=n,up=no=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(hn=!0),n.firstContext=null)}function Jn(n){var e=n._currentValue;if(up!==n)if(n={context:n,memoizedValue:e,next:null},no===null){if(Iu===null)throw Error(ie(308));no=n,Iu.dependencies={lanes:0,firstContext:n}}else no=no.next=n;return e}var as=null;function dp(n){as===null?as=[n]:as.push(n)}function r0(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,dp(e)):(t.next=r.next,r.next=t),e.interleaved=t,$i(n,i)}function $i(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var cr=!1;function hp(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function s0(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Wi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function wr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,We&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,$i(n,t)}return r=i.interleaved,r===null?(e.next=e,dp(i)):(e.next=r.next,r.next=e),i.interleaved=e,$i(n,t)}function nu(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Qh(n,t)}}function e_(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Nu(n,e,t,i){var r=n.updateQueue;cr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=n,_=a;switch(h=e,p=t,_.tag){case 1:if(g=_.payload,typeof g=="function"){f=g.call(p,f,h);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,h=typeof g=="function"?g.call(p,f,h):g,h==null)break e;f=vt({},f,h);break e;case 2:cr=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ss|=o,n.lanes=o,n.memoizedState=f}}function t_(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var il={},wi=Br(il),Oa=Br(il),ka=Br(il);function ls(n){if(n===il)throw Error(ie(174));return n}function pp(n,e){switch(st(ka,e),st(Oa,n),st(wi,il),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:id(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=id(e,n)}ct(wi),st(wi,e)}function wo(){ct(wi),ct(Oa),ct(ka)}function o0(n){ls(ka.current);var e=ls(wi.current),t=id(e,n.type);e!==t&&(st(Oa,n),st(wi,t))}function mp(n){Oa.current===n&&(ct(wi),ct(Oa))}var pt=Br(0);function Uu(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Zc=[];function _p(){for(var n=0;n<Zc.length;n++)Zc[n]._workInProgressVersionPrimary=null;Zc.length=0}var iu=er.ReactCurrentDispatcher,Qc=er.ReactCurrentBatchConfig,ys=0,gt=null,Dt=null,Ot=null,Fu=!1,xa=!1,za=0,IM=0;function Xt(){throw Error(ie(321))}function gp(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!mi(n[t],e[t]))return!1;return!0}function vp(n,e,t,i,r,s){if(ys=s,gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,iu.current=n===null||n.memoizedState===null?OM:kM,n=t(i,r),xa){s=0;do{if(xa=!1,za=0,25<=s)throw Error(ie(301));s+=1,Ot=Dt=null,e.updateQueue=null,iu.current=zM,n=t(i,r)}while(xa)}if(iu.current=Ou,e=Dt!==null&&Dt.next!==null,ys=0,Ot=Dt=gt=null,Fu=!1,e)throw Error(ie(300));return n}function xp(){var n=za!==0;return za=0,n}function gi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?gt.memoizedState=Ot=n:Ot=Ot.next=n,Ot}function ei(){if(Dt===null){var n=gt.alternate;n=n!==null?n.memoizedState:null}else n=Dt.next;var e=Ot===null?gt.memoizedState:Ot.next;if(e!==null)Ot=e,Dt=n;else{if(n===null)throw Error(ie(310));Dt=n,n={memoizedState:Dt.memoizedState,baseState:Dt.baseState,baseQueue:Dt.baseQueue,queue:Dt.queue,next:null},Ot===null?gt.memoizedState=Ot=n:Ot=Ot.next=n}return Ot}function Ba(n,e){return typeof e=="function"?e(n):e}function Jc(n){var e=ei(),t=e.queue;if(t===null)throw Error(ie(311));t.lastRenderedReducer=n;var i=Dt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((ys&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,gt.lanes|=c,Ss|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,mi(i,e.memoizedState)||(hn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,gt.lanes|=s,Ss|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function ef(n){var e=ei(),t=e.queue;if(t===null)throw Error(ie(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);mi(s,e.memoizedState)||(hn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function a0(){}function l0(n,e){var t=gt,i=ei(),r=e(),s=!mi(i.memoizedState,r);if(s&&(i.memoizedState=r,hn=!0),i=i.queue,yp(f0.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Ot!==null&&Ot.memoizedState.tag&1){if(t.flags|=2048,Va(9,c0.bind(null,t,i,r,e),void 0,null),kt===null)throw Error(ie(349));ys&30||u0(t,e,r)}return r}function u0(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function c0(n,e,t,i){e.value=t,e.getSnapshot=i,d0(e)&&h0(n)}function f0(n,e,t){return t(function(){d0(e)&&h0(n)})}function d0(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!mi(n,t)}catch{return!0}}function h0(n){var e=$i(n,1);e!==null&&pi(e,n,1,-1)}function n_(n){var e=gi();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ba,lastRenderedState:n},e.queue=n,n=n.dispatch=FM.bind(null,gt,n),[e.memoizedState,n]}function Va(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function p0(){return ei().memoizedState}function ru(n,e,t,i){var r=gi();gt.flags|=n,r.memoizedState=Va(1|e,t,void 0,i===void 0?null:i)}function dc(n,e,t,i){var r=ei();i=i===void 0?null:i;var s=void 0;if(Dt!==null){var o=Dt.memoizedState;if(s=o.destroy,i!==null&&gp(i,o.deps)){r.memoizedState=Va(e,t,s,i);return}}gt.flags|=n,r.memoizedState=Va(1|e,t,s,i)}function i_(n,e){return ru(8390656,8,n,e)}function yp(n,e){return dc(2048,8,n,e)}function m0(n,e){return dc(4,2,n,e)}function _0(n,e){return dc(4,4,n,e)}function g0(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function v0(n,e,t){return t=t!=null?t.concat([n]):null,dc(4,4,g0.bind(null,e,n),t)}function Sp(){}function x0(n,e){var t=ei();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&gp(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function y0(n,e){var t=ei();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&gp(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function S0(n,e,t){return ys&21?(mi(t,e)||(t=Av(),gt.lanes|=t,Ss|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,hn=!0),n.memoizedState=t)}function NM(n,e){var t=Je;Je=t!==0&&4>t?t:4,n(!0);var i=Qc.transition;Qc.transition={};try{n(!1),e()}finally{Je=t,Qc.transition=i}}function M0(){return ei().memoizedState}function UM(n,e,t){var i=Cr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},E0(n))T0(e,t);else if(t=r0(n,e,t,i),t!==null){var r=nn();pi(t,n,i,r),w0(t,e,i)}}function FM(n,e,t){var i=Cr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(E0(n))T0(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,mi(a,o)){var l=e.interleaved;l===null?(r.next=r,dp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=r0(n,e,r,i),t!==null&&(r=nn(),pi(t,n,i,r),w0(t,e,i))}}function E0(n){var e=n.alternate;return n===gt||e!==null&&e===gt}function T0(n,e){xa=Fu=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function w0(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Qh(n,t)}}var Ou={readContext:Jn,useCallback:Xt,useContext:Xt,useEffect:Xt,useImperativeHandle:Xt,useInsertionEffect:Xt,useLayoutEffect:Xt,useMemo:Xt,useReducer:Xt,useRef:Xt,useState:Xt,useDebugValue:Xt,useDeferredValue:Xt,useTransition:Xt,useMutableSource:Xt,useSyncExternalStore:Xt,useId:Xt,unstable_isNewReconciler:!1},OM={readContext:Jn,useCallback:function(n,e){return gi().memoizedState=[n,e===void 0?null:e],n},useContext:Jn,useEffect:i_,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,ru(4194308,4,g0.bind(null,e,n),t)},useLayoutEffect:function(n,e){return ru(4194308,4,n,e)},useInsertionEffect:function(n,e){return ru(4,2,n,e)},useMemo:function(n,e){var t=gi();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=gi();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=UM.bind(null,gt,n),[i.memoizedState,n]},useRef:function(n){var e=gi();return n={current:n},e.memoizedState=n},useState:n_,useDebugValue:Sp,useDeferredValue:function(n){return gi().memoizedState=n},useTransition:function(){var n=n_(!1),e=n[0];return n=NM.bind(null,n[1]),gi().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=gt,r=gi();if(ft){if(t===void 0)throw Error(ie(407));t=t()}else{if(t=e(),kt===null)throw Error(ie(349));ys&30||u0(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,i_(f0.bind(null,i,s,n),[n]),i.flags|=2048,Va(9,c0.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=gi(),e=kt.identifierPrefix;if(ft){var t=Hi,i=Vi;t=(i&~(1<<32-hi(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=za++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=IM++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},kM={readContext:Jn,useCallback:x0,useContext:Jn,useEffect:yp,useImperativeHandle:v0,useInsertionEffect:m0,useLayoutEffect:_0,useMemo:y0,useReducer:Jc,useRef:p0,useState:function(){return Jc(Ba)},useDebugValue:Sp,useDeferredValue:function(n){var e=ei();return S0(e,Dt.memoizedState,n)},useTransition:function(){var n=Jc(Ba)[0],e=ei().memoizedState;return[n,e]},useMutableSource:a0,useSyncExternalStore:l0,useId:M0,unstable_isNewReconciler:!1},zM={readContext:Jn,useCallback:x0,useContext:Jn,useEffect:yp,useImperativeHandle:v0,useInsertionEffect:m0,useLayoutEffect:_0,useMemo:y0,useReducer:ef,useRef:p0,useState:function(){return ef(Ba)},useDebugValue:Sp,useDeferredValue:function(n){var e=ei();return Dt===null?e.memoizedState=n:S0(e,Dt.memoizedState,n)},useTransition:function(){var n=ef(Ba)[0],e=ei().memoizedState;return[n,e]},useMutableSource:a0,useSyncExternalStore:l0,useId:M0,unstable_isNewReconciler:!1};function oi(n,e){if(n&&n.defaultProps){e=vt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Td(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:vt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var hc={isMounted:function(n){return(n=n._reactInternals)?As(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=nn(),r=Cr(n),s=Wi(i,r);s.payload=e,t!=null&&(s.callback=t),e=wr(n,s,r),e!==null&&(pi(e,n,r,i),nu(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=nn(),r=Cr(n),s=Wi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=wr(n,s,r),e!==null&&(pi(e,n,r,i),nu(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=nn(),i=Cr(n),r=Wi(t,i);r.tag=2,e!=null&&(r.callback=e),e=wr(n,r,i),e!==null&&(pi(e,n,i,t),nu(e,n,i))}};function r_(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ia(t,i)||!Ia(r,s):!0}function A0(n,e,t){var i=!1,r=Nr,s=e.contextType;return typeof s=="object"&&s!==null?s=Jn(s):(r=mn(e)?vs:Jt.current,i=e.contextTypes,s=(i=i!=null)?Mo(n,r):Nr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=hc,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function s_(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&hc.enqueueReplaceState(e,e.state,null)}function wd(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},hp(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Jn(s):(s=mn(e)?vs:Jt.current,r.context=Mo(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Td(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&hc.enqueueReplaceState(r,r.state,null),Nu(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Ao(n,e){try{var t="",i=e;do t+=hS(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function tf(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Ad(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var BM=typeof WeakMap=="function"?WeakMap:Map;function C0(n,e,t){t=Wi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){zu||(zu=!0,Fd=i),Ad(n,e)},t}function R0(n,e,t){t=Wi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Ad(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Ad(n,e),typeof i!="function"&&(Ar===null?Ar=new Set([this]):Ar.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function o_(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new BM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=eE.bind(null,n,e,t),e.then(n,n))}function a_(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function l_(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Wi(-1,1),e.tag=2,wr(t,e,1))),t.lanes|=1),n)}var VM=er.ReactCurrentOwner,hn=!1;function tn(n,e,t,i){e.child=n===null?i0(e,null,t,i):To(e,n.child,t,i)}function u_(n,e,t,i,r){t=t.render;var s=e.ref;return ho(e,r),i=vp(n,e,t,i,s,r),t=xp(),n!==null&&!hn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,qi(n,e,r)):(ft&&t&&op(e),e.flags|=1,tn(n,e,i,r),e.child)}function c_(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Pp(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,P0(n,e,s,i,r)):(n=lu(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Ia,t(o,i)&&n.ref===e.ref)return qi(n,e,r)}return e.flags|=1,n=Rr(s,i),n.ref=e.ref,n.return=e,e.child=n}function P0(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Ia(s,i)&&n.ref===e.ref)if(hn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(hn=!0);else return e.lanes=n.lanes,qi(n,e,r)}return Cd(n,e,t,i,r)}function b0(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},st(ro,Rn),Rn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,st(ro,Rn),Rn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,st(ro,Rn),Rn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,st(ro,Rn),Rn|=i;return tn(n,e,r,t),e.child}function L0(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Cd(n,e,t,i,r){var s=mn(t)?vs:Jt.current;return s=Mo(e,s),ho(e,r),t=vp(n,e,t,i,s,r),i=xp(),n!==null&&!hn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,qi(n,e,r)):(ft&&i&&op(e),e.flags|=1,tn(n,e,t,r),e.child)}function f_(n,e,t,i,r){if(mn(t)){var s=!0;Pu(e)}else s=!1;if(ho(e,r),e.stateNode===null)su(n,e),A0(e,t,i),wd(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Jn(u):(u=mn(t)?vs:Jt.current,u=Mo(e,u));var c=t.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&s_(e,o,i,u),cr=!1;var h=e.memoizedState;o.state=h,Nu(e,i,o,r),l=e.memoizedState,a!==i||h!==l||pn.current||cr?(typeof c=="function"&&(Td(e,t,c,i),l=e.memoizedState),(a=cr||r_(e,t,a,i,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,s0(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:oi(e.type,a),o.props=u,f=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Jn(l):(l=mn(t)?vs:Jt.current,l=Mo(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&s_(e,o,i,l),cr=!1,h=e.memoizedState,o.state=h,Nu(e,i,o,r);var g=e.memoizedState;a!==f||h!==g||pn.current||cr?(typeof p=="function"&&(Td(e,t,p,i),g=e.memoizedState),(u=cr||r_(e,t,u,i,h,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return Rd(n,e,t,i,s,r)}function Rd(n,e,t,i,r,s){L0(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Km(e,t,!1),qi(n,e,s);i=e.stateNode,VM.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=To(e,n.child,null,s),e.child=To(e,null,a,s)):tn(n,e,a,s),e.memoizedState=i.state,r&&Km(e,t,!0),e.child}function D0(n){var e=n.stateNode;e.pendingContext?qm(n,e.pendingContext,e.pendingContext!==e.context):e.context&&qm(n,e.context,!1),pp(n,e.containerInfo)}function d_(n,e,t,i,r){return Eo(),lp(r),e.flags|=256,tn(n,e,t,i),e.child}var Pd={dehydrated:null,treeContext:null,retryLane:0};function bd(n){return{baseLanes:n,cachePool:null,transitions:null}}function I0(n,e,t){var i=e.pendingProps,r=pt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),st(pt,r&1),n===null)return Md(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=_c(o,i,0,null),n=ds(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=bd(t),e.memoizedState=Pd,n):Mp(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return HM(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Rr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Rr(a,s):(s=ds(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?bd(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Pd,i}return s=n.child,n=s.sibling,i=Rr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Mp(n,e){return e=_c({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function wl(n,e,t,i){return i!==null&&lp(i),To(e,n.child,null,t),n=Mp(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function HM(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=tf(Error(ie(422))),wl(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=_c({mode:"visible",children:i.children},r,0,null),s=ds(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&To(e,n.child,null,o),e.child.memoizedState=bd(o),e.memoizedState=Pd,s);if(!(e.mode&1))return wl(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ie(419)),i=tf(s,i,void 0),wl(n,e,o,i)}if(a=(o&n.childLanes)!==0,hn||a){if(i=kt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,$i(n,r),pi(i,n,r,-1))}return Rp(),i=tf(Error(ie(421))),wl(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=tE.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Ln=Tr(r.nextSibling),Nn=e,ft=!0,li=null,n!==null&&(Xn[jn++]=Vi,Xn[jn++]=Hi,Xn[jn++]=xs,Vi=n.id,Hi=n.overflow,xs=e),e=Mp(e,i.children),e.flags|=4096,e)}function h_(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Ed(n.return,e,t)}function nf(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function N0(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(tn(n,e,i.children,t),i=pt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&h_(n,t,e);else if(n.tag===19)h_(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(st(pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Uu(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),nf(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Uu(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}nf(e,!0,t,null,s);break;case"together":nf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function su(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function qi(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Ss|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ie(153));if(e.child!==null){for(n=e.child,t=Rr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Rr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function GM(n,e,t){switch(e.tag){case 3:D0(e),Eo();break;case 5:o0(e);break;case 1:mn(e.type)&&Pu(e);break;case 4:pp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;st(Du,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(st(pt,pt.current&1),e.flags|=128,null):t&e.child.childLanes?I0(n,e,t):(st(pt,pt.current&1),n=qi(n,e,t),n!==null?n.sibling:null);st(pt,pt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return N0(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),st(pt,pt.current),i)break;return null;case 22:case 23:return e.lanes=0,b0(n,e,t)}return qi(n,e,t)}var U0,Ld,F0,O0;U0=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Ld=function(){};F0=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,ls(wi.current);var s=null;switch(t){case"input":r=Jf(n,r),i=Jf(n,i),s=[];break;case"select":r=vt({},r,{value:void 0}),i=vt({},i,{value:void 0}),s=[];break;case"textarea":r=nd(n,r),i=nd(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Cu)}rd(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Aa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Aa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&lt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};O0=function(n,e,t,i){t!==i&&(e.flags|=4)};function Zo(n,e){if(!ft)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function jt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function WM(n,e,t){var i=e.pendingProps;switch(ap(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(e),null;case 1:return mn(e.type)&&Ru(),jt(e),null;case 3:return i=e.stateNode,wo(),ct(pn),ct(Jt),_p(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(El(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,li!==null&&(zd(li),li=null))),Ld(n,e),jt(e),null;case 5:mp(e);var r=ls(ka.current);if(t=e.type,n!==null&&e.stateNode!=null)F0(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return jt(e),null}if(n=ls(wi.current),El(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Si]=e,i[Fa]=s,n=(e.mode&1)!==0,t){case"dialog":lt("cancel",i),lt("close",i);break;case"iframe":case"object":case"embed":lt("load",i);break;case"video":case"audio":for(r=0;r<ua.length;r++)lt(ua[r],i);break;case"source":lt("error",i);break;case"img":case"image":case"link":lt("error",i),lt("load",i);break;case"details":lt("toggle",i);break;case"input":Mm(i,s),lt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},lt("invalid",i);break;case"textarea":Tm(i,s),lt("invalid",i)}rd(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ml(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ml(i.textContent,a,n),r=["children",""+a]):Aa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&lt("scroll",i)}switch(t){case"input":pl(i),Em(i,s,!0);break;case"textarea":pl(i),wm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Cu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=fv(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Si]=e,n[Fa]=i,U0(n,e,!1,!1),e.stateNode=n;e:{switch(o=sd(t,i),t){case"dialog":lt("cancel",n),lt("close",n),r=i;break;case"iframe":case"object":case"embed":lt("load",n),r=i;break;case"video":case"audio":for(r=0;r<ua.length;r++)lt(ua[r],n);r=i;break;case"source":lt("error",n),r=i;break;case"img":case"image":case"link":lt("error",n),lt("load",n),r=i;break;case"details":lt("toggle",n),r=i;break;case"input":Mm(n,i),r=Jf(n,i),lt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=vt({},i,{value:void 0}),lt("invalid",n);break;case"textarea":Tm(n,i),r=nd(n,i),lt("invalid",n);break;default:r=i}rd(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?pv(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&dv(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Ca(n,l):typeof l=="number"&&Ca(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Aa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&lt("scroll",n):l!=null&&jh(n,s,l,o))}switch(t){case"input":pl(n),Em(n,i,!1);break;case"textarea":pl(n),wm(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Ir(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?lo(n,!!i.multiple,s,!1):i.defaultValue!=null&&lo(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Cu)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return jt(e),null;case 6:if(n&&e.stateNode!=null)O0(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(t=ls(ka.current),ls(wi.current),El(e)){if(i=e.stateNode,t=e.memoizedProps,i[Si]=e,(s=i.nodeValue!==t)&&(n=Nn,n!==null))switch(n.tag){case 3:Ml(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ml(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Si]=e,e.stateNode=i}return jt(e),null;case 13:if(ct(pt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(ft&&Ln!==null&&e.mode&1&&!(e.flags&128))t0(),Eo(),e.flags|=98560,s=!1;else if(s=El(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[Si]=e}else Eo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;jt(e),s=!1}else li!==null&&(zd(li),li=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||pt.current&1?It===0&&(It=3):Rp())),e.updateQueue!==null&&(e.flags|=4),jt(e),null);case 4:return wo(),Ld(n,e),n===null&&Na(e.stateNode.containerInfo),jt(e),null;case 10:return fp(e.type._context),jt(e),null;case 17:return mn(e.type)&&Ru(),jt(e),null;case 19:if(ct(pt),s=e.memoizedState,s===null)return jt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Zo(s,!1);else{if(It!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Uu(n),o!==null){for(e.flags|=128,Zo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return st(pt,pt.current&1|2),e.child}n=n.sibling}s.tail!==null&&Tt()>Co&&(e.flags|=128,i=!0,Zo(s,!1),e.lanes=4194304)}else{if(!i)if(n=Uu(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Zo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ft)return jt(e),null}else 2*Tt()-s.renderingStartTime>Co&&t!==1073741824&&(e.flags|=128,i=!0,Zo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Tt(),e.sibling=null,t=pt.current,st(pt,i?t&1|2:t&1),e):(jt(e),null);case 22:case 23:return Cp(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Rn&1073741824&&(jt(e),e.subtreeFlags&6&&(e.flags|=8192)):jt(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function XM(n,e){switch(ap(e),e.tag){case 1:return mn(e.type)&&Ru(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return wo(),ct(pn),ct(Jt),_p(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return mp(e),null;case 13:if(ct(pt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));Eo()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return ct(pt),null;case 4:return wo(),null;case 10:return fp(e.type._context),null;case 22:case 23:return Cp(),null;case 24:return null;default:return null}}var Al=!1,qt=!1,jM=typeof WeakSet=="function"?WeakSet:Set,me=null;function io(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){yt(n,e,i)}else t.current=null}function Dd(n,e,t){try{t()}catch(i){yt(n,e,i)}}var p_=!1;function YM(n,e){if(md=Tu,n=Hv(),sp(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=n,h=null;t:for(;;){for(var p;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===n)break t;if(h===t&&++u===r&&(a=o),h===s&&++c===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(_d={focusedElem:n,selectionRange:t},Tu=!1,me=e;me!==null;)if(e=me,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,me=n;else for(;me!==null;){e=me;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,m=g.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?_:oi(e.type,_),m);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(S){yt(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}return g=p_,p_=!1,g}function ya(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Dd(e,t,s)}r=r.next}while(r!==i)}}function pc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Id(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function k0(n){var e=n.alternate;e!==null&&(n.alternate=null,k0(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Si],delete e[Fa],delete e[xd],delete e[PM],delete e[bM])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function z0(n){return n.tag===5||n.tag===3||n.tag===4}function m_(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||z0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Nd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Cu));else if(i!==4&&(n=n.child,n!==null))for(Nd(n,e,t),n=n.sibling;n!==null;)Nd(n,e,t),n=n.sibling}function Ud(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Ud(n,e,t),n=n.sibling;n!==null;)Ud(n,e,t),n=n.sibling}var Vt=null,ai=!1;function nr(n,e,t){for(t=t.child;t!==null;)B0(n,e,t),t=t.sibling}function B0(n,e,t){if(Ti&&typeof Ti.onCommitFiberUnmount=="function")try{Ti.onCommitFiberUnmount(oc,t)}catch{}switch(t.tag){case 5:qt||io(t,e);case 6:var i=Vt,r=ai;Vt=null,nr(n,e,t),Vt=i,ai=r,Vt!==null&&(ai?(n=Vt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Vt.removeChild(t.stateNode));break;case 18:Vt!==null&&(ai?(n=Vt,t=t.stateNode,n.nodeType===8?qc(n.parentNode,t):n.nodeType===1&&qc(n,t),La(n)):qc(Vt,t.stateNode));break;case 4:i=Vt,r=ai,Vt=t.stateNode.containerInfo,ai=!0,nr(n,e,t),Vt=i,ai=r;break;case 0:case 11:case 14:case 15:if(!qt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Dd(t,e,o),r=r.next}while(r!==i)}nr(n,e,t);break;case 1:if(!qt&&(io(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){yt(t,e,a)}nr(n,e,t);break;case 21:nr(n,e,t);break;case 22:t.mode&1?(qt=(i=qt)||t.memoizedState!==null,nr(n,e,t),qt=i):nr(n,e,t);break;default:nr(n,e,t)}}function __(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new jM),e.forEach(function(i){var r=nE.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function ni(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Vt=a.stateNode,ai=!1;break e;case 3:Vt=a.stateNode.containerInfo,ai=!0;break e;case 4:Vt=a.stateNode.containerInfo,ai=!0;break e}a=a.return}if(Vt===null)throw Error(ie(160));B0(s,o,r),Vt=null,ai=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){yt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)V0(e,n),e=e.sibling}function V0(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ni(e,n),_i(n),i&4){try{ya(3,n,n.return),pc(3,n)}catch(_){yt(n,n.return,_)}try{ya(5,n,n.return)}catch(_){yt(n,n.return,_)}}break;case 1:ni(e,n),_i(n),i&512&&t!==null&&io(t,t.return);break;case 5:if(ni(e,n),_i(n),i&512&&t!==null&&io(t,t.return),n.flags&32){var r=n.stateNode;try{Ca(r,"")}catch(_){yt(n,n.return,_)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&uv(r,s),sd(a,o);var u=sd(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?pv(r,f):c==="dangerouslySetInnerHTML"?dv(r,f):c==="children"?Ca(r,f):jh(r,c,f,u)}switch(a){case"input":ed(r,s);break;case"textarea":cv(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?lo(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?lo(r,!!s.multiple,s.defaultValue,!0):lo(r,!!s.multiple,s.multiple?[]:"",!1))}r[Fa]=s}catch(_){yt(n,n.return,_)}}break;case 6:if(ni(e,n),_i(n),i&4){if(n.stateNode===null)throw Error(ie(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(_){yt(n,n.return,_)}}break;case 3:if(ni(e,n),_i(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{La(e.containerInfo)}catch(_){yt(n,n.return,_)}break;case 4:ni(e,n),_i(n);break;case 13:ni(e,n),_i(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(wp=Tt())),i&4&&__(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(qt=(u=qt)||c,ni(e,n),qt=u):ni(e,n),_i(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(me=n,c=n.child;c!==null;){for(f=me=c;me!==null;){switch(h=me,p=h.child,h.tag){case 0:case 11:case 14:case 15:ya(4,h,h.return);break;case 1:io(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){yt(i,t,_)}}break;case 5:io(h,h.return);break;case 22:if(h.memoizedState!==null){v_(f);continue}}p!==null?(p.return=h,me=p):v_(f)}c=c.sibling}e:for(c=null,f=n;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=hv("display",o))}catch(_){yt(n,n.return,_)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(_){yt(n,n.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ni(e,n),_i(n),i&4&&__(n);break;case 21:break;default:ni(e,n),_i(n)}}function _i(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(z0(t)){var i=t;break e}t=t.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ca(r,""),i.flags&=-33);var s=m_(n);Ud(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=m_(n);Nd(n,a,o);break;default:throw Error(ie(161))}}catch(l){yt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function $M(n,e,t){me=n,H0(n)}function H0(n,e,t){for(var i=(n.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Al;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||qt;a=Al;var u=qt;if(Al=o,(qt=l)&&!u)for(me=r;me!==null;)o=me,l=o.child,o.tag===22&&o.memoizedState!==null?x_(r):l!==null?(l.return=o,me=l):x_(r);for(;s!==null;)me=s,H0(s),s=s.sibling;me=r,Al=a,qt=u}g_(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,me=s):g_(n)}}function g_(n){for(;me!==null;){var e=me;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:qt||pc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!qt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:oi(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&t_(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}t_(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&La(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}qt||e.flags&512&&Id(e)}catch(h){yt(e,e.return,h)}}if(e===n){me=null;break}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}}function v_(n){for(;me!==null;){var e=me;if(e===n){me=null;break}var t=e.sibling;if(t!==null){t.return=e.return,me=t;break}me=e.return}}function x_(n){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{pc(4,e)}catch(l){yt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){yt(e,r,l)}}var s=e.return;try{Id(e)}catch(l){yt(e,s,l)}break;case 5:var o=e.return;try{Id(e)}catch(l){yt(e,o,l)}}}catch(l){yt(e,e.return,l)}if(e===n){me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,me=a;break}me=e.return}}var qM=Math.ceil,ku=er.ReactCurrentDispatcher,Ep=er.ReactCurrentOwner,Qn=er.ReactCurrentBatchConfig,We=0,kt=null,bt=null,Ht=0,Rn=0,ro=Br(0),It=0,Ha=null,Ss=0,mc=0,Tp=0,Sa=null,cn=null,wp=0,Co=1/0,Fi=null,zu=!1,Fd=null,Ar=null,Cl=!1,_r=null,Bu=0,Ma=0,Od=null,ou=-1,au=0;function nn(){return We&6?Tt():ou!==-1?ou:ou=Tt()}function Cr(n){return n.mode&1?We&2&&Ht!==0?Ht&-Ht:DM.transition!==null?(au===0&&(au=Av()),au):(n=Je,n!==0||(n=window.event,n=n===void 0?16:Iv(n.type)),n):1}function pi(n,e,t,i){if(50<Ma)throw Ma=0,Od=null,Error(ie(185));el(n,t,i),(!(We&2)||n!==kt)&&(n===kt&&(!(We&2)&&(mc|=t),It===4&&dr(n,Ht)),_n(n,i),t===1&&We===0&&!(e.mode&1)&&(Co=Tt()+500,fc&&Vr()))}function _n(n,e){var t=n.callbackNode;DS(n,e);var i=Eu(n,n===kt?Ht:0);if(i===0)t!==null&&Rm(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Rm(t),e===1)n.tag===0?LM(y_.bind(null,n)):Qv(y_.bind(null,n)),CM(function(){!(We&6)&&Vr()}),t=null;else{switch(Cv(i)){case 1:t=Zh;break;case 4:t=Tv;break;case 16:t=Mu;break;case 536870912:t=wv;break;default:t=Mu}t=K0(t,G0.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function G0(n,e){if(ou=-1,au=0,We&6)throw Error(ie(327));var t=n.callbackNode;if(po()&&n.callbackNode!==t)return null;var i=Eu(n,n===kt?Ht:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Vu(n,i);else{e=i;var r=We;We|=2;var s=X0();(kt!==n||Ht!==e)&&(Fi=null,Co=Tt()+500,fs(n,e));do try{QM();break}catch(a){W0(n,a)}while(!0);cp(),ku.current=s,We=r,bt!==null?e=0:(kt=null,Ht=0,e=It)}if(e!==0){if(e===2&&(r=cd(n),r!==0&&(i=r,e=kd(n,r))),e===1)throw t=Ha,fs(n,0),dr(n,i),_n(n,Tt()),t;if(e===6)dr(n,i);else{if(r=n.current.alternate,!(i&30)&&!KM(r)&&(e=Vu(n,i),e===2&&(s=cd(n),s!==0&&(i=s,e=kd(n,s))),e===1))throw t=Ha,fs(n,0),dr(n,i),_n(n,Tt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:es(n,cn,Fi);break;case 3:if(dr(n,i),(i&130023424)===i&&(e=wp+500-Tt(),10<e)){if(Eu(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){nn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=vd(es.bind(null,n,cn,Fi),e);break}es(n,cn,Fi);break;case 4:if(dr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-hi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Tt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*qM(i/1960))-i,10<i){n.timeoutHandle=vd(es.bind(null,n,cn,Fi),i);break}es(n,cn,Fi);break;case 5:es(n,cn,Fi);break;default:throw Error(ie(329))}}}return _n(n,Tt()),n.callbackNode===t?G0.bind(null,n):null}function kd(n,e){var t=Sa;return n.current.memoizedState.isDehydrated&&(fs(n,e).flags|=256),n=Vu(n,e),n!==2&&(e=cn,cn=t,e!==null&&zd(e)),n}function zd(n){cn===null?cn=n:cn.push.apply(cn,n)}function KM(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!mi(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function dr(n,e){for(e&=~Tp,e&=~mc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-hi(e),i=1<<t;n[t]=-1,e&=~i}}function y_(n){if(We&6)throw Error(ie(327));po();var e=Eu(n,0);if(!(e&1))return _n(n,Tt()),null;var t=Vu(n,e);if(n.tag!==0&&t===2){var i=cd(n);i!==0&&(e=i,t=kd(n,i))}if(t===1)throw t=Ha,fs(n,0),dr(n,e),_n(n,Tt()),t;if(t===6)throw Error(ie(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,es(n,cn,Fi),_n(n,Tt()),null}function Ap(n,e){var t=We;We|=1;try{return n(e)}finally{We=t,We===0&&(Co=Tt()+500,fc&&Vr())}}function Ms(n){_r!==null&&_r.tag===0&&!(We&6)&&po();var e=We;We|=1;var t=Qn.transition,i=Je;try{if(Qn.transition=null,Je=1,n)return n()}finally{Je=i,Qn.transition=t,We=e,!(We&6)&&Vr()}}function Cp(){Rn=ro.current,ct(ro)}function fs(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,AM(t)),bt!==null)for(t=bt.return;t!==null;){var i=t;switch(ap(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ru();break;case 3:wo(),ct(pn),ct(Jt),_p();break;case 5:mp(i);break;case 4:wo();break;case 13:ct(pt);break;case 19:ct(pt);break;case 10:fp(i.type._context);break;case 22:case 23:Cp()}t=t.return}if(kt=n,bt=n=Rr(n.current,null),Ht=Rn=e,It=0,Ha=null,Tp=mc=Ss=0,cn=Sa=null,as!==null){for(e=0;e<as.length;e++)if(t=as[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}as=null}return n}function W0(n,e){do{var t=bt;try{if(cp(),iu.current=Ou,Fu){for(var i=gt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Fu=!1}if(ys=0,Ot=Dt=gt=null,xa=!1,za=0,Ep.current=null,t===null||t.return===null){It=1,Ha=e,bt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Ht,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=a_(o);if(p!==null){p.flags&=-257,l_(p,o,a,s,e),p.mode&1&&o_(s,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if(!(e&1)){o_(s,u,e),Rp();break e}l=Error(ie(426))}}else if(ft&&a.mode&1){var m=a_(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),l_(m,o,a,s,e),lp(Ao(l,a));break e}}s=l=Ao(l,a),It!==4&&(It=2),Sa===null?Sa=[s]:Sa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=C0(s,l,e);e_(s,d);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Ar===null||!Ar.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=R0(s,a,e);e_(s,S);break e}}s=s.return}while(s!==null)}Y0(t)}catch(w){e=w,bt===t&&t!==null&&(bt=t=t.return);continue}break}while(!0)}function X0(){var n=ku.current;return ku.current=Ou,n===null?Ou:n}function Rp(){(It===0||It===3||It===2)&&(It=4),kt===null||!(Ss&268435455)&&!(mc&268435455)||dr(kt,Ht)}function Vu(n,e){var t=We;We|=2;var i=X0();(kt!==n||Ht!==e)&&(Fi=null,fs(n,e));do try{ZM();break}catch(r){W0(n,r)}while(!0);if(cp(),We=t,ku.current=i,bt!==null)throw Error(ie(261));return kt=null,Ht=0,It}function ZM(){for(;bt!==null;)j0(bt)}function QM(){for(;bt!==null&&!ES();)j0(bt)}function j0(n){var e=q0(n.alternate,n,Rn);n.memoizedProps=n.pendingProps,e===null?Y0(n):bt=e,Ep.current=null}function Y0(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=XM(t,e),t!==null){t.flags&=32767,bt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{It=6,bt=null;return}}else if(t=WM(t,e,Rn),t!==null){bt=t;return}if(e=e.sibling,e!==null){bt=e;return}bt=e=n}while(e!==null);It===0&&(It=5)}function es(n,e,t){var i=Je,r=Qn.transition;try{Qn.transition=null,Je=1,JM(n,e,t,i)}finally{Qn.transition=r,Je=i}return null}function JM(n,e,t,i){do po();while(_r!==null);if(We&6)throw Error(ie(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ie(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(IS(n,s),n===kt&&(bt=kt=null,Ht=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Cl||(Cl=!0,K0(Mu,function(){return po(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Qn.transition,Qn.transition=null;var o=Je;Je=1;var a=We;We|=4,Ep.current=null,YM(n,t),V0(t,n),xM(_d),Tu=!!md,_d=md=null,n.current=t,$M(t),TS(),We=a,Je=o,Qn.transition=s}else n.current=t;if(Cl&&(Cl=!1,_r=n,Bu=r),s=n.pendingLanes,s===0&&(Ar=null),CS(t.stateNode),_n(n,Tt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(zu)throw zu=!1,n=Fd,Fd=null,n;return Bu&1&&n.tag!==0&&po(),s=n.pendingLanes,s&1?n===Od?Ma++:(Ma=0,Od=n):Ma=0,Vr(),null}function po(){if(_r!==null){var n=Cv(Bu),e=Qn.transition,t=Je;try{if(Qn.transition=null,Je=16>n?16:n,_r===null)var i=!1;else{if(n=_r,_r=null,Bu=0,We&6)throw Error(ie(331));var r=We;for(We|=4,me=n.current;me!==null;){var s=me,o=s.child;if(me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(me=u;me!==null;){var c=me;switch(c.tag){case 0:case 11:case 15:ya(8,c,s)}var f=c.child;if(f!==null)f.return=c,me=f;else for(;me!==null;){c=me;var h=c.sibling,p=c.return;if(k0(c),c===u){me=null;break}if(h!==null){h.return=p,me=h;break}me=p}}}var g=s.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,me=o;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ya(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,me=d;break e}me=s.return}}var v=n.current;for(me=v;me!==null;){o=me;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,me=x;else e:for(o=v;me!==null;){if(a=me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:pc(9,a)}}catch(w){yt(a,a.return,w)}if(a===o){me=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,me=S;break e}me=a.return}}if(We=r,Vr(),Ti&&typeof Ti.onPostCommitFiberRoot=="function")try{Ti.onPostCommitFiberRoot(oc,n)}catch{}i=!0}return i}finally{Je=t,Qn.transition=e}}return!1}function S_(n,e,t){e=Ao(t,e),e=C0(n,e,1),n=wr(n,e,1),e=nn(),n!==null&&(el(n,1,e),_n(n,e))}function yt(n,e,t){if(n.tag===3)S_(n,n,t);else for(;e!==null;){if(e.tag===3){S_(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ar===null||!Ar.has(i))){n=Ao(t,n),n=R0(e,n,1),e=wr(e,n,1),n=nn(),e!==null&&(el(e,1,n),_n(e,n));break}}e=e.return}}function eE(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=nn(),n.pingedLanes|=n.suspendedLanes&t,kt===n&&(Ht&t)===t&&(It===4||It===3&&(Ht&130023424)===Ht&&500>Tt()-wp?fs(n,0):Tp|=t),_n(n,e)}function $0(n,e){e===0&&(n.mode&1?(e=gl,gl<<=1,!(gl&130023424)&&(gl=4194304)):e=1);var t=nn();n=$i(n,e),n!==null&&(el(n,e,t),_n(n,t))}function tE(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),$0(n,t)}function nE(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),$0(n,t)}var q0;q0=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||pn.current)hn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return hn=!1,GM(n,e,t);hn=!!(n.flags&131072)}else hn=!1,ft&&e.flags&1048576&&Jv(e,Lu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;su(n,e),n=e.pendingProps;var r=Mo(e,Jt.current);ho(e,t),r=vp(null,e,i,n,r,t);var s=xp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mn(i)?(s=!0,Pu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,hp(e),r.updater=hc,e.stateNode=r,r._reactInternals=e,wd(e,i,n,t),e=Rd(null,e,i,!0,s,t)):(e.tag=0,ft&&s&&op(e),tn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(su(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=rE(i),n=oi(i,n),r){case 0:e=Cd(null,e,i,n,t);break e;case 1:e=f_(null,e,i,n,t);break e;case 11:e=u_(null,e,i,n,t);break e;case 14:e=c_(null,e,i,oi(i.type,n),t);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),Cd(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),f_(n,e,i,r,t);case 3:e:{if(D0(e),n===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,s0(n,e),Nu(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ao(Error(ie(423)),e),e=d_(n,e,i,t,r);break e}else if(i!==r){r=Ao(Error(ie(424)),e),e=d_(n,e,i,t,r);break e}else for(Ln=Tr(e.stateNode.containerInfo.firstChild),Nn=e,ft=!0,li=null,t=i0(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Eo(),i===r){e=qi(n,e,t);break e}tn(n,e,i,t)}e=e.child}return e;case 5:return o0(e),n===null&&Md(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,gd(i,r)?o=null:s!==null&&gd(i,s)&&(e.flags|=32),L0(n,e),tn(n,e,o,t),e.child;case 6:return n===null&&Md(e),null;case 13:return I0(n,e,t);case 4:return pp(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=To(e,null,i,t):tn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),u_(n,e,i,r,t);case 7:return tn(n,e,e.pendingProps,t),e.child;case 8:return tn(n,e,e.pendingProps.children,t),e.child;case 12:return tn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,st(Du,i._currentValue),i._currentValue=o,s!==null)if(mi(s.value,o)){if(s.children===r.children&&!pn.current){e=qi(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Wi(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Ed(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ie(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Ed(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}tn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ho(e,t),r=Jn(r),i=i(r),e.flags|=1,tn(n,e,i,t),e.child;case 14:return i=e.type,r=oi(i,e.pendingProps),r=oi(i.type,r),c_(n,e,i,r,t);case 15:return P0(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),su(n,e),e.tag=1,mn(i)?(n=!0,Pu(e)):n=!1,ho(e,t),A0(e,i,r),wd(e,i,r,t),Rd(null,e,i,!0,n,t);case 19:return N0(n,e,t);case 22:return b0(n,e,t)}throw Error(ie(156,e.tag))};function K0(n,e){return Ev(n,e)}function iE(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(n,e,t,i){return new iE(n,e,t,i)}function Pp(n){return n=n.prototype,!(!n||!n.isReactComponent)}function rE(n){if(typeof n=="function")return Pp(n)?1:0;if(n!=null){if(n=n.$$typeof,n===$h)return 11;if(n===qh)return 14}return 2}function Rr(n,e){var t=n.alternate;return t===null?(t=$n(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function lu(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Pp(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case $s:return ds(t.children,r,s,e);case Yh:o=8,r|=8;break;case qf:return n=$n(12,t,e,r|2),n.elementType=qf,n.lanes=s,n;case Kf:return n=$n(13,t,e,r),n.elementType=Kf,n.lanes=s,n;case Zf:return n=$n(19,t,e,r),n.elementType=Zf,n.lanes=s,n;case ov:return _c(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case rv:o=10;break e;case sv:o=9;break e;case $h:o=11;break e;case qh:o=14;break e;case ur:o=16,i=null;break e}throw Error(ie(130,n==null?n:typeof n,""))}return e=$n(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function ds(n,e,t,i){return n=$n(7,n,i,e),n.lanes=t,n}function _c(n,e,t,i){return n=$n(22,n,i,e),n.elementType=ov,n.lanes=t,n.stateNode={isHidden:!1},n}function rf(n,e,t){return n=$n(6,n,null,e),n.lanes=t,n}function sf(n,e,t){return e=$n(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function sE(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kc(0),this.expirationTimes=kc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function bp(n,e,t,i,r,s,o,a,l){return n=new sE(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=$n(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},hp(s),n}function oE(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ys,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function Z0(n){if(!n)return Nr;n=n._reactInternals;e:{if(As(n)!==n||n.tag!==1)throw Error(ie(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(n.tag===1){var t=n.type;if(mn(t))return Zv(n,t,e)}return e}function Q0(n,e,t,i,r,s,o,a,l){return n=bp(t,i,!0,n,r,s,o,a,l),n.context=Z0(null),t=n.current,i=nn(),r=Cr(t),s=Wi(i,r),s.callback=e??null,wr(t,s,r),n.current.lanes=r,el(n,r,i),_n(n,i),n}function gc(n,e,t,i){var r=e.current,s=nn(),o=Cr(r);return t=Z0(t),e.context===null?e.context=t:e.pendingContext=t,e=Wi(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=wr(r,e,o),n!==null&&(pi(n,r,o,s),nu(n,r,o)),o}function Hu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function M_(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Lp(n,e){M_(n,e),(n=n.alternate)&&M_(n,e)}function aE(){return null}var J0=typeof reportError=="function"?reportError:function(n){console.error(n)};function Dp(n){this._internalRoot=n}vc.prototype.render=Dp.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ie(409));gc(n,e,null,null)};vc.prototype.unmount=Dp.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Ms(function(){gc(null,n,null,null)}),e[Yi]=null}};function vc(n){this._internalRoot=n}vc.prototype.unstable_scheduleHydration=function(n){if(n){var e=bv();n={blockedOn:null,target:n,priority:e};for(var t=0;t<fr.length&&e!==0&&e<fr[t].priority;t++);fr.splice(t,0,n),t===0&&Dv(n)}};function Ip(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function xc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function E_(){}function lE(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Hu(o);s.call(u)}}var o=Q0(e,i,n,0,null,!1,!1,"",E_);return n._reactRootContainer=o,n[Yi]=o.current,Na(n.nodeType===8?n.parentNode:n),Ms(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Hu(l);a.call(u)}}var l=bp(n,0,!1,null,null,!1,!1,"",E_);return n._reactRootContainer=l,n[Yi]=l.current,Na(n.nodeType===8?n.parentNode:n),Ms(function(){gc(e,l,t,i)}),l}function yc(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Hu(o);a.call(l)}}gc(e,o,n,r)}else o=lE(t,e,n,r,i);return Hu(o)}Rv=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=la(e.pendingLanes);t!==0&&(Qh(e,t|1),_n(e,Tt()),!(We&6)&&(Co=Tt()+500,Vr()))}break;case 13:Ms(function(){var i=$i(n,1);if(i!==null){var r=nn();pi(i,n,1,r)}}),Lp(n,1)}};Jh=function(n){if(n.tag===13){var e=$i(n,134217728);if(e!==null){var t=nn();pi(e,n,134217728,t)}Lp(n,134217728)}};Pv=function(n){if(n.tag===13){var e=Cr(n),t=$i(n,e);if(t!==null){var i=nn();pi(t,n,e,i)}Lp(n,e)}};bv=function(){return Je};Lv=function(n,e){var t=Je;try{return Je=n,e()}finally{Je=t}};ad=function(n,e,t){switch(e){case"input":if(ed(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=cc(i);if(!r)throw Error(ie(90));lv(i),ed(i,r)}}}break;case"textarea":cv(n,t);break;case"select":e=t.value,e!=null&&lo(n,!!t.multiple,e,!1)}};gv=Ap;vv=Ms;var uE={usingClientEntryPoint:!1,Events:[nl,Qs,cc,mv,_v,Ap]},Qo={findFiberByHostInstance:os,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cE={bundleType:Qo.bundleType,version:Qo.version,rendererPackageName:Qo.rendererPackageName,rendererConfig:Qo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:er.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Sv(n),n===null?null:n.stateNode},findFiberByHostInstance:Qo.findFiberByHostInstance||aE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rl.isDisabled&&Rl.supportsFiber)try{oc=Rl.inject(cE),Ti=Rl}catch{}}Bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uE;Bn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ip(e))throw Error(ie(200));return oE(n,e,null,t)};Bn.createRoot=function(n,e){if(!Ip(n))throw Error(ie(299));var t=!1,i="",r=J0;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=bp(n,1,!1,null,null,t,!1,i,r),n[Yi]=e.current,Na(n.nodeType===8?n.parentNode:n),new Dp(e)};Bn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ie(188)):(n=Object.keys(n).join(","),Error(ie(268,n)));return n=Sv(e),n=n===null?null:n.stateNode,n};Bn.flushSync=function(n){return Ms(n)};Bn.hydrate=function(n,e,t){if(!xc(e))throw Error(ie(200));return yc(null,n,e,!0,t)};Bn.hydrateRoot=function(n,e,t){if(!Ip(n))throw Error(ie(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=J0;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=Q0(e,null,n,1,t??null,r,!1,s,o),n[Yi]=e.current,Na(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new vc(e)};Bn.render=function(n,e,t){if(!xc(e))throw Error(ie(200));return yc(null,n,e,!1,t)};Bn.unmountComponentAtNode=function(n){if(!xc(n))throw Error(ie(40));return n._reactRootContainer?(Ms(function(){yc(null,null,n,!1,function(){n._reactRootContainer=null,n[Yi]=null})}),!0):!1};Bn.unstable_batchedUpdates=Ap;Bn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!xc(t))throw Error(ie(200));if(n==null||n._reactInternals===void 0)throw Error(ie(38));return yc(n,e,t,!1,i)};Bn.version="18.3.1-next-f1338f8080-20240426";function ex(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ex)}catch(n){console.error(n)}}ex(),ev.exports=Bn;var fE=ev.exports,tx,T_=fE;tx=T_.createRoot,T_.hydrateRoot;function Oi(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function nx(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.1
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Un={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ga={duration:.5,overwrite:!1,delay:0},Np,Gt,dt,qn=1e8,tt=1/qn,Bd=Math.PI*2,dE=Bd/4,hE=0,ix=Math.sqrt,pE=Math.cos,mE=Math.sin,zt=function(e){return typeof e=="string"},St=function(e){return typeof e=="function"},Ki=function(e){return typeof e=="number"},Up=function(e){return typeof e>"u"},Ci=function(e){return typeof e=="object"},gn=function(e){return e!==!1},Fp=function(){return typeof window<"u"},Pl=function(e){return St(e)||zt(e)},rx=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Qt=Array.isArray,_E=/random\([^)]+\)/g,gE=/,\s*/g,w_=/(?:-?\.?\d|\.)+/gi,sx=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,so=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,of=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ox=/[+-]=-?[.\d]+/,vE=/[^,'"\[\]\s]+/gi,xE=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,mt,vi,Vd,Op,kn={},Gu={},ax,lx=function(e){return(Gu=Ro(e,kn))&&Mn},kp=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Wa=function(e,t){return!t&&console.warn(e)},ux=function(e,t){return e&&(kn[e]=t)&&Gu&&(Gu[e]=t)||kn},Xa=function(){return 0},yE={suppressEvents:!0,isStart:!0,kill:!1},uu={suppressEvents:!0,kill:!1},SE={suppressEvents:!0},zp={},Pr=[],Hd={},cx,Pn={},af={},A_=30,cu=[],Bp="",Vp=function(e){var t=e[0],i,r;if(Ci(t)||St(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=cu.length;r--&&!cu[r].targetTest(t););i=cu[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Dx(e[r],i)))||e.splice(r,1);return e},hs=function(e){return e._gsap||Vp(Kn(e))[0]._gsap},fx=function(e,t,i){return(i=e[t])&&St(i)?e[t]():Up(i)&&e.getAttribute&&e.getAttribute(t)||i},vn=function(e,t){return(e=e.split(",")).forEach(t)||e},Et=function(e){return Math.round(e*1e5)/1e5||0},ht=function(e){return Math.round(e*1e7)/1e7||0},mo=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},ME=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Wu=function(){var e=Pr.length,t=Pr.slice(0),i,r;for(Hd={},Pr.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Hp=function(e){return!!(e._initted||e._startAt||e.add)},dx=function(e,t,i,r){Pr.length&&!Gt&&Wu(),e.render(t,i,!!(Gt&&t<0&&Hp(e))),Pr.length&&!Gt&&Wu()},hx=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(vE).length<2?t:zt(e)?e.trim():e},px=function(e){return e},zn=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},EE=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Ro=function(e,t){for(var i in t)e[i]=t[i];return e},C_=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Ci(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Xu=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Ea=function(e){var t=e.parent||mt,i=e.keyframes?EE(Qt(e.keyframes)):zn;if(gn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},TE=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},mx=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Sc=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Ur=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ps=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},wE=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Gd=function(e,t,i,r){return e._startAt&&(Gt?e._startAt.revert(uu):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},AE=function n(e){return!e||e._ts&&n(e.parent)},R_=function(e){return e._repeat?Po(e._tTime,e=e.duration()+e._rDelay)*e:0},Po=function(e,t){var i=Math.floor(e=ht(e/t));return e&&i===e?i-1:i},ju=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Mc=function(e){return e._end=ht(e._start+(e._tDur/Math.abs(e._ts||e._rts||tt)||0))},Ec=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=ht(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Mc(e),i._dirty||ps(i,e)),e},_x=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=ju(e.rawTime(),t),(!t._dur||rl(0,t.totalDuration(),i)-t._tTime>tt)&&t.render(i,!0)),ps(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-tt}},Mi=function(e,t,i,r){return t.parent&&Ur(t),t._start=ht((Ki(i)?i:!i&&Yu(t)&&(!e._last||e._last._start>=e._time)?e._last?e._last._start:e._time:i||e!==mt?Wn(e,i,t):e._time)+t._delay),t._end=ht(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),mx(e,t,"_first","_last",e._sort?"_start":0),Yu(t)||(e._recent=t),r||_x(e,t),e._ts<0&&Ec(e,e._tTime),e},gx=function(e,t){return(kn.ScrollTrigger||kp("scrollTrigger",t))&&kn.ScrollTrigger.create(t,e)},vx=function(e,t,i,r,s){if(Wp(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Gt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&cx!==bn.frame)return Pr.push(e),e._lazy=[s,r],1},CE=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Yu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},RE=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&CE(e)&&!(!e._initted&&Yu(e))||(e._ts<0||e._dp._ts<0)&&!Yu(e))?0:1,a=e._rDelay,l=0,u,c,f;if(a&&e._repeat&&(l=rl(0,e._tDur,t),c=Po(l,a),e._yoyo&&c&1&&(o=1-o),c!==Po(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Gt||r||e._zTime===tt||!t&&e._zTime){if(!e._initted&&vx(e,t,r,i,l))return;for(f=e._zTime,e._zTime=t||(i?tt:0),i||(i=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&Gd(e,t,i,!0),e._onUpdate&&!i&&Dn(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Dn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Ur(e,1),!i&&!Gt&&(Dn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},PE=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},bo=function(e,t,i,r){var s=e._repeat,o=ht(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:ht(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Ec(e,e._tTime=e._tDur*a),e.parent&&Mc(e),i||ps(e.parent,e),e},P_=function(e){return e instanceof dn?ps(e):bo(e,e._dur)},bE={_start:0,endTime:Xa,totalDuration:Xa},Wn=function n(e,t,i){var r=e.labels,s=e._recent||bE,o=e.duration()>=qn?s.endTime(!1):e._dur,a,l,u;return zt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(Qt(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Ta=function(e,t,i){var r=Ki(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=gn(l.vars.inherit)&&l.parent;o.immediateRender=gn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Pt(t[0],o,t[s+1])},Hr=function(e,t){return e||e===0?t(e):t},rl=function(e,t,i){return i<e?e:i>t?t:i},Kt=function(e,t){return!zt(e)||!(t=xE.exec(e))?"":t[1]},LE=function(e,t,i){return Hr(i,function(r){return rl(e,t,r)})},Wd=[].slice,xx=function(e,t){return e&&Ci(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ci(e[0]))&&!e.nodeType&&e!==vi},DE=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return zt(r)&&!t||xx(r,1)?(s=i).push.apply(s,Kn(r)):i.push(r)})||i},Kn=function(e,t,i){return dt&&!t&&dt.selector?dt.selector(e):zt(e)&&!i&&(Vd||!Lo())?Wd.call((t||Op).querySelectorAll(e),0):Qt(e)?DE(e,i):xx(e)?Wd.call(e,0):e?[e]:[]},Xd=function(e){return e=Kn(e)[0]||Wa("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Kn(t,i.querySelectorAll?i:i===e?Wa("Invalid scope")||Op.createElement("div"):e)}},yx=function(e){return e.sort(function(){return .5-Math.random()})},Sx=function(e){if(St(e))return e;var t=Ci(e)?e:{each:e},i=ms(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,f=r;return zt(r)?c=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],f=r[1]),function(h,p,g){var _=(g||t).length,m=o[_],d,v,x,S,w,C,M,R,L;if(!m){if(L=t.grid==="auto"?0:(t.grid||[1,qn])[1],!L){for(M=-qn;M<(M=g[L++].getBoundingClientRect().left)&&L<_;);L<_&&L--}for(m=o[_]=[],d=l?Math.min(L,_)*c-.5:r%L,v=L===qn?0:l?_*f/L-.5:r/L|0,M=0,R=qn,C=0;C<_;C++)x=C%L-d,S=v-(C/L|0),m[C]=w=u?Math.abs(u==="y"?S:x):ix(x*x+S*S),w>M&&(M=w),w<R&&(R=w);r==="random"&&yx(m),m.max=M-R,m.min=R,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(L>_?_-1:u?u==="y"?_/L:L:Math.max(L,_/L))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Kt(t.amount||t.each)||0,i=i&&_<0?XE(i):i}return _=(m[h]-m.min)/m.max||0,ht(m.b+(i?i(_):_)*m.v)+m.u}},jd=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=ht(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Ki(i)?0:Kt(i))}},Mx=function(e,t){var i=Qt(e),r,s;return!i&&Ci(e)&&(r=i=e.radius||qn,e.values?(e=Kn(e.values),(s=!Ki(e[0]))&&(r*=r)):e=jd(e.increment)),Hr(t,i?St(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=qn,c=0,f=e.length,h,p;f--;)s?(h=e[f].x-a,p=e[f].y-l,h=h*h+p*p):h=Math.abs(e[f]-a),h<u&&(u=h,c=f);return c=!r||u<=r?e[c]:o,s||c===o||Ki(o)?c:c+Kt(o)}:jd(e))},Ex=function(e,t,i,r){return Hr(Qt(e)?!t:i===!0?!!(i=0):!r,function(){return Qt(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},IE=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},NE=function(e,t){return function(i){return e(parseFloat(i))+(t||Kt(i))}},UE=function(e,t,i){return wx(e,t,0,1,i)},Tx=function(e,t,i){return Hr(i,function(r){return e[~~t(r)]})},FE=function n(e,t,i){var r=t-e;return Qt(e)?Tx(e,n(0,e.length),t):Hr(i,function(s){return(r+(s-e)%r)%r+e})},OE=function n(e,t,i){var r=t-e,s=r*2;return Qt(e)?Tx(e,n(0,e.length-1),t):Hr(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},ja=function(e){return e.replace(_E,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(gE);return Ex(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},wx=function(e,t,i,r,s){var o=t-e,a=r-i;return Hr(s,function(l){return i+((l-e)/o*a||0)})},kE=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=zt(e),a={},l,u,c,f,h;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Qt(e)&&!Qt(t)){for(c=[],f=e.length,h=f-2,u=1;u<f;u++)c.push(n(e[u-1],e[u]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return c[_](g-_)},i=t}else r||(e=Ro(Qt(e)?[]:{},e));if(!c){for(l in t)Gp.call(a,e,l,"get",t[l]);s=function(g){return Yp(g,a)||(o?e.p:e)}}}return Hr(i,s)},b_=function(e,t,i){var r=e.labels,s=qn,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Dn=function(e,t,i){var r=e.vars,s=r[t],o=dt,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Pr.length&&Wu(),a&&(dt=a),c=l?s.apply(u,l):s.call(u),dt=o,c},ca=function(e){return Ur(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Gt),e.progress()<1&&Dn(e,"onInterrupt"),e},oo,Ax=[],Cx=function(e){if(e)if(e=!e.name&&e.default||e,Fp()||e.headless){var t=e.name,i=St(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Xa,render:Yp,add:Gp,kill:t1,modifier:e1,rawVars:0},o={targetTest:0,get:0,getSetter:jp,aliases:{},register:0};if(Lo(),e!==r){if(Pn[t])return;zn(r,zn(Xu(e,s),o)),Ro(r.prototype,Ro(s,Xu(e,o))),Pn[r.prop=t]=r,e.targetTest&&(cu.push(r),zp[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}ux(t,r),e.register&&e.register(Mn,r,xn)}else Ax.push(e)},it=255,fa={aqua:[0,it,it],lime:[0,it,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,it],navy:[0,0,128],white:[it,it,it],olive:[128,128,0],yellow:[it,it,0],orange:[it,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[it,0,0],pink:[it,192,203],cyan:[0,it,it],transparent:[it,it,it,0]},lf=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*it+.5|0},Rx=function(e,t,i){var r=e?Ki(e)?[e>>16,e>>8&it,e&it]:0:fa.black,s,o,a,l,u,c,f,h,p,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),fa[e])r=fa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&it,r&it,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&it,e&it]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(w_),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=lf(l+1/3,s,o),r[1]=lf(l,s,o),r[2]=lf(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(sx),i&&r.length<4&&(r[3]=1),r}else r=e.match(w_)||fa.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/it,o=r[1]/it,a=r[2]/it,f=Math.max(s,o,a),h=Math.min(s,o,a),c=(f+h)/2,f===h?l=u=0:(p=f-h,u=c>.5?p/(2-f-h):p/(f+h),l=f===s?(o-a)/p+(o<a?6:0):f===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},Px=function(e){var t=[],i=[],r=-1;return e.split(br).forEach(function(s){var o=s.match(so)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},L_=function(e,t,i){var r="",s=(e+r).match(br),o=t?"hsla(":"rgba(",a=0,l,u,c,f;if(!s)return e;if(s=s.map(function(h){return(h=Rx(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(c=Px(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(br,"1").split(so),f=u.length-1;a<f;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(br),f=u.length-1;a<f;a++)r+=u[a]+s[a];return r+u[f]},br=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in fa)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),zE=/hsl[a]?\(/,bx=function(e){var t=e.join(" "),i;if(br.lastIndex=0,br.test(t))return i=zE.test(t),e[1]=L_(e[1],i),e[0]=L_(e[0],i,Px(e[1])),!0},Ya,bn=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,f,h,p,g=function _(m){var d=n()-r,v=m===!0,x,S,w,C;if((d>e||d<0)&&(i+=d-t),r+=d,w=r-i,x=w-o,(x>0||v)&&(C=++f.frame,h=w-f.time*1e3,f.time=w=w/1e3,o+=x+(x>=s?0:s-x),S=1),v||(l=u(_)),S)for(p=0;p<a.length;p++)a[p](w,h,C,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){ax&&(!Vd&&Fp()&&(vi=Vd=window,Op=vi.document||{},kn.gsap=Mn,(vi.gsapVersions||(vi.gsapVersions=[])).push(Mn.version),lx(Gu||vi.GreenSockGlobals||!vi.gsap&&vi||{}),Ax.forEach(Cx)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),u=c||function(m){return setTimeout(m,o-f.time*1e3+1|0)},Ya=1,g(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Ya=0,u=Xa},lagSmoothing:function(m,d){e=m||1/0,t=Math.min(d||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,d,v){var x=d?function(S,w,C,M){m(S,w,C,M),f.remove(x)}:m;return f.remove(m),a[v?"unshift":"push"](x),Lo(),x},remove:function(m,d){~(d=a.indexOf(m))&&a.splice(d,1)&&p>=d&&p--},_listeners:a},f}(),Lo=function(){return!Ya&&bn.wake()},ze={},BE=/^[\d.\-M][\d.\-,\s]/,VE=/["']/g,HE=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(VE,"").trim():+u,r=l.substr(a+1).trim();return t},GE=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},WE=function(e){var t=(e+"").split("("),i=ze[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[HE(t[1])]:GE(e).split(",").map(hx)):ze._CE&&BE.test(e)?ze._CE("",e):i},XE=function(e){return function(t){return 1-e(1-t)}},ms=function(e,t){return e&&(St(e)?e:ze[e]||WE(e))||t},Cs=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return vn(e,function(a){ze[a]=kn[a]=s,ze[o=a.toLowerCase()]=i;for(var l in s)ze[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ze[a+"."+l]=s[l]}),s},Lx=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},uf=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Bd*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*mE((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:Lx(a);return s=Bd/s,l.config=function(u,c){return n(e,u,c)},l},cf=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:Lx(i);return r.config=function(s){return n(e,s)},r};vn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Cs(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});ze.Linear.easeNone=ze.none=ze.Linear.easeIn;Cs("Elastic",uf("in"),uf("out"),uf());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Cs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Cs("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Cs("Circ",function(n){return-(ix(1-n*n)-1)});Cs("Sine",function(n){return n===1?1:-pE(n*dE)+1});Cs("Back",cf("in"),cf("out"),cf());ze.SteppedEase=ze.steps=kn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-tt;return function(a){return((r*rl(0,o,a)|0)+s)*i}}};Ga.ease=ze["quad.out"];vn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Bp+=n+","+n+"Params,"});var Dx=function(e,t){this.id=hE++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:fx,this.set=t?t.getSetter:jp},$a=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,bo(this,+t.duration,1,1),this.data=t.data,dt&&(this._ctx=dt,dt.data.push(this)),Ya||bn.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,bo(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Lo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ec(this,i),!s._dp||s.parent||_x(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Mi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===tt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),dx(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+R_(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+R_(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Po(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-tt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?ju(this.parent._time,this):this._tTime,o=this._rts<0;this._rts=+i||0,this._ts=this._ps||i===-tt?0:this._rts;var a=this.totalDuration();return(o!==this._rts<0||s>0&&s<a)&&this.totalTime(rl(-Math.abs(this._delay),a,s),r!==!1),Mc(this),wE(this)},e.paused=function(i){if(!arguments.length)return this._ps;if(this._ps!==i)if(this._ps=i,i)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{Lo(),this._ts=this._rts;var r=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,s=this.progress()===1&&Math.abs(this._zTime)!==tt,o;if(s)for(this._tTime-=tt,o=this._first;o;){if(!o._dur&&o._zTime<0&&o._ts&&o._start<=r+tt){s=!1;break}o=o._next}this.totalTime(r,s)}return this},e.startTime=function(i){if(arguments.length){this._start=ht(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Mi(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(gn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ju(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=SE);var r=Gt;return Gt=i,Hp(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Gt=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,P_(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,P_(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Wn(this,i),gn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,gn(r)),this._dur||(this._zTime=-tt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-tt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-tt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-tt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=St(i)?i:px,l=function(){var c=r.then;r.then=null,s&&s(),St(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),o(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){ca(this)},n}();zn($a.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-tt,_prom:0,_ps:!1,_rts:1});var dn=function(n){nx(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=gn(i.sortChildren),mt&&Mi(i.parent||mt,Oi(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&gx(Oi(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Ta(0,arguments,this),this},t.from=function(r,s,o){return Ta(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Ta(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Ea(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Pt(r,s,Wn(this,o),1),this},t.call=function(r,s,o){return Mi(this,Pt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new Pt(r,o,Wn(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,Ea(o).immediateRender=gn(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,f){return a.startAt=o,Ea(a).immediateRender=gn(a.immediateRender),this.staggerTo(r,s,a,l,u,c,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:ht(r),f=this._zTime<0!=r<0&&(this._initted||!u),h,p,g,_,m,d,v,x,S,w,C,M;if(this!==mt&&c>l&&r>=0&&(c=l),c!==this._tTime||o||f){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),h=c,S=this._start,x=this._ts,d=!x,f&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(C=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(h=ht(c%m),c===l?(_=this._repeat,h=u):(w=ht(c/m),_=~~w,_&&_===w&&(h=u,_--),h>u&&(h=u)),w=Po(this._tTime,m),!a&&this._tTime&&w!==_&&this._tTime-w*m-this._dur<=0&&(w=_),C&&_&1&&(h=u-h,M=1),_!==w&&!this._lock){var R=C&&w&1,L=R===(C&&_&1);if(_<w&&(R=!R),a=R?0:c%u?u:c,this._lock=1,this.render(a||(M?0:ht(_*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Dn(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1,w=_),a&&a!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,L&&(this._lock=2,a=R?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!d)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=PE(this,ht(a),ht(h)),v&&(c-=h-(h=v._start))),this._tTime=c,this._time=h,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&u&&!s&&!w&&(Dn(this,"onStart"),this._tTime!==c))return this;if(h>=a&&r>=0)for(p=this._first;p;){if(g=p._next,(p._act||h>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,s,o),h!==this._time||!this._ts&&!d){v=0,g&&(c+=this._zTime=-tt);break}}p=g}else{p=this._last;for(var y=r<0?r:h;p;){if(g=p._prev,(p._act||y<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(y-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(y-p._start)*p._ts,s,o||Gt&&Hp(p)),h!==this._time||!this._ts&&!d){v=0,g&&(c+=this._zTime=y?-tt:tt);break}}p=g}}if(v&&!s&&(this.pause(),v.render(h>=a?0:-tt)._zTime=h>=a?1:-1,this._ts))return this._start=S,Mc(this),this.render(r,s,o);this._onUpdate&&!s&&Dn(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Ur(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Dn(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Ki(s)||(s=Wn(this,s,r)),!(r instanceof $a)){if(Qt(r))return r.forEach(function(a){return o.add(a,s)}),this;if(zt(r))return this.addLabel(r,s);if(St(r))r=Pt.delayedCall(0,r);else return this}return this!==r?Mi(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-qn);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof Pt?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return zt(r)?this.removeLabel(r):St(r)?this.killTweensOf(r):(r.parent===this&&Sc(this,r),r===this._recent&&(this._recent=this._last),ps(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ht(bn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Wn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Pt.delayedCall(0,s||Xa,o);return a.data="isPause",this._hasPause=1,Mi(this,a,Wn(this,r))},t.removePause=function(r){var s=this._first;for(r=Wn(this,r);s;)s._start===r&&s.data==="isPause"&&Ur(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)gr!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Kn(r),l=this._first,u=Ki(s),c;l;)l instanceof Pt?ME(l._targets,a)&&(u?(!gr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Wn(o,r),l=s,u=l.startAt,c=l.onStart,f=l.onStartParams,h=l.immediateRender,p,g=Pt.to(o,zn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||tt,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());g._dur!==m&&bo(g,m,0,1).render(g._time,!0,!0),p=1}c&&c.apply(g,f||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,zn({startAt:{time:Wn(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),b_(this,Wn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),b_(this,Wn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+tt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(r=ht(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return ps(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),ps(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=qn,u,c,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Mi(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=ht(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;bo(o,o===mt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(mt._ts&&(dx(mt,ju(r,mt)),cx=bn.frame),bn.frame>=A_){A_+=Un.autoSleep||120;var s=mt._first;if((!s||!s._ts)&&Un.autoSleep&&bn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||bn.sleep()}}},e}($a);zn(dn.prototype,{_lock:0,_hasPause:0,_forcing:0});var jE=function(e,t,i,r,s,o,a){var l=new xn(this._pt,e,t,0,1,Ox,null,s),u=0,c=0,f,h,p,g,_,m,d,v;for(l.b=i,l.e=r,i+="",r+="",(d=~r.indexOf("random("))&&(r=ja(r)),o&&(v=[i,r],o(v,e,t),i=v[0],r=v[1]),h=i.match(of)||[];f=of.exec(r);)g=f[0],_=r.substring(u,f.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),g!==h[c++]&&(m=parseFloat(h[c-1])||0,l._pt={_next:l._pt,p:_||c===1?_:",",s:m,c:g.charAt(1)==="="?mo(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},u=of.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(ox.test(r)||d)&&(l.e=0),this._pt=l,l},Gp=function(e,t,i,r,s,o,a,l,u,c){St(r)&&(r=r(s||0,e,o));var f=e[t],h=i!=="get"?i:St(f)?u?e[t.indexOf("set")||!St(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():f,p=St(f)?u?ZE:Ux:Xp,g;if(zt(r)&&(~r.indexOf("random(")&&(r=ja(r)),r.charAt(1)==="="&&(g=mo(h,r)+(Kt(h)||0),(g||g===0)&&(r=g))),!c||h!==r||Yd)return!isNaN(h*r)&&r!==""?(g=new xn(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?JE:Fx,0,p),u&&(g.fp=u),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&kp(t,r),jE.call(this,e,t,h,r,p,l||Un.stringFilter,u))},YE=function(e,t,i,r,s){if(St(e)&&(e=wa(e,s,t,i,r)),!Ci(e)||e.style&&e.nodeType||Qt(e)||rx(e))return zt(e)?wa(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=wa(e[a],s,t,i,r);return o},Ix=function(e,t,i,r,s,o){var a,l,u,c;if(Pn[e]&&(a=new Pn[e]).init(s,a.rawVars?t[e]:YE(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new xn(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==oo))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},gr,Yd,Wp=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,f=r.yoyoEase,h=r.keyframes,p=r.autoRevert,g=e._dur,_=e._startAt,m=e._targets,d=e.parent,v=d&&d.data==="nested"?d.vars.targets:m,x=e._overwrite==="auto"&&!Np,S=e.timeline,w=r.easeReverse||f,C,M,R,L,y,T,k,F,H,K,O,$,b;if(S&&(!h||!s)&&(s="none"),e._ease=ms(s,Ga.ease),e._rEase=w&&(ms(w)||e._ease),e._from=!S&&!!r.runBackwards,e._from&&(e.ratio=1),!S||h&&!r.stagger){if(F=m[0]?hs(m[0]).harness:0,$=F&&r[F.prop],C=Xu(r,zp),_&&(_._zTime<0&&_.progress(1),t<0&&c&&a&&!p?_.render(-1,!0):_.revert(c&&g?uu:yE),_._lazy=0),o){if(Ur(e._startAt=Pt.set(m,zn({data:"isStart",overwrite:!1,parent:d,immediateRender:!0,lazy:!_&&gn(l),startAt:null,delay:0,onUpdate:u&&function(){return Dn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Gt||!a&&!p)&&e._startAt.revert(uu),a&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&g&&!_){if(t&&(a=!1),R=zn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&gn(l),immediateRender:a,stagger:0,parent:d},C),$&&(R[F.prop]=$),Ur(e._startAt=Pt.set(m,R)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Gt?e._startAt.revert(uu):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,tt,tt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&gn(l)||l&&!g,M=0;M<m.length;M++){if(y=m[M],k=y._gsap||Vp(m)[M]._gsap,e._ptLookup[M]=K={},Hd[k.id]&&Pr.length&&Wu(),O=v===m?M:v.indexOf(y),F&&(H=new F).init(y,$||C,e,O,v)!==!1&&(e._pt=L=new xn(e._pt,y,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(q){K[q]=L}),H.priority&&(T=1)),!F||$)for(R in C)Pn[R]&&(H=Ix(R,C,e,O,y,v))?H.priority&&(T=1):K[R]=L=Gp.call(e,y,R,"get",C[R],O,v,0,r.stringFilter);e._op&&e._op[M]&&e.kill(y,e._op[M]),x&&e._pt&&(gr=e,mt.killTweensOf(y,K,e.globalTime(t)),b=!e.parent,gr=0),e._pt&&l&&(Hd[k.id]=1)}T&&kx(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!b,h&&t<=0&&S.render(qn,!0,!0)},$E=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,f,h,p;if(!u)for(u=e._ptCache[t]=[],h=e._ptLookup,p=e._targets.length;p--;){if(c=h[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Yd=1,e.vars[t]="+=0",Wp(e,a),Yd=0,l?Wa(t+" not eligible for reset. Try splitting into individual properties"):1;u.push(c)}for(p=u.length;p--;)f=u[p],c=f._pt||f,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,f.e&&(f.e=Et(i)+Kt(f.e)),f.b&&(f.b=c.s+Kt(f.b))},qE=function(e,t){var i=e[0]?hs(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Ro({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},KE=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Qt(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},wa=function(e,t,i,r,s){return St(e)?e.call(t,i,r,s):zt(e)&&~e.indexOf("random(")?ja(e):e},$u=Bp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Nx={};vn($u+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return Nx[n]=1});$u=$u.split(",");var Pt=function(n){nx(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Ea(r))||this;var l=a.vars,u=l.duration,c=l.delay,f=l.immediateRender,h=l.stagger,p=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,d=r.parent||mt,v=(Qt(i)||rx(i)?Ki(i[0]):"length"in r)?[i]:Kn(i),x,S,w,C,M,R,L,y;if(a._targets=v.length?Vp(v):Wa("GSAP target "+i+" not found. https://gsap.com",!Un.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,g||h||Pl(u)||Pl(c)){r=a.vars;var T=r.easeReverse||r.yoyoEase;if(x=a.timeline=new dn({data:"nested",defaults:_||{},targets:d&&d.data==="nested"?d.vars.targets:v}),x.kill(),x.parent=x._dp=Oi(a),x._start=0,h||Pl(u)||Pl(c)){if(C=v.length,L=h&&Sx(h),Ci(h))for(M in h)~$u.indexOf(M)&&(y||(y={}),y[M]=h[M]);for(S=0;S<C;S++)w=Xu(r,Nx),w.stagger=0,T&&(w.easeReverse=T),y&&Ro(w,y),R=v[S],w.duration=+wa(u,Oi(a),S,R,v),w.delay=(+wa(c,Oi(a),S,R,v)||0)-a._delay,!h&&C===1&&w.delay&&(a._delay=c=w.delay,a._start+=c,w.delay=0),x.to(R,w,L?L(S,R,v):0),x._ease=ze.none;x.duration()?u=c=0:a.timeline=0}else if(g){Ea(zn(x.vars.defaults,{ease:"none"})),x._ease=ms(g.ease||r.ease||"none");var k=0,F,H,K;if(Qt(g))g.forEach(function(O){return x.to(v,O,">")}),x.duration();else{w={};for(M in g)M==="ease"||M==="easeEach"||KE(M,g[M],w,g.easeEach);for(M in w)for(F=w[M].sort(function(O,$){return O.t-$.t}),k=0,S=0;S<F.length;S++)H=F[S],K={ease:H.e,duration:(H.t-(S?F[S-1].t:0))/100*u},K[M]=H.v,x.to(v,K,k),k+=K.duration;x.duration()<u&&x.to({},{duration:u-x.duration()})}}u||a.duration(u=x.duration())}else a.timeline=0;return p===!0&&!Np&&(gr=Oi(a),mt.killTweensOf(v),gr=0),Mi(d,Oi(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!u&&!g&&a._start===ht(d._time)&&gn(f)&&AE(Oi(a))&&d.data!=="nested")&&(a._tTime=-tt,a.render(Math.max(0,-c)||0)),m&&gx(Oi(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,f=r>l-tt&&!c?l:r<tt?0:r,h,p,g,_,m,d,v,x;if(!u)RE(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(h=f,x=this.timeline,this._repeat){if(_=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(_*100+r,s,o);if(h=ht(f%_),f===l?(g=this._repeat,h=u):(m=ht(f/_),g=~~m,g&&g===m?(h=u,g--):h>u&&(h=u)),d=this._yoyo&&g&1,d&&(h=u-h),m=Po(this._tTime,_),h===a&&!o&&this._initted&&g===m)return this._tTime=f,this;g!==m&&this.vars.repeatRefresh&&!d&&!this._lock&&h!==_&&this._initted&&(this._lock=o=1,this.render(ht(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(vx(this,c?r:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._rEase){var S=h<a;if(S!==this._inv){var w=S?a:u-a;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=w?(S?-1:1)/w:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(h/u);if(this._from&&(this.ratio=v=1-v),this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!s&&!m&&(Dn(this,"onStart"),this._tTime!==f))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;x&&x.render(r<0?r:x._dur*x._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&Gd(this,r,s,o),Dn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Dn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(c&&!this._onUpdate&&Gd(this,r,!0,!0),(r||!u)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Ur(this,1),!s&&!(c&&!a)&&(f||a||d)&&(Dn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Ya||bn.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Wp(this,u),c=this._ease(u/this._dur),$E(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(Ec(this,0),this.parent||mx(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ca(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Gt),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,gr&&gr.vars.overwrite!==!0)._first||ca(this),this.parent&&o!==this.timeline.totalDuration()&&bo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Kn(r):a,u=this._ptLookup,c=this._pt,f,h,p,g,_,m,d;if((!s||s==="all")&&TE(a,l))return s==="all"&&(this._pt=0),ca(this);for(f=this._op=this._op||[],s!=="all"&&(zt(s)&&(_={},vn(s,function(v){return _[v]=1}),s=_),s=qE(a,s)),d=a.length;d--;)if(~l.indexOf(a[d])){h=u[d],s==="all"?(f[d]=s,g=h,p={}):(p=f[d]=f[d]||{},g=s);for(_ in g)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Sc(this,m,"_pt"),delete h[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&c&&ca(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Ta(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Ta(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return mt.killTweensOf(r,s,o)},e}($a);zn(Pt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});vn("staggerTo,staggerFrom,staggerFromTo",function(n){Pt[n]=function(){var e=new dn,t=Wd.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Xp=function(e,t,i){return e[t]=i},Ux=function(e,t,i){return e[t](i)},ZE=function(e,t,i,r){return e[t](r.fp,i)},QE=function(e,t,i){return e.setAttribute(t,i)},jp=function(e,t){return St(e[t])?Ux:Up(e[t])&&e.setAttribute?QE:Xp},Fx=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},JE=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Ox=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},Yp=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},e1=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},t1=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Sc(this,t,"_pt"):t.dep||(i=1),t=r;return!i},n1=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},kx=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},xn=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||Fx,this.d=l||this,this.set=u||Xp,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=n1,this.m=i,this.mt=s,this.tween=r},n}();vn(Bp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return zp[n]=1});kn.TweenMax=kn.TweenLite=Pt;kn.TimelineLite=kn.TimelineMax=dn;mt=new dn({sortChildren:!1,defaults:Ga,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Un.stringFilter=bx;var _s=[],fu={},i1=[],D_=0,r1=0,ff=function(e){return(fu[e]||i1).map(function(t){return t()})},qa=function(){var e=Date.now(),t=[];e-D_>2&&(ff("matchMediaInit"),_s.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=vi.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),ff("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),D_=e,ff("matchMedia"))},zx=function(){function n(t,i){this.selector=i&&Xd(i),this.data=[],this._r=[],this.isReverted=!1,this.id=r1++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){St(i)&&(s=r,r=i,i=St);var o=this,a=function(){var u=dt,c=o.selector,f;return u&&u!==o&&u.data.push(o),s&&(o.selector=Xd(s)),dt=o,f=r.apply(o,arguments),St(f)&&o._r.push(f),dt=u,o.selector=c,o.isReverted=!1,f};return o.last=a,i===St?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=dt;dt=null,i(this),dt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Pt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,f){return f.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof dn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Pt)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r){for(var o=_s.length;o--;)_s[o].id===this.id&&_s.splice(o,1);this._mqs&&this._mqs.forEach(function(a){return a.removeListener?a.removeListener(qa):a.removeEventListener("change",qa)}),this._mqs=null}},e.revert=function(i){this.kill(i||{})},n}(),s1=function(){function n(t){this.contexts=[],this.scope=t,dt&&dt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Ci(i)||(i={matches:i});var o=new zx(0,s||this.scope),a=o.conditions={},l,u,c;dt&&!o.selector&&(o.selector=dt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=vi.matchMedia(i[u]),l&&(_s.indexOf(o)<0&&_s.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(qa):l.addEventListener("change",qa),(o._mqs||(o._mqs=[])).push(l)));return c&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),qu={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return Cx(r)})},timeline:function(e){return new dn(e)},getTweensOf:function(e,t){return mt.getTweensOf(e,t)},getProperty:function(e,t,i,r){zt(e)&&(e=Kn(e)[0]);var s=hs(e||{}).get,o=i?px:hx;return i==="native"&&(i=""),e&&(t?o((Pn[t]&&Pn[t].get||s)(e,t,i,r)):function(a,l,u){return o((Pn[a]&&Pn[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=Kn(e),e.length>1){var r=e.map(function(c){return Mn.quickSetter(c,t,i)}),s=r.length;return function(c){for(var f=s;f--;)r[f](c)}}e=e[0]||{};var o=Pn[t],a=hs(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var f=new o;oo._pt=0,f.init(e,i?c+i:c,oo,0,[e]),f.render(1,f),oo._pt&&Yp(1,oo)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=Mn.to(e,zn((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return mt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ms(e.ease,Ga.ease)),C_(Ga,e||{})},config:function(e){return C_(Un,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Pn[a]&&!kn[a]&&Wa(t+" effect requires "+a+" plugin.")}),af[t]=function(a,l,u){return i(Kn(a),zn(l||{},s),u)},o&&(dn.prototype[t]=function(a,l,u){return this.add(af[t](a,Ci(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){ze[e]=ms(t)},parseEase:function(e,t){return arguments.length?ms(e,t):ze},getById:function(e){return mt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new dn(e),r,s;for(i.smoothChildTiming=gn(e.smoothChildTiming),mt.remove(i),i._dp=0,i._time=i._tTime=mt._time,r=mt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Pt&&r.vars.onComplete===r._targets[0]))&&Mi(i,r,r._start-r._delay),r=s;return Mi(mt,i,0),i},context:function(e,t){return e?new zx(e,t):dt},matchMedia:function(e){return new s1(e)},matchMediaRefresh:function(){return _s.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||qa()},addEventListener:function(e,t){var i=fu[e]||(fu[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=fu[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:FE,wrapYoyo:OE,distribute:Sx,random:Ex,snap:Mx,normalize:UE,getUnit:Kt,clamp:LE,splitColor:Rx,toArray:Kn,selector:Xd,mapRange:wx,pipe:IE,unitize:NE,interpolate:kE,shuffle:yx},install:lx,effects:af,ticker:bn,updateRoot:dn.updateRoot,plugins:Pn,globalTimeline:mt,core:{PropTween:xn,globals:ux,Tween:Pt,Timeline:dn,Animation:$a,getCache:hs,_removeLinkedListItem:Sc,reverting:function(){return Gt},context:function(e){return e&&dt&&(dt.data.push(e),e._ctx=dt),dt},suppressOverwrites:function(e){return Np=e}}};vn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return qu[n]=Pt[n]});bn.add(dn.updateRoot);oo=qu.to({},{duration:0});var o1=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},a1=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=o1(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},df=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(zt(s)&&(l={},vn(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}a1(a,s)}}}},Mn=qu.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Gt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},df("roundProps",jd),df("modifiers"),df("snap",Mx))||qu;Pt.version=dn.version=Mn.version="3.15.1";ax=1;Fp()&&Lo();ze.Power0;ze.Power1;ze.Power2;ze.Power3;ze.Power4;ze.Linear;ze.Quad;ze.Cubic;ze.Quart;ze.Quint;ze.Strong;ze.Elastic;ze.Back;ze.SteppedEase;ze.Bounce;ze.Sine;ze.Expo;ze.Circ;/*!
 * CSSPlugin 3.15.1
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var I_,vr,_o,$p,us,N_,qp,l1=function(){return typeof window<"u"},Zi={},ts=180/Math.PI,go=Math.PI/180,Ds=Math.atan2,U_=1e8,Kp=/([A-Z])/g,u1=/(left|right|width|margin|padding|x)/i,c1=/[\s,\(]\S/,Ei={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},$d=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},f1=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},d1=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},h1=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},p1=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Bx=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Vx=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},m1=function(e,t,i){return e.style[t]=i},_1=function(e,t,i){return e.style.setProperty(t,i)},g1=function(e,t,i){return e._gsap[t]=i},v1=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},x1=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},y1=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},_t="transform",yn=_t+"Origin",S1=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in Zi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ei[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=zi(r,a)}):this.tfm[e]=o.x?o[e]:zi(r,e),e===yn&&(this.tfm.zOrigin=o.zOrigin);else return Ei.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(_t)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(yn,t,"")),e=_t}(s||t)&&this.props.push(e,t,s[e])},Hx=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},M1=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Kp,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=qp(),(!s||!s.isStart)&&!i[_t]&&(Hx(i),r.zOrigin&&i[yn]&&(i[yn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Gx=function(e,t){var i={target:e,props:[],revert:M1,save:S1};return e._gsap||Mn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},Wx,qd=function(e,t){var i=vr.createElementNS?vr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):vr.createElement(e);return i&&i.style?i:vr.createElement(e)},In=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Kp,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Do(t)||t,1)||""},F_="O,Moz,ms,Ms,Webkit".split(","),Do=function(e,t,i){var r=t||us,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(F_[o]+e in s););return o<0?null:(o===3?"ms":o>=0?F_[o]:"")+e},Kd=function(){l1()&&window.document&&(I_=window,vr=I_.document,_o=vr.documentElement,us=qd("div")||{style:{}},qd("div"),_t=Do(_t),yn=_t+"Origin",us.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Wx=!!Do("perspective"),qp=Mn.core.reverting,$p=1)},O_=function(e){var t=e.ownerSVGElement,i=qd("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),_o.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),_o.removeChild(i),s},k_=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Xx=function(e){var t,i;try{t=e.getBBox()}catch{t=O_(e),i=1}return t&&(t.width||t.height)||i||(t=O_(e)),t&&!t.width&&!t.x&&!t.y?{x:+k_(e,["x","cx","x1"])||0,y:+k_(e,["y","cy","y1"])||0,width:0,height:0}:t},jx=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Xx(e))},Fr=function(e,t){if(t){var i=e.style,r;t in Zi&&t!==yn&&(t=_t),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(Kp,"-$1").toLowerCase())):i.removeAttribute(t)}},xr=function(e,t,i,r,s,o){var a=new xn(e._pt,t,i,0,1,o?Vx:Bx);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},z_={deg:1,rad:1,turn:1},E1={grid:1,flex:1},Or=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=us.style,l=u1.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",p=r==="%",g,_,m,d;if(r===o||!s||z_[r]||z_[o])return s;if(o!=="px"&&!h&&(s=n(e,t,i,"px")),d=e.getCTM&&jx(e),(p||o==="%")&&(Zi[t]||~t.indexOf("adius")))return g=d?e.getBBox()[l?"width":"height"]:e[c],Et(p?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(h?o:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,d&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===vr||!_.appendChild)&&(_=vr.body),m=_._gsap,m&&p&&m.width&&l&&m.time===bn.time&&!m.uncache)return Et(s/m.width*f);if(p&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=f+r,g=e[c],v?e.style[t]=v:Fr(e,t)}else(p||o==="%")&&!E1[In(_,"display")]&&(a.position=In(e,"position")),_===e&&(a.position="static"),_.appendChild(us),g=us[c],_.removeChild(us),a.position="absolute";return l&&p&&(m=hs(_),m.time=bn.time,m.width=_[c]),Et(h?g*s/f:g&&s?f/g*s:0)},zi=function(e,t,i,r){var s;return $p||Kd(),t in Ei&&t!=="transform"&&(t=Ei[t],~t.indexOf(",")&&(t=t.split(",")[0])),Zi[t]&&t!=="transform"?(s=Za(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Zu(In(e,yn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Ku[t]&&Ku[t](e,t,i)||In(e,t)||fx(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Or(e,t,s,i)+i:s},T1=function(e,t,i,r){if(!i||i==="none"){var s=Do(t,e,1),o=s&&In(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=In(e,"borderTopColor"))}var a=new xn(this._pt,e.style,t,0,1,Ox),l=0,u=0,c,f,h,p,g,_,m,d,v,x,S,w;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=In(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=In(e,t)||r,_?e.style[t]=_:Fr(e,t)),c=[i,r],bx(c),i=c[0],r=c[1],h=i.match(so)||[],w=r.match(so)||[],w.length){for(;f=so.exec(r);)m=f[0],v=r.substring(l,f.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),m!==(_=h[u++]||"")&&(p=parseFloat(_)||0,S=_.substr((p+"").length),m.charAt(1)==="="&&(m=mo(p,m)+S),d=parseFloat(m),x=m.substr((d+"").length),l=so.lastIndex-x.length,x||(x=x||Un.units[t]||S,l===r.length&&(r+=x,a.e+=x)),S!==x&&(p=Or(e,t,_,x)||0),a._pt={_next:a._pt,p:v||u===1?v:",",s:p,c:d-p,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?Vx:Bx;return ox.test(r)&&(a.e=0),this._pt=a,a},B_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},w1=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=B_[i]||i,t[1]=B_[r]||r,t.join(" ")},A1=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],Zi[a]&&(l=1,a=a==="transformOrigin"?yn:_t),Fr(i,a);l&&(Fr(i,_t),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Za(i,1),o.uncache=1,Hx(r)))}},Ku={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new xn(e._pt,t,i,0,0,A1);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Ka=[1,0,0,1,0,0],Yx={},$x=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},V_=function(e){var t=In(e,_t);return $x(t)?Ka:t.substr(7).match(sx).map(Et)},Zp=function(e,t){var i=e._gsap||hs(e),r=e.style,s=V_(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ka:s):(s===Ka&&!e.offsetParent&&e!==_o&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,_o.appendChild(e)),s=V_(e),l?r.display=l:Fr(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):_o.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Zd=function(e,t,i,r,s,o){var a=e._gsap,l=s||Zp(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,p=l[0],g=l[1],_=l[2],m=l[3],d=l[4],v=l[5],x=t.split(" "),S=parseFloat(x[0])||0,w=parseFloat(x[1])||0,C,M,R,L;i?l!==Ka&&(M=p*m-g*_)&&(R=S*(m/M)+w*(-_/M)+(_*v-m*d)/M,L=S*(-g/M)+w*(p/M)-(p*v-g*d)/M,S=R,w=L):(C=Xx(e),S=C.x+(~x[0].indexOf("%")?S/100*C.width:S),w=C.y+(~(x[1]||x[0]).indexOf("%")?w/100*C.height:w)),r||r!==!1&&a.smooth?(d=S-u,v=w-c,a.xOffset=f+(d*p+v*_)-d,a.yOffset=h+(d*g+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=w,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[yn]="0px 0px",o&&(xr(o,a,"xOrigin",u,S),xr(o,a,"yOrigin",c,w),xr(o,a,"xOffset",f,a.xOffset),xr(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+w)},Za=function(e,t){var i=e._gsap||new Dx(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=In(e,yn)||"0",c,f,h,p,g,_,m,d,v,x,S,w,C,M,R,L,y,T,k,F,H,K,O,$,b,q,Z,Q,re,ge,B,Y;return c=f=h=_=m=d=v=x=S=0,p=g=1,i.svg=!!(e.getCTM&&jx(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[_t]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[_t]!=="none"?l[_t]:"")),r.scale=r.rotate=r.translate="none"),M=Zp(e,i.svg),i.svg&&(i.uncache?(b=e.getBBox(),u=i.xOrigin-b.x+"px "+(i.yOrigin-b.y)+"px",$=""):$=!t&&e.getAttribute("data-svg-origin"),Zd(e,$||u,!!$||i.originIsAbsolute,i.smooth!==!1,M)),w=i.xOrigin||0,C=i.yOrigin||0,M!==Ka&&(T=M[0],k=M[1],F=M[2],H=M[3],c=K=M[4],f=O=M[5],M.length===6?(p=Math.sqrt(T*T+k*k),g=Math.sqrt(H*H+F*F),_=T||k?Ds(k,T)*ts:0,v=F||H?Ds(F,H)*ts+_:0,v&&(g*=Math.abs(Math.cos(v*go))),i.svg&&(c-=w-(w*T+C*F),f-=C-(w*k+C*H))):(Y=M[6],ge=M[7],Z=M[8],Q=M[9],re=M[10],B=M[11],c=M[12],f=M[13],h=M[14],R=Ds(Y,re),m=R*ts,R&&(L=Math.cos(-R),y=Math.sin(-R),$=K*L+Z*y,b=O*L+Q*y,q=Y*L+re*y,Z=K*-y+Z*L,Q=O*-y+Q*L,re=Y*-y+re*L,B=ge*-y+B*L,K=$,O=b,Y=q),R=Ds(-F,re),d=R*ts,R&&(L=Math.cos(-R),y=Math.sin(-R),$=T*L-Z*y,b=k*L-Q*y,q=F*L-re*y,B=H*y+B*L,T=$,k=b,F=q),R=Ds(k,T),_=R*ts,R&&(L=Math.cos(R),y=Math.sin(R),$=T*L+k*y,b=K*L+O*y,k=k*L-T*y,O=O*L-K*y,T=$,K=b),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,d=180-d),p=Et(Math.sqrt(T*T+k*k+F*F)),g=Et(Math.sqrt(O*O+Y*Y)),R=Ds(K,O),v=Math.abs(R)>2e-4?R*ts:0,S=B?1/(B<0?-B:B):0),i.svg&&($=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!$x(In(e,_t)),$&&e.setAttribute("transform",$))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(p*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=Et(p),i.scaleY=Et(g),i.rotation=Et(_)+a,i.rotationX=Et(m)+a,i.rotationY=Et(d)+a,i.skewX=v+a,i.skewY=x+a,i.transformPerspective=S+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[yn]=Zu(u)),i.xOffset=i.yOffset=0,i.force3D=Un.force3D,i.renderTransform=i.svg?R1:Wx?qx:C1,i.uncache=0,i},Zu=function(e){return(e=e.split(" "))[0]+" "+e[1]},hf=function(e,t,i){var r=Kt(t);return Et(parseFloat(t)+parseFloat(Or(e,"x",i+"px",r)))+r},C1=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,qx(e,t)},Xr="0deg",Jo="0px",jr=") ",qx=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,f=i.rotationX,h=i.skewX,p=i.skewY,g=i.scaleX,_=i.scaleY,m=i.transformPerspective,d=i.force3D,v=i.target,x=i.zOrigin,S="",w=d==="auto"&&e&&e!==1||d===!0;if(x&&(f!==Xr||c!==Xr)){var C=parseFloat(c)*go,M=Math.sin(C),R=Math.cos(C),L;C=parseFloat(f)*go,L=Math.cos(C),o=hf(v,o,M*L*-x),a=hf(v,a,-Math.sin(C)*-x),l=hf(v,l,R*L*-x+x)}m!==Jo&&(S+="perspective("+m+jr),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(w||o!==Jo||a!==Jo||l!==Jo)&&(S+=l!==Jo||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+jr),u!==Xr&&(S+="rotate("+u+jr),c!==Xr&&(S+="rotateY("+c+jr),f!==Xr&&(S+="rotateX("+f+jr),(h!==Xr||p!==Xr)&&(S+="skew("+h+", "+p+jr),(g!==1||_!==1)&&(S+="scale("+g+", "+_+jr),v.style[_t]=S||"translate(0, 0)"},R1=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,f=i.scaleX,h=i.scaleY,p=i.target,g=i.xOrigin,_=i.yOrigin,m=i.xOffset,d=i.yOffset,v=i.forceCSS,x=parseFloat(o),S=parseFloat(a),w,C,M,R,L;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=go,u*=go,w=Math.cos(l)*f,C=Math.sin(l)*f,M=Math.sin(l-u)*-h,R=Math.cos(l-u)*h,u&&(c*=go,L=Math.tan(u-c),L=Math.sqrt(1+L*L),M*=L,R*=L,c&&(L=Math.tan(c),L=Math.sqrt(1+L*L),w*=L,C*=L)),w=Et(w),C=Et(C),M=Et(M),R=Et(R)):(w=f,R=h,C=M=0),(x&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(x=Or(p,"x",o,"px"),S=Or(p,"y",a,"px")),(g||_||m||d)&&(x=Et(x+g-(g*w+_*M)+m),S=Et(S+_-(g*C+_*R)+d)),(r||s)&&(L=p.getBBox(),x=Et(x+r/100*L.width),S=Et(S+s/100*L.height)),L="matrix("+w+","+C+","+M+","+R+","+x+","+S+")",p.setAttribute("transform",L),v&&(p.style[_t]=L)},P1=function(e,t,i,r,s){var o=360,a=zt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?ts:1),u=l-r,c=r+u+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),f==="cw"&&u<0?u=(u+o*U_)%o-~~(u/o)*o:f==="ccw"&&u>0&&(u=(u-o*U_)%o-~~(u/o)*o)),e._pt=h=new xn(e._pt,t,i,r,u,f1),h.e=c,h.u="deg",e._props.push(i),h},H_=function(e,t){for(var i in t)e[i]=t[i];return e},b1=function(e,t,i){var r=H_({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,f,h,p,g;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[_t]=t,a=Za(i,1),Fr(i,_t),i.setAttribute("transform",u)):(u=getComputedStyle(i)[_t],o[_t]=t,a=Za(i,1),o[_t]=u);for(l in Zi)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=Kt(u),g=Kt(c),f=p!==g?Or(i,l,u,g):parseFloat(u),h=parseFloat(c),e._pt=new xn(e._pt,a,l,f,h-f,$d),e._pt.u=g||0,e._props.push(l));H_(a,r)};vn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});Ku[e>1?"border"+n:n]=function(a,l,u,c,f){var h,p;if(arguments.length<4)return h=o.map(function(g){return zi(a,g,u)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(c+"").split(" "),p={},o.forEach(function(g,_){return p[g]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,p,f)}});var Kx={name:"css",register:Kd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,f,h,p,g,_,m,d,v,x,S,w,C,M,R,L;$p||Kd(),this.styles=this.styles||Gx(e),R=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(c=t[_],!(Pn[_]&&Ix(_,t,i,r,e,s)))){if(p=typeof c,g=Ku[_],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=ja(c)),g)g(this,e,_,c,i)&&(M=1);else if(_.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(_)+"").trim(),c+="",br.lastIndex=0,br.test(u)||(m=Kt(u),d=Kt(c),d?m!==d&&(u=Or(e,_,u,d)+d):m&&(c+=m)),this.add(a,"setProperty",u,c,r,s,0,0,_),o.push(_),R.push(_,0,a[_]);else if(p!=="undefined"){if(l&&_ in l?(u=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],zt(u)&&~u.indexOf("random(")&&(u=ja(u)),Kt(u+"")||u==="auto"||(u+=Un.units[_]||Kt(zi(e,_))||""),(u+"").charAt(1)==="="&&(u=zi(e,_))):u=zi(e,_),h=parseFloat(u),v=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),v&&(c=c.substr(2)),f=parseFloat(c),_ in Ei&&(_==="autoAlpha"&&(h===1&&zi(e,"visibility")==="hidden"&&f&&(h=0),R.push("visibility",0,a.visibility),xr(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=Ei[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in Zi,x){if(this.styles.save(_),L=c,p==="string"&&c.substring(0,6)==="var(--"){if(c=In(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var y=e.style.perspective;e.style.perspective=c,c=In(e,"perspective"),y?e.style.perspective=y:Fr(e,"perspective")}f=parseFloat(c)}if(S||(w=e._gsap,w.renderTransform&&!t.parseTransform||Za(e,t.parseTransform),C=t.smoothOrigin!==!1&&w.smooth,S=this._pt=new xn(this._pt,a,_t,0,1,w.renderTransform,w,0,-1),S.dep=1),_==="scale")this._pt=new xn(this._pt,w,"scaleY",w.scaleY,(v?mo(w.scaleY,v+f):f)-w.scaleY||0,$d),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(yn,0,a[yn]),c=w1(c),w.svg?Zd(e,c,0,C,0,this):(d=parseFloat(c.split(" ")[2])||0,d!==w.zOrigin&&xr(this,w,"zOrigin",w.zOrigin,d),xr(this,a,_,Zu(u),Zu(c)));continue}else if(_==="svgOrigin"){Zd(e,c,1,C,0,this);continue}else if(_ in Yx){P1(this,w,_,h,v?mo(h,v+c):c);continue}else if(_==="smoothOrigin"){xr(this,w,"smooth",w.smooth,c);continue}else if(_==="force3D"){w[_]=c;continue}else if(_==="transform"){b1(this,c,e);continue}}else _ in a||(_=Do(_)||_);if(x||(f||f===0)&&(h||h===0)&&!c1.test(c)&&_ in a)m=(u+"").substr((h+"").length),f||(f=0),d=Kt(c)||(_ in Un.units?Un.units[_]:m),m!==d&&(h=Or(e,_,u,d)),this._pt=new xn(this._pt,x?w:a,_,h,(v?mo(h,v+f):f)-h,!x&&(d==="px"||_==="zIndex")&&t.autoRound!==!1?p1:$d),this._pt.u=d||0,x&&L!==c?(this._pt.b=u,this._pt.e=L,this._pt.r=h1):m!==d&&d!=="%"&&(this._pt.b=u,this._pt.r=d1);else if(_ in a)T1.call(this,e,_,u,v?v+c:c);else if(_ in e)this.add(e,_,u||e[_],v?v+c:c,r,s);else if(_!=="parseTransform"){kp(_,c);continue}x||(_ in a?R.push(_,0,a[_]):typeof e[_]=="function"?R.push(_,2,e[_]()):R.push(_,1,u||e[_])),o.push(_)}}M&&kx(this)},render:function(e,t){if(t.tween._time||!qp())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:zi,aliases:Ei,getSetter:function(e,t,i){var r=Ei[t];return r&&r.indexOf(",")<0&&(t=r),t in Zi&&t!==yn&&(e._gsap.x||zi(e,"x"))?i&&N_===i?t==="scale"?v1:g1:(N_=i||{})&&(t==="scale"?x1:y1):e.style&&!Up(e.style[t])?m1:~t.indexOf("-")?_1:jp(e,t)},core:{_removeProperty:Fr,_getMatrix:Zp}};Mn.utils.checkPrefix=Do;Mn.core.getStyleSaver=Gx;(function(n,e,t,i){var r=vn(n+","+e+","+t,function(s){Zi[s]=1});vn(e,function(s){Un.units[s]="deg",Yx[s]=1}),Ei[r[13]]=n+","+e,vn(i,function(s){var o=s.split(":");Ei[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");vn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Un.units[n]="px"});Mn.registerPlugin(Kx);var Rt=Mn.registerPlugin(Kx)||Mn;Rt.core.Tween;const L1={"|b1":{bytes:1,get:(n,e)=>n.getInt8(e)?1:0},"|u1":{bytes:1,get:(n,e)=>n.getUint8(e)},"|i1":{bytes:1,get:(n,e)=>n.getInt8(e)},"<u2":{bytes:2,get:(n,e)=>n.getUint16(e,!0)},"<i2":{bytes:2,get:(n,e)=>n.getInt16(e,!0)},"<u4":{bytes:4,get:(n,e)=>n.getUint32(e,!0)},"<i4":{bytes:4,get:(n,e)=>n.getInt32(e,!0)},"<f4":{bytes:4,get:(n,e)=>n.getFloat32(e,!0)},"<f8":{bytes:8,get:(n,e)=>n.getFloat64(e,!0)}};function G_(n){var d,v,x;const e=new Uint8Array(n);if(String.fromCharCode(...e.slice(0,6))!=="NUMPY")throw new Error("not a .npy file (bad magic)");const i=e[6],r=i<=1?2:4,s=new DataView(n),o=8+r,a=i<=1?s.getUint16(8,!0):s.getUint32(8,!0),l=new TextDecoder("latin1").decode(e.slice(o,o+a)),u=(d=/'descr':\s*'([^']+)'/.exec(l))==null?void 0:d[1],c=((v=/'fortran_order':\s*(True|False)/.exec(l))==null?void 0:v[1])==="True",f=(x=/'shape':\s*\(([^)]*)\)/.exec(l))==null?void 0:x[1];if(!u||f===void 0)throw new Error("malformed .npy header");const h=f.split(",").map(S=>parseInt(S.trim(),10)).filter(S=>!Number.isNaN(S)),p=L1[u];if(!p)throw new Error(`unsupported dtype ${u} (use float32/uint8/int16 volumes)`);const g=o+a,_=h.reduce((S,w)=>S*w,1);if(g+_*p.bytes>e.length)throw new Error("file truncated");const m=new Float32Array(_);if(u==="<f4")m.set(new Float32Array(n,g,_));else for(let S=0;S<_;S++)m[S]=p.get(s,g+S*p.bytes);if(c&&h.length===3){const[S,w,C]=h,M=new Float32Array(_);for(let R=0;R<S;R++)for(let L=0;L<w;L++)for(let y=0;y<C;y++)M[(R*w+L)*C+y]=m[(y*w+L)*S+R];m.set(M)}return{data:m,shape:h,dtype:u}}async function W_(n){var a;const e=await createImageBitmap(n),t=256,i=document.createElement("canvas");i.width=i.height=t;const r=i.getContext("2d");r.drawImage(e,0,0,t,t);const s=r.getImageData(0,0,t,t).data,o=new Float32Array(t*t);for(let l=0;l<t*t;l++)o[l]=(.299*s[l*4]+.587*s[l*4+1]+.114*s[l*4+2])/255;return(a=e.close)==null||a.call(e),{data:o,shape:[1,t,t],dtype:"image"}}async function D1(n){const e=await n.arrayBuffer();if(n.name.toLowerCase().endsWith(".npy"))return G_(e);if(n.type.startsWith("image/"))return W_(n);try{return G_(e)}catch{return W_(n)}}function X_(n,e){const[,t,i]=n.shape,r=t*i;return n.data.subarray(e*r,(e+1)*r)}async function I1(n){const e=await crypto.subtle.digest("SHA-1",n);return[...new Uint8Array(e)].map(t=>t.toString(16).padStart(2,"0")).join("").slice(0,20)}function N1(n){return n>=1e9?`${(n/1e9).toFixed(1)} GB`:n>=1e6?`${(n/1e6).toFixed(1)} MB`:n>=1e3?`${(n/1e3).toFixed(1)} KB`:`${n} B`}const Xi=n=>Math.min(1,Math.max(0,n));function Rs(n){const e=new Uint8Array(768);for(let t=0;t<256;t++){const[i,r,s]=n(t/255);e[t*3]=Xi(i)*255,e[t*3+1]=Xi(r)*255,e[t*3+2]=Xi(s)*255}return e}const U1=Rs(n=>[n,n,n]),F1=Rs(n=>{const e=n<.75?.8888888888888888*n:.6666666666666666*n+.08333333333333333,t=n<.375?23/24*n:n<.75?11/12*n+1/24:n,i=n<.375?3/4*n:n<.75?35/36*n+1/36:n;return[t,e,i]}),j_=[[0,[68,1,84]],[.25,[59,82,139]],[.5,[33,145,140]],[.75,[94,201,98]],[1,[253,231,37]]];function O1(n){return Rs(e=>{const t=e*(n.length-1),i=Math.min(n.length-2,Math.floor(t)),r=t-i,[s,o]=[n[i][1],n[i+1][1]];return s.map((a,l)=>(a+r*(o[l]-a))/255)})}const k1=Rs(n=>{const e=Xi(1.5-Math.abs(4*n-3)),t=Xi(1.5-Math.abs(4*n-2)),i=Xi(1.5-Math.abs(4*n-1));return[e,t,i]}),z1=Rs(n=>{const e=Xi(n/.375),t=Xi((n-.375)/.375),i=Xi((n-.75)/.25);return[e,t,i]}),B1=Rs(n=>[n*n,n,.3+.7*n]),V1=Rs(n=>[Math.sqrt(n),n,Math.pow(1-n,1.5)]),Qu={Grayscale:U1,Bone:F1,Viridis:j_&&O1(j_),Rainbow:k1,Hot:z1,Ice:B1,RGB:V1},H1=Object.keys(Qu);function G1(n){const e=Qu[n],t=[];for(let i=0;i<=8;i++){const r=Math.round(i/8*255);t.push(`rgb(${e[r*3]},${e[r*3+1]},${e[r*3+2]}) ${i*12.5}%`)}return`linear-gradient(90deg, ${t.join(",")})`}const W1={},Zx="mrnet_api_mode",Tc=typeof import.meta<"u"&&W1||{},Qx=Tc.VITE_API_BASE||"/api",pf=Tc.VITE_API_KEY||"",Y_=Tc.VITE_API_KEY_HEADER||"Authorization";function Jx(){return pf?Y_.toLowerCase()==="authorization"?{Authorization:`Bearer ${pf}`}:{[Y_]:pf}:{}}let hr=null;function ey(){if(hr)return hr;try{const n=localStorage.getItem(Zx);if(n==="mock"||n==="live")return hr=n}catch{}return hr=Tc.VITE_API_MODE==="live"?"live":"mock",hr}function X1(n){hr=n==="live"?"live":"mock";try{localStorage.setItem(Zx,hr)}catch{}return hr}const Qd=n=>new Promise(e=>setTimeout(e,n)),ty=["abnormal/axial","abnormal/coronal","abnormal/sagittal","acl/axial","acl/coronal","acl/sagittal","meniscus/axial","meniscus/coronal","meniscus/sagittal"];function mf(n){let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return(e>>>0)/4294967296}async function j1(){return await Qd(250),{online:!0,models:ty,any:!0,mock:!0}}async function Y1(n,e,t,i){i==null||i("uploading"),await Qd(350+450*mf(`${n.name}:${n.size}:up`)),i==null||i("analyzing"),await Qd(600+700*mf(`${n.name}:${e}:${t}:run`));const r=.04+.92*mf(`${n.name}|${n.size}|${e}|${t}`),s=Math.round(r*1e4)/1e4,o=s>=.5;return{task:e,plane:t,probability:s,label:o?1:0,class:o?e:"normal",mock:!0}}const $1=Object.freeze(Object.defineProperty({__proto__:null,MOCK_MODELS:ty,health:j1,predict:Y1},Symbol.toStringTag,{value:"Module"}));async function q1(){const n=await fetch(`${Qx}/health`,{headers:Jx(),signal:AbortSignal.timeout(8e3)});if(!n.ok)throw new Error(`health ${n.status}`);const e=await n.json();return{online:!0,models:e.models_available||[],any:(e.models_available||[]).length>0,mock:!1}}async function K1(n,e,t,i){const r=new FormData;r.append("file",n,n.name||"exam.npy"),i==null||i("uploading");const s=await fetch(`${Qx}/predict?task=${encodeURIComponent(e)}&plane=${encodeURIComponent(t)}`,{method:"POST",body:r,headers:Jx(),signal:AbortSignal.timeout(12e4)});if(i==null||i("done"),s.status===404)throw Object.assign(new Error("No trained model for this task/plane on the server."),{status:404});if(s.status===400)throw Object.assign(new Error("Server rejected the file — is it a valid .npy volume?"),{status:400});if(s.status===401||s.status===403)throw Object.assign(new Error("Unauthorized — check VITE_API_KEY / VITE_API_KEY_HEADER."),{status:s.status});if(!s.ok)throw new Error(`predict failed (${s.status})`);return s.json()}const Z1=Object.freeze(Object.defineProperty({__proto__:null,health:q1,predict:K1},Symbol.toStringTag,{value:"Module"})),ny={abnormal:"Abnormality",acl:"ACL tear",meniscus:"Meniscal tear"},iy=()=>ey()==="live"?Z1:$1;function Q1(){return iy().health()}function J1(n,e,t,i){return iy().predict(n,e,t,i)}function eT(n){const e=ny[n.task]||n.task,t=n.label===1,i=Math.round(100*Math.max(n.probability,1-n.probability));return{title:t?`${e}: positive`:`${e}: negative`,pos:t,conf:i,prob:n.probability}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qp="169",tT=0,$_=1,nT=2,ry=1,iT=2,Ui=3,kr=0,Sn=1,Bi=2,Lr=0,vo=1,q_=2,K_=3,Z_=4,rT=5,rs=100,sT=101,oT=102,aT=103,lT=104,uT=200,cT=201,fT=202,dT=203,Jd=204,eh=205,hT=206,pT=207,mT=208,_T=209,gT=210,vT=211,xT=212,yT=213,ST=214,th=0,nh=1,ih=2,Io=3,rh=4,sh=5,oh=6,ah=7,sy=0,MT=1,ET=2,Dr=0,TT=1,wT=2,AT=3,CT=4,RT=5,PT=6,bT=7,oy=300,No=301,Uo=302,lh=303,uh=304,wc=306,ch=1e3,yr=1001,fh=1002,Zt=1003,LT=1004,bl=1005,Yn=1006,_f=1007,cs=1008,Qi=1009,ay=1010,ly=1011,Qa=1012,Jp=1013,Es=1014,fi=1015,sl=1016,em=1017,tm=1018,Fo=1020,uy=35902,cy=1021,fy=1022,Zn=1023,dy=1024,hy=1025,xo=1026,Oo=1027,Ju=1028,nm=1029,py=1030,im=1031,rm=1033,du=33776,hu=33777,pu=33778,mu=33779,dh=35840,hh=35841,ph=35842,mh=35843,_h=36196,gh=37492,vh=37496,xh=37808,yh=37809,Sh=37810,Mh=37811,Eh=37812,Th=37813,wh=37814,Ah=37815,Ch=37816,Rh=37817,Ph=37818,bh=37819,Lh=37820,Dh=37821,_u=36492,Ih=36494,Nh=36495,my=36283,Uh=36284,Fh=36285,Oh=36286,DT=3200,IT=3201,NT=0,UT=1,pr="",xi="srgb",Gr="srgb-linear",sm="display-p3",Ac="display-p3-linear",ec="linear",ut="srgb",tc="rec709",nc="p3",Is=7680,Q_=519,FT=512,OT=513,kT=514,_y=515,zT=516,BT=517,VT=518,HT=519,J_=35044,eg="300 es",Gi=2e3,ic=2001;class Go{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gf=Math.PI/180,kh=180/Math.PI;function ol(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function fn(n,e,t){return Math.max(e,Math.min(t,n))}function GT(n,e){return(n%e+e)%e}function vf(n,e,t){return(1-t)*n+t*e}function ea(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function un(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class et{constructor(e=0,t=0){et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(fn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,t,i,r,s,o,a,l,u){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],p=i[5],g=i[8],_=r[0],m=r[3],d=r[6],v=r[1],x=r[4],S=r[7],w=r[2],C=r[5],M=r[8];return s[0]=o*_+a*v+l*w,s[3]=o*m+a*x+l*C,s[6]=o*d+a*S+l*M,s[1]=u*_+c*v+f*w,s[4]=u*m+c*x+f*C,s[7]=u*d+c*S+f*M,s[2]=h*_+p*v+g*w,s[5]=h*m+p*x+g*C,s[8]=h*d+p*S+g*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,h=a*l-c*s,p=u*s-o*l,g=t*f+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*u-c*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(c*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(i*l-u*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(xf.makeScale(e,t)),this}rotate(e){return this.premultiply(xf.makeRotation(-e)),this}translate(e,t){return this.premultiply(xf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xf=new Oe;function gy(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function rc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function WT(){const n=rc("canvas");return n.style.display="block",n}const tg={};function gu(n){n in tg||(tg[n]=!0,console.warn(n))}function XT(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function jT(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function YT(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ng=new Oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ig=new Oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ta={[Gr]:{transfer:ec,primaries:tc,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[xi]:{transfer:ut,primaries:tc,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ac]:{transfer:ec,primaries:nc,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(ig),fromReference:n=>n.applyMatrix3(ng)},[sm]:{transfer:ut,primaries:nc,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(ig),fromReference:n=>n.applyMatrix3(ng).convertLinearToSRGB()}},$T=new Set([Gr,Ac]),Ze={enabled:!0,_workingColorSpace:Gr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!$T.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=ta[e].toReference,r=ta[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ta[n].primaries},getTransfer:function(n){return n===pr?ec:ta[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(ta[e].luminanceCoefficients)}};function yo(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function yf(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ns;class qT{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ns===void 0&&(Ns=rc("canvas")),Ns.width=e.width,Ns.height=e.height;const i=Ns.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ns}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=rc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=yo(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(yo(t[i]/255)*255):t[i]=yo(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let KT=0;class vy{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:KT++}),this.uuid=ol(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Sf(r[o].image)):s.push(Sf(r[o]))}else s=Sf(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Sf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?qT.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ZT=0;class rn extends Go{constructor(e=rn.DEFAULT_IMAGE,t=rn.DEFAULT_MAPPING,i=yr,r=yr,s=Yn,o=cs,a=Zn,l=Qi,u=rn.DEFAULT_ANISOTROPY,c=pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ZT++}),this.uuid=ol(),this.name="",this.source=new vy(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==oy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ch:e.x=e.x-Math.floor(e.x);break;case yr:e.x=e.x<0?0:1;break;case fh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ch:e.y=e.y-Math.floor(e.y);break;case yr:e.y=e.y<0?0:1;break;case fh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=oy;rn.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,t=0,i=0,r=1){wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,S=(p+1)/2,w=(d+1)/2,C=(c+h)/4,M=(f+_)/4,R=(g+m)/4;return x>S&&x>w?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=C/i,s=M/i):S>w?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=R/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=M/s,r=R/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-c)*(h-c));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-_)/v,this.z=(h-c)/v,this.w=Math.acos((u+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class QT extends Go{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new rn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new vy(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ts extends QT{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class xy extends rn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class JT extends rn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class al{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||u!==p||c!==g){let m=1-a;const d=l*h+u*p+c*g+f*_,v=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const w=Math.sqrt(x),C=Math.atan2(w,d*v);m=Math.sin(m*C)/w,a=Math.sin(a*C)/w}const S=a*v;if(l=l*m+h*S,u=u*m+p*S,c=c*m+g*S,f=f*m+_*S,m===1-a){const w=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=w,u*=w,c*=w,f*=w}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+c*f+l*p-u*h,e[t+1]=l*g+c*h+u*f-a*p,e[t+2]=u*g+c*p+a*h-l*f,e[t+3]=c*g-a*f-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*c*f+u*p*g,this._y=u*p*f-h*c*g,this._z=u*c*g+h*p*f,this._w=u*c*f-h*p*g;break;case"YXZ":this._x=h*c*f+u*p*g,this._y=u*p*f-h*c*g,this._z=u*c*g-h*p*f,this._w=u*c*f+h*p*g;break;case"ZXY":this._x=h*c*f-u*p*g,this._y=u*p*f+h*c*g,this._z=u*c*g+h*p*f,this._w=u*c*f-h*p*g;break;case"ZYX":this._x=h*c*f-u*p*g,this._y=u*p*f+h*c*g,this._z=u*c*g-h*p*f,this._w=u*c*f+h*p*g;break;case"YZX":this._x=h*c*f+u*p*g,this._y=u*p*f+h*c*g,this._z=u*c*g-h*p*f,this._w=u*c*f-h*p*g;break;case"XZY":this._x=h*c*f-u*p*g,this._y=u*p*f-h*c*g,this._z=u*c*g+h*p*f,this._w=u*c*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(fn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Mf.copy(this).projectOnVector(e),this.sub(Mf)}reflect(e){return this.sub(Mf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(fn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mf=new W,rg=new al;class ll{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ii):ii.fromBufferAttribute(s,o),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ll.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ll.copy(i.boundingBox)),Ll.applyMatrix4(e.matrixWorld),this.union(Ll)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(na),Dl.subVectors(this.max,na),Us.subVectors(e.a,na),Fs.subVectors(e.b,na),Os.subVectors(e.c,na),ir.subVectors(Fs,Us),rr.subVectors(Os,Fs),Yr.subVectors(Us,Os);let t=[0,-ir.z,ir.y,0,-rr.z,rr.y,0,-Yr.z,Yr.y,ir.z,0,-ir.x,rr.z,0,-rr.x,Yr.z,0,-Yr.x,-ir.y,ir.x,0,-rr.y,rr.x,0,-Yr.y,Yr.x,0];return!Ef(t,Us,Fs,Os,Dl)||(t=[1,0,0,0,1,0,0,0,1],!Ef(t,Us,Fs,Os,Dl))?!1:(Il.crossVectors(ir,rr),t=[Il.x,Il.y,Il.z],Ef(t,Us,Fs,Os,Dl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const bi=[new W,new W,new W,new W,new W,new W,new W,new W],ii=new W,Ll=new ll,Us=new W,Fs=new W,Os=new W,ir=new W,rr=new W,Yr=new W,na=new W,Dl=new W,Il=new W,$r=new W;function Ef(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){$r.fromArray(n,s);const a=r.x*Math.abs($r.x)+r.y*Math.abs($r.y)+r.z*Math.abs($r.z),l=e.dot($r),u=t.dot($r),c=i.dot($r);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const ew=new ll,ia=new W,Tf=new W;class om{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ew.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ia.subVectors(e,this.center);const t=ia.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ia,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ia.copy(e.center).add(Tf)),this.expandByPoint(ia.copy(e.center).sub(Tf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Li=new W,wf=new W,Nl=new W,sr=new W,Af=new W,Ul=new W,Cf=new W;class tw{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,t),Li.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){wf.copy(e).add(t).multiplyScalar(.5),Nl.copy(t).sub(e).normalize(),sr.copy(this.origin).sub(wf);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Nl),a=sr.dot(this.direction),l=-sr.dot(Nl),u=sr.lengthSq(),c=Math.abs(1-o*o);let f,h,p,g;if(c>0)if(f=o*l-a,h=o*a-l,g=s*c,f>=0)if(h>=-g)if(h<=g){const _=1/c;f*=_,h*=_,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(wf).addScaledVector(Nl,h),p}intersectSphere(e,t){Li.subVectors(e.center,this.origin);const i=Li.dot(this.direction),r=Li.dot(Li)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,t,i,r,s){Af.subVectors(t,e),Ul.subVectors(i,e),Cf.crossVectors(Af,Ul);let o=this.direction.dot(Cf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;sr.subVectors(this.origin,e);const l=a*this.direction.dot(Ul.crossVectors(sr,Ul));if(l<0)return null;const u=a*this.direction.dot(Af.cross(sr));if(u<0||l+u>o)return null;const c=-a*sr.dot(Cf);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lt{constructor(e,t,i,r,s,o,a,l,u,c,f,h,p,g,_,m){Lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,f,h,p,g,_,m)}set(e,t,i,r,s,o,a,l,u,c,f,h,p,g,_,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ks.setFromMatrixColumn(e,0).length(),s=1/ks.setFromMatrixColumn(e,1).length(),o=1/ks.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*c,p=o*f,g=a*c,_=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=p+g*u,t[5]=h-_*u,t[9]=-a*l,t[2]=_-h*u,t[6]=g+p*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*c,p=l*f,g=u*c,_=u*f;t[0]=h+_*a,t[4]=g*a-p,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=p*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*c,p=l*f,g=u*c,_=u*f;t[0]=h-_*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*c,t[9]=_-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*c,p=o*f,g=a*c,_=a*f;t[0]=l*c,t[4]=g*u-p,t[8]=h*u+_,t[1]=l*f,t[5]=_*u+h,t[9]=p*u-g,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,g=a*l,_=a*u;t[0]=l*c,t[4]=_-h*f,t[8]=g*f+p,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,p=o*u,g=a*l,_=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=h*f+_,t[5]=o*c,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*c,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nw,e,iw)}lookAt(e,t,i){const r=this.elements;return An.subVectors(e,t),An.lengthSq()===0&&(An.z=1),An.normalize(),or.crossVectors(i,An),or.lengthSq()===0&&(Math.abs(i.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),or.crossVectors(i,An)),or.normalize(),Fl.crossVectors(An,or),r[0]=or.x,r[4]=Fl.x,r[8]=An.x,r[1]=or.y,r[5]=Fl.y,r[9]=An.y,r[2]=or.z,r[6]=Fl.z,r[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],v=i[3],x=i[7],S=i[11],w=i[15],C=r[0],M=r[4],R=r[8],L=r[12],y=r[1],T=r[5],k=r[9],F=r[13],H=r[2],K=r[6],O=r[10],$=r[14],b=r[3],q=r[7],Z=r[11],Q=r[15];return s[0]=o*C+a*y+l*H+u*b,s[4]=o*M+a*T+l*K+u*q,s[8]=o*R+a*k+l*O+u*Z,s[12]=o*L+a*F+l*$+u*Q,s[1]=c*C+f*y+h*H+p*b,s[5]=c*M+f*T+h*K+p*q,s[9]=c*R+f*k+h*O+p*Z,s[13]=c*L+f*F+h*$+p*Q,s[2]=g*C+_*y+m*H+d*b,s[6]=g*M+_*T+m*K+d*q,s[10]=g*R+_*k+m*O+d*Z,s[14]=g*L+_*F+m*$+d*Q,s[3]=v*C+x*y+S*H+w*b,s[7]=v*M+x*T+S*K+w*q,s[11]=v*R+x*k+S*O+w*Z,s[15]=v*L+x*F+S*$+w*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15];return g*(+s*l*f-r*u*f-s*a*h+i*u*h+r*a*p-i*l*p)+_*(+t*l*p-t*u*h+s*o*h-r*o*p+r*u*c-s*l*c)+m*(+t*u*f-t*a*p-s*o*f+i*o*p+s*a*c-i*u*c)+d*(-r*a*c-t*l*f+t*a*h+r*o*f-i*o*h+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],v=f*m*u-_*h*u+_*l*p-a*m*p-f*l*d+a*h*d,x=g*h*u-c*m*u-g*l*p+o*m*p+c*l*d-o*h*d,S=c*_*u-g*f*u+g*a*p-o*_*p-c*a*d+o*f*d,w=g*f*l-c*_*l-g*a*h+o*_*h+c*a*m-o*f*m,C=t*v+i*x+r*S+s*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/C;return e[0]=v*M,e[1]=(_*h*s-f*m*s-_*r*p+i*m*p+f*r*d-i*h*d)*M,e[2]=(a*m*s-_*l*s+_*r*u-i*m*u-a*r*d+i*l*d)*M,e[3]=(f*l*s-a*h*s-f*r*u+i*h*u+a*r*p-i*l*p)*M,e[4]=x*M,e[5]=(c*m*s-g*h*s+g*r*p-t*m*p-c*r*d+t*h*d)*M,e[6]=(g*l*s-o*m*s-g*r*u+t*m*u+o*r*d-t*l*d)*M,e[7]=(o*h*s-c*l*s+c*r*u-t*h*u-o*r*p+t*l*p)*M,e[8]=S*M,e[9]=(g*f*s-c*_*s-g*i*p+t*_*p+c*i*d-t*f*d)*M,e[10]=(o*_*s-g*a*s+g*i*u-t*_*u-o*i*d+t*a*d)*M,e[11]=(c*a*s-o*f*s-c*i*u+t*f*u+o*i*p-t*a*p)*M,e[12]=w*M,e[13]=(c*_*r-g*f*r+g*i*h-t*_*h-c*i*m+t*f*m)*M,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*m-t*a*m)*M,e[15]=(o*f*r-c*a*r+c*i*l-t*f*l-o*i*h+t*a*h)*M,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,f=a+a,h=s*u,p=s*c,g=s*f,_=o*c,m=o*f,d=a*f,v=l*u,x=l*c,S=l*f,w=i.x,C=i.y,M=i.z;return r[0]=(1-(_+d))*w,r[1]=(p+S)*w,r[2]=(g-x)*w,r[3]=0,r[4]=(p-S)*C,r[5]=(1-(h+d))*C,r[6]=(m+v)*C,r[7]=0,r[8]=(g+x)*M,r[9]=(m-v)*M,r[10]=(1-(h+_))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ks.set(r[0],r[1],r[2]).length();const o=ks.set(r[4],r[5],r[6]).length(),a=ks.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ri.copy(this);const u=1/s,c=1/o,f=1/a;return ri.elements[0]*=u,ri.elements[1]*=u,ri.elements[2]*=u,ri.elements[4]*=c,ri.elements[5]*=c,ri.elements[6]*=c,ri.elements[8]*=f,ri.elements[9]*=f,ri.elements[10]*=f,t.setFromRotationMatrix(ri),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Gi){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let p,g;if(a===Gi)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ic)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Gi){const l=this.elements,u=1/(t-e),c=1/(i-r),f=1/(o-s),h=(t+e)*u,p=(i+r)*c;let g,_;if(a===Gi)g=(o+s)*f,_=-2*f;else if(a===ic)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ks=new W,ri=new Lt,nw=new W(0,0,0),iw=new W(1,1,1),or=new W,Fl=new W,An=new W,sg=new Lt,og=new al;class Ji{constructor(e=0,t=0,i=0,r=Ji.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(fn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-fn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(fn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-fn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(fn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-fn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return sg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return og.setFromEuler(this),this.setFromQuaternion(og,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ji.DEFAULT_ORDER="XYZ";class yy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rw=0;const ag=new W,zs=new al,Di=new Lt,Ol=new W,ra=new W,sw=new W,ow=new al,lg=new W(1,0,0),ug=new W(0,1,0),cg=new W(0,0,1),fg={type:"added"},aw={type:"removed"},Bs={type:"childadded",child:null},Rf={type:"childremoved",child:null};class Fn extends Go{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rw++}),this.uuid=ol(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fn.DEFAULT_UP.clone();const e=new W,t=new Ji,i=new al,r=new W(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Lt},normalMatrix:{value:new Oe}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=Fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.multiply(zs),this}rotateOnWorldAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.premultiply(zs),this}rotateX(e){return this.rotateOnAxis(lg,e)}rotateY(e){return this.rotateOnAxis(ug,e)}rotateZ(e){return this.rotateOnAxis(cg,e)}translateOnAxis(e,t){return ag.copy(e).applyQuaternion(this.quaternion),this.position.add(ag.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lg,e)}translateY(e){return this.translateOnAxis(ug,e)}translateZ(e){return this.translateOnAxis(cg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ol.copy(e):Ol.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(ra,Ol,this.up):Di.lookAt(Ol,ra,this.up),this.quaternion.setFromRotationMatrix(Di),r&&(Di.extractRotation(r.matrixWorld),zs.setFromRotationMatrix(Di),this.quaternion.premultiply(zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fg),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(aw),Rf.child=e,this.dispatchEvent(Rf),Rf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fg),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,e,sw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,ow,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Fn.DEFAULT_UP=new W(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const si=new W,Ii=new W,Pf=new W,Ni=new W,Vs=new W,Hs=new W,dg=new W,bf=new W,Lf=new W,Df=new W,If=new wt,Nf=new wt,Uf=new wt;class ci{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),si.subVectors(e,t),r.cross(si);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){si.subVectors(r,t),Ii.subVectors(i,t),Pf.subVectors(e,t);const o=si.dot(si),a=si.dot(Ii),l=si.dot(Pf),u=Ii.dot(Ii),c=Ii.dot(Pf),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(u*l-a*c)*h,g=(o*c-a*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ni.x),l.addScaledVector(o,Ni.y),l.addScaledVector(a,Ni.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return If.setScalar(0),Nf.setScalar(0),Uf.setScalar(0),If.fromBufferAttribute(e,t),Nf.fromBufferAttribute(e,i),Uf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(If,s.x),o.addScaledVector(Nf,s.y),o.addScaledVector(Uf,s.z),o}static isFrontFacing(e,t,i,r){return si.subVectors(i,t),Ii.subVectors(e,t),si.cross(Ii).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),si.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ci.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return ci.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Vs.subVectors(r,i),Hs.subVectors(s,i),bf.subVectors(e,i);const l=Vs.dot(bf),u=Hs.dot(bf);if(l<=0&&u<=0)return t.copy(i);Lf.subVectors(e,r);const c=Vs.dot(Lf),f=Hs.dot(Lf);if(c>=0&&f<=c)return t.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Vs,o);Df.subVectors(e,s);const p=Vs.dot(Df),g=Hs.dot(Df);if(g>=0&&p<=g)return t.copy(s);const _=p*u-l*g;if(_<=0&&u>=0&&g<=0)return a=u/(u-g),t.copy(i).addScaledVector(Hs,a);const m=c*g-p*f;if(m<=0&&f-c>=0&&p-g>=0)return dg.subVectors(s,r),a=(f-c)/(f-c+(p-g)),t.copy(r).addScaledVector(dg,a);const d=1/(m+_+h);return o=_*d,a=h*d,t.copy(i).addScaledVector(Vs,o).addScaledVector(Hs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Sy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ar={h:0,s:0,l:0},kl={h:0,s:0,l:0};function Ff(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class nt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ze.workingColorSpace){if(e=GT(e,1),t=fn(t,0,1),i=fn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Ff(o,s,e+1/3),this.g=Ff(o,s,e),this.b=Ff(o,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,t=xi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xi){const i=Sy[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yo(e.r),this.g=yo(e.g),this.b=yo(e.b),this}copyLinearToSRGB(e){return this.r=yf(e.r),this.g=yf(e.g),this.b=yf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xi){return Ze.fromWorkingColorSpace($t.copy(this),e),Math.round(fn($t.r*255,0,255))*65536+Math.round(fn($t.g*255,0,255))*256+Math.round(fn($t.b*255,0,255))}getHexString(e=xi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace($t.copy(this),t);const i=$t.r,r=$t.g,s=$t.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=xi){Ze.fromWorkingColorSpace($t.copy(this),e);const t=$t.r,i=$t.g,r=$t.b;return e!==xi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ar),this.setHSL(ar.h+e,ar.s+t,ar.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ar),e.getHSL(kl);const i=vf(ar.h,kl.h,t),r=vf(ar.s,kl.s,t),s=vf(ar.l,kl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new nt;nt.NAMES=Sy;let lw=0;class Cc extends Go{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lw++}),this.uuid=ol(),this.name="",this.type="Material",this.blending=vo,this.side=kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jd,this.blendDst=eh,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=Io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Q_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==vo&&(i.blending=this.blending),this.side!==kr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Jd&&(i.blendSrc=this.blendSrc),this.blendDst!==eh&&(i.blendDst=this.blendDst),this.blendEquation!==rs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Io&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Q_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class My extends Cc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.combine=sy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new W,zl=new et;class Ai{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=J_,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)zl.fromBufferAttribute(this,t),zl.applyMatrix3(e),this.setXY(t,zl.x,zl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ea(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=un(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ea(t,this.array)),t}setX(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ea(t,this.array)),t}setY(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ea(t,this.array)),t}setZ(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ea(t,this.array)),t}setW(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),i=un(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),i=un(i,this.array),r=un(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),i=un(i,this.array),r=un(r,this.array),s=un(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==J_&&(e.usage=this.usage),e}}class Ey extends Ai{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ty extends Ai{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class gs extends Ai{constructor(e,t,i){super(new Float32Array(e),t,i)}}let uw=0;const Gn=new Lt,Of=new Fn,Gs=new W,Cn=new ll,sa=new ll,Ft=new W;class Ps extends Go{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uw++}),this.uuid=ol(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gy(e)?Ty:Ey)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Oe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,t,i){return Gn.makeTranslation(e,t,i),this.applyMatrix4(Gn),this}scale(e,t,i){return Gn.makeScale(e,t,i),this.applyMatrix4(Gn),this}lookAt(e){return Of.lookAt(e),Of.updateMatrix(),this.applyMatrix4(Of.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new gs(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ll);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new om);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];sa.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(Cn.min,sa.min),Cn.expandByPoint(Ft),Ft.addVectors(Cn.max,sa.max),Cn.expandByPoint(Ft)):(Cn.expandByPoint(sa.min),Cn.expandByPoint(sa.max))}Cn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ft.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ft));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Ft.fromBufferAttribute(a,u),l&&(Gs.fromBufferAttribute(e,u),Ft.add(Gs)),r=Math.max(r,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ai(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new W,l[R]=new W;const u=new W,c=new W,f=new W,h=new et,p=new et,g=new et,_=new W,m=new W;function d(R,L,y){u.fromBufferAttribute(i,R),c.fromBufferAttribute(i,L),f.fromBufferAttribute(i,y),h.fromBufferAttribute(s,R),p.fromBufferAttribute(s,L),g.fromBufferAttribute(s,y),c.sub(u),f.sub(u),p.sub(h),g.sub(h);const T=1/(p.x*g.y-g.x*p.y);isFinite(T)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(T),m.copy(f).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(T),a[R].add(_),a[L].add(_),a[y].add(_),l[R].add(m),l[L].add(m),l[y].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,L=v.length;R<L;++R){const y=v[R],T=y.start,k=y.count;for(let F=T,H=T+k;F<H;F+=3)d(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const x=new W,S=new W,w=new W,C=new W;function M(R){w.fromBufferAttribute(r,R),C.copy(w);const L=a[R];x.copy(L),x.sub(w.multiplyScalar(w.dot(L))).normalize(),S.crossVectors(C,L);const T=S.dot(l[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,T)}for(let R=0,L=v.length;R<L;++R){const y=v[R],T=y.start,k=y.count;for(let F=T,H=T+k;F<H;F+=3)M(e.getX(F+0)),M(e.getX(F+1)),M(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ai(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new W,s=new W,o=new W,a=new W,l=new W,u=new W,c=new W,f=new W;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*c;for(let d=0;d<c;d++)h[g++]=u[p++]}return new Ai(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ps,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,p=f.length;h<p;h++)c.push(f[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hg=new Lt,qr=new tw,Bl=new om,pg=new W,Vl=new W,Hl=new W,Gl=new W,kf=new W,Wl=new W,mg=new W,Xl=new W;class di extends Fn{constructor(e=new Ps,t=new My){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Wl.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(kf.fromBufferAttribute(f,e),o?Wl.addScaledVector(kf,c):Wl.addScaledVector(kf.sub(t),c))}t.add(Wl)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Bl.copy(i.boundingSphere),Bl.applyMatrix4(s),qr.copy(e.ray).recast(e.near),!(Bl.containsPoint(qr.origin)===!1&&(qr.intersectSphere(Bl,pg)===null||qr.origin.distanceToSquared(pg)>(e.far-e.near)**2))&&(hg.copy(s).invert(),qr.copy(e.ray).applyMatrix4(hg),!(i.boundingBox!==null&&qr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,qr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],d=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,w=x;S<w;S+=3){const C=a.getX(S),M=a.getX(S+1),R=a.getX(S+2);r=jl(this,d,e,i,u,c,f,C,M,R),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const v=a.getX(m),x=a.getX(m+1),S=a.getX(m+2);r=jl(this,o,e,i,u,c,f,v,x,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],d=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,w=x;S<w;S+=3){const C=S,M=S+1,R=S+2;r=jl(this,d,e,i,u,c,f,C,M,R),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const v=m,x=m+1,S=m+2;r=jl(this,o,e,i,u,c,f,v,x,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function cw(n,e,t,i,r,s,o,a){let l;if(e.side===Sn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===kr,a),l===null)return null;Xl.copy(a),Xl.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Xl);return u<t.near||u>t.far?null:{distance:u,point:Xl.clone(),object:n}}function jl(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,Vl),n.getVertexPosition(l,Hl),n.getVertexPosition(u,Gl);const c=cw(n,e,t,i,Vl,Hl,Gl,mg);if(c){const f=new W;ci.getBarycoord(mg,Vl,Hl,Gl,f),r&&(c.uv=ci.getInterpolatedAttribute(r,a,l,u,f,new et)),s&&(c.uv1=ci.getInterpolatedAttribute(s,a,l,u,f,new et)),o&&(c.normal=ci.getInterpolatedAttribute(o,a,l,u,f,new W),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new W,materialIndex:0};ci.getNormal(Vl,Hl,Gl,h.normal),c.face=h,c.barycoord=f}return c}class ul extends Ps{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new gs(u,3)),this.setAttribute("normal",new gs(c,3)),this.setAttribute("uv",new gs(f,2));function g(_,m,d,v,x,S,w,C,M,R,L){const y=S/M,T=w/R,k=S/2,F=w/2,H=C/2,K=M+1,O=R+1;let $=0,b=0;const q=new W;for(let Z=0;Z<O;Z++){const Q=Z*T-F;for(let re=0;re<K;re++){const ge=re*y-k;q[_]=ge*v,q[m]=Q*x,q[d]=H,u.push(q.x,q.y,q.z),q[_]=0,q[m]=0,q[d]=C>0?1:-1,c.push(q.x,q.y,q.z),f.push(re/M),f.push(1-Z/R),$+=1}}for(let Z=0;Z<R;Z++)for(let Q=0;Q<M;Q++){const re=h+Q+K*Z,ge=h+Q+K*(Z+1),B=h+(Q+1)+K*(Z+1),Y=h+(Q+1)+K*Z;l.push(re,ge,Y),l.push(ge,B,Y),b+=6}a.addGroup(p,b,L),p+=b,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ul(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ko(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function en(n){const e={};for(let t=0;t<n.length;t++){const i=ko(n[t]);for(const r in i)e[r]=i[r]}return e}function fw(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function wy(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const dw={clone:ko,merge:en};var hw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends Cc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hw,this.fragmentShader=pw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ko(e.uniforms),this.uniformsGroups=fw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ay extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=Gi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const lr=new W,_g=new et,gg=new et;class ui extends Ay{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=kh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kh*2*Math.atan(Math.tan(gf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(lr.x,lr.y).multiplyScalar(-e/lr.z),lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(lr.x,lr.y).multiplyScalar(-e/lr.z)}getViewSize(e,t){return this.getViewBounds(e,_g,gg),t.subVectors(gg,_g)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(gf*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ws=-90,Xs=1;class mw extends Fn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ui(Ws,Xs,e,t);r.layers=this.layers,this.add(r);const s=new ui(Ws,Xs,e,t);s.layers=this.layers,this.add(s);const o=new ui(Ws,Xs,e,t);o.layers=this.layers,this.add(o);const a=new ui(Ws,Xs,e,t);a.layers=this.layers,this.add(a);const l=new ui(Ws,Xs,e,t);l.layers=this.layers,this.add(l);const u=new ui(Ws,Xs,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Gi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ic)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(f,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Cy extends rn{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:No,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _w extends Ts{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Cy(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ul(5,5,5),s=new Ri({name:"CubemapFromEquirect",uniforms:ko(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:Lr});s.uniforms.tEquirect.value=t;const o=new di(r,s),a=t.minFilter;return t.minFilter===cs&&(t.minFilter=Yn),new mw(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const zf=new W,gw=new W,vw=new Oe;class ns{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=zf.subVectors(i,t).cross(gw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(zf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||vw.getNormalMatrix(e),r=this.coplanarPoint(zf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kr=new om,Yl=new W;class Ry{constructor(e=new ns,t=new ns,i=new ns,r=new ns,s=new ns,o=new ns){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Gi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],h=r[7],p=r[8],g=r[9],_=r[10],m=r[11],d=r[12],v=r[13],x=r[14],S=r[15];if(i[0].setComponents(l-s,h-u,m-p,S-d).normalize(),i[1].setComponents(l+s,h+u,m+p,S+d).normalize(),i[2].setComponents(l+o,h+c,m+g,S+v).normalize(),i[3].setComponents(l-o,h-c,m-g,S-v).normalize(),i[4].setComponents(l-a,h-f,m-_,S-x).normalize(),t===Gi)i[5].setComponents(l+a,h+f,m+_,S+x).normalize();else if(t===ic)i[5].setComponents(a,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Kr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kr)}intersectsSprite(e){return Kr.center.set(0,0,0),Kr.radius=.7071067811865476,Kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Yl.x=r.normal.x>0?e.max.x:e.min.x,Yl.y=r.normal.y>0?e.max.y:e.min.y,Yl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Yl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Py(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function xw(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,f=u.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l.updateRanges;if(n.bindBuffer(u,a),f.length===0)n.bufferSubData(u,0,c);else{f.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<f.length;p++){const g=f[h],_=f[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let p=0,g=f.length;p<g;p++){const _=f[p];n.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class zo extends Ps{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,h=t/l,p=[],g=[],_=[],m=[];for(let d=0;d<c;d++){const v=d*h-o;for(let x=0;x<u;x++){const S=x*f-s;g.push(S,-v,0),_.push(0,0,1),m.push(x/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<a;v++){const x=v+u*d,S=v+u*(d+1),w=v+1+u*(d+1),C=v+1+u*d;p.push(x,S,C),p.push(S,w,C)}this.setIndex(p),this.setAttribute("position",new gs(g,3)),this.setAttribute("normal",new gs(_,3)),this.setAttribute("uv",new gs(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zo(e.width,e.height,e.widthSegments,e.heightSegments)}}var yw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sw=`#ifdef USE_ALPHAHASH
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
#endif`,Mw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ew=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ww=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Aw=`#ifdef USE_AOMAP
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
#endif`,Cw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rw=`#ifdef USE_BATCHING
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
#endif`,Pw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Iw=`#ifdef USE_IRIDESCENCE
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
#endif`,Nw=`#ifdef USE_BUMPMAP
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
#endif`,Uw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ow=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hw=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Gw=`#define PI 3.141592653589793
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
} // validated`,Ww=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xw=`vec3 transformedNormal = objectNormal;
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
#endif`,jw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$w=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zw=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qw=`#ifdef USE_ENVMAP
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
#endif`,Jw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,eA=`#ifdef USE_ENVMAP
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
#endif`,tA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nA=`#ifdef USE_ENVMAP
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
#endif`,iA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,aA=`#ifdef USE_GRADIENTMAP
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
}`,lA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fA=`uniform bool receiveShadow;
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
#endif`,dA=`#ifdef USE_ENVMAP
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
#endif`,hA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_A=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gA=`PhysicalMaterial material;
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
#endif`,vA=`struct PhysicalMaterial {
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
}`,xA=`
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
#endif`,yA=`#if defined( RE_IndirectDiffuse )
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
#endif`,SA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,MA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,EA=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,AA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,RA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,PA=`#if defined( USE_POINTS_UV )
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
#endif`,bA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,LA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,DA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,IA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,NA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UA=`#ifdef USE_MORPHTARGETS
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
#endif`,FA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,HA=`#ifdef USE_NORMALMAP
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
#endif`,GA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,XA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,YA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$A=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,KA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ZA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,QA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,JA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rC=`float getShadowMask() {
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
}`,sC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oC=`#ifdef USE_SKINNING
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
#endif`,aC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lC=`#ifdef USE_SKINNING
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
#endif`,uC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dC=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hC=`#ifdef USE_TRANSMISSION
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
#endif`,pC=`#ifdef USE_TRANSMISSION
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
#endif`,mC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_C=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yC=`uniform sampler2D t2D;
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
}`,SC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MC=`#ifdef ENVMAP_TYPE_CUBE
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
}`,EC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wC=`#include <common>
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
}`,AC=`#if DEPTH_PACKING == 3200
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
}`,CC=`#define DISTANCE
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
}`,RC=`#define DISTANCE
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
}`,PC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LC=`uniform float scale;
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
}`,DC=`uniform vec3 diffuse;
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
}`,IC=`#include <common>
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
}`,NC=`uniform vec3 diffuse;
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
}`,UC=`#define LAMBERT
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
}`,FC=`#define LAMBERT
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
}`,OC=`#define MATCAP
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
}`,kC=`#define MATCAP
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
}`,zC=`#define NORMAL
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
}`,BC=`#define NORMAL
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
}`,VC=`#define PHONG
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
}`,HC=`#define PHONG
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
}`,GC=`#define STANDARD
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
}`,WC=`#define STANDARD
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
}`,XC=`#define TOON
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
}`,jC=`#define TOON
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
}`,YC=`uniform float size;
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
}`,$C=`uniform vec3 diffuse;
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
}`,qC=`#include <common>
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
}`,KC=`uniform vec3 color;
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
}`,ZC=`uniform float rotation;
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
}`,QC=`uniform vec3 diffuse;
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
}`,Fe={alphahash_fragment:yw,alphahash_pars_fragment:Sw,alphamap_fragment:Mw,alphamap_pars_fragment:Ew,alphatest_fragment:Tw,alphatest_pars_fragment:ww,aomap_fragment:Aw,aomap_pars_fragment:Cw,batching_pars_vertex:Rw,batching_vertex:Pw,begin_vertex:bw,beginnormal_vertex:Lw,bsdfs:Dw,iridescence_fragment:Iw,bumpmap_pars_fragment:Nw,clipping_planes_fragment:Uw,clipping_planes_pars_fragment:Fw,clipping_planes_pars_vertex:Ow,clipping_planes_vertex:kw,color_fragment:zw,color_pars_fragment:Bw,color_pars_vertex:Vw,color_vertex:Hw,common:Gw,cube_uv_reflection_fragment:Ww,defaultnormal_vertex:Xw,displacementmap_pars_vertex:jw,displacementmap_vertex:Yw,emissivemap_fragment:$w,emissivemap_pars_fragment:qw,colorspace_fragment:Kw,colorspace_pars_fragment:Zw,envmap_fragment:Qw,envmap_common_pars_fragment:Jw,envmap_pars_fragment:eA,envmap_pars_vertex:tA,envmap_physical_pars_fragment:dA,envmap_vertex:nA,fog_vertex:iA,fog_pars_vertex:rA,fog_fragment:sA,fog_pars_fragment:oA,gradientmap_pars_fragment:aA,lightmap_pars_fragment:lA,lights_lambert_fragment:uA,lights_lambert_pars_fragment:cA,lights_pars_begin:fA,lights_toon_fragment:hA,lights_toon_pars_fragment:pA,lights_phong_fragment:mA,lights_phong_pars_fragment:_A,lights_physical_fragment:gA,lights_physical_pars_fragment:vA,lights_fragment_begin:xA,lights_fragment_maps:yA,lights_fragment_end:SA,logdepthbuf_fragment:MA,logdepthbuf_pars_fragment:EA,logdepthbuf_pars_vertex:TA,logdepthbuf_vertex:wA,map_fragment:AA,map_pars_fragment:CA,map_particle_fragment:RA,map_particle_pars_fragment:PA,metalnessmap_fragment:bA,metalnessmap_pars_fragment:LA,morphinstance_vertex:DA,morphcolor_vertex:IA,morphnormal_vertex:NA,morphtarget_pars_vertex:UA,morphtarget_vertex:FA,normal_fragment_begin:OA,normal_fragment_maps:kA,normal_pars_fragment:zA,normal_pars_vertex:BA,normal_vertex:VA,normalmap_pars_fragment:HA,clearcoat_normal_fragment_begin:GA,clearcoat_normal_fragment_maps:WA,clearcoat_pars_fragment:XA,iridescence_pars_fragment:jA,opaque_fragment:YA,packing:$A,premultiplied_alpha_fragment:qA,project_vertex:KA,dithering_fragment:ZA,dithering_pars_fragment:QA,roughnessmap_fragment:JA,roughnessmap_pars_fragment:eC,shadowmap_pars_fragment:tC,shadowmap_pars_vertex:nC,shadowmap_vertex:iC,shadowmask_pars_fragment:rC,skinbase_vertex:sC,skinning_pars_vertex:oC,skinning_vertex:aC,skinnormal_vertex:lC,specularmap_fragment:uC,specularmap_pars_fragment:cC,tonemapping_fragment:fC,tonemapping_pars_fragment:dC,transmission_fragment:hC,transmission_pars_fragment:pC,uv_pars_fragment:mC,uv_pars_vertex:_C,uv_vertex:gC,worldpos_vertex:vC,background_vert:xC,background_frag:yC,backgroundCube_vert:SC,backgroundCube_frag:MC,cube_vert:EC,cube_frag:TC,depth_vert:wC,depth_frag:AC,distanceRGBA_vert:CC,distanceRGBA_frag:RC,equirect_vert:PC,equirect_frag:bC,linedashed_vert:LC,linedashed_frag:DC,meshbasic_vert:IC,meshbasic_frag:NC,meshlambert_vert:UC,meshlambert_frag:FC,meshmatcap_vert:OC,meshmatcap_frag:kC,meshnormal_vert:zC,meshnormal_frag:BC,meshphong_vert:VC,meshphong_frag:HC,meshphysical_vert:GC,meshphysical_frag:WC,meshtoon_vert:XC,meshtoon_frag:jC,points_vert:YC,points_frag:$C,shadow_vert:qC,shadow_frag:KC,sprite_vert:ZC,sprite_frag:QC},ue={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},yi={basic:{uniforms:en([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:en([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new nt(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:en([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:en([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:en([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new nt(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:en([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:en([ue.points,ue.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:en([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:en([ue.common,ue.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:en([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:en([ue.sprite,ue.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:en([ue.common,ue.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:en([ue.lights,ue.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};yi.physical={uniforms:en([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const $l={r:0,b:0,g:0},Zr=new Ji,JC=new Lt;function eR(n,e,t,i,r,s,o){const a=new nt(0);let l=s===!0?0:1,u,c,f=null,h=0,p=null;function g(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function _(v){let x=!1;const S=g(v);S===null?d(a,l):S&&S.isColor&&(d(S,1),x=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,x){const S=g(x);S&&(S.isCubeTexture||S.mapping===wc)?(c===void 0&&(c=new di(new ul(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:ko(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,C,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Zr.copy(x.backgroundRotation),Zr.x*=-1,Zr.y*=-1,Zr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Zr.y*=-1,Zr.z*=-1),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(JC.makeRotationFromEuler(Zr)),c.material.toneMapped=Ze.getTransfer(S.colorSpace)!==ut,(f!==S||h!==S.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=S,h=S.version,p=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(u===void 0&&(u=new di(new zo(2,2),new Ri({name:"BackgroundMaterial",uniforms:ko(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:kr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=S,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=Ze.getTransfer(S.colorSpace)!==ut,S.matrixAutoUpdate===!0&&S.updateMatrix(),u.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||h!==S.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=S,h=S.version,p=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function d(v,x){v.getRGB($l,wy(n)),i.buffers.color.setClear($l.r,$l.g,$l.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,d(a,l)},render:_,addToRenderList:m}}function tR(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(y,T,k,F,H){let K=!1;const O=f(F,k,T);s!==O&&(s=O,u(s.object)),K=p(y,F,k,H),K&&g(y,F,k,H),H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,S(y,T,k,F),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return n.createVertexArray()}function u(y){return n.bindVertexArray(y)}function c(y){return n.deleteVertexArray(y)}function f(y,T,k){const F=k.wireframe===!0;let H=i[y.id];H===void 0&&(H={},i[y.id]=H);let K=H[T.id];K===void 0&&(K={},H[T.id]=K);let O=K[F];return O===void 0&&(O=h(l()),K[F]=O),O}function h(y){const T=[],k=[],F=[];for(let H=0;H<t;H++)T[H]=0,k[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:k,attributeDivisors:F,object:y,attributes:{},index:null}}function p(y,T,k,F){const H=s.attributes,K=T.attributes;let O=0;const $=k.getAttributes();for(const b in $)if($[b].location>=0){const Z=H[b];let Q=K[b];if(Q===void 0&&(b==="instanceMatrix"&&y.instanceMatrix&&(Q=y.instanceMatrix),b==="instanceColor"&&y.instanceColor&&(Q=y.instanceColor)),Z===void 0||Z.attribute!==Q||Q&&Z.data!==Q.data)return!0;O++}return s.attributesNum!==O||s.index!==F}function g(y,T,k,F){const H={},K=T.attributes;let O=0;const $=k.getAttributes();for(const b in $)if($[b].location>=0){let Z=K[b];Z===void 0&&(b==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),b==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor));const Q={};Q.attribute=Z,Z&&Z.data&&(Q.data=Z.data),H[b]=Q,O++}s.attributes=H,s.attributesNum=O,s.index=F}function _(){const y=s.newAttributes;for(let T=0,k=y.length;T<k;T++)y[T]=0}function m(y){d(y,0)}function d(y,T){const k=s.newAttributes,F=s.enabledAttributes,H=s.attributeDivisors;k[y]=1,F[y]===0&&(n.enableVertexAttribArray(y),F[y]=1),H[y]!==T&&(n.vertexAttribDivisor(y,T),H[y]=T)}function v(){const y=s.newAttributes,T=s.enabledAttributes;for(let k=0,F=T.length;k<F;k++)T[k]!==y[k]&&(n.disableVertexAttribArray(k),T[k]=0)}function x(y,T,k,F,H,K,O){O===!0?n.vertexAttribIPointer(y,T,k,H,K):n.vertexAttribPointer(y,T,k,F,H,K)}function S(y,T,k,F){_();const H=F.attributes,K=k.getAttributes(),O=T.defaultAttributeValues;for(const $ in K){const b=K[$];if(b.location>=0){let q=H[$];if(q===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(q=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(q=y.instanceColor)),q!==void 0){const Z=q.normalized,Q=q.itemSize,re=e.get(q);if(re===void 0)continue;const ge=re.buffer,B=re.type,Y=re.bytesPerElement,le=B===n.INT||B===n.UNSIGNED_INT||q.gpuType===Jp;if(q.isInterleavedBufferAttribute){const ae=q.data,Ce=ae.stride,we=q.offset;if(ae.isInstancedInterleavedBuffer){for(let Ie=0;Ie<b.locationSize;Ie++)d(b.location+Ie,ae.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ie=0;Ie<b.locationSize;Ie++)m(b.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,ge);for(let Ie=0;Ie<b.locationSize;Ie++)x(b.location+Ie,Q/b.locationSize,B,Z,Ce*Y,(we+Q/b.locationSize*Ie)*Y,le)}else{if(q.isInstancedBufferAttribute){for(let ae=0;ae<b.locationSize;ae++)d(b.location+ae,q.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ae=0;ae<b.locationSize;ae++)m(b.location+ae);n.bindBuffer(n.ARRAY_BUFFER,ge);for(let ae=0;ae<b.locationSize;ae++)x(b.location+ae,Q/b.locationSize,B,Z,Q*Y,Q/b.locationSize*ae*Y,le)}}else if(O!==void 0){const Z=O[$];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(b.location,Z);break;case 3:n.vertexAttrib3fv(b.location,Z);break;case 4:n.vertexAttrib4fv(b.location,Z);break;default:n.vertexAttrib1fv(b.location,Z)}}}}v()}function w(){R();for(const y in i){const T=i[y];for(const k in T){const F=T[k];for(const H in F)c(F[H].object),delete F[H];delete T[k]}delete i[y]}}function C(y){if(i[y.id]===void 0)return;const T=i[y.id];for(const k in T){const F=T[k];for(const H in F)c(F[H].object),delete F[H];delete T[k]}delete i[y.id]}function M(y){for(const T in i){const k=i[T];if(k[y.id]===void 0)continue;const F=k[y.id];for(const H in F)c(F[H].object),delete F[H];delete k[y.id]}}function R(){L(),o=!0,s!==r&&(s=r,u(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:L,dispose:w,releaseStatesOfGeometry:C,releaseStatesOfProgram:M,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function nR(n,e,t){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function o(u,c,f){f!==0&&(n.drawArraysInstanced(i,u,c,f),t.update(c,i,f))}function a(u,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let p=0;for(let g=0;g<f;g++)p+=c[g];t.update(p,i,1)}function l(u,c,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u.length;g++)o(u[g],c[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=c[_];for(let _=0;_<h.length;_++)t.update(g,i,h[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function iR(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(M){return!(M!==Zn&&i.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(M){const R=M===sl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==Qi&&i.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==fi&&!R)}function l(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const M=e.get("EXT_clip_control");M.clipControlEXT(M.LOWER_LEFT_EXT,M.ZERO_TO_ONE_EXT)}const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:w,maxSamples:C}}function rR(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new ns,a=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=c(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?c(null):u();else{const v=s?0:i,x=v*4;let S=d.clippingState||null;l.value=S,S=c(g,h,x,p);for(let w=0;w!==x;++w)S[w]=t[w];d.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,p,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,S=p;x!==_;++x,S+=4)o.copy(f[x]).applyMatrix4(v,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function sR(n){let e=new WeakMap;function t(o,a){return a===lh?o.mapping=No:a===uh&&(o.mapping=Uo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===lh||a===uh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new _w(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class by extends Ay{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ao=4,vg=[.125,.215,.35,.446,.526,.582],ss=20,Bf=new by,xg=new nt;let Vf=null,Hf=0,Gf=0,Wf=!1;const is=(1+Math.sqrt(5))/2,js=1/is,yg=[new W(-is,js,0),new W(is,js,0),new W(-js,0,is),new W(js,0,is),new W(0,is,-js),new W(0,is,js),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)];class Sg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Vf=this._renderer.getRenderTarget(),Hf=this._renderer.getActiveCubeFace(),Gf=this._renderer.getActiveMipmapLevel(),Wf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vf,Hf,Gf),this._renderer.xr.enabled=Wf,e.scissorTest=!1,ql(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===No||e.mapping===Uo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vf=this._renderer.getRenderTarget(),Hf=this._renderer.getActiveCubeFace(),Gf=this._renderer.getActiveMipmapLevel(),Wf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:sl,format:Zn,colorSpace:Gr,depthBuffer:!1},r=Mg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mg(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=oR(s)),this._blurMaterial=aR(s,e,t)}return r}_compileMaterial(e){const t=new di(this._lodPlanes[0],e);this._renderer.compile(t,Bf)}_sceneToCubeUV(e,t,i,r){const a=new ui(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(xg),c.toneMapping=Dr,c.autoClear=!1;const p=new My({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),g=new di(new ul,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(xg),_=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(a.up.set(0,l[d],0),a.lookAt(u[d],0,0)):v===1?(a.up.set(0,0,l[d]),a.lookAt(0,u[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,u[d]));const x=this._cubeSize;ql(r,v*x,d>2?x:0,x,x),c.setRenderTarget(r),_&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=h,c.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===No||e.mapping===Uo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new di(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ql(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Bf)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=yg[(r-s-1)%yg.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new di(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ss-1),_=s/g,m=isFinite(s)?1+Math.floor(c*_):ss;m>ss&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ss}`);const d=[];let v=0;for(let M=0;M<ss;++M){const R=M/_,L=Math.exp(-R*R/2);d.push(L),M===0?v+=L:M<m&&(v+=2*L)}for(let M=0;M<d.length;M++)d[M]=d[M]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-i;const S=this._sizeLods[r],w=3*S*(r>x-ao?r-x+ao:0),C=4*(this._cubeSize-S);ql(t,w,C,3*S,2*S),l.setRenderTarget(t),l.render(f,Bf)}}function oR(n){const e=[],t=[],i=[];let r=n;const s=n-ao+1+vg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-ao?l=vg[o-n+ao-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,g=6,_=3,m=2,d=1,v=new Float32Array(_*g*p),x=new Float32Array(m*g*p),S=new Float32Array(d*g*p);for(let C=0;C<p;C++){const M=C%3*2/3-1,R=C>2?0:-1,L=[M,R,0,M+2/3,R,0,M+2/3,R+1,0,M,R,0,M+2/3,R+1,0,M,R+1,0];v.set(L,_*g*C),x.set(h,m*g*C);const y=[C,C,C,C,C,C];S.set(y,d*g*C)}const w=new Ps;w.setAttribute("position",new Ai(v,_)),w.setAttribute("uv",new Ai(x,m)),w.setAttribute("faceIndex",new Ai(S,d)),e.push(w),r>ao&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Mg(n,e,t){const i=new Ts(n,e,t);return i.texture.mapping=wc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ql(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function aR(n,e,t){const i=new Float32Array(ss),r=new W(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:am(),fragmentShader:`

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
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function Eg(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:am(),fragmentShader:`

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
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function Tg(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:am(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function am(){return`

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
	`}function lR(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===lh||l===uh,c=l===No||l===Uo;if(u||c){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Sg(n)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(t===null&&(t=new Sg(n)),f=u?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function uR(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&gu("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function cR(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)e.remove(_[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)e.update(_[m],n.ARRAY_BUFFER)}}function u(f){const h=[],p=f.index,g=f.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let x=0,S=v.length;x<S;x+=3){const w=v[x+0],C=v[x+1],M=v[x+2];h.push(w,C,C,M,M,w)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,S=v.length/3-1;x<S;x+=3){const w=x+0,C=x+1,M=x+2;h.push(w,C,C,M,M,w)}}else return;const m=new(gy(h)?Ty:Ey)(h,1);m.version=_;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function c(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function fR(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){n.drawElements(i,p,s,h*o),t.update(p,i,1)}function u(h,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,h*o,g),t.update(p,i,g))}function c(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,i,1)}function f(h,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)u(h[d]/o,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,_,0,g);let d=0;for(let v=0;v<g;v++)d+=p[v];for(let v=0;v<_.length;v++)t.update(d,i,_[v])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function dR(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function hR(n,e,t){const i=new WeakMap,r=new wt;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let L=function(){M.dispose(),i.delete(a),a.removeEventListener("dispose",L)};h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let x=0;p===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let S=a.attributes.position.count*x,w=1;S>e.maxTextureSize&&(w=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const C=new Float32Array(S*w*4*f),M=new xy(C,S,w,f);M.type=fi,M.needsUpdate=!0;const R=x*4;for(let y=0;y<f;y++){const T=m[y],k=d[y],F=v[y],H=S*w*4*y;for(let K=0;K<T.count;K++){const O=K*R;p===!0&&(r.fromBufferAttribute(T,K),C[H+O+0]=r.x,C[H+O+1]=r.y,C[H+O+2]=r.z,C[H+O+3]=0),g===!0&&(r.fromBufferAttribute(k,K),C[H+O+4]=r.x,C[H+O+5]=r.y,C[H+O+6]=r.z,C[H+O+7]=0),_===!0&&(r.fromBufferAttribute(F,K),C[H+O+8]=r.x,C[H+O+9]=r.y,C[H+O+10]=r.z,C[H+O+11]=F.itemSize===4?r.w:1)}}h={count:f,texture:M,size:new et(S,w)},i.set(a,h),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let _=0;_<u.length;_++)p+=u[_];const g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function pR(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class Ly extends rn{constructor(e,t,i,r,s,o,a,l,u,c=xo){if(c!==xo&&c!==Oo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===xo&&(i=Es),i===void 0&&c===Oo&&(i=Fo),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Zt,this.minFilter=l!==void 0?l:Zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Dy=new rn,wg=new Ly(1,1),Iy=new xy,Ny=new JT,Uy=new Cy,Ag=[],Cg=[],Rg=new Float32Array(16),Pg=new Float32Array(9),bg=new Float32Array(4);function Wo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Ag[r];if(s===void 0&&(s=new Float32Array(r),Ag[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Nt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ut(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Rc(n,e){let t=Cg[e];t===void 0&&(t=new Int32Array(e),Cg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function mR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function _R(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2fv(this.addr,e),Ut(t,e)}}function gR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;n.uniform3fv(this.addr,e),Ut(t,e)}}function vR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4fv(this.addr,e),Ut(t,e)}}function xR(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,i))return;bg.set(i),n.uniformMatrix2fv(this.addr,!1,bg),Ut(t,i)}}function yR(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,i))return;Pg.set(i),n.uniformMatrix3fv(this.addr,!1,Pg),Ut(t,i)}}function SR(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,i))return;Rg.set(i),n.uniformMatrix4fv(this.addr,!1,Rg),Ut(t,i)}}function MR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ER(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2iv(this.addr,e),Ut(t,e)}}function TR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3iv(this.addr,e),Ut(t,e)}}function wR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4iv(this.addr,e),Ut(t,e)}}function AR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function CR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2uiv(this.addr,e),Ut(t,e)}}function RR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3uiv(this.addr,e),Ut(t,e)}}function PR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4uiv(this.addr,e),Ut(t,e)}}function bR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(wg.compareFunction=_y,s=wg):s=Dy,t.setTexture2D(e||s,r)}function LR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ny,r)}function DR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Uy,r)}function IR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Iy,r)}function NR(n){switch(n){case 5126:return mR;case 35664:return _R;case 35665:return gR;case 35666:return vR;case 35674:return xR;case 35675:return yR;case 35676:return SR;case 5124:case 35670:return MR;case 35667:case 35671:return ER;case 35668:case 35672:return TR;case 35669:case 35673:return wR;case 5125:return AR;case 36294:return CR;case 36295:return RR;case 36296:return PR;case 35678:case 36198:case 36298:case 36306:case 35682:return bR;case 35679:case 36299:case 36307:return LR;case 35680:case 36300:case 36308:case 36293:return DR;case 36289:case 36303:case 36311:case 36292:return IR}}function UR(n,e){n.uniform1fv(this.addr,e)}function FR(n,e){const t=Wo(e,this.size,2);n.uniform2fv(this.addr,t)}function OR(n,e){const t=Wo(e,this.size,3);n.uniform3fv(this.addr,t)}function kR(n,e){const t=Wo(e,this.size,4);n.uniform4fv(this.addr,t)}function zR(n,e){const t=Wo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function BR(n,e){const t=Wo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function VR(n,e){const t=Wo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function HR(n,e){n.uniform1iv(this.addr,e)}function GR(n,e){n.uniform2iv(this.addr,e)}function WR(n,e){n.uniform3iv(this.addr,e)}function XR(n,e){n.uniform4iv(this.addr,e)}function jR(n,e){n.uniform1uiv(this.addr,e)}function YR(n,e){n.uniform2uiv(this.addr,e)}function $R(n,e){n.uniform3uiv(this.addr,e)}function qR(n,e){n.uniform4uiv(this.addr,e)}function KR(n,e,t){const i=this.cache,r=e.length,s=Rc(t,r);Nt(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Dy,s[o])}function ZR(n,e,t){const i=this.cache,r=e.length,s=Rc(t,r);Nt(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Ny,s[o])}function QR(n,e,t){const i=this.cache,r=e.length,s=Rc(t,r);Nt(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Uy,s[o])}function JR(n,e,t){const i=this.cache,r=e.length,s=Rc(t,r);Nt(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Iy,s[o])}function eP(n){switch(n){case 5126:return UR;case 35664:return FR;case 35665:return OR;case 35666:return kR;case 35674:return zR;case 35675:return BR;case 35676:return VR;case 5124:case 35670:return HR;case 35667:case 35671:return GR;case 35668:case 35672:return WR;case 35669:case 35673:return XR;case 5125:return jR;case 36294:return YR;case 36295:return $R;case 36296:return qR;case 35678:case 36198:case 36298:case 36306:case 35682:return KR;case 35679:case 36299:case 36307:return ZR;case 35680:case 36300:case 36308:case 36293:return QR;case 36289:case 36303:case 36311:case 36292:return JR}}class tP{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=NR(t.type)}}class nP{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=eP(t.type)}}class iP{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Xf=/(\w+)(\])?(\[|\.)?/g;function Lg(n,e){n.seq.push(e),n.map[e.id]=e}function rP(n,e,t){const i=n.name,r=i.length;for(Xf.lastIndex=0;;){const s=Xf.exec(i),o=Xf.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Lg(t,u===void 0?new tP(a,n,e):new nP(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new iP(a),Lg(t,f)),t=f}}}class vu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);rP(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Dg(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const sP=37297;let oP=0;function aP(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function lP(n){const e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(n);let i;switch(e===t?i="":e===nc&&t===tc?i="LinearDisplayP3ToLinearSRGB":e===tc&&t===nc&&(i="LinearSRGBToLinearDisplayP3"),n){case Gr:case Ac:return[i,"LinearTransferOETF"];case xi:case sm:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Ig(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+aP(n.getShaderSource(e),o)}else return r}function uP(n,e){const t=lP(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function cP(n,e){let t;switch(e){case TT:t="Linear";break;case wT:t="Reinhard";break;case AT:t="Cineon";break;case CT:t="ACESFilmic";break;case PT:t="AgX";break;case bT:t="Neutral";break;case RT:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Kl=new W;function fP(){Ze.getLuminanceCoefficients(Kl);const n=Kl.x.toFixed(4),e=Kl.y.toFixed(4),t=Kl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dP(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(da).join(`
`)}function hP(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function pP(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function da(n){return n!==""}function Ng(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ug(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mP=/^[ \t]*#include +<([\w\d./]+)>/gm;function zh(n){return n.replace(mP,gP)}const _P=new Map;function gP(n,e){let t=Fe[e];if(t===void 0){const i=_P.get(e);if(i!==void 0)t=Fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return zh(t)}const vP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fg(n){return n.replace(vP,xP)}function xP(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Og(n){let e=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function yP(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ry?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===iT?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ui&&(e="SHADOWMAP_TYPE_VSM"),e}function SP(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case No:case Uo:e="ENVMAP_TYPE_CUBE";break;case wc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function MP(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Uo:e="ENVMAP_MODE_REFRACTION";break}return e}function EP(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case sy:e="ENVMAP_BLENDING_MULTIPLY";break;case MT:e="ENVMAP_BLENDING_MIX";break;case ET:e="ENVMAP_BLENDING_ADD";break}return e}function TP(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function wP(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=yP(t),u=SP(t),c=MP(t),f=EP(t),h=TP(t),p=dP(t),g=hP(s),_=r.createProgram();let m,d,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(da).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(da).join(`
`),d.length>0&&(d+=`
`)):(m=[Og(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(da).join(`
`),d=[Og(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dr?"#define TONE_MAPPING":"",t.toneMapping!==Dr?Fe.tonemapping_pars_fragment:"",t.toneMapping!==Dr?cP("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,uP("linearToOutputTexel",t.outputColorSpace),fP(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(da).join(`
`)),o=zh(o),o=Ng(o,t),o=Ug(o,t),a=zh(a),a=Ng(a,t),a=Ug(a,t),o=Fg(o),a=Fg(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===eg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===eg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=v+m+o,S=v+d+a,w=Dg(r,r.VERTEX_SHADER,x),C=Dg(r,r.FRAGMENT_SHADER,S);r.attachShader(_,w),r.attachShader(_,C),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function M(T){if(n.debug.checkShaderErrors){const k=r.getProgramInfoLog(_).trim(),F=r.getShaderInfoLog(w).trim(),H=r.getShaderInfoLog(C).trim();let K=!0,O=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,w,C);else{const $=Ig(r,w,"vertex"),b=Ig(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+k+`
`+$+`
`+b)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(F===""||H==="")&&(O=!1);O&&(T.diagnostics={runnable:K,programLog:k,vertexShader:{log:F,prefix:m},fragmentShader:{log:H,prefix:d}})}r.deleteShader(w),r.deleteShader(C),R=new vu(r,_),L=pP(r,_)}let R;this.getUniforms=function(){return R===void 0&&M(this),R};let L;this.getAttributes=function(){return L===void 0&&M(this),L};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,sP)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=oP++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=C,this}let AP=0;class CP{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new RP(e),t.set(e,i)),i}}class RP{constructor(e){this.id=AP++,this.code=e,this.usedTimes=0}}function PP(n,e,t,i,r,s,o){const a=new yy,l=new CP,u=new Set,c=[],f=r.logarithmicDepthBuffer,h=r.reverseDepthBuffer,p=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return u.add(y),y===0?"uv":`uv${y}`}function d(y,T,k,F,H){const K=F.fog,O=H.geometry,$=y.isMeshStandardMaterial?F.environment:null,b=(y.isMeshStandardMaterial?t:e).get(y.envMap||$),q=b&&b.mapping===wc?b.image.height:null,Z=_[y.type];y.precision!==null&&(g=r.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const Q=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,re=Q!==void 0?Q.length:0;let ge=0;O.morphAttributes.position!==void 0&&(ge=1),O.morphAttributes.normal!==void 0&&(ge=2),O.morphAttributes.color!==void 0&&(ge=3);let B,Y,le,ae;if(Z){const ln=yi[Z];B=ln.vertexShader,Y=ln.fragmentShader}else B=y.vertexShader,Y=y.fragmentShader,l.update(y),le=l.getVertexShaderID(y),ae=l.getFragmentShaderID(y);const Ce=n.getRenderTarget(),we=H.isInstancedMesh===!0,Ie=H.isBatchedMesh===!0,$e=!!y.map,He=!!y.matcap,D=!!b,En=!!y.aoMap,Be=!!y.lightMap,Xe=!!y.bumpMap,Pe=!!y.normalMap,ot=!!y.displacementMap,De=!!y.emissiveMap,P=!!y.metalnessMap,E=!!y.roughnessMap,z=y.anisotropy>0,ee=y.clearcoat>0,ne=y.dispersion>0,J=y.iridescence>0,Me=y.sheen>0,ce=y.transmission>0,_e=z&&!!y.anisotropyMap,je=ee&&!!y.clearcoatMap,se=ee&&!!y.clearcoatNormalMap,ve=ee&&!!y.clearcoatRoughnessMap,be=J&&!!y.iridescenceMap,Le=J&&!!y.iridescenceThicknessMap,xe=Me&&!!y.sheenColorMap,Ve=Me&&!!y.sheenRoughnessMap,Ne=!!y.specularMap,rt=!!y.specularColorMap,I=!!y.specularIntensityMap,he=ce&&!!y.transmissionMap,X=ce&&!!y.thicknessMap,te=!!y.gradientMap,fe=!!y.alphaMap,pe=y.alphaTest>0,Ge=!!y.alphaHash,At=!!y.extensions;let an=Dr;y.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(an=n.toneMapping);const Ye={shaderID:Z,shaderType:y.type,shaderName:y.name,vertexShader:B,fragmentShader:Y,defines:y.defines,customVertexShaderID:le,customFragmentShaderID:ae,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:Ie,batchingColor:Ie&&H._colorsTexture!==null,instancing:we,instancingColor:we&&H.instanceColor!==null,instancingMorph:we&&H.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Ce===null?n.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:Gr,alphaToCoverage:!!y.alphaToCoverage,map:$e,matcap:He,envMap:D,envMapMode:D&&b.mapping,envMapCubeUVHeight:q,aoMap:En,lightMap:Be,bumpMap:Xe,normalMap:Pe,displacementMap:p&&ot,emissiveMap:De,normalMapObjectSpace:Pe&&y.normalMapType===UT,normalMapTangentSpace:Pe&&y.normalMapType===NT,metalnessMap:P,roughnessMap:E,anisotropy:z,anisotropyMap:_e,clearcoat:ee,clearcoatMap:je,clearcoatNormalMap:se,clearcoatRoughnessMap:ve,dispersion:ne,iridescence:J,iridescenceMap:be,iridescenceThicknessMap:Le,sheen:Me,sheenColorMap:xe,sheenRoughnessMap:Ve,specularMap:Ne,specularColorMap:rt,specularIntensityMap:I,transmission:ce,transmissionMap:he,thicknessMap:X,gradientMap:te,opaque:y.transparent===!1&&y.blending===vo&&y.alphaToCoverage===!1,alphaMap:fe,alphaTest:pe,alphaHash:Ge,combine:y.combine,mapUv:$e&&m(y.map.channel),aoMapUv:En&&m(y.aoMap.channel),lightMapUv:Be&&m(y.lightMap.channel),bumpMapUv:Xe&&m(y.bumpMap.channel),normalMapUv:Pe&&m(y.normalMap.channel),displacementMapUv:ot&&m(y.displacementMap.channel),emissiveMapUv:De&&m(y.emissiveMap.channel),metalnessMapUv:P&&m(y.metalnessMap.channel),roughnessMapUv:E&&m(y.roughnessMap.channel),anisotropyMapUv:_e&&m(y.anisotropyMap.channel),clearcoatMapUv:je&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:se&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&m(y.sheenRoughnessMap.channel),specularMapUv:Ne&&m(y.specularMap.channel),specularColorMapUv:rt&&m(y.specularColorMap.channel),specularIntensityMapUv:I&&m(y.specularIntensityMap.channel),transmissionMapUv:he&&m(y.transmissionMap.channel),thicknessMapUv:X&&m(y.thicknessMap.channel),alphaMapUv:fe&&m(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Pe||z),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!O.attributes.uv&&($e||fe),fog:!!K,useFog:y.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:h,skinning:H.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:ge,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:an,decodeVideoTexture:$e&&y.map.isVideoTexture===!0&&Ze.getTransfer(y.map.colorSpace)===ut,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Bi,flipSided:y.side===Sn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:At&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&y.extensions.multiDraw===!0||Ie)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ye.vertexUv1s=u.has(1),Ye.vertexUv2s=u.has(2),Ye.vertexUv3s=u.has(3),u.clear(),Ye}function v(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const k in y.defines)T.push(k),T.push(y.defines[k]);return y.isRawShaderMaterial===!1&&(x(T,y),S(T,y),T.push(n.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function x(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function S(y,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),y.push(a.mask)}function w(y){const T=_[y.type];let k;if(T){const F=yi[T];k=dw.clone(F.uniforms)}else k=y.uniforms;return k}function C(y,T){let k;for(let F=0,H=c.length;F<H;F++){const K=c[F];if(K.cacheKey===T){k=K,++k.usedTimes;break}}return k===void 0&&(k=new wP(n,T,y,s),c.push(k)),k}function M(y){if(--y.usedTimes===0){const T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),y.destroy()}}function R(y){l.remove(y)}function L(){l.dispose()}return{getParameters:d,getProgramCacheKey:v,getUniforms:w,acquireProgram:C,releaseProgram:M,releaseShaderCache:R,programs:c,dispose:L}}function bP(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function LP(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function kg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function zg(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,p,g,_,m){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=_,d.group=m),e++,d}function a(f,h,p,g,_,m){const d=o(f,h,p,g,_,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(f,h,p,g,_,m){const d=o(f,h,p,g,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function u(f,h){t.length>1&&t.sort(f||LP),i.length>1&&i.sort(h||kg),r.length>1&&r.sort(h||kg)}function c(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function DP(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new zg,n.set(i,[o])):r>=s.length?(o=new zg,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function IP(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new nt};break;case"SpotLight":t={position:new W,direction:new W,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new W,halfWidth:new W,halfHeight:new W};break}return n[e.id]=t,t}}}function NP(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let UP=0;function FP(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function OP(n){const e=new IP,t=NP(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new W);const r=new W,s=new Lt,o=new Lt;function a(u){let c=0,f=0,h=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,v=0,x=0,S=0,w=0,C=0,M=0;u.sort(FP);for(let L=0,y=u.length;L<y;L++){const T=u[L],k=T.color,F=T.intensity,H=T.distance,K=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)c+=k.r*F,f+=k.g*F,h+=k.b*F;else if(T.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(T.sh.coefficients[O],F);M++}else if(T.isDirectionalLight){const O=e.get(T);if(O.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const $=T.shadow,b=t.get(T);b.shadowIntensity=$.intensity,b.shadowBias=$.bias,b.shadowNormalBias=$.normalBias,b.shadowRadius=$.radius,b.shadowMapSize=$.mapSize,i.directionalShadow[p]=b,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=T.shadow.matrix,v++}i.directional[p]=O,p++}else if(T.isSpotLight){const O=e.get(T);O.position.setFromMatrixPosition(T.matrixWorld),O.color.copy(k).multiplyScalar(F),O.distance=H,O.coneCos=Math.cos(T.angle),O.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),O.decay=T.decay,i.spot[_]=O;const $=T.shadow;if(T.map&&(i.spotLightMap[w]=T.map,w++,$.updateMatrices(T),T.castShadow&&C++),i.spotLightMatrix[_]=$.matrix,T.castShadow){const b=t.get(T);b.shadowIntensity=$.intensity,b.shadowBias=$.bias,b.shadowNormalBias=$.normalBias,b.shadowRadius=$.radius,b.shadowMapSize=$.mapSize,i.spotShadow[_]=b,i.spotShadowMap[_]=K,S++}_++}else if(T.isRectAreaLight){const O=e.get(T);O.color.copy(k).multiplyScalar(F),O.halfWidth.set(T.width*.5,0,0),O.halfHeight.set(0,T.height*.5,0),i.rectArea[m]=O,m++}else if(T.isPointLight){const O=e.get(T);if(O.color.copy(T.color).multiplyScalar(T.intensity),O.distance=T.distance,O.decay=T.decay,T.castShadow){const $=T.shadow,b=t.get(T);b.shadowIntensity=$.intensity,b.shadowBias=$.bias,b.shadowNormalBias=$.normalBias,b.shadowRadius=$.radius,b.shadowMapSize=$.mapSize,b.shadowCameraNear=$.camera.near,b.shadowCameraFar=$.camera.far,i.pointShadow[g]=b,i.pointShadowMap[g]=K,i.pointShadowMatrix[g]=T.shadow.matrix,x++}i.point[g]=O,g++}else if(T.isHemisphereLight){const O=e.get(T);O.skyColor.copy(T.color).multiplyScalar(F),O.groundColor.copy(T.groundColor).multiplyScalar(F),i.hemi[d]=O,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=h;const R=i.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==d||R.numDirectionalShadows!==v||R.numPointShadows!==x||R.numSpotShadows!==S||R.numSpotMaps!==w||R.numLightProbes!==M)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+w-C,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=M,R.directionalLength=p,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=d,R.numDirectionalShadows=v,R.numPointShadows=x,R.numSpotShadows=S,R.numSpotMaps=w,R.numLightProbes=M,i.version=UP++)}function l(u,c){let f=0,h=0,p=0,g=0,_=0;const m=c.matrixWorldInverse;for(let d=0,v=u.length;d<v;d++){const x=u[d];if(x.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(x.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),h++}else if(x.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Bg(n){const e=new OP(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function o(c){i.push(c)}function a(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function kP(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Bg(n),e.set(r,[a])):s>=o.length?(a=new Bg(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class zP extends Cc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=DT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class BP extends Cc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const VP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HP=`uniform sampler2D shadow_pass;
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
}`;function GP(n,e,t){let i=new Ry;const r=new et,s=new et,o=new wt,a=new zP({depthPacking:IT}),l=new BP,u={},c=t.maxTextureSize,f={[kr]:Sn,[Sn]:kr,[Bi]:Bi},h=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:VP,fragmentShader:HP}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ps;g.setAttribute("position",new Ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new di(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ry;let d=this.type;this.render=function(C,M,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const L=n.getRenderTarget(),y=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),k=n.state;k.setBlending(Lr),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const F=d!==Ui&&this.type===Ui,H=d===Ui&&this.type!==Ui;for(let K=0,O=C.length;K<O;K++){const $=C[K],b=$.shadow;if(b===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(b.autoUpdate===!1&&b.needsUpdate===!1)continue;r.copy(b.mapSize);const q=b.getFrameExtents();if(r.multiply(q),s.copy(b.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/q.x),r.x=s.x*q.x,b.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/q.y),r.y=s.y*q.y,b.mapSize.y=s.y)),b.map===null||F===!0||H===!0){const Q=this.type!==Ui?{minFilter:Zt,magFilter:Zt}:{};b.map!==null&&b.map.dispose(),b.map=new Ts(r.x,r.y,Q),b.map.texture.name=$.name+".shadowMap",b.camera.updateProjectionMatrix()}n.setRenderTarget(b.map),n.clear();const Z=b.getViewportCount();for(let Q=0;Q<Z;Q++){const re=b.getViewport(Q);o.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),k.viewport(o),b.updateMatrices($,Q),i=b.getFrustum(),S(M,R,b.camera,$,this.type)}b.isPointLightShadow!==!0&&this.type===Ui&&v(b,R),b.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(L,y,T)};function v(C,M){const R=e.update(_);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ts(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(M,null,R,h,_,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(M,null,R,p,_,null)}function x(C,M,R,L){let y=null;const T=R.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(T!==void 0)y=T;else if(y=R.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const k=y.uuid,F=M.uuid;let H=u[k];H===void 0&&(H={},u[k]=H);let K=H[F];K===void 0&&(K=y.clone(),H[F]=K,M.addEventListener("dispose",w)),y=K}if(y.visible=M.visible,y.wireframe=M.wireframe,L===Ui?y.side=M.shadowSide!==null?M.shadowSide:M.side:y.side=M.shadowSide!==null?M.shadowSide:f[M.side],y.alphaMap=M.alphaMap,y.alphaTest=M.alphaTest,y.map=M.map,y.clipShadows=M.clipShadows,y.clippingPlanes=M.clippingPlanes,y.clipIntersection=M.clipIntersection,y.displacementMap=M.displacementMap,y.displacementScale=M.displacementScale,y.displacementBias=M.displacementBias,y.wireframeLinewidth=M.wireframeLinewidth,y.linewidth=M.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const k=n.properties.get(y);k.light=R}return y}function S(C,M,R,L,y){if(C.visible===!1)return;if(C.layers.test(M.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===Ui)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld);const F=e.update(C),H=C.material;if(Array.isArray(H)){const K=F.groups;for(let O=0,$=K.length;O<$;O++){const b=K[O],q=H[b.materialIndex];if(q&&q.visible){const Z=x(C,q,L,y);C.onBeforeShadow(n,C,M,R,F,Z,b),n.renderBufferDirect(R,null,F,Z,C,b),C.onAfterShadow(n,C,M,R,F,Z,b)}}}else if(H.visible){const K=x(C,H,L,y);C.onBeforeShadow(n,C,M,R,F,K,null),n.renderBufferDirect(R,null,F,K,C,null),C.onAfterShadow(n,C,M,R,F,K,null)}}const k=C.children;for(let F=0,H=k.length;F<H;F++)S(k[F],M,R,L,y)}function w(C){C.target.removeEventListener("dispose",w);for(const R in u){const L=u[R],y=C.target.uuid;y in L&&(L[y].dispose(),delete L[y])}}}const WP={[th]:nh,[ih]:oh,[rh]:ah,[Io]:sh,[nh]:th,[oh]:ih,[ah]:rh,[sh]:Io};function XP(n){function e(){let I=!1;const he=new wt;let X=null;const te=new wt(0,0,0,0);return{setMask:function(fe){X!==fe&&!I&&(n.colorMask(fe,fe,fe,fe),X=fe)},setLocked:function(fe){I=fe},setClear:function(fe,pe,Ge,At,an){an===!0&&(fe*=At,pe*=At,Ge*=At),he.set(fe,pe,Ge,At),te.equals(he)===!1&&(n.clearColor(fe,pe,Ge,At),te.copy(he))},reset:function(){I=!1,X=null,te.set(-1,0,0,0)}}}function t(){let I=!1,he=!1,X=null,te=null,fe=null;return{setReversed:function(pe){he=pe},setTest:function(pe){pe?le(n.DEPTH_TEST):ae(n.DEPTH_TEST)},setMask:function(pe){X!==pe&&!I&&(n.depthMask(pe),X=pe)},setFunc:function(pe){if(he&&(pe=WP[pe]),te!==pe){switch(pe){case th:n.depthFunc(n.NEVER);break;case nh:n.depthFunc(n.ALWAYS);break;case ih:n.depthFunc(n.LESS);break;case Io:n.depthFunc(n.LEQUAL);break;case rh:n.depthFunc(n.EQUAL);break;case sh:n.depthFunc(n.GEQUAL);break;case oh:n.depthFunc(n.GREATER);break;case ah:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}te=pe}},setLocked:function(pe){I=pe},setClear:function(pe){fe!==pe&&(n.clearDepth(pe),fe=pe)},reset:function(){I=!1,X=null,te=null,fe=null}}}function i(){let I=!1,he=null,X=null,te=null,fe=null,pe=null,Ge=null,At=null,an=null;return{setTest:function(Ye){I||(Ye?le(n.STENCIL_TEST):ae(n.STENCIL_TEST))},setMask:function(Ye){he!==Ye&&!I&&(n.stencilMask(Ye),he=Ye)},setFunc:function(Ye,ln,Pi){(X!==Ye||te!==ln||fe!==Pi)&&(n.stencilFunc(Ye,ln,Pi),X=Ye,te=ln,fe=Pi)},setOp:function(Ye,ln,Pi){(pe!==Ye||Ge!==ln||At!==Pi)&&(n.stencilOp(Ye,ln,Pi),pe=Ye,Ge=ln,At=Pi)},setLocked:function(Ye){I=Ye},setClear:function(Ye){an!==Ye&&(n.clearStencil(Ye),an=Ye)},reset:function(){I=!1,he=null,X=null,te=null,fe=null,pe=null,Ge=null,At=null,an=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let u={},c={},f=new WeakMap,h=[],p=null,g=!1,_=null,m=null,d=null,v=null,x=null,S=null,w=null,C=new nt(0,0,0),M=0,R=!1,L=null,y=null,T=null,k=null,F=null;const H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,O=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec($)[1]),K=O>=1):$.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),K=O>=2);let b=null,q={};const Z=n.getParameter(n.SCISSOR_BOX),Q=n.getParameter(n.VIEWPORT),re=new wt().fromArray(Z),ge=new wt().fromArray(Q);function B(I,he,X,te){const fe=new Uint8Array(4),pe=n.createTexture();n.bindTexture(I,pe),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ge=0;Ge<X;Ge++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(he,0,n.RGBA,1,1,te,0,n.RGBA,n.UNSIGNED_BYTE,fe):n.texImage2D(he+Ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,fe);return pe}const Y={};Y[n.TEXTURE_2D]=B(n.TEXTURE_2D,n.TEXTURE_2D,1),Y[n.TEXTURE_CUBE_MAP]=B(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[n.TEXTURE_2D_ARRAY]=B(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Y[n.TEXTURE_3D]=B(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),le(n.DEPTH_TEST),s.setFunc(Io),Be(!1),Xe($_),le(n.CULL_FACE),D(Lr);function le(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function ae(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function Ce(I,he){return c[I]!==he?(n.bindFramebuffer(I,he),c[I]=he,I===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=he),I===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=he),!0):!1}function we(I,he){let X=h,te=!1;if(I){X=f.get(he),X===void 0&&(X=[],f.set(he,X));const fe=I.textures;if(X.length!==fe.length||X[0]!==n.COLOR_ATTACHMENT0){for(let pe=0,Ge=fe.length;pe<Ge;pe++)X[pe]=n.COLOR_ATTACHMENT0+pe;X.length=fe.length,te=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,te=!0);te&&n.drawBuffers(X)}function Ie(I){return p!==I?(n.useProgram(I),p=I,!0):!1}const $e={[rs]:n.FUNC_ADD,[sT]:n.FUNC_SUBTRACT,[oT]:n.FUNC_REVERSE_SUBTRACT};$e[aT]=n.MIN,$e[lT]=n.MAX;const He={[uT]:n.ZERO,[cT]:n.ONE,[fT]:n.SRC_COLOR,[Jd]:n.SRC_ALPHA,[gT]:n.SRC_ALPHA_SATURATE,[mT]:n.DST_COLOR,[hT]:n.DST_ALPHA,[dT]:n.ONE_MINUS_SRC_COLOR,[eh]:n.ONE_MINUS_SRC_ALPHA,[_T]:n.ONE_MINUS_DST_COLOR,[pT]:n.ONE_MINUS_DST_ALPHA,[vT]:n.CONSTANT_COLOR,[xT]:n.ONE_MINUS_CONSTANT_COLOR,[yT]:n.CONSTANT_ALPHA,[ST]:n.ONE_MINUS_CONSTANT_ALPHA};function D(I,he,X,te,fe,pe,Ge,At,an,Ye){if(I===Lr){g===!0&&(ae(n.BLEND),g=!1);return}if(g===!1&&(le(n.BLEND),g=!0),I!==rT){if(I!==_||Ye!==R){if((m!==rs||x!==rs)&&(n.blendEquation(n.FUNC_ADD),m=rs,x=rs),Ye)switch(I){case vo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case q_:n.blendFunc(n.ONE,n.ONE);break;case K_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Z_:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case vo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case q_:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case K_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Z_:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}d=null,v=null,S=null,w=null,C.set(0,0,0),M=0,_=I,R=Ye}return}fe=fe||he,pe=pe||X,Ge=Ge||te,(he!==m||fe!==x)&&(n.blendEquationSeparate($e[he],$e[fe]),m=he,x=fe),(X!==d||te!==v||pe!==S||Ge!==w)&&(n.blendFuncSeparate(He[X],He[te],He[pe],He[Ge]),d=X,v=te,S=pe,w=Ge),(At.equals(C)===!1||an!==M)&&(n.blendColor(At.r,At.g,At.b,an),C.copy(At),M=an),_=I,R=!1}function En(I,he){I.side===Bi?ae(n.CULL_FACE):le(n.CULL_FACE);let X=I.side===Sn;he&&(X=!X),Be(X),I.blending===vo&&I.transparent===!1?D(Lr):D(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);const te=I.stencilWrite;o.setTest(te),te&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ot(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?le(n.SAMPLE_ALPHA_TO_COVERAGE):ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function Be(I){L!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),L=I)}function Xe(I){I!==tT?(le(n.CULL_FACE),I!==y&&(I===$_?n.cullFace(n.BACK):I===nT?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ae(n.CULL_FACE),y=I}function Pe(I){I!==T&&(K&&n.lineWidth(I),T=I)}function ot(I,he,X){I?(le(n.POLYGON_OFFSET_FILL),(k!==he||F!==X)&&(n.polygonOffset(he,X),k=he,F=X)):ae(n.POLYGON_OFFSET_FILL)}function De(I){I?le(n.SCISSOR_TEST):ae(n.SCISSOR_TEST)}function P(I){I===void 0&&(I=n.TEXTURE0+H-1),b!==I&&(n.activeTexture(I),b=I)}function E(I,he,X){X===void 0&&(b===null?X=n.TEXTURE0+H-1:X=b);let te=q[X];te===void 0&&(te={type:void 0,texture:void 0},q[X]=te),(te.type!==I||te.texture!==he)&&(b!==X&&(n.activeTexture(X),b=X),n.bindTexture(I,he||Y[I]),te.type=I,te.texture=he)}function z(){const I=q[b];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ee(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function je(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Le(I){re.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),re.copy(I))}function xe(I){ge.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),ge.copy(I))}function Ve(I,he){let X=l.get(he);X===void 0&&(X=new WeakMap,l.set(he,X));let te=X.get(I);te===void 0&&(te=n.getUniformBlockIndex(he,I.name),X.set(I,te))}function Ne(I,he){const te=l.get(he).get(I);a.get(he)!==te&&(n.uniformBlockBinding(he,te,I.__bindingPointIndex),a.set(he,te))}function rt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},b=null,q={},c={},f=new WeakMap,h=[],p=null,g=!1,_=null,m=null,d=null,v=null,x=null,S=null,w=null,C=new nt(0,0,0),M=0,R=!1,L=null,y=null,T=null,k=null,F=null,re.set(0,0,n.canvas.width,n.canvas.height),ge.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:le,disable:ae,bindFramebuffer:Ce,drawBuffers:we,useProgram:Ie,setBlending:D,setMaterial:En,setFlipSided:Be,setCullFace:Xe,setLineWidth:Pe,setPolygonOffset:ot,setScissorTest:De,activeTexture:P,bindTexture:E,unbindTexture:z,compressedTexImage2D:ee,compressedTexImage3D:ne,texImage2D:ve,texImage3D:be,updateUBOMapping:Ve,uniformBlockBinding:Ne,texStorage2D:je,texStorage3D:se,texSubImage2D:J,texSubImage3D:Me,compressedTexSubImage2D:ce,compressedTexSubImage3D:_e,scissor:Le,viewport:xe,reset:rt}}function Vg(n,e,t,i){const r=jP(i);switch(t){case cy:return n*e;case dy:return n*e;case hy:return n*e*2;case Ju:return n*e/r.components*r.byteLength;case nm:return n*e/r.components*r.byteLength;case py:return n*e*2/r.components*r.byteLength;case im:return n*e*2/r.components*r.byteLength;case fy:return n*e*3/r.components*r.byteLength;case Zn:return n*e*4/r.components*r.byteLength;case rm:return n*e*4/r.components*r.byteLength;case du:case hu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case pu:case mu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case hh:case mh:return Math.max(n,16)*Math.max(e,8)/4;case dh:case ph:return Math.max(n,8)*Math.max(e,8)/2;case _h:case gh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case vh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Sh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Mh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Th:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case wh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ah:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ch:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Rh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ph:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case bh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Lh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Dh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case _u:case Ih:case Nh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case my:case Uh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Fh:case Oh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jP(n){switch(n){case Qi:case ay:return{byteLength:1,components:1};case Qa:case ly:case sl:return{byteLength:2,components:1};case em:case tm:return{byteLength:2,components:4};case Es:case Jp:case fi:return{byteLength:4,components:1};case uy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function YP(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new et,c=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,E){return p?new OffscreenCanvas(P,E):rc("canvas")}function _(P,E,z){let ee=1;const ne=De(P);if((ne.width>z||ne.height>z)&&(ee=z/Math.max(ne.width,ne.height)),ee<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const J=Math.floor(ee*ne.width),Me=Math.floor(ee*ne.height);f===void 0&&(f=g(J,Me));const ce=E?g(J,Me):f;return ce.width=J,ce.height=Me,ce.getContext("2d").drawImage(P,0,0,J,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+J+"x"+Me+")."),ce}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),P;return P}function m(P){return P.generateMipmaps&&P.minFilter!==Zt&&P.minFilter!==Yn}function d(P){n.generateMipmap(P)}function v(P,E,z,ee,ne=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let J=E;if(E===n.RED&&(z===n.FLOAT&&(J=n.R32F),z===n.HALF_FLOAT&&(J=n.R16F),z===n.UNSIGNED_BYTE&&(J=n.R8)),E===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.R8UI),z===n.UNSIGNED_SHORT&&(J=n.R16UI),z===n.UNSIGNED_INT&&(J=n.R32UI),z===n.BYTE&&(J=n.R8I),z===n.SHORT&&(J=n.R16I),z===n.INT&&(J=n.R32I)),E===n.RG&&(z===n.FLOAT&&(J=n.RG32F),z===n.HALF_FLOAT&&(J=n.RG16F),z===n.UNSIGNED_BYTE&&(J=n.RG8)),E===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.RG8UI),z===n.UNSIGNED_SHORT&&(J=n.RG16UI),z===n.UNSIGNED_INT&&(J=n.RG32UI),z===n.BYTE&&(J=n.RG8I),z===n.SHORT&&(J=n.RG16I),z===n.INT&&(J=n.RG32I)),E===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.RGB8UI),z===n.UNSIGNED_SHORT&&(J=n.RGB16UI),z===n.UNSIGNED_INT&&(J=n.RGB32UI),z===n.BYTE&&(J=n.RGB8I),z===n.SHORT&&(J=n.RGB16I),z===n.INT&&(J=n.RGB32I)),E===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),z===n.UNSIGNED_INT&&(J=n.RGBA32UI),z===n.BYTE&&(J=n.RGBA8I),z===n.SHORT&&(J=n.RGBA16I),z===n.INT&&(J=n.RGBA32I)),E===n.RGB&&z===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),E===n.RGBA){const Me=ne?ec:Ze.getTransfer(ee);z===n.FLOAT&&(J=n.RGBA32F),z===n.HALF_FLOAT&&(J=n.RGBA16F),z===n.UNSIGNED_BYTE&&(J=Me===ut?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function x(P,E){let z;return P?E===null||E===Es||E===Fo?z=n.DEPTH24_STENCIL8:E===fi?z=n.DEPTH32F_STENCIL8:E===Qa&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Es||E===Fo?z=n.DEPTH_COMPONENT24:E===fi?z=n.DEPTH_COMPONENT32F:E===Qa&&(z=n.DEPTH_COMPONENT16),z}function S(P,E){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Zt&&P.minFilter!==Yn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function w(P){const E=P.target;E.removeEventListener("dispose",w),M(E),E.isVideoTexture&&c.delete(E)}function C(P){const E=P.target;E.removeEventListener("dispose",C),L(E)}function M(P){const E=i.get(P);if(E.__webglInit===void 0)return;const z=P.source,ee=h.get(z);if(ee){const ne=ee[E.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&R(P),Object.keys(ee).length===0&&h.delete(z)}i.remove(P)}function R(P){const E=i.get(P);n.deleteTexture(E.__webglTexture);const z=P.source,ee=h.get(z);delete ee[E.__cacheKey],o.memory.textures--}function L(P){const E=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(E.__webglFramebuffer[ee]))for(let ne=0;ne<E.__webglFramebuffer[ee].length;ne++)n.deleteFramebuffer(E.__webglFramebuffer[ee][ne]);else n.deleteFramebuffer(E.__webglFramebuffer[ee]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[ee])}else{if(Array.isArray(E.__webglFramebuffer))for(let ee=0;ee<E.__webglFramebuffer.length;ee++)n.deleteFramebuffer(E.__webglFramebuffer[ee]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ee=0;ee<E.__webglColorRenderbuffer.length;ee++)E.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[ee]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const z=P.textures;for(let ee=0,ne=z.length;ee<ne;ee++){const J=i.get(z[ee]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(z[ee])}i.remove(P)}let y=0;function T(){y=0}function k(){const P=y;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),y+=1,P}function F(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function H(P,E){const z=i.get(P);if(P.isVideoTexture&&Pe(P),P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){const ee=P.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(z,P,E);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+E)}function K(P,E){const z=i.get(P);if(P.version>0&&z.__version!==P.version){ge(z,P,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+E)}function O(P,E){const z=i.get(P);if(P.version>0&&z.__version!==P.version){ge(z,P,E);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+E)}function $(P,E){const z=i.get(P);if(P.version>0&&z.__version!==P.version){B(z,P,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+E)}const b={[ch]:n.REPEAT,[yr]:n.CLAMP_TO_EDGE,[fh]:n.MIRRORED_REPEAT},q={[Zt]:n.NEAREST,[LT]:n.NEAREST_MIPMAP_NEAREST,[bl]:n.NEAREST_MIPMAP_LINEAR,[Yn]:n.LINEAR,[_f]:n.LINEAR_MIPMAP_NEAREST,[cs]:n.LINEAR_MIPMAP_LINEAR},Z={[FT]:n.NEVER,[HT]:n.ALWAYS,[OT]:n.LESS,[_y]:n.LEQUAL,[kT]:n.EQUAL,[VT]:n.GEQUAL,[zT]:n.GREATER,[BT]:n.NOTEQUAL};function Q(P,E){if(E.type===fi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Yn||E.magFilter===_f||E.magFilter===bl||E.magFilter===cs||E.minFilter===Yn||E.minFilter===_f||E.minFilter===bl||E.minFilter===cs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,b[E.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,b[E.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,b[E.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,q[E.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,q[E.minFilter]),E.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,Z[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Zt||E.minFilter!==bl&&E.minFilter!==cs||E.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function re(P,E){let z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",w));const ee=E.source;let ne=h.get(ee);ne===void 0&&(ne={},h.set(ee,ne));const J=F(E);if(J!==P.__cacheKey){ne[J]===void 0&&(ne[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ne[J].usedTimes++;const Me=ne[P.__cacheKey];Me!==void 0&&(ne[P.__cacheKey].usedTimes--,Me.usedTimes===0&&R(E)),P.__cacheKey=J,P.__webglTexture=ne[J].texture}return z}function ge(P,E,z){let ee=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ee=n.TEXTURE_3D);const ne=re(P,E),J=E.source;t.bindTexture(ee,P.__webglTexture,n.TEXTURE0+z);const Me=i.get(J);if(J.version!==Me.__version||ne===!0){t.activeTexture(n.TEXTURE0+z);const ce=Ze.getPrimaries(Ze.workingColorSpace),_e=E.colorSpace===pr?null:Ze.getPrimaries(E.colorSpace),je=E.colorSpace===pr||ce===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let se=_(E.image,!1,r.maxTextureSize);se=ot(E,se);const ve=s.convert(E.format,E.colorSpace),be=s.convert(E.type);let Le=v(E.internalFormat,ve,be,E.colorSpace,E.isVideoTexture);Q(ee,E);let xe;const Ve=E.mipmaps,Ne=E.isVideoTexture!==!0,rt=Me.__version===void 0||ne===!0,I=J.dataReady,he=S(E,se);if(E.isDepthTexture)Le=x(E.format===Oo,E.type),rt&&(Ne?t.texStorage2D(n.TEXTURE_2D,1,Le,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,Le,se.width,se.height,0,ve,be,null));else if(E.isDataTexture)if(Ve.length>0){Ne&&rt&&t.texStorage2D(n.TEXTURE_2D,he,Le,Ve[0].width,Ve[0].height);for(let X=0,te=Ve.length;X<te;X++)xe=Ve[X],Ne?I&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,xe.width,xe.height,ve,be,xe.data):t.texImage2D(n.TEXTURE_2D,X,Le,xe.width,xe.height,0,ve,be,xe.data);E.generateMipmaps=!1}else Ne?(rt&&t.texStorage2D(n.TEXTURE_2D,he,Le,se.width,se.height),I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,se.width,se.height,ve,be,se.data)):t.texImage2D(n.TEXTURE_2D,0,Le,se.width,se.height,0,ve,be,se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ne&&rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,Le,Ve[0].width,Ve[0].height,se.depth);for(let X=0,te=Ve.length;X<te;X++)if(xe=Ve[X],E.format!==Zn)if(ve!==null)if(Ne){if(I)if(E.layerUpdates.size>0){const fe=Vg(xe.width,xe.height,E.format,E.type);for(const pe of E.layerUpdates){const Ge=xe.data.subarray(pe*fe/xe.data.BYTES_PER_ELEMENT,(pe+1)*fe/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,pe,xe.width,xe.height,1,ve,Ge,0,0)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,xe.width,xe.height,se.depth,ve,xe.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,Le,xe.width,xe.height,se.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?I&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,xe.width,xe.height,se.depth,ve,be,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,X,Le,xe.width,xe.height,se.depth,0,ve,be,xe.data)}else{Ne&&rt&&t.texStorage2D(n.TEXTURE_2D,he,Le,Ve[0].width,Ve[0].height);for(let X=0,te=Ve.length;X<te;X++)xe=Ve[X],E.format!==Zn?ve!==null?Ne?I&&t.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,xe.width,xe.height,ve,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,X,Le,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?I&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,xe.width,xe.height,ve,be,xe.data):t.texImage2D(n.TEXTURE_2D,X,Le,xe.width,xe.height,0,ve,be,xe.data)}else if(E.isDataArrayTexture)if(Ne){if(rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,Le,se.width,se.height,se.depth),I)if(E.layerUpdates.size>0){const X=Vg(se.width,se.height,E.format,E.type);for(const te of E.layerUpdates){const fe=se.data.subarray(te*X/se.data.BYTES_PER_ELEMENT,(te+1)*X/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,te,se.width,se.height,1,ve,be,fe)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ve,be,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,se.width,se.height,se.depth,0,ve,be,se.data);else if(E.isData3DTexture)Ne?(rt&&t.texStorage3D(n.TEXTURE_3D,he,Le,se.width,se.height,se.depth),I&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ve,be,se.data)):t.texImage3D(n.TEXTURE_3D,0,Le,se.width,se.height,se.depth,0,ve,be,se.data);else if(E.isFramebufferTexture){if(rt)if(Ne)t.texStorage2D(n.TEXTURE_2D,he,Le,se.width,se.height);else{let X=se.width,te=se.height;for(let fe=0;fe<he;fe++)t.texImage2D(n.TEXTURE_2D,fe,Le,X,te,0,ve,be,null),X>>=1,te>>=1}}else if(Ve.length>0){if(Ne&&rt){const X=De(Ve[0]);t.texStorage2D(n.TEXTURE_2D,he,Le,X.width,X.height)}for(let X=0,te=Ve.length;X<te;X++)xe=Ve[X],Ne?I&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,ve,be,xe):t.texImage2D(n.TEXTURE_2D,X,Le,ve,be,xe);E.generateMipmaps=!1}else if(Ne){if(rt){const X=De(se);t.texStorage2D(n.TEXTURE_2D,he,Le,X.width,X.height)}I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,be,se)}else t.texImage2D(n.TEXTURE_2D,0,Le,ve,be,se);m(E)&&d(ee),Me.__version=J.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function B(P,E,z){if(E.image.length!==6)return;const ee=re(P,E),ne=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+z);const J=i.get(ne);if(ne.version!==J.__version||ee===!0){t.activeTexture(n.TEXTURE0+z);const Me=Ze.getPrimaries(Ze.workingColorSpace),ce=E.colorSpace===pr?null:Ze.getPrimaries(E.colorSpace),_e=E.colorSpace===pr||Me===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const je=E.isCompressedTexture||E.image[0].isCompressedTexture,se=E.image[0]&&E.image[0].isDataTexture,ve=[];for(let te=0;te<6;te++)!je&&!se?ve[te]=_(E.image[te],!0,r.maxCubemapSize):ve[te]=se?E.image[te].image:E.image[te],ve[te]=ot(E,ve[te]);const be=ve[0],Le=s.convert(E.format,E.colorSpace),xe=s.convert(E.type),Ve=v(E.internalFormat,Le,xe,E.colorSpace),Ne=E.isVideoTexture!==!0,rt=J.__version===void 0||ee===!0,I=ne.dataReady;let he=S(E,be);Q(n.TEXTURE_CUBE_MAP,E);let X;if(je){Ne&&rt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,he,Ve,be.width,be.height);for(let te=0;te<6;te++){X=ve[te].mipmaps;for(let fe=0;fe<X.length;fe++){const pe=X[fe];E.format!==Zn?Le!==null?Ne?I&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,fe,0,0,pe.width,pe.height,Le,pe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,fe,Ve,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,fe,0,0,pe.width,pe.height,Le,xe,pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,fe,Ve,pe.width,pe.height,0,Le,xe,pe.data)}}}else{if(X=E.mipmaps,Ne&&rt){X.length>0&&he++;const te=De(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,he,Ve,te.width,te.height)}for(let te=0;te<6;te++)if(se){Ne?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ve[te].width,ve[te].height,Le,xe,ve[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ve,ve[te].width,ve[te].height,0,Le,xe,ve[te].data);for(let fe=0;fe<X.length;fe++){const Ge=X[fe].image[te].image;Ne?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,fe+1,0,0,Ge.width,Ge.height,Le,xe,Ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,fe+1,Ve,Ge.width,Ge.height,0,Le,xe,Ge.data)}}else{Ne?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Le,xe,ve[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ve,Le,xe,ve[te]);for(let fe=0;fe<X.length;fe++){const pe=X[fe];Ne?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,fe+1,0,0,Le,xe,pe.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,fe+1,Ve,Le,xe,pe.image[te])}}}m(E)&&d(n.TEXTURE_CUBE_MAP),J.__version=ne.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Y(P,E,z,ee,ne,J){const Me=s.convert(z.format,z.colorSpace),ce=s.convert(z.type),_e=v(z.internalFormat,Me,ce,z.colorSpace);if(!i.get(E).__hasExternalTextures){const se=Math.max(1,E.width>>J),ve=Math.max(1,E.height>>J);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,J,_e,se,ve,E.depth,0,Me,ce,null):t.texImage2D(ne,J,_e,se,ve,0,Me,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),Xe(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,ne,i.get(z).__webglTexture,0,Be(E)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,ne,i.get(z).__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function le(P,E,z){if(n.bindRenderbuffer(n.RENDERBUFFER,P),E.depthBuffer){const ee=E.depthTexture,ne=ee&&ee.isDepthTexture?ee.type:null,J=x(E.stencilBuffer,ne),Me=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=Be(E);Xe(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,J,E.width,E.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,J,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,J,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,P)}else{const ee=E.textures;for(let ne=0;ne<ee.length;ne++){const J=ee[ne],Me=s.convert(J.format,J.colorSpace),ce=s.convert(J.type),_e=v(J.internalFormat,Me,ce,J.colorSpace),je=Be(E);z&&Xe(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,je,_e,E.width,E.height):Xe(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,je,_e,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,_e,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ae(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),H(E.depthTexture,0);const ee=i.get(E.depthTexture).__webglTexture,ne=Be(E);if(E.depthTexture.format===xo)Xe(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(E.depthTexture.format===Oo)Xe(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Ce(P){const E=i.get(P),z=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const ee=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ee){const ne=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ee.removeEventListener("dispose",ne)};ee.addEventListener("dispose",ne),E.__depthDisposeCallback=ne}E.__boundDepthTexture=ee}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");ae(E.__webglFramebuffer,P)}else if(z){E.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[ee]),E.__webglDepthbuffer[ee]===void 0)E.__webglDepthbuffer[ee]=n.createRenderbuffer(),le(E.__webglDepthbuffer[ee],P,!1);else{const ne=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=E.__webglDepthbuffer[ee];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,J)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),le(E.__webglDepthbuffer,P,!1);else{const ee=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,ne)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function we(P,E,z){const ee=i.get(P);E!==void 0&&Y(ee.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Ce(P)}function Ie(P){const E=P.texture,z=i.get(P),ee=i.get(E);P.addEventListener("dispose",C);const ne=P.textures,J=P.isWebGLCubeRenderTarget===!0,Me=ne.length>1;if(Me||(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=E.version,o.memory.textures++),J){z.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer[ce]=[];for(let _e=0;_e<E.mipmaps.length;_e++)z.__webglFramebuffer[ce][_e]=n.createFramebuffer()}else z.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer=[];for(let ce=0;ce<E.mipmaps.length;ce++)z.__webglFramebuffer[ce]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(Me)for(let ce=0,_e=ne.length;ce<_e;ce++){const je=i.get(ne[ce]);je.__webglTexture===void 0&&(je.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&Xe(P)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ce=0;ce<ne.length;ce++){const _e=ne[ce];z.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[ce]);const je=s.convert(_e.format,_e.colorSpace),se=s.convert(_e.type),ve=v(_e.internalFormat,je,se,_e.colorSpace,P.isXRRenderTarget===!0),be=Be(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,be,ve,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,z.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),le(z.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),Q(n.TEXTURE_CUBE_MAP,E);for(let ce=0;ce<6;ce++)if(E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)Y(z.__webglFramebuffer[ce][_e],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,_e);else Y(z.__webglFramebuffer[ce],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(E)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ce=0,_e=ne.length;ce<_e;ce++){const je=ne[ce],se=i.get(je);t.bindTexture(n.TEXTURE_2D,se.__webglTexture),Q(n.TEXTURE_2D,je),Y(z.__webglFramebuffer,P,je,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),m(je)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ce=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,ee.__webglTexture),Q(ce,E),E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)Y(z.__webglFramebuffer[_e],P,E,n.COLOR_ATTACHMENT0,ce,_e);else Y(z.__webglFramebuffer,P,E,n.COLOR_ATTACHMENT0,ce,0);m(E)&&d(ce),t.unbindTexture()}P.depthBuffer&&Ce(P)}function $e(P){const E=P.textures;for(let z=0,ee=E.length;z<ee;z++){const ne=E[z];if(m(ne)){const J=P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Me=i.get(ne).__webglTexture;t.bindTexture(J,Me),d(J),t.unbindTexture()}}}const He=[],D=[];function En(P){if(P.samples>0){if(Xe(P)===!1){const E=P.textures,z=P.width,ee=P.height;let ne=n.COLOR_BUFFER_BIT;const J=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(P),ce=E.length>1;if(ce)for(let _e=0;_e<E.length;_e++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let _e=0;_e<E.length;_e++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[_e]);const je=i.get(E[_e]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,je,0)}n.blitFramebuffer(0,0,z,ee,0,0,z,ee,ne,n.NEAREST),l===!0&&(He.length=0,D.length=0,He.push(n.COLOR_ATTACHMENT0+_e),P.depthBuffer&&P.resolveDepthBuffer===!1&&(He.push(J),D.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,D)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,He))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let _e=0;_e<E.length;_e++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,Me.__webglColorRenderbuffer[_e]);const je=i.get(E[_e]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,je,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const E=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function Be(P){return Math.min(r.maxSamples,P.samples)}function Xe(P){const E=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Pe(P){const E=o.render.frame;c.get(P)!==E&&(c.set(P,E),P.update())}function ot(P,E){const z=P.colorSpace,ee=P.format,ne=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||z!==Gr&&z!==pr&&(Ze.getTransfer(z)===ut?(ee!==Zn||ne!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),E}function De(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(u.width=P.naturalWidth||P.width,u.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(u.width=P.displayWidth,u.height=P.displayHeight):(u.width=P.width,u.height=P.height),u}this.allocateTextureUnit=k,this.resetTextureUnits=T,this.setTexture2D=H,this.setTexture2DArray=K,this.setTexture3D=O,this.setTextureCube=$,this.rebindTextures=we,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=En,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=Xe}function $P(n,e){function t(i,r=pr){let s;const o=Ze.getTransfer(r);if(i===Qi)return n.UNSIGNED_BYTE;if(i===em)return n.UNSIGNED_SHORT_4_4_4_4;if(i===tm)return n.UNSIGNED_SHORT_5_5_5_1;if(i===uy)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ay)return n.BYTE;if(i===ly)return n.SHORT;if(i===Qa)return n.UNSIGNED_SHORT;if(i===Jp)return n.INT;if(i===Es)return n.UNSIGNED_INT;if(i===fi)return n.FLOAT;if(i===sl)return n.HALF_FLOAT;if(i===cy)return n.ALPHA;if(i===fy)return n.RGB;if(i===Zn)return n.RGBA;if(i===dy)return n.LUMINANCE;if(i===hy)return n.LUMINANCE_ALPHA;if(i===xo)return n.DEPTH_COMPONENT;if(i===Oo)return n.DEPTH_STENCIL;if(i===Ju)return n.RED;if(i===nm)return n.RED_INTEGER;if(i===py)return n.RG;if(i===im)return n.RG_INTEGER;if(i===rm)return n.RGBA_INTEGER;if(i===du||i===hu||i===pu||i===mu)if(o===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===du)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===hu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===pu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===mu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===du)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===hu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===pu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===mu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===dh||i===hh||i===ph||i===mh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===dh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===hh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ph)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===mh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===_h||i===gh||i===vh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===_h||i===gh)return o===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===vh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===xh||i===yh||i===Sh||i===Mh||i===Eh||i===Th||i===wh||i===Ah||i===Ch||i===Rh||i===Ph||i===bh||i===Lh||i===Dh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===xh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===yh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Mh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Eh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Th)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ah)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ch)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Rh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ph)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Lh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Dh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===_u||i===Ih||i===Nh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===_u)return o===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ih)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Nh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===my||i===Uh||i===Fh||i===Oh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===_u)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Uh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Oh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Fo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class qP extends ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ha extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const KP={type:"move"};class jf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ha,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ha,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ha,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),d=this._getHandJoint(u,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),p=.02,g=.005;u.inputState.pinching&&h>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(KP)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ha;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const ZP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QP=`
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

}`;class JP{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new rn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ri({vertexShader:ZP,fragmentShader:QP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new di(new zo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class e2 extends Go{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,h=null,p=null,g=null;const _=new JP,m=t.getContextAttributes();let d=null,v=null;const x=[],S=[],w=new et;let C=null;const M=new ui;M.layers.enable(1),M.viewport=new wt;const R=new ui;R.layers.enable(2),R.viewport=new wt;const L=[M,R],y=new qP;y.layers.enable(1),y.layers.enable(2);let T=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let Y=x[B];return Y===void 0&&(Y=new jf,x[B]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(B){let Y=x[B];return Y===void 0&&(Y=new jf,x[B]=Y),Y.getGripSpace()},this.getHand=function(B){let Y=x[B];return Y===void 0&&(Y=new jf,x[B]=Y),Y.getHandSpace()};function F(B){const Y=S.indexOf(B.inputSource);if(Y===-1)return;const le=x[Y];le!==void 0&&(le.update(B.inputSource,B.frame,u||o),le.dispatchEvent({type:B.type,data:B.inputSource}))}function H(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",K);for(let B=0;B<x.length;B++){const Y=S[B];Y!==null&&(S[B]=null,x[B].disconnect(Y))}T=null,k=null,_.reset(),e.setRenderTarget(d),p=null,h=null,f=null,r=null,v=null,ge.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(B){u=B},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",H),r.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(w),r.renderState.layers===void 0){const Y={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Y),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Ts(p.framebufferWidth,p.framebufferHeight,{format:Zn,type:Qi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Y=null,le=null,ae=null;m.depth&&(ae=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=m.stencil?Oo:xo,le=m.stencil?Fo:Es);const Ce={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(Ce),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new Ts(h.textureWidth,h.textureHeight,{format:Zn,type:Qi,depthTexture:new Ly(h.textureWidth,h.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),ge.setContext(r),ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(B){for(let Y=0;Y<B.removed.length;Y++){const le=B.removed[Y],ae=S.indexOf(le);ae>=0&&(S[ae]=null,x[ae].disconnect(le))}for(let Y=0;Y<B.added.length;Y++){const le=B.added[Y];let ae=S.indexOf(le);if(ae===-1){for(let we=0;we<x.length;we++)if(we>=S.length){S.push(le),ae=we;break}else if(S[we]===null){S[we]=le,ae=we;break}if(ae===-1)break}const Ce=x[ae];Ce&&Ce.connect(le)}}const O=new W,$=new W;function b(B,Y,le){O.setFromMatrixPosition(Y.matrixWorld),$.setFromMatrixPosition(le.matrixWorld);const ae=O.distanceTo($),Ce=Y.projectionMatrix.elements,we=le.projectionMatrix.elements,Ie=Ce[14]/(Ce[10]-1),$e=Ce[14]/(Ce[10]+1),He=(Ce[9]+1)/Ce[5],D=(Ce[9]-1)/Ce[5],En=(Ce[8]-1)/Ce[0],Be=(we[8]+1)/we[0],Xe=Ie*En,Pe=Ie*Be,ot=ae/(-En+Be),De=ot*-En;if(Y.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(De),B.translateZ(ot),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),Ce[10]===-1)B.projectionMatrix.copy(Y.projectionMatrix),B.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const P=Ie+ot,E=$e+ot,z=Xe-De,ee=Pe+(ae-De),ne=He*$e/E*P,J=D*$e/E*P;B.projectionMatrix.makePerspective(z,ee,ne,J,P,E),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function q(B,Y){Y===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(Y.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;let Y=B.near,le=B.far;_.texture!==null&&(_.depthNear>0&&(Y=_.depthNear),_.depthFar>0&&(le=_.depthFar)),y.near=R.near=M.near=Y,y.far=R.far=M.far=le,(T!==y.near||k!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,k=y.far);const ae=B.parent,Ce=y.cameras;q(y,ae);for(let we=0;we<Ce.length;we++)q(Ce[we],ae);Ce.length===2?b(y,M,R):y.projectionMatrix.copy(M.projectionMatrix),Z(B,y,ae)};function Z(B,Y,le){le===null?B.matrix.copy(Y.matrixWorld):(B.matrix.copy(le.matrixWorld),B.matrix.invert(),B.matrix.multiply(Y.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(Y.projectionMatrix),B.projectionMatrixInverse.copy(Y.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=kh*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(B){l=B,h!==null&&(h.fixedFoveation=B),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=B)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let Q=null;function re(B,Y){if(c=Y.getViewerPose(u||o),g=Y,c!==null){const le=c.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let ae=!1;le.length!==y.cameras.length&&(y.cameras.length=0,ae=!0);for(let we=0;we<le.length;we++){const Ie=le[we];let $e=null;if(p!==null)$e=p.getViewport(Ie);else{const D=f.getViewSubImage(h,Ie);$e=D.viewport,we===0&&(e.setRenderTargetTextures(v,D.colorTexture,h.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(v))}let He=L[we];He===void 0&&(He=new ui,He.layers.enable(we),He.viewport=new wt,L[we]=He),He.matrix.fromArray(Ie.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(Ie.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set($e.x,$e.y,$e.width,$e.height),we===0&&(y.matrix.copy(He.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ae===!0&&y.cameras.push(He)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const we=f.getDepthInformation(le[0]);we&&we.isValid&&we.texture&&_.init(e,we,r.renderState)}}for(let le=0;le<x.length;le++){const ae=S[le],Ce=x[le];ae!==null&&Ce!==void 0&&Ce.update(ae,Y,u||o)}Q&&Q(B,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),g=null}const ge=new Py;ge.setAnimationLoop(re),this.setAnimationLoop=function(B){Q=B},this.dispose=function(){}}}const Qr=new Ji,t2=new Lt;function n2(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,wy(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,v,x,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),c(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,v,x):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Sn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Sn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=e.get(d),x=v.envMap,S=v.envMapRotation;x&&(m.envMap.value=x,Qr.copy(S),Qr.x*=-1,Qr.y*=-1,Qr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Qr.y*=-1,Qr.z*=-1),m.envMapRotation.value.setFromMatrix4(t2.makeRotationFromEuler(Qr)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,v,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=x*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Sn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const v=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function i2(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const S=x.program;i.uniformBlockBinding(v,S)}function u(v,x){let S=r[v.id];S===void 0&&(g(v),S=c(v),r[v.id]=S,v.addEventListener("dispose",m));const w=x.program;i.updateUBOMapping(v,w);const C=e.render.frame;s[v.id]!==C&&(h(v),s[v.id]=C)}function c(v){const x=f();v.__bindingPointIndex=x;const S=n.createBuffer(),w=v.__size,C=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,w,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,S),S}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const x=r[v.id],S=v.uniforms,w=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let C=0,M=S.length;C<M;C++){const R=Array.isArray(S[C])?S[C]:[S[C]];for(let L=0,y=R.length;L<y;L++){const T=R[L];if(p(T,C,L,w)===!0){const k=T.__offset,F=Array.isArray(T.value)?T.value:[T.value];let H=0;for(let K=0;K<F.length;K++){const O=F[K],$=_(O);typeof O=="number"||typeof O=="boolean"?(T.__data[0]=O,n.bufferSubData(n.UNIFORM_BUFFER,k+H,T.__data)):O.isMatrix3?(T.__data[0]=O.elements[0],T.__data[1]=O.elements[1],T.__data[2]=O.elements[2],T.__data[3]=0,T.__data[4]=O.elements[3],T.__data[5]=O.elements[4],T.__data[6]=O.elements[5],T.__data[7]=0,T.__data[8]=O.elements[6],T.__data[9]=O.elements[7],T.__data[10]=O.elements[8],T.__data[11]=0):(O.toArray(T.__data,H),H+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,x,S,w){const C=v.value,M=x+"_"+S;if(w[M]===void 0)return typeof C=="number"||typeof C=="boolean"?w[M]=C:w[M]=C.clone(),!0;{const R=w[M];if(typeof C=="number"||typeof C=="boolean"){if(R!==C)return w[M]=C,!0}else if(R.equals(C)===!1)return R.copy(C),!0}return!1}function g(v){const x=v.uniforms;let S=0;const w=16;for(let M=0,R=x.length;M<R;M++){const L=Array.isArray(x[M])?x[M]:[x[M]];for(let y=0,T=L.length;y<T;y++){const k=L[y],F=Array.isArray(k.value)?k.value:[k.value];for(let H=0,K=F.length;H<K;H++){const O=F[H],$=_(O),b=S%w,q=b%$.boundary,Z=b+q;S+=q,Z!==0&&w-Z<$.storage&&(S+=w-Z),k.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=S,S+=$.storage}}}const C=S%w;return C>0&&(S+=w-C),v.__size=S,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:d}}class r2{constructor(e={}){const{canvas:t=WT(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const d=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xi,this.toneMapping=Dr,this.toneMappingExposure=1;const x=this;let S=!1,w=0,C=0,M=null,R=-1,L=null;const y=new wt,T=new wt;let k=null;const F=new nt(0);let H=0,K=t.width,O=t.height,$=1,b=null,q=null;const Z=new wt(0,0,K,O),Q=new wt(0,0,K,O);let re=!1;const ge=new Ry;let B=!1,Y=!1;const le=new Lt,ae=new Lt,Ce=new W,we=new wt,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function He(){return M===null?$:1}let D=i;function En(A,N){return t.getContext(A,N)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qp}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",pe,!1),D===null){const N="webgl2";if(D=En(N,A),D===null)throw En(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Be,Xe,Pe,ot,De,P,E,z,ee,ne,J,Me,ce,_e,je,se,ve,be,Le,xe,Ve,Ne,rt,I;function he(){Be=new uR(D),Be.init(),Ne=new $P(D,Be),Xe=new iR(D,Be,e,Ne),Pe=new XP(D),Xe.reverseDepthBuffer&&Pe.buffers.depth.setReversed(!0),ot=new dR(D),De=new bP,P=new YP(D,Be,Pe,De,Xe,Ne,ot),E=new sR(x),z=new lR(x),ee=new xw(D),rt=new tR(D,ee),ne=new cR(D,ee,ot,rt),J=new pR(D,ne,ee,ot),Le=new hR(D,Xe,P),se=new rR(De),Me=new PP(x,E,z,Be,Xe,rt,se),ce=new n2(x,De),_e=new DP,je=new kP(Be),be=new eR(x,E,z,Pe,J,h,l),ve=new GP(x,J,Xe),I=new i2(D,ot,Xe,Pe),xe=new nR(D,Be,ot),Ve=new fR(D,Be,ot),ot.programs=Me.programs,x.capabilities=Xe,x.extensions=Be,x.properties=De,x.renderLists=_e,x.shadowMap=ve,x.state=Pe,x.info=ot}he();const X=new e2(x,D);this.xr=X,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const A=Be.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Be.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(A){A!==void 0&&($=A,this.setSize(K,O,!1))},this.getSize=function(A){return A.set(K,O)},this.setSize=function(A,N,V=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=A,O=N,t.width=Math.floor(A*$),t.height=Math.floor(N*$),V===!0&&(t.style.width=A+"px",t.style.height=N+"px"),this.setViewport(0,0,A,N)},this.getDrawingBufferSize=function(A){return A.set(K*$,O*$).floor()},this.setDrawingBufferSize=function(A,N,V){K=A,O=N,$=V,t.width=Math.floor(A*V),t.height=Math.floor(N*V),this.setViewport(0,0,A,N)},this.getCurrentViewport=function(A){return A.copy(y)},this.getViewport=function(A){return A.copy(Z)},this.setViewport=function(A,N,V,G){A.isVector4?Z.set(A.x,A.y,A.z,A.w):Z.set(A,N,V,G),Pe.viewport(y.copy(Z).multiplyScalar($).round())},this.getScissor=function(A){return A.copy(Q)},this.setScissor=function(A,N,V,G){A.isVector4?Q.set(A.x,A.y,A.z,A.w):Q.set(A,N,V,G),Pe.scissor(T.copy(Q).multiplyScalar($).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(A){Pe.setScissorTest(re=A)},this.setOpaqueSort=function(A){b=A},this.setTransparentSort=function(A){q=A},this.getClearColor=function(A){return A.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor.apply(be,arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha.apply(be,arguments)},this.clear=function(A=!0,N=!0,V=!0){let G=0;if(A){let U=!1;if(M!==null){const oe=M.texture.format;U=oe===rm||oe===im||oe===nm}if(U){const oe=M.texture.type,de=oe===Qi||oe===Es||oe===Qa||oe===Fo||oe===em||oe===tm,ye=be.getClearColor(),Se=be.getClearAlpha(),Ae=ye.r,Re=ye.g,Ee=ye.b;de?(p[0]=Ae,p[1]=Re,p[2]=Ee,p[3]=Se,D.clearBufferuiv(D.COLOR,0,p)):(g[0]=Ae,g[1]=Re,g[2]=Ee,g[3]=Se,D.clearBufferiv(D.COLOR,0,g))}else G|=D.COLOR_BUFFER_BIT}N&&(G|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),V&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),_e.dispose(),je.dispose(),De.dispose(),E.dispose(),z.dispose(),J.dispose(),rt.dispose(),I.dispose(),Me.dispose(),X.dispose(),X.removeEventListener("sessionstart",lm),X.removeEventListener("sessionend",um),Wr.stop()};function te(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=ot.autoReset,N=ve.enabled,V=ve.autoUpdate,G=ve.needsUpdate,U=ve.type;he(),ot.autoReset=A,ve.enabled=N,ve.autoUpdate=V,ve.needsUpdate=G,ve.type=U}function pe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ge(A){const N=A.target;N.removeEventListener("dispose",Ge),At(N)}function At(A){an(A),De.remove(A)}function an(A){const N=De.get(A).programs;N!==void 0&&(N.forEach(function(V){Me.releaseProgram(V)}),A.isShaderMaterial&&Me.releaseShaderCache(A))}this.renderBufferDirect=function(A,N,V,G,U,oe){N===null&&(N=Ie);const de=U.isMesh&&U.matrixWorld.determinant()<0,ye=Fy(A,N,V,G,U);Pe.setMaterial(G,de);let Se=V.index,Ae=1;if(G.wireframe===!0){if(Se=ne.getWireframeAttribute(V),Se===void 0)return;Ae=2}const Re=V.drawRange,Ee=V.attributes.position;let Qe=Re.start*Ae,at=(Re.start+Re.count)*Ae;oe!==null&&(Qe=Math.max(Qe,oe.start*Ae),at=Math.min(at,(oe.start+oe.count)*Ae)),Se!==null?(Qe=Math.max(Qe,0),at=Math.min(at,Se.count)):Ee!=null&&(Qe=Math.max(Qe,0),at=Math.min(at,Ee.count));const xt=at-Qe;if(xt<0||xt===1/0)return;rt.setup(U,G,ye,V,Se);let Tn,qe=xe;if(Se!==null&&(Tn=ee.get(Se),qe=Ve,qe.setIndex(Tn)),U.isMesh)G.wireframe===!0?(Pe.setLineWidth(G.wireframeLinewidth*He()),qe.setMode(D.LINES)):qe.setMode(D.TRIANGLES);else if(U.isLine){let Te=G.linewidth;Te===void 0&&(Te=1),Pe.setLineWidth(Te*He()),U.isLineSegments?qe.setMode(D.LINES):U.isLineLoop?qe.setMode(D.LINE_LOOP):qe.setMode(D.LINE_STRIP)}else U.isPoints?qe.setMode(D.POINTS):U.isSprite&&qe.setMode(D.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)qe.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))qe.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Te=U._multiDrawStarts,Bt=U._multiDrawCounts,Ke=U._multiDrawCount,ti=Se?ee.get(Se).bytesPerElement:1,bs=De.get(G).currentProgram.getUniforms();for(let wn=0;wn<Ke;wn++)bs.setValue(D,"_gl_DrawID",wn),qe.render(Te[wn]/ti,Bt[wn])}else if(U.isInstancedMesh)qe.renderInstances(Qe,xt,U.count);else if(V.isInstancedBufferGeometry){const Te=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Bt=Math.min(V.instanceCount,Te);qe.renderInstances(Qe,xt,Bt)}else qe.render(Qe,xt)};function Ye(A,N,V){A.transparent===!0&&A.side===Bi&&A.forceSinglePass===!1?(A.side=Sn,A.needsUpdate=!0,fl(A,N,V),A.side=kr,A.needsUpdate=!0,fl(A,N,V),A.side=Bi):fl(A,N,V)}this.compile=function(A,N,V=null){V===null&&(V=A),m=je.get(V),m.init(N),v.push(m),V.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),A!==V&&A.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights();const G=new Set;return A.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const oe=U.material;if(oe)if(Array.isArray(oe))for(let de=0;de<oe.length;de++){const ye=oe[de];Ye(ye,V,U),G.add(ye)}else Ye(oe,V,U),G.add(oe)}),v.pop(),m=null,G},this.compileAsync=function(A,N,V=null){const G=this.compile(A,N,V);return new Promise(U=>{function oe(){if(G.forEach(function(de){De.get(de).currentProgram.isReady()&&G.delete(de)}),G.size===0){U(A);return}setTimeout(oe,10)}Be.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let ln=null;function Pi(A){ln&&ln(A)}function lm(){Wr.stop()}function um(){Wr.start()}const Wr=new Py;Wr.setAnimationLoop(Pi),typeof self<"u"&&Wr.setContext(self),this.setAnimationLoop=function(A){ln=A,X.setAnimationLoop(A),A===null?Wr.stop():Wr.start()},X.addEventListener("sessionstart",lm),X.addEventListener("sessionend",um),this.render=function(A,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(N),N=X.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,N,M),m=je.get(A,v.length),m.init(N),v.push(m),ae.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ge.setFromProjectionMatrix(ae),Y=this.localClippingEnabled,B=se.init(this.clippingPlanes,Y),_=_e.get(A,d.length),_.init(),d.push(_),X.enabled===!0&&X.isPresenting===!0){const oe=x.xr.getDepthSensingMesh();oe!==null&&Pc(oe,N,-1/0,x.sortObjects)}Pc(A,N,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(b,q),$e=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,$e&&be.addToRenderList(_,A),this.info.render.frame++,B===!0&&se.beginShadows();const V=m.state.shadowsArray;ve.render(V,A,N),B===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=_.opaque,U=_.transmissive;if(m.setupLights(),N.isArrayCamera){const oe=N.cameras;if(U.length>0)for(let de=0,ye=oe.length;de<ye;de++){const Se=oe[de];fm(G,U,A,Se)}$e&&be.render(A);for(let de=0,ye=oe.length;de<ye;de++){const Se=oe[de];cm(_,A,Se,Se.viewport)}}else U.length>0&&fm(G,U,A,N),$e&&be.render(A),cm(_,A,N);M!==null&&(P.updateMultisampleRenderTarget(M),P.updateRenderTargetMipmap(M)),A.isScene===!0&&A.onAfterRender(x,A,N),rt.resetDefaultState(),R=-1,L=null,v.pop(),v.length>0?(m=v[v.length-1],B===!0&&se.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function Pc(A,N,V,G){if(A.visible===!1)return;if(A.layers.test(N.layers)){if(A.isGroup)V=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(N);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ge.intersectsSprite(A)){G&&we.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ae);const de=J.update(A),ye=A.material;ye.visible&&_.push(A,de,ye,V,we.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ge.intersectsObject(A))){const de=J.update(A),ye=A.material;if(G&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),we.copy(A.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),we.copy(de.boundingSphere.center)),we.applyMatrix4(A.matrixWorld).applyMatrix4(ae)),Array.isArray(ye)){const Se=de.groups;for(let Ae=0,Re=Se.length;Ae<Re;Ae++){const Ee=Se[Ae],Qe=ye[Ee.materialIndex];Qe&&Qe.visible&&_.push(A,de,Qe,V,we.z,Ee)}}else ye.visible&&_.push(A,de,ye,V,we.z,null)}}const oe=A.children;for(let de=0,ye=oe.length;de<ye;de++)Pc(oe[de],N,V,G)}function cm(A,N,V,G){const U=A.opaque,oe=A.transmissive,de=A.transparent;m.setupLightsView(V),B===!0&&se.setGlobalState(x.clippingPlanes,V),G&&Pe.viewport(y.copy(G)),U.length>0&&cl(U,N,V),oe.length>0&&cl(oe,N,V),de.length>0&&cl(de,N,V),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function fm(A,N,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[G.id]===void 0&&(m.state.transmissionRenderTarget[G.id]=new Ts(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?sl:Qi,minFilter:cs,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const oe=m.state.transmissionRenderTarget[G.id],de=G.viewport||y;oe.setSize(de.z,de.w);const ye=x.getRenderTarget();x.setRenderTarget(oe),x.getClearColor(F),H=x.getClearAlpha(),H<1&&x.setClearColor(16777215,.5),x.clear(),$e&&be.render(V);const Se=x.toneMapping;x.toneMapping=Dr;const Ae=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),m.setupLightsView(G),B===!0&&se.setGlobalState(x.clippingPlanes,G),cl(A,V,G),P.updateMultisampleRenderTarget(oe),P.updateRenderTargetMipmap(oe),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let Ee=0,Qe=N.length;Ee<Qe;Ee++){const at=N[Ee],xt=at.object,Tn=at.geometry,qe=at.material,Te=at.group;if(qe.side===Bi&&xt.layers.test(G.layers)){const Bt=qe.side;qe.side=Sn,qe.needsUpdate=!0,dm(xt,V,G,Tn,qe,Te),qe.side=Bt,qe.needsUpdate=!0,Re=!0}}Re===!0&&(P.updateMultisampleRenderTarget(oe),P.updateRenderTargetMipmap(oe))}x.setRenderTarget(ye),x.setClearColor(F,H),Ae!==void 0&&(G.viewport=Ae),x.toneMapping=Se}function cl(A,N,V){const G=N.isScene===!0?N.overrideMaterial:null;for(let U=0,oe=A.length;U<oe;U++){const de=A[U],ye=de.object,Se=de.geometry,Ae=G===null?de.material:G,Re=de.group;ye.layers.test(V.layers)&&dm(ye,N,V,Se,Ae,Re)}}function dm(A,N,V,G,U,oe){A.onBeforeRender(x,N,V,G,U,oe),A.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),U.onBeforeRender(x,N,V,G,A,oe),U.transparent===!0&&U.side===Bi&&U.forceSinglePass===!1?(U.side=Sn,U.needsUpdate=!0,x.renderBufferDirect(V,N,G,U,A,oe),U.side=kr,U.needsUpdate=!0,x.renderBufferDirect(V,N,G,U,A,oe),U.side=Bi):x.renderBufferDirect(V,N,G,U,A,oe),A.onAfterRender(x,N,V,G,U,oe)}function fl(A,N,V){N.isScene!==!0&&(N=Ie);const G=De.get(A),U=m.state.lights,oe=m.state.shadowsArray,de=U.state.version,ye=Me.getParameters(A,U.state,oe,N,V),Se=Me.getProgramCacheKey(ye);let Ae=G.programs;G.environment=A.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(A.isMeshStandardMaterial?z:E).get(A.envMap||G.environment),G.envMapRotation=G.environment!==null&&A.envMap===null?N.environmentRotation:A.envMapRotation,Ae===void 0&&(A.addEventListener("dispose",Ge),Ae=new Map,G.programs=Ae);let Re=Ae.get(Se);if(Re!==void 0){if(G.currentProgram===Re&&G.lightsStateVersion===de)return pm(A,ye),Re}else ye.uniforms=Me.getUniforms(A),A.onBeforeCompile(ye,x),Re=Me.acquireProgram(ye,Se),Ae.set(Se,Re),G.uniforms=ye.uniforms;const Ee=G.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ee.clippingPlanes=se.uniform),pm(A,ye),G.needsLights=ky(A),G.lightsStateVersion=de,G.needsLights&&(Ee.ambientLightColor.value=U.state.ambient,Ee.lightProbe.value=U.state.probe,Ee.directionalLights.value=U.state.directional,Ee.directionalLightShadows.value=U.state.directionalShadow,Ee.spotLights.value=U.state.spot,Ee.spotLightShadows.value=U.state.spotShadow,Ee.rectAreaLights.value=U.state.rectArea,Ee.ltc_1.value=U.state.rectAreaLTC1,Ee.ltc_2.value=U.state.rectAreaLTC2,Ee.pointLights.value=U.state.point,Ee.pointLightShadows.value=U.state.pointShadow,Ee.hemisphereLights.value=U.state.hemi,Ee.directionalShadowMap.value=U.state.directionalShadowMap,Ee.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ee.spotShadowMap.value=U.state.spotShadowMap,Ee.spotLightMatrix.value=U.state.spotLightMatrix,Ee.spotLightMap.value=U.state.spotLightMap,Ee.pointShadowMap.value=U.state.pointShadowMap,Ee.pointShadowMatrix.value=U.state.pointShadowMatrix),G.currentProgram=Re,G.uniformsList=null,Re}function hm(A){if(A.uniformsList===null){const N=A.currentProgram.getUniforms();A.uniformsList=vu.seqWithValue(N.seq,A.uniforms)}return A.uniformsList}function pm(A,N){const V=De.get(A);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function Fy(A,N,V,G,U){N.isScene!==!0&&(N=Ie),P.resetTextureUnits();const oe=N.fog,de=G.isMeshStandardMaterial?N.environment:null,ye=M===null?x.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Gr,Se=(G.isMeshStandardMaterial?z:E).get(G.envMap||de),Ae=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Re=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ee=!!V.morphAttributes.position,Qe=!!V.morphAttributes.normal,at=!!V.morphAttributes.color;let xt=Dr;G.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(xt=x.toneMapping);const Tn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,qe=Tn!==void 0?Tn.length:0,Te=De.get(G),Bt=m.state.lights;if(B===!0&&(Y===!0||A!==L)){const Hn=A===L&&G.id===R;se.setState(G,A,Hn)}let Ke=!1;G.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==Bt.state.version||Te.outputColorSpace!==ye||U.isBatchedMesh&&Te.batching===!1||!U.isBatchedMesh&&Te.batching===!0||U.isBatchedMesh&&Te.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Te.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Te.instancing===!1||!U.isInstancedMesh&&Te.instancing===!0||U.isSkinnedMesh&&Te.skinning===!1||!U.isSkinnedMesh&&Te.skinning===!0||U.isInstancedMesh&&Te.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Te.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Te.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Te.instancingMorph===!1&&U.morphTexture!==null||Te.envMap!==Se||G.fog===!0&&Te.fog!==oe||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==se.numPlanes||Te.numIntersection!==se.numIntersection)||Te.vertexAlphas!==Ae||Te.vertexTangents!==Re||Te.morphTargets!==Ee||Te.morphNormals!==Qe||Te.morphColors!==at||Te.toneMapping!==xt||Te.morphTargetsCount!==qe)&&(Ke=!0):(Ke=!0,Te.__version=G.version);let ti=Te.currentProgram;Ke===!0&&(ti=fl(G,N,U));let bs=!1,wn=!1,bc=!1;const Mt=ti.getUniforms(),tr=Te.uniforms;if(Pe.useProgram(ti.program)&&(bs=!0,wn=!0,bc=!0),G.id!==R&&(R=G.id,wn=!0),bs||L!==A){Xe.reverseDepthBuffer?(le.copy(A.projectionMatrix),jT(le),YT(le),Mt.setValue(D,"projectionMatrix",le)):Mt.setValue(D,"projectionMatrix",A.projectionMatrix),Mt.setValue(D,"viewMatrix",A.matrixWorldInverse);const Hn=Mt.map.cameraPosition;Hn!==void 0&&Hn.setValue(D,Ce.setFromMatrixPosition(A.matrixWorld)),Xe.logarithmicDepthBuffer&&Mt.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Mt.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),L!==A&&(L=A,wn=!0,bc=!0)}if(U.isSkinnedMesh){Mt.setOptional(D,U,"bindMatrix"),Mt.setOptional(D,U,"bindMatrixInverse");const Hn=U.skeleton;Hn&&(Hn.boneTexture===null&&Hn.computeBoneTexture(),Mt.setValue(D,"boneTexture",Hn.boneTexture,P))}U.isBatchedMesh&&(Mt.setOptional(D,U,"batchingTexture"),Mt.setValue(D,"batchingTexture",U._matricesTexture,P),Mt.setOptional(D,U,"batchingIdTexture"),Mt.setValue(D,"batchingIdTexture",U._indirectTexture,P),Mt.setOptional(D,U,"batchingColorTexture"),U._colorsTexture!==null&&Mt.setValue(D,"batchingColorTexture",U._colorsTexture,P));const Lc=V.morphAttributes;if((Lc.position!==void 0||Lc.normal!==void 0||Lc.color!==void 0)&&Le.update(U,V,ti),(wn||Te.receiveShadow!==U.receiveShadow)&&(Te.receiveShadow=U.receiveShadow,Mt.setValue(D,"receiveShadow",U.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(tr.envMap.value=Se,tr.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(tr.envMapIntensity.value=N.environmentIntensity),wn&&(Mt.setValue(D,"toneMappingExposure",x.toneMappingExposure),Te.needsLights&&Oy(tr,bc),oe&&G.fog===!0&&ce.refreshFogUniforms(tr,oe),ce.refreshMaterialUniforms(tr,G,$,O,m.state.transmissionRenderTarget[A.id]),vu.upload(D,hm(Te),tr,P)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(vu.upload(D,hm(Te),tr,P),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Mt.setValue(D,"center",U.center),Mt.setValue(D,"modelViewMatrix",U.modelViewMatrix),Mt.setValue(D,"normalMatrix",U.normalMatrix),Mt.setValue(D,"modelMatrix",U.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Hn=G.uniformsGroups;for(let Dc=0,zy=Hn.length;Dc<zy;Dc++){const mm=Hn[Dc];I.update(mm,ti),I.bind(mm,ti)}}return ti}function Oy(A,N){A.ambientLightColor.needsUpdate=N,A.lightProbe.needsUpdate=N,A.directionalLights.needsUpdate=N,A.directionalLightShadows.needsUpdate=N,A.pointLights.needsUpdate=N,A.pointLightShadows.needsUpdate=N,A.spotLights.needsUpdate=N,A.spotLightShadows.needsUpdate=N,A.rectAreaLights.needsUpdate=N,A.hemisphereLights.needsUpdate=N}function ky(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(A,N,V){De.get(A.texture).__webglTexture=N,De.get(A.depthTexture).__webglTexture=V;const G=De.get(A);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,N){const V=De.get(A);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(A,N=0,V=0){M=A,w=N,C=V;let G=!0,U=null,oe=!1,de=!1;if(A){const Se=De.get(A);if(Se.__useDefaultFramebuffer!==void 0)Pe.bindFramebuffer(D.FRAMEBUFFER,null),G=!1;else if(Se.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(Se.__hasExternalTextures)P.rebindTextures(A,De.get(A.texture).__webglTexture,De.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ee=A.depthTexture;if(Se.__boundDepthTexture!==Ee){if(Ee!==null&&De.has(Ee)&&(A.width!==Ee.image.width||A.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}const Ae=A.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(de=!0);const Re=De.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Re[N])?U=Re[N][V]:U=Re[N],oe=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?U=De.get(A).__webglMultisampledFramebuffer:Array.isArray(Re)?U=Re[V]:U=Re,y.copy(A.viewport),T.copy(A.scissor),k=A.scissorTest}else y.copy(Z).multiplyScalar($).floor(),T.copy(Q).multiplyScalar($).floor(),k=re;if(Pe.bindFramebuffer(D.FRAMEBUFFER,U)&&G&&Pe.drawBuffers(A,U),Pe.viewport(y),Pe.scissor(T),Pe.setScissorTest(k),oe){const Se=De.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,Se.__webglTexture,V)}else if(de){const Se=De.get(A.texture),Ae=N||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Se.__webglTexture,V||0,Ae)}R=-1},this.readRenderTargetPixels=function(A,N,V,G,U,oe,de){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=De.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&de!==void 0&&(ye=ye[de]),ye){Pe.bindFramebuffer(D.FRAMEBUFFER,ye);try{const Se=A.texture,Ae=Se.format,Re=Se.type;if(!Xe.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=A.width-G&&V>=0&&V<=A.height-U&&D.readPixels(N,V,G,U,Ne.convert(Ae),Ne.convert(Re),oe)}finally{const Se=M!==null?De.get(M).__webglFramebuffer:null;Pe.bindFramebuffer(D.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(A,N,V,G,U,oe,de){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=De.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&de!==void 0&&(ye=ye[de]),ye){const Se=A.texture,Ae=Se.format,Re=Se.type;if(!Xe.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=A.width-G&&V>=0&&V<=A.height-U){Pe.bindFramebuffer(D.FRAMEBUFFER,ye);const Ee=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ee),D.bufferData(D.PIXEL_PACK_BUFFER,oe.byteLength,D.STREAM_READ),D.readPixels(N,V,G,U,Ne.convert(Ae),Ne.convert(Re),0);const Qe=M!==null?De.get(M).__webglFramebuffer:null;Pe.bindFramebuffer(D.FRAMEBUFFER,Qe);const at=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await XT(D,at,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ee),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,oe),D.deleteBuffer(Ee),D.deleteSync(at),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,N=null,V=0){A.isTexture!==!0&&(gu("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,A=arguments[1]);const G=Math.pow(2,-V),U=Math.floor(A.image.width*G),oe=Math.floor(A.image.height*G),de=N!==null?N.x:0,ye=N!==null?N.y:0;P.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,de,ye,U,oe),Pe.unbindTexture()},this.copyTextureToTexture=function(A,N,V=null,G=null,U=0){A.isTexture!==!0&&(gu("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,A=arguments[1],N=arguments[2],U=arguments[3]||0,V=null);let oe,de,ye,Se,Ae,Re;V!==null?(oe=V.max.x-V.min.x,de=V.max.y-V.min.y,ye=V.min.x,Se=V.min.y):(oe=A.image.width,de=A.image.height,ye=0,Se=0),G!==null?(Ae=G.x,Re=G.y):(Ae=0,Re=0);const Ee=Ne.convert(N.format),Qe=Ne.convert(N.type);P.setTexture2D(N,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const at=D.getParameter(D.UNPACK_ROW_LENGTH),xt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Tn=D.getParameter(D.UNPACK_SKIP_PIXELS),qe=D.getParameter(D.UNPACK_SKIP_ROWS),Te=D.getParameter(D.UNPACK_SKIP_IMAGES),Bt=A.isCompressedTexture?A.mipmaps[U]:A.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Bt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Bt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ye),D.pixelStorei(D.UNPACK_SKIP_ROWS,Se),A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,U,Ae,Re,oe,de,Ee,Qe,Bt.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,U,Ae,Re,Bt.width,Bt.height,Ee,Bt.data):D.texSubImage2D(D.TEXTURE_2D,U,Ae,Re,oe,de,Ee,Qe,Bt),D.pixelStorei(D.UNPACK_ROW_LENGTH,at),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,xt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Tn),D.pixelStorei(D.UNPACK_SKIP_ROWS,qe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Te),U===0&&N.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Pe.unbindTexture()},this.copyTextureToTexture3D=function(A,N,V=null,G=null,U=0){A.isTexture!==!0&&(gu("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,A=arguments[2],N=arguments[3],U=arguments[4]||0);let oe,de,ye,Se,Ae,Re,Ee,Qe,at;const xt=A.isCompressedTexture?A.mipmaps[U]:A.image;V!==null?(oe=V.max.x-V.min.x,de=V.max.y-V.min.y,ye=V.max.z-V.min.z,Se=V.min.x,Ae=V.min.y,Re=V.min.z):(oe=xt.width,de=xt.height,ye=xt.depth,Se=0,Ae=0,Re=0),G!==null?(Ee=G.x,Qe=G.y,at=G.z):(Ee=0,Qe=0,at=0);const Tn=Ne.convert(N.format),qe=Ne.convert(N.type);let Te;if(N.isData3DTexture)P.setTexture3D(N,0),Te=D.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)P.setTexture2DArray(N,0),Te=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const Bt=D.getParameter(D.UNPACK_ROW_LENGTH),Ke=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ti=D.getParameter(D.UNPACK_SKIP_PIXELS),bs=D.getParameter(D.UNPACK_SKIP_ROWS),wn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,xt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,xt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Se),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ae),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Re),A.isDataTexture||A.isData3DTexture?D.texSubImage3D(Te,U,Ee,Qe,at,oe,de,ye,Tn,qe,xt.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(Te,U,Ee,Qe,at,oe,de,ye,Tn,xt.data):D.texSubImage3D(Te,U,Ee,Qe,at,oe,de,ye,Tn,qe,xt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Bt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ke),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ti),D.pixelStorei(D.UNPACK_SKIP_ROWS,bs),D.pixelStorei(D.UNPACK_SKIP_IMAGES,wn),U===0&&N.generateMipmaps&&D.generateMipmap(Te),Pe.unbindTexture()},this.initRenderTarget=function(A){De.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),Pe.unbindTexture()},this.resetState=function(){w=0,C=0,M=null,Pe.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===sm?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===Ac?"display-p3":"srgb"}}class s2 extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ji,this.environmentIntensity=1,this.environmentRotation=new Ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Yf extends rn{constructor(e=null,t=1,i=1,r,s,o,a,l,u=Zt,c=Zt,f,h){super(null,o,a,l,u,c,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qp);function o2({vol:n,slice:e,colormap:t,invert:i,flipX:r,flipY:s,win:o,stack:a,onScrub:l}){const u=Ue.useRef(null),c=Ue.useRef({}).current;return Ue.useEffect(()=>{const f=u.current,h=new r2({canvas:f,antialias:!0});h.setClearColor(1377801,1);const p=new s2,g=new by(-.55,.55,.55,-.55,.01,100);g.position.set(0,0,5);const _=new Uint8Array(256*4);{const L=Qu.Viridis;for(let y=0;y<256;y++)_[y*4]=L[y*3],_[y*4+1]=L[y*3+1],_[y*4+2]=L[y*3+2],_[y*4+3]=255}const m=new Yf(_,256,1,Zn);m.minFilter=m.magFilter=Yn,m.needsUpdate=!0;const d=(L,y)=>{const T=new Yf(new Float32Array(L*y),L,y,Ju,fi);return T.minFilter=T.magFilter=Zt,T.wrapS=T.wrapT=yr,T},v={uTexA:{value:d(4,4)},uTexB:{value:d(4,4)},uMix:{value:0},uLUT:{value:m},uWin:{value:new et(0,1)},uFlip:{value:new et(0,1)},uInvert:{value:0},uAlpha:{value:1}},x=new Ri({uniforms:v,vertexShader:`
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
        uniform sampler2D uTexA, uTexB, uLUT;
        uniform float uMix, uInvert, uAlpha;
        uniform vec2 uWin, uFlip;
        varying vec2 vUv;
        void main() {
          vec2 uv = vec2(uFlip.x < 0.5 ? vUv.x : 1.0 - vUv.x,
                         uFlip.y < 0.5 ? vUv.y : 1.0 - vUv.y);
          float v = mix(texture2D(uTexB, uv).r, texture2D(uTexA, uv).r, 1.0 - uMix);
          if (abs(v) < 1e-6 || v < uWin.x + 1e-6) discard;  // background stays transparent, pre-invert
          float n = uWin.y > uWin.x ? clamp((v - uWin.x) / (uWin.y - uWin.x), 0.0, 1.0) : 0.0;
          if (uInvert > 0.5) n = 1.0 - n;
          gl_FragColor = vec4(texture2D(uLUT, vec2(n, 0.5)).rgb, uAlpha);
        }`,transparent:!0});Object.assign(c,{renderer:h,scene:p,camera:g,uniforms:v,mat:x,zoom:1,drag:null,texA:v.uTexA.value,texB:v.uTexB.value,stackGroup:null,volDirty:!0,lastSlice:void 0,stackRot:{y:.55}});const S=new di(new zo(1,1),x);p.add(S),window.__threeViewer=c;const w=()=>{const L=f.clientWidth||1,y=f.clientHeight||1;h.setSize(L,y,!1);const T=L/y,k=.5/c.zoom;T>=1?(g.top=k,g.bottom=-k,g.left=-k*T,g.right=k*T):(g.left=-k,g.right=k,g.top=k/T,g.bottom=-k/T),g.updateProjectionMatrix()};c.resize=w;const C=new ResizeObserver(w);C.observe(f),w();let M;const R=()=>{M=requestAnimationFrame(R),h.render(p,g)};return R(),()=>{cancelAnimationFrame(M),C.disconnect(),h.dispose(),Rt.ticker.remove(c.autorotate)}},[]),Ue.useEffect(()=>{if(!n||!c.mat)return;const[f,h,p]=n.shape;for(const d of[c.texA,c.texB])d.image={data:new Float32Array(h*p),width:p,height:h},d.flipY=!0,d.needsUpdate=!0;c.stackGroup&&(c.scene.remove(c.stackGroup),c.stackGroup.children.forEach(d=>{d.geometry.dispose(),d.material.dispose()}));const g=new ha,_=Math.min(f,48),m=Math.max(1,Math.ceil(f/_));for(let d=0;d<_;d++){const v=new Yf(X_(n,d*m),p,h,Ju,fi);v.minFilter=v.magFilter=Zt,v.flipY=!0,v.needsUpdate=!0;const x=new Ri({uniforms:{...c.mat.uniforms,uTexA:{value:v},uTexB:{value:v},uAlpha:{value:.4}},vertexShader:c.mat.vertexShader,fragmentShader:c.mat.fragmentShader,transparent:!0}),S=new di(new zo(1,1),x);S.position.z=(d-(_-1)/2)*.04,g.add(S)}g.rotation.set(-.3,c.stackRot.y,0),g.scale.setScalar(.42),g.visible=!1,c.scene.add(g),c.stackGroup=g,c.volDirty=!0},[n]),Ue.useEffect(()=>{!n||!c.texA||(!c.volDirty&&c.lastSlice!==void 0&&(c.texB.image.data.set(c.texA.image.data),c.texB.needsUpdate=!0,c.uniforms.uMix.value=1,Rt.to(c.uniforms.uMix,{value:0,duration:.22,ease:"power2.out",overwrite:!0})),c.texA.image.data.set(X_(n,Math.min(e,n.shape[0]-1))),c.texA.needsUpdate=!0,c.volDirty=!1,c.lastSlice=e)},[n,e]),Ue.useEffect(()=>{if(!c.uniforms)return;const f=Qu[t],h=c.uniforms.uLUT.value.image.data;for(let p=0;p<256;p++)h[p*4]=f[p*3],h[p*4+1]=f[p*3+1],h[p*4+2]=f[p*3+2];c.uniforms.uLUT.value.needsUpdate=!0},[t]),Ue.useEffect(()=>{c.uniforms&&(c.uniforms.uInvert.value=i?1:0)},[i]),Ue.useEffect(()=>{c.uniforms&&c.uniforms.uFlip.value.set(r?1:0,s?0:1)},[r,s]),Ue.useEffect(()=>{c.uniforms&&Rt.to(c.uniforms.uWin.value,{x:o[0],y:o[1],duration:.4,ease:"power2.out",overwrite:!0})},[o[0],o[1]]),Ue.useEffect(()=>{const f=c.stackGroup;!f||!c.uniforms||(a?(f.visible=!0,f.children.forEach(h=>Rt.to(h.material.uniforms.uAlpha,{value:.45,duration:.8})),Rt.to(c.uniforms.uAlpha,{value:0,duration:.3}),Rt.fromTo(f.rotation,{x:0,y:c.stackRot.y},{x:-.28,duration:1.1,ease:"power3.out"}),c.autorotate||(c.autorotate=(h,p)=>{a&&!c.drag&&(f.rotation.y+=p/1e3*.1)}),Rt.ticker.add(c.autorotate)):(Rt.ticker.remove(c.autorotate),f.visible&&Rt.to(f.children.map(h=>h.material.uniforms.uAlpha),{value:0,duration:.3,onComplete:()=>{f.visible=!1,f.children.forEach(h=>h.material.uniforms.uAlpha.value=.45)}}),Rt.to(c.uniforms.uAlpha,{value:1,duration:.5,delay:.15})))},[a]),Ue.useEffect(()=>{const f=u.current,h=d=>{c.drag={x:d.clientX,y:d.clientY},f.setPointerCapture(d.pointerId)},p=d=>{if(!c.drag)return;const v=(d.clientX-c.drag.x)/f.clientWidth,x=(d.clientY-c.drag.y)/f.clientHeight;c.drag={x:d.clientX,y:d.clientY},a?(c.stackGroup.rotation.y+=v*2.5,c.stackRot.y=c.stackGroup.rotation.y):(c.camera.position.x-=v*(c.camera.right-c.camera.left),c.camera.position.y+=x*(c.camera.top-c.camera.bottom))},g=()=>{c.drag=null},_=d=>{d.preventDefault(),d.ctrlKey||a?(c.zoom=Math.min(6,Math.max(.6,c.zoom*(d.deltaY<0?1.1:.9))),c.resize()):l(d.deltaY<0?1:-1)},m=()=>{c.zoom=1,Rt.to(c.camera.position,{x:0,y:0,duration:.5,ease:"power2.out"}),c.resize()};return f.addEventListener("pointerdown",h),f.addEventListener("pointermove",p),f.addEventListener("pointerup",g),f.addEventListener("wheel",_,{passive:!1}),f.addEventListener("dblclick",m),()=>{f.removeEventListener("pointerdown",h),f.removeEventListener("pointermove",p),f.removeEventListener("pointerup",g),f.removeEventListener("wheel",_),f.removeEventListener("dblclick",m)}},[a,l]),j.jsx("canvas",{ref:u,className:"viewer-canvas"})}function a2({vol:n,file:e,api:t,pred:i,predBusy:r,runPrediction:s,onRefresh:o}){const a=Ue.useRef(null),l=Ue.useRef(null),u=ey(),c=()=>{X1(u==="live"?"mock":"live"),o()};return Ue.useEffect(()=>{if(!(i!=null&&i.v))return;const{prob:f}=i.v,h=a.current;Rt.fromTo(h,{strokeDashoffset:100},{strokeDashoffset:100-f*100,duration:1.1,ease:"power3.out"});const p={v:0};Rt.to(p,{v:f*100,duration:1.1,ease:"power3.out",onUpdate:()=>{l.current&&(l.current.textContent=`${p.v.toFixed(1)}%`)}}),Rt.fromTo(".pred-card",{scale:.96,opacity:0},{scale:1,opacity:1,duration:.5,ease:"back.out(1.6)"})},[i]),j.jsxs("aside",{className:"predpanel",children:[j.jsx("div",{className:"side-h pred-head",children:"Prediction"}),j.jsxs("div",{className:"api-row",children:[j.jsx("span",{className:`api-dot ${u==="mock"?"mock":t.online?t.any?"ok":"warn":"off"}`}),j.jsx("span",{className:"api-text",children:u==="mock"?"mock mode · simulated inference":t.online?t.any?`backend online · ${t.models.length} model${t.models.length>1?"s":""}`:"backend online · no models trained yet":"backend offline"}),j.jsx("button",{className:"mode-pill",onClick:c,title:u==="mock"?"Switch to a live backend (set VITE_API_BASE / VITE_API_KEY in frontend/.env)":"Switch back to the built-in mock API",children:u==="live"?"LIVE":"MOCK"}),j.jsx("button",{className:"ic tiny",onClick:o,title:"re-check /health",children:"⟳"})]}),j.jsx("button",{className:`primary-btn wide ${r?"busy":""}`,disabled:!e||r,onClick:()=>s("acl","sagittal"),children:r?"Running model…":e?"Run prediction →":"Upload a volume first"}),u==="live"&&!t.online&&j.jsxs("div",{className:"pred-note",children:["No live backend reachable. Start the artifact server from the repo root:",j.jsx("div",{className:"mono cmd",children:"python backend/server.py"}),"It serves every model in ",j.jsx("span",{className:"mono",children:"outputs/"})," on port 8000. For a hosted service set ",j.jsx("span",{className:"mono",children:"VITE_API_BASE"})," and ",j.jsx("span",{className:"mono",children:"VITE_API_KEY"})," in ",j.jsx("span",{className:"mono",children:"frontend/.env"}),"."]}),(i==null?void 0:i.error)&&j.jsxs("div",{className:"pred-error",children:["⚠ ",i.error]}),(i==null?void 0:i.v)&&j.jsxs("div",{className:`pred-card ${i.v.pos?"pos":"neg"}`,children:[j.jsx("div",{className:"pred-title",children:i.v.title}),i.res.mock&&j.jsx("div",{className:"sim-chip",children:"simulated · mock mode"}),j.jsxs("div",{className:"gauge-wrap",children:[j.jsxs("svg",{viewBox:"0 0 100 60",className:"gauge",children:[j.jsx("path",{d:"M 10 55 A 40 40 0 0 1 90 55",className:"gauge-bg",pathLength:"100"}),j.jsx("path",{d:"M 10 55 A 40 40 0 0 1 90 55",className:`gauge-arc ${i.v.pos?"hot":""}`,ref:a,pathLength:"100"})]}),j.jsx("div",{className:"gauge-num mono",ref:l,children:"0%"})]}),j.jsxs("div",{className:"pred-sub",children:["confidence ",j.jsxs("span",{className:"mono",children:[Math.round(100*Math.max(i.res.probability,1-i.res.probability)),"%"]})," · task ",j.jsx("span",{className:"mono",children:ny[i.res.task]||i.res.task})," · plane ",j.jsx("span",{className:"mono",children:i.res.plane})]}),j.jsxs("div",{className:"pred-sub detail mono",children:["P(positive) = ",i.res.probability.toFixed(4)," · label ",i.res.label," (",i.res.class,")"]})]}),j.jsxs("div",{className:"side-block side-help pred-foot",children:[j.jsx("div",{children:"Model: resnet18 · 2D slice aggregation (max + logsumexp)"}),j.jsx("div",{children:"Input: .npy volume, standardized + resampled to 32 slices"})]})]})}function l2({fileName:n,meta:e,err:t,onUpload:i}){return j.jsxs("aside",{className:"sidebar",children:[j.jsxs("div",{className:"side-block side-brand",children:[j.jsxs("div",{className:"brand-row",children:[j.jsx("span",{className:"brand-cube",children:"▦"})," MRNet: Knee MRI's"]}),n&&n!=="no file loaded"&&j.jsx("div",{className:"brand-file mono",children:n})]}),j.jsx("div",{className:"side-block",children:j.jsx("label",{className:"side-link",htmlFor:"file-input",title:"upload volume",children:"⇪ Upload .npy / image"})}),j.jsxs("div",{className:"side-block",children:[j.jsx("div",{className:"side-h",children:"File overview"}),t&&j.jsx("div",{className:"side-err",children:t}),e?j.jsx("table",{className:"kv",children:j.jsxs("tbody",{children:[j.jsxs("tr",{children:[j.jsx("td",{children:"Size"}),j.jsx("td",{className:"mono",children:e.size})]}),j.jsxs("tr",{children:[j.jsx("td",{children:"Dims"}),j.jsx("td",{className:"mono",children:e.dims})]}),j.jsxs("tr",{children:[j.jsx("td",{children:"Dtype"}),j.jsx("td",{className:"mono",children:e.dtype})]}),j.jsxs("tr",{children:[j.jsx("td",{children:"SHA-1"}),j.jsx("td",{className:"mono md5",children:e.checksum})]})]})}):j.jsx("div",{className:"side-dim",children:"no file yet"})]}),j.jsxs("div",{className:"side-block side-help",children:[j.jsx("div",{className:"side-h",children:"Controls"}),j.jsx("div",{children:"◀ ▶ slice · Space play · I invert"}),j.jsx("div",{children:"3 — 3D stack · wheel scrub (ctrl zoom)"}),j.jsx("div",{children:"drag pan · double-click reset"})]})]})}function u2(n){const{playing:e,setPlaying:t,slice:i,depth:r,setSlice:s,colormap:o,setColormap:a,invert:l,setInvert:u,flipX:c,setFlipX:f,flipY:h,setFlipY:p,win:g,setWin:_,domain:m,stack:d,setStack:v}=n,x=Ue.useRef(null);Ue.useEffect(()=>{Rt.fromTo(x.current,{y:-8,opacity:0},{y:0,opacity:1,duration:.5,ease:"power3.out"})},[]);const S=r>1?i/(r-1)*100:0;return j.jsxs("div",{className:"toolbar",ref:x,children:[j.jsxs("div",{className:"tb-group",children:[j.jsx("button",{className:`tb-tab ${d?"":"active"}`,onClick:()=>v(!1),children:"▤ Slice"}),j.jsx("button",{className:`tb-tab ${d?"active":""}`,onClick:()=>v(!0),children:"⬔ 3D Stack"})]}),j.jsxs("div",{className:"tb-group scrubber",children:[j.jsx("button",{className:`ic ${e?"hot":""}`,onClick:()=>t(!e),title:"play / pause (space)",children:e?"❚❚":"▶"}),j.jsxs("div",{className:"track",onClick:w=>{if(r>1){const C=w.currentTarget.getBoundingClientRect();s(Math.round(Math.min(r-1,Math.max(0,(w.clientX-C.left)/C.width*(r-1)))))}},children:[j.jsx("div",{className:"track-fill",style:{width:`${S}%`}}),j.jsx("div",{className:"track-knob",style:{left:`${S}%`}})]}),j.jsx("span",{className:"mono slice-counter",children:r?`${i+1}/${r}`:"–/–"})]}),j.jsxs("div",{className:"tb-group",children:[j.jsx("span",{className:"tb-lab",children:"Colormap"}),j.jsx("select",{value:o,onChange:w=>a(w.target.value),className:"cmb",children:H1.map(w=>j.jsx("option",{children:w},w))}),j.jsx("button",{className:`ic ${l?"hot":""}`,onClick:()=>u(!l),title:"invert (I)",children:"◐"}),j.jsx("button",{className:`ic ${c?"hot":""}`,onClick:()=>f(!c),title:"flip X",children:"↔"}),j.jsx("button",{className:`ic ${h?"hot":""}`,onClick:()=>p(!h),title:"flip Y",children:"↕"})]}),j.jsxs("div",{className:"tb-group win-group",children:[j.jsx("span",{className:"tb-lab",children:"Window"}),j.jsx("input",{type:"range",min:(m==null?void 0:m[0])??0,max:(g[1]||1)-1e-6,step:Math.pow(10,Math.floor(Math.log10(Math.abs(g[1]-((m==null?void 0:m[0])??0)||1))-2)),value:g[0],onChange:w=>_([Math.min(+w.target.value,g[1]-1e-6),g[1]])}),j.jsx("input",{type:"range",min:(g[0]||0)+1e-6,max:(m==null?void 0:m[1])??1,step:Math.pow(10,Math.floor(Math.log10(Math.abs(((m==null?void 0:m[1])??1)-g[0]||1))-2)),value:g[1],onChange:w=>_([g[0],Math.max(+w.target.value,g[0]+1e-6)])})]})]})}function c2({colormap:n,invert:e,win:t}){const[i,r]=t;return j.jsxs("div",{className:"colorbar",children:[j.jsx("div",{className:"cb-max mono",children:Hg(r)}),j.jsx("div",{className:"cb-bar",style:{background:G1(n),transform:e?"rotate(180deg)":"none"}}),j.jsx("div",{className:"cb-min mono",children:Hg(i)})]})}const Hg=n=>Math.abs(n)>=100?n.toFixed(0):Math.abs(n)>=1?n.toFixed(1):n.toPrecision(2);function f2(){const[n,e]=Ue.useState(null),[t,i]=Ue.useState(null),[r,s]=Ue.useState(null),[o,a]=Ue.useState(null),[l,u]=Ue.useState(0),[c,f]=Ue.useState(!1),[h,p]=Ue.useState("Grayscale"),[g,_]=Ue.useState(!1),[m,d]=Ue.useState(!1),[v,x]=Ue.useState(!1),[S,w]=Ue.useState([0,1]),[C,M]=Ue.useState([0,1]),[R,L]=Ue.useState(!1),[y,T]=Ue.useState({online:!1,models:[],any:!1,checked:!1}),[k,F]=Ue.useState(null),[H,K]=Ue.useState(!1),O=t?t.shape[0]:0,$=Ue.useCallback(async Q=>{a(null),F(null),f(!1);try{const re=await Q.arrayBuffer(),ge=await D1(Q);if(!ge.shape.length||ge.shape.some(Ie=>!Ie))throw new Error("empty volume");e(Q),i(ge),u(0),s({size:N1(re.byteLength),checksum:await I1(re),dims:ge.shape.join(" × "),dtype:ge.dtype});const B=ge.data.filter(Ie=>Ie>0),Y=B.length>100?B:ge.data,le=Math.max(1,Math.floor(Y.length/2e4)),ae=[];for(let Ie=0;Ie<Y.length;Ie+=le)ae.push(Y[Ie]);ae.sort((Ie,$e)=>Ie-$e);const Ce=ae[Math.floor(ae.length*.01)]??0,we=ae[Math.floor(ae.length*.99)]??1;w([Ce,Math.max(we,Ce+1e-6)]),M([Math.min(Ce,0),Math.max(we*2,we+1e-6)]),Rt.fromTo(".viewer-shell",{opacity:.2,scale:.985},{opacity:1,scale:1,duration:.7,ease:"power2.out"})}catch(re){a(`Could not read ${Q==null?void 0:Q.name}: ${re.message}`),i(null),e(null),s(null)}},[]);Ue.useEffect(()=>{if(!c||O<2)return;const Q=()=>u(Y=>(Y+1)%O);let re=0,ge=0;const B=(Y,le)=>{re+=le,re>110&&(re=0,performance.now()-ge>90&&(ge=performance.now(),Q()))};return Rt.ticker.add(B),()=>Rt.ticker.remove(B)},[c,O]),Ue.useEffect(()=>{const Q=re=>{re.target.tagName==="SELECT"||re.target.tagName==="INPUT"||(re.key==="ArrowRight"&&u(ge=>Math.min(O-1,ge+1)),re.key==="ArrowLeft"&&u(ge=>Math.max(0,ge-1)),re.key===" "&&(re.preventDefault(),f(ge=>!ge)),re.key.toLowerCase()==="i"&&_(ge=>!ge),re.key.toLowerCase()==="3"&&L(ge=>!ge))};return window.addEventListener("keydown",Q),()=>window.removeEventListener("keydown",Q)},[O]);const b=Ue.useCallback(async()=>{try{T({...await Q1(),checked:!0})}catch{T({online:!1,models:[],any:!1,checked:!0})}},[]);Ue.useEffect(()=>{b()},[b]);const q=Ue.useCallback(async(Q,re,ge)=>{const B=ge||n;if(!B){F({error:"Upload a .npy volume first."});return}K(!0),F(null),Rt.fromTo(".pred-card",{opacity:.3,y:8},{opacity:1,y:0,duration:.4});try{const Y=await J1(B,Q,re),le=eT(Y);F({res:Y,v:le})}catch(Y){F({error:Y.message}),(!navigator.onLine||Y.name==="AbortError"||Y.message.includes("fetch"))&&b()}finally{K(!1)}},[n,b]);Ue.useEffect(()=>{const Q=B=>{B.preventDefault(),document.body.classList.add("dragging")},re=B=>{B.relatedTarget||document.body.classList.remove("dragging")},ge=B=>{var le,ae;B.preventDefault(),document.body.classList.remove("dragging");const Y=(ae=(le=B.dataTransfer)==null?void 0:le.files)==null?void 0:ae[0];Y&&(!t||Y!==n)&&$(Y)};return window.addEventListener("dragover",Q),window.addEventListener("dragleave",re),window.addEventListener("drop",ge),()=>{window.removeEventListener("dragover",Q),window.removeEventListener("dragleave",re),window.removeEventListener("drop",ge)}},[t,n,$]);const Z=Ue.useCallback(Q=>u(re=>Math.min(O-1,Math.max(0,re+Q))),[O]);return j.jsxs("div",{className:"app",children:[j.jsxs("div",{className:"topbar",children:[j.jsx("button",{className:"icon-btn",title:"toggle sidebar",onClick:()=>document.body.classList.toggle("noside"),children:"▥"}),j.jsxs("div",{className:"crumbs",children:[j.jsx("span",{className:"crumb-file",children:n?n.name:"no file loaded"}),t&&j.jsxs(j.Fragment,{children:[j.jsx("span",{className:"crumb-sep",children:"›"}),j.jsx("span",{className:"crumb-id",children:"MRNet viewer"})]})]}),j.jsxs("div",{className:"top-actions",children:[j.jsx("button",{className:"mode-btn active",children:"Display"}),j.jsx("button",{className:"mode-btn",onClick:b,title:"re-check backend status",children:y.mock?"Mock API":`API ${y.online?"online":y.checked?"offline":"…"}`})]})]}),j.jsxs("div",{className:"body",children:[j.jsx(l2,{fileName:n==null?void 0:n.name,meta:r,err:o,onUpload:$}),j.jsxs("main",{className:"main",children:[j.jsx(u2,{playing:c,setPlaying:f,slice:l,depth:O,setSlice:u,colormap:h,setColormap:p,invert:g,setInvert:_,flipX:m,setFlipX:d,flipY:v,setFlipY:x,win:S,setWin:w,domain:C,stack:R,setStack:L}),j.jsxs("div",{className:"viewer-shell",children:[t?j.jsxs(j.Fragment,{children:[j.jsx(o2,{vol:t,slice:l,colormap:h,invert:g,flipX:m,flipY:v,win:S,stack:R,onScrub:Z}),!R&&j.jsx("div",{className:"slice-title",children:n.name.replace(/\.[^.]+$/,"")}),j.jsx("div",{className:"corner-badge",children:R?"3D stack · drag to rotate":`slice ${l+1} / ${O}`})]}):j.jsxs("div",{className:"dropzone",id:"dropzone",children:[j.jsx("div",{className:"dz-icon",children:"▦"}),j.jsx("div",{className:"dz-title",children:"Drop a knee MRI here"}),j.jsx("div",{className:"dz-sub",children:".npy volume (N×256×256) or any image — then pick colormaps, scrub slices, run prediction"}),j.jsx("button",{className:"primary-btn",onClick:()=>{var Q;return(Q=document.getElementById("file-input"))==null?void 0:Q.click()},children:"Choose file"}),j.jsx("div",{className:"dz-hint",children:"or drag & drop anywhere"})]}),j.jsx(c2,{colormap:h,invert:g,win:S})]})]}),j.jsx(a2,{vol:t,file:n,api:y,pred:k,predBusy:H,runPrediction:q,onRefresh:b})]}),j.jsx("input",{id:"file-input",type:"file",accept:".npy,.png,.jpg,.jpeg,.bmp",hidden:!0,onChange:Q=>{var re;return((re=Q.target.files)==null?void 0:re[0])&&$(Q.target.files[0])}})]})}tx(document.getElementById("root")).render(j.jsx(f2,{}));
