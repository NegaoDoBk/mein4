function jogar() {
    let escolhaUsuario = document.getElementById("escolha").value;
    let numeroUsuario = parseInt(document.getElementById("numeroUsuario").value);

    if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 10) {
        alert("Digite um número válido entre 1 e 10.");
        return;
    }

    let numeroComputador = Math.floor(Math.random() * 10) + 1; // Computador escolhe de 1 a 10
    let soma = numeroUsuario + numeroComputador;
    let resultadoFinal = (soma % 2 === 0) ? "par" : "impar";
    let escolhaComputador = (escolhaUsuario === "par") ? "impar" : "par";

    let mensagem = `Você escolheu <strong>${escolhaUsuario.toUpperCase()}</strong><br>
                    Seu número: <strong>${numeroUsuario}</strong><br>
                    Número do computador: <strong>${numeroComputador}</strong><br>
                    Soma: <strong>${soma} (${resultadoFinal})</strong><br>
                    Computador ficou com: <strong>${escolhaComputador.toUpperCase()}</strong><br>`;

    if (escolhaUsuario === resultadoFinal) {
        mensagem += "<span style='color: green;'>🎉 Você VENCEU!</span>";
    } else {
        mensagem += "<span style='color: red;'>💀 Você PERDEU!</span>";
    }

    document.getElementById("resultado").innerHTML = mensagem;
}