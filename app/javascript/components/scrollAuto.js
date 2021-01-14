const scrollAuto = () => {
  window.setInterval(function() {
    var elem = document.getElementById('contain');
    elem.scrollTop = elem.scrollHeight;
  }, 100);

};

export default scrollAuto;
