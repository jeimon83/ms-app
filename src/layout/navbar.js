import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

function Navbar() {
  const [isActive, setisActive] = useState(false);
  const toggleNav = () => { setisActive(!isActive); }
  const closeMenu = () => { setisActive(false); }

  const logoStyle = {fontSize: "24px", marginLeft: "16px", fontWeight: "700", alignItems: "center"}

  const user = localStorage.getItem("user");


  const auth = useAuth();
  const logout = auth.logout;

  const handleLogout = () => {
    logout();
  }

  // const toggleHover = () => { setIsHovered(!isHovered); }
  // const [isHovered, setIsHovered] = useState(false);
  // const dropdownclassName = `navbar-item has-dropdown ${isHovered ? 'is-hoverable' : ''}`;

  return (
    <section 
      className="section" 
      style={{padding: "1rem 1.5rem"}}
    >
      <nav className="navbar" role="navigation" aria-label="main navigation" style={{borderBottom: "2px solid #e0e5ea", marginBottom: "20px"}}>
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src="../logo2.png" width="auto" height="60" 
            alt="logo de mundo satelital" style={{marginLeft: "-10px"}}/>
            <h1 className="title" style={logoStyle}>Mundo Satelital</h1>
          </a>

          <p
            role="button" 
            className={`navbar-burger ${isActive ? "is-active" : ""}`}
            aria-label="menu" 
            aria-expanded={isActive} 
            data-target="navbarBasic"
            onClick={toggleNav}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </p>
        </div>

        <div 
          id="navbarBasic" 
          className={`navbar-menu ${isActive ? "is-active" : ""}`} 
          style={{marginLeft: "20px", marginTop: "3px"}}
        > 
      { user && (
          <div className="navbar-start">

            <div className="navbar-item has-dropdown is-hoverable">

            
              <p className="navbar-link">
                Customers
              </p>

              <div className="navbar-dropdown">
                <Link className="navbar-item" to="/customers" onClick={closeMenu}>
                  All customers
                </Link>
                <Link className="navbar-item" to="/customers/new" onClick={closeMenu}>
                  New customer
                </Link>
                <hr className="navbar-divider" />
                <a className="navbar-item" href="/">
                  ########
                </a>
              </div>
            </div>

            <div className="navbar-item has-dropdown is-hoverable">
              <p className="navbar-link">
                Services
              </p>

              <div className="navbar-dropdown">
                <Link className="navbar-item" to="/services" onClick={closeMenu}>
                  All services
                </Link>
                <Link className="navbar-item" to="/services/new" onClick={closeMenu}>
                  New service
                </Link>
                <hr className="navbar-divider" />
                <a className="navbar-item" href="/">
                  ########
                </a>
              </div>
            </div>

            <div className="navbar-item has-dropdown is-hoverable">
              <p className="navbar-link">
                Providers
              </p>

              <div className="navbar-dropdown">
                <Link className="navbar-item" to="/providers" onClick={closeMenu}>
                  All providers
                </Link>
                <Link className="navbar-item" to="/providers/new" onClick={closeMenu}>
                  New provider
                </Link>
                <hr className="navbar-divider" />
                <a className="navbar-item" href="/">
                  ########
                </a>
              </div>
            </div>

            <div className="navbar-item has-dropdown is-hoverable">
              <p className="navbar-link">
                Antennas
              </p>

              <div className="navbar-dropdown">
                <Link className="navbar-item" to="/antennas" onClick={closeMenu}>
                  All antennas
                </Link>
                {/* <Link className="navbar-item" to="/antennas/new" onClick={closeMenu}>
                  New antenna
                </Link> */}
                <hr className="navbar-divider" />
                <a className="navbar-item" href="/">
                  ########
                </a>
              </div>
            </div>

            <div className="navbar-item has-dropdown is-hoverable">
              <p className="navbar-link">
                More
              </p>

              <div className="navbar-dropdown">
                <a className="navbar-item" href="/" onClick={closeMenu}>
                  About
                </a>
                <a className="navbar-item" href="/" onClick={closeMenu}>
                  Jobs
                </a>
                <a className="navbar-item" href="/" onClick={closeMenu}>
                  Contact
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item" href="/" onClick={closeMenu}>
                  Report an issue
                </a>
              </div>
            </div>
          </div>
        )}

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
              {
                  !user && (
                    <a className="button is-info is-small" style={{fontSize: "14px"}} href="/signup">
                      <strong>Sign up</strong>
                    </a>
                  )
                }
                {
                  !user && (
                    <a className="button is-dark is-small" style={{fontSize: "14px", fontWeight: "500"}} href="/login">
                      Log in
                    </a>
                  )
                }
                {
                  user && (
                    <a className="button is-dark is-small" style={{fontSize: "14px", fontWeight: "500"}}  onClick={handleLogout} href="/logout">
                      Log out
                    </a>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;