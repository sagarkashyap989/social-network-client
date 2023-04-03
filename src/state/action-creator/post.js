import axios from "axios"
import { setAlert } from "./alert"





export const removeComment = (post_id, comment_id) => async dispatch =>{


    try {
       
       console.log(post_id, comment_id, "a>>>>>>>>>>>>>>")

        const res = await axios.delete(`/api/post/comment/${post_id}/${comment_id}`)


        dispatch({
            type: "REMOVE_COMMENT",
            payload:{ post_id, comment_id}
        })

        dispatch(setAlert("comment deleted successfully", "success"))

    } catch (err) {
        console.log(err);
        dispatch({
            type:"POST_ERROR",
            payload:{msg: err.response.data.msg, status: err.response.status}
    
        })  
    }


} 







export const addComment = (id, {text}) => async dispatch =>{
    console.log(id, {text}, "inside addcomment  actins")

    try {
       
        const config = {
            header :{
                "Content-type" : "application/json"
            }
        }

        const res = await axios.put(`/api/post/comment/${id}`, {text}, config)


        dispatch({
            type: "ADD_COMMENT",
            payload: res.data
        })


    } catch (err) {
        console.log(err);
        dispatch({
            type:"POST_ERROR",
            payload:{msg: err.response.data.msg, status: err.response.status}
    
        })  
    }


} 










export const getPost = (id) => async dispatch =>{
    console.log(id,"**********8");
    try {
        
            const res = await axios.get(`/api/post/${id}`)

            dispatch({
                type:"GET_POST",
                payload: res.data
            })



    } catch (err) {
        console.log(err);
        dispatch({
            type:"POST_ERROR",
            payload:{msg: err.response.data.msg, status: err.response.status}
    
        }) 
    }
}









export const addPost = (formData) => async dispatch =>{

    try {
        
        const config = {
            header:{
                "Content-type": "application/json"
              }
        }


        const res = await axios.post("/api/post/", formData, config)


        dispatch({
            type: "ADD_POST",
            payload: res.data
        })

        dispatch(setAlert("post added successfully", "success"))


    } catch (error) {
        console.log(error);
        dispatch({
            type:"POST_ERROR",
            payload:{msg: error.response.data.msg, status: error.response.status}
    
        }) 
    }



}







export const deletePost = (id) => async dispatch =>{
    try{

        const res = await axios.delete(`/api/post/${id}`)
        
        dispatch({
            type:"DELETE_POST",
            payload:id
        })

        dispatch(setAlert("post deleted suceefully", "sucess"))


    }catch(err){
        console.log(err);
        dispatch({
            type:"POST_ERROR",
            payload:{msg: err.response.data.msg, status: err.response.status}
    
        }) 
    }
}



export const addLike = (id) => async dispatch =>{
    try {

        const res = await axios.put(`/api/post/like/${id}`);
        dispatch({
            type:"UPDATE_LIKE",
            payload:{id , likes: res.data}
        })




    } catch (err) {
        console.log(err);
        dispatch({
            type:"POST_ERROR",
            payload:{msg: err.response.data.msg, status: err.response.status}
    
        }) 
    }
}




export const removeLike = (id) => async dispatch =>{
    try {

        const res = await axios.put(`/api/post/unlike/${id}`);
        dispatch({
            type:"UPDATE_LIKE",
            payload:{id, likes:res.data}
        })




    } catch (err) {
        dispatch({
            type:"POST_ERROR",
            payload:{msg: err.response.statusText, status: err.response.status}
    
        }) 
    }
}





export const getPosts = () =>async dispatch =>{
    console.log("insid egetPsot")
    try {
        
        const res = await axios.get("/api/post/")

        console.log(res.data)
        
        dispatch({
            type:"GET_POSTS",
            payload: res.data
        })

       

    } catch (err) {
        
        dispatch({
            type:"POST_ERROR",
            payload:{msg: err.response.statusText, status: err.response.status}
    
        })


    }




   
}