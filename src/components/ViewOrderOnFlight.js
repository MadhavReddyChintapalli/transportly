//Import Modules
import React from 'react';

//Import JSON Data
import orders from '../data/coding-assigment-orders.json';
import flights from '../data/coding-assignment-schedule.json';

const ViewOrderOnFlight = props => {
  //Get details of flight from url
  let selectedFlightNumber = parseInt(props.match.params.flight_number);
  let selectedArrivalCity = props.match.params.arrival_city;
  let selectedDepartureCity = props.match.params.departure_city;

  return (
    <div className='container'>
      <br />
      <br />
      <h4>Orders</h4>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Order</th>
            <th>Flight</th>
            <th>Departure</th>
            <th>Arrival</th>
            <th>Day</th>
          </tr>
        </thead>
        <tbody>
          {/* Loop and search for orders */}
          {Object.keys(orders).map((key, index) => {
            let orderId = key;
            let destination = orders[key].destination;
            return (
              flights
                .filter(
                  flight =>
                    flight.arrival_city === destination &&
                    flight.flight_number === selectedFlightNumber &&
                    flight.departure_city === selectedDepartureCity &&
                    flight.arrival_city === selectedArrivalCity
                )
                // Display the orders
                .map(flight => {
                  return (
                    <tr key={flight.flight_number}>
                      <td>{orderId}</td>
                      <td>{flight.flight_number}</td>
                      <td>{flight.departure_city}</td>
                      <td>{flight.arrival_city}</td>
                      <td>{flight.day}</td>
                    </tr>
                  );
                })
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ViewOrderOnFlight;
