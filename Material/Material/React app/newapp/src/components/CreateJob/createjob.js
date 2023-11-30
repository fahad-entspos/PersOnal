import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRef } from "react"
import { v4 } from 'uuid';
export default (props)=>{
   let jobTitle = useRef();
   let jobSpecs = useRef();
   let expectedSalary = useRef();

        const postJob = (evt)=>{
                evt.preventDefault();
                let newObj = {
                    id:v4(),
                    title:jobTitle.current.value,
                   specs:jobSpecs.current.value,
                    salary:expectedSalary.current.value,
                }
                props.jobs.push(newObj)
                console.log(newObj);
                evt.target.reset()
                ToastContainer.succes("dkbhfajmlds")
              
            }

    return <div>
    <form onSubmit={postJob}>
        <div>
            <input placeholder="Job Detail" ref={jobTitle} />
        </div>
        <div>
            <input placeholder="Job Specs" ref={jobSpecs} />
        </div>
        <div>
            <input placeholder="Salary" type="number" ref={expectedSalary} />
        </div>
       
       

        <button>Create Job</button>
    </form>
    <ToastContainer/>
</div>

}