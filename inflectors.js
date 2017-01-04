const rules = require("./rules/transformation.js");
const detect = require("./rules/detection.js");
const pluralExceptions = require("./lists/plurals_exceptions.js");
const uncountableWords = require("./lists/uncountable_words.js");
const verbs = require("./lists/verbs.js");
const verbsTable = verbs.filter((x)=>Array.isArray(x));
const infinitives = verbs.map((x)=>{
	if(Array.isArray(x)) return x[0];
	else return x;
});
const conjugate = require("./conjugation_methods.js");
const porterStemmer = require("en-stemmer");


// This is a helper method that applies rules based replacement to a String.
// Signature: apply(str, rules, override) == String
function apply(str, rules, override) {
	rules.every((rule)=>{
		if(rule[0].test(str)) {
			str = str.replace(rule[0], rule[1]);
			return false;
		}
		else return true;
	});
	return str;
}

function findTheException(str,type){
	if(type === "s") return pluralExceptions[str] ? pluralExceptions[str][0] : undefined;
	else for(var singular in pluralExceptions) {
		if(~pluralExceptions[singular].indexOf(str)) return singular;
	}
}


const inflectors = {

	/**
	 * Returns true when the input is singular
	 * @param  {String} str input
	 * @return {Boolean}     result
	**/
	isSingular:function(str){
		str = (str||"").split(/\W/)[0].toLowerCase().trim();
		// uncountable?
		if(inflectors.isUncountable(str)) return false;
		// Has an exception?
		if(findTheException(str,"s")) return true;
		if(findTheException(str,"p")) return false;
		// detect against the RegExp detection rules
		if(detect.singular.find((rule)=>rule.test(str))) return true;
		if(detect.plural.find((rule)=>rule.test(str))) return false;
		return true;
	},


	/**
	 * Returns true when the input is plural
	 * @param  {String} str input
	 * @return {Boolean}     result
	**/
	isPlural:function(str,strict){
		str = (str||"").split(/\W/)[0].toLowerCase().trim();
		// uncountable?
		if(inflectors.isUncountable(str)) return false;
		return !inflectors.isSingular(str);
	},


	/**
	 * Returns true when the input is uncountable
	 * @param  {String} str input
	 * @return {Boolean}     result
	**/
	isUncountable:(str) => uncountableWords.indexOf(str) > -1,
	isCountable:(str) => uncountableWords.indexOf(str) === -1,

	/**
	 * Singularize the input
	 * @param  {String} str
	 * @return {String}
	**/
	singularize:function(str){
		if(inflectors.isSingular(str)) return str;
		var exception = findTheException(str,"p");
		if(exception) return exception;
		else return apply(str, rules.singluraize);
	},


	/**
	 * 
	 * Pluralize the input
	 * @param  {String} str
	 * @return {String}
	 * 
	**/
	pluralize: function(str){
		if(inflectors.isPlural(str)) return str;
		var exception = findTheException(str,"s");
		if(exception) return exception;
		else return apply(str, rules.pluralize);
	},


	/**
	 * 
	 * Conjugates a verb to a different tense
	 * @param  {String} vb the verb to conjugate
	 * @param  {String} to the target tense (can be: VBZ, VBG, VBD, VBP, or VBN)
	 * @return {String}    result of conjugation
	 * 
	**/

	conjugate: function(vb,to) {
		to = (to||"VBP").toUpperCase();
		vb = (vb||"").toLowerCase();

		var tableResult = solveFromTable(vb,to);
		if(tableResult) return tableResult;
		
		if(isListedInfinitive(vb)) return solveFromRegexes(vb,to);

		// from this point on .. try your best to convert the verb
		// it it's infinitive form
		var stripped = stripVerb(vb);
		if(stripped !== vb) return mergeVerb(vb,stripped,solveFromTable(stripped,to)||solveFromRegexes(stripped,to));

		vb = isListedInfinitive(stemmer(vb)) ? stemmer(vb) : vb;
		return solveFromTable(vb,to) || solveFromRegexes(vb,to);
	},


	// The following functions are just wrappers around the above function
	past:(vb)=> inflectors.conjugate(vb, "VBD"),
	pastParticiple:(vb)=> inflectors.conjugate(vb, "VBN"),
	presentS:(vb)=> inflectors.conjugate(vb, "VBZ"),
	present:(vb)=> inflectors.conjugate(vb, "VBP"),
	infinitive:(vb) => inflectors.present(vb), // ^ alias
	gerund:(vb)=> inflectors.conjugate(vb, "VBG"),

	uncountableWords,
	verbs,
	verbsTable,
	infinitives
};




/**
 * 
 * Solve verbs using the dictionary
 * @param  {String} vb verb
 * @param  {String} to transformation direction
 * @return {String}    result
 * 
**/
function solveFromTable(vb,to){
	var tbIndx = ["VBP","VBD","VBN","VBZ","VBG"];
	var tableResult = verbsTable.find((arr)=>~arr.indexOf(vb)) || [];
	return ~tbIndx.indexOf(to) ? tableResult[tbIndx.indexOf(to)] : !!tableResult.length;
}



/**
 * Conjugate VBP to other tenses using
 * regular expressions
 * @param  {String} VBP the verb in present/infinitive tense
 * @param  {String} to  the transformation direction
 * @return {String}     transformation result
 * lampoon
**/
function solveFromRegexes(VBP,to){
	if(to === "VBP") return VBP;
	if (/[^aeiou]y$/gi.test(VBP)) return conjugate.consonantY(VBP, to);
	if (/[^aeiouy]e$/gi.test(VBP)) return conjugate.consonentE(VBP, to);
	if (/([^taeiuo][aeiuo][ptlgnm]|ir|cur|[^aeiuo][oua][db])$/gi.test(VBP)) return conjugate.shortVowelConsonant(VBP, to);
	if (/([ieao]ss|[aeiouy]zz|[aeiouy]ch|nch|rch|[aeiouy]sh|[iae]tch|ax)$/gi.test(VBP)) return conjugate.sibilant(VBP, to);
	if (/(ee)$/gi.test(VBP)) return conjugate.ee(VBP, to);
	if (/(ie)$/gi.test(VBP)) return conjugate.ie(VBP, to);
	if (/(ue)$/gi.test(VBP)) return conjugate.ue(VBP, to);
	if (/([uao]m[pb]|[oa]wn|ey|elp|[ei]gn|ilm|o[uo]r|[oa]ugh|igh|ki|ff|oubt|ount|awl|o[alo]d|[iu]rl|upt|[oa]y|ight|oid|empt|act|aud|e[ea]d|ound|[aeiou][srcln]t|ept|dd|[eia]n[dk]|[ioa][xk]|[oa]rm|[ue]rn|[ao]ng|uin|eam|ai[mr]|[oea]w|[eaoui][rscl]k|[oa]r[nd]|ear|er|it|ll)$/gi.test(VBP)) return conjugate.longVowelConsonant(VBP,to);
	return conjugate.regular(VBP, to);
}




/**
 * Returns true if the passed verb is in the
 * infintive verbs list
 * @param  {String}  v Verb
 * @return {Boolean}  true if it exists, false if it doesn't
**/
function isListedInfinitive(v){
	return !!~infinitives.indexOf(v);
}


/**
 * Used to strip complex verbs to simpler ones
 * For example: underwent => went
 * @param  {String} vb the verb
 * @param  {String} o  the original verb (for recursion purposes)
 * @return {String}    Stripped verb || Original verb (if it can't be stripped)
**/
function stripVerb(vb,o){
	if(!o) o = vb;
	if(vb.length < 2) return o;
	vb = vb.substr(1);
	if(isListedInfinitive(vb) || solveFromTable(vb)) return vb;
	else return stripVerb(vb,o);
}

/**
 * Merge verb with the original verb so it
 * can be returned to the user
 * @param  {String} o original version of the verb
 * @param  {String} s stripped version of the verb
 * @param  {String} m modified version of the verb
 * @return {String}  the merger result
**/
function mergeVerb(o,s,m) {
	o = o.substr(0,o.indexOf(s)+s.length);
	o = o.split(s).join(m);
	return o;
}

/**
 * Applies few rules to remove ing / s / ed
 * is possible, if not then apply porter stemmer
 * @param  {String} vb verb
 * @return {String}    result
 */
function stemmer(vb){
	var possibilities;
	if(vb.endsWith("ing")) {
		possibilities = [
			vb.replace(/ing$/,""),
			vb.replace(/ing$/,"e"),
			vb.replace(/.ing$/,""),
			vb.replace(/ying$/,"ie"),
		].filter((possibility)=>isListedInfinitive(possibility));
		if(possibilities[0]) return possibilities[0];
	}
	else if(vb.endsWith("s")){
		possibilities = [
			vb.replace(/s$/,""),
			vb.replace(/es$/,""),
			vb.replace(/ies$/,"y"),
		].filter((possibility)=>isListedInfinitive(possibility));
		if(possibilities[0]) return possibilities[0];
	}
	else if(vb.endsWith("ed")) {
		possibilities = [
			vb.replace(/ed$/,""),
			vb.replace(/d$/,""),
			vb.replace(/ied$/,"y"),
			vb.replace(/ed$/,"y"),
			vb.replace(/ed$/,"e"),
			vb.replace(/.ed$/,""),
		].filter((possibility)=>isListedInfinitive(possibility));
		if(possibilities[0]) return possibilities[0];
	}
	return porterStemmer(vb);
}

module.exports = inflectors;