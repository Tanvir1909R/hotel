// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDor_Qm6fsjRI_SzyqFGaD7SuNFspA9_mg",
  authDomain: "hotel-transylvania-71f3d.firebaseapp.com",
  projectId: "hotel-transylvania-71f3d",
  storageBucket: "hotel-transylvania-71f3d.appspot.com",
  messagingSenderId: "67162103615",
  appId: "1:67162103615:web:10fa36f36ab1f52b177d8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app