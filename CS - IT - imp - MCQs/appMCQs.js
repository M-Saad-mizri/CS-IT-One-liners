// QuickFacts & MCQ Practice Portal - Application Core Logic

document.addEventListener("DOMContentLoaded", () => {
  // --- APPLICATION STATE ---
  let state = {
    activeSubject: "Computer Networking",
    theme: "dark",
    showAllAnswers: false,
    activeMode: "practice", // "practice" | "quiz"
    selectedTopic: "ALL",   // "ALL" | specific topic string
    customSubjects: {},     // { [subjectName]: [ { id, category, question, options, answerIndex, explanation } ] }
    bookmarks: {},          // { [subjectName]: [id1, id2, ...] }
    covered: {},            // { [subjectName]: [id1, id2, ...] }
    checkpoints: {},        // { [subjectName]: id }
    attempts: {},           // { [subjectName]: { [mcqId]: { wrongOptions: [0, 1], isCorrect: boolean } } }
    revealedAnswers: {},    // { [subjectName]: [id1, id2, ...] }
    quizStats: {},          // { [subjectName]: { totalAttempted: number, totalCorrect: number } }
    quizHistory: []         // Array of past quiz attempt objects
  };

  // --- QUIZ TEST SESSION STATE ---
  let quizSession = {
    active: false,
    questions: [],
    currentIndex: 0,
    userAnswers: {}, // { [questionId]: selectedIndex }
    checked: {},     // { [questionId]: boolean }
    timerSeconds: 0,
    timerInterval: null
  };

  // --- LOCAL STORAGE KEY ---
  const STORAGE_KEY = "quickfacts_mcq_state_v3";

  // --- DOM ELEMENTS ---
  const body = document.body;
  const sidebar = document.getElementById("settingsSidebar");
  const sidebarOverlay = document.getElementById("sidebarOverlay");
  const sidebarToggleBtn = document.getElementById("sidebarToggle");
  const sidebarCloseBtn = document.getElementById("sidebarClose");
  const themeToggleTopBtn = document.getElementById("themeToggleTop");
  const darkModeToggle = document.getElementById("darkModeToggle");
  const globalShowAnswersToggle = document.getElementById("globalShowAnswersToggle");

  // Mode Switchers
  const btnModePractice = document.getElementById("btnModePractice");
  const btnModeQuiz = document.getElementById("btnModeQuiz");

  // Hero Stats & Controls
  const currentSubjectBadge = document.getElementById("currentSubjectBadge");
  const progressPercentage = document.getElementById("progressPercentage");
  const progressBarFill = document.getElementById("progressBarFill");
  const progressCount = document.getElementById("progressCount");
  const accuracyStat = document.getElementById("accuracyStat");
  const bookmarkCount = document.getElementById("bookmarkCount");

  const topicsScroll = document.getElementById("topicsScroll");
  const searchActionsBar = document.querySelector(".search-actions-bar");
  const searchInput = document.getElementById("searchInput");
  const searchClear = document.getElementById("searchClear");

  // Filter Chips
  const filterAll = document.getElementById("filterAll");
  const filterBookmarks = document.getElementById("filterBookmarks");
  const filterUncovered = document.getElementById("filterUncovered");
  const filterMistakes = document.getElementById("filterMistakes");

  // Checkpoint Banner
  const checkpointBanner = document.getElementById("checkpointBanner");
  const checkpointNumber = document.getElementById("checkpointNumber");
  const jumpToCheckpointBtn = document.getElementById("jumpToCheckpoint");

  // Containers
  const factsListContainer = document.getElementById("factsList");
  const quizContainer = document.getElementById("quizContainer");

  // Quiz Setup DOM
  const quizSetupCard = document.getElementById("quizSetupCard");
  const quizTopicSelect = document.getElementById("quizTopicSelect");
  const startQuizBtn = document.getElementById("startQuizBtn");

  // Active Quiz DOM
  const quizActiveCard = document.getElementById("quizActiveCard");
  const quizQuestionCounter = document.getElementById("quizQuestionCounter");
  const quizTimer = document.getElementById("quizTimer");
  const quizProgressFill = document.getElementById("quizProgressFill");
  const quizQuestionCategory = document.getElementById("quizQuestionCategory");
  const quizQuestionStatement = document.getElementById("quizQuestionStatement");
  const quizOptionsGrid = document.getElementById("quizOptionsGrid");
  const quizExplanationBox = document.getElementById("quizExplanationBox");
  const quizPrevBtn = document.getElementById("quizPrevBtn");
  const quizCheckBtn = document.getElementById("quizCheckBtn");
  const quizNextBtn = document.getElementById("quizNextBtn");

  // Quiz Modal DOM
  const quizResultsModal = document.getElementById("quizResultsModal");
  const quizModalClose = document.getElementById("quizModalClose");
  const modalScorePercent = document.getElementById("modalScorePercent");
  const modalScoreFraction = document.getElementById("modalScoreFraction");
  const modalCorrectCount = document.getElementById("modalCorrectCount");
  const modalWrongCount = document.getElementById("modalWrongCount");
  const modalTimeSpent = document.getElementById("modalTimeSpent");
  const modalReviewMistakesBtn = document.getElementById("modalReviewMistakesBtn");
  const modalRetakeQuizBtn = document.getElementById("modalRetakeQuizBtn");

  // Sidebar Controls
  const sidebarSubjectList = document.getElementById("sidebarSubjectList");
  const newSubjectNameInput = document.getElementById("newSubjectName");
  const rawFactsPasteInput = document.getElementById("rawFactsPaste");
  const addFactsBtn = document.getElementById("addFactsBtn");
  const resetProgressBtn = document.getElementById("resetProgressBtn");
  const clearAllDataBtn = document.getElementById("clearAllDataBtn");

  // Active Filter Modes
  let searchFilter = "";
  let currentFilter = "all"; // "all" | "bookmarks" | "uncovered" | "mistakes"

  // --- TOPIC COVERAGE HELPER ---
  function isTopicCovered(topic) {
    const allMCQs = getActiveSubjectMCQs();
    const topicMCQs = topic === "ALL" ? allMCQs : allMCQs.filter(m => m.category === topic);
    if (topicMCQs.length === 0) return false;

    // Check if user attempted at least 1 quiz for this topic
    const history = state.quizHistory || [];
    const hasQuizAttempt = history.some(h => 
      h.subject === state.activeSubject && (h.category === topic || h.category === "ALL")
    );
    if (hasQuizAttempt) return true;

    // Or check if all MCQs in this topic are covered in practice mode
    const coveredList = state.covered[state.activeSubject] || [];
    return topicMCQs.every(m => coveredList.includes(m.id));
  }

  function getTopicProgress(topic) {
    const allMCQs = getActiveSubjectMCQs();
    const topicMCQs = topic === "ALL" ? allMCQs : allMCQs.filter(m => m.category === topic);
    if (topicMCQs.length === 0) return { count: 0, total: 0, percent: 0 };

    let count = 0;
    if (state.activeMode === "quiz") {
      // Quiz Mode: Correct Answered MCQs / Total MCQs
      const attempts = state.attempts[state.activeSubject] || {};
      count = topicMCQs.filter(m => attempts[m.id] && attempts[m.id].isCorrect).length;
    } else {
      // Practice Mode: Covered MCQs / Total MCQs
      const coveredList = state.covered[state.activeSubject] || [];
      count = topicMCQs.filter(m => coveredList.includes(m.id)).length;
    }

    const percent = Math.min(100, Math.max(0, Math.round((count / topicMCQs.length) * 100)));
    return { count, total: topicMCQs.length, percent };
  }

  // --- STATE PERSISTENCE ---
  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        state = { ...state, ...parsed };
      }
    } catch (e) {
      console.error("Failed to load state", e);
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error("Failed to save state", e);
    }
  }

  // --- SUBJECT & MCQs HELPERS ---
  let shuffledSubjectCache = {};

  function shuffleMCQItem(mcq) {
    if (!mcq || !Array.isArray(mcq.options) || mcq.options.length < 2) {
      return mcq;
    }
    const correctAnswerText = mcq.options[mcq.answerIndex];
    if (correctAnswerText === undefined) return mcq;

    const shuffledOptions = [...mcq.options];
    for (let i = shuffledOptions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
    }

    const newAnswerIndex = shuffledOptions.indexOf(correctAnswerText);

    return {
      ...mcq,
      options: shuffledOptions,
      answerIndex: newAnswerIndex
    };
  }

  function getActiveSubjectMCQs() {
    const subject = state.activeSubject;
    if (shuffledSubjectCache[subject]) {
      return shuffledSubjectCache[subject];
    }

    let rawList = [];
    if (state.customSubjects[subject]) {
      rawList = state.customSubjects[subject];
    } else if (window.factsData && window.factsData[subject]) {
      rawList = window.factsData[subject];
    }

    shuffledSubjectCache[subject] = rawList.map(shuffleMCQItem);
    return shuffledSubjectCache[subject];
  }

  function getAllSubjects() {
    const builtIn = window.factsData ? Object.keys(window.factsData) : [];
    const custom = Object.keys(state.customSubjects);
    return Array.from(new Set([...builtIn, ...custom]));
  }

  function getAvailableTopics() {
    const mcqs = getActiveSubjectMCQs();
    const categories = mcqs.map(q => q.category).filter(Boolean);
    return Array.from(new Set(categories));
  }

  // --- UI THEME & MODE SWITCHERS ---
  function applyTheme() {
    if (state.theme === "dark") {
      body.classList.add("dark-mode");
      body.classList.remove("light-mode");
      if (darkModeToggle) darkModeToggle.checked = true;
    } else {
      body.classList.add("light-mode");
      body.classList.remove("dark-mode");
      if (darkModeToggle) darkModeToggle.checked = false;
    }
  }

  function toggleTheme() {
    state.theme = state.theme === "dark" ? "light" : "dark";
    applyTheme();
    saveState();
  }

  function switchMode(mode) {
    state.activeMode = mode;
    saveState();

    if (mode === "practice") {
      btnModePractice.classList.add("active");
      btnModeQuiz.classList.remove("active");
      if (searchActionsBar) searchActionsBar.style.display = "flex";
      factsListContainer.style.display = "flex";
      quizContainer.style.display = "none";
      updateProgressUI();
      renderTopicPills();
      renderFactsList();
    } else {
      btnModeQuiz.classList.add("active");
      btnModePractice.classList.remove("active");
      if (searchActionsBar) searchActionsBar.style.display = "none";
      if (checkpointBanner) checkpointBanner.style.display = "none";
      factsListContainer.style.display = "none";
      quizContainer.style.display = "block";
      renderTopicPills();
      initQuizSetup();
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function openSidebar() {
    sidebar.classList.add("active");
    sidebarOverlay.classList.add("active");
  }

  function closeSidebar() {
    sidebar.classList.remove("active");
    sidebarOverlay.classList.remove("active");
  }

  // --- TOPIC & CATEGORY PILLS ---
  function renderTopicPills() {
    topicsScroll.innerHTML = "";
    const topics = getAvailableTopics();
    const allMCQs = getActiveSubjectMCQs();

    // "All" Pill
    const allProg = getTopicProgress("ALL");
    const isAllActive = state.selectedTopic === 'ALL';
    const allPill = document.createElement("button");
    allPill.className = `topic-pill ${isAllActive ? 'active' : ''}`;
    allPill.textContent = `All (${allMCQs.length})`;

    if (!isAllActive && allProg.percent > 0) {
      const p = allProg.percent;
      allPill.style.background = `linear-gradient(90deg, rgba(16, 185, 129, 0.25) 0%, rgba(16, 185, 129, 0.25) ${p}%, var(--option-bg) ${p}%, var(--option-bg) 100%)`;
      allPill.style.borderColor = `rgba(16, 185, 129, ${Math.min(0.6, 0.25 + (p / 100) * 0.35)})`;
    }

    allPill.addEventListener("click", () => {
      state.selectedTopic = "ALL";
      saveState();
      renderTopicPills();
      renderFactsList();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    topicsScroll.appendChild(allPill);

    // Individual Topics
    topics.forEach(topic => {
      const topicCount = allMCQs.filter(m => m.category === topic).length;
      const prog = getTopicProgress(topic);
      const isActive = state.selectedTopic === topic;
      const pill = document.createElement("button");
      pill.className = `topic-pill ${isActive ? 'active' : ''}`;
      pill.textContent = `${topic} (${topicCount})`;

      if (!isActive && prog.percent > 0) {
        const p = prog.percent;
        pill.style.background = `linear-gradient(90deg, rgba(16, 185, 129, 0.25) 0%, rgba(16, 185, 129, 0.25) ${p}%, var(--option-bg) ${p}%, var(--option-bg) 100%)`;
        pill.style.borderColor = `rgba(16, 185, 129, ${Math.min(0.6, 0.25 + (p / 100) * 0.35)})`;
      }

      pill.addEventListener("click", () => {
        state.selectedTopic = topic;
        saveState();
        renderTopicPills();
        renderFactsList();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
      topicsScroll.appendChild(pill);
    });
  }

  // --- PROGRESS & STATS UI ---
  function updateProgressUI() {
    const mcqs = getActiveSubjectMCQs();
    const total = mcqs.length;

    if (!state.covered[state.activeSubject]) state.covered[state.activeSubject] = [];
    if (!state.bookmarks[state.activeSubject]) state.bookmarks[state.activeSubject] = [];
    if (!state.attempts[state.activeSubject]) state.attempts[state.activeSubject] = {};

    const coveredCount = state.covered[state.activeSubject].length;
    const bookmarkedCount = state.bookmarks[state.activeSubject].length;

    // Calculate Accuracy from Quiz Mode performance
    if (!state.quizStats) state.quizStats = {};
    const quizStats = state.quizStats[state.activeSubject] || { totalAttempted: 0, totalCorrect: 0 };
    const accuracy = quizStats.totalAttempted > 0
      ? Math.round((quizStats.totalCorrect / quizStats.totalAttempted) * 100)
      : 0;
    const percent = total > 0 ? Math.round((coveredCount / total) * 100) : 0;

    currentSubjectBadge.textContent = state.activeSubject;
    progressPercentage.textContent = `${percent}% Covered`;
    progressBarFill.style.width = `${percent}%`;
    progressCount.textContent = `${coveredCount} / ${total} MCQs covered`;
    accuracyStat.textContent = quizStats.totalAttempted > 0 ? `Accuracy: ${accuracy}%` : `Accuracy: 0%`;
    bookmarkCount.textContent = `${bookmarkedCount} bookmarked`;

    // Render Checkpoint Banner (Only in practice mode)
    const checkpointId = state.checkpoints[state.activeSubject];
    if (checkpointId && state.activeMode === "practice") {
      const mcqIndex = mcqs.findIndex(m => m.id === checkpointId);
      if (mcqIndex !== -1) {
        checkpointBanner.style.display = "flex";
        checkpointNumber.textContent = `#${mcqIndex + 1}`;
      } else {
        checkpointBanner.style.display = "none";
      }
    } else {
      checkpointBanner.style.display = "none";
    }

    // Refresh sidebar mini progress bars
    renderSubjectsList();
  }

  // --- RENDER PRACTICE MCQs LIST ---
  function renderFactsList() {
    if (state.activeMode !== "practice") return;

    factsListContainer.innerHTML = "";
    const mcqs = getActiveSubjectMCQs();

    if (mcqs.length === 0) {
      factsListContainer.innerHTML = `
        <div class="empty-state">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          <p>No MCQs found in this subject. Use the sidebar to import questions!</p>
        </div>
      `;
      return;
    }

    const coveredList = state.covered[state.activeSubject] || [];
    const bookmarkedList = state.bookmarks[state.activeSubject] || [];
    const activeCheckpoint = state.checkpoints[state.activeSubject] || null;
    const attempts = state.attempts[state.activeSubject] || {};
    const revealedList = state.revealedAnswers[state.activeSubject] || [];

    // Filter MCQs
    const filtered = mcqs.filter(mcq => {
      // Topic Filter
      if (state.selectedTopic !== "ALL" && mcq.category !== state.selectedTopic) {
        return false;
      }

      // Search Filter
      if (searchFilter) {
        const query = searchFilter.toLowerCase();
        const inQuestion = mcq.question.toLowerCase().includes(query);
        const inCategory = (mcq.category || "").toLowerCase().includes(query);
        const inOptions = mcq.options.some(opt => opt.toLowerCase().includes(query));
        const inExplanation = (mcq.explanation || "").toLowerCase().includes(query);
        if (!inQuestion && !inCategory && !inOptions && !inExplanation) return false;
      }

      // Chip Filters
      if (currentFilter === "bookmarks" && !bookmarkedList.includes(mcq.id)) return false;
      if (currentFilter === "uncovered" && coveredList.includes(mcq.id)) return false;
      if (currentFilter === "mistakes") {
        const att = attempts[mcq.id];
        if (!att || att.isCorrect || !att.wrongOptions || att.wrongOptions.length === 0) return false;
      }

      return true;
    });

    if (filtered.length === 0) {
      factsListContainer.innerHTML = `
        <div class="empty-state">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <p>No MCQs match your selected topic or filter criteria.</p>
        </div>
      `;
      return;
    }

    // Render filtered cards
    filtered.forEach(mcq => {
      const absoluteIndex = mcqs.findIndex(m => m.id === mcq.id) + 1;
      const isCovered = coveredList.includes(mcq.id);
      const isBookmarked = bookmarkedList.includes(mcq.id);
      const isCheckpoint = activeCheckpoint === mcq.id;

      const att = attempts[mcq.id] || { wrongOptions: [], isCorrect: false };
      const isRevealed = state.showAllAnswers || revealedList.includes(mcq.id);

      const card = document.createElement("article");
      card.className = `fact-card ${isCheckpoint ? 'is-checkpoint' : ''}`;
      card.id = `fact-card-${mcq.id}`;

      // Build Option Buttons HTML
      const optionsHTML = mcq.options.map((optText, idx) => {
        const letter = String.fromCharCode(65 + idx);
        let stateClass = "";
        let badgeHTML = "";

        if (isRevealed && idx === mcq.answerIndex) {
          stateClass = "state-correct";
          badgeHTML = `<span class="mcq-opt-badge">✓ Answer</span>`;
        }

        return `
          <button class="mcq-option-btn ${stateClass}" data-id="${mcq.id}" data-index="${idx}">
            <span class="mcq-opt-letter">${letter}</span>
            <span class="mcq-opt-text">${optText}</span>
            ${badgeHTML}
          </button>
        `;
      }).join("");

      card.innerHTML = `
        <div class="fact-header">
          <span class="fact-num">MCQ #${absoluteIndex}</span>
          <span class="fact-category">${mcq.category || 'General'}</span>
        </div>
        <h3 class="fact-question">${mcq.question}</h3>
        
        <div class="mcq-options-list">
          ${optionsHTML}
        </div>

        <div class="fact-explanation-box" style="display: ${isRevealed ? 'block' : 'none'}">
          <strong>Key Concept / Answer:</strong> Option ${String.fromCharCode(65 + mcq.answerIndex)}: ${mcq.options[mcq.answerIndex]}<br>
          <span style="opacity: 0.9;">${mcq.explanation || ''}</span>
        </div>

        <div class="fact-actions">
          <div class="action-left">
            <button class="card-action-btn btn-cover" data-id="${mcq.id}" data-covered="${isCovered}">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>${isCovered ? 'Covered' : 'Mark Covered'}</span>
            </button>
            
            <button class="card-action-btn btn-bookmark" data-id="${mcq.id}" data-bookmarked="${isBookmarked}" title="Add to Revision Bookmarks">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </button>

            <button class="card-action-btn btn-checkpoint" data-id="${mcq.id}" data-checkpoint="${isCheckpoint}" title="Pin Study Checkpoint">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </button>
          </div>

          <div class="action-right">
            <button class="card-action-btn btn-toggle-answer" data-id="${mcq.id}">
              ${isRevealed ? `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path><path d="M6.61 6.61A13.52 13.52 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path><line x1="2" y1="2" x2="22" y2="22"></line></svg>
                <span>Hide Answer</span>
              ` : `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                <span>Show Answer</span>
              `}
            </button>
          </div>
        </div>
      `;

      // Option Click Handler (Instant feedback, auto-mark covered if correct, auto-reset back to normal in 2.5s)
      const optBtns = card.querySelectorAll(".mcq-option-btn");
      optBtns.forEach(btn => {
        btn.addEventListener("click", () => {
          const selectedIdx = parseInt(btn.getAttribute("data-index"), 10);
          const isCorrect = selectedIdx === mcq.answerIndex;

          // Lock option buttons temporarily during feedback display
          optBtns.forEach(b => b.disabled = true);

          if (!state.attempts[state.activeSubject]) {
            state.attempts[state.activeSubject] = {};
          }
          let currentAtt = state.attempts[state.activeSubject][mcq.id] || { wrongOptions: [], isCorrect: false };

          if (isCorrect) {
            currentAtt.isCorrect = true;
            btn.classList.add("state-correct");
            if (!btn.querySelector(".mcq-opt-badge")) {
              btn.insertAdjacentHTML("beforeend", `<span class="mcq-opt-badge">✓ Correct</span>`);
            }

            // Auto-mark as covered on correct answer
            let covered = state.covered[state.activeSubject] || [];
            if (!covered.includes(mcq.id)) {
              covered.push(mcq.id);
              state.covered[state.activeSubject] = covered;
              saveState();
              const coverBtn = card.querySelector(".btn-cover");
              if (coverBtn) {
                coverBtn.setAttribute("data-covered", "true");
                coverBtn.querySelector("span").textContent = "Covered";
              }
            }
          } else {
            if (!currentAtt.wrongOptions.includes(selectedIdx)) {
              currentAtt.wrongOptions.push(selectedIdx);
            }
            btn.classList.add("state-wrong");
            if (!btn.querySelector(".mcq-opt-badge")) {
              btn.insertAdjacentHTML("beforeend", `<span class="mcq-opt-badge">✕ Wrong</span>`);
            }
          }

          state.attempts[state.activeSubject][mcq.id] = currentAtt;
          saveState();
          updateProgressUI();

          // Auto reset option styles back to normal after 2.5 seconds for fresh re-attempting
          setTimeout(() => {
            btn.classList.remove("state-correct", "state-wrong");
            const badge = btn.querySelector(".mcq-opt-badge");
            if (badge) badge.remove();
            optBtns.forEach(b => b.disabled = false);
          }, 2500);
        });
      });

      // Show/Hide Answer Toggle
      const toggleAnswerBtn = card.querySelector(".btn-toggle-answer");
      const explanationBox = card.querySelector(".fact-explanation-box");
      toggleAnswerBtn.addEventListener("click", () => {
        let rev = state.revealedAnswers[state.activeSubject] || [];
        const isCurrentlyRevealed = rev.includes(mcq.id);

        if (isCurrentlyRevealed) {
          rev = rev.filter(id => id !== mcq.id);
          explanationBox.style.display = "none";
          toggleAnswerBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            <span>Show Answer</span>
          `;
        } else {
          rev.push(mcq.id);
          explanationBox.style.display = "block";
          toggleAnswerBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path><path d="M6.61 6.61A13.52 13.52 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path><line x1="2" y1="2" x2="22" y2="22"></line></svg>
            <span>Hide Answer</span>
          `;

          // Also highlight correct answer button if not yet solved
          const correctBtn = card.querySelector(`.mcq-option-btn[data-index="${mcq.answerIndex}"]`);
          if (correctBtn && !correctBtn.classList.contains("state-correct")) {
            correctBtn.classList.add("state-correct");
            if (!correctBtn.querySelector(".mcq-opt-badge")) {
              correctBtn.insertAdjacentHTML("beforeend", `<span class="mcq-opt-badge">✓ Answer</span>`);
            }
          }
        }

        state.revealedAnswers[state.activeSubject] = rev;
        saveState();
      });

      // Mark Covered Manual Toggle
      const coverBtn = card.querySelector(".btn-cover");
      coverBtn.addEventListener("click", () => {
        let covered = state.covered[state.activeSubject] || [];
        if (covered.includes(mcq.id)) {
          covered = covered.filter(id => id !== mcq.id);
          coverBtn.setAttribute("data-covered", "false");
          coverBtn.querySelector("span").textContent = "Mark Covered";
        } else {
          covered.push(mcq.id);
          coverBtn.setAttribute("data-covered", "true");
          coverBtn.querySelector("span").textContent = "Covered";
        }
        state.covered[state.activeSubject] = covered;
        saveState();
        updateProgressUI();
      });

      // Toggle Bookmark
      const bookmarkBtn = card.querySelector(".btn-bookmark");
      bookmarkBtn.addEventListener("click", () => {
        let bookmarks = state.bookmarks[state.activeSubject] || [];
        if (bookmarks.includes(mcq.id)) {
          bookmarks = bookmarks.filter(id => id !== mcq.id);
          bookmarkBtn.setAttribute("data-bookmarked", "false");
        } else {
          bookmarks.push(mcq.id);
          bookmarkBtn.setAttribute("data-bookmarked", "true");
        }
        state.bookmarks[state.activeSubject] = bookmarks;
        saveState();
        updateProgressUI();
      });

      // Toggle Checkpoint
      const checkpointBtn = card.querySelector(".btn-checkpoint");
      checkpointBtn.addEventListener("click", () => {
        const currentCheckpoint = state.checkpoints[state.activeSubject];
        state.checkpoints[state.activeSubject] = (currentCheckpoint === mcq.id) ? null : mcq.id;
        saveState();
        updateProgressUI();
        renderFactsList();
      });

      factsListContainer.appendChild(card);
    });
  }

  // --- QUIZ TEST ENGINE ---
  let selectedQuizPool = "all"; // "all" | "bookmarks" | "uncovered" | "mistakes"
  let selectedQuizCount = 10;
  let lastAttemptedQuizId = null;

  const quizOptionsWrapper = document.getElementById("quizOptionsWrapper");
  const quizPoolSelector = document.getElementById("quizPoolSelector");
  const quizCountSelector = document.getElementById("quizCountSelector");

  function getDynamicCountSteps(N) {
    if (N <= 0) return [];
    if (N === 1) return [{ label: "All", value: "ALL" }];
    if (N <= 4) {
      const steps = [];
      for (let i = 1; i < N; i++) {
        steps.push({ label: `${i}`, value: i });
      }
      steps.push({ label: "All", value: "ALL" });
      return steps;
    }
    if (N <= 10) {
      const s1 = Math.max(1, Math.round(N * 0.3));
      const s2 = Math.min(N - 1, Math.max(s1 + 1, Math.round(N * 0.7)));
      const steps = [
        { label: `${s1}`, value: s1 },
        { label: `${s2}`, value: s2 },
        { label: "All", value: "ALL" }
      ];
      return steps;
    }
    if (N <= 25) {
      const s1 = Math.round(N * 0.25);
      const s2 = Math.round(N * 0.50);
      const s3 = Math.round(N * 0.75);
      const raw = Array.from(new Set([s1, s2, s3])).filter(v => v > 0 && v < N);
      const steps = raw.map(v => ({ label: `${v}`, value: v }));
      steps.push({ label: "All", value: "ALL" });
      return steps;
    }
    if (N <= 60) {
      const raw = Array.from(new Set([10, 20, 35])).filter(v => v < N);
      const steps = raw.map(v => ({ label: `${v}`, value: v }));
      steps.push({ label: "All", value: "ALL" });
      return steps;
    }
    const raw = Array.from(new Set([10, 25, 50, 100])).filter(v => v < N);
    const steps = raw.map(v => ({ label: `${v}`, value: v }));
    steps.push({ label: "All", value: "ALL" });
    return steps;
  }

  function renderCountChips(availableCount) {
    if (!quizCountSelector) return;
    quizCountSelector.innerHTML = "";

    const steps = getDynamicCountSteps(availableCount);
    if (steps.length === 0) return;

    // Pick first step or "ALL" as default selectedQuizCount
    selectedQuizCount = steps[0].value;

    steps.forEach((step, idx) => {
      const chip = document.createElement("button");
      chip.className = `count-chip ${idx === 0 ? 'active' : ''}`;
      chip.setAttribute("data-count", step.value);
      chip.textContent = step.label;

      chip.addEventListener("click", () => {
        const allChips = quizCountSelector.querySelectorAll(".count-chip");
        allChips.forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        selectedQuizCount = step.value;
      });

      quizCountSelector.appendChild(chip);
    });
  }

  function updateQuizOptionsForSelectedTopic() {
    const topicVal = quizTopicSelect ? quizTopicSelect.value : "";
    if (!topicVal) {
      if (quizOptionsWrapper) quizOptionsWrapper.style.display = "none";
      return;
    }

    const allMCQs = getActiveSubjectMCQs();
    const topicMCQs = topicVal === "ALL" ? allMCQs : allMCQs.filter(m => m.category === topicVal);

    if (topicMCQs.length === 0) {
      if (quizOptionsWrapper) quizOptionsWrapper.style.display = "none";
      return;
    }

    // Reveal options wrapper
    if (quizOptionsWrapper) {
      quizOptionsWrapper.style.display = "flex";
    }

    // Calculate pool counts for selected topic
    const coveredList = state.covered[state.activeSubject] || [];
    const bookmarkedList = state.bookmarks[state.activeSubject] || [];
    const attempts = state.attempts[state.activeSubject] || {};

    const allCount = topicMCQs.length;
    const bmCount = topicMCQs.filter(m => bookmarkedList.includes(m.id)).length;
    const uncCount = topicMCQs.filter(m => !coveredList.includes(m.id)).length;
    const mistCount = topicMCQs.filter(m => {
      const att = attempts[m.id];
      return att && !att.isCorrect && att.wrongOptions && att.wrongOptions.length > 0;
    }).length;

    // Define pool objects with SVG icons and filter only those with count > 0
    const poolDefs = [
      { 
        id: "all", 
        label: `All`, 
        iconSVG: ``,
        count: allCount 
      },
      { 
        id: "bookmarks", 
        label: `(${bmCount})`, 
        iconSVG: `<svg class="chip-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
        count: bmCount 
      },
      { 
        id: "uncovered", 
        label: `Uncovered (${uncCount})`, 
        iconSVG: ``,
        count: uncCount 
      },
      { 
        id: "mistakes", 
        label: `Mistakes (${mistCount})`, 
        iconSVG: ``,
        count: mistCount 
      }
    ].filter(p => p.count > 0);

    // If current selectedQuizPool is not among available pools, pick the first pool
    const activePoolExists = poolDefs.some(p => p.id === selectedQuizPool);
    if (!activePoolExists && poolDefs.length > 0) {
      selectedQuizPool = poolDefs[0].id;
    }

    // Render Pool Chips
    if (quizPoolSelector) {
      quizPoolSelector.innerHTML = "";
      poolDefs.forEach(pool => {
        const chip = document.createElement("button");
        const isActive = pool.id === selectedQuizPool;
        chip.className = `pool-chip ${isActive ? 'active' : ''}`;
        chip.setAttribute("data-pool", pool.id);
        chip.setAttribute("title", pool.id === "bookmarks" ? `Bookmarks (${pool.count})` : pool.label);
        chip.innerHTML = `${pool.iconSVG}<span>${pool.label}</span>`;

        chip.addEventListener("click", () => {
          const allPoolChips = quizPoolSelector.querySelectorAll(".pool-chip");
          allPoolChips.forEach(c => c.classList.remove("active"));
          chip.classList.add("active");
          selectedQuizPool = pool.id;
          renderCountChips(pool.count);
        });

        quizPoolSelector.appendChild(chip);
      });
    }

    // Render Count Chips for active pool
    const activePoolDef = poolDefs.find(p => p.id === selectedQuizPool) || poolDefs[0];
    if (activePoolDef) {
      renderCountChips(activePoolDef.count);
    }
  }

  function initQuizSetup() {
    const quizHistoryCard = document.getElementById("quizHistoryCard");
    quizSetupCard.style.display = "flex";
    if (quizHistoryCard) quizHistoryCard.style.display = "flex";
    quizActiveCard.style.display = "none";

    // Dynamically populate quizTopicSelect with visual coverage styling
    if (quizTopicSelect) {
      quizTopicSelect.innerHTML = "";
      const allMCQs = getActiveSubjectMCQs();
      const topics = getAvailableTopics();

      // Placeholder prompt option
      const promptOpt = document.createElement("option");
      promptOpt.value = "";
      promptOpt.disabled = true;
      promptOpt.selected = true;
      promptOpt.textContent = "-- Select Category / Topic --";
      quizTopicSelect.appendChild(promptOpt);

      // ALL Option
      const allOpt = document.createElement("option");
      allOpt.value = "ALL";
      allOpt.textContent = `All Topics (${allMCQs.length} MCQs)`;
      if (isTopicCovered("ALL")) {
        allOpt.className = "is-topic-covered";
        allOpt.style.backgroundColor = "rgba(16, 185, 129, 0.18)";
        allOpt.style.color = "#34D399";
        allOpt.style.fontWeight = "600";
      }
      quizTopicSelect.appendChild(allOpt);

      // Topic Options
      topics.forEach(topic => {
        const topicCount = allMCQs.filter(m => m.category === topic).length;
        const opt = document.createElement("option");
        opt.value = topic;
        opt.textContent = `${topic} (${topicCount} MCQs)`;
        if (isTopicCovered(topic)) {
          opt.className = "is-topic-covered";
          opt.style.backgroundColor = "rgba(16, 185, 129, 0.18)";
          opt.style.color = "#34D399";
          opt.style.fontWeight = "600";
        }
        quizTopicSelect.appendChild(opt);
      });

      // Add change event listener
      quizTopicSelect.removeEventListener("change", updateQuizOptionsForSelectedTopic);
      quizTopicSelect.addEventListener("change", updateQuizOptionsForSelectedTopic);
    }

    // Hide options wrapper initially until topic is selected
    if (quizOptionsWrapper) {
      quizOptionsWrapper.style.display = "none";
    }

    renderQuizHistoryList();
  }

  startQuizBtn.addEventListener("click", () => {
    const allMCQs = getActiveSubjectMCQs();
    const topicVal = quizTopicSelect ? quizTopicSelect.value : "ALL";

    // 1. Topic Filter
    let filtered = topicVal === "ALL" ? [...allMCQs] : allMCQs.filter(m => m.category === topicVal);

    // 2. Pool Filter (Bookmarks, Uncovered, Mistakes)
    const coveredList = state.covered[state.activeSubject] || [];
    const bookmarkedList = state.bookmarks[state.activeSubject] || [];
    const attempts = state.attempts[state.activeSubject] || {};

    if (selectedQuizPool === "bookmarks") {
      filtered = filtered.filter(m => bookmarkedList.includes(m.id));
    } else if (selectedQuizPool === "uncovered") {
      filtered = filtered.filter(m => !coveredList.includes(m.id));
    } else if (selectedQuizPool === "mistakes") {
      filtered = filtered.filter(m => {
        const att = attempts[m.id];
        return att && !att.isCorrect && att.wrongOptions && att.wrongOptions.length > 0;
      });
    }

    if (filtered.length === 0) {
      alert(`No MCQs found matching topic "${topicVal}" and pool "${selectedQuizPool}". Try selecting another option!`);
      return;
    }

    filtered = filtered.sort(() => Math.random() - 0.5);

    if (selectedQuizCount !== "ALL") {
      const limit = parseInt(selectedQuizCount, 10);
      filtered = filtered.slice(0, limit);
    }

    quizSession = {
      active: true,
      questions: filtered,
      currentIndex: 0,
      userAnswers: {},
      checked: {},
      timerSeconds: 0,
      timerInterval: setInterval(() => {
        quizSession.timerSeconds++;
        const mins = String(Math.floor(quizSession.timerSeconds / 60)).padStart(2, '0');
        const secs = String(quizSession.timerSeconds % 60).padStart(2, '0');
        quizTimer.textContent = `Time: ${mins}:${secs}`;
      }, 1000)
    };

    quizSetupCard.style.display = "none";
    const quizHistoryCard = document.getElementById("quizHistoryCard");
    if (quizHistoryCard) quizHistoryCard.style.display = "none";
    quizActiveCard.style.display = "flex";
    renderActiveQuizQuestion();
  });

  function renderActiveQuizQuestion() {
    const q = quizSession.questions[quizSession.currentIndex];
    const total = quizSession.questions.length;

    quizQuestionCounter.textContent = `Question ${quizSession.currentIndex + 1} of ${total}`;
    quizProgressFill.style.width = `${((quizSession.currentIndex + 1) / total) * 100}%`;

    quizQuestionCategory.textContent = q.category || "General";
    quizQuestionStatement.textContent = q.question;

    const selectedIdx = quizSession.userAnswers[q.id];
    const isChecked = quizSession.checked[q.id];

    quizOptionsGrid.innerHTML = "";
    q.options.forEach((optText, idx) => {
      const letter = String.fromCharCode(65 + idx);
      const btn = document.createElement("button");
      btn.className = "mcq-option-btn";

      if (isChecked) {
        if (idx === q.answerIndex) {
          btn.classList.add("state-correct");
        } else if (idx === selectedIdx) {
          btn.classList.add("state-wrong");
        }
      } else if (idx === selectedIdx) {
        btn.style.borderColor = "var(--accent-color)";
        btn.style.backgroundColor = "var(--option-hover)";
      }

      btn.innerHTML = `
        <span class="mcq-opt-letter">${letter}</span>
        <span class="mcq-opt-text">${optText}</span>
      `;

      btn.addEventListener("click", () => {
        if (isChecked) return;
        quizSession.userAnswers[q.id] = idx;
        quizCheckBtn.disabled = false;
        renderActiveQuizQuestion();
      });

      quizOptionsGrid.appendChild(btn);
    });

    if (isChecked) {
      quizExplanationBox.style.display = "block";
      quizExplanationBox.innerHTML = `
        <strong>Explanation:</strong> Option ${String.fromCharCode(65 + q.answerIndex)}: ${q.options[q.answerIndex]}<br>
        <span style="opacity: 0.9;">${q.explanation || ''}</span>
      `;
    } else {
      quizExplanationBox.style.display = "none";
    }

    quizPrevBtn.disabled = quizSession.currentIndex === 0;
    quizCheckBtn.disabled = selectedIdx === undefined || isChecked;

    if (isChecked) {
      quizCheckBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path><path d="M6.61 6.61A13.52 13.52 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path><line x1="2" y1="2" x2="22" y2="22"></line></svg>`;
      quizCheckBtn.setAttribute("title", "Answer Checked");
      quizCheckBtn.setAttribute("aria-label", "Answer Checked");
    } else {
      quizCheckBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;
      quizCheckBtn.setAttribute("title", "Check Answer");
      quizCheckBtn.setAttribute("aria-label", "Check Answer");
    }

    if (quizSession.currentIndex === total - 1) {
      quizNextBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;
      quizNextBtn.setAttribute("title", "Finish & Submit Test");
      quizNextBtn.setAttribute("aria-label", "Finish & Submit Test");
    } else {
      quizNextBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>`;
      quizNextBtn.setAttribute("title", "Next Question");
      quizNextBtn.setAttribute("aria-label", "Next Question");
    }
  }

  quizPrevBtn.addEventListener("click", () => {
    if (quizSession.currentIndex > 0) {
      quizSession.currentIndex--;
      renderActiveQuizQuestion();
    }
  });

  quizCheckBtn.addEventListener("click", () => {
    const q = quizSession.questions[quizSession.currentIndex];
    quizSession.checked[q.id] = true;

    const selectedIdx = quizSession.userAnswers[q.id];
    const isCorrect = selectedIdx === q.answerIndex;
    if (!state.attempts[state.activeSubject]) state.attempts[state.activeSubject] = {};

    let att = state.attempts[state.activeSubject][q.id] || { wrongOptions: [], isCorrect: false };
    if (isCorrect) att.isCorrect = true;
    else if (!att.wrongOptions.includes(selectedIdx)) att.wrongOptions.push(selectedIdx);

    state.attempts[state.activeSubject][q.id] = att;

    saveState();
    updateProgressUI();
    renderActiveQuizQuestion();
  });

  quizNextBtn.addEventListener("click", () => {
    const total = quizSession.questions.length;
    if (quizSession.currentIndex < total - 1) {
      quizSession.currentIndex++;
      renderActiveQuizQuestion();
    } else {
      finishQuizTest();
    }
  });

  function finishQuizTest() {
    clearInterval(quizSession.timerInterval);

    let correct = 0;
    if (!state.covered[state.activeSubject]) state.covered[state.activeSubject] = [];
    quizSession.questions.forEach(q => {
      const sel = quizSession.userAnswers[q.id];
      if (sel === q.answerIndex) {
        correct++;
        if (!state.covered[state.activeSubject].includes(q.id)) {
          state.covered[state.activeSubject].push(q.id);
        }
      }
    });

    const total = quizSession.questions.length;
    const wrong = total - correct;
    const percent = Math.round((correct / total) * 100);
    const mins = String(Math.floor(quizSession.timerSeconds / 60)).padStart(2, '0');
    const secs = String(quizSession.timerSeconds % 60).padStart(2, '0');

    // Accumulate Quiz Test stats for global Accuracy metric
    if (!state.quizStats) state.quizStats = {};
    const subStats = state.quizStats[state.activeSubject] || { totalAttempted: 0, totalCorrect: 0 };
    subStats.totalAttempted += total;
    subStats.totalCorrect += correct;
    state.quizStats[state.activeSubject] = subStats;

    // Save Complete Attempt History Entry with Details
    if (!state.quizHistory) state.quizHistory = [];
    const historyItem = {
      id: "qhist_" + Date.now(),
      timestamp: new Date().toISOString(),
      dateFormatted: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      subject: state.activeSubject,
      category: quizTopicSelect ? quizTopicSelect.value : "ALL",
      poolFilter: selectedQuizPool,
      totalQuestions: total,
      correctCount: correct,
      wrongCount: wrong,
      scorePercent: percent,
      timeSpentSeconds: quizSession.timerSeconds,
      timeSpentFormatted: `${mins}:${secs}`,
      questions: quizSession.questions.map(q => ({
        id: q.id,
        question: q.question,
        category: q.category || "General",
        userAnswer: quizSession.userAnswers[q.id],
        correctAnswer: q.answerIndex,
        isCorrect: quizSession.userAnswers[q.id] === q.answerIndex,
        options: q.options,
        explanation: q.explanation || ""
      }))
    };

    state.quizHistory.unshift(historyItem);
    lastAttemptedQuizId = historyItem.id;
    saveState();
    updateProgressUI();
    renderTopicPills();

    modalScorePercent.textContent = `${percent}%`;
    modalScoreFraction.textContent = `${correct} / ${total} Correct`;
    modalCorrectCount.textContent = correct;
    modalWrongCount.textContent = wrong;
    modalTimeSpent.textContent = `${mins}:${secs}`;

    quizResultsModal.style.display = "flex";
  }

  // --- QUIZ ATTEMPT HISTORY LIST & BREAKDOWN MODAL ---
  const quizHistoryList = document.getElementById("quizHistoryList");
  const clearQuizHistoryBtn = document.getElementById("clearQuizHistoryBtn");
  const quizHistoryDetailModal = document.getElementById("quizHistoryDetailModal");
  const historyDetailModalClose = document.getElementById("historyDetailModalClose");
  const historyDetailTitle = document.getElementById("historyDetailTitle");
  const historyDetailModalBody = document.getElementById("historyDetailModalBody");

  function renderQuizHistoryList() {
    if (!quizHistoryList) return;
    quizHistoryList.innerHTML = "";

    const history = (state.quizHistory || []).filter(h => h.subject === state.activeSubject);

    if (history.length === 0) {
      quizHistoryList.innerHTML = `
        <div class="empty-history">
          <p>No past quiz attempts yet. Start a quiz test above to track your progress!</p>
        </div>
      `;
      return;
    }

    history.forEach(item => {
      const card = document.createElement("div");
      card.className = "history-item-card";

      let scoreClass = "score-high";
      if (item.scorePercent < 50) scoreClass = "score-low";
      else if (item.scorePercent < 75) scoreClass = "score-med";

      card.innerHTML = `
        <div class="history-item-main">
          <div class="history-item-left">
            <span class="history-date">${item.dateFormatted}</span>
            <div class="history-tags">
              <span class="history-tag category">${item.category}</span>
              <span class="history-tag pool">${item.poolFilter.toUpperCase()}</span>
            </div>
          </div>
          <div class="history-item-right">
            <span class="history-score-badge ${scoreClass}">${item.scorePercent}%</span>
          </div>
        </div>
        <div class="history-item-sub">
          <span>${item.correctCount} / ${item.totalQuestions} Correct</span>
          <span>⏱️ ${item.timeSpentFormatted}</span>
          <button class="card-action-btn view-history-btn" data-id="${item.id}">Review Details</button>
        </div>
      `;

      card.querySelector(".view-history-btn").addEventListener("click", () => {
        openHistoryDetailModal(item.id);
      });

      quizHistoryList.appendChild(card);
    });
  }

  if (clearQuizHistoryBtn) {
    clearQuizHistoryBtn.addEventListener("click", () => {
      if (!confirm("Are you sure you want to clear quiz attempt history for this subject?")) return;
      state.quizHistory = (state.quizHistory || []).filter(h => h.subject !== state.activeSubject);
      saveState();
      renderQuizHistoryList();
      renderTopicPills();
    });
  }

  function openHistoryDetailModal(historyId) {
    const historyItem = (state.quizHistory || []).find(h => h.id === historyId);
    if (!historyItem) return;

    historyDetailTitle.textContent = `${historyItem.category} Quiz Details (${historyItem.scorePercent}%)`;

    historyDetailModalBody.innerHTML = `
      <div class="history-summary-box">
        <div><strong>Score:</strong> ${historyItem.scorePercent}% (${historyItem.correctCount}/${historyItem.totalQuestions})</div>
        <div><strong>Time Taken:</strong> ${historyItem.timeSpentFormatted}</div>
        <div><strong>Date:</strong> ${historyItem.dateFormatted}</div>
      </div>
      <div class="history-questions-breakdown">
        ${historyItem.questions.map((q, idx) => `
          <div class="history-q-card ${q.isCorrect ? 'q-correct' : 'q-wrong'}">
            <div class="history-q-header">
              <span class="history-q-num">Q${idx + 1} (${q.category})</span>
              <span class="history-q-status">${q.isCorrect ? '✓ Correct' : '✕ Incorrect'}</span>
            </div>
            <p class="history-q-text">${q.question}</p>
            <div class="history-q-options">
              ${q.options.map((opt, optIdx) => {
                let optClass = "";
                if (optIdx === q.correctAnswer) optClass = "opt-correct";
                else if (optIdx === q.userAnswer) optClass = "opt-user-wrong";
                const letter = String.fromCharCode(65 + optIdx);
                return `<div class="history-opt ${optClass}">${letter}. ${opt}</div>`;
              }).join("")}
            </div>
            ${q.explanation ? `<div class="history-q-explanation"><strong>Explanation:</strong> ${q.explanation}</div>` : ''}
          </div>
        `).join("")}
      </div>
    `;

    quizHistoryDetailModal.style.display = "flex";
  }

  if (historyDetailModalClose) {
    historyDetailModalClose.addEventListener("click", () => {
      quizHistoryDetailModal.style.display = "none";
    });
  }

  quizModalClose.addEventListener("click", () => {
    quizResultsModal.style.display = "none";
    initQuizSetup();
  });

  modalRetakeQuizBtn.addEventListener("click", () => {
    quizResultsModal.style.display = "none";
    initQuizSetup();
  });

  modalReviewMistakesBtn.addEventListener("click", () => {
    quizResultsModal.style.display = "none";
    if (lastAttemptedQuizId) {
      openHistoryDetailModal(lastAttemptedQuizId);
    } else {
      switchMode("practice");
    }
  });

  // --- FILTER CHIPS LOGIC ---
  function updateFilterChipUI() {
    filterAll.setAttribute("data-active", currentFilter === "all" ? "true" : "false");
    filterBookmarks.setAttribute("data-active", currentFilter === "bookmarks" ? "true" : "false");
    filterUncovered.setAttribute("data-active", currentFilter === "uncovered" ? "true" : "false");
    filterMistakes.setAttribute("data-active", currentFilter === "mistakes" ? "true" : "false");
  }

  filterAll.addEventListener("click", () => {
    currentFilter = "all";
    updateFilterChipUI();
    renderFactsList();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  filterBookmarks.addEventListener("click", () => {
    currentFilter = currentFilter === "bookmarks" ? "all" : "bookmarks";
    updateFilterChipUI();
    renderFactsList();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  filterUncovered.addEventListener("click", () => {
    currentFilter = currentFilter === "uncovered" ? "all" : "uncovered";
    updateFilterChipUI();
    renderFactsList();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  filterMistakes.addEventListener("click", () => {
    currentFilter = currentFilter === "mistakes" ? "all" : "mistakes";
    updateFilterChipUI();
    renderFactsList();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // --- SEARCH BAR LOGIC ---
  searchInput.addEventListener("input", (e) => {
    searchFilter = e.target.value;
    searchClear.style.display = searchFilter ? "block" : "none";
    renderFactsList();
  });

  searchClear.addEventListener("click", () => {
    searchFilter = "";
    searchInput.value = "";
    searchClear.style.display = "none";
    renderFactsList();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // --- CHECKPOINT JUMP ---
  function jumpToCheckpoint() {
    const checkpointId = state.checkpoints[state.activeSubject];
    if (!checkpointId) return;

    if (searchFilter || currentFilter !== "all" || state.selectedTopic !== "ALL") {
      searchFilter = "";
      searchInput.value = "";
      searchClear.style.display = "none";
      currentFilter = "all";
      state.selectedTopic = "ALL";
      updateFilterChipUI();
      renderTopicPills();
      renderFactsList();
    }

    setTimeout(() => {
      const card = document.getElementById(`fact-card-${checkpointId}`);
      if (card) {
        card.scrollIntoView({ behavior: "smooth", block: "center" });
        card.classList.add("is-checkpoint");
      }
    }, 100);
  }

  jumpToCheckpointBtn.addEventListener("click", jumpToCheckpoint);

  // --- SIDEBAR & CUSTOM IMPORT ---
  sidebarToggleBtn.addEventListener("click", openSidebar);
  sidebarCloseBtn.addEventListener("click", closeSidebar);
  sidebarOverlay.addEventListener("click", closeSidebar);
  themeToggleTopBtn.addEventListener("click", toggleTheme);

  if (darkModeToggle) {
    darkModeToggle.addEventListener("change", () => {
      state.theme = darkModeToggle.checked ? "dark" : "light";
      applyTheme();
      saveState();
    });
  }

  // Export & Import Progress History Features
  const exportProgressBtn = document.getElementById("exportProgressBtn");
  const importProgressBtn = document.getElementById("importProgressBtn");
  const importFileInput = document.getElementById("importFileInput");

  const downloadBlobFallback = (content, filename) => {
    const blob = new Blob([content], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 100);
  };

  const exportAndShareData = async (dataObj, filename, title) => {
    const jsonString = JSON.stringify(dataObj, null, 2);
    const baseFilename = filename.replace(/\.json$/, "");

    // 1. Feature Check
    if (!navigator.share) {
      downloadBlobFallback(jsonString, `${baseFilename}.json`);
      return;
    }

    try {
      // 2. Prepare file with text/plain type for maximum OS compatibility
      const file = new File([jsonString], `${baseFilename}.txt`, { type: "text/plain" });

      // 3. Test if device supports file sharing
      const canShareFiles = navigator.canShare && navigator.canShare({ files: [file] });

      let sharePayload = {};
      if (canShareFiles) {
        sharePayload = {
          title,
          text: `Backup file for ${title}`,
          files: [file],
        };
      } else {
        // Fallback to text payload sharing if files are unsupported
        sharePayload = {
          title,
          text: `Data Backup (${title}):\n\n${jsonString.substring(0, 1000)}...`,
        };
      }

      // 4. Trigger Web Share API (Must be inside user gesture)
      await navigator.share(sharePayload);
    } catch (err) {
      if (err.name !== "AbortError") {
        console.error("Web Share failed:", err);
      }
    } finally {
      // 5. Always save file locally
      downloadBlobFallback(jsonString, `${baseFilename}.json`);
    }
  };

  if (exportProgressBtn) {
    exportProgressBtn.addEventListener("click", () => {
      const filename = `quickfacts_mcq_backup_${new Date().toISOString().slice(0, 10)}.json`;
      exportAndShareData(state, filename, "QuickFacts MCQs Backup");
    });
  }

  if (importProgressBtn && importFileInput) {
    importProgressBtn.addEventListener("click", () => {
      importFileInput.click();
    });
    importFileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const importedData = JSON.parse(event.target.result);
          if (typeof importedData === "object" && importedData !== null) {
            state = { ...state, ...importedData };
            shuffledSubjectCache = {};
            saveState();
            initSubjectView();
            closeSidebar();
            alert("Progress & history successfully imported!");
          } else {
            alert("Invalid JSON backup file.");
          }
        } catch (err) {
          alert("Error reading JSON file: " + err.message);
        }
      };
      reader.readAsText(file);
    });
  }

  globalShowAnswersToggle.addEventListener("change", () => {
    state.showAllAnswers = globalShowAnswersToggle.checked;
    saveState();
    renderFactsList();
  });

  btnModePractice.addEventListener("click", () => switchMode("practice"));
  btnModeQuiz.addEventListener("click", () => switchMode("quiz"));

  function renderSubjectsList() {
    if (!sidebarSubjectList) return;
    sidebarSubjectList.innerHTML = "";
    const subjects = getAllSubjects();

    subjects.forEach(subject => {
      let count = 0;
      if (state.customSubjects[subject]) count = state.customSubjects[subject].length;
      else if (window.factsData && window.factsData[subject]) count = window.factsData[subject].length;

      const coveredList = state.covered[subject] || [];
      const coveredCount = coveredList.length;
      const percent = count > 0 ? Math.round((coveredCount / count) * 100) : 0;

      const button = document.createElement("button");
      button.className = `subject-item ${state.activeSubject === subject ? 'active' : ''}`;
      button.innerHTML = `
        <div class="subject-item-top">
          <span class="subject-name">${subject}</span>
          <span class="subject-count">${count} MCQs</span>
        </div>
        <div class="subject-mini-bar-track">
          <div class="subject-mini-bar-fill" style="width: ${percent}%"></div>
        </div>
      `;
      button.addEventListener("click", () => {
        state.activeSubject = subject;
        state.selectedTopic = "ALL";
        saveState();
        closeSidebar();
        initSubjectView();
      });
      sidebarSubjectList.appendChild(button);
    });
  }

  if (addFactsBtn) {
    addFactsBtn.addEventListener("click", () => {
      const rawSubject = newSubjectNameInput.value.trim();
      const rawText = rawFactsPasteInput.value.trim();

      if (!rawText) {
        alert("Please paste MCQs text first.");
        return;
      }

      const subjectName = rawSubject || state.activeSubject;
      let newMCQs = [];

      if (window.parseRawSubject) {
        newMCQs = window.parseRawSubject(subjectName, rawText);
      }

      if (newMCQs.length === 0) {
        alert("Could not extract valid questions. Ensure standard format.");
        return;
      }

      if (!state.customSubjects[subjectName]) {
        state.customSubjects[subjectName] = [];
      }

      const existing = state.customSubjects[subjectName];
      const builtIn = (window.factsData && window.factsData[subjectName]) || [];
      const allCurrent = [...builtIn, ...existing];

      let addedCount = 0;
      newMCQs.forEach(m => {
        m.id = allCurrent.length + addedCount + 1;
        existing.push(m);
        addedCount++;
      });

      state.activeSubject = subjectName;
      saveState();
      newSubjectNameInput.value = "";
      rawFactsPasteInput.value = "";
      alert(`Added ${addedCount} MCQs to "${subjectName}".`);
      initSubjectView();
      closeSidebar();
    });
  }

  resetProgressBtn.addEventListener("click", () => {
    if (confirm(`Reset progress for "${state.activeSubject}"?`)) {
      state.covered[state.activeSubject] = [];
      state.bookmarks[state.activeSubject] = [];
      state.checkpoints[state.activeSubject] = null;
      state.attempts[state.activeSubject] = {};
      state.revealedAnswers[state.activeSubject] = [];
      if (state.quizStats) state.quizStats[state.activeSubject] = { totalAttempted: 0, totalCorrect: 0 };
      saveState();
      initSubjectView();
      closeSidebar();
    }
  });

  clearAllDataBtn.addEventListener("click", () => {
    if (confirm("Reset ALL application data and progress?")) {
      localStorage.removeItem(STORAGE_KEY);
      window.location.reload();
    }
  });

  // --- BACK TO TOP FLOATING BUTTON LOGIC ---
  const backToTopBtn = document.getElementById("backToTopBtn");
  let lastScrollY = window.scrollY;

  function checkBackToTopVisibility() {
    if (!backToTopBtn) return;

    const currentScrollY = window.scrollY;
    const isScrollingUp = currentScrollY < lastScrollY;
    lastScrollY = currentScrollY;

    const cards = document.querySelectorAll(".fact-card");
    let pastThreshold = false;

    if (cards.length >= 20) {
      const card20 = cards[19];
      const rect = card20.getBoundingClientRect();
      pastThreshold = rect.top <= window.innerHeight;
    } else {
      pastThreshold = currentScrollY > 1200;
    }

    // Only show button if user is past 20th card AND is scrolling UP
    if (pastThreshold && isScrollingUp && currentScrollY > 200) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  }

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    window.addEventListener("scroll", checkBackToTopVisibility, { passive: true });
  }

  // --- INITIALIZATION ---
  function initSubjectView() {
    updateProgressUI();
    renderTopicPills();
    renderSubjectsList();
    if (state.activeMode === "practice") {
      renderFactsList();
    } else {
      initQuizSetup();
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  loadState();
  applyTheme();
  globalShowAnswersToggle.checked = state.showAllAnswers;
  switchMode(state.activeMode || "practice");
  initSubjectView();
});
