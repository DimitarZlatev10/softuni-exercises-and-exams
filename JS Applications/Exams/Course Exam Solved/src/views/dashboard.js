import { getAll } from "../api/data.js";
import { html } from "../libs.js";

const dashboardTemplate = (items) => html` <section id="dashboard">
  <h2>Job Offers</h2>

  <!-- Display a div with information about every post (if any)-->
  ${items.length == 0
    ? html` <h2>No offers yet.</h2>`
    : items.map(itemTemplate)}
  <!-- Display an h2 if there are no posts -->
</section>`;

const itemTemplate = (item) => html` <div class="offer">
  <img src=${item.imageUrl} alt="example1" />
  <p><strong>Title: </strong><span class="title">${item.title}</span></p>
  <p><strong>Salary:</strong><span class="salary">${item.salary}</span></p>
  <a class="details-btn" href="/details/${item._id}">Details</a>
</div>`;

export async function dashboardPage(ctx) {
  const items = await getAll();
  ctx.render(dashboardTemplate(items));
}
