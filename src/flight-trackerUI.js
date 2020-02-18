import $ from 'jquery';
import { FlightTracker } from './flight-tracker';

export function flightTrackerUI() {
  $("#flightInformation").click(function() {
    const airline = $(".selectpicker").val();
    const flightNumber = $('#flight').val();
    console.log(airline);
    console.log(flightNumber);
    (async () => {
      let tracker = new FlightTracker();
      const response = await tracker.getFlight(airline, flightNumber); 
      getElements(response);
    })();
    function getElements(response) {
      console.log(response);
      if (response === false) {
        alert("false");
      }
      else if (response === 0) {
        alert("none");
      }
      else {
        $(".showFlight").html("<br>" + response[0].departure.airport.iata + " to " + response[0].arrival.airport.iata);
       
        console.log(response[0].departure.airport.municipalityName)
        // $(".showairline").text(response)
      }
    }
  })
}