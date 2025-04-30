import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

const auth = getAuth();

const pageMap = {
  "/Homepage/Homepage.html": "/Homepage/Homepage2.html",
  "/Core Exercises/Core_Exer.html": "/Core Exercises/Core_Exer2.html",
  "/Calisthenics/Calisthenics.html": "/Calisthenics/Calisthenics2.html",
  "/Leg Exercises/Leg_Exer.html": "/Leg Exercises/Leg_Exer2.html",
  "/Yoga Exercises/Yoga.html": "/Yoga Exercises/Yoga2.html",
  "/Arm Exercises/Arm_Exer.html": "/Arm Exercises/Arm_Exer2.html",
  "/NavBar/Goals.html": "/NavBar/Goals.html", // same page, but could be updated if needed
  "/NavBar/Profile.html": "/NavBar/Profile.html",
  "/NavBar/community.html": "/NavBar/community.html"
};

function updateLinks() {
  const links = document.querySelectorAll('a[href]');
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (pageMap[href]) {
      link.setAttribute('href', pageMap[href]);
    }
  });
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    updateLinks();
  }
});
