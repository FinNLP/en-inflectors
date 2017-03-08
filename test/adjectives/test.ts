/// <reference path="../../node_modules/@types/node/index.d.ts"/>
/// <reference path="../../node_modules/@types/mocha/index.d.ts"/>
const assert = require("assert");


import {Inflector} from "../../src/index";
import list from "./adjectives";


describe('ADJECTIVES', function () {
	(list as any).forEach((entry:any)=>{
		describe(entry[0], function () {
			it(`${new Inflector(entry[0]).comparative()} === ${entry[1]}`, function () {
				assert.equal(new Inflector(entry[0]).comparative(),entry[1]);
			});
			it(`${new Inflector(entry[0]).superlative()} === ${entry[2]}`, function () {
				assert.equal(new Inflector(entry[0]).superlative(),entry[2]);
			});
		});
	});
});