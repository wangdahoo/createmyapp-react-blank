import React from 'react'
import './index.less'
import { Route, Link, withRouter } from 'react-router-dom'
import Counter from './Counter'
import Todos from './Todos'
import { Layout, Menu, Icon } from 'antd'
import Page from '@/components/Page'
const { Sider, Content } = Layout

class ReduxExamples extends React.Component {
  state = {
    currentKey: ''
  }

  componentDidMount = () => {
    const {match, history} = this.props
    const {location} = history

    this.setState({
      currentKey: location.pathname.replace(match.url, '') || '/counter'
    })
  }

  onMenuClick = (e) => {
    this.setState({
      currentKey: e.key
    })
  }
  
  render () {
    const { match } = this.props

    return (
      <Page hasHeader={true}>
        <Layout className="redux-examples">
          <Sider style={{backgroundColor: '#fff'}}>
            <Menu
              mode="inline"
              selectedKeys={[this.state.currentKey]}
              onClick={this.onMenuClick}
            >
              <Menu.Item key='/counter'>
                <Link to={`${match.url}/counter`}>
                  <Icon type="calculator" />Counter
                </Link>
              </Menu.Item>
              <Menu.Item key='/todos'>
                <Link to={`${match.url}/todos`}>
                  <Icon type="schedule" />Todos
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content>
            <Route path={`${match.url}/counter`} component={Counter} />
            <Route path={`${match.url}/todos`} component={Todos} />
          </Content>
        </Layout>
      </Page>
    )
  }
}

export default withRouter(ReduxExamples)
