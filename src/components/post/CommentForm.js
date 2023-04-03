import React,{useState} from 'react'
import { connect } from 'react-redux'
import { addComment } from '../../state/action-creator/post'
const CommentForm = ({post_id, addComment}) => {

    const [text, setText] = useState("");
    console.log(post_id, "here is comment id")
    const handleSubmit = (e) =>{
        e.preventDefault();
        addComment(post_id, {text})
    }





  return ( 
    <div class="post-form">
        <div class="bg-primary p">
          <h3>Leave a comment.</h3>
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

export default connect(null, {addComment})(CommentForm)