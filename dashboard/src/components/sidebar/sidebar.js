import React from "react";
import logo from "../../assets/images/logo512.png"
import { Link } from "react-router-dom";

function SideBar() {
    return (
        <ul
      className="navbar-nav bg-gradient-danger sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="/"
      >
        <div className="sidebar-brand-icon">
          <img className="w-75" src={logo} alt="logo" />
        </div>
      </Link>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item active">
        <Link className="nav-link" to="/dashboard">
          <i class="bi bi-speedometer2"></i>
          <span>Dashboard</span>
        </Link>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Actions</div>

      <li className="nav-item">
        <Link className="nav-link collapsed" to="/pages">
          <i class="bi bi-archive"></i>
          <span>Ultimo producto</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/charts">
          <i class="bi bi-bar-chart"></i>
          <span>Tipos en DB</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/tables">
          <i class="bi bi-table"></i>
          <span>Productos</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/users">
          <i class="bi bi-table"></i>
          <span>Usuarios</span>
        </Link>
      </li>

      <hr className="sidebar-divider d-none d-md-block" />
    </ul>
  );
}

export default SideBar;