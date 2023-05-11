const questionInput = document.getElementById("question");
const submitButton = document.getElementById("submit");

questionInput.addEventListener("input", function() {
  if (questionInput.value.trim().length > 0) {
    submitButton.style.display = "block";
  } else {
    submitButton.style.display = "none";
  }
});

const submitBtn = document.getElementById('submit');
const question = document.getElementById('question');

submitBtn.addEventListener('click', function(e) {
  e.preventDefault(); // prevent default button behavior
  if (question.value.trim().length === 0) {
    return; // do nothing if question input is empty
  }

  const formData = new FormData();
  formData.append('question', question.value);
  fetch('https://formspree.io/f/xwkjzpak', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      alert('Message sent successfully!');
      question.value = '';
      submitBtn.style.display = 'none';
    } else {
      alert('Oops! There was a problem sending your message.');
    }
  })
  .catch(error => {
    console.error('Error sending message:', error);
    alert('Oops! There was a problem sending your message.');
  });
});

if (document.forms.length > 0) {
  const form = document.forms[0];
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent default form submission behavior
  });
}
