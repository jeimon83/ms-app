import { Link } from "react-router-dom";

function Navbar() {
  return (
    <section className="section" style={{padding: "1rem 1.5rem"}}>
      <nav className="navbar" role="navigation" aria-label="main navigation" style={{borderBottom: "2px solid #e0e5ea", marginBottom: "20px"}}>
        <div className="navbar-brand">
          <a className="navbar-item" href="https://www.mundosatelital.com.ar">
            <img src="logo2.png" width="auto" height="60" alt="logo de mundo satelital"/>
            <h1 className="title" style={{fontSize: "24px", marginLeft: "16px", fontWeight: "700", alignItems: "center"}}>Mundo Satelital</h1>
          </a>

          <a
            role="button" className="navbar-burger" aria-label="menu" 
            aria-expanded="false" data-target="navbarBasicExample" href="/"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu" style={{marginLeft: "20px", marginTop: "3px"}}>
          <div className="navbar-start">
            <a className="navbar-item" href="/">
              Home
            </a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" href="/">
                Customers
              </a>

              <div className="navbar-dropdown">
                <Link className="navbar-item" to="/customers">
                  All customers
                </Link>
                <Link className="navbar-item" to="/customers/new">
                  New customer
                </Link>
                <a className="navbar-item" href="/">
                  Edit customer
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item" href="/">
                  ########
                </a>
              </div>
            </div>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" href="/">
                Services
              </a>

              <div className="navbar-dropdown">
                <Link className="navbar-item" to="/services">
                  All services
                </Link>
                <Link className="navbar-item" to="/customers/new">
                  New service
                </Link>
                <a className="navbar-item" href="/">
                  Edit service
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item" href="/">
                  ########
                </a>
              </div>
            </div>

            <a className="navbar-item" href="/">
              Providers
            </a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" href="/">
                More
              </a>

              <div className="navbar-dropdown">
                <a className="navbar-item" href="/">
                  About
                </a>
                <a className="navbar-item" href="/">
                  Jobs
                </a>
                <a className="navbar-item" href="/">
                  Contact
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item" href="/">
                  Report an issue
                </a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-info is-small" style={{fontSize: "14px"}} href="/">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-dark is-small" style={{fontSize: "14px", fontWeight: "500"}} href="/">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;