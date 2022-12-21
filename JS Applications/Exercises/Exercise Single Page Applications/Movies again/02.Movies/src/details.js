import { showView } from "./dom.js";

const detailsSection = document.getElementById("movie-example");
detailsSection.remove();

export function showDetails(movieId) {
  showView(detailsSection);
  getMovie(movieId);
}

async function getMovie(movieId) {
  detailsSection.replaceChildren(
    (document.createElement("p").textContent = "Loading...")
  );
  const res = await fetch("http://localhost:3030/data/movies/" + movieId);
  const data = await res.json();

  detailsSection.replaceChildren(createMovieInfo(data));
}

function createMovieInfo(movie) {
  const divElement = document.createElement("div");
  divElement.className = "container";
  divElement.innerHTML = `
    <div class="row bg-light text-dark">
            <h1>Movie title: ${movie.title}</h1>

            <div class="col-md-8">
              <img
                class="img-thumbnail"
                src="${movie.img}"
                alt="Movie"
              />
            </div>
            <div class="col-md-4 text-center">
              <h3 class="my-3">Movie Description</h3>
              <p>
                ${movie.description}
              </p>
              <a class="btn btn-danger" href="#">Delete</a>
              <a class="btn btn-warning" href="#">Edit</a>
              <a class="btn btn-primary" href="#">Like</a>
              <span class="enrolled-span">Liked 1</span>
            </div>
          </div> `;
  // const divContainerElement = document.createElement('div')
  // divContainerElement.className = 'container'
  // const secondDivElement = document.createElement('div')
  // secondDivElement.className = 'row bg-light text-dark'
  // const h1TitleElement = document.createElement('h1')
  // h1TitleElement.textContent = `Movie title: ${movie.title}`
  // const divImgElement = document.createElement('div')
  // divImgElement.className= 'col-md-8'
  // const imgElement = document.createElement('img')
  // imgElement.className ='img-thumbnail'
  // imgElement.src = `${movie.img}`
  // imgElement.alt = 'Movie'
  // const textDivElement = document.createElement('div')
  // textDivElement.className = `col-mb-4 text-center`
  // const h3DescriptionElement = document.createElement('h3')
  // h3DescriptionElement.textContent = `Movie Description`
  // const pElement = document.createElement('p')
  // pElement.textContent = `${movie.description}`
  // secondDivElement.appendChild(h1TitleElement)
  // divImgElement.appendChild(imgElement)
  // secondDivElement.appendChild(divImgElement)
  // textDivElement.appendChild(h3DescriptionElement)
  // textDivElement.appendChild(pElement)
  // secondDivElement.appendChild(textDivElement)
  // divContainerElement.appendChild(secondDivElement)

  // const elements = divContainerElement

  return divElement;
}
