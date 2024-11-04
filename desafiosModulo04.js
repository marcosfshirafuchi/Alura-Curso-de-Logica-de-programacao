/**
     * <h1> Alura - Lógica de programação: mergulhe em programação com JavaScript: 04. Boas práticas de programação</h1>
     * 08 Desafio: hora da prática<br><br>

E vamos exercitar nosso conhecimento com mais uma lista de atividades (não obrigatório) para você praticar e reforçar ainda mais seu aprendizado!<br><br>

Desafios finais<br><br>

1 - Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.<br><br>

2 - Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.<br><br>

3 - Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .<br><br>

4 - Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.<br><br>

5 - Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

6 - Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

7 - Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

8 - Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

9 - Use um loop while para imprimir os números de 1 a 10 no console. 

10 - Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

11 - Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

12 - Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

13 - Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.

     * <p>
     * <b>Note:</b> Desenvolvido na linguagem Javascript.
     *
     * @author  Marcos Ferreira Shirafuchi
     * @version 1.0
     * @since   04/11/2024
     */


//1 - Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.

console.log("Boas Vindas!");


//2 - Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.

let nome = "Marcos Shirafuchi";
console.log(`Olá, ${nome}!`);

//3 - Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .

let seuNome = "Marcos Shirafuchi";
alert(`Olá, ${seuNome}!`);

//4 - Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

let linguagemDeProgramacao = prompt("Qual a linguagem de programação que você mais gosta?");
console.log(`${linguagemDeProgramacao}`);

//5 - Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

let valor1 = 10;
let valor2 = 31;
let resultado = valor1 + valor2;

console.log(`${valor1} + ${valor2} = ${resultado}`);

//6 - Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

let valor1S = 61;
let valor2S = 31;
let resultadoS = valor1 - valor2;

console.log(`${valor1S} + ${valor2S} = ${resultadoS}`);

//7 - Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

let idade = prompt("Digite a sua idade:");
if (idade >= 18) {
    console.log("Você é maior de idade!");
} else {
    console.log("Você é menor de idade!");
}

//8 - Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

let numero = parseFloat(prompt("Digite um número:"));
if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}

//9 - Use um loop while para imprimir os números de 1 a 10 no console. 

let numeros = 1;
while (numeros <= 10) {
    console.log(`${numeros}`);
    numeros++;
}

//10 - Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

let nota = 7;
if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

//11 - Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

let numeroAleatorio = Math.random();
console.log(`${numeroAleatorio}`);

//12 - Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

let numeroInteiroAleatorio = parseInt(Math.random() * 10 + 1);
console.log(`${numeroInteiroAleatorio}`);

//13 - Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
let numeroInteiroAleatorio2 = parseInt(Math.random() * 1000 + 1);
console.log(`${numeroInteiroAleatorio2}`);