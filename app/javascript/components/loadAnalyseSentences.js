import TypeIt from "typeit";

const loadAnalyseSentences = () => {
  if (document.querySelector("#typewriter1") === null)
    return
  const type = new TypeIt("#typewriter1", {
    speed: 20,
    loop: false,
    waitUntilVisible: true,
    breakLines: true,
    afterComplete: async (step, instance) => {
      loadOnClick(0, loadAnalyseSentencesSecond);
    }
  })
  .go();
};

const loadAnalyseSentencesSecond = () => {
  if (document.querySelector("#typewriter2") === null)
    return;

  const type = new TypeIt("#typewriter2", {
    speed: 20,
    loop: false,
    waitUntilVisible: true,
    breakLines: true,
    afterComplete: async (step, instance) => {
      loadOnClick(1, loadAnalyseSentencesThird);

    }
  })
  .go();
};

const loadAnalyseSentencesThird = () => {
  if (document.querySelector("#typewriter3") === null)
    return;

  const type = new TypeIt("#typewriter3", {
    speed: 20,
    loop: false,
    waitUntilVisible: true,
    breakLines: true,
    afterComplete: async (step, instance) => {
      loadOnClick(2, loadAnalyseSentencesFourth);
    }
  })
  .go();
};

const loadAnalyseSentencesFourth = () => {
  if (document.querySelector("#typewriter4") === null)
    return;

  const type = new TypeIt("#typewriter4", {
    speed: 20,
    loop: false,
    waitUntilVisible: true,
    breakLines: true,
    afterComplete: async (step, instance) => {
      loadOnClick(3, loadAnalyseSentencesFifth);
    }
  })
  .go();
};

const loadAnalyseSentencesFifth = () => {
  if (document.querySelector("#typewriter5") === null)
    return;

  const type = new TypeIt("#typewriter5", {
    speed: 20,
    loop: false,
    waitUntilVisible: true,
    breakLines: true,
    afterComplete: async (step, instance) => {


    }
  })
  .go();
};

const loadOnClick = (num, func) => {
  const toggleA = document.getElementById(`toggle_pick${num}a`);
  const toggleB = document.getElementById(`toggle_pick${num}b`);
  toggleA.classList.remove('hidden');
  toggleB.classList.remove('hidden');

  console.log(textHidden);
  const textHidden = document.getElementById(`typewriter${num + 2}`);


  toggleA.addEventListener('click', () => {
    textHidden.classList.remove('hidden');
    func();
  });
  toggleB.addEventListener('click', () => {
    textHidden.classList.remove('hidden');
    func();
  });
};

export default loadAnalyseSentences;
