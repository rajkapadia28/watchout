import React, { Component } from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Platform,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
//import SafariView from 'react-native-safari-view';
import Expo from 'expo';
import { connect } from 'react-redux';

import * as actions from '../actions';

class LoginScreen extends Component {
    state = { token: null }
    async componentWilMount() {
      let token = Expo.SecureStore.getItemAsync('google_token');
	if (token) {
      this.props.navigation.navigate('camera');
      this.setState({ token });
    } else {
      this.setState({ token: false });
    }
    }
    
   componentWillReceiveProps(nextProps) {
    if (nextProps !== null) {
	this.onAuthComplete(nextProps);
      }
   }
    onAuthComplete(props) {
    if (props.token) {
      this.props.navigation.navigate('camera');
    }
  }
    
    render() {
	//if (this.state.token === null) {
      //return <Expo.AppLoading />;
    //}
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


function mapStateToProps({ auth }) {
    return { token: auth.token };
}
export default connect(mapStateToProps, actions)(LoginScreen);

/*
import React, { Component } from 'react';
import {
    Image,
    Linking,
    StyleSheet,
    Platform,
    Text,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import SafariView from 'react-native-safari-view';
import { connect } from 'react-redux';

import * as actions from '../actions';

class LoginScreen extends Component {

    state = {
        user: undefined, // user has not logged in yet
    };

    // Set up Linking
    // componentDidMount() {
    //     // Add event listener to handle OAuthLogin:// URLs
    //     Linking.addEventListener('url', this.handleOpenURL);
    //     // Launched from an external URL
    //     Linking.getInitialURL().then((url) => {
    //         if (url) {
    //             this.handleOpenURL({ url });
    //         }
    //     });
    // };

    // componentWillUnmount() {
    //     // Remove event listener
    //     Linking.removeEventListener('url', this.handleOpenURL);
    // };

    // handleOpenURL = ({ url }) => {
    //     // Extract stringified user string out of the URL
    //     const [, user_string] = url.match(/user=([^#]+)/);
    //     this.setState({
    //         // Decode the user string and parse it into JSON
    //         user: JSON.parse(decodeURI(user_string))
    //     });
    //     if (Platform.OS === 'ios') {
    //         SafariView.dismiss();
    //     }
    // };

    // Handle Login with Facebook button tap
    // loginWithFacebook = () => this.openURL('http://localhost:3000/auth/facebook');

    // Handle Login with Google button tap
    // loginWithGoogle = () => this.openURL('http://localhost:3000/auth/google');

    // Open URL in a browser
    // openURL = (url) => {
    //     // Use SafariView on iOS
    //     if (Platform.OS === 'ios') {
    //         SafariView.show({
    //             url: url,
    //             fromBottom: true,
    //         });
    //     }
    //     // Or Linking.openURL on Android
    //     else {
    //         Linking.openURL(url);
    //     }
    // };
    componentWillRecieveProps(nextProps) {
        this.props.navigation.navigate('camera');
    }
    render() {
      const { user } = this.state;
      return (
	<View style = { styles.container } > {
            user ? // Show user info if already logged in
            <View style = { styles.content } >
            <Text style = { styles.header } >
                Welcome { user.name }!
            </Text>
		<View style = { styles.avatar } >
                <Image source = {
                    { uri: user.avatar }
                }
                style = { styles.avatarImage }/> </View > </View> : / / Show Please log in message
                if not <View style = { styles.content } >
                <Image source = {
                    { uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/COPWATCH_logo.svg/1200px-COPWATCH_logo.svg.png' }
                } style = { styles.copwatchLogo } />
		<Text style = { styles.text } >
                Welcome to WatchOut👮🏻👮🏽‍♀️ { '\n' }
                Please log in to
                continue { '\n' }
            to the awesomness
	    </Text> </View >
        } { 
// Login buttons  
}
	      <View style = { styles.buttons } >
            <
            Icon.Button name = "google"
            backgroundColor = "#DD4B39"
            onPress = { this.props.Login } {...iconStyles }
            style = {
                { alignItems: 'center' }
            } >
              Google </Icon.Button>
	      <Icon.Button backgroundColor = "white" >
            </Icon.Button>
	      </View >
	      </View>
        );
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

function mapStateToProps({ auth }) {
    return { token: auth.token };
}
export default connect(mapStateToProps, actions)(LoginScreen);
*/
