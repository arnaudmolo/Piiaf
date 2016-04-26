import React, { Image, View, Text, ListView, TouchableHighlight, StyleSheet, Dimensions, ScrollView } from 'react-native'

const temporary = (new Array(10)).fill().map((_, i) => `Ligne ${i + 1}`)
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 ==! r2})
const dataSource = ds.cloneWithRows(temporary)
const scale = Dimensions.get('window').scale

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 1,
    paddingBottom: 1,
    backgroundColor: '#000',
  },
  listContainer: {
    backgroundColor: '#000',
    paddingLeft: 25 / scale,
    paddingRight: 5 / scale
  },
  separator: {
    height: 1,
    backgroundColor: '#FFF'
  },
  separatorContainer: {
    height: 1,
    backgroundColor: '#FFF'
  },
  thumb: {
    width: 85 / scale,
    height: 85 / scale,
    backgroundColor: '#CCCCCC'
  },
  text: {
    flex: 1,
    color: '#CCCCCC'
  },
})

const Separator = (sectionID, rowID) =>
  <View key={`${sectionID}-${rowID}`} style={styles.separatorContainer} >
    <View style={styles.separator} />
  </View>

const Row = (rowData, sectionID, rowID) =>
  <TouchableHighlight onPress={e => console.log(rowID)}>
    <View style={styles.row}>
      <View style={styles.row}>
        <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={styles.thumb} />
        <Text style={styles.text}>
          {rowData}
        </Text>
      </View>
    </View>
  </TouchableHighlight>

const List = (props) =>
  <ScrollView style={props.style}>
    <ListView
      style={styles.listContainer}
      dataSource={dataSource}
      renderRow={Row}
      renderSeparator={Separator}
    />
  </ScrollView>

export default List;
