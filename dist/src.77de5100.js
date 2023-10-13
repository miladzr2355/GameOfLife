// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"cell/Cell.ts":[function(require,module,exports) {
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cell = void 0;
var Cell = /*#__PURE__*/_createClass(function Cell() {
  var _this = this;
  var _alive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  _classCallCheck(this, Cell);
  this.isAlive = function () {
    return _this.alive;
  };
  this.toggleLivingStatus = function () {
    _this.alive = !_this.alive;
  };
  this.alive = _alive;
});
exports.Cell = Cell;
},{}],"utility/GridBoundaryChecker.ts":[function(require,module,exports) {
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GridBoundaryChecker = void 0;
var GridBoundaryChecker = /*#__PURE__*/function () {
  function GridBoundaryChecker(_numRows, _numCols) {
    _classCallCheck(this, GridBoundaryChecker);
    this.numRows = _numRows;
    this.numCols = _numCols;
  }
  _createClass(GridBoundaryChecker, [{
    key: "isWithinBoundaries",
    value: function isWithinBoundaries(row, col) {
      return row >= 0 && row < this.numRows && col >= 0 && col < this.numCols;
    }
  }]);
  return GridBoundaryChecker;
}();
exports.GridBoundaryChecker = GridBoundaryChecker;
},{}],"rules/SurvivalRule/SurvivalRule.ts":[function(require,module,exports) {
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SurvivalRule = void 0;
var SurvivalRule = /*#__PURE__*/function () {
  function SurvivalRule() {
    _classCallCheck(this, SurvivalRule);
  }
  _createClass(SurvivalRule, [{
    key: "applies",
    value: function applies(isAlive) {
      return isAlive;
    }
  }, {
    key: "shouldLive",
    value: function shouldLive(numberOfLivingNeighbours) {
      return numberOfLivingNeighbours === 3 || numberOfLivingNeighbours === 2;
    }
  }]);
  return SurvivalRule;
}();
exports.SurvivalRule = SurvivalRule;
},{}],"rules/ReproduceRule/ReproduceRule.ts":[function(require,module,exports) {
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReproduceRule = void 0;
var ReproduceRule = /*#__PURE__*/function () {
  function ReproduceRule() {
    _classCallCheck(this, ReproduceRule);
  }
  _createClass(ReproduceRule, [{
    key: "applies",
    value: function applies(isAlive) {
      return !isAlive;
    }
  }, {
    key: "shouldLive",
    value: function shouldLive(numberOfLivingNeighbours) {
      return numberOfLivingNeighbours === 3;
    }
  }]);
  return ReproduceRule;
}();
exports.ReproduceRule = ReproduceRule;
},{}],"rules/SolitudeRule/SolitudeRule.ts":[function(require,module,exports) {
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SolitudeRule = void 0;
var SolitudeRule = /*#__PURE__*/_createClass(function SolitudeRule() {
  _classCallCheck(this, SolitudeRule);
  this.applies = function (isAlive) {
    return isAlive;
  };
  this.shouldLive = function (numberOfLivingNeighbours) {
    return numberOfLivingNeighbours > 1;
  };
});
exports.SolitudeRule = SolitudeRule;
},{}],"rules/OverPopulationRule/OverPopulationRule.ts":[function(require,module,exports) {
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OverPopulationRule = void 0;
var OverPopulationRule = /*#__PURE__*/_createClass(function OverPopulationRule() {
  _classCallCheck(this, OverPopulationRule);
  this.applies = function (isAlive) {
    return isAlive;
  };
  this.shouldLive = function (numberOfLivingNeighbours) {
    return numberOfLivingNeighbours < 4;
  };
});
exports.OverPopulationRule = OverPopulationRule;
},{}],"grid/Grid.ts":[function(require,module,exports) {
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Grid = void 0;
var Cell_1 = require("../cell/Cell");
var GridBoundaryChecker_1 = require("../utility/GridBoundaryChecker");
var SurvivalRule_1 = require("../rules/SurvivalRule/SurvivalRule");
var ReproduceRule_1 = require("../rules/ReproduceRule/ReproduceRule");
var SolitudeRule_1 = require("../rules/SolitudeRule/SolitudeRule");
var OverPopulationRule_1 = require("../rules/OverPopulationRule/OverPopulationRule");
var Grid = /*#__PURE__*/function () {
  function Grid(_rows, _cols) {
    var _useInitialProbability = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var _initialProbability = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.4;
    _classCallCheck(this, Grid);
    this.rows = _rows;
    this.cols = _cols;
    this.useInitialProbability = _useInitialProbability;
    this.initialProbability = _initialProbability;
    this.rules = [new SurvivalRule_1.SurvivalRule(), new OverPopulationRule_1.OverPopulationRule(), new ReproduceRule_1.ReproduceRule(), new SolitudeRule_1.SolitudeRule()];
    this.boundaryChecker = new GridBoundaryChecker_1.GridBoundaryChecker(_rows, _cols);
    this.initGrid();
  }
  _createClass(Grid, [{
    key: "initGrid",
    value: function initGrid() {
      this.cells = new Array(this.rows);
      for (var i = 0; i < this.rows; i++) {
        this.cells[i] = new Array(this.cols);
        for (var j = 0; j < this.cols; j++) {
          this.useInitialProbability ? this.cells[i][j] = new Cell_1.Cell(Math.random() < this.initialProbability) : this.cells[i][j] = new Cell_1.Cell(false);
        }
      }
    }
  }, {
    key: "numRows",
    get: function get() {
      return this.cells.length;
    }
  }, {
    key: "numCols",
    get: function get() {
      return this.cells[0].length;
    }
  }, {
    key: "getCell",
    value: function getCell(row, col) {
      if (this.boundaryChecker.isWithinBoundaries(row, col)) {
        return this.cells[row][col];
      }
      return new Cell_1.Cell(false);
    }
  }, {
    key: "setCell",
    value: function setCell(row, col, isAlive) {
      this.cells[row][col] = new Cell_1.Cell(isAlive);
    }
  }, {
    key: "toggleCell",
    value: function toggleCell(row, col) {
      this.cells[row][col].toggleLivingStatus();
    }
  }, {
    key: "getNeighbors",
    value: function getNeighbors(row, col) {
      var neighbors = [];
      for (var i = -1; i <= 1; i++) {
        for (var j = -1; j <= 1; j++) {
          if (i === 0 && j === 0) continue;
          var neighborRow = row + i;
          var neighborCol = col + j;
          if (this.boundaryChecker.isWithinBoundaries(neighborRow, neighborCol)) {
            neighbors.push(this.getCell(neighborRow, neighborCol));
          }
        }
      }
      return neighbors;
    }
  }, {
    key: "nextGeneration",
    value: function nextGeneration() {
      var nextGeneration = [];
      for (var i = 0; i < this.numRows; i++) {
        nextGeneration[i] = new Array(this.numCols);
        for (var j = 0; j < this.numCols; j++) {
          nextGeneration[i][j] = this.createNewCell(i, j);
        }
      }
      this.cells = nextGeneration;
    }
  }, {
    key: "createNewCell",
    value: function createNewCell(i, j) {
      var _this = this;
      var livingNeighbors = this.getNeighbors(i, j).filter(function (neighbor) {
        return neighbor.isAlive();
      });
      var shouldLive = this.rules.filter(function (rule) {
        return rule.applies(_this.cells[i][j].isAlive());
      }).every(function (rule) {
        return rule.shouldLive(livingNeighbors.length);
      });
      return new Cell_1.Cell(shouldLive);
    }
  }]);
  return Grid;
}();
exports.Grid = Grid;
},{"../cell/Cell":"cell/Cell.ts","../utility/GridBoundaryChecker":"utility/GridBoundaryChecker.ts","../rules/SurvivalRule/SurvivalRule":"rules/SurvivalRule/SurvivalRule.ts","../rules/ReproduceRule/ReproduceRule":"rules/ReproduceRule/ReproduceRule.ts","../rules/SolitudeRule/SolitudeRule":"rules/SolitudeRule/SolitudeRule.ts","../rules/OverPopulationRule/OverPopulationRule":"rules/OverPopulationRule/OverPopulationRule.ts"}],"index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Grid_1 = require("./grid/Grid");
var canvas = document.querySelector("#game");
var width = canvas.width;
var height = canvas.height;
var context = canvas.getContext("2d");
var cellSize = 20;
var numRows = width / cellSize;
var numCols = height / cellSize;
var startButton = document.querySelector(".start-btn");
var pauseButton = document.querySelector(".pause-btn");
var randomGridButton = document.querySelector(".random-grid-btn");
var clearButton = document.querySelector(".clear-btn");
var grid = new Grid_1.Grid(numRows, numCols, false);
var isGamePaused = false;
grid.setCell(0, 1, true);
grid.setCell(1, 2, true);
grid.setCell(2, 0, true);
grid.setCell(2, 1, true);
grid.setCell(2, 2, true);
var setContext = function setContext() {
  if (context !== null) {
    context.fillStyle = "rgb(100, 240, 150)";
    context.strokeStyle = "rgb(90, 90, 90)";
    context.lineWidth = 1;
  }
};
var drawGridBorders = function drawGridBorders() {
  if (context !== null) {
    for (var i = 0; i < numRows; i++) {
      context.beginPath();
      context.moveTo(i * cellSize - 0.5, 0);
      context.lineTo(i * cellSize - 0.5, height);
      context.stroke();
    }
    for (var j = 0; j < numCols; j++) {
      context.beginPath();
      context.moveTo(0, j * cellSize - 0.5);
      context.lineTo(width, j * cellSize - 0.5);
      context.stroke();
    }
  }
};
var drawCellOnGrid = function drawCellOnGrid() {
  for (var i = 0; i < numRows; i++) {
    for (var j = 0; j < numCols; j++) {
      if (!grid.getCell(i, j).isAlive()) continue;
      context === null || context === void 0 ? void 0 : context.fillRect(i * cellSize, j * cellSize, cellSize, cellSize);
    }
  }
};
var clear = function clear() {
  context === null || context === void 0 ? void 0 : context.clearRect(0, 0, width, height);
};
var drawAll = function drawAll() {
  clear();
  drawCellOnGrid();
  drawGridBorders();
};
var nextGen = function nextGen() {
  if (isGamePaused) return;
  grid.nextGeneration();
  drawAll();
};
var gameLoop = function gameLoop() {
  nextGen();
  setTimeout(gameLoop, 100);
};
var toggleGamePaused = function toggleGamePaused() {
  isGamePaused = !isGamePaused;
};
var setGridRandomPopulationDencity = function setGridRandomPopulationDencity() {
  grid = new Grid_1.Grid(numRows, numCols, true, 0.3);
};
canvas === null || canvas === void 0 ? void 0 : canvas.addEventListener("click", function (e) {
  var xPos = Math.floor((e.clientX - canvas.offsetLeft) / cellSize);
  var yPos = Math.floor((e.clientY - canvas.offsetTop) / cellSize);
  grid.toggleCell(xPos, yPos);
  drawAll();
});
var handleStartButtonClick = function handleStartButtonClick() {
  setContext();
  gameLoop();
};
var handlePauseButtonClick = function handlePauseButtonClick() {
  toggleGamePaused();
};
var handleRandomGridButtonClick = function handleRandomGridButtonClick() {
  setGridRandomPopulationDencity();
};
var handleClearButtonClick = function handleClearButtonClick() {
  window.location.reload();
  clear();
};
startButton === null || startButton === void 0 ? void 0 : startButton.addEventListener("click", handleStartButtonClick);
pauseButton === null || pauseButton === void 0 ? void 0 : pauseButton.addEventListener("click", handlePauseButtonClick);
randomGridButton === null || randomGridButton === void 0 ? void 0 : randomGridButton.addEventListener("click", handleRandomGridButtonClick);
clearButton === null || clearButton === void 0 ? void 0 : clearButton.addEventListener("click", handleClearButtonClick);
setContext();
},{"./grid/Grid":"grid/Grid.ts"}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57230" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.ts"], null)
//# sourceMappingURL=/src.77de5100.js.map