import * as adjective from "./adjective/transform";
import * as verb from "./verb/transform";
import * as noun from "./noun/transform";
import * as noundDetection from "./noun/detect_singular_plural";
import * as countableDetection from "./noun/detect_countable";
import * as verbsList from "./verb/solve_lookup";
import nonCountables from "./noun/list_uncountable";

class Inflectors {
	
	word: string;

	constructor(word: string) {
		this.word = (word||"").toLowerCase();
	}

	public comparative = ():string => adjective.comparative(this.word);
	public superlative = ():string => adjective.superlative(this.word);

	public conjugate = (to:string):string => verb.conjugate(this.word,to);	
	public toPresent = ():string => verb.toPresent(this.word);
	public toPast = ():string => verb.toPast(this.word);
	public toPastParticiple = ():string => verb.toPastParticiple(this.word);
	public toPresentS = ():string => verb.toPresentS(this.word);
	public toGerund = ():string => verb.toGerund(this.word);

	public toPlural = ():string => noun.toPlural(this.word);
	public toSingular = ():string => noun.toSingular(this.word);
	public isSingular = ():Boolean => noundDetection.isSingular(this.word);
	public isPlural = ():Boolean => noundDetection.isPlural(this.word);
	public isCountable = ():Boolean => countableDetection.isCountable(this.word);
	public isNotCountable = ():Boolean => countableDetection.isNotCountable(this.word);
}

const infinitives = verbsList.VBP;
export {Inflectors, infinitives, nonCountables};