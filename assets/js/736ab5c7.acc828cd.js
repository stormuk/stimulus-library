(window.webpackJsonp=window.webpackJsonp||[]).push([[42,25,39],{122:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),l=(n(0),n(152)),o=n(61),c=n(58),b={id:"AsyncBlockController",title:"AsyncBlockController"},i={unversionedId:"controllers/AsyncBlockController",id:"controllers/AsyncBlockController",isDocsHomePage:!1,title:"AsyncBlockController",description:"Purpose",source:"@site/docs/controllers/async_block_controller.mdx",slug:"/controllers/AsyncBlockController",permalink:"/stimulus-library/docs/controllers/AsyncBlockController",version:"current",sidebar:"someSidebar",previous:{title:"AnchorSpyController",permalink:"/stimulus-library/docs/controllers/AnchorSpyController"},next:{title:"AutoSubmitFormController",permalink:"/stimulus-library/docs/controllers/AutoSubmitFormController"}},s=[{value:"Purpose",id:"purpose",children:[]},{value:"Actions",id:"actions",children:[]},{value:"Targets",id:"targets",children:[]},{value:"Classes",id:"classes",children:[]},{value:"Values",id:"values",children:[]},{value:"Events",id:"events",children:[]},{value:"Side Effects",id:"side-effects",children:[]},{value:"See Also",id:"see-also",children:[]}],p={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"purpose"},"Purpose"),Object(l.b)("p",null,"AJAX load heavy content after the initial page load, while showing a placeholder."),Object(l.b)("h2",{id:"actions"},Object(l.b)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/actions"},"Actions")),Object(l.b)(o.default,{mdxType:"NoActions"}),Object(l.b)("h2",{id:"targets"},Object(l.b)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/targets"},"Targets")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Target"),Object(l.b)("th",{parentName:"tr",align:null},"Purpose"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"replace")," (Optional)"),Object(l.b)("td",{parentName:"tr",align:null},"The element to replace when the fetch request succeed"),Object(l.b)("td",{parentName:"tr",align:null},"The element the controller is mounted on")))),Object(l.b)("h2",{id:"classes"},Object(l.b)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/classes"},"Classes")),Object(l.b)(c.default,{mdxType:"NoClasses"}),Object(l.b)("h2",{id:"values"},Object(l.b)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/values"},"Values")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Value"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"endpoint")),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"The URL to fetch content from"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"errorMessage")," (Optional)"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"The error message to display when the remote content fails to load"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"This content failed to load"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"selector")," (Optional)"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"The selector of the element(s) to extract from the returned response"),Object(l.b)("td",{parentName:"tr",align:null},"Empty. The entire HTML response will be loaded")))),Object(l.b)("h2",{id:"events"},"Events"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Event"),Object(l.b)("th",{parentName:"tr",align:null},"When"),Object(l.b)("th",{parentName:"tr",align:null},"Dispatched on"),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"th"},"event.detail")))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"ajax:success")),Object(l.b)("td",{parentName:"tr",align:null},"When the content is fetch successfully"),Object(l.b)("td",{parentName:"tr",align:null},"the controller root element"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"ajax:error")),Object(l.b)("td",{parentName:"tr",align:null},"When the block fails to get a response from the endpoint"),Object(l.b)("td",{parentName:"tr",align:null},"the controller root element"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"ajax:complete")),Object(l.b)("td",{parentName:"tr",align:null},"When the request finishes, regardless of success or failure"),Object(l.b)("td",{parentName:"tr",align:null},"the controller root element"),Object(l.b)("td",{parentName:"tr",align:null},"-")))),Object(l.b)("h2",{id:"side-effects"},"Side Effects"),Object(l.b)("p",null,"None"),Object(l.b)("h1",{id:"how-to-use"},"How to Use"),Object(l.b)("iframe",{src:"https://codesandbox.io/embed/asyncblockcontroller-8i46f?fontsize=14&hidenavigation=1&theme=dark",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),Object(l.b)("p",null,"The controller will send out a fetch request, and on success will replace the block with the HTML content of the response."),Object(l.b)("h2",{id:"see-also"},"See Also"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"./LazyBlockController"},"Lazy Block Controller")))}u.isMDXComponent=!0},152:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),s=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||l;return n?a.a.createElement(m,c(c({ref:t},i),{},{components:n})):a.a.createElement(m,c({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var i=2;i<l;i++)o[i]=n[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),l=(n(0),n(152)),o={},c={unversionedId:"_partials/no-classes",id:"_partials/no-classes",isDocsHomePage:!1,title:"no-classes",description:"| Class | Purpose |",source:"@site/docs/_partials/no-classes.md",slug:"/_partials/no-classes",permalink:"/stimulus-library/docs/_partials/no-classes",version:"current"},b=[],i={toc:b};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Class"),Object(l.b)("th",{parentName:"tr",align:null},"Purpose"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"-")),Object(l.b)("td",{parentName:"tr",align:null},"-")))))}s.isMDXComponent=!0},61:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),l=(n(0),n(152)),o={},c={unversionedId:"_partials/no-actions",id:"_partials/no-actions",isDocsHomePage:!1,title:"no-actions",description:"| Action | Purpose |",source:"@site/docs/_partials/no-actions.md",slug:"/_partials/no-actions",permalink:"/stimulus-library/docs/_partials/no-actions",version:"current"},b=[],i={toc:b};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Action"),Object(l.b)("th",{parentName:"tr",align:null},"Purpose"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"-")),Object(l.b)("td",{parentName:"tr",align:null},"-")))))}s.isMDXComponent=!0}}]);