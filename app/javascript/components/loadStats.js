const typeStats = () => {
  const button = document.getElementById('btn-stats')
  const stats = document.getElementById('allezla')
  button.addEventListener('click', () => {
    stats.classList.remove('hidden');
  });
};



export default typeStats
