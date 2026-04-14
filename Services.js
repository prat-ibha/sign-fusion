import React from "react";
import { Link } from "react-router-dom";
import imgConvert from "../../Assets/convert.png";
import imgLearnSign from "../../Assets/learn-sign.jpg";
import imgVideos from "../../Assets/videos.png";

function Services() {
  return (
    <section id="services">
      <div className="container">
        
        <div className="card-deck">
          <div className="row">
            <div className="col-lg-4 mt-5">
              <div className="card col-lg-12 h-100 d-flex flex-column justify-content-between card-background">
                <img className="card-img-top" src={imgConvert} alt="Convert Clipart" />
                <div className="card-body">
                  <h5 className="card-title">Text To Sign Convert</h5>
                  <p className="card-text">
                  Want to convert text into Indian Sign Language instantly? Simply type or speak your text, and our AI-powered system will seamlessly translate it into ISL with animated gestures. Experience effortless and inclusive communication with just a few clicks!
                  </p>
                </div>
                <div className="card-footer p-0 m-0" style={{ border: "none" }}>
                  <Link
                    to="/sign-kit/convert"
                    className="btn btn-info w-100 p-3"
                    style={{ fontSize: "large" }}
                  >
                    EXPLORE NOW!
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-5">
              <div className="card col-lg-12 h-100 d-flex flex-column justify-content-between card-background">
                <img className="card-img-top" src={imgLearnSign} alt="Learn Sign Clipart" />
                <hr className="m-0"></hr>
                <div className="card-body">
                  <h5 className="card-title">Learn Sign Language</h5>
                  <p className="card-text">
                  Want to master Indian Sign Language effortlessly? Our AI-powered platform enables you to learn ISL through interactive videos and real-time gesture recognition. Simply upload an image or video, and watch as it gets translated into ISL, making learning more accessible and engaging. Start your journey towards inclusive communication today!
                  </p>
                </div>
                <div className="card-footer p-0 m-0" style={{ border: "none" }}>
                  <Link
                    to="/sign-kit/learn-sign"
                    className="btn btn-info w-100 p-3"
                    style={{ fontSize: "large" }}
                  >
                    EXPLORE NOW!
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-5">
              <div className="card col-lg-12 h-100 d-flex flex-column justify-content-between card-background">
                <img className="card-img-top" src={imgVideos} alt="Videos Clipart" />
                <div className="card-body">
                  <h5 className="card-title">Media Access</h5>
                  <p className="card-text">
                    Interested in creating wonderful videos using Indian Sign
                    Language? Upload your transcript as a text file, type your
                    text in the provided area or speak through your mic and the
                    system will automatically create a video using ISL for your
                    content! Share your vidoes with the entire community!
                  </p>
                </div>
                <div className="card-footer p-0 m-0" style={{ border: "none" }}>
                  <Link
                    to="/sign-kit/all-videos"
                    className="btn btn-info w-100 p-3"
                    style={{ fontSize: "large" }}
                  >
                    EXPLORE NOW!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
