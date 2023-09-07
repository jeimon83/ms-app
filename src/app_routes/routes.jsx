import { Route, Routes } from 'react-router-dom';
import Customers from '../components/customers/customers';
import Services from '../components/services/services';
import Home from '../components/home';
import NotFound from '../components/not_found';
import CustomerDetails from '../components/customers/customer_details';
import ServiceDetails from '../components/services/service_details';

function AppRoutes() {
  return (
    <Routes>

      # home
      <Route path="/"  element={<Home />} />

      # customers
      <Route path="/customers" element={<Customers />} />
      <Route path="/customers/:id" element={<CustomerDetails />} />

      # services
      <Route path="/services" element={<Services />} />
      <Route path="/services/:id" element={<ServiceDetails />} />

      # not found
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default AppRoutes;