import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCurrentProfile } from '../../state/action-creator/profile'
import Spinner from '../layout/spinner'
import DashboardAction from './DashboardAction'
import Experience from './Experience'
import Education from './Education'
const Dashboard = ({auth:{isAuthenticated, user},profile:{loading, profile}, getCurrentProfile}) => {

  useEffect(() => {
    getCurrentProfile();
  }, [])
  
  return loading && profile === null ? <Spinner /> : <>
    <h1 className="large text-primary">Dashboard</h1>
    <p className="lead">
        <i className="fas fa-user">Welcome {user && user.name}</i>
    </p>

    {profile !==null ? <>
      <DashboardAction />
          <Experience experience={profile.experience}/>
          <Education education={profile.education} />
    </> : <> please add profile <Link to="/create-profile" className="btn btn-primary my-1">
            Create Profile
          </Link></>}

         

  </>
}

const mapStateToProps = (state) =>({
    auth:state.auth,
    profile: state.profile
})

export default connect(mapStateToProps, {getCurrentProfile})(Dashboard)