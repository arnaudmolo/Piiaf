import { takeEvery } from 'redux-saga'
import { take, put, call } from 'redux-saga/effects'
import Types from '../Actions/Types'
import { NativeModules } from 'react-native'

const Audio = NativeModules.RNAudioPlayerURL

Audio.initWithURL('http://172.20.10.2/images/pnl.mp3')

function * play () {
  Audio.play()
}

function * pause () {
  Audio.pause()
}

function * stop () {
  Audio.stop()
}

export default function * watchPlayer () {
  yield takeEvery(Types.PLAY, play)
  yield takeEvery(Types.PAUSE, pause)
  yield takeEvery(Types.STOP, stop)
}
