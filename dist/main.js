/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/painted-grey-background-with-metal-texture.jpg */ "./src/img/painted-grey-background-with-metal-texture.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Pacifico&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/*my own styling*/


body, html{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100%;
    height:100%;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover;
}

h1{
    color: black;
    font-size: 70px;
    font-weight: 500;
    text-align: center;
    font-family: 'Black Ops One', cursive;
}

.main{
    display:flex;
    justify-content:flex-start;
    align-items:center;
    width: 100%;
    height: 80%;
}

.messageBoard{
    text-align: center;
    font-size: 40px;
    font-weight: 300;
    height:40px;
    width: 400px;
    background-color: whitesmoke;
    border: 2px;
    border-color: black;
    border-radius: 5px;
    border-style: groove;
    margin-top: 30px;
    overflow: hidden;
}

.fleetDiv{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    margin-left: 60px;
    margin-top: 60px;
    width: 300px;
    height: 520px;
}

.rotateImg{
    width: 20px !important;
    height:auto !important;
    padding-right: 20px;
}

.battleship img{
    width: 180px;
    height:43px;
    margin-bottom: 37px;
    transform: rotate(0deg);
}

.carrier img{
    width: 240px;
    height:43px;
    margin-bottom: 37px;
    transform: rotate(0deg);
}

.destroyer img{
    width: 130px;
    height:43px;
    margin-bottom: 37px;
    transform: rotate(0deg);
}

.submarine img{
    width: 130px;
    height:43px;
    margin-bottom: 37px;
    transform: rotate(0deg);
}

.patrolBoat img{
    width: 80px;
    height:43px;
    margin-bottom: 37px;
    transform: rotate(0deg);
}

.buttonsDiv{
    display: flex;
    margin-top: 40px;
}

.startBtn, .resetBtn{
    padding: 5px 15px;
    border-style: groove 3px;
    border-radius: 5px;
    font-weight: 500;
    font-size: 20px;
    margin: 10px;
    font-family: 'Black Ops One', cursive;
}

.ownArea, .opponentArea{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 60px;
}

.opponentArea{
    margin-left: 250px;
}

h2{
    color: black;
    font-size: 25px;
    font-weight: 100;
    font-family: 'Black Ops One', cursive;
    padding:20px;
}

.ownGameboard, .opponentGameboard{
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
    gap: 2px;
    background-color: rgba(36, 137, 204, 0.3);
    width: 500px;
    height:500px;
}

.cell{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: transparent;
    border: 2px black;
    border-style: double;
    border-radius: 5px;
    width:43px;
    height:43px}

.cell img{
    margin: 0px;
    margin-bottom: 0px;
}

.hit{
    background-color: rgb(226, 15, 15);
}

.miss{
    background-color: rgb(30, 42, 97);
}

.ship{
    background-color: rgb(17, 14, 14);
}



`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;;AAEA,iBAAiB;;;AAKjB;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,UAAU;IACV,WAAW;IACX,yDAA6E;IAC7E,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,qCAAqC;AACzC;;AAEA;IACI,YAAY;IACZ,0BAA0B;IAC1B,kBAAkB;IAClB,WAAW;IACX,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,WAAW;IACX,YAAY;IACZ,4BAA4B;IAC5B,WAAW;IACX,mBAAmB;IACnB,kBAAkB;IAClB,oBAAoB;IACpB,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,mBAAmB;IACnB,iBAAiB;IACjB,gBAAgB;IAChB,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,sBAAsB;IACtB,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,WAAW;IACX,WAAW;IACX,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,wBAAwB;IACxB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,YAAY;IACZ,qCAAqC;AACzC;;AAEA;IACI,YAAY;IACZ,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,gBAAgB;IAChB,qCAAqC;IACrC,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,mCAAmC;IACnC,QAAQ;IACR,yCAAyC;IACzC,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,uBAAuB;IACvB,6BAA6B;IAC7B,iBAAiB;IACjB,oBAAoB;IACpB,kBAAkB;IAClB,UAAU;IACV,WAAW;;AAEf;IACI,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,iCAAiC;AACrC","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/*my own styling*/\n\n@import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Pacifico&display=swap');\n\n\nbody, html{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width:100%;\n    height:100%;\n    background-image: url('./img/painted-grey-background-with-metal-texture.jpg');\n    background-size: cover;\n}\n\nh1{\n    color: black;\n    font-size: 70px;\n    font-weight: 500;\n    text-align: center;\n    font-family: 'Black Ops One', cursive;\n}\n\n.main{\n    display:flex;\n    justify-content:flex-start;\n    align-items:center;\n    width: 100%;\n    height: 80%;\n}\n\n.messageBoard{\n    text-align: center;\n    font-size: 40px;\n    font-weight: 300;\n    height:40px;\n    width: 400px;\n    background-color: whitesmoke;\n    border: 2px;\n    border-color: black;\n    border-radius: 5px;\n    border-style: groove;\n    margin-top: 30px;\n    overflow: hidden;\n}\n\n.fleetDiv{\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    align-items: center;\n    margin-left: 60px;\n    margin-top: 60px;\n    width: 300px;\n    height: 520px;\n}\n\n.rotateImg{\n    width: 20px !important;\n    height:auto !important;\n    padding-right: 20px;\n}\n\n.battleship img{\n    width: 180px;\n    height:43px;\n    margin-bottom: 37px;\n    transform: rotate(0deg);\n}\n\n.carrier img{\n    width: 240px;\n    height:43px;\n    margin-bottom: 37px;\n    transform: rotate(0deg);\n}\n\n.destroyer img{\n    width: 130px;\n    height:43px;\n    margin-bottom: 37px;\n    transform: rotate(0deg);\n}\n\n.submarine img{\n    width: 130px;\n    height:43px;\n    margin-bottom: 37px;\n    transform: rotate(0deg);\n}\n\n.patrolBoat img{\n    width: 80px;\n    height:43px;\n    margin-bottom: 37px;\n    transform: rotate(0deg);\n}\n\n.buttonsDiv{\n    display: flex;\n    margin-top: 40px;\n}\n\n.startBtn, .resetBtn{\n    padding: 5px 15px;\n    border-style: groove 3px;\n    border-radius: 5px;\n    font-weight: 500;\n    font-size: 20px;\n    margin: 10px;\n    font-family: 'Black Ops One', cursive;\n}\n\n.ownArea, .opponentArea{\n    display:flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-left: 60px;\n}\n\n.opponentArea{\n    margin-left: 250px;\n}\n\nh2{\n    color: black;\n    font-size: 25px;\n    font-weight: 100;\n    font-family: 'Black Ops One', cursive;\n    padding:20px;\n}\n\n.ownGameboard, .opponentGameboard{\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    gap: 2px;\n    background-color: rgba(36, 137, 204, 0.3);\n    width: 500px;\n    height:500px;\n}\n\n.cell{\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start;\n    background-color: transparent;\n    border: 2px black;\n    border-style: double;\n    border-radius: 5px;\n    width:43px;\n    height:43px}\n\n.cell img{\n    margin: 0px;\n    margin-bottom: 0px;\n}\n\n.hit{\n    background-color: rgb(226, 15, 15);\n}\n\n.miss{\n    background-color: rgb(30, 42, 97);\n}\n\n.ship{\n    background-color: rgb(17, 14, 14);\n}\n\n\n\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/AIplayer.js":
/*!*************************!*\
  !*** ./src/AIplayer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AIplayer: () => (/* binding */ AIplayer)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _isValid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isValid */ "./src/isValid.js");



function AIplayer(){
    let hits=[];
    let playerGameboard=(0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();

    function generateHit(){
       let randomRow=Math.floor(Math.random()*10);
       let randomCol=Math.floor(Math.random()*10);
        
        if (!containsArrayWithElements(hits, randomRow, randomCol)) {
            hits.push([randomRow, randomCol]);
            return [randomRow, randomCol]
        }
            else return generateHit();
        
    }

    function containsArrayWithElements(arr, a, b) {
        for (const subArr of arr) {
            if (Array.isArray(subArr) && subArr.length === 2 && subArr[0] === a && subArr[1] === b) {
                return true;
            }
        }
        return false;
    }

    function populateGameboard(fleet, gameboard){
        for (let key of Object.keys(fleet)){
            let notDropped=true;
            
            while (notDropped){
                let randomRow=Math.floor(Math.random()*10);
                let randomCol=Math.floor(Math.random()*10);
                let direction=randomDirection();

                if ((0,_isValid__WEBPACK_IMPORTED_MODULE_1__.isValid)(fleet[key]['ship'], gameboard.grid, randomRow, randomCol, direction)){
                    gameboard.placeShip(fleet[key]['ship'], randomRow, randomCol, direction);
                    notDropped=false;
                }
            }
            }
        
        function randomDirection(){
            if (Math.random() < 0.5)return 'vertical'
                else return 'horizontal';
        }
        return gameboard;
    }

    return{
        hits,
        generateHit,
        playerGameboard, 
        populateGameboard
    }
}

/***/ }),

/***/ "./src/DOMstuff.js":
/*!*************************!*\
  !*** ./src/DOMstuff.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearDOM: () => (/* binding */ clearDOM),
/* harmony export */   displayHit: () => (/* binding */ displayHit),
/* harmony export */   displayMessage: () => (/* binding */ displayMessage),
/* harmony export */   generateFleetDisplay: () => (/* binding */ generateFleetDisplay),
/* harmony export */   generateOpponentGameboard: () => (/* binding */ generateOpponentGameboard),
/* harmony export */   generateOwnGameboard: () => (/* binding */ generateOwnGameboard),
/* harmony export */   generateStartResetBtn: () => (/* binding */ generateStartResetBtn)
/* harmony export */ });
/* harmony import */ var _img_rotating_arrow_symbol_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/rotating-arrow-symbol.png */ "./src/img/rotating-arrow-symbol.png");
/* harmony import */ var _returnShipsHome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./returnShipsHome */ "./src/returnShipsHome.js");
/* harmony import */ var _takingTurns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./takingTurns */ "./src/takingTurns.js");
/* harmony import */ var _isValid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isValid */ "./src/isValid.js");





const mainDiv=document.querySelector('.main');
const ownArea=document.createElement('div');
const opponentArea=document.createElement('div');
const ownGameboard=document.createElement('div');
const opponentGameboard=document.createElement('div');
const messageBoard=document.querySelector('.messageBoard');
const fleetDiv=document.createElement('div');

ownArea.classList.add('ownArea');
opponentArea.classList.add('opponentArea');

//generates the fleet representation, on the left side of the screen
function generateFleetDisplay(fleet){
    
    fleetDiv.classList.add('fleetDiv');

    for(let ship in fleet){
        const shipDiv=document.createElement('div');
        shipDiv.classList.add('shipImg');
        shipDiv.classList.add(`${ship}`);
        shipDiv.setAttribute('data-direction', 'horizontal');

        //the event listener for the drag and drop option
        shipDiv.addEventListener('dragstart', dragstart);

        const rotateImg=document.createElement('img');
        rotateImg.setAttribute('src', _img_rotating_arrow_symbol_png__WEBPACK_IMPORTED_MODULE_0__);
        rotateImg.classList.add('rotateImg');
        rotateImg.setAttribute('id', `rotate${ship}`);

        //the event for the rotate buttons
        rotateImg.addEventListener('click', e => {
            const rotatingShipImg=document.getElementById(e.target.id.substr(6))
            flip(rotatingShipImg);
        });

        //working with horizontal and vertical direction
        let angle=0;
        let direction='horizontal';
        function flip(img){
            const flippedDiv=document.querySelector(`.${img.id}`);
    
            if (angle===0) {
                    angle = 90;
                    direction='vertical';
                    flippedDiv.setAttribute('data-direction', 'vertical');}
                else {
                    angle=0;
                    direction='horizontal';
                    flippedDiv.setAttribute('data-direction', 'horizontal');
                }
            img.style.transform=`rotate(${angle}deg)`;
        }

        shipDiv.appendChild(rotateImg);

        //the image of the ship
        const img=document.createElement('img');
        img.setAttribute('src', `${fleet[ship].icon}`);
        img.setAttribute('id', `${ship}`);
        img.setAttribute('draggable', 'true');

        shipDiv.appendChild(img);        
        fleetDiv.appendChild(shipDiv);
        
        mainDiv.prepend(fleetDiv);
    }
    
}

//generates the "start" and "reset" buttons
function generateStartResetBtn(player1, player2, fleet){
    const buttonsDiv=document.createElement('div');
    buttonsDiv.classList.add('buttonsDiv');

    //the reset button
    const resetBtn=document.createElement('button');
    resetBtn.textContent='RESET';
    resetBtn.classList.add('resetBtn');

    const resetFunction = reset => (0,_returnShipsHome__WEBPACK_IMPORTED_MODULE_1__.returnShipsHome)(player1, player2, fleet);
    resetBtn.addEventListener('click', resetFunction);

    //the start button
    const startBtn=document.createElement('button');
    startBtn.textContent='START';
    startBtn.classList.add('startBtn');

    startBtn.addEventListener('click', e=>{
        if(fleetDiv.firstChild.classList.contains('buttonsDiv')){
            (0,_takingTurns__WEBPACK_IMPORTED_MODULE_2__.takingTurns)(player1, player2);
            displayMessage("Player 1, click on the opponent's grid, to hit!");
            resetBtn.removeEventListener('click', resetFunction)}
        else displayMessage('Please place all your ships before starting the game!');
        })

    buttonsDiv.appendChild(startBtn);
    buttonsDiv.appendChild(resetBtn);

    fleetDiv.appendChild(buttonsDiv);
}

//generates the DOM representation of the first player's grid
function generateOwnGameboard(playerGameboard, fleet){
    ownGameboard.classList.add('ownGameboard');
    for(let row=0; row<10; row++)
        for(let col=0; col<10; col++){
            const cell=document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('id', `own_${row},${col}`);
            if (playerGameboard.grid[row][col]==='miss') cell.textContent='X'
                else if (playerGameboard.grid[row][col]==='hit') cell.classList.add('hit')
                    else if (playerGameboard.grid[row][col] !=null) cell.classList.add('ship')
            
            //the event listener for the drag and drop option
            cell.addEventListener('dragover', dragOver);
            cell.addEventListener('drop', function (e){
                dropShip(e, fleet, playerGameboard);
            });
            ownGameboard.appendChild(cell);
        }
    
    const titleDiv=document.createElement('h2');
    titleDiv.textContent='FRIENDLY WATERS';
    ownArea.appendChild(titleDiv);

    ownArea.appendChild(ownGameboard);
    mainDiv.appendChild(ownArea);
}

//dragover and dropShip functions
let draggedShip;

function dragstart(e){
    draggedShip=e.target.id;
}

function dragOver(e){
    e.preventDefault();
}

function dropShip(e, fleet, playerGameboard){
    const startId=e.target.id;
    const draggedShipDiv=document.querySelector(`.${draggedShip}`);
    const direction=draggedShipDiv.dataset.direction;
    const row=Number(startId[4]);
    const col=Number(startId[6]);

    if ((0,_isValid__WEBPACK_IMPORTED_MODULE_3__.isValid)(fleet[draggedShip]['ship'], playerGameboard.grid, row, col, direction)){
        playerGameboard.placeShip(fleet[draggedShip]['ship'], row, col, direction)

        const dropDiv=document.getElementById(startId);
        const rotateBtn=document.getElementById(`rotate${draggedShip}`);

        draggedShipDiv.removeChild(rotateBtn);
        draggedShipDiv.removeEventListener('dragstart', dragstart);

        if(draggedShipDiv.dataset.direction === 'vertical') {
            dropDiv.style.transform='rotate(90deg)';
            const draggedShipDivImg=document.querySelector(`.${draggedShip}>img`);
            draggedShipDivImg.style.transform='rotate(360deg)';
        }
   
        dropDiv.appendChild(draggedShipDiv);
    }
}

//generates the DOM representation of the second player's grid
function generateOpponentGameboard(){
   
    opponentGameboard.classList.add('opponentGameboard');
    opponentGameboard.setAttribute('id', 'opponentGameboard');
    for(let row=0; row<10; row++)
        for(let col=0; col<10; col++){
            const cell=document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('id', `opp_${row},${col}`);
                                          
            opponentGameboard.appendChild(cell);
        }

    const titleDiv=document.createElement('h2');
    titleDiv.textContent='ENEMY WATERS';
    opponentArea.appendChild(titleDiv);

    opponentArea.appendChild(opponentGameboard);
    mainDiv.appendChild(opponentArea);
}

//displays the message in the box below the title
function displayMessage(string){
    const message=document.createElement('div');
    message.classList.add('message');
    var i = 0;
    var speed = 110; 

    function typeWriter() {
        if (i < string.length) {
            message.innerHTML += string.charAt(i);
            i++;
            messageBoard.appendChild(message);
            if (i>23){
                message.innerHTML= message.innerHTML.substring(1);
            }
            setTimeout(typeWriter, speed);
            
        } else{
            setTimeout(function () {
                messageBoard.removeChild(message);
                }, string.length*3);
        }
    }
    typeWriter();
 }


//changes the class of the hit cell, in order to display the result of the hit
function displayHit(player, attackedCell){
    let row = parseInt(attackedCell.id[4]);
    let col = parseInt(attackedCell.id[6]);
    
    if (player.playerGameboard.grid[row][col] === 'hit') {
            attackedCell.classList.add('hit');
            attackedCell.classList.remove('ship');
        } else if (player.playerGameboard.grid[row][col] === 'miss') {
            attackedCell.classList.add('miss');
        }
}

function clearDOM(){
    ownGameboard.remove();
    opponentGameboard.remove();
}

/***/ }),

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Game: () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _img_carrier_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/carrier.png */ "./src/img/carrier.png");
/* harmony import */ var _img_cruiser_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/cruiser.png */ "./src/img/cruiser.png");
/* harmony import */ var _img_destroyer_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/destroyer.png */ "./src/img/destroyer.png");
/* harmony import */ var _img_submarine_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/submarine.png */ "./src/img/submarine.png");
/* harmony import */ var _img_boat_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/boat.png */ "./src/img/boat.png");
/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shipFactory */ "./src/shipFactory.js");
/* harmony import */ var _DOMstuff__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DOMstuff */ "./src/DOMstuff.js");








function Game(player1, player2){
    
    let fleet={
        carrier:{
            ship:(0,_shipFactory__WEBPACK_IMPORTED_MODULE_5__.Ship)(5),
            icon: _img_carrier_png__WEBPACK_IMPORTED_MODULE_0__},
        battleship:{
            ship:(0,_shipFactory__WEBPACK_IMPORTED_MODULE_5__.Ship)(4),
            icon: _img_cruiser_png__WEBPACK_IMPORTED_MODULE_1__},
        destroyer:{
            ship:(0,_shipFactory__WEBPACK_IMPORTED_MODULE_5__.Ship)(3),
            icon: _img_destroyer_png__WEBPACK_IMPORTED_MODULE_2__},
        submarine:{
            ship: (0,_shipFactory__WEBPACK_IMPORTED_MODULE_5__.Ship)(3),
            icon: _img_submarine_png__WEBPACK_IMPORTED_MODULE_3__},
        patrolBoat:{
            ship:(0,_shipFactory__WEBPACK_IMPORTED_MODULE_5__.Ship)(2),
            icon: _img_boat_png__WEBPACK_IMPORTED_MODULE_4__}
    }
    
    ;(0,_DOMstuff__WEBPACK_IMPORTED_MODULE_6__.generateFleetDisplay)(fleet);
    (0,_DOMstuff__WEBPACK_IMPORTED_MODULE_6__.generateStartResetBtn)(player1, player2, fleet);
    (0,_DOMstuff__WEBPACK_IMPORTED_MODULE_6__.generateOwnGameboard)(player1.playerGameboard, fleet);
    (0,_DOMstuff__WEBPACK_IMPORTED_MODULE_6__.generateOpponentGameboard)();

    player2.populateGameboard(fleet, player2.playerGameboard);
    
    (0,_DOMstuff__WEBPACK_IMPORTED_MODULE_6__.displayMessage)('Welcome to Battleships!');

    setTimeout(()=> (0,_DOMstuff__WEBPACK_IMPORTED_MODULE_6__.displayMessage)('Place your ships, then press the START button!'), 3600)
 }

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard)
/* harmony export */ });
//a factory function which creates the grid of the game
function Gameboard(){
    const grid=createEmptyGameboard();

    //generates the empty board, where the ships will be placed; 
    //the empty boards is an array of 10 subarrays, representing the rows of the grid
    //each subarray has 10 elements, representing the columns of the gird
    function createEmptyGameboard(){
        let emptyGameboard=[[]];
       
        for (let i=0; i<10; i++){
            for(let j=0; j<10; j++){
                emptyGameboard[i].push(null)
            }
            emptyGameboard.push([]);
        }
        emptyGameboard.pop();
        return emptyGameboard;
    }

    //the array elements where the ship is placed change from 'null' into 'ship'
    function placeShip(ship, row, col, direction){
        if (direction === 'vertical')
            {for(let i=0; i<ship.length; i++){
                this.grid[row+i][col]=ship;
                }}
        else {for(let i=0; i<ship.length;i++){
              this.grid[row][col+i]=ship;
              }
                }
    }

    //depending on the grid-value of the [row][col] coordinate, the value in the grid changes to 'hit' or 'miss'
    function receiveAttack(row, col){
        if (this.grid[row][col] === null) {
            this.grid[row][col]='miss';
            return true;
        }
           else if((this.grid[row][col] === 'hit')||(this.grid[row][col]=='miss')) return false;
               else {
                this.grid[row][col].hit();
                this.grid[row][col]='hit';
                return true;
               }
    }

    //checks the grid to see if there are any values that are not 'null', 'hit', or 'miss'
    //i.e, if there are any 'ship' values left
    //if there are no 'ship' values left, it means that all the ships have been discovered and the game is over
    function isGameOver(){
        for(let row=0; row<10; row++)
            for(let col=0; col<10; col++){
                if (this.grid[row][col]!==null
                    &&this.grid[row][col]!=='hit'
                    &&this.grid[row][col]!=='miss') return false;
            }
        return true;
    }
    
    return{
        grid,
        placeShip,
        receiveAttack,
        isGameOver
    }
}

/***/ }),

/***/ "./src/isValid.js":
/*!************************!*\
  !*** ./src/isValid.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isValid: () => (/* binding */ isValid)
/* harmony export */ });
//function which takes in the ship, coordinates, gameboard and direction value 
//and checks if that coordinate is valid, i.e. if the ship doesn't go outsode the 
//gameboard and if the squares are not already taken by another ship
function isValid(ship, gameboard, row, col, direction){
    if (direction === 'vertical'){
        if ((row + ship.length)>10) return false
                else{
                    for(let i=0; i<ship.length; i++){
                        if (gameboard[row+i][col] != null) return false}
                    return true;}
        }
        else {
            if ((col + ship.length)>10) return false
                else{
                    for(let i=0; i<ship.length; i++){
                        if (gameboard[row][col+i] != null) return false}
                    return true}
        }
}

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");


function Player(name){
    let playerGameboard=(0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();
    
    return {name, playerGameboard}
}

/***/ }),

/***/ "./src/returnShipsHome.js":
/*!********************************!*\
  !*** ./src/returnShipsHome.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   returnShipsHome: () => (/* binding */ returnShipsHome)
/* harmony export */ });
/* harmony import */ var _DOMstuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMstuff */ "./src/DOMstuff.js");


function returnShipsHome(player1, player2, fleet){
    const fleetDiv=document.querySelector('.fleetDiv');
    const main=document.querySelector('.main');

    const placedShipsImg=document.querySelectorAll('.ownGameboard img');
    placedShipsImg.forEach(placedShipImg => {
        const parent=placedShipImg.parentNode;
        parent.removeChild(placedShipImg);
    })

    const placedShips=document.querySelectorAll('.ownGameboard .shipImg');
    placedShips.forEach(shipDiv => {
        const parent=shipDiv.parentNode;
        parent.removeChild(shipDiv);
    })

    const remainingDivImgs=document.querySelectorAll('.fleetDiv img');
    remainingDivImgs.forEach(remainingDiv=> {
        const parentDiv=remainingDiv.parentElement;
        parentDiv.removeChild(remainingDiv);
    })

    const remainingDivs=document.querySelectorAll('.fleetDiv div');
    remainingDivs.forEach(remainingDiv => {
        fleetDiv.removeChild(remainingDiv);
    });

    for(let i=0; i<10; i++){
        for(let j=0; j<10; j++){
            player1.playerGameboard.grid[i][j] = null;
        }
    }

    main.removeChild(fleetDiv);

    (0,_DOMstuff__WEBPACK_IMPORTED_MODULE_0__.generateFleetDisplay)(fleet);
    (0,_DOMstuff__WEBPACK_IMPORTED_MODULE_0__.generateStartResetBtn)(player1, player2, fleet);
}

/***/ }),

/***/ "./src/shipFactory.js":
/*!****************************!*\
  !*** ./src/shipFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
function Ship(length){
    let timesHit=0;
    
    function hit(){
        return this.timesHit++;
        };

    function isSunk(){
            return this.timesHit === length;
        };

    return {
        length,
        timesHit,
        hit,
        isSunk
    };
}

/***/ }),

/***/ "./src/takingTurns.js":
/*!****************************!*\
  !*** ./src/takingTurns.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   takingTurns: () => (/* binding */ takingTurns)
/* harmony export */ });
/* harmony import */ var _DOMstuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMstuff */ "./src/DOMstuff.js");


//NEEDS REFACTORING
function takingTurns(player1, player2){
    let currentPlayer='player1';

    function handleCellClick(row, col){
        let attackedCell=document.getElementById(`opp_${row},${col}`);
        if( currentPlayer === 'player1'){
            if (player2.playerGameboard.receiveAttack(row, col)){
                (0,_DOMstuff__WEBPACK_IMPORTED_MODULE_0__.displayHit)(player2, attackedCell);
                if(player2.playerGameboard.isGameOver()){
                    (0,_DOMstuff__WEBPACK_IMPORTED_MODULE_0__.displayMessage)('Hurray! You won the game')
                }

                currentPlayer="player2";

                let attackCoordinates=player2.generateHit();
                row=attackCoordinates[0];
                col=attackCoordinates[1];

                setTimeout(function() {
                    player1.playerGameboard.receiveAttack(row, col);
                  
                    attackedCell=document.getElementById(`own_${row},${col}`);
                    (0,_DOMstuff__WEBPACK_IMPORTED_MODULE_0__.displayHit)(player1, attackedCell);

                    if (player1.playerGameboard.isGameOver()){
                        (0,_DOMstuff__WEBPACK_IMPORTED_MODULE_0__.displayMessage)('Awww! The computer won the game!')
                }

                currentPlayer='player1';
            }, 700);
            }
        }
    }

    const opponentGameboard=document.getElementById('opponentGameboard');
    
    //gets the coordinates of the cell clicked by the human user(player1) and hits it, 
    //triggering after that the hit of the computer player(player2)
    opponentGameboard.addEventListener('click', e =>{
        const cell=document.getElementById(e.target.id);
        const row=parseInt(e.target.id[4]);
        const col=parseInt(e.target.id[6]);
        handleCellClick(row,col, cell);
    })
}

/***/ }),

/***/ "./src/img/boat.png":
/*!**************************!*\
  !*** ./src/img/boat.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7ed81bb65505f9d11ac2.png";

/***/ }),

/***/ "./src/img/carrier.png":
/*!*****************************!*\
  !*** ./src/img/carrier.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b10da496e4870feda8ef.png";

/***/ }),

/***/ "./src/img/cruiser.png":
/*!*****************************!*\
  !*** ./src/img/cruiser.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "86cd5bf2e0bafabeb5d1.png";

/***/ }),

/***/ "./src/img/destroyer.png":
/*!*******************************!*\
  !*** ./src/img/destroyer.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ce00697a975317a491da.png";

/***/ }),

/***/ "./src/img/painted-grey-background-with-metal-texture.jpg":
/*!****************************************************************!*\
  !*** ./src/img/painted-grey-background-with-metal-texture.jpg ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "56d027aba4ce597a100e.jpg";

/***/ }),

/***/ "./src/img/rotating-arrow-symbol.png":
/*!*******************************************!*\
  !*** ./src/img/rotating-arrow-symbol.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc56ae702c7204f238cd.png";

/***/ }),

/***/ "./src/img/submarine.png":
/*!*******************************!*\
  !*** ./src/img/submarine.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d7f6f48c88e7addb594d.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _Game_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Game.js */ "./src/Game.js");
/* harmony import */ var _AIplayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AIplayer */ "./src/AIplayer.js");





let player1=(0,_player__WEBPACK_IMPORTED_MODULE_0__.Player)('player1');
let player2=(0,_AIplayer__WEBPACK_IMPORTED_MODULE_3__.AIplayer)();

(0,_Game_js__WEBPACK_IMPORTED_MODULE_2__.Game)(player1, player2);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHFMQUF1RTtBQUNuSCw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLDJJQUEySTtBQUMzSSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUEsT0FBTyxrRkFBa0YsTUFBTSxpQkFBaUIsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxZQUFZLE9BQU8sVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsT0FBTyxjQUFjLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQy9DQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBZ0M7QUFDWDtBQUNVO0FBQ0s7O0FBRXBDLFlBQVksK0NBQU07QUFDbEIsWUFBWSxtREFBUTs7QUFFcEIsOENBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvQUlwbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvRE9Nc3R1ZmYuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvR2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvaXNWYWxpZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvcmV0dXJuU2hpcHNIb21lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL3NoaXBGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL3Rha2luZ1R1cm5zLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1nL3BhaW50ZWQtZ3JleS1iYWNrZ3JvdW5kLXdpdGgtbWV0YWwtdGV4dHVyZS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJsYWNrK09wcytPbmUmZmFtaWx5PVBhY2lmaWNvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxuICAgdjIuMCB8IDIwMTEwMTI2XG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxuKi9cblxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRib3JkZXI6IDA7XG5cdGZvbnQtc2l6ZTogMTAwJTtcblx0Zm9udDogaW5oZXJpdDtcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuXHRsaW5lLWhlaWdodDogMTtcbn1cbm9sLCB1bCB7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5ibG9ja3F1b3RlLCBxIHtcblx0cXVvdGVzOiBub25lO1xufVxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSwgcTphZnRlciB7XG5cdGNvbnRlbnQ6ICcnO1xuXHRjb250ZW50OiBub25lO1xufVxudGFibGUge1xuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHRib3JkZXItc3BhY2luZzogMDtcbn1cblxuLypteSBvd24gc3R5bGluZyovXG5cblxuYm9keSwgaHRtbHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDoxMDAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG5oMXtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiA3MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnQmxhY2sgT3BzIE9uZScsIGN1cnNpdmU7XG59XG5cbi5tYWlue1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA4MCU7XG59XG5cbi5tZXNzYWdlQm9hcmR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGhlaWdodDo0MHB4O1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIGJvcmRlcjogMnB4O1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1zdHlsZTogZ3Jvb3ZlO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmZsZWV0RGl2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gICAgbWFyZ2luLXRvcDogNjBweDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiA1MjBweDtcbn1cblxuLnJvdGF0ZUltZ3tcbiAgICB3aWR0aDogMjBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDphdXRvICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuLmJhdHRsZXNoaXAgaW1ne1xuICAgIHdpZHRoOiAxODBweDtcbiAgICBoZWlnaHQ6NDNweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzN3B4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xufVxuXG4uY2FycmllciBpbWd7XG4gICAgd2lkdGg6IDI0MHB4O1xuICAgIGhlaWdodDo0M3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDM3cHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG59XG5cbi5kZXN0cm95ZXIgaW1ne1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBoZWlnaHQ6NDNweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzN3B4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xufVxuXG4uc3VibWFyaW5lIGltZ3tcbiAgICB3aWR0aDogMTMwcHg7XG4gICAgaGVpZ2h0OjQzcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzdweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbn1cblxuLnBhdHJvbEJvYXQgaW1ne1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDo0M3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDM3cHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG59XG5cbi5idXR0b25zRGl2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLnN0YXJ0QnRuLCAucmVzZXRCdG57XG4gICAgcGFkZGluZzogNXB4IDE1cHg7XG4gICAgYm9yZGVyLXN0eWxlOiBncm9vdmUgM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdCbGFjayBPcHMgT25lJywgY3Vyc2l2ZTtcbn1cblxuLm93bkFyZWEsIC5vcHBvbmVudEFyZWF7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcbn1cblxuLm9wcG9uZW50QXJlYXtcbiAgICBtYXJnaW4tbGVmdDogMjUwcHg7XG59XG5cbmgye1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBmb250LWZhbWlseTogJ0JsYWNrIE9wcyBPbmUnLCBjdXJzaXZlO1xuICAgIHBhZGRpbmc6MjBweDtcbn1cblxuLm93bkdhbWVib2FyZCwgLm9wcG9uZW50R2FtZWJvYXJke1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XG4gICAgZ2FwOiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNiwgMTM3LCAyMDQsIDAuMyk7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIGhlaWdodDo1MDBweDtcbn1cblxuLmNlbGx7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAycHggYmxhY2s7XG4gICAgYm9yZGVyLXN0eWxlOiBkb3VibGU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHdpZHRoOjQzcHg7XG4gICAgaGVpZ2h0OjQzcHh9XG5cbi5jZWxsIGltZ3tcbiAgICBtYXJnaW46IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5oaXR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNiwgMTUsIDE1KTtcbn1cblxuLm1pc3N7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMwLCA0MiwgOTcpO1xufVxuXG4uc2hpcHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcsIDE0LCAxNCk7XG59XG5cblxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztDQUdDOztBQUVEOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsV0FBVztDQUNYLGFBQWE7QUFDZDtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQjs7QUFFQSxpQkFBaUI7OztBQUtqQjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsV0FBVztJQUNYLHlEQUE2RTtJQUM3RSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFlBQVk7SUFDWixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIscUNBQXFDO0lBQ3JDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLG1DQUFtQztJQUNuQyxRQUFRO0lBQ1IseUNBQXlDO0lBQ3pDLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXOztBQUVmO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qbXkgb3duIHN0eWxpbmcqL1xcblxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJsYWNrK09wcytPbmUmZmFtaWx5PVBhY2lmaWNvJmRpc3BsYXk9c3dhcCcpO1xcblxcblxcbmJvZHksIGh0bWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBoZWlnaHQ6MTAwJTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltZy9wYWludGVkLWdyZXktYmFja2dyb3VuZC13aXRoLW1ldGFsLXRleHR1cmUuanBnJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbmgxe1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogNzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ0JsYWNrIE9wcyBPbmUnLCBjdXJzaXZlO1xcbn1cXG5cXG4ubWFpbntcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA4MCU7XFxufVxcblxcbi5tZXNzYWdlQm9hcmR7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBoZWlnaHQ6NDBweDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBib3JkZXI6IDJweDtcXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItc3R5bGU6IGdyb292ZTtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmZsZWV0RGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcXG4gICAgbWFyZ2luLXRvcDogNjBweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDUyMHB4O1xcbn1cXG5cXG4ucm90YXRlSW1ne1xcbiAgICB3aWR0aDogMjBweCAhaW1wb3J0YW50O1xcbiAgICBoZWlnaHQ6YXV0byAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uYmF0dGxlc2hpcCBpbWd7XFxuICAgIHdpZHRoOiAxODBweDtcXG4gICAgaGVpZ2h0OjQzcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDM3cHg7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbn1cXG5cXG4uY2FycmllciBpbWd7XFxuICAgIHdpZHRoOiAyNDBweDtcXG4gICAgaGVpZ2h0OjQzcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDM3cHg7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbn1cXG5cXG4uZGVzdHJveWVyIGltZ3tcXG4gICAgd2lkdGg6IDEzMHB4O1xcbiAgICBoZWlnaHQ6NDNweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzdweDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxufVxcblxcbi5zdWJtYXJpbmUgaW1ne1xcbiAgICB3aWR0aDogMTMwcHg7XFxuICAgIGhlaWdodDo0M3B4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzN3B4O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG59XFxuXFxuLnBhdHJvbEJvYXQgaW1ne1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgaGVpZ2h0OjQzcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDM3cHg7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbn1cXG5cXG4uYnV0dG9uc0RpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG59XFxuXFxuLnN0YXJ0QnRuLCAucmVzZXRCdG57XFxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgICBib3JkZXItc3R5bGU6IGdyb292ZSAzcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnQmxhY2sgT3BzIE9uZScsIGN1cnNpdmU7XFxufVxcblxcbi5vd25BcmVhLCAub3Bwb25lbnRBcmVhe1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcXG59XFxuXFxuLm9wcG9uZW50QXJlYXtcXG4gICAgbWFyZ2luLWxlZnQ6IDI1MHB4O1xcbn1cXG5cXG5oMntcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnQmxhY2sgT3BzIE9uZScsIGN1cnNpdmU7XFxuICAgIHBhZGRpbmc6MjBweDtcXG59XFxuXFxuLm93bkdhbWVib2FyZCwgLm9wcG9uZW50R2FtZWJvYXJke1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdhcDogMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM2LCAxMzcsIDIwNCwgMC4zKTtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBoZWlnaHQ6NTAwcHg7XFxufVxcblxcbi5jZWxse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAycHggYmxhY2s7XFxuICAgIGJvcmRlci1zdHlsZTogZG91YmxlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHdpZHRoOjQzcHg7XFxuICAgIGhlaWdodDo0M3B4fVxcblxcbi5jZWxsIGltZ3tcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcXG59XFxuXFxuLmhpdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNiwgMTUsIDE1KTtcXG59XFxuXFxuLm1pc3N7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMCwgNDIsIDk3KTtcXG59XFxuXFxuLnNoaXB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNywgMTQsIDE0KTtcXG59XFxuXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge0dhbWVib2FyZH0gZnJvbSAnLi9nYW1lYm9hcmQnO1xuaW1wb3J0IHsgaXNWYWxpZCB9IGZyb20gJy4vaXNWYWxpZCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBBSXBsYXllcigpe1xuICAgIGxldCBoaXRzPVtdO1xuICAgIGxldCBwbGF5ZXJHYW1lYm9hcmQ9R2FtZWJvYXJkKCk7XG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUhpdCgpe1xuICAgICAgIGxldCByYW5kb21Sb3c9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKTtcbiAgICAgICBsZXQgcmFuZG9tQ29sPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIWNvbnRhaW5zQXJyYXlXaXRoRWxlbWVudHMoaGl0cywgcmFuZG9tUm93LCByYW5kb21Db2wpKSB7XG4gICAgICAgICAgICBoaXRzLnB1c2goW3JhbmRvbVJvdywgcmFuZG9tQ29sXSk7XG4gICAgICAgICAgICByZXR1cm4gW3JhbmRvbVJvdywgcmFuZG9tQ29sXVxuICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHJldHVybiBnZW5lcmF0ZUhpdCgpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb250YWluc0FycmF5V2l0aEVsZW1lbnRzKGFyciwgYSwgYikge1xuICAgICAgICBmb3IgKGNvbnN0IHN1YkFyciBvZiBhcnIpIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHN1YkFycikgJiYgc3ViQXJyLmxlbmd0aCA9PT0gMiAmJiBzdWJBcnJbMF0gPT09IGEgJiYgc3ViQXJyWzFdID09PSBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlR2FtZWJvYXJkKGZsZWV0LCBnYW1lYm9hcmQpe1xuICAgICAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMoZmxlZXQpKXtcbiAgICAgICAgICAgIGxldCBub3REcm9wcGVkPXRydWU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHdoaWxlIChub3REcm9wcGVkKXtcbiAgICAgICAgICAgICAgICBsZXQgcmFuZG9tUm93PU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICAgICAgICAgICAgbGV0IHJhbmRvbUNvbD1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuICAgICAgICAgICAgICAgIGxldCBkaXJlY3Rpb249cmFuZG9tRGlyZWN0aW9uKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNWYWxpZChmbGVldFtrZXldWydzaGlwJ10sIGdhbWVib2FyZC5ncmlkLCByYW5kb21Sb3csIHJhbmRvbUNvbCwgZGlyZWN0aW9uKSl7XG4gICAgICAgICAgICAgICAgICAgIGdhbWVib2FyZC5wbGFjZVNoaXAoZmxlZXRba2V5XVsnc2hpcCddLCByYW5kb21Sb3csIHJhbmRvbUNvbCwgZGlyZWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgbm90RHJvcHBlZD1mYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiByYW5kb21EaXJlY3Rpb24oKXtcbiAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgMC41KXJldHVybiAndmVydGljYWwnXG4gICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gJ2hvcml6b250YWwnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnYW1lYm9hcmQ7XG4gICAgfVxuXG4gICAgcmV0dXJue1xuICAgICAgICBoaXRzLFxuICAgICAgICBnZW5lcmF0ZUhpdCxcbiAgICAgICAgcGxheWVyR2FtZWJvYXJkLCBcbiAgICAgICAgcG9wdWxhdGVHYW1lYm9hcmRcbiAgICB9XG59IiwiaW1wb3J0IHJvdGF0ZUltZ1NyYyBmcm9tICcuL2ltZy9yb3RhdGluZy1hcnJvdy1zeW1ib2wucG5nJztcbmltcG9ydCB7IHJldHVyblNoaXBzSG9tZSB9IGZyb20gJy4vcmV0dXJuU2hpcHNIb21lJztcbmltcG9ydCB7IHRha2luZ1R1cm5zIH0gZnJvbSAnLi90YWtpbmdUdXJucyc7XG5pbXBvcnQgeyBpc1ZhbGlkIH0gZnJvbSBcIi4vaXNWYWxpZFwiO1xuXG5jb25zdCBtYWluRGl2PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG5jb25zdCBvd25BcmVhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3Qgb3Bwb25lbnRBcmVhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3Qgb3duR2FtZWJvYXJkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3Qgb3Bwb25lbnRHYW1lYm9hcmQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBtZXNzYWdlQm9hcmQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2VCb2FyZCcpO1xuY29uc3QgZmxlZXREaXY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbm93bkFyZWEuY2xhc3NMaXN0LmFkZCgnb3duQXJlYScpO1xub3Bwb25lbnRBcmVhLmNsYXNzTGlzdC5hZGQoJ29wcG9uZW50QXJlYScpO1xuXG4vL2dlbmVyYXRlcyB0aGUgZmxlZXQgcmVwcmVzZW50YXRpb24sIG9uIHRoZSBsZWZ0IHNpZGUgb2YgdGhlIHNjcmVlblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlRmxlZXREaXNwbGF5KGZsZWV0KXtcbiAgICBcbiAgICBmbGVldERpdi5jbGFzc0xpc3QuYWRkKCdmbGVldERpdicpO1xuXG4gICAgZm9yKGxldCBzaGlwIGluIGZsZWV0KXtcbiAgICAgICAgY29uc3Qgc2hpcERpdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2hpcERpdi5jbGFzc0xpc3QuYWRkKCdzaGlwSW1nJyk7XG4gICAgICAgIHNoaXBEaXYuY2xhc3NMaXN0LmFkZChgJHtzaGlwfWApO1xuICAgICAgICBzaGlwRGl2LnNldEF0dHJpYnV0ZSgnZGF0YS1kaXJlY3Rpb24nLCAnaG9yaXpvbnRhbCcpO1xuXG4gICAgICAgIC8vdGhlIGV2ZW50IGxpc3RlbmVyIGZvciB0aGUgZHJhZyBhbmQgZHJvcCBvcHRpb25cbiAgICAgICAgc2hpcERpdi5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBkcmFnc3RhcnQpO1xuXG4gICAgICAgIGNvbnN0IHJvdGF0ZUltZz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgcm90YXRlSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgcm90YXRlSW1nU3JjKTtcbiAgICAgICAgcm90YXRlSW1nLmNsYXNzTGlzdC5hZGQoJ3JvdGF0ZUltZycpO1xuICAgICAgICByb3RhdGVJbWcuc2V0QXR0cmlidXRlKCdpZCcsIGByb3RhdGUke3NoaXB9YCk7XG5cbiAgICAgICAgLy90aGUgZXZlbnQgZm9yIHRoZSByb3RhdGUgYnV0dG9uc1xuICAgICAgICByb3RhdGVJbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJvdGF0aW5nU2hpcEltZz1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChlLnRhcmdldC5pZC5zdWJzdHIoNikpXG4gICAgICAgICAgICBmbGlwKHJvdGF0aW5nU2hpcEltZyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vd29ya2luZyB3aXRoIGhvcml6b250YWwgYW5kIHZlcnRpY2FsIGRpcmVjdGlvblxuICAgICAgICBsZXQgYW5nbGU9MDtcbiAgICAgICAgbGV0IGRpcmVjdGlvbj0naG9yaXpvbnRhbCc7XG4gICAgICAgIGZ1bmN0aW9uIGZsaXAoaW1nKXtcbiAgICAgICAgICAgIGNvbnN0IGZsaXBwZWREaXY9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7aW1nLmlkfWApO1xuICAgIFxuICAgICAgICAgICAgaWYgKGFuZ2xlPT09MCkge1xuICAgICAgICAgICAgICAgICAgICBhbmdsZSA9IDkwO1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb249J3ZlcnRpY2FsJztcbiAgICAgICAgICAgICAgICAgICAgZmxpcHBlZERpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtZGlyZWN0aW9uJywgJ3ZlcnRpY2FsJyk7fVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhbmdsZT0wO1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb249J2hvcml6b250YWwnO1xuICAgICAgICAgICAgICAgICAgICBmbGlwcGVkRGl2LnNldEF0dHJpYnV0ZSgnZGF0YS1kaXJlY3Rpb24nLCAnaG9yaXpvbnRhbCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltZy5zdHlsZS50cmFuc2Zvcm09YHJvdGF0ZSgke2FuZ2xlfWRlZylgO1xuICAgICAgICB9XG5cbiAgICAgICAgc2hpcERpdi5hcHBlbmRDaGlsZChyb3RhdGVJbWcpO1xuXG4gICAgICAgIC8vdGhlIGltYWdlIG9mIHRoZSBzaGlwXG4gICAgICAgIGNvbnN0IGltZz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgYCR7ZmxlZXRbc2hpcF0uaWNvbn1gKTtcbiAgICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtzaGlwfWApO1xuICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCAndHJ1ZScpO1xuXG4gICAgICAgIHNoaXBEaXYuYXBwZW5kQ2hpbGQoaW1nKTsgICAgICAgIFxuICAgICAgICBmbGVldERpdi5hcHBlbmRDaGlsZChzaGlwRGl2KTtcbiAgICAgICAgXG4gICAgICAgIG1haW5EaXYucHJlcGVuZChmbGVldERpdik7XG4gICAgfVxuICAgIFxufVxuXG4vL2dlbmVyYXRlcyB0aGUgXCJzdGFydFwiIGFuZCBcInJlc2V0XCIgYnV0dG9uc1xuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlU3RhcnRSZXNldEJ0bihwbGF5ZXIxLCBwbGF5ZXIyLCBmbGVldCl7XG4gICAgY29uc3QgYnV0dG9uc0Rpdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXR0b25zRGl2LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnNEaXYnKTtcblxuICAgIC8vdGhlIHJlc2V0IGJ1dHRvblxuICAgIGNvbnN0IHJlc2V0QnRuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHJlc2V0QnRuLnRleHRDb250ZW50PSdSRVNFVCc7XG4gICAgcmVzZXRCdG4uY2xhc3NMaXN0LmFkZCgncmVzZXRCdG4nKTtcblxuICAgIGNvbnN0IHJlc2V0RnVuY3Rpb24gPSByZXNldCA9PiByZXR1cm5TaGlwc0hvbWUocGxheWVyMSwgcGxheWVyMiwgZmxlZXQpO1xuICAgIHJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzZXRGdW5jdGlvbik7XG5cbiAgICAvL3RoZSBzdGFydCBidXR0b25cbiAgICBjb25zdCBzdGFydEJ0bj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdGFydEJ0bi50ZXh0Q29udGVudD0nU1RBUlQnO1xuICAgIHN0YXJ0QnRuLmNsYXNzTGlzdC5hZGQoJ3N0YXJ0QnRuJyk7XG5cbiAgICBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGU9PntcbiAgICAgICAgaWYoZmxlZXREaXYuZmlyc3RDaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoJ2J1dHRvbnNEaXYnKSl7XG4gICAgICAgICAgICB0YWtpbmdUdXJucyhwbGF5ZXIxLCBwbGF5ZXIyKTtcbiAgICAgICAgICAgIGRpc3BsYXlNZXNzYWdlKFwiUGxheWVyIDEsIGNsaWNrIG9uIHRoZSBvcHBvbmVudCdzIGdyaWQsIHRvIGhpdCFcIik7XG4gICAgICAgICAgICByZXNldEJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0RnVuY3Rpb24pfVxuICAgICAgICBlbHNlIGRpc3BsYXlNZXNzYWdlKCdQbGVhc2UgcGxhY2UgYWxsIHlvdXIgc2hpcHMgYmVmb3JlIHN0YXJ0aW5nIHRoZSBnYW1lIScpO1xuICAgICAgICB9KVxuXG4gICAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChzdGFydEJ0bik7XG4gICAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChyZXNldEJ0bik7XG5cbiAgICBmbGVldERpdi5hcHBlbmRDaGlsZChidXR0b25zRGl2KTtcbn1cblxuLy9nZW5lcmF0ZXMgdGhlIERPTSByZXByZXNlbnRhdGlvbiBvZiB0aGUgZmlyc3QgcGxheWVyJ3MgZ3JpZFxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlT3duR2FtZWJvYXJkKHBsYXllckdhbWVib2FyZCwgZmxlZXQpe1xuICAgIG93bkdhbWVib2FyZC5jbGFzc0xpc3QuYWRkKCdvd25HYW1lYm9hcmQnKTtcbiAgICBmb3IobGV0IHJvdz0wOyByb3c8MTA7IHJvdysrKVxuICAgICAgICBmb3IobGV0IGNvbD0wOyBjb2w8MTA7IGNvbCsrKXtcbiAgICAgICAgICAgIGNvbnN0IGNlbGw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdpZCcsIGBvd25fJHtyb3d9LCR7Y29sfWApO1xuICAgICAgICAgICAgaWYgKHBsYXllckdhbWVib2FyZC5ncmlkW3Jvd11bY29sXT09PSdtaXNzJykgY2VsbC50ZXh0Q29udGVudD0nWCdcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwbGF5ZXJHYW1lYm9hcmQuZ3JpZFtyb3ddW2NvbF09PT0naGl0JykgY2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnKVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwbGF5ZXJHYW1lYm9hcmQuZ3JpZFtyb3ddW2NvbF0gIT1udWxsKSBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvL3RoZSBldmVudCBsaXN0ZW5lciBmb3IgdGhlIGRyYWcgYW5kIGRyb3Agb3B0aW9uXG4gICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgZHJhZ092ZXIpO1xuICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZnVuY3Rpb24gKGUpe1xuICAgICAgICAgICAgICAgIGRyb3BTaGlwKGUsIGZsZWV0LCBwbGF5ZXJHYW1lYm9hcmQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBvd25HYW1lYm9hcmQuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICAgIH1cbiAgICBcbiAgICBjb25zdCB0aXRsZURpdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRpdGxlRGl2LnRleHRDb250ZW50PSdGUklFTkRMWSBXQVRFUlMnO1xuICAgIG93bkFyZWEuYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xuXG4gICAgb3duQXJlYS5hcHBlbmRDaGlsZChvd25HYW1lYm9hcmQpO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQob3duQXJlYSk7XG59XG5cbi8vZHJhZ292ZXIgYW5kIGRyb3BTaGlwIGZ1bmN0aW9uc1xubGV0IGRyYWdnZWRTaGlwO1xuXG5mdW5jdGlvbiBkcmFnc3RhcnQoZSl7XG4gICAgZHJhZ2dlZFNoaXA9ZS50YXJnZXQuaWQ7XG59XG5cbmZ1bmN0aW9uIGRyYWdPdmVyKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbn1cblxuZnVuY3Rpb24gZHJvcFNoaXAoZSwgZmxlZXQsIHBsYXllckdhbWVib2FyZCl7XG4gICAgY29uc3Qgc3RhcnRJZD1lLnRhcmdldC5pZDtcbiAgICBjb25zdCBkcmFnZ2VkU2hpcERpdj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtkcmFnZ2VkU2hpcH1gKTtcbiAgICBjb25zdCBkaXJlY3Rpb249ZHJhZ2dlZFNoaXBEaXYuZGF0YXNldC5kaXJlY3Rpb247XG4gICAgY29uc3Qgcm93PU51bWJlcihzdGFydElkWzRdKTtcbiAgICBjb25zdCBjb2w9TnVtYmVyKHN0YXJ0SWRbNl0pO1xuXG4gICAgaWYgKGlzVmFsaWQoZmxlZXRbZHJhZ2dlZFNoaXBdWydzaGlwJ10sIHBsYXllckdhbWVib2FyZC5ncmlkLCByb3csIGNvbCwgZGlyZWN0aW9uKSl7XG4gICAgICAgIHBsYXllckdhbWVib2FyZC5wbGFjZVNoaXAoZmxlZXRbZHJhZ2dlZFNoaXBdWydzaGlwJ10sIHJvdywgY29sLCBkaXJlY3Rpb24pXG5cbiAgICAgICAgY29uc3QgZHJvcERpdj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChzdGFydElkKTtcbiAgICAgICAgY29uc3Qgcm90YXRlQnRuPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGByb3RhdGUke2RyYWdnZWRTaGlwfWApO1xuXG4gICAgICAgIGRyYWdnZWRTaGlwRGl2LnJlbW92ZUNoaWxkKHJvdGF0ZUJ0bik7XG4gICAgICAgIGRyYWdnZWRTaGlwRGl2LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGRyYWdzdGFydCk7XG5cbiAgICAgICAgaWYoZHJhZ2dlZFNoaXBEaXYuZGF0YXNldC5kaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgIGRyb3BEaXYuc3R5bGUudHJhbnNmb3JtPSdyb3RhdGUoOTBkZWcpJztcbiAgICAgICAgICAgIGNvbnN0IGRyYWdnZWRTaGlwRGl2SW1nPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2RyYWdnZWRTaGlwfT5pbWdgKTtcbiAgICAgICAgICAgIGRyYWdnZWRTaGlwRGl2SW1nLnN0eWxlLnRyYW5zZm9ybT0ncm90YXRlKDM2MGRlZyknO1xuICAgICAgICB9XG4gICBcbiAgICAgICAgZHJvcERpdi5hcHBlbmRDaGlsZChkcmFnZ2VkU2hpcERpdik7XG4gICAgfVxufVxuXG4vL2dlbmVyYXRlcyB0aGUgRE9NIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBzZWNvbmQgcGxheWVyJ3MgZ3JpZFxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlT3Bwb25lbnRHYW1lYm9hcmQoKXtcbiAgIFxuICAgIG9wcG9uZW50R2FtZWJvYXJkLmNsYXNzTGlzdC5hZGQoJ29wcG9uZW50R2FtZWJvYXJkJyk7XG4gICAgb3Bwb25lbnRHYW1lYm9hcmQuc2V0QXR0cmlidXRlKCdpZCcsICdvcHBvbmVudEdhbWVib2FyZCcpO1xuICAgIGZvcihsZXQgcm93PTA7IHJvdzwxMDsgcm93KyspXG4gICAgICAgIGZvcihsZXQgY29sPTA7IGNvbDwxMDsgY29sKyspe1xuICAgICAgICAgICAgY29uc3QgY2VsbD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2lkJywgYG9wcF8ke3Jvd30sJHtjb2x9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIG9wcG9uZW50R2FtZWJvYXJkLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgICB9XG5cbiAgICBjb25zdCB0aXRsZURpdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRpdGxlRGl2LnRleHRDb250ZW50PSdFTkVNWSBXQVRFUlMnO1xuICAgIG9wcG9uZW50QXJlYS5hcHBlbmRDaGlsZCh0aXRsZURpdik7XG5cbiAgICBvcHBvbmVudEFyZWEuYXBwZW5kQ2hpbGQob3Bwb25lbnRHYW1lYm9hcmQpO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQob3Bwb25lbnRBcmVhKTtcbn1cblxuLy9kaXNwbGF5cyB0aGUgbWVzc2FnZSBpbiB0aGUgYm94IGJlbG93IHRoZSB0aXRsZVxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlNZXNzYWdlKHN0cmluZyl7XG4gICAgY29uc3QgbWVzc2FnZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ21lc3NhZ2UnKTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHNwZWVkID0gMTEwOyBcblxuICAgIGZ1bmN0aW9uIHR5cGVXcml0ZXIoKSB7XG4gICAgICAgIGlmIChpIDwgc3RyaW5nLmxlbmd0aCkge1xuICAgICAgICAgICAgbWVzc2FnZS5pbm5lckhUTUwgKz0gc3RyaW5nLmNoYXJBdChpKTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIG1lc3NhZ2VCb2FyZC5hcHBlbmRDaGlsZChtZXNzYWdlKTtcbiAgICAgICAgICAgIGlmIChpPjIzKXtcbiAgICAgICAgICAgICAgICBtZXNzYWdlLmlubmVySFRNTD0gbWVzc2FnZS5pbm5lckhUTUwuc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0VGltZW91dCh0eXBlV3JpdGVyLCBzcGVlZCk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZUJvYXJkLnJlbW92ZUNoaWxkKG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH0sIHN0cmluZy5sZW5ndGgqMyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdHlwZVdyaXRlcigpO1xuIH1cblxuXG4vL2NoYW5nZXMgdGhlIGNsYXNzIG9mIHRoZSBoaXQgY2VsbCwgaW4gb3JkZXIgdG8gZGlzcGxheSB0aGUgcmVzdWx0IG9mIHRoZSBoaXRcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5SGl0KHBsYXllciwgYXR0YWNrZWRDZWxsKXtcbiAgICBsZXQgcm93ID0gcGFyc2VJbnQoYXR0YWNrZWRDZWxsLmlkWzRdKTtcbiAgICBsZXQgY29sID0gcGFyc2VJbnQoYXR0YWNrZWRDZWxsLmlkWzZdKTtcbiAgICBcbiAgICBpZiAocGxheWVyLnBsYXllckdhbWVib2FyZC5ncmlkW3Jvd11bY29sXSA9PT0gJ2hpdCcpIHtcbiAgICAgICAgICAgIGF0dGFja2VkQ2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgICAgIGF0dGFja2VkQ2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwJyk7XG4gICAgICAgIH0gZWxzZSBpZiAocGxheWVyLnBsYXllckdhbWVib2FyZC5ncmlkW3Jvd11bY29sXSA9PT0gJ21pc3MnKSB7XG4gICAgICAgICAgICBhdHRhY2tlZENlbGwuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgICAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckRPTSgpe1xuICAgIG93bkdhbWVib2FyZC5yZW1vdmUoKTtcbiAgICBvcHBvbmVudEdhbWVib2FyZC5yZW1vdmUoKTtcbn0iLCJpbXBvcnQgY2FycmllckltZyBmcm9tICcuL2ltZy9jYXJyaWVyLnBuZyc7XG5pbXBvcnQgYmF0dGxlc2hpcEltZyBmcm9tICcuL2ltZy9jcnVpc2VyLnBuZyc7XG5pbXBvcnQgZGVzdHJveWVySW1nIGZyb20gJy4vaW1nL2Rlc3Ryb3llci5wbmcnO1xuaW1wb3J0IHN1Ym1hcmluZUltZyBmcm9tICcuL2ltZy9zdWJtYXJpbmUucG5nJztcbmltcG9ydCBib2F0SW1nIGZyb20gJy4vaW1nL2JvYXQucG5nJztcbmltcG9ydCB7U2hpcH0gZnJvbSAnLi9zaGlwRmFjdG9yeSc7XG5pbXBvcnQge2dlbmVyYXRlT3duR2FtZWJvYXJkLCBnZW5lcmF0ZU9wcG9uZW50R2FtZWJvYXJkLCBkaXNwbGF5TWVzc2FnZSwgZGlzcGxheUhpdCwgZ2VuZXJhdGVTdGFydFJlc2V0QnRuLCBnZW5lcmF0ZUZsZWV0RGlzcGxheX0gZnJvbSAnLi9ET01zdHVmZic7XG5cbmV4cG9ydCBmdW5jdGlvbiBHYW1lKHBsYXllcjEsIHBsYXllcjIpe1xuICAgIFxuICAgIGxldCBmbGVldD17XG4gICAgICAgIGNhcnJpZXI6e1xuICAgICAgICAgICAgc2hpcDpTaGlwKDUpLFxuICAgICAgICAgICAgaWNvbjogY2FycmllckltZ30sXG4gICAgICAgIGJhdHRsZXNoaXA6e1xuICAgICAgICAgICAgc2hpcDpTaGlwKDQpLFxuICAgICAgICAgICAgaWNvbjogYmF0dGxlc2hpcEltZ30sXG4gICAgICAgIGRlc3Ryb3llcjp7XG4gICAgICAgICAgICBzaGlwOlNoaXAoMyksXG4gICAgICAgICAgICBpY29uOiBkZXN0cm95ZXJJbWd9LFxuICAgICAgICBzdWJtYXJpbmU6e1xuICAgICAgICAgICAgc2hpcDogU2hpcCgzKSxcbiAgICAgICAgICAgIGljb246IHN1Ym1hcmluZUltZ30sXG4gICAgICAgIHBhdHJvbEJvYXQ6e1xuICAgICAgICAgICAgc2hpcDpTaGlwKDIpLFxuICAgICAgICAgICAgaWNvbjogYm9hdEltZ31cbiAgICB9XG4gICAgXG4gICAgZ2VuZXJhdGVGbGVldERpc3BsYXkoZmxlZXQpO1xuICAgIGdlbmVyYXRlU3RhcnRSZXNldEJ0bihwbGF5ZXIxLCBwbGF5ZXIyLCBmbGVldCk7XG4gICAgZ2VuZXJhdGVPd25HYW1lYm9hcmQocGxheWVyMS5wbGF5ZXJHYW1lYm9hcmQsIGZsZWV0KTtcbiAgICBnZW5lcmF0ZU9wcG9uZW50R2FtZWJvYXJkKCk7XG5cbiAgICBwbGF5ZXIyLnBvcHVsYXRlR2FtZWJvYXJkKGZsZWV0LCBwbGF5ZXIyLnBsYXllckdhbWVib2FyZCk7XG4gICAgXG4gICAgZGlzcGxheU1lc3NhZ2UoJ1dlbGNvbWUgdG8gQmF0dGxlc2hpcHMhJyk7XG5cbiAgICBzZXRUaW1lb3V0KCgpPT4gZGlzcGxheU1lc3NhZ2UoJ1BsYWNlIHlvdXIgc2hpcHMsIHRoZW4gcHJlc3MgdGhlIFNUQVJUIGJ1dHRvbiEnKSwgMzYwMClcbiB9IiwiLy9hIGZhY3RvcnkgZnVuY3Rpb24gd2hpY2ggY3JlYXRlcyB0aGUgZ3JpZCBvZiB0aGUgZ2FtZVxuZXhwb3J0IGZ1bmN0aW9uIEdhbWVib2FyZCgpe1xuICAgIGNvbnN0IGdyaWQ9Y3JlYXRlRW1wdHlHYW1lYm9hcmQoKTtcblxuICAgIC8vZ2VuZXJhdGVzIHRoZSBlbXB0eSBib2FyZCwgd2hlcmUgdGhlIHNoaXBzIHdpbGwgYmUgcGxhY2VkOyBcbiAgICAvL3RoZSBlbXB0eSBib2FyZHMgaXMgYW4gYXJyYXkgb2YgMTAgc3ViYXJyYXlzLCByZXByZXNlbnRpbmcgdGhlIHJvd3Mgb2YgdGhlIGdyaWRcbiAgICAvL2VhY2ggc3ViYXJyYXkgaGFzIDEwIGVsZW1lbnRzLCByZXByZXNlbnRpbmcgdGhlIGNvbHVtbnMgb2YgdGhlIGdpcmRcbiAgICBmdW5jdGlvbiBjcmVhdGVFbXB0eUdhbWVib2FyZCgpe1xuICAgICAgICBsZXQgZW1wdHlHYW1lYm9hcmQ9W1tdXTtcbiAgICAgICBcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPDEwOyBpKyspe1xuICAgICAgICAgICAgZm9yKGxldCBqPTA7IGo8MTA7IGorKyl7XG4gICAgICAgICAgICAgICAgZW1wdHlHYW1lYm9hcmRbaV0ucHVzaChudWxsKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZW1wdHlHYW1lYm9hcmQucHVzaChbXSk7XG4gICAgICAgIH1cbiAgICAgICAgZW1wdHlHYW1lYm9hcmQucG9wKCk7XG4gICAgICAgIHJldHVybiBlbXB0eUdhbWVib2FyZDtcbiAgICB9XG5cbiAgICAvL3RoZSBhcnJheSBlbGVtZW50cyB3aGVyZSB0aGUgc2hpcCBpcyBwbGFjZWQgY2hhbmdlIGZyb20gJ251bGwnIGludG8gJ3NoaXAnXG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwKHNoaXAsIHJvdywgY29sLCBkaXJlY3Rpb24pe1xuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAndmVydGljYWwnKVxuICAgICAgICAgICAge2ZvcihsZXQgaT0wOyBpPHNoaXAubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZFtyb3craV1bY29sXT1zaGlwO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgIGVsc2Uge2ZvcihsZXQgaT0wOyBpPHNoaXAubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgIHRoaXMuZ3JpZFtyb3ddW2NvbCtpXT1zaGlwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgIH1cblxuICAgIC8vZGVwZW5kaW5nIG9uIHRoZSBncmlkLXZhbHVlIG9mIHRoZSBbcm93XVtjb2xdIGNvb3JkaW5hdGUsIHRoZSB2YWx1ZSBpbiB0aGUgZ3JpZCBjaGFuZ2VzIHRvICdoaXQnIG9yICdtaXNzJ1xuICAgIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2socm93LCBjb2wpe1xuICAgICAgICBpZiAodGhpcy5ncmlkW3Jvd11bY29sXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5ncmlkW3Jvd11bY29sXT0nbWlzcyc7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAgICBlbHNlIGlmKCh0aGlzLmdyaWRbcm93XVtjb2xdID09PSAnaGl0Jyl8fCh0aGlzLmdyaWRbcm93XVtjb2xdPT0nbWlzcycpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWRbcm93XVtjb2xdLmhpdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZFtyb3ddW2NvbF09J2hpdCc7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9jaGVja3MgdGhlIGdyaWQgdG8gc2VlIGlmIHRoZXJlIGFyZSBhbnkgdmFsdWVzIHRoYXQgYXJlIG5vdCAnbnVsbCcsICdoaXQnLCBvciAnbWlzcydcbiAgICAvL2kuZSwgaWYgdGhlcmUgYXJlIGFueSAnc2hpcCcgdmFsdWVzIGxlZnRcbiAgICAvL2lmIHRoZXJlIGFyZSBubyAnc2hpcCcgdmFsdWVzIGxlZnQsIGl0IG1lYW5zIHRoYXQgYWxsIHRoZSBzaGlwcyBoYXZlIGJlZW4gZGlzY292ZXJlZCBhbmQgdGhlIGdhbWUgaXMgb3ZlclxuICAgIGZ1bmN0aW9uIGlzR2FtZU92ZXIoKXtcbiAgICAgICAgZm9yKGxldCByb3c9MDsgcm93PDEwOyByb3crKylcbiAgICAgICAgICAgIGZvcihsZXQgY29sPTA7IGNvbDwxMDsgY29sKyspe1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdyaWRbcm93XVtjb2xdIT09bnVsbFxuICAgICAgICAgICAgICAgICAgICAmJnRoaXMuZ3JpZFtyb3ddW2NvbF0hPT0naGl0J1xuICAgICAgICAgICAgICAgICAgICAmJnRoaXMuZ3JpZFtyb3ddW2NvbF0hPT0nbWlzcycpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIFxuICAgIHJldHVybntcbiAgICAgICAgZ3JpZCxcbiAgICAgICAgcGxhY2VTaGlwLFxuICAgICAgICByZWNlaXZlQXR0YWNrLFxuICAgICAgICBpc0dhbWVPdmVyXG4gICAgfVxufSIsIi8vZnVuY3Rpb24gd2hpY2ggdGFrZXMgaW4gdGhlIHNoaXAsIGNvb3JkaW5hdGVzLCBnYW1lYm9hcmQgYW5kIGRpcmVjdGlvbiB2YWx1ZSBcbi8vYW5kIGNoZWNrcyBpZiB0aGF0IGNvb3JkaW5hdGUgaXMgdmFsaWQsIGkuZS4gaWYgdGhlIHNoaXAgZG9lc24ndCBnbyBvdXRzb2RlIHRoZSBcbi8vZ2FtZWJvYXJkIGFuZCBpZiB0aGUgc3F1YXJlcyBhcmUgbm90IGFscmVhZHkgdGFrZW4gYnkgYW5vdGhlciBzaGlwXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZChzaGlwLCBnYW1lYm9hcmQsIHJvdywgY29sLCBkaXJlY3Rpb24pe1xuICAgIGlmIChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpe1xuICAgICAgICBpZiAoKHJvdyArIHNoaXAubGVuZ3RoKT4xMCkgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8c2hpcC5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZWJvYXJkW3JvdytpXVtjb2xdICE9IG51bGwpIHJldHVybiBmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7fVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKChjb2wgKyBzaGlwLmxlbmd0aCk+MTApIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPHNoaXAubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVib2FyZFtyb3ddW2NvbCtpXSAhPSBudWxsKSByZXR1cm4gZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlfVxuICAgICAgICB9XG59IiwiaW1wb3J0IHtHYW1lYm9hcmR9IGZyb20gJy4vZ2FtZWJvYXJkJztcblxuZXhwb3J0IGZ1bmN0aW9uIFBsYXllcihuYW1lKXtcbiAgICBsZXQgcGxheWVyR2FtZWJvYXJkPUdhbWVib2FyZCgpO1xuICAgIFxuICAgIHJldHVybiB7bmFtZSwgcGxheWVyR2FtZWJvYXJkfVxufSIsImltcG9ydCB7IGdlbmVyYXRlRmxlZXREaXNwbGF5LCBnZW5lcmF0ZVN0YXJ0UmVzZXRCdG4gfSBmcm9tICcuL0RPTXN0dWZmJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJldHVyblNoaXBzSG9tZShwbGF5ZXIxLCBwbGF5ZXIyLCBmbGVldCl7XG4gICAgY29uc3QgZmxlZXREaXY9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZsZWV0RGl2Jyk7XG4gICAgY29uc3QgbWFpbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuXG4gICAgY29uc3QgcGxhY2VkU2hpcHNJbWc9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm93bkdhbWVib2FyZCBpbWcnKTtcbiAgICBwbGFjZWRTaGlwc0ltZy5mb3JFYWNoKHBsYWNlZFNoaXBJbWcgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnQ9cGxhY2VkU2hpcEltZy5wYXJlbnROb2RlO1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGxhY2VkU2hpcEltZyk7XG4gICAgfSlcblxuICAgIGNvbnN0IHBsYWNlZFNoaXBzPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vd25HYW1lYm9hcmQgLnNoaXBJbWcnKTtcbiAgICBwbGFjZWRTaGlwcy5mb3JFYWNoKHNoaXBEaXYgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnQ9c2hpcERpdi5wYXJlbnROb2RlO1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoc2hpcERpdik7XG4gICAgfSlcblxuICAgIGNvbnN0IHJlbWFpbmluZ0RpdkltZ3M9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZsZWV0RGl2IGltZycpO1xuICAgIHJlbWFpbmluZ0RpdkltZ3MuZm9yRWFjaChyZW1haW5pbmdEaXY9PiB7XG4gICAgICAgIGNvbnN0IHBhcmVudERpdj1yZW1haW5pbmdEaXYucGFyZW50RWxlbWVudDtcbiAgICAgICAgcGFyZW50RGl2LnJlbW92ZUNoaWxkKHJlbWFpbmluZ0Rpdik7XG4gICAgfSlcblxuICAgIGNvbnN0IHJlbWFpbmluZ0RpdnM9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZsZWV0RGl2IGRpdicpO1xuICAgIHJlbWFpbmluZ0RpdnMuZm9yRWFjaChyZW1haW5pbmdEaXYgPT4ge1xuICAgICAgICBmbGVldERpdi5yZW1vdmVDaGlsZChyZW1haW5pbmdEaXYpO1xuICAgIH0pO1xuXG4gICAgZm9yKGxldCBpPTA7IGk8MTA7IGkrKyl7XG4gICAgICAgIGZvcihsZXQgaj0wOyBqPDEwOyBqKyspe1xuICAgICAgICAgICAgcGxheWVyMS5wbGF5ZXJHYW1lYm9hcmQuZ3JpZFtpXVtqXSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtYWluLnJlbW92ZUNoaWxkKGZsZWV0RGl2KTtcblxuICAgIGdlbmVyYXRlRmxlZXREaXNwbGF5KGZsZWV0KTtcbiAgICBnZW5lcmF0ZVN0YXJ0UmVzZXRCdG4ocGxheWVyMSwgcGxheWVyMiwgZmxlZXQpO1xufSIsImV4cG9ydCBmdW5jdGlvbiBTaGlwKGxlbmd0aCl7XG4gICAgbGV0IHRpbWVzSGl0PTA7XG4gICAgXG4gICAgZnVuY3Rpb24gaGl0KCl7XG4gICAgICAgIHJldHVybiB0aGlzLnRpbWVzSGl0Kys7XG4gICAgICAgIH07XG5cbiAgICBmdW5jdGlvbiBpc1N1bmsoKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRpbWVzSGl0ID09PSBsZW5ndGg7XG4gICAgICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBsZW5ndGgsXG4gICAgICAgIHRpbWVzSGl0LFxuICAgICAgICBoaXQsXG4gICAgICAgIGlzU3Vua1xuICAgIH07XG59IiwiaW1wb3J0IHsgZGlzcGxheUhpdCwgZGlzcGxheU1lc3NhZ2UgfSBmcm9tIFwiLi9ET01zdHVmZlwiO1xuXG4vL05FRURTIFJFRkFDVE9SSU5HXG5leHBvcnQgZnVuY3Rpb24gdGFraW5nVHVybnMocGxheWVyMSwgcGxheWVyMil7XG4gICAgbGV0IGN1cnJlbnRQbGF5ZXI9J3BsYXllcjEnO1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2VsbENsaWNrKHJvdywgY29sKXtcbiAgICAgICAgbGV0IGF0dGFja2VkQ2VsbD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChgb3BwXyR7cm93fSwke2NvbH1gKTtcbiAgICAgICAgaWYoIGN1cnJlbnRQbGF5ZXIgPT09ICdwbGF5ZXIxJyl7XG4gICAgICAgICAgICBpZiAocGxheWVyMi5wbGF5ZXJHYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhyb3csIGNvbCkpe1xuICAgICAgICAgICAgICAgIGRpc3BsYXlIaXQocGxheWVyMiwgYXR0YWNrZWRDZWxsKTtcbiAgICAgICAgICAgICAgICBpZihwbGF5ZXIyLnBsYXllckdhbWVib2FyZC5pc0dhbWVPdmVyKCkpe1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TWVzc2FnZSgnSHVycmF5ISBZb3Ugd29uIHRoZSBnYW1lJylcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjdXJyZW50UGxheWVyPVwicGxheWVyMlwiO1xuXG4gICAgICAgICAgICAgICAgbGV0IGF0dGFja0Nvb3JkaW5hdGVzPXBsYXllcjIuZ2VuZXJhdGVIaXQoKTtcbiAgICAgICAgICAgICAgICByb3c9YXR0YWNrQ29vcmRpbmF0ZXNbMF07XG4gICAgICAgICAgICAgICAgY29sPWF0dGFja0Nvb3JkaW5hdGVzWzFdO1xuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyMS5wbGF5ZXJHYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhyb3csIGNvbCk7XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgYXR0YWNrZWRDZWxsPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBvd25fJHtyb3d9LCR7Y29sfWApO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5SGl0KHBsYXllcjEsIGF0dGFja2VkQ2VsbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllcjEucGxheWVyR2FtZWJvYXJkLmlzR2FtZU92ZXIoKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TWVzc2FnZSgnQXd3dyEgVGhlIGNvbXB1dGVyIHdvbiB0aGUgZ2FtZSEnKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGN1cnJlbnRQbGF5ZXI9J3BsYXllcjEnO1xuICAgICAgICAgICAgfSwgNzAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG9wcG9uZW50R2FtZWJvYXJkPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcHBvbmVudEdhbWVib2FyZCcpO1xuICAgIFxuICAgIC8vZ2V0cyB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlIGNlbGwgY2xpY2tlZCBieSB0aGUgaHVtYW4gdXNlcihwbGF5ZXIxKSBhbmQgaGl0cyBpdCwgXG4gICAgLy90cmlnZ2VyaW5nIGFmdGVyIHRoYXQgdGhlIGhpdCBvZiB0aGUgY29tcHV0ZXIgcGxheWVyKHBsYXllcjIpXG4gICAgb3Bwb25lbnRHYW1lYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+e1xuICAgICAgICBjb25zdCBjZWxsPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUudGFyZ2V0LmlkKTtcbiAgICAgICAgY29uc3Qgcm93PXBhcnNlSW50KGUudGFyZ2V0LmlkWzRdKTtcbiAgICAgICAgY29uc3QgY29sPXBhcnNlSW50KGUudGFyZ2V0LmlkWzZdKTtcbiAgICAgICAgaGFuZGxlQ2VsbENsaWNrKHJvdyxjb2wsIGNlbGwpO1xuICAgIH0pXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQge1BsYXllcn0gZnJvbSAnLi9wbGF5ZXInO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge0dhbWV9IGZyb20gJy4vR2FtZS5qcyc7XG5pbXBvcnQge0FJcGxheWVyfSBmcm9tICcuL0FJcGxheWVyJztcblxubGV0IHBsYXllcjE9UGxheWVyKCdwbGF5ZXIxJyk7XG5sZXQgcGxheWVyMj1BSXBsYXllcigpO1xuXG5HYW1lKHBsYXllcjEsIHBsYXllcjIpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=