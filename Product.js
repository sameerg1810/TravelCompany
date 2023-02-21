import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div className="container-fluid w-50">
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Product</h5>
          <div className="d-flex justify-content-between">
            <ul>
              <li>
                {" "}
                <button className="btn btn-outline-secondary">
                  <NavLink className="nav-link" to="/Product/Products">
                    Products
                  </NavLink>
                </button>
              </li>
              <li>
                <button className="btn btn-outline-secondary">
                  <NavLink className="nav-link" to="/Products/User">
                    User
                  </NavLink>
                </button>
              </li>
            </ul>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
