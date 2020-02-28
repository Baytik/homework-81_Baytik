import axiosAPI from "../../axiosAPI";

export const FETCH_LINK_SUCCESS = 'FETCH_LINK_SUCCESS';
export const ERROR_MESSAGE = 'ERROR_MESSAGE';

export const fetchLinkSuccess = links => ({type: FETCH_LINK_SUCCESS, links});
export const errorMessage = (error) => ({type: ERROR_MESSAGE, error});

export const createLink = link => {
    return async (dispatch) => {
        try {
            const response =  await axiosAPI.post('/links', link);
            dispatch(fetchLinkSuccess(response.data));
        } catch (e) {
            dispatch(errorMessage(e))
        }
    }
};