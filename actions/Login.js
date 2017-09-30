import Expo, { SecureStore } from 'expo';

import { LOGIN_SUCCESS, LOGIN_FAIL } from './types';

export const Login = () => async dispatch => {
	let token = await SecureStore.getItemAsync('google_token');
	if (token) {
		dispatch({ type: LOGIN_SUCCESS, payload: token });
	} else {
		signInWithGoogleAsync(dispatch);
	}
} 

async signInWithGoogleAsync = async dispatch => {
  try {
    const result = await Expo.Google.logInAsync({
      androidClientId: '89982648137-c2rljcnqddb0jtpk9pif9gl67dmamvc6.apps.googleusercontent.com',
      iosClientId: '89982648137-s0137hlvo7oai38rgmp2i9bmsno6o9vh.apps.googleusercontent.com',
      scopes: ['profile', 'email'],
    });

    if (result.type === 'success') {
      await SecureStore.setItemAsync('google_token', token);
      return dispatch({ type: LOGIN_SUCCESS, payload: result.accessToken});
    } else {
      return dispatch({ type: LOGIN_FAIL });
    }
  } catch(e) {
    return {error: true};
  }
}
