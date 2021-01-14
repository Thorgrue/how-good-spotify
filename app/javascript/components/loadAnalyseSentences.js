import TypeIt from "typeit";

const loadAnalyseSentences = () => {
  if (document.getElementById('typewriter') === null)
    return
  const type = new TypeIt("#typewriter", {
    speed: 20,
    loop: false,
    waitUntilVisible: true,
    breakLines: true
  })
  .go();
}

export default loadAnalyseSentences;
