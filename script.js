const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});

const form = document.getElementById('contactForm');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const name = document.getElementById('name').value;
  const number = document.getElementById('number').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (!name || !number || !email || !message.trim()) {
    alert('Please fill in all required fields!');
    return;
  }

  const formData = {
    name,
    number,
    email,
    message,
  };

  fetch('https://your-dummy-api.com/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) { //If successfully sent, 
      console.log('Your message has been sent successfully!');
      form.reset(); // Clear the form after successful submission
    } else {
      alert('There was an error sending your message. Please try again later.');
    }
  })
});