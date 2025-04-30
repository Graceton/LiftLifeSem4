import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC5Gw4tAAJRf4lT1VIttjUyzDd0AdyyOso",
  authDomain: "liftlife-11411.firebaseapp.com",
  projectId: "liftlife-11411",
  storageBucket: "liftlife-11411.firebasestorage.app",
  messagingSenderId: "949369652559",
  appId: "1:949369652559:web:85e9ed4b14505d3172313a",
  measurementId: "G-YETDPYMC2S"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.login = function() {
  document.getElementById('login').style.display = 'flex';
  document.getElementById('google-auth').style.display = 'none';
  document.getElementById('btn').style.left = '0';
}

window.googleAuth = function() {
  document.getElementById('login').style.display = 'none';
  document.getElementById('google-auth').style.display = 'flex';
  document.getElementById('btn').style.left = '50%';
}

window.handleLogin = async function(event) {
  event.preventDefault();
  const email = document.querySelector('#login input[type="email"]').value;
  const password = document.querySelector('#login input[type="password"]').value;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = '/Homepage/Homepage2.html';
  } catch (error) {
    alert('Login failed: ' + error.message);
  }
}

window.handleGoogleAuth = async function() {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
    alert('Google registration successful! Please log in manually.');
    window.showLogin(); // Switch to login form
  } catch (error) {
    alert('Google sign-in failed: ' + error.message);
  }
}

window.showRegister = function() {
  document.getElementById('login').style.display = 'none';
  document.getElementById('register').style.display = 'flex';
  document.getElementById('google-auth').style.display = 'none';
  document.getElementById('btn').style.left = '100%'; // adjust as needed for your UI
}

window.handleRegister = async function(event) {
  event.preventDefault();
  const email = document.querySelector('#register input[type="email"]').value;
  const password = document.querySelector('#register input[type="password"]').value;
  try {
    await createUserWithEmailAndPassword(auth, email, password);

    alert('Registration successful! You can now log in.');
    window.showLogin(); // Switch back to login form
//    window.location.href = '/Homepage/Homepage2.html'; // Redirect after registration
  } catch (error) {
    alert('Registration failed: ' + error.message);
  }
}

window.showLogin = function() {
  document.getElementById('login').style.display = 'flex';
  document.getElementById('register').style.display = 'none';
  document.getElementById('google-auth').style.display = 'none';
  document.getElementById('btn').style.left = '0';
}