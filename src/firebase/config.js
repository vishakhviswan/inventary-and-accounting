import { initializeApp } from "firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKXuPnSy6Omk_wBpgHEtGW35r11Xad0Uo",
  authDomain: "vlc-accounting-app.firebaseapp.com",
  projectId: "vlc-accounting-app",
  storageBucket: "vlc-accounting-app.appspot.com",
  messagingSenderId: "787838262015",
  appId: "1:787838262015:web:7869d15468f30e41c5caca",
  measurementId: "G-ND85Y2SHTW",
};

const firebase = initializeApp(firebaseConfig);
export default firebase;