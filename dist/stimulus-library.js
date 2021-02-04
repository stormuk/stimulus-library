var e=require("stimulus");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function n(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach(function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}}),t.default=e,t}var r=t(require("lodash/camelCase"));function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}var h=function(e){function t(t){var n;return n=e.call(this,t)||this,new Proxy(l(n),{get:function(e,t){var r=Reflect.get(e,t),i=l(n);if(function(e){switch(e){case"application":case"element":case"constructor":case"initialize":case"log":case"data":case"valueDescriptorMap":case"identifier":return!1}return!(/^_.*?$/.test(e)||/^.*?Target(s)?$/.test(e)||/^.*?Value$/.test(e)||/^.*?ValueChanged$/.test(e)||/^.*?Class$/.test(e))}(t.toString())){if("function"==typeof r)return new Proxy(r,{apply:function(e,n,r){return i.log(t.toString(),{args:r}),Reflect.apply(e,n,r)}});n.log(t.toString())}return r}})||l(n)}a(t,e);var n=t.prototype;return n.dispatch=function(e,t,n){void 0===n&&(n={bubbles:!0,cancelable:!0,detail:{target:e}});var r=new CustomEvent(t,n);e.dispatchEvent(r)},n.log=function(e,t){if(void 0===t&&(t={}),this.application.debug){var n=console;n.groupCollapsed("%c"+this.identifier+" %c#"+e,"color: #3B82F6","color: unset"),n.log(s({element:this.element},t)),n.groupEnd()}},t}(e.Controller),d=function(e){function t(){return e.apply(this,arguments)||this}a(t,e);var n=t.prototype;return n.connect=function(){this.loadContent()},n.loadContent=function(){var e=this.hasReplaceTarget?this.replaceTarget:this.element;fetch(this.endpointValue).then(function(e){return e.text()}).then(function(t){var n=document.createElement("div");n.innerHTML=t,e.replaceWith(n);var r=new CustomEvent("ajax:success",{detail:""});e.dispatchEvent(r)}).catch(function(t){e.replaceWith("Sorry, this content failed to load");var n=new CustomEvent("ajax:error",{detail:""});e.dispatchEvent(n)}).finally(function(){var t=new CustomEvent("ajax:complete",{detail:""});e.dispatchEvent(t)})},t}(h);d.targets=["replace"],d.values={endpoint:String};var f=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).boundHandler=t.handler.bind(l(t)),t}a(t,e);var n=t.prototype;return n.connect=function(){var e=this;this.element.querySelectorAll("input, select, textarea").forEach(function(t){return t.addEventListener("change",e.boundHandler)})},n.disconnect=function(){var e=this;this.element.querySelectorAll("input, select, textarea").forEach(function(t){return t.removeEventListener("change",e.boundHandler)})},n.handler=function(e){this.element.dispatchEvent(new CustomEvent("submit",{bubbles:!0,cancelable:!0}))},t}(h);const p=(e,t)=>{const n=e[t];return"function"==typeof n?n:(...e)=>{}},v=(e,t,n)=>{let r=e;return!0===n?r=`${t.identifier}:${e}`:"string"==typeof n&&(r=`${n}:${e}`),r},m=(e,t,n)=>{const{bubbles:r,cancelable:i,composed:o}=t||{bubbles:!0,cancelable:!0,composed:!0};return t&&Object.assign(n,{originalEvent:t}),new CustomEvent(e,{bubbles:r,cancelable:i,composed:o,detail:n})},g={dispatchEvent:!0,eventPrefix:!0},b={events:["click","touchend"],onlyVisible:!0,dispatchEvent:!0,eventPrefix:!0},y={debug:!1,logger:console};class E{constructor(e,t={}){var n,r,i;this.log=(e,t)=>{this.debug&&(this.logger.groupCollapsed(`%c${this.controller.identifier} %c#${e}`,"color: #3B82F6","color: unset"),this.logger.log(Object.assign({controllerId:this.controllerId},t)),this.logger.groupEnd())},this.debug=null!==(r=null!==(n=null==t?void 0:t.debug)&&void 0!==n?n:e.application.stimulusUseDebug)&&void 0!==r?r:y.debug,this.logger=null!==(i=null==t?void 0:t.logger)&&void 0!==i?i:y.logger,this.controller=e,this.controllerId=e.element.id||e.element.dataset.id,this.controllerInitialize=e.initialize.bind(e),this.controllerConnect=e.connect.bind(e),this.controllerDisconnect=e.disconnect.bind(e)}}class w extends E{constructor(e,t={}){super(e,t),this.observe=()=>{this.targetElement.addEventListener("mouseenter",this.onEnter),this.targetElement.addEventListener("mouseleave",this.onLeave)},this.unobserve=()=>{this.targetElement.removeEventListener("mouseenter",this.onEnter),this.targetElement.removeEventListener("mouseleave",this.onLeave)},this.onEnter=()=>{p(this.controller,"mouseEnter").call(this.controller),this.log("mouseEnter",{hover:!0})},this.onLeave=()=>{p(this.controller,"mouseLeave").call(this.controller),this.log("mouseLeave",{hover:!1})},this.targetElement=(null==t?void 0:t.element)||e.element,this.controller=e,this.enhanceController(),this.observe()}enhanceController(){const e=this.controller.disconnect.bind(this.controller);Object.assign(this.controller,{disconnect:()=>{this.unobserve(),e()}})}}class C extends E{constructor(e,t={}){super(e,t),this.observe=()=>{try{this.observer.observe(this.targetElement,this.options)}catch(e){this.controller.application.handleError(e,"At a minimum, one of childList, attributes, and/or characterData must be true",{})}},this.unobserve=()=>{this.observer.disconnect()},this.mutation=e=>{p(this.controller,"mutate").call(this.controller,e),this.log("mutate",{entries:e})},this.targetElement=(null==t?void 0:t.element)||e.element,this.controller=e,this.options=t,this.observer=new MutationObserver(this.mutation),this.enhanceController(),this.observe()}enhanceController(){const e=this.controller.disconnect.bind(this.controller);Object.assign(this.controller,{disconnect:()=>{this.unobserve(),e()}})}}const T=e=>{const t=t=>{const{innerWidth:n,innerHeight:r}=window,i={height:r||Infinity,width:n||Infinity,event:t};p(e,"windowResize").call(e,i)},n=e.disconnect.bind(e),r=()=>{window.addEventListener("resize",t),t()},i=()=>{window.removeEventListener("resize",t)};return Object.assign(e,{disconnect(){i(),n()}}),r(),[r,i]},k=(e,t=200)=>{let n=null;return function(){const r=arguments,i=this,o=()=>e.apply(i,r);n&&clearTimeout(n),n=setTimeout(o,t)}};var V=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).boundHandler=t.handler.bind(l(t)),t}a(t,e);var n=t.prototype;return n.connect=function(){var e=this.element;e.style.resize="none",e.style.boxSizing="border-box",e.addEventListener("input",this.boundHandler),e.addEventListener("focus",this.boundHandler),T(this),requestAnimationFrame(this.boundHandler)},n.windowResize=function(){this.handler()},n.handler=function(){this.autosize(this.element)},n.autosize=function(e){var t=e.offsetHeight-e.clientHeight;e.style.height="auto",e.style.height=e.scrollHeight+t+"px"},t}(h),S=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).boundHandler=t.updateCharCount.bind(l(t)),t}a(t,e);var n=t.prototype;return n.connect=function(){this.updateCharCount(),this.inputTarget.addEventListener("input",this.boundHandler)},n.disconnect=function(){this.inputTarget.removeEventListener("input",this.boundHandler)},n.updateCharCount=function(){var e=this.inputTarget.value.length;this.outputTarget.innerText=e.toString(),this.hasErrorClass&&(this.isValidCount(e)?this.outputTarget.classList.remove(this.errorClass):this.outputTarget.classList.add(this.errorClass))},n.isValidCount=function(e){var t=0,n=99999;return this.hasMinValue&&(t=this.minValue),this.hasMaxValue&&(n=this.maxValue),e>=t&&e<=n},t}(h);S.targets=["input","output"],S.values={min:Number,max:Number},S.classes=["error"];var L=function(e){function t(){return e.apply(this,arguments)||this}a(t,e);var n=t.prototype;return n.initialize=function(){this.toggle=this.toggle.bind(this),this.refresh=this.refresh.bind(this)},n.connect=function(){var e=this;requestAnimationFrame(function(){e.hasCheckboxAllTarget&&(e.selectAllTarget.addEventListener("change",e.toggle),e.checkboxTargets.forEach(function(t){return t.addEventListener("change",e.refresh)}),e.refresh())})},n.disconnect=function(){var e=this;this.hasCheckboxAllTarget&&(this.selectAllTarget.removeEventListener("change",this.toggle),this.checkboxTargets.forEach(function(t){return t.removeEventListener("change",e.refresh)}))},n.toggle=function(e){e.preventDefault();var t=e.target;this.checkboxTargets.forEach(function(e){return e.checked=t.checked})},n.refresh=function(){var e=this.checkboxTargets.length,t=this.checked.length;this.selectAllTarget.checked=t>0,this.selectAllTarget.indeterminate=t>0&&t<e},o(t,[{key:"checked",get:function(){return this.checkboxTargets.filter(function(e){return e.checked})}},{key:"unchecked",get:function(){return this.checkboxTargets.filter(function(e){return!e.checked})}}]),t}(h);L.targets=["selectAll","checkbox"];var x=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).supported=!1,t}a(t,e);var n=t.prototype;return n.connect=function(){this.supported=document.queryCommandSupported("copy"),this.hasRemoveUnusedValue&&this.removeUnusedValue&&(this.supported&&this.hasFallbackTarget?this.fallbackTarget.remove():this.hasCopyTarget&&this.copyTarget.remove())},n.select=function(e){e&&e.preventDefault(),this.sourceTarget.select()},n.copy=function(e){e&&e.preventDefault(),this.sourceTarget.select(),this.supported&&document.execCommand("copy")},t}(h);function I(e){return"A"==e.nodeName}function O(e){return"FORM"==e.nodeName}function M(e){return"INPUT"==e.nodeName}x.targets=["button","copy","fallback"],x.values={removeUnused:Boolean};var H=function(e){function t(){return e.apply(this,arguments)||this}a(t,e);var n=t.prototype;return n.initialize=function(){this.confirm=this.confirm.bind(this)},n.connect=function(){var e=this;requestAnimationFrame(function(){var t=e.element;if(O(t))t.addEventListener("submit",e.confirm);else{if(!I(t))throw new Error("Can't handle confirmation on attached element");t.addEventListener("click",e.confirm)}})},n.confirm=function(e){window.confirm(this.message)||(e.preventDefault(),this.dispatch(this.element,"confirm:cancelled"))},o(t,[{key:"message",get:function(){return this.hasMessageValue?this.messageValue:"Are you sure?"}}]),t}(h);H.values={message:String};var D=function(e){function t(){return e.apply(this,arguments)||this}a(t,e);var n=t.prototype;return n.connect=function(){var e=this,t=this.messageValue;window.onbeforeunload=function(){return null==t||t},window.addEventListener("popstate",this.handlePopstate),window.addEventListener("submit",function(){window.removeEventListener("popstate",e.handlePopstate),window.onbeforeunload=null})},n.handlePopstate=function(e){return!1},t}(h);D.values={message:String};var A=function(e){function t(){return e.apply(this,arguments)||this}return a(t,e),t.prototype.connect=function(){console.log("Debug Controller",this,this.testTargets)},t}(h);A.targets=["test"];var P=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).initialValue=null,t.boundHandler=t.handler.bind(l(t)),t}a(t,e);var n=t.prototype;return n.connect=function(){var e=this.element;this.initialValue=this.isInputElement(e)&&this.isCheckable(e)?e.checked:e.value,e.addEventListener("input",this.boundHandler),e.addEventListener("change",this.boundHandler)},n.disconnect=function(){var e=this.element;e.removeEventListener("input",this.boundHandler),e.removeEventListener("change",this.boundHandler)},n.restore=function(){var e=this.element;this.isInputElement(e)&&this.isCheckable(e)?e.checked=this.initialValue:e.value=this.initialValue},n.handler=function(e){var t=this.element;this.initialValue!==t.value?t.setAttribute("data-dirty","true"):t.removeAttribute("data-dirty")},n.isCheckable=function(e){return"radio"===e.type||"checkbox"===e.type},n.isInputElement=function(e){return"INPUT"===e.tagName},t}(h),j=function(e){function t(){return e.apply(this,arguments)||this}a(t,e);var n=t.prototype;return n.connect=function(){this.toggle()},n.toggle=function(){this.hasDisablerTarget&&this.disablerTarget.checked?this.disableInputs():this.enableInputs()},n.disableInputs=function(){var e=this.hasClearValue&&this.clearValue;this.disableTargets.forEach(function(t,n){e&&(t.value=""),t.disabled=!0})},n.enableInputs=function(){this.disableTargets.forEach(function(e,t){e.disabled=!1})},t}(h);j.targets=["disabler","disable"],j.values={clear:Boolean};var R=function(e){function t(){return e.apply(this,arguments)||this}return a(t,e),t.prototype.dismiss=function(){this.element.remove()},t}(h),N=function(e){function t(){return e.apply(this,arguments)||this}a(t,e);var n=t.prototype;return n.connect=function(){((e,t={})=>{new C(this,t)})(0,{element:this.element,childList:!0}),this.checkEmpty()},n.mutate=function(e){this.checkEmpty()},n.checkEmpty=function(){var e,t=this;0===(e=this.hasScopeSelectorValue?this.element.querySelectorAll(this.scopeSelectorValue):this.element.children).length?(this.hasNotEmptyClass&&this.notEmptyClass.split(" ").forEach(function(e){return t.element.classList.remove(e)}),this.hasEmptyClass&&this.emptyClass.split(" ").forEach(function(e){return t.element.classList.add(e)}),this.element.dispatchEvent(new CustomEvent("dom:empty",{bubbles:!0,cancelable:!0}))):(this.hasNotEmptyClass&&this.notEmptyClass.split(" ").forEach(function(e){return t.element.classList.add(e)}),this.hasEmptyClass&&this.emptyClass.split(" ").forEach(function(e){return t.element.classList.remove(e)}),this.element.dispatchEvent(new CustomEvent("dom:not-empty",{bubbles:!0,cancelable:!0,detail:{count:e.length}})))},t}(h);N.classes=["empty","notEmpty"],N.values={scopeSelector:String};var F=function(e){function t(){return e.apply(this,arguments)||this}a(t,e);var n=t.prototype;return n.connect=function(){this.toggle()},n.toggle=function(){this.hasEnablerTarget&&this.enablerTarget.checked?this.enableInputs():this.disableInputs()},n.disableInputs=function(){var e=this.hasClearValue&&this.clearValue;this.enableTargets.forEach(function(t,n){e&&(t.value=""),t.disabled=!0})},n.enableInputs=function(){this.enableTargets.forEach(function(e,t){e.disabled=!1})},t}(h);F.targets=["enabler","enable"],F.values={clear:Boolean};var B=function(e){function t(){return e.apply(this,arguments)||this}return a(t,e),t.prototype.connect=function(){var e=this,t=this.element;t.onerror=function(){e.hasPlaceholderValue?t.src=e.placeholderValue:t.style.display="none"}},t}(h);B.values={placeholder:String};var _=function(e){function t(){return e.apply(this,arguments)||this}a(t,e);var n=t.prototype;return n.initialize=function(){this._clear=this._clear.bind(this)},n.connect=function(){var e=this;requestAnimationFrame(function(){if(!O(e.element))throw new Error("Expected controller to be mounted on a form element.");e.restoreOnLoad&&e.restore(),e.clearOnSubmit&&e.element.addEventListener("submit",e._clear)})},n.disconnect=function(){this.clearOnSubmit&&this.element.removeEventListener("submit",this._clear)},n._clear=function(){localStorage.removeItem(this.formIdentifier),this.dispatch(this.element,"form-save:cleared")},n.clear=function(e){e&&e.preventDefault(),this._clear()},n.save=function(e){e.preventDefault(),localStorage.setItem(this.formIdentifier,JSON.stringify(this.formData[this.formIdentifier])),this.dispatch(this.element,"form-save:save:success")},n.restore=function(e){if(e&&e.preventDefault(),localStorage.getItem(this.formIdentifier)){for(var t,n=JSON.parse(localStorage.getItem(this.formIdentifier)),r=u(this.formElements);!(t=r()).done;){var i=t.value;i.name in n&&(M(i)&&"checkbox"==i.type?i.checked=n[i.name]:M(i)&&"radio"==i.type?i.value==n[i.name]&&(i.checked=!0):i.value=n[i.name])}this.dispatch(this.element,"form-save:restore:success")}else this.dispatch(this.element,"form-save:restore:empty")},o(t,[{key:"formID",get:function(){if(this.hasIdValue)return this.idValue;var e=this.element.id;if(""!==e)return e;throw new Error("No ID value to uniquely identify this form. Please either specify data-"+this.identifier+"-id-value or give this form an 'id' attribute. ")}},{key:"formIdentifier",get:function(){return location.href+" "+this.formID}},{key:"formElements",get:function(){return this.element.elements}},{key:"formData",get:function(){for(var e,t,n=((e={})[this.formIdentifier]={},e),r=u(this.formElements);!(t=r()).done;){var i=t.value;i.name.length>0&&(M(i)&&"checkbox"==i.type?n[this.formIdentifier][i.name]=i.checked:M(i)&&"radio"==i.type?i.checked&&(n[this.formIdentifier][i.name]=i.value):n[this.formIdentifier][i.name]=i.value)}return n}},{key:"restoreOnLoad",get:function(){return!this.hasRestoreOnLoadValue||this.restoreOnLoadValue}},{key:"clearOnSubmit",get:function(){return!this.hasClearOnSubmitValue||this.clearOnSubmitValue}}]),t}(h);_.values={id:String,restoreOnLoad:Boolean,clearOnSubmit:Boolean};var z=function(e){function t(){return e.apply(this,arguments)||this}a(t,e);var n=t.prototype;return n.connect=function(){if(this.options={element:this.element,threshold:.3},"IntersectionObserver"in window){var e=((e,t={})=>{const{dispatchEvent:n,eventPrefix:r}=Object.assign({},g,t),i=(null==t?void 0:t.element)||e.element,o=e.disconnect.bind(e),s=new IntersectionObserver(t=>{const[o]=t;o.isIntersecting?(t=>{if(e.isVisible=!0,p(e,"appear").call(e,t),n){const n=v("appear",e,r),o=m(n,null,{controller:e,entry:t});i.dispatchEvent(o)}})(o):e.isVisible&&(t=>{if(e.isVisible=!1,p(e,"disappear").call(e,t),n){const n=v("disappear",e,r),o=m(n,null,{controller:e,entry:t});i.dispatchEvent(o)}})(o)},t),a=()=>{s.observe(i)},l=()=>{s.unobserve(i)};return Object.assign(e,{isVisible:!1,disconnect(){l(),o()}}),a(),[a,l]})(this,this.options);this.observe=e[0],this.unobserve=e[1]}else this.loadContent()},n.appear=function(e){var t=this.element;""===t.src&&e.target===t&&e.isIntersecting&&(this.loadContent(),this.unobserve&&this.unobserve())},t}(d),q=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).maxSelections=0,t.boundHandleInputs=t.handleInputs.bind(l(t)),t}a(t,e);var n=t.prototype;return n.connect=function(){var e=this;this.inputTargets.forEach(function(t){return t.addEventListener("change",e.boundHandleInputs)})},n.disconnect=function(){var e=this;this.inputTargets.forEach(function(t){return t.removeEventListener("change",e.boundHandleInputs)})},n.handleInputs=function(e){var t=this.inputTargets.reduce(function(e,t){return t.checked?e+1:e},0),n=e.target;t>this.maxSelections?(e.preventDefault(),n.checked=!1,n.dispatchEvent(new CustomEvent("change",{bubbles:!0,cancelable:!0})),n.dispatchEvent(new CustomEvent("limited-selection:too-many",{bubbles:!0,cancelable:!0,detail:{target:n}})),this.hasErrorTarget&&(this.errorTarget.innerHTML=this.messageValue)):(n.dispatchEvent(new CustomEvent("limited-selection:selection",{bubbles:!0,cancelable:!0,detail:{target:n}})),this.hasErrorTarget&&(this.errorTarget.innerHTML=""))},t}(h);q.targets=["input","error"],q.values={max:Number,message:String};var W=function(e){function t(){return e.apply(this,arguments)||this}a(t,e);var n=t.prototype;return n.connect=function(){this.checkStructure()},n.add=function(e){e&&e.preventDefault();var t=this.templateTarget.innerHTML.replace(/NEW_RECORD/g,this.generateID());this.targetTarget.insertAdjacentHTML(this.insertMode,t)},n.remove=function(e){e.preventDefault();var t=e.target.closest(this.wrapperClass);if(null==t)throw new Error("#remove was clicked from outside of a child record. Could not find an ancestor with class "+this.wrapperClass);if("true"===t.dataset.newRecord)t.remove();else{t.style.display="none";var n=t.querySelector("input[name*='_destroy']");if(null==n)throw new Error("Could not find a hidden input with name '_destroy'. NestedForm cannot remove an already persisted record without it.");n.value="1"}},n.generateID=function(){return(new Date).getTime().toString()+Math.random()},n.checkStructure=function(){if(this.templateTarget.innerHTML.indexOf("NEW_RECORD"))throw new Error("Could not find 'NEW_RECORD' in the provided template. Please make sure you've passed `child_index: 'NEW_RECORD'` to `fields_for`")},o(t,[{key:"wrapperClass",get:function(){return this.hasWrapperSelectorValue?this.wrapperClassValue:"nested-fields"}},{key:"insertMode",get:function(){return this.hasInsertModeValue?this.insertModeValue:"beforeend"}}]),t}(h);W.targets=["target","template"],W.values={insertMode:String,wrapperClass:String};var $=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).boundCheckPasswordsMatch=t.checkPasswordsMatch.bind(l(t)),t}a(t,e);var n=t.prototype;return n.connect=function(){var e=this;this.passwordTargets.forEach(function(t){return t.addEventListener("change",e.boundCheckPasswordsMatch)})},n.disconnect=function(){var e=this;this.passwordTargets.forEach(function(t){return t.removeEventListener("change",e.boundCheckPasswordsMatch)})},n.allPasswordsMatch=function(){var e=new Set(this.passwordTargets.map(function(e){return e.value}));return e.has("")||1==e.size},n.checkPasswordsMatch=function(){var e=this;this.allPasswordsMatch()?(this.element.dispatchEvent(new CustomEvent("password-confirm:match")),this.hasErrorClass&&this.passwordTargets.forEach(function(t){return t.classList.remove(e.errorClass)})):(this.element.dispatchEvent(new CustomEvent("password-confirm:no-match")),this.hasErrorClass&&this.passwordTargets.forEach(function(t){return t.classList.add(e.errorClass)}))},t}(h);$.targets=["password"],$.classes=["error"];var U=function(e){function t(){return e.apply(this,arguments)||this}a(t,e);var n=t.prototype;return n.peak=function(e){e&&e.preventDefault(),this.passwordTarget.type="text"},n.hide=function(e){e&&e.preventDefault(),this.passwordTarget.type="password"},n.toggle=function(e){e&&e.preventDefault(),"password"===this.passwordTarget.type?this.peak():this.hide()},t}(h);U.targets=["password"];var J=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).boundMessageReceived=t.messageReceived.bind(l(t)),t}a(t,e);var n=t.prototype;return n.connect=function(){window.addEventListener("message",this.boundMessageReceived)},n.disconnect=function(){window.removeEventListener("message",this.boundMessageReceived)},n.messageReceived=function(e){var t=e.data;t.hasOwnProperty("name")&&"iframe-body"===t.name&&t.hasOwnProperty("height")&&this.resize(t.height)},n.resize=function(e){this.element.style.height=e+"px"},t}(h),Y=function(e){function t(){return e.apply(this,arguments)||this}a(t,e);var n=t.prototype;return n.connect=function(){var e,t,n;window.self!==window.top&&(T(this),t={},null===(n=(e=this).constructor.debounces)||void 0===n||n.forEach(n=>{if("string"==typeof n&&(e[n]=k(e[n],null==t?void 0:t.wait)),"object"==typeof n){const{name:r,wait:i}=n;if(!r)return;e[r]=k(e[r],i||(null==t?void 0:t.wait))}}),this.postUpdate())},n.windowResize=function(e){this.postUpdate()},n.postUpdate=function(){var e={name:"iframe-body",height:this.getHeight()};window.parent.postMessage(e,"*")},n.getHeight=function(){var e=document.body,t=document.documentElement;return Math.max(e.scrollHeight,e.offsetHeight,t.clientHeight,t.scrollHeight,t.offsetHeight)},t}(h);Y.debounces=["postUpdate"];var G,K=function(e){function t(){return e.apply(this,arguments)||this}a(t,e);var n=t.prototype;return n.cleanupSelf=function(){this.cleanup(this.element)},n.cleanup=function(e){var t,n,i,o=this;e.dataset.controller=(null==(t=e.dataset.controller)?void 0:t.replaceAll(new RegExp("(s|^)"+this.identifier+"(s|$)","g"),""))||"",""==e.dataset.controller&&delete e.dataset.controller;var s=new RegExp("(s|^)"+this.identifier+"\\..+?(s|$)","g");e.dataset.target=(null==(n=e.dataset.target)?void 0:n.replaceAll(s,""))||"",delete e.dataset[r.default(this.identifier+"-target")],""==e.dataset.target&&delete e.dataset.target,e.dataset.action=(null==(i=e.dataset.target)?void 0:i.replaceAll(s,""))||"",delete e.dataset[r.default(this.identifier+"-action")],""==e.dataset.action&&delete e.dataset.action;var a=this.constructor.values;a&&Object.keys(a).forEach(function(t){return delete e.dataset[r.default(o.identifier+"-"+t+"-value")]});var l=this.constructor.classes;l&&Object.keys(l).forEach(function(t){return delete e.dataset[r.default(o.identifier+"-"+t+"-class")]})},t}(h),Q=function(e,t){var r=void 0===t?{}:t,i=r.behavior,o=void 0===i?"smooth":i,s=r.block,a=void 0===s?"start":s,l=r.inline,c=void 0===l?"nearest":l;try{var u=function(){e.scrollIntoView({behavior:o,block:a,inline:c})},h=function(){if("smooth"==o&&!X)return Promise.resolve(function(){try{return Promise.resolve(Promise.resolve().then(function(){return n(require("smoothscroll-polyfill"))})).then(function(e){G||(G=!0,(0,e.polyfill)())})}catch(e){return Promise.reject(e)}}()).then(function(){})}();return Promise.resolve(h&&h.then?h.then(u):u())}catch(e){return Promise.reject(e)}},X="scrollBehavior"in document.documentElement.style;function Z(e){if(!e)return null;var t=getComputedStyle(e).overflowY;return"visible"!==t&&"hidden"!==t&&e.scrollHeight>=e.clientHeight?e:Z(e.parentElement)||document.body}var ee=function(e){function t(){return e.apply(this,arguments)||this}return a(t,e),t.prototype.connect=function(){var e=this;requestAnimationFrame(function(){Q(e.element,{behavior:e.hasBehaviorValue?e.behaviorValue:"smooth",block:e.hasBlockValue?e.blockValue:"center",inline:e.hasInlineValue?e.inlineValue:"center"}).catch(function(){return e.element.scrollIntoView()}),e.cleanupSelf()})},t}(K);ee.values={behavior:String,block:String,inline:String};var te=function(e){function t(){return e.apply(this,arguments)||this}return a(t,e),t.prototype.scroll=function(e){var t;e&&e.preventDefault(),null!=(t="document"==(this.hasModeValue?this.modeValue:"document")?document.body:Z(this.element))&&Q(t,{behavior:"smooth",block:"end"}).catch(function(){return t.scrollIntoView(!1)})},t}(h);te.values={mode:String};var ne=function(e){function t(){return e.apply(this,arguments)||this}return a(t,e),t.prototype.scroll=function(){var e=document.querySelector(this.selectorValue);e?Q(e,{behavior:this.hasBehaviorValue?this.behaviorValue:"smooth",block:this.hasBlockValue?this.blockValue:"center",inline:this.hasInlineValue?this.inlineValue:"center"}).catch(function(){return e.scrollIntoView()}):console.warn("Could not find target for '"+this.selectorValue+"'")},t}(h);ne.values={selector:String,behavior:String,block:String,inline:String};var re=function(e){function t(){return e.apply(this,arguments)||this}return a(t,e),t.prototype.scroll=function(e){var t;e&&e.preventDefault(),null!=(t="document"==(this.hasModeValue?this.modeValue:"document")?document.body:Z(this.element))&&Q(t,{behavior:"smooth",block:"start"}).catch(function(){return t.scrollIntoView(!1)})},t}(h);re.values={mode:String};var ie=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).timeout=null,t}a(t,e);var n=t.prototype;return n.connect=function(){var e=this;requestAnimationFrame(function(){e.timeout=setTimeout(function(){return e.element.remove()},1e3*e.secondsValue)})},n.disconnect=function(){this.timeout&&clearTimeout(this.timeout)},t}(h);ie.values={seconds:Number};var oe=function(e){function t(){return e.apply(this,arguments)||this}a(t,e);var n=t.prototype;return n.connect=function(){var e=this;if(!this.hasInsertValue)throw new Error("`insert` value was not specified");requestAnimationFrame(function(){e.hasImmediateValue&&e.immediateValue&&e.execute()})},n.execute=function(e){e&&e.preventDefault();var t=document.querySelector(this.targetValue);if(null!=t){var n=this.element.cloneNode(!0);switch(this.cleanup(n),this.insertValue){case"beforebegin":case"beforeend":case"afterend":case"afterbegin":t.insertAdjacentHTML(this.insertValue,n.outerHTML);break;case"replaceOuter":t.outerHTML=n.outerHTML;break;case"replaceInner":t.innerHTML=n.outerHTML;break;case"prepend":t.insertAdjacentHTML("afterbegin",n.outerHTML);break;case"append":t.insertAdjacentHTML("beforeend",n.outerHTML);break;default:throw new Error("`insert` value was not specified")}this.element.remove()}else this.element.dispatchEvent(new CustomEvent("teleport:error",{bubbles:!0,cancelable:!0}))},t}(K);oe.values={target:String,insert:String,immediate:Boolean};var se=function(e){function t(){return e.apply(this,arguments)||this}a(t,e);var n=t.prototype;return n.connect=function(){var e=this;if(!this.hasClassValue)throw new Error("data-toggle-class-class-value must not be empty");(this.hasMouseEnterValue||this.hasMouseLeaveValue)&&((e,t={})=>{new w(this,t)})(),this.hasClickAwayValue&&this.clickAwayValue&&((e,t={})=>{const{onlyVisible:n,dispatchEvent:r,events:i,eventPrefix:o}=Object.assign({},b,t),s=i=>{const s=(null==t?void 0:t.element)||e.element;if(!(s.contains(i.target)||!function(e){const t=e.getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight,r=window.innerWidth||document.documentElement.clientWidth;return t.top<=n&&t.top+t.height>=0&&t.left<=r&&t.left+t.width>=0}(s)&&n)&&(e.clickOutside&&e.clickOutside(i),r)){const t=v("click:outside",e,o),n=m(t,i,{controller:e});s.dispatchEvent(n)}},a=e.disconnect.bind(e);Object.assign(e,{disconnect(){null==i||i.forEach(e=>{window.removeEventListener(e,s,!1)}),a()}}),null==i||i.forEach(e=>{window.addEventListener(e,s,!1)})})(this),requestAnimationFrame(function(){e.hasInitialValue&&e.toggleTargets.forEach("on"===e.initialValue?function(t){return e.elementOn(t)}:function(t){return e.elementOff(t)})})},n.clickOutside=function(){var e=this;this.toggleTargets.forEach(function(t){e.elementWasToggled(t)&&(e.elementToggleStatus(t),e.elementToggle(t))})},n.mouseEnter=function(){if(this.hasMouseEnterValue)switch(this.mouseEnterValue){case"on":this.on();break;case"off":this.off();break;case"toggle":this.toggle()}return{}},n.mouseLeave=function(){if(this.hasMouseLeaveValue)switch(this.mouseLeaveValue){case"on":this.on();break;case"off":this.off();break;case"toggle":this.toggle()}return{}},n.on=function(e){var t=this;this.toggleTargets.forEach(function(e){t.elementToggleStatus(e),t.elementOn(e)})},n.off=function(e){var t=this;this.toggleTargets.forEach(function(e){t.elementToggleStatus(e),t.elementOff(e)})},n.toggle=function(e){var t=this;this.toggleTargets.forEach(function(e){t.elementToggleStatus(e),t.elementToggle(e)})},n.elementWasToggled=function(e){return"true"==e.dataset.toggled},n.elementToggleStatus=function(e){this.elementWasToggled(e)?delete e.dataset.toggled:e.dataset.toggled="true"},n.elementToggle=function(e){this.classValue.split(" ").forEach(function(t){return e.classList.toggle(t)})},n.elementOn=function(e){this.classValue.split(" ").forEach(function(t){return e.classList.toggle(t,!0)})},n.elementOff=function(e){this.classValue.split(" ").forEach(function(t){return e.classList.toggle(t,!1)})},t}(h);se.targets=["toggle"],se.values={class:String,mouseEnter:String,mouseLeave:String,clickAway:Boolean,initial:String};var ae=function(e){function t(){return e.apply(this,arguments)||this}a(t,e);var n=t.prototype;return n.toggle=function(e){e&&e.preventDefault();var t=this.getFrame().src;null==t||t!==this.getSrc()?this.setSrc():this.clear()},n.setSrc=function(e){e&&e.preventDefault();var t=this.getFrame();this.hasLoadingMessageValue&&(t.innerHTML=this.loadingMessageValue),t.src=this.getSrc()},n.clear=function(e){e&&e.preventDefault();var t=this.getFrame();t.src="",t.innerHTML=""},n.getFrame=function(){var e=document.getElementById(""+this.frameIdValue);if(null==e)throw new Error("Could not find frame with ID '"+this.frameIdValue+"'");if("TURBO-FRAME"!=e.nodeName)throw new Error("Element targeted by ID '"+this.frameIdValue+"'");return e},n.getSrc=function(){var e=this.element;if(this.hasSrcValue)return this.srcValue;if(I(e))return e.href;throw new Error("No link given to drive frame to")},t}(h);ae.values={frameId:String,src:String,loadingMessage:String};var le=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).boundHandler=t.updateWordCount.bind(l(t)),t}a(t,e);var n=t.prototype;return n.connect=function(){this.updateWordCount(),this.inputTarget.addEventListener("input",this.boundHandler)},n.disconnect=function(){this.inputTarget.removeEventListener("input",this.boundHandler)},n.updateWordCount=function(){var e=0,t=this.inputTarget.value.match(/\S+/g);this.outputTarget.innerText=(e=t&&t.length||0).toString(),this.hasErrorClass&&(this.isValidCount(e)?this.outputTarget.classList.remove(this.errorClass):this.outputTarget.classList.add(this.errorClass))},n.isValidCount=function(e){var t=0,n=99999;return this.hasMinValue&&(t=this.minValue),this.hasMaxValue&&(n=this.maxValue),e>=t&&e<=n},t}(h);le.targets=["input","output"],le.values={min:Number,max:Number},le.classes=["error"],exports.AsyncBlockController=d,exports.AutoSubmitFormController=f,exports.AutosizeController=V,exports.CharCountController=S,exports.CheckboxSelectAllController=L,exports.ClipboardController=x,exports.ConfirmController=H,exports.ConfirmNavigationController=D,exports.DebugController=A,exports.DetectDirtyController=P,exports.DisableInputsController=j,exports.DismissableController=R,exports.EmptyDomController=N,exports.EnableInputsController=F,exports.FallbackImageController=B,exports.FormSaveController=_,exports.LazyBlockController=z,exports.LimitedSelectionCheckboxesController=q,exports.NestedFormController=W,exports.PasswordConfirmController=$,exports.PasswordPeekController=U,exports.ResponsiveIframeBodyController=Y,exports.ResponsiveIframeWrapperController=J,exports.ScrollIntoFocusController=ee,exports.ScrollToBottomController=te,exports.ScrollToController=ne,exports.ScrollToTopController=re,exports.SelfDestructController=ie,exports.TeleportController=oe,exports.ToggleClassController=se,exports.TurboFrameRCController=ae,exports.WordCountController=le;
//# sourceMappingURL=stimulus-library.js.map
