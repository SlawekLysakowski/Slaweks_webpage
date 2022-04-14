'use strict';
import './vocabulary.js';
import japaneseWords from './vocabulary.js';
import {koreanWords} from "./vocabulary.js";
import {polishWords} from "./vocabulary.js";
import {englishWords} from "./vocabulary.js";

window.onload = function () {

   let randomNbr = Math.trunc(Math.random() * japaneseWords.length);
   const randomWord = japaneseWords[randomNbr];
   const randomPolWord = polishWords[randomNbr];
   const randomEngWord = englishWords[randomNbr];
   let answerKor = koreanWords[randomNbr];
   let answerJpy = japaneseWords[randomNbr];
   let correctNbr = 0;
   let wrongNbr = 0;
   let japToKor = true;
   let wordsArray = [];

   const newWordsArray = function (vocab) {
      if (japToKor) vocab = japaneseWords;
      if (!japToKor) vocab = koreanWords;
    wordsArray =  [...new Array(10)]
          .map(() => vocab[Math.round(Math.random() * vocab.length)]);
      console.log(wordsArray);
      return wordsArray;
   }
   newWordsArray(japaneseWords);

   for (let i = 0; i < wordsArray.length; i++) {
      document.getElementById(`word-${i+1}`).textContent = wordsArray[i];
   }


   document.getElementById('word-1').textContent = wordsArray[0];
   document.getElementById('word').textContent = randomWord;
   document.getElementById('polishWord').textContent = randomPolWord;
   document.getElementById('englishWord').textContent = randomEngWord;
   document.getElementById('correct').textContent = `Correct answers: ${correctNbr}`;
   document.getElementById('wrong').textContent = `Wrong answers:\u00A0 ${wrongNbr}`;

   // document.querySelector('.toggle').classList.remove('toggle:after ');



   document.getElementById('translation').addEventListener('click', function () {
      if (japToKor) {
         japToKor = !japToKor;
       document.getElementById('translation').textContent = 'KOR : JAP';
       newWord();
      } else {
         japToKor = !japToKor;
         document.getElementById('translation').textContent = 'JAP : KOR';
         newWord();
      }
   })

   const hideShow = function (selectedSwitch, word) {
      document.getElementById(`${selectedSwitch}`).addEventListener("click", function () {
      if (document.getElementById(`${word}`).style.display === "grid") {
         document.getElementById(`${word}`).style.display = "none";
      } else  {
         document.getElementById(`${word}`).style.display = "grid";
      }
      })
   }

      hideShow('polish','polishWord');
      hideShow('english','englishWord');


     const newWord = function() {
     let  newRandomNumber = Math.trunc(Math.random() * japaneseWords.length);
      if (japToKor) {
      document.getElementById('word').textContent = japaneseWords[newRandomNumber];
      answerKor = koreanWords[newRandomNumber];
   } else {
      document.getElementById('word').textContent = koreanWords[newRandomNumber];
      answerJpy = japaneseWords[newRandomNumber];
   }
      document.getElementById("enter-word").value = "";
      document.getElementById('polishWord').textContent = polishWords[newRandomNumber];
      document.getElementById('englishWord').textContent = englishWords[newRandomNumber];
   }



   const correct = function () {
      newWord();
      correctNbr++;
      document.getElementById('correct').textContent = `Correct answers: ${correctNbr}`;
      document.getElementById('feedback').textContent = `Correct answer! 😊 Congratulations!🎉`;
      setTimeout(function () {
         document.getElementById('feedback').textContent = ``;
      }, 2000);
   }

   const wrongAnswer = function () {
      newWord();
      ++wrongNbr;
      document.getElementById('wrong').textContent = `Wrong answers: ${wrongNbr}`;
      setTimeout(function () {
         document.getElementById('feedback').textContent = ``;
      }, 3500);
   }

      const checkAnswer = function () {
         let input = document.getElementById("enter-word").value;
         if (japToKor === true) {
            if (input === answerKor || answerKor.includes(input) && input !== "") {
               correct();
            } else {
               document.getElementById('feedback').textContent =
                   `wrong answer! 😢 Correct answer was: \u00A0
                   ` +  `  ${answerKor}`;
               wrongAnswer();
            }

         } else {
            if (input === answerJpy || answerJpy.includes(input) && input !== "") {
               correct();
            } else {

               document.getElementById('feedback').textContent =
                   `wrong answer! 😢 Correct answer was: \u00A0 
                     ${answerJpy}`;
               wrongAnswer();
            }
         }
      };

   document.querySelector('#enter-word').addEventListener('keypress',   function (e) {
      if (e.key === 'Enter')  checkAnswer();
      });

   document.querySelector('#check').addEventListener('click',   checkAnswer);

   // console.log(japaneseWords.length);
   // console.log(koreanWords.length);
   // console.log(polishWords.length);
   // console.log(englishWords.length);
   // console.log(polishWords[180])

};

