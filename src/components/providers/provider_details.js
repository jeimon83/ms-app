import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../axios-config"
import apiUrl from "../../api_routes/api_url";
import getAPIProviderId from "./get_api_provider_id";

function ProviderDetails() {
  const { id } = useParams();
  const [provider, setProvider] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const fetch_provider = async () => {
      try {
        const data = await getAPIProviderId(id);
        if (data.cpa.length > 0) {
          setProvider(data);
        } else {
          navigate("/not_found");
        }
      }
      catch (error) {
        console.error("Error fetching provider: ", error);
      }
    };
    fetch_provider();
  }, [id, navigate]);

  if (!provider) return <h2>Loading...</h2>

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    axios
      .patch(apiUrl() + `/providers/${id}`, provider)
      .then((response) => {
        setIsEditing(false);
      })
      .catch((error) => {
        console.error("Error updating provider details: ", error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProvider({
      ...provider,
      [name]: value,
    });
  };

  const attributes = { name: "Name" }

  const providerValue = (key) => {
    if (key === "name") { return provider.name }
  }


  return (
    <section className="section">
      <div className="box">
        <h1 className="title">Provider Details</h1>
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
                    value={providerValue(key)}
                    onChange={handleInputChange}
                  />
                ) : (
                  <input className='input'
                    type="text"
                    name={key}
                    value={providerValue(key)}
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
        <button className="button is-dark is-responsive" onClick={() => navigate('/providers')} style={{ marginLeft: "5px" }}>Back to Providers</button>
      </div>
    </section>
  );
}

export default ProviderDetails;