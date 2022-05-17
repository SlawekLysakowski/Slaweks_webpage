import {englishWords, koreanWords, polishWords} from "./vocabulary.js";
import japaneseWords from "./vocabulary.js";

export const showVocab = function () {

  japaneseWords.forEach((word ,i) => {
    console.log(word, i);
     let markup = `
     <div id="id">
     <p > ${japaneseWords.length -  i}</td></p>
    </div>

    <div id="jap-vocab">
     <p > ${japaneseWords[japaneseWords.length -  i -1]}</p>
    </div>
      <div id="kor-vocab">
     <p > ${koreanWords[japaneseWords.length -  i -1]}</p>
    </div>
     <div id="eng-vocab">
     <p > ${englishWords[japaneseWords.length -  i -1]}</p>
    </div>
     <div id="pol-vocab">
     <p > ${polishWords[japaneseWords.length -  i -1]}</p>
    </div>

    `;
    document.getElementById('vocab-container').insertAdjacentHTML('afterbegin', markup);

  } )

}

showVocab();
