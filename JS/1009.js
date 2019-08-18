/*
PROBLEMA: 1009 - Salário com Bônus
RESPOSTA: Accepted
LINGUAGEM: JavaScript (nodejs 8.4.0) [+2s] {beta}
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var nome = lines.shift();
var salarioFixo = Number(lines.shift());
var totalVendas = Number(lines.shift());

var salarioFinal = (totalVendas*0.15 + salarioFixo).toFixed(2);

console.log(`TOTAL = R$ ${salarioFinal}`);