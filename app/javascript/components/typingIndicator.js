const typingIndicator = () => {
  const typing = document.getElementById('typing_indicator1');
  typing.classList.remove('hidden');
    setTimeout(() => {
      typing.classList.add('hidden');

    }, 1000);
}

export default typingIndicator
