import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Timers from './components/Timers';

export default function App() {




  return (
    <View style={styles.container}>
      <Text>Better Lifts</Text>
      <Timers style={{ flex: `100%` }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPrimary: {
    backgroundColor: `#B53471`,
    color: `white`,
    padding: `1rem`,
  }
});
