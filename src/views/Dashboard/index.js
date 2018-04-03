/* eslint jsx-a11y/href-no-hash: off */

import React from 'react'
import './index.less'
import { Route, Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '@/actions/user'
import Home from '@/views/Home'
import ReduxExamples from '@/views/ReduxExamples'
import { Layout, Menu, Icon, Dropdown } from 'antd'
import _ from 'lodash'
const { Header, Content } = Layout

const UserActions = ({username, logout}) => (
  <Dropdown overlay={
    <Menu>
      <Menu.Item>
        <a href="#" onClick={() => {
          logout().then(() => window.location.href = '/')
        }}>
          <Icon type="logout" /> 退出
        </a>
      </Menu.Item>
    </Menu>
  }>
    <a className="ant-dropdown-link" href="#">
      <Icon type="user" /> {username} <Icon type="down" />
    </a>
  </Dropdown>
)

const ConnectedUserActions = connect(
  state => ({
    username: state.user.username
  }),

  dispatch => ({
    logout: () => dispatch(logout())
  })
)(UserActions)

const getCurrentKey = (pathname, matchUrl) => {
  pathname = pathname.replace(matchUrl, '')
  const key = _.trim(pathname, '/').split('/')[0]
  return `/${key}`
}

class Dashboard extends React.Component {
  state = {
    currentKey: ''
  }

  componentDidMount = () => {
    const {match, history} = this.props
    const {location} = history

    this.setState({
      currentKey: getCurrentKey(location.pathname, match.url)
    })
  }

  onMenuClick = (e) => {
    this.setState({
      currentKey: e.key
    })
  }

  render () {
    const {match} = this.props

    return (
      <Layout className="dashboard">
        <Header className="dashboard-header">
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[this.state.currentKey]}
            onClick={this.onMenuClick}
          >
            <Menu.Item key="/">
              <Link to={`${match.url}`} className="nav-link">
                <Icon type="home" />Home
              </Link>
            </Menu.Item>
            <Menu.Item key="/redux">
              <Link to={`${match.url}/redux/counter`} className="nav-link">
                <Icon type="appstore" />Redux Examples
              </Link>
            </Menu.Item>
            <ConnectedUserActions />
          </Menu>
        </Header>
        <Content className="dashboard-content">
          <Route exact path={`${match.url}`} component={Home} />
          <Route path={`${match.url}/redux`} component={ReduxExamples} />
        </Content>
      </Layout>
    )
  }
}

export default withRouter(Dashboard)
