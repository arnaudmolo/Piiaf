import React, { TouchableOpacity, View, Text, StyleSheet, Image, Button } from 'react-native'
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
        <Image source={require('./../components/Player/business.png')} style={{ width: 20, height: 20, left: 10, top: 10}} />
      </TouchableOpacity>
    );
  },

  renderRightButton(navigator) {
    return (
      <TouchableOpacity
        touchRetentionOffset={ExNavigator.Styles.barButtonTouchRetentionOffset}
        onPress={() => navigator.push(routes.getListRoute())}
        style={ExNavigator.Styles.barRightButton}>
        <Image source={require('./../components/Player/list.png')} style={{ width: 20, height: 20, right: 10, top: 10}} />
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
