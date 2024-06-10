import { ImgCover, Videos } from '../ComponentLinks'
import './DetailsHeader.css'
const DetailsHeader = () => {
  return (
<>
<div className='row'>
    <div className='col-md-4'>
    <ImgCover imgName="feature-left.jpg"/>
    </div>
    <div className='col-md-8'>
    <Videos />
    </div>
</div>
</>
)
}

export default DetailsHeader