/**
     * <h1> Alura - Lógica de programação: mergulhe em programação com JavaScript: 03. Loops e tentativas</h1>
     * 07 Desafio: hora da prática<br><br>

Chegamos em mais uma lista de atividades (não obrigatórias) para você praticar e reforçar ainda mais seu aprendizado.Bora?!

Desafios<br><br>

1 - Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.<br><br>

2 - Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.<br><br>

3 - Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.<br><br>

4 - Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.<br><br>

     * <p>
     * <b>Note:</b> Desenvolvido na linguagem Javascript.
     *
     * @author  Marcos Ferreira Shirafuchi
     * @version 1.0
     * @since   04/11/2024
     */

//1 - Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

let contador = 1;
while(contador<=10){
    //alert(`Numero: ${contador}`);
    console.log(`${contador}`);
    contador++;
}

//2 - Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

let contadorRegressivo = 10;
while(contadorRegressivo>=0){
    //alert(`Número: ${contadorRegressivo}`);
    console.log(`${contadorRegressivo}`);
    contadorRegressivo--;
}

//3 - Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

let contagemRegressiva = prompt("Digite um número: ")
while(contagemRegressiva >= 0){
    //alert(`Número: ${contagemRegressiva}`);
    console.log(`${contagemRegressiva}`);
    contagemRegressiva--;
}

//4 - Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

let numero = prompt("Digite um número: ")
let contagemProgressiva = 0;
while(contagemProgressiva <= numero){
    //alert(`Número: ${contagemProgressiva}`);
    console.log(`${contagemProgressiva}`);
    contagemProgressiva++;
}