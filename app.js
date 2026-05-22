const QUESTIONS = [
  { band: 'Sum 41', q: 'What year was Sum 41 formed?', answers: ['1996', '1999', '2001', '1994'], correct: 0 },
  { band: 'Sum 41', q: "What is Sum 41's debut release?", answers: ['All Killer No Filler', 'Does This Look Infected?', 'Half Hour of Power', 'Chuck'], correct: 2 },
  { band: 'Sum 41', q: 'Which Sum 41 song features the lyric "We\'re all to blame"?', answers: ['Fat Lip', 'In Too Deep', "We're All to Blame", 'Pain for Pleasure'], correct: 2 },
  { band: 'Sum 41', q: "What is the name of Sum 41's vocalist?", answers: ['Tom DeLonge', 'Deryck Whibley', 'Chad Kroeger', 'Bert McCracken'], correct: 1 },
  { band: 'Sum 41', q: 'Which Sum 41 album was dedicated to soldiers they met in the Democratic Republic of Congo?', answers: ['All Killer No Filler', 'Does This Look Infected?', 'Chuck', 'Underclass Hero'], correct: 2 },
  { band: 'Sum 41', q: 'What is the opening track on "All Killer No Filler"?', answers: ['Fat Lip', 'In Too Deep', 'Handle This', 'Motivation'], correct: 0 },

  { band: 'Linkin Park', q: 'What was Linkin Park originally called?', answers: ['Xero', 'Hybrid Theory', 'Zero Hour', 'Meteora'], correct: 0 },
  { band: 'Linkin Park', q: 'Which Linkin Park album features "In the End"?', answers: ['Meteora', 'Minutes to Midnight', 'Hybrid Theory', 'A Thousand Suns'], correct: 2 },
  { band: 'Linkin Park', q: 'Chester Bennington passed away in what year?', answers: ['2015', '2016', '2017', '2018'], correct: 2 },
  { band: 'Linkin Park', q: 'Which rapper collaborated with Linkin Park on "Collision Course"?', answers: ['Eminem', 'Jay-Z', 'Snoop Dogg', 'Dr. Dre'], correct: 1 },
  { band: 'Linkin Park', q: 'What is the opening track on "Hybrid Theory"?', answers: ['Papercut', 'One Step Closer', 'Crawling', 'In the End'], correct: 0 },
  { band: 'Linkin Park', q: 'Which Linkin Park album contains "Numb"?', answers: ['Hybrid Theory', 'Minutes to Midnight', 'Meteora', 'A Thousand Suns'], correct: 2 },

  { band: 'Breaking Benjamin', q: 'Where is Breaking Benjamin from?', answers: ['Los Angeles, CA', 'Wilkes-Barre, PA', 'Chicago, IL', 'Nashville, TN'], correct: 1 },
  { band: 'Breaking Benjamin', q: "What is Breaking Benjamin's debut studio album?", answers: ['We Are Not Alone', 'Saturate', 'Phobia', 'Dear Agony'], correct: 1 },
  { band: 'Breaking Benjamin', q: 'Which Breaking Benjamin song contains the lyric "So sacrifice yourself"?', answers: ['Breath', 'So Cold', 'The Diary of Jane', 'I Will Not Bow'], correct: 2 },
  { band: 'Breaking Benjamin', q: 'Who is the lead vocalist of Breaking Benjamin?', answers: ['Aaron Lewis', 'Jacoby Shaddix', 'Benjamin Burnley', 'Matt Shadows'], correct: 2 },
  { band: 'Breaking Benjamin', q: 'Which album marked Breaking Benjamin\'s comeback after their hiatus?', answers: ['Phobia', 'Dear Agony', 'Dark Before Dawn', 'Ember'], correct: 2 },

  { band: 'Escape the Fate', q: "Who was Escape the Fate's original vocalist?", answers: ['Craig Mabbitt', 'Ronnie Radke', 'Robert Ortiz', 'Bryan Money'], correct: 1 },
  { band: 'Escape the Fate', q: "What is Escape the Fate's debut album?", answers: ['This War Is Ours', 'Dying Is Your Latest Fashion', 'Escape the Fate', 'Ungrateful'], correct: 1 },
  { band: 'Escape the Fate', q: 'Which song put Escape the Fate on the map during the Ronnie Radke era?', answers: ['Not Good Enough for Truth in Cliche', 'The Flood', 'Issues', 'Situations'], correct: 0 },
  { band: 'Escape the Fate', q: 'Craig Mabbitt joined Escape the Fate after leaving which band?', answers: ['Blessthefall', 'Motionless in White', 'Asking Alexandria', 'Black Veil Brides'], correct: 0 },

  { band: 'Falling in Reverse', q: 'Falling in Reverse is fronted by which vocalist?', answers: ['Andy Biersack', 'Ronnie Radke', 'Oliver Sykes', 'Danny Worsnop'], correct: 1 },
  { band: 'Falling in Reverse', q: "What is Falling in Reverse's debut album?", answers: ['Fashionably Late', 'Coming Home', 'The Drug in Me Is You', 'Just Like You'], correct: 2 },
  { band: 'Falling in Reverse', q: 'Ronnie Radke was formerly the vocalist of which band?', answers: ['Escape the Fate', 'Motionless in White', 'Asking Alexandria', 'Crown the Empire'], correct: 0 },
  { band: 'Falling in Reverse', q: 'Which Falling in Reverse song shares its name with their debut album?', answers: ['Fashionably Late', 'Pick Up the Phone', 'The Drug in Me Is You', 'Rolling Stone'], correct: 2 },

  { band: 'Set It Off', q: 'Where is Set It Off from?', answers: ['Tampa, FL', 'Orlando, FL', 'Miami, FL', 'Jacksonville, FL'], correct: 0 },
  { band: 'Set It Off', q: "What is Set It Off's debut studio album?", answers: ['Duality', 'Upside Down', 'Cinematics', 'Midnight'], correct: 2 },
  { band: 'Set It Off', q: 'Who is the lead vocalist of Set It Off?', answers: ['Cody Carson', 'Maxx Danziger', 'Zach DeWall', 'Dan Clermont'], correct: 0 },
  { band: 'Set It Off', q: 'Which Set It Off album includes "Wolf in Sheep\'s Clothing"?', answers: ['Cinematics', 'Duality', 'Upside Down', 'Order in Decline'], correct: 1 },

  { band: 'Fall Out Boy', q: 'What city did Fall Out Boy form in?', answers: ['Chicago, IL', 'New York, NY', 'Los Angeles, CA', 'Detroit, MI'], correct: 0 },
  { band: 'Fall Out Boy', q: "What is Fall Out Boy's debut studio album?", answers: ['From Under the Cork Tree', 'Take This to Your Grave', 'Infinity on High', 'Folie a Deux'], correct: 1 },
  { band: 'Fall Out Boy', q: 'Who is the bassist and primary lyricist of Fall Out Boy?', answers: ['Andy Hurley', 'Joe Trohman', 'Patrick Stump', 'Pete Wentz'], correct: 3 },
  { band: 'Fall Out Boy', q: 'Which Fall Out Boy album features "Sugar, We\'re Goin Down"?', answers: ['Take This to Your Grave', 'Infinity on High', 'From Under the Cork Tree', 'Folie a Deux'], correct: 2 },

  { band: 'Pierce the Veil', q: 'Where is Pierce the Veil from?', answers: ['Los Angeles, CA', 'San Diego, CA', 'San Francisco, CA', 'Sacramento, CA'], correct: 1 },
  { band: 'Pierce the Veil', q: 'Which Pierce the Veil album features "King for a Day"?', answers: ['Collide with the Sky', 'Selfish Machines', 'A Flair for the Dramatic', 'Misadventures'], correct: 0 },
  { band: 'Pierce the Veil', q: 'Who is the lead vocalist of Pierce the Veil?', answers: ['Jaime Preciado', 'Mike Fuentes', 'Tony Perry', 'Vic Fuentes'], correct: 3 },
  { band: 'Pierce the Veil', q: '"King for a Day" features which vocalist from Sleeping with Sirens?', answers: ['Jesse Lawson', 'Kellin Quinn', 'Nick Martin', 'Justin Hills'], correct: 1 },
  { band: 'Pierce the Veil', q: "What is Pierce the Veil's debut album?", answers: ['Selfish Machines', 'A Flair for the Dramatic', 'Collide with the Sky', 'Misadventures'], correct: 1 },
];

const TOTAL_Q = 20;
const TIMER_SECS = 20;
const LETTERS = ['A', 'B', 'C', 'D'];

let questions = [];
let currentIdx = 0;
let score = 0;
let timerInterval = null;
let answered = false;

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function prepareQuestions() {
  return shuffle(QUESTIONS).slice(0, TOTAL_Q).map(q => {
    const indexed = q.answers.map((text, i) => ({ text, isCorrect: i === q.correct }));
    const shuffled = shuffle(indexed);
    return {
      band: q.band,
      question: q.q,
      answers: shuffled,
      correctText: q.answers[q.correct],
    };
  });
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function startGame() {
  questions = prepareQuestions();
  currentIdx = 0;
  score = 0;
  document.getElementById('score-display').textContent = '0';
  showScreen('screen-game');
  loadQuestion();
}

function loadQuestion() {
  answered = false;
  clearInterval(timerInterval);

  const q = questions[currentIdx];
  document.getElementById('q-counter').textContent = `Question ${currentIdx + 1} of ${TOTAL_Q}`;
  document.getElementById('progress-fill').style.width = `${(currentIdx / TOTAL_Q) * 100}%`;
  document.getElementById('band-badge').textContent = q.band;
  document.getElementById('question-text').textContent = q.question;

  document.querySelectorAll('.answer-btn').forEach((btn, i) => {
    btn.className = 'answer-btn';
    btn.disabled = false;
    btn.setAttribute('data-letter', LETTERS[i]);
    btn.dataset.correct = q.answers[i].isCorrect ? '1' : '0';
    btn.textContent = q.answers[i].text;
  });

  startTimer();
}

function startTimer() {
  const bar = document.getElementById('timer-bar');
  bar.style.transition = 'none';
  bar.style.width = '100%';

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      bar.style.transition = `width ${TIMER_SECS}s linear`;
      bar.style.width = '0%';
    });
  });

  let timeLeft = TIMER_SECS;
  timerInterval = setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      handleTimeout();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  const bar = document.getElementById('timer-bar');
  const pct = (parseFloat(getComputedStyle(bar).width) / parseFloat(getComputedStyle(bar.parentElement).width)) * 100;
  bar.style.transition = 'none';
  bar.style.width = `${pct}%`;
}

function handleAnswer(btn) {
  if (answered) return;
  answered = true;
  stopTimer();

  const isCorrect = btn.dataset.correct === '1';
  document.querySelectorAll('.answer-btn').forEach(b => {
    b.disabled = true;
    if (b.dataset.correct === '1') b.classList.add('correct');
  });

  if (isCorrect) {
    score++;
    document.getElementById('score-display').textContent = score;
    showFeedback(true, null);
  } else {
    btn.classList.add('wrong');
    showFeedback(false, `Correct: ${questions[currentIdx].correctText}`);
  }
}

function handleTimeout() {
  if (answered) return;
  answered = true;

  document.querySelectorAll('.answer-btn').forEach(b => {
    b.disabled = true;
    if (b.dataset.correct === '1') b.classList.add('correct');
  });

  showFeedback(false, `Time's up! Correct: ${questions[currentIdx].correctText}`);
}

function showFeedback(correct, detail) {
  const overlay = document.getElementById('overlay-feedback');
  const skeletonWrap = document.getElementById('skeleton-wrap');
  const icon = document.getElementById('feedback-icon');
  const msg = document.getElementById('feedback-msg');
  const det = document.getElementById('feedback-detail');

  overlay.classList.remove('hidden');

  if (correct) {
    skeletonWrap.classList.remove('hidden');
    icon.textContent = '🤘';
    msg.textContent = 'Correct!';
    msg.className = 'correct-msg';
  } else {
    skeletonWrap.classList.add('hidden');
    icon.textContent = '☠️';
    msg.textContent = 'Wrong!';
    msg.className = 'wrong-msg';
  }

  det.textContent = detail || '';

  setTimeout(() => {
    overlay.classList.add('hidden');
    currentIdx++;
    if (currentIdx >= TOTAL_Q) {
      endGame();
    } else {
      loadQuestion();
    }
  }, 2200);
}

function endGame() {
  document.getElementById('progress-fill').style.width = '100%';
  document.getElementById('final-score').textContent = score;

  const verdicts = [
    { max: 4,  text: "Are you sure you're at the right trivia? Maybe try a pop quiz instead!" },
    { max: 9,  text: "You've heard of these bands at least. Hit the discography and come back stronger!" },
    { max: 13, text: "Decent! You know your rock basics. A few more deep dives and you'll be dangerous." },
    { max: 17, text: "Solid rock knowledge! You're clearly a fan — now go listen to more deep cuts." },
    { max: 19, text: "Almost perfect! You're one of the real ones. The pit welcomes you. 🤘" },
    { max: 20, text: "PERFECT SCORE! You're a rock god! The legends bow to you. 🤘💀🤘" },
  ];

  const verdict = verdicts.find(v => score <= v.max);
  document.getElementById('final-verdict').textContent = verdict ? verdict.text : '';

  showScreen('screen-end');
}

document.getElementById('btn-start').addEventListener('click', startGame);
document.getElementById('btn-replay').addEventListener('click', startGame);
document.querySelectorAll('.answer-btn').forEach(btn => {
  btn.addEventListener('click', () => handleAnswer(btn));
});