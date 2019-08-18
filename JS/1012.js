/*
PROBLEMA: 1012 - Área
RESPOSTA: Accepted
LINGUAGEM: JavaScript (nodejs 8.4.0) [+2s] {beta}
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

var a = Number(lines.shift());
var b = Number(lines.shift());
var c = Number(lines.shift());
var pi = 3.14159;

var areaDoTriangulo = a*c/2;
var areaDoCirculo = pi*Math.pow(c,2);
var areaDoTrapezio = ((a+b)*c)/2.0;
var areaDoQuadrado = b*b;
var areaDoRetangulo = a*b;

console.log(`TRIANGULO: ${areaDoTriangulo.toFixed(3)}`);
console.log(`CIRCULO: ${areaDoCirculo.toFixed(3)}`);
console.log(`TRAPEZIO: ${areaDoTrapezio.toFixed(3)}`);
console.log(`QUADRADO: ${areaDoQuadrado.toFixed(3)}`);
console.log(`RETANGULO: ${areaDoRetangulo.toFixed(3)}`);