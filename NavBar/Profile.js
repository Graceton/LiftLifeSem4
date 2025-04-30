import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import { signOut } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

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
const db = getFirestore(app);
const auth = getAuth(app);

window.saveProfile = async function() {
  onAuthStateChanged(auth, async (user) => {
    if (!user) {
      alert("You must be logged in to save your profile.");
      return;
    }
    const name = document.querySelector('.profile-header input[type="text"]').value;
    const email = document.querySelector('.profile-details input[type="email"]').value;
    const age = document.querySelector('.profile-details input[type="number"]').value;
    const gender = document.querySelector('.profile-details input[placeholder="Gender"]').value;
    const medical = document.querySelector('.profile-details input[placeholder="Medical Condition (Fit / not Fit)"]').value;
    const height = document.querySelector('.profile-details input[placeholder="Height"]').value;
    const weight = document.querySelector('.profile-details input[placeholder="Weight"]').value;
    const currentGoal = document.getElementById('current-goal').value;
    const completedGoals = document.getElementById('completed-goals').value;

    try {
      await setDoc(doc(db, "users", user.uid), {
        name,
        email,
        age,
        gender,
        medical,
        height,
        weight,
        currentGoal,
        completedGoals
      });
      alert("Profile saved successfully!");
    } catch (error) {
      alert("Error saving profile: " + error.message);
    }
  });
}

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const userRef = doc(db, "users", user.uid);
    const userDoc = await getDoc(userRef);
    if (!userDoc.exists()) {
      // Create user doc with email and other fields as null
      await setDoc(userRef, {
        email: user.email,
        name: null,
        age: null,
        gender: null,
        medical: null,
        height: null,
        weight: null,
        currentGoal: null,
        completedGoals: null
      });
    }
    // Load profile data if it exists
    if (userDoc.exists()) {
      const data = userDoc.data();
      document.querySelector('.profile-header input[type="text"]').value = data.name || "";
      document.querySelector('.profile-details input[type="email"]').value = data.email || "";
      document.querySelector('.profile-details input[type="number"]').value = data.age || "";
      document.querySelector('.profile-details input[placeholder="Gender"]').value = data.gender || "";
      document.querySelector('.profile-details input[placeholder="Medical Condition (Fit / not Fit)"]').value = data.medical || "";
      document.querySelector('.profile-details input[placeholder="Height"]').value = data.height || "";
      document.querySelector('.profile-details input[placeholder="Weight"]').value = data.weight || "";
      document.getElementById('current-goal').value = data.currentGoal || "";
      document.getElementById('completed-goals').value = data.completedGoals || "";
    }
  }
});

window.logout = async function() {
  try {
    await signOut(auth);
    window.location.href = "/Homepage/Login.html";
  } catch (error) {
    alert("Logout failed: " + error.message);
  }
}