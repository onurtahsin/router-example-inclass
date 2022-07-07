import { Link,NavLink } from 'react-router-dom';
import logo from '../img/logo.png';

function Nav() {
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 me-3 mb-lg-0">
            <li className="nav-item">
              {/* prop.isActive yazarsak sadece parantez içinde ama direkt kullanmak istiyorsak  ({isActive}) bu şekilde */}
              <NavLink style={({isActive})=> ({color: isActive && '#ff7f00'})} to="/" className="nav-link active" aria-current="page">
              Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                style={({ isActive }) => ({ color: isActive && '#ff7f00' })}
                to="/instructors"
                className="nav-link"
                aria-current="page"
              >
                Instructors
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                style={({ isActive }) => ({ color: isActive && '#ff7f00' })}
                to="/paths"
                className="nav-link"
                aria-current="page"
              >
                Paths
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                style={({ isActive }) => ({ color: isActive && '#ff7f00' })}
                to="/contact"
                className="nav-link"
                aria-current="page"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;