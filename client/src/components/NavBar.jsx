import React from 'react';
import { Outlet, Link } from "react-router-dom";

const NavBar= () =>{
  return (<>
    <nav>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/people">PEOPLE</Link>
        </li>
        <li>
          <Link to="/clients">FOR CLIENTS</Link>
        </li>
        <li>
          <Link to="/students">FOR STUDENTS</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
    </nav>

    <Outlet/>
  </>);
}
export default NavBar;