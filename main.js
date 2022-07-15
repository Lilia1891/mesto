(()=>{"use strict";var e={inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active",inputError:".popup__input-error_"},t={templateClass:".template-elements",imageClass:".gallery__element-image",titleClass:".gallery__element-title",deleteClass:".gallery__element-delete",likeClass:".gallery__element-like",likeActiveClass:"gallery__element-like_active",elementClass:".gallery__element"},n={inputSelector:".popup__input",submitBtnSelector:"popup__submit-button",formSelector:".popup__form"},r={activeModifier:"popup_opened",closeBtnSelector:"popup__close-button"},o="popup__add-form";function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,"_showError",(function(e,t){e.classList.add(r._inputErrorClass);var n=r._form.querySelector(r._inputError+e.name);n.textContent=t,n.classList.add(r._errorClass)})),l(this,"_hideError",(function(e){e.classList.remove(r._inputErrorClass);var t=r._form.querySelector(r._inputError+e.name);t.textContent="",t.classList.remove(r._errorClass)})),l(this,"_checkInputValidity",(function(e){var t=e.validationMessage;e.validity.valid?r._hideError(e):r._showError(e,t)})),l(this,"cleanUpForm",(function(){r._formInputs.forEach((function(e){r._hideError(e)})),r._toggleButtonState()})),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inputError=t.inputError,this._form=n,this._formInputs=Array.from(this._form.querySelectorAll(this._inputSelector)),this._submitBtn=this._form.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"_hasInvalidInput",value:function(){return this._formInputs.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput(this._formInputs)?(this._submitBtn.classList.add(this._inactiveButtonClass),this._submitBtn.setAttribute("disabled",!0)):(this._submitBtn.classList.remove(this._inactiveButtonClass),this._submitBtn.removeAttribute("disabled"))}},{key:"_setEventListeners",value:function(){var e=this;this._formInputs.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners(),this._toggleButtonState()}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();const a=s;function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t,n,r,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._templateClass=r.templateClass,this._imageClass=r.imageClass,this._titleClass=r.titleClass,this._deleteClass=r.deleteClass,this._likeClass=r.likeClass,this._likeActiveClass=r.likeActiveClass,this._name=t,this._link=n,this._elementClass=r.elementClass,this._handleCardClick=o}var t,n;return t=e,(n=[{key:"create",value:function(){var e=this._createElement();return this._setEventListeners(e),e}},{key:"_createElement",value:function(){var e=document.querySelector(this._templateClass).content.cloneNode(!0),t=e.querySelector(this._titleClass),n=e.querySelector(this._imageClass);return n.src=this._link,n.alt=this._name,t.textContent=this._name,e}},{key:"_delete",value:function(e){e.target.closest(this._elementClass).remove()}},{key:"_like",value:function(e){e.target.classList.toggle(this._likeActiveClass)}},{key:"_setEventListeners",value:function(e){var t=this,n=e.querySelector(this._imageClass),r=e.querySelector(this._deleteClass),o=e.querySelector(this._likeClass);r.addEventListener("click",(function(e){t._delete(e)})),o.addEventListener("click",(function(e){t._like(e)})),n.addEventListener("click",(function(){t._handleCardClick(t._name,t._link)}))}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();const p=u;function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._containerSelector=n,this._container=document.querySelector(this._containerSelector)}var t,n;return t=e,(n=[{key:"addItem",value:function(e,t){var n=this._renderer(e,t);this._container.prepend(n)}},{key:"renderAll",value:function(){var e=this;this._items.forEach((function(t){e.addItem(t.name,t.link)}))}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(){function e(t,n){var r=this,o=n.activeModifier,i=n.closeBtnSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),y(this,"_handleEscapeClose",(function(e){"Escape"===e.key&&r.close()})),y(this,"_handleCloseBtnClick",(function(e){r.close()})),y(this,"_handleCloseOverlayClick",(function(e){e.target===e.currentTarget&&r.close()})),this._popupSelector=t,this._activeModifier=o,this._closeBtnSelector=i}var t,n;return t=e,(n=[{key:"setEventListeners",value:function(){this._popup=document.querySelector(this._popupSelector),this._closeBtn=this._popup.querySelector(".".concat(this._closeBtnSelector)),this._popup.addEventListener("mousedown",this._handleCloseOverlayClick),this._closeBtn.addEventListener("click",this._handleCloseBtnClick)}},{key:"open",value:function(){document.addEventListener("keydown",this._handleEscapeClose),this._popup.classList.add(this._activeModifier)}},{key:"close",value:function(){document.removeEventListener("keydown",this._handleEscapeClose),this._popup.classList.remove(this._activeModifier)}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=k(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},g.apply(this,arguments)}function k(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}function C(e,t){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},C(e,t)}function S(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return w(e)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(l,e);var t,n,r,o,i=(r=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function l(e,t,n,r,o,s){var a,c=r.inputSelector,u=r.submitBtnSelector,p=r.formSelector,f=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;return v(this,l),j(w(a=i.call(this,e,n)),"_handleSubmit",(function(e){e.preventDefault(),a._submitCallBack(a._getInputValues()),a.close()})),a._submitCallBack=o,a._formName=t,a._inputSelector=c,a._submitBtnSelector=u,a._getterCallBack=f,a._formSelector=p,a._formElement=document.forms[a._formName],a._inputs=Array.from(a._formElement.querySelectorAll(a._inputSelector)),a._cleanupFormCallBack=s,a}return t=l,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputs.forEach((function(t){e[t.name]=t.value})),e}},{key:"_setInputValues",value:function(e){this._inputs.forEach((function(t){t.value=e[t.name]}))}},{key:"setEventListeners",value:function(){g(E(l.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",this._handleSubmit)}},{key:"open",value:function(){this._getterCallBack?this._setInputValues(this._getterCallBack()):this._formElement.reset(),this._cleanupFormCallBack(),g(E(l.prototype),"open",this).call(this)}},{key:"close",value:function(){g(E(l.prototype),"close",this).call(this),this._formElement.reset()}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),l}(m);function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(t){var n,r,o=this,i=t.nameSelector,l=t.jobSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(){return o._profile},(n="getUserInfo")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._nameSelector=i,this._jobSelector=l,this._nameElement=document.querySelector(this._nameSelector),this._jobElement=document.querySelector(this._jobSelector),this._profile={title:"",job:""}}var t,n;return t=e,(n=[{key:"_renderProfile",value:function(){this._nameElement.textContent=this._profile.title,this._jobElement.textContent=this._profile.job}},{key:"setUserInfo",value:function(e){this._profile.title=e.title||"",this._profile.job=e.job||"",this._renderProfile()}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=R(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},q.apply(this,arguments)}function R(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=A(e)););return e}function x(e,t){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},x(e,t)}function T(e,t){if(t&&("object"===L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function A(e){return A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},A(e)}var V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}(l,e);var t,n,r,o,i=(r=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=A(r);if(o){var n=A(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return T(this,e)});function l(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(n=i.call(this,e,t))._popup=document.querySelector(n._popupSelector),n._popupViewImage=n._popup.querySelector(".popup__image"),n._popupViewTitle=n._popup.querySelector(".popup__image-title"),n}return t=l,(n=[{key:"open",value:function(e,t){q(A(l.prototype),"open",this).call(this),this._popupViewImage.src=t,this._popupViewImage.alt=e,this._popupViewTitle.textContent=e}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),l}(m),U=document.querySelector(".profile__avatar-edit-button"),M=document.querySelector(".profile__info-add-button"),D={};Array.from(document.forms).forEach((function(t){D[t.name]=new a(e,t),D[t.name].enableValidation()}));var F=new V(".popup_view-image",r);F.setEventListeners();var N=function(e,t){F.open(e,t)},z=new _({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e,n){return new p(e,n,t,N).create()}},".gallery__elements");z.renderAll();var G=new O(".popup_add-card",o,r,n,(function(e){z.addItem(e.place,e.link)}),D[o].cleanUpForm);G.setEventListeners(),M.addEventListener("click",(function(){G.open()}));var H=new P({nameSelector:".profile__info-name",jobSelector:".profile__info-occupation"});H.setUserInfo({title:"Жак-Ив Кусто",job:"Исследователь океана"});var J=new O(".popup_profile","form",r,n,(function(e){H.setUserInfo(e)}),D.form.cleanUpForm,H.getUserInfo);J.setEventListeners(),U.addEventListener("click",(function(){J.open()}))})();