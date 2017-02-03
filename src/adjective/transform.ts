import rules from "./regexp_rules";
import {irregulars as irregulars} from "./list_irregulars";


/**
 * 
 * Transforming JJ => JJR
 * based on a small list of exceptions + regexps rules
 * 
**/

export const comparative = function(input:string):string {
	if(irregulars[input]) return irregulars[input][0];
	for (var i = 0; i < rules.length; i++) {
		if(!rules[i].test(input)) continue;
		else return rules[i].comp(input);
	}
}


/**
 * 
 * Transforming JJ => JJS
 * based on a small list of exceptions + regexps rules
 * 
**/

export const superlative = function(input:string):string {
	if(irregulars[input]) return irregulars[input][1];
	for (var i = 0; i < rules.length; i++) {
		if(!rules[i].test(input)) continue;
		else return rules[i].supr(input);
	}
}