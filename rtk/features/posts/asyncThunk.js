const { createAsyncThunk } = require("@reduxjs/toolkit");
const fetch = require("node-fetch");

// create async thunk
const fetchPosts = createAsyncThunk('posts/postsRequested', async () => {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );
    const posts = await response.json();

    return posts;
});


module.exports = fetchPosts;