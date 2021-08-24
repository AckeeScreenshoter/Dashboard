import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';
import config from './config';
//  TODO refactor
// Initialize firebase instance
const app = firebase.initializeApp(config);

const storage = app.storage();
const firestore = app.firestore();
export const auth = app.auth();

const SERVER_TIMESTAMP = firebase.firestore.FieldValue.serverTimestamp();
const DELETE_FIELD = firebase.firestore.FieldValue.delete();

export default app;

export { storage, firestore, SERVER_TIMESTAMP, DELETE_FIELD };
const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({
    hd: 'ackee.cz',
});

export const AuthProviders = {
    google: googleProvider,
};
