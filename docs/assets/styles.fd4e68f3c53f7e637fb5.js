(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/css-loader/index.js!./src/front/pages/protected/App.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader!./src/front/pages/protected/App.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* ---------------------------------------------------\n    SIDEBAR STYLE\n----------------------------------------------------- */\n.sidebar {\n  min-width: 20px;\n  max-width: 200px;\n  background: #313335;\n  color: #313335;\n  margin-left: -20px;\n  transition: all 0.5s;\n}\n\n.sidebar.is-open {\n  margin-left: 0;\n  transition: .5s;\n}\n\n\n.sidebar-header {\n  background: #313335;\n}\n\n.sidebar-header h3{\n  color: #313335;\n  padding: 1em;\n}\n\n.sidebar ul p {\n    color: #313335;\n    padding: 10px;\n}\n\n.menu-open {\n  background: #313335;\n}\n\n.nav-item:hover {\n    color: #535556;\n}\n\n.items-menu {\n  color: #313335;\n  background: #999c9e;\n}\n\n.nav-link {\n  color: #c0c3c5;\n}\n\nli a.dropdown-toggle::after {\n    display: inline-flex;\n    position: relative;\n    left: 100%;\n    top: 10%\n}\n\n.sidebar-header > span {\n    position: relative;\n    float: right;\n    margin: .5em;\n    font-size: 2rem;\n    cursor: pointer;\n    display: none;\n}\n.side-menu {\n  height: calc(170vh - 150px);\n}\n\n.side-menu::-webkit-scrollbar {\n  width: 10px;\n}\n\n.side-menu::-webkit-scrollbar-thumb {\n  background: #313335;\n  border-radius: 3px;\n}\n\n.side-menu::-webkit-scrollbar-thumb:hover {\n  background: #313335;\n}\n\n/* ---------------------------------------------------\n    CONTENT STYLE\n----------------------------------------------------- */\n.content {\n  padding: 0px;\n  margin-left: 0px;\n  height: 100vh;\n}\n\n@media only screen and (max-width: 500px) {\n    body {\n      overflow:  hidden;\n    }\n\n    .content.is-open {\n      margin-left: 80%;\n    }\n\n    .sidebar.is-open {\n      min-width: 60%;\n      max-width: 60%;\n      margin-left: 200px;\n      transition: all 0.5s, height 0s;\n    }\n\n    .sidebar.is-open > .sidebar-header span{\n      display: unset;\n    }\n\n    li a.dropdown-toggle::after {\n        display: inline-block;\n        position: relative;\n        left: 68%;\n    }\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/front/pages/protected/App.css":
/*!*******************************************!*\
  !*** ./src/front/pages/protected/App.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!./App.css */ "./node_modules/css-loader/index.js!./src/front/pages/protected/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

}]);
//# sourceMappingURL=styles.fd4e68f3c53f7e637fb5.js.map