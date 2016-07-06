import { combineReducers } from 'redux'
import PlayerReducer from './PlayerReducer'

// glue all the reducers together into 1 root reducer
export default combineReducers({
  player: PlayerReducer
})

// Put reducer keys that you do NOT want stored to persistence here
export const persistentStoreBlacklist = ['player']
