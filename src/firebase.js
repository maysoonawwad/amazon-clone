import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKmZIp8IWgQvkBPzdd3I_5BuBxT9C4sW8",
  authDomain: "fir-fb010.firebaseapp.com",
  projectId: "fir-fb010",
  storageBucket: "fir-fb010.appspot.com",
  messagingSenderId: "582399866621",
  appId: "1:582399866621:web:a401b1042c75dc8355b094"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
