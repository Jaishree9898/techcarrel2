let input = document.getElementById('input');
let addTask = document.getElementById('addTask');

addTask.addEventListener('click', (e) => {
  e.preventDefault();
  let taskLine = document.getElementById('taskLine');
  if (input.value != "") {
    let div = document.createElement('div');
    div.classList.add('div')

    taskLine.appendChild(div);

    let checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.classList.add('check')

    let span = document.createElement('span');
    span.innerText = input.value;
    span.classList.add('span');

    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add('deleteBtn')



    div.appendChild(checkBox);
    div.appendChild(span);
    div.appendChild(deleteBtn);

    input.value = "";


    checkBox.addEventListener('click', () => {
      if (checkBox.checked) {
        span.style.textDecoration = "line-through";
      }
      else {
        span.style.textDecoration = "none";
      }
    })


    deleteBtn.addEventListener('click', (e) => {
      e.preventDefault();
      div.remove();
    })

  }

  else {
    alert("Add task")
  }


});

let toggle = document.getElementById('toggleBtn');
toggle.classList.add('toggle')
toggle.addEventListener('click', (e) => {
  e.preventDefault();
  let body = document.querySelector('body');
  body.classList.toggle('body');
})

let date = document.getElementById('date');

const intervalId = setInterval(() => {
  let newDate = new Date();

  let hours = newDate.getHours();
  let minutes = newDate.getMinutes();
  let seconds = newDate.getSeconds();

  const AmPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  date.innerHTML = `${hours}:${minutes}:${seconds}  ${AmPm}`

}, 1000);

let browserInfo = document.getElementById('browserInfo');
browserInfo.innerHTML = "Browser:  " + navigator.appName + navigator.appVersion + "Screen: " + screen.width + "x" + screen.height + "<br>" +
  "URL: " + window.location.href;

let google = document.getElementById('google');

let googleBtn = document.createElement('button');
googleBtn.innerText = "Go To Google";

google.appendChild(googleBtn);

googleBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = "https://www.google.com";
})



let submitBtn = document.createElement('button');
submitBtn.innerText = "Submit Assignment";

google.appendChild(submitBtn);

submitBtn.addEventListener('click', (e) => {
  let taskLine = document.getElementById('taskLine');
  if (taskLine && taskLine.children.length > 0) {

    let confirm = window.confirm("Are you sure you want to submit the assignment");
    if (confirm) {
      alert("assignment submiteed successfully")
    }
    else {
      e.preventDefault();
    }
  }
  else {
    alert("Add atleast 1 task");
  }
});

let windowHW = document.getElementById('windowHW');
windowHW.innerText = "Window Size:" + " " + window.innerWidth + 'x' + window.innerHeight;
