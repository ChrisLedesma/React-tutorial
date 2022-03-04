import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//link doesn't reload the page when clicked
//NavLink acts the same but adds and 'active' tag
const Navbar = (props) => {
  //redirect to about after 2 secs
  /*   setTimeout(() => {
    props.history.push("/about");
  }, 2000); */
  /* let navigate = useNavigate()
  setTimeout(() => {
      navigate('/about')
  },2000) */

  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo">PokeTimes</a>
        <ul className="right">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
