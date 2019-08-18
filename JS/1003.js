/*
PROBLEMA: 1003 - Soma Simples
RESPOSTA: Accepted
LINGUAGEM: JavaScript (nodejs 8.4.0) [+2s] {beta}
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = Number(lines.shift());
var b = Number(lines.shift());
var soma = a+b;

console.log(`SOMA = ${soma}`);