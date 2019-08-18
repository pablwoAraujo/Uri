/*
PROBLEMA: 1015 - Distância Entre Dois Pontos
RESPOSTA: Accepted
LINGUAGEM: JavaScript (nodejs 8.4.0) [+2s] {beta}
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var p1 = lines.shift().split(" ");
var p2 = lines.shift().split(" ");

var xp1 = Number(p1.shift());
var yp1 = Number(p1.shift());
var xp2 = Number(p2.shift());
var yp2 = Number(p2.shift());

var distancia = Math.sqrt(Math.pow(xp2 - xp1,2) + Math.pow(yp2- yp1,2));

console.log(distancia.toFixed(4));