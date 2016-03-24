import React, { Image, View, Text, ListView, TouchableHighlight, StyleSheet, Dimensions, ScrollView } from 'react-native'

const temporary = (new Array(50)).fill().map((_, i) => `Ligne ${i + 1}`)
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 ==! r2})
const dataSource = ds.cloneWithRows(temporary)

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#000',
  },
  listContainer: {
    backgroundColor: '#000',
    paddingLeft: 5,
    paddingRight: 5
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC'
  },
  separatorContainer: {
    height: 1,
    backgroundColor: '#000'
  },
  thumb: {
    width: 64,
    height: 64,
    backgroundColor: '#CCCCCC'
  },
  text: {
    flex: 1,
    color: '#CCCCCC'
  },
})

const Separator = (sectionID, rowID) => {
  return (
    <View key={`${sectionID}-${rowID}`} style={styles.separatorContainer} ><View style={styles.separator} /></View>
  )
}

const Row = (rowData, sectionID, rowID) => {
  return (
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
  )
}

const List = (props) => {
  return (
    <ScrollView>
      <ListView
        style={styles.listContainer}
        dataSource={dataSource}
        renderRow={Row}
        renderSeparator={Separator}
      />
    </ScrollView>
  )
}

export default List;
