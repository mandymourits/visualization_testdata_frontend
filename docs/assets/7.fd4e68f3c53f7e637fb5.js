(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./src/front/pages/login/Login.js":
/*!****************************************!*\
  !*** ./src/front/pages/login/Login.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap_lib_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap/lib/Button */ "./node_modules/reactstrap/lib/Button.js");
/* harmony import */ var reactstrap_lib_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap_lib_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap_lib_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap/lib/Row */ "./node_modules/reactstrap/lib/Row.js");
/* harmony import */ var reactstrap_lib_Row__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap_lib_Row__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap_lib_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap/lib/Col */ "./node_modules/reactstrap/lib/Col.js");
/* harmony import */ var reactstrap_lib_Col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap_lib_Col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth */ "./src/front/services/auth/index.js");
/* harmony import */ var _services_API_Api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/API/Api */ "./src/front/services/API/Api.js");
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

// #region imports





 // #endregion
// #region flow types

// #endregion
var Login =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Login, _PureComponent);

  function Login() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Login);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Login)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      email: '',
      password: ''
    });

    _defineProperty(_assertThisInitialized(_this), "handleButtonCreateAccount",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(event) {
        var history;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (event) {
                  event.preventDefault();
                }

                history = _this.props.history;
                history.push({
                  pathname: '/account'
                }); // back to Home

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "handlesOnEmailChange", function (event) {
      if (event) {
        event.preventDefault(); // should add some validator before setState in real use cases

        _this.setState({
          email: event.target.value.trim()
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handlesOnPasswordChange", function (event) {
      if (event) {
        event.preventDefault(); // should add some validator before setState in real use cases

        _this.setState({
          password: event.target.value.trim()
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handlesOnLogin",
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(event) {
        var history, _this$state, email, password, userLogin, response;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (event) {
                  event.preventDefault();
                }

                history = _this.props.history;
                _this$state = _this.state, email = _this$state.email, password = _this$state.password;
                userLogin = {
                  login: email,
                  password: password
                };
                _context2.prev = 4;
                console.log(userLogin.login);
                console.log(userLogin.password);
                sessionStorage.setItem('USERNAME', userLogin.login);
                sessionStorage.setItem('PASSWORD', userLogin.password);
                _context2.next = 11;
                return Object(_services_API_Api__WEBPACK_IMPORTED_MODULE_5__["loginUser"])(sessionStorage.getItem('USERNAME'), sessionStorage.getItem('PASSWORD'));

              case 11:
                response = _context2.sent;
                console.log(response);
                _services_auth__WEBPACK_IMPORTED_MODULE_4__["default"].setToken(response.token);
                _services_auth__WEBPACK_IMPORTED_MODULE_4__["default"].setUserInfo(response.id);
                history.push({
                  pathname: '/protected'
                }); // back to Home

                _context2.next = 21;
                break;

              case 18:
                _context2.prev = 18;
                _context2.t0 = _context2["catch"](4);

                /* eslint-disable no-console */
                console.log('login went wrong..., error: ', _context2.t0);
                /* eslint-enable no-console */

              case 21:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[4, 18]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "goHome", function (event) {
      if (event) {
        event.preventDefault();
      }

      var history = _this.props.history;
      history.push({
        pathname: '/'
      });
    });

    return _this;
  }

  _createClass(Login, [{
    key: "componentDidMount",
    // #region lifecycle methods
    value: function componentDidMount() {
      var disconnectUser = this.props.disconnectUser;
      disconnectUser(); // diconnect user: remove token and user info
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          email = _this$state2.email,
          password = _this$state2.password;
      var isLogging = this.props.isLogging;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "content"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_lib_Row__WEBPACK_IMPORTED_MODULE_2___default.a, {
        id: "test"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_lib_Col__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("legend", null, "Login"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "inputEmail",
        className: "col-lg-2 control-label"
      }, "Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_lib_Col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        lg: 12
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        id: "inputEmail",
        placeholder: "Email",
        autoComplete: "username email",
        value: email,
        onChange: this.handlesOnEmailChange
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "inputPassword",
        className: "col-lg-2 control-label"
      }, "Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_lib_Col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        lg: 12
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "password",
        className: "form-control",
        id: "inputPassword",
        placeholder: "Password",
        autoComplete: "current-password",
        value: password,
        onChange: this.handlesOnPasswordChange
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_lib_Col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        lg: {
          size: 12
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_lib_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "login-button btn-block",
        color: "warning",
        disabled: isLogging,
        onClick: this.handlesOnLogin
      }, isLogging ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "login in... \xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-spinner fa-pulse fa-fw"
      })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Login"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_lib_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        color: "link",
        onClick: this.handleButtonCreateAccount
      }, "Create account")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_lib_Row__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_lib_Col__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
    } // #endregion
    //Create account
    // #region on login button click callback
    // #endregion

  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

_defineProperty(Login, "defaultProps", {
  isFetching: false,
  isLogging: false
});

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./src/front/pages/login/index.js":
/*!****************************************!*\
  !*** ./src/front/pages/login/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recompose/compose */ "./node_modules/recompose/compose.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recompose_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_modules_userAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/modules/userAuth */ "./src/front/redux/modules/userAuth/index.js");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Login */ "./src/front/pages/login/Login.js");
/* harmony import */ var _hoc_withEnterAnimation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hoc/withEnterAnimation */ "./src/front/hoc/withEnterAnimation/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// #region imports





 // #endregion
// #region redux map state and dispatch to props

var mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: state.userAuth.isAuthenticated,
    isFetching: state.userAuth.isFetching,
    isLogging: state.userAuth.isLogging
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"])(_objectSpread({}, _redux_modules_userAuth__WEBPACK_IMPORTED_MODULE_3__), dispatch);
}; // #endregion


/* harmony default export */ __webpack_exports__["default"] = (recompose_compose__WEBPACK_IMPORTED_MODULE_2___default()(Object(_hoc_withEnterAnimation__WEBPACK_IMPORTED_MODULE_5__["default"])(), Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps))(_Login__WEBPACK_IMPORTED_MODULE_4__["default"]));

/***/ })

}]);
//# sourceMappingURL=7.fd4e68f3c53f7e637fb5.js.map