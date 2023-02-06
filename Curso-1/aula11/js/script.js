//alert("Mensagem de Alerta.");// manda mensagem de alerta, mais não salva nada na memoria.

//let num1 = prompt("Digite um numero:");
//console.log(num1);
//vai sair o numero digitado 

//confirm("Deseja sair?"); // manda mensagem pedindo pra confirma.
// pode ser uma cria uma let para guarda a resposta tambem

// let resp = confirm("vai mesmo sair?");
//console.log(resp);

let num1 = prompt("Digite um numero:");
let num2 = prompt("Digite outro numero:");

num1 = Number(num1); // Da pra usar parseFloat tambem 
num2 = Number(num2); // mais parseFloat e mais usado pra numeros qubrados exp "5.25"

let resp = num1 + num2;
alert("A Soma dos Numeros São: " + resp);