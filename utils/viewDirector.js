import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../components/buttons/loginButton';
import logoutButton from '../components/buttons/logoutButton';
import client from './client';
import startApp from './startApp';

const ViewDirectorBasedOnUserAuthStatus = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(client);
  }
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      startApp(user);
      logoutButton();
    } else {
      loginButton();
    }
  });
};

export default ViewDirectorBasedOnUserAuthStatus;
