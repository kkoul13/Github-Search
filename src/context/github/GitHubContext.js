import { createContext, useReducer } from "react";
import githubReducer from "./GitHubReducer";

const GitHubContext = createContext();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL

export const GitHubProvider = ({ children }) => {

  const initialState = {
    users: [],
    loading: false,
    user: {},
    repos:[]
  }
  const [state, dispatch] = useReducer(githubReducer, initialState)

  const getUser = async (lo) => {

    setLoading()

    const response = await fetch(`${GITHUB_URL}/users/${lo}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`
      }
    })

    const data = await response.json();

    dispatch({
      type: 'GET-USER',
      payload: data,

    })

  }

  const getUserRepos = async (logi) => {

    setLoading()

    const param = new URLSearchParams({ 
      sort:'created',
      per_page:10 
    
    })

    const response = await fetch(`${GITHUB_URL}/users/${logi}/repos?${param}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`
      }
    })

    const data = await response.json();

    dispatch({ 
      type: 'GET-REPOS',
      payload: data,

    })

  }

  const searchUsers = async (text) => {

    setLoading()

    const param = new URLSearchParams({ q: text })

    const response = await fetch(`${GITHUB_URL}/search/users?${param}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`
      }
    })

    const { items } = await response.json();
    
    dispatch({
      type: 'GET-USERS',
      payload: items,

    })

  }

  const setLoading = () => dispatch({ type: 'SET-LOADING' })

  const clearUsers = () => dispatch({ type: 'CLEAR-USERS' })

  return <GitHubContext.Provider value={
    { 
      users: state.users, 
      loading: state.loading, 
      user: state.user, 
      repos:state.repos,
      searchUsers, 
      clearUsers, 
      getUser,
      getUserRepos
     }
    }>{children}</GitHubContext.Provider>
}

export default GitHubContext