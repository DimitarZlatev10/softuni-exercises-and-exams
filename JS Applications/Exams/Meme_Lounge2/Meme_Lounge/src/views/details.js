import { deleteItem, getById } from "../api/data.js";
import { html } from "../libs.js";

const detailsTemplate = (item, isOwner, onDelete) => html` <section
  id="meme-details"
>
  <h1>Meme Title: ${item.title}</h1>
  <div class="meme-details">
    <div class="meme-img">
      <img alt="meme-alt" src=${item.imageUrl} />
    </div>
    <div class="meme-description">
      <h2>Meme Description</h2>
      <p>${item.description}</p>

      <!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
      ${isOwner
        ? html`<a class="button warning" href="/edit/${item._id}">Edit</a>
            <button @click=${onDelete} class="button danger">Delete</button>`
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
    await deleteItem(ctx.params.id);
    ctx.page.redirect("/catalog");
  }
}
