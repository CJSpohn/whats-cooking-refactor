/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* This is an example of using Sass, otherwise plain CSS works too*/\n", "",{"version":3,"sources":["webpack://./src/css/base.scss"],"names":[],"mappings":"AAAA,mEAAA","sourcesContent":["/* This is an example of using Sass, otherwise plain CSS works too*/\n// $primary-background: pink;\n//\n// body {\n//   background-color: $primary-background;\n// }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/styles.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/styles.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html, body {\n  background-color: #f8f4e7;\n  height: 100vh;\n  width: 100%; }\n\nbody {\n  box-sizing: border-box;\n  color: #f5ecec;\n  text-shadow: 1px 1px 0px #6d1111;\n  font-family: 'Open Sans', sans-serif;\n  margin: auto; }\n\nmain, .card-section-wrapper {\n  height: 100%;\n  width: 100%; }\n\n.add-button {\n  background-color: #a79c0e;\n  background-image: url(https://image.flaticon.com/icons/svg/32/32339.svg);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 90% 90%;\n  width: 12%; }\n\n.button-container {\n  display: flex;\n  align-items: center;\n  height: 50%;\n  width: 100%;\n  justify-content: space-evenly;\n  padding-top: 5%; }\n\n.button-wrapper {\n  height: 100%;\n  width: 30%;\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\n.card-button {\n  border: 1px solid #1a1919;\n  height: 29px;\n  margin: 3px; }\n  .card-button:hover {\n    background-color: #e7dcdc; }\n  .card-button:active {\n    background-color: #e07731; }\n\n.cook-button-container {\n  display: flex;\n  flex-direction: column; }\n\n.cook-recipe {\n  justify-content: center;\n  width: 15%;\n  flex-direction: column;\n  align-self: center; }\n\n.nav-button, .cook-recipe, figure {\n  background-color: #a79c0e;\n  border-radius: 1vh;\n  font-size: 100%;\n  margin: 1%;\n  padding: 2%;\n  display: flex; }\n  .nav-button:hover, .cook-recipe:hover, figure:hover {\n    background-color: #e7dcdc; }\n  .nav-button:active, .cook-recipe:active, figure:active {\n    background-color: #e07731; }\n\nh1 {\n  color: #111518;\n  text-shadow: 1px 1px 0px #6d1111;\n  font-size: 255%;\n  margin-top: 0;\n  margin-bottom: 0;\n  width: 30%; }\n\nh2 {\n  color: #6d1111;\n  font-size: 250%; }\n\n.error-message {\n  margin: 0px; }\n\n.success-text {\n  color: green;\n  display: flex;\n  justify-content: center;\n  font-size: 3vh; }\n\n.user-info {\n  font-size: 180%;\n  text-align: center;\n  width: 40%; }\n\n.add {\n  width: 5vh; }\n\n.all-cards {\n  display: grid;\n  grid-gap: 1% 3%;\n  grid-template-columns: repeat(4, 1fr);\n  margin: 4%; }\n\n.card {\n  background-color: #0c0c0c;\n  border-radius: 2vh;\n  padding: 4%;\n  width: 100%; }\n\n.card-header {\n  display: flex;\n  justify-content: space-between; }\n\n.card-picture {\n  margin: 10px 3% 8px 2.6%;\n  width: 94%; }\n  .card-picture:active {\n    border: 2px solid #1a1919; }\n  .card-picture:hover {\n    opacity: 0.5;\n    border: 2px solid #e7dcdc; }\n\n.all {\n  grid-gap: 0px;\n  grid-template-columns: repeat(1, 1fr); }\n\n.main-header {\n  background-color: #a79c0e;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: baseline;\n  padding: 1%;\n  height: 15vh; }\n\n.search-bar {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  padding-top: 1%; }\n\n.search-image {\n  height: 25px;\n  width: 25px; }\n\n.search-input {\n  font-size: 100%;\n  height: 7vh;\n  padding-left: 10px;\n  padding-top: 5px;\n  width: 30%; }\n\n.chef-logo {\n  width: 20px;\n  height: 20px; }\n\n.cookbook-active {\n  background-color: #e07731; }\n\n.favorite {\n  background-color: #a79c0e;\n  background-image: url(https://image.flaticon.com/icons/svg/149/149222.svg);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 90% 90%;\n  width: 12%; }\n\n.favorite-active {\n  background-image: url(https://image.flaticon.com/icons/svg/148/148841.svg);\n  background-repeat: no-repeat; }\n\nfigure {\n  cursor: none;\n  margin: 0%;\n  border-radius: 0;\n  padding: 1%;\n  display: flex;\n  align-items: center; }\n  figure:hover {\n    background-color: #a79c0e; }\n  figure:active {\n    background-color: #a79c0e; }\n\nimg {\n  cursor: pointer; }\n\n.pantry-list {\n  color: #1a1919;\n  margin: 0; }\n\n.all-recipe-info {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #f5ecec;\n  color: #0c0c0c;\n  margin: 0%;\n  margin-left: 5%;\n  margin-right: 5%;\n  padding: 1%; }\n\n.ingredients-list, .recipe-area {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 1%; }\n\n.recipe-container {\n  padding: 6%;\n  padding-top: 0; }\n\n.recipe-name {\n  display: block;\n  font-size: 150%;\n  text-align: center; }\n\n.hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n@media (max-width: 800px) {\n  .all-cards {\n    grid-gap: 0.5% 4%;\n    grid-template-columns: repeat(3, 1fr); }\n  .button-container {\n    flex-direction: column; }\n  .main-header {\n    height: 18vh; }\n  .search-input {\n    width: 50%; } }\n\n@media (max-width: 640px) {\n  .all-cards {\n    grid-gap: 0.5% 5%;\n    grid-template-columns: repeat(2, 1fr); }\n  .button-container {\n    flex-direction: column; }\n  .main-header {\n    height: 18vh; }\n  .search-input {\n    width: 80%; } }\n", "",{"version":3,"sources":["webpack://./src/css/styles.scss","webpack://./src/css/_variables.scss"],"names":[],"mappings":"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","sourcesContent":["@import './variables';\n\nhtml {\n  background-color: $mainColor;\n  height: 100vh;\n  width: 100%;\n}\n\nbody {\n  @extend html;\n  box-sizing: border-box;\n  color: $mainTextColor;\n  text-shadow: 1px 1px 0px $secondaryTextColor;\n  font-family: 'Open Sans', sans-serif;\n  margin: auto;\n}\n\nmain {\n  height: 100%;\n  width: 100%;\n}\n\n// ------- buttons -------- //\n\n.add-button {\n  background-color: $headerColor;\n  background-image: url(https://image.flaticon.com/icons/svg/32/32339.svg);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 90% 90%;\n  width: 12%;\n}\n\n.button-container {\n  display: flex;\n  align-items: center;\n  height: 50%;\n  width: 100%;\n  justify-content: space-evenly;\n  padding-top: 5%;\n}\n\n.button-wrapper {\n  height: 100%;\n  width: 30%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.card-button {\n  border: 1px solid $borderColor;\n  height: 29px;\n  margin: 3px;\n  &:hover {\n    background-color: $buttonHover;\n  };\n  &:active {\n    background-color: $buttonActive;\n  };\n}\n\n.cook-button-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.cook-recipe {\n  @extend .nav-button;\n  justify-content: center;\n  width: 15%;\n  flex-direction: column;\n  align-self: center;\n}\n\n.nav-button {\n  background-color: $headerColor;\n  border-radius: 1vh;\n  font-size: 100%;\n  margin: 1%;\n  padding: 2%;\n  display: flex;\n  &:hover {\n    background-color: $buttonHover;\n  };\n  &:active {\n    background-color: $buttonActive;\n  };\n}\n\n//------- text-------//\n\nh1 {\n  color: $headingTextColor;\n  text-shadow: 1px 1px 0px $secondaryTextColor;\n  font-size: 255%;\n  margin-top: 0;\n  margin-bottom: 0;\n  width: 30%;\n}\n\nh2 {\n  color: $secondaryTextColor;\n  font-size: 250%;\n}\n\n\n.error-message {\n  margin: 0px;\n}\n\n.success-text {\n  color: green;\n  display: flex;\n  justify-content: center;\n  font-size: 3vh;\n}\n\n.user-info {\n  font-size: 180%;\n  text-align: center;\n  width: 40%;\n}\n\n//-------- cards ---------//\n\n\n.add {\n  width: 5vh;\n}\n\n.all-cards {\n  display: grid;\n  grid-gap: 1% 3%;\n  grid-template-columns: repeat(4, 1fr);\n  margin: 4%;\n}\n\n.card {\n  background-color: $cardColor;\n  border-radius: 2vh;\n  padding: 4%;\n  width: 100%;\n}\n\n.card-header {\n  display: flex;\n  justify-content: space-between;\n}\n\n.card-picture {\n  margin: 10px 3% 8px 2.6%;\n  width: 94%;\n  &:active {\n    border: 2px solid $borderColor;\n  }\n  &:hover {\n    opacity: 0.5;\n    border: 2px solid $buttonHover;\n  }\n}\n\n.card-section-wrapper {\n  @extend main;\n}\n\n//----------sections --------//\n\n.all {\n  grid-gap: 0px;\n  grid-template-columns: repeat(1, 1fr);\n}\n\n.main-header {\n  background-color: $headerColor;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: baseline;\n  padding: 1%;\n  height: 15vh;\n}\n\n//----------search feature----------//\n\n.search-bar {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  padding-top: 1%;\n}\n\n.search-image {\n  height: 25px;\n  width: 25px;\n}\n\n.search-input {\n  font-size: 100%;\n  height: 7vh;\n  padding-left: 10px;\n  padding-top: 5px;\n  width: 30%;\n}\n\n//--------- images and icons -------//\n\n.chef-logo {\n  width: 20px;\n  height: 20px;\n}\n\n.cookbook-active {\n  background-color: $buttonActive;\n}\n\n.favorite {\n  background-color: $headerColor;\n  background-image: url(https://image.flaticon.com/icons/svg/149/149222.svg);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 90% 90%;\n  width: 12%;\n}\n\n.favorite-active {\n  background-image: url(https://image.flaticon.com/icons/svg/148/148841.svg);\n  background-repeat: no-repeat;\n}\n\nfigure {\n  @extend .nav-button;\n  cursor: none;\n  margin: 0%;\n  border-radius: 0;\n  padding: 1%;\n  display: flex;\n  align-items: center;\n  &:hover {\n    background-color: $headerColor;\n  };\n  &:active {\n    background-color: $headerColor;\n  };\n}\n\nimg {\n  cursor: pointer;\n}\n\n//---------- recipe and pantry info ----------//\n\n.pantry-list {\n  color: $borderColor;\n  margin: 0;\n}\n\n.all-recipe-info {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: $mainTextColor;\n  color: $cardColor;\n  margin: 0%;\n  margin-left: 5%;\n  margin-right: 5%;\n  padding: 1%;\n}\n\n.ingredients-list {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 1%;\n}\n\n.recipe-area {\n  @extend .ingredients-list;\n}\n\n.recipe-container {\n  padding: 6%;\n  padding-top: 0;\n}\n\n.recipe-name {\n  display: block;\n  font-size: 150%;\n  text-align: center;\n}\n\n//----------hidden--------//\n\n.hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n//-------media queries------//\n\n@media (max-width: 800px) {\n  .all-cards {\n    grid-gap: 0.5% 4%;\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  .button-container {\n    flex-direction: column;\n  }\n\n  .main-header {\n    height: 18vh;\n  }\n\n  .search-input {\n    width: 50%;\n  }\n}\n\n@media (max-width: 640px) {\n  .all-cards {\n    grid-gap: 0.5% 5%;\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  .button-container {\n    flex-direction: column;\n  }\n\n  .main-header {\n    height: 18vh;\n  }\n\n  .search-input {\n    width: 80%;\n  }\n}\n","$headerColor: #a79c0e;\n$buttonHover: #e7dcdc;\n$buttonActive: #e07731;\n$headingTextColor: #111518;\n$mainTextColor: #f5ecec;\n$secondaryTextColor: #6d1111;\n$cardColor: #0c0c0c;\n$mainColor: #f8f4e7;\n$borderColor: rgb(26, 25, 25);\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/cookbook.js":
/*!*************************!*\
  !*** ./src/cookbook.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Cookbook {
  constructor(data) {
    this.recipes = data;
  }

  findRecipe(searchText) {
    return this.recipes.filter(recipe => {
      return recipe.ingredients.find(ingredient => {
        return (ingredient.name.includes(searchText)) ||
        (recipe.name.includes(searchText))
      });
    })
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Cookbook);


/***/ }),

/***/ "./src/css/base.scss":
/*!***************************!*\
  !*** ./src/css/base.scss ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/css/styles.scss":
/*!*****************************!*\
  !*** ./src/css/styles.scss ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/styles.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/domUpdates.js":
/*!***************************!*\
  !*** ./src/domUpdates.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _recipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipe */ "./src/recipe.js");


let domUpdates = {

  greetUser(user) {
    const userName = document.querySelector('.user-name');
    const name = user.name.split(' ')[0] + ' ' + user.name.split(' ')[1][0];
    userName.innerHTML = name;
  },

  hideSearchBar() {
    document.querySelector('.search-bar').classList.add('hidden')
  },

  revealSearchBar() {
    document.querySelector('.search-bar').classList.remove('hidden')
  },

  //NAV BUTTONS
  determinePage(classList) {
    let error, selector;
    if (classList.contains('view-favorites')) {
      this.revealSearchBar();
      error = 'You have no favorites!';
      selector = '.fav-cl';
    } else if (classList.contains('view-cookbook')) {
      this.revealSearchBar();
      error = 'Your cookbook is empty!';
      selector = '.cook-cl';
    } else if (classList.contains('view-pantry')) {
      document.querySelector('.error-message').innerText = '';
      this.hideSearchBar();
      selector = '.pantry-cl';
    }
    return { error, selector }
  },

  displayPantry(itemsInPantry) {
    let pantryDisplay = document.querySelector('.ingredients-list');
    pantryDisplay.innerHTML += `
      <h2 class="recipe-heading">Items in Pantry</h2>`
    itemsInPantry.forEach(item => {
      pantryDisplay.innerHTML += `
          <p class="pantry-list">${item.name}: ${item.amount}</p>
        `
    })
  },

  hideRecipeDetails() {
    let missingIngredientsSection = document.querySelector('.ingredients-list');
    let recipeArea = document.querySelector('.recipe-area');
    missingIngredientsSection.innerHTML = '';
    recipeArea.innerHTML = '';
  },

  hideChefLogos() {
    const chefLogos = document.querySelectorAll('.chef-logo');
    chefLogos.forEach(logo => {
      logo.classList.add('hidden');
    })
  },

  clearError() {
    document.querySelector('.error-message').innerText = '';
  },

  //CARD DISPLAY
  drawCards(data, cardArea, user) {
    cardArea.innerHTML = '';
    data.forEach(recipe => {
      cardArea.insertAdjacentHTML('afterbegin', `
      <div id='${recipe.id}' class='card'>
        <header id='${recipe.id}' class='card-header'>
          <button id='${recipe.id}' aria-label='add-button' class='add-button cookbook${recipe.id} card-button'></button>
          <button id='${recipe.id}' aria-label='favorite-button' class='favorite favorite${recipe.id} card-button'></button>
        </header>
        <img id='${recipe.id}' tabindex='0' class='card-picture' src='${recipe.image}' alt='click to view recipe for ${recipe.name}'>
        <p id='${recipe.id}' class='recipe-name'>${recipe.name}</p>
      </div>`)
    });
    this.applyIconStatus(user);
  },

  applyIconStatus(user) {
    const favoriteIds = user.favoriteRecipes.map(recipe => recipe.id);
    const cookbookIds = user.recipesToCook.map(recipe => recipe.id);
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => {
      if (favoriteIds.includes(+card.id)) {
        document.querySelector(`.favorite${card.id}`).classList.add('favorite-active');
      }
      if (cookbookIds.includes(+card.id)) {
        document.querySelector(`.cookbook${card.id}`).classList.add('cookbook-active');
      }
    });
  },

  //CARD BUTTONS
  updateButtonStatus(user, cardArea, cookbook, event) {
    const { dataset, selector, active } = this.determineButton(event);
    const specificRecipe = this.getRecipe(cookbook, event);
    if (!event.target.classList.contains(active)) {
      user.saveRecipe(specificRecipe, dataset);
      this.clearError();
    } else {
      user.removeRecipe(specificRecipe, dataset);
      this.applyLiveChangeToPage(selector, dataset, cardArea, user);
    }
    event.target.classList.toggle(active);
  },

  determineButton(event) {
    let dataset, selector, active;
    if (event.target.classList.contains('add-button')) {
      dataset = 'recipesToCook';
      selector = '.cook-cl';
      active = 'cookbook-active';
    } else if (event.target.classList.contains('favorite')) {
      dataset = 'favoriteRecipes';
      selector = '.fav-cl';
      active = 'favorite-active';
    }
    return { dataset, selector, active };
  },

  applyLiveChangeToPage(selector, dataset, cardArea, user) {
    const chefLogo = document.querySelector(selector);
    if (!chefLogo.classList.contains('hidden')) {
      this.drawCards(user[dataset], cardArea, user);
    }
  },

  getRecipe(cookbook, event) {
    return cookbook.recipes.find(recipe => {
      if (recipe.id  === +(event.target.id)) {
        return recipe;
      }
    })
  },

  //RECIPE INFORMATION
  displayDirections(event, cookbook, ingredients, cardArea, pantry) {
    let newRecipeInfo = this.getRecipe(cookbook, event);
    let currentRecipe = new _recipe__WEBPACK_IMPORTED_MODULE_0__["default"](newRecipeInfo, ingredients);
    let recipeInformation = currentRecipe.calculateCostAndIngredients()
    let cost = recipeInformation.costCounter;
    let costInDollars = (cost / 100).toFixed(2);
    let ingredientsUsed = recipeInformation.ingredientsUsed;
    this.showRecipeInformation(cardArea, currentRecipe, costInDollars);
    this.populateIngredients(currentRecipe, ingredientsUsed);
    this.populateInstructions(currentRecipe);
    let missingIngredients = pantry.checkPantryForIngredients(currentRecipe);
    if (!missingIngredients.length) {
      this.revealCookButton();
    } else {
      this.displayMissingIngredients(missingIngredients);
    }
  },

  displayMissingIngredients(missingIngredients) {
    let missingIngredientsSection = document.querySelector('.ingredients-list');
    missingIngredients.forEach(ingredient => {
      missingIngredientsSection.innerHTML += `
        <p class="all-recipe-info">You will need ${ingredient.amount} ${ingredient.unit} of ${ingredient.ingredient}</p>
        `;
    })
  },

  revealCookButton() {
    let cookButton = document.querySelector('.cook-recipe');
    cookButton.classList.remove('hidden');
  },

  hideCookButton() {
    let cookButton = document.querySelector('.cook-recipe');
    cookButton.classList.add('hidden');
  },

  showSuccessMessage(message) {
    const successMessage = document.querySelector('.success-message');
    successMessage.classList.remove('hidden');
    successMessage.innerHTML = `
    <p class="success-text">${message}</p>
    `
  },

  hideSuccessMessage() {
    const successMessage = document.querySelector('.success-message');
    successMessage.innerHTML = '';
    successMessage.classList.add('hidden');
  },

  showRecipeInformation(cardArea, currentRecipe, costInDollars) {
    this.hideSearchBar();
    let recipeArea = document.querySelector('.recipe-area')
    recipeArea.innerHTML += `
      <h2 class="recipe-heading">${currentRecipe.name}</h2>
      <section class="all-recipe-info">
        <p class="cost recipe-info">This recipe will cost: $${costInDollars}</p>
        <p id="${currentRecipe.id}" class="ingredients recipe-info">You will need:</p>
        <ul class="ingredients-list"></ul>
        <p class="instructions recipe-info">Instructions:<p>
        <ol class="instructions-list"></ol>
      </section>
      `;
    cardArea.innerHTML = '';
  },

  populateIngredients(currentRecipe, ingredientsUsed) {
    let ingredientsDisplay = document.querySelector('.ingredients');
    currentRecipe.ingredients.forEach((ingredient, index) => {
      ingredientsDisplay.innerHTML += `
        <li>${ingredient.quantity.amount.toFixed(2)} ${ingredient.quantity.unit}
        ${ingredientsUsed[index]}</li>
      `
    })
  },

  populateInstructions(currentRecipe) {
    let ingredientsInstructions = document.querySelector('.instructions-list');
    currentRecipe.instructions.forEach(instruction => {
      ingredientsInstructions.innerHTML += `
      <li>${instruction.instruction}</li>
      `
    })
  }

}

/* harmony default export */ __webpack_exports__["default"] = (domUpdates);


/***/ }),

/***/ "./src/pantry.js":
/*!***********************!*\
  !*** ./src/pantry.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Pantry {
  constructor(userIngredients) {
    this.contents = userIngredients;
  }

  checkPantryForIngredients(recipe) {
    let ingredientsNeeded = [];
    recipe.ingredients.forEach(recipeIngredient => {
      let pantryIngredient = this.contents.find(pantryIngredient => pantryIngredient.ingredient === recipeIngredient.id)
      if (pantryIngredient) {
        if (pantryIngredient.amount < recipeIngredient.quantity.amount) {
          let amountNeeded = recipeIngredient.quantity.amount - pantryIngredient.amount;
          let ingredientName = recipe.ingredientsData.find(ingredient => ingredient.id === pantryIngredient.ingredient).name;
          ingredientsNeeded.push({
            ingredient: ingredientName,
            amount: +amountNeeded.toFixed(2),
            unit: recipeIngredient.quantity.unit
          })
        }
      } else {
        let ingredientName = recipe.ingredientsData.find(ingredient => ingredient.id === recipeIngredient.id).name;
        ingredientsNeeded.push({
          ingredient: ingredientName,
          amount: +recipeIngredient.quantity.amount.toFixed(2),
          unit: recipeIngredient.quantity.unit
        })
      }
    })
    return ingredientsNeeded;
  }

  getPantry(ingredients) {
    let pantryIngredients = [];
    this.contents.forEach(item => {
      let currentIngredient = ingredients.find(ingredient => ingredient.id === item.ingredient)
      pantryIngredients.push({name: currentIngredient.name, amount: item.amount})
    })
    return pantryIngredients;
  }

  findItemsToRemove(currentRecipe) {
    let itemsToRemove = currentRecipe.ingredients.map(ingredient => {
      return {
        id: ingredient.id,
        amount: Math.round(ingredient.quantity.amount * 100) / 100
      }
    })
    return itemsToRemove;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Pantry);


/***/ }),

/***/ "./src/recipe.js":
/*!***********************!*\
  !*** ./src/recipe.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Recipe {
  constructor(recipe, ingredientsData) {
    this.name = recipe.name;
    this.id = recipe.id;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
    this.tags = recipe.tags;
    this.ingredientsData = ingredientsData;
  }

  calculateCostAndIngredients() {
    let costCounter = 0;
    let ingredientsUsed = [];
    this.ingredients.forEach(ingredient => {
      this.ingredientsData.find(specificIngredient => {
        if (specificIngredient.id === ingredient.id) {
          costCounter += +(specificIngredient.estimatedCostInCents *
          ingredient.quantity.amount).toFixed(1);
          ingredientsUsed.push(specificIngredient.name)
        }
      })
    });
    return { costCounter, ingredientsUsed };
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Recipe);


/***/ }),

/***/ "./src/scripts.js":
/*!************************!*\
  !*** ./src/scripts.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/base.scss */ "./src/css/base.scss");
/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/styles.scss */ "./src/css/styles.scss");
/* harmony import */ var _domUpdates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domUpdates */ "./src/domUpdates.js");
/* harmony import */ var _pantry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pantry */ "./src/pantry.js");
/* harmony import */ var _recipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recipe */ "./src/recipe.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user */ "./src/user.js");
/* harmony import */ var _cookbook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cookbook */ "./src/cookbook.js");










const favButton = document.querySelector('.view-favorites');
const cookbookButton = document.querySelector('.view-cookbook');
const pantryButton = document.querySelector('.view-pantry');
const homeButton = document.querySelector('.home')
const cardArea = document.querySelector('.all-cards');
const searchInput = document.querySelector('.search-input');
const cookButton = document.querySelector('.cook-recipe');
let user, pantry, cookbook, ingredients;

const instantiateUser = (usersData) => {
  let userId = (Math.floor(Math.random() * 49) + 1);
  let newUser = usersData.find(user => {
    return user.id === Number(userId);
  });
  user = new _user__WEBPACK_IMPORTED_MODULE_5__["default"](userId, newUser.name, newUser.pantry);
  pantry = new _pantry__WEBPACK_IMPORTED_MODULE_3__["default"](newUser.pantry);
}

const updateUserPantry = (currentUserId, allUsers) => {
  const activeUser = allUsers.find(user => user.id === currentUserId);
  pantry = new _pantry__WEBPACK_IMPORTED_MODULE_3__["default"](activeUser.pantry)
}

const updateUserData = () => {
  fetch('http://localhost:3001/api/v1/users')
    .then(res => res.json())
    .then(data => updateUserPantry(user.id, data))
    .catch(err => _domUpdates__WEBPACK_IMPORTED_MODULE_2__["default"].showSuccessMessage('Oops! Something went wrong'));
}


const getData = () => {
  let usersPromise = fetch('http://localhost:3001/api/v1/users')
    .then(res => res.json());
  let recipesPromise = fetch('http://localhost:3001/api/v1/recipes')
    .then(res => res.json());
  let ingredientsPromise = fetch('http://localhost:3001/api/v1/ingredients')
    .then(res => res.json());

  Promise.all([usersPromise, recipesPromise, ingredientsPromise])
    .then(dataset => {
      instantiateUser(dataset[0]);
      cookbook = new _cookbook__WEBPACK_IMPORTED_MODULE_6__["default"](dataset[1]);
      ingredients = dataset[2];
      _domUpdates__WEBPACK_IMPORTED_MODULE_2__["default"].greetUser(user);
      _domUpdates__WEBPACK_IMPORTED_MODULE_2__["default"].drawCards(cookbook.recipes, cardArea, user);
    })
    .catch(err => _domUpdates__WEBPACK_IMPORTED_MODULE_2__["default"].showSuccessMessage('Oops! Something went wrong'));
}

const postData = (ingredientToRemove) => {
  let body = {
    userID: +`${user.id}`,
    ingredientID: +`${ingredientToRemove.id}`,
    ingredientModification: -`${ingredientToRemove.amount}`
  };
  return fetch('http://localhost:3001/api/v1/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body) }
  )
}

const onStartup = () => {
  getData();
}

const updatePantry = () => {
  let recipeId = document.querySelector('.ingredients').id;
  let recipeDisplayed = cookbook.recipes.find(recipe => +recipe.id === +recipeId);
  const currentRecipe = new _recipe__WEBPACK_IMPORTED_MODULE_4__["default"](recipeDisplayed, ingredients);
  const itemsToRemove = pantry.findItemsToRemove(currentRecipe);
  Promise.all(itemsToRemove.map(item => postData(item)))
    .then(response => {
      return Promise.all(response.map(res => res.json()))
    })
    .then(data => {
      _domUpdates__WEBPACK_IMPORTED_MODULE_2__["default"].showSuccessMessage('Your pantry has been updated!')
      updateUserData();
    })
    .catch(err => _domUpdates__WEBPACK_IMPORTED_MODULE_2__["default"].showSuccessMessage('You don\'t have enough ingredients!'))
  _domUpdates__WEBPACK_IMPORTED_MODULE_2__["default"].hideCookButton();
}

const goToHome = () => {
  _domUpdates__WEBPACK_IMPORTED_MODULE_2__["default"].hideChefLogos();
  _domUpdates__WEBPACK_IMPORTED_MODULE_2__["default"].hideSuccessMessage();
  _domUpdates__WEBPACK_IMPORTED_MODULE_2__["default"].revealSearchBar()
  document.querySelector('.home-cl').classList.remove('hidden');
  document.querySelector('.error-message').innerText = '';
  _domUpdates__WEBPACK_IMPORTED_MODULE_2__["default"].drawCards(cookbook.recipes, cardArea, user);
  _domUpdates__WEBPACK_IMPORTED_MODULE_2__["default"].hideRecipeDetails();
  _domUpdates__WEBPACK_IMPORTED_MODULE_2__["default"].hideCookButton();
}

const changePage = (event, dataset) => {
  _domUpdates__WEBPACK_IMPORTED_MODULE_2__["default"].hideRecipeDetails();
  _domUpdates__WEBPACK_IMPORTED_MODULE_2__["default"].hideSuccessMessage();
  _domUpdates__WEBPACK_IMPORTED_MODULE_2__["default"].hideCookButton()
  const classList = event.target.classList
  const errorMessage = document.querySelector('.error-message');
  const { error, selector } = _domUpdates__WEBPACK_IMPORTED_MODULE_2__["default"].determinePage(classList);
  if (!dataset.length) {
    return errorMessage.innerText = error
  } else {
    displayPage(dataset, selector)
  }
}
const displayPage = (dataset, selector) => {
  _domUpdates__WEBPACK_IMPORTED_MODULE_2__["default"].hideChefLogos();
  document.querySelector(selector).classList.remove('hidden');
  cardArea.innerHTML = '';
  if (selector === '.pantry-cl') {
    let itemsInPantry = pantry.getPantry(ingredients);
    _domUpdates__WEBPACK_IMPORTED_MODULE_2__["default"].displayPantry(itemsInPantry);
  } else {
    _domUpdates__WEBPACK_IMPORTED_MODULE_2__["default"].drawCards(dataset, cardArea, user);
  }
}

const cardButtonConditionals = (event) => {
  if (event.target.classList.contains('favorite')) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_2__["default"].updateButtonStatus(user, cardArea, cookbook, event);
  } else if (event.target.classList.contains('card-picture')) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_2__["default"].displayDirections(event, cookbook, ingredients, cardArea, pantry);
  } else if (event.target.classList.contains('add-button')) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_2__["default"].updateButtonStatus(user, cardArea, cookbook, event)
  }
}

const searchRecipesByNameOrIngredient = (string) => {
  let dataset = '';
  const favChef = document.querySelector('.fav-cl');
  const cookChef = document.querySelector('.cook-cl');
  if (!favChef.classList.contains('hidden')) {
    dataset = 'favoriteRecipes';
  } else if (!cookChef.classList.contains('hidden')) {
    dataset = 'recipesToCook';
  }
  const matchingRecipes = user.findRecipes(string, cookbook.recipes, dataset);
  _domUpdates__WEBPACK_IMPORTED_MODULE_2__["default"].drawCards(matchingRecipes, cardArea, user);
}

window.onload = onStartup();
homeButton.addEventListener('click', goToHome);
favButton.addEventListener('click', () => {
  changePage(event, user.favoriteRecipes)
});
cardArea.addEventListener('click', (event) => {
  cardButtonConditionals(event)
});
cookbookButton.addEventListener('click', () => {
  changePage(event, user.recipesToCook);
});
searchInput.addEventListener('keyup', () => {
  searchRecipesByNameOrIngredient(searchInput.value);
});
pantryButton.addEventListener('click', () => {
  changePage(event, pantry.contents)
});
cookButton.addEventListener('click', updatePantry);


/***/ }),

/***/ "./src/user.js":
/*!*********************!*\
  !*** ./src/user.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class User {
  constructor(id, name, pantry) {
    this.id = id;
    this.name = name;
    this.pantry = pantry;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }

  saveRecipe(recipe, category) {
    if (!this[category].includes(recipe)) {
      this[category].push(recipe)
    }
  }

  removeRecipe(recipe, category) {
    const i = this[category].indexOf(recipe);
    this[category].splice(i, 1)
  }

  filterFavorites(tag) {
    return this.favoriteRecipes.filter(recipe => {
      return recipe.tags.includes(tag);
    });
  }

  findRecipes(stringToSearch, recipes, category) {
    let matchingRecipesByName = recipes.filter(recipe => {
      return recipe.name.toLowerCase().includes(stringToSearch.toLowerCase())
    })
    if (category !== '') {
      let recipesStored = this[category].map(item => +item.id);
      const matchingRecipesOnPage = matchingRecipesByName.filter(recipe => {
        return recipesStored.includes(recipe.id)
      })
      return matchingRecipesOnPage
    }
    return matchingRecipesByName
  }

}

/* harmony default export */ __webpack_exports__["default"] = (User);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29va2Jvb2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3M/MTEwNyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3N0eWxlcy5zY3NzPzdiMmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbVVwZGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVjaXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy91c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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REFBVTtBQUNkLEdBQUc7QUFDSCxJQUFJLG1EQUFVO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxtREFBVTtBQUNkLEdBQUc7QUFDSCxJQUFJLG1EQUFVO0FBQ2QsR0FBRztBQUNILElBQUksbURBQVU7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFLG1EQUFVO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQzFLQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVlLG1FQUFJLEVBQUMiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9zY3JpcHRzLmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBUaGlzIGlzIGFuIGV4YW1wbGUgb2YgdXNpbmcgU2Fzcywgb3RoZXJ3aXNlIHBsYWluIENTUyB3b3JrcyB0b28qL1xcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvYmFzZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLG1FQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFRoaXMgaXMgYW4gZXhhbXBsZSBvZiB1c2luZyBTYXNzLCBvdGhlcndpc2UgcGxhaW4gQ1NTIHdvcmtzIHRvbyovXFxuLy8gJHByaW1hcnktYmFja2dyb3VuZDogcGluaztcXG4vL1xcbi8vIGJvZHkge1xcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktYmFja2dyb3VuZDtcXG4vLyB9XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmNGU3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuYm9keSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6ICNmNWVjZWM7XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAwcHggIzZkMTExMTtcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogYXV0bzsgfVxcblxcbm1haW4sIC5jYXJkLXNlY3Rpb24td3JhcHBlciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5hZGQtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhNzljMGU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzMyLzMyMzM5LnN2Zyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiA5MCUgOTAlO1xcbiAgd2lkdGg6IDEyJTsgfVxcblxcbi5idXR0b24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA1MCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgcGFkZGluZy10b3A6IDUlOyB9XFxuXFxuLmJ1dHRvbi13cmFwcGVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAzMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG4uY2FyZC1idXR0b24ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzFhMTkxOTtcXG4gIGhlaWdodDogMjlweDtcXG4gIG1hcmdpbjogM3B4OyB9XFxuICAuY2FyZC1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdkY2RjOyB9XFxuICAuY2FyZC1idXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwNzczMTsgfVxcblxcbi5jb29rLWJ1dHRvbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG5cXG4uY29vay1yZWNpcGUge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTUlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjsgfVxcblxcbi5uYXYtYnV0dG9uLCAuY29vay1yZWNpcGUsIGZpZ3VyZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTc5YzBlO1xcbiAgYm9yZGVyLXJhZGl1czogMXZoO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgbWFyZ2luOiAxJTtcXG4gIHBhZGRpbmc6IDIlO1xcbiAgZGlzcGxheTogZmxleDsgfVxcbiAgLm5hdi1idXR0b246aG92ZXIsIC5jb29rLXJlY2lwZTpob3ZlciwgZmlndXJlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZGNkYzsgfVxcbiAgLm5hdi1idXR0b246YWN0aXZlLCAuY29vay1yZWNpcGU6YWN0aXZlLCBmaWd1cmU6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwNzczMTsgfVxcblxcbmgxIHtcXG4gIGNvbG9yOiAjMTExNTE4O1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMHB4ICM2ZDExMTE7XFxuICBmb250LXNpemU6IDI1NSU7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIHdpZHRoOiAzMCU7IH1cXG5cXG5oMiB7XFxuICBjb2xvcjogIzZkMTExMTtcXG4gIGZvbnQtc2l6ZTogMjUwJTsgfVxcblxcbi5lcnJvci1tZXNzYWdlIHtcXG4gIG1hcmdpbjogMHB4OyB9XFxuXFxuLnN1Y2Nlc3MtdGV4dCB7XFxuICBjb2xvcjogZ3JlZW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDN2aDsgfVxcblxcbi51c2VyLWluZm8ge1xcbiAgZm9udC1zaXplOiAxODAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDQwJTsgfVxcblxcbi5hZGQge1xcbiAgd2lkdGg6IDV2aDsgfVxcblxcbi5hbGwtY2FyZHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtZ2FwOiAxJSAzJTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICBtYXJnaW46IDQlOyB9XFxuXFxuLmNhcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjMGMwYztcXG4gIGJvcmRlci1yYWRpdXM6IDJ2aDtcXG4gIHBhZGRpbmc6IDQlO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uY2FyZC1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcblxcbi5jYXJkLXBpY3R1cmUge1xcbiAgbWFyZ2luOiAxMHB4IDMlIDhweCAyLjYlO1xcbiAgd2lkdGg6IDk0JTsgfVxcbiAgLmNhcmQtcGljdHVyZTphY3RpdmUge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMWExOTE5OyB9XFxuICAuY2FyZC1waWN0dXJlOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTdkY2RjOyB9XFxuXFxuLmFsbCB7XFxuICBncmlkLWdhcDogMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTsgfVxcblxcbi5tYWluLWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTc5YzBlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICBwYWRkaW5nOiAxJTtcXG4gIGhlaWdodDogMTV2aDsgfVxcblxcbi5zZWFyY2gtYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy10b3A6IDElOyB9XFxuXFxuLnNlYXJjaC1pbWFnZSB7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICB3aWR0aDogMjVweDsgfVxcblxcbi5zZWFyY2gtaW5wdXQge1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgaGVpZ2h0OiA3dmg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgd2lkdGg6IDMwJTsgfVxcblxcbi5jaGVmLWxvZ28ge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7IH1cXG5cXG4uY29va2Jvb2stYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMDc3MzE7IH1cXG5cXG4uZmF2b3JpdGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E3OWMwZTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMTQ5LzE0OTIyMi5zdmcpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogOTAlIDkwJTtcXG4gIHdpZHRoOiAxMiU7IH1cXG5cXG4uZmF2b3JpdGUtYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMTQ4LzE0ODg0MS5zdmcpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgfVxcblxcbmZpZ3VyZSB7XFxuICBjdXJzb3I6IG5vbmU7XFxuICBtYXJnaW46IDAlO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIHBhZGRpbmc6IDElO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gIGZpZ3VyZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhNzljMGU7IH1cXG4gIGZpZ3VyZTphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTc5YzBlOyB9XFxuXFxuaW1nIHtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5wYW50cnktbGlzdCB7XFxuICBjb2xvcjogIzFhMTkxOTtcXG4gIG1hcmdpbjogMDsgfVxcblxcbi5hbGwtcmVjaXBlLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZWNlYztcXG4gIGNvbG9yOiAjMGMwYzBjO1xcbiAgbWFyZ2luOiAwJTtcXG4gIG1hcmdpbi1sZWZ0OiA1JTtcXG4gIG1hcmdpbi1yaWdodDogNSU7XFxuICBwYWRkaW5nOiAxJTsgfVxcblxcbi5pbmdyZWRpZW50cy1saXN0LCAucmVjaXBlLWFyZWEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMSU7IH1cXG5cXG4ucmVjaXBlLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiA2JTtcXG4gIHBhZGRpbmctdG9wOiAwOyB9XFxuXFxuLnJlY2lwZS1uYW1lIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1zaXplOiAxNTAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLmhpZGRlbiB7XFxuICBib3JkZXI6IDA7XFxuICBjbGlwOiByZWN0KDAgMCAwIDApO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBtYXJnaW46IC0xcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcGFkZGluZzogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxcHg7IH1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcXG4gIC5hbGwtY2FyZHMge1xcbiAgICBncmlkLWdhcDogMC41JSA0JTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTsgfVxcbiAgLmJ1dHRvbi1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAubWFpbi1oZWFkZXIge1xcbiAgICBoZWlnaHQ6IDE4dmg7IH1cXG4gIC5zZWFyY2gtaW5wdXQge1xcbiAgICB3aWR0aDogNTAlOyB9IH1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcXG4gIC5hbGwtY2FyZHMge1xcbiAgICBncmlkLWdhcDogMC41JSA1JTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTsgfVxcbiAgLmJ1dHRvbi1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAubWFpbi1oZWFkZXIge1xcbiAgICBoZWlnaHQ6IDE4dmg7IH1cXG4gIC5zZWFyY2gtaW5wdXQge1xcbiAgICB3aWR0aDogODAlOyB9IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL192YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLHlCQ0lpQjtFREhqQixhQUFhO0VBQ2IsV0FBVyxFQUFBOztBQUdiO0VBRUUsc0JBQXNCO0VBQ3RCLGNDUHFCO0VEUXJCLGdDQ1AwQjtFRFExQixvQ0FBb0M7RUFDcEMsWUFBWSxFQUFBOztBQUdkO0VBQ0UsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFLYjtFQUNFLHlCQ3pCbUI7RUQwQm5CLHdFQUF3RTtFQUN4RSw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLHdCQUF3QjtFQUN4QixVQUFVLEVBQUE7O0FBR1o7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UseUJDM0MyQjtFRDRDM0IsWUFBWTtFQUNaLFdBQVcsRUFBQTtFQUhiO0lBS0kseUJDdERpQixFQUFBO0VEaURyQjtJQVFJLHlCQ3hEa0IsRUFBQTs7QUQ0RHRCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQixFQUFBOztBQUd4QjtFQUVFLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLHlCQzVFbUI7RUQ2RW5CLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsVUFBVTtFQUNWLFdBQVc7RUFDWCxhQUFh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c291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuL3ZhcmlhYmxlcyc7XFxuXFxuaHRtbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbkNvbG9yO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIEBleHRlbmQgaHRtbDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogJG1haW5UZXh0Q29sb3I7XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAwcHggJHNlY29uZGFyeVRleHRDb2xvcjtcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxubWFpbiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLy8gLS0tLS0tLSBidXR0b25zIC0tLS0tLS0tIC8vXFxuXFxuLmFkZC1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGhlYWRlckNvbG9yO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8zMi8zMjMzOS5zdmcpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogOTAlIDkwJTtcXG4gIHdpZHRoOiAxMiU7XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA1MCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgcGFkZGluZy10b3A6IDUlO1xcbn1cXG5cXG4uYnV0dG9uLXdyYXBwZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDMwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNhcmQtYnV0dG9uIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXJDb2xvcjtcXG4gIGhlaWdodDogMjlweDtcXG4gIG1hcmdpbjogM3B4O1xcbiAgJjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRidXR0b25Ib3ZlcjtcXG4gIH07XFxuICAmOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRidXR0b25BY3RpdmU7XFxuICB9O1xcbn1cXG5cXG4uY29vay1idXR0b24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY29vay1yZWNpcGUge1xcbiAgQGV4dGVuZCAubmF2LWJ1dHRvbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDE1JTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5uYXYtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRoZWFkZXJDb2xvcjtcXG4gIGJvcmRlci1yYWRpdXM6IDF2aDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIG1hcmdpbjogMSU7XFxuICBwYWRkaW5nOiAyJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAmOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJ1dHRvbkhvdmVyO1xcbiAgfTtcXG4gICY6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJ1dHRvbkFjdGl2ZTtcXG4gIH07XFxufVxcblxcbi8vLS0tLS0tLSB0ZXh0LS0tLS0tLS8vXFxuXFxuaDEge1xcbiAgY29sb3I6ICRoZWFkaW5nVGV4dENvbG9yO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMHB4ICRzZWNvbmRhcnlUZXh0Q29sb3I7XFxuICBmb250LXNpemU6IDI1NSU7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIHdpZHRoOiAzMCU7XFxufVxcblxcbmgyIHtcXG4gIGNvbG9yOiAkc2Vjb25kYXJ5VGV4dENvbG9yO1xcbiAgZm9udC1zaXplOiAyNTAlO1xcbn1cXG5cXG5cXG4uZXJyb3ItbWVzc2FnZSB7XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuLnN1Y2Nlc3MtdGV4dCB7XFxuICBjb2xvcjogZ3JlZW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDN2aDtcXG59XFxuXFxuLnVzZXItaW5mbyB7XFxuICBmb250LXNpemU6IDE4MCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogNDAlO1xcbn1cXG5cXG4vLy0tLS0tLS0tIGNhcmRzIC0tLS0tLS0tLS8vXFxuXFxuXFxuLmFkZCB7XFxuICB3aWR0aDogNXZoO1xcbn1cXG5cXG4uYWxsLWNhcmRzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWdhcDogMSUgMyU7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgbWFyZ2luOiA0JTtcXG59XFxuXFxuLmNhcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNhcmRDb2xvcjtcXG4gIGJvcmRlci1yYWRpdXM6IDJ2aDtcXG4gIHBhZGRpbmc6IDQlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jYXJkLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uY2FyZC1waWN0dXJlIHtcXG4gIG1hcmdpbjogMTBweCAzJSA4cHggMi42JTtcXG4gIHdpZHRoOiA5NCU7XFxuICAmOmFjdGl2ZSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICRib3JkZXJDb2xvcjtcXG4gIH1cXG4gICY6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICRidXR0b25Ib3ZlcjtcXG4gIH1cXG59XFxuXFxuLmNhcmQtc2VjdGlvbi13cmFwcGVyIHtcXG4gIEBleHRlbmQgbWFpbjtcXG59XFxuXFxuLy8tLS0tLS0tLS0tc2VjdGlvbnMgLS0tLS0tLS0vL1xcblxcbi5hbGwge1xcbiAgZ3JpZC1nYXA6IDBweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XFxufVxcblxcbi5tYWluLWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkaGVhZGVyQ29sb3I7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG4gIHBhZGRpbmc6IDElO1xcbiAgaGVpZ2h0OiAxNXZoO1xcbn1cXG5cXG4vLy0tLS0tLS0tLS1zZWFyY2ggZmVhdHVyZS0tLS0tLS0tLS0vL1xcblxcbi5zZWFyY2gtYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy10b3A6IDElO1xcbn1cXG5cXG4uc2VhcmNoLWltYWdlIHtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAyNXB4O1xcbn1cXG5cXG4uc2VhcmNoLWlucHV0IHtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGhlaWdodDogN3ZoO1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIHdpZHRoOiAzMCU7XFxufVxcblxcbi8vLS0tLS0tLS0tIGltYWdlcyBhbmQgaWNvbnMgLS0tLS0tLS8vXFxuXFxuLmNoZWYtbG9nbyB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuLmNvb2tib29rLWFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnV0dG9uQWN0aXZlO1xcbn1cXG5cXG4uZmF2b3JpdGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGhlYWRlckNvbG9yO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xNDkvMTQ5MjIyLnN2Zyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiA5MCUgOTAlO1xcbiAgd2lkdGg6IDEyJTtcXG59XFxuXFxuLmZhdm9yaXRlLWFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzE0OC8xNDg4NDEuc3ZnKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbmZpZ3VyZSB7XFxuICBAZXh0ZW5kIC5uYXYtYnV0dG9uO1xcbiAgY3Vyc29yOiBub25lO1xcbiAgbWFyZ2luOiAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBwYWRkaW5nOiAxJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgJjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRoZWFkZXJDb2xvcjtcXG4gIH07XFxuICAmOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRoZWFkZXJDb2xvcjtcXG4gIH07XFxufVxcblxcbmltZyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8vLS0tLS0tLS0tLSByZWNpcGUgYW5kIHBhbnRyeSBpbmZvIC0tLS0tLS0tLS0vL1xcblxcbi5wYW50cnktbGlzdCB7XFxuICBjb2xvcjogJGJvcmRlckNvbG9yO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uYWxsLXJlY2lwZS1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRtYWluVGV4dENvbG9yO1xcbiAgY29sb3I6ICRjYXJkQ29sb3I7XFxuICBtYXJnaW46IDAlO1xcbiAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcXG4gIHBhZGRpbmc6IDElO1xcbn1cXG5cXG4uaW5ncmVkaWVudHMtbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxJTtcXG59XFxuXFxuLnJlY2lwZS1hcmVhIHtcXG4gIEBleHRlbmQgLmluZ3JlZGllbnRzLWxpc3Q7XFxufVxcblxcbi5yZWNpcGUtY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDYlO1xcbiAgcGFkZGluZy10b3A6IDA7XFxufVxcblxcbi5yZWNpcGUtbmFtZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtc2l6ZTogMTUwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLy8tLS0tLS0tLS0taGlkZGVuLS0tLS0tLS0vL1xcblxcbi5oaWRkZW4ge1xcbiAgYm9yZGVyOiAwO1xcbiAgY2xpcDogcmVjdCgwIDAgMCAwKTtcXG4gIGhlaWdodDogMXB4O1xcbiAgbWFyZ2luOiAtMXB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBhZGRpbmc6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMXB4O1xcbn1cXG5cXG4vLy0tLS0tLS1tZWRpYSBxdWVyaWVzLS0tLS0tLy9cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcXG4gIC5hbGwtY2FyZHMge1xcbiAgICBncmlkLWdhcDogMC41JSA0JTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIH1cXG5cXG4gIC5idXR0b24tY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5tYWluLWhlYWRlciB7XFxuICAgIGhlaWdodDogMTh2aDtcXG4gIH1cXG5cXG4gIC5zZWFyY2gtaW5wdXQge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcXG4gIC5hbGwtY2FyZHMge1xcbiAgICBncmlkLWdhcDogMC41JSA1JTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIH1cXG5cXG4gIC5idXR0b24tY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5tYWluLWhlYWRlciB7XFxuICAgIGhlaWdodDogMTh2aDtcXG4gIH1cXG5cXG4gIC5zZWFyY2gtaW5wdXQge1xcbiAgICB3aWR0aDogODAlO1xcbiAgfVxcbn1cXG5cIixcIiRoZWFkZXJDb2xvcjogI2E3OWMwZTtcXG4kYnV0dG9uSG92ZXI6ICNlN2RjZGM7XFxuJGJ1dHRvbkFjdGl2ZTogI2UwNzczMTtcXG4kaGVhZGluZ1RleHRDb2xvcjogIzExMTUxODtcXG4kbWFpblRleHRDb2xvcjogI2Y1ZWNlYztcXG4kc2Vjb25kYXJ5VGV4dENvbG9yOiAjNmQxMTExO1xcbiRjYXJkQ29sb3I6ICMwYzBjMGM7XFxuJG1haW5Db2xvcjogI2Y4ZjRlNztcXG4kYm9yZGVyQ29sb3I6IHJnYigyNiwgMjUsIDI1KTtcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiY2xhc3MgQ29va2Jvb2sge1xuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy5yZWNpcGVzID0gZGF0YTtcbiAgfVxuXG4gIGZpbmRSZWNpcGUoc2VhcmNoVGV4dCkge1xuICAgIHJldHVybiB0aGlzLnJlY2lwZXMuZmlsdGVyKHJlY2lwZSA9PiB7XG4gICAgICByZXR1cm4gcmVjaXBlLmluZ3JlZGllbnRzLmZpbmQoaW5ncmVkaWVudCA9PiB7XG4gICAgICAgIHJldHVybiAoaW5ncmVkaWVudC5uYW1lLmluY2x1ZGVzKHNlYXJjaFRleHQpKSB8fFxuICAgICAgICAocmVjaXBlLm5hbWUuaW5jbHVkZXMoc2VhcmNoVGV4dCkpXG4gICAgICB9KTtcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvb2tib29rO1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYmFzZS5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgUmVjaXBlIGZyb20gJy4vcmVjaXBlJztcblxubGV0IGRvbVVwZGF0ZXMgPSB7XG5cbiAgZ3JlZXRVc2VyKHVzZXIpIHtcbiAgICBjb25zdCB1c2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyLW5hbWUnKTtcbiAgICBjb25zdCBuYW1lID0gdXNlci5uYW1lLnNwbGl0KCcgJylbMF0gKyAnICcgKyB1c2VyLm5hbWUuc3BsaXQoJyAnKVsxXVswXTtcbiAgICB1c2VyTmFtZS5pbm5lckhUTUwgPSBuYW1lO1xuICB9LFxuXG4gIGhpZGVTZWFyY2hCYXIoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1iYXInKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICB9LFxuXG4gIHJldmVhbFNlYXJjaEJhcigpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJhcicpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gIH0sXG5cbiAgLy9OQVYgQlVUVE9OU1xuICBkZXRlcm1pbmVQYWdlKGNsYXNzTGlzdCkge1xuICAgIGxldCBlcnJvciwgc2VsZWN0b3I7XG4gICAgaWYgKGNsYXNzTGlzdC5jb250YWlucygndmlldy1mYXZvcml0ZXMnKSkge1xuICAgICAgdGhpcy5yZXZlYWxTZWFyY2hCYXIoKTtcbiAgICAgIGVycm9yID0gJ1lvdSBoYXZlIG5vIGZhdm9yaXRlcyEnO1xuICAgICAgc2VsZWN0b3IgPSAnLmZhdi1jbCc7XG4gICAgfSBlbHNlIGlmIChjbGFzc0xpc3QuY29udGFpbnMoJ3ZpZXctY29va2Jvb2snKSkge1xuICAgICAgdGhpcy5yZXZlYWxTZWFyY2hCYXIoKTtcbiAgICAgIGVycm9yID0gJ1lvdXIgY29va2Jvb2sgaXMgZW1wdHkhJztcbiAgICAgIHNlbGVjdG9yID0gJy5jb29rLWNsJztcbiAgICB9IGVsc2UgaWYgKGNsYXNzTGlzdC5jb250YWlucygndmlldy1wYW50cnknKSkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yLW1lc3NhZ2UnKS5pbm5lclRleHQgPSAnJztcbiAgICAgIHRoaXMuaGlkZVNlYXJjaEJhcigpO1xuICAgICAgc2VsZWN0b3IgPSAnLnBhbnRyeS1jbCc7XG4gICAgfVxuICAgIHJldHVybiB7IGVycm9yLCBzZWxlY3RvciB9XG4gIH0sXG5cbiAgZGlzcGxheVBhbnRyeShpdGVtc0luUGFudHJ5KSB7XG4gICAgbGV0IHBhbnRyeURpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ncmVkaWVudHMtbGlzdCcpO1xuICAgIHBhbnRyeURpc3BsYXkuaW5uZXJIVE1MICs9IGBcbiAgICAgIDxoMiBjbGFzcz1cInJlY2lwZS1oZWFkaW5nXCI+SXRlbXMgaW4gUGFudHJ5PC9oMj5gXG4gICAgaXRlbXNJblBhbnRyeS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgcGFudHJ5RGlzcGxheS5pbm5lckhUTUwgKz0gYFxuICAgICAgICAgIDxwIGNsYXNzPVwicGFudHJ5LWxpc3RcIj4ke2l0ZW0ubmFtZX06ICR7aXRlbS5hbW91bnR9PC9wPlxuICAgICAgICBgXG4gICAgfSlcbiAgfSxcblxuICBoaWRlUmVjaXBlRGV0YWlscygpIHtcbiAgICBsZXQgbWlzc2luZ0luZ3JlZGllbnRzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmdyZWRpZW50cy1saXN0Jyk7XG4gICAgbGV0IHJlY2lwZUFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVjaXBlLWFyZWEnKTtcbiAgICBtaXNzaW5nSW5ncmVkaWVudHNTZWN0aW9uLmlubmVySFRNTCA9ICcnO1xuICAgIHJlY2lwZUFyZWEuaW5uZXJIVE1MID0gJyc7XG4gIH0sXG5cbiAgaGlkZUNoZWZMb2dvcygpIHtcbiAgICBjb25zdCBjaGVmTG9nb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlZi1sb2dvJyk7XG4gICAgY2hlZkxvZ29zLmZvckVhY2gobG9nbyA9PiB7XG4gICAgICBsb2dvLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH0pXG4gIH0sXG5cbiAgY2xlYXJFcnJvcigpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3ItbWVzc2FnZScpLmlubmVyVGV4dCA9ICcnO1xuICB9LFxuXG4gIC8vQ0FSRCBESVNQTEFZXG4gIGRyYXdDYXJkcyhkYXRhLCBjYXJkQXJlYSwgdXNlcikge1xuICAgIGNhcmRBcmVhLmlubmVySFRNTCA9ICcnO1xuICAgIGRhdGEuZm9yRWFjaChyZWNpcGUgPT4ge1xuICAgICAgY2FyZEFyZWEuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgYFxuICAgICAgPGRpdiBpZD0nJHtyZWNpcGUuaWR9JyBjbGFzcz0nY2FyZCc+XG4gICAgICAgIDxoZWFkZXIgaWQ9JyR7cmVjaXBlLmlkfScgY2xhc3M9J2NhcmQtaGVhZGVyJz5cbiAgICAgICAgICA8YnV0dG9uIGlkPScke3JlY2lwZS5pZH0nIGFyaWEtbGFiZWw9J2FkZC1idXR0b24nIGNsYXNzPSdhZGQtYnV0dG9uIGNvb2tib29rJHtyZWNpcGUuaWR9IGNhcmQtYnV0dG9uJz48L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGlkPScke3JlY2lwZS5pZH0nIGFyaWEtbGFiZWw9J2Zhdm9yaXRlLWJ1dHRvbicgY2xhc3M9J2Zhdm9yaXRlIGZhdm9yaXRlJHtyZWNpcGUuaWR9IGNhcmQtYnV0dG9uJz48L2J1dHRvbj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxpbWcgaWQ9JyR7cmVjaXBlLmlkfScgdGFiaW5kZXg9JzAnIGNsYXNzPSdjYXJkLXBpY3R1cmUnIHNyYz0nJHtyZWNpcGUuaW1hZ2V9JyBhbHQ9J2NsaWNrIHRvIHZpZXcgcmVjaXBlIGZvciAke3JlY2lwZS5uYW1lfSc+XG4gICAgICAgIDxwIGlkPScke3JlY2lwZS5pZH0nIGNsYXNzPSdyZWNpcGUtbmFtZSc+JHtyZWNpcGUubmFtZX08L3A+XG4gICAgICA8L2Rpdj5gKVxuICAgIH0pO1xuICAgIHRoaXMuYXBwbHlJY29uU3RhdHVzKHVzZXIpO1xuICB9LFxuXG4gIGFwcGx5SWNvblN0YXR1cyh1c2VyKSB7XG4gICAgY29uc3QgZmF2b3JpdGVJZHMgPSB1c2VyLmZhdm9yaXRlUmVjaXBlcy5tYXAocmVjaXBlID0+IHJlY2lwZS5pZCk7XG4gICAgY29uc3QgY29va2Jvb2tJZHMgPSB1c2VyLnJlY2lwZXNUb0Nvb2subWFwKHJlY2lwZSA9PiByZWNpcGUuaWQpO1xuICAgIGNvbnN0IGFsbENhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQnKTtcbiAgICBhbGxDYXJkcy5mb3JFYWNoKGNhcmQgPT4ge1xuICAgICAgaWYgKGZhdm9yaXRlSWRzLmluY2x1ZGVzKCtjYXJkLmlkKSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZmF2b3JpdGUke2NhcmQuaWR9YCkuY2xhc3NMaXN0LmFkZCgnZmF2b3JpdGUtYWN0aXZlJyk7XG4gICAgICB9XG4gICAgICBpZiAoY29va2Jvb2tJZHMuaW5jbHVkZXMoK2NhcmQuaWQpKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb29rYm9vayR7Y2FyZC5pZH1gKS5jbGFzc0xpc3QuYWRkKCdjb29rYm9vay1hY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICAvL0NBUkQgQlVUVE9OU1xuICB1cGRhdGVCdXR0b25TdGF0dXModXNlciwgY2FyZEFyZWEsIGNvb2tib29rLCBldmVudCkge1xuICAgIGNvbnN0IHsgZGF0YXNldCwgc2VsZWN0b3IsIGFjdGl2ZSB9ID0gdGhpcy5kZXRlcm1pbmVCdXR0b24oZXZlbnQpO1xuICAgIGNvbnN0IHNwZWNpZmljUmVjaXBlID0gdGhpcy5nZXRSZWNpcGUoY29va2Jvb2ssIGV2ZW50KTtcbiAgICBpZiAoIWV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoYWN0aXZlKSkge1xuICAgICAgdXNlci5zYXZlUmVjaXBlKHNwZWNpZmljUmVjaXBlLCBkYXRhc2V0KTtcbiAgICAgIHRoaXMuY2xlYXJFcnJvcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1c2VyLnJlbW92ZVJlY2lwZShzcGVjaWZpY1JlY2lwZSwgZGF0YXNldCk7XG4gICAgICB0aGlzLmFwcGx5TGl2ZUNoYW5nZVRvUGFnZShzZWxlY3RvciwgZGF0YXNldCwgY2FyZEFyZWEsIHVzZXIpO1xuICAgIH1cbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZShhY3RpdmUpO1xuICB9LFxuXG4gIGRldGVybWluZUJ1dHRvbihldmVudCkge1xuICAgIGxldCBkYXRhc2V0LCBzZWxlY3RvciwgYWN0aXZlO1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGQtYnV0dG9uJykpIHtcbiAgICAgIGRhdGFzZXQgPSAncmVjaXBlc1RvQ29vayc7XG4gICAgICBzZWxlY3RvciA9ICcuY29vay1jbCc7XG4gICAgICBhY3RpdmUgPSAnY29va2Jvb2stYWN0aXZlJztcbiAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Zhdm9yaXRlJykpIHtcbiAgICAgIGRhdGFzZXQgPSAnZmF2b3JpdGVSZWNpcGVzJztcbiAgICAgIHNlbGVjdG9yID0gJy5mYXYtY2wnO1xuICAgICAgYWN0aXZlID0gJ2Zhdm9yaXRlLWFjdGl2ZSc7XG4gICAgfVxuICAgIHJldHVybiB7IGRhdGFzZXQsIHNlbGVjdG9yLCBhY3RpdmUgfTtcbiAgfSxcblxuICBhcHBseUxpdmVDaGFuZ2VUb1BhZ2Uoc2VsZWN0b3IsIGRhdGFzZXQsIGNhcmRBcmVhLCB1c2VyKSB7XG4gICAgY29uc3QgY2hlZkxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBpZiAoIWNoZWZMb2dvLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcbiAgICAgIHRoaXMuZHJhd0NhcmRzKHVzZXJbZGF0YXNldF0sIGNhcmRBcmVhLCB1c2VyKTtcbiAgICB9XG4gIH0sXG5cbiAgZ2V0UmVjaXBlKGNvb2tib29rLCBldmVudCkge1xuICAgIHJldHVybiBjb29rYm9vay5yZWNpcGVzLmZpbmQocmVjaXBlID0+IHtcbiAgICAgIGlmIChyZWNpcGUuaWQgID09PSArKGV2ZW50LnRhcmdldC5pZCkpIHtcbiAgICAgICAgcmV0dXJuIHJlY2lwZTtcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIC8vUkVDSVBFIElORk9STUFUSU9OXG4gIGRpc3BsYXlEaXJlY3Rpb25zKGV2ZW50LCBjb29rYm9vaywgaW5ncmVkaWVudHMsIGNhcmRBcmVhLCBwYW50cnkpIHtcbiAgICBsZXQgbmV3UmVjaXBlSW5mbyA9IHRoaXMuZ2V0UmVjaXBlKGNvb2tib29rLCBldmVudCk7XG4gICAgbGV0IGN1cnJlbnRSZWNpcGUgPSBuZXcgUmVjaXBlKG5ld1JlY2lwZUluZm8sIGluZ3JlZGllbnRzKTtcbiAgICBsZXQgcmVjaXBlSW5mb3JtYXRpb24gPSBjdXJyZW50UmVjaXBlLmNhbGN1bGF0ZUNvc3RBbmRJbmdyZWRpZW50cygpXG4gICAgbGV0IGNvc3QgPSByZWNpcGVJbmZvcm1hdGlvbi5jb3N0Q291bnRlcjtcbiAgICBsZXQgY29zdEluRG9sbGFycyA9IChjb3N0IC8gMTAwKS50b0ZpeGVkKDIpO1xuICAgIGxldCBpbmdyZWRpZW50c1VzZWQgPSByZWNpcGVJbmZvcm1hdGlvbi5pbmdyZWRpZW50c1VzZWQ7XG4gICAgdGhpcy5zaG93UmVjaXBlSW5mb3JtYXRpb24oY2FyZEFyZWEsIGN1cnJlbnRSZWNpcGUsIGNvc3RJbkRvbGxhcnMpO1xuICAgIHRoaXMucG9wdWxhdGVJbmdyZWRpZW50cyhjdXJyZW50UmVjaXBlLCBpbmdyZWRpZW50c1VzZWQpO1xuICAgIHRoaXMucG9wdWxhdGVJbnN0cnVjdGlvbnMoY3VycmVudFJlY2lwZSk7XG4gICAgbGV0IG1pc3NpbmdJbmdyZWRpZW50cyA9IHBhbnRyeS5jaGVja1BhbnRyeUZvckluZ3JlZGllbnRzKGN1cnJlbnRSZWNpcGUpO1xuICAgIGlmICghbWlzc2luZ0luZ3JlZGllbnRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5yZXZlYWxDb29rQnV0dG9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGlzcGxheU1pc3NpbmdJbmdyZWRpZW50cyhtaXNzaW5nSW5ncmVkaWVudHMpO1xuICAgIH1cbiAgfSxcblxuICBkaXNwbGF5TWlzc2luZ0luZ3JlZGllbnRzKG1pc3NpbmdJbmdyZWRpZW50cykge1xuICAgIGxldCBtaXNzaW5nSW5ncmVkaWVudHNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZ3JlZGllbnRzLWxpc3QnKTtcbiAgICBtaXNzaW5nSW5ncmVkaWVudHMuZm9yRWFjaChpbmdyZWRpZW50ID0+IHtcbiAgICAgIG1pc3NpbmdJbmdyZWRpZW50c1NlY3Rpb24uaW5uZXJIVE1MICs9IGBcbiAgICAgICAgPHAgY2xhc3M9XCJhbGwtcmVjaXBlLWluZm9cIj5Zb3Ugd2lsbCBuZWVkICR7aW5ncmVkaWVudC5hbW91bnR9ICR7aW5ncmVkaWVudC51bml0fSBvZiAke2luZ3JlZGllbnQuaW5ncmVkaWVudH08L3A+XG4gICAgICAgIGA7XG4gICAgfSlcbiAgfSxcblxuICByZXZlYWxDb29rQnV0dG9uKCkge1xuICAgIGxldCBjb29rQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvb2stcmVjaXBlJyk7XG4gICAgY29va0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgfSxcblxuICBoaWRlQ29va0J1dHRvbigpIHtcbiAgICBsZXQgY29va0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb29rLXJlY2lwZScpO1xuICAgIGNvb2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIH0sXG5cbiAgc2hvd1N1Y2Nlc3NNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBzdWNjZXNzTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWNjZXNzLW1lc3NhZ2UnKTtcbiAgICBzdWNjZXNzTWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICBzdWNjZXNzTWVzc2FnZS5pbm5lckhUTUwgPSBgXG4gICAgPHAgY2xhc3M9XCJzdWNjZXNzLXRleHRcIj4ke21lc3NhZ2V9PC9wPlxuICAgIGBcbiAgfSxcblxuICBoaWRlU3VjY2Vzc01lc3NhZ2UoKSB7XG4gICAgY29uc3Qgc3VjY2Vzc01lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VjY2Vzcy1tZXNzYWdlJyk7XG4gICAgc3VjY2Vzc01lc3NhZ2UuaW5uZXJIVE1MID0gJyc7XG4gICAgc3VjY2Vzc01lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIH0sXG5cbiAgc2hvd1JlY2lwZUluZm9ybWF0aW9uKGNhcmRBcmVhLCBjdXJyZW50UmVjaXBlLCBjb3N0SW5Eb2xsYXJzKSB7XG4gICAgdGhpcy5oaWRlU2VhcmNoQmFyKCk7XG4gICAgbGV0IHJlY2lwZUFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVjaXBlLWFyZWEnKVxuICAgIHJlY2lwZUFyZWEuaW5uZXJIVE1MICs9IGBcbiAgICAgIDxoMiBjbGFzcz1cInJlY2lwZS1oZWFkaW5nXCI+JHtjdXJyZW50UmVjaXBlLm5hbWV9PC9oMj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzPVwiYWxsLXJlY2lwZS1pbmZvXCI+XG4gICAgICAgIDxwIGNsYXNzPVwiY29zdCByZWNpcGUtaW5mb1wiPlRoaXMgcmVjaXBlIHdpbGwgY29zdDogJCR7Y29zdEluRG9sbGFyc308L3A+XG4gICAgICAgIDxwIGlkPVwiJHtjdXJyZW50UmVjaXBlLmlkfVwiIGNsYXNzPVwiaW5ncmVkaWVudHMgcmVjaXBlLWluZm9cIj5Zb3Ugd2lsbCBuZWVkOjwvcD5cbiAgICAgICAgPHVsIGNsYXNzPVwiaW5ncmVkaWVudHMtbGlzdFwiPjwvdWw+XG4gICAgICAgIDxwIGNsYXNzPVwiaW5zdHJ1Y3Rpb25zIHJlY2lwZS1pbmZvXCI+SW5zdHJ1Y3Rpb25zOjxwPlxuICAgICAgICA8b2wgY2xhc3M9XCJpbnN0cnVjdGlvbnMtbGlzdFwiPjwvb2w+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICBgO1xuICAgIGNhcmRBcmVhLmlubmVySFRNTCA9ICcnO1xuICB9LFxuXG4gIHBvcHVsYXRlSW5ncmVkaWVudHMoY3VycmVudFJlY2lwZSwgaW5ncmVkaWVudHNVc2VkKSB7XG4gICAgbGV0IGluZ3JlZGllbnRzRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmdyZWRpZW50cycpO1xuICAgIGN1cnJlbnRSZWNpcGUuaW5ncmVkaWVudHMuZm9yRWFjaCgoaW5ncmVkaWVudCwgaW5kZXgpID0+IHtcbiAgICAgIGluZ3JlZGllbnRzRGlzcGxheS5pbm5lckhUTUwgKz0gYFxuICAgICAgICA8bGk+JHtpbmdyZWRpZW50LnF1YW50aXR5LmFtb3VudC50b0ZpeGVkKDIpfSAke2luZ3JlZGllbnQucXVhbnRpdHkudW5pdH1cbiAgICAgICAgJHtpbmdyZWRpZW50c1VzZWRbaW5kZXhdfTwvbGk+XG4gICAgICBgXG4gICAgfSlcbiAgfSxcblxuICBwb3B1bGF0ZUluc3RydWN0aW9ucyhjdXJyZW50UmVjaXBlKSB7XG4gICAgbGV0IGluZ3JlZGllbnRzSW5zdHJ1Y3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluc3RydWN0aW9ucy1saXN0Jyk7XG4gICAgY3VycmVudFJlY2lwZS5pbnN0cnVjdGlvbnMuZm9yRWFjaChpbnN0cnVjdGlvbiA9PiB7XG4gICAgICBpbmdyZWRpZW50c0luc3RydWN0aW9ucy5pbm5lckhUTUwgKz0gYFxuICAgICAgPGxpPiR7aW5zdHJ1Y3Rpb24uaW5zdHJ1Y3Rpb259PC9saT5cbiAgICAgIGBcbiAgICB9KVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZG9tVXBkYXRlcztcbiIsImNsYXNzIFBhbnRyeSB7XG4gIGNvbnN0cnVjdG9yKHVzZXJJbmdyZWRpZW50cykge1xuICAgIHRoaXMuY29udGVudHMgPSB1c2VySW5ncmVkaWVudHM7XG4gIH1cblxuICBjaGVja1BhbnRyeUZvckluZ3JlZGllbnRzKHJlY2lwZSkge1xuICAgIGxldCBpbmdyZWRpZW50c05lZWRlZCA9IFtdO1xuICAgIHJlY2lwZS5pbmdyZWRpZW50cy5mb3JFYWNoKHJlY2lwZUluZ3JlZGllbnQgPT4ge1xuICAgICAgbGV0IHBhbnRyeUluZ3JlZGllbnQgPSB0aGlzLmNvbnRlbnRzLmZpbmQocGFudHJ5SW5ncmVkaWVudCA9PiBwYW50cnlJbmdyZWRpZW50LmluZ3JlZGllbnQgPT09IHJlY2lwZUluZ3JlZGllbnQuaWQpXG4gICAgICBpZiAocGFudHJ5SW5ncmVkaWVudCkge1xuICAgICAgICBpZiAocGFudHJ5SW5ncmVkaWVudC5hbW91bnQgPCByZWNpcGVJbmdyZWRpZW50LnF1YW50aXR5LmFtb3VudCkge1xuICAgICAgICAgIGxldCBhbW91bnROZWVkZWQgPSByZWNpcGVJbmdyZWRpZW50LnF1YW50aXR5LmFtb3VudCAtIHBhbnRyeUluZ3JlZGllbnQuYW1vdW50O1xuICAgICAgICAgIGxldCBpbmdyZWRpZW50TmFtZSA9IHJlY2lwZS5pbmdyZWRpZW50c0RhdGEuZmluZChpbmdyZWRpZW50ID0+IGluZ3JlZGllbnQuaWQgPT09IHBhbnRyeUluZ3JlZGllbnQuaW5ncmVkaWVudCkubmFtZTtcbiAgICAgICAgICBpbmdyZWRpZW50c05lZWRlZC5wdXNoKHtcbiAgICAgICAgICAgIGluZ3JlZGllbnQ6IGluZ3JlZGllbnROYW1lLFxuICAgICAgICAgICAgYW1vdW50OiArYW1vdW50TmVlZGVkLnRvRml4ZWQoMiksXG4gICAgICAgICAgICB1bml0OiByZWNpcGVJbmdyZWRpZW50LnF1YW50aXR5LnVuaXRcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgaW5ncmVkaWVudE5hbWUgPSByZWNpcGUuaW5ncmVkaWVudHNEYXRhLmZpbmQoaW5ncmVkaWVudCA9PiBpbmdyZWRpZW50LmlkID09PSByZWNpcGVJbmdyZWRpZW50LmlkKS5uYW1lO1xuICAgICAgICBpbmdyZWRpZW50c05lZWRlZC5wdXNoKHtcbiAgICAgICAgICBpbmdyZWRpZW50OiBpbmdyZWRpZW50TmFtZSxcbiAgICAgICAgICBhbW91bnQ6ICtyZWNpcGVJbmdyZWRpZW50LnF1YW50aXR5LmFtb3VudC50b0ZpeGVkKDIpLFxuICAgICAgICAgIHVuaXQ6IHJlY2lwZUluZ3JlZGllbnQucXVhbnRpdHkudW5pdFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGluZ3JlZGllbnRzTmVlZGVkO1xuICB9XG5cbiAgZ2V0UGFudHJ5KGluZ3JlZGllbnRzKSB7XG4gICAgbGV0IHBhbnRyeUluZ3JlZGllbnRzID0gW107XG4gICAgdGhpcy5jb250ZW50cy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgbGV0IGN1cnJlbnRJbmdyZWRpZW50ID0gaW5ncmVkaWVudHMuZmluZChpbmdyZWRpZW50ID0+IGluZ3JlZGllbnQuaWQgPT09IGl0ZW0uaW5ncmVkaWVudClcbiAgICAgIHBhbnRyeUluZ3JlZGllbnRzLnB1c2goe25hbWU6IGN1cnJlbnRJbmdyZWRpZW50Lm5hbWUsIGFtb3VudDogaXRlbS5hbW91bnR9KVxuICAgIH0pXG4gICAgcmV0dXJuIHBhbnRyeUluZ3JlZGllbnRzO1xuICB9XG5cbiAgZmluZEl0ZW1zVG9SZW1vdmUoY3VycmVudFJlY2lwZSkge1xuICAgIGxldCBpdGVtc1RvUmVtb3ZlID0gY3VycmVudFJlY2lwZS5pbmdyZWRpZW50cy5tYXAoaW5ncmVkaWVudCA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDogaW5ncmVkaWVudC5pZCxcbiAgICAgICAgYW1vdW50OiBNYXRoLnJvdW5kKGluZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50ICogMTAwKSAvIDEwMFxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGl0ZW1zVG9SZW1vdmU7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBQYW50cnk7XG4iLCJjbGFzcyBSZWNpcGUge1xuICBjb25zdHJ1Y3RvcihyZWNpcGUsIGluZ3JlZGllbnRzRGF0YSkge1xuICAgIHRoaXMubmFtZSA9IHJlY2lwZS5uYW1lO1xuICAgIHRoaXMuaWQgPSByZWNpcGUuaWQ7XG4gICAgdGhpcy5pbmdyZWRpZW50cyA9IHJlY2lwZS5pbmdyZWRpZW50cztcbiAgICB0aGlzLmluc3RydWN0aW9ucyA9IHJlY2lwZS5pbnN0cnVjdGlvbnM7XG4gICAgdGhpcy50YWdzID0gcmVjaXBlLnRhZ3M7XG4gICAgdGhpcy5pbmdyZWRpZW50c0RhdGEgPSBpbmdyZWRpZW50c0RhdGE7XG4gIH1cblxuICBjYWxjdWxhdGVDb3N0QW5kSW5ncmVkaWVudHMoKSB7XG4gICAgbGV0IGNvc3RDb3VudGVyID0gMDtcbiAgICBsZXQgaW5ncmVkaWVudHNVc2VkID0gW107XG4gICAgdGhpcy5pbmdyZWRpZW50cy5mb3JFYWNoKGluZ3JlZGllbnQgPT4ge1xuICAgICAgdGhpcy5pbmdyZWRpZW50c0RhdGEuZmluZChzcGVjaWZpY0luZ3JlZGllbnQgPT4ge1xuICAgICAgICBpZiAoc3BlY2lmaWNJbmdyZWRpZW50LmlkID09PSBpbmdyZWRpZW50LmlkKSB7XG4gICAgICAgICAgY29zdENvdW50ZXIgKz0gKyhzcGVjaWZpY0luZ3JlZGllbnQuZXN0aW1hdGVkQ29zdEluQ2VudHMgKlxuICAgICAgICAgIGluZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50KS50b0ZpeGVkKDEpO1xuICAgICAgICAgIGluZ3JlZGllbnRzVXNlZC5wdXNoKHNwZWNpZmljSW5ncmVkaWVudC5uYW1lKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pO1xuICAgIHJldHVybiB7IGNvc3RDb3VudGVyLCBpbmdyZWRpZW50c1VzZWQgfTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlY2lwZTtcbiIsImltcG9ydCAnLi9jc3MvYmFzZS5zY3NzJztcbmltcG9ydCAnLi9jc3Mvc3R5bGVzLnNjc3MnO1xuXG5pbXBvcnQgZG9tVXBkYXRlcyBmcm9tICcuL2RvbVVwZGF0ZXMnO1xuXG5pbXBvcnQgUGFudHJ5IGZyb20gJy4vcGFudHJ5JztcbmltcG9ydCBSZWNpcGUgZnJvbSAnLi9yZWNpcGUnO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi91c2VyJztcbmltcG9ydCBDb29rYm9vayBmcm9tICcuL2Nvb2tib29rJztcblxuY29uc3QgZmF2QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpZXctZmF2b3JpdGVzJyk7XG5jb25zdCBjb29rYm9va0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWV3LWNvb2tib29rJyk7XG5jb25zdCBwYW50cnlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmlldy1wYW50cnknKTtcbmNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZScpXG5jb25zdCBjYXJkQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtY2FyZHMnKTtcbmNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1pbnB1dCcpO1xuY29uc3QgY29va0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb29rLXJlY2lwZScpO1xubGV0IHVzZXIsIHBhbnRyeSwgY29va2Jvb2ssIGluZ3JlZGllbnRzO1xuXG5jb25zdCBpbnN0YW50aWF0ZVVzZXIgPSAodXNlcnNEYXRhKSA9PiB7XG4gIGxldCB1c2VySWQgPSAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNDkpICsgMSk7XG4gIGxldCBuZXdVc2VyID0gdXNlcnNEYXRhLmZpbmQodXNlciA9PiB7XG4gICAgcmV0dXJuIHVzZXIuaWQgPT09IE51bWJlcih1c2VySWQpO1xuICB9KTtcbiAgdXNlciA9IG5ldyBVc2VyKHVzZXJJZCwgbmV3VXNlci5uYW1lLCBuZXdVc2VyLnBhbnRyeSk7XG4gIHBhbnRyeSA9IG5ldyBQYW50cnkobmV3VXNlci5wYW50cnkpO1xufVxuXG5jb25zdCB1cGRhdGVVc2VyUGFudHJ5ID0gKGN1cnJlbnRVc2VySWQsIGFsbFVzZXJzKSA9PiB7XG4gIGNvbnN0IGFjdGl2ZVVzZXIgPSBhbGxVc2Vycy5maW5kKHVzZXIgPT4gdXNlci5pZCA9PT0gY3VycmVudFVzZXJJZCk7XG4gIHBhbnRyeSA9IG5ldyBQYW50cnkoYWN0aXZlVXNlci5wYW50cnkpXG59XG5cbmNvbnN0IHVwZGF0ZVVzZXJEYXRhID0gKCkgPT4ge1xuICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS91c2VycycpXG4gICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiB1cGRhdGVVc2VyUGFudHJ5KHVzZXIuaWQsIGRhdGEpKVxuICAgIC5jYXRjaChlcnIgPT4gZG9tVXBkYXRlcy5zaG93U3VjY2Vzc01lc3NhZ2UoJ09vcHMhIFNvbWV0aGluZyB3ZW50IHdyb25nJykpO1xufVxuXG5cbmNvbnN0IGdldERhdGEgPSAoKSA9PiB7XG4gIGxldCB1c2Vyc1Byb21pc2UgPSBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS91c2VycycpXG4gICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xuICBsZXQgcmVjaXBlc1Byb21pc2UgPSBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS9yZWNpcGVzJylcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XG4gIGxldCBpbmdyZWRpZW50c1Byb21pc2UgPSBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS9pbmdyZWRpZW50cycpXG4gICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xuXG4gIFByb21pc2UuYWxsKFt1c2Vyc1Byb21pc2UsIHJlY2lwZXNQcm9taXNlLCBpbmdyZWRpZW50c1Byb21pc2VdKVxuICAgIC50aGVuKGRhdGFzZXQgPT4ge1xuICAgICAgaW5zdGFudGlhdGVVc2VyKGRhdGFzZXRbMF0pO1xuICAgICAgY29va2Jvb2sgPSBuZXcgQ29va2Jvb2soZGF0YXNldFsxXSk7XG4gICAgICBpbmdyZWRpZW50cyA9IGRhdGFzZXRbMl07XG4gICAgICBkb21VcGRhdGVzLmdyZWV0VXNlcih1c2VyKTtcbiAgICAgIGRvbVVwZGF0ZXMuZHJhd0NhcmRzKGNvb2tib29rLnJlY2lwZXMsIGNhcmRBcmVhLCB1c2VyKTtcbiAgICB9KVxuICAgIC5jYXRjaChlcnIgPT4gZG9tVXBkYXRlcy5zaG93U3VjY2Vzc01lc3NhZ2UoJ09vcHMhIFNvbWV0aGluZyB3ZW50IHdyb25nJykpO1xufVxuXG5jb25zdCBwb3N0RGF0YSA9IChpbmdyZWRpZW50VG9SZW1vdmUpID0+IHtcbiAgbGV0IGJvZHkgPSB7XG4gICAgdXNlcklEOiArYCR7dXNlci5pZH1gLFxuICAgIGluZ3JlZGllbnRJRDogK2Ake2luZ3JlZGllbnRUb1JlbW92ZS5pZH1gLFxuICAgIGluZ3JlZGllbnRNb2RpZmljYXRpb246IC1gJHtpbmdyZWRpZW50VG9SZW1vdmUuYW1vdW50fWBcbiAgfTtcbiAgcmV0dXJuIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL3VzZXJzJywge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpIH1cbiAgKVxufVxuXG5jb25zdCBvblN0YXJ0dXAgPSAoKSA9PiB7XG4gIGdldERhdGEoKTtcbn1cblxuY29uc3QgdXBkYXRlUGFudHJ5ID0gKCkgPT4ge1xuICBsZXQgcmVjaXBlSWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ncmVkaWVudHMnKS5pZDtcbiAgbGV0IHJlY2lwZURpc3BsYXllZCA9IGNvb2tib29rLnJlY2lwZXMuZmluZChyZWNpcGUgPT4gK3JlY2lwZS5pZCA9PT0gK3JlY2lwZUlkKTtcbiAgY29uc3QgY3VycmVudFJlY2lwZSA9IG5ldyBSZWNpcGUocmVjaXBlRGlzcGxheWVkLCBpbmdyZWRpZW50cyk7XG4gIGNvbnN0IGl0ZW1zVG9SZW1vdmUgPSBwYW50cnkuZmluZEl0ZW1zVG9SZW1vdmUoY3VycmVudFJlY2lwZSk7XG4gIFByb21pc2UuYWxsKGl0ZW1zVG9SZW1vdmUubWFwKGl0ZW0gPT4gcG9zdERhdGEoaXRlbSkpKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChyZXNwb25zZS5tYXAocmVzID0+IHJlcy5qc29uKCkpKVxuICAgIH0pXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICBkb21VcGRhdGVzLnNob3dTdWNjZXNzTWVzc2FnZSgnWW91ciBwYW50cnkgaGFzIGJlZW4gdXBkYXRlZCEnKVxuICAgICAgdXBkYXRlVXNlckRhdGEoKTtcbiAgICB9KVxuICAgIC5jYXRjaChlcnIgPT4gZG9tVXBkYXRlcy5zaG93U3VjY2Vzc01lc3NhZ2UoJ1lvdSBkb25cXCd0IGhhdmUgZW5vdWdoIGluZ3JlZGllbnRzIScpKVxuICBkb21VcGRhdGVzLmhpZGVDb29rQnV0dG9uKCk7XG59XG5cbmNvbnN0IGdvVG9Ib21lID0gKCkgPT4ge1xuICBkb21VcGRhdGVzLmhpZGVDaGVmTG9nb3MoKTtcbiAgZG9tVXBkYXRlcy5oaWRlU3VjY2Vzc01lc3NhZ2UoKTtcbiAgZG9tVXBkYXRlcy5yZXZlYWxTZWFyY2hCYXIoKVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZS1jbCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3ItbWVzc2FnZScpLmlubmVyVGV4dCA9ICcnO1xuICBkb21VcGRhdGVzLmRyYXdDYXJkcyhjb29rYm9vay5yZWNpcGVzLCBjYXJkQXJlYSwgdXNlcik7XG4gIGRvbVVwZGF0ZXMuaGlkZVJlY2lwZURldGFpbHMoKTtcbiAgZG9tVXBkYXRlcy5oaWRlQ29va0J1dHRvbigpO1xufVxuXG5jb25zdCBjaGFuZ2VQYWdlID0gKGV2ZW50LCBkYXRhc2V0KSA9PiB7XG4gIGRvbVVwZGF0ZXMuaGlkZVJlY2lwZURldGFpbHMoKTtcbiAgZG9tVXBkYXRlcy5oaWRlU3VjY2Vzc01lc3NhZ2UoKTtcbiAgZG9tVXBkYXRlcy5oaWRlQ29va0J1dHRvbigpXG4gIGNvbnN0IGNsYXNzTGlzdCA9IGV2ZW50LnRhcmdldC5jbGFzc0xpc3RcbiAgY29uc3QgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yLW1lc3NhZ2UnKTtcbiAgY29uc3QgeyBlcnJvciwgc2VsZWN0b3IgfSA9IGRvbVVwZGF0ZXMuZGV0ZXJtaW5lUGFnZShjbGFzc0xpc3QpO1xuICBpZiAoIWRhdGFzZXQubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGVycm9yTWVzc2FnZS5pbm5lclRleHQgPSBlcnJvclxuICB9IGVsc2Uge1xuICAgIGRpc3BsYXlQYWdlKGRhdGFzZXQsIHNlbGVjdG9yKVxuICB9XG59XG5jb25zdCBkaXNwbGF5UGFnZSA9IChkYXRhc2V0LCBzZWxlY3RvcikgPT4ge1xuICBkb21VcGRhdGVzLmhpZGVDaGVmTG9nb3MoKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIGNhcmRBcmVhLmlubmVySFRNTCA9ICcnO1xuICBpZiAoc2VsZWN0b3IgPT09ICcucGFudHJ5LWNsJykge1xuICAgIGxldCBpdGVtc0luUGFudHJ5ID0gcGFudHJ5LmdldFBhbnRyeShpbmdyZWRpZW50cyk7XG4gICAgZG9tVXBkYXRlcy5kaXNwbGF5UGFudHJ5KGl0ZW1zSW5QYW50cnkpO1xuICB9IGVsc2Uge1xuICAgIGRvbVVwZGF0ZXMuZHJhd0NhcmRzKGRhdGFzZXQsIGNhcmRBcmVhLCB1c2VyKTtcbiAgfVxufVxuXG5jb25zdCBjYXJkQnV0dG9uQ29uZGl0aW9uYWxzID0gKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYXZvcml0ZScpKSB7XG4gICAgZG9tVXBkYXRlcy51cGRhdGVCdXR0b25TdGF0dXModXNlciwgY2FyZEFyZWEsIGNvb2tib29rLCBldmVudCk7XG4gIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2FyZC1waWN0dXJlJykpIHtcbiAgICBkb21VcGRhdGVzLmRpc3BsYXlEaXJlY3Rpb25zKGV2ZW50LCBjb29rYm9vaywgaW5ncmVkaWVudHMsIGNhcmRBcmVhLCBwYW50cnkpO1xuICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZC1idXR0b24nKSkge1xuICAgIGRvbVVwZGF0ZXMudXBkYXRlQnV0dG9uU3RhdHVzKHVzZXIsIGNhcmRBcmVhLCBjb29rYm9vaywgZXZlbnQpXG4gIH1cbn1cblxuY29uc3Qgc2VhcmNoUmVjaXBlc0J5TmFtZU9ySW5ncmVkaWVudCA9IChzdHJpbmcpID0+IHtcbiAgbGV0IGRhdGFzZXQgPSAnJztcbiAgY29uc3QgZmF2Q2hlZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtY2wnKTtcbiAgY29uc3QgY29va0NoZWYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29vay1jbCcpO1xuICBpZiAoIWZhdkNoZWYuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuICAgIGRhdGFzZXQgPSAnZmF2b3JpdGVSZWNpcGVzJztcbiAgfSBlbHNlIGlmICghY29va0NoZWYuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuICAgIGRhdGFzZXQgPSAncmVjaXBlc1RvQ29vayc7XG4gIH1cbiAgY29uc3QgbWF0Y2hpbmdSZWNpcGVzID0gdXNlci5maW5kUmVjaXBlcyhzdHJpbmcsIGNvb2tib29rLnJlY2lwZXMsIGRhdGFzZXQpO1xuICBkb21VcGRhdGVzLmRyYXdDYXJkcyhtYXRjaGluZ1JlY2lwZXMsIGNhcmRBcmVhLCB1c2VyKTtcbn1cblxud2luZG93Lm9ubG9hZCA9IG9uU3RhcnR1cCgpO1xuaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdvVG9Ib21lKTtcbmZhdkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY2hhbmdlUGFnZShldmVudCwgdXNlci5mYXZvcml0ZVJlY2lwZXMpXG59KTtcbmNhcmRBcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gIGNhcmRCdXR0b25Db25kaXRpb25hbHMoZXZlbnQpXG59KTtcbmNvb2tib29rQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjaGFuZ2VQYWdlKGV2ZW50LCB1c2VyLnJlY2lwZXNUb0Nvb2spO1xufSk7XG5zZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICgpID0+IHtcbiAgc2VhcmNoUmVjaXBlc0J5TmFtZU9ySW5ncmVkaWVudChzZWFyY2hJbnB1dC52YWx1ZSk7XG59KTtcbnBhbnRyeUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY2hhbmdlUGFnZShldmVudCwgcGFudHJ5LmNvbnRlbnRzKVxufSk7XG5jb29rQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdXBkYXRlUGFudHJ5KTtcbiIsImNsYXNzIFVzZXIge1xuICBjb25zdHJ1Y3RvcihpZCwgbmFtZSwgcGFudHJ5KSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5wYW50cnkgPSBwYW50cnk7XG4gICAgdGhpcy5mYXZvcml0ZVJlY2lwZXMgPSBbXTtcbiAgICB0aGlzLnJlY2lwZXNUb0Nvb2sgPSBbXTtcbiAgfVxuXG4gIHNhdmVSZWNpcGUocmVjaXBlLCBjYXRlZ29yeSkge1xuICAgIGlmICghdGhpc1tjYXRlZ29yeV0uaW5jbHVkZXMocmVjaXBlKSkge1xuICAgICAgdGhpc1tjYXRlZ29yeV0ucHVzaChyZWNpcGUpXG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlUmVjaXBlKHJlY2lwZSwgY2F0ZWdvcnkpIHtcbiAgICBjb25zdCBpID0gdGhpc1tjYXRlZ29yeV0uaW5kZXhPZihyZWNpcGUpO1xuICAgIHRoaXNbY2F0ZWdvcnldLnNwbGljZShpLCAxKVxuICB9XG5cbiAgZmlsdGVyRmF2b3JpdGVzKHRhZykge1xuICAgIHJldHVybiB0aGlzLmZhdm9yaXRlUmVjaXBlcy5maWx0ZXIocmVjaXBlID0+IHtcbiAgICAgIHJldHVybiByZWNpcGUudGFncy5pbmNsdWRlcyh0YWcpO1xuICAgIH0pO1xuICB9XG5cbiAgZmluZFJlY2lwZXMoc3RyaW5nVG9TZWFyY2gsIHJlY2lwZXMsIGNhdGVnb3J5KSB7XG4gICAgbGV0IG1hdGNoaW5nUmVjaXBlc0J5TmFtZSA9IHJlY2lwZXMuZmlsdGVyKHJlY2lwZSA9PiB7XG4gICAgICByZXR1cm4gcmVjaXBlLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzdHJpbmdUb1NlYXJjaC50b0xvd2VyQ2FzZSgpKVxuICAgIH0pXG4gICAgaWYgKGNhdGVnb3J5ICE9PSAnJykge1xuICAgICAgbGV0IHJlY2lwZXNTdG9yZWQgPSB0aGlzW2NhdGVnb3J5XS5tYXAoaXRlbSA9PiAraXRlbS5pZCk7XG4gICAgICBjb25zdCBtYXRjaGluZ1JlY2lwZXNPblBhZ2UgPSBtYXRjaGluZ1JlY2lwZXNCeU5hbWUuZmlsdGVyKHJlY2lwZSA9PiB7XG4gICAgICAgIHJldHVybiByZWNpcGVzU3RvcmVkLmluY2x1ZGVzKHJlY2lwZS5pZClcbiAgICAgIH0pXG4gICAgICByZXR1cm4gbWF0Y2hpbmdSZWNpcGVzT25QYWdlXG4gICAgfVxuICAgIHJldHVybiBtYXRjaGluZ1JlY2lwZXNCeU5hbWVcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9