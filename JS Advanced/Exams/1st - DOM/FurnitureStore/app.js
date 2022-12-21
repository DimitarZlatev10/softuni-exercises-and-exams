window.addEventListener("load", solve);

function solve() {
  let modelInput = document.getElementById("model");
  let yearInput = document.getElementById("year");
  let descriptionInput = document.getElementById("description");
  let priceInput = document.getElementById("price");

  let addButton = document.getElementById("add");

  let furnitureList = document.getElementById("furniture-list");

  let totalPrice = 0;

  addButton.addEventListener("click", (e) => {
    e.preventDefault();

    if (
      modelInput.value == "" ||
      yearInput.value <= 0 ||
      descriptionInput.value == "" ||
      priceInput.value <= 0
    ) {
      return;
    }

    let trInfo = document.createElement("tr");
    trInfo.className = "info";
    let modelNameTd = document.createElement("td");
    modelNameTd.textContent = modelInput.value;
    let priceTd = document.createElement("td");
    priceTd.textContent = `${priceInput.value}.00`;
    let buttonsTd = document.createElement("td");
    let moreInfoButton = document.createElement("button");
    moreInfoButton.textContent = "More Info";
    moreInfoButton.className = "moreBtn";
    let buyItButton = document.createElement("button");
    buyItButton.textContent = "Buy it";
    buyItButton.className = "buyBtn";
    buttonsTd.appendChild(moreInfoButton);
    buttonsTd.appendChild(buyItButton);
    trInfo.appendChild(modelNameTd);
    trInfo.appendChild(priceTd);
    trInfo.appendChild(buttonsTd);

    let hiddenTr = document.createElement("tr");
    hiddenTr.className = "hide";
    let yearTd = document.createElement("td");
    yearTd.textContent = `Year: ${yearInput.value}`;
    let descriptionTd = document.createElement("td");
    descriptionTd.colSpan = "3";
    descriptionTd.textContent = `Description: ${descriptionInput.value}`;
    hiddenTr.appendChild(yearTd);
    hiddenTr.appendChild(descriptionTd);

    furnitureList.appendChild(trInfo);
    furnitureList.appendChild(hiddenTr);

    moreInfoButton.addEventListener("click", (e) => {
      if (moreInfoButton.textContent === "More Info") {
        moreInfoButton.textContent = "Less Info";
        hiddenTr.style.display = "contents";
      } else {
        moreInfoButton.textContent = "More Info";
        hiddenTr.style.display = "none";
      }
    });
    let price = Number(priceInput.value);
    buyItButton.addEventListener("click", (e) => {
      let totalProfit = document.querySelector(".total-price");
      totalPrice += price;
      totalProfit.textContent = `${totalPrice}.00`;

      furnitureList.removeChild(trInfo);
      furnitureList.removeChild(hiddenTr);
    });

    clearInputs();
  });

  function clearInputs() {
    modelInput.value = "";
    yearInput.value = "";
    descriptionInput.value = "";
    priceInput.value = "";
  }
}
