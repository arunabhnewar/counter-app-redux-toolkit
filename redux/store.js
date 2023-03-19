const { createStore, combineReducers } = require("redux");
const counterReducer = require("./counter/reducer");
const dynamicCounterReducer = require("./dynamicCounter/dynamicCounterReducer");

const rootReducer = combineReducers({
    counter: counterReducer,
    dynamicReducer: dynamicCounterReducer,
});

const store = createStore(rootReducer);

module.exports = store;
