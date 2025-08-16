import { Link } from "react-router-dom";
import brandImg from "./brand-img.png";

import "./Navbar.css";


function Navbar() {

  
  return (
    <div id="nav2">
      <nav className="navbar navbar-expand-lg main-nav" id="nav-container">
        <div className="container-fluid">
          <img src={brandImg} className="brand-img" alt="navimg" />
          <Link to="/" className="navbar-brand">
           Big_Bazar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse link-container"
            id="navbarScroll"
          >
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              {/* <li class="nav-item">
                <Link to="/" class="nav-link active" aria-current="page">
                  Home
                </Link>
              </li> */}
             
             
            </ul>
            
            <form class="d-flex" role="search">
              
                <>
                  <Link to="/signup" className="btn signup btn btn-success">
                    Signup
                  </Link>
                 
                </>
              
              
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
