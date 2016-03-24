'use strict'
import React, {
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  WebView,
  Dimensions
} from 'react-native'

const HEADER = '#3b5998'
const BGWASH = 'rgba(255,255,255,0.8)'
const DISABLED_WASH = 'rgba(255,255,255,0.25)'
const DEFAULT_URL = 'http://dev.piiaf.com/article/787-moh-fier-repr-sentant-de-la-cit-phoc-enne-en-interview-dans-vision-d-cal-e'
const WEBSITE_HEADER_HEIGHT = 50

const WebViewExample = React.createClass({
  render: function() {
    return (
      <WebView
        automaticallyAdjustContentInsets={false}
        style={styles.webView}
        source={{uri: DEFAULT_URL}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        decelerationRate="normal"
        startInLoadingState={true}
        scalesPageToFit={true}
      />
    )
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 14,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -64
  },
  webView: {
    backgroundColor: BGWASH,
    height: Dimensions.get('window').height + 64 + 50,
    position: 'relative'
  },
  top: {
    backgroundColor: '#000',
    height: 50,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0
  }
})

export default WebViewExample
