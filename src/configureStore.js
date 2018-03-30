import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import promise from '@/middlewares/promise'
import logger from '@/middlewares/logger'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducer from '@/reducers'

export default function configureStore (onCompletion: () => void): any {
  const enhancer = compose(
    applyMiddleware(thunk, promise, logger)
  )

  const persistedReducer = persistReducer({
    key: 'root',
    storage
  }, reducer)

  const store = createStore(persistedReducer, enhancer)
  persistStore(store, onCompletion)

  return store
}
