import { Link } from 'react-router-dom'
import './Alljob.css'
export default (props)=>{
    return <div id="jobsContainer">
        {
            props.jobs.map((job)=>{
               return <Link to= "/detail">  
               <div id="job">
                    <h3>{job.title}</h3>
                    <p>{job.specs}</p>
                    <h6>{job.salary}</h6>
                </div>
            </Link>
            })
        }

    </div>
}