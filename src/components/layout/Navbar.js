import React from 'react'
import {Link } from "react-router-dom"
import {connect} from "react-redux"
import {logout} from "../../state/action-creator/auth"
function Navbar({ auth: { isAuthenticated, loading }, logout }) {
  // console.log(isAuthenticated, loading)
  const guestLinks =(
    <ul>
    <li><Link to="/profiles"> Developers</Link></li>
    <li>
      
  <Link to="register">Register</Link>
    </li>
    <li>
      
  <Link to="login"> Login</Link>
    </li>
  </ul>
  )


  const authLinks= (
<ul>
<li><Link to="/profiles"> Developers</Link></li>

    <li>
    <Link to="login" onClick={logout}> Logout</Link>

      </li>
    <li>
    
    <Link to="login"> Dashboard</Link>

      </li>

    
      <li><Link to="/posts"> Posts</Link></li>

    </ul>
  )
  
    return (
        <nav className="navbar bg-dark">
      <h1>
        <Link to="/"><i className="fas fa-code"></i> DevConnector</Link>
      </h1>
      
      {!loading && <> {isAuthenticated? authLinks: guestLinks}</>}
    </nav>
    );
}

// const mapStateToProps = (state) =>({
//   auth: state.auth
// });

const mapStateToProps = (state) => ({
  auth: state.auth
});
export default connect(mapStateToProps, {logout}) (Navbar);