import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from './Layout/logo.png';
export default function Layout() {
    return (
    <div>
    <img src={logoImage} alt="logo" />
    <h1>My Portfolio</h1>
    <nav>
    <Link to="/">Home</Link> | <Link to="/about">About</Link> |
    <Link to="/education">Education</Link>| <Link
    to="/project">Project</Link>| <Link to="/contact">Contact</Link> | <Link to="/services">Services</Link>
    </nav>
    <hr />
    </div>
    );
}