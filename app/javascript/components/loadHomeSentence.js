import TypeIt from "typeit";

let isFinish = false;

const loadHomeSentence = () => {
  if (document.getElementById('typed') === null)
    return
  const type = new TypeIt("#typed", {
    speed: 38,
    loop: false,
    waitUntilVisible: true,
    breakLines: true
  })
  .type("Saltu toi !", {delay: 100})
  .move(-6, { delay: 100 })
  .delete(2, { delay: 100 })
  .type('ut')
  .move('END')
  .break({delay: 200})
  .type("Bienvenuuuue ici !", {delay: 100})
  .break({delay: 200})
  .type("Viens découvrir ce qu'il y a de <strong>chouette</strong> dans ton Spotify ?", {delay: 100})
  .move(-10, { delay: 100})
  .delete(3)
  .type("<em>ton</em>")
  .go();
};

const pause = (scroll) => window.clearTimeout(scroll)
const scrollAuto = () => {
  const elem = document.getElementById('typewriter');
  const scroll = window.setInterval(() => {
    if (elem.scrollTop > 1200) {
      pause(scroll)
    }
    else {
      elem.scrollTop = elem.scrollHeight;
    }
  }, 100);
};



export {
  loadHomeSentence,
  scrollAuto
};
