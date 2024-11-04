alert("Boas vindas ao jogo do número secreto");
let numeroSecreto = 29;
//Armazena a variavel digitada no prompt
let chute = prompt("Escolha um número entre 1 e 10");
//Verifica se o chute é igual ao número secreto
if(chute == numeroSecreto){
    console.log("Isso ai! Você descobriu o número secreto (5)");
}