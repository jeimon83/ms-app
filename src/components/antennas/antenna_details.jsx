import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
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


  return (
    <section className="section">
      <div className="box">
        <h1 className="title">Antenna Details</h1>
        <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
          <tbody>
            <tr>
              <th>CPA</th>
              <td>
                {isEditing ? (
                  <input
                    type="text"
                    name="cpa"
                    value={antenna.cpa}
                    onChange={handleInputChange}
                  />
                ) : (
                  antenna.cpa
                )}
              </td>
            </tr>
            <tr>
              <th>Location</th>
              <td>
                {isEditing ? (
                  <input
                    type="text"
                    name="location"
                    value={antenna.location}
                    onChange={handleInputChange}
                  />
                ) : (
                  antenna.location
                )}
              </td>
            </tr>
            {/* Add more fields for other antenna details */}
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
            className="button is-info"
            onClick={handleEditClick}
          >
            Edit
          </button>
        )}
      </div>
    </section>
  );
}

export default AntennaDetails;