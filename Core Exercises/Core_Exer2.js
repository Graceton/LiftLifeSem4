import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (!user) {
    // User is not logged in, redirect to logged-out core exercises page
    window.location.href = "/Core Exercises/Core_Exer.html";
  }
  // If user is logged in, allow access to Core_Exer2.html
});

// Existing exercise input event listeners can be added here if needed
document.addEventListener("DOMContentLoaded", () => {
    const plankInput = document.getElementById("planks-minutes");
    const crunchesInput = document.getElementById("crunches-sets");
    const legLiftsInput = document.getElementById("leg-lifts-sets");

    plankInput.addEventListener("input", () => {
        console.log("Minutes done for Planks:", plankInput.value);
    });

    crunchesInput.addEventListener("input", () => {
        console.log("Sets done for Crunches:", crunchesInput.value);
    });

    legLiftsInput.addEventListener("input", () => {
        console.log("Sets done for Leg Lifts:", legLiftsInput.value);
    });
});
