import React, { View, Text, Image, Dimensions } from 'react-native'
import Player from './../Player'
import Sidebar from './../../scripts/containers/Sidebar'
import Timeline from './../../scripts/containers/Timeline'

const Welcome = props =>
  <View style={ styles.container }>
    <Sidebar menu={<Timeline />} >
      <Player />
    </Sidebar>
  </View>

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 10
  }
}

export default Welcome
