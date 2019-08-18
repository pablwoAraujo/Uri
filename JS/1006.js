/*
PROBLEMA: 1006 - Média 2
RESPOSTA: Accepted
LINGUAGEM: JavaScript (nodejs 8.4.0) [+2s] {beta}
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = Number(lines.shift());
var b = Number(lines.shift());
var c = Number(lines.shift());

var media = (((a*2)+(b*3)+(c*5))/10).toFixed(1);

console.log(`MEDIA = ${media}`);