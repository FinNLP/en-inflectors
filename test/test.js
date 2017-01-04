const inflectors = require("../inflectors.js");
const assert = require("assert");

describe('singularization & pluralization', function () {
	const singulars = require("./singulars.json");
	describe('test against huge list of common singulars', function () {
		singulars.forEach((item)=>{
			it('test item: '+item+' is not plural', function () {
				assert.equal(inflectors.isPlural(item),false);
			});
			it('test item: '+item+' is singular', function () {
				assert.equal(inflectors.isSingular(item),true);
			});
		});
	});

	const plurals = require("./plurals.json");
	describe('test against huge list of common plurals', function () {
		plurals.forEach((item)=>{
			it('test item: '+item+' is plural', function () {
				assert.equal(inflectors.isPlural(item),true);
			});
			it('test item: '+item+' is not singular', function () {
				assert.equal(inflectors.isSingular(item),false);
			});
		});
	});

	describe('test against comparative list of singulars and plurals', function () {
		const singularsAndPluralsList = require("./singulars_plurals.json");
		describe('booleans', function () {
			
			describe('isSingular', function () {
				singularsAndPluralsList.forEach((arr)=>{
					it('isSingular: '+arr[0], function () {
						assert.equal(inflectors.isSingular(arr[0]),true);
					});
				});
			});

			describe('isSingular', function () {
				singularsAndPluralsList.forEach((arr)=>{
					it('isSingular: '+arr[1], function () {
						assert.equal(inflectors.isSingular(arr[1]),false);
					});
				});
			});

			describe('isPlural', function () {
				singularsAndPluralsList.forEach((arr)=>{
					it('isPlural: '+arr[1], function () {
						assert.equal(inflectors.isPlural(arr[1]),true);
					});
				});
			});
			
			describe('isPlural', function () {
				singularsAndPluralsList.forEach((arr)=>{
					it('isPlural: '+arr[0], function () {
						assert.equal(inflectors.isPlural(arr[0]),false);
					});
				});
			});
		});

		describe('transformations', function () {
			describe('plural to singular', function () {
				singularsAndPluralsList.forEach((arr)=>{
					it(arr[1], function () {
						assert.equal(inflectors.singularize(arr[1]),arr[0]);
					});
				});
			});
			describe('singular to plural', function () {
				singularsAndPluralsList.forEach((arr)=>{
					it(arr[0], function () {
						assert.equal(inflectors.pluralize(arr[0]),arr[1]);
					});
				});
			});
		});
	});
});

const verbsList = require("./verbs.json");
function testConjugations(entry,expected){
	describe(`verb conjugation, ENTRY: ${entry}`, function () {
		var result = [
			inflectors.conjugate(entry,"VBP"),
			inflectors.conjugate(entry,"VBD"),
			inflectors.conjugate(entry,"VBN"),
			inflectors.conjugate(entry,"VBZ"),
			inflectors.conjugate(entry,"VBG"),
		];
		it(`[0]VBP: ${expected[0]} === ${result[0]}?`, function () {
			assert.equal(expected[0],result[0]);
		});
		it(`[1]VBD: ${expected[1]} === ${result[1]}?`, function () {
			assert.equal(expected[1],result[1]);
		});
		it(`[2]VBN: ${expected[2]} === ${result[2]}?`, function () {
			assert.equal(expected[2],result[2]);
		});
		it(`[3]VBZ: ${expected[3]} === ${result[3]}?`, function () {
			assert.equal(expected[3],result[3]);
		});
		it(`[4]VBG: ${expected[4]} === ${result[4]}?`, function () {
			assert.equal(expected[4],result[4]);
		});
	});
}



for(var entry in verbsList) {
	if(verbsList.hasOwnProperty(entry)) {
		testConjugations(entry,verbsList[entry]);
	}
}