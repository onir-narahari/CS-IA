import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";

  const firebaseConfig = {
    apiKey: "AIzaSyB9Zeozd3NMXBemFWLOnLYAOLLJdSeszXY",
    authDomain: "cs-sign-up.firebaseapp.com",
    databaseURL: "https://cs-sign-up-default-rtdb.firebaseio.com",
    projectId: "cs-sign-up",
    storageBucket: "cs-sign-up.appspot.com",
    messagingSenderId: "930023154030",
    appId: "1:930023154030:web:babc491f3e46f7095ea17f",
    measurementId: "G-V07C9L6HNC"
  };




  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
