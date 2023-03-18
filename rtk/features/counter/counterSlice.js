const createSlice = require('@reduxjs/toolkit').createSlice;

// Initial State
const initialState = {
    count: 0,
};


const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incrementCounter: (state, action) => {
            state.count++;
        },
        decrementCounter: (state, action) => {
            state.count--;
        },
    },
});

module.exports = counterSlice.reducer;
module.exports.counterActions = counterSlice.actions;