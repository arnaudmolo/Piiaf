import React, { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import ExNavigator from '@exponent/react-native-navigator'

const routes = {};

const styles = StyleSheet.create({
  titleName: {
    color: '#0F0'
  }
})

/**
 * Homepage
 *
 */
routes.getHomeRoute = () => ({

  getSceneClass() {
    return require('../components/Welcome/').default
  },

  renderLeftButton(navigator) {
    return (
      <TouchableOpacity
        touchRetentionOffset={ExNavigator.Styles.barButtonTouchRetentionOffset}
        style={ExNavigator.Styles.barLeftButton}>
        <Text style={ExNavigator.Styles.barLeftButtonText}>Hamburger !</Text>
      </TouchableOpacity>
    );
  },

  renderRightButton(navigator) {
    return (
      <TouchableOpacity
        touchRetentionOffset={ExNavigator.Styles.barButtonTouchRetentionOffset}
        onPress={() => navigator.push(routes.getListRoute())}
        style={ExNavigator.Styles.barRightButton}>
        <Text style={ExNavigator.Styles.barRightButtonText}>Help</Text>
      </TouchableOpacity>
    );
  },

  getTitle() {
    return 'Piiaf'
  }

});

routes.getListRoute = () => ({
  getSceneClass () {
    return require('../components/List/').default
  },
  getTitle () {
    return 'List'
  }
})

export default routes;
