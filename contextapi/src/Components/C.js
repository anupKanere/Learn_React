import React from 'react'
import { Consumer } from './Context'

function C() {
    return (
        <div>
            <Consumer>
                {
                    (data) => 
                    <div>
                        <h1> Component C : EmpSal {data.salary} </h1>
                    </div>
                }
            </Consumer>
        </div>
    )
}

export default C
