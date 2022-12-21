function addItem() {
  let input = document.getElementById("newItemText")
  let output = document.getElementById("items");

  let newLiElement = document.createElement('li')
  newLiElement.textContent = input.value
  output.appendChild(newLiElement)

  input.value = ''
}
