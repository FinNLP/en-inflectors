import * as detector from "./detect_singular_plural";
import * as excpetions from "./list_exceptions";
import * as transformationPatterns from "./regexps_transformation";

export const toPlural = function(input:string):string{
	if(detector.isPlural(input)) return input;
	else if(excpetions.singular2plural[input]) return excpetions.singular2plural[input][0];
	for (let i = 0; i < transformationPatterns.toPlural.length; i++) {
		var pattern = transformationPatterns.toPlural[i];
		if(pattern.regexp.test(input)) return input.replace(pattern.regexp,pattern.replacement);
	}
	return input;
}

export const toSingular = function(input:string):string{
	if(detector.isSingular(input)) return input;
	else if(excpetions.plural2singular[input]) return excpetions.plural2singular[input][0];
	for (let i = 0; i < transformationPatterns.toSingular.length; i++) {
		var pattern = transformationPatterns.toSingular[i];
		if(pattern.regexp.test(input)) return input.replace(pattern.regexp,pattern.replacement);
	}
	return input;
}