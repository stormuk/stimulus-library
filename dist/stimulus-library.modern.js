import{Controller as e}from"stimulus";import t from"lodash-es/get";import s from"lodash-es/set";import i from"dialog-polyfill";import a from"camelcase";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i])}return e}).apply(this,arguments)}class r extends e{constructor(e){return super(e),new Proxy(this,{get:(e,t)=>{let s=Reflect.get(e,t),i=this;if(function(e){switch(e){case"application":case"el":case"element":case"constructor":case"initialize":case"log":case"dispatch":case"data":case"valueDescriptorMap":case"identifier":return!1}return!(/^_.*?$/.test(e)||/^.*?Target(s)?$/.test(e)||/^.*?Value$/.test(e)||/^.*?ValueChanged$/.test(e)||/^.*?Class$/.test(e))}(t.toString())){if("function"==typeof s)return new Proxy(s,{apply:(e,s,a)=>(i.log(t.toString(),{args:a}),Reflect.apply(e,s,a))});this.log(t.toString())}return s}})}get el(){return this.element}dispatch(e,t,s={}){let i=Object.assign({},{bubbles:!0,cancelable:!0,detail:{target:e}},s);i.detail.target&&(i.detail.target=e);let a=new CustomEvent(t,i);e.dispatchEvent(a)}log(e,t={}){if(!this.application.debug)return;let s=console;s.groupCollapsed(`%c${this.identifier} %c#${e}`,"color: #3B82F6","color: unset"),s.log(n({element:this.element},t)),s.groupEnd()}}class l extends r{initialize(){this._handleVisibility=this._handleVisibility.bind(this)}connect(){window.addEventListener("focus",this._handleVisibility),window.addEventListener("blur",this._handleVisibility),document.addEventListener("visibilitychange",this._handleVisibility),this._handleVisibility()}disconnect(){window.removeEventListener("focus",this._handleVisibility),window.removeEventListener("blur",this._handleVisibility),document.removeEventListener("visibilitychange",this._handleVisibility)}appear(){this.dispatch(this.el,"appearance:appear")}away(){this.dispatch(this.el,"appearance:away")}_handleVisibility(){this._documentIsActive()?this.appear():this.away()}_documentIsActive(){return"visible"==document.visibilityState&&document.hasFocus()}}class o extends r{get _errorMessage(){return this.hasErrorMessageValue?this.errorMessageValue:"This content failed to load"}connect(){this.loadContent()}loadContent(){let e=this,t=this.hasReplaceTarget?this.replaceTarget:this.el;fetch(this.endpointValue).then(e=>e.text()).then(s=>{let i=document.createElement("div");if(i.innerHTML=s,this.hasSelectorValue){let e=i.querySelectorAll(this.selectorValue);t.replaceWith(...e)}else t.replaceWith(...i.children);e.dispatch(t,"ajax:success")}).catch(s=>{t.replaceWith(this._errorMessage),e.dispatch(t,"ajax:error")}).finally(()=>{e.dispatch(t,"ajax:complete")})}}o.targets=["replace"],o.values={endpoint:String,errorMessage:String,selector:String};class h extends r{initialize(){this.handler=this.handler.bind(this)}connect(){this.el.querySelectorAll("input, select, textarea").forEach(e=>e.addEventListener("change",this.handler))}disconnect(){this.el.querySelectorAll("input, select, textarea").forEach(e=>e.removeEventListener("change",this.handler))}handler(e){this.dispatch(this.el,"submit")}}const c=(e,t)=>{const s=e[t];return"function"==typeof s?s:(...e)=>{}},d=(e,t,s)=>{let i=e;return!0===s?i=`${t.identifier}:${e}`:"string"==typeof s&&(i=`${s}:${e}`),i},u=(e,t,s)=>{const{bubbles:i,cancelable:a,composed:n}=t||{bubbles:!0,cancelable:!0,composed:!0};return t&&Object.assign(s,{originalEvent:t}),new CustomEvent(e,{bubbles:i,cancelable:a,composed:n,detail:s})},m={dispatchEvent:!0,eventPrefix:!0},g=(e,t={})=>{const{dispatchEvent:s,eventPrefix:i}=Object.assign({},m,t),a=(null==t?void 0:t.element)||e.element,n=e.disconnect.bind(e),r=new IntersectionObserver(t=>{const[n]=t;n.isIntersecting?(t=>{if(e.isVisible=!0,c(e,"appear").call(e,t),s){const s=d("appear",e,i),n=u(s,null,{controller:e,entry:t});a.dispatchEvent(n)}})(n):e.isVisible&&(t=>{if(e.isVisible=!1,c(e,"disappear").call(e,t),s){const s=d("disappear",e,i),n=u(s,null,{controller:e,entry:t});a.dispatchEvent(n)}})(n)},t),l=()=>{r.observe(a)},o=()=>{r.unobserve(a)};return Object.assign(e,{isVisible:!1,disconnect(){o(),n()}}),l(),[l,o]},p={events:["click","touchend"],onlyVisible:!0,dispatchEvent:!0,eventPrefix:!0},f={debug:!1,logger:console};class v{constructor(e,t={}){var s,i,a;this.log=(e,t)=>{this.debug&&(this.logger.groupCollapsed(`%c${this.controller.identifier} %c#${e}`,"color: #3B82F6","color: unset"),this.logger.log(Object.assign({controllerId:this.controllerId},t)),this.logger.groupEnd())},this.debug=null!==(i=null!==(s=null==t?void 0:t.debug)&&void 0!==s?s:e.application.stimulusUseDebug)&&void 0!==i?i:f.debug,this.logger=null!==(a=null==t?void 0:t.logger)&&void 0!==a?a:f.logger,this.controller=e,this.controllerId=e.element.id||e.element.dataset.id,this.controllerInitialize=e.initialize.bind(e),this.controllerConnect=e.connect.bind(e),this.controllerDisconnect=e.disconnect.bind(e)}}class b extends v{constructor(e,t={}){super(e,t),this.observe=()=>{this.targetElement.addEventListener("mouseenter",this.onEnter),this.targetElement.addEventListener("mouseleave",this.onLeave)},this.unobserve=()=>{this.targetElement.removeEventListener("mouseenter",this.onEnter),this.targetElement.removeEventListener("mouseleave",this.onLeave)},this.onEnter=()=>{c(this.controller,"mouseEnter").call(this.controller),this.log("mouseEnter",{hover:!0})},this.onLeave=()=>{c(this.controller,"mouseLeave").call(this.controller),this.log("mouseLeave",{hover:!1})},this.targetElement=(null==t?void 0:t.element)||e.element,this.controller=e,this.enhanceController(),this.observe()}enhanceController(){const e=this.controller.disconnect.bind(this.controller);Object.assign(this.controller,{disconnect:()=>{this.unobserve(),e()}})}}class E extends v{constructor(e,t={}){super(e,t),this.observe=()=>{try{this.observer.observe(this.targetElement,this.options)}catch(e){this.controller.application.handleError(e,"At a minimum, one of childList, attributes, and/or characterData must be true",{})}},this.unobserve=()=>{this.observer.disconnect()},this.mutation=e=>{c(this.controller,"mutate").call(this.controller,e),this.log("mutate",{entries:e})},this.targetElement=(null==t?void 0:t.element)||e.element,this.controller=e,this.options=t,this.observer=new MutationObserver(this.mutation),this.enhanceController(),this.observe()}enhanceController(){const e=this.controller.disconnect.bind(this.controller);Object.assign(this.controller,{disconnect:()=>{this.unobserve(),e()}})}}const w=e=>{const t=t=>{const{innerWidth:s,innerHeight:i}=window,a={height:i||Infinity,width:s||Infinity,event:t};c(e,"windowResize").call(e,a)},s=e.disconnect.bind(e),i=()=>{window.addEventListener("resize",t),t()},a=()=>{window.removeEventListener("resize",t)};return Object.assign(e,{disconnect(){a(),s()}}),i(),[i,a]},y=(e,t=200)=>{let s=null;return function(){const i=arguments,a=this,n=()=>e.apply(a,i);s&&clearTimeout(s),s=setTimeout(n,t)}};class V extends r{initialize(){this._handler=this._handler.bind(this)}connect(){let e=this.el;e.style.resize="none",e.style.boxSizing="border-box",e.addEventListener("input",this._handler),e.addEventListener("focus",this._handler),w(this),requestAnimationFrame(this._handler)}windowResize(){this._handler()}_handler(){this.autosize(this.el)}autosize(e){let t=e.offsetHeight-e.clientHeight;e.style.height="auto",e.style.height=e.scrollHeight+t+"px"}}class _ extends r{initialize(){this._updateCharCount=this._updateCharCount.bind(this)}connect(){this._updateCharCount(),this.inputTarget.addEventListener("input",this._updateCharCount)}disconnect(){this.inputTarget.removeEventListener("input",this._updateCharCount)}_updateCharCount(){let e=this.inputTarget.value.length;this.outputTarget.innerText=e.toString(),this.hasErrorClass&&(this._isValidCount(e)?this.outputTarget.classList.remove(this.errorClass):this.outputTarget.classList.add(this.errorClass))}_isValidCount(e){let t=0,s=99999;return this.hasMinValue&&(t=this.minValue),this.hasMaxValue&&(s=this.maxValue),e>=t&&e<=s}}_.targets=["input","output"],_.values={min:Number,max:Number},_.classes=["error"];class T extends r{get checked(){return this.checkboxTargets.filter(e=>e.checked)}get unchecked(){return this.checkboxTargets.filter(e=>!e.checked)}initialize(){this.toggle=this.toggle.bind(this),this.refresh=this.refresh.bind(this)}connect(){requestAnimationFrame(()=>{this.hasSelectAllTarget&&(this.selectAllTarget.addEventListener("change",this.toggle),this.checkboxTargets.forEach(e=>e.addEventListener("change",this.refresh)),this.refresh())})}disconnect(){this.hasSelectAllTarget&&(this.selectAllTarget.removeEventListener("change",this.toggle),this.checkboxTargets.forEach(e=>e.removeEventListener("change",this.refresh)))}toggle(e){e.preventDefault();let t=e.target;this.checkboxTargets.forEach(e=>e.checked=t.checked)}refresh(){const e=this.checkboxTargets.length,t=this.checked.length;this.selectAllTarget.checked=t>0,this.selectAllTarget.indeterminate=t>0&&t<e}}T.targets=["selectAll","checkbox"];class S extends r{constructor(){super(...arguments),this.supported=!1}connect(){this.supported=document.queryCommandSupported("copy"),this.hasRemoveUnusedValue&&this.removeUnusedValue&&(this.supported&&this.hasFallbackTarget?this.fallbackTarget.remove():this.hasCopyTarget&&this.copyTarget.remove())}select(e){e&&e.preventDefault(),this.sourceTarget.select()}copy(e){e&&e.preventDefault(),this.sourceTarget.select(),this.supported&&document.execCommand("copy")}}function C(e){return"A"==e.nodeName}function x(e){return"FORM"==e.nodeName}function L(e){return"INPUT"==e.nodeName}function k(e){return"BUTTON"==e.nodeName}function I(e){return"SELECT"==e.nodeName}function M(e){return L(e)&&("radio"===e.type||"checkbox"===e.type)}S.targets=["button","copy","fallback"],S.values={removeUnused:Boolean};class D extends r{get message(){return this.hasMessageValue?this.messageValue:"Are you sure?"}initialize(){this.confirm=this.confirm.bind(this)}connect(){requestAnimationFrame(()=>{let e=this.el;if(x(e))e.addEventListener("submit",this.confirm);else{if(!C(e))throw new Error("Can't handle confirmation on attached element");e.addEventListener("click",this.confirm)}})}confirm(e){window.confirm(this.message)||(e.preventDefault(),this.dispatch(this.el,"confirm:cancelled"))}}D.values={message:String};class O extends r{get _message(){return this.hasMessageValue?this._messageValue:"Do you want to leave this page? Changes you made may not be saved"}initialize(){this.handlePopstate=this.handlePopstate.bind(this),this.handleTurboNavigation=this.handleTurboNavigation.bind(this)}connect(){window.onbeforeunload=()=>this._message,window.addEventListener("popstate",this.handlePopstate),window.addEventListener("submit",()=>{window.removeEventListener("popstate",this.handlePopstate),window.onbeforeunload=null}),window.addEventListener("turbolinks:before-visit",this.handleTurboNavigation),window.addEventListener("turbo:before-visit",this.handleTurboNavigation)}handlePopstate(e){return!1}handleTurboNavigation(e){confirm(this._message)||e.preventDefault()}}O.values={_message:String};class N extends r{connect(){console.log("Debug Controller",this,this.testTargets)}}N.targets=["test"];class A extends r{constructor(){super(...arguments),this.loadValue=null}initialize(){this.checkDirty=this.checkDirty.bind(this)}connect(){let e=this.el;this.loadValue=M(e)?e.checked:e.value,this.checkDirty(),e.addEventListener("input",this.checkDirty),e.addEventListener("change",this.checkDirty)}disconnect(){let e=this.el;e.removeEventListener("input",this.checkDirty),e.removeEventListener("change",this.checkDirty)}restore(){let e=this.el;if(M(e))e.checked=e.defaultChecked;else if(I(e)){let t=Array.from(e.options);t.every(e=>!e.defaultSelected)?t.forEach(e=>{e.selected=e.value==this.loadValue}):t.forEach(e=>e.selected=e.defaultSelected),Array.from(e.options).forEach(e=>e.selected=e.defaultSelected)}else e.value=e.defaultValue}checkDirty(e){let t,s=this.el;if(M(s))t=s.checked!=s.defaultChecked;else if(I(s)){let e=Array.from(s.options);t=e.every(e=>!e.defaultSelected)?s.value!=this.loadValue:e.some(e=>e.selected!=e.defaultSelected)}else t=s.value!=s.defaultValue;t?s.setAttribute("data-dirty","true"):s.removeAttribute("data-dirty")}}class H extends r{connect(){this.toggle()}toggle(){this.hasDisablerTarget&&this.disablerTarget.checked?this.disableInputs():this.enableInputs()}disableInputs(){let e=this.hasClearValue&&this.clearValue;this.disableTargets.forEach((t,s)=>{e&&(t.value=""),t.disabled=!0})}enableInputs(){this.disableTargets.forEach((e,t)=>{e.disabled=!1})}}H.targets=["disabler","disable"],H.values={clear:Boolean};class z extends r{get _message(){return this.hasMessageValue?this.messageValue:"Submitting..."}get _timeout(){return this.hasTimeoutValue?this.timeoutValue:1e3}initialize(){this.enable=this.enable.bind(this),this.disable=this.disable.bind(this)}connect(){requestAnimationFrame(()=>{this.el.addEventListener("click",this.disable)})}disconnect(){this._timeoutHandle&&clearTimeout(this._timeoutHandle)}disable(e){let t=this.el;this._isDisabled(t)?(null==e||e.preventDefault(),null==e||e.stopImmediatePropagation()):(this._cacheText=this._getElText(t),this._setElText(t,this._message),this._disable(t),setTimeout(this.enable,this._timeout))}enable(e){null==e||e.preventDefault();let t=this.el;this._isDisabled(t)&&(this._setElText(t,this._cacheText),this._enable(t))}_isDisabled(e){return L(e)&&"submit"==e.type||k(e)?e.disabled:"true"==e.dataset.disabled}_getElText(e){return L(e)&&"submit"==e.type?e.value:e.innerText}_setElText(e,t){L(e)&&"submit"==e.type?e.value=t:(k(e)||C(e))&&(e.innerText=t)}_disable(e){L(e)&&"submit"==e.type||k(e)?e.disabled=!0:e.dataset.disabled="true"}_enable(e){L(e)&&"submit"==e.type||k(e)?e.disabled=!1:e.dataset.disabled=void 0}}z.values={message:String,timeout:Number};class $ extends r{dismiss(){this.el.remove()}}class R extends r{get _id(){if(this.hasIdValue)return this.idValue;let e=this.el.id;if(""!==e)return e;throw new Error(`No ID value to uniquely identify this element. Please either specify data-${this.identifier}-id-value or give this element an 'id' attribute. `)}get _uniqueIdentifier(){return`${location.href} ${this._id}`}get _restoreOnLoad(){return!this.hasRestoreOnLoadValue||this.restoreOnLoadValue}get _element(){return this.hasElementTarget?this.elementTarget:this.el}connect(){requestAnimationFrame(()=>{this._restoreOnLoad&&this.restore()})}clear(e){e&&e.preventDefault(),localStorage.removeItem(this._uniqueIdentifier),this.dispatch(this._element,"element-save:cleared")}save(e){e&&e.preventDefault();let s=this._element,i=this.attributesValue.split(" "),a={};i.forEach(e=>a[e]=t(s,e)),localStorage.setItem(this._uniqueIdentifier,JSON.stringify(a)),this.dispatch(s,"element-save:save:success")}restore(e){e&&e.preventDefault();let t=this._element;if(localStorage.getItem(this._uniqueIdentifier)){const e=JSON.parse(localStorage.getItem(this._uniqueIdentifier));Object.keys(e).forEach(i=>{s(t,i,e[i])}),this.dispatch(t,"element-save:restore:success")}else this.dispatch(t,"element-save:restore:empty")}}R.targets=["element"],R.values={id:String,attributes:String,restoreOnLoad:Boolean};class P extends r{get emptyClasses(){return this.emptyClass.split(" ")}get notEmptyClasses(){return this.notEmptyClass.split(" ")}get children(){let e=this.el;return Array.from(this.hasScopeSelectorValue?e.querySelectorAll(this.scopeSelectorValue):e.children)}connect(){((e,t={})=>{new E(this,t)})(0,{element:this.el,childList:!0}),this.checkEmpty()}mutate(e){this.checkEmpty()}checkEmpty(){let e=this.el,t=this.children;0===t.length?(this._removeNotEmptyClasses(),this._addEmptyClasses(),this.dispatch(e,"dom:empty")):(this._addNotEmptyClasses(),this._removeEmptyClasses(),this.dispatch(e,"dom:not-empty",{detail:{count:t.length}}))}_removeEmptyClasses(){this.hasEmptyClass&&this.el.classList.remove(...this.emptyClasses)}_addNotEmptyClasses(){this.hasNotEmptyClass&&this.el.classList.add(...this.notEmptyClasses)}_addEmptyClasses(){this.hasEmptyClass&&this.el.classList.add(...this.emptyClasses)}_removeNotEmptyClasses(){this.hasNotEmptyClass&&this.el.classList.remove(...this.notEmptyClasses)}}P.classes=["empty","notEmpty"],P.values={scopeSelector:String};class q extends r{connect(){this.toggle()}toggle(){this.hasEnablerTarget&&this.enablerTarget.checked?this.enableInputs():this.disableInputs()}disableInputs(){let e=this.hasClearValue&&this.clearValue;this.enableTargets.forEach((t,s)=>{e&&(t.value=""),t.disabled=!0})}enableInputs(){this.enableTargets.forEach((e,t)=>{e.disabled=!1})}}q.targets=["enabler","enable"],q.values={clear:Boolean};class j extends r{connect(){let e=this.el;e.onerror=()=>{this.hasPlaceholderValue?e.src=this.placeholderValue:e.style.display="none"}}}j.values={placeholder:String};class F extends r{submit(e){null==e||e.preventDefault(),this.dispatch(this.formTarget,"submit"),this.formTarget.submit()}reset(e){null==e||e.preventDefault(),this.dispatch(this.formTarget,"reset"),this.formTarget.reset()}}F.targets=["form"];class B extends r{get formID(){if(this.hasIdValue)return this.idValue;let e=this.el.id;if(""!==e)return e;throw new Error(`No ID value to uniquely identify this form. Please either specify data-${this.identifier}-id-value or give this form an 'id' attribute. `)}get formIdentifier(){return`${location.href} ${this.formID}`}get formElements(){return this.el.elements}get formData(){let e={[this.formIdentifier]:{}};for(const t of this.formElements){let s=t;s.name.length>0&&(L(s)&&"checkbox"==s.type?e[this.formIdentifier][s.name]=s.checked:L(s)&&"radio"==s.type?s.checked&&(e[this.formIdentifier][s.name]=s.value):e[this.formIdentifier][s.name]=s.value)}return e}get restoreOnLoad(){return!this.hasRestoreOnLoadValue||this.restoreOnLoadValue}get clearOnSubmit(){return!this.hasClearOnSubmitValue||this.clearOnSubmitValue}initialize(){this._clear=this._clear.bind(this)}connect(){requestAnimationFrame(()=>{if(!x(this.el))throw new Error("Expected controller to be mounted on a form element.");this.restoreOnLoad&&this.restore(),this.clearOnSubmit&&this.el.addEventListener("submit",this._clear)})}disconnect(){this.clearOnSubmit&&this.el.removeEventListener("submit",this._clear)}_clear(){localStorage.removeItem(this.formIdentifier),this.dispatch(this.el,"form-save:cleared")}clear(e){null==e||e.preventDefault(),this._clear()}save(e){e.preventDefault(),localStorage.setItem(this.formIdentifier,JSON.stringify(this.formData[this.formIdentifier])),this.dispatch(this.el,"form-save:save:success")}restore(e){if(null==e||e.preventDefault(),localStorage.getItem(this.formIdentifier)){const e=JSON.parse(localStorage.getItem(this.formIdentifier));for(const t of this.formElements){let s=t;s.name in e&&(L(s)&&"checkbox"==s.type?s.checked=e[s.name]:L(s)&&"radio"==s.type?s.value==e[s.name]&&(s.checked=!0):s.value=e[s.name])}this.dispatch(this.el,"form-save:restore:success")}else this.dispatch(this.el,"form-save:restore:empty")}}B.values={id:String,restoreOnLoad:Boolean,clearOnSubmit:Boolean};class W extends r{get threshold(){return this.hasThresholdValue?this.thresholdValue.split(",").map(e=>Number.parseFloat(e.trim())).filter(e=>e>=0&&e<=1):[0,1]}connect(){g(this,{threshold:this.threshold,element:this.el})}appear(e){this.dispatch(this.el,"intersection:appear",{detail:{element:this.el}})}disappear(e){this.dispatch(this.el,"intersection:disappear",{detail:{element:this.el}})}}W.values={threshold:String};class U extends o{connect(){let e=this.el;"IntersectionObserver"in window?[this.observe,this.unobserve]=g(this,{element:e,threshold:.3}):this.loadContent()}appear(e){e.target===this.el&&e.isIntersecting&&(this.loadContent(),this.unobserve&&this.unobserve())}}const J="scrollBehavior"in document.documentElement.style;let Y;async function G(e,{behavior:t="smooth",block:s="start",inline:i="nearest"}={}){"smooth"!=t||J||await async function(){const{polyfill:e}=await import("smoothscroll-polyfill");Y||(Y=!0,e())}(),e.scrollIntoView({behavior:t,block:s,inline:i})}function K(e){if(!e)return null;const t=getComputedStyle(e).overflowY;return"visible"!==t&&"hidden"!==t&&e.scrollHeight>=e.clientHeight?e:K(e.parentElement)||document.body}class Q extends r{constructor(){super(...arguments),this._dialog=null}get src(){return this.hasSrcValue?this.srcValue:this.el.src}get srcSet(){return this.hasSrcSetValue?this.srcSetValue:this.el.srcset}get sizes(){return this.hasSizesValue?this.sizesValue:this.el.sizes}get modalClassName(){return this.hasModalClass?this.modalClass:"image-lightbox-dialog"}get imageClassName(){return this.hasImageClass?this.imageClass:"image-lightbox-image"}initialize(){this.open=this.open.bind(this),this.close=this.close.bind(this)}connect(){}open(){let e=this.el;if(this._dialog)return;this._dialog=document.createElement("dialog");let t=document.createElement("img");t.className=this.imageClassName,t.src=this.src,t.srcset=this.srcSet,t.sizes=this.sizes,this._dialog.appendChild(t),e.insertAdjacentElement("afterend",this._dialog),i.registerDialog(this._dialog),this._dialog.className=this.modalClassName,this._dialog.showModal(),G(this._dialog,{behavior:"smooth",block:"end"}).catch(()=>this._dialog.scrollIntoView(!1)),this._dialog.addEventListener("click",this.close),this._dialog.addEventListener("cancel",this.close),this._dialog.addEventListener("close",this.close)}close(){this._dialog&&(this._dialog.close(),this._dialog.remove(),this._dialog=null,G(this.el,{behavior:"smooth",block:"end"}).catch(()=>this.el.scrollIntoView(!1)))}}Q.values={src:String,srcSet:String,sizes:String},Q.classes=["modal","image"];class X extends r{initialize(){this.handleInputs=this.handleInputs.bind(this)}connect(){this.inputTargets.forEach(e=>e.addEventListener("change",this.handleInputs))}disconnect(){this.inputTargets.forEach(e=>e.removeEventListener("change",this.handleInputs))}handleInputs(e){let t=this.inputTargets.reduce((e,t)=>t.checked?e+1:e,0),s=e.target;t>this.maxValue?(e.preventDefault(),s.checked=!1,this.dispatch(s,"change"),this.dispatch(s,"limited-selection:too-many"),this.hasErrorTarget&&(this.errorTarget.innerHTML=this.messageValue)):(this.dispatch(s,"limited-selection:selection"),this.hasErrorTarget&&(this.errorTarget.innerHTML=""))}}X.targets=["input","error"],X.values={max:Number,message:String};class Z extends r{get wrapperClass(){return this.hasWrapperSelectorValue?this.wrapperClassValue:"nested-fields"}get insertMode(){return this.hasInsertModeValue?this.insertModeValue:"beforeend"}connect(){this.checkStructure()}add(e){null==e||e.preventDefault();const t=this.templateTarget.innerHTML.replace(/NEW_RECORD/g,this.generateID());this.targetTarget.insertAdjacentHTML(this.insertMode,t)}remove(e){e.preventDefault();const t=e.target.closest(`.${this.wrapperClass}`);if(null==t)throw new Error(`#remove was clicked from outside of a child record. Could not find an ancestor with class .${this.wrapperClass}`);if("true"===t.dataset.newRecord)t.remove();else{t.style.display="none";let e=t.querySelector("input[name*='_destroy']");if(null==e)throw new Error("Could not find a hidden input with name '_destroy'. NestedForm cannot remove an already persisted record without it.");e.value="1"}}generateID(){return(new Date).getTime().toString()+Math.random().toString().slice(2)}checkStructure(){if(this.templateTarget.innerHTML.indexOf("NEW_RECORD"))throw new Error("Could not find 'NEW_RECORD' in the provided template. Please make sure you've passed `child_index: 'NEW_RECORD'` to `fields_for`")}}Z.targets=["target","template"],Z.values={insertMode:String,wrapperClass:String};class ee extends r{initialize(){this.checkPasswordsMatch=this.checkPasswordsMatch.bind(this)}connect(){this.passwordTargets.forEach(e=>e.addEventListener("change",this.checkPasswordsMatch))}disconnect(){this.passwordTargets.forEach(e=>e.removeEventListener("change",this.checkPasswordsMatch))}allPasswordsMatch(){let e=new Set(this.passwordTargets.map(e=>e.value));return e.has("")||1==e.size}checkPasswordsMatch(){let e=this.el;this.allPasswordsMatch()?(this.dispatch(e,"password-confirm:match"),this.hasErrorClass&&this.passwordTargets.forEach(e=>e.classList.remove(this.errorClass))):(this.dispatch(e,"password-confirm:no-match"),this.hasErrorClass&&this.passwordTargets.forEach(e=>e.classList.add(this.errorClass)))}}ee.targets=["password"],ee.classes=["error"];class te extends r{peak(e){null==e||e.preventDefault(),this.passwordTarget.type="text"}hide(e){null==e||e.preventDefault(),this.passwordTarget.type="password"}toggle(e){null==e||e.preventDefault(),"password"===this.passwordTarget.type?this.peak():this.hide()}}te.targets=["password"];class se extends r{get selector(){return this.hasSelectorValue?this.selectorValue:`[data-controller~="${this.identifier}"]`}replace(e){const[t,s,i]=e.detail;if(t instanceof Node){let e=t.querySelector(this.selector);if(null==e)throw new Error(`expected new form DOM with [data-controller="${this.identifier}"] to be present in returned payload`);let s=this.el.parentNode;if(null==s)throw new Error("expected form to have a DOM parent, could not execute replaceChild");s.replaceChild(e,this.el)}else console.log("Unknown",t)}}se.targets=[],se.values={selector:String};class ie extends r{initialize(){this.messageReceived=this.messageReceived.bind(this)}connect(){window.addEventListener("message",this.messageReceived)}disconnect(){window.removeEventListener("message",this.messageReceived)}messageReceived(e){let t=e.data;t.hasOwnProperty("name")&&"iframe-body"===t.name&&t.hasOwnProperty("height")&&this.resize(t.height)}resize(e){this.el.style.height=`${e}px`}}class ae extends r{connect(){var e,t,s;window.self!==window.top&&(w(this),t={},null===(s=(e=this).constructor.debounces)||void 0===s||s.forEach(s=>{if("string"==typeof s&&(e[s]=y(e[s],null==t?void 0:t.wait)),"object"==typeof s){const{name:i,wait:a}=s;if(!i)return;e[i]=y(e[i],a||(null==t?void 0:t.wait))}}),this.postUpdate())}windowResize(e){this.postUpdate()}postUpdate(){let e={name:"iframe-body",height:this.getHeight()};window.parent.postMessage(e,"*")}getHeight(){const e=document.body,t=document.documentElement;return Math.max(e.scrollHeight,e.offsetHeight,t.clientHeight,t.scrollHeight,t.offsetHeight)}}ae.debounces=["postUpdate"];class ne extends r{_cleanupSelf(){this.cleanup(this.el)}cleanup(e){var t,s,i;e.dataset.controller=(null==(t=e.dataset.controller)?void 0:t.replaceAll(new RegExp(`(s|^)${this.identifier}(s|$)`,"g"),""))||"",""==e.dataset.controller&&delete e.dataset.controller;let n=new RegExp(`(s|^)${this.identifier}\\..+?(s|$)`,"g");e.dataset.target=(null==(s=e.dataset.target)?void 0:s.replaceAll(n,""))||"",delete e.dataset[a(`${this.identifier}-target`)],""==e.dataset.target&&delete e.dataset.target,e.dataset.action=(null==(i=e.dataset.target)?void 0:i.replaceAll(n,""))||"",delete e.dataset[a(`${this.identifier}-action`)],""==e.dataset.action&&delete e.dataset.action;let r=this.constructor.values;r&&Object.keys(r).forEach(t=>delete e.dataset[a(`${this.identifier}-${t}-value`)]);let l=this.constructor.classes;l&&Object.keys(l).forEach(t=>delete e.dataset[a(`${this.identifier}-${t}-class`)])}}class re extends ne{connect(){requestAnimationFrame(()=>{G(this.el,{behavior:this.hasBehaviorValue?this.behaviorValue:"smooth",block:this.hasBlockValue?this.blockValue:"center",inline:this.hasInlineValue?this.inlineValue:"center"}).catch(()=>this.el.scrollIntoView()),this._cleanupSelf()})}}re.values={behavior:String,block:String,inline:String};class le extends r{scroll(e){let t;null==e||e.preventDefault(),t="document"==(this.hasModeValue?this.modeValue:"document")?document.body:K(this.el),null!=t&&G(t,{behavior:"smooth",block:"end"}).catch(()=>t.scrollIntoView(!1))}}le.values={mode:String};class oe extends r{scroll(){let e=document.querySelector(this.selectorValue);e?G(e,{behavior:this.hasBehaviorValue?this.behaviorValue:"smooth",block:this.hasBlockValue?this.blockValue:"center",inline:this.hasInlineValue?this.inlineValue:"center"}).catch(()=>e.scrollIntoView()):console.warn(`Could not find target for '${this.selectorValue}'`)}}oe.values={selector:String,behavior:String,block:String,inline:String};class he extends r{scroll(e){let t;null==e||e.preventDefault(),t="document"==(this.hasModeValue?this.modeValue:"document")?document.body:K(this.el),null!=t&&G(t,{behavior:"smooth",block:"start"}).catch(()=>t.scrollIntoView(!1))}}he.values={mode:String};class ce extends r{constructor(){super(...arguments),this.timeout=null}connect(){requestAnimationFrame(()=>{this.timeout=setTimeout(()=>this.el.remove(),1e3*this.secondsValue)})}disconnect(){this.timeout&&clearTimeout(this.timeout)}}ce.values={seconds:Number};class de extends r{constructor(){super(...arguments),this._magicElement=null}get _mode(){return this.hasModeValue?this.modeValue:"top"}createMagicElement(){if(null===this._magicElement)switch(this._magicElement=document.createElement("div"),this._mode){case"top":this.el.insertAdjacentElement("beforebegin",this._magicElement);break;case"bottom":this.el.insertAdjacentElement("afterend",this._magicElement)}}connect(){let e=this.el;this.createMagicElement(),new IntersectionObserver(t=>{t.forEach(t=>{t.target===this._magicElement&&(0===t.intersectionRatio?e.classList.add(this.hasStuckClass?this.stuckClass:"stuck"):1===t.intersectionRatio&&e.classList.remove(this.hasStuckClass?this.stuckClass:"stuck"))})},{threshold:[0,1]}).observe(this._magicElement)}}de.classes=["stuck"],de.values={mode:String};class ue extends ne{connect(){if(!this.hasInsertValue)throw new Error("`insert` value was not specified");requestAnimationFrame(()=>{this.hasImmediateValue&&this.immediateValue&&this.execute()})}execute(e){null==e||e.preventDefault();let t=this.el,s=document.querySelector(this.targetValue);if(null==s)return void this.dispatch(t,"teleport:error");let i=t.cloneNode(!0);switch(this.cleanup(i),this.insertValue){case"beforebegin":case"beforeend":case"afterend":case"afterbegin":s.insertAdjacentHTML(this.insertValue,i.outerHTML);break;case"replaceOuter":s.outerHTML=i.outerHTML;break;case"replaceInner":s.innerHTML=i.outerHTML;break;case"prepend":s.insertAdjacentHTML("afterbegin",i.outerHTML);break;case"append":s.insertAdjacentHTML("beforeend",i.outerHTML);break;default:throw new Error("`insert` value was not specified")}t.remove()}}ue.values={target:String,insert:String,immediate:Boolean};class me extends r{connect(){if(!this.hasClassValue)throw new Error("data-toggle-class-class-value must not be empty");(this.hasMouseEnterValue||this.hasMouseLeaveValue)&&((e,t={})=>{new b(this,t)})(),this.hasClickAwayValue&&this.clickAwayValue&&((e,t={})=>{const{onlyVisible:s,dispatchEvent:i,events:a,eventPrefix:n}=Object.assign({},p,t),r=a=>{const r=(null==t?void 0:t.element)||e.element;if(!(r.contains(a.target)||!function(e){const t=e.getBoundingClientRect(),s=window.innerHeight||document.documentElement.clientHeight,i=window.innerWidth||document.documentElement.clientWidth;return t.top<=s&&t.top+t.height>=0&&t.left<=i&&t.left+t.width>=0}(r)&&s)&&(e.clickOutside&&e.clickOutside(a),i)){const t=d("click:outside",e,n),s=u(t,a,{controller:e});r.dispatchEvent(s)}},l=e.disconnect.bind(e);Object.assign(e,{disconnect(){null==a||a.forEach(e=>{window.removeEventListener(e,r,!1)}),l()}}),null==a||a.forEach(e=>{window.addEventListener(e,r,!1)})})(this),requestAnimationFrame(()=>{this.hasInitialValue&&this.toggleTargets.forEach("on"===this.initialValue?e=>this.elementOn(e):e=>this.elementOff(e))})}clickOutside(){this.toggleTargets.forEach(e=>{this.elementWasToggled(e)&&(this.elementToggleStatus(e),this.elementToggle(e))})}mouseEnter(){if(this.hasMouseEnterValue)switch(this.mouseEnterValue){case"on":this.on();break;case"off":this.off();break;case"toggle":this.toggle()}return{}}mouseLeave(){if(this.hasMouseLeaveValue)switch(this.mouseLeaveValue){case"on":this.on();break;case"off":this.off();break;case"toggle":this.toggle()}return{}}on(e){this.toggleTargets.forEach(e=>{this.elementToggleStatus(e),this.elementOn(e)})}off(e){this.toggleTargets.forEach(e=>{this.elementToggleStatus(e),this.elementOff(e)})}toggle(e){this.toggleTargets.forEach(e=>{this.elementToggleStatus(e),this.elementToggle(e)})}elementWasToggled(e){return"true"==e.dataset.toggled}elementToggleStatus(e){this.elementWasToggled(e)?delete e.dataset.toggled:e.dataset.toggled="true"}elementToggle(e){this.classValue.split(" ").forEach(t=>e.classList.toggle(t))}elementOn(e){this.classValue.split(" ").forEach(t=>e.classList.toggle(t,!0))}elementOff(e){this.classValue.split(" ").forEach(t=>e.classList.toggle(t,!1))}}function ge(e){return"TURBO-FRAME"==e.nodeName}me.targets=["toggle"],me.values={class:String,mouseEnter:String,mouseLeave:String,clickAway:Boolean,initial:String};class pe extends r{toggle(e){null==e||e.preventDefault();let t=this._getFrame().src;null==t||t!==this._getSrc()?this._setSrc():this._clear()}setSrc(e){null==e||e.preventDefault(),this._setSrc()}clear(e){null==e||e.preventDefault(),this._clear()}_setSrc(){let e=this._getFrame();this.hasLoadingMessageValue&&(e.innerHTML=this.loadingMessageValue),e.src=this._getSrc()}_clear(){let e=this._getFrame();e.src="",e.innerHTML=""}_getFrame(){let e=document.getElementById(`${this.frameIdValue}`);if(null==e)throw new Error(`Could not find frame with ID '${this.frameIdValue}'`);if(ge(e))return e;throw new Error(`Element targeted by ID '${this.frameIdValue}'`)}_getSrc(){let e=this.el;if(this.hasSrcValue)return this.srcValue;if(C(e))return e.href;throw new Error("No link given to drive frame to")}}pe.values={frameId:String,src:String,loadingMessage:String};class fe extends r{constructor(){super(...arguments),this._timeoutHandle=null}get poll(){return!!this.hasPollValue&&this.pollValue}initialize(){this.refresh=this.refresh.bind(this)}connect(){let e=this.el;if(!ge(e))throw new Error("Expected controller to be mounted on a <turbo-frame> element.");if(e.src)throw new Error("The provided <turbo-frame> element has no `src` attribute.");this.poll&&requestAnimationFrame(()=>this._timeoutHandle=setTimeout(()=>this.refresh(),this.intervalValue))}disconnect(){this._timeoutHandle&&clearTimeout(this._timeoutHandle)}refresh(e){null==e||e.preventDefault();let t=this.el;t.src=t.src}}fe.values={interval:Number,poll:Boolean};class ve extends r{initialize(){this.updateWordCount=this.updateWordCount.bind(this)}connect(){this.updateWordCount(),this.inputTarget.addEventListener("input",this.updateWordCount)}disconnect(){this.inputTarget.removeEventListener("input",this.updateWordCount)}updateWordCount(){let e=0,t=this.inputTarget.value.match(/\S+/g);e=t&&t.length||0,this.outputTarget.innerText=e.toString(),this.hasErrorClass&&(this.isValidCount(e)?this.outputTarget.classList.remove(this.errorClass):this.outputTarget.classList.add(this.errorClass))}isValidCount(e){let t=0,s=99999;return this.hasMinValue&&(t=this.minValue),this.hasMaxValue&&(s=this.maxValue),e>=t&&e<=s}}ve.targets=["input","output"],ve.values={min:Number,max:Number},ve.classes=["error"];export{l as AppearanceController,o as AsyncBlockController,h as AutoSubmitFormController,V as AutosizeController,_ as CharCountController,T as CheckboxSelectAllController,S as ClipboardController,D as ConfirmController,O as ConfirmNavigationController,N as DebugController,A as DetectDirtyController,H as DisableInputsController,z as DisableWithController,$ as DismissableController,R as ElementSaveController,P as EmptyDomController,q as EnableInputsController,j as FallbackImageController,F as FormRcController,B as FormSaveController,W as IntersectionController,U as LazyBlockController,Q as LightboxImageController,X as LimitedSelectionCheckboxesController,Z as NestedFormController,ee as PasswordConfirmController,te as PasswordPeekController,se as RemoteFormController,ae as ResponsiveIframeBodyController,ie as ResponsiveIframeWrapperController,re as ScrollIntoFocusController,le as ScrollToBottomController,oe as ScrollToController,he as ScrollToTopController,ce as SelfDestructController,de as StickyController,ue as TeleportController,me as ToggleClassController,pe as TurboFrameRCController,fe as TurboFrameRefreshController,ve as WordCountController};
//# sourceMappingURL=stimulus-library.modern.js.map
