/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';

import {
  LIST_PRODUCT_FAIL,
  LIST_PRODUCT_SUCCESS,
  LIST_PRODUCT_REQUEST,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
} from '../constants/productConstants';

const url = 'http://localhost:4000/product/';

export const listProduct = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: LIST_PRODUCT_REQUEST,
    });

    const {
      userLogin: { userData },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userData}`,
      },
    };

    const { data } = await axios.get(`${url}/findall`, config);

    dispatch({
      type: LIST_PRODUCT_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: LIST_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const productDelete = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DELETE_PRODUCT_REQUEST,
    });

    const {
      userLogin: { userData },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userData}`,
      },
    };

    await axios.delete(`${url}/delete/${id}`, config);

    dispatch({
      type: DELETE_PRODUCT_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};
