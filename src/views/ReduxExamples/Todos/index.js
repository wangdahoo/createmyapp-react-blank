import React from 'react'
import './index.less'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

const Todos = () => (
  <div className="todos-wrapper">
    <AddTodo />
    <TodoList />
  </div>
)

export default Todos
