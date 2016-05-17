import generateActionTypes from '../utils/generateActionTypes';

export const actionTypes = generateActionTypes(
    'OPEN_MENU',
    'CLOSE_MENU'
)

export function openMenu () {
  console.log('openMen');
  return {
    type: actionTypes.OPEN_MENU
  }
}

export function closeMenu () {
  console.log('close');
  return {
    type: actionTypes.CLOSE_MENU
  }
}

export function toggleMenu () {
  console.log('togger');
  return function (dispatch, getState) {
    return dispatch(getState().ui.menu ? closeMenu() : openMenu())
  }
}
