const scrollAuto = () => {
  const elem = document.getElementById('contain');

  window.setInterval(() => {
    elem.scrollTop = elem.scrollHeight;
  }, 100);
};

export default scrollAuto;
