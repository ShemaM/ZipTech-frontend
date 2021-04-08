/* eslint-disable import/prefer-default-export */
import axios from 'axios';

import {
  LIST_PRODUCT_FAIL,
  LIST_PRODUCT_SUCCESS,
  LIST_PRODUCT_REQUEST,
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
        Authorization: `${userData}`,
      },
    };

    const { data } = await axios.get(`${url}/findall`, config);

    dispatch({
      type: LIST_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LIST_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};
