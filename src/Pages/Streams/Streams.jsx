import { MostPopularLiveStreamers, StreamsHeader } from '../../Component/ComponentLinks'
import './Streams.css'
const Streams = () => {
  return (
    <>
    <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-content">
            <StreamsHeader />
            <MostPopularLiveStreamers />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Streams