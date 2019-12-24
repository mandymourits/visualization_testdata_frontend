(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./src/front/pages/account/Account.js":
/*!********************************************!*\
  !*** ./src/front/pages/account/Account.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main */ "./src/front/pages/account/Main.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Account =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Account, _PureComponent);

  function Account() {
    _classCallCheck(this, Account);

    return _possibleConstructorReturn(this, _getPrototypeOf(Account).apply(this, arguments));
  }

  _createClass(Account, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Create Account"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Main__WEBPACK_IMPORTED_MODULE_1__["default"], null));
    }
  }]);

  return Account;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (Account);

/***/ }),

/***/ "./src/front/pages/account/Main.js":
/*!*****************************************!*\
  !*** ./src/front/pages/account/Main.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var filereader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! filereader */ "./node_modules/filereader/FileReader.js");
/* harmony import */ var filereader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(filereader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ "./node_modules/node-libs-browser/mock/empty.js");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_API_Api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/API/Api */ "./src/front/services/API/Api.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var reactstrap_lib_Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap/lib/Row */ "./node_modules/reactstrap/lib/Row.js");
/* harmony import */ var reactstrap_lib_Row__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(reactstrap_lib_Row__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var Main =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Main, _React$Component);

  function Main(props) {
    var _this;

    _classCallCheck(this, Main);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Main).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handlesOnEmailChange", function (event) {
      if (event) {
        event.preventDefault(); // should add some validator before setState in real use cases

        sessionStorage.setItem('USERNAME', event.target.value.trim());

        _this.setState({
          email: event.target.value.trim()
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handlesOnPasswordChange", function (event) {
      if (event) {
        event.preventDefault(); // should add some validator before setState in real use cases

        sessionStorage.setItem('PASSWORD', event.target.value.trim());

        _this.setState({
          password: event.target.value.trim()
        });
      }
    });

    _this.handlesOnEmailChange = _this.handlesOnEmailChange.bind(_assertThisInitialized(_this));
    _this.handlesOnPasswordChange = _this.handlesOnPasswordChange.bind(_assertThisInitialized(_this));
    _this.handlesOnLogin = _this.handlesOnLogin.bind(_assertThisInitialized(_this));
    _this.renderAccountCreated = _this.renderAccountCreated.bind(_assertThisInitialized(_this));
    _this.state = {
      responseAccountCreated: 'Submit'
    };
    return _this;
  }

  _createClass(Main, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "content"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_lib_Row__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "test"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        md: {
          size: 4,
          offset: 4
        },
        xs: {
          size: 10,
          offset: 1
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "form-horizontal",
        noValidate: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("fieldset", {
        id: "test"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("legend", null, "Create account"), this.renderAccountCreated(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "inputEmail",
        className: "col-lg-2 control-label"
      }, "Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        lg: 12
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        id: "inputEmail",
        placeholder: "Email",
        autoComplete: "username email",
        onChange: this.handlesOnEmailChange
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "inputPassword",
        className: "col-lg-2 control-label"
      }, "Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        lg: 12
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "password",
        className: "form-control",
        id: "inputPassword",
        placeholder: "Password",
        autoComplete: "current-password",
        onChange: this.handlesOnPasswordChange
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        lg: {
          size: 12
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        className: "login-button btn-block",
        color: "warning",
        onClick: this.handlesOnLogin
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-spinner fa-pulse fa-fw"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Submit")))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_lib_Row__WEBPACK_IMPORTED_MODULE_5___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        md: {
          size: 4,
          offset: 4
        },
        xs: {
          size: 10,
          offset: 1
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pull-right"
      }))));
    } // #region form inputs change callbacks

  }, {
    key: "renderAccountCreated",
    value: function renderAccountCreated() {
      if (this.state.renderSomething !== '') {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          placeholder: this.state.responseAccountCreated,
          value: this.state.responseAccountCreated,
          name: "pagename",
          type: "input"
        }, this.state.responseAccountCreated);
      }
    }
  }, {
    key: "handlesOnLogin",
    value: function () {
      var _handlesOnLogin = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(event) {
        var userLogin, response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!event) {
                  _context.next = 9;
                  break;
                }

                event.preventDefault();
                userLogin = {
                  username: sessionStorage.getItem('USERNAME'),
                  password: sessionStorage.getItem('PASSWORD')
                };
                console.log(userLogin);
                _context.next = 6;
                return Object(_services_API_Api__WEBPACK_IMPORTED_MODULE_3__["createUser"])(userLogin);

              case 6:
                response = _context.sent;
                console.log(JSON.stringify(response));
                this.state.responseAccountCreated = response.toString(); // should add some validator before setState in real use cases

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handlesOnLogin(_x) {
        return _handlesOnLogin.apply(this, arguments);
      }

      return handlesOnLogin;
    }()
  }]);

  return Main;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./src/front/pages/account/index.js":
/*!******************************************!*\
  !*** ./src/front/pages/account/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recompose/compose */ "./node_modules/recompose/compose.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recompose_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Account__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Account */ "./src/front/pages/account/Account.js");
/* harmony import */ var _hoc_withEnterAnimation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hoc/withEnterAnimation */ "./src/front/hoc/withEnterAnimation/index.js");
// #region imports




 // #endregion
// #region redux map state and dispatch to props

var mapStateToProps = function mapStateToProps(state) {
  return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({}, dispatch);
}; // #endregion


/* harmony default export */ __webpack_exports__["default"] = (recompose_compose__WEBPACK_IMPORTED_MODULE_2___default()(Object(_hoc_withEnterAnimation__WEBPACK_IMPORTED_MODULE_4__["default"])(), Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps))(_Account__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ })

}]);
//# sourceMappingURL=6.fd4e68f3c53f7e637fb5.js.map