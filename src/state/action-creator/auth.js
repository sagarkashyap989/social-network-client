import axios from "axios";
import {setAlert} from "./alert";
import setAuthToken from "../utils/setAuthToken";

//logout user
export const logout = () => dispatch =>{
    dispatch({
        type:"LOGOUT"})
    dispatch({
        type:"CLEAR_PROFILE"})
}


//load user

export const loadUser = () => async dispatch =>{
    console.log("it called loadUser")

    if(localStorage.token){
        setAuthToken(localStorage.token);
    }
     
    try {
        const res = await axios.get('/api/auth');

        dispatch({
            type:"USER_LOAD",
            payload: res.data
        })


    } catch (err) {
        dispatch({
            type:"AUTH_ERROR"
        })
    }

}





//reigster user
export const register= ({name, email,password}) => async dispatch =>{
    const config  = {
        header :{
            "Content-type": "application/json"
        }
    }
    // console.log(name, email, password);
    const body = {name, email, password};
    // console.log(body);
    try {
        const res = await axios.post('/api/user', body, config);

        dispatch({
            type:"REGISTER_SUCCESS",
            payload:  res.data
        });
        dispatch(loadUser());
    } catch (err) {
        console.log(err);
        const errors = err.response.data.errors;
        errors.forEach( error => dispatch(setAlert(error.msg, "danger")));

        dispatch({
            type:"REGISTER_FAIL"
        })

    }

}



//login user
export const login= ( email,password) => async dispatch =>{
    const config  = {
        header :{
            "Content-type": "application/json"
        }
    }
    // console.log(name, email, password);
    const body = { email, password};
    // console.log(body);
    try {
        const res = await axios.post('/api/auth', body, config);
        
        dispatch({
            type:"LOGIN_SUCCESS",
            payload:  res.data
        })

        dispatch(loadUser());
    } catch (err) {
        console.log(err);
        const errors = err.response.data.errors;
        if(errors){

            errors.forEach( error => dispatch(setAlert(error.msg, "danger")));
        }

        dispatch({
            type:"LOGIN_FAIL"
        })

    }

}