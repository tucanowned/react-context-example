export default (state, action) => {
  switch(action.type) {
    case 'GET_USERS':
      return {
        ...state,
        loading: false,
        users: action.payload
      }
    case 'DELETE_USERS':
      return {
        ...state,
        loading: false,
        users: []
      }
    case 'USERS_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case 'LOADING':
      return {
        ...state,
        loading: action.payload
      }
    default: 
      return state;
  }
}