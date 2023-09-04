import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import "bulma/css/bulma.css";
import Navbar from './layout/navbar.jsx';
import Footer from './layout/footer.jsx';
import AppRoutes from './app_routes/routes';

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
