import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

import config from './config';

// Initialize firebase instance
const app = firebase.initializeApp(config);

const storage = app.storage();

const firestore = app.firestore();

const SERVER_TIMESTAMP = firebase.firestore.FieldValue.serverTimestamp();
const DELETE_FIELD = firebase.firestore.FieldValue.delete();

export default app;

export { storage, firestore, SERVER_TIMESTAMP, DELETE_FIELD };
