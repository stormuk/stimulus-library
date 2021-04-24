(window.webpackJsonp=window.webpackJsonp||[]).push([[76,6,40,46],{147:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return b})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),l=(r(0),r(157)),o=r(59),c=r(58),i=r(60),b={id:"TurboFrameRcController",title:"TurboFrameRcController"},s={unversionedId:"controllers/TurboFrameRcController",id:"controllers/TurboFrameRcController",isDocsHomePage:!1,title:"TurboFrameRcController",description:"Purpose",source:"@site/docs/controllers/turbo_frame_rc_controller.mdx",sourceDirName:"controllers",slug:"/controllers/TurboFrameRcController",permalink:"/stimulus-library/docs/controllers/TurboFrameRcController",version:"current",frontMatter:{id:"TurboFrameRcController",title:"TurboFrameRcController"},sidebar:"someSidebar",previous:{title:"EmptyDomController",permalink:"/stimulus-library/docs/controllers/EmptyDomController"},next:{title:"TurboFrameRefreshController",permalink:"/stimulus-library/docs/controllers/TurboFrameRefreshController"}},u=[{value:"Purpose",id:"purpose",children:[{value:"Use Case 1: Modal form.",id:"use-case-1-modal-form",children:[]},{value:"Use Case 2: Links to drive turbo-frame wrapped widgets",id:"use-case-2-links-to-drive-turbo-frame-wrapped-widgets",children:[]}]},{value:"Actions",id:"actions",children:[]},{value:"Targets",id:"targets",children:[]},{value:"Classes",id:"classes",children:[]},{value:"Values",id:"values",children:[]},{value:"Events",id:"events",children:[]},{value:"Side Effects",id:"side-effects",children:[]},{value:"How to Use",id:"how-to-use",children:[]},{value:"HTML",id:"html",children:[]},{value:"HAML",id:"haml",children:[]}],d={toc:u};function p(e){var t=e.components,b=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},d,b,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"purpose"},"Purpose"),Object(l.b)("p",null,"Remotely set the ",Object(l.b)("inlineCode",{parentName:"p"},"src")," of TurboFrames, and/or remotely clear their content."),Object(l.b)("h3",{id:"use-case-1-modal-form"},"Use Case 1: Modal form."),Object(l.b)("p",null,Object(l.b)("img",{alt:"turbo_frame_rc_controller_example.gif",src:r(204).default})),Object(l.b)("h3",{id:"use-case-2-links-to-drive-turbo-frame-wrapped-widgets"},"Use Case 2: Links to drive turbo-frame wrapped widgets"),Object(l.b)("p",null,"If you have an interactive widget/component wrapped in a turbo frame, you can use this links to swap\nout the frame widget, or selectively load/unload it."),Object(l.b)("h2",{id:"actions"},Object(l.b)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/actions"},"Actions")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Action"),Object(l.b)("th",{parentName:"tr",align:null},"Purpose"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"setSrc")),Object(l.b)("td",{parentName:"tr",align:null},"Sets the src of the remote ",Object(l.b)("inlineCode",{parentName:"td"},"<TurboFrame>")," to the specified value, triggering a content load")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"clear")),Object(l.b)("td",{parentName:"tr",align:null},"Clear the ",Object(l.b)("inlineCode",{parentName:"td"},"src")," of the remote ",Object(l.b)("inlineCode",{parentName:"td"},"<TurboFrame>"),", and remove its ",Object(l.b)("inlineCode",{parentName:"td"},"innerHTML"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"toggle")),Object(l.b)("td",{parentName:"tr",align:null},"If the ",Object(l.b)("inlineCode",{parentName:"td"},"src")," is empty, or different to the current specified value, calls ",Object(l.b)("inlineCode",{parentName:"td"},"setSrc"),". Otherwise, calls ",Object(l.b)("inlineCode",{parentName:"td"},"clear"))))),Object(l.b)("h2",{id:"targets"},Object(l.b)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/targets"},"Targets")),Object(l.b)(o.default,{mdxType:"NoTargets"}),Object(l.b)("h2",{id:"classes"},Object(l.b)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/classes"},"Classes")),Object(l.b)(c.default,{mdxType:"NoClasses"}),Object(l.b)("h2",{id:"values"},Object(l.b)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/values"},"Values")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Value"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"frameId")),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"The ID of the frame to drive"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"src")," (Optional)"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"The URL set the remote frame's ",Object(l.b)("inlineCode",{parentName:"td"},"src")," to"),Object(l.b)("td",{parentName:"tr",align:null},"If the controller root element is an ",Object(l.b)("inlineCode",{parentName:"td"},"<a>"),", the ",Object(l.b)("inlineCode",{parentName:"td"},"href")," of the element. Otherwise, throws an error.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"loadingMessage")," (Optional)"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"The message to display while content is loading"),Object(l.b)("td",{parentName:"tr",align:null},"-")))),Object(l.b)("h2",{id:"events"},"Events"),Object(l.b)(i.default,{mdxType:"NoEvents"}),Object(l.b)("h2",{id:"side-effects"},"Side Effects"),Object(l.b)("p",null,"None"),Object(l.b)("h2",{id:"how-to-use"},"How to Use"),Object(l.b)("h2",{id:"html"},"HTML"),Object(l.b)("p",null,"Example WIP"),Object(l.b)("h2",{id:"haml"},"HAML"),Object(l.b)("p",null,"Example WIP"))}p.isMDXComponent=!0},157:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),u=s(r),p=n,m=u["".concat(o,".").concat(p)]||u[p]||d[p]||l;return r?a.a.createElement(m,c(c({ref:t},b),{},{components:r})):a.a.createElement(m,c({ref:t},b))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var b=2;b<l;b++)o[b]=r[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},204:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/turbo_frame_rc_controller_example-a47abdf77a2397f529a0fa9f7251a86c.gif"},58:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),l=(r(0),r(157)),o={},c={unversionedId:"_partials/no-classes",id:"_partials/no-classes",isDocsHomePage:!1,title:"no-classes",description:"| Class | Purpose |",source:"@site/docs/_partials/no-classes.md",sourceDirName:"_partials",slug:"/_partials/no-classes",permalink:"/stimulus-library/docs/_partials/no-classes",version:"current",frontMatter:{}},i=[],b={toc:i};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Class"),Object(l.b)("th",{parentName:"tr",align:null},"Purpose"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"-")),Object(l.b)("td",{parentName:"tr",align:null},"-")))))}s.isMDXComponent=!0},59:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),l=(r(0),r(157)),o={},c={unversionedId:"_partials/no-targets",id:"_partials/no-targets",isDocsHomePage:!1,title:"no-targets",description:"| Target | Purpose | Default |",source:"@site/docs/_partials/no-targets.md",sourceDirName:"_partials",slug:"/_partials/no-targets",permalink:"/stimulus-library/docs/_partials/no-targets",version:"current",frontMatter:{}},i=[],b={toc:i};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Target"),Object(l.b)("th",{parentName:"tr",align:null},"Purpose"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"-")),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null},"-")))))}s.isMDXComponent=!0},60:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),l=(r(0),r(157)),o={},c={unversionedId:"_partials/no-events",id:"_partials/no-events",isDocsHomePage:!1,title:"no-events",description:"| Event | When | Dispatched on | event.detail |",source:"@site/docs/_partials/no-events.md",sourceDirName:"_partials",slug:"/_partials/no-events",permalink:"/stimulus-library/docs/_partials/no-events",version:"current",frontMatter:{}},i=[],b={toc:i};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Event"),Object(l.b)("th",{parentName:"tr",align:null},"When"),Object(l.b)("th",{parentName:"tr",align:null},"Dispatched on"),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"th"},"event.detail")))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"-")),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null},"-")))))}s.isMDXComponent=!0}}]);