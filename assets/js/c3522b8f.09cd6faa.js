(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{143:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return l})),t.d(r,"toc",(function(){return p})),t.d(r,"default",(function(){return u}));var n=t(3),a=t(7),o=(t(0),t(214)),c={},l={unversionedId:"examples/clipboard_controller.haml",id:"examples/clipboard_controller.haml",isDocsHomePage:!1,title:"clipboard_controller.haml",description:"`haml",source:"@site/docs/examples/clipboard_controller.haml.mdx",slug:"/examples/clipboard_controller.haml",permalink:"/stimulus-library/docs/examples/clipboard_controller.haml",version:"current"},p=[],i={toc:p};function u(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-haml"},'%p PIN:\n.input-group{"data-clipboard-remove-unused-value" => "true", "data-controller" => "clipboard"}\n  %input.input.input-group-field{"data-clipboard-target" => "source", readonly: "readonly", type: "text", value: "1234"}/\n  %a.button.input-group-button.clipboard-button{"data-action" => "clipboard#copy", href: "#"}\n    %span{"data-clipboard-target" => "copy"}\n      %i.far.fa-clipboard\n      Copy\n    %span{"data-clipboard-target" => "fallback"}\n      %i.far.fa-hand-pointer\n      Select\n')))}u.isMDXComponent=!0},214:function(e,r,t){"use strict";t.d(r,"a",(function(){return d})),t.d(r,"b",(function(){return b}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=a.a.createContext({}),u=function(e){var r=a.a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},d=function(e){var r=u(e.components);return a.a.createElement(i.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},s=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),d=u(t),s=n,b=d["".concat(c,".").concat(s)]||d[s]||f[s]||o;return t?a.a.createElement(b,l(l({ref:r},i),{},{components:t})):a.a.createElement(b,l({ref:r},i))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=s;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var i=2;i<o;i++)c[i]=t[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);