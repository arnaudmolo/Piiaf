import React, { View, TouchableOpacity, StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20
  },
  text: {
    fontSize: 20,
    color: 'white'
  },
  big: {
    color: '#FFF'
  }
})

const ToggleButton = (props = {playing: false}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        {props.playing
          ? <Text style={ [styles.text, !props.playing && styles.big] }>OFF</Text>
          : <Text style={ [styles.text, props.playing && styles.big] }>ON</Text>
        }
      </TouchableOpacity>
    </View>
  )
}

export default ToggleButton
