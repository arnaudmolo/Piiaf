import React, { SegmentedControlIOS, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  control: {
    tintColor: '#FFF'
  }
})

const SegmentedControl = props =>
  <SegmentedControlIOS {...props} tintColor={'#FFF'} />

export default SegmentedControl
