(window.webpackJsonp=window.webpackJsonp||[]).push([[23,4,6,40,43,49],{112:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return u})),r.d(t,"metadata",(function(){return b})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return f}));var n=r(3),a=r(7),o=(r(0),r(164)),l=r(59),c=r(58),s=r(60),i=r(64),m=r(70),u={id:"RemoteFormController",title:"RemoteFormController"},b={unversionedId:"controllers/RemoteFormController",id:"controllers/RemoteFormController",isDocsHomePage:!1,title:"RemoteFormController",description:"Purpose",source:"@site/docs/controllers/remote_form_controller.mdx",sourceDirName:"controllers",slug:"/controllers/RemoteFormController",permalink:"/stimulus-library/docs/controllers/RemoteFormController",version:"current",frontMatter:{id:"RemoteFormController",title:"RemoteFormController"},sidebar:"someSidebar",previous:{title:"TableTruncateController",permalink:"/stimulus-library/docs/controllers/TableTruncateController"},next:{title:"IntervalController",permalink:"/stimulus-library/docs/controllers/IntervalController"}},p=[{value:"Purpose",id:"purpose",children:[]},{value:"Actions",id:"actions",children:[]},{value:"Targets",id:"targets",children:[]},{value:"Classes",id:"classes",children:[]},{value:"Values",id:"values",children:[]},{value:"Events",id:"events",children:[]},{value:"Side Effects",id:"side-effects",children:[]},{value:"How to Use",id:"how-to-use",children:[]},{value:"HTML/ERB",id:"htmlerb",children:[]},{value:"HAML",id:"haml",children:[]}],d={toc:p};function f(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"purpose"},"Purpose"),Object(o.b)("p",null,"A Stimulus controller to deal with Rails UJS remote forms and their submission responses."),Object(o.b)("h2",{id:"actions"},Object(o.b)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/actions"},"Actions")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Action"),Object(o.b)("th",{parentName:"tr",align:null},"Purpose"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"replace")),Object(o.b)("td",{parentName:"tr",align:null},"Replace the attached form with the contents of the response. Needs to be wired up to the UJS ",Object(o.b)("inlineCode",{parentName:"td"},"ajax:success")," and/or ",Object(o.b)("inlineCode",{parentName:"td"},"ajax:error")," events.")))),Object(o.b)("h2",{id:"targets"},Object(o.b)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/targets"},"Targets")),Object(o.b)(l.default,{mdxType:"NoTargets"}),Object(o.b)("h2",{id:"classes"},Object(o.b)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/classes"},"Classes")),Object(o.b)(c.default,{mdxType:"NoClasses"}),Object(o.b)("h2",{id:"values"},Object(o.b)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/values"},"Values")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Value"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"),Object(o.b)("th",{parentName:"tr",align:null},"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"selector")," (Optional)"),Object(o.b)("td",{parentName:"tr",align:null},"String"),Object(o.b)("td",{parentName:"tr",align:null},"A css selector to query the response with. The selected element(s) are what the attached form will be replaced with."),Object(o.b)("td",{parentName:"tr",align:null},"The controller identifier. It looks for another form with the same controller in the response")))),Object(o.b)("h2",{id:"events"},"Events"),Object(o.b)(s.default,{mdxType:"NoEvents"}),Object(o.b)("h2",{id:"side-effects"},"Side Effects"),Object(o.b)("p",null,"None"),Object(o.b)("h2",{id:"how-to-use"},"How to Use"),Object(o.b)("p",null,"Annotate a Rails form with ",Object(o.b)("inlineCode",{parentName:"p"},"data-remote: true")," and add this controller. You can then send HTML responses from the server that this controller will pick up and replace the connected form element with."),Object(o.b)("h2",{id:"htmlerb"},"HTML/ERB"),Object(o.b)(i.default,{mdxType:"RemoteFormControllerErb"}),Object(o.b)("h2",{id:"haml"},"HAML"),Object(o.b)(m.default,{mdxType:"RemoteFormControllerHaml"}))}f.isMDXComponent=!0},164:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),m=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=m(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=m(r),p=n,d=u["".concat(l,".").concat(p)]||u[p]||b[p]||o;return r?a.a.createElement(d,c(c({ref:t},i),{},{components:r})):a.a.createElement(d,c({ref:t},i))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var i=2;i<o;i++)l[i]=r[i];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},58:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return m}));var n=r(3),a=r(7),o=(r(0),r(164)),l={},c={unversionedId:"_partials/no-classes",id:"_partials/no-classes",isDocsHomePage:!1,title:"no-classes",description:"| Class | Purpose |",source:"@site/docs/_partials/no-classes.md",sourceDirName:"_partials",slug:"/_partials/no-classes",permalink:"/stimulus-library/docs/_partials/no-classes",version:"current",frontMatter:{}},s=[],i={toc:s};function m(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Class"),Object(o.b)("th",{parentName:"tr",align:null},"Purpose"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"-")),Object(o.b)("td",{parentName:"tr",align:null},"-")))))}m.isMDXComponent=!0},59:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return m}));var n=r(3),a=r(7),o=(r(0),r(164)),l={},c={unversionedId:"_partials/no-targets",id:"_partials/no-targets",isDocsHomePage:!1,title:"no-targets",description:"| Target | Purpose | Default |",source:"@site/docs/_partials/no-targets.md",sourceDirName:"_partials",slug:"/_partials/no-targets",permalink:"/stimulus-library/docs/_partials/no-targets",version:"current",frontMatter:{}},s=[],i={toc:s};function m(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Target"),Object(o.b)("th",{parentName:"tr",align:null},"Purpose"),Object(o.b)("th",{parentName:"tr",align:null},"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"-")),Object(o.b)("td",{parentName:"tr",align:null},"-"),Object(o.b)("td",{parentName:"tr",align:null},"-")))))}m.isMDXComponent=!0},60:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return m}));var n=r(3),a=r(7),o=(r(0),r(164)),l={},c={unversionedId:"_partials/no-events",id:"_partials/no-events",isDocsHomePage:!1,title:"no-events",description:"| Event | When | Dispatched on | event.detail |",source:"@site/docs/_partials/no-events.md",sourceDirName:"_partials",slug:"/_partials/no-events",permalink:"/stimulus-library/docs/_partials/no-events",version:"current",frontMatter:{}},s=[],i={toc:s};function m(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Event"),Object(o.b)("th",{parentName:"tr",align:null},"When"),Object(o.b)("th",{parentName:"tr",align:null},"Dispatched on"),Object(o.b)("th",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"th"},"event.detail")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"-")),Object(o.b)("td",{parentName:"tr",align:null},"-"),Object(o.b)("td",{parentName:"tr",align:null},"-"),Object(o.b)("td",{parentName:"tr",align:null},"-")))))}m.isMDXComponent=!0},64:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return m}));var n=r(3),a=r(7),o=(r(0),r(164)),l={},c={unversionedId:"examples/remote_form_controller.erb",id:"examples/remote_form_controller.erb",isDocsHomePage:!1,title:"remote_form_controller.erb",description:"`erb",source:"@site/docs/examples/remote_form_controller.erb.mdx",sourceDirName:"examples",slug:"/examples/remote_form_controller.erb",permalink:"/stimulus-library/docs/examples/remote_form_controller.erb",version:"current",frontMatter:{}},s=[],i={toc:s};function m(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-erb"},"<%= simple_form_for model, method: :post, remote: true, data: { controller: 'remote-form', action: 'ajax:success->remote-form#replace ajax:error->remote-form#replace' } do |f| %>\n  <%= f.input :name %>\n  <%= f.input :description %>\n<% end %>```\n")))}m.isMDXComponent=!0},70:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return m}));var n=r(3),a=r(7),o=(r(0),r(164)),l={},c={unversionedId:"examples/remote_form_controller.haml",id:"examples/remote_form_controller.haml",isDocsHomePage:!1,title:"remote_form_controller.haml",description:"`= simpleformfor model, methodpost,  remote { controller 'ajaxerror->remote-form#replace' } do |f|",source:"@site/docs/examples/remote_form_controller.haml.mdx",sourceDirName:"examples",slug:"/examples/remote_form_controller.haml",permalink:"/stimulus-library/docs/examples/remote_form_controller.haml",version:"current",frontMatter:{}},s=[],i={toc:s};function m(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-=",metastring:"simple_form_for model, method: :post,  remote: true, data: { controller: 'remote-form', action: 'ajax:success->remote-form#replace ajax:error->remote-form#replace' } do |f|",simple_form_for:!0,"model,":!0,"method:":!0,":post,":!0,"":!0,"remote:":!0,"true,":!0,"data:":!0,"{":!0,"controller:":!0,"'remote-form',":!0,"action:":!0,"'ajax:success->remote-form#replace":!0,"ajax:error->remote-form#replace'":!0,"}":!0,do:!0,"|f|":!0},"  = f.input :name\n  = f.input :description\n")))}m.isMDXComponent=!0}}]);