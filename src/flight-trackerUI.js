import $ from 'jquery';
import { FlightTracker } from './flight-tracker';

export function flightTrackerUI() {
  $("#flightInformation").click(function() {
    const airline = $(".selectpicker").val();
    const flightNumber = $('#flight').val();
    const date = $('#date').val();
    $('.card').show();
    let tracker = new FlightTracker();
    let reg;

    (async () => {
      const response = await tracker.getFlight(airline, flightNumber, date); 
      await getElements(response);
      const responseAirline = await tracker.getAircraftInfo(reg); 
      getAircraftElements(responseAirline);
    })();

    function getElements(response) {
      let fullDepartureTime = response[0].departure.scheduledTimeLocal;
      let shortDepartureTime = fullDepartureTime.slice(11, 16);
      let year = fullDepartureTime.slice(0,4);
      let month = fullDepartureTime.slice(5, 7);
      let day = fullDepartureTime.slice(8,10);
      let fullArrivalTime = response[0].arrival.scheduledTimeLocal;
      let shortArrivalTime = fullArrivalTime.slice(11,16);
      reg = response[0].aircraft.reg;
      
      if (response === false) {
        $("#errorModal").show();
        $(".errorMsg").html("There was an error handling your request.");
        $(".close").click(function() {
          $("#errorModal").hide();
          location.reload();
        });  
      } else if (response === 0) {
        $("#errorModal").show();
        $(".errorMsg").html("there are no flight schedule meet your search criteria.");
        $(".close").click(function() {
          $("#errorModal").hide();
          location.reload();
        });
      } else {

          $(".card").show();
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
      $(".openModal").click(function () {
        if (responseAirline === false) {
          $("#errorModal").show();
          $(".errorMsg").html("There are no detail information of this aircraft.");
          $(".close").click(function() {
            $("#errorModal").hide();
            location.reload();
          });
        } else {  
          $("#airlineModal").show();
          $(".modal-title").html(responseAirline.airlineName);
          $("#displayType").html(responseAirline.typeName);
          $("#displayEngine").html(responseAirline.engineType);
          $("#display1stDate").html(responseAirline.firstFlightDate);
          $("#displayAge").html(responseAirline.ageYears);
          $(".close").click(function() {
            $("#airlineModal").hide();
            location.reload();
          });  
        }  
      });
    }
  });
}