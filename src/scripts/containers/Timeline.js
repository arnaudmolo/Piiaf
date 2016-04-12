import React, { View } from 'react-native'
import List from './../../components/List'
import SegmentedControl from './../../components/SegmentedControl'

const Timeline = () =>
  <View>
    <SegmentedControl values={['Titres précédents', 'Programme', 'Replay']} selectedIndex={0} onChange={(e) => console.log(e)} />
    <List />
  </View>

export default Timeline
