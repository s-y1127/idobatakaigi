import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyB8jQtBHWDNSHRzkNILSld801iVzl5INSU',
  authDomain: 'idobatakaigi-b15ae.firebaseapp.com',
  projectId: 'idobatakaigi-b15ae',
  storageBucket: 'idobatakaigi-b15ae.appspot.com',
  messagingSenderId: '633275226497',
  appId: '1:633275226497:web:59ab0d37cfd08fef8c3080',
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messagesRef = database.ref('messages');

export const pushMessage = ({ name, text }) => {
  messagesRef.push({ name, text });
};
