function solve() {
  let inputFields = Array.from(document.querySelectorAll("#container > input"));
  let addButton = document.querySelector("#container > button");
  let adoptionSection = document.querySelector("#adoption > ul");
  let adoptedSection = document.querySelector("#adopted > ul");

  addButton.addEventListener("click", addPet);

  function addPet(e) {
    e.preventDefault();
    let petName = inputFields[0].value;
    let petAge = Number(inputFields[1].value);
    let petKind = inputFields[2].value;
    let petCurrentOwner = inputFields[3].value;

    if (
      petName == "" ||
      isNaN(petAge) ||
      petAge < 0 ||
      petKind == "" ||
      petCurrentOwner == ""
    ) {
      return;
    }

    let petForAdoptionLi = document.createElement("li");
    petForAdoptionLi.innerHTML = `<p><strong>${petName}</strong> is a <strong>${petAge}</strong> year old <strong>${petKind}</strong></p>
         <span>Owner: ${petCurrentOwner}</span>
         <button>Contact with owner</button>`;
    clearInputs();
    adoptionSection.appendChild(petForAdoptionLi);
    let contactWithOwnerButton = petForAdoptionLi.querySelector("button");
    contactWithOwnerButton.addEventListener("click", contactWithOwner);
  }

  function contactWithOwner(e) {
    if ((e.target.textContent = "Contact with owner")) {
      let divElement = document.createElement("div");
      divElement.innerHTML = `<input placeholder ='Enter your names'>
            <button>Yes! I take it!</button>`;
      let contactWithOwnerButton =
        e.target.parentElement.querySelector("button");
      e.target.parentElement.appendChild(divElement);
      e.target.parentElement.removeChild(contactWithOwnerButton);
      let takeItButton = divElement.querySelector("button");
      takeItButton.addEventListener("click", moveToAdoptionSection);
    }
  }
  function moveToAdoptionSection(e) {
    if (e.target.parentElement.querySelector("input").value == "") {
      return;
    }
    let currentPet = e.target.parentElement.parentElement;
    currentPet.querySelector("span").textContent = `New Owner: ${
      e.target.parentElement.querySelector("input").value
    }`;
    currentPet.removeChild(currentPet.querySelector("div"));
    let checkedButton = document.createElement("button");
    checkedButton.textContent = `Checked`;
    checkedButton.addEventListener("click", removePet);
    currentPet.appendChild(checkedButton);
    adoptedSection.appendChild(currentPet);
  }
  function removePet(e) {
    if (e.target.tagName == "BUTTON") {
      e.target.parentElement.parentElement.removeChild(e.target.parentElement);
    }
  }
  function clearInputs() {
    // inputFields[0].value = "";
    // inputFields[1].value = "";
    // inputFields[2].value = "";
    // inputFields[3].value = "";
    for (const input of inputFields) {
      input.value = "";
    }
  }
}
