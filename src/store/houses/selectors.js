import { REQUEST_STATUS } from "../../utils/constants";

export const selectHousesLoading = (state) =>
    state.houses.request.status === REQUEST_STATUS.PENDING;
export const selectHouses = (state) => state.houses.list;
export const selectHousesError = (state) => state.houses.request.error;
export const selectCurrentHouse = (id) => (state) =>
    state.houses.list.find((item) => id === item.id);