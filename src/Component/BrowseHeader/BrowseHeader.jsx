import React from "react";
import { FeaturedGames, TopDownloaded } from "../ComponentLinks";

const BrowseHeader = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-8">
          <FeaturedGames />
        </div>
        <div className="col-md-4">
          <TopDownloaded />
        </div>
      </div>
    </>
  );
};

export default BrowseHeader;
