import React from "react";
import { NavLink } from "react-router-dom";
import "../style.css";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary container-fluid w-100 sticky">
      <div className="nav-container">
        <header className="App-header navbar-brand">Gymplus</header>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link text-light Navstyle">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/exercise" className="nav-link text-light Navstyle">
              Exercise
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/flight" className="nav-link text-light Navstyle">
              Flight Api
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/SearchCoin" className="nav-link text-light Navstyle">
              SearchCoin
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Recipe" className="nav-link text-light Navstyle">
              Recipes
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Product" className="nav-link text-light Navstyle">
              Product
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/RecipeInfo" className="nav-link text-light Navstyle">
              Recipe Info
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
