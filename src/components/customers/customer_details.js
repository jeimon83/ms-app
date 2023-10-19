import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import getAPICustomerId from "./get_api_customer_id";
import axios from "../../axios-config"
import apiUrl from "../../api_routes/api_url";

function CustomerDetails() {
  const [customer, setCustomer] = useState(null);
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetch_customer = async () => {
      try {
        const data = await getAPICustomerId(id);
        if (data.name.length > 0) {
          setCustomer(data);
        } else {
          navigate("/not_found");
        }
      }
      catch (error) {
        console.error("Error fetching customer: ", error);
      }
    };
    fetch_customer();
  }, [id, navigate]);

  if (!customer) return <h2>Loading...</h2>

  const handleEditClick = () => {
    setIsEditing(true);
  }

  const handleSaveClick = () => {
    axios
      .patch(apiUrl() + `/customers/${id}`, customer)
      .then((response) => {
        setIsEditing(false);
      })
      .catch((error) => {
        console.error("Error updating customer details: ", error);
      });
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomer({
      ...customer,
      [name]: value,
    });
  }

  const attributes = { name: "Name", cuit: "CUIT", address: "Address", phone: "Phone", email: "Email", contact: "Contact"}

  const customerValue = (key) => {
    if (key === "name") { return customer.name }
    if (key === "cuit") { return customer.cuit }
    if (key === "address") { return customer.address }
    if (key === "phone") { return customer.phone }
    if (key === "email") { return customer.email }
    if (key === "contact") { return customer.contact }
  }

  return (
    <section className="section">
      <div className="box">
        <h1 className="title">Customer Details</h1>
        <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
          <tbody>
            {Object.entries(attributes).map(([key, value]) => (
            <tr key={key}>
              <th>{value}</th>
              <td>
                {isEditing ? (
                  <input className='input' style={{ width: "100%", backgroundColor: "white", color: "blue" }}
                    type="text"
                    name={key}
                    value={customerValue(key)}
                    onChange={handleInputChange}
                  />
                ) : (
                  <input className='input'
                    type="text"
                    name={key}
                    value={
                      customerValue(key)
                    }
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
        <button className="button is-dark is-responsive" onClick={() => navigate('/customers')} style={{ marginLeft: "5px" }}>Back to Customers</button>
      </div>
    </section>
  );
}

export default CustomerDetails;