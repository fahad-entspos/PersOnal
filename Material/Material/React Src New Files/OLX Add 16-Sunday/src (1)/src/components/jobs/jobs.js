import './jobs.css';
import { Link } from 'react-router-dom';

export default (props)=>{

return <div id="jobsContainer">
    {
        props.jobs.map((job)=>{

            return <Link to={"/job-details/"+job.id}>
                        <div className="job">
                            <h2>{job.title}</h2>
                            <p>{job.specs}</p>
                            <h5>{job.salary}</h5>
                        </div>
                    </Link>;

        })
    }

</div>


}