import './YourMostPopularClips.css'
import { Link } from "react-router-dom";

const YourMostPopularClips = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="clips">
            <div className="row">
              <div className="col-lg-12">
                <div className="heading-section">
                  <h4>
                    <em>Your Most Popular</em> Clips
                  </h4>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="item">
                  <div className="thumb">
                    <img
                      src="clip-01.jpg"
                      alt=""
                      style={{ borderRadius: "23px" }}
                    />
                    <Link
                      to="https://www.youtube.com/watch?v=r1b03uKWk_M"
                      target="_blank"
                    >
                      <i className="fa fa-play"></i>
                    </Link>
                  </div>
                  <div className="down-content">
                    <h4>First Clip</h4>
                    <span>
                      <i className="fa fa-eye"></i> 250
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="item">
                  <div className="thumb">
                    <img
                      src="clip-02.jpg"
                      alt=""
                      style={{ borderRadius: "23px" }}
                    />
                    <Link
                      to="https://www.youtube.com/watch?v=r1b03uKWk_M"
                      target="_blank"
                    >
                      <i className="fa fa-play"></i>
                    </Link>
                  </div>
                  <div className="down-content">
                    <h4>Second Clip</h4>
                    <span>
                      <i className="fa fa-eye"></i> 183
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="item">
                  <div className="thumb">
                    <img
                      src="clip-03.jpg"
                      alt=""
                      style={{ borderRadius: "23px" }}
                    />
                    <Link
                      to="https://www.youtube.com/watch?v=r1b03uKWk_M"
                      target="_blank"
                    >
                      <i className="fa fa-play"></i>
                    </Link>
                  </div>
                  <div className="down-content">
                    <h4>Third Clip</h4>
                    <span>
                      <i className="fa fa-eye"></i> 141
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="item">
                  <div className="thumb">
                    <img
                      src="clip-04.jpg"
                      alt=""
                      style={{ borderRadius: "23px" }}
                    />
                    <Link
                      to="https://www.youtube.com/watch?v=r1b03uKWk_M"
                      target="_blank"
                    >
                      <i className="fa fa-play"></i>
                    </Link>
                  </div>
                  <div className="down-content">
                    <h4>Fourth Clip</h4>
                    <span>
                      <i className="fa fa-eye"></i> 91
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="main-button">
                  <Link to="/">Load More Clips</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YourMostPopularClips;
