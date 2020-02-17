import $ from 'jquery';
$;
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { FlightTracker } from './flight-tracker';

$(document).ready(function() {
  $("#searchFlightInfo").click(function(event) {
    event.preventDefault();

    let tracker = new FlightTracker();
      const flightNumber = $('#flightNumber').val();
      const date = $('#date').val()

    (async () => {
      let response = await flightNumber.getFlight(flightNumber, date); 
      getElements(response);
      function getElements(response) {
        if (response === false) {
          
        }
        else if (response.meta.total === 0) {
          
        }
        else {
          
          
        }
      }
    })
  })
})