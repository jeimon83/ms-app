import { Route, Routes } from 'react-router-dom';

// home
import Home from '../components/home';

// not found
import NotFound from '../components/not_found';

// services
import Services from '../components/services/services';
import ServiceDetails from '../components/services/service_details';
import NewService from '../components/services/new_service';

// customers
import Customers from '../components/customers/customers';
import CustomerDetails from '../components/customers/customer_details';
import NewCustomer from '../components/customers/new_customer';

// antennas
import Antennas from '../components/antennas/antennas';
import AntennaDetails from '../components/antennas/antenna_details';
import NewAntenna from '../components/antennas/new_antenna';

// providers
import Providers from '../components/providers/providers';
import ProviderDetails from '../components/providers/provider_details';
import NewProvider from '../components/providers/new_provider';


function AppRoutes() {
  return (
    <Routes>

      # home
      <Route path="/"               element={<Home />} />

      # customers
      <Route path="/customers"      element={<Customers />} />
      <Route path="/customers/:id"  element={<CustomerDetails />} />
      <Route path="/customers/new"  element={<NewCustomer />} />

      # services
      <Route path="/services"       element={<Services />} />
      <Route path="/services/:id"   element={<ServiceDetails />} />
      <Route path="/services/new"   element={<NewService />} />

      # antennas
      <Route path="/antennas"       element={<Antennas />} />
      <Route path="/antennas/:id"   element={<AntennaDetails />} />
      <Route path="/antennas/new"   element={<NewAntenna />} />

      # providers
      <Route path="/providers"      element={<Providers />} />
      <Route path="/providers/:id"  element={<ProviderDetails />} />
      <Route path="/providers/new"  element={<NewProvider />} />

      # not found
      <Route path="*"               element={<NotFound />} />

    </Routes>
  );
}

export default AppRoutes;