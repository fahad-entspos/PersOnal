import MeraPlayer from 'react-youtube';

import { useParams } from 'react-router-dom';

export default()=>{

    let params = useParams();

    return <MeraPlayer videoId={params.playID}></MeraPlayer>

}