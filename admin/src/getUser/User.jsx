import React, { useEffect, useState } from 'react'
import "./user.css"

const User = () => {
const [users, setUsers] = useState([])


  return (
    <div className='userTable'>
        <button type="button" class="btn btn-secondary"><i class="fa-solid fa-user"></i></button>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th scope='col'>Number</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>Reason</th>
                    <th scope='col'>Update</th>
                    <th scope='col'>Action</th>
                    
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>John Doe</td>
                    <td>johndoe@gmail.com</td>
                    <td>Big pothole in the N1</td>
                    <td>Pending</td>
                    <td className='actionBtn'> <button type="button" class="btn btn-info"><i class="fa-solid fa-pen-to-square"></i></button>
  |<button type="button" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
};

export default User;