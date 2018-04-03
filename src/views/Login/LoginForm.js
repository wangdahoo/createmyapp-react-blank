import React from 'react'
import { Icon, Input, Button } from 'antd'
import { connect } from 'react-redux'
import { login } from '@/actions/user'

class LoginForm extends React.Component {
  state = {
    username: '',
    password: ''
  }

  onChangeUsername = e => {
    this.setState({
      username: e.target.value
    })
  }

  onChangePassword = e => {
    this.setState({
      password: e.target.value
    })
  }

  doLogin (username, password) {
    const { login, history } = this.props
    login(username, password).then(() => {
      history.push('/dashboard')
    })
  }

  render() {
    const { username, password } = this.state

    return (
      <div className="login-form">
        <div className="login-form-title">
          请登录
        </div>

        <div className="login-form-item">
          <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
            placeholder="admin" 
            value={username}
            onChange={this.onChangeUsername}
            />
        </div>
        
        <div className="login-form-item">
          <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
            type="password" 
            placeholder="666666"
            value={password}
            onChange={this.onChangePassword}/>
        </div>
        
        <div className="login-form-item">
          <Button type="primary" className="btn-login" onClick={() => this.doLogin(username, password)}>
            登 录
          </Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({})

const bindActions = dispatch => ({
  login: (username, password) => dispatch(login(username, password))
})

export default connect(
  mapStateToProps, 
  bindActions
)(LoginForm)
