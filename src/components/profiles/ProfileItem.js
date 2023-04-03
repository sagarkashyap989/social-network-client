import React from 'react'
import {Link} from 'react-router-dom'

const ProfileItem = ({profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills
  }}) => {
  return (
    <div class="profile bg-light">
    <img
      class="round-img"
      src={avatar}
      alt=""
    />
    <div>
      <h2>{name}</h2>
      <p>{status}</p>
      <p>{location}</p>
      
      <Link to={`/profile/${_id}`} className='btn btn-primary'>View Profile</Link>
    </div>

    <ul>
    {skills.slice(0,4).map((skill, index) =>(

      <li class="text-primary" key={index}>
        <i class="fas fa-check"></i> {skill}
      </li>
    ))}

    </ul>
  </div>
  )
}

export default ProfileItem