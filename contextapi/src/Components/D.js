import React from 'react'
import { Consumer } from './Context'

function D() {
    return (
        <div>
            <Consumer>
                {
                    (data) =>
                        <div>
                            <h1> Component D</h1>
                            <h3>Employee Id : {data.empId}</h3>
                            <h3>Employee Name : {data.name}</h3>
                            <h3>Employee Salary : {data.salary}</h3>
                        </div>
                }
            </Consumer>
        </div>
    )
}

export default D
