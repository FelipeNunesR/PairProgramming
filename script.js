

// if, else if, else
let idade = 20;

if (idade < 18) {
  console.log("Você é menor de idade.");
} else if (idade >= 18 && idade < 60) {
  console.log("Você é um adulto.");
} else {
  console.log("Você é um idoso.");
}

// switch
let diaDaSemana = "segunda";

switch (diaDaSemana) {
  case "segunda":
    console.log("Início da semana!");
    break;
  case "sexta":
    console.log("Quase fim de semana!");
    break;
  case "sabado":
  case "domingo":
    console.log("Fim de semana!");
    break;
  default:
    console.log("Dia útil.");
}


// for
console.log("Números de 1 a 5");
for (let i = 0; i < 5; i++) {
  console.log(`${i + 1}`);
}

// while
console.log("Contador usando While");
let contador = 0;
while (contador < 3) {
  console.log(`Contador: ${contador}`);
  contador++;
}

// do...while
console.log("Usando o laço do...while:");
let j = 0;
do {
  console.log(`Valor de j: ${j}`);
  j++;
} while (j < 2);