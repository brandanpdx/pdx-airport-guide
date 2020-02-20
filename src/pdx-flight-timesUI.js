import $ from 'jquery';
import { FlightTimes } from './flight-times.js';

export function getFlightTimes() {
  $("#departureDate").click(function () {
    
    let infoTracker = new FlightTimes();
    (async() => {
      const responseFlights = await infoTracker.getFlight();
      await getElements(responseFlights);
    })();

    function getElements(responseFlights) {
      for(let i=0; i< responseFlights.length; i++) {
        responseFlights[i].forEach(trip => {
          console.log(trip.departure.airport.municipalityName);
          $("#flightResults").append("<tr>" + "<td>" + trip.arrival.airport.municipalityName + "</td>" + "<td>" + trip.airline.name + "</td>" + "<td>" + trip.number + "</td>" + "<td>" + trip.departure.scheduledTimeLocal + "</td>" + "</tr>")
        })
      }
    }
  });
}

        