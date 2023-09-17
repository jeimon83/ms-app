import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import getAPIProviderId from "./get_api_provider_id";

function ProviderDetails() {
  const [provider, setProvider] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetch_provider = async () => {
      try {
        const data = await getAPIProviderId(id);
        if (data.name.length > 0) {
          setProvider(data);
        } else {
          navigate("/not_found");
        }
      }
      catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetch_provider();
  }, [id, navigate]);

  if (!provider) return <h2>Loading...</h2>

  return (
    <div>
      <h1>Provider Details</h1>
      <p>Provider Name: {provider.name}</p>
      <div>
        <Link to="/providers">Back to Providers</Link>
      </div>
    </div>
  )
}

export default ProviderDetails;