var coord = { lat: 10.132105, lng: -84.196897 }, directionsRenderer, directionsService;
function initMap() {
  directionsRenderer = new google.maps.DirectionsRenderer();
  directionsService = new google.maps.DirectionsService();
  const map = new google.maps.Map(document.getElementById("mapa"), {
    zoom: 12,
    center: coord,
    disableDefaultUI: true,
  });

  new google.maps.Marker({
    position: coord,
    map: map
  });
}

function calculateAndDisplayRoute(directionsService, directionsRenderer, start, end) {

  directionsService
    .route({
      origin: start,
      destination: end,
      travelMode: google.maps.TravelMode.DRIVING,
    })
    .then((response) => {
      directionsRenderer.setDirections(response);
    })
    .catch((e) => window.alert("Directions request failed due to " + status));
}

navigator.geolocation.getCurrentPosition((position) => {
  start = { lat: position.coords.latitude, lng: position.coords.longitude };
});

document.getElementById("btnLlegar").addEventListener("click", () => {
  directionsRenderer.setMap(new google.maps.Map(document.getElementById("mapa"), {
    zoom: 12,
    center: coord,
    disableDefaultUI: true,
  }));
  calculateAndDisplayRoute(directionsService, directionsRenderer, start, coord);
});