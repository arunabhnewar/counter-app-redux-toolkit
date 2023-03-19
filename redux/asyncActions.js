const fetch = require("node-fetch");
const { createStore, applyMiddleware } = require("redux");
const thunkMiddleware = require("redux-thunk");


// initial state
const initialState = {
    loading: false,
    posts: [],
    error: "",
};


// Actions function
const fetchPostsRequested = () => {
    return {
        type: 'posts/requested',
    }
};


const fetchPostsSucceeded = (posts) => {
    return {
        type: 'posts/succeeded',
        payload: posts,
    }
};


const fetchPostsFailed = (error) => {
    return {
        type: 'posts/failed',
        payload: error,
    }
};


// Reducer function
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "posts/requested":
            return {
                ...state,
                loading: true,
                error: '',
            };

        case "posts/succeeded":
            return {
                ...state,
                loading: false,
                error: '',
                posts: action.payload,
            };

        case "posts/failed":
            return {
                ...state,
                loading: false,
                error: action.payload.message,
                posts: [],
            };


        default:
            return state;
    }
};


// thunk function
const fetchPosts = () => {
    return async (dispatch) => {
        dispatch(fetchPostsRequested());

        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts?_limit=10"
            );
            const posts = await response.json();
            dispatch(fetchPostsSucceeded(posts));
        } catch (err) {
            dispatch(fetchPostsFailed(err));
        }
    };
};


// create store
const store = createStore(reducer, applyMiddleware(thunkMiddleware.default));


// subscribe to state changes
store.subscribe(() => {
    console.log(store.getState());
});

// dispatch action
store.dispatch(fetchPosts());