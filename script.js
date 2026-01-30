//knknnlnlnlnln
const questions = [
  { name: "Segelboote", emoji: "⛵" },
  { name: "Bär", emoji: "🥁" },
  { name: "Autos", emoji: "🚗" },
  { name: "Enten", emoji: "🦆" },
  { name: "Eimer", emoji: "🪣" }
];

let currentIndex = 0;

const shelf = document.querySelector(".shelf").textContent;
const currentToyName = document.getElementById("currentToyName");
const toyImage = document.getElementById("toyImage");
const result = document.getElementById("result");
const userAnswer = document.getElementById("userAnswer");

function updateQuestion() {
  const q = questions[currentIndex];
  currentToyName.textContent = q.name;
  toyImage.textContent = q.emoji;
  userAnswer.value = "";
  result.textContent = "";
}

function checkAnswer() {
  const q = questions[currentIndex];
  // Считаем сколько выбранных игрушек на полке
  const correctAnswer = (shelf.match(new RegExp(q.emoji, "g")) || []).length;
  const userValue = Number(userAnswer.value);

  if (userValue === correctAnswer) {
    result.textContent = "✔ Gut gemacht!";
    result.style.color = "green";
  } else {
    result.textContent = "✖ Versuchen Sie es erneut";
    result.style.color = "red";
    return; // не переходим к следующему вопросу пока неверно
  }

  currentIndex++;
  if (currentIndex < questions.length) {
    updateQuestion();
  } else {
    result.textContent = "🎉 Alle Fragen beantwortet!";
    currentToyName.textContent = "";
    toyImage.textContent = "";
  }
}

// Инициализация первого вопроса
updateQuestion();
