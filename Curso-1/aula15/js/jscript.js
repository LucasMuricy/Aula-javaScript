/**
 * let numer2 = Math.floor(numer1);
 * let numer2 = math.cceil(numer1);
 * let numer2 = math.round(numer10);
 * console.log(Math.max(1,2,4,,5,,7,8));
 * console.log(Math.min(12,,5,4,8,8));
 * cont aleatorio = Mth.round(Math.random( * 10 - 5 ) + 5);
 */

let numr = prompt("Digite Um Número: ");

document.body.innerHTML += `Seu Número é:<strong> ${numr} </strong><br />`
document.body.innerHTML += `Raiz Quadrada: ${numr ** (1/2)}`
document.body.innerHTML += `${numr} é inteiro? :${numr} `
document.body.innerHTML += `è NAN: ${numr}`
document.body.innerHTML += `Arredondando para baixo: ${Math.floor(numr)}`
document.body.innerHTML += `Arredondando para cima: ${Math.ceil(numr)}`
document.body.innerHTML += ` Com Duas Casas Decimais: `

