import React, { PropTypes } from 'react'
import { View, Text, LayoutAnimation, Keyboard, Image } from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import { Metrics } from '../Themes'
import PlayerToggle from '../Components/PlayerToggle'
// external libs
import { BlurView } from 'react-native-blur'

// Styles
import styles from './Styles/PlayerStyle'

class Player extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      visibleHeight: Metrics.screenHeight
    }
  }

  static propTypes = {
    navigator: PropTypes.object.isRequired
  }

  componentWillMount () {
    // Using keyboardWillShow/Hide looks 1,000 times better, but doesn't work on Android
    // TODO: Revisit this if Android begins to support - https://github.com/facebook/react-native/issues/3468
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow.bind(this))
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide.bind(this))
    // Configure nav button
    this.props.navigator.state.tapHamburger = () => {
      this.props.navigator.drawer.toggle()
    }
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }

  keyboardDidShow (e) {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    let newSize = Metrics.screenHeight - e.endCoordinates.height
    this.setState({
      visibleHeight: newSize
    })
  }

  keyboardDidHide (e) {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.setState({
      visibleHeight: Metrics.screenHeight
    })
  }

  render (props = this.props) {
    const uri = 'http://94.247.179.59/img/1.JPG?r=' + Math.random()
    return (
      <View style={styles.container}>
        <Image source={{uri}} style={styles.bluredView}>
          <BlurView blurType='dark' style={styles.backgroundImage} />
        </Image>
        <View style={styles.playerContainer}>
          <Image source={{uri}}
            style={styles.image} />
          <Text style={[styles.text, styles.big]} >Titre chanson</Text>
          <Text style={styles.text} >Artiste</Text>
          <PlayerToggle playing={props.playing} onTouch={props.togglePlay} />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return state.player
}

export default connect(mapStateToProps, {togglePlay: Actions.togglePlay})(Player)
