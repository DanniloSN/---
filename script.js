const hiragana = [
  { romanji: 'a', symbol: 'あ' },
  { romanji: 'i', symbol: 'い' },
  { romanji: 'u', symbol: 'う' },
  { romanji: 'e', symbol: 'え' },
  { romanji: 'o', symbol: 'お' },
  // K
  { romanji: 'ka', symbol: 'か' },
  { romanji: 'ki', symbol: 'き' },
  { romanji: 'ku', symbol: 'く' },
  { romanji: 'ke', symbol: 'け' },
  { romanji: 'ko', symbol: 'こ' },
  // S
  { romanji: 'sa', symbol: 'さ' },
  { romanji: 'shi', symbol: 'し' },
  { romanji: 'su', symbol: 'す' },
  { romanji: 'se', symbol: 'せ' },
  { romanji: 'so', symbol: 'そ' },
  // T
  { romanji: 'ta', symbol: 'た' },
  { romanji: 'chi', symbol: 'ち' },
  { romanji: 'tsu', symbol: 'つ|っ' },
  { romanji: 'te', symbol: 'て' },
  { romanji: 'to', symbol: 'と' },
  // N
  { romanji: 'na', symbol: 'な' },
  { romanji: 'ni', symbol: 'に' },
  { romanji: 'nu', symbol: 'ぬ' },
  { romanji: 'ne', symbol: 'ね' },
  { romanji: 'no', symbol: 'の' },
  // H
  { romanji: 'ha', symbol: 'は' },
  { romanji: 'hi', symbol: 'ひ' },
  { romanji: 'fu', symbol: 'ふ' },
  { romanji: 'he', symbol: 'へ|ヘ' },
  { romanji: 'ho', symbol: 'ほ' },
  // M
  { romanji: 'ma', symbol: 'ま' },
  { romanji: 'mi', symbol: 'み' },
  { romanji: 'mu', symbol: 'む' },
  { romanji: 'me', symbol: 'め' },
  { romanji: 'mo', symbol: 'も' },
  // Y
  { romanji: 'ya', symbol: 'や|ゃ' },
  { romanji: 'yu', symbol: 'ゆ|ゅ' },
  { romanji: 'yo', symbol: 'よ|ょ' },
  // R
  { romanji: 'ra', symbol: 'ら' },
  { romanji: 'ri', symbol: 'り' },
  { romanji: 'ru', symbol: 'る' },
  { romanji: 're', symbol: 'れ' },
  { romanji: 'ro', symbol: 'ろ' },
  // W
  { romanji: 'wa', symbol: 'わ' },
  { romanji: 'wo', symbol: 'を' },
  // N
  { romanji: 'n', symbol: 'ん' },
  // P
  { romanji: 'pa', symbol: 'ぱ' },
  { romanji: 'pi', symbol: 'ぴ' },
  { romanji: 'pu', symbol: 'ぷ' },
  { romanji: 'pe', symbol: 'ぺ|ペ' },
  { romanji: 'po', symbol: 'ぽ' },
  // G
  { romanji: 'ga', symbol: 'が' },
  { romanji: 'gi', symbol: 'ぎ' },
  { romanji: 'gu', symbol: 'ぐ' },
  { romanji: 'ge', symbol: 'げ' },
  { romanji: 'go', symbol: 'ご' },
  // B
  { romanji: 'ba', symbol: 'ば' },
  { romanji: 'bi', symbol: 'び' },
  { romanji: 'bu', symbol: 'ぶ' },
  { romanji: 'be', symbol: 'べ|ベ' },
  { romanji: 'bo', symbol: 'ぼ' },
  // Z
  { romanji: 'za', symbol: 'ざ' },
  { romanji: 'zi', symbol: 'じ' },
  { romanji: 'zu', symbol: 'ず' },
  { romanji: 'ze', symbol: 'ぜ' },
  { romanji: 'zo', symbol: 'ぞ' },
  // D
  { romanji: 'da', symbol: 'だ' },
  { romanji: 'di', symbol: 'ぢ' },
  { romanji: 'du', symbol: 'づ' },
  { romanji: 'de', symbol: 'で' },
  { romanji: 'do', symbol: 'ど' },
]

const katakana = [
  { romanji: 'a', symbol: 'ア' },
  { romanji: 'i', symbol: 'イ' },
  { romanji: 'u', symbol: 'ウ' },
  { romanji: 'e', symbol: 'エ' },
  { romanji: 'o', symbol: 'オ' },
  // K
  { romanji: 'ka', symbol: 'カ' },
  { romanji: 'ki', symbol: 'キ' },
  { romanji: 'ku', symbol: 'ク' },
  { romanji: 'ke', symbol: 'ケ' },
  { romanji: 'ko', symbol: 'コ' },
  // S
  { romanji: 'sa', symbol: 'サ' },
  { romanji: 'shi', symbol: 'シ' },
  { romanji: 'su', symbol: 'ス' },
  { romanji: 'se', symbol: 'セ' },
  { romanji: 'so', symbol: 'ソ' },
  // T
  { romanji: 'ta', symbol: 'タ' },
  { romanji: 'chi', symbol: 'チ' },
  { romanji: 'tsu', symbol: 'ツ|ッ' },
  { romanji: 'te', symbol: 'テ' },
  { romanji: 'to', symbol: 'ト' },
  // N
  { romanji: 'na', symbol: 'ナ' },
  { romanji: 'ni', symbol: 'ニ' },
  { romanji: 'nu', symbol: 'ヌ' },
  { romanji: 'ne', symbol: 'ネ' },
  { romanji: 'no', symbol: 'ノ' },
  // H
  { romanji: 'ha', symbol: 'ハ' },
  { romanji: 'hi', symbol: 'ヒ' },
  { romanji: 'fu', symbol: 'フ' },
  { romanji: 'he', symbol: 'ヘ|へ' },
  { romanji: 'ho', symbol: 'ホ' },
  // M
  { romanji: 'ma', symbol: 'マ' },
  { romanji: 'mi', symbol: 'ミ' },
  { romanji: 'mu', symbol: 'ム' },
  { romanji: 'me', symbol: 'メ' },
  { romanji: 'mo', symbol: 'モ' },
  // Y
  { romanji: 'ya', symbol: 'ヤ|ャ' },
  { romanji: 'yu', symbol: 'ユ|ュ' },
  { romanji: 'yo', symbol: 'ヨ|ョ' },
  // R
  { romanji: 'ra', symbol: 'ラ' },
  { romanji: 'ri', symbol: 'リ' },
  { romanji: 'ru', symbol: 'ル' },
  { romanji: 're', symbol: 'レ' },
  { romanji: 'ro', symbol: 'ロ' },
  // W
  { romanji: 'wa', symbol: 'ワ' },
  { romanji: 'wo', symbol: 'ヲ' },
  // N
  { romanji: 'n', symbol: 'ン' },
  // P
  { romanji: 'pa', symbol: 'パ' },
  { romanji: 'pi', symbol: 'ピ' },
  { romanji: 'pu', symbol: 'プ' },
  { romanji: 'pe', symbol: 'ペ|ぺ' },
  { romanji: 'po', symbol: 'ポ' },
  // G
  { romanji: 'ga', symbol: 'ガ' },
  { romanji: 'gi', symbol: 'ギ' },
  { romanji: 'gu', symbol: 'グ' },
  { romanji: 'ge', symbol: 'ゲ' },
  { romanji: 'go', symbol: 'ゴ' },
  // B
  { romanji: 'ba', symbol: 'バ' },
  { romanji: 'bi', symbol: 'ビ' },
  { romanji: 'bu', symbol: 'ブ' },
  { romanji: 'be', symbol: 'ベ|べ' },
  { romanji: 'bo', symbol: 'ボ' },
  // Z
  { romanji: 'za', symbol: 'ザ' },
  { romanji: 'zi', symbol: 'ジ' },
  { romanji: 'zu', symbol: 'ズ' },
  { romanji: 'ze', symbol: 'ゼ' },
  { romanji: 'zo', symbol: 'ゾ' },
  // D
  { romanji: 'da', symbol: 'ダ' },
  { romanji: 'di', symbol: 'ヂ' },
  { romanji: 'du', symbol: 'ヅ' },
  { romanji: 'de', symbol: 'デ' },
  { romanji: 'do', symbol: 'ド' },
]

let kanaList = []
let actualKanaType = 'hiragana'
let actualKana = null
let score = 0

const symbolLabel = document.getElementById('symbol-label')
const symbolInput = document.getElementById('symbol-input')
const symbolForm = document.getElementById('symbol-form')
const symbolCount = document.getElementById('symbol-count')
const symbolSwitch = document.getElementById('symbol-switch')

function randomNumber(toNumber) {
  return Math.floor(Math.random() * toNumber)
}

function generateNewRandomKana() {
  const index = randomNumber(kanaList.length)
  actualKana = Object.assign(kanaList[index])
  kanaList.splice(index, 1)
  symbolCount.innerHTML = (71 - kanaList.length)
  symbolLabel.innerHTML = actualKana.romanji
  symbolInput.value = ''
}

function reset() {
  localStorage.setItem('score', score)
  window.location.reload()
}

function start(type) {
  score = 0
  actualKanaType = type
  if (type == 'hiragana') kanaList = Object.assign([], hiragana)
  else kanaList = Object.assign([], katakana)
  generateNewRandomKana()
}

symbolForm.addEventListener('submit', event => {
  event.preventDefault()
  const inputValue = symbolInput.value
  if (inputValue.trim().match(actualKana.symbol)) {
    symbolInput.style.animationName = 'right-answer'
    score += 1
  } else symbolInput.style.animationName = 'wrong-answer'
  if (kanaList.length == 0) {
    const percent = score / 71 * 100
    alert(`Your score: ${score} (${percent}%)`)
    return reset()
  }
  generateNewRandomKana()
})

symbolInput.addEventListener('animationend', () => {
  symbolInput.style.animationName = ''
})

symbolSwitch.addEventListener('change', event => {
  event.preventDefault()
  const inputValue = symbolSwitch.checked
  if (inputValue) start('katakana')
  else start('hiragana')
})

start(actualKanaType)
