import React, {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20
  },
  text: {
    fontSize: 40,
  },
  big: {
    color: '#FFF'
  }
})

const ToggleButton = (props = {playing: false}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={ [styles.text, props.playing && styles.big] }>ON</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={ [styles.text, !props.playing && styles.big] }>OFF</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ToggleButton
