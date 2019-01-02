import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  DeviceEventEmitter,
} from 'react-native';
export default class VideoScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: '视频',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="有趣视频"
        onPress={
          () => { 
            this.props.navigation.goBack() 
            DeviceEventEmitter.emit('refresh',{
              'newMessage':'新消息',
              'messageCount':5,
            })
          }
        }
      />
    );
  }
}