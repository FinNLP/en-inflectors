# English Inflectors Library
For noun (plural to singular and singular to plural) and verb (gerund, present & past) transformations.

## Installation and Usage

```
npm install en-inflectors --save
```

## Plural and singular detection

```
const inflectors = require("en-inflectors");
inflectors.isSingular("nuclei");
// > false
inflectors.isPlural("plateaux");
// > true
inflectors.isCountable("steam");
// > false
```

**How it works**:
- Search for the given word in the uncountable words.
- Search for the given word against a dictionary of known and common exceptions.
- Detect the given word against a set of RegExp rules.

> Note: All uncountable words like **sheep**, **deer**, **tuna** and **steam** will return `true` for both plural and singular detection.

## Plural to singular transformation

```
const inflectors = require("en-inflectors");
inflectors.pluralize("mouse");
// > mice
inflectors.pluralize("goose");
// > geese
inflectors.pluralize("river");
// > rivers
```

## Singular to plural transformation
```
const inflectors = require("en-inflectors");
inflectors.pluralize("location");
// > locations
inflectors.pluralize("hoax");
// > hoaxes
inflectors.pluralize("wharf");
// > wharves
```

**How it works**:
- Search for the given word in the uncountable words.
- Search for the given word against a dictionary of known and common exceptions.
- Apply singularization/pluralization rules.


## Verb conjugation

```
const inflectors = require("en-inflectors");
inflectors.conjugate("playing","VBP");
// > play
inflectors.conjugate("playing","VBZ");
// plays
inflectors.conjugate("transcribes","VBP");
// transcribed
inflectors.conjugate("goes","VBN");
// gone
inflectors.conjugate("went","VBG");
// going
```

where:

- VBP: is the present/infinitive form.
- VBZ: is the present with the third person "s".
- VBP: is the past form.
- VBD: is the past participle form.
- VBG: is the gerund form.

Or you can use the aliases:

```
const inflectors = require("en-inflectors");
inflectors.present("playing");
// > play
inflectors.presentS("playing");
// plays
inflectors.past("transcribes");
// transcribed
inflectors.pastParticiple("goes");
// gone
inflectors.gerund("went");
// going
```


> Note: for better, more accurate results, pass the verb in it's infinitive form (`go` instead of `goes`). although this library has been written to be agnostic about the form of the inputs, but the test results has proven that it's quite hard to achieve that with full accuracy.


## Additional functionalities

```javascript
const inflectors = require("en-inflectors");

inflectors.uncountableWords;
// list all the uncountable words as an array
inflectors.verbsTable;
// verb table with all the tenses can be used for writing your own functionalities
inflectors.infinitives;
// an array of the most common English verbs
```

## License

License: The MIT License (MIT) - Copyright (c) 2017 Alex Corvi