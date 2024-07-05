const godanVerbs = [
  { kanji: "合う", reading: "あう", meaning: "Encontrar (com pessoas)" },
  { kanji: "開く", reading: "あく", meaning: "Abrir" },
  { kanji: "遊ぶ", reading: "あそぶ", meaning: "Brincar" },
  { kanji: "洗う", reading: "あらう", meaning: "Lavar" },
  { kanji: "在る", reading: "ある", meaning: "Existir" },
  { kanji: "有る", reading: "ある", meaning: "Possuir, ter" },
  { kanji: "歩く", reading: "ある", meaning: "Andar" },
  { kanji: "言う", reading: "いう", meaning: "Falar, dizer" },
  { kanji: "行く", reading: "いく", meaning: "Ir" },
  {
    kanji: "要る",
    reading: "いる",
    meaning: "Precisar, precisar ter, ser necessário",
  },
  { kanji: "歌う", reading: "うたう", meaning: "Cantar" },
  { kanji: "売る", reading: "うる", meaning: "Vender" },
  { kanji: "置く", reading: "おく", meaning: "Colocar, deixar?" },
  { kanji: "送る", reading: "おくる", meaning: "Enviar" },
  { kanji: "押す", reading: "おす", meaning: "Empurrar, pressionar?" },
  { kanji: "泳ぐ", reading: "およぐ", meaning: "Nadar" },
  { kanji: "終わる", reading: "おわる", meaning: "Terminar" },
  { kanji: "買う", reading: "かう", meaning: "Comprar" },
  { kanji: "返す", reading: "かえす", meaning: "Retornar um objeto" },
  { kanji: "帰る", reading: "かえる", meaning: "Retornar para casa" },
  { kanji: "掛かる", reading: "かかる", meaning: "Pegar (tempo e dinheiro)" },
  { kanji: "書く", reading: "かく", meaning: "Desenhar" },
  { kanji: "貸す", reading: "かす", meaning: "Emprestar" },
  { kanji: "被る", reading: "かぶる", meaning: "Colocar (um chapéu)" },
  { kanji: "聞く", reading: "きく", meaning: "Ouvir" },
];

const verbsFinals = {
  う: ["あ", "い", "う", "え", "お"],
  く: ["か", "き", "く", "け", "こ"],
  ぐ: ["が", "ぎ", "ぐ", "げ", "ご"],
  ぶ: ["ば", "び", "ぶ", "べ", "ぼ"],
  る: ["ら", "り", "る", "れ", "ろ"],
  す: ["さ", "し", "す", "せ", "そ"],
};

function formatGodan(verb = "") {
  const lastKana = verb.slice(-1);
  const iForm = verbsFinals[lastKana][1];
  verb = verb.slice(0, -1);
  return `${verb}${iForm}ます`;
}

let verbList = [];
let actualVerb = {};
let score = 0;

const verbLabel = document.getElementById("verb-label");
const verbInput = document.getElementById("verb-input");
const verbForm = document.getElementById("verb-form");
const verbCount = document.getElementById("verb-count");
const verbQuantity = document.getElementById("verb-quantity");

function randomNumber(toNumber) {
  return Math.floor(Math.random() * toNumber);
}

function generateNewRandomVerb() {
  const index = randomNumber(verbList.length);
  actualVerb = Object.assign(verbList[index]);
  actualVerb.answers = [
    formatGodan(actualVerb.reading),
    formatGodan(actualVerb.kanji),
  ];
  verbList.splice(index, 1);
  verbCount.innerHTML = godanVerbs.length - verbList.length;
  verbLabel.innerHTML = actualVerb.kanji;
  verbInput.value = "";
}

function reset() {
  localStorage.setItem("score", score);
  window.location.reload();
}

function start() {
  score = 0;
  verbList = Object.assign([], godanVerbs);
  verbQuantity.innerHTML = verbList.length;
  generateNewRandomVerb();
}

verbForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputValue = verbInput.value;
  if (actualVerb.answers.includes(inputValue.trim())) {
    verbInput.style.animationName = "right-answer";
    score += 1;
  } else verbInput.style.animationName = "wrong-answer";
  if (verbList.length == 0) {
    const percent = (score / godanVerbs.length) * 100;
    alert(`Your score: ${score} (${percent}%)`);
    return reset();
  }
  generateNewRandomVerb();
});

verbForm.addEventListener("animationend", () => {
  verbInput.style.animationName = "";
});

start();
