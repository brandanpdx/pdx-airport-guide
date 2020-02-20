import { Map } from './map-service.js';
import { restaurantInfo, storeInfo } from './airport-info-details';
import $ from 'jquery';

export function airportUI() {
  let mapElement = document.getElementById('map');
  
  Map.loadGoogleMapsApi().then(function(googleMaps) {
    Map.createMap(googleMaps, mapElement);
  });

  (async () => {
    let map = new Map();
    const response = await map.getRestaurant();
    getRestaurantElements(response);
  }) ();
  
  function  getRestaurantElements(response) {
    response.results.forEach(function(results) {
      $("#restaurants").append(restaurantInfo(results));
    });
  }

  (async () => {
    let map = new Map();
    const response = await map.getStore();
    getStoreElements(response);
  }) ();
  
  function  getStoreElements(response) {
    response.results.forEach(function(results) {
      $("#shops").append(storeInfo(results));
    });
  }
}