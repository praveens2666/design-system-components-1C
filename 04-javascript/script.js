// Smooth scroll to sections
function scrollToSection(event) {
  event.preventDefault();
  const href = event.target.getAttribute('href');
  const section = document.querySelector(href);
  section.scrollIntoView({ behavior: 'smooth' });
}

// Highlight skill on hover
function highlightSkill(element) {
  element.classList.add('highlight');
}

function unhighlightSkill(element) {
  element.classList.remove('highlight');
}

// Toggle project details
function toggleProjectDetails(element) {
  const details = element.querySelector('.project-details');
  if (details.style.display === 'none') {
    details.style.display = 'block';
  } else {
    details.style.display = 'none';
  }
}

// Handle form submission
function handleSubmit(event) {
  event.preventDefault();
  const email = document.getElementById('emailInput').value;
  const message = document.getElementById('messageInput').value;
  
  alert(`Thank you! Your message has been sent.\nEmail: ${email}\nMessage: ${message}`);
  
  document.getElementById('emailInput').value = '';
  document.getElementById('messageInput').value = '';
}
