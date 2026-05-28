// Syllabus Topics configuration for NALR
const TOPICS_CONFIG = {
    "Algebra": "Algebra Tricks",
    "Geometry": "Geometry & Mensuration",
    "Logarithm": "Logarithms",
    "SpeedDistance": "Time, Speed & Distance",
    "Train": "Train Problems",
    "InputOutput": "Input-Output",
    "Inequality": "Test of Inequality",
    "Puzzles": "Puzzles (All Forms)",
    "PermutationCombination": "Permutation & Combination"
};

// Global App State
let currentTopicKey = null;
let currentMode = 'tips'; // 'tips' or 'mcq'
let currentDifficulty = 'easy'; // 'easy', 'medium', 'hard'
const loadedScripts = {};
const userAnswers = {}; // Format: { topicKey: { difficulty: { qIndex: { selected: X, correct: true/false } } } }

// DOM Elements
const topicList = document.getElementById('topic-list');
const topicTitle = document.getElementById('topic-title');
const contentBody = document.getElementById('content-body');
const modeSelector = document.getElementById('mode-selector');
const btnTips = document.getElementById('btn-tips');
const btnMcq = document.getElementById('btn-mcq');
const mcqFilter = document.getElementById('mcq-filter');

const filterEasy = document.getElementById('filter-easy');
const filterMedium = document.getElementById('filter-medium');
const filterHard = document.getElementById('filter-hard');

const badgeEasy = document.getElementById('badge-easy');
const badgeMedium = document.getElementById('badge-medium');
const badgeHard = document.getElementById('badge-hard');

const scoreVal = document.getElementById('score-val');
const totalVal = document.getElementById('total-val');

// Initialize Sidebar Topics
Object.keys(TOPICS_CONFIG).forEach(topicKey => {
    const li = document.createElement('li');
    li.textContent = TOPICS_CONFIG[topicKey];
    li.className = 'topic-item';
    li.onclick = () => selectTopic(topicKey, li);
    topicList.appendChild(li);
});

// Setup Mode Event Listeners
btnTips.addEventListener('click', () => setMode('tips'));
btnMcq.addEventListener('click', () => setMode('mcq'));

// Setup Difficulty Event Listeners
filterEasy.addEventListener('click', () => setDifficulty('easy'));
filterMedium.addEventListener('click', () => setDifficulty('medium'));
filterHard.addEventListener('click', () => setDifficulty('hard'));

// Function to handle topic selection
function selectTopic(topicKey, element) {
    // Update active sidebar style
    document.querySelectorAll('.topic-item').forEach(el => el.classList.remove('active'));
    element.classList.add('active');

    currentTopicKey = topicKey;
    
    // Show loading indicator
    contentBody.innerHTML = `
        <div class="placeholder-text animate-fade-in">
            <p>Loading topic content...</p>
        </div>
    `;

    // Load data script dynamically
    loadTopicData(topicKey, () => {
        const data = window.TopicsData[topicKey];
        topicTitle.textContent = data.title;

        // Show configuration controls
        modeSelector.classList.remove('hidden');
        
        // Render view
        renderCurrentState();
    });
}

// Dynamic script loader for local environments
function loadTopicData(topicKey, callback) {
    if (loadedScripts[topicKey]) {
        callback();
        return;
    }

    const script = document.createElement('script');
    script.src = `data/${topicKey}.js`;
    script.onload = () => {
        loadedScripts[topicKey] = true;
        callback();
    };
    script.onerror = () => {
        console.error(`Failed to load data for: ${topicKey}`);
        // Inject a fallback structure so UI doesn't break
        window.TopicsData = window.TopicsData || {};
        window.TopicsData[topicKey] = {
            title: TOPICS_CONFIG[topicKey],
            sections: [
                {
                    heading: "Topic Tips Under Construction",
                    items: [
                        "General study tips and shortcut formulas for this section are currently being compiled.",
                        "Check back soon for comprehensive rules and shortcut cheat sheets!"
                    ]
                }
            ],
            mcqs: { easy: [], medium: [], hard: [] }
        };
        loadedScripts[topicKey] = true;
        callback();
    };
    document.head.appendChild(script);
}

// Update Mode ('tips' or 'mcq')
function setMode(mode) {
    if (currentMode === mode) return;
    currentMode = mode;

    // Toggle active button style
    if (mode === 'tips') {
        btnTips.classList.add('active');
        btnMcq.classList.remove('active');
    } else {
        btnTips.classList.remove('active');
        btnMcq.classList.add('active');
    }

    renderCurrentState();
}

// Update Difficulty Filter
function setDifficulty(difficulty) {
    if (currentDifficulty === difficulty) return;
    currentDifficulty = difficulty;

    // Toggle active filter button style
    [filterEasy, filterMedium, filterHard].forEach(btn => btn.classList.remove('active'));
    document.getElementById(`filter-${difficulty}`).classList.add('active');

    renderCurrentState();
}

// Orchestrate Rendering
function renderCurrentState() {
    if (!currentTopicKey) return;

    const data = window.TopicsData[currentTopicKey];
    if (!data) return;

    if (currentMode === 'tips') {
        mcqFilter.classList.add('hidden');
        renderTips(data);
    } else {
        mcqFilter.classList.remove('hidden');
        
        // Update MCQ badges counters
        const easyCount = data.mcqs && data.mcqs.easy ? data.mcqs.easy.length : 0;
        const mediumCount = data.mcqs && data.mcqs.medium ? data.mcqs.medium.length : 0;
        const hardCount = data.mcqs && data.mcqs.hard ? data.mcqs.hard.length : 0;

        badgeEasy.textContent = easyCount;
        badgeMedium.textContent = mediumCount;
        badgeHard.textContent = hardCount;

        updateScoreDisplay();
        renderMCQs(data);
    }
}

// Render Theory Tips
function renderTips(data) {
    let contentHtml = '';
    data.sections.forEach(section => {
        contentHtml += `
            <div class="tips-section animate-fade-in">
                <h3>${section.heading}</h3>
                <ul class="tips-list">
                    ${section.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `;
    });
    contentBody.innerHTML = contentHtml;
}

// Render MCQs for the selected difficulty
function renderMCQs(data) {
    const list = data.mcqs ? data.mcqs[currentDifficulty] : [];
    
    if (!list || list.length === 0) {
        contentBody.innerHTML = `
            <div class="mcq-empty-state animate-fade-in">
                <h3>No Questions Available</h3>
                <p>We are currently writing practice questions for this difficulty level. Check back soon!</p>
            </div>
        `;
        return;
    }

    let mcqHtml = '<div class="mcqs-container animate-fade-in">';
    list.forEach((mcq, index) => {
        const saved = getSavedAnswer(currentTopicKey, currentDifficulty, index);
        const hasAnswered = saved !== null;

        mcqHtml += `
            <div class="mcq-card" id="mcq-card-${index}">
                <div class="mcq-question">Q${index + 1}: ${mcq.q}</div>
                <div class="mcq-options">
                    ${mcq.options.map((opt, optIndex) => {
                        let optClass = 'mcq-option';
                        if (hasAnswered) {
                            optClass += ' disabled';
                            if (optIndex === mcq.answer) {
                                optClass += ' correct';
                            } else if (optIndex === saved.selected && !saved.correct) {
                                optClass += ' incorrect';
                            }
                        }
                        return `
                            <button class="${optClass}" 
                                    onclick="submitAnswer('${currentTopicKey}', '${currentDifficulty}', ${index}, ${optIndex}, ${mcq.answer})"
                                    ${hasAnswered ? 'disabled' : ''}>
                                ${String.fromCharCode(65 + optIndex)}. ${opt}
                            </button>
                        `;
                    }).join('')}
                </div>
                ${hasAnswered ? `
                    <div class="mcq-explanation ${saved.correct ? 'correct-explanation' : 'incorrect-explanation'}">
                        <strong>${saved.correct ? 'Correct!' : 'Incorrect.'} Explanation:</strong> ${mcq.explanation}
                    </div>
                ` : ''}
            </div>
        `;
    });
    mcqHtml += '</div>';
    contentBody.innerHTML = mcqHtml;
}

// Handle option click selection
function submitAnswer(topicKey, difficulty, qIndex, selectedIndex, correctIndex) {
    if (!userAnswers[topicKey]) userAnswers[topicKey] = {};
    if (!userAnswers[topicKey][difficulty]) userAnswers[topicKey][difficulty] = {};
    
    const isCorrect = selectedIndex === correctIndex;
    userAnswers[topicKey][difficulty][qIndex] = {
        selected: selectedIndex,
        correct: isCorrect
    };

    // Update display instantly
    updateScoreDisplay();
    
    // Re-render only the MCQ cards to reflect chosen option status
    const data = window.TopicsData[topicKey];
    renderMCQs(data);
}

// Helper to get saved answer for active state persistence
function getSavedAnswer(topicKey, difficulty, qIndex) {
    if (userAnswers[topicKey] && userAnswers[topicKey][difficulty] && userAnswers[topicKey][difficulty][qIndex]) {
        return userAnswers[topicKey][difficulty][qIndex];
    }
    return null;
}

// Calculate and show current score details
function updateScoreDisplay() {
    if (!currentTopicKey) return;
    
    const data = window.TopicsData[currentTopicKey];
    const totalQuestions = data && data.mcqs && data.mcqs[currentDifficulty] ? data.mcqs[currentDifficulty].length : 0;
    
    let correctCount = 0;
    if (userAnswers[currentTopicKey] && userAnswers[currentTopicKey][currentDifficulty]) {
        Object.keys(userAnswers[currentTopicKey][currentDifficulty]).forEach(qIndex => {
            if (userAnswers[currentTopicKey][currentDifficulty][qIndex].correct) {
                correctCount++;
            }
        });
    }

    scoreVal.textContent = correctCount;
    totalVal.textContent = totalQuestions;
}
