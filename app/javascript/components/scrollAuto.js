const scrollAuto = () => {
  window.setInterval(function() {
    var elem = document.getElementById('typewriter');
    elem.scrollTop = elem.scrollHeight;
  }, 100);

};

export default scrollAuto;
