const pickToggle = () => {

  for (let i = 0; i < 4; i ++) {
    const choice1 = document.getElementById(`toggle_pick${i}a`);
    const choice2 = document.getElementById(`toggle_pick${i}b`);

    if (choice1 === null || choice2 === null)
      return;

    choice1.addEventListener("click", () => {
      choice1.classList.remove("border-dashed");
      choice1.classList.add("border-white");
      choice1.classList.remove("text-black");
      choice2.classList.add("border-dashed");
      choice2.classList.add("text-black");
      choice2.classList.remove("border-white")
    });

    choice2.addEventListener("click", () => {
      choice2.classList.remove("border-dashed");
      choice2.classList.add("border-white")
      choice2.classList.remove("text-black");
      choice1.classList.add("border-dashed");
      choice1.classList.add("text-black");
      choice1.classList.remove("border-white");
    });
  };
}

export default pickToggle;




