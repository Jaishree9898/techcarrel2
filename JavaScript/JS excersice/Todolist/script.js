const input = document.getElementById('inputTask'); 
const addBtn = document.getElementById('addTask'); 

addBtn.addEventListener('click', (e) => {
  e.preventDefault(); 

  const inputTask = input.value;

  if (inputTask) { 
    const tasks = document.getElementById('tasks'); 

    const UL = document.createElement('ul'); 
    const checkTask = document.createElement('input'); 
    checkTask.type = 'checkbox'; 
    const taskLine = document.createElement('li'); 
    const task = document.createElement('span');
    task.innerText=inputTask
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Delete";

    tasks.appendChild(UL);
    UL.appendChild(taskLine);
    taskLine.appendChild(checkTask);
    taskLine.appendChild(task);
    taskLine.appendChild(deleteBtn);

    
    taskLine.classList.add('flex', 'items-center', 'justify-between', 'p-2', 'border', 'border-gray-300', 'rounded', 'mb-2');   
    deleteBtn.classList.add('bg-red-500', 'hover:bg-red-600', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded', 'ml-4');
    checkTask.classList.add('mr-2');



    input.value = ''; 

   
    checkTask.addEventListener('change', () => {
      if (checkTask.checked) {
        task.style.textDecoration = 'line-through'; 
      } else {
        task.style.textDecoration = 'none'; 
      }
    });


    deleteBtn.addEventListener('click', (e) => {
      e.preventDefault();
      UL.removeChild(taskLine);     });

  } else {
    alert('Please enter a task!'); 
  }
});

const date=document.getElementById('date').innerHTML = new Date().toLocaleTimeString();

date.classList.add('text-center', 'mt-4')