let timeLeft = 120;

const timerElement = document.getElementById("timer");

function updateTimer() {
  timerElement.textContent = timeLeft;

  timeLeft--;

  if (timeLeft < 0) {
    clearInterval(timerInterval);
    alert("O tempo acabou c é burro");
    timerElement.textContent = "Tempo esgotado!";
    window.location.href = "paginaRespostaErrada.html";
  }
}

const timerInterval = setInterval(updateTimer, 1000);

// Seleção dos botões de dificuldade
const buttonShowFacil = document.querySelector("#buttonShowFacil");
const buttonShowMedio = document.querySelector("#buttonShowMedio");
const buttonShowDificil = document.querySelector("#buttonShowDificil");

const modalFacil = document.querySelector("#modalFacil");
const modalMedio = document.querySelector("#modalMedio");
const modalDificil = document.querySelector("#modalDificil");

const buttonYes = document.querySelectorAll(".buttonYes");
const buttonNo = document.querySelectorAll(".buttonNo");
const buttonYesWrong = document.querySelectorAll(".buttonYesWrong");

// Exibir os modais ao clicar nos botões de dificuldade
buttonShowFacil.addEventListener("click", function () {
  modalFacil.showModal();
});

buttonShowMedio.addEventListener("click", function () {
  modalMedio.showModal();
});

buttonShowDificil.addEventListener("click", function () {
  modalDificil.showModal();
});

// Fechar os modais ao clicar no botão "No"
buttonNo.forEach(button => {
  button.addEventListener('click', function () {
    if (modalFacil.open) {
      modalFacil.close();
    }
    if (modalMedio.open) {
      modalMedio.close();
    }
    if (modalDificil.open) {
      modalDificil.close();
    }
  });
});

// Redirecionar para a página correta ao clicar no "Sim"
buttonYes.forEach(button => {
  button.addEventListener('click', function () {
    const targetPage = button.getAttribute('data-page'); // Obtém a URL do atributo data-page
    window.location.href = targetPage; // Redireciona para a página
  });
});

// Ação do botão "Sim" no modal de erro
buttonYesWrong.forEach(buttonYesWrong => {
  buttonYesWrong.addEventListener('click', function(){
    window.location.href = "perdeu.html";
  });
});
