const initialState = [];

const fundraiserReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SAVE_FUNDRAISER_LIST':
            return state = action.payload;
        default:
            return state;
    }
}

export default fundraiserReducer;