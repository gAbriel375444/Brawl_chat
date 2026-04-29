const chatOutput = document.getElementById("chat-output");
const userInput = document.getElementById("user-input");

// Banco de respostas empáticas
const respostas = {
    conceito: [
        `O Brawl Stars é um jogo de combate online para celular.

        Você escolhe um personagem (Brawler) e entra em arenas para enfrentar outros jogadores em tempo real. O foco é estratégia rápida: cada herói tem um ataque único e um "Super" poder. 

        Vence quem completar o objetivo primeiro — como dominar uma área ou eliminar os adversários — em partidas que duram menos de 3 minutos.`
    ],
    modosDeJogo: [
       `Pique-Gema: Coletar e segurar 10 gemas até o fim da contagem regressiva.

        Fute-Brawl: Levar a bola até o gol adversário (muito popular por ser intuitivo).

        Combate (Solo/Dupla): O clássico "Battle Royale" onde o objetivo é ser o último sobrevivente na arena.
        
        Nocaute: Eliminar o time adversário em uma melhor de três rodadas.`
    ],
    ansiedade: [
        "Tente focar no agora. O que você consegue ver e ouvir ao seu redor?",
        "Seus pensamentos estão acelerados? Lembre-se: pensamentos não são fatos. Vai passar."
    ],
    apoio: [
        "Você é mais forte do que imagina, mesmo nos dias em que não acredita nisso.",
        "Um passo de cada vez. O que você gostaria de fazer por você hoje, mesmo que seja algo pequeno?"
    ],
    fallback: "Entendo... continue falando, estou te ouvindo com atenção."};

function displayMessage(role, text) {
    const msgDiv = document.createElement("div");
    msgDiv.className = role === "user" ? "msg user-msg" : "msg bot-msg";
    msgDiv.innerHTML = text;
    chatOutput.appendChild(msgDiv);
    chatOutput.scrollTop = chatOutput.scrollHeight;}

function getBotResponse(input) {
    const text = input.toLowerCase();

    // Detecção de Tristeza profunda/Desânimo
    if (["o que é", "sobre o jogo"].some(w => text.includes(w))) {
        return respostas.conceito[Math.floor(Math.random() * respostas.conceito.length)];
    }

    if (["modos de jogo", "modos", "tipos de partida"].some(w => text.includes(w))) {
        return respostas.modosDeJogo[Math.floor(Math.random() * respostas.modosDeJogo.length)];
    }

    return respostas.fallback;}

function processUserInput() {
    const message = userInput.value.trim();
    if (!message) return;

    displayMessage("user", message);
    userInput.value = "";

    // Efeito de "O conselheiro está pensando..."
    const typingIndicator = document.createElement("div");
    typingIndicator.className = "typing";
    typingIndicator.innerText = "Brawler está digitando...";
    chatOutput.appendChild(typingIndicator);

    setTimeout(() => {
        typingIndicator.remove();
        const botReply = getBotResponse(message);
        displayMessage("bot", botReply);
    }, 3200); }

userInput.addEventListener("keyup", (e) => { if (e.key === "Enter") processUserInput(); });

// Mensagem inicial 
window.onload = () => {
    setTimeout(() => {
        displayMessage("bot", "Quer saber algo sobre Brawl Stars? Manda aqui!");
    }, 1600);
};