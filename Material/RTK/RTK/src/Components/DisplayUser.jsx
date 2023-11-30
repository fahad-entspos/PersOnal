import React from 'react'
import { useSelector } from 'react-redux'
import {MdDelete} from "react-icons/all.js"
import { removeUser } from '../Store/Slice/UserSlices'
import { useDispatch } from 'react-redux'
function DisplayUser() {

const data = useSelector((state)=>{return state.users})
const dispatch = useDispatch()
const deleteUser =(id)=>{

    dispatch(removeUser(id))
}

  return <>
  {
    data.map((user,id)=>{
        return <li style={{display:"flex", justifyContent:"space-around"}} key={id}>
            {user}
            <button    onClick={()=>{deleteUser(id)}} className='btn btn-delete'>
            <MdDelete className="delete-icon" />
            </button>
        </li>

    })
  }
  </>
}

export default DisplayUser