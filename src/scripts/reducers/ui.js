import { actionTypes } from '../actions/UiActions'
const { OPEN_MENU, CLOSE_MENU } = actionTypes

export default function UiReducer (state = {
  menu: false
}, action) {
  switch (action.type) {
    case OPEN_MENU:
      return {
        ...state,
        menu: true
      }
    case CLOSE_MENU:
      return {
        ...state,
        menu: false
      }

  }
  return state
}
