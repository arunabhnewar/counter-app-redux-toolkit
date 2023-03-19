const store = require("./app/store");
const { counterActions } = require('./features/counter/counterSlice');
const { dynamicCounterActions } = require('./features/dynamicCounter/dynamicCounterSlice');


// Initial state
// console.log(`Initial State: ${JSON.stringify(store.getState())}`);

// subscribe to state changes
store.subscribe(() => {
    // console.log(store.getState());
});

const { incrementCounter, decrementCounter } = counterActions;
const { increment, decrement } = dynamicCounterActions;

// disptach actions
store.dispatch(incrementCounter());

// store.dispatch(incrementCounter());

// store.dispatch(decrementCounter());

// store.dispatch(increment(5));

// store.dispatch(increment(10));

// store.dispatch(decrement(15));
