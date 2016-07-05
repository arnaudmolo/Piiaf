import Types from './Types'

const attemptLogin = (username, password) =>
  ({ type: Types.LOGIN_ATTEMPT, username, password })

const loginSuccess = (username) =>
  ({ type: Types.LOGIN_SUCCESS, username })

const loginFailure = (errorCode) =>
  ({ type: Types.LOGIN_FAILURE, errorCode })

const logout = () => ({ type: Types.LOGOUT })

const startup = () => ({ type: Types.STARTUP })

const requestMusicDescription = (city) =>
  ({ type: Types.MUSIC_DESCRIPTION_REQUEST})
const receiveMusicDescription = (description) =>
  ({ type: Types.MUSIC_DESCRIPTION_RECEIVE, payload: description })
const receiveMusicDescriptionFailure = () =>
  ({ type: Types.MUSIC_DESCRIPTION_FAILURE })

const play = () => ({ type: Types.PLAY })
const stop = () => ({ type: Types.STOP })
const pause = () => ({ type: Types.PAUSE })

const togglePlay = () => ({type: Types.TOGGLE_PLAY})


const playing = () => ({ type: Types.PLAYING })
const paused = () => ({ type: Types.PAUSED })
const stopped = () => ({ type: Types.STOPPED })
const buffering = () => ({ type: Types.BUFFERING })
const error = () => ({ type: Types.ERROR })

/**
 Makes available all the action creators we've created.
 */
export default {
  attemptLogin,
  loginSuccess,
  loginFailure,
  logout,

  play,
  stop,
  pause,
  togglePlay,
  playing,
  paused,
  stopped,
  buffering,
  error,

  requestMusicDescription,
  receiveMusicDescription,
  receiveMusicDescriptionFailure,
  startup,
}
