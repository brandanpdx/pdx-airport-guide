import { Map } from './map-service';

//import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


document.addEventListener("DOMContentLoaded", function() {
  let mapElement = document.getElementById('map');
  
  Map.loadGoogleMapsApi().then(function(googleMaps) {
    Map.createMap(googleMaps, mapElement);
  });
  
  (async () => {
    let map = new Map();
    const response = await map.getPlace();
    getElements(response);
  }) ();

  function getElements(response) {
    console.log(response);
  }

});