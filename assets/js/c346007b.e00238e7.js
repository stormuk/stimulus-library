(self.webpackChunkdocs_2=self.webpackChunkdocs_2||[]).push([[106],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return f},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),i=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},f=function(e){var r=i(e.components);return n.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),s=i(t),m=o,b=s["".concat(u,".").concat(m)]||s[m]||p[m]||a;return t?n.createElement(b,c(c({ref:r},f),{},{components:t})):n.createElement(b,c({ref:r},f))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=s;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var i=2;i<a;i++)c[i]=t[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},7518:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return i},default:function(){return p}});var n=t(2122),o=t(9756),a=(t(7294),t(3905)),c={},l=void 0,u={unversionedId:"examples/turbo_frame_refresh_controller.html",id:"examples/turbo_frame_refresh_controller.html",isDocsHomePage:!1,title:"turbo_frame_refresh_controller.html",description:"`html",source:"@site/docs/examples/turbo_frame_refresh_controller.html.mdx",sourceDirName:"examples",slug:"/examples/turbo_frame_refresh_controller.html",permalink:"/stimulus-library/docs/examples/turbo_frame_refresh_controller.html",version:"current",frontMatter:{}},i=[],f={toc:i};function p(e){var r=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<turbo-frame src="/feed" data-controller="turbo-frame-refresh" data-turbo-frame-refresh-poll-value="true" data-turbo-frame-refresh-interval-value="10000" />```\n')))}p.isMDXComponent=!0}}]);