headers = ['Name', 'Age', 'Country'];
data = [
  { name: 'Alice', age: 25, country: 'USA' },
  { name: 'Bob', age: 30, country: 'UK' }
];


function createTable() {
  const container= document.getElementById('tableContainer');
  
  const table = document.createElement('table');
  const trow = document.createElement('tr');
  const thead = document.createElement('th');
  const tdata = document.createElement('tr');

  // Object.keys(headers[0].forEach(key => {
  //   thead.textContent = key;
    
  // }));

  table.appendChild(container);
  trow.appendChild(table);
  thead.appendChild(trow);

}

createTable();