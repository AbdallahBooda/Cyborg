import { Link } from "react-router-dom";

const GamingDetails = (props) => {
  return (
<>
<ul className="color-style-ul">
          <div className="row">
            <div className="col-md-1">
              <li>
                <img src={props.imgGameing} alt="" className="templatemo-item" />
              </li>
            </div>
            <div className="col-md-2">
              <li>
                <h4>{props.gamingName}</h4>
                <span className="text-secondary">Sandbox</span>
              </li>
            </div>
            <div className="col-md-2">
              <li>
                <h4>Date Added</h4>
                <span className="text-secondary">{props.date}</span>
              </li>
            </div>
            <div className="col-md-3">
              <li>
                <h4>Hours Played</h4>
                <span className="text-secondary">{props.numHours}</span>
              </li>
            </div>
            <div className="col-md-2">
              <li>
                <h4>Currently</h4>
                <span className="text-secondary">Downloaded</span>
              </li>
            </div>
            <div className="col-md-1">
              <li>
                <div className="main-border-button border-no-active">
                  <Link to="/">Donwloaded</Link>
                </div>
              </li>
            </div>
          </div>
        </ul>
</>  
)
}

export default GamingDetails