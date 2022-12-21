import { showView } from "./dom.js";

const section = document.getElementById("movie-example");
section.remove();

export function showDetails(movieId) {
  showView(section);
  getMovie(movieId);
}

async function getMovie(id) {
  section.replaceChildren(
    (document.createElement("p").textContent = "Loading...")
  );
  const requests = [
    fetch("http://localhost:3030/data/movies/" + id),
    fetch(
      `http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`
    ),
  ];
  const userData = sessionStorage.getItem("userData");
  if (userData != null) {
    requests.push(
      fetch(
        `http://localhost:3030/data/likes?where=movieId%3D%22${id}%22%20and%20_ownerId%3D%22${userData.id}%22&count`
      )
    );
  }
  const [movieRes, likesRes, hasLikedRes] = await Promise.all(requests);
  const [movieData, likes, hasLiked] = await Promise.all([
    movieRes.json(),
    likesRes.json(),
    hasLikedRes && hasLikedRes.json(),
  ]);

  section.replaceChildren(createDetails(movieData, likes, hasLiked));
}

function createDetails(movie, likes, hasLiked) {
    console.log(hasLiked);
  const divElement = document.createElement("div");
  divElement.className = "container";
  const secondDivElement = document.createElement("div");
  secondDivElement.className = "row bg-light text-dark";
  const h1Element = document.createElement("h1");
  h1Element.textContent = `Movie title: ${movie.title}`;
  const imgDivElement = document.createElement("div");
  imgDivElement.className = "col-md-8";
  const imgElement = document.createElement("img");
  imgElement.className = "img-thumbnail";
  imgElement.src = movie.img;
  const textDivElement = document.createElement("div");
  textDivElement.className = "col-md-4 text-center";
  const h3Element = document.createElement("h3");
  h3Element.className = "my-3";
  h3Element.textContent = `Movie Description`;
  const pElement = document.createElement("p");
  pElement.textContent = movie.description;
  const likeSpanElement = document.createElement("span");
  likeSpanElement.className = `enrolled-span`;
  likeSpanElement.textContent = `Liked ${likes}`;

  secondDivElement.appendChild(h1Element);
  imgDivElement.appendChild(imgElement);
  secondDivElement.appendChild(imgDivElement);
  textDivElement.appendChild(h3Element);
  textDivElement.appendChild(pElement);
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  if (userData != null) {
    if (userData.id == movie._ownerId) {
      const deleteBtnElement = document.createElement("a");
      deleteBtnElement.className = `btn btn-danger`;
      deleteBtnElement.href = `#`;
      deleteBtnElement.textContent = `Delete`;
      const editBtnElement = document.createElement("a");
      editBtnElement.className = `btn btn-warning`;
      editBtnElement.href = `#`;
      editBtnElement.textContent = `Edit`;
      textDivElement.appendChild(deleteBtnElement);
      textDivElement.appendChild(editBtnElement);
    } else {
      if (hasLiked) {
        const unlikeButtonElement = document.createElement("a");
        unlikeButtonElement.className = `btn btn-primary`;
        unlikeButtonElement.textContent = `Unlike`;
        unlikeButtonElement.href = `#`;
        textDivElement.appendChild(unlikeButtonElement);
      } else {
        const likeBtnElement = document.createElement("a");
        likeBtnElement.className = `btn btn-primary`;
        likeBtnElement.href = `#`;
        likeBtnElement.textContent = `Like`;
        likeBtnElement.addEventListener("click", onLike);
        textDivElement.appendChild(likeBtnElement);
      }
    }
  }
  textDivElement.appendChild(likeSpanElement);
  secondDivElement.appendChild(textDivElement);
  divElement.appendChild(secondDivElement);
  const elements = divElement;
  return elements;

  async function onLike() {
    await fetch("http://localhost:3030/data/likes", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": userData.token,
      },
      body: JSON.stringify({
        movieId: movie._id,
      }),
    });
    showDetails(movie._id);
  }
}
