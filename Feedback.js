import React from 'react';
import './Feedback.css';

const Feedback = () => {
  return (
    <div className="feedback-container">
      <section className="hero-section text-center">
        <div className="container">
          <h1 className="display-4">Feedback & About Us</h1>
          <div className="divider"></div>
          <p className="animated-text">
            We value your feedback! Help us improve Finger Speak AI by sharing your experience.
            Our mission is to bridge the communication gap using AI-powered sign language translation.
          </p>
        </div>
      </section>

      <section className="mission-section container text-center my-5">
        <h2>Our Mission</h2>
        <div className="divider"></div>
        <p className="mission-text">
          To empower the deaf and hard-of-hearing community by providing accessible, 
          real-time communication tools that translate spoken language into sign language animations.
        </p>
      </section>

      <section className="team-section container my-5">
        <h2 className="text-center">Our Team</h2>
        <div className="divider"></div>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="team-card text-center p-4">
              <img src="https://via.placeholder.com/150" alt="Team Member" className="team-image rounded-circle mb-3" />
              <h3 className="team-name">Jyoti Kumari</h3>
              <p className="team-role">Tech Lead</p>
              <p className="team-description">Lead developer focused on AI and 3D animations.</p>
              <a href="https://www.linkedin.com/in/jyoti-chaudhary-1950a1322/" className="btn btn-primary linkedin-btn" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin mr-2"></i> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section container text-center my-5">
        <h2>Contact Us</h2>
        <div className="divider"></div>
        <p className="contact-description">
          Have questions or suggestions? Reach out to us at:
          <br />
          <strong>Email:</strong> support@signfusion.com
          <br />
          <strong>Phone:</strong> +91 9266082876
        </p>
      </section>
    </div>
  );
};

export default Feedback;

