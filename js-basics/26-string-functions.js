// Replacing occurence of a substring within a string

let sentence = 'Can you can a can? as a canner can can a can?';

console.log(sentence.replace('can', '###')); // Can you ### a can? as a canner can can a can?
console.log(sentence.replaceAll('can', '###')); // Can you ### a ###? as a ###ner ### ### a ###?
console.log(sentence.replaceAll('a', 'X')); // CXn you cXn X cXn? Xs X cXnner cXn cXn X cXn?



let funky = sentence.replaceAll('c', 'X').replaceAll("a", "O").replaceAll('n', 'X');
console.log(funky);

let quote = "You can do it";
console.log (quote);