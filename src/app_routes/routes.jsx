import { Route, Routes } from 'react-router-dom';
import Customers from '../components/customers/customers';
import Services from '../components/services/services';
import Home from '../components/home';
import NotFound from '../components/not_found';
import CustomerDetails from '../components/customers/customer_details';
import ServiceDetails from '../components/services/service_details';
import NewCustomer from '../components/customers/new_customer';
import NewService from '../components/services/new_service';

function AppRoutes() {
  return (
    <Routes>

      # home
      <Route path="/"  element={<Home />} />

      # customers
      <Route path="/customers" element={<Customers />} />
      <Route path="/customers/:id" element={<CustomerDetails />} />
      <Route path="/customers/new" element={<NewCustomer />} />

      # services
      <Route path="/services" element={<Services />} />
      <Route path="/services/:id" element={<ServiceDetails />} />
      <Route path="/services/new" element={<NewService />} />

      # not found
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default AppRoutes;