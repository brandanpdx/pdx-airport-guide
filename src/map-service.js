const loadGoogleMapsApi = require('load-google-maps-api');
class Map {
  
  static loadGoogleMapsApi() {
    return loadGoogleMapsApi({ key: process.env.GOOGLE_MAPS_API_KEY });
  }
  static createMap(googleMaps, mapElement) {
    return new googleMaps.Map(mapElement, {
      center: { lat: 45.5891, lng: -122.5934 },
      zoom: 17
    });
  }
}
export { Map };