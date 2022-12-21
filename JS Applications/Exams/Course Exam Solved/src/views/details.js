import {
  applyCount,
  deleteById,
  getById,
  ifUserApplied,
  postApply,
} from "../api/data.js";
import { html } from "../libs.js";

const detailsTemplate = (
  item,
  isOwner,
  onDelete,
  applyButton,
  count,
  onApply
) => html` <section id="details">
  <div id="details-wrapper">
    <img id="details-img" src=${item.imageUrl} alt="example1" />
    <p id="details-title">${item.title}</p>
    <p id="details-category">
      Category: <span id="categories">${item.category}</span>
    </p>
    <p id="details-salary">
      Salary: <span id="salary-number">${item.salary}</span>
    </p>
    <div id="info-wrapper">
      <div id="details-description">
        <h4>Description</h4>
        <span>${item.description}</span>
      </div>
      <div id="details-requirements">
        <h4>Requirements</h4>
        <span>${item.requirements}</span>
      </div>
    </div>
    <p>Applications: <strong id="applications">${count}</strong></p>

    <!--Edit and Delete are only for creator-->
    <div id="action-buttons">
      ${isOwner
        ? html`<a href="/edit/${item._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn"
              >Delete</a
            >`
        : null}
      ${applyButton
        ? html`<a @click=${onApply} href="javascript:void(0)" id="apply-btn"
            >Apply</a
          >`
        : null}

      <!--Bonus - Only for logged-in users ( not authors )-->
      <!-- <a href="" id="apply-btn">Apply</a> -->
    </div>
  </div>
</section>`;

export async function detailsPage(ctx) {
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  const [item, count, userCount] = await Promise.all([
    getById(ctx.params.id),
    applyCount(ctx.params.id),
    userData != null ? ifUserApplied(ctx.params.id, userData.id) : 0,
  ]);

  const isOwner = userData && item._ownerId == userData.id;
  const applyButton = userData != null && isOwner == false && userCount == 0;
  ctx.render(
    detailsTemplate(item, isOwner, onDelete, applyButton, count, onApply)
  );

  async function onDelete() {
    await deleteById(ctx.params.id);
    ctx.page.redirect("/dashboard");
  }

  async function onApply() {
    await postApply(ctx.params.id);
    ctx.page.redirect(`/details/${ctx.params.id}`);
  }
}
