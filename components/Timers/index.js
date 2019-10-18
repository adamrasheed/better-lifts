import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

const timeValues = {
  shortTime: 90,
  longTime: 180
}

const styles = StyleSheet.create({
  button: {
    color: `white`,
    justifyContent: `center`,
    textAlign: `center`,
    fontWeight: `600`,
    padding: 15,
    margin: 10
  },
  primary: {
    backgroundColor: `#B53471`,
    color: `white`,
  },
  secondary: {
    backgroundColor: `#1289A7`,
    color: `#fff`
  }
})

class Timers extends Component {
  state = {
    shortCount: 0,
    longCount: 0,
  }

  componentDidMount() {

  }
  render() {
    const { shortCount, longCount } = this.state
    const handleShortTimer = () => {
      setTimeout(() => {
        this.setState({ shortCount: shortCount + 1 })
      }, 400);
    }

    const handleLongTimer = () => {
      this.setState({ longCount: longCount + 1 })
    }
    return (
      <>
        <View>
          <Text>Short Count: {this.state.shortCount}</Text>
          <Text>Long Count: {this.state.longCount}</Text>
        </View>
        <View style={{ display: `flex`, alignItems: `center` }}>
          <TouchableOpacity onPress={handleShortTimer}>
            <Text style={[styles.button, styles.primary]}>Short Timer</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLongTimer}>
            <Text style={[styles.button, styles.secondary]}>Long Timer</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

export default Timers;