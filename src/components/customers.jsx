import React from "react";
import axios from "axios";
import { useEffect, useState } from 'react';

const apiUrl = process.env.REACT_APP_API_URL

function getAPICustomers() {
  return axios.get(apiUrl + "/customers").then((response) => response.data)
  .catch((error) => {
    console.error("Error fetching data: ", error);
    return [];
  });
}

function Customers() {
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    let mounted_customers = true
    getAPICustomers().then((items) => {
      if (mounted_customers) { setCustomers(items) }
    })
    return () => (mounted_customers = false)
  }, [])

  return (
    <section className="section">
      <h1 className="title">Customers</h1>
      <h2 className="subtitle">Details of customers</h2>
      <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>CUIT</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((obj) => {
            return (
              <tr key={obj.id}>
                <td>{obj.id}</td>
                <td>{obj.name}</td>
                <td>{obj.address}</td>
                <td>{obj.phone}</td>
                <td>{obj.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section> 
  );
}

export default Customers;