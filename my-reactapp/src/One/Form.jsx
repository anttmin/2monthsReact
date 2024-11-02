import React, { useState } from 'react'


const Form = (props) => {
  let [name, setText] = useState('');
  let [live, setLive] = useState('');
  let [email, setMail] = useState('')
  let ChangeText = (e) => {
    setText(e.target.value.replaceAll(' ', ''))
  }

  let ChangeLive = (e) => {
    setLive(e.target.value.replaceAll(' ', ''))
  }

  let ChangeMail = (e) => {
    setMail(e.target.value.replaceAll(' ', ''))
  }

 

  let ShowData = (e) => {
    let data = {
      name,
      live,
      email
    }
    for (let item in data) {
      if (data[item]) {
        props.addNewMember(data);
      } else{
        alert('Please Fill valid Data');
        return;
      }
        
      

    }
    e.preventDefault();

  }

  return (
    <div>
      <div className="w-full max-w-[24rem] p-[1rem]">
        <form className="bg-white shadow-md rounded px-9 pt-6 pb-8 mb-4" id='form' name='form' onSubmit={ShowData}>
          <div className="mb-4">
            <p className=" text-gray-700 text-sm font-bold mb-2"  >
              Username
            </p>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" name='username' type="text" placeholder="Username" value={name} onChange={ChangeText} />
          </div>
          <div className="mb-4">
            <p className=" text-gray-700 text-sm font-bold mb-2" >
              Email
            </p>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="email" name='eamil' placeholder="Enter Your Email" value={email} onChange={ChangeMail} />
          </div>
          <div className="mb-6">
            <p className=" text-gray-700 text-sm font-bold mb-2" >
              Live
            </p>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name='live' type="type" placeholder="Enter Your Live" value={live} onChange={ChangeLive} />
          </div>

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none ">
            Add User
          </button>


        </form>
        <p className="text-center text-blue-500 text-xs italic">
          &copy;2024 Acnt Corp. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Form