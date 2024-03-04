

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfdOSTQYr7ci9Xe7dQ7BRtYAXTRo3g-Vg",
  authDomain: "the-international-news-react.firebaseapp.com",
  projectId: "the-international-news-react",
  storageBucket: "the-international-news-react.appspot.com",
  messagingSenderId: "700114452643",
  appId: "1:700114452643:web:78ff9db650ebcaeddbff16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;