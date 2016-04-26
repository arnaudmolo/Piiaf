import React, { View, StyleSheet, Text } from 'react-native'
import List from './../../components/List'
import SegmentedControl from './../../components/SegmentedControl'

const style = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },
  el: {
    flex: 1
  }
})

const Timeline = (props) =>
  <View style={style.container}>
    <View style={{width: props.width}}>
      <SegmentedControl values={['Titres précédents', 'Programme', 'Replay']} selectedIndex={0} onChange={(e) => console.log(e)} />
    </View>
    <List style={style.el} />
  </View>

export default Timeline
