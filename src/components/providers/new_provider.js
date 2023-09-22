import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import apiUrl from '../../api_routes/api_url';

function NewProvider() {
  const [name, setName] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const provider = { name }

    axios.post(apiUrl() + '/providers', provider).then((response) => {
      if (response.status === 201) {
        navigate('/providers')
      }
    }).catch((error) => {
      console.error('Error fetching data: ', error)
    })
  }

  return (
    <section className="section">
      <h1 className="title">New Provider</h1>
      <form className="box">
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
        </div>
{/*         <div className='field'>
          <label className='label'>Address</label>
          <div className='control'>
            <input className='input' type='text' placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
        </div>
        <div className='field'>
          <label className='label'>Phone</label>
          <div className='control'>
            <input className='input' type='text' placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
        </div>
        <div className='field'>
          <label className='label'>Email</label>
          <div className='control'>
            <input className='input' type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
        </div> */}
        <button className="button is-info is-responsive" onClick={() => navigate('/providers')} style={{marginRight: "5px"}}>Cancel</button>
        <button className="button is-danger is-responsive" onClick={handleSubmit}>Save</button>
      </form>
    </section>
  )
}

export default NewProvider;