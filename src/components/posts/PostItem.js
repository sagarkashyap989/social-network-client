import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {addLike, removeLike, deletePost} from '../../state/action-creator/post'
import Moment from 'react-moment'

const PostItem = ({auth, addLike, deletePost, showActions, removeLike, post:{_id, user, text, name, avatar, comments, date, likes}}) => {
 console.log(_id,"user")
    return (
    <div class="post bg-white p-1 my-1">
          <div>
            <a href="profile.html">
              <img
                class="round-img"
                src={avatar}
                alt=""
              />
              <h4>{name}</h4>
            </a>
          </div>
          <div>
            <p class="my-1">
      {text}
            </p>
             <p class="post-date">
                Posted on <Moment format='yyyy/dd/mm'>{date}</Moment>
            </p>
            {console.log(showActions, "showActions")}
            {showActions && <>
              <button type="button" class="btn btn-light" onClick={() => addLike(_id)}>
              <i class="fas fa-thumbs-up"></i> {" "}
             {likes.length >0 && <span>{likes.length}</span>} 
            </button>
            <button type="button" class="btn btn-light" onClick={() => removeLike(_id)}>
              <i class="fas fa-thumbs-down"></i>
            </button>
            <Link to={`/posts/${_id}`} class="btn btn-primary">
              Discussion    {comments.length >0 && <span>{comments.length}</span>} 
            </Link>
            

            {!auth.loading && user == auth.user._id && (
                <button      
            type="button"
            class="btn btn-danger"
            onClick={() => deletePost(_id)}
          >
            <i class="fas fa-times"></i>
          </button>
            )}
            </>}

            {console.log(showActions, "showActions")}
          </div>
        </div>
  )
}

PostItem.defaultProps = {
  showActions: true
}

const mapStateToProps = state =>({
    auth: state.auth
})

export default connect(mapStateToProps, {addLike, removeLike, deletePost})(PostItem)