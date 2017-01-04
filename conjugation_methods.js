/**
 *
 * Conjugation Methods
 * 
**/

module.exports.longVowelConsonant = function  (vb, to) {
	if (to === "VBZ") return vb + 's';
	if (to === "VBG") return vb + 'ing';
	if (to === "VBN" || to === "VBD") return vb + 'ed';
	return vb;
};

module.exports.shortVowelConsonant = function  (vb, to) {
	if (to === "VBZ") return vb + 's';
	if (to === "VBG") return vb + vb[vb.length - 1] + 'ing';
	if (to === "VBN" || to === "VBD") return vb + vb[vb.length - 1] + 'ed';
	return vb;
};

module.exports.consonentE = function (vb, to) {
	var base = vb.substr(0, vb.length - 1);
	if (to === "VBZ") return vb + 's';
	if (to === "VBG") return base + 'ing';
	if (to === "VBN" || to === "VBD") return base + 'ed';
	return vb;
};

module.exports.consonantY = function (vb, to) {
	var base = vb.substr(0, vb.length - 1);
	if (to === "VBZ") return base + 'ies';
	if (to === "VBG") return vb + 'ing';
	if (to === "VBN" || to === "VBD") return base + 'ied';
	return vb;
};

module.exports.ee = function (vb, to) {
	if (to === "VBZ") return vb + 's';
	if (to === "VBG") return vb + 'ing';
	if (to === "VBN" || to === "VBD") return vb + 'd';
	return vb;
};

module.exports.ue = function (vb, to) {
	if (to === "VBZ") return vb + 's';
	if (to === "VBG") return vb.substr(0, vb.length - 1) + 'ing';
	if (to === "VBN" || to === "VBD") return vb + 'd';
	return vb;
};

module.exports.ie = function (vb, to) {
	if (to === "VBZ") return vb + 's';
	if (to === "VBG") return vb.substr(0, vb.length - 2) + 'ying';
	if (to === "VBN" || to === "VBD") return vb + 'd';
	return vb;
};

module.exports.sibilant = function (vb, to) {
	if (to === "VBZ") return vb + 'es';
	if (to === "VBG") return vb + 'ing';
	if (to === "VBN" || to === "VBD") return vb + 'ed';
	return vb;
};

module.exports.regular = function (vb, to) {
	if (to === "VBZ") return vb + 's';
	if (to === "VBG") return vb + 'ing';
	if (to === "VBN" || to === "VBD") return vb + 'ed';
	return vb;
};