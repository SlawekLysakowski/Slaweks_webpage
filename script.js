'use strict';

window.onload = function () {

   const koreanWords = ['한국어', '자동차', ['집',"빈집"], '가적'];
   const japaneseWords = ['韓国語','自動車','家' ,'家族'];
   const polishWords = ['koreanski', 'samochod', 'dom', 'rodzina'];
   const englishWords = ['korean', 'car', 'hause', 'family'];


   let randomNbr = Math.trunc(Math.random() * japaneseWords.length);
   const randomWord = japaneseWords[randomNbr];
   const randomKorWord = koreanWords[randomNbr];
   const randomPolWord = polishWords[randomNbr];
   const randomEngWord = englishWords[randomNbr];
   let newRandomNumber = Math.trunc(Math.random() * japaneseWords.length);
   let answerKor = koreanWords[randomNbr];
   let answerJpy = japaneseWords[randomNbr];
   let correctNbr = 0;
   let wrongNbr = 0;
   let japToKor = true;

   document.getElementById('word').textContent = randomWord;
   document.getElementById('correct').textContent = `Correct answers: ${correctNbr}`;
   document.getElementById('wrong').textContent = `Wrong answers:   ${wrongNbr}`;
   document.getElementById('polishWord').textContent = randomPolWord;
   document.getElementById('englishWord').textContent = randomEngWord;

   const hideShow = function () {
      document.getElementById('polish').addEventListener("click", function () {

      if (document.getElementById('polishWord').style.display === "flex") {
         document.getElementById('polishWord').style.display = "none";
      } else  {
         document.getElementById('polishWord').style.display = "flex";
      }
   }
      )
      document.getElementById('english').addEventListener("click", function () {

             if (document.getElementById('englishWord').style.display === "flex") {
                document.getElementById('englishWord').style.display = "none";
             } else  {
                document.getElementById('englishWord').style.display = "flex";
             }
          }
      )

   }
   hideShow();

   function newWord() {
      newRandomNumber = Math.trunc(Math.random() * 4);
      document.getElementById('word').textContent = japaneseWords[newRandomNumber];
      answerKor = koreanWords[newRandomNumber];
      document.getElementById("enter-word").value = "";
   }


      const checkAnswer = function () {
         let input = document.getElementById("enter-word").value;
         if (input === answerKor || answerKor.includes(input) && input !=="") {
            newWord();
            correctNbr++;
            document.getElementById('correct').textContent = `Correct answers: ${correctNbr}`;
            document.getElementById('feedback').textContent = `Correct answer! 😊 Congratulations!🎉`;
            setTimeout(function () {
               document.getElementById('feedback').textContent = ``;
            }, 2000);
         } else {
            if (japToKor === true) {
               document.getElementById('feedback').textContent =
                   `wrong answer 😢 Correct answer was ${answerKor}`;
            } else {
               document.getElementById('feedback').textContent =
                   `wrong answer 😢 Correct answer was ${answerJpy}`;
            }
            newWord();
            ++wrongNbr;
            document.getElementById('wrong').textContent = `Wrong answers: ${wrongNbr}`;
            setTimeout(function () {
               document.getElementById('feedback').textContent = ``;
            }, 5000);

         }

   }
   document.querySelector('#enter-word').addEventListener('keypress',   function (e) {
      if (e.key === 'Enter') { checkAnswer()}

      document.querySelector('#check').addEventListener('click',   checkAnswer);
      });

};