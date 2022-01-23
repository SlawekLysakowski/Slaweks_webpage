'use strict';

window.onload = function () {

   const koreanWords = ['미리','부지런하다','아끼다','즐기다','차례대로','글자','음감','뛰어나다','사교젹이다','손재주가 좋다',
      '재주','설득력이 있다','이해가 빠르다','책임감이 강하다','소질이있다','진로를 정하다','적성에 맞다','목이 따끔거리다','정하다',
      '전공을 살리다','예술적','실용적','사교적','적극적','긍정적','모임','목이마르다','눈이 침침하다','목이 뻣뻣하다','속이 거복하다',
      '가슴이 답답하다','막히다','속이 쓰리다','봇다','가렵다','저리다','모기','창문','온몸','침을 삼키다','차금, 빚이','영향','여전히',
      '기생충','발목','삐다','금방','지내다','증상','심하다','정형외과','붓다','생강','여러','아쉽게도','지각','머리가 어지럽다','도둑',
      '놓치다','넘어지다','두딪치다','상대편','문을 닫다','바닥','발바닥','추천하다','땅자닥','쏟다','숭진하다','다내다','더럽다','얼다',
      '끓이다','밤마다','금방','장소','자기','필통','직장','선택','이유','근무','환경','중요하다','이유','졸업','취직','드디어','작품',
      '모임','성격', '눈이 침침하다','목이 따끔거리다','목이 뻣뻣하다','목이 마르다','속이 거복하다','가슴이 답답하다','막히다','봇다',
      '가렵다','저리다','모기','창문','온몸','침을 삼키다','기름지다','나이가 들다','코를 풀다','무릎을 꿇다','친하다','믿다','오해하다',
      '속상하다','소화','다리','다치다','제대로','걷다','과로','과식','과음','과속','과소비','이익','편히','논문','속상하다','헤어지다',
      '미술','오래','남녀노소','두부','지키다','소중','젊다','젊은이','불편','감동적이다','집중하다','상대','우승', '지다','실례','단풍이',
      '합격','편리하다','교통','승진','강의','직장','오히려','뽑히다','코를 골다','땀','삼촌','감독','존경','간섭','정보','발표','특징',
      '찻잔','향','대륙','회의','관련','재산','경제','정치','화학','언어','지내다','적응하다','가을','서로','해결하다','풀다','특징','특색',
      '면접','떨어지다','괴롭다','조용히','포기','연인','회의','열리다','축제','조언','항상','방해가 되다', '틀림없이','고등학교','동창',
      '손가락질','바꾼다','지적하다','재료','당연','골을 내다','직접','뻔하다','발끈하다','변동','열등재','인하하다','전날','희망','견적',
   ];
   const japaneseWords = [
      ['あらかじめ', '前もって'],'勤勉する',['節約する','せつやくする' ],'楽しむ','順番で','文字','音感','優れている','社交的 ',
      '手付きがよい','才能','説得力がある','物分りが速い','責任感が強い','手筋がいい','(卒業後の)進路をきめる','性(適性)に合っている',
      'のどがひりひり',['定める, 決める'],'専攻を生かす','芸術的','実用的','社交的',['積極的','せっきょくてき'],'肯定的',['集まり', '集会'],
      '喉が渇わく','目がうす暗い','首がごわつく ','胃袋の調子が悪い','胸苦しい',['ふさがる','塞がる'],['胸焼けする','ひりひり痛む','焼ける'],
      ['ふやける', 'ほとびる'],'痒い',['ずきずき痛む', 'しびれる'],'蚊','窓','総身','つばを飲込む','借金','影響',['相変わらず', '依然として',
         '今も変わらず'],'寄生虫','足首','くじく ',['間もなく', 'たった今', 'すぐ'],['過ごす', '暮らす', '交わる'],'症状',
      ['はなはだしい', '激げしい', '厳びしい'],'整形外科','腫れる','生姜',['さまざま', 'いろいろ'],'残念ながら','遅刻','めまぐるしい','泥棒',
      ['落とす', '失う', '逃がす'],['倒れる', '転ぶ', '敗れる'],'ぶつかり合あう','相手側',['店を閉しめる','門を打つ'],'床','足の裏','勧める',
      '地面','注ぐ',['純真', '素直'],' 振う','汚い','凍る','沸騰する','毎晩',['今すぐ', '間もなく'],'場所','自分','筆箱','職場','選択',
      '理由','勤務','環境',['重要','大切'],'理由','卒業','就職','ついに','作品',['集まり' , '集会'],'性格','目がうす暗い','のどがひりひりする',
      '首がごわつく','のどが渇く','胃袋の調子が悪い','胸苦しい ','塞(ふさ)がる','腫れる','痒い',['ずきずき痛む', 'しびれる'],['カ','(蚊)'],
      '窓','総身','つばを飲込む','油っこい','[年が寄る,老ける]','鼻をかむ','[ひざまずく, 膝をつく]','[親しい,近しい]','[信ずる,信じる]',
      '思い違える',['癪にさわる', '気にさわる'],'消化','足',['傷つく','けがする', '痛める'],['ちゃんと','きちんと'],'歩く','過労',
      ['過食','食べ過ぎ'],['過飲','飲過ぎ'],['過速','超過速度'],['過度な消費','過消費'],'利益','ゆっくり','論文',['気にさわる','気を病む'],
      ['別れる','離れる'],'美術',['長く','久しく'],'男女老少','豆腐','守る','大切','若い','若者','不便','感動的','集中する','相手','優勝',
      '負ける','失礼','紅葉','合格','便利','交通','昇進','講義','職場','逆に','選ばれる','いびきをかく','汗','叔父',['監督','マネージャー'],
      '尊敬','干渉','情報','発表','特徴','茶碗','香 ','大陸','会議',['関連', '連関'],'財産','経済','政治','化学',['言語','言葉'],['過ごす',
         '暮らす'],'適応する','秋',['互いに','共に','お互いに'],'解決する','解く','特徴','特色','面接','落ちる',['苦しい','悩ましい','辛い'],
      ['静かに','ひっそり', 'ひそやかに'],'放棄','恋人','会議','[開く,開く, ,開ける]',['祝祭','お祭り','フェスティバル'],
      ['助言','口添え','アドバイス'],['常に','いつも','ふだん'],'邪魔になる',['間違いなく','きっと'],['高校', '高等学校'],
      ['同窓','どうそう','同学'],'指で示すこと',['交換する','取り替える','変更する'],'指す, 指し示す','材料',['当然','当たり前','もっとも'],
      ['腹を立てる', '怒る'],['直接に','直直','直に'],['確かだ','判然としている','知れた事'],['激怒する','かっとする'],'変動 ',
      ['下級財','下級品'],['引き下げる','値下げする'],'先日','希望','見積もり',
   ];
   let polishWords = ['przed czasem, wcześniej','ciężko pracować','oszczędzać','bawić się, cieszyć się','po kolei','litery','zmysł słuchu',
      'wybitny','towarzyski, społeczny','mieć zręczne ręce','umiejętność','przekonujący','szybko rozumieć',
      'silne poczucie odpowiedzialności',' Mieć talent, mieć zdolności','wybierać ścieżkę kariery','pasować do zdolności',
      'ból gardła','Wybierać','zapisz swojego majora','artystyczny','użyteczne','towarzyski','aktywny','pozytywny,radosny',
      'spotkanie','spragniony','oczy są przyćmione','sztywny kark','czuć się zdenerwowanym','(uczucie) ucisku w klatce piersiowej',
      'zablokowany','czuć się zdenerwowanym','zobaczyć','swędzący','zdrętwiały','komar','okno','Całe ciało','połknąć ślinę','dług',
      'efekt','Jak zwykle, nadal','pasożyt','kostka','zwichnąć','wkrótce','zostać, żyć, przebywać','objaw, symptom',
      '[ciężki,silny,poważny]','oddz. Ortopedyczny','puchnąć','imbir','kilka','Niestety','spóźnienie','mieć zawroty głowy','złodziej ',
      'odpuścić sobie, oswobodzić','upaść','wpadać na coś','druga strona, partner','zamknąć drzwi, zmknąć firmę','podłoga',
      'dolna część stopy','polecać','grunt','wylać, nalać','być szlachetnym','skończyć się','brudny','zamrażać','gotować','każda noc',
      'wkrótce','Miejsce','samego siebie','piórnik','odbytniczy','wybierać','Powód','Praca','środowisko','To jest ważne','Powód',
      'Absolwent','Znajdź pracę','wreszcie','Praca','klasa','osobowość','moje oczy są przyćmione','ból gardła'
      ,'sztywna szyja, sztywny kark','spragniony','czuć się zdenerwowanym, mieć wzdęty brzuch','ciężko na sercu','zablokowany','spuchnąć',
      'swędzenie','zdrętwiały','komar','okno','Całe ciało','połknąć ślinę','oleisty','starzeć się','wydmuchać nos','klęczeć',
      'bliski','wierzyć','Źle zrozumieć','smutny','trawienie','noga','Zranić się','odpowiednio, porządnie','Chodzić','napięcie',
      'przejedzenie','Nadmierne picie','Nadmierna prędkość','nadmierne wydatki','zysk','z łatwością, powoli',
      'Praca dyplomowa, praca naukowa','smutny','zerwać, rozstać się, oddalić się','Sztuka','długo','wszyscy(bez względu na wiek i płeć)','tofu',
      'Ochraniać','cenny','młody','młodzi ludzie','Niedogodność','być dotkniętym ','koncentrować się ','przeciwnik','Mistrzostwo',
      'stracić','ujma na honorze, niegrzeczność','jesienne liście','podawać','wygodny','ruch drogowy','awans','wykład','miejsce pracy',
      'z drugiej strony','być wybranym','chrapać','pot','wujek','dyrektor, reżyser','szacunek, poszanowanie','Ingerencja, interwencja',
      'Informacja','Zapowiedź','Charakterystyka','filiżanka do herbaty','kadzidło','kontynent','spotkanie','relacja','własność',
      'gospodarka','Polityka','chemia','język','zostać','Jest przystosowany','jesień','wzajemnie','rozwiązywać','rozwiązywać',
      'Charakterystyka','funkcja ','rozmowa kwalifikacyjna, wywiad','spaść, opuścić coś, padać','ciężki, bolesny','cicho, spokojnie, dyskretnie',
      'porzucenie, zaniechanie','ukochany(a), sympatia','spotkanie','być otwartym','festyn, święto', 'rada, sugestia, podpowiedź',
      'zawsze, zwykle','przeszkadzać, blokować','na pewno, niewątpliwie','liceum', 'absolwent, (absolwent tej samej uczelni)','pokazywanie palcem',
      'wymieniać','wskazać','materiał, składnik','oczywiście', 'Złościć się','bezpośrednio','oczywisty, znany','wściec się','zmiana, fluktuacja',
      'towar niskiej jakości', 'ściągać, opuszczać, zmniejszać','ostatnio, parę dni temu','nadzieja','oferta, wycena',
   ];
   let englishWords = ['already','Be diligent','economising, saving','enjoy','In turn, in order','letters','hearing sense','outstanding',
      'sociable','good dexterity','skill','persuasive','quick to understand','strong sense of responsibility','have a knack',
      'choose a career path','fit the aptitude','sore throat','Choose','save your major','artistic','useful','sociable','active',
      'positive','meeting','thirsty','eyes are dim','stiff neck','feel upset','(feeling of) tightness in the chest','blocked',
      'feel upset','see','itchy','numb','mosquito','window','whole body','swallow saliva','debt','effect','As usual, still,',
      'parasite','ankle','sprain','soon','stay, live','symptom ','Severe','Orthopedics','swell','ginger','several','Unfortunately',
      'lateness, tardiness','feel dizzy','a thief ','to let go','fall down','bump into','the other side, the other party',
      'close the door, close business','floor','sole of foot','recommend','ground','pour out, pour','to be noble','run out',
      'dirty','freeze','boil','every night','soon','Place','self','pencil case','rectal','select','Reason','work','environment',
      'It is important','Reason','Graduated','find a job','finally','Work','class','personality','my eyes are dim','sore throat',
      'stiff neck','thirsty','feel upset, ','have a heavy heart ','blocked','swell','itchy','numb','mosquito','window','whole body',
      'swallow saliva','oily','getting old','blow nose','kneel','close','believe','Misconceive, misunderstand','upset','digestion',
      'leg','get hurt','properly','To Walk','strain','surfeit','Over drinking','Speeding','overspending','profit','at ease, slowly',
      'thesis,  paper, article','upset','break up, to part ','Art','long','everyone','tofu','Protect','precious','young','young people',
      'Inconvenience','to be touched ','Concentrate on','opponent','Championship','lose','discourtesy, impoliteness','autumn leaves',
      'pass','convenient','traffic','promotion','lecture',"one's post, workplace",'conversely, on the contrary','be elected','snore',
      'sweat','uncle','director, manager','respect','Interference','information','Announcement','Characteristic','teacup','incense',
      'continent','meeting','relation','property','economy','politics','chemistry','language','stay','It is adapted','autumn',
      'each other','solve','solve','Characteristic','feature ','interview (e.g. for a job)','fall down, fall, drop ','hard, difficult',
      'surreptitiously, quietly','abandonment, resignation','lover, boyfriend, girlfriend','meeting, conference','be open',
      'festival, feasts','advice, counsel, suggestion, tip, hint','usually, always','to become a hindrance, obstacle','surely, for sure',
      'high school','fellow alumnus','finger pointing ','exchange','Point out','material, ingredient','Of course','Get angry','directly',
      'obvious','get furious','change, fluctuation','inferior goods','to pull down, to lower, to reduce','the other day, a few days ago',
      'hope','offer, estimation',
   ];

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
// document.querySelector('.toggle').style =
//   `
// .toggle
// `;


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

               document.getElementById('feedback').textContent =
                   `wrong answer 😢 Correct answer was       ${answerKor}`;
               wrong();
            }

         } else {
            if (input === answerJpy || answerJpy.includes(input) && input !== "") {
               correct();
            } else {

               document.getElementById('feedback').textContent =
                   `wrong answer 😢 Correct answer was       ${answerJpy}`;
               wrong();
            }
         }
      };

   document.querySelector('#enter-word').addEventListener('keypress',   function (e) {

      if (e.key === 'Enter')  checkAnswer()

      });

   document.querySelector('#check').addEventListener('click',   checkAnswer);

   console.log(japaneseWords.length);
   console.log(koreanWords.length);
   console.log(polishWords.length);
   console.log(englishWords.length);
   console.log(polishWords[180])

};

