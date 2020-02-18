import { Map } from './map-service.js';

export function airportUI() {
  //event.preventDefault();
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
}
