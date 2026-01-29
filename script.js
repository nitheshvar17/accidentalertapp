function sendSOS() {

  navigator.geolocation.getCurrentPosition(pos => {

    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;

    const phone = document.getElementById("phone").value;

    const message = `EMERGENCY SOS!
Location: https://maps.google.com/?q=${lat},${lng}`;

    const smsLink = `sms:${phone}?body=${encodeURIComponent(message)}`;

    window.location.href = smsLink;

  });
}
