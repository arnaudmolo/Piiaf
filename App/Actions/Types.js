// A list of all actions in the system.
import { createTypes } from 'reduxsauce'

export default createTypes(`
  LOGIN_ATTEMPT
  LOGIN_SUCCESS
  LOGIN_FAILURE

  LOGOUT

  STARTUP

  MUSIC_DESCRIPTION_REQUEST
  MUSIC_DESCRIPTION_RECEIVE
  MUSIC_DESCRIPTION_FAILURE

  PLAY
  PAUSE
  STOP
  TOGGLE_PLAY
`)
