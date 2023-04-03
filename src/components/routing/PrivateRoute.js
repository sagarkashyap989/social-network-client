import React, {useEffect} from "react";
import {  useNavigate } from "react-router-dom";
import { connect, Connect } from "react-redux";


const PrivateRoute = ({
auth:{isAuthenticated, loading},
children
}) =>{
    const navigate = useNavigate();
    
    if(isAuthenticated){
        return children;
    }else{
        navigate("/login")
    }
}

const mapStateToProps = state =>({
    auth : state.auth
})

export default connect(mapStateToProps)(PrivateRoute)