import axios from 'axios';

const USER = 'EzequielRomio';
const REPO = 'take_home_test';
const HEADERS = {accept: 'application/vnd.github.v3+json'}

export const getCommits = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `https://api.github.com/repos/${USER}/${REPO}/commits`, 
        {responseType: 'json'},
        HEADERS,
      );
      const commits = res.data;
      dispatch({type: 'GET_COMMITS', payload: commits})  
    }
    catch (err) {
      const status = err?.response?.status || 500;
      const message = err?.response?.data?.message || 'Server Not Working';
      dispatch({type: 'SET_ERROR', payload: {status, message}})
    }
  }
}

export const getCommitDetail = (commitSha) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `https://api.github.com/repos/${USER}/${REPO}/commits/${commitSha}`, 
        {responseType: 'json'},
        HEADERS,
      );
      const commit = res.data
      dispatch({type: 'GET_COMMIT_DETAIL', payload: commit})  
    }
    catch (err) {
      const status = err?.response?.status || 404;
      const message = err?.response?.data?.message || 'Page Not Found';
      dispatch({type: 'SET_ERROR', payload: {status, message}})
    }
  }
}

export const sortCommits = (order) => {
  return {type: 'SORT_COMMITS', payload: order}
}

export const resetError = () => {
  return {type: 'RESET_ERROR'}
}