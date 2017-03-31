# English Inflectors Library
For noun (plural to singular and singular to plural) and verb (gerund, present & past) transformations.


## Installation

```
npm install en-inflectors --save
```


## Usage

*  **Import the library**
```javascript
// javascript
const inflectors = require("en-inflectors");
const Inflectors = inflectors .Inflectors
```
```typescript
// typescript
import inflectors = require("en-inflectors");
const Inflectors = inflectors .Inflectors
```

* **Instantiate the class**
```javascript
let instance = new Inflectors("book");
``` 

* **Adjective Inflection**
```javascript
let instance = new Inflectors("big");
instance.comparative(); // bigger
instance.superlative(); // biggest
``` 

* **Verb Conjugation**
```javascript
new Inflectors("rallied").conjugate("VBP"); // rally
new Inflectors("fly").conjugate("VBD"); // flew
new Inflectors("throw").conjugate("VBN"); // thrown
new Inflectors("rally").conjugate("VBS"); // rallies
new Inflectors("die").conjugate("VBP"); // dying

// or you can use the aliases
new Inflectors("rallied").toPresent(); // rally
new Inflectors("fly").toPast(); // flew
new Inflectors("throw").toPastParticiple(); // thrown
new Inflectors("rally").toPresentS(); // rallies
new Inflectors("die").toGerund(); // dying
``` 

* **Noun Inflection**
```javascript
const instanceA = new Inflectors("matrix");
const instanceB = new Inflectors("ellipses");
const instanceC = new Inflectors("money");

instanceA.isCountable(); // true
instanceB.isCountable(); // true
instanceC.isCountable(); // false

instanceA.isNotCountable(); // false
instanceB.isNotCountable(); // false
instanceC.isNotCountable(); // true

instanceA.isSingular(); // true
instanceB.isSingular(); // false
instanceC.isSingular(); // true

instanceA.isPlural(); // false
instanceB.isPlural(); // true
instanceC.isPlural(); // true

// note that uncountable words return true
// on both plural and singular checks


instanceA.toSingular(); // bus (no change)
instanceB.toSingular(); // ellipsis
instanceC.toSingular(); // money (no change)


instanceA.toPlural(); // buses
instanceB.toPlural(); // ellipses (no change)
instanceC.toPlural(); // money (no change)

```

## How does it work

* **Adjective inflection**
	1. Checks against a dictionary of known irregularities (e.g. little/less/least)
	2. Applies inflection based on:
		* Number of syllables
		* word ending

* **Noun inflection**
	1. Dictionary lookup (known irregularities e.g. octopus/octopi & uncountable words)
	2. Identifies whether the word is plural or singular based on:
		* Dictionary
		* Machine learned regular expressions 
	3. Applies transformation based on ending and word pattern (vowels, consonants and word endings)

* **Verb conjugation**
	1. Dictionary lookup (known irregularities + 4000 common verbs)
	2. If the passed verb is identified as infinitive then applies regular expression transformations that are based on word endings, vowels and consonant phonetics.
	3. Tries to trim character from the beginning of the verb, thus solving prefixes (e.g. undergoes, overthrown)
	4. Tries to stem the word and get the infinitive form, then apply regular expression transformations.
	5. Applies regular expressions.


## How accurate is it?

First of all, unless you have a dictionary of all the words and verbs there are in the English you can't really write a regular expression or an algorithm and expect to have a 100% success rate. English has been adopting words form a lot of different languages (French, Greek and Latin for example) and each one these languages has it's own rules of pluralization and singularization let alone verb conjugation.

Even with dictionaries you'll have the problem of complex and made up words like `maskedlocation`, and you might have to add dictionaries for specialties (like medicine which does actually have it's own dictionary). 

However, I think what you'll find in this library is what can be achieved with the least amount of compromise.

I've used a set of rules (for detection/transformation) in combination with an exceptions list.

However, testing the library was more challenging than what I was anticipating. If you have any case inaccuracy or false positives **please** submit an issue.

And of course, You can clone this repository, install `mocha` and test it for yourself, and you'll see how it passes the **9900** tests successfully.


## License

License: The MIT License (MIT) - Copyright (c) 2017 Alex Corvi