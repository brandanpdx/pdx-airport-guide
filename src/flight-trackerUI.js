import $ from 'jquery';
import { FlightTracker } from './flight-tracker';

export function flightTrackerUI() {
  $("#flightInformation").click(function() {
    const airline = $(".selectpicker").val();
    const flightNumber = $('#flight').val();
    (async () => {
      let tracker = new FlightTracker();
      const response = await tracker.getFlight(airline, flightNumber); 
      getElements(response);
    })();
    function getElements(response) {
      if (response === false) {
        alert("false");
      }
      else if (response === 0) {
        alert("none");
      }
      else {
        $("#showFlight").html(response[0].number);
        $("#showDeparture").html(response[0].departure.airport.municipalityName + " (" + response[0].departure.airport.iata + ")");
        $("#showArrival").html(response[0].arrival.airport.municipalityName + " (" + response[0].arrival.airport.iata + ")");  
        $("#showAirline").html(response[0].airline.name);      
      }
    }
  });
}