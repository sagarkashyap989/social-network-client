import React,{useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { setProfile, getCurrentProfile } from '../../state/action-creator/profile'

const EditProfile = ({ profile:{loading, profile}, setProfile, getCurrentProfile}) => {
  
  const navigate = useNavigate();
  const initialState = {
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    githubUsername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: ''
  };

  const [formData, setFormData] = useState(initialState);

  const {
    company,
    website,
    location,
    status,
    skills,
    githubUsername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
  } = formData;


  useEffect(() => {
    getCurrentProfile();
    console.log(profile);
    setFormData({
      
      company : loading || !profile.company ? '':"profile.company",
      website : loading || !profile.website ? '':profile.website,
      location : loading || !profile.location ? '':profile.location,
        status : loading || !profile.status ? '':profile.status,
        skills : loading || !profile.skills ? '':profile.skills.join(","),
        githubUsername : loading || !profile.githubUsername ? '':profile.githubUsername,
        bio : loading || !profile.bio ? '':profile.bio,
        twitter : loading || !profile.social ? '':profile.social.twitter,
        facebook : loading || !profile.social ? '':profile.social.facebook,
        linkedin : loading || !profile.social ? '':profile.social.linkedin,
        youtube : loading || !profile.social ? '':profile.social.youtube,
        instagram : loading || !profile.social ? '':profile.social.instagram,

    })
    

  }, [loading])
  


  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(formData)
    setProfile(formData, navigate, true);
   

  }

  const handleChange = (e) =>{
    setFormData({...formData, [e.target.name] : e.target.value})  ;
  }

  const [showLinks, setShowLinks] = useState(false);

  
  const toggleShowLinks = (value) =>{
    setShowLinks(value);
  }

  return (
    <>
      <section className="container">
      <h1 className="large text-primary">
        Edit Your Profile
      </h1>
      <p className="lead">
        <i className="fas fa-user"></i> Let's get some information to make your
        profile stand out
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <select name="status" onChange={handleChange} value={status}>
            <option value="0">* Select Professional Status</option>
            <option value="Developer">Developer</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Manager">Manager</option>
            <option value="Student or Learning">Student or Learning</option>
            <option value="Instructor">Instructor or Teacher</option>
            <option value="Intern">Intern</option>
            <option value="Other">Other</option>
          </select>
          <small className="form-text"
            >Give us an idea of where you are at in your career</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="Company" name="company" onChange={handleChange} value={company}/>
          <small className="form-text"
            >Could be your own company or one you work for</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="Website" name="website"  onChange={handleChange} value={website}/>
          <small className="form-text"
            >Could be your own or a company website</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="Location" name="location"  onChange={handleChange} value={location}/>
          <small className="form-text"
            >City & state suggested (eg. Boston, MA)</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="* Skills" name="skills"  onChange={handleChange} value={skills}/>
          <small className="form-text"
            >Please use comma separated values (eg.
            HTML,CSS,JavaScript,PHP)</small
          >
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Github Username"
            name="githubUsername"
            onChange={handleChange} value={githubUsername}
          />
          <small className="form-text"
            >If you want your latest repos and a Github link, include your
            username</small
          >
        </div>
        <div className="form-group">
          <textarea placeholder="A short bio of yourself" name="bio"  onChange={handleChange} value={bio}></textarea>
          <small className="form-text">Tell us a little about yourself</small>
        </div>

        <div className="my-2">
          <button type="button" className="btn btn-light" onClick={() =>{toggleShowLinks(!showLinks)}}>
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>

        {showLinks && <>
       
        <div className="form-group social-input">
          <i className="fab fa-twitter fa-2x"></i>
          <input type="text" placeholder="Twitter URL" name="twitter"  onChange={handleChange} value={twitter} />
        </div>

        <div className="form-group social-input">
          <i className="fab fa-facebook fa-2x"></i>
          <input type="text" placeholder="Facebook URL" name="facebook"  onChange={handleChange} value={facebook}/>
        </div>

        <div className="form-group social-input">
          <i className="fab fa-youtube fa-2x"></i>
          <input type="text" placeholder="YouTube URL" name="youtube"  onChange={handleChange} value={youtube}/>
        </div>

        <div className="form-group social-input">
          <i className="fab fa-linkedin fa-2x"></i>
          <input type="text" placeholder="Linkedin URL" name="linkedin"   onChange={handleChange} value={linkedin}/>
        </div>

        <div className="form-group social-input">
          <i className="fab fa-instagram fa-2x"></i>
          <input type="text" placeholder="Instagram URL" name="instagram"  onChange={handleChange} value={instagram}/>
        </div>
        </>}
        <input type="submit" className="btn btn-primary my-1" />
        <a className="btn btn-light my-1" href="dashboard.html">Go Back</a>
      </form>
    </section>
    </>
  )
}

//EditProfile.propTypes = {}

 const mapStateToProps = (state) =>({
    profile: state.profile
} )

export default connect(mapStateToProps, {setProfile, getCurrentProfile}) (EditProfile)
{/* export default connect(null, {setProfile}) (ProfileForm) */}