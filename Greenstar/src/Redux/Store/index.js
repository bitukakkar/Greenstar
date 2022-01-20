import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import createRootReducer from '../rootReducer'

const rootReducer = createRootReducer()
const persistConfig = {
  key: 'root',
  storage,
  whitelist: []
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({
  reducer: persistedReducer
})

export { store }
