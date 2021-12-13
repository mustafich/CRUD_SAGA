import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { addUserAction } from '../../actions/users-actions'
import { showAlert, hideAlertAction } from '../../actions/alert-actions'
import './index.css'

const NewUser = ({ history }) => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState("")
  const [desc, setDesc] = useState("")

  // access the store state
  const loading = useSelector(state => state.users.loading) // true o false
  const error = useSelector(state => state.users.error) // true o false
  const alert = useSelector(state => state.alert.alert)

  const submitNewUser = async event => {
    event.preventDefault()
    // validate form
    if(name.trim() === '') {
      const alert = {
        msg: 'All fields are required.'
      }
      showAlert(alert)
      return
    }

    hideAlertAction()

    await addUserAction({ name, surname,desc })

    history.push('/')
  }

  const goBack = () => {
    history.push('/')
  }

  return (
    <div>
      <h2 className='table__title'>New user</h2>
      <form
        className='form'
        onSubmit={submitNewUser} >
        <section className='form__section'>
          <label>User name</label>
          <input
            type='text'
            placeholder='User name'
            name='name'
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </section>
        <section className='form__section'>
          <label>Surname</label>
          <input
            type='text'
            name='surname'
            value={surname}
            onChange={event => setSurname(event.target.value)}
          />
        </section>
        <section className='form__section'>
          <label>Desc</label>
          <input
              type='string'
              name='desc'
              value={desc}
              onChange={event => setDesc(event.target.value)}
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
        { alert ? <p className='alert-message'>{alert.msg}</p> : null }
      </form>
      { loading ? <p>Loading...</p> : null }
      { error ? <p>Ups! An error ocurred.</p> : null }
    </div>
  )
}

export default NewUser