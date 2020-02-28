import {FETCH_LINK_SUCCESS} from "../actions/actions";

const initialState = {
    links: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LINK_SUCCESS:
            return {...state, links: action.links};
        default:
            return state;
    }
};

export default reducer;