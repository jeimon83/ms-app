import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import apiUrl from '../../api_routes/api_url';

function NewAntenna() {
  const [cpa, setCPA] = useState('')
  const [location, setLocation] = useState('')
  const [customer, setCustomer] = useState('')
  const [service, setService] = useState('')
  const [status, setStatus] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const antenna = { cpa, location, customer, service, status }

    axios.post(apiUrl() + '/antennas', antenna).then((response) => {
      if (response.status === 201) {
        navigate('/antennas')
      }
    }).catch((error) => {
      console.error('Error fetching data: ', error)
    })
  }

  return (
    <section className="section">
      <h1 className="title">New Antenna</h1>
      <form className="box">
        <div className="field">
          <label className="label">CPA</label>
          <div className="control">
            <input className="input" type="text" placeholder="CPA" value={cpa} onChange={(e) => setCPA(e.target.value)} required />
          </div>
        </div>
        <div className='field'>
          <label className='label'>Location</label>
          <div className='control'>
            <input className='input' type='text' placeholder='Location' value={location} onChange={(e) => setLocation(e.target.value)} />
          </div>
        </div>
        <div className='field'>
          <label className='label'>Customer</label>
          <div className='control'>
            <input className='input' type='text' placeholder='Customer' value={customer} onChange={(e) => setCustomer(e.target.value)} />
          </div>
        </div>
        <div className='field'>
          <label className='label'>Service</label>
          <div className='control'>
            <input className='input' type='text' placeholder='Service' value={service} onChange={(e) => setService(e.target.value)} required />
          </div>
        </div>
        <div className='field'>
          <label className='label'>Status</label>
          <div className='control'>
            <input className='input' type='text' placeholder='Status' value={status} onChange={(e) => setStatus(e.target.value)} />
          </div>
        </div>
        <button className="button is-info is-responsive" onClick={() => navigate('/antennas')} style={{marginRight: "5px"}}>Cancel</button>
        <button className="button is-danger is-responsive" onClick={handleSubmit}>Save</button>
      </form>
    </section>
  )
}

export default NewAntenna;