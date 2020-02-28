import axiosAPI from "../../axiosAPI";

export const FETCH_LINK_SUCCESS = 'FETCH_LINK_SUCCESS';
export const ERROR_MESSAGE = 'ERROR_MESSAGE';

export const fetchLinkSuccess = link => ({type: FETCH_LINK_SUCCESS, link});
export const errorMessage = (error) => ({type: ERROR_MESSAGE, error});

export const fetchLink = () => {
    return async (dispatch) => {
        try {
            const response = await axiosAPI.get('/links');
            dispatch(fetchLinkSuccess(response.data));
        } catch (e) {
            dispatch(errorMessage(e))
        }
    }
};

export const createLink = link => {
    return async (dispatch) => {
        try {
            await axiosAPI.post('/links', link);
            dispatch(fetchLink());
        } catch (e) {
            dispatch(errorMessage(e))
        }
    }
};