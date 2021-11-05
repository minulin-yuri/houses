export const GET_STREETS_PENDING = "STREETS::GET_PENDING";
export const GET_STREETS_SUCCESS = "STREETS::GET_SUCCESS";
export const GET_STREETS_FAILURE = "STREETS::GET_FAILURE";

const getStreetsPending = () => ({
    type: GET_STREETS_PENDING,
});

const getStreetsSuccess = (streets) => ({
    type: GET_STREETS_SUCCESS,
    payload: streets,
});

const getStreetsFailure = (error) => ({
    type: GET_STREETS_FAILURE,
    payload: error,
});

export const getStreets = (url) => async (dispatch) => {
    dispatch(getStreetsPending());

    try {
        const response = await fetch(url, {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error(`error ${response.status}`);
        }

        const result = await response.json();
        dispatch(getStreetsSuccess(result));
    } catch (e) {
        console.log(e);
        dispatch(getStreetsFailure(e.message));
    }
};
