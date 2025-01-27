let obj = {
  Teacher: "./Assets/Teacher.webp",
  Student: "./Assets/Student.webp",
  Doctor: "./Assets/Doctor.webp",
  Police: "./Assets/Police.webp",
  Beautician: "./Assets/beautician.webp",
  Scientist: "./Assets/scientist.webp",
  Painter: "./Assets/Painter.webp"
};

let timer = 2000;
let i = 0;

document.addEventListener("DOMContentLoaded", () => {
  if (Object.keys(obj).length === 0) {
    alert("Error: No professions available!");
    console.error("The object is empty!");
    return;
  }

  const keys = Object.keys(obj);

  // Access elements
  let card1 = document.getElementById("card1");
  let card2 = document.getElementById("card2");
  let card3 = document.getElementById("card3");
  const profession = document.getElementById("profession-name");
  const dots = document.querySelectorAll('.dot');

  // access style

  const card1_style = window.getComputedStyle(card1);
  const card2_style = window.getComputedStyle(card2);
  const card3_style = window.getComputedStyle(card3);


  function slider() {


  }




});
