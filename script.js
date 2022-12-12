let hiragana = [
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
  { romanji: 'tsu', symbol: 'つ' },
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
  { romanji: 'he', symbol: 'へ' },
  { romanji: 'ho', symbol: 'ほ' },
  // M
  { romanji: 'ma', symbol: 'ま' },
  { romanji: 'mi', symbol: 'み' },
  { romanji: 'mu', symbol: 'む' },
  { romanji: 'me', symbol: 'め' },
  { romanji: 'mo', symbol: 'も' },
  // Y
  { romanji: 'ya', symbol: 'や' },
  { romanji: 'yu', symbol: 'ゆ' },
  { romanji: 'yo', symbol: 'よ' },
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
  { romanji: 'pe', symbol: 'ぺ' },
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
  { romanji: 'be', symbol: 'べ' },
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

let actualHiragana = null

function randomNumber(toNumber) {
  return Math.floor(Math.random() * toNumber)
}

function generateNewRandomHiragana() {
  const index = randomNumber(hiragana.length)
  actualHiragana = Object.assign(hiragana[index])
  document.getElementById('hiragana-label').innerHTML = actualHiragana.romanji
  document.getElementById('hiragana-input').value = ''
}

document.getElementById('hiragana-form').addEventListener('submit', event => {
  event.preventDefault()
  const inputValue = document.getElementById('hiragana-input').value
  if (inputValue == actualHiragana.symbol) generateNewRandomHiragana()
})

generateNewRandomHiragana()
