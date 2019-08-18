/*
PROBLEMA: 1008 - Salário
RESPOSTA: Accepted
LINGUAGEM: JavaScript (nodejs 8.4.0) [+2s] {beta}
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var numero = Number(lines.shift());
var horas = Number(lines.shift());
var valorPorHora = Number(lines.shift());
var salario = (horas*valorPorHora).toFixed(2);

console.log(`NUMBER = ${numero}`);
console.log(`SALARY = U$ ${salario}`);