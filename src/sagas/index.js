import { put, takeEvery, all, call } from 'redux-saga/effects'
import Swal from 'sweetalert2'
import {
  ADD_USER,
  BEGIN_USERS_DOWNLOAD,
  RETRIEVE_USER_DELETE,
  BEGIN_EDIT_USER,
} from '../types'

import {
  downloadUsersOkAction,
  downloadUsersErrorAction,
  addUserOkAction,
  addUserErrorAction,
  deleteUserOkAction,
  deleteUserErrorAction,
  editUserOkAction,
  editUserErrorAction
} from '../actions/users-actions'

import {
  retrieveUsersDB,
  addUserDB,
  deleteUserDB,
  editUserDB
} from '../api-calls'

// Retrieve user
// worker saga
function* retrieveUsers() {
  try {
    const {data} = yield call(retrieveUsersDB)
    yield downloadUsersOkAction(data)
  } catch (error) {
    yield put(downloadUsersErrorAction())
  }
}

// watcher saga
function* retrieveUsersSaga() {
  yield takeEvery(BEGIN_USERS_DOWNLOAD, retrieveUsers)
}


function* addUser(action) {

  const user = action.user
  try {
    yield call(addUserDB, user)

    yield addUserOkAction(user)
      // Alert
    Swal.fire({
      title: 'Added!',
      text: 'The user has been added successfully',
      icon: 'success',
      confirmButtonColor: '#62a086'
    })
  } catch (error) {
    yield addUserErrorAction(true)
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'An error ocurred. Please, try it again.'
    })
  }
}

// watcher saga
function* addUserSaga() {
  yield takeEvery(ADD_USER, addUser)
}



// worker saga
function* deleteUser(action) {

  const id = action.payload
  try {
    yield call(deleteUserDB, id)
    yield deleteUserOkAction()
    Swal.fire({
      title: 'Deleted!',
      text: 'The user has been deleted.',
      icon: 'success',
      confirmButtonColor: '#62a086'
    })
  } catch (error) {
    yield deleteUserErrorAction()
  }
}

// watcher saga
function* deleteUserSaga() {
  yield takeEvery(RETRIEVE_USER_DELETE, deleteUser)
}



// worker saga
function* editUser(action) {

  const user = action.user
  try {
    yield call(editUserDB, user)
    yield editUserOkAction(user)
     // Alert
    Swal.fire({
      title: 'Updated!',
      text: 'The user has been updated.',
      icon: 'success',
      confirmButtonColor: '#62a086'
    })
  } catch (error) {
    yield editUserErrorAction()
  }
}

// watcher saga
function* editUserSaga() {
  yield takeEvery(BEGIN_EDIT_USER, editUser)
}

// Export all sagas
export default function* rootSaga() {
  yield all([
    retrieveUsersSaga(),
    addUserSaga(),
    deleteUserSaga(),
    editUserSaga()
  ])
}
