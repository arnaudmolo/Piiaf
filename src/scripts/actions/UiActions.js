import generateActionTypes from '../utils/generateActionTypes';

export const actionTypes = generateActionTypes(
    'OPEN_MENU',
    'CLOSE_MENU'
)

export function openMenu () {
  return {
    type: actionTypes.OPEN_MENU
  }
}

export function closeMenu () {
  console.log('open menu!');
  return {
    type: actionTypes.CLOSE_MENU
  }
}

export function toggleMenu () {
  return function (dispatch, getState) {
    return dispatch(getState().ui.menu ? closeMenu() : openMenu())
  }
}
