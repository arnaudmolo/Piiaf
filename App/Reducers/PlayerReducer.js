import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  status: 'stop',
  description: {}
})

const musicReceived = (state, action) =>
  state.merge({description: action.payload})

const buffering = (state, action) =>
  state.merge({playing: false, status: 'buffering'})

const playing = (state, action) =>
  state.merge({playing: true, status: 'playing'})

const error = (state, action) =>
  state.merge({playing: false, status: 'error'})

const stopped = (state, action) =>
  state.merge({playing: false, status: 'stopped'})

const ACTION_HANDLERS = {
  [Types.MUSIC_DESCRIPTION_RECEIVE]: musicReceived,
  [Types.PLAYING]: playing,
  [Types.STOPPED]: stopped,
  [Types.BUFFERING]: buffering,
  [Types.ERROR]: error
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
