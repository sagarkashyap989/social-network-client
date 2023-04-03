import React,{useState} from 'react'
import { connect } from 'react-redux'
import { addEducation } from '../../state/action-creator/profile'

import {useNavigate} from 'react-router-dom'
const AddEducation = ({addEducation}) => {
    const navigate = useNavigate();
    const initialState ={
        degree : "",
        school : "",
        studyField : "", 
        from : "",
        to : "",
        current : false,
        description : ""
    }
    const [formData, setFormData] = useState(initialState)
    const {degree, school, fieldOfStudy, from, to, current, description} = formData;
    const [disableToDate, toggleDisable] = useState(false);
    const handleSubmit =(e)=>{
        
            e.preventDefault();
            addEducation(formData, navigate)
       
    }

    const onChange = (e) =>{
        setFormData({...formData, [e.target.name] : e.target.value})
    }
  return (
    
    <section class="container">
    <h1 class="large text-primary">
     Add An Education or Degree
    </h1>
    <p class="lead">
      <i class="fas fa-code-branch"></i> Add any Degree or Bootcamp have have achieved of attened
    </p>
    <small>* = required field</small>
    <form class="form" onSubmit={handleSubmit}>
      <div class="form-group">
        <input type="text" placeholder="* Job Degree" name="degree" value={degree}  onChange={onChange} required />
      </div>
      <div class="form-group">
        <input type="text" placeholder="* School" name="school" value={school}  onChange={onChange}required />
      </div>
      <div class="form-group">
        <input type="text" placeholder="Study Field" name="fieldOfStudy" value={fieldOfStudy}  onChange={onChange}/>
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

export default connect(null, {addEducation}) (AddEducation)