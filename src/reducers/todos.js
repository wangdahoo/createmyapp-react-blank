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
    default:
      return state
  }
}
