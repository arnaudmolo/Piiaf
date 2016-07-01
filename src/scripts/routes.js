import React, { TouchableOpacity, View, Text, StyleSheet, Image, Button } from 'react-native'
import ExNavigator from '@exponent/react-native-navigator'
import Welcome from '../components/Welcome'

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
    return Welcome
  },
  renderTitle: () =>
    <Image source={require('./containers/logo-w.png')} style={{ width: 70, height: 20, top: 10}} />
});

export default routes;
