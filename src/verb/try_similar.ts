import * as list from "./solve_lookup";


/**
 *
 * Those two functions are used to strip down a verb to it's nearest
 * possible parent. for example the verb "foresee" will be stripped
 * to "see", so the transformation function can use the list data
 * to conjugate it, then it passes it to the rebuild function
 * to rebuild it.
 * 
**/

function strip(verb: string): string {
	if (verb.length < 2) return "";
	verb = verb.substring(1);
	if (list.lookup(verb).length) return verb;
	else return strip(verb);
}

function rebuild(original: string, stripped: string, conjugated: string): string {
	let rebuilt = original.substr(0, original.indexOf(stripped) + stripped.length);
	rebuilt = original.split(stripped).join(conjugated);
	return rebuilt;
}

export { strip, rebuild }