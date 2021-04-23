(window.webpackJsonp=window.webpackJsonp||[]).push([[37,39,45],{118:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(152)),l=r(59),c=r(58),s={id:"ScrollToTopController",title:"ScrollToTopController"},i={unversionedId:"controllers/ScrollToTopController",id:"controllers/ScrollToTopController",isDocsHomePage:!1,title:"ScrollToTopController",description:"Purpose",source:"@site/docs/controllers/scroll_to_top_controller.mdx",slug:"/controllers/ScrollToTopController",permalink:"/stimulus-library/docs/controllers/ScrollToTopController",version:"current",sidebar:"someSidebar",previous:{title:"ScrollToController",permalink:"/stimulus-library/docs/controllers/ScrollToController"},next:{title:"SelfDestructController",permalink:"/stimulus-library/docs/controllers/SelfDestructController"}},b=[{value:"Purpose",id:"purpose",children:[]},{value:"Actions",id:"actions",children:[]},{value:"Targets",id:"targets",children:[]},{value:"Classes",id:"classes",children:[]},{value:"Values",id:"values",children:[]},{value:"Events",id:"events",children:[]},{value:"Side Effects",id:"side-effects",children:[]}],u={toc:b};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"purpose"},"Purpose"),Object(o.b)("p",null,"Enable buttons/links to smooth scroll to the top of the document, or the nearest scrollable element."),Object(o.b)("h2",{id:"actions"},Object(o.b)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/actions"},"Actions")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Action"),Object(o.b)("th",{parentName:"tr",align:null},"Purpose"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"scroll")),Object(o.b)("td",{parentName:"tr",align:null},"Perform the scroll")))),Object(o.b)("h2",{id:"targets"},Object(o.b)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/targets"},"Targets")),Object(o.b)(l.default,{mdxType:"NoTargets"}),Object(o.b)("h2",{id:"classes"},Object(o.b)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/classes"},"Classes")),Object(o.b)(c.default,{mdxType:"NoClasses"}),Object(o.b)("h2",{id:"values"},Object(o.b)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/values"},"Values")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note"),": If the user's browser does not support smooth scrolling, the browser will ignore these values and scroll using the browser default."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Value"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"),Object(o.b)("th",{parentName:"tr",align:null},"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"mode")),Object(o.b)("td",{parentName:"tr",align:null},"String"),Object(o.b)("td",{parentName:"tr",align:null},"Should the controller scroll the ",Object(o.b)("inlineCode",{parentName:"td"},"document")," or the ",Object(o.b)("inlineCode",{parentName:"td"},"nearest")," scrollable element"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"document"))))),Object(o.b)("h2",{id:"events"},"Events"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/stimulus-library/docs/_partials/no-events",title:":include"},"no-classes")),Object(o.b)("h2",{id:"side-effects"},"Side Effects"),Object(o.b)("p",null,"None"),Object(o.b)("h1",{id:"how-to-use"},"How to Use"),Object(o.b)("iframe",{src:"https://codesandbox.io/embed/scrolltopbottom-controller-g7kzm?fontsize=14&hidenavigation=1&theme=dark",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}p.isMDXComponent=!0},152:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),b=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=b(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=b(r),d=n,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||o;return r?a.a.createElement(m,c(c({ref:t},i),{},{components:r})):a.a.createElement(m,c({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var i=2;i<o;i++)l[i]=r[i];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),o=(r(0),r(152)),l={},c={unversionedId:"_partials/no-classes",id:"_partials/no-classes",isDocsHomePage:!1,title:"no-classes",description:"| Class | Purpose |",source:"@site/docs/_partials/no-classes.md",slug:"/_partials/no-classes",permalink:"/stimulus-library/docs/_partials/no-classes",version:"current"},s=[],i={toc:s};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Class"),Object(o.b)("th",{parentName:"tr",align:null},"Purpose"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"-")),Object(o.b)("td",{parentName:"tr",align:null},"-")))))}b.isMDXComponent=!0},59:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),o=(r(0),r(152)),l={},c={unversionedId:"_partials/no-targets",id:"_partials/no-targets",isDocsHomePage:!1,title:"no-targets",description:"| Target | Purpose | Default |",source:"@site/docs/_partials/no-targets.md",slug:"/_partials/no-targets",permalink:"/stimulus-library/docs/_partials/no-targets",version:"current"},s=[],i={toc:s};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Target"),Object(o.b)("th",{parentName:"tr",align:null},"Purpose"),Object(o.b)("th",{parentName:"tr",align:null},"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"-")),Object(o.b)("td",{parentName:"tr",align:null},"-"),Object(o.b)("td",{parentName:"tr",align:null},"-")))))}b.isMDXComponent=!0}}]);