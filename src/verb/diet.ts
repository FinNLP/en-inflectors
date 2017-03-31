/// <reference path="../../node_modules/@types/node/index.d.ts" />

import {writeFileSync} from "fs"

import {all} from "./solve_lookup";
import {solve} from "./solve_regex";

const bases = all.map(x=>x[0]);

var correct:string[] = [];
var wrong:string[][] = [];

bases.forEach((base,index)=>{
    if(
        solve(base,"VBD") === all[index][1] &&
        solve(base,"VBN") === all[index][2] &&
        solve(base,"VBZ") === all[index][3] &&
        solve(base,"VBG") === all[index][4]
    ) {
        correct.push(base);
    }
    else wrong.push(all[index]);
});

writeFileSync("./correct.json",JSON.stringify(correct));
writeFileSync("./wrong.json",JSON.stringify(wrong,null,4));

console.log(correct.length,wrong.length);
