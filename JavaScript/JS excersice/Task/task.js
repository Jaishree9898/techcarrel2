document.addEventListener('DOMContentLoaded', () => {

})

let profession = document.getElementById('profession-name');
let i = 0;
let arr = ["Student", "Teacher", "Police"];

function updateText() {
  profession.classList.remove('active');

  setTimeout(() => {
    profession.textContent = arr[i] + "!";
    i = (i + 1) % arr.length;
    profession.classList.add('active');
  }, 1000);

}

const update=setInterval(updateText, 2000);


let arr2 = [];
let teacher = "./Assets/Teacher.webp";
let student = "./Assets/Student.webp";
let police = "./Assets/Police.webp";
let Beautician = "./Assets/beautician.webp";
let Doctor = "./Assets/Doctor.webp";
let Scientist = "./Assets/scientist.webp";
arr2.push(student, police, teacher);

let j = 0;

// let card1 = document.getElementById('card1').innerHTML = `<img src="${arr2[j % arr2.length]}">`
// let card2 = document.getElementById('card2').innerHTML = `<img src="${arr2[(j + 1) % arr2.length]}">`
// let card3 = document.getElementById('card3').innerHTML = `<img src="${arr2[(j + 2) % arr2.length]}">`

let card1 = document.getElementById('card1')
let card2 = document.getElementById('card2')
let card3 = document.getElementById('card3')

card1.innerHTML = `<img src="${arr2[j % arr2.length]}">`
card2.innerHTML = `<img src="${arr2[(j + 1) % arr2.length]}">`
card3.innerHTML = `<img src="${arr2[(j + 2) % arr2.length]}">`

j = (j + 1) % arr2.length

card1 = document.getElementById('card1');
card2 = document.getElementById('card2');
card3 = document.getElementById('card3');


const card1_style = window.getComputedStyle(card1);
const card2_style = window.getComputedStyle(card2);
const card3_style = window.getComputedStyle(card3);

card1.style.transition = "all 0.7s cubic-bezier(0.68, -0.55, 0.27, 1.55)";
card2.style.transition = "all 0.7s cubic-bezier(0.68, -0.55, 0.27, 1.55)";
card3.style.transition = "all 0.7s cubic-bezier(0.68, -0.55, 0.27, 1.55)";


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

const cardSlider = setInterval(slider, 2000);

const previousBtn = document.getElementById('prev-btn');
previousBtn.addEventListener('click', () => {
  clearInterval(update);
  clearInterval(cardSlider);
  console.log("button Clicked");
  console.log(j)
  j = (Math.abs(j - 1)) % arr2.length;
  
  card1.innerHTML = `<img src="${(arr2[j % arr2.length])}">`;
  card2.innerHTML = `<img src="${(arr2[(j + 1) % arr2.length])}">`;
  card3.innerHTML = `<img src="${(arr2[(j + 2) % arr2.length])}">`;
  slider();
});


const nextBtn = document.getElementById('next-btn');
nextBtn.addEventListener('click', () => {
  clearInterval(update);
  clearInterval(cardSlider);
  console.log("button Clicked");
  console.log(j)
  j = (Math.abs(j + 1)) % arr2.length;
  
  card1.innerHTML = `<img src="${(arr2[j % arr2.length])}">`
  card2.innerHTML = `<img src="${(arr2[(j + 1) % arr2.length])}">`
  card3.innerHTML = `<img src="${(arr2[(j + 2) % arr2.length])}">`;
  slider();
});



