import {
  deleteItem,
  getAllCommentsForGame,
  getById,
  postComment,
} from "../api/data.js";
import { html } from "../libs.js";

const detailsTemplate = (
  game,
  isOwner,
  onDelete,
  canComment,
  comments,
  onComment
) => html` <section id="game-details">
  <h1>Game Details</h1>
  <div class="info-section">
    <div class="game-header">
      <img class="game-img" src=${game.imageUrl} />
      <h1>${game.title}</h1>
      <span class="levels">MaxLevel: ${game.maxLevel}</span>
      <p class="type">${game.category}</p>
    </div>
    <p class="text">${game.summary}</p>

    ${buttonsTemplate(game, isOwner, onDelete)}

    <div class="details-comments">
      <h2>Comments:</h2>
      <ul>
        ${commentsTemplate(comments)}
      </ul>
    </div>
  </div>
  ${commentTemplate(canComment, onComment)}
</section>`;

const commentsTemplate = (comments) => {
  if (comments.length == 0) {
    return html`<p class="no-comment">No comments.</p>`;
  } else {
    return comments.map(
      (c) => html`<li class="comment">
        <p>${c.comment}</p>
      </li>`
    );
  }
};

const commentTemplate = (canComment, onComment) => {
  if (canComment) {
    return html`<article class="create-comment">
      <label>Add new comment:</label>
      <form @submit=${onComment} class="form">
        <textarea name="comment" placeholder="Comment......"></textarea>
        <input class="btn submit" type="submit" value="Add Comment" />
      </form>
    </article>`;
  }
};

const buttonsTemplate = (game, isOwner, onDelete) => {
  if (isOwner) {
    return html`<div class="buttons">
      <a href=${`/edit/${game._id}`} class="button">Edit</a>
      <a @click=${onDelete} href="javascript:void(0)" class="button">Delete</a>
    </div>`;
  } else {
    null;
  }
};

export async function detailsPage(ctx) {
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  const [game, comments] = await Promise.all([
    getById(ctx.params.id),
    getAllCommentsForGame(ctx.params.id),
  ]);

  const isOwner = userData && game._ownerId == userData.id;
  const canComment = userData != null && isOwner == false;
  ctx.render(
    detailsTemplate(game, isOwner, onDelete, canComment, comments, onComment)
  );

  async function onDelete() {
    await deleteItem(ctx.params.id);
    ctx.page.redirect("/");
  }

  async function onComment(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const comment = formData.get("comment").trim();

    if (comment == "") {
      return alert("Comment field is empty");
    }

    await postComment(ctx.params.id, comment);
    ctx.page.redirect(`/details/${ctx.params.id}`);
  }
}

// <!-- Bonus ( for Guests and Users ) -->
//     <div class="details-comments">
//       <h2>Comments:</h2>
//       <ul>
//         <!-- list all comments for current game (If any) -->
//         <li class="comment">
//           <p>Content: I rate this one quite highly.</p>
//         </li>
//         <li class="comment">
//           <p>Content: The best game.</p>
//         </li>
//       </ul>
//       <!-- Display paragraph: If there are no games in the database -->
//       <p class="no-comment">No comments.</p>
//     </div>
