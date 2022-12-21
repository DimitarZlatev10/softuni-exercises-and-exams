function solve() {
  let taskInput = document.getElementById("task");
  let descriptionInput = document.getElementById("description");
  let dateInput = document.getElementById("date");

  let openOutput = document.querySelector(
    ".wrapper section:nth-child(2) div:nth-child(2)"
  );
  let inProgressOutput = document.querySelector( ".wrapper section:nth-child(3) div:nth-child(2)")
  let completeOutput = document.querySelector(
    ".wrapper section:nth-child(4) div:nth-child(2)"
  );

  let addButton = document.getElementById("add");
  addButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      taskInput.value === "" ||
      descriptionInput.value === "" ||
      dateInput === ""
    ) {
      return;
    }
    let taskInputName = taskInput.value;
    let descriptionInputName = descriptionInput.value;
    let dateInputName = dateInput.value;
    let articleElement = document.createElement("article");
    let taskNameElement = document.createElement("h3");
    taskNameElement.textContent = taskInput.value;
    let descriptionNameElement = document.createElement("p");
    descriptionNameElement.textContent = `Description: ${descriptionInput.value}`;
    let dateNameElement = document.createElement("p");
    dateNameElement.textContent = `Due Date: ${dateInput.value}`;

    let divElement = document.createElement("div");
    divElement.className = "flex";
    let startButton = document.createElement("button");
    startButton.textContent = "Start";
    startButton.className = "green";
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "red";
    articleElement.appendChild(taskNameElement);
    articleElement.appendChild(descriptionNameElement);
    articleElement.appendChild(dateNameElement);
    divElement.appendChild(startButton);
    divElement.appendChild(deleteButton);
    articleElement.appendChild(divElement);
    openOutput.appendChild(articleElement);
    clearInputFields();
    startButton.addEventListener("click", (e) => {
      openOutput.removeChild(articleElement);
      let articleElementInProgress = document.createElement("article");
      let taskNameElement = document.createElement("h3");
      taskNameElement.textContent = taskInputName;
      let descriptionNameElement = document.createElement("p");
      descriptionNameElement.textContent = `Description: ${descriptionInputName}`;
      let dateNameElement = document.createElement("p");
      dateNameElement.textContent = `Due Date: ${dateInputName}`;
      let divElement = document.createElement("div");
      divElement.className = "flex";
      let startButton = document.createElement("button");
      startButton.textContent = "Finish";
      startButton.className = "orange";
      let deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.className = "red";
      startButton.addEventListener("click", (e) => {
        articleElementInProgress.removeChild(divElement);
        completeOutput.appendChild(articleElementInProgress);
      });
      deleteButton.addEventListener("click", () => {
        inProgressOutput.removeChild(articleElementInProgress);
      });
      articleElementInProgress.appendChild(taskNameElement);
      articleElementInProgress.appendChild(descriptionNameElement);
      articleElementInProgress.appendChild(dateNameElement);
      divElement.appendChild(deleteButton);
      divElement.appendChild(startButton);
      articleElementInProgress.appendChild(divElement);
      inProgressOutput.appendChild(articleElementInProgress);
    });
    deleteButton.addEventListener("click", (e) => {
      openOutput.removeChild(articleElement);
    });
  });

  function clearInputFields() {
    taskInput.value = "";
    descriptionInput.value = "";
    dateInput.value = "";
  }
}
