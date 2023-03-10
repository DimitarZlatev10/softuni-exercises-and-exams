import { getAll } from "../api/data.js";
import { html } from "../libs.js";

const dashboardTemplate = (items) => html`
  <section id="dashboard-page">
    <h1 class="title">All Posts</h1>
    <div class="all-posts">
    ${
      items.length == 0
        ? html`<h1 class="title no-posts-title">No posts yet!</h1>`
        : items.map(itemTemplate)
    }
    </div>
  </section>
</section>`;

const itemTemplate = (item) => html` <div class="post">
  <h2 class="post-title">${item.title}</h2>
  <img class="post-image" src=${item.imageUrl} alt="Material Image" />
  <div class="btn-wrapper">
    <a href=${`/details/${item._id}`} class="details-btn btn">Details</a>
  </div>
</div>`;

export async function dashboardPage(ctx) {
  const items = await getAll();

  ctx.render(dashboardTemplate(items));
}
