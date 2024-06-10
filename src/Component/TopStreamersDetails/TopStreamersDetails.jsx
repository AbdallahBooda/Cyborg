import "./TopStreamersDetails.css";
import { Link } from "react-router-dom";
const TopStreamersDetails = () => {
  return (
    <>
      <div className="top-streamers">
        <ul>
          <li>
            <span>01</span>
            <img
              src="avatar-01.jpg"
              alt=""
              style={{
                maxWidth: "46px",
                borderRadius: "50%",
                marginRight: "15px",
              }}
            />
            <h6>
              <i className="fa fa-check"></i> LahutaM
            </h6>
            <div className="main-button">
              <Link to="/">Follow</Link>
            </div>
          </li>
          <li>
            <span>02</span>
            <img
              src="avatar-02.jpg"
              alt=""
              style={{
                maxWidth: "46px",
                borderRadius: "50%",
                marginRight: "15px",
              }}
            />
            <h6>
              <i className="fa fa-check"></i> Kengan
            </h6>
            <div className="main-button">
              <Link to="/">Follow</Link>
            </div>
          </li>
          <li>
            <span>03</span>
            <img
              src="avatar-03.jpg"
              alt=""
              style={{
                maxWidth: "46px",
                borderRadius: "50%",
                marginRight: "15px",
              }}
            />
            <h6>
              <i className="fa fa-check"></i> Areluwa
            </h6>
            <div className="main-button">
              <Link to="/">Follow</Link>
            </div>
          </li>
          <li>
            <span>04</span>
            <img
              src="avatar-04.jpg"
              alt=""
              style={{
                maxWidth: "46px",
                borderRadius: "50%",
                marginRight: "15px",
              }}
            />
            <h6>
              <i className="fa fa-check"></i> Omeg
            </h6>
            <div className="main-button">
              <Link to="/">Follow</Link>
            </div>
          </li>
          <li>
            <span>05</span>
            <img
              src="avatar-01.jpg"
              alt=""
              style={{
                maxWidth: "46px",
                borderRadius: "50%",
                marginRight: "15px",
              }}
            />
            <h6>
              <i className="fa fa-check"></i> GangTeam
            </h6>
            <div className="main-button">
              <Link to="/">Follow</Link>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TopStreamersDetails;
