import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { setAlert } from '../../state/action-creator/alert';
import {register} from "../../state/action-creator/auth";
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearProfile } from '../../state/action-creator/profile';
const Register = ({setAlert, register, isAuthenticated}) => {
  const navigate = useNavigate();



    const [formData, setFromData] = useState({
        name:"",
        email:"",
        password:"",
        password2:""
          })
      
    const {name, email, password, password2} = formData;
 
          const onChange = (e) =>{
              setFromData({...formData, [e.target.name]: e.target.value})
          }
      


          const handleSubmit = async (e) =>{
            e.preventDefault();
            if(password !== password2){
                setAlert("wrong password", "danger");
            }else{
              
          register({name, email, password});



            }
          }
          console.log(isAuthenticated, "onlin 38 inAuthenticate");
          


          useEffect(() => {
            if(isAuthenticated){
                navigate("/dashboard");
             }

            
          }, [isAuthenticated])
          

  return (
    <div>
         <section className="container">
      
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
      <form onSubmit={handleSubmit} className="form" >
        <div className="form-group">
          <input onChange={ (e) => onChange(e)} type="text" placeholder="Name" name="name"  />
        </div>
        <div className="form-group">
          <input onChange={ (e) => onChange(e)}  type="email" placeholder="Email Address" name="email" />
          <small className="form-text"
            >This site uses Gravatar so if you want a profile image, use a
            Gravatar email</small
          >
        </div>
        <div className="form-group">
          <input
           onChange={ (e) => onChange(e)} 
            type="password"
            placeholder="Password"
            name="password"
            // minLength="6"
          />
        </div>
        <div className="form-group">
          <input
           onChange={ (e) => onChange(e)} 
            type="password"
            placeholder="Confirm Password"
            name="password2"
            // minLength="6"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <a href="login.html">Sign In</a>
      </p>
    </section>
    </div>
  );
}


const mapStateToProps = state =>({
  isAuthenticated : state.auth.isAuthenticated
})

export default connect(mapStateToProps, {setAlert, register}) (Register);