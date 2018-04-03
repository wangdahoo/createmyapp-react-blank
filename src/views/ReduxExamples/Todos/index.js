import React from 'react'
import './index.less'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import { Breadcrumb } from 'antd'

const Todos = () => (
  <div className="redux-todos">
    <Breadcrumb>
      <Breadcrumb.Item>
        <span>Redux Examples</span>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        Todos
      </Breadcrumb.Item>
    </Breadcrumb>
    
    <AddTodo />
    <TodoList />
  </div>
)

export default Todos
