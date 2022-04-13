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

   const wordsArray = () => [...new Array(10)]
       .map(() => japaneseWords[Math.round(Math.random() * japaneseWords.length)]);
   console.log(wordsArray());
   const newWordsArray = function () {
      if (japToKor) {
         let  newRandomNumber = Math.trunc(Math.random() * japaneseWords.length);
         return japaneseWords[newRandomNumber];
      }
      if (!japToKor) {
         let  newRandomNumber = Math.trunc(Math.random() * japaneseWords.length);
         return koreanWords[newRandomNumber];
      }
   }

   document.getElementById('words').textContent = wordsArray();
   document.getElementById('word').textContent = randomWord;
   document.getElementById('polishWord').textContent = randomPolWord;
   document.getElementById('englishWord').textContent = randomEngWord;
   document.getElementById('correct').textContent = `Correct answers: ${correctNbr}`;
   document.getElementById('wrong').textContent = `Wrong answers: ${wrongNbr}`;

   // document.querySelector('.toggle').classList.remove('toggle:after ');



   document.getElementById('translation').addEventListener('click', function () {
      if (japToKor) {
         japToKor = !japToKor;
       document.getElementById('transDirection').textContent = 'Translation: KOR : JAP';
       newWord();
      } else {
         japToKor = !japToKor;
         document.getElementById('transDirection').textContent = 'Translation: JAP : KOR';
         newWord();
      }
   })

   const hideShow = function (selectedSwitch, word) {
      document.getElementById(`${selectedSwitch}`).addEventListener("click", function () {
      if (document.getElementById(`${word}`).style.display === "flex") {
         document.getElementById(`${word}`).style.display = "none";
      } else  {
         document.getElementById(`${word}`).style.display = "flex";
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
                   `wrong answer 😢 Correct answer was ${answerKor}`;
               wrongAnswer();
            }

         } else {
            if (input === answerJpy || answerJpy.includes(input) && input !== "") {
               correct();
            } else {

               document.getElementById('feedback').textContent =
                   `wrong answer 😢 Correct answer was ${answerJpy}`;
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

