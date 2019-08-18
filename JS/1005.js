/*
PROBLEMA: 1005 - Média 1
RESPOSTA: Accepted
LINGUAGEM: JavaScript (nodejs 8.4.0) [+2s] {beta}
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = Number(lines.shift());
var b = Number(lines.shift());
var media = (((a*3.5)+(b*7.5))/11).toFixed(5);

console.log(`MEDIA = ${media}`);