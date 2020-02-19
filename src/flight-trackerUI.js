import $ from 'jquery';
import { FlightTracker } from './flight-tracker';

export function flightTrackerUI() {
  $("#flightInformation").click(function() {
    const airline = $(".selectpicker").val();
    const flightNumber = $('#flight').val();
    const date = $('#date').val();
    (async () => {
      let tracker = new FlightTracker();
      const response = await tracker.getFlight(airline, flightNumber, date); 
      getElements(response);
    })();
    function getElements(response) {
      let fullDepartureTime = response[0].departure.scheduledTimeLocal;
      let shortDepartureTime = fullDepartureTime.slice(12, 16);
      let year = fullDepartureTime.slice(0,4);
      let month = fullDepartureTime.slice(5, 7);
      let day = fullDepartureTime.slice(8,11);
      let fullArrivalTime = response[0].arrival.scheduledTimeLocal;
      let shortArrivalTime = fullArrivalTime.slice(12,16);
      console.log(shortDepartureTime);
      console.log(shortArrivalTime);
      console.log(month);
      console.log(day);
      console.log(year);
      console.log(fullDepartureTime);
      
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
        $("#showAircraft").html(response[0].aircraft.model); 
        $("#showDateTime").html(response[0].departure.scheduledTimeLocal);       
      }
    }
  });
}