import { combineReducers } from 'redux'
import agents from './Reducers/agents'

const createRootReducer = () =>
  combineReducers({
    agents
  })

export default createRootReducer
