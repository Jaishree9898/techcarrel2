document.addEventListener('DOMContentLoaded', () => {
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


  if (Object.keys(obj).length === 0) {
    alert("Error: No professions available!");
    console.error("The object is empty!");
    return;
  }

  const keys = Object.keys(obj);

  card1 = document.getElementById('card1');
  card2 = document.getElementById('card2');
  card3 = document.getElementById('card3');
  const profession = document.getElementById("profession-name");
  const dots = document.querySelectorAll('.dot');


  const card1_style = window.getComputedStyle(card1);
  const card2_style = window.getComputedStyle(card2);
  const card3_style = window.getComputedStyle(card3);

  // card1.style.transition = "all 0.7s cubic-bezier(0.68, -0.55, 0.27, 1.55)";
  // card2.style.transition = "all 0.7s cubic-bezier(0.68, -0.55, 0.27, 1.55)";
  // card3.style.transition = "all 0.7s cubic-bezier(0.68, -0.55, 0.27, 1.55)";


  function slider() {


    let temp = card1_style.left;
    card1.style.left = card2_style.left;
    card2.style.left = card3_style.left;
    card3.style.left = temp;

    let tempIndex = card1_style.zIndex;
    card1.style.zIndex = card2_style.zIndex;
    card2.style.zIndex = card3_style.zIndex;
    card3.style.zIndex = tempIndex;

    let tempTransform = card1_style.transform;
    card1.style.transform = card2_style.transform;
    card2.style.transform = card3_style.transform;
    card3.style.transform = tempTransform;

    let tempBoxShadow = card1_style.boxShadow;
    card1.style.boxShadow = card2_style.boxShadow;
    card2.style.boxShadow = card3_style.boxShadow;
    card3.style.boxShadow = tempBoxShadow;
  }

  const cardSlider = setInterval(slider, timer);


  function updateImageAndName() {
    const card1Key = keys[i % keys.length];
    const card2Key = keys[(i + 1) % keys.length];
    const card3Key = keys[(i + 2) % keys.length];

    card1.innerHTML = `<img src="${obj[card1Key]}" alt="${card1Key}">`;
    card2.innerHTML = `<img src="${obj[card2Key]}" alt="${card2Key}">`;
    card3.innerHTML = `<img src="${obj[card3Key]}" alt="${card3Key}">`;

    profession.classList.remove("active"); // Remove the active class for animation
    setTimeout(() => {
      profession.textContent = card2Key + "!"; // Update the profession name
      profession.classList.add("active"); // Add the active class to trigger animation
      console.log("Updated Profession:", card2Key);
      console.log("Updated image:", obj[card2Key]);
    }, timer / 2); // Slight delay to match animation timing
    i = (i + 1) % keys.length;
  }
  setInterval(updateImageAndName, timer);






})