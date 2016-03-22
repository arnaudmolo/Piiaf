import React, { View, Text, Image, StyleSheet, Dimensions } from 'react-native'

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#999'
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    width: height,
    height: height
  },
  image: {
    top: 0,
    width: 400,
    height: 400
  }
})

const Player = props => {
  return (
    <View style={styles.container}>
      <Image source={{uri: 'http://94.247.179.59/img/1.JPG?r=sfYCe'}}
        style={ styles.backgroundImage } />
      <View>
        <Image source={{uri: 'http://94.247.179.59/img/1.JPG?r=sfYCe'}}
          style={ styles.image } />
        <Text>Titre chanson</Text>
        <Text>Artiste</Text>
      </View>
    </View>
  )
}

export default Player
