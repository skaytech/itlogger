import { GET_LOGS, SET_LOADING, LOGS_ERROR } from './types';
import axios from 'axios';

export const getLogs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await axios.get('/logs');
    dispatch({
      type: GET_LOGS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err.message);
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
