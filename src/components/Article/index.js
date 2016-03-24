'use strict'
import React, { WebView } from 'react-native'

const DEFAULT_URL = 'http://dev.piiaf.com/article/787-moh-fier-repr-sentant-de-la-cit-phoc-enne-en-interview-dans-vision-d-cal-e'

const Article = ({url = DEFAULT_URL}) =>
  <WebView
    automaticallyAdjustContentInsets={false}
    source={{uri: url}}
    javaScriptEnabled={true}
    domStorageEnabled={true}
    decelerationRate="normal"
    startInLoadingState={true}
    scalesPageToFit={true}
  />

export default Article
