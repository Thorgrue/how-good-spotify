import TypeIt from "typeit";
import scrollAuto from './scrollAuto'

const loadAnalyseSentences = (num) => {
  if (document.querySelector(`#typewriter${num}`) === null)
    return
  const type = new TypeIt(`#typewriter${num}`, {
    speed: 20,
    loop: false,
    waitUntilVisible: true,
    breakLines: true,
    afterComplete: async (step, instance) => {
      if (document.getElementById(`typewriter${num + 1}`) != null) {
        loadOnClick(num - 1, loadAnalyseSentences(num + 1));
      }
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
    textHidden.classList.remove('hidden');
    func;
  });

  toggleB.classList.remove('hidden');

  toggleB.addEventListener('click', () => {
    textHidden.classList.remove('hidden');
    func;
  });

  scrollAuto();

};

export default loadAnalyseSentences;
