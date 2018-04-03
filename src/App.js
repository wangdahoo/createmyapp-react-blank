import React from 'react'
import './App.less'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
// basic layout views
import Dashboard from './views/Dashboard'
import Login from './views/Login'

import ScrollToTop from '@/components/ScrollToTop'
import { Layout } from 'antd'
import Cookie from '@/utils/cookie'
import { KEY_UID } from '@/constants'

const isAuthorized = () => Cookie.get(KEY_UID) > 0

const AuthorizedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => 
      isAuthorized() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location }
          }}
        />
      )
    }
  />
)

const App = ({match}) => (
  <Router>
    <ScrollToTop>
      <Layout className="App">
        <Route exact path="/" component={Login} />
        <AuthorizedRoute path="/dashboard" component={Dashboard} />
      </Layout>
    </ScrollToTop>
  </Router>
)

export default App
