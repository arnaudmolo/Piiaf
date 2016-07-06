import { StyleSheet, Dimensions } from 'react-native'
import { ApplicationStyles, Metrics } from '../../Themes/'

const {height, width} = Dimensions.get('window')

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  bluredView: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    width: height,
    height: height
  },
  image: {
    top: 0,
    width: width,
    height: 400,
    marginBottom: 15
  },
  text: {
    color: '#FFF'
  },
  playerContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  slider: {
    width: Metrics.screenWidth - 100
  },
  big: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})
