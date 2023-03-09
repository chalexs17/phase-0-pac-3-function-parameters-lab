function introduction(name) {
    const string = `Hi, my name is ${name}.`;
    return string;
}

function introductionWithLanguage(name, language) {
    const phrase = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    return phrase;
}
// set a default for an argument by using the = operator
// name = "Alexis"
// language = "Javascript"
function introductionWithLanguageOptional(name = "Alexis", language = "JavaScript"){ //Defaults to JavaScript
    const phrase = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    return phrase;
}