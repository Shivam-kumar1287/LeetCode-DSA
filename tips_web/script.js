// Syllabus Topics configuration
const TOPICS_CONFIG = {
    "Array": "Arrays & Sliding Window",
    "BinarySearch": "Binary Search",
    "Sorting": "Sorting Algorithms",
    "String": "Strings & Advanced String Algorithms",
    "Backtracking": "Recursion & Backtracking",
    "OOPS": "OOPS",
    "LinkedList": "Linked List",
    "StackQueue": "Stacks & Queues",
    "BinaryTree": "Binary Trees & BST",
    "HashMap": "Hash Maps & Sets",
    "Heap": "Priority Queue (Heaps)",
    "DP": "Dynamic Programming (1D, 2D, Trees)",
    "Greedy": "Greedy Algorithms",
    "BitManipulation": "Bit-masking",
    "Math": "Number Theory & Maths",
    "Graph": "Graphs (Undirected, Directed, MST, Shortest Paths)",
    "Trie": "Tries"
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
                    heading: "Tips Under Construction",
                    items: [
                        "General study tips and Java code snippets for this section are currently being compiled.",
                        "Check back soon for standard patterns and complexity analysis!"
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

// Render MCQs
function renderMCQs(data) {
    const questions = (data && data.mcqs) ? data.mcqs[currentDifficulty] : [];

    if (!questions || questions.length === 0) {
        contentBody.innerHTML = `
            <div class="mcq-empty-state animate-fade-in">
                <h3>Questions Coming Soon</h3>
                <p>Multiple Choice Questions for the <strong>${currentDifficulty.toUpperCase()}</strong> difficulty in <strong>${data.title}</strong> will be added in the next project batch.</p>
            </div>
        `;
        return;
    }

    let html = '<div class="mcq-list animate-fade-in">';

    questions.forEach((qObj, qIdx) => {
        // Retrieve any saved answers
        const savedAnswer = (userAnswers[currentTopicKey] && 
                             userAnswers[currentTopicKey][currentDifficulty])
                            ? userAnswers[currentTopicKey][currentDifficulty][qIdx]
                            : null;

        let optionsHtml = '';
        qObj.options.forEach((opt, optIdx) => {
            let extraClass = '';
            if (savedAnswer) {
                extraClass = ' disabled';
                if (optIdx === qObj.answer) {
                    extraClass += ' correct';
                } else if (optIdx === savedAnswer.selected) {
                    extraClass += ' incorrect';
                }
            }
            optionsHtml += `
                <button class="mcq-option${extraClass}" onclick="handleOptionClick(event, ${qIdx}, ${optIdx})">
                    ${opt}
                </button>
            `;
        });

        let explanationHtml = '';
        if (savedAnswer) {
            const isCorrect = savedAnswer.correct;
            explanationHtml = `
                <div class="mcq-explanation ${isCorrect ? 'correct-explanation' : 'incorrect-explanation'}">
                    <strong>${isCorrect ? 'Correct!' : 'Incorrect.'}</strong> ${qObj.explanation}
                </div>
            `;
        }

        html += `
            <div class="mcq-card" data-index="${qIdx}">
                <div class="mcq-question">${qIdx + 1}. ${qObj.q}</div>
                <div class="mcq-options">
                    ${optionsHtml}
                </div>
                ${explanationHtml}
            </div>
        `;
    });

    html += '</div>';
    contentBody.innerHTML = html;
}

// Handle Option Selection
window.handleOptionClick = function(event, qIdx, optIdx) {
    const btn = event.currentTarget;
    const card = btn.closest('.mcq-card');
    
    const topicData = window.TopicsData[currentTopicKey];
    if (!topicData || !topicData.mcqs) return;

    const questions = topicData.mcqs[currentDifficulty];
    const qObj = questions[qIdx];

    // Double check if already answered
    if (userAnswers[currentTopicKey] && 
        userAnswers[currentTopicKey][currentDifficulty] && 
        userAnswers[currentTopicKey][currentDifficulty][qIdx] !== undefined) {
        return;
    }

    // Save answer state
    if (!userAnswers[currentTopicKey]) userAnswers[currentTopicKey] = {};
    if (!userAnswers[currentTopicKey][currentDifficulty]) userAnswers[currentTopicKey][currentDifficulty] = {};

    const isCorrect = (optIdx === qObj.answer);
    userAnswers[currentTopicKey][currentDifficulty][qIdx] = {
        selected: optIdx,
        correct: isCorrect
    };

    // Apply styles to options
    const optionButtons = card.querySelectorAll('.mcq-option');
    optionButtons.forEach((button, idx) => {
        button.classList.add('disabled');
        if (idx === qObj.answer) {
            button.classList.add('correct');
        } else if (idx === optIdx) {
            button.classList.add('incorrect');
        }
    });

    // Create and insert explanation
    const explanationDiv = document.createElement('div');
    explanationDiv.className = `mcq-explanation ${isCorrect ? 'correct-explanation' : 'incorrect-explanation'}`;
    explanationDiv.innerHTML = `<strong>${isCorrect ? 'Correct!' : 'Incorrect.'}</strong> ${qObj.explanation}`;
    card.appendChild(explanationDiv);

    // Update Score
    updateScoreDisplay();
};

// Update Score Element
function updateScoreDisplay() {
    const topicData = window.TopicsData[currentTopicKey];
    const questions = (topicData && topicData.mcqs) ? topicData.mcqs[currentDifficulty] : [];
    const total = questions.length;

    let score = 0;
    if (userAnswers[currentTopicKey] && userAnswers[currentTopicKey][currentDifficulty]) {
        Object.keys(userAnswers[currentTopicKey][currentDifficulty]).forEach(qIdx => {
            if (userAnswers[currentTopicKey][currentDifficulty][qIdx].correct) {
                score++;
            }
        });
    }

    scoreVal.textContent = score;
    totalVal.textContent = total;
}
