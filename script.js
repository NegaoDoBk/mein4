function verificarParImpar() {
    const numero = document.getElementById('number').value;
    const resultadoElement = document.getElementById('resultado');

    // Verificar se o número está dentro do intervalo válido
    if (numero < 1 || numero > 50 || isNaN(numero)) {
        resultadoElement.textContent = "Por favor, digite um número entre 1 e 50!";
        resultadoElement.className = ''; // Limpar qualquer classe anterior
        return;
    }

    // Converter o número digitado em inteiro
    const numeroEscolhido = parseInt(numero);

    // Verificar se o número é par ou ímpar
    if (numeroEscolhido % 2 === 0) {
        resultadoElement.textContent = `O número ${numeroEscolhido} é Par!`;
        resultadoElement.className = 'par'; // Adicionar classe de resultado "par"
    } else {
        resultadoElement.textContent = `O número ${numeroEscolhido} é Ímpar!`;
        resultadoElement.className = 'impar'; // Adicionar classe de resultado "ímpar"
    }

    // Exibir o resultado com uma transição suave
    resultadoElement.classList.add('visible');
}

