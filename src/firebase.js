import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBRaUykkiYdugFLzh95D_PxyCftB7xsUyk',
  authDomain: 'slack-clone-30e34.firebaseapp.com',
  projectId: 'slack-clone-30e34',
  storageBucket: 'slack-clone-30e34.appspot.com',
  messagingSenderId: '464108681848',
  appId: '1:464108681848:web:9b894a846a11a1a68c8b8d',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
