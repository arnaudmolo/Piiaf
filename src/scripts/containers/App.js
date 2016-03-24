import React, { Component, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import ExNavigator from '@exponent/react-native-navigator';
import configureStore from '../configStore';
import routes from '../routes';

const styles = StyleSheet.create({
  navigator: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0)',
    borderColor: 'rgba(0,0,0,0)',
    borderWidth: 0
  },
  sceneStyle: {
    overflow: 'visible',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 6,
    backgroundColor: '#000',
    paddingTop: 64,
    borderColor: 'rgba(0,0,0,0)',
    borderWidth: 0
  },
  ctn: {
    flex: 1,
    backgroundColor: '#F00'
  }
})

export default class Piiaf extends Component {

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
