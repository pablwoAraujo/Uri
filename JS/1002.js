/*
PROBLEMA: 1002 - Área do Círculo
RESPOSTA: Accepted
LINGUAGEM: JavaScript (nodejs 8.4.0) [+2s] {beta}
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var raio = Number(lines.shift());
var pi = 3.14159;
var area = (pi*Math.pow(raio,2)).toFixed(4);

console.log(`A=${area}`);