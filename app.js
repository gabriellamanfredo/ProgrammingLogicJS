alert('Boas vindas ao jogo do número secreto');
let maxNumber = 100;
let secretNumber = parseInt(Math.random() * maxNumber + 1);
let chooseNumber;
let attempts = 1;

//enquanto o chute não for igual ao número secreto
while (chooseNumber != secretNumber){
  chooseNumber = prompt (`Digite um número entre 1 e ${maxNumber}`);
  //se o chute for igual ao número secreto, excutar esta ação
  if (chooseNumber == secretNumber){
    break;
  } else {
  //se não, executar tal ação0
    if (chooseNumber > secretNumber) {
        alert(`O número secreto é menor que ${chooseNumber}`);
    } else {
        alert(`O número secreto é maior que ${chooseNumber}`);
    }
    attempts ++ // isto é igual a attempts = attempts + 1
  }
}

let wordAttempts = attempts > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${secretNumber} com ${attempts} ${wordAttempts}`);

//if (attempts > 1 ){
//  alert(`Isso ai! Você descobriu o número secreto ${secretNumber} com ${attempts} tentativas`);
//} else {
//  alert(`Isso ai! Você descobriu o número secreto ${secretNumber} com ${attempts} tentativa`);
//}