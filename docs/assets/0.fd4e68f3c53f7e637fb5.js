(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

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

/***/ "./src/front/services/API/Api.js":
/*!***************************************!*\
  !*** ./src/front/services/API/Api.js ***!
  \***************************************/
/*! exports provided: loginUser, createUser, autoFillPageObjects, getAllScenariosByName, postScenarioData, getUniqueNames, getAllFrameworkDataByName, getNavItems, getFieldNames, getFrameWork, postScenarioData2, deleteScenario, getFrameworkObjects, getSharp, getFile, getCucumberTest, editScenario, getById, autoFill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUser", function() { return loginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUser", function() { return createUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoFillPageObjects", function() { return autoFillPageObjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllScenariosByName", function() { return getAllScenariosByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postScenarioData", function() { return postScenarioData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUniqueNames", function() { return getUniqueNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllFrameworkDataByName", function() { return getAllFrameworkDataByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNavItems", function() { return getNavItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFieldNames", function() { return getFieldNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFrameWork", function() { return getFrameWork; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postScenarioData2", function() { return postScenarioData2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteScenario", function() { return deleteScenario; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFrameworkObjects", function() { return getFrameworkObjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSharp", function() { return getSharp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFile", function() { return getFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCucumberTest", function() { return getCucumberTest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editScenario", function() { return editScenario; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getById", function() { return getById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoFill", function() { return autoFill; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// TODO: IP adresses
var fetch = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");



var base64 = __webpack_require__(/*! base-64 */ "./node_modules/base-64/base64.js");

var getAllScenariosByName =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(scenario, isTest) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", fetch('https://virtualizationtoolbackend.herokuapp.com/' + 'scenario/getAllScenariosByName/' + scenario + '/' + isTest, {
              headers: {
                'mode': 'cors',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + base64.encode(sessionStorage.getItem('USERNAME') + ':' + sessionStorage.getItem('PASSWORD'))
              }
            }).then(function (response) {
              return response.json();
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getAllScenariosByName(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var getSharp =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(scenario, isTest) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", fetch('https://virtualizationtoolbackend.herokuapp.com/' + 'scenario/getAllScenariosByName/' + scenario + '/' + isTest, {
              headers: {
                'mode': 'cors',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + base64.encode(sessionStorage.getItem('USERNAME') + ':' + sessionStorage.getItem('PASSWORD'))
              }
            }).then(function (response) {
              return response.json();
            }));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getSharp(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var getFile =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(filename) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", fetch('https://virtualizationtoolbackend.herokuapp.com/' + 'scenario/file/' + filename, {
              headers: {
                'mode': 'cors',
                'Content-Type': 'application/octet-stream',
                'Authorization': 'Basic ' + base64.encode(sessionStorage.getItem('USERNAME') + ':' + sessionStorage.getItem('PASSWORD'))
              }
            }).then(function (response) {
              return response.blob();
            }));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getFile(_x5) {
    return _ref3.apply(this, arguments);
  };
}();

var getUniqueNames =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(url) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", fetch('https://virtualizationtoolbackend.herokuapp.com/' + 'scenario/getUniqueNames', {
              headers: {
                'mode': 'cors',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + base64.encode(sessionStorage.getItem('USERNAME') + ':' + sessionStorage.getItem('PASSWORD'))
              }
            }).then(function (response) {
              return response.json();
            }));

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getUniqueNames(_x6) {
    return _ref4.apply(this, arguments);
  };
}();

var getNavItems =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(scenario, isTest) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", fetch('https://virtualizationtoolbackend.herokuapp.com/' + 'scenario/getNavItems/' + scenario + '/' + isTest, {
              headers: {
                'mode': 'cors',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + base64.encode(sessionStorage.getItem('USERNAME') + ':' + sessionStorage.getItem('PASSWORD'))
              }
            }).then(function (response) {
              return response.json();
            }));

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function getNavItems(_x7, _x8) {
    return _ref5.apply(this, arguments);
  };
}();

var getFieldNames =
/*#__PURE__*/
function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(scenario, isTest) {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            return _context6.abrupt("return", fetch('https://virtualizationtoolbackend.herokuapp.com/' + 'scenario/getFieldNames/' + scenario + '/' + isTest, {
              headers: {
                'mode': 'cors',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + base64.encode(sessionStorage.getItem('USERNAME') + ':' + sessionStorage.getItem('PASSWORD'))
              }
            }).then(function (response) {
              return response.json();
            }));

          case 1:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function getFieldNames(_x9, _x10) {
    return _ref6.apply(this, arguments);
  };
}();

var getFrameWork =
/*#__PURE__*/
function () {
  var _ref7 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee7(url) {
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            return _context7.abrupt("return", fetch('https://virtualizationtoolbackend.herokuapp.com/' + 'scenario/getFieldNames', {
              headers: {
                'mode': 'cors',
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Basic ' + base64.encode(sessionStorage.getItem('USERNAME') + ':' + sessionStorage.getItem('PASSWORD'))
              }
            }).then(function (response) {
              return response.json();
            }));

          case 1:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function getFrameWork(_x11) {
    return _ref7.apply(this, arguments);
  };
}();

var getById =
/*#__PURE__*/
function () {
  var _ref8 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee8(id) {
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            return _context8.abrupt("return", fetch('https://virtualizationtoolbackend.herokuapp.com/' + 'scenario/get/' + id, {
              headers: {
                'mode': 'cors',
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Basic ' + base64.encode(sessionStorage.getItem('USERNAME') + ':' + sessionStorage.getItem('PASSWORD'))
              }
            }).then(function (response) {
              return response.json();
            }));

          case 1:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function getById(_x12) {
    return _ref8.apply(this, arguments);
  };
}();

var postScenarioData =
/*#__PURE__*/
function () {
  var _ref9 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee9(scenario, isTest) {
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            return _context9.abrupt("return", fetch('https://virtualizationtoolbackend.herokuapp.com/' + 'scenario/getFramework/' + scenario + '/' + isTest, {
              method: 'GET',
              headers: {
                'mode': 'cors',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + base64.encode(sessionStorage.getItem('USERNAME') + ':' + sessionStorage.getItem('PASSWORD'))
              }
            }).then(function (response) {
              return response.json();
            }));

          case 1:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function postScenarioData(_x13, _x14) {
    return _ref9.apply(this, arguments);
  };
}();

var autoFill =
/*#__PURE__*/
function () {
  var _ref10 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee10(pageName) {
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            return _context10.abrupt("return", fetch('https://virtualizationtoolbackend.herokuapp.com/' + 'scenario/autofill/' + pageName, {
              method: 'GET',
              headers: {
                'mode': 'cors',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + base64.encode(sessionStorage.getItem('USERNAME') + ':' + sessionStorage.getItem('PASSWORD'))
              }
            }).then(function (response) {
              return response.json();
            }));

          case 1:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));

  return function autoFill(_x15) {
    return _ref10.apply(this, arguments);
  };
}();

var postScenarioData2 =
/*#__PURE__*/
function () {
  var _ref11 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee11(data) {
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            return _context11.abrupt("return", fetch('https://virtualizationtoolbackend.herokuapp.com/' + 'scenario/create', {
              method: 'POST',
              headers: {
                'mode': 'cors',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + base64.encode(sessionStorage.getItem('USERNAME') + ':' + sessionStorage.getItem('PASSWORD'))
              },
              body: JSON.stringify(data)
            }).then(function (response) {
              return response.json();
            }));

          case 1:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));

  return function postScenarioData2(_x16) {
    return _ref11.apply(this, arguments);
  };
}();

var autoFillPageObjects = function autoFillPageObjects(data) {
  var _method$headers$body = {
    method: 'POST',
    headers: {
      'mode': 'cors',
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + base64.encode(sessionStorage.getItem('USERNAME') + ':' + sessionStorage.getItem('PASSWORD'))
    },
    body: JSON.stringify(data)
  },
      _method$headers$body$ = _method$headers$body.timeout,
      timeout = _method$headers$body$ === void 0 ? 500000 : _method$headers$body$,
      rest = _objectWithoutProperties(_method$headers$body, ["timeout"]);

  console.log(JSON.stringify(data));

  if (rest.signal) {
    throw new Error('Signal not supported in timeoutable fetch');
  }

  var controller = new AbortController();
  var signal = controller.signal;
  return new Promise(function (resolve, reject) {
    var timer = setTimeout(function () {
      reject(new Error('Timeout for Promise'));
      controller.abort();
    }, timeout);
    fetch('https://virtualizationtoolbackend.herokuapp.com/' + 'scenario/autoFillPageObjects', _objectSpread({
      signal: signal
    }, rest))["finally"](function () {
      return clearTimeout(timer);
    }).then(resolve, reject);
  });
};

var createUser =
/*#__PURE__*/
function () {
  var _ref12 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee12(data) {
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            return _context12.abrupt("return", fetch('https://virtualizationtoolbackend.herokuapp.com/' + 'users', {
              method: 'POST',
              headers: {
                'mode': 'cors',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            }).then(function (response) {
              return response.json();
            }));

          case 1:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));

  return function createUser(_x17) {
    return _ref12.apply(this, arguments);
  };
}();

var loginUser = function loginUser(userName, passWord) {
  return fetch('https://virtualizationtoolbackend.herokuapp.com/' + 'users' + '/token', {
    method: 'POST',
    headers: {
      'mode': 'cors',
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + base64.encode(sessionStorage.getItem('USERNAME') + ':' + sessionStorage.getItem('PASSWORD'))
    }
  }).then(function (response) {
    return response.json();
  });
};

var editScenario =
/*#__PURE__*/
function () {
  var _ref13 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee13(id, data) {
    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            return _context13.abrupt("return", fetch('https://virtualizationtoolbackend.herokuapp.com/' + 'scenario/edit/' + id, {
              method: 'PUT',
              headers: {
                'mode': 'cors',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + base64.encode(sessionStorage.getItem('USERNAME') + ':' + sessionStorage.getItem('PASSWORD'))
              },
              body: JSON.stringify(data)
            }).then(function (response) {
              return response;
            }));

          case 1:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));

  return function editScenario(_x18, _x19) {
    return _ref13.apply(this, arguments);
  };
}();

var deleteScenario =
/*#__PURE__*/
function () {
  var _ref14 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee14(data) {
    return regeneratorRuntime.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            return _context14.abrupt("return", fetch('https://virtualizationtoolbackend.herokuapp.com/' + 'scenario/delete/' + data, {
              method: 'DELETE',
              headers: {
                'mode': 'cors',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + base64.encode(sessionStorage.getItem('USERNAME') + ':' + sessionStorage.getItem('PASSWORD'))
              }
            }).then(function (response) {
              return response;
            }));

          case 1:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  }));

  return function deleteScenario(_x20) {
    return _ref14.apply(this, arguments);
  };
}();

var getAllFrameworkDataByName =
/*#__PURE__*/
function () {
  var _ref15 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee15(framework) {
    return regeneratorRuntime.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            return _context15.abrupt("return", fetch('https://virtualizationtoolbackend.herokuapp.com/' + 'scenario/getAllFrameworkDataByName/' + framework + '', {
              headers: {
                'mode': 'cors',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + base64.encode(sessionStorage.getItem('USERNAME') + ':' + sessionStorage.getItem('PASSWORD'))
              }
            }).then(function (response) {
              return response.json();
            }));

          case 1:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15);
  }));

  return function getAllFrameworkDataByName(_x21) {
    return _ref15.apply(this, arguments);
  };
}();

var getFrameworkObjects =
/*#__PURE__*/
function () {
  var _ref16 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee16(frameworktype, scenario, isTest) {
    return regeneratorRuntime.wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            return _context16.abrupt("return", fetch('https://virtualizationtoolbackend.herokuapp.com/' + 'scenario/' + frameworktype + '/' + scenario + '/' + isTest, {
              headers: {
                'mode': 'cors',
                'Accept': 'application/json',
                'Content-Type': 'text/plain'
              }
            }).then(function (response) {
              return response.text();
            }));

          case 1:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16);
  }));

  return function getFrameworkObjects(_x22, _x23, _x24) {
    return _ref16.apply(this, arguments);
  };
}();

var getCucumberTest =
/*#__PURE__*/
function () {
  var _ref17 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee17(frameworktype, scenario, isTest) {
    return regeneratorRuntime.wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            return _context17.abrupt("return", fetch('https://virtualizationtoolbackend.herokuapp.com/' + 'scenario/' + frameworktype + '/' + scenario + '/' + isTest, {
              headers: {
                'mode': 'cors',
                'Accept': 'application/json',
                'Content-Type': 'text/plain',
                'Authorization': 'Basic ' + base64.encode(sessionStorage.getItem('USERNAME') + ':' + sessionStorage.getItem('PASSWORD'))
              }
            }).then(function (response) {
              return response.text();
            }));

          case 1:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17);
  }));

  return function getCucumberTest(_x25, _x26, _x27) {
    return _ref17.apply(this, arguments);
  };
}();



/***/ })

}]);
//# sourceMappingURL=0.fd4e68f3c53f7e637fb5.js.map