import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBrtAPZ0rbFkVznMEKHi9YCFG4SAo9qJPE',
  authDomain: 'ancient-os.firebaseapp.com',
  projectId: 'ancient-os',
  storageBucket: 'ancient-os.appspot.com',
  messagingSenderId: '422885592689',
  appId: '1:422885592689:web:28313c6cbbff3ad7b295d0',
  measurementId: 'G-RSKG8NY6ZH'
}

export const app = initializeApp(firebaseConfig)

export const auth = getAuth()
