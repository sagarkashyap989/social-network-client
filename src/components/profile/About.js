import React from 'react'

const About = ({profile:{user:{name}, bio, skills}}) => {
    
  return (
    <div class="profile-about bg-light p-2">

    {bio && <><h2 class="text-primary"><span>{name.trim().split(" ")[0]}'s</span> Bio</h2>
    <p>
     {bio}
    </p>
    <div class="line"></div> </> }

    <h2 class="text-primary">Skill Set</h2>
    <div class="skills">
        {
            skills[0].trim().split(" ").map((skill, index) =>
            <div key={index} class="p-1"><i class="fa fa-check"></i>{skill}</div>
        )}
    </div>
  </div>
  )
}

export default About