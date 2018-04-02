import React from 'react'
import PropTypes from 'prop-types'
import { Layout, List, Icon } from 'antd'
import { connect } from 'react-redux'
import { toggleTodo, deleteTodo } from '@/actions/todos'
import _ from 'lodash'

const TodoList = ({todos, onTodoClick, onTodoDelete}) => (
  <Layout className="layout-todo-list">
    <List
      header={<div style={{paddingLeft: 10}}>Todos</div>}
      footer={<div style={{paddingLeft: 10}}>共 {todos.length} 条，完成 {_.filter(todos, todo => todo.completed).length} 条</div>}
      bordered={false}
      dataSource={todos}
      renderItem={todo => <List.Item 
        key={todo.id}
        onClick={() => onTodoClick(todo.id)}
      > 
        <Icon type="check-circle" className="todo-icon-checked" 
          style={{display: todo.completed ? 'inline' : 'none'}}/>
        <span style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          paddingLeft: 40
        }}>
          {todo.text}
        </span>
        <Icon type="close-circle" className="todo-icon-delete" onClick={() => onTodoDelete(todo.id)}/>
      </List.Item>}
    />
  </Layout>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onTodoDelete: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  todos: state.todos
})

const bindActions = dispatch => ({
  onTodoClick: id => dispatch(toggleTodo(id)),
  onTodoDelete: id => dispatch(deleteTodo(id))
})

export default connect(
  mapStateToProps,
  bindActions
)(TodoList)
