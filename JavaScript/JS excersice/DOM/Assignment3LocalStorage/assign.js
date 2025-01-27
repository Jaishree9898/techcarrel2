let inputText = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");
let tasks = [];

document.getElementById('addTaskBtn').addEventListener("click", (e) => {
  e.preventDefault();

  if (inputText.value === "") {
    alert("Please enter a task");
    return;
  }
  let taskValue = {
    id: Math.random().toString(36).substr(2, 9),
    task: inputText.value,
    completed: false,
  }
  tasks.push(taskValue);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  JSON.parse(localStorage.getItem("tasks"));

  let li = document.createElement('li');
  li.style.listStyle = "none";
  li.setAttribute("data-id", taskValue.id)
  li.innerHTML = `<input type="checkBox" class="checkBox">
    <span class="span">${taskValue.task}</span>
    <button class="remove">Remove</button>`
  taskList.appendChild(li);
  inputText.value = "";

  let checkBox = document.querySelector('.checkBox');
  let span = document.querySelector('.span');
  checkBox.addEventListener('click', () => {
    if (checkBox.checked) {
      span.style.textDecoration = "line-through";
      taskValue.completed = true;
    }
    else {
      span.style.textDecoration = "none";
      taskValue.completed = false;
    }
  });

  tasks = tasks.map(task => task.id === taskValue.id ? taskValue : task);
  localStorage.setItem("tasks", JSON.stringify(tasks));




  document.getElementById('remove').addEventListener('click', () => {
    li.remove();
    tasks = tasks.filter(task => task.id !== taskValue.id);
    localStorage.setItem("tasks", JSON.stringify(tasks));

  });
});

