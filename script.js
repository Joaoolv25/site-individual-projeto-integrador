// Cadastro
document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;

    document.getElementById("mensagemSucesso").innerText =
        `Obrigado, ${nome}! Você receberá dicas no e-mail: ${email}.`;

    this.reset();
});

// Avaliação por estrelas
const estrelas = document.querySelectorAll(".estrela");
let avaliacao = 0;

estrelas.forEach((estrela) => {
    estrela.addEventListener("click", () => {
        avaliacao = estrela.getAttribute("data-value");

        estrelas.forEach(e => e.classList.remove("selecionada"));

        for (let i = 0; i < avaliacao; i++) {
            estrelas[i].classList.add("selecionada");
        }

        document.getElementById("resultadoAvaliacao").innerText =
            `Você avaliou com ${avaliacao} estrela(s).`;
    });
});

// Feedback
document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let texto = document.getElementById("feedback").value;

    document.getElementById("mensagemFeedback").innerText =
        `Feedback recebido! Obrigado pela sua contribuição.`;

    this.reset();
});
