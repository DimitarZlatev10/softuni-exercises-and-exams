import { getMyItems } from "../api/data.js";
import { html } from "../libs.js";

const myPostsTemplate = (items) => html` <section id="my-posts-page">
  <h1 class="title">My Posts</h1>

  <!-- Display a div with information about every post (if any)-->
  <div class="my-posts">
    ${items.length == 0
      ? html`<h1 class="title no-posts-title">You have no posts yet!</h1>`
      : items.map(itemTemplate)}
  </div>

  <!-- Display an h1 if there are no posts -->
</section>`;

const itemTemplate = (item) => html` <div class="post">
  <h2 class="post-title">${item.title}</h2>
  <img class="post-image" src=${item.imageUrl} alt="Material Image" />
  <div class="btn-wrapper">
    <a href=${`/details/${item._id}`} class="details-btn btn">Details</a>
  </div>
</div>`;

export async function myPostsPage(ctx) {
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  const items = await getMyItems(userData.id);

  ctx.render(myPostsTemplate(items));
}
