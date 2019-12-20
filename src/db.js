import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCeslAFfV4VHGGKR17NqZl7_MkT_6ysRe0",
  authDomain: "faynd1.firebaseapp.com",
  databaseURL: "https://faynd1.firebaseio.com",
  projectId: "faynd1",
  storageBucket: "faynd1.appspot.com",
  messagingSenderId: "545139393823",
  appId: "1:545139393823:web:d7e81ffc3ad4484e4c1c2a",
  measurementId: "G-44ZC94QFTC"
};

const db = firebase.initializeApp(firebaseConfig).firestore()
export default db



const { TimeStamp, GeoPoint } = firebase.firestore
export { TimeStamp, GeoPoint }