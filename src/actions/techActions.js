import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  TECHS_ERROR,
  SET_LOADING,
} from './types';
import axios from 'axios';

export const getTechs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await axios.get('/techs');
    dispatch({ type: GET_TECHS, payload: res.data });
  } catch (err) {
    console.error(err.message);
    dispatch({
      type: TECHS_ERROR,
      payload: err.response,
    });
  }
};

export const addTech = (tech) => async (dispatch) => {
  try {
    setLoading();
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.post('/techs', tech, config);
    dispatch({
      type: ADD_TECH,
      payload: res.data,
    });
  } catch (err) {
    console.error(err.message);
    dispatch({
      type: TECHS_ERROR,
      payload: err.response,
    });
  }
};

export const deleteTech = (id) => async (dispatch) => {
  try {
    setLoading();
    await axios.delete(`/techs/${id}`);
    dispatch({
      type: DELETE_TECH,
      payload: id,
    });
  } catch (err) {
    console.error(err.message);
    dispatch({
      type: TECHS_ERROR,
      payload: err.response,
    });
  }
};

export const setLoading = () => (dispatch) => {
  dispatch({
    type: SET_LOADING,
  });
};
