import React, { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import EffectsView from 'react-native-effects-view'

import ToggleButton from './toggle-button'

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  bluredView: {
      flex: 1,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      top: -100,
      justifyContent: 'center',
      alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0)'
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    width: height,
    height: height
  },
  image: {
    top: 0,
    width: width,
    height: 400,
    marginBottom: 15
  },
  text: {
    color: '#FFF'
  },
  playerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  big: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})

const Player = props => {
  const url = 'http://94.247.179.59/img/1.JPG?r=' + Math.random()
  console.log(url)
  return (
    <View style={styles.container}>
      <EffectsView
        style={styles.bluredView}
        blurStyle="dark"
      >
        <Image source={{uri: url}}
          style={ styles.backgroundImage } />
      </EffectsView>
      <View style={ styles.playerContainer }>
        <Image source={{uri: url}}
          style={ styles.image } />
        <Text style={ [styles.text, styles.big] } >Titre chanson</Text>
        <Text style={ styles.text } >Artiste</Text>
        <ToggleButton />
      </View>
    </View>
  )
}



export default Player
