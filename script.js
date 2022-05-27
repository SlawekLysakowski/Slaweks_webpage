'use strict';
import './vocabulary.js';
import japaneseWords, {englishWords, koreanWords, polishWords} from './vocabulary.js';

window.onload = function () {

  let wordsArray = [];
  let highlightedWord;
  const updateWords = function () {
    if (wordsArray.length === 0) {
      document.querySelector('.word-array-box').style.height = '';
      newWordsArray(japToKor ? japaneseWords : koreanWords);
      appSizing();
    }
    wordsArray.forEach((word, i) => {

      document.getElementById(`word-${i + 1}`).textContent = word;
      document.getElementById(`word-${i + 1}`).style.color = '#495057';

      if (wordsArray.length < 10) {
        document.getElementById(`word-${wordsArray.length + 1}`).textContent = '';
      }
    })
  }
  const newWordsArray = function (vocab) {
    wordsArray = [...new Array(10)]
      .map(() => vocab[Math.round(Math.random() * vocab.length)]);

    updateWords();
    document.getElementById(`word-1`).style.color = '#ff4800';
    return wordsArray;
  }
  newWordsArray(japaneseWords);

  let newRandomNumber;
  let correctNbr = 0;
  let wrongNbr = 0;
  let japToKor = true;


  let wordIndex = japaneseWords.indexOf(wordsArray[0]);
  let randomWord = wordsArray[0];
  let answerKor = koreanWords[wordIndex];
  let answerJpy = japaneseWords[wordIndex];
  const randomPolWord = polishWords[wordIndex];
  const randomEngWord = englishWords[wordIndex];
  let index = wordsArray.indexOf(randomWord);
  highlightedWord = wordsArray[index];


  const displayedWord = document.querySelector('#current-display-word');
  document.getElementById('current-display-word').textContent = wordsArray[index];
  document.getElementById('polishWord').textContent = randomPolWord;
  document.getElementById('englishWord').textContent = randomEngWord;
  document.getElementById('correct').textContent = `Correct answers: ${correctNbr}`;
  document.getElementById('wrong').textContent = `Wrong answers:\u00A0 ${wrongNbr}`;
  if (displayedWord.textContent.length > 9) {
    displayedWord.style.fontSize = `21px`;
  } else {
    displayedWord.style.fontSize = `35px`;
  }
  console.log(displayedWord.style.fontSize)
  const switchTransDir = function () {
      japToKor = true? !japToKor : japToKor;
      document.getElementById('translation').textContent = japToKor?`KOR : JAP` : 'JAP : KOR';
      document.querySelector('.word-array-box').style.height = '';
      newWordsArray(japToKor? japaneseWords : koreanWords);
      appSizing();
      newWord();

      highlightedWord = document.getElementById(`word-${wordsArray.indexOf(randomWord) + 1}`).style.color = '#ff4800';
  }

  document.getElementById('translation').addEventListener('click', switchTransDir);


  const hideShowlang = function (selectedSwitch, word) {
    document.getElementById(`${selectedSwitch}`).addEventListener("click", function () {
      if (document.getElementById(`${word}`).style.display === "grid") {
        document.getElementById(`${word}`).style.display = "none";
      } else {
        document.getElementById(`${word}`).style.display = "grid";
      }
    })
  }


  const newWord = function () {
    newRandomNumber = Math.trunc(Math.random() * wordsArray.length);
    randomWord = wordsArray[newRandomNumber];
    wordIndex = japToKor ? japaneseWords.indexOf(randomWord) : koreanWords.indexOf(randomWord);
    document.getElementById('current-display-word').textContent = randomWord;
    if (displayedWord.textContent.length > 9) {
      displayedWord.style.fontSize = `21px`;
    } else {
      displayedWord.style.fontSize = `35px`;
    }
    console.log(displayedWord.style.fontSize)
    japToKor ? answerKor = koreanWords[wordIndex] : answerJpy = japaneseWords[wordIndex];
    document.getElementById('polishWord').textContent = polishWords[wordIndex];
    document.getElementById('englishWord').textContent = englishWords[wordIndex];
    document.getElementById("enter-word").value = "";
    // console.log(wordsArray.indexOf(randomWord));
    updateWords();
    highlightedWord = document.getElementById(`word-${wordsArray.indexOf(randomWord) + 1}`).style.color = '#ff4800';
    // console.log(wordIndex);
  }

  hideShowlang('polish', 'polishWord');
  hideShowlang('english', 'englishWord');

  const correct = function () {
    newWord();
    index = wordsArray.indexOf(randomWord);
    // highlightedWord = document.getElementById(`word-${index +1}`).style.color = 'blue';
    correctNbr++;
    document.getElementById('correct').textContent = `Correct answers: ${correctNbr}`;
    document.getElementById('feedback').textContent = `Correct answer! 😊 Congratulations!🎉`;
    setTimeout(function () {
      document.getElementById('feedback').textContent = ``;
    }, 2000);
  };

  const wrongAnswer = function () {
    newWord();
    index = wordsArray.indexOf(randomWord);
    ++wrongNbr;
    document.getElementById('wrong').textContent = `Wrong answers: ${wrongNbr}`;
    setTimeout(function () {
      document.getElementById('feedback').textContent = ``;
    }, 3500);
  };

  const checkAnswer = function () {
    let input = document.getElementById("enter-word").value;
    if (japToKor) {
      if (input === answerKor || answerKor.includes(input) && input !== "") {
        wordsArray.splice(index, 1);
        updateWords();
        correct();
      } else {
        document.getElementById('feedback').textContent =
          `wrong answer! 😢 Correct answer was: \u00A0 \u00A0
                   ` + `  ${answerKor}`;
        wrongAnswer();
      }

    }
    if (!japToKor) {
      if (input === answerJpy || answerJpy.includes(input) && input !== "") {
        // wordsArray.splice(wordsArray.indexOf(wordsArray[newRandomNumber]));
        wordsArray.splice(index, 1);
        updateWords();
        correct();
        if (wordsArray.length === 0) newWordsArray(koreanWords);

      } else {

        document.getElementById('feedback').textContent =
          `wrong answer! 😢 Correct answer was: \u00A0 \u00A0
                     ${answerJpy}`;
        wrongAnswer();
      }
    }
  };

  document.querySelector('#enter-word').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') checkAnswer();
  });

  document.querySelector('#check').addEventListener('click', checkAnswer);

  // console.log(japaneseWords.length);
  // console.log(koreanWords.length);
  // console.log(polishWords.length);
  // console.log(englishWords.length);
  // console.log(polishWords[180])
  const appSizing = function () {
    const wordsDiv = document.querySelector('.word-array-box');
    const wordsDivHeight = wordsDiv.scrollHeight;
    const heightRatio = wordsDivHeight / visualViewport.height;

    console.log(wordsDivHeight, heightRatio)
    wordsDiv.style.height = `${wordsDivHeight}px`;

    if (heightRatio > 0.80) {
      wordsDiv.style.height = `80%`;
      wordsDiv.style.fontSize = `20px`
    }
    if (heightRatio < 0.50) {
      wordsDiv.style.height = `70%`;
      wordsDiv.style.fontSize = `45px`
    }

  }
  appSizing();
 
};
