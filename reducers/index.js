import { combineReducers } from 'redux';

import { LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/types';

const auth = (state = {}, action) => {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return { token: action.payload };
		case LOGIN_FAIL:
			return { token: null };
		default:
			return state;
	}
}

export default combineReducers({auth});
