const pickToggle = () => {

  for (let i = 1; i < 4; i ++) {
    const choice1 = document.getElementById(`toggle_pick${i}a`);
    const choice2 = document.getElementById(`toggle_pick${i}b`);

    if (choice1 === null || choice2 === null)
      return;

    choice1.addEventListener("click", () => {
      choice1.classList.toggle("border-dashed");
      choice1.classList.add("shadow-inner-xl");
      choice1.classList.remove("text-black");
      choice2.classList.add("border-dashed");
      choice2.classList.add("text-black");
      choice2.classList.remove("shadow-inner-xl");
    });

    choice2.addEventListener("click", () => {
      choice2.classList.toggle("border-dashed");
      choice2.classList.add("shadow-inner-xl");
      choice2.classList.remove("text-black");
      choice1.classList.add("border-dashed");
      choice1.classList.add("text-black");
      choice1.classList.remove("shadow-inner-xl");
    });
  };
}

export default pickToggle;
// }
// const togglePick = (nb) => {
//   const choice1 = document.getElementById(`toggle_pick${nb}`);
//   const choice2 = document.getElementById(`toggle_pick${nb+1}`)

//   if (choice1 === null)
//     return;

//   choice1.addEventListener("click", () => {
//     if (nb === 1 || nb === 3 || nb === 5) {
//       choice1.classList.toggle("border-opacity-0");
//       choice1.classList.toggle("border-opacity-75");
//       choice2.classList.remove("border-opacity-75");
//       choice2.classList.add("border-opacity-0");
//     }
//     else {
//       choice2.classList.toggle("border-opacity-0");
//       choice2.classList.toggle("border-opacity-75");
//       choice1.classList.remove("border-opacity-75");
//       choice1.classList.add("border-opacity-0");
//     }
//   });
// }

// const loopPickToggleNumber = () => {
//   for (let i = 0; i < 6; i ++) {
//     togglePick(i)
//   }




