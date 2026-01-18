const cousins = ["Jaya", "Kaiya", "Aarav", "Aria", "Aakash", "Akshay"];
const vocabData = [
    { word: "Axiomatic", correct: "Self-evident or universally accepted as true." },
    { word: "Sagacious", correct: "Having keen mental discernment and good judgment; wise." },
    { word: "Hermeneutic", correct: "Relating to interpretation, especially of texts." },
    { word: "Anfractuous", correct: "Full of twists and turns; intricate or circuitous." },
    { word: "Yen", correct: "A deep, passionate desire or craving." },
    { word: "Boondoggle", correct: "A wasteful or impractical project." }
];

let score = 0;
let currentRotation = 0;

const wheel = document.getElementById('wheel');
const spinBtn = document.getElementById('spin-btn');
const turnDisplay = document.getElementById('turn-display');
const quizSection = document.getElementById('quiz-section');
const vocabWord = document.getElementById('vocab-word');
const optionsContainer = document.getElementById('options-container');

spinBtn.addEventListener('click', () => {
    // Spin the wheel
    const randomSpin = Math.floor(Math.random() * 360) + 1440; // at least 4 full turns
    currentRotation += randomSpin;
    wheel.style.transform = `rotate(${currentRotation}deg)`;

    spinBtn.disabled = true;

    // After animation, pick cousin and show question
    setTimeout(() => {
        const actualDegree = currentRotation % 360;
        const cousinIndex = Math.floor((360 - actualDegree) / (360 / cousins.length)) % cousins.length;
        const selectedCousin = cousins[cousinIndex];
        
        turnDisplay.innerText = `${selectedCousin}, it's your turn!`;
        loadQuestion();
        quizSection.classList.remove('hidden');
        spinBtn.disabled = false;
        spinBtn.innerText = "Next Round";
    }, 4000);
});

function loadQuestion() {
    const item = vocabData[Math.floor(Math.random() * vocabData.length)];
    vocabWord.innerText = item.word;
    optionsContainer.innerHTML = '';

    // Create 3 random "fake" answers + the real one
    const choices = [item.correct, "A type of fast-growing tropical plant.", "To move in a clumsy or awkward way.", "Feeling very tired after a long trip."];
    choices.sort(() => Math.random() - 0.5);

    choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.innerText = choice;
        btn.onclick = () => checkAnswer(choice, item.correct);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(selected, correct) {
    if (selected === correct) {
        score++;
        alert("Slay! That's correct.");
    } else {
        alert("Not quite! The correct vibe was: " + correct);
    }
    document.getElementById('score-display').innerText = `Score: ${score}`;
    quizSection.classList.add('hidden');
}
