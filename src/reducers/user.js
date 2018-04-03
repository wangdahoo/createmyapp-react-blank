import _ from 'lodash'

const initState = () => ({
  username: '',
  uid: 0
})

export default (state = initState(), action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        ..._.pick(action, ['username', 'uid'])
      }
    case 'LOGOUT':
      return initState()
    default:
      return state
  }
}