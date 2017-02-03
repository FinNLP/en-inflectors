export interface conjugationObject {
    [key: string]: Array<string>;
}
declare const VBP: conjugationObject;
declare const VBD: conjugationObject;
declare const VBN: conjugationObject;
declare const VBZ: conjugationObject;
declare const VBG: conjugationObject;
declare const lookup: (input: string) => string[];
export { VBP, VBD, VBN, VBZ, VBG, lookup };
