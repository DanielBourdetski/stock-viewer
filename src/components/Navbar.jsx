import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const notActiveStyle = {
    textDecoration: 'none',
  };

  return (
    <div className="mt-5">
      <h1 className="display-4">Stock Viewer</h1>
      <nav>
        <ul className="d-flex flex-row justify-content-evenly w-25 m-auto list-group list-group">
          <li className="list-group-item border rounded-3 px-4">
            <NavLink to="about" style={({ isActive }) => (isActive ? undefined : notActiveStyle)}>
              About
            </NavLink>
          </li>
          <li className="list-group-item border rounded-3 px-4">
            <NavLink to="stocks" style={({ isActive }) => (isActive ? undefined : notActiveStyle)}>
              <span>Stocks</span>
            </NavLink>
          </li>
          <li className="list-group-item border rounded-3 px-4">
            <NavLink to="my-stocks" style={({ isActive }) => (isActive ? undefined : notActiveStyle)}>
              Saved Stocks
            </NavLink>
          </li>
          <li className="list-group-item border rounded-3 px-4">
            <NavLink to="my-stocks" style={({ isActive }) => (isActive ? undefined : notActiveStyle)}>
              Sign Up
            </NavLink>
          </li>
          <li className="list-group-item border rounded-3 px-4">
            <NavLink to="my-stocks" style={({ isActive }) => (isActive ? undefined : notActiveStyle)}>
              Sign In
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
