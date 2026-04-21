// quiz.js — main quiz logic

const sets = [set1, set2, set3, set4];
let currentSet = null;
let userAnswers = [];

const selector      = document.getElementById('setSelector');
const quizContainer = document.getElementById('quizContainer');
const setInfo       = document.getElementById('setInfo');
const setTitle      = document.getElementById('setTitle');
const questionsWrap = document.getElementById('questionsWrap');
const submitBtn     = document.getElementById('submitBtn');
const resultsPanel  = document.getElementById('resultsPanel');
const scoreLine     = document.getElementById('scoreLine');
const scoreBar      = document.getElementById('scoreBar');
const reviewWrap    = document.getElementById('reviewWrap');
const retryBtn      = document.getElementById('retryBtn');

/* ── Populate dropdown ─────────────────────────────────── */
sets.forEach((s, i) => {
  const opt = document.createElement('option');
  opt.value = i;
  opt.textContent = `Set ${i + 1} – ${s.title}`;
  selector.appendChild(opt);
});

/* ── Load chosen set ───────────────────────────────────── */
selector.addEventListener('change', () => {
  const idx = parseInt(selector.value);
  if (isNaN(idx)) {
    quizContainer.classList.add('hidden');
    return;
  }
  loadSet(idx);
});

function loadSet(idx) {
  currentSet  = sets[idx];
  userAnswers = new Array(currentSet.questions.length).fill(null);

  setTitle.textContent = currentSet.title;
  setInfo.textContent  = `${currentSet.questions.length} questions`;

  renderQuestions();

  resultsPanel.classList.add('hidden');
  submitBtn.classList.remove('hidden');
  quizContainer.classList.remove('hidden');

  // Animate in
  requestAnimationFrame(() => {
    quizContainer.style.opacity = '0';
    quizContainer.style.transform = 'translateY(18px)';
    requestAnimationFrame(() => {
      quizContainer.style.transition = 'opacity .45s ease, transform .45s ease';
      quizContainer.style.opacity = '1';
      quizContainer.style.transform = 'translateY(0)';
    });
  });
}

/* ── Render question cards ─────────────────────────────── */
function renderQuestions() {
  questionsWrap.innerHTML = '';

  currentSet.questions.forEach((item, qi) => {
    const card = document.createElement('div');
    card.className = 'question-card';
    card.style.animationDelay = `${qi * 0.04}s`;

    const qText = document.createElement('p');
    qText.className = 'question-text';
    qText.innerHTML = `<span class="q-num">Q${qi + 1}.</span> ${item.q}`;
    card.appendChild(qText);

    const opts = document.createElement('div');
    opts.className = 'options-group';

    item.options.forEach((opt, oi) => {
      const label = document.createElement('label');
      label.className = 'option-label';
      label.htmlFor = `q${qi}_o${oi}`;

      const radio = document.createElement('input');
      radio.type    = 'radio';
      radio.name    = `q${qi}`;
      radio.id      = `q${qi}_o${oi}`;
      radio.value   = oi;
      radio.addEventListener('change', () => {
        userAnswers[qi] = oi;
        // highlight selected
        opts.querySelectorAll('.option-label').forEach(l => l.classList.remove('selected'));
        label.classList.add('selected');
      });

      const letter = document.createElement('span');
      letter.className = 'opt-letter';
      letter.textContent = String.fromCharCode(65 + oi); // A B C D

      const text = document.createElement('span');
      text.className = 'opt-text';
      text.textContent = opt;

      label.appendChild(radio);
      label.appendChild(letter);
      label.appendChild(text);
      opts.appendChild(label);
    });

    card.appendChild(opts);
    questionsWrap.appendChild(card);
  });
}

/* ── Submit ────────────────────────────────────────────── */
submitBtn.addEventListener('click', () => {
  const unanswered = userAnswers.filter(a => a === null).length;
  if (unanswered > 0) {
    if (!confirm(`You have ${unanswered} unanswered question(s). Submit anyway?`)) return;
  }
  showResults();
});

/* ── Results ───────────────────────────────────────────── */
function showResults() {
  const total   = currentSet.questions.length;
  let   correct = 0;

  currentSet.questions.forEach((item, i) => {
    if (userAnswers[i] === item.answer) correct++;
  });

  const pct = Math.round((correct / total) * 100);

  scoreLine.innerHTML = `
    <span class="score-num">${correct}</span>
    <span class="score-sep">/</span>
    <span class="score-den">${total}</span>
    <span class="score-pct">${pct}%</span>
  `;

  // Animate bar after paint
  scoreBar.style.width = '0%';
  scoreBar.className   = 'bar-fill ' + gradeClass(pct);
  setTimeout(() => { scoreBar.style.width = pct + '%'; }, 60);

  renderReview();

  submitBtn.classList.add('hidden');
  resultsPanel.classList.remove('hidden');
  resultsPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function gradeClass(pct) {
  if (pct >= 80) return 'grade-high';
  if (pct >= 50) return 'grade-mid';
  return 'grade-low';
}

/* ── Review wrong answers ──────────────────────────────── */
function renderReview() {
  reviewWrap.innerHTML = '';

  const wrongs = currentSet.questions
    .map((item, i) => ({ item, i, ua: userAnswers[i] }))
    .filter(({ item, ua }) => ua !== item.answer);

  if (wrongs.length === 0) {
    reviewWrap.innerHTML = '<p class="all-correct">🎉 Perfect score! All answers correct.</p>';
    return;
  }

  const heading = document.createElement('h3');
  heading.className  = 'review-heading';
  heading.textContent = `Incorrect Answers (${wrongs.length})`;
  reviewWrap.appendChild(heading);

  wrongs.forEach(({ item, i, ua }) => {
    const card = document.createElement('div');
    card.className = 'review-card';

    const qp = document.createElement('p');
    qp.className = 'review-q';
    qp.innerHTML = `<span class="q-num">Q${i + 1}.</span> ${item.q}`;
    card.appendChild(qp);

    const rows = document.createElement('div');
    rows.className = 'review-rows';

    if (ua !== null) {
      const wrongRow = document.createElement('div');
      wrongRow.className = 'review-row wrong-row';
      wrongRow.innerHTML = `<span class="row-label">Your answer:</span> <span>${item.options[ua]}</span>`;
      rows.appendChild(wrongRow);
    } else {
      const skipRow = document.createElement('div');
      skipRow.className = 'review-row wrong-row';
      skipRow.innerHTML = `<span class="row-label">Your answer:</span> <span class="skipped">Not answered</span>`;
      rows.appendChild(skipRow);
    }

    const corrRow = document.createElement('div');
    corrRow.className = 'review-row correct-row';
    corrRow.innerHTML = `<span class="row-label">Correct answer:</span> <span>${item.options[item.answer]}</span>`;
    rows.appendChild(corrRow);

    card.appendChild(rows);
    reviewWrap.appendChild(card);
  });
}

/* ── Retry ─────────────────────────────────────────────── */
retryBtn.addEventListener('click', () => {
  const idx = parseInt(selector.value);
  loadSet(idx);
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
