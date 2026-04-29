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
    novidades: [
        `O Brawl Talk de abril de 2026 celebra a marca de 100 brawlers com o lançamento da lendária Starr Nova, além de Damian e Bolt. 

        O destaque técnico fica para o novo Sistema de Prestígio, que acaba com a perda de troféus após os 1000 pontos, e as colaborações épicas com My Hero Academia e Adidas. 
        
        No gameplay, o modo Combate recebe caixas com itens ativos e o sistema social ganha melhorias contra toxicidade e novas opções de personalização.`
    ],
    numeroDeBrawler: [
        `Existem 101 Brawlers no jogo Brawl Stars atualmente. 

        A marca histórica de 100 personagens foi atingida recentemente com o lançamento do Brawler Sirius. 

        Devido ao grande número de personagens, a Supercell tem estudado formas de reorganizar as raridades para facilitar o equilíbrio do jogo e a progressão dos jogadores.`
    ],

    piqueGema: [
        `Aqui estão os melhores para o Pique-Gema:

        Carregadores (Ficam no centro): Gus (escudo/suporte) e Pam (muita vida e cura).

        Controle (Dominam o mapa): Emz (afasta inimigos) e Spike (dano em área).

        Agressores (Eliminam o rival): Mortis (mobilidade) e Sirius (pressão ofensiva).

        Dica de ouro: O carregador de gemas deve focar em sobreviver, deixando o combate agressivo para os outros dois aliados.`,

        `Aqui estão os melhores para o Pique-Gema:

        Estratégicos (Utilidade): Gene (puxa o inimigo com gemas) e Sandy (esconde o time com a areia).

        Pressão (Dano constante): Naja (domina corredores) e Clancy (fica mais forte durante a partida).

        Sustento (Cura): Poco (mantém o time vivo) e Byron (cura à distância).

        Dica de ouro: Use o Gene se o time inimigo tiver um carregador muito difícil de matar; um puxão certeiro no final pode virar o jogo.`,

        `Tanques (Linha de frente): Frank (muito dano e controle) e Rosa (escudo de alta resistência).

        Estratégicos (Utilidade): Max (dá velocidade ao time) e Tara (revela arbustos e puxa inimigos).

        Pressão (Dano constante): Jessie (torreta defensiva) e Bo (minas para controle de área).

        Sustento (Cura): Pam (torre de cura e alta vida) e Berry (cura com ataques básicos).
        
        Dica de ouro: O Brawler de suporte é importantíssimo nesse modo, pois ele mantém a vida dos outros companheiros e de um possível Brawler Tank que esteja no time.`
    ],

    cacaEstrela: [
        `Aqui estão os melhores para o Caça-Estrelas:
        
        Atiradores (Longo alcance): Piper (dano massivo à distância) e Angelo (mobilidade e precisão).

        Controle (Área e suporte): Byron (envenena rivais e cura aliados) e Mina (consistente em quase todos os mapas).

        Lançadores (Atrás de muros): Tick (minas que irritam e afastam) e Grom (dano em área explosivo).

        Assassinos (Finalizadores): Leon (furtividade para pegar estrelas altas) e Finx (agressividade cirúrgica). 

        Dica de ouro: Neste modo, recuar é mais importante que avançar. Se você tiver muitas estrelas sobre a cabeça, jogue recuado com o Byron ou a Piper para garantir que o inimigo não vire o jogo.`,

        `Aqui estão mais opções excelentes para o Caça Estrela:

        Atiradores (Longo alcance): Belle (ataque que rebate) e Nani (maior dano do jogo à distância).

        Controle (Área e suporte): Sprout (cria muros bloqueadores) e Gene (puxa inimigos com estrelas).

        Lançadores (Atrás de muros): Spore (novas mecânicas de área) e Larry & Lawrie (pressão em dobro).

        Assassinos (Finalizadores): Edgar (salto agressivo com hipercarga) e Mortis (mobilidade para fuga).

        Dica de ouro: Use a Nani em mapas abertos para eliminar brawlers frágeis (snipers) com um único tiro bem posicionado, forçando o inimigo a jogar com medo.`, 

        `Aqui estão os melhores para o Caça-Estrelas:

        Atiradores (Longo alcance): Brock (dano em área com foguetes) e Mandy (alcance extremo com o super).

        Controle (Área e suporte): Ruffs (melhora os atributos dos aliados) e Gray (teleporta o time para surpreender).

        Lançadores (Atrás de muros): Barley (dano constante em poças) e Dynamike (explosões rápidas e fatais).

        Assassinos (Finalizadores): Crow (impede a cura inimiga) e Fang (ataque em cadeia para limpa de área).

        Dica de ouro: Com o Gray, você pode criar um portal para ajudar um aliado com muitas estrelas a escapar de uma emboscada em segundos.`
    ],

    futebrawl: [
        `Aqui estão os melhores para o Fute-Brawl:

        Tanques (Linha de frente): Bibi (velocidade e empurrão) e Bull (avança com a bola usando o Super).

        Estratégicos (Utilidade): Melodie (extrema mobilidade para marcar gols) e Sandy (esconde o avanço do time).

        Pressão (Dano constante): Clancy (imparável no estágio 3) e Shelly (destrói tanques e quebra o gol).

        Sustento (Cura): Doug (consegue "ressuscitar" e manter a posse) e Lumi (lentidão e controle). 

        Dica de ouro: Use o Clancy para dominar as partidas que se estendem; uma vez que ele atinge seu nível máximo, o controle de área dele torna quase impossível para o inimigo defender o gol.`,

        `Aqui estão excelentes opções para o Futebrawl:

        Tanques (Linha de frente): El Primo (pula com a bola) e Frank (atordoa a defesa inimiga).

        Estratégicos (Utilidade): Max (acelera o time para o gol) e Stu (dribles rápidos com o super).

        Pressão (Dano constante): Nita (o urso ajuda na posse de bola) e Colette (derrete tanques rivais).

        Sustento (Cura): Berry (cura o portador da bola) e Poco (mantém o time inteiro no ataque).

        Dica de ouro: Com o Stu, você pode usar o super para chutar a bola com força e se reposicionar instantaneamente, sendo o mestre dos gols relâmpago.`,

        `Aqui estão excelentes opções para o Futebrawl:

        Tanques (Linha de frente): Rosa (cria arbustos para infiltração) e Darryl (rola em direção ao gol).

        Estratégicos (Utilidade): Gale (empurra inimigos para longe da bola) e Maisie (controle e quebra de recuo).

        Pressão (Dano constante): Emz (atrasa a defesa inimiga) e Surge (pula sobre adversários e evolui).

        Sustento (Cura): Byron (cura o atacante de longe) e Pam (estação de cura estratégica no meio).

        Dica de ouro: Use o Gale para proteger seu gol; o Super dele pode empurrar qualquer adversário (mesmo tanques) que esteja prestes a chutar a bola para dentro.` 
    ],

    zonaEstrategica: [
        `Aqui estão as melhores opções para o modo Zona Estratégica:

        Tanques (Linha de frente): Meg (muita vida com o robô) e Buster (escudo para proteger quem está na zona).

        Estratégicos (Utilidade): Lou (congela inimigos para tirá-los da área) e Sandy (esconde o time dentro da zona).

        Pressão (Dano constante): Emz (seu spray domina o círculo) e Spike (dano massivo em quem tenta entrar).

        Sustento (Cura): Pam (torre de cura no centro) e Berry (mantém o time vivo com poças de cura).

        Dica de ouro: Com o Lou, foque em usar seu Super exatamente em cima da zona; o chão escorregadio e o congelamento impedem que os adversários consigam ficar parados para pontuar.`,

        `Aqui estão alternativas poderosas para a Zona Estratégica:

        Tanques (Linha de frente): Frank (muita vida para segurar o ponto) e Jacky (puxa e elimina quem entra na zona).

        Estratégicos (Utilidade): Gale (expulsa inimigos da zona com o sopro) e Bo (minas para bloquear o acesso).

        Pressão (Dano constante): Nita (o urso ajuda a ocupar espaço) e Penny (morteiro que castiga quem fica parado).

        Sustento (Cura): Poco (cura em área constante) e Byron (mantém o tanque vivo à distância).

        Dica de ouro: Use o Gale em zonas únicas; o Super dele é a melhor ferramenta do jogo para "limpar" a área de uma vez só, jogando todos os adversários para fora do círculo.`,

        `Aqui estão algumas opções para dominar na Zona Estratégica:

        Tanques (Linha de frente): Hank (sua bolha ocupa quase a zona inteira) e Ash (fica furioso e imparável no combate corpo a corpo).

        Estratégicos (Utilidade): Otis (silencia o inimigo para ele não reagir na zona) e Ruffs (fortalece os aliados que seguram o ponto).

        Pressão (Dano constante): Amber (cerca a zona com fogo) e Squeak (gruda bombas que impedem a entrada dos rivais).

        Sustento (Cura): Doug (revive aliados dentro do círculo) e Gus (gera escudos para quem está sob ataque).

        Dica de ouro: A Amber é excelente para criar barreiras psicológicas; ao colocar óleo ao redor da zona, os inimigos hesitam em entrar, dando tempo precioso para o seu time pontuar.`
    ],

    fallback: "Não entendi o que você quis dizer. Poderia reformular?"};

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

    if (["quais as novidades", "novidades", "o que há de novo", "brawl talk show", "brawl talk", "de novo"].some(w => text.includes(w))) {
        return respostas.novidades[Math.floor(Math.random() * respostas.novidades.length)];
    }

    
    if (["quantos brawlers", "quantos personagens", "numero total de brawlers", "numero total de personagens"].some(w => text.includes(w))) {
        return respostas.numeroDeBrawler[Math.floor(Math.random() * respostas.numeroDeBrawler.length)];
    }



    if (["pique gema", "quais os melhores personagens para o modo pique gema", "melhores brawlers para o pique gema"].some(w => text.includes(w))) {
        return respostas.piqueGema[Math.floor(Math.random() * respostas.piqueGema.length)];
    }

    if (["caça estrela", "quais os melhores personagens para o modo caça estrela", "melhores brawlers para o Caça Estrela"].some(w => text.includes(w))) {
        return respostas.cacaEstrela[Math.floor(Math.random() * respostas.cacaEstrela.length)];
    }

    if (["futebrawl", "fute brawl", "fute-brawl", "quais os melhores personagens para o modo futebrawl", "melhores brawlers para o futebrawl"].some(w => text.includes(w))) {
        return respostas.futebrawl[Math.floor(Math.random() * respostas.futebrawl.length)];
    }

    if (["zona estrategica", "quais os melhores personagens para o modo zona estrategica" , "melhores brawlers para o zona estrategica"].some(w => text.includes(w))) {
        return respostas.zonaEstrategica[Math.floor(Math.random() * respostas.zonaEstrategica.length)];
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
    typingIndicator.innerText = "Bot está digitando...";
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