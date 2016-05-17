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

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu)
