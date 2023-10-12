import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "../../axios-config"
import apiUrl from '../../api_routes/api_url';
import { useCustomerContext } from '../../contexts/CustomerContext';

function NewAntenna() {
  const [cpa, setCPA] = useState('');
  const [location, setLocation] = useState('');
  const [service, setService] = useState('');
  const navigate = useNavigate();
  const { customer } = useCustomerContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const antenna = { cpa, location, customer_id: customer.id, service };

    axios.post(apiUrl() + '/antennas', antenna)
      .then((response) => {
        if (response.status === 201) {
          navigate('/antennas');
        }
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }

  //const [apiCustomerResult, setApiCustomerResult] = useState('');
  //const [customerId, setCustomerId] = useState('');
  //const [customerSearch, setCustomerSearch] = useState('');
  // const handleSearchInputChange = (e, inputType) => {
  //   if (inputType === 'service') { setService(e.target.value) }
  //   const data = e.target.value
    
  //   if (inputType === 'customer' && data.length < 3) {      
  //     setApiCustomerResult('')
  //     setCustomerSearch('')
  //     setCustomerId('')
  //   }
    
  //   if (inputType === 'customer') {
  //     setCustomerSearch(data)

  //     if (data.length >= 3) {
  //       const filteredCustomers = customers.filter(customer => customer.name.toLowerCase().includes(data.toLowerCase()));
  //       if (filteredCustomers.length > 0) {
  //         setCustomerId(filteredCustomers[0].id);
  //         setApiCustomerResult(filteredCustomers[0].name);
  //       } else {
  //         setCustomerId('');
  //         setApiCustomerResult('');
  //       }
  //     }
  //   }
  // };

  // const handleSearchKeyDown = (e, inputType) => {
  //   if (e.key === 'Backspace' && inputType === 'customer' && customerSearch.length === 3) { return; }
  // };

  // useEffect(() => {
  //   const customers = [] 
  //   const fetchCustomers = async () => {
  //     try {
  //       const response = await axios.get(apiUrl() + '/customers');
  //       const data = response.data;
  //       if (data !== null) {
  //         customers = data;
  //       }
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  //   fetchCustomers();
  // }, []);

  return (
    <section className="section">
      <h1 className="title">New Antenna</h1>
      <div className="form-container" style={{ width: '50%' }}>
        <form className="box">
          <div className='field'>
            <label className='label'>Customer</label>
            <div className='control'>
              <input className='input' type='text' placeholder='Location' value={customer.name} readOnly />
            </div>
          </div>
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
          {/* <div className='field is-flex'>
            <div style={{ marginRight: '1rem' }}>
              <label className='label'>Search Customer</label>
              <div className='control'>
                <input
                  className='input'
                  type='text'
                  placeholder='.....'
                  value={customerSearch}
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
          </div> */}
          <div className='field'>
            <label className='label'>Service</label>
            <div className='control'>
              <input 
                className='input' 
                type='text' 
                placeholder='Service' 
                value={service} 
                onChange={(e) => setService(e.target.value)} />
            </div>
          </div>
          <button className="button is-dark is-responsive" onClick={() => navigate('/customers')} style={{ marginRight: "5px" }}>Back to Customers</button>
          <button className="button is-info is-responsive" onClick={() => navigate('/antennas')} style={{ marginRight: "5px" }}>Cancel</button>
          <button className="button is-danger is-responsive" onClick={handleSubmit}>Save</button>
        </form>
      </div>
    </section>
  )
}

export default NewAntenna;
