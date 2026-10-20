/*import { getPost, createPost } from "./utils.js";
import { getPost, createPost } from "./ajax.js";*/
import { getPost, createPost } from "./localstorage.js";

const postCard = (post) => {
  const { userId, id, title, body } = post;
  return `
     <div class="post_card flex bg-green-300 rounded p-2">
            <div class="flex flex-col gap-2 space-y-2 p-2">
              <h2 class="font-bold">${title}</h2>
              <p class="">
                ${body}
              </p>
            </div>
            <div class="flex justify-center items-start">
              <span class="py-2 px-3 rounded-full bg-green-400">${id}</span>
            </div>
          </div>

  `;
};

const renderUi = (post) => {
  let postData = getPost();
  if (post) {
    postCotainer.innerHTML += postCard(post);
  } else {
    postData.forEach((post) => {
      postCotainer.innerHTML += postCard(post);
    });
  }
};

const postCotainer = document.getElementById("post_container");
const form = document.getElementById("post_form");

document.addEventListener("DOMContentLoaded", () => {
  renderUi();
  console.log("DOMContentLoaded");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let title = document.getElementById("title").value;
    let body = document.getElementById("body").value;

    if (!title || !body) {
      alert("Please fill in all fields");
      return;
    }

    if (title.length < 5) {
      alert("Title must be at least 5 characters long");
      return;
    }

    if (body.length < 10) {
      alert("Body must be at least 10 characters long");
      return;
    }

    // console.log({ title, body });

    const newPost = createPost({ title, body });
    console.log(newPost);
    renderUi(newPost);

    // after post submission, set the input fields back to empty string
    document.getElementById("title").value = "";
    document.getElementById("body").value = "";
  });
});
