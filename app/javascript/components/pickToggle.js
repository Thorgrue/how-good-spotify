const pickToggle = () => {

  for (let i = 0; i < 4; i ++) {
    const choice1 = document.getElementById(`toggle_pick${i}a`);
    const choice2 = document.getElementById(`toggle_pick${i}b`);

    if (choice1 === null || choice2 === null)
      return;

    const pickMe = (un, deux) => {
      un.classList.remove("border-dashed");
      un.classList.add("border-white");
      un.classList.remove("text-black");
      deux.classList.add("border-dashed");
      deux.classList.add("text-black");
      deux.classList.remove("border-white");
    }

    choice1.addEventListener("click", () => {
      pickMe(choice1, choice2);
    });

    choice2.addEventListener("click", () => {
      pickMe(choice2, choice1);
    });
  };
}

export default pickToggle;




