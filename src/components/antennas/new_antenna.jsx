import { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import apiUrl from '../../api_routes/api_url';

function NewAntenna() {
  const [cpa, setCPA] = useState('');
  const [location, setLocation] = useState('');
  const [customer, setCustomer] = useState('');
  const [service, setService] = useState('');
  const navigate = useNavigate();

  const [apiCustomerResult, setApiCustomerResult] = useState([]);
  const [apiServiceResult, setApiServiceResult] = useState([]);

  const debouncedCustomerSearch = debounce(async (value) => {
    try {
      const response = await axios.get(apiUrl() + '/customers?name=' + value);
      const data = response.data;
      data.length > 0 ? setApiCustomerResult(data[0].name) : setApiCustomerResult('');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, 300);

  const debouncedServiceSearch = debounce(async (value) => {
    try {
      const response = await axios.get(apiUrl() + '/services?bandwith=' + value);
      const data = response.data;
      data.length > 0 ? setApiServiceResult(data[0].name) : setApiServiceResult('');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, 300);

  const handleSearchInputChange = (e, inputType) => {
    const newValue = e.target.value;
    if (newValue.length < 3) { (inputType === 'customer') ? setApiCustomerResult([]) : setApiServiceResult([]) }
    (inputType === 'customer') ? setCustomer(newValue) : setService(newValue);
  };

  const handleSearchKeyDown = (e, inputType) => {
    if (e.key === 'Backspace' && inputType === 'customer' && customer.length === 3) { return; }
    if (e.key === 'Backspace' && inputType === 'service' && service.length === 3) { return; }
  };

  useEffect(() => {
    if (customer.length >= 3) {
      debouncedCustomerSearch(customer);
    }
  }, [customer, debouncedCustomerSearch]);

  useEffect(() => {
    if (service.length >= 3) {
      debouncedServiceSearch(service);
    }
  }, [service, debouncedServiceSearch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const antenna = { cpa, location, customer, service };

    axios
      .post(apiUrl() + '/antennas', antenna)
      .then((response) => {
        if (response.status === 201) {
          navigate('/antennas');
        }
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }

  return (
    <section className="section">
      <h1 className="title">New Antenna</h1>
      <div className="form-container" style={{ width: '50%' }}>
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
          <div className='field is-flex'>
            <div style={{ marginRight: '1rem' }}>
              <label className='label'>Search Customer</label>
              <div className='control'>
                <input
                  className='input'
                  type='text'
                  placeholder='.....'
                  value={customer}
                  onChange={(e) => handleSearchInputChange(e, 'customer')}
                  onKeyDown={(e) => handleSearchKeyDown(e, 'customer')}
                />
              </div>
            </div>
            <div>
              <label className='label'>Customer</label>
              <div className='control'>
                <input className='input' type='text' placeholder='Customer' value={apiCustomerResult} readOnly />
              </div>
            </div>
          </div>

          <div className='field is-flex'>
            <div style={{ marginRight: '1rem' }}>
              <label className='label'>Search Service</label>
              <div className='control'>
                <input
                  className='input'
                  type='text'
                  placeholder='.....'
                  value={service}
                  onChange={(e) => handleSearchInputChange(e, 'service')}
                  onKeyDown={(e) => handleSearchKeyDown(e, 'service')}
                />
              </div>
            </div>
            <div>
              <label className='label'>Service</label>
              <div className='control'>
                <input className='input' type='text' placeholder='Service' value={apiServiceResult} readOnly />
              </div>
            </div>
          </div>
          <button className="button is-info is-responsive" onClick={() => navigate('/antennas')} style={{ marginRight: "5px" }}>Cancel</button>
          <button className="button is-danger is-responsive" onClick={handleSubmit}>Save</button>
        </form>
      </div>
    </section>
  )
}

export default NewAntenna;
