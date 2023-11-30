import { useRef, useState } from "react";

// function getData(){

//     return ["khurram", "rameez"];

// }

// let [myName, friendName] = getData();

// MV VM
// Model View View Model
// Data   UI   UI   Data

export default function Calculator(){

    let [students, setStudents  ] = useState([
        {
            name:"ali",
            uni:"AGRI"
        },
        {
            name:"khurram",
            uni:"GC"
        },
        {
            name:"rameez",
            uni:"VU"
        }
    ])
    
    const addStudent = ()=>{

        let name = prompt("Enter name");
        let uni = prompt("Enter uni");

        students.push({
            name,
            uni
        })

        setStudents([...students]);  

        console.log(students)

    }


    return <div>
    
    <table border="1">
        <tr>
            <th>Name</th>
            <th>University</th>
        </tr>

        {
            students.map((student, meraIndex)=>{
                return <tr>
                    <td>{student.name}</td>
                    <td>{student.uni}</td>
                    <td><button onClick={()=>{

                        students.splice(meraIndex, 1);

                        setStudents([...students]);

                    }}>Delete</button></td>
                     <td><button onClick={()=>{

                    student.name = prompt("new name ente rkaren");
                    student.uni = prompt("new uni ente rkaren");

                    setStudents([...students]);

                    }}>Edit</button></td>
                </tr>
            })
        }
    </table>

    <button onClick={addStudent}>Add Student</button>
      
         
         
    </div>


}