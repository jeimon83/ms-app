import { Route, Routes } from 'react-router-dom';
import Customers from '../components/customers/customers';
import Services from '../components/services/services';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/customers" element={<Customers />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
}

export default AppRoutes;