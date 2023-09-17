import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import getAPIServiceId from "./get_api_service_id";

function ServiceDetails() {
  const [service, setService] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetch_service = async () => {
      try {
        const data = await getAPIServiceId(id);
        if (data.name.length > 0) {
          setService(data);
        } else {
          navigate("/not_found");
        }
      }
      catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetch_service();
  }, [id, navigate]);

  if (!service) return <h2>Loading...</h2>

  return (
    <div>
      <h1>Service Details</h1>
      <p>Service Type: {service.service_type}</p>
      <div>
        <Link to="/services">Back to Services</Link>
      </div>
    </div>
  )
}

export default ServiceDetails;