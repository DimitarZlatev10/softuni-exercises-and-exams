import { search } from "../api/data.js";
import { html } from "../libs.js";

const searchTemplate = (onSubmit) => html` <section id="searchPage">
  <h1>Search by Name</h1>

  <div class="search">
    <input
      id="search-input"
      type="text"
      name="search"
      placeholder="Enter desired albums's name"
    />
    <button @click=${onSubmit} class="button-list">Search</button>
  </div>

  <h2>Results:</h2>

  <div class="search-result">

</div>
</section>`;

const itemTemplate = (item) => html` <div class="card-box">
  <img src=${item.imgUrl} />
  <div>
    <div class="text-center">
      <p class="name">Name: ${item.name}</p>
      <p class="artist">Artist: ${item.artist}</p>
      <p class="genre">Genre: ${item.genre}</p>
      <p class="price">Price: $${item.price}</p>
      <p class="date">Release Date: ${item.releaseDate}</p>
    </div>
    <div class="btn-group">
      <a href="/details/${item._id}" id="details">Details</a>
    </div>
  </div>
</div>`;

const reqTemplate = (items) => html`
  ${items[0].length == 0
    ? html`<p class="no-result">No result.</p>`
    : items[0].map(itemTemplate)}
`;

export async function searchPage(ctx) {
  ctx.render(searchTemplate(onSubmit));

  async function onSubmit(event) {
    const query =
      event.target.parentElement.querySelector("#search-input").value;
    if (query == "") {
      return alert("Empty field");
    }

    const items = await search(query);
    console.log(items);
    reqTemplate(items);
  }
}

// ${items.length == 0
//       ? html`<p class="no-result">No result.</p>`
//       : items.map(itemTemplate)}
