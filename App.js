import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';
const App = () => {
  return <WebView 
  source={{ uri: 'https://www.4waytechnologies.com/react-native-app-development' }} 
  />;
}

export default App

const styles = StyleSheet.create({})