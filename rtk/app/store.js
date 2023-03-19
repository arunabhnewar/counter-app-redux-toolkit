const configureStore = require("@reduxjs/toolkit").configureStore;
const { createLogger } = require("redux-logger");
const counterReducer = require('../features/counter/counterSlice');
const dynamicCounterReducer = require('../features/dynamicCounter/dynamicCounterSlice');
const postReducer = require('../features/posts/postSlice');

// Create Logger
const logger = createLogger();

// Store configuration
const store = configureStore({
    reducer: {
        counter: counterReducer,
        dynamicCounter: dynamicCounterReducer,
        post: postReducer,
    },
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(logger),
});

module.exports = store;