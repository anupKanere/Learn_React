import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
    return (
        <div className='bg-gray-500 content-center rounded-3xl py-1 text-white font-bold '>User : {userid} </div>
    )
}   

export default User
