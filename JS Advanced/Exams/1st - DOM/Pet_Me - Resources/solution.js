function solve() {
  let petInfo = document.querySelectorAll("#container input");
  let adoption = document.querySelector("#adoption ul");
  let adopted = document.querySelector("#adopted ul");

  let pet = {
    name: petInfo[0],
    age: petInfo[1],
    kind: petInfo[2],
    currOwner: petInfo[3],
  };
  let addButton = document.querySelector("#container button");
  addButton.addEventListener("click", (e) => {
    e.preventDefault();
    const name = pet.name.value;
    const age = Number(pet.age.value);
    const kind = pet.kind.value;
    const currOwner = pet.currOwner.value;
    if (
      name == "" ||
      pet.age.value == "" ||
      Number.isNaN(age) ||
      kind == "" ||
      currOwner == ""
    ) {
      return;
    }
    let li = document.createElement("li");
    let p = document.createElement("p");
    let span = document.createElement("span");
    let button = document.createElement("button");
    button.className = `contactButton`;
    span.textContent = `Owner: ${currOwner}`;
    button.textContent = `Contact with owner`;
    p.innerHTML += `<strong>${name}</strong> is a <strong>${age}</strong> year old <strong>${kind}</strong>`;
    li.appendChild(p);
    li.appendChild(span);
    li.appendChild(button);
    adoption.appendChild(li);

    pet.name.value = "";
    pet.age.value = "";
    pet.kind.value = "";
    pet.currOwner.value = "";

    button.addEventListener(`click`, (e) => {
      let button2 = document.createElement("button");
      button2.textContent = `Yes! I take it!`;
      button2.className = `takeItButton`;
      let div = document.createElement("div");
      let input = document.createElement("input");
      input.placeholder = `Enter your names`;
      div.appendChild(input);
      div.appendChild(button2);
      li.appendChild(div);
      li.removeChild(button);
      button2.addEventListener("click", (e) => {
        if (input.value === "") {
          return;
        }
        adopted.appendChild(li);
        span.textContent = `New Owner: ${input.value}`;
        li.removeChild(div);
        let button3 = document.createElement("button");
        button3.textContent = `Checked`;
        li.appendChild(button3);
        button3.addEventListener("click", () => {
          adopted.removeChild(li);
        });
      });
    });
  });
}
