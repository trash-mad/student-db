var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.owns=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;$jscomp.FORCE_POLYFILL_PROMISE=!1;$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};$jscomp.getGlobal=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;$jscomp.polyfills={};$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";var $jscomp$lookupPolyfilledValue=function(a,b){var c=$jscomp.propertyToPolyfillSymbol[b];if(null==c)return a[b];c=a[c];return void 0!==c?c:a[b]};
$jscomp.polyfill=function(a,b,c,d){b&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(a,b,c,d):$jscomp.polyfillUnisolated(a,b,c,d))};$jscomp.polyfillUnisolated=function(a,b,c,d){c=$jscomp.global;a=a.split(".");for(d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))return;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:b})};
$jscomp.polyfillIsolated=function(a,b,c,d){var e=a.split(".");a=1===e.length;d=e[0];d=!a&&d in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var h=0;h<e.length-1;h++){var m=e[h];if(!(m in d))return;d=d[m]}e=e[e.length-1];c=$jscomp.IS_SYMBOL_NATIVE&&"es6"===c?d[e]:null;b=b(c);null!=b&&(a?$jscomp.defineProperty($jscomp.polyfills,e,{configurable:!0,writable:!0,value:b}):b!==c&&($jscomp.propertyToPolyfillSymbol[e]=$jscomp.IS_SYMBOL_NATIVE?$jscomp.global.Symbol(e):$jscomp.POLYFILL_PREFIX+e,e=
$jscomp.propertyToPolyfillSymbol[e],$jscomp.defineProperty(d,e,{configurable:!0,writable:!0,value:b})))};$jscomp.assign=$jscomp.TRUST_ES6_POLYFILLS&&"function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)$jscomp.owns(d,e)&&(a[e]=d[e])}return a};$jscomp.polyfill("Object.assign",function(a){return a||$jscomp.assign},"es6","es3");
var __spreadArrays=this&&this.__spreadArrays||function(){for(var a=0,b=0,c=arguments.length;b<c;b++)a+=arguments[b].length;a=Array(a);var d=0;for(b=0;b<c;b++)for(var e=arguments[b],h=0,m=e.length;h<m;h++,d++)a[d]=e[h];return a},__assign=this&&this.__assign||function(){__assign=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++){b=arguments[c];for(var e in b)Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e])}return a};return __assign.apply(this,arguments)},__rest=this&&this.__rest||
function(a,b){var c={},d;for(d in a)Object.prototype.hasOwnProperty.call(a,d)&&0>b.indexOf(d)&&(c[d]=a[d]);if(null!=a&&"function"===typeof Object.getOwnPropertySymbols){var e=0;for(d=Object.getOwnPropertySymbols(a);e<d.length;e++)0>b.indexOf(d[e])&&Object.prototype.propertyIsEnumerable.call(a,d[e])&&(c[d[e]]=a[d[e]])}return c},router;(function(a){(function(b){b.RouterContext=React.createContext(function(c){return console.log({url:c})})})(a.components||(a.components={}))})(router||(router={}));
(function(a){var b=React.Children,c=React.useState,d=React.useEffect,e=React.forwardRef,h=React.createElement,m=React.isValidElement;(function(r){var D=function(n,f){void 0===n&&(n=[]);void 0===f&&(f="");var t=[],k={};n=n.reduce(function(z,p){var q=p[0],u=p[1];p=p[2];var v=pathToRegexp(q,t);if(v.test(f)){var w=v.exec(f);t.forEach(function(A,y){k[A.name]=w[y+1]});return[q,u,p]}return z},null);return null===n?null:__spreadArrays(n,[k])},B;(function(n){n.Router=function(f,t){var k=f.children,z=void 0===
k?null:k;k=f.guardFallback;var p=void 0===k?"/":k;f=f.currentUrl;var q=void 0===f?"/":f;f=c(q);var u=f[0],v=f[1];f=c([]);var w=f[0],A=f[1];f=c(null);k=f[0];var y=f[1],C=function(g){return v(g)};d(function(){var g=[];b.forEach(z,function(l){if(m(l)){if(l.type!==r.Route)throw Error("Router invalid children type");l=l.props;var x=l.guard;g.push([l.url,l.component,x?x:function(){return!0}])}else throw Error("Router invalid element");});A(g)},[]);d(function(){var g=D(w,u);if(g){var l=g[1],x=g[3];if((0,g[2])(g[0]))y(h(l,
x));else if(g=D(w,p))g=g.slice(1)[0],y(h(g,x))}window.routerUrl=u;window.routerGo=C},[u,w]);d(function(){return v(q)},[q]);t&&(t.current=C);return React.createElement(r.RouterContext.Provider,{value:C},k)}})(B||(B={}));r.Router=e(B.Router)})(a.components||(a.components={}))})(router||(router={}));(function(a){(function(b){b.Route=function(c){return React.createElement(React.Fragment,null)}})(a.components||(a.components={}))})(router||(router={}));
(function(a){var b=React.useContext;(function(c){c.Link=function(d){var e=d.children;e=void 0===e?null:e;var h=d.url,m=void 0===h?"":h;d=__rest(d,["children","url"]);var r=b(c.RouterContext);return React.createElement("a",__assign({onClick:function(){return r(m)}},d),e)}})(a.components||(a.components={}))})(router||(router={}));(function(a){var b=React.useContext;(function(c){c.useRouter=function(){return b(c.RouterContext)}})(a.components||(a.components={}))})(router||(router={}));
(function(a){var b=a.components.Route,c=a.components.Link,d=a.components.useRouter;a.Router=a.components.Router;a.Route=b;a.Link=c;a.useRouter=d})(router||(router={}));