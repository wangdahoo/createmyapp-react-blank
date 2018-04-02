const nextTodoId = () => Math.random().toString(32).substr(2, 8)

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId(),
  text
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

export const deleteTodo = (id) => ({
  type: 'DELETE_TODO',
  id
})
