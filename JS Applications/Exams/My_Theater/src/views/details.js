import {
  deleteById,
  getById,
  getTotalLikes,
  hasLiked,
  postLike,
} from "../api/data.js";
import { html } from "../libs.js";

const detailsTemplate = (
  item,
  isOwner,
  onDelete,
  showLikeButton,
  totalLikes,
  onLike
) => html` <section id="detailsPage">
  <div id="detailsBox">
    <div class="detailsInfo">
      <h1>Title: ${item.title}</h1>
      <div>
        <img src=${item.imageUrl} />
      </div>
    </div>

    <div class="details">
      <h3>Theater Description</h3>
      <p>${item.description}</p>
      <h4>Date: ${item.date}</h4>
      <h4>Author: ${item.author}</h4>
      <div class="buttons">
        ${ownerButtons(item, isOwner, onDelete)}
        ${likeButton(showLikeButton, onLike)}
      </div>
      <p class="likes">Likes: ${totalLikes}</p>
    </div>
  </div>
</section>`;

const ownerButtons = (item, isOwner, onDelete) => {
  if (isOwner) {
    return html`
      <a @click=${onDelete} class="btn-delete" href="javascript:void(0)"
        >Delete</a
      >
      <a class="btn-edit" href="/edit/${item._id}">Edit</a>
    `;
  } else {
    null;
  }
};

const likeButton = (showLikeButton, onLike) => {
  if (showLikeButton) {
    return html`<a @click=${onLike} class="btn-like" href="javascript:void(0)"
      >Like</a
    >`;
  } else {
    null;
  }
};

export async function detailsPage(ctx) {
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  const [item, totalLikes, hasLike] = await Promise.all([
    await getById(ctx.params.id),
    await getTotalLikes(ctx.params.id),
    userData ? await hasLiked(ctx.params.id, userData.id) : 0,
  ]);

  const isOwner = userData && item._ownerId == userData.id;
  const showLikeButton = userData != null && isOwner == false && hasLike == 0;
  ctx.render(
    detailsTemplate(item, isOwner, onDelete, showLikeButton, totalLikes, onLike)
  );

  async function onDelete() {
    await deleteById(ctx.params.id);
    ctx.page.redirect("/");
  }

  async function onLike() {
    await postLike(ctx.params.id);
    ctx.page.redirect(`/details/${ctx.params.id}`);
  }
}
