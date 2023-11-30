import { useSelector } from "react-redux"
import Ad from '../ad/ad';
export default ()=>{

    let ads =  useSelector((store)=>{
        return store.adReducer.ads;
    });

    return <div className="flex">
        {
            ads.map((ad)=>{
                return <Ad {...ad} />;
            })
        }

    </div>


}