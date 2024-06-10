import { ImgCover } from "../ComponentLinks";
import "./FortniteDetails.css";
import { Link } from "react-router-dom";
const FortniteDetails = () => {
  return (
    <>
      <div className="game-details">
        <div className="row">
          <div className="col-lg-12">
            <h2>Fortnite Details</h2>
          </div>
          <div className="col-lg-12">
            <div className="content">
              <div className="row">
                <div className="col-lg-6">
                  <div className="left-info">
                    <div className="left">
                      <h4>Fortnite</h4>
                      <span>Sandbox</span>
                    </div>
                    <ul>
                      <li>
                        <i className="fa fa-star"></i> 4.8
                      </li>
                      <li>
                        <i className="fa fa-download"></i> 2.3M
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="right-info">
                    <ul>
                      <li>
                        <i className="fa fa-star"></i> 4.8
                      </li>
                      <li>
                        <i className="fa fa-download"></i> 2.3M
                      </li>
                      <li>
                        <i className="fa fa-server"></i> 36GB
                      </li>
                      <li>
                        <i className="fa fa-gamepad"></i> Action
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 mb-3">
                  {/* <img src="details-01.jpg" alt="" style={{borderRadius: "23px" , marginBottom: "30px"}} /> */}
                  <ImgCover imgName="details-01.jpg" />
                </div>
                <div className="col-lg-4 mb-3">
                  {/* <img src="details-02.jpg" alt="" style={{borderRadius: "23px" , marginBottom: "30px"}} /> */}
                  <ImgCover imgName="details-02.jpg" />
                </div>
                <div className="col-lg-4 mb-3">
                  {/* <img src="details-03.jpg" alt="" style={{borderRadius: "23px" , marginBottom: "30px"}} /> */}
                  <ImgCover imgName="details-03.jpg" />
                </div>
                <div className="col-lg-12">
                  <p>
                    Cyborg Gaming is free HTML CSS website template provided by
                    TemplateMo. This is Bootstrap v5.2.0 layout. You can make a{" "}
                    <Link to="https://paypal.me/templatemo" target="_blank">
                      small contribution via PayPal
                    </Link>{" "}
                    to info [at] templatemo.com and thank you for supporting. If
                    you want to get the PSD source files, please contact us.
                    Lorem ipsum dolor sit consectetur es dispic dipiscingei
                    elit, sed doers eiusmod lisum hored tempor.
                  </p>
                </div>
                <div className="col-lg-12">
                  <div className="main-border-button">
                    <Link to="/">Download Fortnite Now!</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FortniteDetails;
