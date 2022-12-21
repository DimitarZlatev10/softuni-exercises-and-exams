function extract(content) {
  let text = document.getElementById("content").textContent;
  let regEx = /\(([^)]+)\)/g;
  let holder = [];
  let isValid;
  while ((isValid = regEx.exec(text))) {
    holder.push(isValid[0]);
  }
  console.log(holder.join('; '));
//   return holder.join("; ");
  
}
