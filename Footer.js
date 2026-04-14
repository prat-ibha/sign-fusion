import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="page-footer font-small unique-color-dark mt-5">
            <div style={{ backgroundColor: '#6351ce' }}>
                <div className="container">
                    <div className="row py-4 d-flex justify-content-center align-items-center">
                        <div className="col-md-6 col-lg-5 text-center text-white">
                            <p>Empowering communication with AI-powered sign language translation.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-fluid text-white pt-3' style={{ backgroundColor: 'rgba(33,37,41,1)' }}>
                <div className="container text-md-left mt-5">
                    <div className="row mt-3">
                        <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4">
                            <h6 className="text-uppercase font-weight-bold">Sign Fusion</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }} />
                            <p className='footer-text'>A platform dedicated to bridging the gap between sign language users and others with real-time AI-powered translation.</p>
                        </div>

                        <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4">
                            <h6 className="text-uppercase font-weight-bold">Our Team</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }} />
                            <p>Jyoti Kumari - Tech Lead</p>
                        </div>

                        <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase font-weight-bold">Contact</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }} />
                            <p><i className="fa fa-envelope me-3 ms-0"></i> support@signfusion.com</p>
                            <p><i className="fa fa-phone me-3 ms-0"></i> +91 9266082876</p>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright text-center py-3">
                    © 2025 Copyright <b>Sign Fusion</b>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
