const typingIndicator = () => {
  const typing = document.getElementById('typing_indicator1');
  const elem = document.getElementById('contain');

  typing.classList.remove('hidden');
  elem.scrollTop += 200;

  setTimeout(() => {
    typing.classList.add('hidden');

  }, 1000);
}

export default typingIndicator
