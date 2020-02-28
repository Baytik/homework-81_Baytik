import {fetchLinkSuccess} from "../actions/actions";

const initialState = {
    links: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case fetchLinkSuccess:
            console.log(action.links);
            return {...state, links: action.links};
        default:
            return state;
    }
};

export default reducer;