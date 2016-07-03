import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/PlayerToggleStyle'

export default class PlayerToggle extends React.Component {

  // // Prop type warnings
  // static propTypes = {
  //   someProperty: React.PropTypes.object,
  //   someSetting: React.PropTypes.bool.isRequired
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render (props = this.props) {
    return (
      <View style={styles.groupContainer}>
        <TouchableOpacity onPress={props.onTouch}>
          <Text style={[styles.text, props.playing && styles.big]}>ON</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.onTouch}>
          <Text style={[styles.text, !props.playing && styles.big]}>OFF</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
