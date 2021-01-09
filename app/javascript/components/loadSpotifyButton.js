const loadSpotifyButton = () => {
  if (document.getElementById('btn-spotify') === null)
    return
  const button = document.getElementById('btn-spotify');
  setTimeout(() => {
    button.classList.remove('hidden');
  }, 6600);
};

export default loadSpotifyButton
