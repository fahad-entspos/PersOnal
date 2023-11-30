import { useParams } from "react-router"


export default(props)=>{
 
let some = useParams();

let jobAGyi  = props.jobs.find((job)=>{


    if(job.id == some.cid){
        return true;
    }

});

return <div>
    <h1>{jobAGyi.title}</h1>
    {
        some.cid
    }
    yeh job detaiul h 
</div>

}