/* eslint-disable import/prefer-default-export */
import {
  LIST_PRODUCT_FAIL,
  LIST_PRODUCT_SUCCESS,
  LIST_PRODUCT_REQUEST,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
} from '../constants/productConstants';

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case LIST_PRODUCT_REQUEST:
      return { ...state, loading: true, products: [] };
    case LIST_PRODUCT_SUCCESS:
      return { ...state, loading: false, products: action.payload };
    case LIST_PRODUCT_FAIL:
      return { ...state, loading: false, error: action.payload };
    case DELETE_PRODUCT_REQUEST:
      return { ...state, loading: true };
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        products: state.products.filter((p) => p.id !== action.payload),
      };
    case DELETE_PRODUCT_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
