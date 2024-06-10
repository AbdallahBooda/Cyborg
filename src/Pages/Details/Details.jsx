import React from "react";
import { DetailsHeader, FortniteDetails, OtherRelated } from "../../Component/ComponentLinks";

const Details = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-content">
              <DetailsHeader />
              <FortniteDetails />
              <OtherRelated />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
