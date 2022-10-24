var readlineSync = require('readline-sync');
var nota1 = readlineSync.question('\nDigite a primeira nota: ');
var nota2 = readlineSync.question('\nDigite a segunda nota: ');
var soma = parseFloat(nota1) + parseFloat(nota2);
var falta = 21 - soma;

console.log("\nA nota mínima que precisa tirar para ficar com a média 7 é: "  +  falta.toFixed(2));