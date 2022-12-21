function solution() {
  let addGiftButton = document.querySelector(".card button");
  addGiftButton.addEventListener("click", addGift);

  let nameInput = document.querySelector("div :nth-child(1) input");

  let addGifts = document.querySelector("div").children[0];
  let listOfGifts = document.querySelector("div").children[1];
  let sentGifts = document.querySelector("div").children[2];
  let discardedGifts = document.querySelector("div").children[3];

  function addGift() {
    if (nameInput.value.length === 0) {
      return;
    }
    let liElement = document.createElement("li");
    liElement.className = `gift`;
    let sendButton = document.createElement("button");
    sendButton.id = `sendButton`;
    sendButton.textContent = `Send`;
    let discardButton = document.createElement("button");
    discardButton.id = `discardButton`;
    discardButton.textContent = `Discard`;
    liElement.textContent = nameInput.value;
    liElement.appendChild(sendButton);
    liElement.appendChild(discardButton);
    listOfGifts.querySelector("ul").appendChild(liElement);

    let allLiElements = Array.from(listOfGifts.querySelectorAll("li"));
    let sortedLiElements = allLiElements.sort((a, b) =>
      a.innerText.localeCompare(b.innerText)
    );

    while (listOfGifts.querySelector("ul").firstChild) {
      listOfGifts.querySelector("ul").firstChild.remove();
    }

    for (const element of sortedLiElements) {
      listOfGifts.querySelector("ul").appendChild(element);
    }

    nameInput.value = "";

    sendButton.addEventListener("click", onSend);
    discardButton.addEventListener("click", onDiscard);
  }

  function onSend(e) {
    sentGifts.querySelector("ul").appendChild(e.target.parentElement);
    e.target.parentElement.querySelectorAll("button")[1].remove();
    e.target.parentElement.querySelectorAll("button")[0].remove();
  }

  function onDiscard(e) {
    discardedGifts.querySelector("ul").appendChild(e.target.parentElement);
    e.target.parentElement.querySelectorAll("button")[0].remove();
    e.target.parentElement.querySelectorAll("button")[0].remove();
  }
}
