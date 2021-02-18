import React, {useReducer} from 'react';
import GithubContext from './GithubContext';
import githubReducer from './githubReducer';
import axios from 'axios';
import {CLEAR_REPOSITORIES, GET_REPOS_DETAIL, SEARCH_REPOSITORIES, SET_LOADING} from '../types';

const withCreds = {
  client_id: process.env.REACT_APP_CLIENT_ID,
  client_secret: process.env.REACT_APP_CLIENT_SECRET
}

const GithubState = ({children}) => {
  const initialState = {
    repos: {},
    commits: [],
    languages: {},
    contributors: [],
    repositories: [],
    loading: false,
    pageCount: 0,
  }
  const [state, dispatch] = useReducer(githubReducer, initialState);

  const search = async value => {
    setLoading();

    const page = localStorage.getItem('page') ?? 1;
    const perPage = 12;

    let params = {
      q: 'stars:>1',
      per_page: perPage,
      sort: 'stars',
      order: 'desc',
      ...withCreds
    };

    if (value) {
      params = {
        q: value,
        page,
        per_page: perPage,
        ...withCreds
      }
    }

    try {
      const response = await axios.get('https://api.github.com/search/repositories', {params});

      dispatch({
        type: SEARCH_REPOSITORIES,
        items: response.data.items,
        pageCount: Math.ceil(response.data.total_count / perPage)
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  const getReposDetail = async name => {
    setLoading();

    try {
      const [repos, commits, languages, contributors] = await Promise.all([
        axios.get(`https://api.github.com/repos/${name}`, {
          params: {...withCreds}
        }),
        axios.get(`https://api.github.com/repos/${name}/commits`, {
          params: {
            per_page: 1,
            ...withCreds
          }
        }),
        axios.get(`https://api.github.com/repos/${name}/languages`, {
          params: {...withCreds}
        }),
        axios.get(`https://api.github.com/repos/${name}/contributors`, {
          params: {
            per_page: 10,
            ...withCreds
          }
        })
      ]);

      dispatch({
        type: GET_REPOS_DETAIL,
        repos: repos.data,
        commits: commits.data,
        languages: languages.data,
        contributors: contributors.data
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  const clearRepositories = () => {
    localStorage.removeItem('page');
    dispatch({type: CLEAR_REPOSITORIES});
  };

  const setLoading = () => dispatch({type: SET_LOADING});

  const handlePageClick = data => {
    let page = data.selected + 1;
    let value = localStorage.getItem('search-query') ?? '';

    clearRepositories();

    localStorage.setItem('page', page);

    search(value);
  }

  return (
    <GithubContext.Provider value={{
      search, getReposDetail, clearRepositories,
      setLoading, handlePageClick,
      ...state
    }}>
      {children}
    </GithubContext.Provider>
  );
}

export default GithubState;