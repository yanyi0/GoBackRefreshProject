/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class AccountScreen extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: '我的',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>
          登录/注册
          </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
