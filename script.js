// JavaScript for displaying greeting based on time of day
function displayGreeting() {
  const greetingElement = document.getElementById('greeting');
  const hours = new Date().getHours();
  let greeting = '';

  if (hours < 12) {
    greeting = 'Good morning!';
  } else if (hours < 18) {
    greeting = 'Good afternoon!';
  } else {
    greeting = 'Good evening!';
  }

  greetingElement.textContent = greeting;
}

// Calling the greeting function when the page loads
window.onload = displayGreeting;

// JavaScript for button interaction
document.getElementById('alertButton').addEventListener('click', function() {
  alert('Surprise! You clicked the button.');
  // Or, we could dynamically update the page:
  // document.getElementById('interaction').innerHTML = '<p>You clicked the button!</p>';
});
// Read More button logic
document.getElementById('readMoreBtn').addEventListener('click', function () {
  const moreText = document.getElementById('moreBio');

  if (moreText.style.display === 'none') {
    moreText.style.display = 'block';
    this.textContent = 'Read Less';
  } else {
    moreText.style.display = 'none';
    this.textContent = 'Read More';
  }
  
 // Newsletter form validation with error messages
document.getElementById('newsletterForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent page reload

  const name = document.getElementById('userName').value.trim();
  const email = document.getElementById('userEmail').value.trim();
  const message = document.getElementById('formMessage');

  // Reset styles
  message.style.color = 'red';

  // Regex for basic email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validation logic
  if (!name && !email) {
    message.textContent = 'Please enter your name and email.';
  } else if (!name) {
    message.textContent = 'Please enter your name.';
  } else if (!email) {
    message.textContent = 'Please enter your email.';
  } else if (!emailRegex.test(email)) {
    message.textContent = 'That doesn’t look like a valid email.';
  } else {
    message.style.color = 'green';
    message.textContent = `✅ Thanks, ${name}! You’ve been subscribed.`;

    // Reset form
    document.getElementById('newsletterForm').reset();
  }

  // Clear the message after 4 seconds
  setTimeout(() => {
    message.textContent = '';
  }, 4000);
});

});

