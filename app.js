var map = L.map('map').setView([0, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
var marker = L.marker([0, 0]).addTo(map);

window.userLat = 0;
window.userLng = 0;

if (navigator.geolocation) {
    navigator.geolocation.watchPosition(position => {
        window.userLat = position.coords.latitude;
        window.userLng = position.coords.longitude;
        map.setView([window.userLat, window.userLng], 16);
        marker.setLatLng([window.userLat, window.userLng]);
    }, null, { enableHighAccuracy: true });
}

function sendManualSOS() {
    document.body.style.backgroundColor = "#d32f2f";
    document.getElementById('status').innerText = "🚨 ALERT SENT TO POLICE & HOSPITAL";

    const name = document.getElementById('userName').value || "Manual User";
    const phone = document.getElementById('userPhone').value || "No Phone";
    const mapsLink = `https://www.google.com/maps?q=${window.userLat},${window.userLng}`;

    const formURL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse";
    const formData = new FormData();
    formData.append("entry.1896504086", name);     
    formData.append("entry.1355037888", phone);    
    formData.append("entry.1429143010", mapsLink); 

    fetch(formURL, { method: "POST", body: formData, mode: "no-cors" })
    .then(() => { alert("Location shared with Emergency Services."); });
}
