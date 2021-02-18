import {SEARCH_REPOSITORIES, GET_REPOS_DETAIL, CLEAR_REPOSITORIES, SET_LOADING} from '../types';

const githubReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_REPOSITORIES:
      return {
        ...state,
        pageCount: action.pageCount,
        repositories: action.items,
        loading: false
      }
    case GET_REPOS_DETAIL:
      return {
        ...state,
        repos: action.repos,
        commits: action.commits,
        languages: action.languages,
        contributors: action.contributors,
        loading: false
      }
    case CLEAR_REPOSITORIES:
      return {
        ...state,
        pageCount: 0,
        repositories: []
      }
    case SET_LOADING:
      return {...state, loading: true}
    default:
      return state;
  }
}

export default githubReducer;