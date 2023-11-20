// Use strict mode
"use strict";

// Function to initialize the map
function initMap() {
  // Replace the coordinates with your actual latitude and longitude
  var myLat = 23.7347077;
  var myLng = 90.4112712;

  // Create the map
  var map = L.map("google-map").setView([myLat, myLng], 18);

  // Add a tile layer (you can choose different providers)
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "",
  }).addTo(map);

  // Remove Leaflet attribution
  map.attributionControl.setPrefix("");

  // Create a Google Maps link
  var googleMapsLink = "https://maps.app.goo.gl/wJ1PHCvp7S5yQMKf7";

  // Add a marker with a popup
  L.marker([myLat, myLng])
    .addTo(map)
    .bindPopup("<a href='" + googleMapsLink + "' target='_blank'><h6>Hossain & Co.</h6></a>")
    .openPopup()
	.on('click', function() {
        window.open(googleMapsLink, '_blank');
    });
}

// Run the initMap function when the document is ready
document.addEventListener("DOMContentLoaded", function () {
  initMap();
});
