import { Dimensions } from 'react-native'
import SideMenu from 'react-native-side-menu'
import {connect} from 'react-redux'
import {closeMenu} from './../actions/UiActions'

function mapStateToProps (state) {
  return {
    isOpen: state.ui.menu
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    ...ownProps,
    onChange (isOpen) {
      if (!isOpen) {
        dispatch(closeMenu())
      }
    }
  }
}

function mergeProps (stateProps, dProps, ownProps) {
  const { width } = Dimensions.get('window')
  return {
    ...stateProps,
    ...dProps,
    ...ownProps,
    openMenuOffset: width - width / 6
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(SideMenu)
