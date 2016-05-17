import React, { View, StyleSheet, Text, Dimensions } from 'react-native'
import List from './../../components/List'
import SegmentedControl from './../../components/SegmentedControl'

import {gray} from './../../colors'
const scale = Dimensions.get('window').scale

const style = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingLeft: 25 / scale,
    paddingRight: 25 / scale
  },
  list: {
    backgroundColor: gray
  },
  dropbottom: {
    marginBottom: 20 / scale
  }
})

const Timeline = (props) =>
  <View>
    <View style={[style.container, style.dropbottom]}>
      <SegmentedControl values={['Titres précédents', 'Programme', 'Replay']} selectedIndex={0} />
    </View>
    <List style={[style.container, style.list]} />
  </View>

export default Timeline
