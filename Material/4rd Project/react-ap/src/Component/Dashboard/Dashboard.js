import Style from "./Dashboard.module.css";
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import SecurityIcon from '@mui/icons-material/Security';
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';

export default ()=>{
  return <>


<div className={Style.main}>
  <Fade left>

  <div className={Style.divimg}></div>
  </Fade>
              {/* IMAGE  */}
<Rotate bottom right>
   <div className={Style.divmix}>
<p className={Style.Core}>Core Features</p>
<h1 className={Style.Best}>Best Bussines <br/>Software Solution</h1>
<div className={Style.iconDiv}>
<div className={Style.icon}> <GoogleIcon/> </div>
<div className={Style.icon}> <GitHubIcon/> </div>
<div className={Style.icon}> <SecurityIcon/> </div>
   </div>
<h3>IT includes several layers of physical equipment (hardware), virtualization, management systems, automation tools, operating systems, other system software.

   </h3>
   
   <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
            <dt className="sr-only">Reviews</dt>
            <dd className="text-indigo-600 flex items-center dark:text-indigo-400">
              <svg width={24} height={24} fill="none" aria-hidden="true" className="mr-1 stroke-current dark:stroke-indigo-500">
                <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>4.89 <span className="text-slate-400 font-normal">(128)</span></span>
            </dd>
            <dt className="sr-only">Location</dt>
           
          </dl>
  <button type="button" className="bg-indigo-600 mt-2 text-white text-sm leading-4 font-medium py-2 px-1 rounded-lg">LEARN MORE</button>


</div>
  

</Rotate>
</div>


   







  </>
}