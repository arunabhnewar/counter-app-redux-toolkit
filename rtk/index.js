const store = require("./app/store");
const { counterActions } = require('./features/counter/counterSlice');


// Initial state
console.log(`Initial State: ${JSON.stringify(store.getState())}`);

// subscribe to state changes
store.subscribe(() => {
    console.log(store.getState());
});

const { increment, decrement } = counterActions;

// disptach actions
store.dispatch(increment());

store.dispatch(increment());

store.dispatch(decrement());
