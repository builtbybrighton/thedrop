// Dark/Light Mode Toggle
const toggleButton = document.getElementById("mode-toggle");
const body = document.body;

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});

// Placeholder for form handling (Recommend a Guest)
document.getElementById("recommend-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thanks for recommending a guest! We'll take a look.");
  e.target.reset();
});

// Placeholder for Mailchimp form (optional integration later)
document.getElementById("mailchimp-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("You're on The Drop list! 📨");
  e.target.reset();
});
