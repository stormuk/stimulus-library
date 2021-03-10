(window.webpackJsonp=window.webpackJsonp||[]).push([[118,8,46,55,67,74,80],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),l=(n(0),n(214)),o={},s={unversionedId:"examples/dismissable_controller.html",id:"examples/dismissable_controller.html",isDocsHomePage:!1,title:"dismissable_controller.html",description:"`html",source:"@site/docs/examples/dismissable_controller.html.mdx",slug:"/examples/dismissable_controller.html",permalink:"/stimulus-library/docs/examples/dismissable_controller.html",version:"current"},i=[],c={toc:i};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},'<div class="flash-alert notice" data-controller="dismissable" role="notice">\n  <div class="col-start-3 col-span-8 text-center"> Something went wrong, batten down the hatches</div>\n  <div class="col-span-2 text-right">\n    <a class="btn secondary tiny mr-2" data-action="dismissable#dismiss">X</a>\n  </div>\n</div>\n')))}b.isMDXComponent=!0},124:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),l=(n(0),n(214)),o={},s={unversionedId:"examples/dismissable_controller.haml",id:"examples/dismissable_controller.haml",isDocsHomePage:!1,title:"dismissable_controller.haml",description:'`.flash-alert.notice{"data-controller" => "dismissable", role: "notice"}',source:"@site/docs/examples/dismissable_controller.haml.mdx",slug:"/examples/dismissable_controller.haml",permalink:"/stimulus-library/docs/examples/dismissable_controller.haml",version:"current"},i=[],c={toc:i};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:'language-.flash-alert.notice{"data-controller"',metastring:'=> "dismissable", role: "notice"}',"":">",'"dismissable",':!0,"role:":!0,'"notice"}':!0},'  .col-start-3.col-span-8.text-center Something went wrong, batten down the hatches\n  .col-span-2.text-right\n    %a.btn.secondary.tiny.mr-2{"data-action" => "dismissable#dismiss"} X\n')))}b.isMDXComponent=!0},202:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return m})),n.d(t,"default",(function(){return O}));var r=n(3),a=n(7),l=(n(0),n(214)),o=n(59),s=n(58),i=n(62),c=n(60),b=n(108),u=n(124),p={id:"DismissableController",title:"DismissableController"},d={unversionedId:"controllers/DismissableController",id:"controllers/DismissableController",isDocsHomePage:!1,title:"DismissableController",description:"Purpose",source:"@site/docs/controllers/dismissable_controller.mdx",slug:"/controllers/DismissableController",permalink:"/stimulus-library/docs/controllers/DismissableController",version:"current",sidebar:"someSidebar",previous:{title:"DisableWithController",permalink:"/stimulus-library/docs/controllers/DisableWithController"},next:{title:"EmptyDomController",permalink:"/stimulus-library/docs/controllers/EmptyDomController"}},m=[{value:"Purpose",id:"purpose",children:[]},{value:"Actions",id:"actions",children:[]},{value:"Targets",id:"targets",children:[]},{value:"Classes",id:"classes",children:[]},{value:"Values",id:"values",children:[]},{value:"Events",id:"events",children:[]},{value:"Side Effects",id:"side-effects",children:[]},{value:"HTML",id:"html",children:[]},{value:"HAML",id:"haml",children:[]}],f={toc:m};function O(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"purpose"},"Purpose"),Object(l.b)("p",null,"Add the ability to dismiss/remove an element from the DOM. i.e. Notifications, Flash messages. alerts"),Object(l.b)("h2",{id:"actions"},Object(l.b)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/actions"},"Actions")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Action"),Object(l.b)("th",{parentName:"tr",align:null},"Purpose"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"dismiss"),Object(l.b)("td",{parentName:"tr",align:null},"Removes the element from the DOM")))),Object(l.b)("h2",{id:"targets"},Object(l.b)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/targets"},"Targets")),Object(l.b)(o.default,{mdxType:"NoTargets"}),Object(l.b)("h2",{id:"classes"},Object(l.b)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/classes"},"Classes")),Object(l.b)(s.default,{mdxType:"NoClasses"}),Object(l.b)("h2",{id:"values"},Object(l.b)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/values"},"Values")),Object(l.b)(i.default,{mdxType:"NoValues"}),Object(l.b)("h2",{id:"events"},"Events"),Object(l.b)(c.default,{mdxType:"NoEvents"}),Object(l.b)("h2",{id:"side-effects"},"Side Effects"),Object(l.b)("p",null,"None"),Object(l.b)("h1",{id:"how-to-use"},"How to Use"),Object(l.b)("p",null,"A good example is a flash message, rather than it staying on the page forever, allowing the user to dismiss it with a little 'X' in the corner."),Object(l.b)("h2",{id:"html"},"HTML"),Object(l.b)(b.default,{mdxType:"DismissableControllerHtml"}),Object(l.b)("h2",{id:"haml"},"HAML"),Object(l.b)(u.default,{mdxType:"DismissableControllerHaml"}),Object(l.b)("h1",{id:"browser-support--necessary-polyfills"},"Browser support / Necessary polyfills"),Object(l.b)("p",null,"Please reference ",Object(l.b)("a",{parentName:"p",href:"https://caniuse.com/childnode-remove"},"https://caniuse.com/childnode-remove"),", you may need to polyfill ",Object(l.b)("inlineCode",{parentName:"p"},"ChildNode.remove()")," using ",Object(l.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/element-remove-polyfill"},"https://www.npmjs.com/package/element-remove-polyfill"),"\nif you need to support IE11 or below. "))}O.isMDXComponent=!0},214:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||p[d]||l;return n?a.a.createElement(m,s(s({ref:t},c),{},{components:n})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),l=(n(0),n(214)),o={},s={unversionedId:"_partials/no-classes",id:"_partials/no-classes",isDocsHomePage:!1,title:"no-classes",description:"| Class | Purpose |",source:"@site/docs/_partials/no-classes.md",slug:"/_partials/no-classes",permalink:"/stimulus-library/docs/_partials/no-classes",version:"current"},i=[],c={toc:i};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Class"),Object(l.b)("th",{parentName:"tr",align:null},"Purpose"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"-")),Object(l.b)("td",{parentName:"tr",align:null},"-")))))}b.isMDXComponent=!0},59:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),l=(n(0),n(214)),o={},s={unversionedId:"_partials/no-targets",id:"_partials/no-targets",isDocsHomePage:!1,title:"no-targets",description:"| Target | Purpose | Default |",source:"@site/docs/_partials/no-targets.md",slug:"/_partials/no-targets",permalink:"/stimulus-library/docs/_partials/no-targets",version:"current"},i=[],c={toc:i};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Target"),Object(l.b)("th",{parentName:"tr",align:null},"Purpose"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"-")),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null},"-")))))}b.isMDXComponent=!0},60:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),l=(n(0),n(214)),o={},s={unversionedId:"_partials/no-events",id:"_partials/no-events",isDocsHomePage:!1,title:"no-events",description:"| Event | When | Dispatched on | event.detail |",source:"@site/docs/_partials/no-events.md",slug:"/_partials/no-events",permalink:"/stimulus-library/docs/_partials/no-events",version:"current"},i=[],c={toc:i};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Event"),Object(l.b)("th",{parentName:"tr",align:null},"When"),Object(l.b)("th",{parentName:"tr",align:null},"Dispatched on"),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"th"},"event.detail")))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"-")),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null},"-")))))}b.isMDXComponent=!0},62:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),l=(n(0),n(214)),o={},s={unversionedId:"_partials/no-values",id:"_partials/no-values",isDocsHomePage:!1,title:"no-values",description:"| Value | Type | Description | Default |",source:"@site/docs/_partials/no-values.md",slug:"/_partials/no-values",permalink:"/stimulus-library/docs/_partials/no-values",version:"current"},i=[],c={toc:i};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Value"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"-")),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null},"-")))))}b.isMDXComponent=!0}}]);