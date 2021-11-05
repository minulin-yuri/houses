export const GET_FLATS_PENDING = "FLATS::GET_PENDING";
export const GET_FLATS_SUCCESS = "FLATS::GET_SUCCESS";
export const GET_FLATS_FAILURE = "FLATS::GET_FAILURE";

const getFlatsPending = () => ({
    type: GET_FLATS_PENDING,
});

const getFlatsSuccess = (flats) => ({
    type: GET_FLATS_SUCCESS,
    payload: flats,
});

const getFlatsFailure = (error) => ({
    type: GET_FLATS_FAILURE,
    payload: error,
});

export const getFlats = (url) => async (dispatch) => {
    dispatch(getFlatsPending());

    try {
        const response = await fetch(url, {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error(`error ${response.status}`);
        }

        const result = await response.json();
        dispatch(getFlatsSuccess(result));
    } catch (e) {
        console.log(e);
        dispatch(getFlatsFailure(e.message));
    }
};
