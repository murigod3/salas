const searchButton = document.getElementById("searchButton");
const searchBox = document.getElementById("searchBox");
const searchInput = document.getElementById("searchInput");

if (searchButton) {

    searchButton.addEventListener("click", () => {

        searchBox.classList.toggle("active");

        if (searchBox.classList.contains("active")) {
            searchInput.focus();
        }

    });

}
const gameCards = document.querySelectorAll(".game-card");

if (searchInput) {

    searchInput.addEventListener("input", () => {

        const searchTerm = searchInput.value.toLowerCase();

        gameCards.forEach(card => {

            const gameName =
                card.querySelector("h3").textContent.toLowerCase();

            if (gameName.includes(searchTerm)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    });

} 
gameCards.forEach(card => {
    card.addEventListener("click", () => {
        const link = card.dataset.link;

        if (link && link !== "#") {
            window.location.href = link;
        }
    });
}); 
// =========================
// QUIZ — DESCUBRA
// =========================

const startQuiz = document.getElementById("startQuiz");
const quizStart = document.getElementById("quizStart");
const quizQuestion = document.getElementById("quizQuestion");
const quizResult = document.getElementById("quizResult");
const questionNumber = document.getElementById("questionNumber");
const questionText = document.getElementById("questionText");
const answerButtons = document.querySelectorAll(".answer-button");

const questions = [
    {
        text: "Você gosta de explorar e descobrir coisas por conta própria?",
        yes: ["minecraft", "minecraft"],
        no: ["stardew", "life"]
    },

    {
        text: "Você prefere uma experiência mais tranquila, sem muita pressão?",
        yes: ["stardew", "stardew"],
        no: ["minecraft", "life"]
    },

    {
        text: "Você gosta de histórias onde suas escolhas podem mudar o caminho?",
        yes: ["life", "life"],
        no: ["minecraft", "stardew"]
    },

    {
        text: "Você gosta de criar e construir coisas do seu jeito?",
        yes: ["minecraft", "minecraft"],
        no: ["stardew", "life"]
    },

    {
        text: "Você valoriza bastante os personagens e as relações entre eles?",
        yes: ["life", "life"],
        no: ["minecraft", "stardew"]
    },

    {
        text: "Você gostaria de poder criar sua própria rotina dentro do jogo?",
        yes: ["stardew", "stardew"],
        no: ["minecraft", "life"]
    }
];

let currentQuestion = 0;

let scores = {
    minecraft: 0,
    stardew: 0,
    life: 0
};

if (startQuiz) {

    startQuiz.addEventListener("click", () => {

        quizStart.style.display = "none";
        quizQuestion.style.display = "flex";

        showQuestion();

    });

}

function showQuestion() {

    const question = questions[currentQuestion];

    questionNumber.textContent =
        `PERGUNTA ${String(currentQuestion + 1).padStart(2, "0")}`;

    questionText.textContent = question.text;

    quizQuestion.classList.remove("question-active");

    void quizQuestion.offsetWidth;

    quizQuestion.classList.add("question-active");

}

answerButtons.forEach(button => {

    button.addEventListener("click", () => {

        const answer = button.dataset.answer;
        const question = questions[currentQuestion];

        if (answer === "sim") {

            question.yes.forEach(game => {
                scores[game]++;
            });

        } else {

            question.no.forEach(game => {
                scores[game]++;
            });

        }

        currentQuestion++;

        if (currentQuestion < questions.length) {

            showQuestion();

        } else {

            showResult();

        }

    });

});

function showResult() {

    let result = "minecraft";

    if (scores.stardew > scores[result]) {
        result = "stardew";
    }

    if (scores.life > scores[result]) {
        result = "life";
    }

    const resultTitle = document.getElementById("resultTitle");
    const resultText = document.getElementById("resultText");
    const resultLink = document.getElementById("resultLink");
    const results = {

    minecraft: {
    title: "Minecraft",
    text: "Você parece encontrar liberdade naquilo que pode criar, explorar e transformar.",
    link: "jogos/minecraft.html",
    image: "imagens/minecraft3ima.jpg"
},

stardew: {
    title: "Stardew Valley",
    text: "Você parece apreciar histórias tranquilas, pequenas descobertas e relações que crescem com o tempo.",
    link: "jogos/stardew-valley.html",
    image: "imagens/stadew1.jpg"
},

life: {
    title: "Life is Strange",
    text: "Você parece se conectar com histórias marcadas por escolhas, sentimentos e relações que deixam marcas.",
    link: "jogos/life-is-strange.html",
    image: "imagens/lifeis01.jpg"
}

};

    resultTitle.textContent = results[result].title;
    resultText.textContent = results[result].text;
    resultLink.href = results[result].link;
 
    quizResult.style.backgroundImage =
    `url("${results[result].image}")`;

   quizQuestion.style.display = "none";
   quizResult.style.display = "flex";

   quizResult.classList.remove("result-active");

   void quizResult.offsetWidth;

   quizResult.classList.add("result-active");

} const restartQuiz = document.getElementById("restartQuiz");

if (restartQuiz) {

    restartQuiz.addEventListener("click", () => {

        currentQuestion = 0;

        scores = {
            minecraft: 0,
            stardew: 0,
            life: 0
        };

        quizResult.style.display = "none";
        quizStart.style.display = "flex";

        quizResult.classList.remove("result-active");

    });

}