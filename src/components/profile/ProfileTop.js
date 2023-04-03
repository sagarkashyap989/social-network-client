import React from 'react'
import {CiGlobe} from 'react-icons/ci'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import  {AiFillYoutube} from 'react-icons/ai'

const ProfileTop = ({
    profile: {
      status,
      company,
      location,
      website,
      social,
      user: { name, avatar }
    }
  }) => <div class="profile-top bg-primary p-2">
<img
  class="round-img my-1"
  src={avatar}
  alt=""
/>
<h1 class="large">{name}</h1>
<p class="lead">{status} {company && <span>at {company}</span>}</p>
<p>{location ? <span>{location}</span> : null}</p>
<div class="icons my-1">

    {website ? <a  href={social} target="_blank" rel="noopener noreferrer">
    <CiGlobe />
                    </a>: null }


   {social && social.twitter && (<a className='large text-primary'   href={social.twitter} target="_blank" rel="noopener noreferrer">
   <AiOutlineTwitter/>
                    </a>)}
   {social && social.youtube && (<a  className='large text-primary'  href={social.youtube} target="_blank" rel="noopener noreferrer">
                      <AiFillYoutube  />
                    </a>)}
   {social && social.facebook && (<a className='large text-primary'   href={social.facebook} target="_blank" rel="noopener noreferrer">
                      <AiFillFacebook/>
                    </a>)}
   {social && social.instagram && (<a   className='large text-primary' href={social.instagram} target="_blank" rel="noopener noreferrer">
                      <AiOutlineInstagram />
                    </a>)}
   {social && social.linkedin && (<a  className='large text-primary'  href={social.linkedin} target="_blank" rel="noopener noreferrer">
                      <AiFillLinkedin />
                    </a>)}

</div>
</div>

export default ProfileTop