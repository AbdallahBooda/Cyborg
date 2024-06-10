import { LiveStreams, TopStreamers } from '../ComponentLinks'
import './StreamsHeader.css'
const StreamsHeader = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-8">
         <LiveStreams />
        </div>
        <div className="col-md-4">
          <TopStreamers />
        </div>
      </div>
    </>
  )
}

export default StreamsHeader