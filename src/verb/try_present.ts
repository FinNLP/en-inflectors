import porter = require("en-stemmer");
import * as list from "./solve_lookup";

export default function (verb:string):string{
	// Gerunds
	if(end(verb,"ing")) {
		let a = list.VBP[verb.replace(/ing$/,"")];
		if(a) return a[0];
		let b = list.VBP[verb.replace(/ing$/,"e")];
		if(b) return b[0];
		let c = list.VBP[verb.replace(/.ing$/,"")];
		if(c) return c[0];
		let d = list.VBP[verb.replace(/ying$/,"ie")];
		if(d) return d[0];
	}
	// VBZs
	else if(end(verb,"s")){
		let a = list.VBP[verb.replace(/s$/,"")];
		if(a) return a[0];
		let b = list.VBP[verb.replace(/es$/,"")];
		if(b) return b[0];
		let c = list.VBP[verb.replace(/ies$/,"y")];
		if(c) return c[0];
	}
	// VBNs & VBDs
	else if(end(verb,"ed")) {
		let a = list.VBP[verb.replace(/ed$/,"")];
		if(a) return a[0];
		let b = list.VBP[verb.replace(/d$/,"")];
		if(b) return b[0];
		let c = list.VBP[verb.replace(/ied$/,"y")];
		if(c) return c[0];
		let d = list.VBP[verb.replace(/ed$/,"y")];
		if(d) return d[0];
		let e = list.VBP[verb.replace(/ed$/,"e")];
		if(e) return e[0];
		let f = list.VBP[verb.replace(/.ed$/,"")];
		if(f) return f[0];
	}
	// finally defaults to porter stemmer
	return (list.VBP[porter(verb)]||[""])[0];
}

function end(str:string,substring:string):Boolean {
    return str.substr(-substring.length) === substring;
}