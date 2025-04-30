import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (!user) {
    // User is not logged in, redirect to logged-out homepage
    window.location.href = "/Homepage/Homepage.html";
  }
  // If user is logged in, allow access to community page
});
