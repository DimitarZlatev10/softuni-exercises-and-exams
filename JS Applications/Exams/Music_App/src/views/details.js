import { deleteItem, getById } from "../api/data.js";
import { html } from "../libs.js";

const detailsTemplate = (item, isOwner, onDelete) => html` <section
  id="detailsPage"
>
  <div class="wrapper">
    <div class="albumCover">
      <img src=${item.imgUrl} />
    </div>
    <div class="albumInfo">
      <div class="albumText">
        <h1>Name: ${item.name}</h1>
        <h3>Artist: ${item.artist}</h3>
        <h4>Genre: ${item.genre}</h4>
        <h4>Price: $${item.price}</h4>
        <h4>Date: ${item.releaseDate}</h4>
        <p>Description: ${item.description}</p>
      </div>

      <!-- Only for registered user and creator of the album-->
      ${isOwner
        ? html`<div class="actionBtn">
            <a href="/edit/${item._id}" class="edit">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" class="remove"
              >Delete</a
            >
          </div>`
        : null}
    </div>
  </div>
</section>`;

export async function detailsPage(ctx) {
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  const item = await getById(ctx.params.id);
  const isOwner = userData && item._ownerId == userData.id;
  ctx.render(detailsTemplate(item, isOwner, onDelete));

  async function onDelete() {
    const choice = confirm("Are you sure you want to delete this item ?");

    if (choice) {
      await deleteItem(ctx.params.id);
      ctx.page.redirect("/catalog");
    }
  }
}
