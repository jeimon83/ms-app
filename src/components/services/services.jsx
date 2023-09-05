import React from "react";
import { useEffect, useState } from 'react';
import getAPIServices from "./get_api_services";

function Services() {
  const [services, setServices] = useState([])

  useEffect(() => {
    let mounted_services = true
    getAPIServices().then((items) => {
      if (mounted_services) { setServices(items) }
    })
    return () => (mounted_services = false)
  }, [])

  return (
    <section className="section">
      <h1 className="title">Services</h1>
      <h2 className="subtitle">Details of services</h2>
      <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Id</th>
            <th>Type</th>
            <th>Megas</th>
            <th>*****</th>
            <th>*****</th>
          </tr>
        </thead>
        <tbody>
          {services.map((obj) => {
            return (
              <tr key={obj.id}>
                <td>{obj.id}</td>
                <td>{obj.service_type[0].toUpperCase() + obj.service_type.slice(1)}</td>
                <td>{obj.megas}</td>
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

export default Services;