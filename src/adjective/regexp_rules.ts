const syllablesNum = (str:string) => str.split(/[^aeiouy]*[aeiouy]+[^aeiouy]*/).length;

export default [

	// delicious => more delicious
	{
		test: 	(str:string) => syllablesNum(str) > 3,
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
		test: 	(str:string) => /[^aeiouy][aeiouy][^aeiouy]$/.test(str),
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
		comp: 	(str:string) => str.replace(/y$/,"er"),
		supr: 	(str:string) => str.replace(/y$/,"est"),
	},

	// all other cases
	{
		test: 	(str:string) => true,
		comp: 	(str:string) => str + "er",
		supr: 	(str:string) => str + "est",
	}
];