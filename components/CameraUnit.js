import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Camera, Permissions } from 'expo';

import LoginScreen from './LoginScreen';

export default class CameraUnit extends React.Component {
  state = {
    hasCameraPermission: null,
      type: Camera.Constants.Type.back,
      token: null
  };

  async componentWillMount() {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      let token = Expo.SecureStore.getItemAsync('google_token');
      this.setState({ token: token, hasCameraPermission: status === 'granted' });
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (false && token === null) {
	return (
	    <View style={styles.container}>
        { 
            <View style={styles.content}>
            <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/COPWATCH_logo.svg/1200px-COPWATCH_logo.svg.png'}}
             style={styles.copwatchLogo} />
              <Text style={styles.text}>
                Welcome to WatchOut👮🏻👮🏽‍♀️ {'\n'}
                Please log in to continue {'\n'}
                to the awesomness
              </Text>
            </View>
        }
        {/* Login buttons */}
        <View style={styles.buttons}>
          <Icon.Button
            name="google"
            backgroundColor="#DD4B39"
        onPress={
	    this.props.Login
	}
            {...iconStyles}
        style={{alignItems: 'center', justifyContent: 'center'}}
          >
           Google
          </Icon.Button>
          <Icon.Button
          backgroundColor="white"
          ></Icon.Button>
        </View>
      </View>
	);
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
	      
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  });
                }}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}Flip{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}

const iconStyles = {
  borderRadius: 10,
  iconStyle: { paddingVertical: 5 },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    margin: 20,
  },
  copwatchLogo: {
    width: 250,
    height: 170
  },
  avatarImage: {
    borderRadius: 50,
    height: 100,
    width: 100,
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  text: {
    textAlign: 'center',
    color: '#333',
    marginBottom: 5,
  },
  buttons: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    margin: 20,
    marginBottom: 30,
  },
});
