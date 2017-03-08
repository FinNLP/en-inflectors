/// <reference path="../../node_modules/@types/node/index.d.ts"/>
/// <reference path="../../node_modules/@types/mocha/index.d.ts"/>
const assert = require("assert");


import {Inflector} from "../../src/index";
import verbsList from "./verbs";

function testConjugations(entry:any,expected:any){
	describe(`verb conjugation, ENTRY: ${entry}`, function () {
		var result = [
			new Inflector(entry).conjugate("VBP"),
			new Inflector(entry).conjugate("VBD"),
			new Inflector(entry).conjugate("VBN"),
			new Inflector(entry).conjugate("VBZ"),
			new Inflector(entry).conjugate("VBG"),
		];
		it(`[0]VBP: ${expected[0]} === ${result[0]}?`, function () {
			assert.equal(result[0],expected[0]);
		});
		it(`[1]VBD: ${expected[1]} === ${result[1]}?`, function () {
			assert.equal(result[1],expected[1]);
		});
		it(`[2]VBN: ${expected[2]} === ${result[2]}?`, function () {
			assert.equal(result[2],expected[2]);
		});
		it(`[3]VBZ: ${expected[3]} === ${result[3]}?`, function () {
			assert.equal(result[3],expected[3]);
		});
		it(`[4]VBG: ${expected[4]} === ${result[4]}?`, function () {
			assert.equal(result[4],expected[4]);
		});
	});
}

for(var entry in verbsList) {
	if(verbsList.hasOwnProperty(entry)) {
		testConjugations(entry,(verbsList[entry]));
	}
}