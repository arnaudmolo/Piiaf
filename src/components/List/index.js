import React, { Image, View, Text, ListView, TouchableHighlight, StyleSheet, Dimensions, ScrollView } from 'react-native'
import {gray, lightGray, ultraLightGray} from './../../colors'

const temporary = (new Array(10)).fill().map((_, i) => ({title: `Ligne ${i + 1}`, artist: 'Artiste'}))
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 ==! r2})
const dataSource = ds.cloneWithRows(temporary)
const scale = Dimensions.get('window').scale

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 1,
    paddingBottom: 1,
    backgroundColor: gray,
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: lightGray
  },
  separatorContainer: {
    height: 1
  },
  thumb: {
    width: 85 / scale,
    height: 85 / scale,
    backgroundColor: '#CCCCCC'
  },
  title: {
    flex: 1,
    color: '#FFF',
    fontWeight: "600"
  },
  artist: {
    flex: 1,
    color: ultraLightGray,
    fontSize: 30 / scale
  },
  textContainer: {
    paddingLeft: 25 / scale,
    paddingTop: 4 / scale
  }
})

const Separator = (sectionID, rowID) =>
  <View key={`${sectionID}-${rowID}`} style={styles.separator} />

const Row = (rowData, sectionID, rowID) =>
  <TouchableHighlight onPress={e => console.log(rowID)}>
    <View style={styles.row}>
      <View style={styles.row}>
        <Image source={{uri: 'https://beerhold.it/85/85'}} style={styles.thumb} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            {rowData.title}
          </Text>
          <Text style={styles.artist}>
            {rowData.artist}
          </Text>
        </View>
      </View>
    </View>
  </TouchableHighlight>

const List = (props) =>
  <ScrollView style={props.style}>
    <ListView
      dataSource={dataSource}
      renderRow={Row}
      renderSeparator={Separator}
    />
  </ScrollView>

export default List;
