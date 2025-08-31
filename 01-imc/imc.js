import verificarPesoIdeal from './condicionais.js';

const botao = document.getElementById("calcular");

//Gerando mensagem no campo nome para o usuário
const botaoNome = document.getElementById("nome");
nome.setAttribute("placeholder", "Digite seu nome");
altura.setAttribute("placeholder", "Digite seu altura");
peso.setAttribute("placeholder", "Digite seu peso");

botao.addEventListener("click", function() {
    const nomeDigitado = document.getElementById("nome").value;
    const alturaDigitada = document.getElementById("altura").value;
    const pesoDigitado = document.getElementById("peso").value;

    const resultIMC = parseInt(pesoDigitado / (alturaDigitada * alturaDigitada));

    const mensagem = verificarPesoIdeal(resultIMC);

    resultado.textContent = nomeDigitado + " Seu IMC é de " + resultIMC + mensagem;
})