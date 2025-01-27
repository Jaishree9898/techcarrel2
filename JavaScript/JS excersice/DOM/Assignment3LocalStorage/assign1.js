let inputText = document.getElementById('taskInput');
let taskList = document.getElementById('taskList');

if (localStorage.getItem('task') === null) {
  let tasks = [];
  localStorage.setItem("task", tasks)
}

else {

  let taskList = document.getElementById('taskList');
  let li = document.createElement('li');
  let 
}

