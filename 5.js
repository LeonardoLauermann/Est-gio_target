const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function reverso(palavra) {
  let palavraReversa = '';
  for (let i = palavra.length - 1; i >= 0; i--) {
    palavraReversa += palavra[i];
  }

  return palavraReversa;
}

reader.question('Digite uma palavra: ', palavra => {
  console.log(reverso(palavra));
  reader.close();
});
