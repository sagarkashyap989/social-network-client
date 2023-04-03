import React, {useEffect} from 'react'
import {connect} from "react-redux"
import { getProfiles } from '../../state/action-creator/profile'
import ProfileItem from './ProfileItem'
import Spinner from '../layout/spinner'
const Profiles = ({profile: {profiles, loading}, getProfiles}) => {

    useEffect(() => {
        getProfiles();
    }, [])
    console.log(profiles.length)

  return (
    <section class="container">
        {loading? (<Spinner />) : (<>
            <h1 class="large text-primary">Developers</h1>
      <p class="lead">
        <i class="fab fa-connectdevelop"></i> Browse and connect with developers
      </p>
            <div class="profiles">
      {(profiles.length >0 )?(
        profiles.map((profile)=>(
                     <ProfileItem key={profile._id} profile={profile}/>
        ))): (<h4>no profiles found</h4>)
      }
            </div>

        </> )}
      
    </section>
  )
}

const mapStateToProps = (state) =>({
    profile: state.profile
})

export default connect(mapStateToProps, {getProfiles})(Profiles)