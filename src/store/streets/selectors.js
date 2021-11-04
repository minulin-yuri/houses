import { REQUEST_STATUS } from "../../utils/constants";

export const selectStreetsLoading = (state) =>
    state.streets.request.status === REQUEST_STATUS.PENDING;
export const selectStreets = (state) => state.streets.list;
export const selectStreetsError = (state) => state.streets.request.error;