const { createStore } = require("redux");
const { produce } = require("immer");

// Declare Initial state
const initialState = {
    name: "Learn with Sumit",
    address: {
        street: "Gulshan",
        city: "Dhaka",
        country: "Bangladesh",
    },
};


// action creator
const updateStreet = (street) => {
    return {
        type: "street_updated",
        payload: street,
    };
};

// basic reducer
// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "street_updated":
//             return {
//                 ...state,
//                 address: {
//                     ...state.address,
//                     street: action.payload,
//                 },
//             };

//         default:
//             return state;
//     }
// };


// after immer use
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "street_updated":
            return produce(state, (draftState) => {
                draftState.address.street = action.payload;
            });

        default:
            return state;
    }
};

// Create store
const store = createStore(reducer);


// Store subscription
store.subscribe(() => {
    console.log(store.getState());
});


// dispatcher
store.dispatch(updateStreet("Banani"));