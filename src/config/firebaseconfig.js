import firebase from 'firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBRWwiC8msW2y0RlFxtwEBMT-uKf4onlh8",
    authDomain: "helpgig-53146.firebaseapp.com",
    projectId: "helpgig-53146",
    storageBucket: "helpgig-53146.appspot.com",
    messagingSenderId: "337258529537",
    appId: "1:337258529537:web:ab3eae71d08e79bced9100",
    measurementId: "G-W0KG3L8J5T"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);