window.addEventListener("load", solve);

function solve() {
  let titleInput = document.getElementById("post-title");
  let categoryInput = document.getElementById("post-category");
  let contentInput = document.getElementById("post-content");
  let publishButton = document.getElementById("publish-btn");
  publishButton.addEventListener("click", checkInputs);
  let reviewList = document.getElementById("review-list");
  let uploadedPosts = document.getElementById("published-list");
  let clearButton = document.getElementById("clear-btn");
  clearButton.addEventListener("click", onClear);

  function checkInputs() {
    if (
      titleInput.value.length == 0 ||
      categoryInput.value.length == 0 ||
      contentInput.value.length == 0
    ) {
      return;
    } else {
      createPost();
    }
  }

  function createPost() {
    const li = document.createElement("li");
    li.className = `rpost`;
    let articleElement = document.createElement("article");
    let title = document.createElement("h4");
    title.textContent = `${titleInput.value}`;
    let category = document.createElement("p");
    category.textContent = `Category: ${categoryInput.value}`;
    let content = document.createElement("p");
    content.textContent = `Content: ${contentInput.value}`;
    articleElement.appendChild(title);
    articleElement.appendChild(category);
    articleElement.appendChild(content);
    let editButtonElement = document.createElement("button");
    editButtonElement.className = `action-btn edit`;
    editButtonElement.textContent = `Edit`;
    let approveButtonElement = document.createElement("button");
    approveButtonElement.className = `action-btn approve`;
    approveButtonElement.textContent = `Approve`;
    li.appendChild(articleElement);
    li.appendChild(editButtonElement);
    li.appendChild(approveButtonElement);
    reviewList.appendChild(li);

    titleInput.value = "";
    categoryInput.value = "";
    contentInput.value = "";

    editButtonElement.addEventListener("click", onEdit);
    approveButtonElement.addEventListener("click", onApprove);
  }

  function onEdit(e) {
    titleInput.value = e.target.parentElement.querySelector("h4").textContent;
    categoryInput.value = e.target.parentElement
      .querySelector("article :nth-child(2)")
      .textContent.split("")
      .splice(10)
      .join("");
    contentInput.value = e.target.parentElement
      .querySelector("article :nth-child(3)")
      .textContent.split("")
      .splice(9)
      .join("");

    e.target.parentElement.remove();
  }
  function onApprove(e) {
    uploadedPosts.appendChild(e.target.parentElement);
    e.target.parentElement.querySelector("button").remove();
    e.target.parentElement.querySelector("button").remove();
  }
  function onClear(e) {
while(e.target.parentElement.querySelector('ul')){
  e.target.parentElement.querySelector('ul').removeChild(e.target.parentElement.querySelector('li'))
}
  }
}
