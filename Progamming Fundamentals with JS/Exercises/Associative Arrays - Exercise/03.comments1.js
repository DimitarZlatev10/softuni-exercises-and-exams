function solve(input) {
  let articles = [];
  let users = [];
  let holder = {};
  for (let i = 0; i < input.length; i++) {
    if (input[i].includes("user")) {
      input[i] = input[i].split(" ");
      let user = input[i][1];
      users.push(user);
      delete input[i];
    } else if (input[i].includes("article")) {
      input[i] = input[i].split(" ");
      let article = input[i][1];
      articles.push(article);
      delete input[i];
    }
  }
  for (let line of input) {
    if (line !== undefined) {
      let tokens = line.split(": ");
      let user = tokens[0].split(" ")[0];
      let article = tokens[0].split(" ")[3];
      let commentContent = tokens[1].split(", ").join(" - ");
      if (users.includes(user) && articles.includes(article)) {
        let contentComment = "--- From user " + user + ": " + commentContent;
        if (!holder.hasOwnProperty(article)) {
          holder[article] = [];
        }
        holder[article].push(contentComment);
      }
    }
  }
  let output = Object.entries(holder);
  output = output.sort((a, b) => b[1].length - a[1].length);
  for (let line of output) {
    let tokens = line;
    let article = tokens[0];

    let comments = tokens[1].sort((a, b) =>
      a.substring(15).localeCompare(b.substring(15))
    );
    console.log(`Comments on ${article}`);
    comments = comments.sort((a, b) => a.localeCompare(b));
    for (let comment of comments) {
      console.log(comment);
    }
  }
}
solve([
  "user aUser123",
  "someUser posts on someArticle: NoTitle, stupidComment",
  "article Books",
  "article Movies",
  "article Shopping",
  "user someUser",
  "user uSeR4",
  "user lastUser",
  "uSeR4 posts on Books: I like books, I do really like them",
  "uSeR4 posts on Movies: I also like movies, I really do",
  "someUser posts on Shopping: title, I go shopping every day",
  "someUser posts on Movies: Like, I also like movies very much",
]);
