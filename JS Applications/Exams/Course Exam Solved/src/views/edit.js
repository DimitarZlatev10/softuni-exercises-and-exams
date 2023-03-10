import { editItem, getById } from "../api/data.js";
import { html } from "../libs.js";

const editTemplate = (item, onSubmit) => html` <section id="edit">
  <div class="form">
    <h2>Edit Offer</h2>
    <form @submit=${onSubmit} class="edit-form">
      <input
        type="text"
        name="title"
        id="job-title"
        placeholder="Title"
        value=${item.title}
      />
      <input
        type="text"
        name="imageUrl"
        id="job-logo"
        placeholder="Company logo url"
        value=${item.imageUrl}
      />
      <input
        type="text"
        name="category"
        id="job-category"
        placeholder="Category"
        value=${item.category}
      />
      <textarea
        id="job-description"
        name="description"
        placeholder="Description"
        rows="4"
        cols="50"
      >
${item.description}</textarea
      >
      <textarea
        id="job-requirements"
        name="requirements"
        placeholder="Requirements"
        rows="4"
        cols="50"
      >
${item.requirements}</textarea
      >
      <input
        type="text"
        name="salary"
        id="job-salary"
        placeholder="Salary"
        value=${item.salary}
      />

      <button type="submit">post</button>
    </form>
  </div>
</section>`;

export async function editPage(ctx) {
  const item = await getById(ctx.params.id);
  ctx.render(editTemplate(item, onSubmit));

  async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const title = formData.get("title").trim();
    const imageUrl = formData.get("imageUrl").trim();
    const category = formData.get("category").trim();
    const description = formData.get("description").trim();
    const requirements = formData.get("requirements").trim();
    const salary = formData.get("salary").trim();

    if (
      title == "" ||
      imageUrl == "" ||
      category == "" ||
      description == "" ||
      requirements == "" ||
      salary == ""
    ) {
      return alert("All fields are required!");
    }

    await editItem(ctx.params.id, {
      title,
      imageUrl,
      category,
      description,
      requirements,
      salary,
    });
    ctx.page.redirect(`/details/${ctx.params.id}`);
  }
}
