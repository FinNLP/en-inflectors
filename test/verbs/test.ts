const Inflector = require("../../dist/index.js").Inflectors;
const assert = require("assert");
const verbsList = require("./verbs.json");
function testConjugations(entry,expected){
	describe(`verb conjugation, ENTRY: ${entry}`, function () {
		var result = [
			new Inflector(entry).conjugate("VBP"),
			new Inflector(entry).conjugate("VBD"),
			new Inflector(entry).conjugate("VBN"),
			new Inflector(entry).conjugate("VBZ"),
			new Inflector(entry).conjugate("VBG"),
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