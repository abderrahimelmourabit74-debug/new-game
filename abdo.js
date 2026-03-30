const questions = {
    math: {
        easy: [
            {q:"5 + 7 = ?", answers:["10","12","14"], correct:1},
            {q:"9 × 3 = ?", answers:["27","21","24"], correct:0},
            {q:"15 ÷ 3 = ?", answers:["4","5","6"], correct:1},
            {q:"20 - 8 = ?", answers:["10","11","12"], correct:2},
            {q:"7² = ?", answers:["49","42","36"], correct:0},
            {q:"100 ÷ 10 = ?", answers:["5","10","20"], correct:1},
            {q:"8 × 6 = ?", answers:["42","48","52"], correct:1},
            {q:"11 + 9 = ?", answers:["20","19","18"], correct:0},
            {q:"25 ÷ 5 = ?", answers:["4","6","5"], correct:2},
            {q:"12 × 4 = ?", answers:["48","44","52"], correct:0}
        ],
        medium: [
            {q:"√16 = ?", answers:["3","4","5"], correct:1},
            {q:"81 ÷ 9 = ?", answers:["7","8","9"], correct:2},
            {q:"13 + 8 = ?", answers:["20","21","22"], correct:1},
            {q:"64 ÷ 8 = ?", answers:["6","7","8"], correct:2},
            {q:"3³ = ?", answers:["9","18","27"], correct:2},
            {q:"What is 15% of 200?", answers:["20","25","30"], correct:2},
            {q:"What is 6 × 7?", answers:["40","42","44"], correct:1},
            {q:"What is 144 ÷ 12?", answers:["10","11","12"], correct:2},
            {q:"What is 9 + 14?", answers:["21","22","23"], correct:2},
            {q:"What is 18 - 7?", answers:["9","10","11"], correct:2}
        ],
        hard: [
            {q:"What is the square root of 144?", answers:["10","11","12"], correct:2},
            {q:"What is 15²?", answers:["200","215","225"], correct:2},
            {q:"What is 7!", answers:["5040","720","40320"], correct:0},
            {q:"What is the value of π to two decimals?", answers:["3.12","3.14","3.16"], correct:1},
            {q:"What is the smallest prime number?", answers:["0","1","2"], correct:2},
            {q:"What is 2⁶?", answers:["32","64","128"], correct:1},
            {q:"What is 1/4 + 1/2?", answers:["1/4","1/2","3/4"], correct:2},
            {q:"What is the square root of 225?", answers:["13","14","15"], correct:2},
            {q:"What is 0.75 as a fraction?", answers:["3/4","1/2","2/3"], correct:0},
            {q:"What is 20% of 500?", answers:["50","100","150"], correct:1}
        ]
    },
    physics: {
        easy: [
            {q:"Unit of force?", answers:["Joule","Newton","Watt"], correct:1},
            {q:"Is light faster than sound?", answers:["True","False","Sometimes"], correct:0},
            {q:"Sound does not travel in?", answers:["Air","Vacuum","Water"], correct:1},
            {q:"Current is measured in?", answers:["Volt","Ampere","Watt"], correct:1},
            {q:"Magnet attracts?", answers:["Wood","Iron","Plastic"], correct:1},
            {q:"Is the Earth spherical?", answers:["Yes","No","Unknown"], correct:0},
            {q:"Speed = ?", answers:["Time ÷ Distance","Distance ÷ Time","Mass × Time"], correct:1},
            {q:"Heat is a type of?", answers:["Energy","Matter","Sound"], correct:0},
            {q:"Electron charge is?", answers:["Positive","Negative","Neutral"], correct:1},
            {q:"What is frequency measured in?", answers:["Hertz","Decibel","Watt"], correct:0}
        ],
        medium: [
            {q:"Who formulated the gravity law?", answers:["Newton","Einstein","Galileo"], correct:0},
            {q:"Unit of energy?", answers:["Joule","Meter","Second"], correct:0},
            {q:"What is acceleration due to gravity?", answers:["9.8 m/s²","10 m/s²","8.9 m/s²"], correct:0},
            {q:"Who discovered radioactivity?", answers:["Curie","Becquerel","Rutherford"], correct:1},
            {q:"What is the speed of light?", answers:["3×10⁸ m/s","3×10⁶ m/s","3×10⁵ m/s"], correct:0},
            {q:"What is Ohm's law?", answers:["V=IR","P=IV","F=ma"], correct:0},
            {q:"What type of energy is stored in a battery?", answers:["Kinetic","Chemical","Thermal"], correct:1},
            {q:"What is the SI unit of power?", answers:["Joule","Watt","Newton"], correct:1},
            {q:"What is freezing point of water in Kelvin?", answers:["273K","373K","0K"], correct:0},
            {q:"What is the primary color of light?", answers:["RGB","CMYK","RYB"], correct:0}
        ],
        hard: [
            {q:"What is Heisenberg's Uncertainty Principle?", answers:["Position and momentum","Energy and time","Both"], correct:2},
            {q:"What is the photoelectric effect?", answers:["Light emission","Electron emission","Heat emission"], correct:1},
            {q:"Who proposed the theory of relativity?", answers:["Newton","Einstein","Planck"], correct:1},
            {q:"What is Planck's constant?", answers:["6.626×10⁻³⁴","3×10⁸","9.8"], correct:0},
            {q:"What is quantum entanglement?", answers:["Particles linked","Particles separate","Particles collide"], correct:0},
            {q:"What is the Higgs boson?", answers:["Mass particle","Energy particle","Light particle"], correct:0},
            {q:"What is the unit of magnetic field?", answers:["Tesla","Gauss","Both"], correct:2},
            {q:"What is nuclear fission?", answers:["Splitting atoms","Combining atoms","Burning atoms"], correct:0},
            {q:"What is entropy?", answers:["Disorder","Order","Energy"], correct:0},
            {q:"What is superconductivity?", answers:["Zero resistance","Infinite resistance","High resistance"], correct:0}
        ]
    },
    geography: {
        easy: [
            {q:"Capital of France?", answers:["Paris","Madrid","Rome"], correct:0},
            {q:"Largest continent?", answers:["Africa","Asia","Europe"], correct:1},
            {q:"Nile river is in?", answers:["Egypt","China","India"], correct:0},
            {q:"Largest ocean?", answers:["Indian","Atlantic","Pacific"], correct:2},
            {q:"Number of continents?", answers:["5","6","7"], correct:2},
            {q:"Capital of Japan?", answers:["Seoul","Beijing","Tokyo"], correct:2},
            {q:"Sahara desert is in?", answers:["Asia","Africa","America"], correct:1},
            {q:"Smallest continent?", answers:["Europe","Australia","Antarctica"], correct:1},
            {q:"Capital of Brazil?", answers:["Rio","Brasília","São Paulo"], correct:1},
            {q:"Which desert is largest?", answers:["Sahara","Gobi","Kalahari"], correct:0}
        ],
        medium: [
            {q:"Tallest mountain?", answers:["Everest","Alps","Andes"], correct:0},
            {q:"Red Sea is between?", answers:["Egypt and Saudi Arabia","France and Germany","India and China"], correct:0},
            {q:"Largest country by area?", answers:["USA","Russia","China"], correct:1},
            {q:"Longest river in the world?", answers:["Nile","Amazon","Yangtze"], correct:0},
            {q:"Deepest ocean point?", answers:["Mariana Trench","Java Trench","Puerto Rico Trench"], correct:0},
            {q:"Capital of Canada?", answers:["Toronto","Vancouver","Ottawa"], correct:2},
            {q:"Longest mountain range?", answers:["Himalayas","Andes","Rockies"], correct:1},
            {q:"Largest desert in the world?", answers:["Sahara","Antarctic","Arabian"], correct:1},
            {q:"Capital of Australia?", answers:["Sydney","Melbourne","Canberra"], correct:2},
            {q:"Which country has the most natural lakes?", answers:["USA","Russia","Canada"], correct:2}
        ],
        hard: [
            {q:"Capital of Kyrgyzstan?", answers:["Astana","Bishkek","Tashkent"], correct:1},
            {q:"What is the smallest country in the world?", answers:["Monaco","Vatican City","San Marino"], correct:1},
            {q:"What is the deepest lake in the world?", answers:["Lake Superior","Lake Baikal","Lake Tanganyika"], correct:1},
            {q:"Which country has the most time zones?", answers:["USA","Russia","France"], correct:2},
            {q:"What is the driest place on Earth?", answers:["Sahara","Atacama","Gobi"], correct:1},
            {q:"Which river flows through the Grand Canyon?", answers:["Mississippi","Colorado","Columbia"], correct:1},
            {q:"What is the highest waterfall in the world?", answers:["Niagara","Angel Falls","Victoria Falls"], correct:1},
            {q:"Which country is known as the Land of the Rising Sun?", answers:["China","Korea","Japan"], correct:2},
            {q:"What is the largest island in the world?", answers:["Australia","Greenland","Madagascar"], correct:1},
            {q:"Which European country has the most volcanoes?", answers:["Italy","Iceland","Greece"], correct:1}
        ]
    },
    science: {
        easy: [
            {q:"H2O is?", answers:["Water","Oxygen","Salt"], correct:0},
            {q:"The Sun is?", answers:["Planet","Star","Moon"], correct:1},
            {q:"Humans breathe?", answers:["CO2","O2","H2"], correct:1},
            {q:"Number of planets?", answers:["7","8","9"], correct:1},
            {q:"Plants make food through?", answers:["Respiration","Photosynthesis","Evaporation"], correct:1},
            {q:"Is iron an element?", answers:["Yes","No","Liquid"], correct:0},
            {q:"Boiling point of water?", answers:["100","90","80"], correct:0},
            {q:"Earth revolves around?", answers:["Moon","Sun","Mars"], correct:1},
            {q:"Is gold a metal?", answers:["Yes","No","Gas"], correct:0},
            {q:"Blood color in humans?", answers:["Red","Blue","Green"], correct:0}
        ],
        medium: [
            {q:"Smallest unit of life?", answers:["Cell","Atom","Molecule"], correct:0},
            {q:"What is DNA?", answers:["Protein","Genetic material","Sugar"], correct:1},
            {q:"Largest organ in human?", answers:["Heart","Liver","Skin"], correct:2},
            {q:"What is photosynthesis?", answers:["Food making","Breathing","Sleeping"], correct:0},
            {q:"How many bones in adult?", answers:["206","300","150"], correct:0},
            {q:"What is the hardest substance in the body?", answers:["Bone","Enamel","Cartilage"], correct:1},
            {q:"What is the largest planet?", answers:["Saturn","Jupiter","Mars"], correct:1},
            {q:"What is the closest star to Earth?", answers:["Proxima Centauri","Alpha Centauri","Sun"], correct:2},
            {q:"What is the chemical symbol for sodium?", answers:["So","Na","S"], correct:1},
            {q:"What gas do plants absorb?", answers:["Oxygen","Carbon Dioxide","Nitrogen"], correct:1}
        ],
        hard: [
            {q:"What is the rarest blood type?", answers:["O+","AB-","A-"], correct:1},
            {q:"What is the longest bone in the human body?", answers:["Femur","Tibia","Fibula"], correct:0},
            {q:"What is the powerhouse of the cell?", answers:["Nucleus","Mitochondria","Ribosome"], correct:1},
            {q:"What is the pH of pure water?", answers:["5","7","9"], correct:1},
            {q:"What is the hardest natural substance?", answers:["Iron","Diamond","Titanium"], correct:1},
            {q:"What is the smallest particle of an element?", answers:["Atom","Molecule","Proton"], correct:0},
            {q:"What is the main gas in Earth's atmosphere?", answers:["Oxygen","Nitrogen","Carbon Dioxide"], correct:1},
            {q:"What is the fastest-growing plant?", answers:["Bamboo","Grass","Wheat"], correct:0},
            {q:"What is the largest living structure on Earth?", answers:["Amazon Rainforest","Great Barrier Reef","Himalayas"], correct:1},
            {q:"What is the most abundant element in the universe?", answers:["Oxygen","Carbon","Hydrogen"], correct:2}
        ]
    },
    history: {
        easy: [
            {q:"Who built the pyramids?", answers:["Romans","Pharaohs","Greeks"], correct:1},
            {q:"World War II ended in?", answers:["1945","1939","1918"], correct:0},
            {q:"First man on the moon?", answers:["Neil Armstrong","Einstein","Newton"], correct:0},
            {q:"America was discovered in?", answers:["1492","1500","1400"], correct:0},
            {q:"French revolution year?", answers:["1789","1800","1750"], correct:0},
            {q:"Who was the first US president?", answers:["Washington","Lincoln","Jefferson"], correct:0},
            {q:"Quran was revealed in?", answers:["Mecca","Medina","Jerusalem"], correct:0},
            {q:"Ancient Egyptian writing?", answers:["Hieroglyphs","Cuneiform","Alphabet"], correct:0},
            {q:"Who discovered America?", answers:["Columbus","Vespucci","Magellan"], correct:0},
            {q:"First emperor of China?", answers:["Qin Shi Huang","Mao","Sun Yat-sen"], correct:0}
        ],
        medium: [
            {q:"Saladin was?", answers:["Muslim leader","Roman king","Philosopher"], correct:0},
            {q:"Ottoman Empire was?", answers:["Only European","Islamic","Chinese"], correct:1},
            {q:"First civilization?", answers:["Sumerian","Roman","Japanese"], correct:0},
            {q:"Alexander the Great was?", answers:["Greek","Egyptian","French"], correct:0},
            {q:"When was Berlin Wall fell?", answers:["1989","1991","1985"], correct:0},
            {q:"Who wrote the Declaration of Independence?", answers:["Jefferson","Washington","Adams"], correct:0},
            {q:"Who was Cleopatra?", answers:["Egyptian Queen","Roman Empress","Greek Goddess"], correct:0},
            {q:"What was the Renaissance?", answers:["Cultural movement","War","Disease"], correct:0},
            {q:"Who was Joan of Arc?", answers:["French heroine","English queen","Spanish explorer"], correct:0},
            {q:"What year did WWI start?", answers:["1912","1914","1916"], correct:1}
        ],
        hard: [
            {q:"Who was the last emperor of China?", answers:["Puyi","Mao","Sun Yat-sen"], correct:0},
            {q:"What was the name of the first successful English colony in America?", answers:["Plymouth","Jamestown","Roanoke"], correct:1},
            {q:"Who painted the Sistine Chapel ceiling?", answers:["Da Vinci","Michelangelo","Raphael"], correct:1},
            {q:"What was the Magna Carta?", answers:["Charter of rights","Peace treaty","Constitution"], correct:0},
            {q:"Who was the first woman Prime Minister of the UK?", answers:["Margaret Thatcher","Theresa May","Elizabeth I"], correct:0},
            {q:"What year did the Russian Revolution occur?", answers:["1915","1917","1919"], correct:1},
            {q:"Who was Genghis Khan?", answers:["Mongol leader","Chinese emperor","Japanese shogun"], correct:0},
            {q:"What was the Cold War?", answers:["Tension between US and USSR","Actual war","Trade war"], correct:0},
            {q:"Who discovered penicillin?", answers:["Fleming","Curie","Pasteur"], correct:0},
            {q:"What year did India gain independence?", answers:["1945","1947","1949"], correct:1}
        ]
    }
};

let currentCategory;
let currentDifficultyLevel;
let easyQuestions = [];
let mediumQuestions = [];
let hardQuestions = [];
let currentQuestionsList = [];
let score = 0;
let timer;
let timeLeft = 10;
let canAnswer = true;
let totalQuestionsPlayed = 0;
const MIN_QUESTIONS = 30;
const ANIMATION_DURATION = 3000;

let audioContext = null;
let soundEnabled = true;

function initAudio() {
    try {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        console.log("✅ Audio System Ready");
        document.addEventListener('click', () => {
            if (audioContext && audioContext.state === 'suspended') {
                audioContext.resume();
            }
        }, { once: true });
    } catch (e) {
        console.log("❌ Audio not supported");
        soundEnabled = false;
    }
}

function playCorrect() {
    if (!soundEnabled || !audioContext) return;
    if (audioContext.state === 'suspended') audioContext.resume().then(() => playCorrectSound());
    else playCorrectSound();
}

function playWrong() {
    if (!soundEnabled || !audioContext) return;
    if (audioContext.state === 'suspended') audioContext.resume().then(() => playWrongSound());
    else playWrongSound();
}

function playTick() {
    if (!soundEnabled || !audioContext) return;
    if (audioContext.state === 'suspended') audioContext.resume().then(() => playTickSound());
    else playTickSound();
}

function playCorrectSound() {
    const now = audioContext.currentTime;
    const freqs = [523.25, 659.25, 783.99];
    freqs.forEach((freq, i) => {
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();
        osc.type = 'sine';
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.3, now + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
        osc.connect(gain);
        gain.connect(audioContext.destination);
        osc.start(now + i * 0.1);
        osc.stop(now + 0.5);
    });
}

function playWrongSound() {
    const now = audioContext.currentTime;
    const osc1 = audioContext.createOscillator();
    const osc2 = audioContext.createOscillator();
    const gain1 = audioContext.createGain();
    const gain2 = audioContext.createGain();
    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(300, now);
    osc1.frequency.exponentialRampToValueAtTime(150, now + 0.5);
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(250, now);
    osc2.frequency.exponentialRampToValueAtTime(120, now + 0.5);
    gain1.gain.setValueAtTime(0.2, now);
    gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
    gain2.gain.setValueAtTime(0.15, now);
    gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
    osc1.connect(gain1);
    osc2.connect(gain2);
    gain1.connect(audioContext.destination);
    gain2.connect(audioContext.destination);
    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.5);
    osc2.stop(now + 0.5);
}

function playTickSound() {
    const now = audioContext.currentTime;
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    osc.type = 'square';
    osc.frequency.value = 800;
    gain.gain.setValueAtTime(0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
    osc.connect(gain);
    gain.connect(audioContext.destination);
    osc.start(now);
    osc.stop(now + 0.1);
}

function addSoundToggle() {
    if (document.querySelector('.sound-toggle')) return;
    const toggle = document.createElement('button');
    toggle.className = 'sound-toggle';
    toggle.innerHTML = '🔊';
    toggle.onclick = toggleSound;
    document.body.appendChild(toggle);
}

function toggleSound() {
    soundEnabled = !soundEnabled;
    const toggle = document.querySelector('.sound-toggle');
    if (toggle) {
        toggle.innerHTML = soundEnabled ? '🔊' : '🔇';
        toggle.classList.toggle('muted', !soundEnabled);
    }
}

function addTestSoundButton() {
    const testBtn = document.createElement('button');
    testBtn.className = 'test-sound-btn';
    testBtn.innerHTML = '🎵 Test Sounds';
    testBtn.onclick = () => {
        playCorrect();
        setTimeout(() => playWrong(), 800);
        setTimeout(() => playTick(), 1600);
    };
    document.body.appendChild(testBtn);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function createExtendedQuestionPool(baseQuestions) {
    const pool = [];
    for (let i = 0; i < Math.ceil(MIN_QUESTIONS / baseQuestions.length); i++) {
        baseQuestions.forEach(q => {
            pool.push({ ...q });
        });
    }
    return shuffleArray(pool.slice(0, MIN_QUESTIONS));
}

function selectDifficulty(category) {
    currentCategory = category;
    
    easyQuestions = createExtendedQuestionPool(questions[category].easy);
    mediumQuestions = createExtendedQuestionPool(questions[category].medium);
    hardQuestions = createExtendedQuestionPool(questions[category].hard);
    
    const container = document.getElementById("gameContainer");
    container.innerHTML = `<h1>Select Difficulty Level</h1>
        <p style="margin-bottom: 20px;">Category: <strong>${category.toUpperCase()}</strong></p>
        <div id="difficultyButtons"></div>
        <button onclick="showCategories()" class="category-btn" style="background:#666; margin-top:20px;">🔙 Back</button>`;
    
    const buttonsContainer = document.getElementById("difficultyButtons");
    const levels = [
        {name: "Easy", value: 1, color: "#00ff00", desc: "Simple questions"},
        {name: "Medium", value: 2, color: "#ff6b35", desc: "Moderate difficulty"},
        {name: "Hard", value: 3, color: "#ff0000", desc: "Challenging questions"}
    ];
    
    levels.forEach(level => {
        const btn = document.createElement("button");
        btn.classList.add("category-btn");
        btn.innerHTML = `${level.name}<span style="display:block; font-size:12px; margin-top:5px;">${level.desc}</span>`;
        btn.style.borderColor = level.color;
        btn.onclick = () => startGame(level.value);
        buttonsContainer.appendChild(btn);
    });
}

function startGame(difficulty) {
    currentDifficultyLevel = difficulty;
    score = 0;
    totalQuestionsPlayed = 0;
    
    if (difficulty === 1) {
        currentQuestionsList = shuffleArray([...easyQuestions]);
    } else if (difficulty === 2) {
        currentQuestionsList = shuffleArray([...mediumQuestions]);
    } else {
        currentQuestionsList = shuffleArray([...hardQuestions]);
    }
    
    loadNextQuestion();
}

function loadNextQuestion() {
    if (timer) clearInterval(timer);
    
    if (totalQuestionsPlayed >= MIN_QUESTIONS) {
        finishGame();
        return;
    }
    
    displayQuestion();
}

function getDifficultyName() {
    if (currentDifficultyLevel === 1) return "Easy";
    if (currentDifficultyLevel === 2) return "Medium";
    return "Hard";
}

function getDifficultyColor() {
    if (currentDifficultyLevel === 1) return "#00ff00";
    if (currentDifficultyLevel === 2) return "#ff6b35";
    return "#ff0000";
}

function displayQuestion() {
    canAnswer = true;
    timeLeft = 10;
    const question = currentQuestionsList[totalQuestionsPlayed];
    const progress = (totalQuestionsPlayed / MIN_QUESTIONS) * 100;
    const difficultyName = getDifficultyName();
    const difficultyColor = getDifficultyColor();
    
    const container = document.getElementById("gameContainer");
    container.innerHTML = `
        <h2>${currentCategory.toUpperCase()} Quiz</h2>
        <div style="margin-bottom: 10px;">
            <span style="background: ${difficultyColor}; padding: 5px 15px; border-radius: 20px; font-size: 14px;">${difficultyName} Mode</span>
        </div>
        <div class="progress-container">
            <div class="progress-bar" style="width: ${progress}%"></div>
        </div>
        <p style="font-size: 20px; margin: 20px 0; font-weight: bold;">${question.q}</p>
        <div id="answers"></div>
        <div id="timerBarContainer">
            <div id="timerBar" style="width: 100%; height: 100%;"></div>
        </div>
        <p id="timerDisplay">⏳ 10 seconds</p>
        <p>Score: ${score} / ${totalQuestionsPlayed}</p>
        <p>Questions Remaining: ${MIN_QUESTIONS - totalQuestionsPlayed}</p>
    `;
    
    const answersDiv = document.getElementById("answers");
    question.answers.forEach((answer, index) => {
        const btn = document.createElement("button");
        btn.innerText = answer;
        btn.classList.add("answer-btn");
        btn.onclick = () => handleAnswer(btn, index);
        answersDiv.appendChild(btn);
    });
    
    startTimer();
}

function startTimer() {
    const timerBar = document.getElementById("timerBar");
    const timerDisplay = document.getElementById("timerDisplay");
    
    timer = setInterval(() => {
        timeLeft--;
        if (timerBar) {
            const percentage = (timeLeft / 10) * 100;
            timerBar.style.width = percentage + "%";
            if (timeLeft <= 3) {
                timerBar.style.background = "#e74a3b";
                if (timeLeft === 3 || timeLeft === 2 || timeLeft === 1) playTick();
            } else if (timeLeft <= 5) {
                timerBar.style.background = "#f6c23e";
            }
        }
        if (timerDisplay) timerDisplay.innerText = `⏳ ${timeLeft} seconds`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            if (canAnswer) handleTimeOut();
        }
    }, 1000);
}

function handleTimeOut() {
    canAnswer = false;
    const question = currentQuestionsList[totalQuestionsPlayed];
    const correctIndex = question.correct;
    const buttons = document.querySelectorAll(".answer-btn");
    buttons.forEach(btn => btn.disabled = true);
    if (buttons[correctIndex]) buttons[correctIndex].classList.add("correct");
    document.getElementById("timerDisplay").innerText = "⏰ Time's up!";
    playWrong();
    createFloatingEmojis(false, 15);
    setTimeout(() => moveToNextQuestion(), ANIMATION_DURATION);
}

function handleAnswer(btn, index) {
    if (!canAnswer) return;
    canAnswer = false;
    clearInterval(timer);
    
    const question = currentQuestionsList[totalQuestionsPlayed];
    const correctIndex = question.correct;
    const buttons = document.querySelectorAll(".answer-btn");
    buttons.forEach(b => b.disabled = true);
    
    if (index === correctIndex) {
        btn.classList.add("correct");
        score++;
        playCorrect();
        createFloatingEmojis(true, 20);
    } else {
        btn.classList.add("wrong");
        if (buttons[correctIndex]) buttons[correctIndex].classList.add("correct");
        playWrong();
        createFloatingEmojis(false, 20);
    }
    
    setTimeout(() => moveToNextQuestion(), ANIMATION_DURATION);
}

function createFloatingEmojis(isCorrect, count = 15) {
    let container = document.querySelector('.effects-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'effects-container';
        document.body.appendChild(container);
    }
    
    const gameCard = document.querySelector('.game-card');
    if (gameCard) {
        gameCard.classList.add(isCorrect ? 'flash-correct' : 'flash-wrong');
        setTimeout(() => gameCard.classList.remove('flash-correct', 'flash-wrong'), 1000);
    }
    
    const correctEmojis = ['😊', '😃', '😄', '🥳', '🎉', '✨', '⭐', '🌟', '💯', '✅', '🎊', '🏆', '👏', '👍', '💪', '🥇'];
    const wrongEmojis = ['😢', '😭', '😞', '💔', '❌', '😤', '👎', '😣', '😓', '💨', '💢', '🤕', '😿'];
    const emojis = isCorrect ? correctEmojis : wrongEmojis;
    
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const emoji = document.createElement('div');
            emoji.className = 'floating-emoji';
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.left = Math.random() * 100 + '%';
            emoji.style.top = (50 + Math.random() * 30) + '%';
            emoji.style.fontSize = (1.5 + Math.random() * 1.5) + 'rem';
            container.appendChild(emoji);
            setTimeout(() => emoji.remove(), 3500);
        }, i * 50);
    }
}

function moveToNextQuestion() {
    totalQuestionsPlayed++;
    if (totalQuestionsPlayed >= MIN_QUESTIONS) {
        finishGame();
    } else {
        loadNextQuestion();
    }
}

function finishGame() {
    clearInterval(timer);
    const percentage = Math.round((score / MIN_QUESTIONS) * 100);
    const storageKey = `${currentCategory}_${getDifficultyName()}`;
    const highScore = localStorage.getItem(storageKey) || 0;
    if (score > highScore) {
        localStorage.setItem(storageKey, score);
    }
    
    const container = document.getElementById("gameContainer");
    container.innerHTML = `
        <h1>🎉 Game Complete!</h1>
        <p style="font-size: 48px; margin: 20px;">${score}/${MIN_QUESTIONS}</p>
        <p>⭐ High Score: ${Math.max(score, highScore)}</p>
        <p>📊 ${percentage}% Correct</p>
        <p>🏆 ${percentage >= 80 ? 'Excellent!' : percentage >= 60 ? 'Good Job!' : 'Keep Practicing!'}</p>
        <button onclick="location.reload()" class="category-btn" style="margin: 10px;">Play Again</button>
        <button onclick="showCategories()" class="category-btn" style="background:#666;">Main Menu</button>
    `;
}

function showCategories() {
    if (timer) clearInterval(timer);
    
    const container = document.getElementById("gameContainer");
    container.innerHTML = `
        <h1>SmartPlay</h1>
        <div id="categorySelection">
            <button class="category-btn" onclick="selectDifficulty('math')">🧮 Mathematics</button>
            <button class="category-btn" onclick="selectDifficulty('physics')">⚛ Physics</button>
            <button class="category-btn" onclick="selectDifficulty('geography')">🌍 Geography</button>
            <button class="category-btn" onclick="selectDifficulty('science')">🧪 Science</button>
            <button class="category-btn" onclick="selectDifficulty('history')">🏛 History</button>
        </div>
    `;
}

function init() {
    initAudio();
    addSoundToggle();
    addTestSoundButton();
    showCategories();
}

init();