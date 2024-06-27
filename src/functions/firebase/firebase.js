import { initializeApp } from 'firebase-admin/app';
import { getAnalytics } from "firebase/analytics";
const firebaseApiKey = import.meta.env.VITE_FIREBASE_API_KEY;

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: `${firebaseApiKey}`,
  authDomain: "statify-3b944.firebaseapp.com",
  projectId: "statify-3b944",
  storageBucket: "statify-3b944.appspot.com",
  messagingSenderId: "125446827393",
  appId: "1:125446827393:web:d9914d9e557cb7d4f2cc80",
  measurementId: "G-N2F083E5WF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);