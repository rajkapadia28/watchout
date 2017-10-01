import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';


import LoginScreen from './components/LoginScreen';
import CameraUnit from './components/CameraUnit';
import store from './store';

const MainNavigator =  StackNavigator({
    camera: { screen: CameraUnit },
    login: { screen: LoginScreen },
}, {headerMode: 'none'});

export default class App extends React.Component {
    render() {
	return (
		<Provider store={store}>
		<MainNavigator />
		</Provider>
	);
    }
}
