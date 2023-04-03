import React, {useState, useEffect} from 'react'
import { addPost } from '../../state/action-creator/post'
import { connect } from 'react-redux'

const PostForm = ({addPost}) => {
    const [text, setText] = useState(" ");
    const handleSubmit = (e) =>{
        e.preventDefault();
        addPost({text})
    }


  return (
      <div class="post-form">
          <div class="bg-primary p">
            <h3>Say Something...</h3>
          </div>
          <form class="form my-1" onSubmit={handleSubmit}>
            <textarea
              name="text"
              cols="30"
              value={text}
              rows="5"
              placeholder="Create a post"
              onChange={(e) => setText(e.target.value)}
              required
            ></textarea>
            <input type="submit" class="btn btn-dark my-1" value="Submit" />
          </form>
        </div>
  )
}

export default connect(null, {addPost})(PostForm)