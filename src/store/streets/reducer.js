import { REQUEST_STATUS } from "../../utils/constants";
import { GET_STREETS_FAILURE, GET_STREETS_PENDING, GET_STREETS_SUCCESS } from "./actions";


const initialState = {
    list: [],
    request: {
        error: null,
        status: REQUEST_STATUS.IDLE,
    },
};

export const streetsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_STREETS_PENDING: {
            return {
                ...state,
                request: {
                    error: null,
                    status: REQUEST_STATUS.PENDING,
                },
            };
        }
        case GET_STREETS_SUCCESS: {
            return {
                ...state,
                request: {
                    ...state.request,
                    status: REQUEST_STATUS.SUCCESS,
                },
                list: payload,
            };
        }
        case GET_STREETS_FAILURE: {
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