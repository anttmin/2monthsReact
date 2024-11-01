import React from 'react'
import { useState } from 'react'

const Stundent = (props) => {
    let [live,setLive] = useState(props.live);
    const[name,setName] = useState(props.name)

  return (
    <div className='m-3 flex'>
        <div className='bg-slate-500 w-[200px] h-[100%] text-center text-white  py-6 rounded-md'>
            <p>Name: {name.toUpperCase()}</p>
            <p>Live: {live}</p>
        </div>
    </div>
  )
}

export default Stundent