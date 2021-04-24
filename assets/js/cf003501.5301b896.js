(window.webpackJsonp=window.webpackJsonp||[]).push([[71,6,31,40,46],{144:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return b})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return m}));var n=r(3),a=r(7),l=(r(0),r(157)),o=r(59),s=r(58),i=r(62),c=r(60),b={id:"DismissableController",title:"DismissableController"},u={unversionedId:"controllers/DismissableController",id:"controllers/DismissableController",isDocsHomePage:!1,title:"DismissableController",description:"Purpose",source:"@site/docs/controllers/dismissable_controller.mdx",sourceDirName:"controllers",slug:"/controllers/DismissableController",permalink:"/stimulus-library/docs/controllers/DismissableController",version:"current",frontMatter:{id:"DismissableController",title:"DismissableController"},sidebar:"someSidebar",previous:{title:"DisableWithController",permalink:"/stimulus-library/docs/controllers/DisableWithController"},next:{title:"ElementSaveController",permalink:"/stimulus-library/docs/controllers/ElementSaveController"}},p=[{value:"Purpose",id:"purpose",children:[]},{value:"Actions",id:"actions",children:[]},{value:"Targets",id:"targets",children:[]},{value:"Classes",id:"classes",children:[]},{value:"Values",id:"values",children:[]},{value:"Events",id:"events",children:[]},{value:"Side Effects",id:"side-effects",children:[]},{value:"How to Use",id:"how-to-use",children:[]}],d={toc:p};function m(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"purpose"},"Purpose"),Object(l.b)("p",null,"Add the ability to dismiss/remove an element from the DOM. i.e. Notifications, Flash messages. alerts"),Object(l.b)("h2",{id:"actions"},Object(l.b)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/actions"},"Actions")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Action"),Object(l.b)("th",{parentName:"tr",align:null},"Purpose"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"dismiss"),Object(l.b)("td",{parentName:"tr",align:null},"Removes the element from the DOM")))),Object(l.b)("h2",{id:"targets"},Object(l.b)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/targets"},"Targets")),Object(l.b)(o.default,{mdxType:"NoTargets"}),Object(l.b)("h2",{id:"classes"},Object(l.b)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/classes"},"Classes")),Object(l.b)(s.default,{mdxType:"NoClasses"}),Object(l.b)("h2",{id:"values"},Object(l.b)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/values"},"Values")),Object(l.b)(i.default,{mdxType:"NoValues"}),Object(l.b)("h2",{id:"events"},"Events"),Object(l.b)(c.default,{mdxType:"NoEvents"}),Object(l.b)("h2",{id:"side-effects"},"Side Effects"),Object(l.b)("p",null,"None"),Object(l.b)("h2",{id:"how-to-use"},"How to Use"),Object(l.b)("p",null,"A good example is a flash message, rather than it staying on the page forever, allowing the user to dismiss it with a little 'X' in the corner."),Object(l.b)("iframe",{src:"https://codesandbox.io/embed/dismissablecontroller-7hug8?fontsize=14&hidenavigation=1&theme=dark",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),Object(l.b)("h1",{id:"browser-support--necessary-polyfills"},"Browser support / Necessary polyfills"),Object(l.b)("p",null,"Please reference ",Object(l.b)("a",{parentName:"p",href:"https://caniuse.com/childnode-remove"},"https://caniuse.com/childnode-remove"),", you may need to polyfill ",Object(l.b)("inlineCode",{parentName:"p"},"ChildNode.remove()")," using ",Object(l.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/element-remove-polyfill"},"https://www.npmjs.com/package/element-remove-polyfill"),"\nif you need to support IE11 or below."))}m.isMDXComponent=!0},157:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=b(r),d=n,m=u["".concat(o,".").concat(d)]||u[d]||p[d]||l;return r?a.a.createElement(m,s(s({ref:t},c),{},{components:r})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<l;c++)o[c]=r[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),l=(r(0),r(157)),o={},s={unversionedId:"_partials/no-classes",id:"_partials/no-classes",isDocsHomePage:!1,title:"no-classes",description:"| Class | Purpose |",source:"@site/docs/_partials/no-classes.md",sourceDirName:"_partials",slug:"/_partials/no-classes",permalink:"/stimulus-library/docs/_partials/no-classes",version:"current",frontMatter:{}},i=[],c={toc:i};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Class"),Object(l.b)("th",{parentName:"tr",align:null},"Purpose"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"-")),Object(l.b)("td",{parentName:"tr",align:null},"-")))))}b.isMDXComponent=!0},59:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),l=(r(0),r(157)),o={},s={unversionedId:"_partials/no-targets",id:"_partials/no-targets",isDocsHomePage:!1,title:"no-targets",description:"| Target | Purpose | Default |",source:"@site/docs/_partials/no-targets.md",sourceDirName:"_partials",slug:"/_partials/no-targets",permalink:"/stimulus-library/docs/_partials/no-targets",version:"current",frontMatter:{}},i=[],c={toc:i};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Target"),Object(l.b)("th",{parentName:"tr",align:null},"Purpose"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"-")),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null},"-")))))}b.isMDXComponent=!0},60:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),l=(r(0),r(157)),o={},s={unversionedId:"_partials/no-events",id:"_partials/no-events",isDocsHomePage:!1,title:"no-events",description:"| Event | When | Dispatched on | event.detail |",source:"@site/docs/_partials/no-events.md",sourceDirName:"_partials",slug:"/_partials/no-events",permalink:"/stimulus-library/docs/_partials/no-events",version:"current",frontMatter:{}},i=[],c={toc:i};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Event"),Object(l.b)("th",{parentName:"tr",align:null},"When"),Object(l.b)("th",{parentName:"tr",align:null},"Dispatched on"),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"th"},"event.detail")))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"-")),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null},"-")))))}b.isMDXComponent=!0},62:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),l=(r(0),r(157)),o={},s={unversionedId:"_partials/no-values",id:"_partials/no-values",isDocsHomePage:!1,title:"no-values",description:"| Value | Type | Description | Default |",source:"@site/docs/_partials/no-values.md",sourceDirName:"_partials",slug:"/_partials/no-values",permalink:"/stimulus-library/docs/_partials/no-values",version:"current",frontMatter:{}},i=[],c={toc:i};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Value"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"-")),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null},"-")))))}b.isMDXComponent=!0}}]);