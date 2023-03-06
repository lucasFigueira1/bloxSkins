import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBbYITpuAhUSkLRJuvSEDxw39R183eZYVs',
  authDomain: 'bloxskins.firebaseapp.com',
  projectId: 'bloxskins',
  storageBucket: 'bloxskins.appspot.com',
  messagingSenderId: '498770674606',
  appId: '1:498770674606:web:ea6ad914b945db3863be3f'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
