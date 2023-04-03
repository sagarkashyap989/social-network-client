import React, {fragment, useEffect} from 'react';
import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";
import Login from "./components/auth/Login";
import Dashboard from './components/dashboard/Dashboard';
import Alert from './components/layout/alert';
import PrivateRoute from './components/routing/PrivateRoute';
// import Register from "./components/auth/Register";
import Register from "./components/auth/Register";
import {BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Profile from './components/profile/Profile';
//redux 

import { Provider } from 'react-redux';
import store from "./state/store"
//auth

import setAuthToken from './state/utils/setAuthToken';
import {loadUser} from "./state/action-creator/auth";
import CreateProfile from './components/profile-form/CreateProfile';
import EditProfile from './components/profile-form/EditProfile';
import AddExperience from './components/profile-form/AddExperience';
import AddEducation from './components/profile-form/AddEducation';
import Profiles from './components/profiles/Profiles';
import Posts from './components/posts/Posts';
import Post from './components/post/Post'

if(localStorage.token){
  setAuthToken(localStorage.token)
}

function App() {

  useEffect(() => {
      console.log("in side of useEffet");
    store.dispatch(loadUser());
  }, [])
  


  return (
<Provider store = {store}>
  <>
  <Router>
  <div className="">
        <Navbar />
</div>  
   <Routes>
    <Route exact path="/" element={<Landing /> }  />
</Routes>
<section className="container">
<Alert />
<Routes>
  <Route  path="/login" element={<Login />}  />
{/* <section className="container"> */}
  <Route path="/register" element={<Register />} />
  <Route path="/profiles" element={<Profiles />} />
  <Route path="/profile/:id" element={<Profile />} />
   


  <Route path="/dashboard" element={

     <PrivateRoute>

      <Dashboard />
    </PrivateRoute>  
  } />


  
<Route path="/posts" element={

<PrivateRoute>

 <Posts />
</PrivateRoute>  
} />

<Route path="/posts/:id" element={

<PrivateRoute>

 <Post />
</PrivateRoute>  
} />

  <Route path="/edit-profile" element={

     <PrivateRoute>

      <EditProfile />
    </PrivateRoute>  
  } />



<Route path="/add-experience" element={

<PrivateRoute>

 <AddExperience />
</PrivateRoute>  
} />


<Route path="/add-education" element={

<PrivateRoute>

 <AddEducation />
</PrivateRoute>  
} />


<Route path="/create-profile" element={

<PrivateRoute>

 <CreateProfile />
</PrivateRoute>  
} />

  </Routes>
</section>

  {/* </section> */}


   
   
   </Router>
   </>
   </ Provider>
  );
}

export default App;
