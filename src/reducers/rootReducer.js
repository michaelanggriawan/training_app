import trainingReducer from './trainingReducer';
import authReducer from './authReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    training: trainingReducer,
    firestoreReducer,
    firebase: firebaseReducer,
});

export default rootReducer;

