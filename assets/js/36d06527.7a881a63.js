(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{152:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return u}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=o.a.createContext({}),f=function(e){var n=o.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=f(e.components);return o.a.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=f(t),m=r,u=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return t?o.a.createElement(u,l(l({ref:n},i),{},{components:t})):o.a.createElement(u,l({ref:n},i))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var i=2;i<a;i++)c[i]=t[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},68:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return f}));var r=t(3),o=t(7),a=(t(0),t(152)),c={},l={unversionedId:"examples/nested_form_controller.haml",id:"examples/nested_form_controller.haml",isDocsHomePage:!1,title:"nested_form_controller.haml",description:"`haml",source:"@site/docs/examples/nested_form_controller.haml.mdx",slug:"/examples/nested_form_controller.haml",permalink:"/stimulus-library/docs/examples/nested_form_controller.haml",version:"current"},s=[],i={toc:s};function f(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-haml"},'-#\x3c!-- FILE: tasks/form --\x3e\n\n-#\x3c!--\n-#.....\n-#Parent association fields\n-#.....\n-#--\x3e\n\n%h4 Tasks\n%div{ data: { controller: "nested-form" } }\n  %script{ type: "text/x-template", data: { nested_form_target: "template" } }\n    = f.simple_fields_for :tasks, Task.new, child_index: \'NEW_RECORD\' do |task|\n      = render "task_fields", f: task\n\n  %div{ data: { nested_form_target: "target"} }\n    = f.simple_fields_for :tasks do |task|\n      = render "task_fields", f: task\n\n  = link_to "Add Task", "#", class: "button green", data: { action: "click->nested-form#add" }\n\n-#\x3c!--\n-#.....\n-#Parent association fields\n-#.....\n-#--\x3e\n\n\n\n\n\n\n\n-#\x3c!-- FILE: tasks/_task_fields --\x3e\n= content_tag :div, class: "nested-fields", data: { new_record: f.object.new_record? } do\n  .form-group\n    = f.label :description\n    = f.text_field :description, class: \'form-control\'\n\n  %small= link_to "Remove", "#", data: { action: "click->nested-form#remove" }\n  = f.hidden_field :_destroy```\n')))}f.isMDXComponent=!0}}]);