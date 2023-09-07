import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import getAPICustomerId from "./get_api_customer_id";

function CustomerDetails() {
  const [customer, setCustomer] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetch_customer = async () => {
      try {
        const data = await getAPICustomerId(id);
        if (data.ok) {
          setCustomer(data);
        } else {
          navigate("/not_found");
        }
      }
      catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetch_customer();
  }, [id, navigate]);

  if (!customer) return <h2>Loading...</h2>

  return (
    <div>
      <h1>Customer Details</h1>
      <p>Customer Name: {customer.name}</p>
      <div>
        <Link to="/customers">Back to Customers</Link>
      </div>
    </div>
  )
}

export default CustomerDetails;