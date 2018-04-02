import _ from 'lodash'

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      let todos = [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]

      return todos
    case 'TOGGLE_TODO':
      return state.map(todo => {
        return todo.id === action.id
          ? {...todo, completed: !todo.completed}
          : todo
      })
    case 'DELETE_TODO':
      let index = _.findIndex(state, todo => todo.id === action.id)
      if (index > -1) state.splice(index, 1)
      return state
    default:
      return state
  }
}
