import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import apiUrl from '../../api_routes/api_url';

function NewService() {
  const [bandwidth, setBandwidth] = useState('')
  const [technology, setTechnology] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const service = { technology, bandwidth }

    axios.post(apiUrl() + '/services', service).then((response) => {
      if (response.status === 201) {
        navigate('/services')
      }
    }).catch((error) => {
      console.error('Error fetching data: ', error)
    })
  }

  return (
    <section className="section">
      <h1 className="title">New Service</h1>
      <form className="box">
        <div className="field">
          <label className="label">Technology</label>
          <div className="control">
            <input className="input" type="text" placeholder="Technology" value={technology} onChange={(e) => setTechnology(e.target.value)} required />
          </div>
        </div>
        <div className='field'>
          <label className='label'>Bandwidth</label>
          <div className='control'>
            <input className='input' type='text' placeholder='Megas' value={bandwidth} onChange={(e) => setBandwidth(e.target.value)} />
          </div>
        </div>
        <button className="button is-info is-responsive" onClick={() => navigate('/services')} style={{marginRight: "5px"}}>Cancel</button>
        <button className="button is-danger is-responsive" onClick={handleSubmit}>Save</button>
      </form>
    </section>
  )
}

export default NewService;