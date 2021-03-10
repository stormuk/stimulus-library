(window.webpackJsonp=window.webpackJsonp||[]).push([[61,8,36,55,74,121],{122:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(214)),l={},s={unversionedId:"examples/password_peek_controller.haml",id:"examples/password_peek_controller.haml",isDocsHomePage:!1,title:"password_peek_controller.haml",description:"`haml",source:"@site/docs/examples/password_peek_controller.haml.mdx",slug:"/examples/password_peek_controller.haml",permalink:"/stimulus-library/docs/examples/password_peek_controller.haml",version:"current"},i=[],c={toc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-haml"},'%label{for: "email"}\n  Email:\n  %input#email{type: "email"}/\n.input-group{"data-controller" => "password-peek"}\n  %label.input-group-label{for: "password"}\n    Enter your password:\n  %input#password.input-group-field{"data-password-peek-target" => "password", type: "password"}/\n  %a.button.input-group-button{"data-action" => "password-peek#toggle", href: ""}\n    %i.far.fa-eye-slash\n')))}p.isMDXComponent=!0},182:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return O}));var r=n(3),a=n(7),o=(n(0),n(214)),l=n(58),s=n(62),i=n(60),c=n(99),p=n(122),b={id:"PasswordPeekController",title:"PasswordPeekController"},d={unversionedId:"controllers/PasswordPeekController",id:"controllers/PasswordPeekController",isDocsHomePage:!1,title:"PasswordPeekController",description:"Purpose",source:"@site/docs/controllers/password_peek_controller.mdx",slug:"/controllers/PasswordPeekController",permalink:"/stimulus-library/docs/controllers/PasswordPeekController",version:"current",sidebar:"someSidebar",previous:{title:"PasswordConfirmController",permalink:"/stimulus-library/docs/controllers/PasswordConfirmController"},next:{title:"ResponsiveIframeController",permalink:"/stimulus-library/docs/controllers/ResponsiveIframeController"}},u=[{value:"Purpose",id:"purpose",children:[]},{value:"Actions",id:"actions",children:[]},{value:"Targets",id:"targets",children:[]},{value:"Classes",id:"classes",children:[]},{value:"Values",id:"values",children:[]},{value:"Events",id:"events",children:[]},{value:"Side Effects",id:"side-effects",children:[]},{value:"HTML",id:"html",children:[]},{value:"HAML",id:"haml",children:[]}],m={toc:u};function O(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"purpose"},"Purpose"),Object(o.b)("p",null,"Toggle a password input between ",Object(o.b)("inlineCode",{parentName:"p"},'type="password"')," and ",Object(o.b)("inlineCode",{parentName:"p"},'type="text"')," to allow the user to see what they have typed."),Object(o.b)("h2",{id:"actions"},Object(o.b)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/actions"},"Actions")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Action"),Object(o.b)("th",{parentName:"tr",align:null},"Purpose"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"peak")),Object(o.b)("td",{parentName:"tr",align:null},"Turn the ",Object(o.b)("inlineCode",{parentName:"td"},"password")," input into a ",Object(o.b)("inlineCode",{parentName:"td"},"text")," input")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"hide")),Object(o.b)("td",{parentName:"tr",align:null},"Turn the ",Object(o.b)("inlineCode",{parentName:"td"},"text")," input into a ",Object(o.b)("inlineCode",{parentName:"td"},"password")," input")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"toggle")),Object(o.b)("td",{parentName:"tr",align:null},"Toggle the input between ",Object(o.b)("inlineCode",{parentName:"td"},"password")," and ",Object(o.b)("inlineCode",{parentName:"td"},"text")," types")))),Object(o.b)("h2",{id:"targets"},Object(o.b)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/targets"},"Targets")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Target"),Object(o.b)("th",{parentName:"tr",align:null},"Purpose"),Object(o.b)("th",{parentName:"tr",align:null},"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"password")),Object(o.b)("td",{parentName:"tr",align:null},"The password input to allow peeking on"),Object(o.b)("td",{parentName:"tr",align:null},"-")))),Object(o.b)("h2",{id:"classes"},Object(o.b)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/classes"},"Classes")),Object(o.b)(l.default,{mdxType:"NoClasses"}),Object(o.b)("h2",{id:"values"},Object(o.b)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/values"},"Values")),Object(o.b)(s.default,{mdxType:"NoValues"}),Object(o.b)("h2",{id:"events"},"Events"),Object(o.b)(i.default,{mdxType:"NoEvents"}),Object(o.b)("h2",{id:"side-effects"},"Side Effects"),Object(o.b)("p",null,"None"),Object(o.b)("h1",{id:"how-to-use"},"How to Use"),Object(o.b)("p",null,"Within a wrapper that loads the controller, add an ",Object(o.b)("inlineCode",{parentName:"p"},'input[type="password"]')," with a ",Object(o.b)("inlineCode",{parentName:"p"},"data-password-peek-target='password'"),"\nand an adjacent button/link with ",Object(o.b)("inlineCode",{parentName:"p"},"data-password-peek-target='button'")),Object(o.b)("h2",{id:"html"},"HTML"),Object(o.b)(c.default,{mdxType:"PasswordPeekControllerHtml"}),Object(o.b)("h2",{id:"haml"},"HAML"),Object(o.b)(p.default,{mdxType:"PasswordPeekControllerHaml"}))}O.isMDXComponent=!0},214:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),b=p(n),u=r,m=b["".concat(l,".").concat(u)]||b[u]||d[u]||o;return n?a.a.createElement(m,s(s({ref:t},c),{},{components:n})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(214)),l={},s={unversionedId:"_partials/no-classes",id:"_partials/no-classes",isDocsHomePage:!1,title:"no-classes",description:"| Class | Purpose |",source:"@site/docs/_partials/no-classes.md",slug:"/_partials/no-classes",permalink:"/stimulus-library/docs/_partials/no-classes",version:"current"},i=[],c={toc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Class"),Object(o.b)("th",{parentName:"tr",align:null},"Purpose"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"-")),Object(o.b)("td",{parentName:"tr",align:null},"-")))))}p.isMDXComponent=!0},60:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(214)),l={},s={unversionedId:"_partials/no-events",id:"_partials/no-events",isDocsHomePage:!1,title:"no-events",description:"| Event | When | Dispatched on | event.detail |",source:"@site/docs/_partials/no-events.md",slug:"/_partials/no-events",permalink:"/stimulus-library/docs/_partials/no-events",version:"current"},i=[],c={toc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Event"),Object(o.b)("th",{parentName:"tr",align:null},"When"),Object(o.b)("th",{parentName:"tr",align:null},"Dispatched on"),Object(o.b)("th",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"th"},"event.detail")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"-")),Object(o.b)("td",{parentName:"tr",align:null},"-"),Object(o.b)("td",{parentName:"tr",align:null},"-"),Object(o.b)("td",{parentName:"tr",align:null},"-")))))}p.isMDXComponent=!0},62:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(214)),l={},s={unversionedId:"_partials/no-values",id:"_partials/no-values",isDocsHomePage:!1,title:"no-values",description:"| Value | Type | Description | Default |",source:"@site/docs/_partials/no-values.md",slug:"/_partials/no-values",permalink:"/stimulus-library/docs/_partials/no-values",version:"current"},i=[],c={toc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Value"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"),Object(o.b)("th",{parentName:"tr",align:null},"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"-")),Object(o.b)("td",{parentName:"tr",align:null},"-"),Object(o.b)("td",{parentName:"tr",align:null},"-"),Object(o.b)("td",{parentName:"tr",align:null},"-")))))}p.isMDXComponent=!0},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(214)),l={},s={unversionedId:"examples/password_peek_controller.html",id:"examples/password_peek_controller.html",isDocsHomePage:!1,title:"password_peek_controller.html",description:"`html",source:"@site/docs/examples/password_peek_controller.html.mdx",slug:"/examples/password_peek_controller.html",permalink:"/stimulus-library/docs/examples/password_peek_controller.html",version:"current"},i=[],c={toc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},'<label for="email">\n  Email:\n  <input id="email" type="email">\n</label>\n\n<div class="input-group" data-controller="password-peek">\n  <label for="password" class="input-group-label">\n    Enter your password:\n  </label>\n  <input class="input-group-field" type="password" id="password" data-password-peek-target="password">\n  <a href="" class="button input-group-button" data-action="password-peek#toggle">\n    <i class="far fa-eye-slash"></i>\n  </a>\n</div>\n')))}p.isMDXComponent=!0}}]);