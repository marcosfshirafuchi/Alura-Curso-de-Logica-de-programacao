alert("Boas vindas ao jogo do número secreto");
let numeroSecreto = 9;
//Armazena a variavel digitada no prompt
console.log(numeroSecreto);
let chute = prompt("Escolha um número entre 1 e 10");
//Verifica se o chute é igual ao número secreto
// se chute for igual ao número secreto
if(chute == numeroSecreto){
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
}else{
    alert("Você errou :(")
}