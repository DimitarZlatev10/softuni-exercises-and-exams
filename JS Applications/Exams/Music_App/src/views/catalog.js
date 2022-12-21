import { getAll } from "../api/data.js";
import { html } from "../libs.js";

const catalogTemplate = (items) => html` <section id="catalogPage">
  <h1>All Albums</h1>
  ${items.length == 0
    ? html`<p>No Albums in Catalog!</p>`
    : items.map(itemTemplate)}
  <!--No albums in catalog-->
</section>`;

const itemTemplate = (item) => html` <div class="card-box">
  <img src=${item.imgUrl} />
  <div>
    <div class="text-center">
      <p class="name">Name: ${item.name}</p>
      <p class="artist">Artist: ${item.artist}</p>
      <p class="genre">Genre: ${item.genre}</p>
      <p class="price">Price: $${item.price}</p>
      <p class="date">Release Date: ${item.date}</p>
    </div>

    <div class="btn-group">
      <a href="/details/${item._id}" id="details">Details</a>
    </div>
  </div>
</div>`;

export async function catalogPage(ctx) {
  
  const items = await getAll();

  ctx.render(catalogTemplate(items));
}
