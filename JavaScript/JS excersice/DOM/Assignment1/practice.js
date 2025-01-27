function addItem() {
  let addBtn = document.getElementById('addItems');
  let count = 0;

  addBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let inputItems = document.getElementById('inputItems');

    let itemDescription = document.getElementById('itemDescription');

    if (inputItems.value != "" && itemDescription.value != "") {
      let LI = document.createElement('li');
      LI.style.listStyleType = 'none';
      LI.classList.add('liCSS')

      let List = document.getElementById('list');
      List.classList.add('listCSS')

      List.appendChild(LI);

      let table = document.createElement('table');

      let row = document.createElement('tr');
      row.classList.add('row')

      let cell1 = document.createElement('td');
      cell1.textContent = inputItems.value;
      cell1.classList.add('cell1');

      let cell2 = document.createElement('td');
      cell2.textContent = itemDescription.value;
      cell2.classList.add('cell2');

      let cell3 = document.createElement('td');
      cell3.innerHTML = `<button>Remove</button>`;
      cell3.classList.add('cell3');




      row.appendChild(cell1);
      row.appendChild(cell2);
      row.appendChild(cell3);


      table.appendChild(row);
      LI.appendChild(table);

      inputItems.value = "";
      itemDescription.value = "";


      cell3.addEventListener('click', (e) => {
        e.preventDefault();
        LI.remove();
      })

      count++;

      LI.addEventListener('click', (e) => {
        e.preventDefault();

        const allItems = List.querySelectorAll('li');
        allItems.forEach(item => item.classList.remove('highlight'));


        LI.classList.add('highlight');
      });


      if (count % 2 == 0) {
        LI.classList.add('even');
      }

      else {
        LI.classList.add('odd');
      }



    }
    else {
      alert("Kindly add Items and description")
    }



  });
};


addItem();