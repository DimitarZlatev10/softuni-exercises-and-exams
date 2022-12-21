function solve() {
  let authorInput = document.getElementById(`creator`);
  let titleInput = document.getElementById("title");
  let categoryInput = document.getElementById("category");
  let contentInput = document.getElementById("content");

  let olOutput = document.querySelector(".archive-section ol");
  let postsOutput = document.querySelector(".site-content section");
  let createButton = document.querySelector(".site-content button");
  createButton.addEventListener("click", (e) => {
    e.preventDefault();
    let articleElement = document.createElement("article");
    let titleElement = document.createElement("h1");
    titleElement.textContent = titleInput.value;
    let categoryElement = document.createElement("p");
    categoryElement.innerHTML = `Category: <strong>${categoryInput.value}</strong>`;
    let creatorElement = document.createElement("p");
    creatorElement.innerHTML = `Creator: <strong>${authorInput.value}</strong>`;
    let contentElement = document.createElement("p");
    contentElement.textContent = contentInput.value;

    let titleName = titleInput.value;
    
    let divElement = document.createElement("div");
    divElement.className = "buttons";
    let deleteButtonElement = document.createElement("button");
    deleteButtonElement.className = `btn delete`;
    deleteButtonElement.textContent = `Delete`;
    let archiveButtonElement = document.createElement("button");
    archiveButtonElement.className = `btn archive`;
    archiveButtonElement.textContent = `Archive`;

    archiveButtonElement.addEventListener("click", (e) => {
     let liElement = document.createElement('li')
     liElement.textContent = titleName
     olOutput.appendChild(liElement)
     sort()
     postsOutput.removeChild(articleElement);
    });
    deleteButtonElement.addEventListener("click", (e) => {
      postsOutput.removeChild(articleElement);
    });

    divElement.appendChild(deleteButtonElement);
    divElement.appendChild(archiveButtonElement);

    articleElement.appendChild(titleElement);
    articleElement.appendChild(categoryElement);
    articleElement.appendChild(creatorElement);
    articleElement.appendChild(contentElement);
    articleElement.appendChild(divElement);
    postsOutput.appendChild(articleElement);
    clearInputs();
  });

  function clearInputs() {
    authorInput.value = "";
    titleInput.value = "";
    categoryInput.value = "";
    contentInput.value = "";
  }
  function sort(){
   let array = document.querySelectorAll(".archive-section ol li")
   let result = []
   for (let line of array) {
      result.push(line.textContent)   
   }
   result.sort((a,b)=>a.localeCompare(b))
   console.log(result);
   for (let i = 0; i < array.length; i++) {
     array[i].textContent = result[i]
      
   }
  }
}
