
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCSj30OuAx2ZHAWkGbl3QAUc6yUYC2d258",
    authDomain: "projeto-mdinvert.firebaseapp.com",
    projectId: "projeto-mdinvert",
    storageBucket: "projeto-mdinvert.appspot.com",
    messagingSenderId: "768149449344",
    appId: "1:768149449344:web:d8ba3776125b447a8a1465"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  export default app
