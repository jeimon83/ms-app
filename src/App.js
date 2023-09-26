import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Navbar from './layout/navbar.js';
import Footer from './layout/footer.js';
import AppRoutes from './app_routes/routes';
import 'bulma/css/bulma.min.css';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (

    <Router>
      <AuthProvider>
        <div className="App" style={{textAlign: "left"}}>

          <header>
            <Navbar />
          </header>

          <main>
            <AppRoutes />
          </main>

          <footer>
            <Footer />
          </footer>

        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
