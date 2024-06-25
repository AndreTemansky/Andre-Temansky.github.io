const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultadao");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é a visão mais usada?",
        alternativas:[
            "primeira pessoa: jogado no ponto e vista do personagem",
            "terceira pessoa: jogado no ponto de vista atrás do personagem"
        ]
    },
    {
        enunciado: "Qual FPS mais jogado na Steam?",
        alternativas:[
            "COUNTER-STRIKE 2",
            "CALL OF DUTY",
            "Battlefield 2042"
        ]
    },
    {
        enunciado: "O foco dos jogos de FPS é?",
        alternativas:[
            "Corpo a Corpo",
            "Armas de Fogo"
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

mostraPergunta();
