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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 393);
/******/ })
/************************************************************************/
/******/ ({

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(394);


/***/ }),

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(395);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ClickerLogic = function () {
    function ClickerLogic(parentNode) {
        _classCallCheck(this, ClickerLogic);

        this.parentNode = parentNode;
        this.clicks = 0;
        this.level = 0;
        this.render();
        this.handleEvents();
        this.logic();
    }

    _createClass(ClickerLogic, [{
        key: 'logic',
        value: function logic() {
            var _this = this;

            setInterval(function () {
                _this.clicks = _this.clicks + _this.level * 10;
                _this.updateEvent();
            }, 1000);
        }
    }, {
        key: 'handleEvents',
        value: function handleEvents() {
            var _this2 = this;

            this.btnAdd.addEventListener('click', function () {
                _this2.clicks = _this2.clicks + 1;
                _this2.updateEvent();
            });

            this.btnAddAuto.addEventListener('click', function () {
                if (_this2.clicks >= 10) {
                    _this2.level = _this2.level + 1;
                    _this2.clicks = _this2.clicks - 10;
                    _this2.updateEvent();
                }
            });
        }
    }, {
        key: 'updateEvent',
        value: function updateEvent() {
            this.counterAdd.innerHTML = this.clicks;
            this.btnAddAuto.innerHTML = 'Current lvl: ' + this.level + ' Click for buy! (Price: 10 clicks) (+10 clicks per sec) Now: ' + this.level * 10 + ' per sec';
        }
    }, {
        key: 'render',
        value: function render() {
            this.btnAdd = document.createElement('button');
            this.counterAdd = document.createElement('h1');
            this.btnAddAuto = document.createElement('button');

            this.counterAdd.classList.add('clicker__count');
            this.btnAdd.classList.add('clicker__button');
            this.btnAddAuto.classList.add('clicker__button-auto');

            this.counterAdd.innerHTML = this.clicks;
            this.btnAdd.innerHTML = 'Click on me!';
            this.updateEvent();

            this.parentNode.appendChild(this.counterAdd);
            this.parentNode.appendChild(this.btnAdd);
            this.parentNode.appendChild(this.btnAddAuto);
        }
    }]);

    return ClickerLogic;
}();

var Logic = new ClickerLogic(document.querySelector('.clicker'));

/***/ }),

/***/ 395:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });