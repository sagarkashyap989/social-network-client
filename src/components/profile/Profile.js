import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {useParams, Link} from 'react-router-dom'
import { clearProfile, getProfileById } from '../../state/action-creator/profile'
import ProfileTop from './ProfileTop'
import Spinner from '../layout/spinner'
import About from './About'
import ProfileEducation from './ProfileEducation'
import ProfileExperience from './ProfileExperience'
const Profile = ({getProfileById, clearProfile, profile:{profile, loading}, auth}) => {
    const { id } = useParams();
console.log(id)
    useEffect(() => {
        getProfileById(id);

        return () =>{
          clearProfile();
        }

    }, [])
    

  return (
    <>
        {profile === null || loading ? <Spinner /> :<>
         <Link to="/profiles" className='btn btn-light'>Back To Profiles</Link>
         {/* */}
         {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <Link to="/edit-profile" className="btn btn-dark">
                Edit Profile
              </Link>
            )}

            <div class="profile-grid my-1">
                <ProfileTop profile ={profile} />
                <About profile = {profile} />
                <div class="profile-exp bg-white p-2">
                  <h2 class="text-primary">Experience</h2>
                  {profile.experience.length > 0 ? (<> 

                    {profile.experience.map((exp) =>{
                      return <ProfileExperience  key={exp._id} experience={exp} />
                    })}

                  </>) : (<h4>No Experience Credentials</h4>)}

                  <div class="profile-edu bg-white p-2">
          <h2 class="text-primary">Education</h2>

                  {profile.education.length > 0 ? (<> 

                       {profile.education.map((edu) =>{
                      return <ProfileEducation key={edu._id} education={edu} />
                    })}

                  </>) : (<h4>No Education Credentials</h4>)}

                
                    </div>
                </div>
            </div>

                {console.log(profile)}
         </>}

    </>
  )
}

const mapStateToProps = (state) =>({
    profile : state.profile,
    auth: state.auth
})

export default connect(mapStateToProps, {getProfileById, clearProfile}) (Profile)