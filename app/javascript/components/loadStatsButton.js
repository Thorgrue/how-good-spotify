const loadStatsButton = () => {
  if (document.getElementById('btn-stats') === null)
    return
  const elem = document.getElementById('contain');
  const button = document.getElementById('btn-stats');

  elem.scrollTop += 200;
  setTimeout(() => {
    button.classList.remove('hidden');
  }, 100);
};

export default loadStatsButton
