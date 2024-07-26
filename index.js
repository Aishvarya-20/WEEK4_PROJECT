const quizData = [
    {
      question: "What is the most common surname in the United States?",
      a: "Smith",
      b: "John",
      c: "Joseph",
      d: "Antony",
      correct: "a",
    },
    {
      question: "How many minutes are in a full week?",
      a: 10005,
      b: 10080,
      c: 12000,
      d: 11000,
      correct: "b",
    },
    {
      question: "What company was originally called Cadabra?",
      a: "Flipkart",
      b: "Amazon",
      c: "Meesho",
      d: "OLX",
      correct: "b",
    },
    {
      question: "What software company is headquartered in Redmond, Washington?",
      a: "Microsoft",
      b: "Amazon",
      c: "Wipro",
      d: "Facebook",
      correct: "a",
    },
  ];
  
  const quiz = document.getElementById('quiz');
  const answerEls = document.querySelectorAll('.answer');
  const questionEl = document.getElementById('question');
  const a_text = document.getElementById('a_text');
  const b_text = document.getElementById('b_text');
  const c_text = document.getElementById('c_text');
  const d_text = document.getElementById('d_text');
  const submitBtn = document.getElementById('submit');
  const scoreEl = document.getElementById('score');
  const timerEl = document.getElementById('timer');
  
  let currentQuiz = 0;
  let score = 0;
  let timeLeft = 30;
  
  loadQuiz();
  
  function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    timerEl.innerText = `Time: ${timeLeft} seconds`;
    scoreEl.innerText = `Score: ${score}`;
  }
  
  function deselectAnswers() {
    answerEls.forEach((answerEl) => (answerEl.checked = false));
  }
  
  function getSelected() {
    let answer;
    answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
        answer = answerEl.id;
      }
    });
    return answer;
  }
  
  submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
      const selectedAnswerEl = document.getElementById(answer);
      if (answer === quizData[currentQuiz].correct) {
        score++;
        scoreEl.innerText = `Score: ${score}`;
        selectedAnswerEl.style.color = "green";
        setTimeout(() => {
          selectedAnswerEl.style.color = "";
        }, 1000);
      } else {
        selectedAnswerEl.style.color = "red";
        setTimeout(() => {
          selectedAnswerEl.style.color = "";
        }, 1000);
      }
      currentQuiz++;
      if (currentQuiz < quizData.length) {
        loadQuiz();
      } else {
        quiz.innerHTML = `
          <h2>You answered ${score}/${quizData.length} questions correctly</h2>
          <button onclick="location.reload()">Reload</button>
        `;
      }
    }
  });
  
  setInterval(() => {
    timeLeft--;
    timerEl.innerText = `Time: ${timeLeft} seconds`;
    if (timeLeft <= 0) {
      quiz.innerHTML = `
        <h2>Time's up! You answered ${score}/${quizData.length} questions correctly</h2>
        <button onclick="location.reload()">Reload</button>
      `;
    }
  }, 1000);
  const videoElement = document.getElementById('myVideo');

  videoElement.playbackRate = 1.0;