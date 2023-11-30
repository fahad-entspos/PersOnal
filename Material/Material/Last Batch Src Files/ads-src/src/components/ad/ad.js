import './ad.css';
import store from '../../store/store';

export default (props)=>{

    return <div className="ad">
        <img src={props.picture} />
        <h4>{props.name} {props.price}</h4>
        <button onClick={()=>{

        store.dispatch({
            type:"AD_DELETED",
            id:props.id
        });

        }}>Delete</button>
        </div>


}