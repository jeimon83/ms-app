import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Navbar from './layout/navbar.js';
import Footer from './layout/footer.js';
import AppRoutes from './app_routes/routes';
import 'bulma/css/bulma.min.css';

function App() {
  return (
    <Router>
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
      </Router>
  );
}

export default App;
