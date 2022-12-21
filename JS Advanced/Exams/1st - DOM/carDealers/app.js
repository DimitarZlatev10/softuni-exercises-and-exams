window.addEventListener("load", solve);

function solve() {
  let makeInput = document.getElementById("make");
  let modelInput = document.getElementById("model");
  let productionYear = document.getElementById("year");
  let fuelType = document.getElementById("fuel");

  let originalCostInput = document.getElementById("original-cost");
  let sellingPriceInput = document.getElementById("selling-price");

  let publishButton = document.getElementById("publish");
  publishButton.addEventListener("click", onPublish);

  let tableBody = document.getElementById("table-body");

  let carsList = document.getElementById("cars-list");

  let profit = document.getElementById("profit");
  let totalProfit = 0;

  function onPublish(e) {
    e.preventDefault();
    if (
      makeInput.value == "" ||
      modelInput.value == "" ||
      productionYear == "" ||
      fuelType == "" ||
      sellingPriceInput.value <= originalCostInput.value
    ) {
      return;
    }
    let trElement = document.createElement("tr");
    trElement.className = `row`;
    let makeTd = document.createElement("td");
    makeTd.textContent = makeInput.value;
    let modelTd = document.createElement("td");
    modelTd.textContent = modelInput.value;
    let prodYearTd = document.createElement("td");
    prodYearTd.textContent = productionYear.value;
    let fuelTypeTd = document.createElement("td");
    fuelTypeTd.textContent = fuelType.value;
    let originalCostTd = document.createElement("td");
    originalCostTd.textContent = originalCostInput.value;
    let sellingCostTd = document.createElement("td");
    sellingCostTd.textContent = sellingPriceInput.value;
    let buttonsTd = document.createElement("td");
    let editButton = document.createElement("button");
    editButton.className = `action-btn edit`;
    editButton.textContent = `Edit`;
    let sellButton = document.createElement("button");
    sellButton.className = `action-btn sell`;
    sellButton.textContent = `Sell`;
    buttonsTd.appendChild(editButton);
    buttonsTd.appendChild(sellButton);
    trElement.appendChild(makeTd);
    trElement.appendChild(modelTd);
    trElement.appendChild(prodYearTd);
    trElement.appendChild(fuelTypeTd);
    trElement.appendChild(originalCostTd);
    trElement.appendChild(sellingCostTd);
    trElement.appendChild(buttonsTd);
    tableBody.appendChild(trElement);

    makeInput.value = "";
    modelInput.value = "";
    fuelType.value = "";
    productionYear.value = "";
    originalCostInput.value = "";
    sellingPriceInput.value = "";

    editButton.addEventListener("click", onEdit);
    sellButton.addEventListener("click", onSold);
  }

  function onEdit(e) {
    makeInput.value =
      e.target.parentElement.parentElement.children[0].textContent;
    modelInput.value =
      e.target.parentElement.parentElement.children[1].textContent;
    productionYear.value =
      e.target.parentElement.parentElement.children[2].textContent;
    fuelType.value =
      e.target.parentElement.parentElement.children[3].textContent;
    originalCostInput.value =
      e.target.parentElement.parentElement.children[4].textContent;
    sellingPriceInput.value =
      e.target.parentElement.parentElement.children[5].textContent;

    e.target.parentElement.parentElement.remove();
  }
  function onSold(e) {
    let liElement = document.createElement("li");
    liElement.className = `each-list`;
    let makeAndModelSpan = document.createElement("span");
    makeAndModelSpan.textContent = `${e.target.parentElement.parentElement.children[0].textContent} ${e.target.parentElement.parentElement.children[1].textContent}`;
    let prodYearSpan = document.createElement("span");
    prodYearSpan.textContent = `${e.target.parentElement.parentElement.children[2].textContent}`;
    let sumDifference =
      e.target.parentElement.parentElement.children[5].textContent -
      e.target.parentElement.parentElement.children[4].textContent;
    let sumSpan = document.createElement("span");
    sumSpan.textContent = sumDifference;
    liElement.appendChild(makeAndModelSpan);
    liElement.appendChild(prodYearSpan);
    liElement.appendChild(sumSpan);
    carsList.appendChild(liElement);

    totalProfit += sumDifference;
    profit.textContent = `${totalProfit.toFixed(2)}`;
    e.target.parentElement.parentElement.remove();
  }
}
