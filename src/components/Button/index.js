import React, { View, TouchableHighlight, Image, StyleSheet, Dimensions } from 'react-native'

const { scale } = Dimensions.get('window')


const styles = StyleSheet.create({
  button: {
    height: 40 / scale,
    width: 70 / scale,
    top: 10
  }
})

export default function Button (props) {
  return (
    <TouchableHighlight onPress={props.onPress} style={styles.button}>
      <Image source={require('./../Player/business.png')} style={styles.button}/>
    </TouchableHighlight>
  )
}
