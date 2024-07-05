const godanVerbs = [
  { kanji: "合う", reading: "あう", meaning: "To meet (with people)" },
  { kanji: "開く", reading: "あく", meaning: "To open" },
  { kanji: "遊ぶ", reading: "あそぶ", meaning: "To play" },
  { kanji: "洗う", reading: "あらう", meaning: "To wash" },
  { kanji: "在る", reading: "ある", meaning: "To exist" },
  { kanji: "有る", reading: "ある", meaning: "To have, to possess" },
  { kanji: "歩く", reading: "ある", meaning: "To walk" },
  { kanji: "言う", reading: "いう", meaning: "To say, to speak" },
  { kanji: "行く", reading: "いく", meaning: "To go" },
  {
    kanji: "要る",
    reading: "いる",
    meaning: "To need, to be necessary",
  },
  { kanji: "歌う", reading: "うたう", meaning: "To sing" },
  { kanji: "売る", reading: "うる", meaning: "To sell" },
  { kanji: "置く", reading: "おく", meaning: "To put, to place" },
  { kanji: "送る", reading: "おくる", meaning: "To send" },
  { kanji: "押す", reading: "おす", meaning: "To push, to press" },
  { kanji: "泳ぐ", reading: "およぐ", meaning: "To swim" },
  { kanji: "終わる", reading: "おわる", meaning: "To finish, to end" },
  { kanji: "買う", reading: "かう", meaning: "To buy" },
  { kanji: "返す", reading: "かえす", meaning: "To return (an object)" },
  { kanji: "帰る", reading: "かえる", meaning: "To return home" },
  { kanji: "掛かる", reading: "かかる", meaning: "To take (time, money)" },
  { kanji: "書く", reading: "かく", meaning: "To write, to draw" },
  { kanji: "貸す", reading: "かす", meaning: "To lend" },
  { kanji: "被る", reading: "かぶる", meaning: "To put on (a hat)" },
  { kanji: "聞く", reading: "きく", meaning: "To listen, to hear" },
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
  verbLabel.innerHTML = `${actualVerb.kanji} (${actualVerb.reading}) - ${actualVerb.meaning}`;
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
