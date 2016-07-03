import { takeEvery } from 'redux-saga'
import { take, put, call, select } from 'redux-saga/effects'
import Types from '../Actions/Types'
import Actions from '../Actions/Creators'
import { NativeModules } from 'react-native'

const Audio = NativeModules.RNAudioPlayerURL

Audio.initWithURL('http://ns3388562.ip-46-105-106.eu:8000/radiopiiaf-192.mp3')

Audio.iosControll(() => {
  console.log('attention machine c bon lol')
})

function * play () {
  try {
    Audio.enable(true)
    Audio.setCategory(0, 'Playback')
  } catch (e) {
    console.log('Error :(', e)
  }
  Audio.play()
}

function * pause () {
  Audio.pause()
}

function * stop () {
  Audio.stop()
}

function * toggle () {
  const playing = yield select(state => state.player.playing)
  if (playing) {
    return yield put(Actions.pause())
  }
  return yield put(Actions.play())
}

export default function * watchPlayer () {
  return yield [
    takeEvery(Types.PLAY, play),
    takeEvery(Types.PAUSE, pause),
    takeEvery(Types.STOP, stop),
    takeEvery(Types.TOGGLE_PLAY, toggle)
  ]
}
