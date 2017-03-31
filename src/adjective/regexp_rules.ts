const syllablesNum = (str:string) => str.split(/[aiouy]+e*|e(?!d$|ly).|[td]ed|le$/).length;

export default [

	// delicious => more delicious
	{
		test: 	(str:string) => syllablesNum(str) > 3 && !(syllablesNum(str)<5 && /y$/.test(str)),
		comp: 	(str:string) => "more " + str,
		supr: 	(str:string) => "most " + str
	},

	// boring => more boring
	{
		test: 	(str:string) => syllablesNum(str) > 2 && /ing$/.test(str),
		comp: 	(str:string) => "more " + str,
		supr: 	(str:string) => "most " + str
	},

	// crowded => more crowded
	{
		test: 	(str:string) => syllablesNum(str) > 2 && /ed$/.test(str),
		comp: 	(str:string) => "more " + str,
		supr: 	(str:string) => "most " + str
	},

	// big => bigger
	{
		test: 	(str:string) => /[^aeiouy][aeiouy][^rwaeiouy]$/.test(str),
		comp: 	(str:string) => str.replace(/([^aeiouy])$/,"$1$1er"),
		supr: 	(str:string) => str.replace(/([^aeiouy])$/,"$1$1est"),
	},

	// heavy => heavier
	{
		test: 	(str:string) => /y$/.test(str),
		comp: 	(str:string) => str.replace(/y$/,"ier"),
		supr: 	(str:string) => str.replace(/y$/,"iest"),
	},

	// handsome => handsomer
	{
		test: 	(str:string) => /e$/.test(str),
		comp: 	(str:string) => str.replace(/e$/,"er"),
		supr: 	(str:string) => str.replace(/e$/,"est"),
	},

	// all other cases
	{
		test: 	(str:string) => true,
		comp: 	(str:string) => str + "er",
		supr: 	(str:string) => str + "est",
	}
];