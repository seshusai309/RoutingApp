import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Header extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="subnav1">
          <img
            className="navImg"
            alt="wave"
            src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          />
          <h1>Wave</h1>
        </div>
        <div className="subnav2">
          <ul className="ulOrder">
            <li>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
export default Header
