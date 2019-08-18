/*
PROBLEMA: 1014 - Consumo
RESPOSTA: Accepted
LINGUAGEM: JavaScript (nodejs 8.4.0) [+2s] {beta}
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var distancia = Number(lines.shift());
var combustivelGasto = Number(lines.shift());

var consumoMedeio = (distancia/combustivelGasto).toFixed(3);

console.log(`${consumoMedeio} km/l`);