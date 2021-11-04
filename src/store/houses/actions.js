export const GET_HOUSES_PENDING = "HOUSES::GET_PENDING";
export const GET_HOUSES_SUCCESS = "HOUSES::GET_SUCCESS";
export const GET_HOUSES_FAILURE = "HOUSES::GET_FAILURE";

const getHousesPending = () => ({
    type: GET_HOUSES_PENDING,
});

const getHousesSuccess = (houses) => ({
    type: GET_HOUSES_SUCCESS,
    payload: houses
});

const getHousesFailure = (error) => ({
    type: GET_HOUSES_FAILURE,
    payload: error,
});

export const getHouses = (url) => async (dispatch) => {
    dispatch(getHousesPending());

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`error ${response.status}`);
        }

        const result = await response.json();
        dispatch(getHousesSuccess(result));
    } catch (e) {
        console.log(e);
        dispatch(getHousesFailure(e.message));
    }
};
