(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{735:function(e,t,n){"use strict";var r=n(1),o=n.n(r),a=(n(294),n(102));function i(){var e=u(["\n      opacity: 0;\n      animation-name: ",";\n      animation-timing-function: ease-in;\n      animation-duration: 0.7s;\n      animation-delay: 0s;\n      animation-fill-mode: both;\n    "]);return i=function(){return e},e}function c(){var e=u(["\n  ",";\n"]);return c=function(){return e},e}function s(){var e=u(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n"]);return s=function(){return e},e}function u(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var p=Object(a.d)(s()),f=a.b.div(c(),function(e){return e.viewEnter&&Object(a.a)(i(),p)});function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(){return function(e){return function(t){function n(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),h(this,d(n).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(n,r.Component),function(e,t,n){t&&g(e.prototype,t),n&&g(e,n)}(n,[{key:"render",value:function(){var t=m({},this.props);return o.a.createElement(f,{viewEnter:!0},o.a.createElement(e,t))}}]),n}()}};t.a=b},736:function(e,t,n){"use strict";n.d(t,"l",function(){return v}),n.d(t,"c",function(){return S}),n.d(t,"b",function(){return b}),n.d(t,"f",function(){return f}),n.d(t,"k",function(){return l}),n.d(t,"j",function(){return m}),n.d(t,"i",function(){return g}),n.d(t,"m",function(){return y}),n.d(t,"d",function(){return w}),n.d(t,"h",function(){return j}),n.d(t,"e",function(){return O}),n.d(t,"g",function(){return h}),n.d(t,"a",function(){return d});n(1);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function i(e,t,n,r,o,a,i){try{var c=e[a](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,o)}function c(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function c(e){i(a,r,o,c,s,"next",e)}function s(e){i(a,r,o,c,s,"throw",e)}c(void 0)})}}var s=n(295),u=Object({NODE_ENV:"production"}).ENDPOINT,p=n(296),f=function(){var e=c(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s(u+"scenario/getAllScenariosByName/"+t+"/"+n,{headers:{mode:"cors",Accept:"application/json","Content-Type":"application/json",Authorization:"Basic "+p.encode(sessionStorage.getItem("USERNAME")+":"+sessionStorage.getItem("PASSWORD"))}}).then(function(e){return e.json()}));case 1:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),l=(function(){var e=c(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s(u+"scenario/getAllScenariosByName/"+t+"/"+n,{headers:{mode:"cors",Accept:"application/json","Content-Type":"application/json",Authorization:"Basic "+p.encode(sessionStorage.getItem("USERNAME")+":"+sessionStorage.getItem("PASSWORD"))}}).then(function(e){return e.json()}));case 1:case"end":return e.stop()}},e)}))}(),function(){var e=c(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s(u+"scenario/file/"+t,{headers:{mode:"cors","Content-Type":"application/octet-stream",Authorization:"Basic "+p.encode(sessionStorage.getItem("USERNAME")+":"+sessionStorage.getItem("PASSWORD"))}}).then(function(e){return e.blob()}));case 1:case"end":return e.stop()}},e)}))}(),function(){var e=c(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s(u+"scenario/getUniqueNames",{headers:{mode:"cors",Accept:"application/json","Content-Type":"application/json",Authorization:"Basic "+p.encode(sessionStorage.getItem("USERNAME")+":"+sessionStorage.getItem("PASSWORD"))}}).then(function(e){return e.json()}));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),m=function(){var e=c(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s(u+"scenario/getNavItems/"+t+"/"+n,{headers:{mode:"cors",Accept:"application/json","Content-Type":"application/json",Authorization:"Basic "+p.encode(sessionStorage.getItem("USERNAME")+":"+sessionStorage.getItem("PASSWORD"))}}).then(function(e){return e.json()}));case 1:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),g=function(){var e=c(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s(u+"scenario/getFieldNames/"+t+"/"+n,{headers:{mode:"cors",Accept:"application/json","Content-Type":"application/json",Authorization:"Basic "+p.encode(sessionStorage.getItem("USERNAME")+":"+sessionStorage.getItem("PASSWORD"))}}).then(function(e){return e.json()}));case 1:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),h=(function(){var e=c(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s(u+"scenario/getFieldNames",{headers:{mode:"cors","Access-Control-Allow-Origin":"*",Authorization:"Basic "+p.encode(sessionStorage.getItem("USERNAME")+":"+sessionStorage.getItem("PASSWORD"))}}).then(function(e){return e.json()}));case 1:case"end":return e.stop()}},e)}))}(),function(){var e=c(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s(u+"scenario/get/"+t,{headers:{mode:"cors","Access-Control-Allow-Origin":"*",Authorization:"Basic "+p.encode(sessionStorage.getItem("USERNAME")+":"+sessionStorage.getItem("PASSWORD"))}}).then(function(e){return e.json()}));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),d=(function(){var e=c(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s(u+"scenario/getFramework/"+t+"/"+n,{method:"GET",headers:{mode:"cors",Accept:"application/json","Content-Type":"application/json",Authorization:"Basic "+p.encode(sessionStorage.getItem("USERNAME")+":"+sessionStorage.getItem("PASSWORD"))}}).then(function(e){return e.json()}));case 1:case"end":return e.stop()}},e)}))}(),function(){var e=c(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s(u+"scenario/autofill/"+t,{method:"GET",headers:{mode:"cors",Accept:"application/json","Content-Type":"application/json",Authorization:"Basic "+p.encode(sessionStorage.getItem("USERNAME")+":"+sessionStorage.getItem("PASSWORD"))}}).then(function(e){return e.json()}));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),y=function(){var e=c(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s(u+"scenario/create",{method:"POST",headers:{mode:"cors",Accept:"application/json","Content-Type":"application/json",Authorization:"Basic "+p.encode(sessionStorage.getItem("USERNAME")+":"+sessionStorage.getItem("PASSWORD"))},body:JSON.stringify(t)}).then(function(e){return e.json()}));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t={method:"POST",headers:{mode:"cors",Accept:"application/json","Content-Type":"application/json",Authorization:"Basic "+p.encode(sessionStorage.getItem("USERNAME")+":"+sessionStorage.getItem("PASSWORD"))},body:JSON.stringify(e)},n=t.timeout,i=void 0===n?5e5:n,c=a(t,["timeout"]);if(c.signal)throw new Error("Signal not supported in timeoutable fetch");var f=new AbortController,l=f.signal;return new Promise(function(e,t){var n=setTimeout(function(){t(new Error("Timeout for Promise")),f.abort()},i);s(u+"scenario/autoFillPageObjects",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach(function(t){o(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({signal:l},c)).finally(function(){return clearTimeout(n)}).then(e,t)})},S=function(){var e=c(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s(u+"users",{method:"POST",headers:{mode:"cors",Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(e){return e.json()}));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),v=function(e,t){return s(u+"users/token",{method:"POST",headers:{mode:"cors",Accept:"application/json","Content-Type":"application/json",Authorization:"Basic "+p.encode(sessionStorage.getItem("USERNAME")+":"+sessionStorage.getItem("PASSWORD"))}}).then(function(e){return e.json()})},O=function(){var e=c(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s(u+"scenario/edit/"+t,{method:"PUT",headers:{mode:"cors",Accept:"application/json","Content-Type":"application/json",Authorization:"Basic "+p.encode(sessionStorage.getItem("USERNAME")+":"+sessionStorage.getItem("PASSWORD"))},body:JSON.stringify(n)}).then(function(e){return e}));case 1:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),w=function(){var e=c(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s(u+"scenario/delete/"+t,{method:"DELETE",headers:{mode:"cors",Accept:"application/json","Content-Type":"application/json",Authorization:"Basic "+p.encode(sessionStorage.getItem("USERNAME")+":"+sessionStorage.getItem("PASSWORD"))}}).then(function(e){return e}));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),j=(function(){var e=c(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s(u+"scenario/getAllFrameworkDataByName/"+t,{headers:{mode:"cors",Accept:"application/json","Content-Type":"application/json",Authorization:"Basic "+p.encode(sessionStorage.getItem("USERNAME")+":"+sessionStorage.getItem("PASSWORD"))}}).then(function(e){return e.json()}));case 1:case"end":return e.stop()}},e)}))}(),function(){var e=c(regeneratorRuntime.mark(function e(t,n,r){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s(u+"scenario/"+t+"/"+n+"/"+r,{headers:{mode:"cors",Accept:"application/json","Content-Type":"text/plain"}}).then(function(e){return e.text()}));case 1:case"end":return e.stop()}},e)}))}(),function(){var e=c(regeneratorRuntime.mark(function e(t,n,r){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s(u+"scenario/"+t+"/"+n+"/"+r,{headers:{mode:"cors",Accept:"application/json","Content-Type":"text/plain",Authorization:"Basic "+p.encode(sessionStorage.getItem("USERNAME")+":"+sessionStorage.getItem("PASSWORD"))}}).then(function(e){return e.text()}));case 1:case"end":return e.stop()}},e)}));return function(t,n,r){return e.apply(this,arguments)}}())},762:function(e,t,n){"use strict";n.r(t);var r=n(47),o=n(87),a=n(76),i=n.n(a),c=n(127),s=n(1),u=n.n(s),p=n(692),f=n.n(p),l=n(690),m=n.n(l),g=n(691),h=n.n(g),d=n(48),y=n(736);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t,n,r,o,a,i){try{var c=e[a](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,o)}function v(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function i(e){S(a,r,o,i,c,"next",e)}function c(e){S(a,r,o,i,c,"throw",e)}i(void 0)})}}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var R=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return A(j(n=function(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?j(e):t}(this,(e=w(t)).call.apply(e,[this].concat(o)))),"state",{email:"",password:""}),A(j(n),"handleButtonCreateAccount",function(){var e=v(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t&&t.preventDefault(),n.props.history.push({pathname:"/account"});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),A(j(n),"handlesOnEmailChange",function(e){e&&(e.preventDefault(),n.setState({email:e.target.value.trim()}))}),A(j(n),"handlesOnPasswordChange",function(e){e&&(e.preventDefault(),n.setState({password:e.target.value.trim()}))}),A(j(n),"handlesOnLogin",function(){var e=v(regeneratorRuntime.mark(function e(t){var r,o,a,i,c,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t&&t.preventDefault(),r=n.props.history,o=n.state,a=o.email,i=o.password,c={login:a,password:i},e.prev=4,sessionStorage.setItem("USERNAME",c.login),sessionStorage.setItem("PASSWORD",c.password),e.next=9,Object(y.l)(sessionStorage.getItem("USERNAME"),sessionStorage.getItem("PASSWORD"));case 9:s=e.sent,d.a.setToken(s.token),d.a.setUserInfo(s.id),r.push({pathname:"/protected"}),e.next=17;break;case 15:e.prev=15,e.t0=e.catch(4);case 17:case"end":return e.stop()}},e,null,[[4,15]])}));return function(t){return e.apply(this,arguments)}}()),A(j(n),"goHome",function(e){e&&e.preventDefault(),n.props.history.push({pathname:"/"})}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,s["PureComponent"]),function(e,t,n){t&&O(e.prototype,t),n&&O(e,n)}(t,[{key:"componentDidMount",value:function(){(0,this.props.disconnectUser)()}},{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,r=this.props.isLogging;return u.a.createElement("div",{className:"content"},u.a.createElement(m.a,{id:"test"},u.a.createElement(h.a,{md:{size:4,offset:4},xs:{size:10,offset:1}},u.a.createElement("form",{className:"form-horizontal",noValidate:!0},u.a.createElement("fieldset",{id:"test"},u.a.createElement("legend",null,"Login"),u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{htmlFor:"inputEmail",className:"col-lg-2 control-label"},"Email"),u.a.createElement(h.a,{lg:12},u.a.createElement("input",{type:"text",className:"form-control",id:"inputEmail",placeholder:"Email",autoComplete:"username email",value:t,onChange:this.handlesOnEmailChange}))),u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{htmlFor:"inputPassword",className:"col-lg-2 control-label"},"Password"),u.a.createElement(h.a,{lg:12},u.a.createElement("input",{type:"password",className:"form-control",id:"inputPassword",placeholder:"Password",autoComplete:"current-password",value:n,onChange:this.handlesOnPasswordChange}))),u.a.createElement("div",{className:"form-group"},u.a.createElement(h.a,{lg:{size:12}},u.a.createElement(f.a,{className:"login-button btn-block",color:"warning",disabled:r,onClick:this.handlesOnLogin},r?u.a.createElement("span",null,"login in...  ",u.a.createElement("i",{className:"fa fa-spinner fa-pulse fa-fw"})):u.a.createElement("span",null,"Login"))),u.a.createElement(f.a,{color:"link",onClick:this.handleButtonCreateAccount},"Create account")))))),u.a.createElement(m.a,null,u.a.createElement(h.a,{md:{size:4,offset:4},xs:{size:10,offset:1}},u.a.createElement("div",{className:"pull-right"}))))}}]),t}();A(R,"defaultProps",{isFetching:!1,isLogging:!1});var P=R,N=n(735);function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default=i()(Object(N.a)(),Object(o.connect)(function(e){return{isAuthenticated:e.userAuth.isAuthenticated,isFetching:e.userAuth.isFetching,isLogging:e.userAuth.isLogging}},function(e){return Object(r.bindActionCreators)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach(function(t){k(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},c),e)}))(P)}}]);