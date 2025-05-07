const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

// Definindo datas de objetivo para cada contador
const temposObjetivos = [
    new Date("2025-09-04T00:00:00"),  // Data final para o primeiro contador (Curso Italiano)
    new Date("2025-10-27T00:00:00"),  // Data final para o segundo contador (Vestibular)
    new Date("2025-11-06T00:00:00"),  // Data final para o terceiro contador (Leitura)
    new Date("2025-11-06T00:10:00")   // Data final para o quarto contador (ENEM)
];

// Função para calcular o tempo restante
function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    return `${dias} dias ${horas} horas ${minutos} minutos ${segundos} segundos`;
}

// Atualiza o tempo de cada contador individualmente
function atualizarContadores() {
    for (let i = 0; i < temposObjetivos.length; i++) {
        const contador = document.querySelectorAll(".contador")[i];
        contador.textContent = calculaTempo(temposObjetivos[i]);  // Aplica a data específica de cada contador
    }
}

// Chama a função para atualizar o tempo a cada segundo
setInterval(atualizarContadores, 1000);

// Inicializa a primeira vez
atualizarContadores();
