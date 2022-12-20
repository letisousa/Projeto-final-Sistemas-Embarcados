import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

export default function WebView() {

  return (
    <View style={styles.container}>
      <View>
      <Button
        title="Sigaa"
        onPress={() => WebBrowser.openBrowserAsync('https://sigaa.ufpb.br/sigaa/public/home.jsf')}
        style={styles.button}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: 10,
  },
});