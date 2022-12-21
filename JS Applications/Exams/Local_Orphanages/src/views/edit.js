import { editItem, getById } from "../api/data.js";
import { html } from "../libs.js";

const editTemplate = (item, onSubmit) => html` <section
  id="edit-page"
  class="auth"
>
  <form @submit=${onSubmit} id="edit">
    <h1 class="title">Edit Post</h1>

    <article class="input-group">
      <label for="title">Post Title</label>
      <input type="title" name="title" id="title" value=${item.title} />
    </article>

    <article class="input-group">
      <label for="description">Description of the needs </label>
      <input
        type="text"
        name="description"
        id="description"
        value=${item.description}
      />
    </article>

    <article class="input-group">
      <label for="imageUrl"> Needed materials image </label>
      <input type="text" name="imageUrl" id="imageUrl" value=${item.imageUrl} />
    </article>

    <article class="input-group">
      <label for="address">Address of the orphanage</label>
      <input type="text" name="address" id="address" value=${item.address} />
    </article>

    <article class="input-group">
      <label for="phone">Phone number of orphanage employee</label>
      <input type="text" name="phone" id="phone" value=${item.phone} />
    </article>

    <input type="submit" class="btn submit" value="Edit Post" />
  </form>
</section>`;

export async function editPage(ctx) {
  const item = await getById(ctx.params.id);

  ctx.render(editTemplate(item, onSubmit));

  async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const title = formData.get("title").trim();
    const description = formData.get("description").trim();
    const imageUrl = formData.get("imageUrl").trim();
    const address = formData.get("address").trim();
    const phone = formData.get("phone").trim();

    if (
      title == "" ||
      description == "" ||
      imageUrl == "" ||
      address == "" ||
      phone == ""
    ) {
      return alert("All fields are required!");
    }

    await editItem(ctx.params.id, {
      title,
      description,
      imageUrl,
      address,
      phone,
    });
    ctx.page.redirect(`/details/${ctx.params.id}`);
  }
}
