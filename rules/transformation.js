/**
 * 
 * The following pluralization & singularization regexp rules have
 * been extracted from http://code.google.com/p/inflection-js/
 * Then improved considerably and battle tested against wide
 * range of vocabularies
 * 
**/

module.exports.pluralize = [
	[/dix$/,														'dices'], // appendix, spadix, radix
	[/ooch$/,														'$1chs'], // pooch
	[/(m)an$/,														'$1en'], // man, policeman, fireman, 
	[/(pe)rson$/,													'$1ople'], // person
	[/(child)$/,													'$1ren'], // child
	[/^(ox)$/,														'$1en'], // ox
	[/(ax|test)is$/,												'$1es'], // axis
	[/(op|ir|umn|am|ll|ct|oc|ng|le|di|ul|ab|rmin|or|in)us$/,		'$1i'], // fungus, locus, nucleus, radius, 
	[/(alias|status)$/,												'$1es'],
	[/(bu)s$/,														'$1ses'], // Syllabus thrombus
	[/(fal|tat|ch|rg|ott|mat|ped|et|can|er|uit|her|ad)o$/,			'$1oes'], // buffalo, cargo, echo, embargo
	[/([aeiouy]ri|dat|cul|rat|nasi|edi|rand|ov)um$/,				'$1a'], // bacterium, curriculum, datum, erratum,
	[/([aoeuiy]|er)ion$/,											'$1ia'], // bacterium, curriculum, datum, erratum,
	[/(mat|erio|omen|hedr)on$/,										'$1a'],
	[/(is|ps|hes|as|ys|os|ax)is$/,									'$1es'],// analysis, basis, crisis, ellipsis, hypothesis
	[/(?:([^f])fe|([lrf])f)$/,										'$1$2ves'], // calf elf half knife
	[/(hive)$/,														'$1s'],
	[/([^aeiouy]|qu)y$/,											'$1ies'], // ally army baby beauty
	[/([aeiouy]y)$/,												'$1s'], // alley attorney essay boy delay
	[/(matr|vert|ind)(ix|ex)$/,										'$1ices'], // matrix vertex index
	[/([m|l])ouse$/,												'$1ice'], // louse mouse booklouse 
	[/(alg|lumn|tenn|arv|ebul|pup|rteb|vit)a$/,						'$1ae'], // alga, alumna, antenna, larva
	[/(uz|qui|ut)(z)$/,												'$1$2zes'],	// buzz fizz klutz quiz topaz waltz
	[/(opa|alt)(z)$/,												"$1zes"],
	[/^(f|t|g)oo([thse]{1,2})$/,									"$1ee$2"],	// foot tooth
	[/([^aeiouy])eau$/,												"$1eaux"],
	[/([aeiouy])f$/,												'$1ves'], 	// loaf
	[/(x|ch|ss|sh|s)$/,												'$1es'], 	// arch atlas ax bash bench
	[/o$/,															"oes"],
	[/$/,															's'],
];

module.exports.singluraize = [
	[/([^aeiouy]|qu)ies$/,                                           		'$1y'], // babies cities universities victories
	[/(falo|tato|cho|rgo|otto|mato|pedo|eto|cano|ero|uito|hero)es$/,		'$1'], 	// buffaloes, cargoes, echoes, embargoes
	[/(lys|xis|bas|ris|ips|thes|uros|oas|ys|ops)es$/,						'$1is'], // axes , paralyses
	[/(z)zes$/,                                                   			'$1'], // buzzes fizzes quizzes
	[/(alg|lumn|tenn|arv|ebul|pup|rteb|vit)ae$/,							'$1a'], // algae, alumnae, antennae, larvae
	[/(cteri|at|ul|at|asi|di|nd|ov|ri)a$/								,'$1um'], // bacteria, curricula, data, errata,
	[/(vert|ind)ices$/,                                              		'$1ex'], // matrices indices
	[/(()(a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he|(p)ha)ses/,'$1$2sis'], // analyses synopses prognoses
	[/(hive)s$/,                                                     		'$1'], // archive hives chives
	[/(tive)s$/,                                                     		'$1'], // adjectives creatives causatives
	[/(curve)s$/,                                                    		'$1'], // curves
	[/([aeiou]y)s$/,                                           				'$1'], // attorneys
	[/([m|l])ice$/,															'$1ouse'], // louse mouse booklouse 
	[/(m)en$/,																"$1an"],
	[/(s)eries$/,                                                    		'$1eries'],
	[/(m)ovies$/,                                                    		'$1ovie'],
	[/(bus)es$/,                                                     		'$1'],
	[/(shoe)s$/,                                                     		'$1'],
	[/(o)es$/,                                                       		'$1'],
	[/^(cris|ax|test)es$/,                                            		'$1is'],
	[/(octop|vir)i$/,                                                		'$1us'],
	[/(alias|status)es$/,                                            		'$1'],
	[/^(ox)en/,                                                      		'$1'],
	[/(matr)ices$/,                                                  		'$1ix'],
	[/([a-z]{1})ee([a-z]{1,2})$/,											"$1oo$2"],
	[/([^aeiouy][aeiouy][^aeiouy]{1,2}e*)i|i$/,								"$1us"],
	[/([^aeiouy])eaux$/g,													"$1eau"],
	[/([aeiouy]us)es$/,                                                     '$1e'],
	[/([^l][oa]s)es$/,														'$1is'],
	[/([aeiouy]{2})ves$/,													'$1f'], // loaves
	[/([aeiouy])ves$/,														'$1fe'], // lives
	[/(h\w{2})ves$/,														"$1f"],
	[/(el|car|cal|war)ves$/,												'$1f'], // wharves
	[/([xsz])es$/,                                                          '$1'],
	[/(x|ch|sh|ss)es$/,														"$1"], // itches twitches arches
	[/s$/,                                                           	'']
];