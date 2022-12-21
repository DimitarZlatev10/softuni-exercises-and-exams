import {
  deleteById,
  donate,
  getById,
  getDonationByUser,
  totalDonations,
} from "../api/data.js";
import { html } from "../libs.js";

const detailsTemplate = (
  pet,
  onDelete,
  isOwner,
  showDonateButton,
  totalDonation,
  onDonate
) => html` <section id="detailsPage">
  <div class="details">
    <div class="animalPic">
      <img src=${pet.image} />
    </div>
    <div>
      <div class="animalInfo">
        <h1>Name: ${pet.name}</h1>
        <h3>Breed: ${pet.breed}</h3>
        <h4>Age: ${pet.age}</h4>
        <h4>Weight: ${pet.weight}</h4>
        <h4 class="donation">Donation: ${totalDonation}$</h4>
      </div>
      <!-- if there is no registered user, do not display div-->
      <div class="actionBtn">
        <!-- Only for registered user and creator of the pets-->
        ${ownerTemplate(pet, onDelete, isOwner)}
        ${donationTemplate(showDonateButton, onDonate)}
        <!--(Bonus Part) Only for no creator and user-->
      </div>
    </div>
  </div>
</section>`;

const ownerTemplate = (pet, onDelete, isOwner) => {
  if (isOwner) {
    return html`<a href=${`/edit/${pet._id}`} class="edit">Edit</a>
      <a @click=${onDelete} href="javascript:void(0)" class="remove"
        >Delete</a
      >`;
  } else {
    null;
  }
};

const donationTemplate = (showDonateButton, onDonate) => {
  if (showDonateButton) {
    return html`<a @click=${onDonate} href="javascript:void(0)" class="donate"
      >Donate</a
    >`;
  } else {
    null;
  }
};

export async function detailsPage(ctx) {
  const userData = JSON.parse(sessionStorage.getItem("userData"));

  let [pet, totalDonation, donationByUser] = await Promise.all([
    await getById(ctx.params.id),
    await totalDonations(ctx.params.id),
    userData != null ? await getDonationByUser(ctx.params.id, userData.id) : 0,
  ]);
  totalDonation *= 100;
  const isOwner = userData && pet._ownerId == userData.id;
  const showDonateButton =
    userData != null && isOwner == false && donationByUser == 0;
  ctx.render(
    detailsTemplate(
      pet,
      onDelete,
      isOwner,
      showDonateButton,
      totalDonation,
      onDonate
    )
  );

  async function onDelete() {
    await deleteById(ctx.params.id);
    ctx.page.redirect("/");
  }

  async function onDonate() {
    await donate(ctx.params.id);
    ctx.page.redirect(`/details/${ctx.params.id}`);
  }
}
