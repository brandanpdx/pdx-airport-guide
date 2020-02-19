const loadGoogleMapsApi = require('load-google-maps-api');
//const  marker = require('google-map-marker');

export class Map {
  
  static loadGoogleMapsApi() {
    return loadGoogleMapsApi({ key: process.env.GOOGLE_MAPS_API_KEY });
  }
  static createMap(googleMaps, mapElement) {
    return new googleMaps.Map(mapElement, {
      center: { lat: 45.5891, lng: -122.5934 },
      zoom: 17,
      markers: [
        {
            marker : "http://lucienconsulting.com/_/images/map_logo.png", 
            title : "Lucien Consulting",
            latLng : {
                lat: 45.5891,
                lng: -122.5934
            },
            size : {
                w: 50,
                h: 76,
            }
        }
      ]
    });
  }

  async getRestaurant() {
    try {
      let response = await fetch (`https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants,food&location=45.5891,-122.5934&key=${process.env.GOOGLE_PLACE_API_KEY}`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch (error) {
      return false;
    }
  } 

  async getStore() {
    try {
      let response = await fetch (`https://maps.googleapis.com/maps/api/place/textsearch/json?query=store&location=45.5891,-122.5934&key=${process.env.GOOGLE_PLACE_API_KEY}`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch (error) {
      return false;
    }
  } 
}

