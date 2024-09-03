import { GET_PRODUCT_BY_ID } from "../types";

export const getProductById = (payload) => ({
    type: GET_PRODUCT_BY_ID,
    payload
});