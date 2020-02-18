// import { Map } from './map-service.js';
import $ from 'jquery';
$
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { FlightTracker } from './../src/flight-tracker';


// document.addEventListener("DOMContentLoaded", function() {
//   let mapElement = document.getElementById('map');
  
//   Map.loadGoogleMapsApi().then(function(googleMaps) {
//     Map.createMap(googleMaps, mapElement);
//   });
// });

$(document).ready(function() {
  $("#flightInformation").click(function(event) {
    event.preventDefault();

    let tracker = new FlightTracker();
      const flightNumber = $('#flight').val();
      const date = $('#date').val()
      console.log(flightNumber);
      console.log(date)
      console.log(tracker);
    (async () => {
      let response = await tracker.getFlight(flightNumber); 
      getElements(response);
      function getElements(response) {
        if (response === false) {
          alert("there was an error in processing you request");
        }
        else if (response.meta.total === 0) {
          alert("we apologize, no results match your search");
        }
        else {
          $(".showairline").text("test");
          
          
        }
      }
    })
  })
})
