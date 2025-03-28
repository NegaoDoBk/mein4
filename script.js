function verificarParImpar() {
    const number = document.getElementById('number').value;
    const resultElement = document.getElementById('result');
    const feedbackElement = document.getElementById('feedback');  // Substituindo acertoElement por feedbackElement

    // Verificar se o número está dentro do intervalo válido
    if (number < 1 || number > 50 || isNaN(number)) {
        resultElement.textContent = "Por favor, escolha um número entre 1 e 50!";
        feedbackElement.textContent = "";
        return;
    }

    // Convertendo o número escolhido para inteiro
    const numeroEscolhido = parseInt(number);

    // Gerando um número aleatório entre 1 e 50
    const numeroSorteado = Math.floor(Math.random() * 50) + 1;

    // Verificar se o número sorteado é par ou ímpar
    const isNumeroPar = numeroSorteado % 2 === 0;

    // Exibindo o número sorteado
    resultElement.textContent = `O número sorteado foi: ${numeroSorteado}.`;

    // Exibindo o número escolhido
    feedbackElement.textContent = `Você escolheu: ${numeroEscolhido}.`;

    // Verificando se o jogador acertou
    if ((isNumeroPar && numeroEscolhido % 2 === 0) || (!isNumeroPar && numeroEscolhido % 2 !== 0)) {
        feedbackElement.textContent += " Você acertou! Parabéns!";
        feedbackElement.className = 'acertou';  // Adiciona classe de acerto
    } else {
        feedbackElement.textContent += " Você errou. Tente novamente!";
        feedbackElement.className = 'errou';  // Adiciona classe de erro
    }
}

