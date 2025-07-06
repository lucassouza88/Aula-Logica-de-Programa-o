let numeroSecreto = Math.floor(Math.random() * 100) + 1;
const maxTentativas = 10;
let tentativasRestantes = maxTentativas;

function chutar() {
  const palpite = parseInt(document.getElementById("palpite").value);
  const mensagem = document.getElementById("mensagem");
  const tentativas = document.getElementById("tentativas");

  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    mensagem.innerText = "Por favor, digite um número entre 1 e 100.";
    return;
  }

  tentativasRestantes--;

  if (palpite === numeroSecreto) {
    mensagem.innerText = `🎉 Você acertou! O número era ${numeroSecreto}.`;
    tentativas.innerText = "";
    desativarJogo();
  } else if (tentativasRestantes > 0) {
    if (palpite < numeroSecreto) {
      mensagem.innerText = "🔼 O número secreto é maior.";
    } else {
      mensagem.innerText = "🔽 O número secreto é menor.";
    }
    tentativas.innerText = `Tentativas restantes: ${tentativasRestantes}`;
  } else {
    mensagem.innerText = `❌ Você perdeu! O número secreto era ${numeroSecreto}.`;
    tentativas.innerText = "";
    desativarJogo();
  }
}

function desativarJogo() {
  document.getElementById("palpite").disabled = true;
  document.getElementById("botaoChutar").disabled = true;
  document.getElementById("reiniciar").style.display = "inline";
}

function reiniciarJogo() {
  // Reinicializa todas as variáveis e o estado do jogo
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  tentativasRestantes = maxTentativas;

  document.getElementById("palpite").disabled = false;
  document.getElementById("botaoChutar").disabled = false;
  document.getElementById("palpite").value = "";

  document.getElementById("mensagem").innerText = "";
  document.getElementById("tentativas").innerText = "";

  document.getElementById("reiniciar").style.display = "none";
}
