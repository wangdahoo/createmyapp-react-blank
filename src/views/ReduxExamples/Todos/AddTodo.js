import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Layout, Input, Tooltip, message } from 'antd'
import { connect } from 'react-redux'
import { addTodo } from '@/actions/todos'

class AddTodo extends Component {
  constructor (props) {
    super(props)

    this.state = {
      value: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onEnter = this.onEnter.bind(this)
  }

  onChange (e) {
    let value = e.target.value
    this.setState({value})
  }

  onEnter (e) {
    if (!this.state.value) {
      message.error('text can\'not be empty.')
      return
    }
    this.props.onAddTodo(this.state.value)
    this.setState({
      value: ''
    })
    e.target.value = ''
  }

  render () {
    return (
      <Layout style={{marginBottom: 20}}>
        <Tooltip title="按回车创建 Todo">
          <Input 
            size='large' 
            className="input-new-todo" 
            onChange={this.onChange}
            onPressEnter={this.onEnter}
          />
        </Tooltip>
      </Layout>
    )
  }
}

AddTodo.propTypes = {
  onAddTodo: PropTypes.func.isRequired
}

const bindActions = dispatch => ({
  onAddTodo: text => dispatch(addTodo(text))
})

export default connect(
  null,
  bindActions
)(AddTodo)
