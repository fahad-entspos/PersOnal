import { useRef ,useState} from "react"
export function Callculator(){
    //  let   one = useRef()
    //   let  two = useRef()
    //   let  three = useRef()
    //   function sum(){
    //       three.current.value = +two.current.value + +one.current.value;//   }
// let [count,setCount] = useState(0);
// function sum(){
//     count++;
//     setCount(count)
// };
// function minus(){
//     count--;
//     setCount(count)
// };
// let cities = ["FSD","LHR","ISB","JBD","KRI"];

let [students,setStudents]= useState([
    {name:"Ali",
     uni:"Agri"       },
     {name:"FaHaD",
     uni:"Chenab"       },
     {name:"Asad",
     uni:"Gc"       },
     {name:"Farzeel",
     uni:"Ucp"       }
]);
        

function addStudent(){
    let yourName = prompt("Enter Your Name");
    let uniName = prompt("Enter Your Uni Name");

    students.push({
        name:yourName,
        uni:uniName,
    })
    setStudents([...students]);
    console.log(students);
}

    return <div>
        <table>
            <tr>
                <td>Name</td>
                <td>uni</td>
            </tr>
           { students.map((student,index)=>{
                return <tr>
                    <td>{student.name}</td>
                    <td>{student.uni}</td>
                    <td onClick={()=>{
                        students.splice(index,1);
                        setStudents([...students])


                    }}><button>Delete</button></td>
                    <td><button
                     onClick={()=>{
                        student.name = prompt("Enter Your   Name")
                        student.uni = prompt("Enter Your   Name")
                        setStudents([...students])


                    }}
                    >Edit</button></td>
                </tr>
            })
            }

        </table>
        <button onClick={addStudent}>Add Student </button>
    </div>
    // <div>
    //     <ol>
    //     {
    //         cities.map(function(city){
    //             return <li>{city}</li>
    //         })
    //     }
    //     </ol>
    // </div>
    //  <div>
    //     <h1>{count}</h1>
    //     <button onClick={sum}>Add Number</button>
    //     <button onClick={minus}>Minus</button>
    // </div>
    // <div>
    // <input type="number" ref={one} />
    // <input type="number" ref={two}/>
    // <input type="number" ref={three}/>
    // <button onClick={sum}>Sum</button>
    // </div>
}