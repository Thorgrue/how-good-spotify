// import Typed from 'typed.js';

// const loadHomeSentence = () => {
//   if (document.getElementById('typed') === null)
//     return
//   const sentence = `
//     <span>Holaaaaaaaa !</span>
//     <br />
//     <span>Bienvenuuuuue ici !</span>
//     <br />
//     <span>Tu veux découvrir ce que ton Spotify a de CHOUETTE ?</span>
//   `

//     const typed = new Typed('#typed', {
//       strings: [sentence],
//       typeSpeed: 40,
//       smartBackspace: true,
//       contentType: 'html',
//       loop: false
//     });
//   };

// export default loadHomeSentence;


import TypeIt from "typeit";

const loadHomeSentence = () => {
  if (document.getElementById('typed') === null)
    return
  const type = new TypeIt("#typed", {
    speed: 45,
    loop: false,
    waitUntilVisible: true,
    breakLines: true
  })
  .type("Holaaaa !", {delay: 100})
  .break({delay: 200})
  .type("Bienvenuuuue ici !", {delay: 100})
  .break({delay: 200})
  .type("Tu veux découvrir tout ce que <em>ton</em> Spotify a de <strong>chouette</strong> ?", {delay: 100})
  .go();
}

export default loadHomeSentence;
