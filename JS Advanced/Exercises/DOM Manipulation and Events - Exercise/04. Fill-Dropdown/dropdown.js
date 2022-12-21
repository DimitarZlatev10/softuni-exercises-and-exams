function addItem() {
  let text = document.getElementById("newItemText");
  let valueInput = document.getElementById("newItemValue");
  let menu = document.getElementById("menu");

  let option = document.createElement("option");
  option.setAttribute("value", valueInput.value);
  option.textContent = text.value;
  menu.appendChild(option);

  text.value = "";
  valueInput.value = "";
  console.log(option);
}
