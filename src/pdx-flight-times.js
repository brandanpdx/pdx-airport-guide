import $ from 'jquery';
import { FlightTracker } from './flight-tracker.js';

export function flightTimes() {
  $("#departureDate").click(function () {
    const flightArray = ["AC8120", "AC8316", "AC8124", "AC8126", "AS2150", "AS686", "AS1638", "AS3338", "AS3434", "AS430", "AS498", "AS2032", "AA1316", "AA6088", "AA1442", "AA1083", "AA1929", "DAL3101", "DAL5752", "DAL1761", "DAL2832", "DAL415", "DAL1140", "FFT790", "HAL39", "HAL25", "JBU1206", "WN3814", "WN872", "WN1517", "WN904", "WN877", "UA2348", "UA679", "UA830", "UA1888", "UA2369", "UA569", "UA2054", "UA2233"];


    let infoTracker = new FlightTracker();
    (async() => {
      const responseFlights = await infoTracker.getFlight();
      await getElements(responseFlights);
    })();

    function getElements(responseFlights) {
      console.log(flightArray);
      console.log(responseFlights);
    }
  });
}

        