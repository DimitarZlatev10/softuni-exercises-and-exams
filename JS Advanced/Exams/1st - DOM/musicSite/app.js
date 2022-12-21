window.addEventListener("load", solve);

function solve() {
  let totalLikes = 0;
  let totalLikesOutput = document.querySelector(".likes > p");
  let genreInput = document.getElementById("genre");
  let nameOfTheSongInput = document.getElementById("name");
  let authorOfTheSongInput = document.getElementById("author");
  let dateInput = document.getElementById("date");

  let collectionOfSongs = document.querySelector(".all-hits-container");
  let savedSongs = document.querySelector(".saved-container");
  let addButton = document.getElementById("add-btn");
  addButton.addEventListener("click", newSongInfo);

  function newSongInfo(e) {
    e.preventDefault();
    if (
      genreInput.value == "" ||
      nameOfTheSongInput.value == "" ||
      authorOfTheSongInput.value == "" ||
      dateInput.value == ""
    ) {
      return;
    }
    let divElement = document.createElement("div");
    divElement.className = "hits-info";
    divElement.innerHTML = `<img src = './static/img/img.png'>
      <h2>Genre: ${genreInput.value}</h2>
      <h2>Name: ${nameOfTheSongInput.value}</h2>
      <h2>Author: ${authorOfTheSongInput.value}</h2>
      <h3>Date: ${dateInput.value}</h3>
      <button class='save-btn'>Save song</button>
      <button class='like-btn'>Like song</button>
      <button class='delete-btn'>Delete</button>
      `;
    let saveButton = divElement.querySelector(".save-btn");
    saveButton.addEventListener("click", saveSong);
    let likeSongButton = divElement.querySelector(".like-btn");
    likeSongButton.addEventListener("click", likeSong);
    let deleteButton = divElement.querySelector(".delete-btn");
    deleteButton.addEventListener("click", deleteSong);
    collectionOfSongs.appendChild(divElement);
    clearInputs();
  }

  function likeSong(e) {
    totalLikes += 1;
    totalLikesOutput.textContent = `Total Likes: ${totalLikes}`;
    e.target.disabled = true;
  }
  function saveSong(e) {
    console.log(e.target.parentElement);
    let div = e.target.parentElement;
    div.removeChild(div.querySelector(".like-btn"));
    div.removeChild(div.querySelector(".save-btn"));
    savedSongs.appendChild(div);
  }
  function deleteSong(e) {
    console.log(e.target.parentElement.parentElement);
    let deleteDiv = e.target.parentElement;
    let parentDiv = e.target.parentElement.parentElement;
    parentDiv.removeChild(deleteDiv);
  }

  function clearInputs() {
    genreInput.value = "";
    nameOfTheSongInput.value = "";
    authorOfTheSongInput.value = "";
    dateInput.value = "";
  }
}
