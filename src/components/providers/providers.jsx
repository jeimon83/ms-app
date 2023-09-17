import React from "react";
import { useEffect, useState } from 'react';
import getAPIProviders from "./get_api_providers";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import apiUrl from "../../api_routes/api_url";

function Providers() {
  const [providers, setProviders] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    let mounted_providers = true
    getAPIProviders().then((items) => {
      if (mounted_providers) { setProviders(items) }
    })
    return () => (mounted_providers = false)
  }, [])

  const deleteProvider = (id) => {
    axios.delete(apiUrl() + "/providers/" + id).then((response) => {
      if (response.status === 200) {
        setProviders(providers.filter((obj) => obj.id !== id));
      } else {
        navigate("/not_found");
      }
    }).catch((error) => {
      console.error("Error deleting provider: ", error);
    })
  }

  return (
    <section className="section">
      <div className="box">
        <h1 className="title">Providers</h1>
        <h2 className="subtitle">Details of providers</h2>
        <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>Name</th>
{/*               <th>CUIT</th>
              <th>Phone</th>
              <th>Email</th> */}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {providers.map((obj) => {
              return (
                <tr key={obj.id}>
                  <td>{obj.name}</td>
{/*                   <td>{obj.address}</td>
                  <td>{obj.phone}</td>
                  <td>{obj.email}</td> */}
                  <td>
                    <button className="button is-info is-responsive" to={`/provider/${obj.id}`} style={{marginRight: "5px"}}>
                      <span>Show</span>
                    </button>
                    <button className="button is-danger is-responsive" onClick={() => deleteProvider(obj.id)}>
                      <span>Delete</span>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button className="button is-info is-responsive" onClick={() => navigate('/providers/new')}>New Provider</button>
      </div>
    </section> 
  );
}

export default Providers;