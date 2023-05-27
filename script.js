let kanjiList = [
    {kanji: "日", hiragana: "に", sentence: "日本の日は暑いです。"},
    {kanji: "月", hiragana: "つき", sentence: "月がきれいですね。"},
    // add more kanji data here
];
let currentKanji = null;

function showKanji(kanjiData) {
    currentKanji = kanjiData;
    document.getElementById('hiragana').innerText = kanjiData.hiragana;
    document.getElementById('sentence').innerText = kanjiData.sentence.replace(kanjiData.kanji, kanjiData.hiragana);
    document.getElementById('kanji').innerText = '';
}

function revealKanji() {
    if (currentKanji) {
        document.getElementById('kanji').innerText = currentKanji.kanji;
    }
}

function nextKanji() {
    let randomIndex = Math.floor(Math.random() * kanjiList.length);
    showKanji(kanjiList[randomIndex]);
}

// Show the first kanji on page load
nextKanji();
