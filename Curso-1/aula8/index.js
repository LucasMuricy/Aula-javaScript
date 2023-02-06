const nome = "Lucas Muricy";
const idade = 25;
const peso = 84 ;
const altura = 1.80;
let  IMC;
let anoNacimento;


IMC = peso / (altura * altura);
anoNacimento = 2023 - idade; 

console.log(nome,"Naceu em", anoNacimento,"e pesa",peso,"Kg");
console.log("Tem",altura,"e seu IMC é de",IMC);

console.log();
//Da pra fazer assim tabem 
console.log(`${nome} Naceu em ${anoNacimento} e pesa ${peso} Kg`);
console.log(`Tem ${altura} e seu IMC é de ${IMC}`);
