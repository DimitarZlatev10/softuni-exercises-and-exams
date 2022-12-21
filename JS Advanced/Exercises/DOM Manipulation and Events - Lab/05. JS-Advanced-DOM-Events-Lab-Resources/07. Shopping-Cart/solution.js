function solve() {
  let addProductsButton = document.querySelectorAll(".add-product");
  let textArea = document.querySelector("textarea");
  let checkOutButton = document.querySelector(".checkout");
  let sum = 0;
  let uniqueItems = [];

  for (let productInfo of addProductsButton) {
    productInfo.addEventListener("click", (e) => {
      let currProductElement = e.currentTarget.parentElement.parentElement;
      let productName =
        currProductElement.querySelector(".product-title").textContent;
      let productPrice = currProductElement.querySelector(
        ".product-line-price"
      ).textContent;

      sum += Number(productPrice);
      if (!uniqueItems.includes(productName)) {
        uniqueItems.push(productName);
      }

      textArea.textContent += `Added ${productName} for ${Number(
        productPrice
      ).toFixed(2)} to the cart.\n`;
    });
  }
  checkOutButton.addEventListener("click", (e) => {
    textArea.textContent += `You bought ${uniqueItems.join(
      ", "
    )} for ${sum.toFixed(2)}.`;
   //  addProductsButton.setAttribute('disabled', '')
   //  checkOutButton.setAttribute('disabled', '')
    for (let line of addProductsButton) {
      //  line.disabled = true
      line.setAttribute('disabled','')
       
    }
   //  checkOutButton.disabled=true
    checkOutButton.setAttribute('disabled', '')

  });
}
