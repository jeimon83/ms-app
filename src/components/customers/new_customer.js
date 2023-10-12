import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "../../axios-config"
import apiUrl from '../../api_routes/api_url';

function NewCustomer() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const validationErrors = {}
    if (!formData.name) validationErrors.name = 'Name is required'
    if (!formData.cuit) validationErrors.cuit = 'CUIT is required'
    if (!formData.address) validationErrors.address = 'Address is required'
    if (!formData.phone) validationErrors.phone = 'Phone is required'
    if (!formData.email) validationErrors.email = 'Email is required'
    if (!formData.contact) validationErrors.contact = 'Contact is required'

    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      return
    }

    if (Object.keys(validationErrors).length === 0) {

      const customer = {
        name: formData.name,
        cuit: formData.cuit,
        address: formData.address,
        phone: formData.phone,
        email: formData.email,
        contact: formData.contact
      }

      axios.post(apiUrl() + '/customers', customer).then((response) => {
        if (response.status === 201) {
          navigate('/customers')
        }
      }).catch((error) => {
        console.error('Error fetching data: ', error)
      })
    }
  }

  const [formData, setFormData] = useState({
    name: '',
    cuit: '',
    address: '',
    phone: '',
    contact: '',
    email: ''
  })

  const [errors, setErrors] = useState({})
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ 
      ...formData, [name]: value 
    })
  }

/*   const handleErrors = (e) => {
    const { key, value } = e.target
    const fieldToErrorMap = { name: 'name', cuit: 'cuit', address: 'address', phone: 'phone', email: 'email', contact: 'contact' }
    if (value !== "" && value !== undefined) { 
      if (errors[fieldToErrorMap[key]] !== undefined && errors[fieldToErrorMap[key]].includes("is required")) { 
        delete errors[fieldToErrorMap[key]] 
      }
    }
    if (value !== "" && errors[fieldToErrorMap[key]] !== undefined) { 
      delete errors[fieldToErrorMap[key]]
    }
    setErrors(errors)
  }  */

  return (
    <section className="section">
      <h1 className="title">New Customer</h1>
      <form className="box">
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input 
              className="input" 
              type="text" 
              placeholder="Name"
              name="name"
              onChange={handleChange}
              //onKeyUp={handleErrors}
            />
            {errors.name && <span className="help is-danger">{errors.name}</span>}
          </div>
        </div>
        <div className="field">
          <label className="label">CUIT</label>
          <div className="control">
            <input 
            className="input" 
            type="text" 
            placeholder="CUIT"
            name="cuit"
            onChange={handleChange}
          />
          {errors.cuit && <span className="help is-danger">{errors.cuit}</span>}
          </div>
        </div>
        <div className='field'>
          <label className='label'>Address</label>
          <div className='control'>
            <input 
              className='input' 
              type='text' 
              placeholder='Address' 
              name="address"
              onChange={handleChange}
            />
            {errors.address && <span className="help is-danger">{errors.address}</span>}
          </div>
        </div>
        <div className='field'>
          <label className='label'>Phone</label>
          <div className='control'>
            <input 
              className='input' 
              type='text' 
              placeholder='Phone' 
              name="phone"
              onChange={handleChange}
            />
            {errors.phone && <span className="help is-danger">{errors.phone}</span>}
          </div>
        </div>
        <div className='field'>
          <label className='label'>Email</label>
          <div className='control'>
            <input 
              className='input' 
              type='email' 
              placeholder='Email' 
              name="email"
              onChange={handleChange}
            />
            {errors.email && <span className="help is-danger">{errors.email}</span>}
          </div>
        </div>
        <div className='field'>
          <label className='label'>Contact</label>
          <div className='control'>
            <input 
              className='input' 
              type='text' 
              placeholder='Contact' 
              name="contact"
              onChange={handleChange}
            />
            {errors.contact && <span className="help is-danger">{errors.contact}</span>}
          </div>
        </div>
        
        <button
          className="button is-info is-responsive" 
          onClick={() => navigate('/customers')} 
          style={{marginRight: "5px"}}
        >
          Cancel
        </button>
        
        <button 
          className="button is-danger is-responsive" 
          onClick={handleSubmit}
        >
          Save
        </button>
      </form>
    </section>
  )
}

export default NewCustomer;