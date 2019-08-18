/*
PROBLEMA: 1013 - O Maior
RESPOSTA: Accepted
LINGUAGEM: JavaScript (nodejs 8.4.0) [+2s] {beta}
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valores = lines.shift().split(" ");

var a = Number(valores.shift());
var b = Number(valores.shift());
var c = Number(valores.shift());

var maiorAB = (a + b + Math.abs(a-b))/2;
var maiorABC = (maiorAB + c + Math.abs(maiorAB-c))/2;

console.log(`${maiorABC} eh o maior`);