import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCB9Q_Dzn5fsY08X-xIZ5MTc1wpnorwXE8',
  authDomain: 'taxdown-fee25.firebaseapp.com',
  projectId: 'taxdown-fee25',
  storageBucket: 'taxdown-fee25.appspot.com',
  messagingSenderId: '246974241716',
  appId: '1:246974241716:web:081d79bf3766271b11f0e1',
  measurementId: 'G-0CT85XDV1L',
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export {auth};
