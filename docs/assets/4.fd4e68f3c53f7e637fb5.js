(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./src/front/hoc/withEnterAnimation/index.js":
/*!***************************************************!*\
  !*** ./src/front/hoc/withEnterAnimation/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _withEnterAnimation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withEnterAnimation */ "./src/front/hoc/withEnterAnimation/withEnterAnimation.js");

/* harmony default export */ __webpack_exports__["default"] = (_withEnterAnimation__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/front/hoc/withEnterAnimation/styled/AnimatedDiv.js":
/*!****************************************************************!*\
  !*** ./src/front/hoc/withEnterAnimation/styled/AnimatedDiv.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      opacity: 0;\n      animation-name: ", ";\n      animation-timing-function: ease-in;\n      animation-duration: 0.7s;\n      animation-delay: 0s;\n      animation-fill-mode: both;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// @region imports
 // #endregion

var fadeIn = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(_templateObject());
var AnimatedDiv = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject2(), function (_ref) {
  var viewEnter = _ref.viewEnter;
  return viewEnter && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject3(), fadeIn);
});
/* harmony default export */ __webpack_exports__["default"] = (AnimatedDiv);

/***/ }),

/***/ "./src/front/hoc/withEnterAnimation/withEnterAnimation.js":
/*!****************************************************************!*\
  !*** ./src/front/hoc/withEnterAnimation/withEnterAnimation.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recompose_wrapDisplayName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recompose/wrapDisplayName */ "./node_modules/recompose/wrapDisplayName.js");
/* harmony import */ var recompose_wrapDisplayName__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recompose_wrapDisplayName__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_AnimatedDiv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled/AnimatedDiv */ "./src/front/hoc/withEnterAnimation/styled/AnimatedDiv.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// #region imports


 // #endregion
// #region flow types

// #endregion
function withEnterAnimation() {
  return function (BaseComponent) {
    var WithEnterAnimation =
    /*#__PURE__*/
    function (_Component) {
      _inherits(WithEnterAnimation, _Component);

      function WithEnterAnimation() {
        _classCallCheck(this, WithEnterAnimation);

        return _possibleConstructorReturn(this, _getPrototypeOf(WithEnterAnimation).apply(this, arguments));
      }

      _createClass(WithEnterAnimation, [{
        key: "render",
        value: function render() {
          var passProps = _extends({}, this.props);

          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_AnimatedDiv__WEBPACK_IMPORTED_MODULE_2__["default"], {
            viewEnter: true
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BaseComponent, passProps));
        }
      }]);

      return WithEnterAnimation;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
    /* eslint-disable no-process-env */


    if (true) {
      // HOC would obfuscate component name, this trick is helpful for dev (we don't care in production)
      WithEnterAnimation.displayName = recompose_wrapDisplayName__WEBPACK_IMPORTED_MODULE_1___default()(BaseComponent, 'withEnterAnimation');
    }
    /* eslint-enable no-process-env */


    return WithEnterAnimation;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (withEnterAnimation);

/***/ }),

/***/ "./src/front/pages/about/About.js":
/*!****************************************!*\
  !*** ./src/front/pages/about/About.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main */ "./src/front/pages/about/Main.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var About =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(About, _PureComponent);

  function About() {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, _getPrototypeOf(About).apply(this, arguments));
  }

  _createClass(About, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Virtualization Tool"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Main__WEBPACK_IMPORTED_MODULE_1__["default"], null));
    }
  }]);

  return About;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/front/pages/about/Frameworkstructure.js":
/*!*****************************************************!*\
  !*** ./src/front/pages/about/Frameworkstructure.js ***!
  \*****************************************************/
/*! exports provided: HandleFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandleFramework", function() { return HandleFramework; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _services_API_FetchServerData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/API/FetchServerData */ "./src/front/services/API/FetchServerData.js");
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





var HandleFramework =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HandleFramework, _React$Component);

  function HandleFramework(props) {
    var _this;

    _classCallCheck(this, HandleFramework);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HandleFramework).call(this, props));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.submitHandler = _this.submitHandler.bind(_assertThisInitialized(_this));
    _this.state = {
      inputField: ''
    };
    _this.setFramework = _this.setFramework.bind(_assertThisInitialized(_this));
    _this.changeFrameworkValue = _this.changeFrameworkValue.bind(_assertThisInitialized(_this));
    _this.toggleSplit = _this.toggleSplit.bind(_assertThisInitialized(_this));
    _this.setFramework = _this.setFramework.bind(_assertThisInitialized(_this));
    _this.select = _this.select.bind(_assertThisInitialized(_this));
    _this.toggledropdown = _this.toggledropdown.bind(_assertThisInitialized(_this));
    _this.changeValue = _this.changeValue.bind(_assertThisInitialized(_this));
    _this.downLoadFramework = _this.downLoadFramework.bind(_assertThisInitialized(_this));
    _this.state = {
      dropDownValue: 'Select action',
      splitButtonOpen: false,
      dropdownOpen: false,
      datasetname: null,
      generatePage: 'Page Name'
    };
    return _this;
  }

  _createClass(HandleFramework, [{
    key: "select",
    value: function select(event) {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen,
        name: event.target.innerText
      });
    }
  }, {
    key: "toggledropdown",
    value: function toggledropdown(event) {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        generatePage: event.target.value
      });
    }
  }, {
    key: "changeValue",
    value: function changeValue(e) {
      this.setState({
        dropDownValue: e.currentTarget.textContent
      });
      var value = e.currentTarget.getAttribute('dataset');
      this.setState({
        datasetname: value
      });
    }
  }, {
    key: "toggleSplit",
    value: function toggleSplit() {
      this.setState({
        splitButtonOpen: !this.state.splitButtonOpen
      });
    }
  }, {
    key: "setFramework",
    value: function setFramework(value) {
      var target = event.target;
      this.setState({
        pagename: target.value
      });
    }
  }, {
    key: "changeFrameworkValue",
    value: function changeFrameworkValue(e) {
      this.setState({
        dropDownValue: e.currentTarget.textContent
      });
      var framevalue = e.currentTarget.getAttribute('framevalue');
      this.setState({
        pagename: framevalue
      });
    }
  }, {
    key: "submitHandler",
    value: function submitHandler(evt) {
      evt.preventDefault();
      this.props.handlerFrameworkFromParant(this.state.pagename);
      this.setState({
        pagename: ''
      });
    }
  }, {
    key: "downLoadFramework",
    value: function () {
      var _downLoadFramework = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function downLoadFramework() {
        return _downLoadFramework.apply(this, arguments);
      }

      return downLoadFramework;
    }()
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
    }
  }]);

  return HandleFramework;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./src/front/pages/about/Main.js":
/*!***************************************!*\
  !*** ./src/front/pages/about/Main.js ***!
  \***************************************/
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
/* harmony import */ var _helpPageobjects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpPageobjects */ "./src/front/pages/about/helpPageobjects.js");
/* harmony import */ var _helptestobjectsactions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helptestobjectsactions */ "./src/front/pages/about/helptestobjectsactions.js");
/* harmony import */ var _helptestobjectsgoto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helptestobjectsgoto */ "./src/front/pages/about/helptestobjectsgoto.js");
/* harmony import */ var _services_API_FetchServerData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/API/FetchServerData */ "./src/front/services/API/FetchServerData.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _scenariotable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scenariotable */ "./src/front/pages/about/scenariotable.js");
/* harmony import */ var _scenariotabletests__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scenariotabletests */ "./src/front/pages/about/scenariotabletests.js");
/* harmony import */ var _Scenariostructure__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Scenariostructure */ "./src/front/pages/about/Scenariostructure.js");
/* harmony import */ var _structure__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./structure */ "./src/front/pages/about/structure.js");
/* harmony import */ var _structuretest__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./structuretest */ "./src/front/pages/about/structuretest.js");
/* harmony import */ var _teststructurenavitems__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./teststructurenavitems */ "./src/front/pages/about/teststructurenavitems.js");
/* harmony import */ var _teststructurepageobjects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./teststructurepageobjects */ "./src/front/pages/about/teststructurepageobjects.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Frameworkstructure__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Frameworkstructure */ "./src/front/pages/about/Frameworkstructure.js");
/* harmony import */ var _helppage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./helppage */ "./src/front/pages/about/helppage.js");
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

    _defineProperty(_assertThisInitialized(_this), "handleChangeValue", function (e) {
      return _this.setState({
        pagename: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setFramework", function (e) {
      return _this.setState({
        pagename: e.target
      });
    });

    _this.handleData = _this.handleData.bind(_assertThisInitialized(_this));
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    _this.toggledropdown = _this.toggledropdown.bind(_assertThisInitialized(_this));
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    _this.handleSubmitPageObjectModel = _this.handleSubmitPageObjectModel.bind(_assertThisInitialized(_this));
    _this.select = _this.select.bind(_assertThisInitialized(_this));
    _this.onDismiss = _this.onDismiss.bind(_assertThisInitialized(_this));
    _this.changeValue = _this.changeValue.bind(_assertThisInitialized(_this));
    _this.toggleInputDropDown = _this.toggleInputDropDown.bind(_assertThisInitialized(_this));
    _this.toggleSplit = _this.toggleSplit.bind(_assertThisInitialized(_this));
    _this.updateDropdown = _this.updateDropdown.bind(_assertThisInitialized(_this));
    _this.setFramework = _this.setFramework.bind(_assertThisInitialized(_this));
    _this.changeFrameworkValue = _this.changeFrameworkValue.bind(_assertThisInitialized(_this));
    _this.handleChangeValue = _this.handleChangeValue.bind(_assertThisInitialized(_this));
    _this.handleTypes = _this.handleTypes.bind(_assertThisInitialized(_this));
    _this.getNavList = _this.getNavList.bind(_assertThisInitialized(_this));
    _this.getFieldList = _this.getFieldList.bind(_assertThisInitialized(_this));
    _this.renderActionTest = _this.renderActionTest.bind(_assertThisInitialized(_this));
    _this.renderGoToTest = _this.renderGoToTest.bind(_assertThisInitialized(_this));
    _this.handleNavItems = _this.handleNavItems.bind(_assertThisInitialized(_this));
    _this.handlePageItems = _this.handlePageItems.bind(_assertThisInitialized(_this));
    _this.handleSubmitTest = _this.handleSubmitTest.bind(_assertThisInitialized(_this));
    _this.uploadFile = _this.uploadFile.bind(_assertThisInitialized(_this));
    _this.renderSomething = _this.renderSomething.bind(_assertThisInitialized(_this));
    _this.renderGoTo = _this.renderGoTo.bind(_assertThisInitialized(_this));
    _this.renderAction = _this.renderAction.bind(_assertThisInitialized(_this));
    _this.toggleActiveCard = _this.toggleActiveCard.bind(_assertThisInitialized(_this));
    _this.toggleActiveCardTest = _this.toggleActiveCardTest.bind(_assertThisInitialized(_this));
    _this.handleNavTest = _this.handleNavTest.bind(_assertThisInitialized(_this));
    _this.toggleActiveCardTest = _this.toggleActiveCardTest.bind(_assertThisInitialized(_this));
    _this.handleNav = _this.handleNav.bind(_assertThisInitialized(_this));
    _this.togglePopover = _this.togglePopover.bind(_assertThisInitialized(_this));
    _this.clean = _this.clean.bind(_assertThisInitialized(_this));
    _this.handleTabFromChild = _this.handleTabFromChild.bind(_assertThisInitialized(_this));
    _this.toggleSecondCard = _this.toggleSecondCard.bind(_assertThisInitialized(_this));
    _this.toggleSecondCardTest = _this.toggleSecondCardTest.bind(_assertThisInitialized(_this));
    _this.updateTable = _this.updateTable.bind(_assertThisInitialized(_this));
    _this.updateTableFromChild = _this.updateTableFromChild.bind(_assertThisInitialized(_this));
    _this.autoFillObjects = _this.autoFillObjects.bind(_assertThisInitialized(_this));
    _this.autoFillPageObjects = _this.autoFillPageObjects.bind(_assertThisInitialized(_this));
    _this.update = _this.update.bind(_assertThisInitialized(_this));
    _this.toggleDropdownTools = _this.toggleDropdownTools.bind(_assertThisInitialized(_this));
    _this.toggleSplitTools = _this.toggleSplitTools.bind(_assertThisInitialized(_this));
    _this.toggleSplitAccessTypes = _this.toggleSplitAccessTypes.bind(_assertThisInitialized(_this));
    _this.toggledropdownAccessType = _this.toggledropdownAccessType.bind(_assertThisInitialized(_this));
    _this.handleTypesGenerationProcess = _this.handleTypesGenerationProcess.bind(_assertThisInitialized(_this));
    _this.state = {
      url: 'http://81.169.211.171:8096/',
      activeTab: '1',
      dropdownOpen: false,
      imageURL: '',
      selectedFile: null,
      property: null,
      value: '',
      name: 'Framework',
      visible: false,
      actions: [],
      dropDownValue: 'Select action',
      dataset: '',
      inputdropdownOpen: false,
      splitButtonOpen: false,
      pagename: 'unKnown',
      framework: [],
      submittedFramework: null,
      columns: [],
      columnstests: [],
      initialArray: 1,
      frameworkdata: [],
      navnameselector: '',
      navname: '',
      page: '',
      selector: '',
      type: null,
      webElementTypes: [{
        id: 1,
        typeName: 'id'
      }, {
        id: 2,
        typeName: 'css'
      }],
      types: [{
        id: 1,
        typeName: 'input(id)'
      }, {
        id: 2,
        typeName: 'input(class)'
      }, {
        id: 3,
        typeName: 'input(css)'
      }, {
        id: 4,
        typeName: 'input(name)'
      }, {
        id: 5,
        typeName: 'input(xpath)'
      }, {
        id: 6,
        typeName: 'button(id)'
      }, {
        id: 7,
        typeName: 'button(class)'
      }, {
        id: 8,
        typeName: 'button(css)'
      }, {
        id: 9,
        typeName: 'button(name)'
      }, {
        id: 10,
        typeName: 'button(xpath)'
      }, {
        id: 11,
        typeName: 'validateInput(id)'
      }, {
        id: 13,
        typeName: 'validateButton(id)'
      }, {
        id: 14,
        typeName: 'checkBox(id)'
      }, {
        id: 15,
        typeName: 'option(id)'
      }, {
        id: 16,
        typeName: 'input(column,row)'
      }, {
        id: 17,
        typeName: 'validate(column,row)'
      }, {
        id: 18,
        typeName: 'doubleClick(id)'
      }, {
        id: 19,
        typeName: 'dropDown(id)'
      }, {
        id: 20,
        typeName: 'datePicker(id)'
      }],
      typeName: 'Choose type',
      objectname: '',
      datasetname: '',
      navItems: [],
      pageObjectsNames: [],
      pageObjectValue: '',
      istest: '',
      selectedPage: 'false',
      renderSomething: 'false',
      leftCard: 'true',
      leftCardTest: 'true',
      popoverOpen: true,
      shouldUpdateTable: false,
      selectors1: '',
      selectors2: '',
      selectors3: '',
      accessType: '',
      prePage: '',
      dropdownOpenTools: false,
      splitButtonOpenTools: false,
      toolSelectedPage: '',
      splitButtonOpenAccessTypes: false,
      dropdownOpenAccessType: false,
      generateUrl: 'unKnown',
      typeNameSelectors: ''
    };
    return _this;
  }

  _createClass(Main, [{
    key: "handleData",
    value: function () {
      var _handleData = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(data) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.setState({
                  pagename: data,
                  selectedPage: 'true'
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleData(_x) {
        return _handleData.apply(this, arguments);
      }

      return handleData;
    }()
  }, {
    key: "updateTableFromChild",
    value: function () {
      var _updateTableFromChild = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(data) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.setState({
                  shouldUpdateTable: data
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function updateTableFromChild(_x2) {
        return _updateTableFromChild.apply(this, arguments);
      }

      return updateTableFromChild;
    }()
  }, {
    key: "handleTabFromChild",
    value: function () {
      var _handleTabFromChild = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(data) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.initializeColumns();

              case 2:
                _context3.next = 4;
                return this.updateDropdown();

              case 4:
                _context3.next = 6;
                return this.getNavList();

              case 6:
                _context3.next = 8;
                return this.getFieldList();

              case 8:
                this.setState({
                  activeTab: data
                });

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function handleTabFromChild(_x3) {
        return _handleTabFromChild.apply(this, arguments);
      }

      return handleTabFromChild;
    }()
  }, {
    key: "updateTable",
    value: function updateTable() {
      this.setState({
        shouldUpdateTable: true
      });
    }
  }, {
    key: "handleNavItems",
    value: function handleNavItems(data) {
      console.log(data);
      this.setState(data);
    }
  }, {
    key: "handlePageItems",
    value: function handlePageItems(data) {
      console.log(data);
      this.setState(data);
    }
  }, {
    key: "onDismiss",
    value: function onDismiss() {
      this.setState({
        visible: false
      });
    }
  }, {
    key: "handleInputChange",
    value: function handleInputChange(event) {
      console.log(event.target.value);
      var target = event.target;
      var value = target.type === 'checkbox' ? target.checked : target.value;
      var name = target.name;
      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: "select",
    value: function select(event) {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen,
        name: event.target.innerText
      });
    }
  }, {
    key: "toggle",
    value: function toggle(tab) {
      if (this.state.activeTab !== tab) {
        this.setState({
          activeTab: tab
        });
      }
    }
  }, {
    key: "toggledropdown",
    value: function toggledropdown(event) {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }
  }, {
    key: "toggledropdownAccessType",
    value: function toggledropdownAccessType(event) {
      this.setState({
        dropdownOpenAccessType: !this.state.dropdownOpenAccessType
      });
    }
  }, {
    key: "toggleDropdownTools",
    value: function toggleDropdownTools(event) {
      this.setState({
        dropdownOpenTools: !this.state.dropdownOpenTools
      });
    }
  }, {
    key: "toggleInputDropDown",
    value: function toggleInputDropDown() {
      this.setState({
        inputDropdownOpen: !this.state.inputDropdownOpen
      });
    }
  }, {
    key: "toggleSplit",
    value: function toggleSplit() {
      this.setState({
        splitButtonOpen: !this.state.splitButtonOpen
      });
    }
  }, {
    key: "toggleSplitAccessTypes",
    value: function toggleSplitAccessTypes() {
      this.setState({
        splitButtonOpenAccessTypes: !this.state.splitButtonOpenAccessTypes
      });
    }
  }, {
    key: "toggleSplitTools",
    value: function toggleSplitTools() {
      this.setState({
        splitButtonOpenTools: !this.state.splitButtonOpenTools
      });
    }
  }, {
    key: "toggleActiveCard",
    value: function toggleActiveCard(e) {
      this.clean();

      if (e.target.value === 'false') {
        this.setState({
          leftCard: 'true'
        });
      }

      if (e.target.value === 'true') {
        this.setState({
          leftCard: 'false'
        });
      }
    }
  }, {
    key: "toggleSecondCard",
    value: function toggleSecondCard(e) {
      this.clean();
      this.setState({
        leftCard: 'false'
      });
    }
  }, {
    key: "toggleSecondCardTest",
    value: function toggleSecondCardTest(e) {
      this.clean();
      this.setState({
        leftCardTest: 'false'
      });
    }
  }, {
    key: "toggleActiveCardTest",
    value: function toggleActiveCardTest(e) {
      this.clean();

      if (e.target.value === 'false') {
        this.setState({
          leftCardTest: 'true'
        });
      }

      if (e.target.value === 'true') {
        this.setState({
          leftCardTest: 'false'
        });
      }
    }
  }, {
    key: "togglePopover",
    value: function togglePopover(e) {
      this.setState({
        popoverOpen: !this.state.popoverOpen
      });
    }
  }, {
    key: "changeValue",
    value: function changeValue(e) {
      this.setState({
        dropDownValue: e.currentTarget.textContent
      });
      var value = e.currentTarget.getAttribute('pagename');
      this.setState({
        pagename: value
      });
    }
  }, {
    key: "changeFrameworkValue",
    value: function changeFrameworkValue(e) {
      this.setState({
        dropDownValue: e.currentTarget.textContent
      });
      var framevalue = e.currentTarget.getAttribute('framevalue');
      this.setState({
        pagename: framevalue
      });
    }
  }, {
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.updateDropdown();

              case 2:
                _context4.next = 4;
                return this.getNavList();

              case 4:
                _context4.next = 6;
                return this.getFieldList();

              case 6:
                _context4.next = 8;
                return this.initializeColumns();

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "initializeColumns",
    value: function initializeColumns() {
      this.setState({
        columns: ['#', 'Page', 'SubPage', 'SubPage Selector', 'Field Label', 'Field Name Selector', 'Type', 'Value'],
        columnstests: ['#', 'SubPage', 'Field Label', 'Value']
      });
    }
  }, {
    key: "updateDropdown",
    value: function () {
      var _updateDropdown = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5() {
        var dataSetCollection;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                console.log(this.state.url);
                _context5.next = 3;
                return Object(_services_API_FetchServerData__WEBPACK_IMPORTED_MODULE_6__["getUniqueNames"])(this.state.url);

              case 3:
                dataSetCollection = _context5.sent;
                this.setState({
                  actions: dataSetCollection
                });

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function updateDropdown() {
        return _updateDropdown.apply(this, arguments);
      }

      return updateDropdown;
    }()
  }, {
    key: "getNavList",
    value: function () {
      var _getNavList = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6() {
        var dataSetCollection;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (!(this.state.pagename !== '')) {
                  _context6.next = 5;
                  break;
                }

                _context6.next = 3;
                return Object(_services_API_FetchServerData__WEBPACK_IMPORTED_MODULE_6__["getNavItems"])(this.state.url, this.state.pagename, 'false');

              case 3:
                dataSetCollection = _context6.sent;
                this.setState({
                  navItems: dataSetCollection
                });

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getNavList() {
        return _getNavList.apply(this, arguments);
      }

      return getNavList;
    }()
  }, {
    key: "getFieldList",
    value: function () {
      var _getFieldList = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee7() {
        var dataSetCollection;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (!(this.state.pagename !== '' && this.state.pagename !== null)) {
                  _context7.next = 5;
                  break;
                }

                _context7.next = 3;
                return Object(_services_API_FetchServerData__WEBPACK_IMPORTED_MODULE_6__["getFieldNames"])(this.state.url, this.state.pagename, 'false');

              case 3:
                dataSetCollection = _context7.sent;
                this.setState({
                  pageObjectsNames: dataSetCollection
                });

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function getFieldList() {
        return _getFieldList.apply(this, arguments);
      }

      return getFieldList;
    }()
  }, {
    key: "handleTypes",
    value: function () {
      var _handleTypes = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee8(event) {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                this.setState({
                  typeName: event.target.value
                });

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function handleTypes(_x4) {
        return _handleTypes.apply(this, arguments);
      }

      return handleTypes;
    }()
  }, {
    key: "handleTypesGenerationProcess",
    value: function () {
      var _handleTypesGenerationProcess = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee9(event) {
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                this.setState({
                  typeNameSelectors: event.target.value
                });

              case 1:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function handleTypesGenerationProcess(_x5) {
        return _handleTypesGenerationProcess.apply(this, arguments);
      }

      return handleTypesGenerationProcess;
    }()
  }, {
    key: "handleSubmitTest",
    value: function () {
      var _handleSubmitTest = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee10() {
        var data;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                event.preventDefault();
                _context10.next = 3;
                return this.handleNavTest(this.state.leftCardTest);

              case 3:
                this.setState({
                  visible: true
                });
                _context10.prev = 4;
                _context10.next = 7;
                return Object(_services_API_FetchServerData__WEBPACK_IMPORTED_MODULE_6__["postScenarioData2"])(this.state.url, {
                  istest: 'true',
                  pagename: this.state.pagename,
                  navname: this.state.dropdownpageobjects,
                  navnameselector: '',
                  fieldname: this.state.dropDownFieldObjects,
                  selector: '',
                  type: '',
                  value: this.state.pageObjectValue
                });

              case 7:
                data = _context10.sent;
                console.log(data);
                this.setState({
                  scenarios: data
                });
                this.setState({
                  visible: false
                });
                _context10.next = 13;
                return this.initializeColumns();

              case 13:
                _context10.next = 15;
                return this.updateTable();

              case 15:
                _context10.next = 17;
                return this.toggleSecondCardTest();

              case 17:
                _context10.next = 21;
                break;

              case 19:
                _context10.prev = 19;
                _context10.t0 = _context10["catch"](4);

              case 21:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this, [[4, 19]]);
      }));

      function handleSubmitTest() {
        return _handleSubmitTest.apply(this, arguments);
      }

      return handleSubmitTest;
    }()
  }, {
    key: "handleNav",
    value: function () {
      var _handleNav = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee11() {
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                if (this.state.leftCard === 'true') {
                  this.setState({
                    objectname: '',
                    objectselector: '',
                    typeName: '',
                    objectvalue: ''
                  });
                } else {
                  this.setState({
                    navname: '',
                    navnameselector: ''
                  });
                }

              case 1:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function handleNav() {
        return _handleNav.apply(this, arguments);
      }

      return handleNav;
    }()
  }, {
    key: "handleNavTest",
    value: function () {
      var _handleNavTest = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee12(leftCard) {
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                if (leftCard === 'true') {
                  this.setState({
                    inputDropDownPageObjects: '',
                    pageObjectValue: ''
                  });
                } else {
                  this.setState({
                    dropDownPageObjects: ''
                  });
                }

              case 1:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function handleNavTest(_x6) {
        return _handleNavTest.apply(this, arguments);
      }

      return handleNavTest;
    }()
  }, {
    key: "clean",
    value: function () {
      var _clean = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee13() {
        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                this.setState({
                  objectname: '',
                  dropdownpageobjects: '',
                  inputDropDownPageObjects: '',
                  pageObjectValue: '',
                  objectselector: '',
                  typeName: '',
                  objectvalue: '',
                  navname: '',
                  navnameselector: ''
                });

              case 1:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function clean() {
        return _clean.apply(this, arguments);
      }

      return clean;
    }()
  }, {
    key: "handleSubmitPageObjectModel",
    value: function () {
      var _handleSubmitPageObjectModel = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee14(event) {
        var data;
        return regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                event.preventDefault();
                _context14.next = 3;
                return this.handleNav();

              case 3:
                this.setState({
                  visible: true
                });
                _context14.prev = 4;
                _context14.next = 7;
                return Object(_services_API_FetchServerData__WEBPACK_IMPORTED_MODULE_6__["postScenarioData2"])(this.state.url, {
                  istest: 'false',
                  pagename: this.state.pagename,
                  navname: this.state.navname,
                  navnameselector: this.state.navnameselector,
                  fieldname: this.state.objectname,
                  selector: this.state.objectselector,
                  type: this.state.typeName,
                  value: this.state.objectvalue
                });

              case 7:
                data = _context14.sent;
                this.setState({
                  scenarios: data,
                  visible: false
                });
                _context14.next = 11;
                return this.updateDropdown();

              case 11:
                _context14.next = 13;
                return this.getNavList();

              case 13:
                _context14.next = 15;
                return this.getFieldList();

              case 15:
                _context14.next = 17;
                return this.initializeColumns();

              case 17:
                _context14.next = 19;
                return this.toggleSecondCard();

              case 19:
                _context14.next = 21;
                return this.updateTable();

              case 21:
                _context14.next = 25;
                break;

              case 23:
                _context14.prev = 23;
                _context14.t0 = _context14["catch"](4);

              case 25:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this, [[4, 23]]);
      }));

      function handleSubmitPageObjectModel(_x7) {
        return _handleSubmitPageObjectModel.apply(this, arguments);
      }

      return handleSubmitPageObjectModel;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee15(event) {
        return regeneratorRuntime.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                this.state.url = event.target.value;
                _context15.next = 3;
                return this.updateDropdown();

              case 3:
                _context15.next = 5;
                return this.getNavList();

              case 5:
                _context15.next = 7;
                return this.getFieldList();

              case 7:
                _context15.next = 9;
                return this.initializeColumns();

              case 9:
                _context15.next = 11;
                return this.toggleSecondCard();

              case 11:
                _context15.next = 13;
                return this.updateTable();

              case 13:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function update(_x8) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "autoFillObjects",
    value: function () {
      var _autoFillObjects = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee16(event) {
        var data;
        return regeneratorRuntime.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                event.preventDefault();
                _context16.prev = 1;
                _context16.next = 4;
                return Object(_services_API_FetchServerData__WEBPACK_IMPORTED_MODULE_6__["autoFill"])(this.state.url, this.state.pagename);

              case 4:
                data = _context16.sent;
                _context16.next = 7;
                return this.updateTable();

              case 7:
                _context16.next = 11;
                break;

              case 9:
                _context16.prev = 9;
                _context16.t0 = _context16["catch"](1);

              case 11:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this, [[1, 9]]);
      }));

      function autoFillObjects(_x9) {
        return _autoFillObjects.apply(this, arguments);
      }

      return autoFillObjects;
    }()
  }, {
    key: "autoFillPageObjects",
    value: function () {
      var _autoFillPageObjects2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee17(event) {
        var data, _data;

        return regeneratorRuntime.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                data = {
                  istest: 'false',
                  pagename: this.state.pagename,
                  url: this.state.generateUrl,
                  selectors: this.state.selectors1 + "___" + this.state.selectors2 + "___" + this.state.selectors3,
                  accessTypes: this.state.typeNameSelectors,
                  pages: this.state.toolSelectedPage
                };
                console.log(data);
                event.preventDefault();
                _context17.prev = 3;
                console.log('was here');
                _context17.next = 7;
                return Object(_services_API_FetchServerData__WEBPACK_IMPORTED_MODULE_6__["autoFillPageObjects"])(this.state.url, {
                  istest: 'false',
                  pagename: this.state.pagename,
                  url: this.state.generateUrl,
                  selectors: this.state.selectors1 + "___" + this.state.selectors2 + "___" + this.state.selectors3,
                  accessTypes: this.state.typeNameSelectors
                });

              case 7:
                _data = _context17.sent;
                _context17.next = 10;
                return this.updateTable();

              case 10:
                _context17.next = 12;
                return this.updateDropdown();

              case 12:
                _context17.next = 14;
                return this.getNavList();

              case 14:
                _context17.next = 16;
                return this.getFieldList();

              case 16:
                _context17.next = 20;
                break;

              case 18:
                _context17.prev = 18;
                _context17.t0 = _context17["catch"](3);

              case 20:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this, [[3, 18]]);
      }));

      function autoFillPageObjects(_x10) {
        return _autoFillPageObjects2.apply(this, arguments);
      }

      return autoFillPageObjects;
    }()
  }, {
    key: "uploadFile",
    value: function () {
      var _uploadFile = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee18(event) {
        var fileReader;
        return regeneratorRuntime.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                this.selectedFile = event.target.files[0];
                fileReader = new filereader__WEBPACK_IMPORTED_MODULE_1___default.a();
                _context18.next = 4;
                return fileReader.readAsText(this.selectedFile, 'UTF-8');

              case 4:
                fileReader.onload = function () {};

                fileReader.onerror = function (error) {};

              case 6:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function uploadFile(_x11) {
        return _uploadFile.apply(this, arguments);
      }

      return uploadFile;
    }()
  }, {
    key: "renderSomething",
    value: function renderSomething() {
      if (this.state.renderSomething !== 'false') {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Input"], {
          placeholder: "Page name",
          name: "pagename",
          type: "input",
          onChange: this.handleInputChange
        });
      }

      this.state.toolSelectedPage = this.state.pagename;
    }
  }, {
    key: "renderGoTo",
    value: function renderGoTo() {
      if (this.state.leftCard === 'true') {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardHeader"], {
          color: "link",
          icon: "info",
          tag: "h5"
        }, "Target subpage", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
          className: "float-right",
          type: "switch",
          size: "sm",
          name: "leftCard",
          outline: true,
          color: "secondary",
          value: this.state.leftCard,
          onClick: this.toggleActiveCard
        }, "Switch")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardBody"], {
          style: {
            backgroundColor: 'Light'
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["InputGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["InputGroupAddon"], {
          addonType: "prepend"
        }, "@ Label\xA0\xA0\xA0\xA0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Input"], {
          placeholder: "Example: addProduct",
          name: "navname",
          type: "input",
          value: this.state.navname || '',
          onChange: this.handleInputChange
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["InputGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["InputGroupAddon"], {
          addonType: "prepend"
        }, "@ Selector"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Input"], {
          placeholder: "Example: element[attribute='selector']",
          name: "navnameselector",
          type: "input",
          value: this.state.navnameselector || '',
          onChange: this.handleInputChange
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpPageobjects__WEBPACK_IMPORTED_MODULE_3__["default"], {
          name: "A"
        }))));
      }
    }
  }, {
    key: "renderAction",
    value: function renderAction() {
      var _this2 = this;

      if (this.state.leftCard !== 'true') {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardHeader"], {
          color: "link",
          icon: "info",
          tag: "h5"
        }, "Target objects", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
          className: "float-right",
          type: "switch",
          size: "sm",
          name: "leftCard",
          outline: true,
          color: "secondary",
          value: this.state.leftCard,
          onClick: this.toggleActiveCard
        }, "Switch")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardBody"], {
          style: {
            backgroundColor: 'Light'
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
          onSubmit: this.handleSubmitPageObjectModel
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["InputGroup"], {
          style: {
            width: '100%'
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["InputGroupAddon"], {
          addonType: "prepend"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["InputGroupText"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Input"], {
          addon: true,
          type: "input",
          "aria-label": "type",
          value: this.state.typeName
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["InputGroupButtonDropdown"], {
          addonType: "prepend",
          isOpen: this.state.splitButtonOpen,
          toggle: this.toggleSplit
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["ButtonDropdown"], {
          isOpen: this.state.dropdownOpen,
          toggle: this.toggledropdown
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownToggle"], {
          caret: true
        }, "Choose Type"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownMenu"], null, this.state.types.map(function (e) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], {
            key: e.id,
            dataset: e.typeName,
            value: e.typeName,
            onClick: _this2.handleTypes
          }, e.typeName);
        }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["InputGroup"], {
          style: {
            width: '100%'
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["InputGroupAddon"], {
          addonType: "prepend"
        }, "@ Field\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Input"], {
          placeholder: "Example: Product Name",
          name: "objectname",
          type: "input",
          value: this.state.objectname,
          onChange: this.handleInputChange
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["InputGroup"], {
          style: {
            width: '100%'
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["InputGroupAddon"], {
          addonType: "prepend"
        }, "@ Selector\xA0\xA0\xA0\xA0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Input"], {
          placeholder: "Example #button1",
          name: "objectselector",
          type: "input",
          value: this.state.objectselector,
          onChange: this.handleInputChange
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["InputGroup"], {
          style: {
            width: '100%'
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["InputGroupAddon"], {
          addonType: "prepend"
        }, "@ Value\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Input"], {
          placeholder: "Don't use if not necessary, target will be overridden by the target object variables.",
          name: "objectvalue",
          type: "input",
          value: this.state.objectvalue,
          onChange: this.handleInputChange
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpPageobjects__WEBPACK_IMPORTED_MODULE_3__["default"], {
          name: "B"
        }))));
      }
    }
  }, {
    key: "renderGoToTest",
    value: function renderGoToTest(prop) {
      if (this.state.leftCardTest === 'true') {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardHeader"], {
          color: "link",
          icon: "info",
          tag: "h5"
        }, "Target subpage", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
          className: "float-right",
          type: "switch",
          size: "sm",
          name: "leftCardTest",
          outline: true,
          color: "secondary",
          value: this.state.leftCardTest,
          onClick: this.toggleActiveCardTest
        }, "Switch")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardBody"], {
          style: {
            backgroundColor: 'Light'
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_teststructurenavitems__WEBPACK_IMPORTED_MODULE_13__["Teststructurenavitems"], {
          url: this.state.url,
          navItems: this.state.navItems,
          handlerFromParent: this.handleNavItems
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helptestobjectsactions__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)));
      }
    }
  }, {
    key: "renderActionTest",
    value: function renderActionTest(prop) {
      if (this.state.leftCardTest !== 'true') {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardHeader"], {
          color: "link",
          icon: "info",
          tag: "h5"
        }, "Target object variables", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
          className: "float-right",
          type: "switch",
          size: "sm",
          name: "leftCardTest",
          outline: true,
          color: "secondary",
          value: this.state.leftCardTest,
          onClick: this.toggleActiveCardTest
        }, "Switch")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardBody"], {
          style: {
            backgroundColor: 'Light'
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["InputGroup"], {
          style: {
            width: '100%'
          }
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["InputGroup"], {
          style: {
            width: '100%',
            padding: '10px'
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_teststructurepageobjects__WEBPACK_IMPORTED_MODULE_14__["TestStructurePageObjects"], {
          url: this.state.url,
          pageObjectsNames: this.state.pageObjectsNames,
          handlerFromParant: this.handlePageItems
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helptestobjectsgoto__WEBPACK_IMPORTED_MODULE_5__["default"], null)));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Frameworkstructure__WEBPACK_IMPORTED_MODULE_16__["HandleFramework"], {
        url: this.state.url,
        datasets: this.state.actions,
        handlerFromParant: this.handleData,
        name: "pagename"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Alert"], {
        color: "success",
        isOpen: this.state.visible,
        toggle: this.onDismiss,
        fade: true
      }, "Well done! You added property ", this.state.property, " with value ", this.state.value, " to ", this.state.name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Nav"], {
        tabs: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_15___default()({
          active: this.state.activeTab === '1'
        }),
        onClick: function onClick() {
          _this3.toggle('1');
        }
      }, "Start")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_15___default()({
          active: this.state.activeTab === '2'
        }),
        onClick: function onClick() {
          _this3.toggle('2');
        },
        disabled: !this.state.selectedPage
      }, "Target")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_15___default()({
          active: this.state.activeTab === '4'
        }),
        onClick: function onClick() {
          _this3.toggle('4');
        }
      }, "Target Input")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_15___default()({
          active: this.state.activeTab === '5'
        }),
        onClick: function onClick() {
          _this3.toggle('5');
        }
      }, "Cucumber"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["TabContent"], {
        activeTab: this.state.activeTab
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["TabPane"], {
        tabId: "2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        sm: "6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), this.renderGoTo(), this.renderAction(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        className: "btn btn-default",
        type: "submit",
        onClick: this.handleSubmitPageObjectModel
      }, "Save"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_scenariotable__WEBPACK_IMPORTED_MODULE_8__["default"], {
        url: this.state.url,
        dataset: this.state.pagename,
        columns: this.state.columns,
        updateTableFromParent: this.updateTableFromChild,
        shouldUpdateTable: this.state.shouldUpdateTable
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["TabPane"], {
        tabId: "1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        sm: "6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardHeader"], {
        tag: "h5"
      }, "Page"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardBody"], {
        style: {
          backgroundColor: 'Light'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["InputGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Input"], {
        addon: true,
        type: "",
        "aria-label": "type",
        name: "url",
        value: this.state.url,
        onChange: this.handleInputChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        className: "float-right",
        type: "switch",
        value: this.state.url,
        outline: true,
        color: "secondary",
        onClick: this.update
      }, "Submit")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Scenariostructure__WEBPACK_IMPORTED_MODULE_10__["Scenariostructure"], {
        url: this.state.url,
        datasets: this.state.actions,
        handlerFromParant: this.handleData,
        handlerFromParant1: this.handleTabFromChild,
        name: "pagename",
        handlerFromParent2: this.updateTable
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["InputGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["InputGroupAddon"], {
        addonType: "prepend"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["InputGroupText"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        className: "btn btn-default",
        name: "renderSomething",
        value: "true",
        onClick: this.handleInputChange,
        type: "submit"
      }, "Add"), this.renderSomething()))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helppage__WEBPACK_IMPORTED_MODULE_17__["default"], {
        name: "E"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        className: "btn btn-default",
        name: "activeTab",
        value: "2",
        onClick: this.handleInputChange,
        type: "submit"
      }, "Submit")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["TabPane"], {
        tabId: "4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        sm: "6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), this.renderGoToTest('C'), this.renderActionTest('D')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        className: "btn btn-default",
        color: "warning",
        type: "submit",
        onClick: this.autoFillObjects
      }, "Autofill"), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        className: "btn btn-default",
        type: "submit",
        onClick: this.handleSubmitTest
      }, "Save"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_scenariotabletests__WEBPACK_IMPORTED_MODULE_9__["default"], {
        url: this.state.url,
        dataset: this.state.pagename,
        columns: this.state.columnstests,
        updateTableFromParent: this.updateTableFromChild,
        shouldUpdateTable: this.state.shouldUpdateTable
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["TabPane"], {
        tabId: "3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_structure__WEBPACK_IMPORTED_MODULE_11__["Structure"], {
        url: this.state.url,
        datasets: this.state.actions,
        handlerFromParant: this.handleData,
        name: "pagename"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["TabPane"], {
        tabId: "5"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_structuretest__WEBPACK_IMPORTED_MODULE_12__["StructureTest"], {
        url: this.state.url,
        datasets: this.state.actions,
        handlerFromParant: this.handleData,
        name: "pagename"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null));
    }
  }]);

  return Main;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./src/front/pages/about/index.js":
/*!****************************************!*\
  !*** ./src/front/pages/about/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recompose/compose */ "./node_modules/recompose/compose.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recompose_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./About */ "./src/front/pages/about/About.js");
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


/* harmony default export */ __webpack_exports__["default"] = (recompose_compose__WEBPACK_IMPORTED_MODULE_2___default()(Object(_hoc_withEnterAnimation__WEBPACK_IMPORTED_MODULE_4__["default"])(), Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps))(_About__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./src/front/pages/about/scenariotable.js":
/*!************************************************!*\
  !*** ./src/front/pages/about/scenariotable.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _services_API_FetchServerData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/API/FetchServerData */ "./src/front/services/API/FetchServerData.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
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






var Scenariotable =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Scenariotable, _React$Component);

  function Scenariotable(props) {
    var _this;

    _classCallCheck(this, Scenariotable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Scenariotable).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "inputChangedHandler", function (event) {
      var updatedKeyword = event.target.value;
    });

    _this.inputChangedHandler = _this.inputChangedHandler.bind(_assertThisInitialized(_this));
    _this.removeRowOrPopUp = _this.removeRowOrPopUp.bind(_assertThisInitialized(_this));
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    _this.renderPopUpEdit = _this.renderPopUpEdit.bind(_assertThisInitialized(_this));
    _this.togglePopup = _this.togglePopup.bind(_assertThisInitialized(_this));
    _this.togglePopupAndSave = _this.togglePopupAndSave.bind(_assertThisInitialized(_this));
    _this.update = _this.update.bind(_assertThisInitialized(_this));
    _this.updateFinshed = _this.updateFinshed.bind(_assertThisInitialized(_this));
    _this.toggleSplit = _this.toggleSplit.bind(_assertThisInitialized(_this));
    _this.toggledropdown = _this.toggledropdown.bind(_assertThisInitialized(_this));
    _this.handleTypes = _this.handleTypes.bind(_assertThisInitialized(_this));
    _this.state = {
      scenarios: [],
      type: '',
      seconds: 0,
      diagramUpdateFlag: false,
      dropdownOpen: false,
      splitButtonOpen: false,
      modal: false,
      setModal: false,
      data: '',
      shouldUpdateTable: false,
      types: [{
        id: 1,
        type: 'input(id)'
      }, {
        id: 2,
        type: 'input(class)'
      }, {
        id: 3,
        type: 'input(css)'
      }, {
        id: 4,
        type: 'input(name)'
      }, {
        id: 5,
        type: 'input(xpath)'
      }, {
        id: 6,
        type: 'button(id)'
      }, {
        id: 7,
        type: 'button(class)'
      }, {
        id: 8,
        type: 'button(css)'
      }, {
        id: 9,
        type: 'button(name)'
      }, {
        id: 10,
        type: 'button(xpath)'
      }, {
        id: 11,
        type: 'validateInput(id)'
      }, {
        id: 13,
        type: 'validateButton(id)'
      }, {
        id: 14,
        type: 'checkBox(id)'
      }, {
        id: 15,
        type: 'option(id)'
      }, {
        id: 16,
        type: 'input(column,row)'
      }, {
        id: 17,
        type: 'validate(column,row)'
      }, {
        id: 18,
        type: 'doubleClick(id)'
      }, {
        id: 19,
        type: 'dropDown(id)'
      }, {
        id: 20,
        type: 'datePicker(id)'
      }]
    };
    return _this;
  }

  _createClass(Scenariotable, [{
    key: "componentDidUpdate",
    value: function () {
      var _componentDidUpdate = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this.props.shouldUpdateTable) {
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return this.update(true);

              case 3:
                _context.next = 5;
                return this.update(false);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidUpdate() {
        return _componentDidUpdate.apply(this, arguments);
      }

      return componentDidUpdate;
    }()
  }, {
    key: "handleTypes",
    value: function () {
      var _handleTypes = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(event) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.setState({
                  type: event.target.value
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function handleTypes(_x) {
        return _handleTypes.apply(this, arguments);
      }

      return handleTypes;
    }()
  }, {
    key: "updateFinshed",
    value: function () {
      var _updateFinshed = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(evt) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                evt.preventDefault();
                _context3.next = 3;
                return this.props.updateTableFromParent(false);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function updateFinshed(_x2) {
        return _updateFinshed.apply(this, arguments);
      }

      return updateFinshed;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(state) {
        var data;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!(state === true)) {
                  _context4.next = 10;
                  break;
                }

                if (!(this.props.dataset !== '')) {
                  _context4.next = 10;
                  break;
                }

                _context4.next = 4;
                return Object(_services_API_FetchServerData__WEBPACK_IMPORTED_MODULE_2__["getAllScenariosByName"])(this.props.url, this.props.dataset, false);

              case 4:
                data = _context4.sent;
                this.setState({
                  scenarios: data
                });
                _context4.next = 8;
                return this.props.updateTableFromParent(false);

              case 8:
                _context4.next = 10;
                break;

              case 10:
                return _context4.abrupt("return", true);

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function update(_x3) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "togglePopup",
    value: function () {
      var _togglePopup = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(event) {
        var scenario;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                console.log(event.target.value);
                this.setState({
                  modal: !this.state.modal,
                  id: event.target.value
                });
                _context5.next = 4;
                return Object(_services_API_FetchServerData__WEBPACK_IMPORTED_MODULE_2__["getById"])(this.props.url, event.target.value);

              case 4:
                scenario = _context5.sent;
                this.setState({
                  pagename: scenario.pagename,
                  navname: scenario.navname,
                  navnameselector: scenario.navnameselector,
                  fieldname: scenario.fieldname,
                  selector: scenario.selector,
                  type: scenario.type,
                  value: scenario.value
                });

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function togglePopup(_x4) {
        return _togglePopup.apply(this, arguments);
      }

      return togglePopup;
    }()
  }, {
    key: "togglePopupAndSave",
    value: function () {
      var _togglePopupAndSave = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(event) {
        var data;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                data = {
                  id: this.state.id,
                  istest: 'false',
                  pagename: this.state.pagename,
                  navname: this.state.navname,
                  navnameselector: this.state.navnameselector,
                  fieldname: this.state.fieldname,
                  selector: this.state.selector,
                  type: this.state.type,
                  value: this.state.value
                };
                _context6.next = 3;
                return Object(_services_API_FetchServerData__WEBPACK_IMPORTED_MODULE_2__["editScenario"])(this.props.url, event.target.value, data);

              case 3:
                _context6.next = 5;
                return this.update(true);

              case 5:
                this.setState({
                  modal: false
                });

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function togglePopupAndSave(_x5) {
        return _togglePopupAndSave.apply(this, arguments);
      }

      return togglePopupAndSave;
    }()
  }, {
    key: "removeRowOrPopUp",
    value: function () {
      var _removeRowOrPopUp = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee7(event) {
        var data;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return Object(_services_API_FetchServerData__WEBPACK_IMPORTED_MODULE_2__["deleteScenario"])(this.props.url, event.target.value);

              case 2:
                data = _context7.sent;
                _context7.next = 5;
                return this.update(true);

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function removeRowOrPopUp(_x6) {
        return _removeRowOrPopUp.apply(this, arguments);
      }

      return removeRowOrPopUp;
    }()
  }, {
    key: "toggledropdown",
    value: function toggledropdown(event) {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }
  }, {
    key: "toggleSplit",
    value: function toggleSplit() {
      this.setState({
        splitButtonOpen: !this.state.splitButtonOpen
      });
    }
  }, {
    key: "handleInputChange",
    value: function handleInputChange(event) {
      var target = event.target;
      var value = target.type === 'checkbox' ? target.checked : target.value;
      var name = target.name;
      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: "renderPopUpEdit",
    value: function renderPopUpEdit(p) {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        color: "warning",
        size: "sm",
        value: p.id,
        onClick: this.togglePopup
      }, "Edit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        value: p.id,
        onClick: this.removeRowOrPopUp
      }, "Remove"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
        isOpen: this.state.modal,
        fade: false,
        toggle: this.togglePopup,
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default.a
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalHeader"], {
        toggle: this.togglePopup
      }, "Edit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], {
        style: {
          width: '100%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroupAddon"], {
        addonType: "prepend"
      }, "@ PageName"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        placeholder: this.state.pagename,
        value: this.state.pagename,
        name: "pagename",
        type: "input",
        onChange: this.handleInputChange
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], {
        style: {
          width: '100%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroupAddon"], {
        addonType: "prepend"
      }, "@ SubPageName"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        placeholder: this.state.navname,
        value: this.state.navname,
        name: "navname",
        type: "input",
        onChange: this.handleInputChange
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], {
        style: {
          width: '100%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroupAddon"], {
        addonType: "prepend"
      }, "@ SubPageSelector"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        placeholder: this.state.navnameselector,
        value: this.state.navnameselector,
        name: "navnameselector",
        type: "input",
        onChange: this.handleInputChange
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], {
        style: {
          width: '100%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroupAddon"], {
        addonType: "prepend"
      }, "@ FieldName"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        placeholder: this.state.fieldname,
        name: "fieldname",
        value: this.state.fieldname,
        type: "input",
        onChange: this.handleInputChange
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], {
        style: {
          width: '100%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroupAddon"], {
        addonType: "prepend"
      }, "@ Selector"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        placeholder: this.state.selector,
        name: "selector",
        value: this.state.selector,
        type: "input",
        onChange: this.handleInputChange
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], {
        style: {
          width: '100%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroupAddon"], {
        addonType: "prepend"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroupText"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        addon: true,
        type: "input",
        "aria-label": "type",
        value: this.state.type
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroupButtonDropdown"], {
        addonType: "prepend",
        isOpen: this.state.splitButtonOpen,
        toggle: this.toggleSplit
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ButtonDropdown"], {
        isOpen: this.state.dropdownOpen,
        toggle: this.toggledropdown
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownToggle"], {
        caret: true
      }, "Choose Type"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownMenu"], null, this.state.types.map(function (e) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], {
          key: e.id,
          dataset: e.type,
          value: e.type,
          onClick: _this2.handleTypes
        }, e.type);
      }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], {
        style: {
          width: '100%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroupAddon"], {
        addonType: "prepend"
      }, "@ Value"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        placeholder: this.state.value,
        name: "value",
        value: this.state.value,
        type: "input",
        onChange: this.handleInputChange
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalFooter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        color: "warning",
        value: p.id,
        onClick: this.togglePopupAndSave
      }, "Save"), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        color: "secondary",
        onClick: this.togglePopup
      }, "Cancel"))));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
        striped: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        value: this.state.keyword,
        onChange: function onChange(event) {
          return _this3.handleInputChange(event);
        }
      }, this.props.columns.map(function (p, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
          key: index
        }, p);
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, this.state.scenarios.map(function (p, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          key: index
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, index), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, p.pagename), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, p.navname), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, p.navnameselector), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, p.fieldname), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, p.selector), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, p.type), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, p.value), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.renderPopUpEdit(p)));
      }.bind(this))));
    }
  }]);

  return Scenariotable;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Scenariotable);

/***/ }),

/***/ "./src/front/pages/about/scenariotabletests.js":
/*!*****************************************************!*\
  !*** ./src/front/pages/about/scenariotabletests.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _services_API_FetchServerData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/API/FetchServerData */ "./src/front/services/API/FetchServerData.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
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






var ScenarioTableTests =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ScenarioTableTests, _React$Component);

  function ScenarioTableTests(props) {
    var _this;

    _classCallCheck(this, ScenarioTableTests);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ScenarioTableTests).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "inputChangedHandler", function (event) {
      var updatedKeyword = event.target.value;
      console.log(updatedKeyword);
    });

    _this.inputChangedHandler = _this.inputChangedHandler.bind(_assertThisInitialized(_this));
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    _this.onSelectCustomerRequest = _this.onSelectCustomerRequest.bind(_assertThisInitialized(_this));
    _this.renderPopUpEdit = _this.renderPopUpEdit.bind(_assertThisInitialized(_this));
    _this.togglePopup = _this.togglePopup.bind(_assertThisInitialized(_this));
    _this.togglePopupAndSave = _this.togglePopupAndSave.bind(_assertThisInitialized(_this));
    _this.updateFinshed = _this.updateFinshed.bind(_assertThisInitialized(_this));
    _this.update = _this.update.bind(_assertThisInitialized(_this));
    _this.removeRowOrPopUp = _this.removeRowOrPopUp.bind(_assertThisInitialized(_this));
    _this.state = {
      scenarios: [],
      seconds: 0,
      diagramUpdateFlag: false,
      removeButton: 'test',
      tapped: false,
      shouldUpdateTable: false
    };
    return _this;
  }

  _createClass(ScenarioTableTests, [{
    key: "handleInputChange",
    value: function handleInputChange(event) {
      var target = event.target;
      var value = target.type === 'checkbox' ? target.checked : target.value;
      var name = target.name;
      this.setState(_defineProperty({}, name, value));
      console.log(name);
    }
  }, {
    key: "togglePopup",
    value: function () {
      var _togglePopup = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(event) {
        var scenario;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.setState({
                  modal: !this.state.modal
                });
                _context.next = 3;
                return Object(_services_API_FetchServerData__WEBPACK_IMPORTED_MODULE_2__["getById"])(this.props.url, event.target.value);

              case 3:
                scenario = _context.sent;
                this.setState({
                  pagename: scenario.pagename,
                  navname: scenario.navname,
                  navnameselector: scenario.navnameselector,
                  fieldname: scenario.fieldname,
                  selector: scenario.selector,
                  type: scenario.type,
                  value: scenario.value
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function togglePopup(_x) {
        return _togglePopup.apply(this, arguments);
      }

      return togglePopup;
    }()
  }, {
    key: "componentDidUpdate",
    value: function () {
      var _componentDidUpdate = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this.props.shouldUpdateTable) {
                  _context2.next = 5;
                  break;
                }

                _context2.next = 3;
                return this.update(true);

              case 3:
                _context2.next = 5;
                return this.update(false);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidUpdate() {
        return _componentDidUpdate.apply(this, arguments);
      }

      return componentDidUpdate;
    }()
  }, {
    key: "updateFinshed",
    value: function () {
      var _updateFinshed = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(evt) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                evt.preventDefault();
                _context3.next = 3;
                return this.props.updateTableFromParent(false);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function updateFinshed(_x2) {
        return _updateFinshed.apply(this, arguments);
      }

      return updateFinshed;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(state) {
        var data;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!(state === true)) {
                  _context4.next = 10;
                  break;
                }

                if (!(this.props.dataset !== '')) {
                  _context4.next = 10;
                  break;
                }

                _context4.next = 4;
                return Object(_services_API_FetchServerData__WEBPACK_IMPORTED_MODULE_2__["getAllScenariosByName"])(this.props.url, this.props.dataset, true);

              case 4:
                data = _context4.sent;
                this.setState({
                  scenarios: data
                });
                _context4.next = 8;
                return this.props.updateTableFromParent(false);

              case 8:
                _context4.next = 10;
                break;

              case 10:
                return _context4.abrupt("return", true);

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function update(_x3) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "togglePopup",
    value: function () {
      var _togglePopup2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(event) {
        var scenario;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.setState({
                  modal: !this.state.modal,
                  id: event.target.value
                });
                _context5.next = 3;
                return Object(_services_API_FetchServerData__WEBPACK_IMPORTED_MODULE_2__["getById"])(this.props.url, event.target.value);

              case 3:
                scenario = _context5.sent;
                this.setState({
                  pagename: scenario.pagename,
                  navname: scenario.navname,
                  navnameselector: scenario.navnameselector,
                  fieldname: scenario.fieldname,
                  selector: scenario.selector,
                  type: scenario.type,
                  value: scenario.value
                });

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function togglePopup(_x4) {
        return _togglePopup2.apply(this, arguments);
      }

      return togglePopup;
    }()
  }, {
    key: "togglePopupAndSave",
    value: function () {
      var _togglePopupAndSave = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(event) {
        var data;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                data = {
                  id: this.state.id,
                  istest: 'true',
                  pagename: this.state.pagename,
                  navname: this.state.navname,
                  navnameselector: this.state.navnameselector,
                  fieldname: this.state.fieldname,
                  selector: this.state.selector,
                  type: this.state.type,
                  value: this.state.value
                };
                console.log(data);
                _context6.next = 4;
                return Object(_services_API_FetchServerData__WEBPACK_IMPORTED_MODULE_2__["editScenario"])(this.props.url, event.target.value, data);

              case 4:
                _context6.next = 6;
                return this.update(true);

              case 6:
                this.setState({
                  modal: false
                });

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function togglePopupAndSave(_x5) {
        return _togglePopupAndSave.apply(this, arguments);
      }

      return togglePopupAndSave;
    }()
  }, {
    key: "removeRowOrPopUp",
    value: function () {
      var _removeRowOrPopUp = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee7(event) {
        var data;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return Object(_services_API_FetchServerData__WEBPACK_IMPORTED_MODULE_2__["deleteScenario"])(this.props.url, event.target.value);

              case 2:
                data = _context7.sent;
                _context7.next = 5;
                return this.update(true);

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function removeRowOrPopUp(_x6) {
        return _removeRowOrPopUp.apply(this, arguments);
      }

      return removeRowOrPopUp;
    }()
  }, {
    key: "renderPopUpEdit",
    value: function renderPopUpEdit(p) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        color: "warning",
        size: "sm",
        value: p.id,
        onClick: this.togglePopup
      }, "Edit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        value: p.id,
        onClick: this.removeRowOrPopUp
      }, "Remove"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
        isOpen: this.state.modal,
        fade: false,
        toggle: this.togglePopup,
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default.a
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalHeader"], {
        toggle: this.togglePopup
      }, "Edit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], {
        style: {
          width: '100%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroupAddon"], {
        addonType: "prepend"
      }, "@ PageName"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        placeholder: this.state.pagename,
        value: this.state.pagename,
        name: "pagename",
        type: "input",
        onChange: this.handleInputChange
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], {
        style: {
          width: '100%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroupAddon"], {
        addonType: "prepend"
      }, "@ SubPageName"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        placeholder: this.state.navname,
        value: this.state.navname,
        name: "navname",
        type: "input",
        onChange: this.handleInputChange
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], {
        style: {
          width: '100%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroupAddon"], {
        addonType: "prepend"
      }, "@ Value"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        placeholder: this.state.value,
        name: "value",
        value: this.state.value,
        type: "input",
        onChange: this.handleInputChange
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalFooter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        color: "warning",
        value: p.id,
        onClick: this.togglePopupAndSave
      }, "Save"), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        color: "secondary",
        onClick: this.togglePopup
      }, "Cancel"))));
    }
  }, {
    key: "onSelectCustomerRequest",
    value: function onSelectCustomerRequest(event) {
      console.log(event);
      var data = Object(_services_API_FetchServerData__WEBPACK_IMPORTED_MODULE_2__["deleteScenario"])(this.props.url, event.target.value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
        striped: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        value: this.state.keyword,
        onChange: function onChange(event) {
          return _this2.handleInputChange(event);
        }
      }, this.props.columns.map(function (p, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
          key: index
        }, p);
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, this.state.scenarios.map(function (p, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          key: index
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, index), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, p.navname), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, p.fieldname), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, p.value), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.renderPopUpEdit(p)));
      }.bind(this))));
    }
  }]);

  return ScenarioTableTests;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ScenarioTableTests);

/***/ })

}]);
//# sourceMappingURL=4.fd4e68f3c53f7e637fb5.js.map