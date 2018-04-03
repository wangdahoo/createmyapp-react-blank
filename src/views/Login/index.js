import React from 'react'
import './index.less'
import { withRouter } from 'react-router-dom'
import { Layout, Row, Col } from 'antd'
import LoginForm from './LoginForm'

const { Header, Content } = Layout
const Login = ({history}) => (
  <Layout className="login">
    <Header className="login-header">
      <div className="logo">
        <img alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" /><span>Ant Design</span>
      </div>
    </Header>
    <Content className="login-content">
      <Row>
        <Col span={8} />
        <Col span={8}>
          <LoginForm history={history}/>
        </Col>
        <Col span={8} />
      </Row>
    </Content>
  </Layout>
)

export default withRouter(Login)
