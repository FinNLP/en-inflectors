const Inflectors = require("../dist/index").Inflectors;

function watch (inputElementId, callback) {
    var val = document.getElementById(inputElementId).value;
    setInterval(function(){
        if(val === document.getElementById(inputElementId).value) return;
        else callback();
    },20);
}

function outputUnit (contents) {
    return "<span>"+contents+"</span>";
}

watch("nouns-input",function(){
    var newValue = document.getElementById("nouns-input").value.split(" ")[0];
    if(!newValue) return;
    var instance = new Inflectors(newValue);
    var newHTML = 
        outputUnit("is plural: "+instance.isPlural()) +
        outputUnit("is singular: "+instance.isSingular()) +
        outputUnit("is countable: "+instance.isCountable()) + "<br>" +
        outputUnit("to plural: "+instance.toPlural()) +
        outputUnit("to singular: "+instance.toSingular());
    document.getElementById("nouns-output").innerHTML = newHTML;
});

watch("verbs-input",function(){
    var newValue = document.getElementById("verbs-input").value.split(" ")[0];
    if(!newValue) return;
    var instance = new Inflectors(newValue);
    var newHTML = 
        outputUnit(instance.toPresent()) +
        outputUnit(instance.toPast()) +
        outputUnit(instance.toPastParticiple()) + "<br>" +
        outputUnit(instance.toGerund()) +
        outputUnit(instance.toPresentS());
    document.getElementById("verbs-output").innerHTML = newHTML;
});

watch("adj-input",function(){
    var newValue = document.getElementById("adj-input").value.split(" ")[0];
    if(!newValue) return;
    var instance = new Inflectors(newValue);
    var newHTML = 
        outputUnit(instance.comparative()) +
        outputUnit(instance.superlative());
    document.getElementById("adj-output").innerHTML = newHTML;
});
