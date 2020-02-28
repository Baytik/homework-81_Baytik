import {fetchLinkSuccess} from "../actions/actions";

const initialState = {
    link: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case fetchLinkSuccess:
            return {...state, link: action.link};
        default:
            return state;
    }
};

export default reducer;