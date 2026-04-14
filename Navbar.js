import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';

function Navbar() {
    return (
        <nav className="navbar navbar-light bg-white navbar-expand-lg fixed-top py-3 shadow">
            <div className="container d-flex justify-content-between align-items-center position-relative">
                
                {/* Left-Aligned Sign Fusion */}
                <div className="d-flex align-items-center">
                    <Link to='/sign-kit/home' className="navbar-brand mb-0 h1 text-dark">
                        <img src={logo} width="30" height="30" className="d-inline-block align-top me-3" alt="Logo" />
                        <b>SignFusion</b>
                    </Link>
                </div>

                {/* Centered HACK-N-WIN 2.O */}
                <div className="position-absolute start-50 translate-middle-x fw-bold" style={{ fontSize: '1.5rem', color: 'green' }}>
                Finger Speak, AI Listen 
                </div>

                {/* Right-Aligned Navbar Toggler and Links */}
                <div className="d-flex align-items-center">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

                {/* Collapsible Menu */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarResponsive">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link to='/sign-kit/home' className="nav-link text-dark"><b>Home</b></Link></li>
                        <li className="nav-item"><Link to='/sign-kit/feedback' className="nav-link text-dark"><b>About</b></Link></li>
                        <li className="nav-item"><Link to='/sign-kit/convert' className="nav-link text-dark"><b>Features</b></Link></li>
                        <li className="nav-item"><Link to='/sign-kit/all-videos' className="nav-link text-dark"><b>Explore</b></Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
