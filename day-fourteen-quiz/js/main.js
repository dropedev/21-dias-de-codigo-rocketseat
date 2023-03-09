const question = document.querySelector('.question');
const answers = document.querySelector('.answers');
const textFinish = document.querySelector('.finish span');
const content = document.querySelector('.content');
const contentFinish = document.querySelector('.finish');
const btnRestart = document.querySelector('.finish button');

const questions = [
  {
    question: 'Quanto é 2 + 1?',
    answers: [
      { option: '3', correct: true },
      { option: '1', correct: false },
      { option: '2', correct: false },
    ],
  },
  {
    question: 'Quanto é 2 - 1?',
    answers: [
      { option: '3', correct: false },
      { option: '1', correct: true },
      { option: '2', correct: false },
    ],
  },
  {
    question: 'Quanto é 2 + 4?',
    answers: [
      { option: '6', correct: true },
      { option: '4', correct: false },
      { option: '7', correct: false },
    ],
  },
];

let currentQuestion = 0;
let questionsCorrect = 0;

function checkQuestion(e) {
  if (e.target.getAttribute('data-correct') === 'true') {
    e.target.style.backgroundColor = 'green';
    questionsCorrect++;
  } else {
    e.target.style.backgroundColor = 'red';
  }

  setTimeout(function () {
    nextQuestion();
  }, 1000);
}

function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    loadQuestion();
  } else {
    textFinish.innerHTML = `você acertou ${questionsCorrect} de ${questions.length}`;
    content.style.display = 'none';
    contentFinish.style.display = 'flex';


    btnRestart.addEventListener('click', () => {
      currentQuestion = 0;
      questionsCorrect = 0;

      content.style.display = 'flex';
      contentFinish.style.display = 'none';
      loadQuestion();
    });
  }
}

function loadQuestion() {
  const questionVar = questions[currentQuestion];
  question.textContent = questionVar.question;
  answers.innerHTML = '';

  questionVar.answers.forEach((answer) => {
    const div = document.createElement('div');
    div.innerHTML = `
    <button class="answer" data-correct="${answer.correct}">
    ${answer.option}
    </button>
    `;

    answers.appendChild(div);
  });

  document.querySelectorAll('.answer').forEach((answer) => {
    answer.addEventListener('click', checkQuestion);
  });
}

loadQuestion();


