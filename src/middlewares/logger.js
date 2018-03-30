const logger = store => next => action => {
  console.info('[LOGGER] dispatching', action)
  let result = next(action)
  console.info('[LOGGER] next state', store.getState())
  return result
}

export default logger
