(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/front/components/sidebar/SideBar.js":
/*!*************************************************!*\
  !*** ./src/front/components/sidebar/SideBar.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _SubMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SubMenu */ "./src/front/components/sidebar/SubMenu.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");








var SideBar = function SideBar(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('sidebar', {
      'is-open': props.isOpen
    })
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sidebar-header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    color: "info",
    onClick: props.toggle,
    style: {
      color: '#313335'
    }
  }, "\xD7"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Menu")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "side-menu"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"], {
    vertical: true,
    className: "list-unstyled pb-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
    tag: react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"],
    to: '/about'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBriefcase"],
    className: "mr-2"
  }), "About")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
    tag: react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"],
    to: '/pages'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faImage"],
    className: "mr-2"
  }), "Portfolio")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
    tag: react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"],
    to: '/faq'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faQuestion"],
    className: "mr-2"
  }), "FAQ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
    tag: react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"],
    to: '/contact'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPaperPlane"],
    className: "mr-2"
  }), "Contact")))));
};

var submenus = [[{
  title: "Home 1",
  target: "Home-1"
}, {
  title: "Home 2",
  target: "Home-2"
}, {
  itle: "Home 3",
  target: "Home-3"
}], [{
  title: "Page 1",
  target: "Page-1"
}, {
  title: "Page 2",
  target: "Page-2"
}]];
/* harmony default export */ __webpack_exports__["default"] = (SideBar);

/***/ }),

/***/ "./src/front/components/sidebar/SubMenu.js":
/*!*************************************************!*\
  !*** ./src/front/components/sidebar/SubMenu.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var SubMenu = function SubMenu(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState2 = _slicedToArray(_useState, 2),
      collapsed = _useState2[0],
      setCollapsed = _useState2[1];

  var toggleNavbar = function toggleNavbar() {
    return setCollapsed(!collapsed);
  };

  var icon = props.icon,
      title = props.title,
      items = props.items;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
    onClick: toggleNavbar,
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
      'menu-open': !collapsed
    })
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: "dropdown-toggle"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: icon,
    className: "mr-2"
  }), title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Collapse"], {
    isOpen: !collapsed,
    navbar: true,
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('items-menu', {
      'mb-1': !collapsed
    })
  }, items.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
      key: index,
      className: "pl-4"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      tag: react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"],
      to: item.target
    }, item.title));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SubMenu);

/***/ }),

/***/ "./src/front/pages/login/CreateCucumberFile.js":
/*!*****************************************************!*\
  !*** ./src/front/pages/login/CreateCucumberFile.js ***!
  \*****************************************************/
/*! exports provided: CreateCucumberFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCucumberFile", function() { return CreateCucumberFile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _services_API_Api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/API/Api */ "./src/front/services/API/Api.js");
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





var CreateCucumberFile =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CreateCucumberFile, _React$Component);

  function CreateCucumberFile(props) {
    var _this;

    _classCallCheck(this, CreateCucumberFile);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CreateCucumberFile).call(this, props));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.state = {
      inputField: ''
    };
    _this.toggleSplit = _this.toggleSplit.bind(_assertThisInitialized(_this));
    _this.toggledropdown = _this.toggledropdown.bind(_assertThisInitialized(_this));
    _this.downLoadFramework = _this.downLoadFramework.bind(_assertThisInitialized(_this));
    _this.renderSomething = _this.renderSomething.bind(_assertThisInitialized(_this));
    _this.getSharpPageObjectModel = _this.getSharpPageObjectModel.bind(_assertThisInitialized(_this));
    _this.state = {
      dropDownValue: 'Select action',
      splitButtonOpen: false,
      dropdownOpen: false,
      datasetname: null,
      generatePage: 'Page Name',
      frameworkData: null,
      fadeIn: false,
      frameworkObjSharp: '',
      jsonObjSharp: '',
      frameworkData1: ''
    };
    return _this;
  }

  _createClass(CreateCucumberFile, [{
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
    key: "toggleSplit",
    value: function toggleSplit() {
      this.setState({
        splitButtonOpen: !this.state.splitButtonOpen
      });
    }
  }, {
    key: "downLoadFramework",
    value: function () {
      var _downLoadFramework = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_services_API_Api__WEBPACK_IMPORTED_MODULE_2__["getCucumberTest"])('createCucumberTest', this.state.generatePage, 'true');

              case 3:
                data = _context.sent;
                console.log(data);
                this.setState({
                  frameworkObjSharp: data
                });
                this.setState({
                  visible: false
                });
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 9]]);
      }));

      function downLoadFramework() {
        return _downLoadFramework.apply(this, arguments);
      }

      return downLoadFramework;
    }()
  }, {
    key: "getSharpPageObjectModel",
    value: function () {
      var _getSharpPageObjectModel = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var file, a;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                file = new Blob([document.getElementById('feature').value], {
                  type: 'text/plain'
                });
                a = document.createElement('a');
                a.href = URL.createObjectURL(file);
                a.setAttribute('download', this.state.generatePage + '.feature');
                a.click();
                return _context2.abrupt("return", a);

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 9]]);
      }));

      function getSharpPageObjectModel() {
        return _getSharpPageObjectModel.apply(this, arguments);
      }

      return getSharpPageObjectModel;
    }()
  }, {
    key: "renderSomething",
    value: function renderSomething() {
      if (this.state.frameworkData) {
        this.state.fadeIn = true;
        return this.state.frameworkData.map(function (item, i) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Toast"], {
            key: i
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ToastHeader"], null, item.navname), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ToastBody"], null, "Name: ", item.fieldname, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Type: ", item.type));
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: "6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], {
        tag: "h5"
      }, "Pages"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], {
        style: {
          backgroundColor: 'Light'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroupButtonDropdown"], {
        addonType: "prepend",
        isOpen: this.state.splitButtonOpen,
        toggle: this.toggleSplit
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ButtonDropdown"], {
        isOpen: this.state.dropdownOpen,
        toggle: this.toggledropdown
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownToggle"], {
        caret: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownMenu"], {
        "min-width": "100px",
        label: 'test'
      }, this.props.datasets.map(function (e) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], {
          key: e.id,
          dataset: e.pagename,
          value: e.pagename,
          onClick: _this2.handleChange
        }, e.pagename);
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        outline: true,
        type: "submit",
        onClick: this.downLoadFramework
      }, "Generate"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-3 bg-docs-transparent-grid my-2 rounded"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Fade"], {
        "in": this.state.fadeIn,
        tag: "h5",
        className: "mt-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
        color: "light"
      }, this.state.generatePage)), this.renderSomething()))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: "6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], {
        tag: "h5"
      }, "Results"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], {
        style: {
          backgroundColor: 'Light'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "textarea",
        rows: "30",
        name: "text",
        id: "feature",
        value: this.state.frameworkObjSharp
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: this.getSharpPageObjectModel,
        download: true
      }, "Download"))))));
    }
  }]);

  return CreateCucumberFile;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./src/front/pages/login/HeaderBar.js":
/*!********************************************!*\
  !*** ./src/front/pages/login/HeaderBar.js ***!
  \********************************************/
/*! exports provided: HandleFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandleFramework", function() { return HandleFramework; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
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

/***/ "./src/front/pages/login/Main.js":
/*!***************************************!*\
  !*** ./src/front/pages/login/Main.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var filereader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! filereader */ "./node_modules/filereader/FileReader.js");
/* harmony import */ var filereader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(filereader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TargetsSubPageHelp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TargetsSubPageHelp */ "./src/front/pages/login/TargetsSubPageHelp.js");
/* harmony import */ var _TargetInputSubPageHelp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TargetInputSubPageHelp */ "./src/front/pages/login/TargetInputSubPageHelp.js");
/* harmony import */ var _TargetsInputSubpageHelp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TargetsInputSubpageHelp */ "./src/front/pages/login/TargetsInputSubpageHelp.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _services_API_Api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/API/Api */ "./src/front/services/API/Api.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _TargetsTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TargetsTable */ "./src/front/pages/login/TargetsTable.js");
/* harmony import */ var _TargetsInputTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TargetsInputTable */ "./src/front/pages/login/TargetsInputTable.js");
/* harmony import */ var _TargetsMain__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./TargetsMain */ "./src/front/pages/login/TargetsMain.js");
/* harmony import */ var _CreateCucumberFile__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./CreateCucumberFile */ "./src/front/pages/login/CreateCucumberFile.js");
/* harmony import */ var _TargetInputSubPages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./TargetInputSubPages */ "./src/front/pages/login/TargetInputSubPages.js");
/* harmony import */ var _TargetObjects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./TargetObjects */ "./src/front/pages/login/TargetObjects.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _HeaderBar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./HeaderBar */ "./src/front/pages/login/HeaderBar.js");
/* harmony import */ var _TargetsMainHelp__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./TargetsMainHelp */ "./src/front/pages/login/TargetsMainHelp.js");
/* harmony import */ var _about_helpPageobjects__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../about/helpPageobjects */ "./src/front/pages/about/helpPageobjects.js");
/* harmony import */ var _about_teststructurenavitems__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../about/teststructurenavitems */ "./src/front/pages/about/teststructurenavitems.js");
/* harmony import */ var _about_helptestobjectsactions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../about/helptestobjectsactions */ "./src/front/pages/about/helptestobjectsactions.js");
/* harmony import */ var _about_teststructurepageobjects__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../about/teststructurepageobjects */ "./src/front/pages/about/teststructurepageobjects.js");
/* harmony import */ var _about_helptestobjectsgoto__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../about/helptestobjectsgoto */ "./src/front/pages/about/helptestobjectsgoto.js");
/* harmony import */ var _about_Scenariostructure__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../about/Scenariostructure */ "./src/front/pages/about/Scenariostructure.js");
/* harmony import */ var _about_helppage__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../about/helppage */ "./src/front/pages/about/helppage.js");
/* harmony import */ var _about_structure__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../about/structure */ "./src/front/pages/about/structure.js");
/* harmony import */ var _about_structuretest__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../about/structuretest */ "./src/front/pages/about/structuretest.js");
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
                return Object(_services_API_Api__WEBPACK_IMPORTED_MODULE_7__["getUniqueNames"])(this.state.url);

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
                return Object(_services_API_Api__WEBPACK_IMPORTED_MODULE_7__["getNavItems"])(this.state.pagename, 'false');

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
                return Object(_services_API_Api__WEBPACK_IMPORTED_MODULE_7__["getFieldNames"])(this.state.pagename, 'false');

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
                return Object(_services_API_Api__WEBPACK_IMPORTED_MODULE_7__["postScenarioData2"])({
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
                return Object(_services_API_Api__WEBPACK_IMPORTED_MODULE_7__["postScenarioData2"])({
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
                return Object(_services_API_Api__WEBPACK_IMPORTED_MODULE_7__["autoFill"])(this.state.pagename);

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
                return Object(_services_API_Api__WEBPACK_IMPORTED_MODULE_7__["autoFillPageObjects"])({
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
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Input"], {
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
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], {
          color: "link",
          icon: "info",
          tag: "h5"
        }, "Target subpage", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          className: "float-right",
          type: "switch",
          size: "sm",
          name: "leftCard",
          outline: true,
          color: "secondary",
          value: this.state.leftCard,
          onClick: this.toggleActiveCard
        }, "Switch")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardBody"], {
          style: {
            backgroundColor: 'Light'
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroupAddon"], {
          addonType: "prepend"
        }, "@ Label\xA0\xA0\xA0\xA0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Input"], {
          placeholder: "Example: addProduct",
          name: "navname",
          type: "input",
          value: this.state.navname || '',
          onChange: this.handleInputChange
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroupAddon"], {
          addonType: "prepend"
        }, "@ Selector"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Input"], {
          placeholder: "Example: element[attribute='selector']",
          name: "navnameselector",
          type: "input",
          value: this.state.navnameselector || '',
          onChange: this.handleInputChange
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_about_helpPageobjects__WEBPACK_IMPORTED_MODULE_18__["default"], {
          name: "A"
        }))));
      }
    }
  }, {
    key: "renderAction",
    value: function renderAction() {
      var _this2 = this;

      if (this.state.leftCard !== 'true') {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], {
          color: "link",
          icon: "info",
          tag: "h5"
        }, "Target objects", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          className: "float-right",
          type: "switch",
          size: "sm",
          name: "leftCard",
          outline: true,
          color: "secondary",
          value: this.state.leftCard,
          onClick: this.toggleActiveCard
        }, "Switch")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardBody"], {
          style: {
            backgroundColor: 'Light'
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
          onSubmit: this.handleSubmitPageObjectModel
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroup"], {
          style: {
            width: '100%'
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroupAddon"], {
          addonType: "prepend"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroupText"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Input"], {
          addon: true,
          type: "input",
          "aria-label": "type",
          value: this.state.typeName
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroupButtonDropdown"], {
          addonType: "prepend",
          isOpen: this.state.splitButtonOpen,
          toggle: this.toggleSplit
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["ButtonDropdown"], {
          isOpen: this.state.dropdownOpen,
          toggle: this.toggledropdown
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownToggle"], {
          caret: true
        }, "Choose Type"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownMenu"], null, this.state.types.map(function (e) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
            key: e.id,
            dataset: e.typeName,
            value: e.typeName,
            onClick: _this2.handleTypes
          }, e.typeName);
        }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroup"], {
          style: {
            width: '100%'
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroupAddon"], {
          addonType: "prepend"
        }, "@ Field\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Input"], {
          placeholder: "Example: Product Name",
          name: "objectname",
          type: "input",
          value: this.state.objectname,
          onChange: this.handleInputChange
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroup"], {
          style: {
            width: '100%'
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroupAddon"], {
          addonType: "prepend"
        }, "@ Selector\xA0\xA0\xA0\xA0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Input"], {
          placeholder: "Example #button1",
          name: "objectselector",
          type: "input",
          value: this.state.objectselector,
          onChange: this.handleInputChange
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroup"], {
          style: {
            width: '100%'
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroupAddon"], {
          addonType: "prepend"
        }, "@ Value\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Input"], {
          placeholder: "Don't use if not necessary, target will be overridden by the target object variables.",
          name: "objectvalue",
          type: "input",
          value: this.state.objectvalue,
          onChange: this.handleInputChange
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_about_helpPageobjects__WEBPACK_IMPORTED_MODULE_18__["default"], {
          name: "B"
        }))));
      }
    }
  }, {
    key: "renderGoToTest",
    value: function renderGoToTest(prop) {
      if (this.state.leftCardTest === 'true') {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], {
          color: "link",
          icon: "info",
          tag: "h5"
        }, "Target subpage", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          className: "float-right",
          type: "switch",
          size: "sm",
          name: "leftCardTest",
          outline: true,
          color: "secondary",
          value: this.state.leftCardTest,
          onClick: this.toggleActiveCardTest
        }, "Switch")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardBody"], {
          style: {
            backgroundColor: 'Light'
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_about_teststructurenavitems__WEBPACK_IMPORTED_MODULE_19__["Teststructurenavitems"], {
          navItems: this.state.navItems,
          handlerFromParent: this.handleNavItems
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_about_helptestobjectsactions__WEBPACK_IMPORTED_MODULE_20__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)));
      }
    }
  }, {
    key: "renderActionTest",
    value: function renderActionTest(prop) {
      if (this.state.leftCardTest !== 'true') {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], {
          color: "link",
          icon: "info",
          tag: "h5"
        }, "Target object variables", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          className: "float-right",
          type: "switch",
          size: "sm",
          name: "leftCardTest",
          outline: true,
          color: "secondary",
          value: this.state.leftCardTest,
          onClick: this.toggleActiveCardTest
        }, "Switch")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardBody"], {
          style: {
            backgroundColor: 'Light'
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroup"], {
          style: {
            width: '100%'
          }
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroup"], {
          style: {
            width: '100%',
            padding: '10px'
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_about_teststructurepageobjects__WEBPACK_IMPORTED_MODULE_21__["TestStructurePageObjects"], {
          pageObjectsNames: this.state.pageObjectsNames,
          handlerFromParant: this.handlePageItems
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_about_helptestobjectsgoto__WEBPACK_IMPORTED_MODULE_22__["default"], null)));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HeaderBar__WEBPACK_IMPORTED_MODULE_16__["HandleFramework"], {
        datasets: this.state.actions,
        handlerFromParant: this.handleData,
        name: "pagename"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Alert"], {
        color: "success",
        isOpen: this.state.visible,
        toggle: this.onDismiss,
        fade: true
      }, "Well done! You added property ", this.state.property, " with value ", this.state.value, " to ", this.state.name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Nav"], {
        tabs: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_15___default()({
          active: this.state.activeTab === '1'
        }),
        onClick: function onClick() {
          _this3.toggle('1');
        }
      }, "Start")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_15___default()({
          active: this.state.activeTab === '2'
        }),
        onClick: function onClick() {
          _this3.toggle('2');
        },
        disabled: !this.state.selectedPage
      }, "Target")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_15___default()({
          active: this.state.activeTab === '4'
        }),
        onClick: function onClick() {
          _this3.toggle('4');
        }
      }, "Target Input")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_15___default()({
          active: this.state.activeTab === '5'
        }),
        onClick: function onClick() {
          _this3.toggle('5');
        }
      }, "Cucumber"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["TabContent"], {
        activeTab: this.state.activeTab
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["TabPane"], {
        tabId: "2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        sm: "6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), this.renderGoTo(), this.renderAction(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        className: "btn btn-default",
        type: "submit",
        onClick: this.handleSubmitPageObjectModel
      }, "Save"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TargetsTable__WEBPACK_IMPORTED_MODULE_9__["default"], {
        dataset: this.state.pagename,
        columns: this.state.columns,
        updateTableFromParent: this.updateTableFromChild,
        shouldUpdateTable: this.state.shouldUpdateTable
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["TabPane"], {
        tabId: "1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        sm: "6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], {
        tag: "h5"
      }, "Page"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardBody"], {
        style: {
          backgroundColor: 'Light'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        addon: true,
        type: "",
        "aria-label": "type",
        name: "url",
        value: this.state.url,
        onChange: this.handleInputChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        className: "float-right",
        type: "switch",
        value: this.state.url,
        outline: true,
        color: "secondary",
        onClick: this.update
      }, "Submit")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_about_Scenariostructure__WEBPACK_IMPORTED_MODULE_23__["Scenariostructure"], {
        datasets: this.state.actions,
        handlerFromParant: this.handleData,
        handlerFromParant1: this.handleTabFromChild,
        name: "pagename",
        handlerFromParent2: this.updateTable
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroupAddon"], {
        addonType: "prepend"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroupText"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        className: "btn btn-default",
        name: "renderSomething",
        value: "true",
        onClick: this.handleInputChange,
        type: "submit"
      }, "Add"), this.renderSomething()))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_about_helppage__WEBPACK_IMPORTED_MODULE_24__["default"], {
        name: "E"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        className: "btn btn-default",
        name: "activeTab",
        value: "2",
        onClick: this.handleInputChange,
        type: "submit"
      }, "Submit")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["TabPane"], {
        tabId: "4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        sm: "6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), this.renderGoToTest('C'), this.renderActionTest('D')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        className: "btn btn-default",
        color: "warning",
        type: "submit",
        onClick: this.autoFillObjects
      }, "Autofill"), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        className: "btn btn-default",
        type: "submit",
        onClick: this.handleSubmitTest
      }, "Save"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TargetsInputTable__WEBPACK_IMPORTED_MODULE_10__["default"], {
        dataset: this.state.pagename,
        columns: this.state.columnstests,
        updateTableFromParent: this.updateTableFromChild,
        shouldUpdateTable: this.state.shouldUpdateTable
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["TabPane"], {
        tabId: "3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_about_structure__WEBPACK_IMPORTED_MODULE_25__["Structure"], {
        datasets: this.state.actions,
        handlerFromParant: this.handleData,
        name: "pagename"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["TabPane"], {
        tabId: "5"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_about_structuretest__WEBPACK_IMPORTED_MODULE_26__["StructureTest"], {
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

/***/ "./src/front/pages/login/TargetInputSubPageHelp.js":
/*!*********************************************************!*\
  !*** ./src/front/pages/login/TargetInputSubPageHelp.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _addproduct_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addproduct.png */ "./src/front/pages/login/addproduct.png");
/* harmony import */ var _addproduct_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_addproduct_png__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var TargetInputSubPageHelp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TargetInputSubPageHelp, _React$Component);

  function TargetInputSubPageHelp(props) {
    var _this;

    _classCallCheck(this, TargetInputSubPageHelp);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TargetInputSubPageHelp).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "renderPopoverGoTo", function () {
      var headerText = null;
      var bodyText = null;
      headerText = 'Target object variables';
      bodyText = 'Most webpages exists of a menu bars. The items in the menu bar are called pages. When we arrive on a page we have\n' + '            on most websites the possibility to add remove or modify items. In case of the image we can add products. In this setup we call those items nav items. In this box we enter this label name and the Xpath or Selector. Chrome supports different tools to find selectors. When you are finshed you can save it and switch to the action box';
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        id: "idHelpGoToTestActions",
        className: "float-right",
        size: "sm",
        outline: true,
        color: "secondary"
      }, "Help"), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["UncontrolledPopover"], {
        trigger: "focus",
        placement: "left",
        target: "idHelpGoToTestActions"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PopoverHeader"], null, headerText), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PopoverBody"], null, bodyText), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        width: "100%",
        height: "100px",
        src: _addproduct_png__WEBPACK_IMPORTED_MODULE_2___default.a,
        alt: "Logo"
      })));
    });

    _this.state = {};
    _this.renderPopoverGoTo = _this.renderPopoverGoTo.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TargetInputSubPageHelp, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.renderPopoverGoTo());
    }
  }]);

  return TargetInputSubPageHelp;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TargetInputSubPageHelp);

/***/ }),

/***/ "./src/front/pages/login/TargetInputSubPages.js":
/*!******************************************************!*\
  !*** ./src/front/pages/login/TargetInputSubPages.js ***!
  \******************************************************/
/*! exports provided: TargetInputSubPages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetInputSubPages", function() { return TargetInputSubPages; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var TargetInputSubPages =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TargetInputSubPages, _React$Component);

  function TargetInputSubPages(props) {
    var _this;

    _classCallCheck(this, TargetInputSubPages);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TargetInputSubPages).call(this, props));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.toggleSplit = _this.toggleSplit.bind(_assertThisInitialized(_this));
    _this.toggledropdown = _this.toggledropdown.bind(_assertThisInitialized(_this));
    _this.state = {
      dropDownValue: 'Select action',
      splitButtonOpen: false,
      dropdownOpen: false,
      datasetname: null,
      navObject: '',
      dropdownpageobjects: 'Navigation Label'
    };
    return _this;
  }

  _createClass(TargetInputSubPages, [{
    key: "handleChange",
    value: function handleChange(event) {
      event.preventDefault();
      var target = event.target;
      var value = target.type === 'checkbox' ? target.checked : target.value;
      var name = target.name;
      this.setState(_defineProperty({}, name, value));
      this.props.handlerFromParent(_defineProperty({}, name, value));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        inputFieldPageName: 'Navigation Name'
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
    key: "toggledropdown",
    value: function toggledropdown(event) {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], {
        style: {
          width: '100%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroupButtonDropdown"], {
        "min-width": "100%",
        addonType: "prepend",
        isOpen: this.state.splitButtonOpen,
        toggle: this.toggleSplit
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ButtonDropdown"], {
        isOpen: this.state.dropdownOpen,
        toggle: this.toggledropdown
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownToggle"], {
        split: true,
        outline: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownMenu"], {
        "min-width": "100%",
        label: 'test'
      }, this.props.navItems && this.props.navItems.map(function (e) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], {
          key: e.id,
          navitems: e.navname,
          value: e.navname,
          name: "dropdownpageobjects",
          onClick: _this2.handleChange
        }, e.navname);
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        addonType: "append",
        value: this.state.dropdownpageobjects
      }, this.state.dropdownpageobjects)));
    }
  }]);

  return TargetInputSubPages;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./src/front/pages/login/TargetObjects.js":
/*!************************************************!*\
  !*** ./src/front/pages/login/TargetObjects.js ***!
  \************************************************/
/*! exports provided: TargetObjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetObjects", function() { return TargetObjects; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var TargetObjects =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TargetObjects, _React$Component);

  function TargetObjects(props) {
    var _this;

    _classCallCheck(this, TargetObjects);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TargetObjects).call(this, props));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.toggleSplit = _this.toggleSplit.bind(_assertThisInitialized(_this));
    _this.toggledropdown = _this.toggledropdown.bind(_assertThisInitialized(_this));
    _this.state = {
      dropDownValue: 'Select action',
      splitButtonOpen: false,
      dropdownOpen: false,
      datasetname: null,
      inputDropDownPageObjects: '',
      dropDownPageObjects: '',
      pageObjectValue: '',
      dropDownFieldObjects: 'Select'
    };
    return _this;
  }

  _createClass(TargetObjects, [{
    key: "handleChange",
    value: function handleChange(event) {
      event.preventDefault();
      var target = event.target;
      var value = target.type === 'checkbox' ? target.checked : target.value;
      var name = target.name;
      this.setState(_defineProperty({}, name, value));
      this.props.handlerFromParant(_defineProperty({}, name, value));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        inputDropDownPageObjects: 'Field Label'
      });
      console.log(this.props);
    }
  }, {
    key: "toggleSplit",
    value: function toggleSplit() {
      this.setState({
        splitButtonOpen: !this.state.splitButtonOpen
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
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], {
        style: {
          width: '100%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroupButtonDropdown"], {
        addonType: "prepend",
        isOpen: this.state.splitButtonOpen,
        toggle: this.toggleSplit
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ButtonDropdown"], {
        isOpen: this.state.dropdownOpen,
        toggle: this.toggledropdown
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownToggle"], {
        split: true,
        outline: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownMenu"], {
        "min-width": "100%",
        label: 'test'
      }, this.props.pageObjectsNames.map(function (e) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], {
          key: e.id,
          navItems: e.fieldname,
          value: e.fieldname,
          name: "dropDownFieldObjects",
          onClick: _this2.handleChange
        }, e.fieldname);
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        addonType: "append",
        value: this.state.dropDownFieldObjects,
        name: "dropDownFieldObjects",
        onChange: this.handleChange
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], {
        style: {
          width: '100%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroupAddon"], {
        addonType: "prepend"
      }, "@ Value"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        placeholder: "value",
        name: "pageObjectValue",
        type: "input",
        onChange: this.handleChange
      })));
    }
  }]);

  return TargetObjects;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./src/front/pages/login/TargetsInputSubpageHelp.js":
/*!**********************************************************!*\
  !*** ./src/front/pages/login/TargetsInputSubpageHelp.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _inputfields_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inputfields.png */ "./src/front/pages/login/inputfields.png");
/* harmony import */ var _inputfields_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inputfields_png__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var TargetsInputSubpageHelp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TargetsInputSubpageHelp, _React$Component);

  function TargetsInputSubpageHelp(props) {
    var _this;

    _classCallCheck(this, TargetsInputSubpageHelp);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TargetsInputSubpageHelp).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "renderPopoverGoTo", function () {
      var headerText = null;
      var bodyText = null;
      headerText = 'Target subpages';
      bodyText = 'Under construction\n' + '            ';
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        id: "idHelpGoToTest",
        className: "float-right",
        size: "sm",
        outline: true,
        color: "secondary"
      }, "Help"), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["UncontrolledPopover"], {
        trigger: "focus",
        placement: "left",
        target: "idHelpGoToTest"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PopoverHeader"], null, headerText), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PopoverBody"], null, bodyText), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        width: "100%",
        height: "100px",
        src: _inputfields_png__WEBPACK_IMPORTED_MODULE_2___default.a,
        alt: "Logo"
      })));
    });

    _this.state = {
      ids: null
    };
    _this.renderPopoverGoTo = _this.renderPopoverGoTo.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TargetsInputSubpageHelp, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.renderPopoverGoTo());
    }
  }]);

  return TargetsInputSubpageHelp;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TargetsInputSubpageHelp);

/***/ }),

/***/ "./src/front/pages/login/TargetsInputTable.js":
/*!****************************************************!*\
  !*** ./src/front/pages/login/TargetsInputTable.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _services_API_Api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/API/Api */ "./src/front/services/API/Api.js");
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






var TargetsInputTable =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TargetsInputTable, _React$Component);

  function TargetsInputTable(props) {
    var _this;

    _classCallCheck(this, TargetsInputTable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TargetsInputTable).call(this, props));

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

  _createClass(TargetsInputTable, [{
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
                return Object(_services_API_Api__WEBPACK_IMPORTED_MODULE_2__["getById"])(event.target.value);

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
                return Object(_services_API_Api__WEBPACK_IMPORTED_MODULE_2__["getAllScenariosByName"])(this.props.dataset, true);

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
                return Object(_services_API_Api__WEBPACK_IMPORTED_MODULE_2__["getById"])(event.target.value);

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
                return Object(_services_API_Api__WEBPACK_IMPORTED_MODULE_2__["editScenario"])(event.target.value, data);

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
                return Object(_services_API_Api__WEBPACK_IMPORTED_MODULE_2__["deleteScenario"])(event.target.value);

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
      var data = Object(_services_API_Api__WEBPACK_IMPORTED_MODULE_2__["deleteScenario"])(event.target.value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.state.scenarios != null) {
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
    }
  }]);

  return TargetsInputTable;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TargetsInputTable);

/***/ }),

/***/ "./src/front/pages/login/TargetsMain.js":
/*!**********************************************!*\
  !*** ./src/front/pages/login/TargetsMain.js ***!
  \**********************************************/
/*! exports provided: TargetsMain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetsMain", function() { return TargetsMain; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var TargetsMain =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TargetsMain, _React$Component);

  function TargetsMain(props) {
    var _this;

    _classCallCheck(this, TargetsMain);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TargetsMain).call(this, props));
    _this.submitHandler = _this.submitHandler.bind(_assertThisInitialized(_this));
    _this.toggleSplit = _this.toggleSplit.bind(_assertThisInitialized(_this));
    _this.toggledropdown = _this.toggledropdown.bind(_assertThisInitialized(_this));
    _this.state = {
      dropDownValue: 'Select action',
      splitButtonOpen: false,
      dropdownOpen: false,
      datasetname: null,
      inputField: ''
    };
    return _this;
  }

  _createClass(TargetsMain, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        inputField: 'page'
      });
    }
  }, {
    key: "submitHandler",
    value: function submitHandler(evt) {
      evt.preventDefault();
      this.setState({
        inputField: evt.target.value
      });
      this.props.handlerFromParant(evt.target.value);
      this.props.handlerFromParant1('2');
      this.props.handlerFromParent2(true);
    }
  }, {
    key: "toggleSplit",
    value: function toggleSplit() {
      this.setState({
        splitButtonOpen: !this.state.splitButtonOpen
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
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], {
        style: {
          width: '100%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroupAddon"], {
        addonType: "prepend"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroupText"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroupButtonDropdown"], {
        addonType: "prepend",
        isOpen: this.state.splitButtonOpen,
        toggle: this.toggleSplit
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ButtonDropdown"], {
        isOpen: this.state.dropdownOpen,
        toggle: this.toggledropdown
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownToggle"], {
        caret: true,
        width: "300px"
      }, "Choose Page"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownMenu"], {
        "min-width": "300px",
        "max-width": "300px",
        label: 'test'
      }, this.props.datasets.map(function (e) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], {
          key: e.id,
          dataset: e.pagename,
          value: e.pagename,
          onClick: _this2.submitHandler
        }, e.pagename);
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        addon: true,
        type: "input",
        "aria-label": "type",
        value: this.state.inputField
      }))))));
    }
  }]);

  return TargetsMain;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./src/front/pages/login/TargetsMainHelp.js":
/*!**************************************************!*\
  !*** ./src/front/pages/login/TargetsMainHelp.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _addproduct_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addproduct.png */ "./src/front/pages/login/addproduct.png");
/* harmony import */ var _addproduct_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_addproduct_png__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var TargetsMainHelp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TargetsMainHelp, _React$Component);

  function TargetsMainHelp(_props) {
    var _this;

    _classCallCheck(this, TargetsMainHelp);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TargetsMainHelp).call(this, _props));

    _defineProperty(_assertThisInitialized(_this), "renderPopoverGoTo", function (props) {
      var headerText = null;
      var bodyText = null;

      if (typeof props !== 'undefined') {
        headerText = 'Global Settings';
        bodyText = 'Most websites have menu bars. The items in the menu bar are called pages. \n' + '            This block is for choosing or creating new pages. Click on submit to fill the page';
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          id: "idPage",
          className: "float-right",
          size: "sm",
          outline: true,
          color: "secondary"
        }, "Help"), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["UncontrolledPopover"], {
          trigger: "focus",
          placement: "left",
          target: "idPage"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PopoverHeader"], null, headerText), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PopoverBody"], null, bodyText), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          width: "100%",
          height: "100px",
          src: _addproduct_png__WEBPACK_IMPORTED_MODULE_2___default.a,
          alt: "Logo"
        })));
      }
    });

    _this.state = {};
    _this.renderPopoverGoTo = _this.renderPopoverGoTo.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TargetsMainHelp, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.renderPopoverGoTo(this.props.name));
    }
  }]);

  return TargetsMainHelp;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TargetsMainHelp);

/***/ }),

/***/ "./src/front/pages/login/TargetsSubPageHelp.js":
/*!*****************************************************!*\
  !*** ./src/front/pages/login/TargetsSubPageHelp.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _addproduct_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addproduct.png */ "./src/front/pages/login/addproduct.png");
/* harmony import */ var _addproduct_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_addproduct_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _inputfields_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inputfields.png */ "./src/front/pages/login/inputfields.png");
/* harmony import */ var _inputfields_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_inputfields_png__WEBPACK_IMPORTED_MODULE_3__);
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






var TargetsSubPageHelp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TargetsSubPageHelp, _React$Component);

  function TargetsSubPageHelp(_props) {
    var _this;

    _classCallCheck(this, TargetsSubPageHelp);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TargetsSubPageHelp).call(this, _props));

    _defineProperty(_assertThisInitialized(_this), "renderPopoverGoTo", function (props) {
      var headerText = null;
      var bodyText = null;

      if (typeof props !== 'undefined') {
        if (props === 'A') {
          headerText = 'Target subpages';
          bodyText = 'Most websites have menu bars. The items in the menu bar are called pages. When we arrive on a page we have\n' + '            on most websites the possibility to add remove or modify items. In case of the image we can add products. In this setup we call those items nav items. In this box we enter this label name and the Xpath or Selector. Chrome supports different tools to find selectors. When you are finshed you can save it and switch to the action box';
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
            id: "idHelpGoTo",
            className: "float-right",
            size: "sm",
            outline: true,
            color: "secondary"
          }, "Help"), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["UncontrolledPopover"], {
            trigger: "focus",
            placement: "left",
            target: "idHelpGoTo"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PopoverHeader"], null, headerText), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PopoverBody"], null, bodyText), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            width: "100%",
            height: "100px",
            src: _addproduct_png__WEBPACK_IMPORTED_MODULE_2___default.a,
            alt: "Logo"
          })));
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderPopoverActions", function (props) {
      var headerText = null;
      var bodyText = null;

      if (typeof props !== 'undefined') {
        if (props === 'B') {
          headerText = 'Target objects';
          bodyText = 'A page contains input fields, button etc. We call those items page objects.';
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
            id: "idHelpAction",
            className: "float-right",
            size: "sm",
            outline: true,
            color: "secondary"
          }, "Help"), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["UncontrolledPopover"], {
            trigger: "focus",
            placement: "left",
            target: "idHelpAction"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PopoverHeader"], null, headerText), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PopoverBody"], null, bodyText), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            width: "100%",
            height: "100px",
            src: _inputfields_png__WEBPACK_IMPORTED_MODULE_3___default.a,
            alt: "Logo"
          })));
        }
      }
    });

    _this.state = {
      ids: null
    };
    _this.renderPopoverGoTo = _this.renderPopoverGoTo.bind(_assertThisInitialized(_this));
    _this.renderPopoverActions = _this.renderPopoverActions.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TargetsSubPageHelp, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
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

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.renderPopoverGoTo(this.props.name), this.renderPopoverActions(this.props.name));
    }
  }]);

  return TargetsSubPageHelp;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TargetsSubPageHelp);

/***/ }),

/***/ "./src/front/pages/login/TargetsTable.js":
/*!***********************************************!*\
  !*** ./src/front/pages/login/TargetsTable.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _services_API_Api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/API/Api */ "./src/front/services/API/Api.js");
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






var TargetsTable =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TargetsTable, _React$Component);

  function TargetsTable(props) {
    var _this;

    _classCallCheck(this, TargetsTable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TargetsTable).call(this, props));

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

  _createClass(TargetsTable, [{
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
                return Object(_services_API_Api__WEBPACK_IMPORTED_MODULE_2__["getAllScenariosByName"])(this.props.dataset, false);

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
                return Object(_services_API_Api__WEBPACK_IMPORTED_MODULE_2__["getById"])(event.target.value);

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
                return Object(_services_API_Api__WEBPACK_IMPORTED_MODULE_2__["editScenario"])(event.target.value, data);

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
                return Object(_services_API_Api__WEBPACK_IMPORTED_MODULE_2__["deleteScenario"])(event.target.value);

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

  return TargetsTable;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TargetsTable);

/***/ }),

/***/ "./src/front/pages/login/addproduct.png":
/*!**********************************************!*\
  !*** ./src/front/pages/login/addproduct.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/front/pages/login/inputfields.png":
/*!***********************************************!*\
  !*** ./src/front/pages/login/inputfields.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/front/pages/protected/Protected.js":
/*!************************************************!*\
  !*** ./src/front/pages/protected/Protected.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.css */ "./src/front/pages/protected/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_sidebar_SideBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/sidebar/SideBar */ "./src/front/components/sidebar/SideBar.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _login_Main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login/Main */ "./src/front/pages/login/Main.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// #region imports






 // #endregion
// #region flow types

// #endregion
var Protected =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Protected, _PureComponent);

  function Protected(props) {
    var _this;

    _classCallCheck(this, Protected);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Protected).call(this, props));
    _this.toggleSideBar = _this.toggleSideBar.bind(_assertThisInitialized(_this));
    _this.toggleContent = _this.toggleContent.bind(_assertThisInitialized(_this));
    _this.state = {
      toggles: true,
      toggleC: true
    };
    return _this;
  }

  _createClass(Protected, [{
    key: "toggleSideBar",
    value: function toggleSideBar(event) {
      this.setState({
        toggleS: !this.state.toggleS
      });
    }
  }, {
    key: "toggleContent",
    value: function toggleContent(event) {
      this.setState({
        toggleC: !this.state.toggleC
      });
    } // #region lifecycle

  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "App wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: "2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_sidebar_SideBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
        toggle: this.toggleSideBar,
        isOpen: this.state.toggleS
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: "10"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_login_Main__WEBPACK_IMPORTED_MODULE_5__["default"], null)))));
    } // #endregion

  }]);

  return Protected;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (Protected);

/***/ }),

/***/ "./src/front/pages/protected/index.js":
/*!********************************************!*\
  !*** ./src/front/pages/protected/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recompose/compose */ "./node_modules/recompose/compose.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recompose_compose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Protected__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Protected */ "./src/front/pages/protected/Protected.js");
/* harmony import */ var _hoc_withEnterAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hoc/withEnterAnimation */ "./src/front/hoc/withEnterAnimation/index.js");
// #region imports


 // #endregion

/* harmony default export */ __webpack_exports__["default"] = (recompose_compose__WEBPACK_IMPORTED_MODULE_0___default()(Object(_hoc_withEnterAnimation__WEBPACK_IMPORTED_MODULE_2__["default"])())(_Protected__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ })

}]);
//# sourceMappingURL=2.fd4e68f3c53f7e637fb5.js.map