import { REQUEST_STATUS } from "../../utils/constants";

export const selectFlatsLoading = (state) =>
    state.flats.request.status === REQUEST_STATUS.PENDING;
export const selectFlats = (state) => state.flats.list;
export const selectFlatsError = (state) => state.flats.request.error;
export const selectCurrentFlat = (id) => (state) =>
    state.flats.list.find((item) => id === item.id);