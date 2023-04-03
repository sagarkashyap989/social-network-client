import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../../state/action-creator/post'
import PostItem from "./PostItem"
import PostForm from './PostForm'
import Spinner from "../layout/spinner"

const Posts = ({getPosts, posts:{loading, posts}}) => {
    console.log(posts)
    useEffect(() => {

        console.log("useEcffefct ran")
        getPosts();
    }, [])
    


  return (
    <section className="container">
      
      <h1 class="large text-primary">
        Posts
      </h1>
      <p class="lead"><i class="fas fa-user"></i> Welcome to the community!</p>
      <PostForm />
    <div> {loading ? <Spinner /> : (

       <>

        <div className="posts">
        {posts.map((post) =>{
          return   <PostItem key={post._id}  post={post}/>
        })}

        </div>
       </>


    )}</div>
    </section>
  )
}



const mapStateToProps = state =>({
    posts : state.post
})

export default connect(mapStateToProps, {getPosts}) (Posts)