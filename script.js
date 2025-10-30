// DICAS DE AUTOCUIDADO
const dicas = [
    "Beba pelo menos 2 litros de água por dia.",
    "Durma entre 7 e 8 horas por noite.",
    "Faça pausas para respirar fundo e relaxar.",
    "Evite o uso excessivo de telas antes de dormir.",
    "Mantenha contato com amigos e familiares.",
    "Agradeça por algo bom que aconteceu hoje."
];

document.getElementById("dicaBtn").addEventListener("click", () => {
    const dicaAleatoria = dicas[Math.floor(Math.random() * dicas.length)];
    document.getElementById("dicaTexto").textContent = dicaAleatoria;
});

// FORMULÁRIO DE CONTATO
const form = document.getElementById("formContato");
const msgRetorno = document.getElementById("msgRetorno");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const nome = document.getElementById("nome").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Validação de e-mail
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // Validação de telefone (aceita formatos brasileiros)
    const telefoneValido = /^(\(?\d{2}\)?\s?)?(\d{4,5}\-\d{4})$/.test(telefone);

    if (!emailValido) {
        msgRetorno.textContent = "❌ E-mail inválido. Exemplo: nome@dominio.com";
        msgRetorno.style.color = "red";
        return;
    }

    if (!telefoneValido) {
        msgRetorno.textContent = "❌ Telefone inválido. Use o formato (DDD) 90000-0000";
        msgRetorno.style.color = "red";
        return;
    }

    if (!nome || !mensagem) {
        msgRetorno.textContent = "❌ Preencha todos os campos.";
        msgRetorno.style.color = "red";
        return;
    }

    msgRetorno.textContent = "✅ Mensagem enviada com sucesso! Obrigado pelo contato.";
    msgRetorno.style.color = "green";

    form.reset();
});
