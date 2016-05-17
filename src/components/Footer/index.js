import React, { Text, View, StyleSheet, Dimensions } from 'react-native'
import Button from './../Button'
import Toggle from './toggle'

const { scale, width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: 95 / scale,
    flexDirection: 'row'
  },
  leftSide: {
    height: height,
    width: 40 / scale
  },
  center: {
    height: height,
    width: 20,
    marginTop: 15 / scale
  },
  fat: {
    fontWeight: '800'
  },
  color: {
    textAlign: 'center',
    textAlignVertical: 'auto',
    color: 'white'
  },
  rightSide: {
    height: height,
    width: 40 / scale
  }
})

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <Button />
      </View>
      <View style={styles.center}>
        <Text style={[styles.color, styles.fat]}>Titre chanson</Text>
        <Text style={styles.color}>artiste - artiste</Text>
      </View>
      <View style={styles.rightSide} >
        <Toggle />
      </View>
    </View>
  )
}

export default Footer
