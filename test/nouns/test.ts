const Inflector = require("../../dist/index.js").Inflectors;
const assert = require("assert");

describe('NOUNS', function () {

	const singulars = require("./singulars.json");
	describe('test against huge list of common singulars', function () {
		singulars.forEach((item)=>{
			it('test item: '+item+' is not plural', function () {
				assert.equal(new Inflector(item).isPlural(),false);
			});
			it('test item: '+item+' is singular', function () {
				assert.equal(new Inflector(item).isSingular(),true);
			});
		});
	});


	const plurals = require("./plurals.json");
	describe('test against huge list of common plurals', function () {
		plurals.forEach((item)=>{
			it('test item: '+item+' is plural', function () {
				assert.equal(new Inflector(item).isPlural(),true);
			});
			it('test item: '+item+' is not singular', function () {
				assert.equal(new Inflector(item).isSingular(),false);
			});
		});
	});


	describe('test against comparative list of singulars and plurals', function () {
		const singularsAndPluralsList = require("./singulars_plurals.json");
		describe('booleans', function () {
			
			describe('isSingular', function () {
				singularsAndPluralsList.forEach((arr)=>{
					it('isSingular: '+arr[0], function () {
						assert.equal(new Inflector(arr[0]).isSingular(),true);
					});
				});
			});

			describe('isSingular', function () {
				singularsAndPluralsList.forEach((arr)=>{
					it('isSingular: '+arr[1], function () {
						assert.equal(new Inflector(arr[1]).isSingular(),false);
					});
				});
			});

			describe('isPlural', function () {
				singularsAndPluralsList.forEach((arr)=>{
					it('isPlural: '+arr[1], function () {
						assert.equal(new Inflector(arr[1]).isPlural(),true);
					});
				});
			});
			
			describe('isPlural', function () {
				singularsAndPluralsList.forEach((arr)=>{
					it('isPlural: '+arr[0], function () {
						assert.equal(new Inflector(arr[0]).isPlural(),false);
					});
				});
			});
		});

		describe('transformations', function () {
			describe('plural to singular', function () {
				singularsAndPluralsList.forEach((arr)=>{
					it(arr[1], function () {
						assert.equal(new Inflector(arr[1]).toSingular(),arr[0]);
					});
				});
			});
			describe('singular to plural', function () {
				singularsAndPluralsList.forEach((arr)=>{
					it(arr[0], function () {
						assert.equal(new Inflector(arr[1]).toPlural(),arr[1]);
					});
				});
			});
		});
	});
});