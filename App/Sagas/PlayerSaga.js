import { takeEvery } from 'redux-saga'
import { take, put, call, select } from 'redux-saga/effects'
import { connect } from 'react-redux'
import Types from '../Actions/Types'
import Actions from '../Actions/Creators'
import { NativeModules, NativeAppEventEmitter } from 'react-native'

const Audio = NativeModules.AudioManager

function * play () {
  Audio.play()
}

function * pause () {
  Audio.stop()
}

function * stop () {
  // Audio.stop()
}

function * toggle () {
  const playing = yield select(state => state.player.playing)
  if (playing) {
    return yield put(Actions.pause())
  }
  return yield put(Actions.play())
}

function * setPlayer (action) {
  // Audio.setPlayingInfo(action.payload)
}

export default function * watchPlayer () {
  return yield [
    takeEvery(Types.PLAY, play),
    takeEvery(Types.PAUSE, pause),
    takeEvery(Types.STOP, stop),
    takeEvery(Types.TOGGLE_PLAY, toggle),
    takeEvery(Types.MUSIC_DESCRIPTION_RECEIVE, setPlayer)
  ]
}
