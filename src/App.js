import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// views
import Home from './views/Home'
import Counter from './views/Counter'
import Todos from './views/Todos'

import ScrollToTop from '@/components/ScrollToTop'
import { Layout, Menu, Icon } from 'antd'
const { Header, Content } = Layout

class App extends Component {
  state = {
    currentKey: window.location.pathname.replace('/', '') || 'home'
  }

  onMenuClick = (e) => {
    this.setState({
      currentKey: e.key
    })
  }

  render () {
    return (
      <Router>
        <Layout>
          <Header>
            <Menu
              theme="dark"
              mode="horizontal"
              selectedKeys={[this.state.currentKey]}
              onClick={this.onMenuClick}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="home">
                <Link to='/' style={linkStyle}>
                  <Icon type="home" />Home
                </Link>
              </Menu.Item>
              <Menu.Item key="counter">
                <Link to='/counter' style={linkStyle}>
                  <Icon type="calculator" />Counter
                </Link>
              </Menu.Item>
              <Menu.Item key="todos">
                <Link to='/todos' style={linkStyle}>
                  <Icon type="bars" />Todos
                </Link>
              </Menu.Item>
            </Menu>
          </Header>
          <ScrollToTop>
            <Content className="App">
              <Route exact path="/" component={Home} />
              <Route path="/counter" component={Counter} />
              <Route path="/todos" component={Todos} />
            </Content>
          </ScrollToTop>
        </Layout>
      </Router>
    )
  }
}

const linkStyle = {
  marginRight: 10
}

export default App
