import * as verbsList from "./verb/solve_lookup";
declare class Inflector {
    word: string;
    constructor(word: string);
    comparative: () => string;
    superlative: () => string;
    conjugate: (to: string) => string;
    toPresnet: () => string;
    toPast: () => string;
    toPastParticiple: () => string;
    toPrenseS: () => string;
    toGerund: () => string;
    toPlural: () => string;
    toSingular: () => string;
    isSingular: () => Boolean;
    isPlural: () => Boolean;
    isCountable: () => Boolean;
    isNotCountable: () => Boolean;
    infinitives: verbsList.conjugationObject;
    nonCountables: string[];
}
export default Inflector;
