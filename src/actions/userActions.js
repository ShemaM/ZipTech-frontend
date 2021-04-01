/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_FORGOT_PASSWORD_REQUEST,
  USER_FORGOT_PASSWORD_SUCCESS,
  USER_FORGOT_PASSWORD_FAIL,
  USER_RESET_PASSWORD_REQUEST,
  USER_RESET_PASSWORD_SUCCESS,
  USER_RESET_PASSWORD_FAIL,
} from '../constants/userConstants';

const url = 'https://ziptech-api.herokuapp.com/user';

export const userSignin = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_SIGNIN_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'Application/json',
      },
    };

    const { data } = await axios.post(
      `${url}/signin`,
      { email, password },
      config,
    );

    dispatch({
      type: USER_SIGNIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem('userData', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({
      type: USER_FORGOT_PASSWORD_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'Application/json',
      },
    };

    const { data } = await axios.post(`${url}/forgot`, { email }, config);

    dispatch({
      type: USER_FORGOT_PASSWORD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_FORGOT_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const resetPassword = (newPassword, rePassword, token) => async (
  dispatch,
) => {
  try {
    dispatch({
      type: USER_RESET_PASSWORD_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'Application/json',
      },
    };

    const { data } = await axios.patch(
      `${url}/reset/${token}`,
      { newPassword, rePassword },
      config,
    );

    dispatch({
      type: USER_RESET_PASSWORD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_RESET_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};
