// QuickFacts Core Application Logic

document.addEventListener("DOMContentLoaded", () => {
  // --- APPLICATION STATE ---
  let state = {
    activeSubject: "Computer Networking",
    theme: "dark",
    showAllAnswers: false,
    customSubjects: {}, // { [subjectName]: [ { id, category, question, answer } ] }
    bookmarks: {},      // { [subjectName]: [id1, id2, ...] }
    covered: {},        // { [subjectName]: [id1, id2, ...] }
    checkpoints: {},    // { [subjectName]: id }
  };

  // --- LOCAL STORAGE KEY ---
  const STORAGE_KEY = "quickfacts_state_v1";

  // --- DOM ELEMENTS ---
  const body = document.body;
  const sidebar = document.getElementById("settingsSidebar");
  const sidebarOverlay = document.getElementById("sidebarOverlay");
  const sidebarToggleBtn = document.getElementById("sidebarToggle");
  const sidebarCloseBtn = document.getElementById("sidebarClose");
  const themeToggleTopBtn = document.getElementById("themeToggleTop");
  const darkModeToggle = document.getElementById("darkModeToggle");
  const globalShowAnswersToggle = document.getElementById("globalShowAnswersToggle");
  
  const searchInput = document.getElementById("searchInput");
  const searchClear = document.getElementById("searchClear");
  const filterBookmarks = document.getElementById("filterBookmarks");
  const filterUncovered = document.getElementById("filterUncovered");
  
  const checkpointBanner = document.getElementById("checkpointBanner");
  const checkpointNumber = document.getElementById("checkpointNumber");
  const jumpToCheckpointBtn = document.getElementById("jumpToCheckpoint");
  
  const factsListContainer = document.getElementById("factsList");
  const currentSubjectBadge = document.getElementById("currentSubjectBadge");
  const progressPercentage = document.getElementById("progressPercentage");
  const progressBarFill = document.getElementById("progressBarFill");
  const progressCount = document.getElementById("progressCount");
  const bookmarkCount = document.getElementById("bookmarkCount");
  
  const sidebarSubjectList = document.getElementById("sidebarSubjectList");
  const newSubjectNameInput = document.getElementById("newSubjectName");
  const rawFactsPasteInput = document.getElementById("rawFactsPaste");
  const addFactsBtn = document.getElementById("addFactsBtn");
  
  const resetProgressBtn = document.getElementById("resetProgressBtn");
  const clearAllDataBtn = document.getElementById("clearAllDataBtn");

  // --- ACTIVE FILTERS ---
  let searchFilter = "";
  let bookmarksFilterOnly = false;
  let uncoveredFilterOnly = false;

  // --- STATE PERSISTENCE ---
  
  // Load State from LocalStorage
  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Deep merge with fallback values to prevent errors
        state = {
          activeSubject: parsed.activeSubject || "Computer Networking",
          theme: parsed.theme || "dark",
          showAllAnswers: !!parsed.showAllAnswers,
          customSubjects: parsed.customSubjects || {},
          bookmarks: parsed.bookmarks || {},
          covered: parsed.covered || {},
          checkpoints: parsed.checkpoints || {},
        };
      }
    } catch (e) {
      console.error("Failed to load state from localStorage:", e);
    }
  }

  // Save State to LocalStorage
  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error("Failed to save state to localStorage:", e);
    }
  }

  // --- SUBJECT HELPER ---
  // Retrieves facts for the active subject (combines built-in and custom)
  function getActiveSubjectFacts() {
    const subject = state.activeSubject;
    // Check custom subjects first
    if (state.customSubjects[subject]) {
      return state.customSubjects[subject];
    }
    // Check built-in parsed subjects
    if (window.factsData && window.factsData[subject]) {
      return window.factsData[subject];
    }
    return [];
  }

  // Get list of all subjects (built-in + custom)
  function getAllSubjects() {
    const builtIn = window.factsData ? Object.keys(window.factsData) : [];
    const custom = Object.keys(state.customSubjects);
    return Array.from(new Set([...builtIn, ...custom]));
  }

  // --- UI CONTROLS: THEME & SIDEBAR ---

  function applyTheme() {
    if (state.theme === "dark") {
      body.classList.add("dark-mode");
      body.classList.remove("light-mode");
      darkModeToggle.checked = true;
    } else {
      body.classList.add("light-mode");
      body.classList.remove("dark-mode");
      darkModeToggle.checked = false;
    }
  }

  function toggleTheme() {
    state.theme = state.theme === "dark" ? "light" : "dark";
    applyTheme();
    saveState();
  }

  function openSidebar() {
    sidebar.classList.add("active");
    sidebarOverlay.classList.add("active");
  }

  function closeSidebar() {
    sidebar.classList.remove("active");
    sidebarOverlay.classList.remove("active");
  }

  // --- RENDER FUNCTIONS ---

  // Render list of subjects in the sidebar
  function renderSubjectsList() {
    sidebarSubjectList.innerHTML = "";
    const subjects = getAllSubjects();
    
    subjects.forEach(subject => {
      let factsCount = 0;
      if (state.customSubjects[subject]) {
        factsCount = state.customSubjects[subject].length;
      } else if (window.factsData && window.factsData[subject]) {
        factsCount = window.factsData[subject].length;
      }

      const button = document.createElement("button");
      button.className = `subject-item ${state.activeSubject === subject ? 'active' : ''}`;
      button.innerHTML = `
        <span>${subject}</span>
        <span class="subject-count">${factsCount}</span>
      `;
      button.addEventListener("click", () => {
        state.activeSubject = subject;
        saveState();
        closeSidebar();
        initSubjectView();
      });
      sidebarSubjectList.appendChild(button);
    });
  }

  // Update overall progress bar & stats
  function updateProgressUI() {
    const facts = getActiveSubjectFacts();
    const total = facts.length;
    
    // Initialize empty arrays if not present
    if (!state.covered[state.activeSubject]) state.covered[state.activeSubject] = [];
    if (!state.bookmarks[state.activeSubject]) state.bookmarks[state.activeSubject] = [];
    
    const coveredCount = state.covered[state.activeSubject].length;
    const bookmarkedCount = state.bookmarks[state.activeSubject].length;
    
    // Calculate percentage
    const percent = total > 0 ? Math.round((coveredCount / total) * 100) : 0;
    
    currentSubjectBadge.textContent = state.activeSubject;
    progressPercentage.textContent = `${percent}% Covered`;
    progressBarFill.style.width = `${percent}%`;
    progressCount.textContent = `${coveredCount} / ${total} facts covered`;
    bookmarkCount.textContent = `${bookmarkedCount} bookmarked`;

    // Render Checkpoint Banner
    const checkpointId = state.checkpoints[state.activeSubject];
    if (checkpointId) {
      // Find the fact to show its relative display number
      const factIndex = facts.findIndex(f => f.id === checkpointId);
      if (factIndex !== -1) {
        checkpointBanner.style.display = "flex";
        checkpointNumber.textContent = `#${factIndex + 1}`;
      } else {
        checkpointBanner.style.display = "none";
      }
    } else {
      checkpointBanner.style.display = "none";
    }
  }

  // Render Fact Cards with active filters
  function renderFactsList() {
    factsListContainer.innerHTML = "";
    const facts = getActiveSubjectFacts();
    
    if (facts.length === 0) {
      factsListContainer.innerHTML = `
        <div class="empty-state">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          <p>No facts found. Use the sidebar to import facts to this subject!</p>
        </div>
      `;
      return;
    }

    const coveredList = state.covered[state.activeSubject] || [];
    const bookmarkedList = state.bookmarks[state.activeSubject] || [];
    const activeCheckpoint = state.checkpoints[state.activeSubject] || null;

    // Filter facts
    const filteredFacts = facts.filter((fact, index) => {
      // Search Filter (fuzzy match on question or answer)
      if (searchFilter) {
        const query = searchFilter.toLowerCase();
        const inQuestion = fact.question.toLowerCase().includes(query);
        const inAnswer = fact.answer.toLowerCase().includes(query);
        if (!inQuestion && !inAnswer) return false;
      }

      // Bookmarks Filter
      if (bookmarksFilterOnly) {
        if (!bookmarkedList.includes(fact.id)) return false;
      }

      // Uncovered Filter
      if (uncoveredFilterOnly) {
        if (coveredList.includes(fact.id)) return false;
      }

      return true;
    });

    if (filteredFacts.length === 0) {
      factsListContainer.innerHTML = `
        <div class="empty-state">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <p>No facts match your search or filters.</p>
        </div>
      `;
      return;
    }

    // Render filtered facts
    filteredFacts.forEach((fact) => {
      // Find its absolute sequence number in the full subject list
      const absoluteIndex = facts.findIndex(f => f.id === fact.id) + 1;
      
      const isCovered = coveredList.includes(fact.id);
      const isBookmarked = bookmarkedList.includes(fact.id);
      const isCheckpoint = activeCheckpoint === fact.id;
      
      const card = document.createElement("article");
      card.className = `fact-card ${isCheckpoint ? 'is-checkpoint' : ''}`;
      card.id = `fact-card-${fact.id}`;

      card.innerHTML = `
        <div class="fact-header">
          <span class="fact-num">Fact #${absoluteIndex}</span>
          <span class="fact-category">${fact.category || 'General'}</span>
        </div>
        <div class="fact-question">${fact.question}</div>
        
        <div class="fact-answer-container ${state.showAllAnswers ? 'show' : ''}">
          <div class="fact-answer">${fact.answer}</div>
        </div>

        <div class="fact-actions">
          <div class="action-left">
            <!-- Covered toggle -->
            <button class="card-action-btn btn-cover" data-id="${fact.id}" data-covered="${isCovered}">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>${isCovered ? 'Covered' : 'Mark Covered'}</span>
            </button>
            
            <!-- Bookmark toggle -->
            <button class="card-action-btn btn-bookmark" data-id="${fact.id}" data-bookmarked="${isBookmarked}" title="Add to Revision Bookmarks">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </button>

            <!-- Checkpoint toggle -->
            <button class="card-action-btn btn-checkpoint" data-id="${fact.id}" data-checkpoint="${isCheckpoint}" title="Pin Study Checkpoint">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </button>
          </div>

          <div class="action-right">
            <!-- Toggle Answer button -->
            <button class="card-action-btn btn-toggle-answer" data-id="${fact.id}">
              ${state.showAllAnswers ? 'Hide Answer' : 'Show Answer'}
            </button>
          </div>
        </div>
      `;

      // Attach Card Actions
      
      // 1. Toggle Answer
      const toggleAnswerBtn = card.querySelector(".btn-toggle-answer");
      const answerContainer = card.querySelector(".fact-answer-container");
      toggleAnswerBtn.addEventListener("click", () => {
        const isShowing = answerContainer.classList.toggle("show");
        toggleAnswerBtn.textContent = isShowing ? "Hide Answer" : "Show Answer";
      });

      // 2. Mark Covered
      const coverBtn = card.querySelector(".btn-cover");
      coverBtn.addEventListener("click", () => {
        let covered = state.covered[state.activeSubject] || [];
        const isCurrentlyCovered = covered.includes(fact.id);

        if (isCurrentlyCovered) {
          // Uncover
          covered = covered.filter(id => id !== fact.id);
          coverBtn.setAttribute("data-covered", "false");
          coverBtn.querySelector("span").textContent = "Mark Covered";
        } else {
          // Cover
          covered.push(fact.id);
          coverBtn.setAttribute("data-covered", "true");
          coverBtn.querySelector("span").textContent = "Covered";
        }

        state.covered[state.activeSubject] = covered;
        saveState();
        updateProgressUI();

        // If Uncovered filter is active, fade out card
        if (uncoveredFilterOnly && !isCurrentlyCovered) {
          card.style.opacity = "0";
          card.style.transform = "scale(0.95)";
          setTimeout(() => {
            renderFactsList();
          }, 250);
        }
      });

      // 3. Toggle Bookmark
      const bookmarkBtn = card.querySelector(".btn-bookmark");
      bookmarkBtn.addEventListener("click", () => {
        let bookmarks = state.bookmarks[state.activeSubject] || [];
        const isCurrentlyBookmarked = bookmarks.includes(fact.id);

        if (isCurrentlyBookmarked) {
          // Unbookmark
          bookmarks = bookmarks.filter(id => id !== fact.id);
          bookmarkBtn.setAttribute("data-bookmarked", "false");
        } else {
          // Bookmark
          bookmarks.push(fact.id);
          bookmarkBtn.setAttribute("data-bookmarked", "true");
        }

        state.bookmarks[state.activeSubject] = bookmarks;
        saveState();
        updateProgressUI();

        // If Bookmarks filter is active, fade out card
        if (bookmarksFilterOnly && isCurrentlyBookmarked) {
          card.style.opacity = "0";
          card.style.transform = "scale(0.95)";
          setTimeout(() => {
            renderFactsList();
          }, 250);
        }
      });

      // 4. Set Pin/Checkpoint
      const checkpointBtn = card.querySelector(".btn-checkpoint");
      checkpointBtn.addEventListener("click", () => {
        const currentCheckpoint = state.checkpoints[state.activeSubject];
        
        if (currentCheckpoint === fact.id) {
          // Clear checkpoint
          state.checkpoints[state.activeSubject] = null;
        } else {
          // Set checkpoint
          state.checkpoints[state.activeSubject] = fact.id;
        }

        saveState();
        updateProgressUI();
        
        // Fully re-render to update classes of other checkpoint cards
        renderFactsList();
      });

      factsListContainer.appendChild(card);
    });
  }

  // Initialize View when loading/switching a subject
  function initSubjectView() {
    updateProgressUI();
    renderFactsList();
    renderSubjectsList();
  }

  // --- ACTIONS & HANDLERS ---

  // Jump to active checkpoint card
  function jumpToCheckpoint() {
    const checkpointId = state.checkpoints[state.activeSubject];
    if (!checkpointId) return;

    // Force clear filters if checkpoint card is hidden by search/bookmark filters
    let filtersCleared = false;
    if (searchFilter || bookmarksFilterOnly || uncoveredFilterOnly) {
      searchFilter = "";
      searchInput.value = "";
      searchClear.style.display = "none";
      
      bookmarksFilterOnly = false;
      filterBookmarks.setAttribute("data-active", "false");
      
      uncoveredFilterOnly = false;
      filterUncovered.setAttribute("data-active", "false");
      
      renderFactsList();
      filtersCleared = true;
    }

    const scrollTarget = () => {
      const card = document.getElementById(`fact-card-${checkpointId}`);
      if (card) {
        card.scrollIntoView({ behavior: "smooth", block: "center" });
        card.classList.add("glow-pulse");
        setTimeout(() => {
          card.classList.remove("glow-pulse");
        }, 2000);
      }
    };

    if (filtersCleared) {
      // Small timeout to allow layout shifts to settle before scrolling
      setTimeout(scrollTarget, 100);
    } else {
      scrollTarget();
    }
  }

  // Search input typing
  searchInput.addEventListener("input", (e) => {
    searchFilter = e.target.value;
    searchClear.style.display = searchFilter ? "block" : "none";
    renderFactsList();
  });

  // Clear Search
  searchClear.addEventListener("click", () => {
    searchFilter = "";
    searchInput.value = "";
    searchClear.style.display = "none";
    renderFactsList();
  });

  // Filter Bookmarks toggle
  filterBookmarks.addEventListener("click", () => {
    bookmarksFilterOnly = !bookmarksFilterOnly;
    filterBookmarks.setAttribute("data-active", bookmarksFilterOnly ? "true" : "false");
    renderFactsList();
  });

  // Filter Uncovered toggle
  filterUncovered.addEventListener("click", () => {
    uncoveredFilterOnly = !uncoveredFilterOnly;
    filterUncovered.setAttribute("data-active", uncoveredFilterOnly ? "true" : "false");
    renderFactsList();
  });

  // Jump Button Click
  jumpToCheckpointBtn.addEventListener("click", jumpToCheckpoint);

  // --- SIDEBAR ACTIONS ---

  // Sidebar controls
  sidebarToggleBtn.addEventListener("click", openSidebar);
  sidebarCloseBtn.addEventListener("click", closeSidebar);
  sidebarOverlay.addEventListener("click", closeSidebar);
  themeToggleTopBtn.addEventListener("click", toggleTheme);
  
  darkModeToggle.addEventListener("change", () => {
    state.theme = darkModeToggle.checked ? "dark" : "light";
    applyTheme();
    saveState();
  });

  globalShowAnswersToggle.addEventListener("change", () => {
    state.showAllAnswers = globalShowAnswersToggle.checked;
    saveState();
    renderFactsList();
  });

  // Custom facts import
  addFactsBtn.addEventListener("click", () => {
    const rawSubject = newSubjectNameInput.value.trim();
    const rawText = rawFactsPasteInput.value.trim();

    if (!rawText) {
      alert("Please paste some text questions first.");
      return;
    }

    const subjectName = rawSubject || state.activeSubject;

    // Use parseRawSubject from questions.js (exposed as window.parseRawSubject or via export)
    // In questions.js, parseRawSubject is internal but window.factsData contains getParsedData()
    // Let's implement parsing directly if parseRawSubject is not global,
    // but in questions.js we have functions. Let's make sure it's accessible.
    let newFacts = [];
    if (typeof parseRawSubject === "function") {
      newFacts = parseRawSubject(subjectName, rawText);
    } else {
      // Fallback in case parseRawSubject isn't exposed (but we did write it in questions.js)
      // Let's verify parseRawSubject scope. We can call parseRawSubject if it's in the global window namespace
      // Let's check window.factsData. In questions.js we exported window.factsData
      // We also need to expose parseRawSubject, so let's make sure it is on window
      if (window.parseRawSubject) {
        newFacts = window.parseRawSubject(subjectName, rawText);
      } else {
        alert("Parser engine not loaded. Please reload the page.");
        return;
      }
    }

    if (newFacts.length === 0) {
      alert("Could not extract any valid facts. Check the formatting: numbers like '1.' followed by lines.");
      return;
    }

    // Merge custom facts
    // If the subject already exists in customSubjects, deduplicate against existing questions
    if (!state.customSubjects[subjectName]) {
      state.customSubjects[subjectName] = [];
    }

    const existingFacts = state.customSubjects[subjectName];
    // Built-in facts for this subject, if any
    const builtInFacts = (window.factsData && window.factsData[subjectName]) || [];
    const allCurrentFacts = [...builtInFacts, ...existingFacts];

    // Check normalized questions to avoid duplicates
    const normalizeQuestionText = (text) => text.toLowerCase().replace(/[^a-z0-9]/g, "").trim();
    const existingNorms = new Set(allCurrentFacts.map(f => normalizeQuestionText(f.question)));

    let addedCount = 0;
    newFacts.forEach(fact => {
      const normQ = normalizeQuestionText(fact.question);
      if (!existingNorms.has(normQ)) {
        existingNorms.add(normQ);
        
        // Set new ID based on total count
        const nextId = allCurrentFacts.length + addedCount + 1;
        existingFacts.push({
          id: nextId,
          category: fact.category,
          question: fact.question,
          answer: fact.answer
        });
        addedCount++;
      }
    });

    if (addedCount === 0) {
      alert("All parsed questions already exist in this subject. No duplicates were added!");
    } else {
      state.activeSubject = subjectName;
      saveState();
      
      newSubjectNameInput.value = "";
      rawFactsPasteInput.value = "";
      
      alert(`Import complete! Added ${addedCount} unique facts to "${subjectName}".`);
      initSubjectView();
      closeSidebar();
    }
  });

  // Reset Progress of Active Subject
  resetProgressBtn.addEventListener("click", () => {
    const confirmReset = confirm(`Are you sure you want to reset your study progress (bookmarks, covered, checkpoint) for "${state.activeSubject}"?`);
    if (confirmReset) {
      state.covered[state.activeSubject] = [];
      state.bookmarks[state.activeSubject] = [];
      state.checkpoints[state.activeSubject] = null;
      
      saveState();
      initSubjectView();
      closeSidebar();
      alert("Progress reset successful!");
    }
  });

  // Reset all custom data (nuclear reset)
  clearAllDataBtn.addEventListener("click", () => {
    const confirmClear = confirm("WARNING: This will delete all custom imported subjects, your bookmarks, checkpoints, and covered stats for ALL subjects. This cannot be undone. Proceed?");
    if (confirmClear) {
      localStorage.removeItem(STORAGE_KEY);
      // Reload page to reset state completely
      window.location.reload();
    }
  });

  // --- INITIALIZATION ---

  loadState();
  applyTheme();
  
  // Set global toggle states
  globalShowAnswersToggle.checked = state.showAllAnswers;
  
  initSubjectView();
});
