(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{136:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),a=(r(0),r(214)),c={},l={unversionedId:"examples/empty_dom_controller.html.erb",id:"examples/empty_dom_controller.html.erb",isDocsHomePage:!1,title:"empty_dom_controller.html.erb",description:"`erb",source:"@site/docs/examples/empty_dom_controller.html.erb.mdx",slug:"/examples/empty_dom_controller.html.erb",permalink:"/stimulus-library/docs/examples/empty_dom_controller.html.erb",version:"current"},p=[],i={toc:p};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-erb"},'<div\n  data-controller="toggle-class"\n  data-action="dom:not-empty->toggle-class#on dom:empty->toggle-class#off"\n  data-toggle-class-class-value="hidden"\n>\n  <h2>Recently completed tasks</h2>\n  <div class="hide" data-toggle-class-target="toggle">\n    <p> You haven\'t completed any tasks yet.</p>\n  </div>\n  <%= turbo_stream_from [current_user, "complete_tasks"] %>\n  <%= turbo_frame_tag "complete_tasks", data-controller=\'empty-dom\' } do %>\n    <%= render @complete_tasks %>\n  <% end %>\n</div>\n')))}s.isMDXComponent=!0},214:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=o.a.createContext({}),s=function(e){var t=o.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return r?o.a.createElement(f,l(l({ref:t},i),{},{components:r})):o.a.createElement(f,l({ref:t},i))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var i=2;i<a;i++)c[i]=r[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);