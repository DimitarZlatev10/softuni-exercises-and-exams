import {
  deleteItem,
  donate,
  donateCount,
  getById,
  getDonationByUser,
} from "../api/data.js";
import { html } from "../libs.js";

const detailsTemplate = (
  item,
  isOwner,
  onDelete,
  showDonateButton,
  donations,
  onDonation
) => html` <section id="details-page">
  <h1 class="title">Post Details</h1>

  <div id="container">
    <div id="details">
      <div class="image-wrapper">
        <img src=${item.imageUrl} alt="Material Image" class="post-image" />
      </div>
      <div class="info">
        <h2 class="title post-title">${item.title}</h2>
        <p class="post-description">Description: ${item.description}</p>
        <p class="post-address">Address: ${item.address}</p>
        <p class="post-number">Phone number: ${item.phone}</p>
        <p class="donate-Item">Donate Materials: ${donations}</p>

        <!--Edit and Delete are only for creator-->

        <div class="btns">
          ${editButtons(item, isOwner, onDelete)}
          ${donateButton(showDonateButton, onDonation)}
        </div>
      </div>
    </div>
  </div>
</section>`;

const editButtons = (item, isOwner, onDelete) => {
  if (isOwner) {
    return html`<a href=${`/edit/${item._id}`} class="edit-btn btn">Edit</a>
      <a @click=${onDelete} href="javascript:void(0)" class="delete-btn btn"
        >Delete</a
      >`;
  } else {
    null;
  }
};

const donateButton = (showDonateButton, onDonation) => {
  if (showDonateButton) {
    return html`<a
      @click=${onDonation}
      href="javascript:void(0)"
      class="donate-btn btn"
      >Donate</a
    >`;
  } else {
    null;
  }
};

export async function detailsPage(ctx) {
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  let [item, donations, hasDonated] = await Promise.all([
    getById(ctx.params.id),
    donateCount(ctx.params.id),
    userData ? getDonationByUser(ctx.params.id, userData.id) : 0,
  ]);
  const isOwner = userData && userData.id == item._ownerId;
  const showDonateButton =
    userData != null && isOwner == false && hasDonated == 0;
  ctx.render(
    detailsTemplate(
      item,
      isOwner,
      onDelete,
      showDonateButton,
      donations,
      onDonation
    )
  );

  async function onDelete() {
    const choice = confirm("Are you sure you want to delete this item?");
    if (choice) {
      await deleteItem(ctx.params.id);
      ctx.page.redirect("/");
    }
  }

  async function onDonation() {
    await donate(ctx.params.id);
    ctx.page.redirect(`/details/${ctx.params.id}`);
  }
}

//  <!-- Bonus - Only for logged-in users ( not authors )
//           <a href="#" class="donate-btn btn">Donate</a> -->
