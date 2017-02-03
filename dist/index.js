"use strict";
var adjective = require("./adjective/transform");
var verb = require("./verb/transform");
var noun = require("./noun/transform");
var noundDetection = require("./noun/detect_singular_plural");
var countableDetection = require("./noun/detect_countable");
var verbsList = require("./verb/solve_lookup");
var list_uncountable_1 = require("./noun/list_uncountable");
var Inflector = (function () {
    function Inflector(word) {
        var _this = this;
        this.comparative = function () { return adjective.comparative(_this.word); };
        this.superlative = function () { return adjective.superlative(_this.word); };
        this.conjugate = function (to) { return verb.conjugate(_this.word, to); };
        this.toPresnet = function () { return verb.toPresent(_this.word); };
        this.toPast = function () { return verb.toPast(_this.word); };
        this.toPastParticiple = function () { return verb.toPastParticiple(_this.word); };
        this.toPrenseS = function () { return verb.toPresentS(_this.word); };
        this.toGerund = function () { return verb.toGerund(_this.word); };
        this.toPlural = function () { return noun.toPlural(_this.word); };
        this.toSingular = function () { return noun.toSingular(_this.word); };
        this.isSingular = function () { return noundDetection.isSingular(_this.word); };
        this.isPlural = function () { return noundDetection.isPlural(_this.word); };
        this.isCountable = function () { return countableDetection.isCountable(_this.word); };
        this.isNotCountable = function () { return countableDetection.isNotCountable(_this.word); };
        this.infinitives = verbsList.VBP;
        this.nonCountables = list_uncountable_1["default"];
        this.word = word;
    }
    return Inflector;
}());
exports.__esModule = true;
exports["default"] = Inflector;
