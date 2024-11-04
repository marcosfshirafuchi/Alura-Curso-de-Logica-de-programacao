// 1 - Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let diaDaSemana = prompt("Digite o dia da semana de 1 a 7: ");
if(diaDaSemana == 1 || diaDaSemana == 7){
    alert("Bom fim de semana!");
}else{
    alert("Boa semana!");
}