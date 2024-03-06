const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isFibonacci(number) {
  if (number < 0) return false;

  let proximoTerm = 0;
  let antigoTerm = 1;
  while (proximoTerm < number) {
    const atualTerm = proximoTerm;
    proximoTerm = atualTerm + antigoTerm;
    antigoTerm = atualTerm;
  }

  return proximoTerm === number;
}

reader.question('Digite um número: ', numberStr => {
  const number = parseInt(numberStr);

  isFibonacci(number)
    ? console.log(`O número ${number} pertence à sequência de Fibonacci.`)
    : console.log(`O número ${number} não pertence à sequência de Fibonacci.`);

  reader.close();
});
