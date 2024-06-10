import './ImgCover.css'
const ImgCover = (props) => {
  return (
<>
<img src={props.imgName} alt="" style={{borderRadius: "30px" ,height: "100%"}} />

</>
)
}

export default ImgCover