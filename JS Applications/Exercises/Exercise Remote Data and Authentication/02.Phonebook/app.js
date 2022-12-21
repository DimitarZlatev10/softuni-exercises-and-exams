function attachEvents() {
  const loadButton = document.getElementById("btnLoad");
  loadButton.addEventListener("click", loadContacts);
  const createButton = document.getElementById("btnCreate");
  createButton.addEventListener("click", sendContact);
  contacts.addEventListener('click',onDelete)
}
const contacts = document.getElementById("phonebook");
const personInput = document.getElementById("person");
const phoneInput = document.getElementById("phone");
attachEvents();


async function onDelete(event){
    const id = event.target.id
    if(id!= undefined){
        await deleteContact(id)
        event.target.parentElement.remove()
    }
}
async function sendContact() {
  const person = personInput.value;
  const phone = phoneInput.value;

  const result = await createContacts({ person, phone });

  personInput.value = "";
  phoneInput.value = "";
}
async function loadContacts() {
  const url = "http://localhost:3030/jsonstore/phonebook";

  const res = await fetch(url);
  const data = await res.json();
  contacts.replaceChildren();
  const contactsInfo = Object.values(data);

  contactsInfo.forEach((s) => {
    let liElement = document.createElement("li");
    liElement.textContent = `${s.person}: ${s.phone}`;
    let deleteButton = document.createElement("button");
    deleteButton.textContent = `Delete`;
    deleteButton.id = s._id;
    liElement.appendChild(deleteButton);
    contacts.appendChild(liElement);
  });
}

async function createContacts(info) {
  const url = "http://localhost:3030/jsonstore/phonebook";
  const options = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(info),
  };
  const res = await fetch(url, options);
  const result = res.json();

  return result;
}

async function deleteContact(id) {
  const res = await fetch("http://localhost:3030/jsonstore/phonebook/" + id, {
    method: "delete",
  });

  const result = await res.json();

  return result;
}
