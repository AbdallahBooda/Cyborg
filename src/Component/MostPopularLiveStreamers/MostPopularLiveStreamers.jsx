import { SectionHeader, SectionWrapper, SectionButton} from '../ComponentLinks'
import './MostPopularLiveStreamers.css'
const MostPopularLiveStreamers = () => {
  return (
    <>
    <SectionWrapper>
        <SectionHeader sectiontitle="Most Popular" sectionname=" Live Stream" />
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="item">
              <div className="thumb">
                <img src="stream-05.jpg" alt="" />
              </div>
              <div className="down-content">
                <div className="avatar">
                  <img
                    src="avatar-01.jpg"
                    alt=""
                    style={{
                      maxWidth: "46px",
                      borderRadius: "50%",
                      float: "left",
                    }}
                  />
                </div>
                <span>
                  <i className="fa fa-check"></i> KenganC
                </span>
                <h4>Just Talking With Fans</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="item">
              <div className="thumb">
                <img src="stream-06.jpg" alt="" />
              </div>
              <div className="down-content">
                <div className="avatar">
                  <img
                    src="avatar-02.jpg"
                    alt=""
                    style={{
                      maxWidth: "46px",
                      borderRadius: "50%",
                      float: "left",
                    }}
                  />
                </div>
                <span>
                  <i className="fa fa-check"></i> LunaMa
                </span>
                <h4>CS-GO 36 Hours Live Stream</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="item">
              <div className="thumb">
                <img src="stream-07.jpg" alt="" />
              </div>
              <div className="down-content">
                <div className="avatar">
                  <img
                    src="avatar-03.jpg"
                    alt=""
                    style={{
                      maxWidth: "46px",
                      borderRadius: "50%",
                      float: "left",
                    }}
                  />
                </div>
                <span>
                  <i className="fa fa-check"></i> Areluwa
                </span>
                <h4>Maybe Nathej Allnight Chillin'</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="item">
              <div className="thumb">
                <img src="stream-08.jpg" alt="" />
              </div>
              <div className="down-content">
                <div className="avatar">
                  <img
                    src="avatar-04.jpg"
                    alt=""
                    style={{
                      maxWidth: "46px",
                      borderRadius: "50%",
                      float: "left",
                    }}
                  />
                </div>
                <span>
                  <i className="fa fa-check"></i> GangTm
                </span>
                <h4>Live Streaming Till Morning</h4>
              </div>
            </div>
          </div>


          <SectionButton buttonName="Load More Streams" toWhere="/streams" />
        </div>
    </SectionWrapper>
    </>
  )
}

export default MostPopularLiveStreamers