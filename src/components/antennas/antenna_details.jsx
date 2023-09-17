import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import getAPIAntennaId from "./get_api_antenna_id";

function AntennaDetails() {
  const [antenna, setAntenna] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

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

  return (
    <div>
      <h1>Antenna Details</h1>
      <p>Antenna CPA: {antenna.cpa}</p>
      <div>
        <Link to="/antennas">Back to Antennas</Link>
      </div>
    </div>
  )
}

export default AntennaDetails;