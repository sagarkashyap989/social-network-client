import React from 'react'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import {deleteExperience} from "../../state/action-creator/profile"
const Experience = ({experience, deleteExperience}) => {

    const ExperienceComponent = experience.map((exp) =>{
      return   (  
            <>
            <tr>
               <td>{exp.company}</td>
               <td class="hide-sm">{exp.title}</td>
               <td class="hide-sm">
                 <Moment format='YYYY/MM/DD'>{exp.from}</Moment> - {" "}
                 {exp.to === null ? " Now":  <Moment format='YYYY/MM/DD'>{exp.to}</Moment>}
               </td>
               <td>
                 <button class="btn btn-danger" onClick={() => deleteExperience(exp._id)}>
                   Delete
                 </button>
               </td>
               </tr>
            </>
       )
    })

  return (





    <>
         <h2 class="my-2">Experience Credentials</h2>
      <table class="table">
        <thead>
          <tr>
            <th>Company</th>
            <th class="hide-sm">Titel</th>
            <th class="hide-sm">Years</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            {ExperienceComponent}
          
        </tbody>
      </table>
    </>
  )
}

const mapStateToProps = state =>({

})

export default connect(mapStateToProps, {deleteExperience}) (Experience)