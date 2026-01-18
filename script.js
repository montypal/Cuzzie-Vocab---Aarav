const cousins = ["Jaya", "Kaiya", "Aarav", "Aria", "Aakash", "Akshay"];
let scores = { Jaya: 0, Kaiya: 0, Aarav: 0, Aria: 0, Aakash: 0, Akshay: 0 };

// ALL 100+ WORDS AND DEFINITIONS FROM YOUR PDF
const vocabData = [
    { w: "Axiomatic", d: "Self-evident or universally accepted as true." },
    { w: "Kaleidoscopic", d: "Characterized by a complex and constantly changing pattern." },
    { w: "Sagacious", d: "Having keen mental discernment and good judgment; wise." },
    { w: "Hermeneutic", d: "Relating to interpretation, especially of texts." },
    { w: "Anfractuous", d: "Full of twists and turns; intricate or circuitous." },
    { w: "Yen", d: "A deep, passionate desire or craving." },
    { w: "Votive", d: "Expressed by or offered in fulfillment of a vow." },
    { w: "Occam's Razor", d: "The simplest explanation is usually the best one." },
    { w: "Vox Populi", d: "The voice of the people." },
    { w: "Lingua Franca", d: "A common language used between people of different backgrounds." },
    { w: "Inimitable", d: "So good or unusual as to be impossible to copy." },
    { w: "Supplicant", d: "A person making a humble or earnest plea to authority." },
    { w: "Infamous", d: "Having a reputation of the worst kind; notoriously evil." },
    { w: "Erstwhile", d: "Former; previous." },
    { w: "Pyrrhic Victory", d: "A success achieved at such a devastating cost that it is a defeat." },
    { w: "Boondoggle", d: "A wasteful or impractical project." },
    { w: "Fastidious", d: "Extremely or excessively careful or detailed." },
    { w: "Perfunctory", d: "Characterized by routine or superficiality." },
    { w: "Incontrovertible", d: "Impossible to deny or disprove." },
    { w: "Mendacious", d: "Not telling the truth; lying." },
    { w: "Quandary", d: "A state of perplexity or doubt." },
    { w: "Circumvent", d: "To manage to get around especially by ingenuity." },
    { w: "Largesse", d: "The generous giving of lavish gifts." },
    { w: "Nascent", d: "In the process of being born or coming into existence." },
    { w: "Amalgamate", d: "To combine or unite to form one organization." },
    { w: "Truculent", d: "Aggressively self-assertive; ready to fight." },
    { w: "Orthodox", d: "Conventional; conforming to established protocol." },
    { w: "Pejorative", d: "A word intended to disparage or belittle." },
    { w: "Capricious", d: "Impulsive or unpredictable." },
    { w: "Placate", d: "To ease the anger of; soothe." },
    { w: "Potentate", d: "One who has great power; a ruler." },
    { w: "Rancor", d: "Deep, bitter resentment." },
    { w: "Rescind", d: "To cancel or to take back." },
    { w: "Docile", d: "Easily taught, led, or managed." },
    { w: "Polemic", d: "An aggressive attack on the principles of another." },
    { w: "Obfuscate", d: "To make obscure or hard to understand." },
    { w: "Clemency", d: "Mercy or lenience." },
    { w: "Incorrigible", d: "Incapable of being corrected or improved." },
    { w: "Bombastic", d: "High-sounding but with little meaning; inflated." },
    { w: "Caustic", d: "Sarcastic in a scathing and bitter way." },
    { w: "Diatribe", d: "A forceful and bitter verbal attack." },
    { w: "Pulchritude", d: "Physical beauty." },
    { w: "Querulous", d: "Whiny; complaining." },
    { w: "Usurp", d: "To seize by force without right." },
    { w: "Faux pas", d: "A social blunder or embarrassing mistake." },
    { w: "Copacetic", d: "Being to one's liking; everything is fine." },
    { w: "Pragmatic", d: "Based on practical rather than theoretical considerations." },
    { w: "Quagmire", d: "An awkward, complex, or hazardous situation." },
    { w: "Relegate", d: "Consign or dismiss to an inferior rank." },
    { w: "Reticent", d: "Not revealing one's thoughts or feelings readily." },
    { w: "Supercilious", d: "Behaving as though one thinks one is superior to others." },
    { w: "Trepidation", d: "A feeling of fear or agitation." },
    { w: "Veracity", d: "Conformity to facts; accuracy." },
    { w: "Garrulous", d: "Excessively talkative." },
    { w: "Lionize", d: "To treat as an object of great importance." },
    { w: "Fetid", d: "Smelling extremely unpleasant." },
    { w: "Macabre", d: "Disturbing because of involvement with death." },
    { w: "Tragicomic", d: "Manifesting both tragic and comic aspects." },
    { w: "Secular", d: "Denoting activities that have no religious basis." },
    { w: "Nihilism", d: "The rejection of all religious and moral principles." },
    { w: "Meritocracy", d: "Power held based on demonstrated ability." },
    { w: "Paltry", d: "Small or meager; petty or trivial." },
    { w: "Gourmand", d: "Someone fond of eating and drinking." },
    { w: "Hegemony", d: "Domination over others." },
    { w: "Gratuitous", d: "Uncalled for; unwarranted." },
    { w: "Hyperbole", d: "Extravagant exaggeration." },
    { w: "Mercurial", d: "Characterized by rapid and unpredictable change in mood." },
    { w: "Solipsistic", d: "Believing that oneself is all that exists." },
    { w: "Parsimonious", d: "Unwilling to spend money; stingy." },
    { w: "Abstruse", d: "Difficult to understand; obscure." },
    { w: "Benevolent", d: "Marked by goodness or doing good." },
    { w: "Sacrosanct", d: "Holy; something that should not be criticized." },
    { w: "Ignominious", d: "Humiliating or disgracing." },
    { w: "Quixotic", d: "Foolishly impractical in the pursuit of ideals." },
    { w: "Platitude", d: "A banal, trite, or stale remark." },
    { w: "Clairvoyant", d: "Able to perceive things that normal people cannot." },
    { w: "Ephemeral", d: "Short-lived; fleeting." },
    { w: "Panacea", d: "A remedy for all ills or difficulties." },
    { w: "Linchpin", d: "Something that holds separate parts together." },
    { w: "Sophomoric", d: "Immature and uninformed." },
    { w: "Quotidian", d: "Daily; occurring every day." },
    { w: "Schadenfreude", d: "Pleasure derived from another's misfortune." },
    { w: "Erudite", d: "Having or showing great knowledge or learning." }
];

const canvas = document.getElementById('wheelCanvas');
const ctx = canvas.getContext('2d');
let currentRotation = 0;

function drawWheel() {
    const slice = 360 / cousins.length;
    for (let i = 0; i < cousins.length; i++) {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(250, 250);
        ctx.fillStyle = i % 2 === 0 ? "#1a1a1a" : "#d4af37";
        
        // Offset by -90 so the first slice (Jaya) is AT THE TOP
        const startAngle = (i * slice - 90 - (slice/2)) * Math.PI / 180;
        const endAngle = ((i + 1) * slice - 90 - (slice/2)) * Math.PI / 180;
        
        ctx.arc(250, 250, 240, startAngle, endAngle);
        ctx.fill();
        
        ctx.translate(250, 250);
        ctx.rotate(startAngle + (slice / 2) * Math.PI / 180);
        ctx.fillStyle = i % 2 === 0 ? "white" : "black";
        ctx.font = "bold 22px Poppins";
        ctx.textAlign = "right";
        ctx.fillText(cousins[i], 220, 10);
        ctx.restore();
    }
}

document.getElementById('spin-button').onclick = function() {
    this.disabled = true;
    const spins = 1800 + Math.floor(Math.random() * 360);
    currentRotation += spins;
    canvas.style.transform = `rotate(${currentRotation}deg)`;
    
    setTimeout(() => {
        const sliceSize = 360 / cousins.length;
        // Logic: Calculate how many slices we rotated away from the top
        const netRotation = currentRotation % 360;
        const landingIndex = Math.floor((360 - netRotation) / sliceSize) % cousins.length;
        
        const winner = cousins[landingIndex];
        startQuiz(winner);
        this.disabled = false;
    }, 5100);
};

function startQuiz(winner) {
    const item = vocabData[Math.floor(Math.random() * vocabData.length)];
    document.getElementById('player-tag').innerText = `${winner}'s Question`;
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
                scores[winner] += 10;
            } else {
                this.classList.add('wrong-glow');
                allBtns.forEach(btn => { if(btn.innerText === item.d) btn.classList.add('correct-glow'); });
            }
            setTimeout(() => {
                updateLeaderboard();
                document.getElementById('quiz-overlay').classList.add('hidden');
            }, 2500);
        };
        grid.appendChild(b);
    });
    document.getElementById('quiz-overlay').classList.remove('hidden');
}

function updateLeaderboard() {
    const list = document.getElementById('score-list');
    list.innerHTML = Object.entries(scores)
        .sort((a,b) => b[1] - a[1])
        .map(([name, score]) => `<div class="score-item"><span>${name}</span><span>${score} pts</span></div>`)
        .join('');
}

drawWheel();
updateLeaderboard();
