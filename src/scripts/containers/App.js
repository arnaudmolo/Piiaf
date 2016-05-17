import React, { Component, StyleSheet, View } from 'react-native'
import { Provider } from 'react-redux'
import ExNavigator from '@exponent/react-native-navigator'
import configureStore from '../configStore'
import routes from '../routes'

import SpashScreen from '@remobile/react-native-splashscreen'

const styles = StyleSheet.create({
  navigator: {
    flex: 1,
    backgroundColor: '#000',
    borderColor: '#000',
    borderWidth: 0
  },
  sceneStyle: {
    overflow: 'visible',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 6,
    backgroundColor: '#000',
    paddingTop: 64,
    borderColor: '#000',
    borderWidth: 0
  },
  ctn: {
    flex: 1,
    backgroundColor: '#F00'
  }
})

const store = configureStore()

export default class Piiaf extends Component {

  componentDidMount () {
    SpashScreen.hide()
  }

  /**
   * Render
   *
   * @return {jsx} Render <Provider /> component
   */
  render () {
    return (
      <Provider store={ store  }>
        <View style={styles.ctn}>
          <ExNavigator
            initialRoute={ routes.getHomeRoute(store) }
            navigationBarStyle={styles.navigator}
            sceneStyle={styles.sceneStyle} />
        </View>
      </Provider>
    )
  }
}
