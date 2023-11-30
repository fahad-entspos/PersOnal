import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteUsers } from '../Store/Slice/UserSlices';
function DeleteAllUser() {
    const dispatch = useDispatch();
    const removeUsers = ()=>{
        dispatch(deleteUsers());
    }
  return (
<button className='btn' style={{marginTop:"2rem",}} onClick={removeUsers}>Clear ALL Users</button>  )
}

export default DeleteAllUser