(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{122:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return p})),t.d(r,"metadata",(function(){return l})),t.d(r,"toc",(function(){return c})),t.d(r,"default",(function(){return s}));var n=t(3),o=t(7),a=(t(0),t(214)),p={},l={unversionedId:"examples/password_peek_controller.haml",id:"examples/password_peek_controller.haml",isDocsHomePage:!1,title:"password_peek_controller.haml",description:"`haml",source:"@site/docs/examples/password_peek_controller.haml.mdx",slug:"/examples/password_peek_controller.haml",permalink:"/stimulus-library/docs/examples/password_peek_controller.haml",version:"current"},c=[],i={toc:c};function s(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},i,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-haml"},'%label{for: "email"}\n  Email:\n  %input#email{type: "email"}/\n.input-group{"data-controller" => "password-peek"}\n  %label.input-group-label{for: "password"}\n    Enter your password:\n  %input#password.input-group-field{"data-password-peek-target" => "password", type: "password"}/\n  %a.button.input-group-button{"data-action" => "password-peek#toggle", href: ""}\n    %i.far.fa-eye-slash\n')))}s.isMDXComponent=!0},214:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return d}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=o.a.createContext({}),s=function(e){var r=o.a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=s(e.components);return o.a.createElement(i.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=s(t),m=n,d=u["".concat(p,".").concat(m)]||u[m]||f[m]||a;return t?o.a.createElement(d,l(l({ref:r},i),{},{components:t})):o.a.createElement(d,l({ref:r},i))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,p=new Array(a);p[0]=m;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,p[1]=l;for(var i=2;i<a;i++)p[i]=t[i];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);