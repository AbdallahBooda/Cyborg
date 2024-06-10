import './Profile.css'
import { ProfileHeader, YourGaming } from '../../Component/ComponentLinks'

const Profile = () => {
  return (
    <>
    <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-content">
              <ProfileHeader />
              <YourGaming />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile