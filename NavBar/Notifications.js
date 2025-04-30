document.addEventListener('DOMContentLoaded', () => {
  if (Notification.permission !== 'granted') {
    Notification.requestPermission().then(permission => {
      console.log("Notification permission:", permission);
    });
  }
});

function showNotification(title, body) {
  if (Notification.permission === 'granted' && document.hidden) {
    new Notification(title, { body: body, icon: '/Images/MP_Logo.png' });
  }
}

// Reminder interval in milliseconds (default 12 hours)
const REMINDER_INTERVAL = 1000 * 60 * 60 * 12;

let reminderTime = null;

// Load reminder time from localStorage if set
document.addEventListener('DOMContentLoaded', () => {
  const storedTime = localStorage.getItem('workoutReminder');
  if (storedTime) {
    reminderTime = storedTime;
    console.log(`Loaded reminder time: ${reminderTime}`);
  }
});

// Reminder function
function sendWorkoutReminder() {
  showNotification("Workout Reminder", "Don't forget to update your fitness goal progress today! 🏋️");
}

// Check every minute if it's reminder time
setInterval(() => {
  if (Notification.permission !== 'granted') return;

  const now = new Date();
  const currentTime = now.toTimeString().slice(0, 5);

  if (reminderTime && currentTime === reminderTime) {
    sendWorkoutReminder();
  }
}, 60000);

// Export function to set reminder time from UI
function setReminderTime(time) {
  reminderTime = time;
  localStorage.setItem('workoutReminder', time);
  alert(`Reminder set for ${time}`);
}

// Expose setReminderTime globally for UI to call
window.setReminderTime = setReminderTime;
