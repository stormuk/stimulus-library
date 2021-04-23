(window.webpackJsonp=window.webpackJsonp||[]).push([[32,6,15,39,47,54,56],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return m})),n.d(t,"default",(function(){return O}));var a=n(3),l=n(7),r=(n(0),n(152)),o=n(58),c=n(60),s=n(67),i=n(73),b=n(74),d=n(75),u={id:"ToggleClassController",title:"ToggleClassController"},p={unversionedId:"controllers/ToggleClassController",id:"controllers/ToggleClassController",isDocsHomePage:!1,title:"ToggleClassController",description:"Purpose",source:"@site/docs/controllers/toggle_class_controller.mdx",slug:"/controllers/ToggleClassController",permalink:"/stimulus-library/docs/controllers/ToggleClassController",version:"current",sidebar:"someSidebar",previous:{title:"TeleportController",permalink:"/stimulus-library/docs/controllers/TeleportController"},next:{title:"WordCountController",permalink:"/stimulus-library/docs/controllers/WordCountController"}},m=[{value:"Purpose",id:"purpose",children:[]},{value:"Actions",id:"actions",children:[]},{value:"Targets",id:"targets",children:[]},{value:"Classes",id:"classes",children:[]},{value:"Values",id:"values",children:[]},{value:"Events",id:"events",children:[]},{value:"Side Effects",id:"side-effects",children:[{value:"Example - showing a dropdown menu on a click, and hiding it again if the user clicks away.",id:"example---showing-a-dropdown-menu-on-a-click-and-hiding-it-again-if-the-user-clicks-away",children:[]}]},{value:"HTML",id:"html",children:[]},{value:"HAML",id:"haml",children:[{value:"Example, showing an action button on hover",id:"example-showing-an-action-button-on-hover",children:[]}]},{value:"HTML",id:"html-1",children:[]},{value:"HAML",id:"haml-1",children:[]}],g={toc:m};function O(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},g,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"purpose"},"Purpose"),Object(r.b)("p",null,"To toggle a class on an element, based on various optional interactions i.e. On Hover, On click-away, on direct-click"),Object(r.b)("h2",{id:"actions"},Object(r.b)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/actions"},"Actions")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Action"),Object(r.b)("th",{parentName:"tr",align:null},"Purpose"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"toggle")),Object(r.b)("td",{parentName:"tr",align:null},"If the class is currently applied, removed it. Otherwise, add it.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"on")),Object(r.b)("td",{parentName:"tr",align:null},"Add the class if it is currently missing")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"off")),Object(r.b)("td",{parentName:"tr",align:null},"Remove the class if it is currently applied")))),Object(r.b)("h2",{id:"targets"},Object(r.b)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/targets"},"Targets")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Target"),Object(r.b)("th",{parentName:"tr",align:null},"Purpose"),Object(r.b)("th",{parentName:"tr",align:null},"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"toggle")),Object(r.b)("td",{parentName:"tr",align:null},"The target to toggle the class on"),Object(r.b)("td",{parentName:"tr",align:null},"-")))),Object(r.b)("h2",{id:"classes"},Object(r.b)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/classes"},"Classes")),Object(r.b)(o.default,{mdxType:"NoClasses"}),Object(r.b)("h2",{id:"values"},Object(r.b)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/values"},"Values")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Value"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Description"),Object(r.b)("th",{parentName:"tr",align:null},"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"class")),Object(r.b)("td",{parentName:"tr",align:null},"String"),Object(r.b)("td",{parentName:"tr",align:null},"The space separated list of classes to toggle"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"-"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"mouseEnter")," (Optional)"),Object(r.b)("td",{parentName:"tr",align:null},"String"),Object(r.b)("td",{parentName:"tr",align:null},"One of ",Object(r.b)("inlineCode",{parentName:"td"},"on"),", ",Object(r.b)("inlineCode",{parentName:"td"},"off"),", or ",Object(r.b)("inlineCode",{parentName:"td"},"toggle"),", what to do when the user's mouse enters the controller scope"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"-"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"mouseLeave")," (Optional)"),Object(r.b)("td",{parentName:"tr",align:null},"String"),Object(r.b)("td",{parentName:"tr",align:null},"One of ",Object(r.b)("inlineCode",{parentName:"td"},"on"),", ",Object(r.b)("inlineCode",{parentName:"td"},"off"),", or ",Object(r.b)("inlineCode",{parentName:"td"},"toggle"),", what to do when the user's mouse leaves the controller scope"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"-"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"clickAway")," (Optional)"),Object(r.b)("td",{parentName:"tr",align:null},"Boolean"),Object(r.b)("td",{parentName:"tr",align:null},"When the user clicks outside of the controller scope, should any previously toggled classes be toggled back"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"-"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"initial")," (Optional)"),Object(r.b)("td",{parentName:"tr",align:null},"String"),Object(r.b)("td",{parentName:"tr",align:null},"Either ",Object(r.b)("inlineCode",{parentName:"td"},"on"),": the controller will ensure the class is always present when the controller connects. Or ",Object(r.b)("inlineCode",{parentName:"td"},"off"),": it will ensure the class is ",Object(r.b)("strong",{parentName:"td"},"not")," present on ",Object(r.b)("inlineCode",{parentName:"td"},"connect"),". If the option is not specified then the class will be left as it is in the DOM"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"-"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note"),": If you use Turbo/Turbolinks, it's best to specify a value for ",Object(r.b)("inlineCode",{parentName:"p"},"initial"),", otherwise the Turbo(links) cache can put the class into a strange state and the toggle will be inverted."),Object(r.b)("h2",{id:"events"},"Events"),Object(r.b)(c.default,{mdxType:"NoEvents"}),Object(r.b)("h2",{id:"side-effects"},"Side Effects"),Object(r.b)("p",null,"None"),Object(r.b)("h1",{id:"how-to-use"},"How to Use"),Object(r.b)("h3",{id:"example---showing-a-dropdown-menu-on-a-click-and-hiding-it-again-if-the-user-clicks-away"},"Example - showing a dropdown menu on a click, and hiding it again if the user clicks away."),Object(r.b)("h2",{id:"html"},"HTML"),Object(r.b)(s.default,{mdxType:"ToggleClassControllerClickHtml"}),Object(r.b)("h2",{id:"haml"},"HAML"),Object(r.b)(i.default,{mdxType:"ToggleClassControllerClickHaml"}),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/9960703/104182368-450ec700-5408-11eb-920b-becec527311d.gif",alt:"ezgif-3-697e3a644da7"})),Object(r.b)("h3",{id:"example-showing-an-action-button-on-hover"},"Example, showing an action button on hover"),Object(r.b)("h2",{id:"html-1"},"HTML"),Object(r.b)(b.default,{mdxType:"ToggleClassControllerHoverHtml"}),Object(r.b)("h2",{id:"haml-1"},"HAML"),Object(r.b)(d.default,{mdxType:"ToggleClassControllerHoverHaml"}),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/9960703/104182370-45a75d80-5408-11eb-8b3d-8feae48bbc5a.gif",alt:"ezgif-3-dd9317a73732"})))}O.isMDXComponent=!0},152:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),l=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=l.a.createContext({}),b=function(e){var t=l.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=b(e.components);return l.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},p=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=b(n),p=a,m=d["".concat(o,".").concat(p)]||d[p]||u[p]||r;return n?l.a.createElement(m,c(c({ref:t},i),{},{components:n})):l.a.createElement(m,c({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var i=2;i<r;i++)o[i]=n[i];return l.a.createElement.apply(null,o)}return l.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),l=n(7),r=(n(0),n(152)),o={},c={unversionedId:"_partials/no-classes",id:"_partials/no-classes",isDocsHomePage:!1,title:"no-classes",description:"| Class | Purpose |",source:"@site/docs/_partials/no-classes.md",slug:"/_partials/no-classes",permalink:"/stimulus-library/docs/_partials/no-classes",version:"current"},s=[],i={toc:s};function b(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Class"),Object(r.b)("th",{parentName:"tr",align:null},"Purpose"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"-")),Object(r.b)("td",{parentName:"tr",align:null},"-")))))}b.isMDXComponent=!0},60:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),l=n(7),r=(n(0),n(152)),o={},c={unversionedId:"_partials/no-events",id:"_partials/no-events",isDocsHomePage:!1,title:"no-events",description:"| Event | When | Dispatched on | event.detail |",source:"@site/docs/_partials/no-events.md",slug:"/_partials/no-events",permalink:"/stimulus-library/docs/_partials/no-events",version:"current"},s=[],i={toc:s};function b(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Event"),Object(r.b)("th",{parentName:"tr",align:null},"When"),Object(r.b)("th",{parentName:"tr",align:null},"Dispatched on"),Object(r.b)("th",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"th"},"event.detail")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"-")),Object(r.b)("td",{parentName:"tr",align:null},"-"),Object(r.b)("td",{parentName:"tr",align:null},"-"),Object(r.b)("td",{parentName:"tr",align:null},"-")))))}b.isMDXComponent=!0},67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),l=n(7),r=(n(0),n(152)),o={},c={unversionedId:"examples/toggle_class_controller_click.html",id:"examples/toggle_class_controller_click.html",isDocsHomePage:!1,title:"toggle_class_controller_click.html",description:"`html",source:"@site/docs/examples/toggle_class_controller_click.html.mdx",slug:"/examples/toggle_class_controller_click.html",permalink:"/stimulus-library/docs/examples/toggle_class_controller_click.html",version:"current"},s=[],i={toc:s};function b(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-html"},'<div\n  data-controller="toggle-class"\n  data-toggle-class-class-value="hidden"\n  data-toggle-class-click-away-value="true"\n  data-toggle-class-initial-value="on"\n>\n  <button id="user-menu" class="navbar-button" data-action="click->toggle-class#toggle">\n    <i class="far fa-bell"></i>\n    <span class="hidden dropdown" data-toggle-class-target="toggle">\n      <a href="/profile" class="dropdown-link">Your Profile</a>\n      <a href="/settings" class="dropdown-link">Settings</a>\n      <a href="/sign-out" class="dropdown-link">Sign Out</a>\n    </span>\n  </button>\n</div>\n')))}b.isMDXComponent=!0},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),l=n(7),r=(n(0),n(152)),o={},c={unversionedId:"examples/toggle_class_controller_click.haml",id:"examples/toggle_class_controller_click.haml",isDocsHomePage:!1,title:"toggle_class_controller_click.haml",description:"`haml",source:"@site/docs/examples/toggle_class_controller_click.haml.mdx",slug:"/examples/toggle_class_controller_click.haml",permalink:"/stimulus-library/docs/examples/toggle_class_controller_click.haml",version:"current"},s=[],i={toc:s};function b(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haml"},'%div{"data-controller" => "toggle-class", "data-toggle-class-class-value" => "hidden", "data-toggle-class-click-away-value" => "true", "data-toggle-class-initial-value" => "on"}\n  %button#user-menu.navbar-button{"data-action" => "click->toggle-class#toggle"}\n    %i.far.fa-bell\n    %span.hidden.dropdown{"data-toggle-class-target" => "toggle"}\n      %a.dropdown-link{href: "/profile"} Your Profile\n      %a.dropdown-link{href: "/settings"} Settings\n      %a.dropdown-link{href: "/sign-out"} Sign Out\n')))}b.isMDXComponent=!0},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),l=n(7),r=(n(0),n(152)),o={},c={unversionedId:"examples/toggle_class_controller_hover.html",id:"examples/toggle_class_controller_hover.html",isDocsHomePage:!1,title:"toggle_class_controller_hover.html",description:"`html",source:"@site/docs/examples/toggle_class_controller_hover.html.mdx",slug:"/examples/toggle_class_controller_hover.html",permalink:"/stimulus-library/docs/examples/toggle_class_controller_hover.html",version:"current"},s=[],i={toc:s};function b(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-html"},'<div id="calendar" class="grid grid-cols-7">\n  \x3c!-- ...--\x3e\n  <div\n    class="calendar-cell"\n    data-controller="toggle-class"\n    data-toggle-class-class-value="invisible"\n    data-toggle-class-mouse-enter-value="off"\n    data-toggle-class-mouse-leave-value="on"\n    data-toggle-class-initial-value="on"\n  >\n    <span class="cell-heading">4th</span>\n    <div class="cell-body">\n      <div class="text-center invisible" data-toggle-class-target="toggle">\n        <a class="btn btn-primary" href="/events/new">+ New event</a>\n      </div>\n    </div>\n  </div>\n  \x3c!-- ...--\x3e\n</div>\n')))}b.isMDXComponent=!0},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),l=n(7),r=(n(0),n(152)),o={},c={unversionedId:"examples/toggle_class_controller_hover.haml",id:"examples/toggle_class_controller_hover.haml",isDocsHomePage:!1,title:"toggle_class_controller_hover.haml",description:"`#calendar.grid.grid-cols-7",source:"@site/docs/examples/toggle_class_controller_hover.haml.mdx",slug:"/examples/toggle_class_controller_hover.haml",permalink:"/stimulus-library/docs/examples/toggle_class_controller_hover.haml",version:"current"},s=[],i={toc:s};function b(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-#calendar.grid.grid-cols-7"},'  / ...\n  .calendar-cell{"data-controller" => "toggle-class", "data-toggle-class-class-value" => "invisible", "data-toggle-class-initial-value" => "on", "data-toggle-class-mouse-enter-value" => "off", "data-toggle-class-mouse-leave-value" => "on"}\n    %span.cell-heading 4th\n    .cell-body\n      .text-center.invisible{"data-toggle-class-target" => "toggle"}\n        %a.btn.btn-primary{href: "/events/new"} + New event\n  / ...\n')))}b.isMDXComponent=!0}}]);