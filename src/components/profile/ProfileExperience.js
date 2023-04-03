import React from 'react'
import Moment from 'react-moment'


const ProfileExperience = ({experience :{company, location, to, from , current, title, description}}) => {
  return (
    <div>
    <h3 class="text-dark">{company}</h3>
{/* <p>Oct 2011 - Current</p> */}
    <p><Moment format='YYYY/MM/DD'>{from}</Moment> - {current ? (<span> Now</span>):(<Moment format='YYYY/MM/DD'>{to}</Moment>)}</p>
    <p><strong>Position: </strong>{title}</p>
    <p>
      <strong>Description: </strong>{description}
    </p>
  </div>
  )
}

export default ProfileExperience