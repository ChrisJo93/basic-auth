import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="nav-0-container">
      <div className="nav-1-container">
        <div className="nav-2">
          <div className="nav-3">
            <div>
              <a href="/" className="nav-4-logo">
                <span className="nav-4-logo-span">Navigation</span>
              </a>
            </div>
            <div className="nav-5-links">
              <Link to="/">Home</Link>
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
