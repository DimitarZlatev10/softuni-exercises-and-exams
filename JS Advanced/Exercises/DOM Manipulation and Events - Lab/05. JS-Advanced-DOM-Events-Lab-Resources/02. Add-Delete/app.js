function addItem() {
  let input = document.getElementById("newItemText")
  let output = document.getElementById("items");

  let newLiElement = document.createElement("li");
  newLiElement.textContent = input.value;

  let deleteButton = document.createElement("a");
  deleteButton.setAttribute("href", "#");
  deleteButton.textContent = "[Delete]";

  deleteButton.addEventListener("click", (e) => {
    e.currentTarget.parentNode.remove();
  });

  newLiElement.appendChild(deleteButton);
  output.appendChild(newLiElement);

  input.value = "";
}
