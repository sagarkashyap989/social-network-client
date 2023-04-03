import React,{useState} from 'react'
import { connect } from 'react-redux'
import { addExperience } from '../../state/action-creator/profile'

import {useNavigate} from 'react-router-dom'
const AddExperience = ({addExperience}) => {
    const navigate = useNavigate();
    const initialState ={
        title : "",
        company : "",
        location : "", 
        from : "",
        to : "",
        current : false,
        description : ""
    }
    const [formData, setFormData] = useState(initialState)
    const {title, company, location, from, to, current, description} = formData;
    const [disableToDate, toggleDisable] = useState(false);
    const handleSubmit =(e)=>{
        
            e.preventDefault();
            addExperience(formData, navigate)
       
    }

    const onChange = (e) =>{
        setFormData({...formData, [e.target.name] : e.target.value})
    }
  return (
    
    <section class="container">
    <h1 class="large text-primary">
     Add An Experience
    </h1>
    <p class="lead">
      <i class="fas fa-code-branch"></i> Add any developer/programming
      positions that you have had in the past
    </p>
    <small>* = required field</small>
    <form class="form" onSubmit={handleSubmit}>
      <div class="form-group">
        <input type="text" placeholder="* Job Title" name="title" value={title}  onChange={onChange} required />
      </div>
      <div class="form-group">
        <input type="text" placeholder="* Company" name="company" value={company}  onChange={onChange}required />
      </div>
      <div class="form-group">
        <input type="text" placeholder="Location" name="location" value={location}  onChange={onChange}/>
      </div>
      <div class="form-group">
        <h4>From Date</h4>
        <input type="date" name="from" onChange={onChange} value={from}
        />
      </div>
       <div class="form-group">
        <p><input type="checkbox" name="current" value={current}  onClick={() => {
            toggleDisable(!disableToDate)
            setFormData({...formData, current: !current})
            }}/> Current Job</p>
      </div>
      <div class="form-group">
        <h4>To Date</h4>
        <input type="date" name="to" disabled={disableToDate? "disabled": ""} value={to} onChange={onChange}/>
      </div>
      <div class="form-group">
        <textarea
          name="description"
          cols="30"
          rows="5"
          placeholder="Job Description"
          value={description}
          onChange={onChange}
        ></textarea>
      </div>
      <input type="submit" class="btn btn-primary my-1" />
      <a class="btn btn-light my-1" href="dashboard.html">Go Back</a>
    </form>
  </section>
  )
}

export default connect(null, {addExperience}) (AddExperience)