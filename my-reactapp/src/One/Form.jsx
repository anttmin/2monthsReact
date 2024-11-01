import React, { useState } from 'react'

const Form = (props) => {
  let [name, setName] = useState('');
  let [live, setLive] = useState('')

  let trackName = (e) => {
    setName(e.target.value)
  }

  let trackLive = (e) => {
    setLive(e.target.value)
  }

  let showData = (e) => {
    const data = {
      name,
      live,
    }
    e.preventDefault();
    props.addNewMember(data)
    setLive('')
    setName('')
  }



  return (
    <div>
      <form onSubmit={showData}>
        <div className='mt-2 ml-2'>
          <input type='text' className="shadow appearance-none border rounded w-[20%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2 mt-2 ml-1 block" placeholder='Enter your Name' onChange={trackName} value={name} />
          <input type='text' className="shadow appearance-none border rounded w-[20%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2 mt-2 ml-1 block" placeholder='Entere your live' onChange={trackLive} value={live} />
        </div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mt-2 ml-2'>Add New Members</button>
      </form>
    </div>
  )
}

export default Form