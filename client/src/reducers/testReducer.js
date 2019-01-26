const initialState = {
    test: "testReducer"
};

export default function(state = initialState, action) {
    switch(action.type) {
        default:
            return state;
    }
}