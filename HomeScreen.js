/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    DeviceEventEmitter,
} from 'react-native';

export default class HomeScreen extends Component {
    constructor(props){
        super(props);
        this.state = ({
            newMessage:'',
            messageCount:0,
        })
    }
    static navigationOptions = {
        title: '首页',
      };
    _refresh=()=>{
        console.log('refresh')
        alert('刷新哈!')
    }
    componentDidMount(){
        this.refreshSubScription = DeviceEventEmitter.addListener('refresh',(message)=>{
            if(message)
            {
                alert('收到通知啦!')
                this.setState({
                    newMessage:message.message,
                    messageCount:message.messageCount,
                })
            }
        })
    }
    componentWillUnmount(){
        this.refreshSubScription.remove();
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Button
                    onPress={()=>{
                        this.props.navigation.navigate('NewsScreen',{
                            refresh:()=>{
                             this._refresh();
                            },
                        })
                    }}
                    title="新闻"
                />
                <Text style={{marginTop:20}}onPress={()=>{this.props.navigation.navigate('VideoScreen')}}>
                视频
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
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

