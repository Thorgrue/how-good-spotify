const pause = (scroll) => window.clearTimeout(scroll)
const scrollAuto = (num) => {
  const elemStopScroll = document.getElementById('allezla')
  const elem = document.getElementById('contain');
  const scroll = window.setInterval(() => {
    if (elemStopScroll.classList != "hidden") {
      elem.scrollTop += 20;
      pause(scroll);
    }
    else {
      elem.scrollTop = elem.scrollHeight;
    }
  }, 100);
};

export default scrollAuto;
