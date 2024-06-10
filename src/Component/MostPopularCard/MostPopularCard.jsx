import "./MostPopularCard.css";
const MostPopularCard = (props) => {
  return (
    <>
      <div className="col-lg-3 col-sm-6">
        <div className="item">
          <img src={props.img} alt="" />
          <h4>
            {props.title}
            <br />
            <span>{props.category}</span>
          </h4>
          <ul>
            <li>
              <i className="fa fa-star"></i> {props.rate}
            </li>
            <li>
              <i className="fa fa-download"></i> {props.dawnload}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MostPopularCard;
