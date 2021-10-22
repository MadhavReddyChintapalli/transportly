//Import Modules
import React from 'react';

//Import JSON Data
import orders from '../data/coding-assigment-orders.json';
import flights from '../data/coding-assignment-schedule.json';

const Order = () => {
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
          {Object.keys(orders).map((key, index) => {
            let orderId = key;
            let destination = orders[key].destination;
            return flights
              .filter(flight => flight.arrival_city === destination)
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
              });
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Order;
