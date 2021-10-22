//Import Modules
import React from 'react';
import { Link } from 'react-router-dom';

//Import JSON Data
import flights from '../data/coding-assignment-schedule.json';

const Flight = () => {
  let dayOne = 1;
  let dayTwo = 2;
  return (
    <div className='container'>
      <br />
      <br />
      <h2>Scheduled Flights for Day 1</h2>
      <br />
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Flight</th>
            <th>Departure</th>
            <th>Arrival</th>
            <th>View Flight</th>
          </tr>
        </thead>
        <tbody>
          {/* Loop and display the flights */}
          {flights
            .filter(flight => flight.day === dayOne)
            .map(flight => (
              <tr key={flight.flight_number}>
                <td>{flight.flight_number}</td>
                <td>{flight.departure_city}</td>
                <td>{flight.arrival_city}</td>
                <td>
                  <Link
                    to={`/vieworders/${flight.flight_number}/${flight.arrival_city}/${flight.departure_city}`}
                    className='btn btn-primary'
                  >
                    VIEW FLIGHT
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <br />
      <h2>Scheduled Flights for Day 2</h2>
      <br />
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Flight</th>
            <th>Departure</th>
            <th>Arrival</th>
            <th>View Flight</th>
          </tr>
        </thead>
        <tbody>
          {/* Loop and display the flights */}
          {flights
            .filter(flight => flight.day === dayTwo)
            .map(flight => (
              <tr key={flight.flight_number}>
                <td>{flight.flight_number}</td>
                <td>{flight.departure_city}</td>
                <td>{flight.arrival_city}</td>
                <td>
                  <Link
                    to={`/vieworders/${flight.flight_number}/${flight.arrival_city}/${flight.departure_city}`}
                    className='btn btn-primary'
                  >
                    VIEW FLIGHT
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Flight;
