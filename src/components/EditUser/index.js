import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { editUserAction } from '../../actions/users-actions'
import { useHistory } from 'react-router-dom'
import './index.css'

const EditUser = () => {
  const history = useHistory()
  const userEdit = useSelector(state => state.users.editUser)

  const [user, setUser] = useState({
    name: '',
    surname: '',
    desc: '',
  })

  // fill state
  useEffect(() => {
    setUser(userEdit)
  }, [userEdit])


  const submitEditUser = event => {
    event.preventDefault()
    console.log(user)
    editUserAction(user)
    history.push('/')
  }

  // read data from form
  const onChangeForm = event => {
    setUser({
      ...user,
      [event.target.name] : event.target.value
    })
  }

  const goBack = () => {
    history.push('/')
  }
  return (
    <div>
       <h2 className='table__title'>Edit user</h2>
      <form
        className='form'
        onSubmit={submitEditUser}
      >
        <section className='form__section'>
          <label>User name</label>
          <input
            type='text'
            name='name'
            value={user.name}
            onChange={onChangeForm}
          />
        </section>
        <section className='form__section'>
          <label>Surname</label>
          <input
            type='text'
            name='surname'
            value={user.surname}
            onChange={onChangeForm}
          />
        </section>
        <section className='form__section'>
          <label>Desc</label>
          <input
              type='text'
              name='desc'
              value={user.desc}
              onChange={onChangeForm}
          />
        </section>
        <div className='button__container'>
          <button
            type='button'
            className='button button--cancel'
            onClick={goBack}
           >Cancel</button>
          <button className='button button--confirm'>Confirm</button>
        </div>
      </form>
    </div>
  )
}

export default EditUser