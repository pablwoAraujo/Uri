/*
PROBLEMA: 1010 - Cálculo Simples
RESPOSTA: Accepted
LINGUAGEM: JavaScript (nodejs 8.4.0) [+2s] {beta}
*/

var input = require('fs').readFileSync('teste.txt', 'utf8');
var lines = input.split('\n');

var raio = lines.shift();
var volume = ((4.0/3)*pi*Math.pow(raio, 3)).toFixed(3);

console.log(`VOLUME = ${volume}`);