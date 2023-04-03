import axios from "axios";
import { setAlert } from "./alert";



export const clearProfile = () =>dispatch =>{
  dispatch({
    type:"CLEAR_PROFILE"
  })
}



export const getCurrentProfile = () => async dispatch =>{

  try {
    const res = await axios.get("/api/profile/me")
    dispatch({
        type:"GET_PROFILE",
        payload: res.data
    })

  
  } catch (err) {
    dispatch({
        type:"PROFILE_ERROR",
        payload:{msg: err.response.statusText, status: err.response.status}

    })
  }
    
}

export const setProfile = (formData,navigate, edit) => async dispatch =>{
// export const setProfile = () => async dispatch =>{
  console.log(formData);
  const config = {
    header:{
      "Content-type": "application/json"
    }
  }

  try{
    const res = await axios.post("/api/profile", formData, config)
    dispatch({
      type:"GET_PROFILE",
      payload: res.data
    })
    dispatch(setAlert(edit? 'profile updated':'profile uploded', "success"))
      navigate("/dashboard")
  }catch(err){
 console.log(err);
    const errors = err.response.data.errors;
    if(errors){
      errors.map((error)=>{
        dispatch(setAlert(error.msg, 'danger'))
      })
    }
  dispatch({
      type:"PROFILE_ERROR",
      payload:{msg: err.response.statusText, status: err.response.status}

  }) }
}


export const addExperience = (formData, navigate) => async dispatch =>{

    try {
      const config = {
        header:{
          "Content-type": "application/json"
        }
      }
      const res = await axios.put("/api/profile/experience", formData, config)
      dispatch({
        type: "UPDATE_PROFILE",
        payload: res.data
      })
      setAlert("experience added sucessfully", "success")
      navigate("/dashboard");
    } catch (error) {
      const errors = error.response.data.errors
        if(errors){
          errors.map((error) =>{
            dispatch(setAlert(error.msg, 'danger') )
          })
        }

        dispatch({
          type:"PROFILE_ERROR",
          payload:{msg: error.response.statusText, status: error.response.status}
    
      }) }
    }


    export const addEducation = (formData, navigate) => async dispatch =>{

      try {
        const config = {
          header:{
            "Content-type": "application/json"
          }
        }
        const res = await axios.put("/api/profile/education", formData, config)
        dispatch({
          type: "UPDATE_PROFILE",
          payload: res.data
        })
        setAlert("education added sucessfully", "success")
        navigate("/dashboard");
      } catch (error) {
        console.log(error )
        const errors = error.response.data.errors
        console.log(errors);
          if(errors){
            errors.map((error) =>{
            dispatch(setAlert(error.msg, 'danger'))
            })
          }
  
          dispatch({
            type:"PROFILE_ERROR",
            payload:{msg: error.response.statusText, status: error.response.status}
      
        }) }
      }

 
      export const deleteEducation = (id) => async dispatch =>{
        console.log(id);
        
        try {
          const res = await axios.delete(`/api/profile/education/${id}`)
          dispatch(setAlert("Education Deleted sucessfully", "success"))
          
          dispatch({
            type: "UPDATE_PROFILE",
            payload: res.data
          })

        } catch (error) {
          const errors = error.response.data.errors
          if(errors){
            errors.map((error)=>{
              dispatch(setAlert(error.msg, "danger"))
            })
          }

          dispatch({
            type:"PROFILE_ERROR",
            payload:{msg: error.response.statusText, status: error.response.status}
      
        })
        }
      }


      export const deleteExperience = (id) => async dispatch =>{

        
        try {
          const res = await axios.delete(`/api/profile/experience/${id}`)
          dispatch(setAlert("Experience Deleted sucessfully", "success"))
          
          dispatch({
            type: "UPDATE_PROFILE",
            payload: res.data
          })

        } catch (error) {
          const errors = error.response.data.errors
          if(errors){
            errors.map((error)=>{
              dispatch(setAlert(error.msg, "danger"))
            })
          }

          dispatch({
            type:"PROFILE_ERROR",
            payload:{msg: error.response.statusText, status: error.response.status}
      
        })
        }
      }



export const getProfiles = () => async dispatch =>{
  dispatch({ type:'CLEAR_PROFILE' });

  try {
    
    const res = await axios.get("/api/profile/")
    console.log(res.data)
    dispatch({
      type:"UPDATE_PROFILES",
      payload: res.data
    })

  } catch (error) {
    dispatch({
      type:"PROFILE_ERROR",
      payload:{msg: error.response.statusText, status: error.response.status}
      
    })
  }

}



export const getProfileById = (id) => async dispatch =>{
  console.log("inside getProfileby ")
  try { 
    
      const res = await axios.get(`/api/profile/${id}`)

      dispatch({
        type:"GET_PROFILE",
        payload:res.data
      })

  } catch (error) {
    dispatch({
      type:"PROFILE_ERROR",
      payload:{msg: error.response.statusText, status: error.response.status}
      
    })
  }


}