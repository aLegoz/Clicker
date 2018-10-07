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
/******/ 	return __webpack_require__(__webpack_require__.s = 394);
/******/ })
/************************************************************************/
/******/ ({

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(395);


/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(396);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HandClicksBtn = function () {
    function HandClicksBtn(btnOptions) {
        _classCallCheck(this, HandClicksBtn);

        this.btnOptions = btnOptions;
        var btnSelector = document.querySelector('.game-btns');
        this.render(btnSelector);
        this.handleEvents();
    }

    _createClass(HandClicksBtn, [{
        key: 'handleEvents',
        value: function handleEvents() {
            var _this = this;

            this.btnAdd.addEventListener('click', function () {
                Game.resource[_this.btnOptions.resource].amount += _this.btnOptions.modifier;
                Game.renderUpdate();
            });
        }
    }, {
        key: 'render',
        value: function render(btnSelector) {
            this.btnAdd = document.createElement('button');
            this.btnAdd.classList.add('game-btns__item');
            this.btnAdd.innerHTML = this.btnOptions.modifier + ' ' + this.btnOptions.resource + ' per click';
            btnSelector.appendChild(this.btnAdd);
        }
    }]);

    return HandClicksBtn;
}();

var FactoryHandClicks = function () {
    function FactoryHandClicks() {
        _classCallCheck(this, FactoryHandClicks);

        this.btnOptions = {
            firstBtn: { resource: 'meat', modifier: 15 },
            SecondBtn: { resource: 'stone', modifier: 200 },
            KekBtn: { resource: 'wood', modifier: 200 }
        };
        this.btnList = [];
        this.init();
    }

    _createClass(FactoryHandClicks, [{
        key: 'init',
        value: function init() {
            for (var pointer in this.btnOptions) {
                console.log(this.btnOptions[pointer]);
                this.btnList.push(new HandClicksBtn(this.btnOptions[pointer]));
            }
        }
    }]);

    return FactoryHandClicks;
}();

var FactoryAutoClicks = function () {
    function FactoryAutoClicks() {
        _classCallCheck(this, FactoryAutoClicks);

        this.factoryOptions = {
            factoryOne: { basePrice: 70, baseProfit: 20, resourceType: 'wood' },
            factoryTwo: { basePrice: 80, baseProfit: 10, resourceType: 'stone' },
            factoryOasdne: { basePrice: 70, baseProfit: 20, resourceType: 'meat' },
            factorasdyTwo: { basePrice: 80, baseProfit: 10, resourceType: 'meat' }
        };
        this.factoryList = [];
        this.init();
    }

    _createClass(FactoryAutoClicks, [{
        key: 'init',
        value: function init() {
            for (var pointer in this.factoryOptions) {
                this.factoryList.push(new AutoFactory(this.factoryOptions[pointer]));
            }
        }
    }]);

    return FactoryAutoClicks;
}();

var AutoFactory = function () {
    function AutoFactory(factoryOptions) {
        _classCallCheck(this, AutoFactory);

        this.factoryOptions = factoryOptions;
        this.factoryOptions.currentPrice = this.factoryOptions.basePrice;
        this.factoryOptions.currentProfit = 0;
        this.factoryOptions.currentLevel = 0;
        var btnSelector = document.querySelector('.game-btns');
        this.render(btnSelector);
        this.handleEvents();
        this.renderUpdate();
    }

    _createClass(AutoFactory, [{
        key: 'handleEvents',
        value: function handleEvents() {
            var _this2 = this;

            this.btnAdd.addEventListener('click', function () {
                if (Game.resource[_this2.factoryOptions.resourceType].amount >= _this2.factoryOptions.currentPrice) {
                    Game.resource[_this2.factoryOptions.resourceType].amount -= _this2.factoryOptions.currentPrice;
                    _this2.factoryOptions.currentLevel++;
                    _this2.factoryOptions.currentProfit = _this2.factoryOptions.baseProfit * _this2.factoryOptions.currentLevel;
                    _this2.factoryOptions.currentPrice = Math.round(_this2.factoryOptions.basePrice * Math.pow(1.15, _this2.factoryOptions.currentLevel));
                    Game.resource[_this2.factoryOptions.resourceType].rps += _this2.factoryOptions.baseProfit;
                }
                Game.renderUpdate();
                _this2.renderUpdate();
            });
        }
    }, {
        key: 'renderUpdate',
        value: function renderUpdate() {
            this.btnAdd.innerHTML = 'Price: ' + this.factoryOptions.currentPrice + ' rps: +' + this.factoryOptions.currentProfit + ' ' + this.factoryOptions.resourceType;
        }
    }, {
        key: 'render',
        value: function render(btnSelector) {
            this.btnAdd = document.createElement('button');
            this.btnAdd.classList.add('game-btns__item');
            this.btnAdd.innerHTML = 'it is FACTORIO';
            btnSelector.appendChild(this.btnAdd);
        }
    }]);

    return AutoFactory;
}();

var GameLogic = function () {
    function GameLogic(parentNode) {
        _classCallCheck(this, GameLogic);

        var storagePlace = document.querySelector('.storage__items');
        this.parentNode = parentNode;
        this.resource = {
            meat: { amount: 0, rps: 0 },
            wood: { amount: 0, rps: 0 },
            stone: { amount: 0, rps: 0 }
        };
        this.selectorsStorage = [];
        this.render(storagePlace);
        var handClicksBtn = new FactoryHandClicks();
        var factoryClicks = new FactoryAutoClicks();
        this.renderUpdate();
        this.logic();
    }

    _createClass(GameLogic, [{
        key: 'logic',
        value: function logic() {
            var _this3 = this;

            setInterval(function () {
                for (var pointer in _this3.resource) {
                    _this3.resource[pointer].amount += _this3.resource[pointer].rps / 10;
                }
                _this3.renderUpdate();
            }, 100);
        }
    }, {
        key: 'renderUpdate',
        value: function renderUpdate() {
            var pointer = 0;
            for (var test in this.resource) {
                this.selectorsStorage[pointer].name.innerHTML = test;
                this.selectorsStorage[pointer].amount.innerHTML = this.resource[test].amount;
                this.selectorsStorage[pointer].rps.innerHTML = this.resource[test].rps;
                pointer++;
            }
        }
    }, {
        key: 'render',
        value: function render(storagePlace) {
            for (var pointer in this.resource) {
                this.liAdd = document.createElement('li');
                this.liAdd.classList.add('storage__item');
                storagePlace.appendChild(this.liAdd);

                this.resourceNameAdd = document.createElement('div');
                this.resourceNameAdd.classList.add('resource-name');
                this.liAdd.appendChild(this.resourceNameAdd);

                this.resourceAmountAdd = document.createElement('div');
                this.resourceAmountAdd.classList.add('resource-amount');
                this.liAdd.appendChild(this.resourceAmountAdd);

                this.rpsAdd = document.createElement('div');
                this.rpsAdd.classList.add('resource-ps');
                this.liAdd.appendChild(this.rpsAdd);

                var temp = {
                    name: this.resourceNameAdd,
                    amount: this.resourceAmountAdd,
                    rps: this.rpsAdd
                };
                this.selectorsStorage.push(temp);
            }
        }
    }]);

    return GameLogic;
}();

var Game = new GameLogic(document.querySelector('.game'));

/***/ }),

/***/ 396:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });