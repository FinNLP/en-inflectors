import * as list from "./solve_lookup";
import * as regex from "./solve_regex";
import * as trySimilar from "./try_similar";
import tryPresnt from "./try_present";


const index = ["VBP","VBD","VBN","VBZ","VBG"];


const conjugate = function(input:string,to:string="VBP"):string{

	// direct dictionary lookup
	let lookup = list.lookup(input);
	let toIndex = index.indexOf(to);
	if(lookup[toIndex]) return lookup[toIndex];

	// passed VBP => regex solution
	else if(list.VBP[input]) return regex.solve(input,to);

	// try to strip the verb
	// "foreseeing" => "seeing"
	let stripped = trySimilar.strip(input);
	if(stripped) {
		// the stripping result is in the dictionary (doesn't have to be VBP)
		let lookupStripped = list.lookup(stripped)[toIndex];
		if(lookupStripped) return trySimilar.rebuild(input,stripped,lookupStripped);
		// the stripped verb is in VBP form (we can apply regexes)
		else if(list.VBP[stripped]) return trySimilar.rebuild(input,stripped,regex.solve(input,to));
		// Note: we don't need to try to convert to VBP
		// since this step takes characters from the beginning
		// so it's best to convert the original (not the stripped)
		// to present
	}

	// try to convert it to VBP form
	let stem = tryPresnt(input);
	if(stem) return list.lookup(stem)[toIndex] || regex.solve(stem,to);

	// final shot (will give wrong results if passed a verb that is not a VBP)
	return regex.solve(input,to);
}

const toPresent = (input:string):string=>conjugate(input,"VBP");
const toPast = (input:string):string=>conjugate(input,"VBD");
const toPastParticiple = (input:string):string=>conjugate(input,"VBN");
const toPresentS = (input:string):string=>conjugate(input,"VBZ");
const toGerund = (input:string):string=>conjugate(input,"VBG");


export {conjugate,toPresent,toPast,toPastParticiple,toPresentS,toGerund};