let map;

function showUserLocation() {

  document.getElementById("map").style.display = "block";

  if (!map) {
    map = L.map('map').setView([0, 0], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap'
    }).addTo(map);
  }

  navigator.geolocation.getCurrentPosition(position => {

    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    map.setView([lat, lon], 16);
    L.marker([lat, lon]).addTo(map);

  });
}
