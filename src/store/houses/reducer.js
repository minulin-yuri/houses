import { REQUEST_STATUS } from "../../utils/constants";
import { GET_HOUSES_FAILURE, GET_HOUSES_PENDING, GET_HOUSES_SUCCESS } from "./actions";


const initialState = {
    list: [],
    request: {
        error: null,
        status: REQUEST_STATUS.IDLE,
    },
};

export const housesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_HOUSES_PENDING: {
            return {
                ...state,
                request: {
                    error: null,
                    status: REQUEST_STATUS.PENDING,
                },
            };
        }
        case GET_HOUSES_SUCCESS: {
            return {
                ...state,
                request: {
                    ...state.request,
                    status: REQUEST_STATUS.SUCCESS,
                },
                list: payload,
            };
        }
        case GET_HOUSES_FAILURE: {
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