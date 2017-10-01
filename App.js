import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';


import LoginScreen from './components/LoginScreen';
import CameraUnit from './components/CameraUnit';
import store from './store';

const MainNavigator =  StackNavigator({
    login: { screen: LoginScreen },
    camera: { screen: CameraUnit }
});

export default class App extends React.Component {
    render() {
	return (
		<Provider store={store}>
		<MainNavigator />
		</Provider>
	);
    }
}
