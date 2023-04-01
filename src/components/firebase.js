import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const app = firebase.initializeApp ({
    apiKey: "AIzaSyCR3vFzUEmD0_8nv20uiZqdsa42TZuZOqg",
  authDomain: "auth-101-a7446.firebaseapp.com",
  projectId: "auth-101-a7446",
  storageBucket: "auth-101-a7446.appspot.com",
  messagingSenderId: "312805705671",
  appId: "1:312805705671:web:be0f0277d5300da8a5bbe2"
})

const auth = app.auth();
export {auth};
export default app;