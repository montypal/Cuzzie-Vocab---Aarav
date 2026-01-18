:root {
    --gold: #d4af37;
    --dark: #1a1a1a;
    --correct: #27ae60;
    --wrong: #c0392b;
}

body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background: #f8f9fa;
    color: var(--dark);
}

.app-container {
    display: flex;
    max-width: 1300px;
    margin: 0 auto;
    padding: 20px;
    gap: 40px;
}

.leaderboard {
    width: 280px;
    background: var(--dark);
    color: white;
    padding: 25px;
    border-radius: 20px;
    box-shadow: 0 15px 35px rgba(0,0,0,0.2);
}

.score-item {
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
    border-bottom: 1px solid #333;
    font-size: 1.2rem;
}

.game-area { flex-grow: 1; text-align: center; }

h1 { font-family: 'Playfair Display', serif; font-size: 3.5rem; margin-bottom: 5px; }

.wheel-box { position: relative; display: inline-block; margin-top: 20px; }

#wheel-pointer {
    position: absolute;
    top: -10px; left: 50%; transform: translateX(-50%);
    width: 0; height: 0; 
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    border-top: 45px solid #ff4757;
    z-index: 100;
}

#spin-button {
    display: block;
    margin: 25px auto;
    padding: 20px 60px;
    font-size: 1.2rem;
    font-weight: 600;
    background: var(--dark);
    color: white;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: 0.2s;
}

#spin-button:hover { background: #444; transform: scale(1.05); }

.hidden { display: none !important; }

#quiz-overlay {
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0,0,0,0.95);
    display: flex; align-items: center; justify-content: center;
    z-index: 1000;
}

.quiz-card {
    background: white;
    padding: 50px;
    border-radius: 30px;
    width: 90%;
    max-width: 750px;
    text-align: center;
}

.word-display {
    font-size: 4rem;
    font-family: 'Playfair Display', serif;
    margin: 20px 0;
    color: var(--dark);
}

.option-btn {
    width: 100%;
    padding: 22px;
    margin: 10px 0;
    border: 2px solid #ddd;
    background: #fff;
    border-radius: 15px;
    cursor: pointer;
    font-size: 1.1rem;
    transition: 0.3s;
}

.option-btn.correct-glow { background-color: var(--correct) !important; color: white; }
.option-btn.wrong-glow { background-color: var(--wrong) !important; color: white; }
