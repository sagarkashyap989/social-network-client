import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getPost} from '../../state/action-creator/post'
import {useParams} from 'react-router-dom'
import PostItem from '../posts/PostItem'
import Spinner from "../layout/spinner"
import CommentForm from './CommentForm'
import CommentItem from './CommentItem'
const Post = ({getPost, post:{post, loading }}) => {
    const {id} = useParams();
    useEffect(() => {
        getPost(id);
    }, [])
   
    !loading &&  console.log(post, "inskjsdlfkj")
  

  return (
    <>
        {loading || post ===null ?  <Spinner />  :<> <PostItem post = {post} showActions={false}/>
        <CommentForm post_id={post._id} /> </>}


        { post && post.comments.map((comment) =>{
          return   <CommentItem comments = {comment} post_id = {post._id}/>
        })}
    </>
   
  )
}



const mapStateToProps = (state) =>({
    post: state.post
})


export default connect(mapStateToProps, {getPost})(Post)