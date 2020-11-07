import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyBMZannn_9FkgJHZcVLuCIGD8mobm1Tkc4',
    authDomain: 'lumos-webapp.firebaseapp.com',
    databaseURL: 'https://lumos-webapp.firebaseio.com',
    projectId: 'lumos-webapp',
    storageBucket: 'lumos-webapp.appspot.com',
    messagingSenderId: '257838454548',
    appId: '1:257838454548:web:052c1ec5d6ed56bd5b5401',
    measurementId: 'G-CQXZNKVRJ8',
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()

const { TimeStamp, GeoPoint } = firebase.firestore
export { TimeStamp, GeoPoint }
