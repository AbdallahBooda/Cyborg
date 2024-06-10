import { Link } from 'react-router-dom';

const DownloadedDetails = () => {
  return (
    <>
      <div className="top-downloaded">
        <ul>
          <li>
            <img src="game-01.jpg" alt="" className="templatemo-item" />
            <h4>Fortnite</h4>
            <h6>Sandbox</h6>
            <span>
              <i className="fa fa-star" style={{ color: "yellow" }}></i> 4.9
            </span>
            <span>
              <i className="fa fa-download" style={{ color: "#ec6090" }}></i>{" "}
              2.2M
            </span>
            <div className="download">
              <Link to="/">
                <i className="fa fa-download"></i>
              </Link>
            </div>
          </li>
          <li>
            <img src="game-02.jpg" alt="" className="templatemo-item" />
            <h4>CS-GO</h4>
            <h6>Legendary</h6>
            <span>
              <i className="fa fa-star" style={{ color: "yellow" }}></i> 4.9
            </span>
            <span>
              <i className="fa fa-download" style={{ color: "#ec6090" }}></i>{" "}
              2.2M
            </span>
            <div className="download">
              <Link to="/">
                <i className="fa fa-download"></i>
              </Link>
            </div>
          </li>
          <li>
            <img src="game-03.jpg" alt="" className="templatemo-item" />
            <h4>PugG</h4>
            <h6>Battle Royale</h6>
            <span>
              <i className="fa fa-star" style={{ color: "yellow" }}></i> 4.9
            </span>
            <span>
              <i className="fa fa-download" style={{ color: "#ec6090" }}></i>{" "}
              2.2M
            </span>
            <div className="download">
              <Link to="/">
                <i className="fa fa-download"></i>
              </Link>
            </div>
          </li>
          
        </ul>
        <div className="text-button">
          <Link to="/profile">View All Games</Link>
        </div>
      </div>
    </>
  );
};

export default DownloadedDetails;
