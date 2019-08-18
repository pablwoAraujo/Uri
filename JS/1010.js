/*
PROBLEMA: 1010 - Cálculo Simples
RESPOSTA: Accepted
LINGUAGEM: JavaScript (nodejs 8.4.0) [+2s] {beta}
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var produto1 = lines.shift().split(' ');
var produto2 = lines.shift().split(' ');

var cod1= produto1.shift();
var quantidade1= produto1.shift();
var preco1= produto1.shift();

var cod2= produto2.shift();
var quantidade2= produto2.shift();
var preco2= produto2.shift();

var valor= (quantidade1*preco1 + quantidade2*preco2).toFixed(2);

console.log(`VALOR A PAGAR: R$ ${valor}`)