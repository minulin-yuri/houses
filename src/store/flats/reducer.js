import { REQUEST_STATUS } from "../../utils/constants";
import { GET_FLATS_FAILURE, GET_FLATS_PENDING, GET_FLATS_SUCCESS } from "./actions";


const initialState = {
    list: [],
    request: {
        error: null,
        status: REQUEST_STATUS.IDLE,
    },
};

export const flatsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_FLATS_PENDING: {
            return {
                ...state,
                request: {
                    error: null,
                    status: REQUEST_STATUS.PENDING,
                },
            };
        }
        case GET_FLATS_SUCCESS: {
            return {
                ...state,
                request: {
                    ...state.request,
                    status: REQUEST_STATUS.SUCCESS,
                },
                list: payload,
            };
        }
        case GET_FLATS_FAILURE: {
            return {
                ...state,
                request: {
                    error: payload,
                    status: REQUEST_STATUS.FAILURE,
                },
            };
        }
        default:
            return state;
    }
};