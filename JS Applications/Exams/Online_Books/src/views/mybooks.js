import { getMyBooks } from "../api/data.js";
import { html } from "../libs.js";

const myBooksTemplate = (books) => html` <section
  id="my-books-page"
  class="my-books"
>
  <h1>My Books</h1>
  <!-- Display ul: with list-items for every user's books (if any) -->
  <ul class="my-books-list">
    ${books.length == 0
      ? html`<p class="no-books">No books in database!</p>`
      : books.map(itemTemplate)}
  </ul>
  <!-- Display paragraph: If the user doesn't have his own books  -->
</section>`;

const itemTemplate = (book) => html` <li class="otherBooks">
  <h3>${book.title}</h3>
  <p>Type: ${book.type}</p>
  <p class="img"><img src=${book.imageUrl} /></p>
  <a class="button" href=${`/details/${book._id}`}>Details</a>
</li>`;

export async function myBooksPage(ctx) {
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  const myBooks = await getMyBooks(userData.id);

  ctx.render(myBooksTemplate(myBooks));
}
