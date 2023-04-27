async function get_ip_address() {
  const response = await fetch('https://api.ipify.org');
  const ip = await response.text();
  return ip;
}
alert('hey')
window.location.replace("https://github.com/AngleLaPuta");