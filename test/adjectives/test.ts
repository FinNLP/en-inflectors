const Inflector = require("../../dist/index.js").Inflectors;
const assert = require("assert");

describe('ADJECTIVES', function () {
	const list = require('./adjectives.json');
	list.forEach((entry)=>{
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