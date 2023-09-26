import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import getAPIServiceId from "./get_api_service_id";
import axios from "axios";
import apiUrl from "../../api_routes/api_url";

function ServiceDetails() {
  // State variables
  const [service, setService] = useState(null);
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  // Fetch service details on component mount
  useEffect(() => {
    const fetch_service = async () => {
      try {
        const data = await getAPIServiceId(id);
        if (data !== null && data !== undefined && data !== "" && data.id !== undefined) {
          setService(data);
        } else {
          navigate("/not_found");
        }
      }
      catch (error) {
        console.error("Error fetching service: ", error);
      }
    };
    fetch_service();
  }, [id, navigate]);

  if (!service) return <h2>Loading...</h2>

  const handleEditClick = () => {
    setIsEditing(true);
  }

  const handleSaveClick = () => {
    axios
      .patch(apiUrl() + `/services/${id}`, service)
      .then((response) => {
        setIsEditing(false);
      })
      .catch((error) => {
        console.error("Error updating service details: ", error);
      });
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setService({
      ...service,
      [name]: value,
    });
  }

  const attributes = { technology: "Technology", bandwidth: "Bandwidth"}

  const serviceValue = (key) => {
    if (key === "technology") { return service.technology }
    if (key === "bandwidth") { return service.bandwidth }
  }

  return (
    <section className="section">
      <div className="box">
        <h1 className="title">Service Details</h1>
        <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
          <tbody>
            {Object.entries(attributes).map(([key, value]) => (
            <tr>
              <th>{value}</th>
              <td>
                {isEditing ? (
                  <input className='input' style={{ width: "100%", backgroundColor: "white", color: "blue" }}
                    type="text"
                    name={key}
                    value={serviceValue(key)}
                    onChange={handleInputChange}
                  />
                ) : (
                  <input className='input'
                    type="text"
                    name={key}
                    value={serviceValue(key)}
                    readOnly
                  />
                )}
              </td>
            </tr>
            ))}
          </tbody>
        </table>
        {isEditing ? (
          <button
            className="button is-success"
            onClick={handleSaveClick}
          >
            Save
          </button>
        ) : (
          <button
            className="button is-info is-responsivee"
            onClick={handleEditClick}
          >
            Edit
          </button>
        )}
        <button className="button is-dark is-responsive" onClick={() => navigate('/services')} style={{ marginLeft: "5px" }}>Back to Services</button>
      </div>
    </section>
  );
}

export default ServiceDetails;