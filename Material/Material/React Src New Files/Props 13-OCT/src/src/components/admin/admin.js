
export default function(props){


    return <table border="1">
    <tr>
        <th>Name</th>
        <th>University</th>
    </tr>

    {
        props.abc1.map((student, meraIndex)=>{
            return <tr>
                <td>{student.name}</td>
                <td>{student.password}</td>
                <td><button onClick={()=>{

                    props.abc1.splice(meraIndex, 1);

                    props.setStudents([...props.abc1]);

                }}>Delete</button>
                </td>
                 <td><button onClick={()=>{

                student.name = prompt("new name ente rkaren");
                student.password = prompt("new uni ente rkaren");

                props.setStudents([...props.abc1]);

                }}>Edit</button></td>
            </tr>
        })
    }
</table>


}