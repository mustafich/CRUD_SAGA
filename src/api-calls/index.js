import axiosClient from '../config/axios'

export async function retrieveUsersDB() {
  return await axiosClient.get('/users')
}

export async function addUserDB(user) {
  return await axiosClient.post('/users', user)
}

export async function deleteUserDB(id) {
  return await axiosClient.delete(`/user/${id}`)
}

export async function editUserDB(user) {
  return await axiosClient.put(`/user/${user.id}`, user)
}
