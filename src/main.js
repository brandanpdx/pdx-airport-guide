import  { airportUI } from './airport-info-UI';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { flightTrackerUI } from './flight-trackerUI';
import { getFlightTimes } from './pdx-flight-timesUI.js';


$(document).ready(function() {
  airportUI();
  flightTrackerUI();

  getFlightTimes();

});


