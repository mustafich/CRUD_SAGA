import {
  ADD_USER,
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
import store from '../store'



const downloadUsers = () => ({
  type: BEGIN_USERS_DOWNLOAD,
  payload: true
})

const downloadUsersOk = users => ({
  type: USERS_DOWNLOAD_OK,
  payload: users
})

const downloadUsersError = () => ({
  type: USERS_DOWNLOAD_ERROR,
  payload: true
})

export const downloadUsersAction = () => store.dispatch(downloadUsers())

export const downloadUsersOkAction = users => store.dispatch(downloadUsersOk(users))

export const downloadUsersErrorAction = () => store.dispatch(downloadUsersError())



const addUser = user => ({
  type: ADD_USER,
  payload: true,
  user: user
})

const addUserOk = () => ({
  type: BEGIN_USERS_DOWNLOAD,
  payload: true
})

const addUserError = state => ({
  type: ADD_USER_ERROR,
  payload: state
})

export const addUserAction = user => store.dispatch(addUser(user))

export const addUserOkAction = () => store.dispatch(addUserOk())

export const addUserErrorAction = state => store.dispatch(addUserError(state))



const retrieveUserDelete = id => ({
  type: RETRIEVE_USER_DELETE,
  payload: id
})

const deleteUserOk = () => ({
  type: USER_DELETED_OK
})

const deleteUserError = () => ({
  type: USER_DELETED_ERROR,
  payload: true
})

export const deleteUserAction = id => store.dispatch(retrieveUserDelete(id))

export const deleteUserOkAction = () => store.dispatch(deleteUserOk())

export const deleteUserErrorAction = () => store.dispatch(deleteUserError())



const retrieveUserAction = user => ({
  type: RETRIEVE_USER_EDIT,
  payload: user
})

const editUser = user => ({
  type: BEGIN_EDIT_USER,
  user: user
})

const editUserOk = user => ({
  type: USER_EDITED_OK,
  payload: user
})

const editUserError = () => ({
  type: USER_EDITED_ERROR,
  payload: true
})
const pageAdd = () => ({
  type: USER_PAGE_ADD,
  payload: true
})

export const retrieveUserEditAction = user => store.dispatch(retrieveUserAction(user))

export const editUserAction = user => store.dispatch(editUser(user))

export const editUserOkAction = user => store.dispatch(editUserOk(user))

export const editUserErrorAction = () => store.dispatch(editUserError())

export const pageAddAction = () => store.dispatch(pageAdd())
