import './videoTile.css';
import {Link} from 'react-router-dom'

export default (props)=>{

    return <Link to={"/play/"+props.id}>
                <div className="video-tile">
                        <img src={"http://img.youtube.com/vi/"+props.id+"/0.jpg"} alt="" />
                        <h4>{props.title.slice(0, 15)}</h4>
                </div>
    </Link>

}