/**
 * 初始化firebase
 * 主要作用：远端数据库
 */
import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCrssYby5rDfvmSuiHWoy6LBHcB0MZ1FjI",
  authDomain: "weather-app-af910.firebaseapp.com",
  projectId: "weather-app-af910",
  storageBucket: "weather-app-af910.appspot.com",
  messagingSenderId: "1025316765537",
  appId: "1:1025316765537:web:c890e968260a3eb7aa4f20"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore()