import { Route, Routes } from 'react-router-dom';

import { CustomerProvider } from '../contexts/CustomerContext';
import { AuthProvider } from '../contexts/AuthContext';

// home
import Home from '../components/home';
import Welcome from '../components/welcome';
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

// users
import Login from '../components/users/login';
import SignUp from '../components/users/sign_up';
import Logout from '../components/users/logout';

// auth
import { RequireAuth } from '../components/auth/RequireAuth';


function AppRoutes() {
  return (
    <AuthProvider>

      <CustomerProvider>

        <Routes>
          # home
          <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />

          # welcome
          <Route path="/welcome" element={<RequireAuth><Welcome /></RequireAuth>} />

          # customers
          <Route path="/customers" element={<RequireAuth><Customers /></RequireAuth>} />
          <Route path="/customers/:id" element={<RequireAuth><CustomerDetails /></RequireAuth>} />
          <Route path="/customers/new" element={<RequireAuth><NewCustomer /></RequireAuth>} />

          # services
          <Route path="/services" element={<RequireAuth><Services /></RequireAuth>} />
          <Route path="/services/:id" element={<RequireAuth><ServiceDetails /></RequireAuth>} />
          <Route path="/services/new" element={<RequireAuth><NewService /></RequireAuth>} />

          # antennas
          <Route path="/antennas" element={<RequireAuth><Antennas /></RequireAuth>} />
          <Route path="/antennas/:id" element={<RequireAuth><AntennaDetails /></RequireAuth>} />
          <Route path="/antennas/new" element={<RequireAuth><NewAntenna /></RequireAuth>} />

          # providers
          <Route path="/providers" element={<RequireAuth><Providers /></RequireAuth>} />
          <Route path="/providers/:id" element={<RequireAuth><ProviderDetails /></RequireAuth>} />
          <Route path="/providers/new" element={<RequireAuth><NewProvider /></RequireAuth>} />

          # not found
          <Route path="*" element={<RequireAuth><NotFound /></RequireAuth>} />

          # users
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/logout" element={<Logout />} />

        </Routes>

      </CustomerProvider>

    </AuthProvider>
  );
}

export default AppRoutes;