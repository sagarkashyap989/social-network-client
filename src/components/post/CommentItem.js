import React from 'react'
import Moment from 'react-moment'
import {connect} from 'react-redux'
import { removeComment } from '../../state/action-creator/post'


const CommentItem = ({removeComment, auth, comments :{user,name, text, avatar, date,_id}, post_id }) => {
  return (
    <div class="post bg-white p-1 my-1">
    <div>
      <a href="profile.html">
        <img
          class="round-img"
          src={avatar}
          alt=""
        />
        <h4>{name && name}</h4>
      </a>
    </div>
    <div>
      <p class="my-1">{text}
      </p>
       <p class="post-date">
          <Moment format='yyyy/dd/mm'>{date}</Moment>
      </p>

        {!auth.loading && user === auth.user._id && (
            <button onClick={() => removeComment(post_id, _id)}>
                delete comment
            </button>
        )}


    </div>
  </div>
  )
}


const mapStateToProps = state=>({
    auth: state.auth,

})

export default connect(mapStateToProps, { removeComment }) (CommentItem)