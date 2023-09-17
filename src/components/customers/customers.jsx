import React from "react";
import { useEffect, useState } from 'react';
import getAPICustomers from "./get_api_customers";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import apiUrl from "../../api_routes/api_url";

function Customers() {
  const [customers, setCustomers] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    let mounted_customers = true
    getAPICustomers().then((items) => {
      if (mounted_customers) { setCustomers(items) }
    })
    return () => (mounted_customers = false)
  }, [])

  const deleteCustomer = (id) => {
    axios.delete(apiUrl() + "/customers/" + id).then((response) => {
      if (response.status === 200) {
        setCustomers(customers.filter((obj) => obj.id !== id));
      } else {
        navigate("/not_found");
      }
    }).catch((error) => {
      console.error("Error deleting customer: ", error);
    })
  }

  return (
    <section className="section">
      <div className="box">
        <h1 className="title">Customers</h1>
        <h2 className="subtitle">Details of customers</h2>
        <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>Name</th>
              <th>CUIT</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((obj) => {
              return (
                <tr key={obj.id}>
                  <td>{obj.name}</td>
                  <td>{obj.address}</td>
                  <td>{obj.phone}</td>
                  <td>{obj.email}</td>
                  <td>
                    <button className="button is-info is-responsive" to={`/customer/${obj.id}`} style={{marginRight: "5px"}}>
                      <span>Show</span>
                    </button>
                    <button className="button is-danger is-responsive" onClick={() => deleteCustomer(obj.id)}>
                      <span>Delete</span>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button className="button is-info is-responsive" onClick={() => navigate('/customers/new')}>New Customer</button>
      </div>
    </section> 
  );
}

export default Customers;