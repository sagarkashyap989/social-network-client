import React from 'react'
  import Moment from 'react-moment'
import { connect } from 'react-redux'
import {deleteEducation} from "../../state/action-creator/profile" 
const Education = ({education, deleteEducation}) => {

    const EducationComponent = education.map((edu) =>{
      return   (  
            <>
            <tr>
               <td>{edu.school}</td>
               <td class="hide-sm">{edu.degree}</td>
               <td class="hide-sm">
                 <Moment format='YYYY/MM/DD'>{edu.from}</Moment> - {" "}
                 {edu.to === null ? " Now":  <Moment format='YYYY/MM/DD'>{edu.to}</Moment>}
               </td>
               <td>
                 <button class="btn btn-danger" onClick={() => deleteEducation(edu._id)}>
                   Delete
                 </button>
               </td>
               </tr>
            </>
       )
    })

  return (





    <>
         <h2 class="my-2">Education Credentials</h2>
      <table class="table">
        <thead>
          <tr>
            <th>School</th>
            <th class="hide-sm">Degree</th>
            <th class="hide-sm">Years</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            {EducationComponent}
          
        </tbody>
      </table>
    </>
  )
}

const mapStateToProps = state =>({

})

export default connect(mapStateToProps, {deleteEducation}) (Education)