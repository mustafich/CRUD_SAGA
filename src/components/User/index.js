import React from 'react'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'
import { deleteUserAction, retrieveUserEditAction } from '../../actions/users-actions'
import './index.css'

const User = (user) => {
  const history = useHistory()
  const { name,surname, desc, id } = user

  const confirmDeleteUser = id => {
    // ask the user for confirmation
    Swal.fire({
      title: 'Are you sure you want to delete the user?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#62a086',
      cancelButtonColor: '#f66b61',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      result.value && deleteUserAction(id)
    })
  }

  // function that redirects automátically, is better than 'Link'
  const redirectionEdition = user => {
    retrieveUserEditAction(user)
    history.push(`users/edit/${id}`)
  }

  return (
    <tr>
      <td>{name}</td>
      <td className='prices'>{desc}</td>
      <td className='button-container'>
        <button
          className='button button--edit'
          type='button'
          onClick={() => redirectionEdition(user)}
        >Edit</button>
        <button
          className='button button--delete'
          type='button'
          onClick={() => confirmDeleteUser(id)}
        >Delete</button>
      </td>
    </tr>
  )
}

export default User