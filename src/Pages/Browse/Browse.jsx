import { BrowseHeader, HowToStart, MostPopularLiveStream } from '../../Component/ComponentLinks'

const Browse = () => {
  return (
    <>
    <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-content">
            <BrowseHeader />
            <HowToStart />
            <MostPopularLiveStream />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Browse