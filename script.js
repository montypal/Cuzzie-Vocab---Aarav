const cousins = ["Jaya", "Kaiya", "Aarav", "Aria", "Aakash", "Akshay"];
let scores = { Jaya: 0, Kaiya: 0, Aarav: 0, Aria: 0, Aakash: 0, Akshay: 0 };

const vocabData = [
    { w: "Axiomatic", d: "Self-evident or universally accepted as true." },
    { w: "Kaleidoscopic", d: "A complex and constantly changing pattern or scene." },
    { w: "Sagacious", d: "Having keen mental discernment and good judgment; wise." },
    { w: "Hermeneutic", d: "Relating to interpretation, especially of texts." },
    { w: "Anfractuous", d: "Full of twists and turns; intricate or circuitous." },
    { w: "Yen", d: "A deep, passionate desire or craving." },
    { w: "Garrulous", d: "Excessively talkative." },
    { w: "Lionize", d: "To treat as an object of great importance." },
    { w: "Fetid", d: "Smelling extremely unpleasant." },
    { w: "Despot", d: "A ruler with absolute power; tyrannical." },
    { w: "Macabre", d: "Disturbing because of involvement with death." },
    { w: "Preternatural", d: "Exceeding what is natural or regular; extraordinary." },
    { w: "Iconoclast", d: "A person who attacks cherished beliefs." },
    { w: "Tragicomic", d: "Manifesting both tragic and comic aspects." },
    { w: "Secular", d: "Having no religious or spiritual basis." },
    { w: "Nihilism", d: "Belief that all religious/moral principles are meaningless." },
    { w: "Meritocracy", d: "Power held based on demonstrated ability." },
    { w: "Paltry", d: "Small or meager; trivial." },
    { w: "Gourmand", d: "Someone fond of eating and drinking." },
    { w: "Hegemony", d: "Domination over others." },
    { w: "Gratuitous", d: "Uncalled for; unwarranted." },
    { w: "Hyperbole", d: "Extravagant exaggeration." },
    { w: "Mercurial", d: "Characterized by rapid, unpredictable changes in mood." },
    { w: "Solipsistic", d: "Believing that oneself is all that exists." },
    { w: "Parsimonious", d: "Unwilling to spend money; stingy." },
    { w: "Abstruse", d: "Difficult to understand; obscure." },
    { w: "Defunct", d: "No longer in force or use; inactive." },
    { w: "Benevolent", d: "Marked by goodness or doing good." },
    { w: "Sacrosanct", d: "Holy; something that should not be criticized." },
    { w: "Ignominious", d: "Humiliating or disgracing." },
    { w: "Largesse", d: "The generous giving of lavish gifts." },
    { w: "Nascent", d: "In the process of coming into existence." },
    { w: "Amalgamate", d: "Combine or unite to form one structure." },
    { w: "Truculent", d: "Aggressively self-assertive; ready to fight." },
    { w: "Orthodox", d: "Conventional; conforming to established protocol." },
    { w: "Pejorative", d: "A word intended to disparage or belittle." },
    { w: "Capricious", d: "Impulsive or unpredictable." },
    { w: "Potentate", d: "One who has great power; a ruler." },
    { w: "Rancor", d: "Deep, bitter resentment." },
    { w: "Rescind", d: "To cancel or to take back." },
    { w: "Docile", d: "Easily taught, led, or managed." },
    { w: "Polemic", d: "An aggressive attack on the principles of another." },
    { w: "Obfuscate", d: "To make obscure or hard to understand." },
    { w: "Clemency", d: "Mercy or lenience." },
    { w: "Sanctimonious", d: "Making a show of being morally superior." },
    { w: "Incorrigible", d: "Incapable of being corrected or improved." },
    { w: "Quixotic", d: "Foolishly impractical in pursuit of ideals." },
    { w: "Platitude", d: "A banal, trite, or stale remark." },
    { w: "Clairvoyant", d: "Able to perceive things normal people cannot." },
    { w: "Ephemeral", d: "Short-lived; fleeting." },
    { w: "Panacea", d: "A remedy for all ills or difficulties." },
    { w: "Linchpin", d: "Something that holds separate parts together." },
    { w: "Sophomoric", d: "Immature and uninformed." },
    { w: "Quotidian", d: "Daily; occurring every day." },
    { w: "Schadenfreude", d: "Pleasure derived from another's misfortune." },
    { w: "Erudite", d: "Having or showing great knowledge." },
    { w: "Pragmatic", d: "Based on practical considerations." },
    { w: "Quagmire", d: "An awkward, complex, or hazardous situation." },
    { w: "Relegate", d: "Consign or dismiss to an inferior rank." },
    { w: "Reticent", d: "Not revealing one's thoughts readily." },
    { w: "Supercilious", d: "Behaving as though one is superior to others." },
    { w: "Trepidation", d: "A feeling of fear about what may happen." },
    { w: "Veracity", d: "Conformity to facts; accuracy." }
];

const canvas = document.getElementById('wheelCanvas');
const ctx = canvas.getContext('2d');
let currentRotation = 0;
let currentPlayer = "";

function drawWheel() {
    const slice = (Math.PI * 2) / cousins.length;
    cousins.forEach((name, i) => {
        ctx.beginPath();
        ctx.fillStyle = i % 2 === 0 ? "#1a1a1a" : "#d4af37";
        ctx.moveTo(200, 200);
        ctx.arc(200, 200, 200, i * slice, (i + 1) * slice);
        ctx.fill();
        ctx.save();
        ctx.translate(200, 200);
        // Rotate text to center of slice
        ctx.rotate(i * slice + slice / 2);
        ctx.fillStyle = i % 2 === 0 ? "white" : "black";
        ctx.font = "bold 18px Poppins";
        ctx.textAlign = "right";
        ctx.fillText(name, 180, 5);
        ctx.restore();
    });
}

function updateLeaderboard() {
    const list = document.getElementById('score-list');
    list.innerHTML = Object.entries(scores)
        .sort((a,b) => b[1] - a[1])
        .map(([name, score]) => `<div class="score-item"><span>${name}</span><span>${score} pts</span></div>`)
        .join('');
}

document.getElementById('spin-button').onclick = () => {
    const spinBtn = document.getElementById('spin-button');
    spinBtn.disabled = true;
    
    // Spin between 5 and 10 full rotations plus a random amount
    const extraDeg = Math.floor(Math.random() * 360);
    const totalSpin = 1800 + extraDeg; 
    currentRotation += totalSpin;
    
    canvas.style.transition = "transform 4s cubic-bezier(0.15, 0, 0.15, 1)";
    canvas.style.transform = `rotate(${currentRotation}deg)`;
    
    setTimeout(() => {
        // FIXED MATH: Calculate which slice is at the TOP (270 degrees)
        const netRotation = currentRotation % 360;
        const sliceSize = 360 / cousins.length;
        
        // The pointer is at the top (270 deg). We need to find which 
        // slice is currently under that 270 deg mark.
        const pointerLocation = 270;
        let index = Math.floor((pointerLocation - netRotation + 720) % 360 / sliceSize);
        
        currentPlayer = cousins[index];
        startQuiz();
        spinBtn.disabled = false;
    }, 4000);
};

function startQuiz() {
    const item = vocabData[Math.floor(Math.random() * vocabData.length)];
    document.getElementById('player-tag').innerText = `${currentPlayer}'s Question`;
    document.getElementById('vocab-word').innerText = item.w;
    
    let choices = [item.d];
    while(choices.length < 4) {
        let rand = vocabData[Math.floor(Math.random() * vocabData.length)].d;
        if(!choices.includes(rand)) choices.push(rand);
    }
    choices.sort(() => Math.random() - 0.5);

    const grid = document.getElementById('options-grid');
    grid.innerHTML = '';
    
    choices.forEach(c => {
        const b = document.createElement('button');
        b.className = 'option-btn';
        b.innerText = c;
        b.onclick = function() {
            const allBtns = document.querySelectorAll('.option-btn');
            allBtns.forEach(btn => btn.style.pointerEvents = 'none');

            if(c === item.d) {
                this.classList.add('correct-glow');
                scores[currentPlayer] += 10;
            } else {
                this.classList.add('wrong-glow');
                allBtns.forEach(btn => {
                   if(btn.innerText === item.d) btn.classList.add('correct-glow');
                });
            }
            
            setTimeout(() => {
                updateLeaderboard();
                document.getElementById('quiz-overlay').classList.add('hidden');
            }, 2000);
        };
        grid.appendChild(b);
    });
    document.getElementById('quiz-overlay').classList.remove('hidden');
}

drawWheel();
updateLeaderboard();
