import React from 'react';
import {
  Dimensions,
  NativeModules,
  SafeAreaView,
  StyleSheet,
  requireNativeComponent,
} from 'react-native';
import {WebView} from 'react-native-webview';

const RCTCustomWebView: any = requireNativeComponent('RCTCustomWebView');
const {RCTCustomWebViewManager} = NativeModules;

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        nativeConfig={{
          component: RCTCustomWebView,
          viewManager: RCTCustomWebViewManager,
        }}
        startInLoadingState
        source={{uri: 'https://google.com'}}
        style={styles.webview}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default App;
