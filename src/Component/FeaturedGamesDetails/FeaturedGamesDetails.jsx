import React from 'react'

const FeaturedGamesDetails = () => {
  return (
   <>
   <div className="owl-features owl-carousel owl-loaded owl-drag">
          <div className="owl-stage-outer">
            <div className="owl-stage">
              <div
                className="owl-item cloned"
                style={{ width: "223px;", marginRight: "30px;" }}
              >
                <div className="item">
                  <div className="thumb">
                    <img src="featured-01.jpg" alt="" />
                    <div className="hover-effect">
                      <h6>2.4K Streaming</h6>
                    </div>
                  </div>
                  <h4>
                    CS-GO
                    <br />
                    <span>249K Downloads</span>
                  </h4>
                  <ul>
                    <li>
                      <i className="fa fa-star"></i> 4.8
                    </li>
                    <li>
                      <i className="fa fa-download"></i> 2.3M
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="owl-item cloned"
                style={{ width: "223px;", marginRight: "30px;" }}
              >
                <div className="item">
                  <div className="thumb">
                    <img src="featured-02.jpg" alt="" />
                    <div className="hover-effect">
                      <h6>2.4K Streaming</h6>
                    </div>
                  </div>
                  <h4>
                    Gamezer
                    <br />
                    <span>249K Downloads</span>
                  </h4>
                  <ul>
                    <li>
                      <i className="fa fa-star"></i> 4.8
                    </li>
                    <li>
                      <i className="fa fa-download"></i> 2.3M
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="owl-item cloned"
                style={{ width: "223px;", marginRight: "30px;" }}
              >
                <div className="item">
                  <div className="thumb">
                    <img src="featured-03.jpg" alt="" />
                    <div className="hover-effect">
                      <h6>2.4K Streaming</h6>
                    </div>
                  </div>
                  <h4>
                    Island Rusty
                    <br />
                    <span>249K Downloads</span>
                  </h4>
                  <ul>
                    <li>
                      <i className="fa fa-star"></i> 4.8
                    </li>
                    <li>
                      <i className="fa fa-download"></i> 2.3M
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="owl-nav">
            <button type="button" role="presentation" className="owl-prev">
              <span aria-label="Previous">‹</span>
            </button>
            <button type="button" role="presentation" className="owl-next">
              <span aria-label="Next">›</span>
            </button>
          </div>
          <div className="owl-dots disabled"></div>
        </div>
   </>
  )
}

export default FeaturedGamesDetails