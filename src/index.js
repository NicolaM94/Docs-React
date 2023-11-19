import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Index from './views/index'
import Newdocmail from './views/newdocmail'
import Page from './views/page'
import Register from './views/register'
import Newpwsubmit from './views/newpwsubmit'
import Confirmcode from './views/confirmcode'
import Codemail from './views/codemail'
import RegistrationConfirm from './views/registration-confirm'
import Passrecoverymail from './views/passrecoverymail'
import AlreadyRegistered from './views/already-registered'
import NotRegistered from './views/not-registered'
import Data from './views/data'
import Loggedout from './views/loggedout'
import Passrecoveryrequest from './views/passrecoveryrequest'
import Login from './views/login'
import Page1 from './views/page1'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Index} exact path="/" />
        <Route component={Newdocmail} exact path="/newdocmail" />
        <Route component={Page} exact path="/page" />
        <Route component={Register} exact path="/register" />
        <Route component={Newpwsubmit} exact path="/newpwsubmit" />
        <Route component={Confirmcode} exact path="/confirmcode" />
        <Route component={Codemail} exact path="/codemail" />
        <Route
          component={RegistrationConfirm}
          exact
          path="/registration-confirm"
        />
        <Route component={Passrecoverymail} exact path="/passrecoverymail" />
        <Route component={AlreadyRegistered} exact path="/already-registered" />
        <Route component={NotRegistered} exact path="/not-registered" />
        <Route component={Data} exact path="/data" />
        <Route component={Loggedout} exact path="/loggedout" />
        <Route
          component={Passrecoveryrequest}
          exact
          path="/passrecoveryrequest"
        />
        <Route component={Login} exact path="/login" />
        <Route component={Page1} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
