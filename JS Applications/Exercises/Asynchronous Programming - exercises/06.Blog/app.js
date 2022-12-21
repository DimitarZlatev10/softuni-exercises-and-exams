function attachEvents() {
  let loadBtn = document.getElementById("btnLoadPosts");
  let viewButton = document.getElementById("btnViewPost");

  loadBtn.addEventListener("click", getAllPosts);
  viewButton.addEventListener("click", displayPosts);
}

attachEvents();

async function displayPosts() {
  let selectedElement = document.getElementById("posts").value;
  document.getElementById("post-title").textContent = post.title;
  document.getElementById("post-body").textContent = post.body;

  const post = await getPostById(selectedElement);
  const comments = await getCommentByPostId(selectedElement);

  const ulElement = document.getElementById("post-comments");
  ulElement.replaceChildren();

  comments.forEach((c) => {
    let liElement = document.createElement("li");
    liElement.textContent = c.text;
    ulElement.appendChild(liElement);
  });
}

async function getAllPosts() {
  const url = `http://localhost:3030/jsonstore/blog/posts`;
  const res = await fetch(url);
  const data = await res.json();

  let posts = document.getElementById("posts");
  Object.values(data).forEach((p) => {
    let optionElement = document.createElement("option");
    optionElement.textContent = p.title;
    optionElement.value = p.id;

    posts.appendChild(optionElement);
  });
}

async function getCommentByPostId(postId) {
  const url = `http://localhost:3030/jsonstore/blog/comments`;

  const res = await fetch(url);
  const data = await res.json();

  let comments = Object.values(data).filter((c) => c.postId == postId);

  return comments;
}

async function getPostById(postId) {
  const url = `http://localhost:3030/jsonstore/blog/posts/` + postId;
  const res = await fetch(url);
  const data = await res.json();

  return data;
}
