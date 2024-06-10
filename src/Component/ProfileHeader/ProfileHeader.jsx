import { ImgCover, YourMostPopularClips } from '../ComponentLinks';
import './ProfileHeader.css'
import { Link } from "react-router-dom";

const ProfileHeader = () => {
  return (
    <>
      <div className="main-profile ">
        <div className="row">
          <div className="col-lg-4">
            {/* <img src="profile.jpg" alt="" style={{ borderRadius: "23px" }} /> */}
            <ImgCover imgName="profile.jpg"/>
          </div>
          <div className="col-lg-4 align-self-center">
            <div className="main-info header-text">
              <span>Offline</span>
              <h4>Alan Smithee</h4>
              <p>
                You Haven't Gone Live yet. Go Live By Touching The Button Below.
              </p>
              <div className="main-border-button">
                <Link to="/">Start Live Stream</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 align-self-center">
            <ul>
              <li>
                Games Downloaded <span>3</span>
              </li>
              <li>
                Friends Online <span>16</span>
              </li>
              <li>
                Live Streams <span>None</span>
              </li>
              <li>
                Clips <span>29</span>
              </li>
            </ul>
          </div>
        </div>
       <YourMostPopularClips />
      </div>
    </>
  );
};

export default ProfileHeader;
