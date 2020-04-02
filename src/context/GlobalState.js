import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state

const initialState = {
  users: [],
  error: null,
  loading: false
}

// Create context

export const GlobalContext = createContext(initialState);

// Provider component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function getUsers() {
    dispatch({
      type: 'LOADING',
      payload: true
    })
    try {
      const res = await fetch('/api/v1/users');
      dispatch({
        type: 'GET_USERS',
        payload: await res.json()
      })
    } catch (err) {
      dispatch({
        type: 'USERS_ERROR',
        payload: 'Get users not found'
      })
    }
  }

  async function deleteUsers() {
    dispatch({
      type: 'DELETE_USERS',
      payload: {}
    });
  }

  return (
    <GlobalContext.Provider value={{
      users: state.users,
      error: state.error,
      loading: state.loading,
      getUsers,
      deleteUsers,
    }}>
      {children}
    </GlobalContext.Provider>
  );
}