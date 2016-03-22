import React, { Component, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import ExNavigator from '@exponent/react-native-navigator';
import configureStore from '../configStore';
import routes from '../routes';

const styles = StyleSheet.create({
  navigator: {
    flex: 1,
    backgroundColor: '#000',
    opacity: 0.5
  },
  sceneStyle: {
    overflow: 'visible',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 6,
    backgroundColor: '#000',
    paddingTop: 64
  },
  ctn: {
    flex: 1,
    backgroundColor: '#F00'
  }
})

export default class App extends Component {

    /**
     * Render
     *
     * @return {jsx} Render <Provider /> component
     */
    render () {
        return (
            <Provider store={ configureStore() }>
              <View style={styles.ctn}>
                <ExNavigator
                  initialRoute={ routes.getHomeRoute() }
                  navigationBarStyle={styles.navigator}
                  sceneStyle={styles.sceneStyle} />
              </View>
            </Provider>
        );
    }
}
