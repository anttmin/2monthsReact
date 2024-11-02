import React from 'react'

const People = (props) => {
   let name = props.name;
   let live = props.live;
   let email = props.email
  return (
    <div className='ml-[6rem]'>
        <p className='p-5 bg-white shadow-md   w-[200px] mb-2 rounded-md text-black'>
            <span>Name: {name}</span><br/>
            <span>Live: {live}</span><br/>
            <span>email:{email}</span>
        </p>
    </div>
  )
}

export default People