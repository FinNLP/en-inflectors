import nonCountables from "./list_uncountable";

function isCountable(input:string):Boolean{
	return !~nonCountables.indexOf(input);	
}

function isNotCountable(input:string):Boolean{
	return !isCountable(input);
}

export {isCountable,isNotCountable};