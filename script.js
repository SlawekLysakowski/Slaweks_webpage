'use strict';

window.onload = function () {

   const koreanWords = ['한국어', '자동차', ['집',"빈집"], '가적'];
   const japaneseWords = ['韓国語','自動車','家' ,'家族'];
   let polishWords = ['koreański', 'samochod', 'dom', 'rodzina'];
   let englishWords = ['korean', 'car', 'house', 'family'];


   let randomNbr = Math.trunc(Math.random() * japaneseWords.length);
   const randomWord = japaneseWords[randomNbr];
   let randomPolWord = polishWords[randomNbr];
   let randomEngWord = englishWords[randomNbr];
   let answerKor = koreanWords[randomNbr];
   let answerJpy = japaneseWords[randomNbr];
   let correctNbr = 0;
   let wrongNbr = 0;
   let japToKor = true;


   document.getElementById('word').textContent = randomWord;
   document.getElementById('polishWord').textContent = randomPolWord;
   document.getElementById('englishWord').textContent = randomEngWord;
   document.getElementById('correct').textContent = `Correct answers: ${correctNbr}`;
   document.getElementById('wrong').textContent = `Wrong answers: ${wrongNbr}`;
document.querySelector('.toggle').style =
  `
.toggle
`;


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


   function newWord() {
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

   const wrong = function () {
      newWord();
      ++wrongNbr;
      document.getElementById('wrong').textContent = `Wrong answers: ${wrongNbr}`;
      setTimeout(function () {
         document.getElementById('feedback').textContent = ``;
      }, 3000);
   }

      const checkAnswer = function () {
         let input = document.getElementById("enter-word").value;
         if (japToKor === true) {
            if (input === answerKor || answerKor.includes(input) && input !== "") {
               correct();

            } else {
               wrong();
               document.getElementById('feedback').textContent =
                   `wrong answer 😢 Correct answer was       ${answerKor}`;
            }

         } else {
            if (input === answerJpy || answerJpy.includes(input) && input !== "") {
               correct();
            } else {
               wrong();
               document.getElementById('feedback').textContent =
                   `wrong answer 😢 Correct answer was       ${answerJpy}`;
            }
         }
      };

   document.querySelector('#enter-word').addEventListener('keypress',   function (e) {

      if (e.key === 'Enter')  checkAnswer()

      });

   document.querySelector('#check').addEventListener('click',   checkAnswer);

};