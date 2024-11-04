alert("Boas vindas ao jogo do número secreto");
let numeroSecreto = parseInt(Math.random() * 100 + 1);
//Armazena a variavel digitada no prompt
console.log(numeroSecreto);
let chute;
let tentativas = 1;
// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt("Escolha um número entre 1 e 100");
    //Verifica se o chute é igual ao número secreto
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tantativas + 1;
        tentativas++;
    }
}
let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativas}.`);
/*if(tentativas >1){
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
}else{
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
}*/

