const toPlural = [
	// appendix, spadix, radix
	{
		regexp: /dix$/,
		replacement: 'dices'
	},
	// pooch
	{
		regexp: /ooch$/,
		replacement: '$1chs'
	},
	// man, policeman, fireman, 
	{
		regexp: /(m)an$/,
		replacement: '$1en'
	},
	// person
	{
		regexp: /(pe)rson$/,
		replacement: '$1ople'
	},
	// child
	{
		regexp: /(child)$/,
		replacement: '$1ren'
	},
	// ox
	{
		regexp: /^(ox)$/,
		replacement: '$1en'
	},
	// axis
	{
		regexp: /(ax|test)is$/,
		replacement: '$1es'
	},
	// fungus, locus, nucleus, radius, 
	{
		regexp: /(op|ir|umn|am|ll|ct|oc|ng|le|di|ul|ab|rmin|or|in)us$/,
		replacement: '$1i'
	},
	// status
	{
		regexp: /(alias|status)$/,
		replacement: '$1es'
	},
	// Syllabus thrombus
	{
		regexp: /(bu)s$/,
		replacement: '$1ses'
	},
	// buffalo, cargo, echo, embargo
	{
		regexp: /(fal|tat|ch|rg|ott|mat|ped|et|can|er|uit|her|ad)o$/,
		replacement: '$1oes'
	},
	// bacterium, curriculum, datum, erratum,
	{
		regexp: /([aeiouy]ri|dat|cul|rat|nasi|edi|rand|ov)um$/,
		replacement: '$1a'
	},
	// bacterium, curriculum, datum, erratum,
	{
		regexp: /([aoeuiy]|er)ion$/,
		replacement: '$1ia'
	},
	// sherion
	{
		regexp: /(mat|erio|omen|hedr)on$/,
		replacement: '$1a'
	},
	// analysis, basis, crisis, ellipsis, hypothesis
	{
		regexp: /(is|ps|hes|as|ys|os|ax)is$/,
		replacement: '$1es'
	},
	// calf elf half knife
	{
		regexp: /(?:([^f])fe|([lrf])f)$/,
		replacement: '$1$2ves'
	},
	// criterion
	{
		regexp: /(hive)$/,
		replacement: '$1s'
	},
	// ally army baby beauty
	{
		regexp: /([^aeiouy]|qu)y$/,
		replacement: '$1ies'
	},
	// alley attorney essay boy delay
	{
		regexp: /([aeiouy]y)$/,
		replacement: '$1s'
	},
	// matrix vertex index
	{
		regexp: /(matr|vert|ind)(ix|ex)$/,
		replacement: '$1ices'
	},
	// louse mouse booklouse 
	{
		regexp: /([m|l])ouse$/,
		replacement: '$1ice'
	},
	// alga, alumna, antenna, larva
	{
		regexp: /(alg|lumn|tenn|arv|ebul|pup|rteb|vit)a$/,
		replacement: '$1ae'
	},
	// buzz fizz klutz quiz topaz waltz
	{
		regexp: /(uz|qui|ut)(z)$/,
		replacement: '$1$2zes'
	},
	// waltz
	{
		regexp: /(opa|alt)(z)$/,
		replacement: '$1zes'
	},
	// foot tooth
	{
		regexp: /^(f|t|g)oo([thse]{1,2})$/,
		replacement: '$1ee$2'
	},
	// plateau
	{
		regexp: /([^aeiouy])eau$/,
		replacement: '$1eaux'
	},
	// loaf
	{
		regexp: /([aeiouy])f$/,
		replacement: '$1ves'
	},
	// arch atlas ax bash bench
	{
		regexp: /(x|ch|ss|sh|s)$/,
		replacement: '$1es'
	},
	{
		regexp: /o$/,
		replacement: 'oes'
	},
	{
		regexp: /$/,
		replacement: 's'
	},
];

const toSingular = [
	// babies cities universities victories
	{
		regexp: /([^aeiouy]|qu)ies$/,
		replacement: '$1y'
	},
	// buffaloes, cargoes, echoes, embargoes
	{
		regexp: /(falo|tato|cho|rgo|otto|mato|pedo|eto|cano|ero|uito|hero)es$/,
		replacement: '$1'
	},
	// axes , paralyses
	{
		regexp: /(lys|xis|bas|ris|ips|thes|uros|oas|ys|ops)es$/,
		replacement: '$1is'
	},
	// buzzes fizzes quizzes
	{
		regexp: /(z)zes$/,
		replacement: '$1'
	},
	// algae, alumnae, antennae, larvae
	{
		regexp: /(alg|lumn|tenn|arv|ebul|pup|rteb|vit)ae$/,
		replacement: '$1a'
	},
	// bacteria, curricula, data, errata,
	{
		regexp: /(cteri|at|ul|at|asi|di|nd|ov|ri)a$/,
		replacement: '$1um'
	},
	// matrices indices
	{
		regexp: /(vert|ind)ices$/,
		replacement: '$1ex'
	},
	// analyses synopses prognoses
	{
		regexp: /(()(a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he|(p)ha)ses/,
		replacement: '$1$2sis'
	},
	// archive hives chives
	{
		regexp: /(hive)s$/,
		replacement: '$1'
	},
	// adjectives creatives causatives
	{
		regexp: /(tive)s$/,
		replacement: '$1'
	},
	// curves
	{
		regexp: /(curve)s$/,
		replacement: '$1'
	},
	// attorneys
	{
		regexp: /([aeiou]y)s$/,
		replacement: '$1'
	},
	// louse mouse booklouse 
	{
		regexp: /([m|l])ice$/,
		replacement: '$1ouse'
	},
	// man
	{
		regexp: /(m)en$/,
		replacement: '$1an'
	},
	// series
	{
		regexp: /(s)eries$/,
		replacement: '$1eries'
	},
	// movies
	{
		regexp: /(m)ovies$/,
		replacement: '$1ovie'
	},
	// buses
	{
		regexp: /(bus)es$/,
		replacement: '$1'
	},
	// shoes
	{
		regexp: /(shoe)s$/,
		replacement: '$1'
	},
	//
	{
		regexp: /(o)es$/,
		replacement: '$1'
	},
	// crisis
	{
		regexp: /^(cris|ax|test)es$/,
		replacement: '$1is'
	},
	// octopi
	{
		regexp: /(octop|vir)i$/,
		replacement: '$1us'
	},
	// aliases
	{
		regexp: /(alias|status)es$/,
		replacement: '$1'
	},
	// oxen
	{
		regexp: /^(ox)en$/,
		replacement: '$1'
	},
	// matrices
	{
		regexp: /(matr)ices$/,
		replacement: '$1ix'
	},
	// feet
	{
		regexp: /([a-z]{1})ee([a-z]{1,2})$/,
		replacement: '$1oo$2'
	},
	// fungi
	{
		regexp: /([^aeiouy][aeiouy][^aeiouy]{1,2}e*)i|i$/,
		replacement: '$1us'
	},
	// plateaux
	{
		regexp: /([^aeiouy])eaux$/g,
		replacement: '$1eau'
	},
	//
	{
		regexp: /([aeiouy]us)es$/,
		replacement: '$1e'
	},
	//
	{
		regexp: /([^l][oa]s)es$/,
		replacement: '$1is'
	},
	// loaves
	{
		regexp: /([aeiouy]{2})ves$/,
		replacement: '$1f'
	},
	// lives
	{
		regexp: /([aeiouy])ves$/,
		replacement: '$1fe'
	},
	//
	{
		regexp: /(h\w{2})ves$/,
		replacement: '$1f'
	},
	// wharves
	{
		regexp: /(el|car|cal|war)ves$/,
		replacement: '$1f'
	},
	//
	{
		regexp: /([xsz])es$/,
		replacement: '$1'
	},
	// itches twitches arches
	{
		regexp: /(x|ch|sh|ss)es$/,
		replacement: '$1'
	},
	{
		regexp: /s$/,
		replacement: ''
	}
];

export { toPlural, toSingular };