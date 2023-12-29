import React, { useState } from 'react'
import { Provider } from './Context'
import B from './B'
import C from './C'
import D from './D'

function A() {

    const [obj , setObj] = useState({
        name : 'Anup',
        empId : '25',
        salary : '60000' 
    })
  return (
    <div>
      <h1>Component A  : EmpName  : {obj.name}</h1>
      <Provider value={obj}>
        <B></B>
        <C></C>
        <D></D>
      </Provider>
    </div>
  )
}

export default A
