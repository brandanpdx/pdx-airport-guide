import { Map } from './map-service.js';
import { restaurantInfo } from './airport-info-details';
import $ from 'jquery';

export function airportUI() {
  //event.preventDefault();
  let mapElement = document.getElementById('map');
  
  Map.loadGoogleMapsApi().then(function(googleMaps) {
    Map.createMap(googleMaps, mapElement);
  });

  (async () => {
    let map = new Map();
    const response = await map.getRestaurant();
    getRestaurantElements(response);
  }) ();
  
  function getRestaurantElements(response) {
    console.log(response);
    
      response.results.forEach(function(results) {
        $("#restaurants").append(restaurantInfo(results))
       })
    
    
  }
}
