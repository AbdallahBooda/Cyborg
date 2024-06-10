import { Link } from 'react-router-dom';

const SectionButton = (props) => {
  return (
    <>
      <div className="col-lg-12">
        <div className="main-button">
          <Link to={props.toWhere}>{props.buttonName}</Link>
        </div>
      </div>
    </>
  );
};

export default SectionButton;
