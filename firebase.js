// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAXwyhDKEzSToQH56JNJNWDJDnObl4Sq_0",
  authDomain: "interviewmasteryhub-bf0e2.firebaseapp.com",
  projectId: "interviewmasteryhub-bf0e2",
  storageBucket: "interviewmasteryhub-bf0e2.firebasestorage.app",
  messagingSenderId: "818885694064",
  appId: "1:818885694064:web:3b390dac10ef3a7e785ab5",
  measurementId: "G-GCT7XJRLVK"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;