import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import {downloadUsersAction, pageAddAction} from '../../actions/users-actions'
import User from '../User'
import './index.css'

const Users = () => {




  useEffect(() => {
    (async () => await downloadUsersAction())()
  }, [])

  let users = useSelector(state => state.users.users)
  let page = useSelector(state => state.users.page)

  const error = useSelector(state => state.users.error)
  const loading = useSelector(state => state.users.loading)
  const [userPage,setUserPage] = useState([])

  useEffect(() => {
    setUserPage(users.slice(0, page*5))
  },[users,page])

  return (
    <div>
      <h2 className='table__title'>users</h2>
      { error ? <p>An error ocurred</p> : null }
      { loading ? <p>Loading...</p> : null }
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th id='table__title-price'>Price</th>
            <th id='table__title-action'>Actions</th>
          </tr>
        </thead>
        <tbody>
          { userPage.length === 0 ? 'No users yet.' : (
              userPage.map(user =>
              <User
                key={user.id}
                name={user.name}
                desc={user.desc}
                surname={user.surname}
                id={user.id}
              />
            )
          )}
        </tbody>
      </table>
      <div className="Pagination">
        <button onClick={()=>pageAddAction()}>Get 5 more users!</button>
      </div>
    </div>
  )
}

export default Users
