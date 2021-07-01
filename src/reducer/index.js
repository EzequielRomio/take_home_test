import {
  filterCommitsImportantData, 
  filterCommitImportantData,
  sortCommits
} from "./helpers.js";

const initialState = {
  commits: [],
  commitDetail: {},
  requestError: null,
};

const rootReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'GET_COMMITS':
      return {
        ...state,
        commits: filterCommitsImportantData(action.payload) 
      }
    
    case 'GET_COMMIT_DETAIL': 
      return {
        ...state, 
        commitDetail: filterCommitImportantData(action.payload)        
      };

    case 'SORT_COMMITS':
      return {
        ...state,
        commits: sortCommits([...state.commits], action.payload)
      };
    
    case 'SET_ERROR':
      return {
        ...state,
        requestError: action.payload
      };

    case 'RESET_ERROR':
      return {
        ...state,
        requestError: null
      };

    default:
      return state;
  }
}

export default rootReducer;