import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import apiUrl from "../../api_routes/api_url";
import getAPIAntennaId from "./get_api_antenna_id";

function AntennaDetails() {
  const { id } = useParams();
  const [antenna, setAntenna] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const fetch_antenna = async () => {
      try {
        const data = await getAPIAntennaId(id);
        if (data.cpa.length > 0) {
          setAntenna(data);
        } else {
          navigate("/not_found");
        }
      }
      catch (error) {
        console.error("Error fetching antenna: ", error);
      }
    };
    fetch_antenna();
  }, [id, navigate]);

  if (!antenna) return <h2>Loading...</h2>

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    axios
      .patch(apiUrl() + `/antennas/${id}`, antenna)
      .then((response) => {
        setIsEditing(false);
      })
      .catch((error) => {
        console.error("Error updating antenna details: ", error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAntenna({
      ...antenna,
      [name]: value,
    });
  };

  const attributes = { cpa: "CPA", location: "Location", customer: "Customer", service: "Service", status: "Status" }

  const antennaValue = (key) => {
    if (key === "cpa") { return antenna.cpa }
    if (key === "location") { return antenna.location }
    if (key === "antenna") { return antenna.customer }
    if (key === "service") { return antenna.service }
    if (key === "status") { return antenna.status }
  }


  return (
    <section className="section">
      <div className="box">
        <h1 className="title">Antenna Details</h1>
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
                    value={antennaValue(key)}
                    onChange={handleInputChange}
                  />
                ) : (
                  <input className='input'
                    type="text"
                    name={key}
                    value={antennaValue(key)}
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
        <button className="button is-dark is-responsive" onClick={() => navigate('/antennas')} style={{ marginLeft: "5px" }}>Back to Antennas</button>
      </div>
    </section>
  );
}

export default AntennaDetails;