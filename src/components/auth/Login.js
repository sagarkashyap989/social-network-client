import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from "react-router-dom";
import {connect} from "react-redux";
import {login} from "../../state/action-creator/auth";

const Login = ({login, isAuthenticated}) => {

    const [formData, setFromData] = useState({
  email:"",
  password:"",
    })

    const navigate = useNavigate();
const {email, password} = formData;

    const onChange = (e) =>{
        setFromData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit =(e) =>{
      e.preventDefault();

      login(email, password);
    }
    useEffect(() => {
      if(isAuthenticated){
         navigate("/dashboard");
       }
    }, [isAuthenticated])
    
  return (

    


    <div>
            <section className="container">
     
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead"><i className="fas fa-user"></i> Sign into Your Account</p>
      <form className="form" onSubmit={handleSubmit} action="dashboard.html">
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={e => onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register"> sign up! </Link>
      </p>
    </section>
    </div>
  )
} 

const mapStateToProps = state => ({
  isAuthenticated : state.auth.isAuthenticated
})

export default connect(mapStateToProps, {login}) (Login);