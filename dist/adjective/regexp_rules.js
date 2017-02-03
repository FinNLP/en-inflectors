"use strict";
var syllablesNum = function (str) { return str.split(/[^aeiouy]*[aeiouy]+[^aeiouy]*/).length; };
exports.__esModule = true;
exports["default"] = [
    {
        test: function (str) { return syllablesNum(str) > 3; },
        comp: function (str) { return "more " + str; },
        supr: function (str) { return "most " + str; }
    },
    {
        test: function (str) { return syllablesNum(str) > 2 && /ing$/.test(str); },
        comp: function (str) { return "more " + str; },
        supr: function (str) { return "most " + str; }
    },
    {
        test: function (str) { return syllablesNum(str) > 2 && /ed$/.test(str); },
        comp: function (str) { return "more " + str; },
        supr: function (str) { return "most " + str; }
    },
    {
        test: function (str) { return /[^aeiouy][aeiouy][^aeiouy]$/.test(str); },
        comp: function (str) { return str.replace(/([^aeiouy])$/, "$1$1er"); },
        supr: function (str) { return str.replace(/([^aeiouy])$/, "$1$1est"); }
    },
    {
        test: function (str) { return /y$/.test(str); },
        comp: function (str) { return str.replace(/y$/, "ier"); },
        supr: function (str) { return str.replace(/y$/, "iest"); }
    },
    {
        test: function (str) { return /e$/.test(str); },
        comp: function (str) { return str.replace(/y$/, "er"); },
        supr: function (str) { return str.replace(/y$/, "est"); }
    },
    {
        test: function (str) { return true; },
        comp: function (str) { return str + "er"; },
        supr: function (str) { return str + "est"; }
    }
];
