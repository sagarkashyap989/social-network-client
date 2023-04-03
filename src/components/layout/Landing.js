import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {connect } from "react-redux";
import {setName} from "../../state/action-creator/name"
function Landing({setName, isAuthenticated}) {

  const navigate= useNavigate();
    useEffect(() => {
    if(isAuthenticated){
      navigate("/dashboard");
    }
    }, [isAuthenticated])
    

    return (
        <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Developer Connector</h1>
          <p className="lead">
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">Sign Up</Link>
            <Link to="/login" className="btn btn-light">Login</Link>
          </div>
        </div>
      </div>
    </section>
    );
}


const mapStateToProps = state=>({
  isAuthenticated : state.auth.isAuthenticated
})

export default connect(mapStateToProps,{setName}) (Landing);