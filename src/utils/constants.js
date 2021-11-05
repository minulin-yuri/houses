export const BASE_URL = "https://dispex.org/api/vtest";
export const STREET_URL = `${BASE_URL}/Request/streets`;
export const HOUSES_URL = `${BASE_URL}/Request/houses/`;
export const FLATS_URL = `${BASE_URL}/Request/house_flats/`;
export const RESIDENTS_URL = `${BASE_URL}/HousingStock/clients`;

//объявляем статус запроса
export const REQUEST_STATUS = {
    IDLE: 0,
    PENDING: 1,
    SUCCESS: 2,
    FAILURE: 3,
};