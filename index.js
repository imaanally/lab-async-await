// Write your code here!

const postList = document.getElementById("post-list");

function displayPosts(posts) {
    posts.forEach(function (post) {
        const postItem = document.createElement("li");
        const postTitle = document.createElement("h1");
        const postBody = document.createElement("p");

        postTitle.textContent = post.title;
        postBody.textContent = post.body;

        postItem.appendChild(postTitle);
        postItem.appendChild(postBody);

        postList.appendChild(postItem);
    });

    async function getPosts() {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",);
        const posts = await response.json();

        displayPosts(posts);
    }
}

getPosts();