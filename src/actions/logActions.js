import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  UPDATE_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  SEARCH_LOGS,
} from './types';
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
      payload: err.response,
    });
  }
};

export const addLog = (log) => async (dispatch) => {
  try {
    setLoading();
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.post('/logs', log, config);
    dispatch({
      type: ADD_LOG,
      payload: res.data,
    });
  } catch (err) {
    console.error(err.message);
    dispatch({
      types: LOGS_ERROR,
      payload: err.response,
    });
  }
};

export const updateLog = (log) => async (dispatch) => {
  try {
    setLoading();
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.put(`/logs/${log.id}`, log, config);
    dispatch({
      type: UPDATE_LOG,
      payload: res.data,
    });
  } catch (err) {
    console.error(err.message);
    dispatch({
      types: LOGS_ERROR,
      payload: err.response,
    });
  }
};

export const setCurrent = (log) => (dispatch) => {
  dispatch({
    type: SET_CURRENT,
    payload: log,
  });
};

export const clearCurrent = () => (dispatch) => {
  dispatch({
    type: CLEAR_CURRENT,
  });
};

export const deleteLog = (id) => async (dispatch) => {
  try {
    setLoading();
    await axios.delete(`/logs/${id}`);
    dispatch({
      type: DELETE_LOG,
      payload: id,
    });
  } catch (err) {
    console.error(err.message);
    dispatch({
      type: LOGS_ERROR,
      payload: err.response,
    });
  }
};

export const searchLogs = (txt) => async (dispatch) => {
  try {
    setLoading();
    const res = await axios.get(`/logs?q=${txt}`);
    dispatch({
      type: SEARCH_LOGS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err.message);
    dispatch({
      type: LOGS_ERROR,
      payload: err.response,
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
