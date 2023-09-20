import React from "react";
import { useEffect, useState } from 'react';
import getAPIAntennas from "./get_api_antennas";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import apiUrl from "../../api_routes/api_url";

function Antennas() {
  const [antennas, setAntennas] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    let mounted_antennas = true
    getAPIAntennas().then((items) => {
      if (mounted_antennas) { setAntennas(items) }
    })
    return () => (mounted_antennas = false)
  }, [])

  const deleteAntenna = (id) => {
    axios.delete(apiUrl() + "/antennas/" + id).then((response) => {
      if (response.status === 200)  { setAntennas(antennas.filter((obj) => obj.id !== id)); } 
      else                          { navigate("/not_found"); }
    }).catch((error) =>             { console.error("Error deleting antenna: ", error); })
  }

  const objState = (state) => {
    if (state === "pending")    { return "Pending" }
    if (state === "installed")  { return "Installed" }
    if (state === "active")     { return "Active" }
    if (state === "inactive")   { return "Inactive" }
  }

  const showAntenna = (id) => {
    navigate("/antennas/" + id)
  }

  return (
    <section className="section">
      <div className="box">
        <h1 className="title">Antennas</h1>
        <h2 className="subtitle">Details of antennas</h2>
        <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>CPA</th>
              <th>Location</th>
              <th>Customer</th>
              <th>Service</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {antennas.map((obj) => {
              return (
                <tr key={obj.id}>
                  <td>{obj.cpa}</td>
                  <td>{obj.location}</td>
                  <td>{obj.customer.name}</td>
                  <td>{obj.service}</td>
                  <td>{objState(obj.state)}</td>
                  <td>
                    <button className="button is-info is-responsive" onClick={() => showAntenna(obj.id)} style={{marginRight: "5px"}}>
                      <span>Show</span>
                    </button>
                    <button className="button is-danger is-responsive" onClick={() => deleteAntenna(obj.id)}>
                      <span>Delete</span>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* <button className="button is-info is-responsive" onClick={() => navigate('/antennas/new')}>New Antenna</button> */}
      </div>
    </section> 
  );
}

export default Antennas;