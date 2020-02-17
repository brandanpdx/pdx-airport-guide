<<<<<<< HEAD
import { Map } from './map-service';
//import $ from 'jquery';
=======
// import $ from 'jquery';
>>>>>>> 2b3c0f77255b5b6ade428848878f793bfa1ffdb8
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


document.addEventListener("DOMContentLoaded", function() {
  let mapElement = document.getElementById('map');
  
  Map.loadGoogleMapsApi().then(function(googleMaps) {
    Map.createMap(googleMaps, mapElement);
  });
});