const { createSlice } = require("@reduxjs/toolkit");
const { counterActions } = require("../counter/counterSlice");

// initial state
const initialState = {
    count: 5,
};

const dynamicCounterSlice = createSlice({
    name: "dynamicCounter",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count += action.payload;
        },
        decrement: (state, action) => {
            state.count -= action.payload;
        },
    },
    // extraReducers: {
    //     ['counter/incrementCounter']: (state, action) => {
    //         state.count += 1;
    //     },
    // }
    extraReducers: (builder) => {
        builder.addCase(counterActions.incrementCounter, (state, action) => {
            state.count += 1;
        })
    }
});

module.exports = dynamicCounterSlice.reducer;
module.exports.dynamicCounterActions = dynamicCounterSlice.actions;