/**
     * <h1> Alura - Lógica de programação: mergulhe em programação com JavaScript: 02. Condicionais e concatenação </h1>
     * 09 Desafio: hora da prática<br><br>

Programação é prática! Criamos mais uma lista de atividades (não obrigatórias) para você exercitar e reforçar ainda mais seu aprendizado.Bora praticar?

Desafios<br><br>

1 - Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".<br><br>

2 - Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.<br><br>

3 - Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".<br><br>

4 - Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.<br><br>

Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.<br><br>
     * <p>
     * <b>Note:</b> Desenvolvido na linguagem Javascript.
     *
     * @author  Marcos Ferreira Shirafuchi
     * @version 1.0
     * @since   04/11/2024
     */


// 1 - Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

let diaDaSemana = prompt("Digite o dia da semana de 1 a 7: ");
if(diaDaSemana == 1 || diaDaSemana == 7){
    alert("Bom fim de semana!");
}else{
    alert("Boa semana!");
}

//2 - Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

let numeroDigitado = prompt("Digite um número: ");
if(numeroDigitado>0){
    alert("Número Positivo!");
}else{
    alert("Número Negativo!");
}

// 3 - Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

pontuacao = 105;
if(pontuacao >= 100){
    alert("Parabéns, você venceu!");
}else{
    alert("Tente novamente para ganhar.");
}

// 4 - Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

let saldo = 1000;
alert(`O saldo da conta: R$ ${saldo}`);

// 5 - Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

let nome = prompt("Digite o seu nome: ");
alert(`Boas-vindas, ${nome}`);