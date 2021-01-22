import TypeIt from "typeit";
import scrollAuto from './scrollAuto'
import loadStats from './loadStats'
import typingIndicator from './typingIndicator'

const loadAnalyseSentences = (num) => {
  if (document.querySelector(`#typewriter${num}`) === null)
    return
  const type = new TypeIt(`#typewriter${num}`, {
    speed: 40,
    loop: false,
    waitUntilVisible: true,
    breakLines: true,
    cursor: false,
    lifeLike: true,
    afterComplete: async (step, instance) => {
      if ((num) === 5) {
        loadStatsButton();
        loadStats();
      };
      if (document.getElementById(`typewriter${num + 1}`) != null) {
        loadOnClick(num - 1, loadAnalyseSentences(num + 1));
      };
    }
  })
  .go();
};

const loadOnClick = (num, func) => {
  const toggleA = document.getElementById(`toggle_pick${num}a`);
  const toggleB = document.getElementById(`toggle_pick${num}b`);
  const textHidden = document.getElementById(`typewriter${num + 2}`);


  toggleA.classList.remove('hidden');

  toggleA.addEventListener('click', () => {
    if (num === 0) {
      answerGood();
      setTimeout(() => {
        textHidden.classList.remove('hidden');
        func;
      }, 2500);
    } else {
      textHidden.classList.remove('hidden');
      func;
    };
  });

  toggleB.classList.remove('hidden');

  toggleB.addEventListener('click', () => {
    if (num === 0) {
      answerBad();
      setTimeout(() => {
        textHidden.classList.remove('hidden');
        func;
      }, 7000);
    } else {
    textHidden.classList.remove('hidden');
    func;
    };
  });

  scrollAuto(num);

};

const answerGood = () => {
  const type = new TypeIt("#typedanswer", {
    speed: 20,
    loop: false,
    waitUntilVisible: true,
    breakLines: true,
    cursor: false,
    afterComplete: async (step, instance) => {
      typingIndicator();
    }
  })
  .type('Parfait', {delay: 100})
  .break({delay: 200})
  .type("Je commence alooors", {delay: 100})
  .go();
};

const answerBad = () => {
  const type = new TypeIt("#typedanswer", {
    speed: 20,
    loop: false,
    waitUntilVisible: true,
    breakLines: true,
    cursor: false,
    afterComplete: async (step, instance) => {
      typingIndicator();
    }
  })
  .type('Argh', {delay: 100})
  .break({delay: 200})
  .type("Tu sais, tu peux trouver de l'aide facilement en ligne", {delay: 100})
  .break({delay: 200})
  .type("Tu n'es pas seul.e")
  .break({delay: 200})
  .type("Gros courage")
  .break({delay: 200})
  .type("En attendant, j'espère pouvoir t'apporter un peu de joie en analysant ton compte")
  .break({delay: 200})
  .type("Allez, on y va !", {delay: 200})
  .go();
};

const loadStatsButton = () => {
  if (document.getElementById('btn-stats') === null)
    return
  const button = document.getElementById('btn-stats');
  setTimeout(() => {
    button.classList.remove('hidden');
  }, 100);
};

export default loadAnalyseSentences;
