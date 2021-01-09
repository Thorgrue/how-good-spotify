import Typed from 'typed.js';

const loadHomeSentence = () => {
  if (document.getElementById('typed') === null)
    return
  const sentence = `
    <span>Holaaaaaaaa !</span>
    <br />
    <span>Bienvenuuuuue ici !</span>
    <br />
    <span>Tu veux découvrir ce que ton Spotify a de CHOUETTE ?</span>
  `

    const typed = new Typed('#typed', {
      strings: [sentence],
      typeSpeed: 40,
      smartBackspace: true,
      contentType: 'html',
      loop: false
    });
  };

export default loadHomeSentence;
