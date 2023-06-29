const form = document.getElementById("addForm");
const itemList = document.getElementById("items");
const filter = document.getElementById("filter");
// Form submit event
form.addEventListener("submit", addItems);
// Delete Event
itemList.addEventListener("click", removeItems);
// Filter event
filter.addEventListener("keyup", filterItems);

// Add Items
function addItems(e) {
  e.preventDefault();

  const newItem = document.getElementById("item").value;
  const li = document.createElement("li");
  li.className = "list-group-item";
  li.appendChild(document.createTextNode(newItem));
  itemList.appendChild(li);

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  deleteBtn.appendChild(document.createTextNode("X"));
  li.appendChild(deleteBtn);
}

// Delete Items
function removeItems(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure?")) {
      const li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e) {
  const text = e.target.value.toLowerCase();
  const items = document.getElementsByTagName("li");
  Array.from(items).forEach(function (item) {
    const itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
