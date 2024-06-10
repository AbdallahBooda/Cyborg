import { Link } from "react-router-dom";
import "./HowToStart.css";

const HowToStart = () => {
  return (
    <>
      <div className="start-stream">
        <div className="col-lg-12">
          <div className="heading-section">
            <h4>
              <em>How To Start Your</em> Live Stream
            </h4>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="item">
                <div className="icon">
                  <img
                    src="service-01.jpg"
                    alt=""
                    style={{ maxWidth: "60px", borderRadius: "50%" }}
                  />
                </div>
                <h4>Go To Your Profile</h4>
                <p>
                  Cyborg Gaming is free HTML CSS website template provided by
                  TemplateMo. This is Bootstrap v5.2.0 layout.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="item">
                <div className="icon">
                  <img
                    src="service-02.jpg"
                    alt=""
                    style={{ maxWidth: "60px", borderRadius: "50%" }}
                  />
                </div>
                <h4>Live Stream Button</h4>
                <p>
                  If you wish to support us, you can make a{" "}
                  <Link href="https://paypal.me/templatemo" target="_blank">
                    small contribution via PayPal
                  </Link>{" "}
                  to info [at] templatemo.com
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="item">
                <div className="icon">
                  <img
                    src="service-03.jpg"
                    alt=""
                    style={{ maxWidth: "60px", borderRadius: "50%" }}
                  />
                </div>
                <h4>You Are Live</h4>
                <p>
                  You are not allowed to redistribute this template's
                  downloadable ZIP file on any other template collection
                  website.
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="main-button">
                <Link to="/profile">Go To Profile</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowToStart;
