/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".hello {\n    color: rgb(79, 234, 87);\n}\n\n.burger-container{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.lettuce{\n    background-color: green;\n}\n\n.tomato{\n    background-color: red;\n    border-radius: 50%;\n}\n\n.ketchup{\n    background-color: red;\n    height:15px;\n}\n\n.onion{\n    background-color: purple;\n    border-radius: 50%;\n}\n\n.burger-topping{\n    height: 75px;\n    width: 75px\n}\n\n.customer-queue{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 150px;\n    width: 100vw;\n    border-bottom: 2px solid black;\n}\n\n.customer-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.plate{\n    height: 100px;\n    width: 100px;\n    border: 2px solid green;\n    border-radius: 50%;\n}\n\n.burger-icon{\n    \n    height: 75px;\n    width: 75px; \n}", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,WAAW;AACf;;AAEA;IACI,wBAAwB;IACxB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ;AACJ;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,YAAY;IACZ,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;;IAEI,YAAY;IACZ,WAAW;AACf","sourcesContent":[".hello {\n    color: rgb(79, 234, 87);\n}\n\n.burger-container{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.lettuce{\n    background-color: green;\n}\n\n.tomato{\n    background-color: red;\n    border-radius: 50%;\n}\n\n.ketchup{\n    background-color: red;\n    height:15px;\n}\n\n.onion{\n    background-color: purple;\n    border-radius: 50%;\n}\n\n.burger-topping{\n    height: 75px;\n    width: 75px\n}\n\n.customer-queue{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 150px;\n    width: 100vw;\n    border-bottom: 2px solid black;\n}\n\n.customer-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.plate{\n    height: 100px;\n    width: 100px;\n    border: 2px solid green;\n    border-radius: 50%;\n}\n\n.burger-icon{\n    \n    height: 75px;\n    width: 75px; \n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/javascript/dom.js":
/*!*******************************!*\
  !*** ./src/javascript/dom.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearDom": () => (/* binding */ clearDom),
/* harmony export */   "clearQueue": () => (/* binding */ clearQueue),
/* harmony export */   "deleteCustomerDom": () => (/* binding */ deleteCustomerDom),
/* harmony export */   "makeBurgerStationDom": () => (/* binding */ makeBurgerStationDom),
/* harmony export */   "makeCustomerDom": () => (/* binding */ makeCustomerDom)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/javascript/utils.js");
/* harmony import */ var _images_customericon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/customericon.png */ "./src/images/customericon.png");




function clearDom(){
    const container = document.querySelector(".container");
    while(container.firstChild){
        container.firstChild.remove();
    }
}

function clearQueue(){
    const container = document.querySelector(".container");
    const queue = document.querySelector(".customer-queue");
    while(queue.firstChild){
        queue.firstChild.remove();
    }
}

function makeBurgerStationDom(){
    const container = document.querySelector(".container");
    const burgerContainer = document.querySelector(".burger-container")
    burgerContainer.classList.add("burger-station")
    const buns = document.createElement("div")
    const lettuce = document.createElement("div")
    const tomato = document.createElement("div")
    const ketchup = document.createElement("div")
    const onion = document.createElement("div")
    buns.classList.add("buns", "burger-topping")
    lettuce.classList.add("lettuce", "burger-topping");
    tomato.classList.add("tomato", "burger-topping");
    ketchup.classList.add("ketchup", "burger-topping");
    onion.classList.add("onion", "burger-topping")
    burgerContainer.append(buns, lettuce, tomato, ketchup, onion, buns);
    container.append(burgerContainer)
}

function makeCustomerDom(queue){
    const container = document.querySelector(".container");
    const domQueue = document.querySelector(".customer-queue");
    
    for(let i = 0; i < queue.length; i++){
        const customerContainer = document.createElement("div");
        const customer = document.createElement("div");
        const customerName = document.createElement("h3");
        const customerIcon = new Image();

        customerContainer.classList.add("customer-container")
        customerIcon.classList.add("customer-icon")
        customerIcon.src = _images_customericon_png__WEBPACK_IMPORTED_MODULE_1__;
        customer.classList.add("customer")
        customer.append(customerIcon);
        customer.setAttribute('id', `${i}`)
        customerName.innerText = `${queue[i].name}`

        customerContainer.append(customer, customerName)
        displayCustomerOrder(queue[i], customerContainer)
        ;(0,_utils__WEBPACK_IMPORTED_MODULE_0__.showBurgerIcon)(queue[i].foodRequest, customerContainer)
        domQueue.append(customerContainer);
    } 
}

function displayCustomerOrder(customer, parentEle){
    const customerOrder = document.createElement("div");
    const customerText = document.createElement("p")
    const customerSpecifics = document.createElement("p")
    const customerText2 = document.createElement("p")
    if(typeof customer.order[0] === "object"){
        customerText.innerText = customer.order[0].name;
        let specifics = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.displayCustomerSpecifics)(customer.order[0], customerSpecifics)
        customerSpecifics.innerText = `${specifics}`
    }else {customerText.innerText = customer.order[0]
            customerSpecifics.innerText = ""}
    customerText2.innerText = customer.order[1];
    customerOrder.classList.add("customer-order")
    customerOrder.append(customerText, customerSpecifics, customerText2)
    parentEle.append(customerOrder)
}

function deleteCustomerDom(i){
    document.getElementById(`${i}`).remove();
}

/***/ }),

/***/ "./src/javascript/draganddrop.js":
/*!***************************************!*\
  !*** ./src/javascript/draganddrop.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dragAndDrop": () => (/* binding */ dragAndDrop)
/* harmony export */ });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/javascript/game.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/javascript/utils.js");



let dataObject = {
    foodObj: "null",
    drinkObj: "null",
    id: "null",
    getFood(){
        return this.foodObj
    }
}

function dragAndDrop(){
    document.addEventListener("DOMContentLoaded", () => {

        document.body.addEventListener('dragstart', handleDragStart);
        document.body.addEventListener('drop', handleDrop);
        document.body.addEventListener('dragover', handleOver);

    })
    
    function handleDragStart(e){
        let obj = e.target;
        if(!obj.closest('.draggable')) return;
        if(obj.classList.contains("draggable")){
            obj = obj.firstElementChild
        }
        if(obj.parentElement.classList.contains("buns")){
            const burger = new _game__WEBPACK_IMPORTED_MODULE_0__.Burger(0, 0, 0, 0);
            dataObject.foodObj = burger
            console.log(burger, dataObject)
        }else if(obj.parentElement.classList.contains("pizza")){
            const pizza = new _game__WEBPACK_IMPORTED_MODULE_0__.Pizza();
            dataObject.foodObj = pizza;
        }else if(obj.parentElement.classList.contains("sushi")){
            const sushi = new _game__WEBPACK_IMPORTED_MODULE_0__.Sushi();
            dataObject.foodObj = sushi;
        }else if(obj.parentElement.classList.contains("pastry")){
            const pastry = new _game__WEBPACK_IMPORTED_MODULE_0__.Pastry();
            dataObject.foodObj = pastry;
        }
        else if(obj.parentElement.classList.contains("addon")){
            let topping = e.target.dataset.ingredient;
            dataObject.foodObj[topping] = 1;
        }
        // console.log(dataObject.foodObj)
}
    
    
    function handleDrop(e){
        let dropZone = e.target;
        if(!dropZone.closest(".drop-zone")) return;
        if(dropZone.classList.contains("burger-icon")){
            dropZone = dropZone.parentElement
        }

        e.preventDefault();
        let num = dropZone.dataset.plate
        console.log(`num = ${num}`)
        if(_game__WEBPACK_IMPORTED_MODULE_0__.player[num].length === 0 || undefined){
            _game__WEBPACK_IMPORTED_MODULE_0__.player[num].push(dataObject.foodObj)
            console.log(dataObject.foodObj, "poop")
        }else{
            _game__WEBPACK_IMPORTED_MODULE_0__.player[num][0] = dataObject.foodObj
            //player[num].splice(0, 0, dataObject.getFood())
            console.log(dataObject.foodObj, "uwuwuw")
        }
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.clearPlate)(num);
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.showBurgerIcon)(_game__WEBPACK_IMPORTED_MODULE_0__.player[num][0], dropZone)
        // console.log(player[`${num}`][0])
        console.log(`PLATE CONTENTS: `, _game__WEBPACK_IMPORTED_MODULE_0__.player)
    }
    
    
    function handleOver(e){
    e.preventDefault();
    }
}

/***/ }),

/***/ "./src/javascript/flow.js":
/*!********************************!*\
  !*** ./src/javascript/flow.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Game": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/javascript/game.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/javascript/utils.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/javascript/dom.js");





class Game{
    constructor(){
        this.queue = new Array()
    }

    addNewCustomer(newGame){
        if(this.queue.length < 3 ){
            let difficulty = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.setDifficulty)();
            let name = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.randomName)(newGame.queue);
            const newCustomer = new _game__WEBPACK_IMPORTED_MODULE_0__.Customer(difficulty, "null", "null", name);
            this.queue.push(newCustomer);
            let i = this.queue.indexOf(newCustomer)
            console.log(`${newCustomer.name} walked in the door`, this.queue)
            // setTimeout(newCustomer.makeOrder, 1000)
            newCustomer.makeOrder();
            newCustomer.startTimer(i, newGame);
            (0,_dom__WEBPACK_IMPORTED_MODULE_2__.clearQueue)()
            ;(0,_dom__WEBPACK_IMPORTED_MODULE_2__.makeCustomerDom)(newGame.queue);
            }else console.log("queue full")
        }
    
        gameLoop(newGame){
            setInterval(() => {this.addNewCustomer(newGame);}, 6000);
            //this.addNewCustomer();
        }
}

    


/***/ }),

/***/ "./src/javascript/game.js":
/*!********************************!*\
  !*** ./src/javascript/game.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Burger": () => (/* binding */ Burger),
/* harmony export */   "Customer": () => (/* binding */ Customer),
/* harmony export */   "Pastry": () => (/* binding */ Pastry),
/* harmony export */   "Pizza": () => (/* binding */ Pizza),
/* harmony export */   "Plate": () => (/* binding */ Plate),
/* harmony export */   "Sushi": () => (/* binding */ Sushi),
/* harmony export */   "player": () => (/* binding */ player)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/javascript/index.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./src/javascript/utils.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ "./src/javascript/dom.js");




class Customer {
    constructor(difficulty, foodRequest, drinkRequest, name){
        this.difficulty = difficulty
        this.foodRequest = foodRequest
        this.drinkRequest = drinkRequest
        this.name = name
        this.order = []
    }

    makeOrder(){
        this.makeFoodRequest();
        this.makeDrinkRequest();
        if(this.foodRequest === "burger"){
            this.makeBurgerRequest();
            this.order.push(this.foodRequest);
            this.order.push(this.drinkRequest);
        }else if(this.foodRequest === "sushi"){
            this.makeSushiRequest();
            this.order.push(this.foodRequest);
            this.order.push(this.drinkRequest);
        }else if(this.foodRequest === "pizza"){
            this.makePizzaRequest();
            this.order.push(this.foodRequest);
            this.order.push(this.drinkRequest);
        }else if(this.foodRequest === "pastry"){
            this.makePastryRequest();
            this.order.push(this.foodRequest);
            this.order.push(this.drinkRequest);
        }
        //this.startTimer()
    }

    makeFoodRequest(){
        //let num = generateRandom(1, 4);
        let num = 1;
        if (num === 1){
            this.foodRequest = "burger";
        }else if(num === 2){
            this.foodRequest = "sushi";
        }else if(num === 3){
            this.foodRequest = "pizza";
        }else if(num === 4){
            this.foodRequest = "pastry";
        }
    }
    makeDrinkRequest() {
        let num = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.generateRandom)(1, 4);
        if (num === 1){
            this.drinkRequest = "coffee";
        }else if(num === 2){
            this.drinkRequest = "tea"
        }else if(num === 3){
            this.drinkRequest = "milkshake"
        }else if(num === 4){
            this.drinkRequest = "soda"
        }
    }

    makeBurgerRequest(){
        let lettuce = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.generateRandom)(0, 1);
        let tomato = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.generateRandom)(0, 1);
        let onion = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.generateRandom)(0, 1);
        this.foodRequest = new Burger(lettuce, tomato, onion);
    }

    makeSushiRequest(){
        let tuna = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.generateRandom)(0, 1);
        let salmon;
        if(tuna === 0){
            salmon = 1
        } else salmon = 0;
        this.foodRequest = new Sushi(tuna, salmon);
    }

    makePizzaRequest(){
        this.foodRequest = new Pizza();
    }

    makePastryRequest(){
        this.foodRequest = new Pastry();
    }

    checkPlate(plate, player){
        if(plate.contents.some(i => i === this.foodRequest) && plate.contents.some(i => i === this.drinkRequest)){
            player.addMoney(10);
        }else if(plate.contents.some(i => i === this.foodRequest) || plate.contents.some(i => i === this.drinkRequest)){
            player.addMoney(5)
        }else{
            player.addMoney(0);
        }
    }

    startTimer(index, newGame){
        let time;
    if(this.difficulty === "easy"){
        time = 14000;
    }else if(this.difficulty ==="medium"){
        time = 11000
    } else time = 8000
    setTimeout(function(){this.removeFromQueue(index, newGame);}.bind(this), time)
    }

    removeFromQueue(index, newGame){
        newGame.queue.splice(newGame.queue.indexOf(this), 1);
        (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.clearQueue)();
        (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.makeCustomerDom)(newGame.queue);
        console.log(`${this.name} is fed up and is leaving T-T`, newGame.queue) 
    }

}

class Plate{
    constructor(){
        this.contents = [];
    }

    addFood(content){
        if(this.contents.length <= 2){
            this.contents.push(content)
        }
    }
    addDrink(content){
        if(this.contents.length <= 2){
            this.contents.push(content)
        }
    }
}

class Burger {
    constructor(lettuce, tomato, onion){
        this.lettuce = lettuce;
        this.tomato = tomato;
        this.onion = onion;
        this.name = "burger"
    }
}

class Sushi {
    constructor(tuna, salmon){
        this.tuna = tuna
        this.salmon = salmon
        this.name = "sushi"
    }
}

class Pizza {
    constructor(){
        this.toppings = "null";
        this.name ="pizza"
    }
}

class Pastry {
    constructor(){
        this.cream = "null";
        this.name = "pastry"
    }
}

const player = {
    money: 0,
    1: [],
    2: [],
    3: [],
    addMoney(amount){
        this.money += amount
    }
}

    




/***/ }),

/***/ "./src/javascript/index.js":
/*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/javascript/utils.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ "./src/javascript/game.js");
/* harmony import */ var _flow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flow */ "./src/javascript/flow.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom */ "./src/javascript/dom.js");
/* harmony import */ var _draganddrop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./draganddrop */ "./src/javascript/draganddrop.js");






// let difficulty = setDifficulty();
// const newCustomer = new Customer(difficulty, "null", "null");
// const newPlate = new Plate();
    
// newCustomer.makeOrder();
// newPlate.addDrink("tea");
// newPlate.addFood("sushi");
// newCustomer.checkPlate(newPlate, player);
// console.log(newCustomer, newPlate, player.money)
const newGame = new _flow__WEBPACK_IMPORTED_MODULE_3__.Game()
newGame.gameLoop(newGame)
//makeBurgerStationDom();
;(0,_draganddrop__WEBPACK_IMPORTED_MODULE_5__.dragAndDrop)()

/***/ }),

/***/ "./src/javascript/utils.js":
/*!*********************************!*\
  !*** ./src/javascript/utils.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearPlate": () => (/* binding */ clearPlate),
/* harmony export */   "displayCustomerSpecifics": () => (/* binding */ displayCustomerSpecifics),
/* harmony export */   "generateRandom": () => (/* binding */ generateRandom),
/* harmony export */   "makeEle": () => (/* binding */ makeEle),
/* harmony export */   "nameArray": () => (/* binding */ nameArray),
/* harmony export */   "randomName": () => (/* binding */ randomName),
/* harmony export */   "setDifficulty": () => (/* binding */ setDifficulty),
/* harmony export */   "showBurgerIcon": () => (/* binding */ showBurgerIcon)
/* harmony export */ });
/* harmony import */ var _images_burger_all_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/burger_all.png */ "./src/images/burger_all.png");
/* harmony import */ var _images_burger_plain_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/burger_plain.png */ "./src/images/burger_plain.png");
/* harmony import */ var _images_burger_buns_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/burger_buns.png */ "./src/images/burger_buns.png");
/* harmony import */ var _images_burger_meat_tomato_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/burger_meat_tomato.png */ "./src/images/burger_meat_tomato.png");
/* harmony import */ var _images_burger_meat_onion_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/burger_meat_onion.png */ "./src/images/burger_meat_onion.png");
/* harmony import */ var _images_burger_meat_tomato_onion_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/burger_meat_tomato_onion.png */ "./src/images/burger_meat_tomato_onion.png");
/* harmony import */ var _images_burger_meat_lettuce_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/burger_meat_lettuce.png */ "./src/images/burger_meat_lettuce.png");
/* harmony import */ var _images_burger_meat_lettuce_onion_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/burger_meat_lettuce_onion.png */ "./src/images/burger_meat_lettuce_onion.png");
/* harmony import */ var _images_burger_meat_tomato_lettuce_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/burger_meat_tomato_lettuce.png */ "./src/images/burger_meat_tomato_lettuce.png");










function setDifficulty(){
    let num = (Math.random() * 9);
    let difficulty;
    if(num < 4.5){
        difficulty = "easy";
    } else if(num >= 4.5 && num < 8){
        difficulty = "medium"
    }else if(num >= 8){
        difficulty = "hard";
    }
    return difficulty
}

function generateRandom(min, max){
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

function makeEle(ele, addClass){
    const item = document.createElement(ele);
    item.classList.add(addClass);
}

const nameArray = ["gary", "stu", "jana", "ashlee", "vikram", "ali", "jerry",
 "ty", "kyle", "dana", "stephen", "jessica", "arnie", "amy", "roger", "milo", "manny",
"bill", "fred", "sarah", "claire", "anne-marie", "jade", "ryan", "eli", "joe", "tabi",
"scott", "rita", "angelica", "maggie"]

const randomName = function(queue){
    let i = generateRandom(0, 30)
    const name = nameArray[i];
    if(queue.includes(`${name}`) === false){
        return name
    }
    randomName(queue)
}

function displayCustomerSpecifics(obj, ele){
    // let para;
    // for(let i in obj){
    //     if(i === 1){
    //         para += ` ${i}`
    //     }
    // }
    // return para
    //console.log(obj.filter)
    //const keys = Object.keys(obj);
    //const filtered = keys.filter(k => obj[k] === true)
    const values = Object.keys(obj).filter(key => obj[key]);
    return values
    //return keys.toString();
}

function clearPlate(i){
    let plate = document.querySelector(`[data-plate="${i}"]`)
    while(plate.firstChild){
        plate.firstChild.remove();
    }
    console.log(plate)
}

function showBurgerIcon(obj, ele) {
    let burgerPic = new Image();
    burgerPic.classList.add("burger-icon")
    if(ele.classList.contains("drop-zone")){
        burgerPic.classList.add("drop-zone")
    }
    
    if(
        obj.lettuce == 1 &&
        obj.tomato == 0 &&
        obj.onion == 0){
            burgerPic.src = _images_burger_meat_lettuce_png__WEBPACK_IMPORTED_MODULE_6__;
        }
    else if(
        obj.lettuce == 0 &&
        obj.tomato == 1 &&
        obj.onion == 0){
            burgerPic.src = _images_burger_meat_tomato_png__WEBPACK_IMPORTED_MODULE_3__;
        }
    else if(
        obj.lettuce == 0 &&
        obj.tomato == 0 &&
        obj.onion == 1){
            burgerPic.src = _images_burger_meat_onion_png__WEBPACK_IMPORTED_MODULE_4__;
        }
    else if(
        obj.lettuce == 1 &&
        obj.tomato == 1 &&
        obj.onion == 0){
            burgerPic.src = _images_burger_meat_tomato_lettuce_png__WEBPACK_IMPORTED_MODULE_8__;
        }
    else if(
        obj.lettuce == 0 &&
        obj.tomato == 1 &&
        obj.onion == 1){
            burgerPic.src = _images_burger_meat_tomato_onion_png__WEBPACK_IMPORTED_MODULE_5__;
        }
    else if(
        obj.lettuce == 1 &&
        obj.tomato == 0 &&
        obj.onion == 1){
            burgerPic.src = _images_burger_meat_lettuce_onion_png__WEBPACK_IMPORTED_MODULE_7__;
        }
    else if(
        obj.lettuce == 1 &&
        obj.tomato == 1 &&
        obj.onion == 1){
            burgerPic.src = _images_burger_all_png__WEBPACK_IMPORTED_MODULE_0__;
        }
    else if(
        obj.lettuce == 0 &&
        obj.tomato == 0 &&
        obj.onion == 0){
            burgerPic.src = _images_burger_plain_png__WEBPACK_IMPORTED_MODULE_1__;
        }
        ele.append(burgerPic);
}

/***/ }),

/***/ "./src/images/burger_all.png":
/*!***********************************!*\
  !*** ./src/images/burger_all.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ead3514f916dd375ff64.png";

/***/ }),

/***/ "./src/images/burger_buns.png":
/*!************************************!*\
  !*** ./src/images/burger_buns.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "43f043f632ab4d39f4b7.png";

/***/ }),

/***/ "./src/images/burger_meat_lettuce.png":
/*!********************************************!*\
  !*** ./src/images/burger_meat_lettuce.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5898a4c488f88bcea206.png";

/***/ }),

/***/ "./src/images/burger_meat_lettuce_onion.png":
/*!**************************************************!*\
  !*** ./src/images/burger_meat_lettuce_onion.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "778181891f69e13f3b45.png";

/***/ }),

/***/ "./src/images/burger_meat_onion.png":
/*!******************************************!*\
  !*** ./src/images/burger_meat_onion.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "da20b841d3cb311c9653.png";

/***/ }),

/***/ "./src/images/burger_meat_tomato.png":
/*!*******************************************!*\
  !*** ./src/images/burger_meat_tomato.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "62a85d8609c7637f5b31.png";

/***/ }),

/***/ "./src/images/burger_meat_tomato_lettuce.png":
/*!***************************************************!*\
  !*** ./src/images/burger_meat_tomato_lettuce.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c7fc679b9de7945fa120.png";

/***/ }),

/***/ "./src/images/burger_meat_tomato_onion.png":
/*!*************************************************!*\
  !*** ./src/images/burger_meat_tomato_onion.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7681e60f80d2af2d4c6a.png";

/***/ }),

/***/ "./src/images/burger_plain.png":
/*!*************************************!*\
  !*** ./src/images/burger_plain.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d196d7892b3445cc3a37.png";

/***/ }),

/***/ "./src/images/customericon.png":
/*!*************************************!*\
  !*** ./src/images/customericon.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c79eb9f1b9472dd3c0ba.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/javascript/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map