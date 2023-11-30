import { useRef } from "react";

import NotificationManager from "react-notifications/lib/NotificationManager";
import { v4} from 'uuid';

export default function(props){



    let jobTitle = useRef();
    let jobSpecs = useRef();
    let expectedSalary = useRef();



    const postJob = (evt)=>{

        evt.preventDefault();

        let newJob = {
            id:v4(),
            title:jobTitle.current.value,
            specs:jobSpecs.current.value,
            salary:expectedSalary.current.value
        }

        console.log(newJob);

        NotificationManager.success("Job post hogyi successfully!");


        props.jobs.push(newJob);

    }

    return <div>
        <form onSubmit={postJob}>
            <div>
                <input placeholder="Job Title" ref={jobTitle} />
            </div>
            <div>
                <input placeholder="Job Specs" ref={jobSpecs} />
            </div>
            <div>
                <input placeholder="Salary" type="number" ref={expectedSalary} />
            </div>
           
           
    
            <button>Create Job</button>
        </form>
    </div>

}