import $ from 'jquery';
import { FlightTracker } from './flight-tracker';

export function flightTrackerUI() {
  $("#flightInformation").click(function() {
    const airline = $(".selectpicker").val();
    const flightNumber = $('#flight').val();
    const date = $('#date').val();
    let tracker = new FlightTracker();
    let reg;

    (async () => {
      const response = await tracker.getFlight(airline, flightNumber, date); 
      await getElements(response);
      const responseAirline = await tracker.getAircraftInfo(reg); 
      getAircraftElements(responseAirline);
    })();

    function getElements(response) {
      console.log(response);
      let fullDepartureTime = response[0].departure.scheduledTimeLocal;
      let shortDepartureTime = fullDepartureTime.slice(11, 16);
      let year = fullDepartureTime.slice(0,4);
      let month = fullDepartureTime.slice(5, 7);
      let day = fullDepartureTime.slice(8,10);
      let fullArrivalTime = response[0].arrival.scheduledTimeLocal;
      let shortArrivalTime = fullArrivalTime.slice(11,16);
      reg = response[0].aircraft.reg;
      console.log(reg);
      
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
        $("#showDateTime").html(month + "." + day + "." + year);
        $("#showDepartureTime").html(shortDepartureTime);
        $("#showArrivalTime").html(shortArrivalTime);   
      }
    }

    function getAircraftElements(responseAirline) {
      console.log(responseAirline);
      $(".openModal").click(function () {
        $("#airlineModal").show();
        $(".modal-title").html(responseAirline.airlineName);
        $("#displayType").html(responseAirline.typeName);
        $("#displayEngine").html(responseAirline.engineType);
        $("#display1stDate").html(responseAirline.firstFlightDate);
        $("#displayAge").html(responseAirline.ageYears);
        console.log(responseAirline.typeName)
      })

    }
  });
}