"use strict";


function gMapHome () {
	if ($('.google-map-home').length) {
		$('.google-map-home').each(function () {
			// getting options from html 
			var Self = $(this);
			var mapName = Self.attr('id');
			var mapLat = Self.data('map-lat');
			var mapLng = Self.data('map-lng');
			var iconPath = Self.data('icon-path');
			var mapZoom = Self.data('map-zoom');
			var mapTitle = Self.data('map-title');


			var styles = [{"featureType": "all", "elementType": "geometry.fill", "stylers": [{"visibility": "on"} ] }, {"featureType": "all", "elementType": "labels", "stylers": [{"visibility": "off"} ] }, {"featureType": "all", "elementType": "labels.text.fill", "stylers": [{"visibility": "off"} ] }, {"featureType": "administrative", "elementType": "labels.text", "stylers": [{"visibility": "off"} ] }, {"featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{"color": "#444444"} ] }, {"featureType": "administrative.locality", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#f2f2f2"} ] }, {"featureType": "landscape", "elementType": "geometry.fill", "stylers": [{"visibility": "on"} ] }, {"featureType": "landscape", "elementType": "geometry.stroke", "stylers": [{"visibility": "on"} ] }, {"featureType": "landscape", "elementType": "labels", "stylers": [{"visibility": "off"} ] }, {"featureType": "landscape", "elementType": "labels.text", "stylers": [{"visibility": "off"} ] }, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "road", "elementType": "all", "stylers": [{"saturation": -100 }, {"lightness": 45 } ] }, {"featureType": "road.highway", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "road.highway.controlled_access", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "road.arterial", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "off"} ] }, {"featureType": "road.local", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "transit.line", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "transit.line", "elementType": "geometry", "stylers": [{"visibility": "off"} ] }, {"featureType": "transit.line", "elementType": "geometry.stroke", "stylers": [{"visibility": "off"} ] }, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#20bed0"}, {"visibility": "on"} ] } ];




			// if zoom not defined the zoom value will be 15; 
			if (!mapZoom) {
				var mapZoom = 3;
			};
			// init map
			var map;
			map = new GMaps({
			    div: '#'+mapName,
			    scrollwheel: false,
			    lat: mapLat,
			    lng: mapLng,
			    styles: styles,
			    zoom: mapZoom
			});
			// if icon path setted then show marker
			if(iconPath) {
				
				map.addMarker({
			    	icon: iconPath,
			    	lat: mapLat,
			      	lng: mapLng,
			      	title: 'North Parchrtome Steet ',
			      	infoWindow: {
						content: '<h6>North Parchrtome Steet</h6> <p>Marbella, Luxury Villa</p>'
					}
				});
				map.addMarker({
			    	icon: iconPath,
			    	lat: 40.728157,
			      	lng: -74.077642,
			      	title: 'North Parchrtome Steet ',
			      	infoWindow: {
						content: '<h6>North Parchrtome Steet</h6> <p>Marbella, Luxury Villa</p>'
					}
				});
				
				map.addMarker({
			    	icon: iconPath,
			    	lat: 40.678178,
			      	lng: -73.944158,
			      	title: 'Sub Office for Rental',
			      	infoWindow: {
						content: '<h6>Longkloof Studio</h6> <p>City Life Villa</p>'
					}
				});
				
			}
		});  
	};
}


// Dom Ready Function
jQuery(document).on('ready', function () {
	(function ($) {
		// add your functions
		gMapHome();
	})(jQuery);
});