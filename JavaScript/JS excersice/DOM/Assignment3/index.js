document.addEventListener("DOMContentLoaded", () => {
  const keyInput = document.getElementById("keyInput");
  const valueInput = document.getElementById("valueInput");
  const addBtn = document.getElementById("addBtn");
  const storageList = document.getElementById("storageList");

  // Function to display all items from localStorage
  function displayStorage() {
    storageList.innerHTML = ""; // Clear current list

    // Loop through all localStorage keys
    Object.keys(localStorage).forEach((key) => {
      const value = localStorage.getItem(key);

      // Create a list item
      const li = document.createElement("li");
      li.textContent = `${key}: ${value}`;
      storageList.appendChild(li);

      // Add a delete button for each item
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Remove";
      li.appendChild(deleteBtn);

      // Delete item from localStorage and update the list
      deleteBtn.addEventListener("click", () => {
        localStorage.removeItem(key);
        displayStorage();
      });
    });
  }

  // Event listener for adding key-value pair to localStorage
  addBtn.addEventListener("click", () => {
    const key = keyInput.value.trim();
    const value = valueInput.value.trim();

    if (key === "" || value === "") {
      alert("Both key and value are required!");
      return;
    }

    localStorage.setItem(key, value); // Add to localStorage
    keyInput.value = ""; // Clear inputs
    valueInput.value = "";
    displayStorage(); // Update the displayed list
  });

  // Display storage items on page load
  displayStorage();
});
