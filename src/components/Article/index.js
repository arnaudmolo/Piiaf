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
  webView: {
    backgroundColor: BGWASH,
  }
})

export default WebViewExample
