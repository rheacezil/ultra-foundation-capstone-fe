const initialState = [];

const donationReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SAVE_DONATION_LIST':
            return state = action.payload;
        default:
            return state;
    }
}

export default donationReducer;