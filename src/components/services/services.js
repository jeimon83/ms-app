import React from "react";
import { useEffect, useState } from 'react';
import axios from "axios";
import apiUrl from "../../api_routes/api_url";
import { useNavigate } from "react-router-dom";
import { fetchServices } from "../../services/getService";

function Services() {
  const [services, setServices] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetch_services = async () => {
      try {
        const data = await fetchServices();
        setServices(data);
      }
      catch (error) {
        console.error("Error fetching services: ", error);
      }
    };
    fetch_services();
  }, []);

  const deleteService = (id) => {
    axios.delete(apiUrl() + "/services/" + id).then((response) => {
      if (response.status === 200) {
        setServices(services.filter((obj) => obj.id !== id));
      } else {
        navigate("/not_found");
      }
    }).catch((error) => {
      console.error("Error deleting service: ", error);
    })
  }

  return (
    <section className="section">
      <div className="box">
        <h1 className="title">Services</h1>
        <h2 className="subtitle">Details of services</h2>
        <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>Technology</th>
              <th>Bandwidth</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map((obj) => {
              return (
                <tr key={obj.id}>
                  <td>{obj.technology[0].toUpperCase() + obj.technology.slice(1)}</td>
                  <td>{obj.bandwidth}</td>
                  <td>
                    <button className="button is-info is-responsive" onClick={() => navigate("/services/" + obj.id)} style={{marginRight: "5px"}}>
                      <span>Show</span>
                    </button>
                    <button className="button is-danger is-responsive" onClick={() => deleteService(obj.id)}>
                      <span>Delete</span>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button className="button is-info is-responsive" onClick={() => navigate('/services/new')}>New Service</button>
      </div>
    </section> 
  );
}

export default Services;