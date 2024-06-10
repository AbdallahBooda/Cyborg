import React from "react";

const SectionWrapper = (props) => {
  return (
    <>
      <div className="most-popular">
        <div className="row">
          <div className="col-lg-12">
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper;
