import React from 'react'
import Header from './components/Header'
import Users from './components/Users'
import NewUser from './components/NewUser'
import EditUser from './components/EditUser'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Redux
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Router>
      <Provider store={ store }>
        <Header />
        <div>
          <Switch>
            <Route exact path='/' component={Users} />
            <Route exact path='/users/new' component={NewUser} />
            <Route exact path='/users/edit/:id' component={EditUser} />
          </Switch>
        </div>
      </Provider>
    </Router>
  )
}

export default App