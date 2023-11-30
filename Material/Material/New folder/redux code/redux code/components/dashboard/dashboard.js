
import { Link, useParams } from "react-router-dom"
export default (props)=>{

    // let myParams = useParams();
    // myParams.user

    return <div>
            <table>
                {
                    props.users.map((user)=>{
                        return <tr>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>
                                <Link to={"/edit/"+user.name}>Edit</Link>
                            </td>
                        </tr>
                    })
                }
                </table>
        </div>

}