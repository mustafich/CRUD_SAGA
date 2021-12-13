import {
  ADD_USER,
  ADD_USER_OK,
  ADD_USER_ERROR,
  BEGIN_USERS_DOWNLOAD,
  USERS_DOWNLOAD_OK,
  USERS_DOWNLOAD_ERROR,
  RETRIEVE_USER_DELETE,
  USER_DELETED_OK,
  USER_DELETED_ERROR,
  RETRIEVE_USER_EDIT,
  BEGIN_EDIT_USER,
  USER_EDITED_OK,
  USER_EDITED_ERROR,
  USER_PAGE_ADD
} from '../types'

const initialState = {
  users: [],
  error: false,
  loading: false,
  deleteUser: null,
  page:1
}

export default function(state = initialState, action) {

  switch(action.type) {

    case BEGIN_USERS_DOWNLOAD:
    case ADD_USER:
    case BEGIN_EDIT_USER:
      return {
        ...state,
        loading: action.payload,
        user: action.user
      }

    case ADD_USER_OK:
      return {
        ...state,
        loading: false
      }

    case ADD_USER_ERROR:
    case USERS_DOWNLOAD_ERROR:
    case USER_DELETED_ERROR:
    case USER_EDITED_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    case USERS_DOWNLOAD_OK:
      return {
        ...state,
        loading: false,
        error: null,
        users: action.payload
      }

    case RETRIEVE_USER_DELETE:
      return {
        ...state,
        deleteUser: action.payload
      }

    case USER_DELETED_OK:
      return {
        ...state,
        users: state.users.filter(user => user.id !== state.deleteUser),
        deleteUser: null
      }

    case RETRIEVE_USER_EDIT:

      return {
        ...state,
        editUser: action.payload
      }

    case USER_EDITED_OK:
      return {
        ...state,
        editUser: null,
        users: state.users.map(user =>
          user.id === action.payload.id ? user = action.payload : user
        )
      }
    case USER_PAGE_ADD:
      return {
        ...state,
        page: state.page + 1
      }

    default:
      return state
  }
}