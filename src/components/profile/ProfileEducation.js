import React from 'react'
import Moment from 'react-moment'


const ProfileEducation = ({education :{school, degree, to, from , current, fieldOfStudy, description}}) => {
  return (
    <div>
    <h3>{school}</h3>
    {/* <p>Sep 1993 - June 1999</p> */}
    <p><Moment format='YYYY/MM/DD'>{from}</Moment> - {current ? (<span> Now</span>):(<Moment format='YYYY/MM/DD'>{to}</Moment>)}</p>
    <p><strong>Field Of Study: </strong>{fieldOfStudy}</p>
    <p>
      <strong>Description: </strong>{description}</p>
  </div>
  )
}

export default ProfileEducation