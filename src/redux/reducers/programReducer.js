const initialState = [];

const programReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SAVE_PROGRAM_LIST':
            return state = action.payload;
        default:
            return state;
    }
}

export default programReducer;