import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  playing: false
})

const play = (state, action) =>
  state.merge({playing: true})

const pause = (state, action) =>
  state.merge({playing: false})

const stop = (state, action) =>
  state.merge({playing: false})

const ACTION_HANDLERS = {
  [Types.PLAY]: play,
  [Types.PAUSE]: pause,
  [Types.STOP]: stop
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
