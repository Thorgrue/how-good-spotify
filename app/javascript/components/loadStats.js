import typingIndicator from './typingIndicator'

const typeStats = () => {
  const elem = document.getElementById('contain');
  elem.scrollTop += 100;
  const button = document.getElementById('btn-stats')
  const stats = document.getElementById('allezla')
  button.addEventListener('click', () => {
    typingIndicator();
    setTimeout(() => {
      stats.classList.remove('hidden');
    }, 1500);
  });
};



export default typeStats
