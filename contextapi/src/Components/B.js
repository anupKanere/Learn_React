import React from 'react'
import { Consumer } from './Context'

function B() {
  return (
    <div>
    <Consumer>{
        (data) =>
        <div>
            <h1>Component B : EmpId : {data.empId}</h1>
        </div>
    }
    
    </Consumer>
     
    </div>
  )
}

export default B
