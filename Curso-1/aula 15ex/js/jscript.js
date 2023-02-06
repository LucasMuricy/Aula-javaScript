let numero = Number( prompt("Digite um número: "));
// Da Pra fazer assim tambem --> numero = Number(numero);

const numerotitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");

numerotitulo.innerHTML = numero;
texto.innerHTML = `<p>Raiz quadrada: ${numero ** 0.5}</p>`// pra saber a Raiz quadrada de um numero  --> ** 0.5
texto.innerHTML += `<p> ${numero} é inteiro? :${Number.isInteger(numero)}</p>`
texto.innerHTML += `<p>È NaN: ${Number.isNaN(numero)}</p>`
texto.innerHTML += `<p>Arredondado pra Baixo é ${Math.floor(numero)}</p>`
texto.innerHTML += `<p>Arredodndado pra Cima é ${Math.ceil(numero)} </p>`
texto.innerHTML += `<p>Com Duas Casa decimais: ${numero.toFixed(2)} </p>`








